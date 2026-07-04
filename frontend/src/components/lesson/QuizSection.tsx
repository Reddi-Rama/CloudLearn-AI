"use client";

import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";

interface QuizSectionProps {
  questions?: number;
  onClick?: () => void;
}

export default function QuizSection({
  questions = 4,
  onClick,
}: QuizSectionProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="flex items-center gap-4 rounded-3xl border border-violet-200 bg-white px-8 py-5 shadow-lg"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
        <ClipboardCheck
          size={28}
          className="text-violet-600"
        />
      </div>

      <div className="text-left">
        <h3 className="font-semibold text-slate-900">
          Lesson Quiz
        </h3>

        <p className="text-sm text-slate-500">
          {questions} Questions • 75% to Pass
        </p>
      </div>
    </motion.button>
  );
}