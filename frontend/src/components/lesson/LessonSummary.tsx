"use client";

import { ClipboardCheck } from "lucide-react";

export default function LessonSummary() {
  return (
    <section className="rounded-[30px] bg-gradient-to-br from-blue-50 to-indigo-100 p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <ClipboardCheck
          className="text-blue-600"
          size={26}
        />

        <h2 className="text-2xl font-bold">
          Lesson Summary
        </h2>

      </div>

      <p className="mt-6 leading-8 text-slate-700">

        In this lesson, you learned the fundamental concepts,
        explored practical examples, understood key terminology,
        and prepared yourself for the lesson assessment.

      </p>

    </section>
  );
}