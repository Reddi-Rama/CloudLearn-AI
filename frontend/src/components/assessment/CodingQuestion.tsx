"use client";

interface CodingQuestionProps {
  starterCode: string;
}

export default function CodingQuestion({
  starterCode,
}: CodingQuestionProps) {
  return (
    <div className="glass-card rounded-3xl p-6">

      <h2 className="text-xl font-bold">
        Coding Question
      </h2>

      <textarea
        defaultValue={starterCode}
        className="mt-6 h-96 w-full rounded-2xl border border-blue-100 bg-slate-950 p-5 font-mono text-green-400 outline-none"
      />

    </div>
  );
}