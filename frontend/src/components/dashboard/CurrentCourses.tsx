"use client";

import {
  PlayCircle,
  ArrowRight,
  BookOpen
} from "lucide-react";

const courses = [
  {
    title: "Python Programming",
    lessons: 12,
    progress: 42,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Machine Learning",
    lessons: 12,
    progress: 18,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Cloud Computing",
    lessons: 12,
    progress: 0,
    color: "from-emerald-500 to-green-600",
  },
];

export default function CurrentCourses() {
  return (
    <section className="mx-auto max-w-7xl">

      <div className="flex items-center justify-between mb-8">

        <h1 className="text-4xl font-black">

          My Courses

        </h1>

        <button className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-white">

          Browse More

          <ArrowRight size={18}/>

        </button>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {courses.map((course) => (

          <div
            key={course.title}
            className="rounded-3xl bg-white shadow-xl overflow-hidden"
          >

            <div className={`bg-gradient-to-r ${course.color} p-8 text-white`}>

              <BookOpen size={38}/>

              <h2 className="mt-6 text-3xl font-bold">

                {course.title}

              </h2>

            </div>

            <div className="p-8">

              <p>

                {course.lessons} Lessons

              </p>

              <div className="mt-6 h-3 rounded-full bg-gray-200 overflow-hidden">

                <div
                  className={`h-full bg-gradient-to-r ${course.color}`}
                  style={{ width: `${course.progress}%` }}
                />

              </div>

              <p className="mt-3">

                {course.progress}% Completed

              </p>

              <button className="mt-8 flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-white">

                <PlayCircle size={18}/>

                Continue

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}