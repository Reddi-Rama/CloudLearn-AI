"use client";

import { Clock, BookOpen, GraduationCap } from "lucide-react";

export default function LessonHeader() {
  return (
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 p-10 text-white shadow-2xl">

      <div className="flex flex-col justify-between gap-8 lg:flex-row">

        <div>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">

            Module 2 • Lesson 1

          </span>

          <h1 className="mt-6 text-5xl font-black">

            Python Data Types

          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">

            Learn Python Data Types with examples,
            visual diagrams and practical coding.

          </p>

        </div>

        <div className="grid gap-4">

          <div className="flex items-center gap-3 rounded-2xl bg-white/15 p-4">

            <Clock />

            <span>45 Minutes</span>

          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white/15 p-4">

            <BookOpen />

            <span>Lesson 5 / 12</span>

          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white/15 p-4">

            <GraduationCap />

            <span>Intermediate</span>

          </div>

        </div>

      </div>

    </section>
  );
}