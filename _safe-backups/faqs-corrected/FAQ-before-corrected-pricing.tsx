"use client";

import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Do I need prior programming experience?",
    answer:
      "No. CloudLearn includes beginner-friendly courses that start with fundamental concepts and progressively move toward advanced topics, practical examples, exercises, and projects.",
  },
  {
    question: "What can I learn on CloudLearn?",
    answer:
      "CloudLearn provides structured learning paths covering programming, AI and machine learning, deep learning, generative AI, web development, and other technology-focused subjects.",
  },
  {
    question: "Are there video lectures?",
    answer:
      "No. CloudLearn focuses on interactive text-based lessons, explanations, diagrams, examples, quizzes, coding exercises, and practical learning instead of video lectures.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes. CloudLearn is designed for self-paced learning. You can progress through lessons and modules according to your own schedule.",
  },
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
      "Yes. The CloudLearn interface is designed to be responsive and usable across desktop, tablet, and mobile screen sizes.",
  },
  {
    question: "Can I practice coding while learning?",
    answer:
      "Yes. Relevant courses include programming examples and coding exercises so you can apply concepts instead of only reading theoretical material.",
  },
  {
    question: "How is my learning progress tracked?",
    answer:
      "CloudLearn tracks your learning progress so you can continue from where you left off and monitor your progress through courses and lessons.",
  },
  {
    question: "Do I need to complete every lesson in order?",
    answer:
      "Following the recommended lesson sequence is generally best because later concepts can build on earlier ones. Some learning paths may also provide structured module progression.",
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
            Everything you need to know about CloudLearn.
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