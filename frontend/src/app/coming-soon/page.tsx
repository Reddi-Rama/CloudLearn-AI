"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function ComingSoonPage() {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");

  const backHref =
    from === "domains"
      ? "/domains"
      : "/";

  const backLabel =
    from === "domains"
      ? "Back to Domains"
      : "Back to Home";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7fbff]">

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[10%] top-[12%] h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

        <div className="absolute right-[10%] top-[22%] h-80 w-80 rounded-full bg-cyan-200/25 blur-3xl" />

        <div className="absolute bottom-[8%] left-[40%] h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

      </div>

      <Link
        href={backHref}
        className="
          absolute
          left-5
          top-5
          z-20
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-200
          bg-white/90
          px-4
          py-2.5
          text-sm
          font-semibold
          text-slate-700
          shadow-lg
          backdrop-blur
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-sky-300
          hover:text-sky-600
        "
      >
        <ArrowLeft size={17} />
        {backLabel}
      </Link>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-sky-200
            bg-white/85
            px-5
            py-2.5
            text-sm
            font-bold
            uppercase
            tracking-[0.18em]
            text-sky-600
            shadow-[0_8px_30px_rgba(14,165,233,0.10)]
          "
        >
          <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
          CloudLearn
        </div>

        <h1
          className="
            mt-8
            bg-gradient-to-r
            from-sky-500
            via-blue-600
            to-cyan-500
            bg-clip-text
            text-6xl
            font-black
            tracking-tight
            text-transparent
            sm:text-7xl
            md:text-8xl
            lg:text-9xl
          "
        >
          Coming Soon
        </h1>

        <div className="mt-7 flex items-center gap-3">

          <span className="h-px w-16 bg-sky-300" />

          <Sparkles
            size={20}
            className="text-sky-500"
          />

          <span className="h-px w-16 bg-sky-300" />

        </div>

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
          This learning domain is currently being prepared.
        </p>

      </div>

    </main>
  );
}