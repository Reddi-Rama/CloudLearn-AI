"use client";

import { CheckCircle2, XCircle } from "lucide-react";

interface ResultCardProps {
  score: number;
  total: number;
}

export default function ResultCard({
  score,
  total,
}: ResultCardProps) {
  const passed = score >= 3;

  return (
    <section className="rounded-[32px] bg-white p-10 shadow-xl">

      <div className="text-center">

        {passed ? (
          <CheckCircle2
            size={80}
            className="mx-auto text-green-500"
          />
        ) : (
          <XCircle
            size={80}
            className="mx-auto text-red-500"
          />
        )}

        <h2 className="mt-6 text-4xl font-bold">

          {passed ? "Congratulations!" : "Try Again"}

        </h2>

        <p className="mt-4 text-lg text-slate-600">

          You scored {score} out of {total}

        </p>

      </div>

    </section>
  );
}