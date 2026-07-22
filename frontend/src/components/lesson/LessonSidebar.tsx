"use client";

import Link from "next/link";

interface Props {
  currentLesson: string;
}

const lessons = [
  "lesson1",
  "lesson2",
  "lesson3",
  "lesson4",
  "lesson5",
  "lesson6",
  "lesson7",
  "lesson8",
  "lesson9",
  "lesson10",
  "lesson11",
  "lesson12",
  "lesson13",
];

export default function LessonSidebar({
  currentLesson,
}: Props) {
  return (
    <aside className="w-[320px] shrink-0 border-r border-white/10 bg-black/20 backdrop-blur-md">
      <div className="sticky top-24 p-6">

        <h2 className="mb-8 text-2xl font-bold text-white">
          Python Basics
        </h2>

        <div className="space-y-2">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson}
              href={`/lesson/python-development/module1/${lesson}`}
              className={`
                block rounded-xl px-5 py-4 text-lg transition
                ${
                  currentLesson === lesson
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {index + 1}. {lesson.replace("lesson", "Lesson ")}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}