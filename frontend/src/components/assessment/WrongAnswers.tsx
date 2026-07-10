"use client";

const wrongQuestions = [
  "Question 2",
  "Question 5",
];

export default function WrongAnswers() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Review Incorrect Answers
      </h2>

      <div className="mt-6 space-y-4">

        {wrongQuestions.map((question) => (

          <div
            key={question}
            className="rounded-2xl bg-red-50 p-5"
          >

            <p className="font-semibold text-red-700">
              {question}
            </p>

            <p className="mt-2 text-slate-600">
              Review this topic before attempting the assessment again.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}