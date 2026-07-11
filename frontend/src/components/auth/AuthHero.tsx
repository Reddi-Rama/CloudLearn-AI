"use client";

import {
  Brain,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Trophy,
} from "lucide-react";

export default function AuthHero() {
  return (
    <section className="hidden lg:flex flex-col justify-center px-16 xl:px-24">

      <div className="max-w-xl">

        <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-sky-500 to-indigo-600 shadow-2xl">

          <GraduationCap
            size={48}
            className="text-white"
          />

        </div>

        <span className="mt-10 inline-block rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">

          Cloud-Based Learning Platform

        </span>

        <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900">

          Learn

          <span className="text-sky-600">
            {" "}Smarter
          </span>

          <br />

          Build

          <span className="text-indigo-600">
            {" "}Faster
          </span>

        </h1>

        <p className="mt-8 text-xl leading-9 text-slate-600">

          Learn Cloud Computing, AI,
          Programming, Data Science,
          Cyber Security and modern
          technologies with structured
          learning paths.

        </p>

        <div className="mt-12 grid grid-cols-2 gap-6">

          <div className="flex items-center gap-3">

            <Brain className="text-sky-600" />

            AI Powered

          </div>

          <div className="flex items-center gap-3">

            <Sparkles className="text-yellow-500" />

            Interactive

          </div>

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-emerald-500" />

            Secure

          </div>

          <div className="flex items-center gap-3">

            <Trophy className="text-orange-500" />

            Certificates

          </div>

        </div>

      </div>

    </section>
  );
}