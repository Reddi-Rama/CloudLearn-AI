"use client";

import { motion } from "framer-motion";

const clouds = [
  {
    size: "w-72 h-36",
    top: "10%",
    left: "-15%",
    duration: 45,
    delay: 0,
    opacity: "opacity-30",
  },
  {
    size: "w-96 h-44",
    top: "28%",
    left: "-20%",
    duration: 60,
    delay: 8,
    opacity: "opacity-25",
  },
  {
    size: "w-80 h-40",
    top: "60%",
    left: "-18%",
    duration: 55,
    delay: 3,
    opacity: "opacity-20",
  },
  {
    size: "w-64 h-32",
    top: "82%",
    left: "-12%",
    duration: 40,
    delay: 10,
    opacity: "opacity-20",
  },
];

export default function CloudBackground() {
  return (
    <div className="cloud-bg pointer-events-none fixed inset-0 -z-50 overflow-hidden">

      {clouds.map((cloud, index) => (

        <motion.div
          key={index}
          initial={{
            x: "-30vw",
          }}
          animate={{
            x: "130vw",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: cloud.duration,
            delay: cloud.delay,
          }}
          className={`absolute ${cloud.size} ${cloud.opacity}`}
          style={{
            top: cloud.top,
            left: cloud.left,
          }}
        >

          <div className="relative h-full w-full">

            <div className="absolute left-0 top-6 h-20 w-20 rounded-full bg-white blur-sm" />

            <div className="absolute left-12 top-0 h-28 w-28 rounded-full bg-white blur-sm" />

            <div className="absolute left-28 top-8 h-20 w-20 rounded-full bg-white blur-sm" />

            <div className="absolute bottom-0 h-16 w-full rounded-full bg-white blur-sm" />

          </div>

        </motion.div>

      ))}

    </div>
  );
}