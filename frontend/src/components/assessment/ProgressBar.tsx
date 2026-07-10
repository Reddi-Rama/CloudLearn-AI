"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <section className="rounded-[30px] bg-white p-6 shadow-lg">

      <div className="mb-3 flex items-center justify-between">

        <h2 className="font-bold">
          Progress
        </h2>

        <span className="font-semibold">
          {current}/{total}
        </span>

      </div>

      <div className="h-3 rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </section>
  );
}