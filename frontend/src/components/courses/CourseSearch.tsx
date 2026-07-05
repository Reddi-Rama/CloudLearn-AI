"use client";

import { Search } from "lucide-react";

export default function CourseSearch() {
  return (
    <section className="mx-auto mb-10 max-w-6xl px-4">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search courses..."
          className="w-full rounded-full border border-blue-100 bg-white py-4 pl-14 pr-6 text-base shadow-md outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>
    </section>
  );
}