"use client";

import { PencilLine } from "lucide-react";

interface ExerciseCardProps {
  title: string;
  description: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  onStart?: () => void;
}

export default function ExerciseCard({
  title,
  description,
  difficulty = "Easy",
  onStart,
}: ExerciseCardProps) {
  const difficultyColors = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <section className="mt-10 rounded-3xl border border-sky-200 bg-white p-8 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-full bg-sky-100 p-3">

            <PencilLine
              size={24}
              className="text-sky-600"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold">

              {title}

            </h2>

            <p className="text-slate-600">

              Practice what you've learned.

            </p>

          </div>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${difficultyColors[difficulty]}`}
        >
          {difficulty}
        </span>

      </div>

      <p className="mt-6 text-slate-600 leading-8">

        {description}

      </p>

      <button
        onClick={onStart}
        className="mt-8 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
      >
        Start Exercise
      </button>

    </section>
  );
}