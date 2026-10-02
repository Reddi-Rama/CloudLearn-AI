"use client";

interface QuestionCardProps {
  question: string;
}

export default function QuestionCard({
  question,
}: QuestionCardProps) {
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
      <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700 dark:bg-sky-950/60 dark:text-sky-300">
        Question
      </div>

      <h2 className="text-2xl font-bold leading-relaxed text-slate-900 dark:text-white">
        {question}
      </h2>
    </section>
  );
}