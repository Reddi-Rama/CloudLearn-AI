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
      className={`rounded-[30px] border p-8 text-center shadow-lg ${
        passed
          ? "border-green-200 bg-green-50 dark:border-green-900/60 dark:bg-green-950/30"
          : "border-red-200 bg-red-50 dark:border-red-900/60 dark:bg-red-950/30"
      }`}
    >
      {passed ? (
        <CheckCircle2
          size={70}
          className="mx-auto text-green-600 dark:text-green-400"
        />
      ) : (
        <Award
          size={70}
          className="mx-auto text-red-500 dark:text-red-400"
        />
      )}

      <h2 className="mt-6 text-3xl font-black text-slate-900 dark:text-white">
        {passed
          ? "Assessment Passed"
          : "Assessment Not Passed"}
      </h2>

      <p className="mt-4 text-slate-600 dark:text-slate-400">
        {passed
          ? "Congratulations! You can continue to the next lesson."
          : "Review the lesson and try again."}
      </p>
    </div>
  );
}