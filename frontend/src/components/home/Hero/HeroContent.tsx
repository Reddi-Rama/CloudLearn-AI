"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const stats = [
  {
    value: "50K+",
    label: "Students",
  },
  {
    value: "500+",
    label: "Lessons",
  },
  {
    value: "25+",
    label: "Domains",
  },
];

export default function HeroContent() {
  return (
    <div>

      <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">

        ☁ Cloud-Based Learning Platform

      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">

        Learn.

        <br />

        Build.

        <br />

        <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">

          Grow.

        </span>

      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

        Learn Cloud Computing, Programming,
        Artificial Intelligence, Machine Learning,
        Data Science and modern technologies with
        beautifully designed learning paths,
        assessments and certificates.

      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          href="/domains"
          className="flex items-center gap-2 rounded-2xl bg-sky-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-sky-700"
        >
          Start Learning

          <ArrowRight size={20} />

        </Link>

        <Link
          href="/learning-paths"
          className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-600"
        >
          <PlayCircle size={20} />

          Explore Paths

        </Link>

      </div>

      <div className="mt-14 flex flex-wrap gap-10">

        {stats.map((item) => (

          <div key={item.label}>

            <h2 className="text-3xl font-black text-slate-900">

              {item.value}

            </h2>

            <p className="mt-2 text-slate-500">

              {item.label}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}