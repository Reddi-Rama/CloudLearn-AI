export default function LessonFAQ() {
  const faqs = [
    {
      question: "Is this lesson important for interviews?",
      answer: "Yes. These concepts are commonly asked in interviews.",
    },
    {
      question: "Should I complete exercises?",
      answer: "Yes. Practice improves understanding and retention.",
    },
    {
      question: "Can I skip lessons?",
      answer: "It is recommended to complete lessons sequentially.",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Frequently Asked Questions
      </h2>

      <div className="mt-6 space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 p-5"
          >
            <h3 className="font-semibold text-slate-900">
              {faq.question}
            </h3>

            <p className="mt-3 text-slate-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}