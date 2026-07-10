"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-3xl px-6">

        <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5 py-4 shadow-lg">

          <Search
            size={22}
            className="text-slate-400"
          />

          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            placeholder="Search domains..."
            className="ml-4 w-full bg-transparent outline-none"
          />

        </div>

      </div>
    </section>
  );
}