"use client";

import { Target } from "lucide-react";

const objectives = [
  "Understand the core concept",
  "Identify important terminology",
  "Apply concepts to real examples",
  "Prepare for the lesson assessment",
];

export default function LessonObjectives() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <Target className="text-blue-600" />

        <h2 className="text-2xl font-bold">
          Learning Objectives
        </h2>

      </div>

      <ul className="mt-6 space-y-4">

        {objectives.map((item) => (

          <li
            key={item}
            className="flex items-center gap-3"
          >

            <span className="h-2 w-2 rounded-full bg-blue-600" />

            {item}

          </li>

        ))}

      </ul>

    </section>
  );
}