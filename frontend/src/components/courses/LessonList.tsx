"use client";

import LessonCard from "./LessonCard";

const lessons = [
  {
    title: "Introduction",
    duration: "10 mins",
  },
  {
    title: "Variables and Data Types",
    duration: "18 mins",
  },
  {
    title: "Functions",
    duration: "25 mins",
  },
];

export default function LessonList() {
  return (
    <div className="space-y-4">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.title}
          {...lesson}
        />
      ))}
    </div>
  );
}