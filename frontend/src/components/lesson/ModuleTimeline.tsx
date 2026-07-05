"use client";

import { CheckCircle2, Circle } from "lucide-react";

interface TimelineItem {
  title: string;
  completed: boolean;
}

interface ModuleTimelineProps {
  lessons: TimelineItem[];
}

export default function ModuleTimeline({
  lessons,
}: ModuleTimelineProps) {
  return (
    <section className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-3xl font-bold">

        Module Progress

      </h2>

      <div className="space-y-6">

        {lessons.map((lesson, index) => (

          <div
            key={index}
            className="flex items-center gap-5"
          >

            {lesson.completed ? (

              <CheckCircle2
                className="text-green-600"
                size={24}
              />

            ) : (

              <Circle
                className="text-slate-400"
                size={24}
              />

            )}

            <span
              className={
                lesson.completed
                  ? "font-semibold text-slate-800"
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