"use client";

import { CheckCircle2 } from "lucide-react";

export default function LessonCompletion() {
  return (
    <section className="rounded-3xl bg-emerald-50 p-8 shadow-lg">

      <div className="flex items-center gap-4">

        <CheckCircle2
          className="text-emerald-600"
          size={34}
        />

        <div>

          <h2 className="text-3xl font-black">

            Lesson Completed

          </h2>

          <p className="mt-2 text-slate-600">

            Great job! Continue to the next lesson.

          </p>

        </div>

      </div>

    </section>
  );
}