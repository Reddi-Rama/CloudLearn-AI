"use client";

import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

export default function AdminNavbar() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b bg-white px-8 shadow-sm">

      <h1 className="text-3xl font-black text-sky-600">
        CloudLearn Admin
      </h1>

      <div className="flex items-center gap-6">

        <div className="flex items-center rounded-2xl border px-4 py-2">

          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 bg-transparent outline-none"
          />

        </div>

        <Bell
          size={24}
          className="cursor-pointer text-slate-600"
        />

        <UserCircle2
          size={36}
          className="cursor-pointer text-sky-600"
        />

      </div>

    </header>
  );
}