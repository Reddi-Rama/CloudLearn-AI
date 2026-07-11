"use client";

import { Save, PlusCircle } from "lucide-react";

export default function QuestionEditor() {
  return (
    <section className="rounded-[32px] bg-white p-8 shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Question Editor
          </h2>

          <p className="mt-2 text-slate-500">
            Create and manage assessment questions for CloudLearn AI.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700">

          <PlusCircle size={20} />

          New Question

        </button>

      </div>

      <div className="mt-10 grid gap-6">

        {/* Question Title */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Question Title
          </label>

          <input
            type="text"
            placeholder="Enter question title..."
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
          />

        </div>

        {/* Question Type */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Question Type
          </label>

          <select className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500">

            <option>Multiple Choice (MCQ)</option>

            <option>Coding Question</option>

            <option>Output Prediction</option>

            <option>True / False</option>

          </select>

        </div>

        {/* Question */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Question
          </label>

          <textarea
            rows={5}
            placeholder="Write your question..."
            className="w-full rounded-2xl border border-slate-300 p-5 outline-none transition focus:border-sky-500"
          />

        </div>

        {/* Options */}

        <div className="grid gap-4 md:grid-cols-2">

          <input
            type="text"
            placeholder="Option A"
            className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-sky-500"
          />

          <input
            type="text"
            placeholder="Option B"
            className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-sky-500"
          />

          <input
            type="text"
            placeholder="Option C"
            className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-sky-500"
          />

          <input
            type="text"
            placeholder="Option D"
            className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-sky-500"
          />

        </div>

        {/* Correct Answer */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Correct Answer
          </label>

          <input
            type="text"
            placeholder="Example: Option A"
            className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500"
          />

        </div>

        {/* Explanation */}

        <div>

          <label className="mb-2 block font-semibold text-slate-700">
            Explanation
          </label>

          <textarea
            rows={4}
            placeholder="Explain why this answer is correct..."
            className="w-full rounded-2xl border border-slate-300 p-5 outline-none transition focus:border-sky-500"
          />

        </div>

        {/* Save */}

        <div className="pt-4">

          <button className="flex items-center gap-3 rounded-2xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">

            <Save size={20} />

            Save Question

          </button>

        </div>

      </div>

    </section>
  );
}