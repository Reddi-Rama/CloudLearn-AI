"use client";

import {
  ClipboardCheck,
  Clock3,
  Trophy,
  ArrowRight,
} from "lucide-react";

interface AssessmentsCardProps {
  title?: string;
  description?: string;
  questions?: number;
  duration?: string;
  passScore?: string;
}

export default function AssessmentsCard({
  title = "Module Assessment",
  description = "Evaluate your understanding of this module before moving to the next lesson.",
  questions = 10,
  duration = "20 Minutes",
  passScore = "70%",
}: AssessmentsCardProps) {
  return (
    <section className="rounded-[32px] bg-white p-8 shadow-lg">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-3xl font-black text-slate-900">
            {title}
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            {description}
          </p>

        </div>

        <ClipboardCheck
          size={42}
          className="text-sky-600"
        />

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-50 p-5">

          <ClipboardCheck
            size={24}
            className="text-sky-600"
          />

          <p className="mt-3 text-sm text-slate-500">
            Questions
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            {questions}
          </h3>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <Clock3
            size={24}
            className="text-orange-500"
          />

          <p className="mt-3 text-sm text-slate-500">
            Duration
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            {duration}
          </h3>

        </div>

        <div className="rounded-2xl bg-slate-50 p-5">

          <Trophy
            size={24}
            className="text-yellow-500"
          />

          <p className="mt-3 text-sm text-slate-500">
            Pass Score
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            {passScore}
          </h3>

        </div>

      </div>

      <div className="mt-8">

        <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-7 py-4 font-semibold text-white transition hover:scale-[1.02]">

          Start Assessment

          <ArrowRight size={20} />

        </button>

      </div>

    </section>
  );
}