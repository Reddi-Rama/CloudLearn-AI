"use client";

import { Search } from "lucide-react";

export default function CourseSearch() {
  return (
    <div className="flex items-center rounded-2xl border bg-white px-5 py-4">

      <Search size={20} />

      <input
        placeholder="Search your courses..."
        className="ml-4 w-full outline-none"
      />

    </div>
  );
}