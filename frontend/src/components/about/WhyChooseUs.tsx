"use client";

import {
  Brain,
  Cloud,
  Code2,
  Award,
} from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "AI Assisted Learning",
  },
  {
    icon: Cloud,
    title: "Cloud First Platform",
  },
  {
    icon: Code2,
    title: "Hands-on Practice",
  },
  {
    icon: Award,
    title: "Verified Certificates",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-5xl font-black">

            Why Choose CloudLearn AI?

          </h2>

          <p className="mt-6 text-lg text-slate-600">

            Learn modern technologies through practical,
            structured and career-focused education.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-[32px] bg-white p-10 text-center shadow-xl transition hover:-translate-y-2"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-100">

                  <Icon
                    size={36}
                    className="text-sky-600"
                  />

                </div>

                <h3 className="mt-8 text-xl font-bold">

                  {item.title}

                </h3>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}