"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LearningPathCardProps {
  title: string;
  description: string;
  lessons: number;
  level: string;
  href: string;
}

export default function LearningPathCard({
  title,
  description,
  lessons,
  level,
  href,
}: LearningPathCardProps) {
  return (
    <div className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        {level}
      </span>

      <h3 className="mt-6 text-2xl font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between">

        <span className="text-sm font-medium text-slate-500">
          {lessons} Lessons
        </span>

        <Link
          href={href}
          className="flex items-center gap-2 font-semibold text-sky-600 hover:text-sky-700"
        >
          Explore

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>
  );
}