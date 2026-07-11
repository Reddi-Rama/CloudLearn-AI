"use client";

export default function BookmarkFilter() {
  return (
    <section className="rounded-[28px] bg-white p-6 shadow-lg">

      <h2 className="mb-4 text-xl font-bold">
        Filter Bookmarks
      </h2>

      <div className="flex flex-wrap gap-3">

        <button className="rounded-full bg-sky-600 px-5 py-2 font-semibold text-white">
          All
        </button>

        <button className="rounded-full bg-slate-100 px-5 py-2 font-semibold transition hover:bg-slate-200">
          Programming
        </button>

        <button className="rounded-full bg-slate-100 px-5 py-2 font-semibold transition hover:bg-slate-200">
          Cloud
        </button>

        <button className="rounded-full bg-slate-100 px-5 py-2 font-semibold transition hover:bg-slate-200">
          AI & ML
        </button>

      </div>

    </section>
  );
}