"use client";

const timeline = [
  "Introduction",
  "Theory",
  "Examples",
  "Real World Example",
  "Summary",
  "Assessment",
];

export default function ModuleTimeline() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="mb-8 text-2xl font-bold">

        Lesson Flow

      </h2>

      <div className="space-y-6">

        {timeline.map((item, index) => (

          <div
            key={item}
            className="flex gap-5"
          >

            <div>

              <div className="h-5 w-5 rounded-full bg-sky-500"></div>

              {index !== timeline.length - 1 && (
                <div className="ml-2 h-12 w-[2px] bg-sky-300"></div>
              )}

            </div>

            <h3 className="font-semibold">

              {item}

            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}