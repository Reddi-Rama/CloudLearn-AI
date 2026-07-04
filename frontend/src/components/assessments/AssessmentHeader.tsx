"use client";

import { ClipboardCheck } from "lucide-react";

export default function AssessmentHeader() {
  return (
    <section className="mb-8 rounded-[32px] bg-gradient-to-r from-sky-500 to-indigo-600 p-8 text-white shadow-xl">

      <div className="flex items-center gap-5">

        <div className="rounded-3xl bg-white/20 p-5">
          <ClipboardCheck size={40} />
        </div>

        <div>

          <p className="text-sky-100">
            Module 1 • Lesson 3
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Lesson Assessment
          </h1>

          <p className="mt-2 text-sky-100">
            Answer all 4 questions to unlock the next lesson.
          </p>

        </div>

      </div>

    </section>
  );
}