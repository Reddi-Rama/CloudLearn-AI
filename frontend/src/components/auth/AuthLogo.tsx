"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function AuthLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg">
        <GraduationCap size={28} />
      </div>

      <div>
        <h1 className="text-2xl font-black text-slate-900">
          CloudLearn AI
        </h1>

        <p className="text-sm text-slate-500">
          Learn • Build • Grow
        </p>
      </div>
    </Link>
  );
}