"use client";

import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Do I need prior programming experience?",
    answer:
      "No. CloudLearn AI starts from the basics and gradually progresses to advanced topics.",
  },
  {
    question: "Are there video lectures?",
    answer:
      "No. CloudLearn AI provides interactive lessons, diagrams, quizzes, coding exercises and notes instead of video lectures.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes. You can continue learning whenever it is convenient for you.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Complete the required lessons and assessments to unlock your certificate.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="container-custom max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know about CloudLearn AI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}