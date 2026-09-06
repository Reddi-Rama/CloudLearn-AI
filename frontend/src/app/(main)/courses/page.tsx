import { notFound } from "next/navigation";

import { modules as pythonModules } from "@/content/programming/python/lessons/module";
import { modules as cppModules } from "@/content/programming/cpp/lessons/module";
import { modules as javaModules } from "@/content/programming/java/lessons/module";
import { modules as cModules } from "@/content/programming/c/lessons/module";

import CourseAccessGate from "@/components/courses/CourseAccessGate";

interface CoursePageProps {
  params: Promise<{
    course: string;
  }>;
}

type ModuleData = {
  id: string;
  title: string;
  lessons?: {
    id: string;
    title: string;
  }[];
};

export default async function CoursePage({
  params,
}: CoursePageProps) {
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

  if (!courseModules) {
    return notFound();
  }

  const courseName =
    course === "c-development"
      ? "C Programming"
      : course
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="
      min-h-screen
      bg-slate-50
      py-20
    ">
      <div className="
        mx-auto
        max-w-7xl
        px-6
      ">

        {/* HERO SECTION */}

        <section className="
          rounded-3xl
          bg-white
          p-12
          shadow-sm
        ">

          <p className="
            font-medium
            text-sky-600
          ">
            Programming Domain
          </p>

          <h1 className="
            mt-4
            text-5xl
            font-bold
            text-slate-900
          ">
            {courseName}
          </h1>

          <p className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
          ">
            Learn {courseName} from beginner to advanced
            through structured modules, practical lessons,
            examples, and real-world applications.
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
