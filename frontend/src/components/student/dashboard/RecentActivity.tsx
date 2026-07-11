"use client";

import ActivityCard from "./ActivityCard";

export default function RecentActivity() {
  return (
    <section>

      <h2 className="mb-6 text-3xl font-black">
        Recent Activity
      </h2>

      <div className="space-y-4">

        <ActivityCard
          title="Completed HTML Basics"
          time="Today • 10:20 AM"
        />

        <ActivityCard
          title="Attempted Python Quiz"
          time="Yesterday"
        />

        <ActivityCard
          title="Downloaded SQL Notes"
          time="2 Days Ago"
        />

      </div>

    </section>
  );
}