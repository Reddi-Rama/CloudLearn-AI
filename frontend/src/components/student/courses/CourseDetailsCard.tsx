"use client";

import {
  BookOpen,
  Clock3,
  Trophy,
  BarChart3,
} from "lucide-react";

interface Props {
  title: string;
  lessons: number;
  duration: string;
  level: string;
  progress: number;
}

export default function CourseDetailsCard({
  title,
  lessons,
  duration,
  level,
  progress,
}: Props) {
  return (
    <div className="rounded-[32px] bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-black">
        {title}
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div className="flex items-center gap-3">
          <BookOpen className="text-sky-600" />
          <span>{lessons} Lessons</span>
        </div>

        <div className="flex items-center gap-3">
          <Clock3 className="text-sky-600" />
          <span>{duration}</span>
        </div>

        <div className="flex items-center gap-3">
          <BarChart3 className="text-sky-600" />
          <span>{level}</span>
        </div>

        <div className="flex items-center gap-3">
          <Trophy className="text-yellow-500" />
          <span>{progress}% Completed</span>
        </div>

      </div>

      <div className="mt-8 h-3 rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}