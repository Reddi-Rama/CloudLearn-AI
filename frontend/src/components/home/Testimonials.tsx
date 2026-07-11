"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Programming Student",
    review:
      "CloudLearn made learning programming simple. The structured lessons and quizzes helped me improve quickly.",
  },
  {
    name: "Priya Sharma",
    role: "AI & ML Student",
    review:
      "The platform is beautiful and easy to use. The lesson assessments helped me remember concepts better.",
  },
  {
    name: "Arjun Patel",
    role: "Cloud Computing Student",
    review:
      "The certificate looks professional and the ₹30 fee makes certification affordable for students.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8FBFF] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Loved by Students
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Thousands of learners are building their careers with CloudLearn.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <div className="mb-5 flex">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-600">

                "{item.review}"

              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}