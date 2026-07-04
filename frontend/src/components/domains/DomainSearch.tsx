"use client";

import { Search } from "lucide-react";

export default function DomainSearch() {
  return (
    <section className="pb-12">

      <div className="mx-auto max-w-3xl px-6">

        <div className="flex items-center rounded-2xl bg-white px-6 py-5 shadow-lg">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="Search Domains..."
            className="ml-4 w-full bg-transparent outline-none"
          />

        </div>

      </div>

    </section>
  );
}