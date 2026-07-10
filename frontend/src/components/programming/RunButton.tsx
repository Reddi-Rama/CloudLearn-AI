"use client";

import { Play } from "lucide-react";

export default function RunButton() {
  return (
    <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">

      <Play size={18} />

      Run Code

    </button>
  );
}