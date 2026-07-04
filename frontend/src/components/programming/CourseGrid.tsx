"use client";

import CourseCard from "./CourseCard";

const courses = [
  {
    title: "C Programming",
    modules: 4,
    lessons: 12,
    slug: "c-programming",
  },
  {
    title: "C++ Programming",
    modules: 4,
    lessons: 12,
    slug: "cpp-programming",
  },
  {
    title: "Python",
    modules: 4,
    lessons: 12,
    slug: "python",
  },
  {
    title: "Java",
    modules: 4,
    lessons: 12,
    slug: "java",
  },
  {
    title: "JavaScript",
    modules: 4,
    lessons: 12,
    slug: "javascript",
  },
  {
    title: "Data Structures",
    modules: 4,
    lessons: 12,
    slug: "data-structures",
  },
  {
    title: "Object Oriented Programming",
    modules: 4,
    lessons: 12,
    slug: "oop",
  },
  {
    title: "Competitive Programming",
    modules: 4,
    lessons: 12,
    slug: "competitive-programming",
  },
];

export default function CourseGrid() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {courses.map((course) => (
            <CourseCard key={course.slug} {...course} />
          ))}

        </div>

      </div>

    </section>
  );
}