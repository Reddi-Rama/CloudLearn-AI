"use client";

import { CheckCircle2 } from "lucide-react";

interface LessonSummaryProps {
  points: string[];
}

export default function LessonSummary({
  points,
}: LessonSummaryProps) {
  return (
    <section className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-3xl font-bold text-slate-800">
        Lesson Summary
      </h2>

      <div className="space-y-5">

        {points.map((point, index) => (

          <div
            key={index}
            className="flex items-start gap-4"
          >

            <CheckCircle2
              size={22}
              className="mt-1 text-green-600"
            />

            <p className="leading-7 text-slate-700">

              {point}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}