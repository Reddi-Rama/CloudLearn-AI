"use client";

import { useState } from "react";
import { NotebookPen, Save, RotateCcw } from "lucide-react";

interface LessonNotesProps {
  initialValue?: string;
  onSave?: (notes: string) => void;
}

export default function LessonNotes({
  initialValue = "",
  onSave,
}: LessonNotesProps) {
  const [notes, setNotes] = useState(initialValue);

  const handleSave = () => {
    onSave?.(notes);
  };

  const handleClear = () => {
    setNotes("");
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">

          <NotebookPen
            size={28}
            className="text-sky-600"
          />

          <div>

            <h2 className="text-3xl font-bold">
              Lesson Notes
            </h2>

            <p className="text-slate-500">
              Save your own notes while learning.
            </p>

          </div>

        </div>

        <div className="flex gap-3">

          <button
            onClick={handleClear}
            className="flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 transition hover:bg-slate-100"
          >
            <RotateCcw size={18} />
            Clear
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2 font-semibold text-white transition hover:bg-sky-700"
          >
            <Save size={18} />
            Save
          </button>

        </div>

      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes here..."
        className="min-h-[280px] w-full rounded-2xl border border-slate-300 p-5 outline-none focus:border-sky-500"
      />

    </section>
  );
}