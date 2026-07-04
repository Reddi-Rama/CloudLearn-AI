"use client";

const activities = [
  {
    title: "Completed Python Lesson 5",
    time: "Today",
  },
  {
    title: "Passed Assessment",
    time: "Yesterday",
  },
  {
    title: "Certificate Earned",
    time: "2 Days Ago",
  },
  {
    title: "Started Machine Learning",
    time: "Last Week",
  },
];

export default function ActivityTimeline() {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-2xl font-bold">

        Recent Activity

      </h2>

      <div className="space-y-8">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="flex gap-5"
          >

            <div className="flex flex-col items-center">

              <div className="h-4 w-4 rounded-full bg-sky-500"></div>

              {index !== activities.length - 1 && (
                <div className="mt-2 h-14 w-[2px] bg-slate-300"></div>
              )}

            </div>

            <div>

              <h3 className="font-semibold">

                {activity.title}

              </h3>

              <p className="text-sm text-slate-500">

                {activity.time}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}