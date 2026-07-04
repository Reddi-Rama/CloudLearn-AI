"use client";

import { BookOpen } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-500 to-indigo-600 p-12 text-white shadow-2xl">

      <BookOpen size={55}/>

      <h1 className="mt-8 text-6xl font-black">

        Python Programming

      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9">

        Master Python from beginner to advanced through
        structured lessons, assessments, projects and
        certification.

      </p>

      <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-bold text-sky-600">

        Start Learning

      </button>

    </section>
  );
}