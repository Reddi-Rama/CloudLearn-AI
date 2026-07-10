"use client";

interface CourseCardProps {
  title: string;
  instructor: string;
  lessons: number;
  progress: number;
}

export default function CourseCard({
  title,
  instructor,
  lessons,
  progress,
}: CourseCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-2 text-slate-500">{instructor}</p>

      <p className="mt-4 text-sm text-slate-600">
        {lessons} Lessons
      </p>

      <div className="mt-4 h-2 rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-sky-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 text-sm text-sky-600">
        {progress}% Completed
      </p>
    </div>
  );
}