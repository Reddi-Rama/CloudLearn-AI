"use client";

import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">

      {/* Background Gradient */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-sky-50 via-white to-slate-50" />

      {/* Blur Effects */}

      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <HeroContent />

        <div className="relative">

          <HeroIllustration />

          <FloatingCards />

        </div>

      </div>

    </section>
  );
}