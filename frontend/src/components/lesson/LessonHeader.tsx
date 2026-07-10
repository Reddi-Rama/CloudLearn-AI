"use client";

import { BookOpen, Clock3, Layers } from "lucide-react";

interface LessonHeaderProps {
  title?: string;
  module?: string;
  duration?: string;
  lesson?: number;
}

export default function LessonHeader({
  title = "HTML Introduction",
  module = "Frontend Development",
  duration = "20 Minutes",
  lesson = 1,
}: LessonHeaderProps) {
  return (
    <section className="rounded-[32px] bg-gradient-to-r from-sky-600 via-cyan-500 to-indigo-600 p-10 text-white shadow-xl">

      <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
        {module}
      </span>

      <h1 className="mt-6 text-5xl font-black">
        {title}
      </h1>

      <div className="mt-8 flex flex-wrap gap-8">

        <div className="flex items-center gap-2">
          <BookOpen size={20}/>
          Lesson {lesson}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={20}/>
          {duration}
        </div>

        <div className="flex items-center gap-2">
          <Layers size={20}/>
          Beginner
        </div>

      </div>

    </section>
  );
}