"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-3 transition hover:opacity-90"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-indigo-600 text-white shadow-lg sm:h-12 sm:w-12 lg:h-14 lg:w-14">
        <GraduationCap
          size={26}
          strokeWidth={2.2}
        />
      </div>

      <div className="hidden sm:block">
        <h1 className="text-xl font-black tracking-tight text-slate-900 lg:text-2xl">
          CloudLearn AI
        </h1>

        <p className="text-xs font-medium text-slate-500 lg:text-sm">
          Learn • Build • Grow
        </p>
      </div>
    </Link>
  );
}