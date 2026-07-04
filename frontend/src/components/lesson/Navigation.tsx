"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import NextLessonButton from "./NextLessonButton";
import QuizSection from "./QuizSection";

export default function Navigation() {
  return (
    <section className="mt-20 rounded-[40px] bg-white p-8 shadow-xl border border-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-8">
        <button className="flex items-center gap-2 rounded-2xl border px-6 py-4 hover:bg-slate-50 transition">
          <ChevronLeft size={20} />
          Previous
        </button>

        <NextLessonButton lessonNumber={2} />

        <QuizSection questions={4} />

        <button className="flex items-center gap-2 rounded-2xl border px-6 py-4 hover:bg-slate-50 transition">
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}