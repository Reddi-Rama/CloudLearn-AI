"use client";

import Link from "next/link";
import { CheckCircle2, Award } from "lucide-react";

export default function CourseCompleted() {
  return (
    <section className="w-full max-w-3xl rounded-[40px] bg-white p-12 shadow-2xl">

      <div className="flex justify-center">

        <div className="rounded-full bg-green-100 p-6">

          <CheckCircle2
            size={80}
            className="text-green-600"
          />

        </div>

      </div>

      <h1 className="mt-8 text-center text-5xl font-black">

        Course Completed 🎉

      </h1>

      <p className="mt-6 text-center text-lg text-slate-600">

        Congratulations! You have completed every lesson,
        assessment and practice quiz.

      </p>

      <div className="mt-10 rounded-3xl bg-slate-50 p-8">

        <div className="flex justify-between">

          <span>Lessons</span>

          <span>12 / 12</span>

        </div>

        <div className="mt-4 flex justify-between">

          <span>Assessments</span>

          <span>Passed</span>

        </div>

        <div className="mt-4 flex justify-between">

          <span>Practice Quiz</span>

          <span>Completed</span>

        </div>

        <div className="mt-4 flex justify-between">

          <span>Final Assessment</span>

          <span>Passed</span>

        </div>

      </div>

      <Link
        href="/payment"
        className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 py-5 text-xl font-bold text-white"
      >

        <Award />

        Get Certificate (₹29)

      </Link>

    </section>
  );
}