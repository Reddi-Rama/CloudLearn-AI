"use client";

import {
  ClipboardCheck,
  Clock3,
  Trophy,
  ArrowRight,
} from "lucide-react";

interface AssessmentsCardProps {
  title?: string;
  description?: string;
  questions?: number;
  duration?: string;
  passScore?: string;
}

export default function AssessmentsCard({
  title = "Module Assessment",
  description = "Evaluate your understanding of this module before moving to the next lesson.",
  questions = 10,
  duration = "20 Minutes",
  passScore = "70%",
}: AssessmentsCardProps) {
  return (
    <section
      className="
        rounded-[32px]
        border border-slate-200
        bg-white
        p-8
        shadow-lg
        transition-colors
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            {title}
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>

        <ClipboardCheck
          size={42}
          className="text-sky-600 dark:text-sky-400"
        />

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
          <ClipboardCheck
            size={24}
            className="text-sky-600 dark:text-sky-400"
          />

          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Questions
          </p>

          <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            {questions}
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
          <Clock3
            size={24}
            className="text-orange-500"
          />

          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Duration
          </p>

          <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            {duration}
          </h3>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
          <Trophy
            size={24}
            className="text-yellow-500"
          />

          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            Pass Score
          </p>

          <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
            {passScore}
          </h3>
        </div>

      </div>

      <div className="mt-8">
        <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-7 py-4 font-semibold text-white transition hover:scale-[1.02]">
          Start Assessment
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}