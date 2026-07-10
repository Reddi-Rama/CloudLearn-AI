"use client";

import { PencilLine } from "lucide-react";

interface ExerciseCardProps {
  title?: string;
}

export default function ExerciseCard({
  title = "Practice Exercise",
}: ExerciseCardProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <PencilLine className="text-sky-600" />

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

      </div>

      <p className="mt-5 text-slate-600 leading-8">

        Create an HTML page containing:

      </p>

      <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-700">

        <li>Heading</li>

        <li>Paragraph</li>

        <li>Image</li>

        <li>Hyperlink</li>

      </ul>

    </section>
  );
}