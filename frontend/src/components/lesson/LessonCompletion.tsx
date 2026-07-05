"use client";

import { CheckCircle2, Award } from "lucide-react";

export default function LessonCompletion() {
  return (
    <section className="rounded-[32px] bg-gradient-to-r from-green-500 to-emerald-600 p-10 text-white shadow-xl">

      <div className="flex flex-col items-center text-center">

        <CheckCircle2 size={70} />

        <h2 className="mt-6 text-4xl font-black">
          Lesson Completed!
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-green-100">
          Congratulations! You have successfully completed this lesson.
          Continue learning to unlock your course certificate.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-full bg-white/20 px-6 py-3">

          <Award size={24} />

          <span className="font-semibold">
            Progress Updated
          </span>

        </div>

      </div>

    </section>
  );
}