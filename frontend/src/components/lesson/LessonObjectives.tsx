"use client";

const objectives = [
  "Understand HTML structure",
  "Create basic webpages",
  "Use headings and paragraphs",
  "Understand HTML tags",
];

export default function LessonObjectives() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Learning Objectives
      </h2>

      <div className="mt-6 space-y-4">

        {objectives.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3"
          >

            <div className="h-3 w-3 rounded-full bg-sky-600"/>

            {item}

          </div>

        ))}

      </div>

    </section>
  );
}