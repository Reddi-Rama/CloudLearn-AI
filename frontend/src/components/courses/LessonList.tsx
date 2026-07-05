"use client";

import LessonCard from "./LessonCard";

const lessons = [
  {
    lessonNumber: 1,
    title: "Introduction to Python",
    duration: "08 min",
    completed: true,
    locked: false,
  },
  {
    lessonNumber: 2,
    title: "Installing Python & VS Code",
    duration: "12 min",
    completed: true,
    locked: false,
  },
  {
    lessonNumber: 3,
    title: "Variables and Data Types",
    duration: "15 min",
    completed: false,
    locked: false,
    active: true,
  },
  {
    lessonNumber: 4,
    title: "Operators",
    duration: "13 min",
    completed: false,
    locked: true,
  },
  {
    lessonNumber: 5,
    title: "Conditional Statements",
    duration: "20 min",
    completed: false,
    locked: true,
  },
  {
    lessonNumber: 6,
    title: "Loops",
    duration: "24 min",
    completed: false,
    locked: true,
  },
  {
    lessonNumber: 7,
    title: "Functions",
    duration: "18 min",
    completed: false,
    locked: true,
  },
];

export default function LessonList() {
  return (
    <section
      id="lessons"
      className="section"
    >
      <div className="container-custom">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Course Curriculum
          </span>

          <h2 className="heading mt-6">
            Learn Step by Step
          </h2>

          <p className="sub-heading mt-6">
            Complete every lesson to unlock the next one and
            continue your learning journey.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-5xl space-y-5">

          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.lessonNumber}
              {...lesson}
            />
          ))}

        </div>

      </div>
    </section>
  );
}