"use client";

import { CheckCircle2 } from "lucide-react";

interface AssessmentResultProps {
  score: number;
  passed: boolean;
}

export default function AssessmentResult({
  score,
  passed,
}: AssessmentResultProps) {
  return (
    <section className="rounded-[34px] bg-white p-10 text-center shadow-xl">

      <CheckCircle2
        size={70}
        className={passed ? "mx-auto text-green-500" : "mx-auto text-red-500"}
      />

      <h2 className="mt-6 text-4xl font-black">
        {passed ? "Congratulations!" : "Assessment Completed"}
      </h2>

      <p className="mt-4 text-lg text-slate-600">
        Your Score
      </p>

      <h3 className="mt-2 text-6xl font-black text-blue-600">
        {score}%
      </h3>

    </section>
  );
}