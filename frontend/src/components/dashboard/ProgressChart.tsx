"use client";

import { TrendingUp } from "lucide-react";

const modules = [
  { name: "Module 1", progress: 100 },
  { name: "Module 2", progress: 75 },
  { name: "Module 3", progress: 35 },
  { name: "Module 4", progress: 0 },
];

export default function ProgressChart() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg border">

      <div className="flex items-center gap-3 mb-8">

        <TrendingUp className="text-sky-600" />

        <h2 className="text-2xl font-bold">

          Progress Overview

        </h2>

      </div>

      <div className="space-y-6">

        {modules.map((module) => (

          <div key={module.name}>

            <div className="flex justify-between mb-2">

              <span className="font-medium">

                {module.name}

              </span>

              <span className="font-semibold text-sky-600">

                {module.progress}%

              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-200 overflow-hidden">

              <div
                style={{ width: `${module.progress}%` }}
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}