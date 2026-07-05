"use client";

import Link from "next/link";
import {
  BookOpen,
  PencilLine,
  ClipboardCheck,
} from "lucide-react";

export default function LessonActions() {
  return (
    <section className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-3xl font-bold text-slate-800">
        Continue Your Learning
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        <Link
          href="/practice"
          className="rounded-2xl border border-sky-200 p-6 transition hover:border-sky-500 hover:shadow-lg"
        >
          <PencilLine
            className="mb-4 text-sky-600"
            size={32}
          />

          <h3 className="text-xl font-semibold">
            Practice
          </h3>

          <p className="mt-3 text-slate-600">
            Strengthen your understanding through exercises.
          </p>
        </Link>

        <Link
          href="/quiz"
          className="rounded-2xl border border-sky-200 p-6 transition hover:border-sky-500 hover:shadow-lg"
        >
          <BookOpen
            className="mb-4 text-sky-600"
            size={32}
          />

          <h3 className="text-xl font-semibold">
            Quiz
          </h3>

          <p className="mt-3 text-slate-600">
            Test your knowledge with a short quiz.
          </p>
        </Link>

        <Link
          href="/assessment"
          className="rounded-2xl border border-sky-200 p-6 transition hover:border-sky-500 hover:shadow-lg"
        >
          <ClipboardCheck
            className="mb-4 text-sky-600"
            size={32}
          />

          <h3 className="text-xl font-semibold">
            Assessment
          </h3>

          <p className="mt-3 text-slate-600">
            Complete the module assessment.
          </p>
        </Link>

      </div>

    </section>
  );
}