"use client";

import { notFound } from "next/navigation";
import { modules as pythonModules } from "@/content/programming/python/lessons/module";
import { modules as cppModules } from "@/content/programming/cpp/lessons/module";
import { modules as javaModules } from "@/content/programming/java/lessons/module";
import { modules as cModules } from "@/content/programming/c/lessons/module";
import CourseAccessGate from "@/components/courses/CourseAccessGate";
import { useTheme } from "@/components/theme/ThemeProvider";

interface CoursePageProps {
  params: Promise<{ course: string }>;
}

type ModuleData = {
  id: string;
  title: string;
  lessons?: { id: string; title: string }[];
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { course } = await params;

  const courseModules: ModuleData[] | null =
    course === "python-development"
      ? pythonModules as ModuleData[]
      : course === "cpp-development"
        ? cppModules as ModuleData[]
        : course === "java-development"
          ? javaModules as ModuleData[]
          : course === "c-development"
            ? cModules as ModuleData[]
            : null;

  if (!courseModules) return notFound();

  const courseName =
    course === "c-development"
      ? "C Programming"
      : course.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <CoursePageContent
      course={course}
      courseName={courseName}
      courseModules={courseModules}
    />
  );
}

function CoursePageContent({
  course,
  courseName,
  courseModules,
}: {
  course: string;
  courseName: string;
  courseModules: ModuleData[];
}) {
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
        <section
          className={
            isDark
              ? "rounded-3xl border border-slate-800 bg-slate-900 p-12 shadow-sm"
              : "rounded-3xl border border-slate-200 bg-white p-12 shadow-sm"
          }
        >
          <p
            className={
              isDark
                ? "font-medium text-sky-400"
                : "font-medium text-sky-700"
            }
          >
            Programming Domain
          </p>

          <h1
            className={
              isDark
                ? "mt-4 text-5xl font-bold text-white"
                : "mt-4 text-5xl font-bold text-slate-950"
            }
          >
            {courseName}
          </h1>

          <p
            className={
              isDark
                ? "mt-6 max-w-3xl text-lg leading-8 text-slate-400"
                : "mt-6 max-w-3xl text-lg leading-8 text-slate-600"
            }
          >
            Learn {courseName} from beginner to advanced through structured
            modules, practical lessons, examples, and real-world applications.
          </p>

          <CourseAccessGate
            course={course}
            courseName={courseName}
            courseModules={courseModules}
          />
        </section>
      </div>
    </main>
  );
}