"use client";

import Link from "next/link";
import {
  Search,
  Bell,
  Settings,
  UserCircle2,
} from "lucide-react";

export default function DashboardNavbar() {
  return (
    <div className="mb-8 flex flex-col gap-5 rounded-[32px] bg-white p-6 shadow-xl lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Student Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Track your learning journey and achievements.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
          />

        </div>

        {/* Notification */}

        <Link
          href="/notifications"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-blue-100"
        >

          <Bell
            size={22}
            className="text-slate-700"
          />

        </Link>

        {/* Settings */}

        <Link
          href="/settings"
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 transition hover:bg-blue-100"
        >

          <Settings
            size={22}
            className="text-slate-700"
          />

        </Link>

        {/* Profile */}

        <Link
          href="/profile"
          className="flex items-center gap-3 rounded-2xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >

          <UserCircle2 size={22} />

          <span className="font-medium">
            My Profile
          </span>

        </Link>

      </div>

    </div>
  );
}