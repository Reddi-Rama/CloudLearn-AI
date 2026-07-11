"use client";

export default function LessonNotes() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        My Notes
      </h2>

      <textarea
        rows={10}
        placeholder="Write your personal notes..."
        className="mt-6 w-full rounded-2xl border p-5 outline-none focus:border-sky-500"
      />

    </section>
  );
}