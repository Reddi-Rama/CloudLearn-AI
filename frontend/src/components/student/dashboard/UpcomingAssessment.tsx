"use client";

import AssessmentCard from "./AssessmentCard";

export default function UpcomingAssessments() {
  return (
    <section>

      <h2 className="mb-6 text-3xl font-black">
        Upcoming Assessments
      </h2>

      <div className="grid gap-5">

        <AssessmentCard
          subject="Cloud Computing"
          date="Tomorrow"
        />

        <AssessmentCard
          subject="Python Programming"
          date="Friday"
        />

      </div>

    </section>
  );
}