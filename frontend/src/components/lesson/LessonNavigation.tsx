"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LessonNavigation() {
  return (
    <section className="flex items-center justify-between">

      <Link
        href="/lesson/1"
        className="flex items-center gap-3 rounded-2xl border px-6 py-4 hover:bg-slate-100"
      >

        <ArrowLeft />

        Previous Lesson

      </Link>

      <Link
        href="/lesson/3"
        className="flex items-center gap-3 rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white hover:bg-sky-700"
      >

        Next Lesson

        <ArrowRight />

      </Link>

    </section>
  );
}