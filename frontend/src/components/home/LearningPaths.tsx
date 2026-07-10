"use client";

import Link from "next/link";
import { ArrowRight, Clock3, BookOpen } from "lucide-react";

interface LearningPathCardProps {
  title: string;
  description: string;
  lessons: number;
  duration: string;
  level: string;
  progress?: number;
}

export default function LearningPathCard({
  title,
  description,
  lessons,
  duration,
  level,
  progress = 0,
}: LearningPathCardProps) {
  return (
    <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        {level}
      </span>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      <div className="mt-8 space-y-3">

        <div className="flex items-center gap-3 text-slate-600">
          <BookOpen size={18} />
          {lessons} Lessons
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <Clock3 size={18} />
          {duration}
        </div>

      </div>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="h-3 rounded-full bg-slate-200">
          <div
            className="h-3 rounded-full bg-sky-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

      </div>

      <Link
        href="/learning-paths"
        className="mt-8 flex items-center gap-2 font-semibold text-sky-600"
      >
        Continue Learning

        <ArrowRight size={18} />

      </Link>

    </div>
  );
}