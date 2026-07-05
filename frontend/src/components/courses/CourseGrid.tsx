"use client";

import { useMemo, useState } from "react";

import CourseSearch from "./CourseSearch";
import CourseFilter from "./CourseFilter";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Python Programming",
    description:
      "Learn Python from beginner to advanced with projects and exercises.",
    lessons: 42,
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4.9,
    href: "/courses/python-programming",
    category: "Beginner",
  },
  {
    title: "Machine Learning",
    description:
      "Master supervised, unsupervised and reinforcement learning.",
    lessons: 58,
    duration: "12 Weeks",
    level: "Intermediate",
    rating: 4.8,
    href: "/courses/machine-learning",
    category: "Intermediate",
  },
  {
    title: "Full Stack Development",
    description:
      "Build complete web applications using React, Next.js and Node.js.",
    lessons: 65,
    duration: "14 Weeks",
    level: "Advanced",
    rating: 4.9,
    href: "/courses/full-stack-development",
    category: "Advanced",
  },
  {
    title: "Cloud Computing",
    description:
      "Learn AWS, Azure, Docker and Kubernetes.",
    lessons: 39,
    duration: "10 Weeks",
    level: "Intermediate",
    rating: 4.7,
    href: "/courses/cloud-computing",
    category: "Intermediate",
  },
  {
    title: "Cyber Security",
    description:
      "Networking, Ethical Hacking and Penetration Testing.",
    lessons: 45,
    duration: "11 Weeks",
    level: "Intermediate",
    rating: 4.8,
    href: "/courses/cyber-security",
    category: "Intermediate",
  },
  {
    title: "Flutter Development",
    description:
      "Create beautiful Android and iOS applications using Flutter.",
    lessons: 48,
    duration: "9 Weeks",
    level: "Beginner",
    rating: 4.8,
    href: "/courses/flutter-development",
    category: "Beginner",
  },
];

export default function CourseGrid() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        course.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        filter === "Popular" ||
        course.category === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <section className="pb-24">

      <div className="container-custom">

        <CourseSearch
          value={search}
          onChange={setSearch}
        />

        <CourseFilter
          selected={filter}
          onSelect={setFilter}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filteredCourses.map((course) => (
            <CourseCard
              key={course.title}
              {...course}
            />
          ))}

        </div>

      </div>

    </section>
  );
}