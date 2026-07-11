"use client";

import {
  TrendingUp,
  Brain,
  Code2,
  Cloud,
  Database,
} from "lucide-react";

const progress = [
  {
    course: "Artificial Intelligence",
    value: 84,
    icon: Brain,
    color: "bg-blue-500",
  },
  {
    course: "Python Programming",
    value: 68,
    icon: Code2,
    color: "bg-green-500",
  },
  {
    course: "Cloud Computing",
    value: 52,
    icon: Cloud,
    color: "bg-sky-500",
  },
  {
    course: "Data Science",
    value: 76,
    icon: Database,
    color: "bg-purple-500",
  },
];

export default function ProgressChart() {
  return (
    <section className="mt-14">

      <div className="rounded-[32px] bg-white p-8 shadow-xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-slate-900">
              Learning Progress
            </h2>

            <p className="mt-2 text-slate-500">
              Track your progress across all enrolled courses.
            </p>

          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

            <TrendingUp
              size={32}
              className="text-blue-600"
            />

          </div>

        </div>

        <div className="space-y-8">

          {progress.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.course}>

                <div className="mb-3 flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">

                      <Icon
                        size={22}
                        className="text-slate-700"
                      />

                    </div>

                    <span className="font-semibold text-slate-800">
                      {item.course}
                    </span>

                  </div>

                  <span className="font-bold text-blue-600">
                    {item.value}%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-200">

                  <div
                    className={`h-3 rounded-full ${item.color}`}
                    style={{
                      width: `${item.value}%`,
                    }}
                  />

                </div>

              </div>
            );
          })}

        </div>

        <div className="mt-10 rounded-2xl bg-blue-50 p-6">

          <h3 className="text-xl font-bold text-blue-700">
            Weekly Summary
          </h3>

          <div className="mt-5 grid gap-6 md:grid-cols-3">

            <div>

              <h4 className="text-3xl font-black text-slate-900">
                12
              </h4>

              <p className="text-slate-600">
                Hours Learned
              </p>

            </div>

            <div>

              <h4 className="text-3xl font-black text-slate-900">
                8
              </h4>

              <p className="text-slate-600">
                Lessons Completed
              </p>

            </div>

            <div>

              <h4 className="text-3xl font-black text-slate-900">
                3
              </h4>

              <p className="text-slate-600">
                Quizzes Passed
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}