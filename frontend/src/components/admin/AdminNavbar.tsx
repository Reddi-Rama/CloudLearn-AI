"use client";

import { Bell, Search, UserCircle } from "lucide-react";

export default function AdminNavbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-6">

      <div>

        <h2 className="text-3xl font-bold">

          Admin Dashboard

        </h2>

      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search className="absolute left-4 top-3 text-gray-400" />

          <input
            placeholder="Search..."
            className="rounded-xl border py-3 pl-12 pr-5"
          />

        </div>

        <Bell />

        <UserCircle size={36} />

      </div>

    </header>
  );
}