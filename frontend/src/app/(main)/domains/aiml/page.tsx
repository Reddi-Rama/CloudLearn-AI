import Link from "next/link";
import { ArrowRight, Brain, Cpu, Network, Sparkles } from "lucide-react";
import BackButton from "@/components/layout/BackButton";
import AIMLCourseAccessGate from "@/components/aiml/AIMLCourseAccessGate";

const courses = [
  {
    number: "01",
    title: "AI Foundations",
    description:
      "Understand artificial intelligence, intelligent systems, AI history, problem solving, agents, and real-world applications.",
    icon: Brain,
    href: "/courses/aiml/ai-foundations",
  },
  {
    number: "02",
    title: "Machine Learning",
    description:
      "Learn how machines discover patterns from data through supervised learning, unsupervised learning, preprocessing, evaluation, and real-world ML workflows.",
    icon: Cpu,
    href: "/courses/aiml/machine-learning",
  },
  {
    number: "03",
    title: "Deep Learning",
    description:
      "Build strong foundations in neural networks, optimization, computer vision, sequence models, and modern deep learning systems.",
    icon: Network,
    href: "/courses/aiml/deep-learning",
  },
  {
    number: "04",
    title: "Generative AI",
    description:
      "Explore generative models, large language models, prompting, embeddings, multimodal systems, and modern AI applications.",
    icon: Sparkles,
    href: "/courses/aiml/generative-ai",
  },
];

export default function AIMLDomainPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      <div className="fixed left-6 top-[92px] z-[99999]">
        <BackButton
          href="/domains"
          label="Back to Domains"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6">

        <section className="relative overflow-hidden rounded-[36px] border border-slate-800 bg-[#0f172a] px-8 py-14 shadow-2xl md:px-12 md:py-16">

          <div className="relative">
            <div className="inline-flex items-center rounded-full border border-sky-800 bg-sky-950/40 px-4 py-2 text-sm font-semibold text-sky-400">
              Learning Domain
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              Artificial Intelligence &
              <span className="block text-sky-400">
                Machine Learning
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              Choose a structured course and build your AI
              knowledge step by step, from foundational concepts
              to modern intelligent systems.
            </p>
          </div>
        </section>

        <AIMLCourseAccessGate
          course="ai-foundations"
          courseName="AIML Full Course"
          startHref="/courses/aiml/ai-foundations"
        />
        <section className="mt-10 grid gap-6 md:grid-cols-2">

          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <Link
                key={course.href}
                href={course.href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-slate-800
                  bg-[#0f172a]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-700
                  hover:bg-[#111c31]
                  hover:shadow-2xl
                "
              >
                <div className="flex items-start gap-6">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-sky-800
                      bg-sky-950/50
                      text-sky-400
                      transition-all
                      duration-300
                      group-hover:border-sky-600
                      group-hover:bg-sky-900/50
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <div className="flex-1">

                    <div className="mb-2 text-sm font-semibold text-sky-400">
                      COURSE {course.number}
                    </div>

                    <h2 className="text-2xl font-bold text-white">
                      {course.title}
                    </h2>

                    <p className="mt-3 leading-7 text-slate-400">
                      {course.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-400">
                      Explore Course
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                  </div>
                </div>
              </Link>
            );
          })}

        </section>

      </div>
    </main>
  );
}
