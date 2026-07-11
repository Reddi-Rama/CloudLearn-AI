"use client";

import Link from "next/link";
import {
  Brain,
  Cloud,
  Code2,
  ArrowRight,
  Clock,
} from "lucide-react";

const courses = [
  {
    title: "Artificial Intelligence",
    icon: Brain,
    progress: 72,
    duration: "3h 20m left",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Python Programming",
    icon: Code2,
    progress: 48,
    duration: "5h 10m left",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    progress: 20,
    duration: "8h 45m left",
    color: "from-sky-500 to-cyan-600",
  },
];

export default function ContinueLearning() {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-slate-900">
          Continue Learning
        </h2>

        <Link
          href="/courses"
          className="text-blue-600 font-semibold hover:underline"
        >
          View All
        </Link>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {courses.map((course) => {
          const Icon = course.icon;

          return (
            <div
              key={course.title}
              className="rounded-[32px] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${course.color}`}
              >

                <Icon
                  size={30}
                  className="text-white"
                />

              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {course.title}
              </h3>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-slate-600">
                  Progress
                </span>

                <span className="font-bold text-blue-600">
                  {course.progress}%
                </span>

              </div>

              <div className="mt-3 h-3 rounded-full bg-slate-200">

                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${course.color}`}
                  style={{
                    width: `${course.progress}%`,
                  }}
                />

              </div>

              <div className="mt-6 flex items-center gap-2 text-slate-500">

                <Clock size={18} />

                <span>{course.duration}</span>

              </div>

              <Link
                href="/courses"
                className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >

                Continue

                <ArrowRight size={18} />

              </Link>

            </div>
          );
        })}

      </div>

    </section>
  );
}