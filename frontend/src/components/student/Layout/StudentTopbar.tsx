"use client";

import { Search } from "lucide-react";

import StudentProfileMenu from "./StudentProfileMenu";

export default function StudentTopbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-white px-8">

      <div className="flex items-center gap-4 rounded-2xl border px-5 py-3">

        <Search size={20} />

        <input
          placeholder="Search courses..."
          className="bg-transparent outline-none"
        />

      </div>

      <StudentProfileMenu />

    </header>
  );
}