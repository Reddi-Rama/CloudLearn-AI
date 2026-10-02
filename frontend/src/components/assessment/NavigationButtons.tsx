"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NavigationButtons() {
  return (
    <div className="flex justify-between">

      <button
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-slate-300
          bg-white
          px-6
          py-3
          font-semibold
          text-slate-700
          transition
          hover:bg-slate-100
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-slate-200
          dark:hover:bg-slate-800
        "
      >
        <ArrowLeft size={18} />
        Previous
      </button>

      <button
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          dark:bg-sky-600
          dark:hover:bg-sky-500
        "
      >
        Next
        <ArrowRight size={18} />
      </button>

    </div>
  );
}