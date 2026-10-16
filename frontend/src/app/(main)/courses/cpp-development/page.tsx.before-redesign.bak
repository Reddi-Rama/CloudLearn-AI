import { notFound } from "next/navigation";

import { modules } from "@/content/programming/cpp/lessons/module";

import CourseAccessGate from "@/components/courses/CourseAccessGate";

type ModuleData = {
  id: string;
  title: string;
  lessons?: {
    id: string;
    title: string;
  }[];
};

export default function CppCoursePage() {
  const course = "cpp-development";
  const courseName = "C++ Development";

  const courseModules = modules.filter(Boolean) as ModuleData[];

  if (!courseModules.length) {
    return notFound();
  }

  return (
    <main
      className="
        min-h-screen
        bg-slate-50
        py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        {/* HERO SECTION */}

        <section
          className="
            rounded-3xl
            bg-white
            p-12
            shadow-sm
          "
        >
          <p
            className="
              font-medium
              text-sky-600
            "
          >
            Programming Domain
          </p>

          <h1
            className="
              mt-4
              text-5xl
              font-bold
              text-slate-900
            "
          >
            {courseName}
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Learn C++ from beginner to advanced through
            structured modules, practical lessons,
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
