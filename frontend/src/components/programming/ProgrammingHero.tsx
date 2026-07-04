"use client";

import { Code2 } from "lucide-react";

export default function ProgrammingHero() {
  return (
    <section className="py-16">

      <div className="mx-auto max-w-7xl px-6 text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-xl">

          <Code2 size={46} />

        </div>

        <h1 className="mt-8 text-6xl font-black">
          Programming
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          Learn programming from beginner to advanced through
          structured lessons, quizzes, projects and certification.
        </p>

      </div>

    </section>
  );
}