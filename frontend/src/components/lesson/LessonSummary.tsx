"use client";

export default function LessonSummary() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-black">

        Lesson Summary

      </h2>

      <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700">

        <li>HTML is the foundation of webpages.</li>

        <li>HTML uses tags to organize content.</li>

        <li>HTML works together with CSS and JavaScript.</li>

        <li>Every webpage starts with an HTML document.</li>

      </ul>

    </section>
  );
}