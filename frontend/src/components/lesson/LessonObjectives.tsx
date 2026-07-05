"use client";

import { CheckCircle2, Target } from "lucide-react";

interface LessonObjectivesProps {
  objectives: string[];
}

export default function LessonObjectives({
  objectives,
}: LessonObjectivesProps) {
  return (
    <section className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl bg-sky-100 p-3">
          <Target
            size={24}
            className="text-sky-600"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Learning Objectives
          </h2>

          <p className="mt-1 text-slate-600">
            By the end of this lesson you will be able to:
          </p>
        </div>
      </div>

      {/* Objectives */}
      <div className="space-y-4">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl bg-sky-50 p-4 transition hover:bg-sky-100"
          >
            <CheckCircle2
              size={22}
              className="mt-0.5 shrink-0 text-emerald-500"
            />

            <p className="leading-7 text-slate-700">
              {objective}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}