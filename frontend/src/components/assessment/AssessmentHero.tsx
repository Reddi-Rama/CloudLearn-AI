"use client";

import { ClipboardCheck, Trophy } from "lucide-react";

export default function AssessmentHero() {
  return (
    <section className="rounded-[36px] bg-gradient-to-r from-sky-600 to-indigo-700 p-10 text-white shadow-xl">

      <div className="flex items-center gap-3">

        <ClipboardCheck size={40} />

        <div>

          <h1 className="text-4xl font-black">
            Course Assessment
          </h1>

          <p className="mt-2 text-blue-100">
            Test your understanding and unlock your certificate.
          </p>

        </div>

      </div>

      <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2">

        <Trophy size={18} />

        <span>Pass Score : 70%</span>

      </div>

    </section>
  );
}