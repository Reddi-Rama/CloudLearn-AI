"use client";

import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";

export default function WelcomeCard() {
  return (
    <section className="rounded-[36px] bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 p-10 text-white shadow-2xl">

      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

        {/* Left */}

        <div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">

            <Sparkles size={18} />

            <span className="text-sm font-medium">
              Welcome Back
            </span>

          </div>

          <h1 className="text-5xl font-black leading-tight">
            Hello, Rama 👋
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100 leading-8">

            Continue your cloud learning journey. You're making
            excellent progress toward becoming an industry-ready
            engineer.

          </p>

          <Link
            href="/courses"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Continue Learning

            <ArrowRight size={20} />
          </Link>

        </div>

        {/* Right */}

        <div className="rounded-[32px] bg-white/15 p-8 backdrop-blur-lg">

          <div className="flex items-center gap-3">

            <Flame
              size={34}
              className="text-yellow-300"
            />

            <div>

              <h2 className="text-4xl font-black">
                15 Days
              </h2>

              <p className="text-blue-100">
                Learning Streak
              </p>

            </div>

          </div>

          <div className="mt-8 space-y-4">

            <div className="flex justify-between">

              <span>Overall Progress</span>

              <span className="font-bold">
                84%
              </span>

            </div>

            <div className="h-3 rounded-full bg-white/30">

              <div className="h-3 w-[84%] rounded-full bg-yellow-300" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}