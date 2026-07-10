"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-[40px] bg-gradient-to-r from-sky-600 via-cyan-500 to-indigo-600 px-10 py-20 text-center text-white shadow-2xl">

          <h2 className="text-5xl font-black">
            Start Your Learning Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-sky-100">
            Join thousands of students preparing for
            technology careers.
          </p>

          <Link
            href="/register"
            className="mt-10 inline-block rounded-2xl bg-white px-8 py-4 font-bold text-sky-700"
          >
            Get Started
          </Link>

        </div>

      </div>

    </section>
  );
}