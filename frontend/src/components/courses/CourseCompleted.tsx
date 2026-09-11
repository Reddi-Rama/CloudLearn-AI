"use client";

import Link from "next/link";

interface CourseCompletedProps {
  courseId?: string;
}

export default function CourseCompleted({
  courseId = "python-development",
}: CourseCompletedProps) {
  const examLink =
    courseId === "cpp-development"
      ? "/exam/cpp-development"
      : courseId === "java-development"
      ? "/exam/java-development"
      : "/exam/python-development";

  const courseName =
    courseId === "cpp-development"
      ? "C++ Development"
      : courseId === "java-development"
      ? "Java Development"
      : "Python Development";

  return (
    <div className="w-full max-w-xl rounded-3xl border border-green-200 bg-green-50 p-10 text-center shadow-lg dark:border-green-900 dark:bg-green-950/30">

      <div className="mb-4 text-5xl">
        &#x1F389;
      </div>

      <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
        Course Completed!
      </h2>

      <p className="mt-4 text-base text-green-600 dark:text-green-300">
        Congratulations on completing {courseName}.
      </p>

      <p className="mt-2 text-sm text-green-600 dark:text-green-300">
        You can now take the final course completion assessment.
      </p>

      <Link
        href={examLink}
        className="
          mt-8
          inline-flex
          items-center
          justify-center
          rounded-2xl
          bg-sky-600
          px-8
          py-4
          text-base
          font-bold
          text-white
          shadow-md
          transition
          hover:bg-sky-700
        "
      >
        Start Final Exam &rarr;
      </Link>

    </div>
  );
}

