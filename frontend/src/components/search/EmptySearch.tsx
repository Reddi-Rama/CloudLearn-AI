"use client";

import { SearchX } from "lucide-react";

export default function EmptySearch() {
  return (
    <section className="rounded-[32px] bg-white p-16 text-center shadow-lg">

      <SearchX
        size={70}
        className="mx-auto text-slate-400"
      />

      <h2 className="mt-6 text-3xl font-bold">
        No Results Found
      </h2>

      <p className="mt-4 text-slate-500">
        Try searching with different keywords or browse available courses.
      </p>

    </section>
  );
}