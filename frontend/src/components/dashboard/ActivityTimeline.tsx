"use client";

const activities = [
  "Completed Artificial Intelligence Lesson",
  "Finished Python Quiz",
  "Downloaded AI Certificate",
  "Started Cloud Computing Course",
  "Completed Machine Learning Assignment",
];

export default function ActivityTimeline() {
  return (
    <section className="mt-14">

      <div className="rounded-[32px] bg-white p-8 shadow-lg">

        <h2 className="mb-8 text-3xl font-bold">
          Recent Activity
        </h2>

        <div className="space-y-6">

          {activities.map((activity, index) => (

            <div
              key={index}
              className="flex items-center gap-5"
            >

              <div className="h-4 w-4 rounded-full bg-blue-600" />

              <p className="text-lg text-slate-700">
                {activity}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}