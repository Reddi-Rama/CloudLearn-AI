"use client";

interface MCQOptionProps {
  option: string;
  selected?: boolean;
}

export default function MCQOption({
  option,
  selected = false,
}: MCQOptionProps) {
  return (
    <button
      className={`w-full rounded-2xl border p-5 text-left transition-all ${
        selected
          ? "border-blue-600 bg-blue-50 text-slate-900 dark:border-sky-500 dark:bg-sky-950/40 dark:text-white"
          : "border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:bg-slate-800"
      }`}
    >
      <span className="font-medium text-slate-800 dark:text-slate-200">
        {option}
      </span>
    </button>
  );
}