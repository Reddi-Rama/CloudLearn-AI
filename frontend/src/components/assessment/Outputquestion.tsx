"use client";

interface OutputQuestionProps {
  output: string;
}

export default function OutputQuestion({
  output,
}: OutputQuestionProps) {
  return (
    <div className="glass-card rounded-3xl p-6">

      <h2 className="text-xl font-bold">
        Expected Output
      </h2>

      <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-900 p-5 text-green-400">

{output}

      </pre>

    </div>
  );
}