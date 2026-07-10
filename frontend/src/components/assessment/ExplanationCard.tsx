"use client";

import { Lightbulb } from "lucide-react";

interface ExplanationCardProps {
  explanation: string;
}

export default function ExplanationCard({
  explanation,
}: ExplanationCardProps) {
  return (
    <section className="rounded-[30px] border border-yellow-300 bg-yellow-50 p-6 shadow">

      <div className="mb-4 flex items-center gap-3">

        <Lightbulb
          size={24}
          className="text-yellow-600"
        />

        <h2 className="text-xl font-bold text-yellow-800">
          Explanation
        </h2>

      </div>

      <p className="leading-8 text-slate-700">
        {explanation}
      </p>

    </section>
  );
}