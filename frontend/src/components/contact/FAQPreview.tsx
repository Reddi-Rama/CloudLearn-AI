"use client";

const faqs = [
  {
    question: "Are the learning paths free?",
    answer:
      "Yes. CloudLearn learning paths are free and help you explore structured learning journeys and discover the courses available in each path.",
  },
  {
    question: "Are the courses free?",
    answer:
      "No. Individual courses may require enrollment or payment to access their complete course content and learning features.",
  },
  {
    question: "Can I explore a course before enrolling?",
    answer:
      "Yes. CloudLearn provides course and learning-path information so you can understand what you will learn before deciding to enroll.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Eligible courses provide a certificate after you complete the required learning requirements and successfully complete the required assessment.",
  },
  {
    question: "Can I access CloudLearn on mobile devices?",
    answer:
      "Yes. CloudLearn is designed to be responsive and usable across desktop, tablet, and mobile devices.",
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