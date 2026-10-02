"use client";

interface ScoreCircleProps {
  score: number;
}

export default function ScoreCircle({
  score,
}: ScoreCircleProps) {
  return (
    <div className="flex flex-col items-center justify-center">

      <div
        className="
          flex
          h-44
          w-44
          items-center
          justify-center
          rounded-full
          border-[12px]
          border-blue-600
          bg-blue-50
          shadow-lg
          dark:border-sky-500
          dark:bg-sky-950/40
        "
      >
        <span className="text-5xl font-black text-blue-600 dark:text-sky-400">
          {score}%
        </span>
      </div>

      <p className="mt-5 text-lg font-semibold text-slate-700 dark:text-slate-300">
        Final Score
      </p>
    </div>
  );
}