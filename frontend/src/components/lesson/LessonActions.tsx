"use client";

import Link from "next/link";
import {
  Bookmark,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";

export default function LessonActions() {
  return (
    <section className="mt-10 rounded-[32px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-slate-900">
        Lesson Actions
      </h2>

      <p className="mt-3 text-slate-600">
        Save your progress, complete the lesson, or move to the assessment.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        {/* Save Notes */}

        <button className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">

          <Bookmark size={20} />

          Save Notes

        </button>

        {/* Mark Completed */}

        <button className="flex items-center justify-center gap-3 rounded-2xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700">

          <CheckCircle2 size={20} />

          Mark as Completed

        </button>

        {/* Assessment */}

        <Link
          href="/assessment"
          className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >

          <ClipboardCheck size={20} />

          Take Assessment

        </Link>

      </div>

    </section>
  );
}