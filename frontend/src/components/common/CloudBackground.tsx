"use client";

import { motion } from "framer-motion";

const clouds = [
  { top: "5%", left: "-10%", size: 70, duration: 45, delay: 0 },
  { top: "12%", left: "20%", size: 55, duration: 55, delay: 5 },
  { top: "18%", left: "65%", size: 65, duration: 48, delay: 2 },
  { top: "30%", left: "-15%", size: 85, duration: 60, delay: 8 },
  { top: "42%", left: "35%", size: 60, duration: 42, delay: 3 },
  { top: "55%", left: "75%", size: 75, duration: 50, delay: 6 },
  { top: "68%", left: "-12%", size: 65, duration: 58, delay: 9 },
  { top: "80%", left: "18%", size: 80, duration: 52, delay: 4 },
  { top: "90%", left: "70%", size: 55, duration: 46, delay: 1 },
  { top: "25%", left: "90%", size: 45, duration: 38, delay: 7 },
];

export default function BackgroundClouds() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {clouds.map((cloud, index) => (

        <motion.div
          key={index}
          initial={{
            x: -150,
            opacity: 0.18,
          }}
          animate={{
            x: ["0vw", "120vw"],
            y: [0, -12, 10, -6, 0],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "linear",
            delay: cloud.delay,
          }}
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.size,
            height: cloud.size * 0.6,
          }}
          className="absolute"
        >

          <Cloud />

        </motion.div>

      ))}

    </div>
  );
}

function Cloud() {
  return (
    <div className="relative h-full w-full">

      <div className="absolute bottom-0 h-[55%] w-full rounded-full bg-white/70 blur-[1px]" />

      <div className="absolute left-[10%] top-[22%] h-[50%] w-[38%] rounded-full bg-white/70" />

      <div className="absolute left-[34%] top-0 h-[60%] w-[36%] rounded-full bg-white/70" />

      <div className="absolute right-[8%] top-[22%] h-[50%] w-[38%] rounded-full bg-white/70" />

    </div>
  );
}