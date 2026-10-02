"use client";

import { CheckCircle2 } from "lucide-react";

const instructions = [
  "Read every question carefully.",
  "Choose only one answer.",
  "Questions cannot be skipped.",
  "Submit before the timer ends.",
];

export default function AssessmentsInstructions() {
  return (
    <section
      className="
        rounded-[30px]
        border border-slate-200
        bg-white
        p-8
        shadow-lg
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Instructions
      </h2>

      <div className="mt-6 space-y-4">

        {instructions.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
          >
            <CheckCircle2
              size={20}
              className="shrink-0 text-green-500"
            />

            <span>{item}</span>
          </div>
        ))}

      </div>
    </section>
  );
}