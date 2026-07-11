"use client";

import ProblemCard from "./ProblemCard";
import { problems } from "./ProgrammingData";

export default function ProblemList() {
  return (
    <section>

      <h2 className="mb-6 text-3xl font-black">
        Coding Problems
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {problems.map((problem) => (
          <ProblemCard
            key={problem.id}
            title={problem.title}
            difficulty={problem.difficulty}
          />
        ))}

      </div>

    </section>
  );
}