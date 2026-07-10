"use client";

import { Search } from "lucide-react";

export default function SearchHeader() {
  return (
    <section className="rounded-[32px] bg-gradient-to-r from-sky-600 to-indigo-700 p-8 text-white shadow-xl">

      <div className="flex items-center gap-4">

        <Search size={40} />

        <div>

          <h1 className="text-4xl font-black">
            Search
          </h1>

          <p className="mt-2 text-blue-100">
            Find courses, lessons, learning paths and assessments instantly.
          </p>

        </div>

      </div>

    </section>
  );
}