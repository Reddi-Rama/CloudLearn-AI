"use client";

import { ClipboardList } from "lucide-react";

export default function QuizHeader() {
  return (
    <section className="mb-8 rounded-[32px] bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-white shadow-xl">

      <div className="flex items-center gap-5">

        <div className="rounded-3xl bg-white/20 p-5">

          <ClipboardList size={40} />

        </div>

        <div>

          <p className="text-blue-100">
            Python Programming
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Practice Quiz
          </h1>

          <p className="mt-2 text-blue-100">
            20 Questions • Unlimited Attempts
          </p>

        </div>

      </div>

    </section>
  );
}