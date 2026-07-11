"use client";

import Link from "next/link";
import {
  BookOpen,
  Clock3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

interface PathCardProps {
  title: string;
  description: string;
  lessons: number;
  duration: string;
  level: string;
  progress?: number;
}

export default function PathCard({
  title,
  description,
  lessons,
  duration,
  level,
  progress = 0,
}: PathCardProps) {
  return (
    <div className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl">

      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        {level}
      </span>

      <h2 className="mt-6 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3">
          <BookOpen size={18} />
          {lessons} Lessons
        </div>

        <div className="flex items-center gap-3">
          <Clock3 size={18} />
          {duration}
        </div>

        <div className="flex items-center gap-3">
          <TrendingUp size={18} />
          Progress {progress}%
        </div>

      </div>

      <div className="mt-8 h-3 rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-sky-500"
          style={{ width: `${progress}%` }}
        />

      </div>

      <Link
        href="/courses"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-600"
      >
        Start Learning

        <ArrowRight size={18} />

      </Link>

    </div>
  );
}