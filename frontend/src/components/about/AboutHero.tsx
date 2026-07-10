"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            About CloudLearn AI
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
            Learn Skills That
            <span className="text-sky-600"> Build Careers.</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            CloudLearn AI is a modern learning platform helping engineering
            students master programming, cloud computing, AI, data science,
            cybersecurity, and emerging technologies through structured,
            practical learning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/domains"
              className="rounded-2xl bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700"
            >
              Explore Courses
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:border-sky-500"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>

        <div className="flex justify-center">

          <div className="flex h-96 w-96 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 shadow-2xl">

            <GraduationCap
              size={140}
              className="text-white"
            />

          </div>

        </div>

      </div>

    </section>
  );
}