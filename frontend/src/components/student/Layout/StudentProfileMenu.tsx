"use client";

import { Bell } from "lucide-react";

export default function StudentProfileMenu() {
  return (
    <div className="flex items-center gap-6">

      <button className="relative">

        <Bell size={22} />

        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500" />

      </button>

      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-600 text-white font-bold">

          R

        </div>

        <div>

          <h4 className="font-semibold">

            Student

          </h4>

          <p className="text-xs text-slate-500">

            CloudLearn AI

          </p>

        </div>

      </div>

    </div>
  );
}