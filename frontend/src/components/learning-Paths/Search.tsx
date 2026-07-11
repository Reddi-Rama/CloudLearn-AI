"use client";

import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <section className="py-10">

      <div className="mx-auto max-w-3xl px-6">

        <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-4 shadow-lg">

          <SearchIcon
            size={22}
            className="text-slate-400"
          />

          <input
            placeholder="Search Learning Paths..."
            className="ml-4 w-full bg-transparent outline-none"
          />

        </div>

      </div>

    </section>
  );
}