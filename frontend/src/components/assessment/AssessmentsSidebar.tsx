"use client";

const questions = Array.from(
  { length: 10 },
  (_, i) => i + 1
);

export default function AssessmentsSidebar() {
  return (
    <aside
      className="
        rounded-[30px]
        border border-slate-200
        bg-white
        p-6
        shadow-lg
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Question Navigator
      </h2>

      <div className="mt-6 grid grid-cols-5 gap-3">

        {questions.map((question) => (
          <button
            key={question}
            className="
              h-12
              rounded-xl
              bg-slate-100
              font-semibold
              text-slate-700
              transition
              hover:bg-blue-600
              hover:text-white
              dark:bg-slate-800
              dark:text-slate-200
              dark:hover:bg-sky-600
              dark:hover:text-white
            "
          >
            {question}
          </button>
        ))}

      </div>
    </aside>
  );
}