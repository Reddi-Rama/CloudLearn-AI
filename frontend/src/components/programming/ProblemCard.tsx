"use client";

interface ProblemCardProps {
  title: string;
  difficulty: string;
}

export default function ProblemCard({
  title,
  difficulty,
}: ProblemCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition">

      <div className="flex justify-between">

        <h3 className="text-xl font-bold">
          {title}
        </h3>

        <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700">
          {difficulty}
        </span>

      </div>

      <button className="mt-6 rounded-xl bg-sky-600 px-5 py-3 text-white">
        Solve
      </button>

    </div>
  );
}