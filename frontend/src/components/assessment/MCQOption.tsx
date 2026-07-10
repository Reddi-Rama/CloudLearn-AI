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
          ? "border-blue-600 bg-blue-50"
          : "border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50"
      }`}
    >
      <span className="font-medium text-slate-800">
        {option}
      </span>
    </button>
  );
}