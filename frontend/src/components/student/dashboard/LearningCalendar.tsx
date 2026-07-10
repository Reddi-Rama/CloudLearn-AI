"use client";

const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export default function LearningCalendar() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Weekly Goal
      </h2>

      <p className="mt-2 text-slate-500">
        Study at least 5 days this week.
      </p>

      <div className="mt-8 flex justify-between">

        {days.map((day, index) => (

          <div
            key={day}
            className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold ${
              index < 4
                ? "bg-sky-600 text-white"
                : "bg-slate-100"
            }`}
          >
            {day}
          </div>

        ))}

      </div>

    </section>
  );
}