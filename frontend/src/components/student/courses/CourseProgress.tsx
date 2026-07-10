"use client";

interface CourseProgressProps {
  completed: number;
  totalLessons: number;
}

export default function CourseProgress({
  completed,
  totalLessons,
}: CourseProgressProps) {
  const progress =
    Math.round((completed / totalLessons) * 100);

  return (
    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-slate-600">
          Course Progress
        </span>

        <span className="text-sm font-bold text-sky-600">
          {progress}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <p className="text-sm text-slate-500">

        {completed} of {totalLessons} lessons completed

      </p>

    </div>
  );
}