"use client";

const searches = [
  "Python Programming",
  "Cloud Computing",
  "Machine Learning",
  "Data Analytics",
  "JavaScript",
];

export default function RecentSearches() {
  return (
    <section className="rounded-[30px] bg-white p-6 shadow-lg">

      <h2 className="text-2xl font-bold">
        Recent Searches
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">

        {searches.map((item) => (

          <button
            key={item}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium transition hover:bg-sky-100"
          >
            {item}
          </button>

        ))}

      </div>

    </section>
  );
}