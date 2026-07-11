"use client";

import ProblemList from "./ProblemList";

export default function ProgrammingSidebar() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="mb-6 text-2xl font-bold">
        Problems
      </h2>

      <ProblemList />

    </section>
  );
}