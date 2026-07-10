"use client";

import {
  Award,
  CheckCircle2,
} from "lucide-react";

interface PassBadgeProps {
  passed: boolean;
}

export default function PassBadge({
  passed,
}: PassBadgeProps) {
  return (
    <div
      className={`rounded-[30px] p-8 text-center shadow-lg ${
        passed
          ? "bg-green-50"
          : "bg-red-50"
      }`}
    >

      {passed ? (

        <CheckCircle2
          size={70}
          className="mx-auto text-green-600"
        />

      ) : (

        <Award
          size={70}
          className="mx-auto text-red-500"
        />

      )}

      <h2 className="mt-6 text-3xl font-black">

        {passed
          ? "Assessment Passed"
          : "Assessment Not Passed"}

      </h2>

      <p className="mt-4 text-slate-600">

        {passed
          ? "Congratulations! You can continue to the next lesson."
          : "Review the lesson and try again."}

      </p>

    </div>
  );
}