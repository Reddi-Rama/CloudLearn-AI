"use client";

import { CheckCircle2 } from "lucide-react";

interface KeyPointsProps {
  points: string[];
}

export default function KeyPoints({
  points,
}: KeyPointsProps) {
  return (
    <section className="rounded-3xl border border-sky-200 bg-sky-50 p-8 shadow-sm">

      <h2 className="mb-8 text-3xl font-bold text-slate-800">
        Key Points
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

            <p className="leading-8 text-slate-700">
              {point}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}