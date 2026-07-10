"use client";

import {
  BookOpen,
  Code,
  Trophy,
  FileText,
  Clock,
  Star,
} from "lucide-react";

const sidebarItems = [
  {
    title: "Course Overview",
    icon: BookOpen,
  },
  {
    title: "Lessons",
    icon: FileText,
  },
  {
    title: "Coding Practice",
    icon: Code,
  },
  {
    title: "Assessments",
    icon: Trophy,
  },
  {
    title: "Progress",
    icon: Clock,
  },
  {
    title: "Reviews",
    icon: Star,
  },
];

export default function CourseSidebar() {
  return (
    <aside className="sticky top-24 h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-slate-900">
        Course Navigation
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Quickly access different sections of your course.
      </p>

      <div className="mt-8 space-y-3">

        {sidebarItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition hover:bg-sky-50 hover:text-sky-600"
            >
              <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                <Icon size={20} />
              </div>

              <span className="font-medium">
                {item.title}
              </span>
            </button>
          );
        })}

      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-5 text-white">

        <h3 className="text-lg font-bold">
          Current Progress
        </h3>

        <div className="mt-4 h-3 rounded-full bg-white/20">
          <div className="h-3 w-[68%] rounded-full bg-white" />
        </div>

        <p className="mt-3 text-sm text-white/90">
          68% Completed
        </p>

      </div>

    </aside>
  );
}