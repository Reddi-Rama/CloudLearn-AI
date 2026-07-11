"use client";

interface LessonCardProps {
  title: string;
  duration: string;
}

export default function LessonCard({
  title,
  duration,
}: LessonCardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-slate-500">
        {duration}
      </p>
    </div>
  );
}