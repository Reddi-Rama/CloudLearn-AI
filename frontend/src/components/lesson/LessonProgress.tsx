"use client";

interface LessonProgressProps {
  completed: number;
  total: number;
}

export default function LessonProgress({
  completed,
  total,
}: LessonProgressProps) {

  const percentage = Math.round((completed / total) * 100);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-4 flex items-center justify-between">

        <h3 className="font-semibold text-slate-800">
          Course Progress
        </h3>

        <span className="font-bold text-sky-600">
          {percentage}%
        </span>

      </div>

      <div className="h-3 rounded-full bg-slate-200">

        <div
          style={{ width: `${percentage}%` }}
          className="h-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all"
        />

      </div>

      <p className="mt-4 text-sm text-slate-500">
        {completed} of {total} lessons completed
      </p>

    </section>
  );
}