"use client";

import { NotebookPen } from "lucide-react";

export default function LessonNotes() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <NotebookPen
          size={24}
          className="text-blue-600"
        />

        <h2 className="text-2xl font-bold">
          Personal Notes
        </h2>

      </div>

      <textarea
        rows={8}
        placeholder="Write your notes here..."
        className="mt-6 w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-blue-500"
      />

    </section>
  );
}