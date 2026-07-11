"use client";

import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Python Programming",
    instructor: "CloudLearn AI",
    lessons: 24,
    progress: 60,
  },
  {
    title: "Data Structures",
    instructor: "CloudLearn AI",
    lessons: 32,
    progress: 35,
  },
  {
    title: "Machine Learning",
    instructor: "CloudLearn AI",
    lessons: 28,
    progress: 15,
  },
];

export default function CourseGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            {...course}
          />
        ))}
      </div>
    </section>
  );
}