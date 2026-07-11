"use client";

import { Eye } from "lucide-react";

export default function Vision() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-[40px] bg-white p-12 shadow-xl">

          <Eye
            size={60}
            className="text-indigo-600"
          />

          <h2 className="mt-8 text-4xl font-black">
            Our Vision
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We envision CloudLearn AI becoming the most trusted learning
            ecosystem where students build practical skills, earn industry
            certificates, and launch successful technology careers.
          </p>

        </div>

      </div>

    </section>
  );
}