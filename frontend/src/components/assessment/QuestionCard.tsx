"use client";

interface QuestionCardProps {
  question: string;
}

export default function QuestionCard({
  question,
}: QuestionCardProps) {
  return (
    <section className="rounded-[32px] bg-white p-8 shadow-lg">

      <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">

        Question

      </div>

      <h2 className="text-2xl font-bold leading-relaxed text-slate-900">

        {question}

      </h2>

    </section>
  );
}