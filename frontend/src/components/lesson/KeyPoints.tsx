"use client";

const points = [
  "HTML provides webpage structure.",
  "Every HTML document begins with <!DOCTYPE html>.",
  "Elements are represented using tags.",
  "HTML works with CSS and JavaScript.",
];

export default function KeyPoints() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Key Takeaways
      </h2>

      <div className="mt-6 space-y-4">

        {points.map((point) => (

          <div
            key={point}
            className="flex gap-3"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-sky-600" />

            <span>{point}</span>

          </div>

        ))}

      </div>

    </section>
  );
}