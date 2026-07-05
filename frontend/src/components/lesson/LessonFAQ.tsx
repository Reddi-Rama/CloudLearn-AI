"use client";

const faqs = [
  {
    question: "Why is this concept important?",
    answer:
      "It builds the foundation for the upcoming lessons.",
  },
  {
    question: "Should I memorize everything?",
    answer:
      "Focus on understanding the concepts instead of memorizing.",
  },
  {
    question: "Can I skip this lesson?",
    answer:
      "No. Complete each lesson before moving forward.",
  },
];

export default function LessonFAQ() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-6">

        {faqs.map((faq) => (

          <div
            key={faq.question}
            className="rounded-2xl bg-slate-50 p-5"
          >

            <h3 className="font-bold">
              {faq.question}
            </h3>

            <p className="mt-3 text-slate-600 leading-7">
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}