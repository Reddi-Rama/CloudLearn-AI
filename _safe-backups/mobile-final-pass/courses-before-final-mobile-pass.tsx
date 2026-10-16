"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";

const courses = [
  {
    name: "Python Development",
    description:
      "Learn Python from fundamentals to advanced concepts with practical projects.",
    href: "/courses/python-development",
    number: "01",
  },
  {
    name: "C++ Development",
    description:
      "Master object-oriented programming, data structures, and problem solving.",
    href: "/courses/cpp-development",
    number: "02",
  },
  {
    name: "Java Development",
    description:
      "Learn Java programming, OOP concepts, and application development.",
    href: "/courses/java-development",
    number: "03",
  },
  {
    name: "C Development",
    description:
      "Understand programming fundamentals, memory concepts, and system programming.",
    href: "/courses/c-development",
    number: "04",
  },
];

export default function CoursesPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main
      className={
        isDark
          ? "min-h-screen bg-slate-950 py-20"
          : "min-h-screen bg-[#F7FAFC] py-20"
      }
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p
            className={
              isDark
                ? "font-semibold text-sky-400"
                : "font-semibold text-sky-700"
            }
          >
            Programming Domain
          </p>

          <h1
            className={
              isDark
                ? "mt-3 text-5xl font-bold text-white"
                : "mt-3 text-5xl font-bold text-slate-950"
            }
          >
            Programming Courses
          </h1>

          <p
            className={
              isDark
                ? "mt-4 max-w-2xl text-lg leading-8 text-slate-400"
                : "mt-4 max-w-2xl text-lg leading-8 text-slate-600"
            }
          >
            Choose a programming course and start learning through structured
            modules, practical lessons, examples, and projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className={
                isDark
                  ? "group rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-sm transition-all duration-200 hover:border-sky-500/50 hover:bg-slate-900/90"
                  : "group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:border-sky-300 hover:bg-sky-50/30 hover:shadow-md"
              }
            >
              <div className="flex items-start gap-6">
                <div
                  className={
                    isDark
                      ? "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-sky-950 text-lg font-semibold text-sky-400"
                      : "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-lg font-semibold text-sky-700"
                  }
                >
                  {course.number}
                </div>

                <div className="flex-1">
                  <h2
                    className={
                      isDark
                        ? "text-2xl font-bold text-white"
                        : "text-2xl font-bold text-slate-900"
                    }
                  >
                    {course.name}
                  </h2>

                  <p
                    className={
                      isDark
                        ? "mt-4 text-base leading-7 text-slate-400"
                        : "mt-4 text-base leading-7 text-slate-600"
                    }
                  >
                    {course.description}
                  </p>

                  <div
                    className={
                      isDark
                        ? "mt-7 font-semibold text-sky-400"
                        : "mt-7 font-semibold text-sky-700"
                    }
                  >
                    Start Learning →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
