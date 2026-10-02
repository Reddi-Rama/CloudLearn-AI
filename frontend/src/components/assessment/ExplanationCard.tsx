"use client";

import { Lightbulb } from "lucide-react";

interface ExplanationCardProps {
  explanation: string;
}

export default function ExplanationCard({
  explanation,
}: ExplanationCardProps) {
  return (
    <section
      className="
        rounded-[30px]
        border
        border-yellow-300
        bg-yellow-50
        p-6
        shadow
        dark:border-yellow-900/70
        dark:bg-yellow-950/30
      "
    >
      <div className="mb-4 flex items-center gap-3">

        <Lightbulb
          size={24}
          className="text-yellow-600 dark:text-yellow-400"
        />

        <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-300">
          Explanation
        </h2>

      </div>

      <p className="leading-8 text-slate-700 dark:text-slate-300">
        {explanation}
      </p>
    </section>
  );
}