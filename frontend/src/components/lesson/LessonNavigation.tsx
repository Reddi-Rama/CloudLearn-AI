"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LessonNavigation() {
  return (
    <div className="mt-14 flex items-center justify-between">

      <button className="flex items-center gap-3 rounded-full border px-8 py-4 hover:bg-slate-100">

        <ChevronLeft />

        Previous Lesson

      </button>

      <button className="relative h-24 w-24 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-xl transition hover:scale-105">

        <span className="absolute left-1/2 top-6 -translate-x-1/2 text-3xl font-black">

          6

        </span>

        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs">

          Next

        </span>

      </button>

      <button className="flex items-center gap-3 rounded-full border px-8 py-4 hover:bg-slate-100">

        Quiz Section

        <ChevronRight />

      </button>

    </div>
  );
}