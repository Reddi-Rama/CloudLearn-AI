"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
} from "lucide-react";

interface CourseCompletedProps {
  courseTitle?: string;
  completedLessons?: number;
  totalLessons?: number;
  certificateAvailable?: boolean;
}

export default function CourseCompleted({
  courseTitle = "Cloud Computing Fundamentals",
  completedLessons = 12,
  totalLessons = 12,
  certificateAvailable = true,
}: CourseCompletedProps) {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl rounded-3xl border border-sky-100 bg-white p-10 shadow-xl"
      >
        {/* Success Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2
            size={54}
            className="text-green-600"
          />
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-center text-4xl font-bold text-slate-900">
          Congratulations!
        </h1>

        <p className="mt-4 text-center text-lg text-slate-600">
          You have successfully completed
        </p>

        <h2 className="mt-2 text-center text-2xl font-semibold text-sky-600">
          {courseTitle}
        </h2>

        {/* Stats */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-sky-50 p-6 text-center">
            <BookOpen
              className="mx-auto text-sky-600"
              size={32}
            />

            <h3 className="mt-3 text-3xl font-bold">
              {completedLessons}
            </h3>

            <p className="text-slate-500">
              Lessons Completed
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 p-6 text-center">
            <CheckCircle2
              className="mx-auto text-green-600"
              size={32}
            />

            <h3 className="mt-3 text-3xl font-bold">
              100%
            </h3>

            <p className="text-slate-500">
              Course Progress
            </p>
          </div>

          <div className="rounded-2xl bg-yellow-50 p-6 text-center">
            <Award
              className="mx-auto text-yellow-500"
              size={32}
            />

            <h3 className="mt-3 text-3xl font-bold">
              {certificateAvailable ? "Yes" : "No"}
            </h3>

            <p className="text-slate-500">
              Certificate
            </p>
          </div>
        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {certificateAvailable && (
            <Link
              href="/certificates"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-medium text-white transition hover:bg-sky-700"
            >
              <Download size={18} />
              Download Certificate
            </Link>
          )}

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Explore More Courses
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}