"use client";

import { motion } from "framer-motion";

const clouds = [
  {
    top: "8%",
    left: "-15%",
    width: 180,
    duration: 42,
    delay: 0,
  },
  {
    top: "22%",
    left: "-25%",
    width: 250,
    duration: 60,
    delay: 4,
  },
  {
    top: "45%",
    left: "-18%",
    width: 160,
    duration: 48,
    delay: 8,
  },
  {
    top: "68%",
    left: "-22%",
    width: 220,
    duration: 70,
    delay: 2,
  },
];

export default function AnimatedClouds() {
  return (
    <>
      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          initial={{
            x: "-25vw",
          }}
          animate={{
            x: "125vw",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: cloud.duration,
            delay: cloud.delay,
          }}
          className="absolute opacity-25"
          style={{
            top: cloud.top,
            left: cloud.left,
          }}
        >
          <div
            style={{
              width: cloud.width,
              height: cloud.width * 0.45,
            }}
            className="relative"
          >
            <div className="absolute bottom-0 h-20 w-full rounded-full bg-white shadow-xl" />

            <div className="absolute left-8 top-0 h-16 w-16 rounded-full bg-white" />

            <div className="absolute left-16 top-[-18px] h-20 w-20 rounded-full bg-white" />

            <div className="absolute right-10 top-[-8px] h-16 w-16 rounded-full bg-white" />
          </div>
        </motion.div>
      ))}
    </>
  );
}