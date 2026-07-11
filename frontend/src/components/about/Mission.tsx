"use client";

import { Target } from "lucide-react";

export default function Mission() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-[40px] bg-white p-12 shadow-xl">

          <Target
            size={60}
            className="text-sky-600"
          />

          <h2 className="mt-8 text-4xl font-black">
            Our Mission
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            To make industry-level technology education accessible,
            practical, and affordable for every engineering student,
            enabling them to become confident professionals.
          </p>

        </div>

      </div>

    </section>
  );
}