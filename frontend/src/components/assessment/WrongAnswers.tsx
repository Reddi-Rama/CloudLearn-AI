"use client";

const wrongQuestions = [
  "Question 2",
  "Question 5",
];

export default function WrongAnswers() {
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
        Review Incorrect Answers
      </h2>

      <div className="mt-6 space-y-4">

        {wrongQuestions.map((question) => (
          <div
            key={question}
            className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900/60 dark:bg-red-950/30"
          >
            <p className="font-semibold text-red-700 dark:text-red-400">
              {question}
            </p>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Review this topic before attempting the assessment again.
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}