"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LessonNavigationProps {
  previousLesson?: string;
  nextLesson?: string;
}

export default function LessonNavigation({
  previousLesson,
  nextLesson,
}: LessonNavigationProps) {
  return (
    <section className="flex flex-col gap-4 sm:flex-row sm:justify-between">

      {previousLesson ? (
        <Link
          href={previousLesson}
          className="flex items-center gap-3 rounded-full border border-sky-200 px-6 py-4 transition hover:bg-sky-50"
        >
          <ChevronLeft size={20} />
          Previous Lesson
        </Link>
      ) : (
        <div />
      )}

      {nextLesson && (
        <Link
          href={nextLesson}
          className="flex items-center gap-3 rounded-full bg-sky-600 px-6 py-4 text-white transition hover:bg-sky-700"
        >
          Next Lesson
          <ChevronRight size={20} />
        </Link>
      )}

    </section>
  );
}