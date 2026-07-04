"use client";

export default function LessonProgress() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex justify-between">

        <h2 className="text-2xl font-bold">

          Lesson Progress

        </h2>

        <span className="font-bold text-sky-600">

          58%

        </span>

      </div>

      <div className="mt-6 h-4 rounded-full bg-slate-200">

        <div className="h-full w-[58%] rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"/>

      </div>

    </section>
  );
}