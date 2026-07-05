"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LessonNavigation() {
  return (
    <section className="mt-10 flex flex-col gap-5 md:flex-row md:justify-between">

      <Link
        href="#"
        className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold shadow hover:bg-slate-100"
      >
        <ArrowLeft size={20} />
        Previous Lesson
      </Link>

      <Link
        href="#"
        className="flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow hover:bg-blue-700"
      >
        Next Lesson
        <ArrowRight size={20} />
      </Link>

    </section>
  );
}