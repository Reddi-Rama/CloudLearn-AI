"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const modules = [
  {
    title: "Introduction",
    completed: true,
  },
  {
    title: "HTML Basics",
    completed: true,
  },
  {
    title: "HTML Elements",
    completed: false,
  },
  {
    title: "Lists",
    completed: false,
  },
  {
    title: "Tables",
    completed:false,
  },
  {
    title:"Forms",
    completed:false,
  },
];

export default function LessonSidebar() {
  return (
    <aside className="sticky top-24 rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold">

        Course Lessons

      </h2>

      <div className="space-y-3">

        {modules.map((lesson,index)=>(

          <Link
          key={lesson.title}
          href={`/lesson/${index+1}`}
          className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-sky-50"
          >

            {lesson.completed ? (

              <CheckCircle2
              className="text-emerald-500"
              size={20}
              />

            ):(
              <Circle
              size={18}
              className="text-slate-400"
              />
            )}

            <span>

              {lesson.title}

            </span>

          </Link>

        ))}

      </div>

    </aside>
  );
}