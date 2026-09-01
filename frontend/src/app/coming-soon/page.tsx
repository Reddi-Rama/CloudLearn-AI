"use client";

import { Sparkles } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7fbff]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="absolute right-[10%] top-[25%] h-80 w-80 rounded-full bg-cyan-200/25 blur-3xl" />

        <div className="absolute bottom-[8%] left-[45%] h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      </div>

      {/* Floating Sparkles */}
      <div className="pointer-events-none absolute inset-0">

        <Sparkles
          size={22}
          className="absolute left-[18%] top-[24%] animate-pulse text-sky-400"
        />

        <Sparkles
          size={16}
          className="absolute right-[24%] top-[30%] animate-pulse text-cyan-400"
        />

        <Sparkles
          size={20}
          className="absolute bottom-[26%] left-[25%] animate-pulse text-blue-400"
        />

        <Sparkles
          size={14}
          className="absolute bottom-[22%] right-[20%] animate-pulse text-sky-300"
        />

      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Badge */}
        <div
          className="
            mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-sky-200
            bg-white/80
            px-5
            py-2.5
            text-sm
            font-bold
            uppercase
            tracking-[0.2em]
            text-sky-600
            shadow-[0_8px_30px_rgba(14,165,233,0.12)]
            backdrop-blur-md
          "
        >
          <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
          CloudLearn AI
        </div>

        {/* Coming Soon */}
        <h1
          className="
            bg-gradient-to-r
            from-sky-500
            via-blue-600
            to-cyan-500
            bg-clip-text
            text-6xl
            font-black
            tracking-tight
            text-transparent
            drop-shadow-sm
            sm:text-7xl
            md:text-8xl
            lg:text-9xl
          "
        >
          Coming Soon
        </h1>

        {/* Accent */}
        <div className="mt-7 flex items-center gap-3">
          <span className="h-px w-16 bg-sky-300" />

          <Sparkles
            size={20}
            className="text-sky-500"
          />

          <span className="h-px w-16 bg-sky-300" />
        </div>

        {/* Small Text */}
        <p
          className="
            mt-7
            max-w-xl
            text-base
            leading-7
            text-slate-500
            sm:text-lg
          "
        >
          We are preparing something great for this learning experience.
        </p>

      </div>

    </main>
  );
}