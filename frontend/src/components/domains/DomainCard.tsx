"use client";

import Link from "next/link";
import { Clock3, BookOpen, ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  lessons: number;
  duration: string;
  level: string;
  icon: any;
}

export default function DomainCard({
  title,
  description,
 lessons,
  duration,
  level,
  icon: Icon,
}: Props) {
  return (
    <div className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100">

        <Icon
          size={32}
          className="text-sky-600"
        />

      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        {description}
      </p>

      <div className="mt-8 space-y-3">

        <div className="flex items-center gap-3">

          <BookOpen size={18} />

          {lessons} Lessons

        </div>

        <div className="flex items-center gap-3">

          <Clock3 size={18} />

          {duration}

        </div>

      </div>

      <div className="mt-8 flex items-center justify-between">

        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">

          {level}

        </span>

        <Link
          href="/courses"
          className="flex items-center gap-2 font-semibold text-sky-600"
        >
          Explore

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>
  );
}