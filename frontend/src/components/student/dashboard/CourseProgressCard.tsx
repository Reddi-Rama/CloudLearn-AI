"use client";

interface Props {
  title: string;
  progress: number;
}

export default function CourseProgressCard({
  title,
  progress,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-md">

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <span className="font-semibold text-sky-600">
          {progress}%
        </span>

      </div>

      <div className="mt-5 h-3 rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-sky-600"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
}