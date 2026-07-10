"use client";

const questions = Array.from(
  { length: 10 },
  (_, i) => i + 1
);

export default function AssessmentsSidebar() {
  return (
    <aside className="rounded-[30px] bg-white p-6 shadow-lg">

      <h2 className="text-xl font-bold">
        Question Navigator
      </h2>

      <div className="mt-6 grid grid-cols-5 gap-3">

        {questions.map((question) => (

          <button
            key={question}
            className="h-12 rounded-xl bg-slate-100 font-semibold transition hover:bg-blue-600 hover:text-white"
          >
            {question}
          </button>

        ))}

      </div>

    </aside>
  );
}