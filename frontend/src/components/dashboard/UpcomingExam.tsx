"use client";

import Link from "next/link";
import {
  CalendarDays,
  Clock,
  ArrowRight,
} from "lucide-react";

const exams = [
  {
    title: "Artificial Intelligence Quiz",
    date: "08 July 2026",
    time: "10:00 AM",
    type: "Quiz",
    color: "bg-blue-500",
  },
  {
    title: "Python Programming Assessment",
    date: "10 July 2026",
    time: "02:00 PM",
    type: "Assessment",
    color: "bg-green-500",
  },
  {
    title: "Cloud Computing Final Exam",
    date: "15 July 2026",
    time: "11:00 AM",
    type: "Final Exam",
    color: "bg-purple-500",
  },
];

export default function UpcomingExam() {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-slate-900">
          Upcoming Exams
        </h2>

        <Link
          href="/exam"
          className="font-semibold text-blue-600 hover:underline"
        >
          View All
        </Link>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {exams.map((exam) => (

          <div
            key={exam.title}
            className="rounded-[32px] bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="flex items-center justify-between">

              <div
                className={`rounded-full px-4 py-2 text-sm font-semibold text-white ${exam.color}`}
              >
                {exam.type}
              </div>

              <CalendarDays
                size={28}
                className="text-blue-600"
              />

            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {exam.title}
            </h3>

            <div className="mt-6 flex items-center gap-3 text-slate-600">

              <CalendarDays size={18} />

              <span>{exam.date}</span>

            </div>

            <div className="mt-3 flex items-center gap-3 text-slate-600">

              <Clock size={18} />

              <span>{exam.time}</span>

            </div>

            <Link
              href="/exam"
              className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >

              Start Exam

              <ArrowRight size={18} />

            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}