"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="rounded-[28px] bg-white p-6 shadow-lg">

      <div className="relative">

        <Search
          size={22}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search courses, lessons, domains..."
          className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-5 outline-none transition focus:border-sky-500"
        />

      </div>

    </section>
  );
}