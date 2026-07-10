"use client";

import Diagram from "./Diagram";

export default function DiagramCard() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        HTML Structure
      </h2>

      <p className="mt-3 text-slate-600">
        Visual representation of a basic HTML document.
      </p>

      <div className="mt-8">

        <Diagram />

      </div>

    </section>
  );
}