"use client";

import { ArrowRight } from "lucide-react";

export default function ContinueButton() {
  return (
    <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg">

      Continue To Next Lesson

      <ArrowRight size={18} />

    </button>
  );
}