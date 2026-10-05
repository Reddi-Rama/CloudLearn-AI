"use client";

import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Do I need prior programming experience?",
    answer:
      "No. CloudLearn includes beginner-friendly learning paths and courses that start with fundamental concepts and progressively move toward advanced topics, practical examples, exercises, and projects.",
  },
  {
    question: "What can I learn on CloudLearn?",
    answer:
      "CloudLearn provides structured learning paths covering programming, AI and machine learning, deep learning, generative AI, web development, and other technology-focused subjects.",
  },
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
    question: "Can I practice coding while learning?",
    answer:
      "Yes. Relevant courses include programming examples and coding exercises so you can apply concepts instead of only reading theoretical material.",
  },
  {
    question: "How is my learning progress tracked?",
    answer:
      "CloudLearn tracks your learning progress so you can continue learning from where you left off and monitor your progress through courses and lessons.",
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