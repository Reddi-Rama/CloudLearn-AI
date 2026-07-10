"use client";

import { Send } from "lucide-react";

export default function SubmitButton() {
  return (
    <button className="flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700">

      <Send size={18} />

      Submit Solution

    </button>
  );
}