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
    <section
      className="
        rounded-[30px]
        border border-slate-200
        bg-white
        p-6
        shadow-lg
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-bold text-slate-900 dark:text-white">
          Progress
        </h2>

        <span className="font-semibold text-slate-700 dark:text-slate-300">
          {current}/{total}
        </span>
      </div>

      <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700">
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