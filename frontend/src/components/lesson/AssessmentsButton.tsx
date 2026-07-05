"use client";

import Link from "next/link";
import { ClipboardCheck } from "lucide-react";

export default function AssessmentsButton() {
  return (
    <section className="mt-10 rounded-[30px] bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">

      <div className="flex flex-col items-center text-center">

        <ClipboardCheck size={60} />

        <h2 className="mt-6 text-3xl font-bold">
          Ready for Assessment?
        </h2>

        <p className="mt-5 max-w-xl leading-8 text-blue-100">
          Test your understanding by answering four questions.
          Pass the assessment to unlock the next lesson.
        </p>

        <Link
          href="/assessment"
          className="mt-8 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
        >
          Start Assessment
        </Link>

      </div>

    </section>
  );
}