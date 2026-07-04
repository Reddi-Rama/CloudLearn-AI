"use client";

import { motion } from "framer-motion";

const clouds = [
  {
    id: 1,
    top: "8%",
    width: 220,
    height: 90,
    duration: 55,
    delay: 0,
    opacity: 0.8,
    blur: "blur-sm",
  },
  {
    id: 2,
    top: "18%",
    width: 180,
    height: 70,
    duration: 65,
    delay: 10,
    opacity: 0.75,
    blur: "blur-sm",
  },
  {
    id: 3,
    top: "32%",
    width: 260,
    height: 100,
    duration: 75,
    delay: 5,
    opacity: 0.65,
    blur: "blur-md",
  },
  {
    id: 4,
    top: "52%",
    width: 210,
    height: 85,
    duration: 60,
    delay: 20,
    opacity: 0.8,
    blur: "blur-sm",
  },
  {
    id: 5,
    top: "70%",
    width: 300,
    height: 110,
    duration: 85,
    delay: 15,
    opacity: 0.6,
    blur: "blur-lg",
  },
  {
    id: 6,
    top: "82%",
    width: 170,
    height: 70,
    duration: 50,
    delay: 25,
    opacity: 0.7,
    blur: "blur-sm",
  },
];

function Cloud({
  top,
  width,
  height,
  duration,
  delay,
  opacity,
  blur,
}: {
  top: string;
  width: number;
  height: number;
  duration: number;
  delay: number;
  opacity: number;
  blur: string;
}) {
  return (
    <motion.div
      initial={{
        x: "-25vw",
      }}
      animate={{
        x: "125vw",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration,
        delay,
      }}
      className="absolute pointer-events-none"
      style={{
        top,
        opacity,
      }}
    >
      <div
        className={`relative ${blur}`}
        style={{
          width,
          height,
        }}
      >
        {/* Main */}
        <div className="absolute inset-0 rounded-full bg-white shadow-2xl" />

        {/* Left */}
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: width * 0.45,
            height: height * 0.75,
            left: -width * 0.08,
            top: height * 0.18,
          }}
        />

        {/* Right */}
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: width * 0.42,
            height: height * 0.7,
            right: -width * 0.06,
            top: height * 0.22,
          }}
        />

        {/* Top */}
        <div
          className="absolute rounded-full bg-white"
          style={{
            width: width * 0.42,
            height: height * 0.75,
            left: width * 0.28,
            top: -height * 0.2,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function MovingClouds() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <Cloud key={cloud.id} {...cloud} />
      ))}
    </div>
  );
}