"use client";

import AnalyticsCard from "./AnalyticsCard";

const stats = [
  {
    title: "Course Completion",
    value: "92%",
    color: "bg-green-500",
  },
  {
    title: "Assessment Pass Rate",
    value: "88%",
    color: "bg-sky-500",
  },
    {
    title: "Monthly Revenue",
    value: "₹4.2L",
    color: "bg-indigo-500",
  },
];

export default function DashboardStats() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">

      {stats.map((item) => (

        <AnalyticsCard
          key={item.title}
          title={item.title}
          value={item.value}
          color={item.color}
        />

      ))}

    </section>
  );
}