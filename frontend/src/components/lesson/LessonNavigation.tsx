"use client";

import Link from "next/link";

interface LessonNavigationProps {
  courseId: string;
  moduleId: string;
  lessonId: string;
}

export default function LessonNavigation({
  courseId,
  moduleId,
  lessonId,
}: LessonNavigationProps) {
  const currentLesson = Number(
    lessonId.replace("lesson", "")
  );

  const currentModule = Number(
    moduleId.replace("module", "")
  );

  const previousLink =
    currentLesson > 1
      ? `/lesson/${courseId}/${moduleId}/lesson${currentLesson - 1}`
      : null;

  const nextLink =
    currentLesson < 15
      ? `/lesson/${courseId}/${moduleId}/lesson${currentLesson + 1}`
      : currentModule < 13
      ? `/lesson/${courseId}/module${currentModule + 1}/lesson1`
      : `/exam/${courseId}`;

  return (
    <div className="flex justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {previousLink ? (
        <Link
          href={previousLink}
          className="rounded-xl border border-slate-300 px-5 py-3 transition hover:bg-slate-100"
        >
          ← Previous Lesson
        </Link>
      ) : (
        <div />
      )}

      <Link
        href={nextLink}
        className="rounded-xl bg-sky-600 px-5 py-3 text-white transition hover:bg-sky-700"
      >
        {currentLesson === 15 && currentModule === 13
          ? "Final Exam →"
          : currentLesson === 15
          ? "Next Module →"
          : "Next Lesson →"}
      </Link>
    </div>
  );
}