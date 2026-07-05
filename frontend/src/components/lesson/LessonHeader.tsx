"use client";

import { BookOpen } from "lucide-react";

interface LessonHeaderProps {
  course: string;
  module: string;
  lesson: string;
  description?: string;
}

export default function LessonHeader({
  course,
  module,
  lesson,
  description,
}: LessonHeaderProps) {
  return (
    <section className="rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 to-white p-10 shadow-sm">

      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        {course}
      </span>

      <p className="mt-5 text-lg font-medium text-sky-600">
        {module}
      </p>

      <h1 className="mt-3 text-5xl font-bold text-slate-800">
        {lesson}
      </h1>

      {description && (
        <p className="mt-5 max-w-3xl leading-8 text-slate-600">
          {description}
        </p>
      )}

      <div className="mt-8 flex items-center gap-3 text-sky-600">
        <BookOpen size={22} />
        <span className="font-medium">
          Self-paced Learning
        </span>
      </div>

    </section>
  );
}