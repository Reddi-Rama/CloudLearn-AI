"use client";

interface ProgressSummaryProps {
  completed: number;
}

export default function ProgressSummary({
  completed,
}: ProgressSummaryProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-900">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Progress Summary
      </h2>

      <p className="mt-3 text-3xl font-black text-blue-600 dark:text-blue-400">
        {completed}
      </p>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Completed items
      </p>
    </section>
  );
}
