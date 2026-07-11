"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Artificial Intelligence",
    progress: "72%",
    level: "Intermediate",
    lastAccessed: "Today",
    color: "bg-blue-500",
  },
  {
    title: "Python Programming",
    progress: "48%",
    level: "Beginner",
    lastAccessed: "Yesterday",
    color: "bg-green-500",
  },
  {
    title: "Cloud Computing",
    progress: "20%",
    level: "Intermediate",
    lastAccessed: "2 Days Ago",
    color: "bg-sky-500",
  },
  {
    title: "Data Science",
    progress: "91%",
    level: "Advanced",
    lastAccessed: "Today",
    color: "bg-purple-500",
  },
];

export default function CurrentCourses() {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-slate-900">
          My Current Courses
        </h2>

        <Link
          href="/courses"
          className="font-semibold text-blue-600 hover:underline"
        >
          View All
        </Link>

      </div>

      <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-8 py-5 text-left">Course</th>

              <th className="px-8 py-5 text-left">Progress</th>

              <th className="px-8 py-5 text-left">Level</th>

              <th className="px-8 py-5 text-left">Last Accessed</th>

              <th className="px-8 py-5 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {courses.map((course) => (

              <tr
                key={course.title}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-8 py-6">

                  <div className="flex items-center gap-4">

                    <div className={`h-4 w-4 rounded-full ${course.color}`} />

                    <span className="font-semibold">
                      {course.title}
                    </span>

                  </div>

                </td>

                <td className="px-8 py-6">

                  {course.progress}

                </td>

                <td className="px-8 py-6">

                  {course.level}

                </td>

                <td className="px-8 py-6">

                  {course.lastAccessed}

                </td>

                <td className="px-8 py-6 text-center">

                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
                  >

                    Continue

                    <ArrowRight size={16} />

                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}