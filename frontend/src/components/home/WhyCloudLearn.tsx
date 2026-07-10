"use client";

import {
  Brain,
  Cloud,
  Code2,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Powered Learning",
    description:
      "Personalized learning paths that adapt to your progress.",
  },
  {
    icon: Cloud,
    title: "Cloud Based Platform",
    description:
      "Access your courses anytime from any device.",
  },
  {
    icon: Code2,
    title: "Hands-on Coding",
    description:
      "Practice programming with interactive coding exercises.",
  },
  {
    icon: Award,
    title: "Industry Certificates",
    description:
      "Earn certificates after completing assessments.",
  },
];

export default function WhyCloudLearn() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Why CloudLearn AI?
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Learn Smarter,
            <span className="text-sky-600"> Not Harder</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Experience a next-generation learning platform designed
            specifically for engineering students with interactive
            learning paths, coding practice, assessments, and certificates.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-600">

                  <Icon
                    size={30}
                    className="text-sky-600 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}