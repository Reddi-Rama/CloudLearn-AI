"use client";

import Link from "next/link";
import { BookOpen, Clock3 } from "lucide-react";

interface Props {
  id: number;
  title: string;
  instructor: string;
  lessons: number;
  completed: number;
  duration: string;
  level: string;
  progress: number;
}

export default function CourseCard(props: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <span className="rounded-full bg-sky-100 px-4 py-2 text-sm text-sky-600">
        {props.level}
      </span>

      <h2 className="mt-5 text-2xl font-bold">
        {props.title}
      </h2>

      <p className="mt-2 text-slate-500">
        {props.instructor}
      </p>

      <div className="mt-6 flex gap-6">

        <div className="flex items-center gap-2">
          <BookOpen size={18} />
          {props.lessons}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={18} />
          {props.duration}
        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between">

          <span>Progress</span>

          <span>{props.progress}%</span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-slate-200">

          <div
            className="h-3 rounded-full bg-sky-600"
            style={{
              width: `${props.progress}%`,
            }}
          />

        </div>

      </div>

      <Link
        href={`/courses/${props.id}`}
        className="mt-8 inline-block rounded-xl bg-sky-600 px-6 py-3 text-white"
      >
        Resume Course
      </Link>

    </div>
  );
}