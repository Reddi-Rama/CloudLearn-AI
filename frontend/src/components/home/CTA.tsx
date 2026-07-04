"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700" />

      {/* Glow */}

      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-[40px] border border-white/20 bg-white/10 p-14 text-center backdrop-blur-xl">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20">

            <Sparkles
              className="text-white"
              size={38}
            />

          </div>

          <h2 className="mt-8 text-5xl font-black text-white">

            Start Your Learning Journey Today

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">

            Join thousands of learners mastering Programming,
            Artificial Intelligence, Machine Learning,
            Data Science, Cloud Computing,
            Cyber Security and much more.

          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">

            <Link
              href="/domains"
              className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-bold text-sky-700 shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Explore Domains

              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

            <Link
              href="/register"
              className="rounded-2xl border border-white/40 bg-white/10 px-8 py-5 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              Create Free Account
            </Link>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div>

              <h3 className="text-4xl font-black text-white">

                100+

              </h3>

              <p className="mt-2 text-blue-100">

                Learning Paths

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-white">

                500+

              </h3>

              <p className="mt-2 text-blue-100">

                Interactive Lessons

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-white">

                50K+

              </h3>

              <p className="mt-2 text-blue-100">

                Future Learners

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}