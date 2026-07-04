"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is CloudLearn?",
    answer:
      "CloudLearn is an all-in-one learning platform where you can master Programming, AI, Machine Learning, Data Science, Cloud Computing, Cyber Security, Full Stack Development and many more technologies through structured learning paths.",
  },
  {
    question: "Do I receive a certificate after completing a course?",
    answer:
      "Yes. After successfully completing all lessons, quizzes and the final assessment, you can unlock a verified CloudLearn certificate by paying ₹29.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. CloudLearn allows you to learn anytime, anywhere. Your progress is automatically saved so you can continue whenever you want.",
  },
  {
    question: "Are the assessments compulsory?",
    answer:
      "Yes. Every lesson contains a short assessment. You must pass it to unlock the next lesson. At the end of the course, you'll take a final assessment to earn your certificate.",
  },
  {
    question: "What domains are available on CloudLearn?",
    answer:
      "CloudLearn offers Programming, Artificial Intelligence, Machine Learning, Data Science, Cloud Computing, Cyber Security, DevOps, Full Stack Development, B.Tech Subjects and many more domains.",
  },
  {
    question: "Can I access courses after completion?",
    answer:
      "Yes. Once enrolled, you'll have lifetime access to your completed courses, notes, quizzes and certificates from your dashboard.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">

            FAQ

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Frequently Asked Questions

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">

            Find answers to the most commonly asked questions
            about CloudLearn.

          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >

                  <h3 className="text-xl font-semibold">

                    {faq.question}

                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {isOpen && (

                  <div className="border-t border-slate-100 px-7 py-6">

                    <p className="leading-8 text-slate-600">

                      {faq.answer}

                    </p>

                  </div>

                )}

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}