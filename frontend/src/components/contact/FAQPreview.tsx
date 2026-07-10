"use client";

const faqs = [
  {
    question: "Is CloudLearn AI free?",
    answer:
      "Yes, many beginner courses are available for free.",
  },
  {
    question: "Do I receive certificates?",
    answer:
      "Yes, after successfully completing assessments.",
  },
  {
    question: "Can I access courses on mobile?",
    answer:
      "Yes, CloudLearn AI is fully responsive.",
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