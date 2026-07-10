"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is HTML?",
    answer: "HTML is the standard markup language used to create webpages.",
  },
  {
    question: "Is HTML a programming language?",
    answer: "No. HTML is a markup language that structures content.",
  },
  {
    question: "Can I build websites using only HTML?",
    answer: "Yes, but modern websites also use CSS and JavaScript.",
  },
];

export default function LessonFAQ() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-black">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-5">

        {faqs.map((faq) => (

          <div
            key={faq.question}
            className="rounded-2xl border p-5"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold">
                {faq.question}
              </h3>

              <ChevronDown />

            </div>

            <p className="mt-4 text-slate-600">
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}