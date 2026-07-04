"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NextLessonButtonProps {
  lessonNumber: number;
  onClick?: () => void;
}

export default function NextLessonButton({
  lessonNumber,
  onClick,
}: NextLessonButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="group flex flex-col items-center"
    >
      <div className="relative w-24 h-12 overflow-hidden rounded-t-full bg-gradient-to-r from-sky-500 to-indigo-600 shadow-xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-white">
            {lessonNumber}
          </span>
        </div>
      </div>

      <div className="rounded-b-2xl bg-white px-5 py-2 shadow-lg border border-slate-100">
        <div className="flex items-center gap-2 text-sky-600 font-semibold">
          Next Lesson
          <ArrowRight size={16} />
        </div>
      </div>
    </motion.button>
  );
}