"use client";

import { CheckCircle2 } from "lucide-react";

interface KeyPointsProps {
  points: string[];
}

export default function KeyPoints({
  points,
}: KeyPointsProps) {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Key Takeaways
      </h2>

      <div className="mt-6 space-y-5">

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