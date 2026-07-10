"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function EmptyCourses() {
  return (
    <section className="flex min-h-[450px] items-center justify-center">

      <div className="max-w-md rounded-[36px] bg-white p-12 text-center shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-sky-100">

          <BookOpen
            size={42}
            className="text-sky-600"
          />

        </div>

        <h2 className="mt-8 text-3xl font-black text-slate-900">

          No Courses Yet

        </h2>

        <p className="mt-5 leading-7 text-slate-600">

          You haven't enrolled in any courses yet.
          Explore CloudLearn AI and start your first
          learning journey today.

        </p>

        <Link
          href="/domains"
          className="mt-10 inline-flex rounded-2xl bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700"
        >
          Explore Courses
        </Link>

      </div>

    </section>
  );
}