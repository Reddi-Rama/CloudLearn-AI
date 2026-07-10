"use client";

import { Terminal } from "lucide-react";

interface OutputQuestionProps {
  question?: string;
  code?: string;
}

export default function OutputQuestion({
  question = "Predict the output of the following program.",
  code = `print("Hello CloudLearn AI")`,
}: OutputQuestionProps) {
  return (
    <section className="rounded-[32px] bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <Terminal
          size={28}
          className="text-indigo-600"
        />

        <h2 className="text-2xl font-bold text-slate-900">
          Output Prediction
        </h2>

      </div>

      <p className="mt-6 text-lg text-slate-700">
        {question}
      </p>

      <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-900 p-6">

        <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">
          <code>{code}</code>
        </pre>

      </div>

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700">
          Your Answer
        </label>

        <input
          type="text"
          placeholder="Enter the expected output..."
          className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />

      </div>

    </section>
  );
}