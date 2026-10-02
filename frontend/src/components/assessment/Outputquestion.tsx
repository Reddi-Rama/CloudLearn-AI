"use client";

import { Terminal } from "lucide-react";

interface OutputQuestionProps {
  question?: string;
  code?: string;
}

export default function OutputQuestion({
  question = "Predict the output of the following program.",
  code = `print("Hello CloudLearn")`,
}: OutputQuestionProps) {
  return (
    <section
      className="
        rounded-[32px]
        border border-slate-200
        bg-white
        p-8
        shadow-lg
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex items-center gap-3">

        <Terminal
          size={28}
          className="text-indigo-600 dark:text-indigo-400"
        />

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Output Prediction
        </h2>

      </div>

      <p className="mt-6 text-lg text-slate-700 dark:text-slate-300">
        {question}
      </p>

      <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-900 p-6 dark:bg-black">
        <pre className="whitespace-pre-wrap font-mono text-sm text-green-400">
          <code>{code}</code>
        </pre>
      </div>

      <div className="mt-8">

        <label className="mb-2 block font-semibold text-slate-700 dark:text-slate-300">
          Your Answer
        </label>

        <input
          type="text"
          placeholder="Enter the expected output..."
          className="
            w-full
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-5
            py-4
            text-slate-900
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-sky-500
            focus:ring-2
            focus:ring-sky-200
            dark:border-slate-700
            dark:bg-slate-950
            dark:text-white
            dark:placeholder:text-slate-500
            dark:focus:border-sky-500
            dark:focus:ring-sky-500/20
          "
        />

      </div>
    </section>
  );
}