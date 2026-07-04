"use client";

import {
  Bell,
  Search,
} from "lucide-react";

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b bg-white px-8 py-5">

      <div className="relative w-[420px]">

        <Search className="absolute left-4 top-4 text-slate-400" />

        <input
          placeholder="Search courses..."
          className="w-full rounded-2xl border py-4 pl-12 pr-5 outline-none"
        />

      </div>

      <div className="flex items-center gap-5">

        <button className="rounded-xl bg-slate-100 p-3">

          <Bell />

        </button>

        <img
          src="/images/avatar.png"
          className="h-12 w-12 rounded-full"
          alt=""
        />

      </div>

    </header>
  );
}