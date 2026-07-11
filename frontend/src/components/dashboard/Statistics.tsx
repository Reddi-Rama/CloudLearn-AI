"use client";

import {
  BookOpen,
  GraduationCap,
  Award,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Courses Enrolled",
    value: "12",
    icon: BookOpen,
    color: "text-sky-600",
    bg: "bg-sky-100",
  },
  {
    title: "Lessons Completed",
    value: "38",
    icon: GraduationCap,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    title: "Certificates Earned",
    value: "4",
    icon: Award,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    title: "Overall Progress",
    value: "84%",
    icon: TrendingUp,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

export default function Statistics() {
  return (
    <section className="mt-10">

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[30px] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg}`}
              >

                <Icon
                  size={30}
                  className={item.color}
                />

              </div>

              <h2 className="mt-6 text-4xl font-black text-slate-900">
                {item.value}
              </h2>

              <p className="mt-2 text-slate-500">
                {item.title}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}