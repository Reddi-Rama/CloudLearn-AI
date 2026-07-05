"use client";

import { Award, ArrowRight } from "lucide-react";

interface LessonCompletionProps {
  onNextLesson?: () => void;
  onTakeQuiz?: () => void;
}

export default function LessonCompletion({
  onNextLesson,
  onTakeQuiz,
}: LessonCompletionProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-10 text-center text-white shadow-xl">

      <Award
        size={70}
        className="mx-auto"
      />

      <h2 className="mt-6 text-4xl font-bold">

        Lesson Completed 🎉

      </h2>

      <p className="mt-4 text-lg text-sky-100">

        Great job! Continue your learning journey.

      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <button
          onClick={onTakeQuiz}
          className="rounded-full bg-white px-8 py-3 font-semibold text-sky-700"
        >
          Take Quiz
        </button>

        <button
          onClick={onNextLesson}
          className="flex items-center gap-2 rounded-full border border-white px-8 py-3 font-semibold"
        >
          Next Lesson

          <ArrowRight size={18} />

        </button>

      </div>

    </section>
  );
}