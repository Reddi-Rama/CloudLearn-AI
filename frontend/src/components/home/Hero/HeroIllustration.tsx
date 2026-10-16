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

      <div className="absolute h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] rounded-full bg-sky-300/20 blur-3xl sm:h-[380px] sm:w-[380px] lg:h-[480px] lg:w-[480px]" />

      {/* Main Circle */}

      <div className="relative flex h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] items-center justify-center rounded-full border border-sky-200 bg-white shadow-2xl sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]">

        <Laptop
          size={82}
          className="text-sky-600 sm:hidden"
        />

        <Laptop
          size={110}
          className="hidden text-sky-600 sm:block"
        />

        {/* Floating Icons */}

        <div className="absolute left-2 top-5 rounded-xl bg-white p-2.5 sm:left-10 sm:top-8 sm:rounded-2xl sm:p-4 shadow-xl animate-bounce">

          <Cloud
            className="text-sky-500"
            size={32}
          />

        </div>

        <div className="absolute right-2 top-8 rounded-xl bg-white p-2.5 sm:right-8 sm:top-12 sm:rounded-2xl sm:p-4 shadow-xl animate-pulse">

          <Brain
            className="text-indigo-600"
            size={30}
          />

        </div>

        <div className="absolute bottom-4 left-5 rounded-xl bg-white p-2.5 sm:bottom-8 sm:left-12 sm:rounded-2xl sm:p-4 shadow-xl animate-bounce">

          <Code2
            className="text-emerald-500"
            size={30}
          />

        </div>

        <div className="absolute bottom-5 right-5 rounded-xl bg-white p-2.5 sm:bottom-10 sm:right-12 sm:rounded-2xl sm:p-4 shadow-xl animate-pulse">

          <Database
            className="text-orange-500"
            size={30}
          />

        </div>

        <div className="absolute left-1/2 top-1 -translate-x-1/2 rounded-xl bg-white p-2.5 sm:top-0 sm:rounded-2xl sm:p-4 shadow-xl animate-bounce">

          <ShieldCheck
            className="text-cyan-600"
            size={28}
          />

        </div>

      </div>

    </div>
  );
}