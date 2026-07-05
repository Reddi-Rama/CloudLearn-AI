"use client";

import { BookOpen, Clock3, BarChart3 } from "lucide-react";

interface LessonHeaderProps {
  title: string;
  module: string;
  duration: string;
  difficulty: string;
}

export default function LessonHeader({
  title,
  module,
  duration,
  difficulty,
}: LessonHeaderProps) {
  return (
    <section className="rounded-[32px] bg-white p-8 shadow-lg">

      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        <BookOpen size={16} />
        {module}
      </div>

      <h1 className="mt-6 text-4xl font-black text-slate-900">
        {title}
      </h1>

      <div className="mt-8 flex flex-wrap gap-6">

        <div className="flex items-center gap-2 text-slate-600">
          <Clock3 size={18} />
          <span>{duration}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <BarChart3 size={18} />
          <span>{difficulty}</span>
        </div>

      </div>

    </section>
  );
}