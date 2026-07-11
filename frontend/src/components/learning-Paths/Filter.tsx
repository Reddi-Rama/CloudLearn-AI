"use client";

const filters = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function Filter() {
  return (
    <section className="pb-12">

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">

        {filters.map((item) => (

          <button
            key={item}
            className="rounded-full border border-slate-300 px-6 py-3 transition hover:bg-sky-600 hover:text-white"
          >
            {item}
          </button>

        ))}

      </div>

    </section>
  );
}