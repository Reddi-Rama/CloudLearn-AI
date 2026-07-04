"use client";

import {
  CalendarDays,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function UpcomingExam() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-indigo-600 to-sky-500 p-8 text-white shadow-xl">

      <h2 className="text-3xl font-bold">

        Upcoming Assessment

      </h2>

      <div className="mt-8 space-y-6">

        <div className="flex items-center gap-4">

          <CalendarDays />

          <span>

            Python Final Assessment

          </span>

        </div>

        <div className="flex items-center gap-4">

          <Clock3 />

          <span>

            30 Questions

          </span>

        </div>

        <div className="rounded-2xl bg-white/15 p-5">

          <p className="text-white/90">

            Complete all modules before attempting
            the final assessment.

          </p>

        </div>

        <button className="mt-4 flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-indigo-600">

          View Details

          <ArrowRight size={18} />

        </button>

      </div>

    </section>
  );
}