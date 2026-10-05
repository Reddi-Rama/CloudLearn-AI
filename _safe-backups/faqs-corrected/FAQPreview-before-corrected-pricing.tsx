"use client";

const faqs = [
  {
    question: "Are courses free?",
    answer:
      "CloudLearn includes courses and learning content that may be available without payment, while some courses or learning features can require enrollment or payment depending on the course.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Eligible courses can provide a certificate after you complete the required learning requirements and successfully complete the required assessment.",
  },
  {
    question: "Can I access CloudLearn on mobile devices?",
    answer:
      "Yes. CloudLearn is designed to be responsive and usable across desktop, tablet, and mobile devices.",
  },
  {
    question: "Can I practice coding while learning?",
    answer:
      "Yes. Relevant courses include practical examples and coding exercises that help you apply concepts while learning.",
  },
  {
    question: "How is my learning progress tracked?",
    answer:
      "CloudLearn tracks your learning progress so you can continue learning from where you left off and monitor your progress through courses and lessons.",
  },
];

export default function FAQPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold">
                {faq.question}
              </h3>

              <p className="mt-4 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}