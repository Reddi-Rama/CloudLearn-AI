"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

export default function MouseGlow() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /*
   * Disable the sparkle effect on content-heavy reading pages.
   */
  const isLearningPathPage =
    pathname === "/learning-paths" ||
    pathname.startsWith("/learning-paths/");

  const parts = pathname.split("/").filter(Boolean);

  const isCourseLessonPage =
    parts.length >= 4 &&
    parts[0] === "courses";

  const disableEffect =
    isLearningPathPage || isCourseLessonPage;

  useEffect(() => {
    if (disableEffect) {
      return;
    }

    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const particles: Particle[] = [];

    let mouseX = 0;
    let mouseY = 0;

    let lastMouseX = 0;
    let lastMouseY = 0;

    let animationFrame = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 4 + Math.random() * 8;

      particles.push({
        x: mouseX + Math.cos(angle) * distance,
        y: mouseY + Math.sin(angle) * distance,

        vx: (Math.random() - 0.5) * 0.45,
        vy: -0.25 - Math.random() * 0.8,

        life: 0,
        maxLife: 20 + Math.random() * 20,

        size: 1.2 + Math.random() * 1.8,

        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const distance = Math.hypot(
        mouseX - lastMouseX,
        mouseY - lastMouseY
      );

      if (distance > 8) {
        createParticle();

        if (distance > 25) {
          createParticle();
        }
      }

      lastMouseX = mouseX;
      lastMouseY = mouseY;
    };

    const drawSparkle = (
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      context.save();

      context.translate(x, y);
      context.rotate(rotation);
      context.globalAlpha = opacity;

      context.beginPath();

      context.moveTo(0, -size * 2.2);
      context.lineTo(size * 0.45, -size * 0.45);
      context.lineTo(size * 2.2, 0);
      context.lineTo(size * 0.45, size * 0.45);
      context.lineTo(0, size * 2.2);
      context.lineTo(-size * 0.45, size * 0.45);
      context.lineTo(-size * 2.2, 0);
      context.lineTo(-size * 0.45, -size * 0.45);
      context.closePath();

      context.fillStyle = "rgba(56, 189, 248, 0.75)";
      context.fill();

      context.restore();
    };

    const animate = () => {
      context.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vy += 0.012;

        particle.rotation += particle.rotationSpeed;
        particle.life += 1;

        const progress =
          particle.life / particle.maxLife;

        const opacity = Math.max(
          0,
          1 - progress
        );

        drawSparkle(
          particle.x,
          particle.y,
          particle.size,
          particle.rotation,
          opacity
        );

        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1);
        }
      }

      if (particles.length > 70) {
        particles.splice(
          0,
          particles.length - 70
        );
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);

      particles.length = 0;
    };
  }, [pathname, disableEffect]);

  if (disableEffect) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-[9999]
        h-full
        w-full
      "
    />
  );
}