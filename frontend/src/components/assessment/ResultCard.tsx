"use client";

interface ResultCardProps {
  correct: number;
  incorrect: number;
  total: number;
}

export default function ResultCard({
  correct,
  incorrect,
  total,
}: ResultCardProps) {
  return (
    <section
      className="
        rounded-[30px]
        border border-slate-200
        bg-white
        p-8
        shadow-lg
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Assessment Summary
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-900/60 dark:bg-green-950/30">
          <h3 className="text-4xl font-black text-green-600 dark:text-green-400">
            {correct}
          </h3>

          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Correct
          </p>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900/60 dark:bg-red-950/30">
          <h3 className="text-4xl font-black text-red-600 dark:text-red-400">
            {incorrect}
          </h3>

          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Incorrect
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center dark:border-blue-900/60 dark:bg-blue-950/30">
          <h3 className="text-4xl font-black text-blue-600 dark:text-blue-400">
            {total}
          </h3>

          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Total Questions
          </p>
        </div>

      </div>
    </section>
  );
}