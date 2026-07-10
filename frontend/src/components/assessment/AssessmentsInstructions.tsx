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
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Instructions
      </h2>

      <div className="mt-6 space-y-4">

        {instructions.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3"
          >

            <CheckCircle2
              size={20}
              className="text-green-500"
            />

            <span>{item}</span>

          </div>

        ))}

      </div>

    </section>
  );
}