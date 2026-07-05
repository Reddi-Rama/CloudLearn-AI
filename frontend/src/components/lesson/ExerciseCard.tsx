"use client";

import { PencilLine } from "lucide-react";

interface ExerciseCardProps {
  title: string;
  instruction: string;
}

export default function ExerciseCard({
  title,
  instruction,
}: ExerciseCardProps) {
  return (
    <section className="rounded-[30px] bg-gradient-to-br from-emerald-50 to-green-100 p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <PencilLine
          size={26}
          className="text-emerald-600"
        />

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

      </div>

      <p className="mt-6 leading-8 text-slate-700">
        {instruction}
      </p>

    </section>
  );
}