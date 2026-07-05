"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface LessonFAQProps {
  faqs: FAQ[];
}

export default function LessonFAQ({
  faqs,
}: LessonFAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-3xl font-bold">

        Frequently Asked Questions

      </h2>

      <div className="space-y-4">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="rounded-2xl border border-slate-200"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="flex w-full items-center justify-between p-5"
            >

              <span className="font-semibold">

                {faq.question}

              </span>

              <ChevronDown />

            </button>

            {open === index && (

              <div className="border-t border-slate-200 p-5 text-slate-600">

                {faq.answer}

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}