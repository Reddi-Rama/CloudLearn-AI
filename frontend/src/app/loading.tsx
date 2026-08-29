"use client";

import { Cloud } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
      <div className="flex flex-col items-center">

        {/* Cloud animation */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          
          <div className="absolute h-24 w-24 animate-ping rounded-full bg-sky-200 opacity-30" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-xl">
            <Cloud
              size={42}
              strokeWidth={2.5}
              className="animate-pulse text-white"
            />
          </div>

        </div>

        {/* Brand */}
        <h2 className="mt-5 text-2xl font-black text-slate-900">
          CloudLearn AI
        </h2>

        <p className="mt-2 text-sm font-medium text-slate-500">
          Loading your learning experience
          <span className="ml-1">
            ...
          </span>
        </p>

      </div>
    </main>
  );
}