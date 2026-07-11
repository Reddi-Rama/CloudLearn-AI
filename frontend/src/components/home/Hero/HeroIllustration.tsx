"use client";

import {
  Cloud,
  Brain,
  Code2,
  Database,
  ShieldCheck,
  Laptop,
} from "lucide-react";

export default function HeroIllustration() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}

      <div className="absolute h-[480px] w-[480px] rounded-full bg-sky-300/20 blur-3xl" />

      {/* Main Circle */}

      <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-sky-200 bg-white shadow-2xl">

        <Laptop
          size={110}
          className="text-sky-600"
        />

        {/* Floating Icons */}

        <div className="absolute top-8 left-10 rounded-2xl bg-white p-4 shadow-xl animate-bounce">

          <Cloud
            className="text-sky-500"
            size={32}
          />

        </div>

        <div className="absolute top-12 right-8 rounded-2xl bg-white p-4 shadow-xl animate-pulse">

          <Brain
            className="text-indigo-600"
            size={30}
          />

        </div>

        <div className="absolute bottom-8 left-12 rounded-2xl bg-white p-4 shadow-xl animate-bounce">

          <Code2
            className="text-emerald-500"
            size={30}
          />

        </div>

        <div className="absolute bottom-10 right-12 rounded-2xl bg-white p-4 shadow-xl animate-pulse">

          <Database
            className="text-orange-500"
            size={30}
          />

        </div>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl animate-bounce">

          <ShieldCheck
            className="text-cyan-600"
            size={28}
          />

        </div>

      </div>

    </div>
  );
}