"use client";

import { Sparkles, BookOpen, Award } from "lucide-react";

export default function WelcomeCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 p-8 md:p-10 text-white shadow-2xl">

      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">

            <Sparkles size={18} />

            Welcome Back

          </div>

          <h1 className="mt-5 text-5xl font-black">

            Hello, Rama 👋

          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/90">

            Continue learning where you left off.
            Complete courses, pass assessments and earn verified certificates.

          </p>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

            <BookOpen className="mb-3"/>

            <p className="text-sm opacity-80">

              Current Course

            </p>

            <h3 className="font-bold">

              Python

            </h3>

          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

            <Award className="mb-3"/>

            <p className="text-sm opacity-80">

              Certificates

            </p>

            <h3 className="font-bold">

              2 Earned

            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}