"use client";

import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

type Props = {
  title: string;
  modules: number;
  lessons: number;
  slug: string;
};

export default function CourseCard({
  title,
  modules,
  lessons,
  slug,
}: Props) {
  return (
    <Link href={`/courses/${slug}`}>

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

          <BookOpen
            className="text-blue-600"
            size={30}
          />

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 text-slate-500">
          {modules} Modules
        </p>

        <p className="text-slate-500">
          {lessons} Lessons
        </p>

        <div className="mt-8 flex items-center text-blue-600 font-semibold">

          Start Learning

          <ArrowRight
            className="ml-2 transition group-hover:translate-x-2"
            size={18}
          />

        </div>

      </div>

    </Link>
  );
}