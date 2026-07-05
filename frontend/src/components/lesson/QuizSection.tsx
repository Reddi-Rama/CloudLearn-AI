"use client";

import { CircleHelp } from "lucide-react";

const questions = [
  "What is Cloud Computing?",
  "Which deployment model is most secure?",
  "Which cloud service provides virtual machines?",
  "Which model offers maximum scalability?",
];

export default function QuizSection() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <CircleHelp
          className="text-blue-600"
          size={24}
        />

        <h2 className="text-2xl font-bold">
          Lesson Quiz
        </h2>

      </div>

      <p className="mt-4 text-slate-600">
        Answer these 4 questions to complete the lesson.
      </p>

      <div className="mt-8 space-y-4">

        {questions.map((question, index) => (

          <div
            key={question}
            className="rounded-2xl border border-slate-200 p-5"
          >

            <p className="font-semibold">
              Q{index + 1}. {question}
            </p>

            <button className="mt-4 rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              Answer Question
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}