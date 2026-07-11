"use client";

import StatCard from "./StatCard";

export default function QuickStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Courses"
        value="12"
        color="text-sky-600"
      />

      <StatCard
        title="Completed"
        value="8"
        color="text-emerald-600"
      />

      <StatCard
        title="Certificates"
        value="5"
        color="text-orange-500"
      />

      <StatCard
        title="Assessments"
        value="18"
        color="text-indigo-600"
      />

    </section>
  );
}