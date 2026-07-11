"use client";

import Link from "next/link";
import { CircleHelp } from "lucide-react";

export default function QuizSection() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-indigo-600 to-sky-600 p-8 text-white shadow-xl">

      <div className="flex items-center gap-3">

        <CircleHelp size={30}/>

        <h2 className="text-3xl font-black">

          Lesson Quiz

        </h2>

      </div>

      <p className="mt-5 text-sky-100">

        Test your understanding before moving to the next lesson.

      </p>

      <Link
      href="/assessments"
      className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 font-semibold text-sky-700"
      >

        Start Quiz

      </Link>

    </section>
  );
}