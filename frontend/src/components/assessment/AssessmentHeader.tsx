"use client";

import {
  ClipboardCheck,
  Clock3,
  Trophy,
} from "lucide-react";

interface AssessmentHeaderProps {
  title: string;
  questions: number;
  duration: string;
}

export default function AssessmentHeader({
  title,
  questions,
  duration,
}: AssessmentHeaderProps) {
  return (
    <section
      className="
        rounded-[30px]
        border border-slate-200
        bg-white
        p-8
        text-slate-900
        shadow-lg
        transition-colors
        dark:border-slate-800
        dark:bg-slate-900
        dark:text-white
      "
    >
      <h2 className="text-3xl font-black">
        {title}
      </h2>

      <div className="mt-8 flex flex-wrap gap-8">

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <ClipboardCheck className="text-blue-600 dark:text-sky-400" />
          {questions} Questions
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Clock3 className="text-orange-500" />
          {duration}
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Trophy className="text-yellow-500" />
          Pass: 70%
        </div>

      </div>
    </section>
  );
}