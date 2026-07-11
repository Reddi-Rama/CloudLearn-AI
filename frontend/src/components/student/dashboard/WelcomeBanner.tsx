"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WelcomeBanner() {
  return (
    <section className="overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-600 via-cyan-500 to-indigo-600 p-10 text-white shadow-2xl">

      <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
        Welcome Back 👋
      </span>

      <h1 className="mt-6 text-5xl font-black">
        Continue Your Learning Journey
      </h1>

      <p className="mt-5 max-w-2xl text-lg text-sky-100">
        You're making great progress. Resume your learning and stay
        consistent to reach your goals.
      </p>

      <Link
        href="/courses"
        className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-sky-700"
      >
        Continue Learning

        <ArrowRight size={20} />
      </Link>

    </section>
  );
}