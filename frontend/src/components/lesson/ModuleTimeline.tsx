"use client";

import {
  CheckCircle2,
  Circle,
} from "lucide-react";

const lessons = [
  {
    title: "Introduction",
    completed: true,
  },
  {
    title: "Core Concepts",
    completed: true,
  },
  {
    title: "Working Example",
    completed: false,
  },
  {
    title: "Mini Assessment",
    completed: false,
  },
];

export default function ModuleTimeline() {
  return (
    <section className="rounded-[28px] bg-white p-6 shadow-lg">

      <h2 className="text-xl font-bold">
        Module Timeline
      </h2>

      <div className="mt-6 space-y-5">

        {lessons.map((lesson) => (

          <div
            key={lesson.title}
            className="flex items-center gap-4"
          >

            {lesson.completed ? (
              <CheckCircle2
                className="text-green-500"
                size={22}
              />
            ) : (
              <Circle
                className="text-slate-400"
                size={22}
              />
            )}

            <span
              className={
                lesson.completed
                  ? "font-medium text-slate-900"
                  : "text-slate-500"
              }
            >
              {lesson.title}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}