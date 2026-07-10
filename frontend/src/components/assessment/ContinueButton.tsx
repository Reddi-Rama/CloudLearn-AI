"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContinueButton() {
  return (
    <div className="flex justify-center">

      <Link
        href="/dashboard"
        className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
      >

        Continue Learning

        <ArrowRight size={20} />

      </Link>

    </div>
  );
}