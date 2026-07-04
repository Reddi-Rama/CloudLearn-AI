"use client";

import {
  CheckCircle2,
  Circle,
  Lock,
} from "lucide-react";

const modules = [
  {
    title: "Module 1",
    lessons: [
      { title: "Introduction", status: "completed" },
      { title: "Variables", status: "completed" },
      { title: "Assessment", status: "completed" },
    ],
  },
  {
    title: "Module 2",
    lessons: [
      { title: "Data Types", status: "current" },
      { title: "Operators", status: "locked" },
      { title: "Assessment", status: "locked" },
    ],
  },
];

export default function LessonSidebar() {
  return (
    <aside className="h-screen overflow-y-auto rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-8 text-2xl font-bold">

        Course Content

      </h2>

      {modules.map((module) => (

        <div
          key={module.title}
          className="mb-8"
        >

          <h3 className="mb-4 font-bold text-sky-600">

            {module.title}

          </h3>

          <div className="space-y-4">

            {module.lessons.map((lesson) => (

              <div
                key={lesson.title}
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-50"
              >

                {lesson.status === "completed" && (
                  <CheckCircle2 className="text-green-500" size={20}/>
                )}

                {lesson.status === "current" && (
                  <Circle className="text-sky-500" size={20}/>
                )}

                {lesson.status === "locked" && (
                  <Lock className="text-slate-400" size={18}/>
                )}

                <span>

                  {lesson.title}

                </span>

              </div>

            ))}

          </div>

        </div>

      ))}

    </aside>
  );
}