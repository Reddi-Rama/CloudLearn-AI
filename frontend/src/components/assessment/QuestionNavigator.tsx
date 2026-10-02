"use client";

interface QuestionNavigatorProps {
  total: number;
  current: number;
}

export default function QuestionNavigator({
  total,
  current,
}: QuestionNavigatorProps) {
  return (
    <section
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
      <h2 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">
        Navigate Questions
      </h2>

      <div className="grid grid-cols-5 gap-3">

        {Array.from(
          { length: total },
          (_, index) => (
            <button
              key={index}
              className={`h-12 rounded-xl font-semibold transition ${
                current === index + 1
                  ? "bg-blue-600 text-white dark:bg-sky-600"
                  : "bg-slate-100 text-slate-700 hover:bg-blue-100 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {index + 1}
            </button>
          )
        )}

      </div>
    </section>
  );
}