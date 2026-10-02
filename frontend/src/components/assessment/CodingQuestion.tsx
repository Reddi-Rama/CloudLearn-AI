"use client";

interface CodingQuestionProps {
  title: string;
  starterCode: string;
}

export default function CodingQuestion({
  title,
  starterCode,
}: CodingQuestionProps) {
  return (
    <section
      className="
        rounded-[30px]
        border border-slate-200
        bg-white
        p-8
        shadow-lg
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      <textarea
        defaultValue={starterCode}
        className="
          mt-6
          h-80
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          p-5
          font-mono
          text-sm
          text-green-400
          outline-none
          focus:border-sky-500
          dark:bg-black
        "
      />
    </section>
  );
}