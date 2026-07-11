"use client";

import CourseProgressCard from "./CourseProgressCard";

export default function ContinueLearning() {
  return (
    <section>

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-black">
          Continue Learning
        </h2>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <CourseProgressCard
          title="Frontend Development"
          progress={72}
        />

        <CourseProgressCard
          title="Cloud Computing"
          progress={41}
        />

      </div>

    </section>
  );
}