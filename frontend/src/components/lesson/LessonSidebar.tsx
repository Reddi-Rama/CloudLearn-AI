"use client";

import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}

interface LessonSidebarProps {
  courseTitle: string;
  lessons: Lesson[];
}

export default function LessonSidebar({
  courseTitle,
  lessons,
}: LessonSidebarProps) {
  return (
    <aside className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        {courseTitle}
      </h2>

      <div className="space-y-4">

        {lessons.map((lesson) => (

          <Link
            key={lesson.id}
            href={lesson.id}
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-sky-50"
          >

            {lesson.completed ? (
              <CheckCircle2
                className="text-green-600"
                size={20}
              />
            ) : (
              <Circle
                className="text-slate-400"
                size={20}
              />
            )}

            <span className="text-slate-700">
              {lesson.title}
            </span>

          </Link>

        ))}

      </div>

    </aside>
  );
}