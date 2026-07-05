"use client";

import { CheckCircle2, PlayCircle } from "lucide-react";

const lessons = [
  { title: "Introduction", completed: true },
  { title: "Cloud Fundamentals", completed: true },
  { title: "Cloud Architecture", completed: false },
  { title: "Deployment Models", completed: false },
  { title: "Mini Assessment", completed: false },
];

export default function LessonSidebar() {
  return (
    <aside className="rounded-[30px] bg-white p-6 shadow-lg">

      <h2 className="text-xl font-bold">
        Lessons
      </h2>

      <div className="mt-6 space-y-5">

        {lessons.map((lesson) => (

          <div
            key={lesson.title}
            className="flex items-center gap-3 rounded-2xl p-3 transition hover:bg-slate-100"
          >

            {lesson.completed ? (
              <CheckCircle2 className="text-green-500" size={22} />
            ) : (
              <PlayCircle className="text-blue-500" size={22} />
            )}

            <span>{lesson.title}</span>

          </div>

        ))}

      </div>

    </aside>
  );
}