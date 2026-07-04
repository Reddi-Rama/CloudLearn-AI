"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  GraduationCap,
  BookOpen,
  Cloud,
  Code2,
  BrainCircuit,
} from "lucide-react";

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto flex h-[600px] w-full max-w-[560px] items-center justify-center">

      {/* Background Glow */}

      <div className="absolute h-[460px] w-[460px] rounded-full bg-blue-200/30 blur-[120px]" />

      {/* Center Circle */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass-card relative flex h-72 w-72 items-center justify-center rounded-full"
      >
        <Laptop
          size={90}
          className="text-blue-600"
        />
      </motion.div>

      {/* Graduation */}

      <motion.div
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="glass-card absolute left-4 top-10 flex h-20 w-20 items-center justify-center rounded-3xl"
      >
        <GraduationCap
          size={34}
          className="text-blue-600"
        />
      </motion.div>

      {/* Book */}

      <motion.div
        animate={{
          y: [0, 14, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="glass-card absolute right-0 top-24 flex h-20 w-20 items-center justify-center rounded-3xl"
      >
        <BookOpen
          size={32}
          className="text-indigo-600"
        />
      </motion.div>

      {/* Code */}

      <motion.div
        animate={{
          y: [0, -16, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
        className="glass-card absolute bottom-20 left-2 flex h-20 w-20 items-center justify-center rounded-3xl"
      >
        <Code2
          size={32}
          className="text-sky-600"
        />
      </motion.div>

      {/* AI */}

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="glass-card absolute bottom-8 right-10 flex h-20 w-20 items-center justify-center rounded-3xl"
      >
        <BrainCircuit
          size={32}
          className="text-violet-600"
        />
      </motion.div>

      {/* Cloud 1 */}

      <motion.div
        animate={{
          x: [-12, 12, -12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-10 top-48"
      >
        <Cloud
          size={58}
          className="text-white drop-shadow-xl"
        />
      </motion.div>

      {/* Cloud 2 */}

      <motion.div
        animate={{
          x: [12, -12, 12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-12 bottom-40"
      >
        <Cloud
          size={52}
          className="text-white drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}