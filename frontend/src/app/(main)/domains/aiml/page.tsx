import Link from "next/link";
import { ArrowRight, Brain, Cpu, Network, Sparkles } from "lucide-react";
import BackButton from "@/components/layout/BackButton";

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
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6">

        <div className="mb-10">
          <BackButton href="/domains" label="Back to Domains" />
        </div>

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

        <section className="mt-12">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-400">
              AI & Machine Learning Courses
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Choose Your Course
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Select a course to explore its modules, lessons,
              practice work, projects, and assessments.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <Link
                  key={course.number}
                  href={course.href}
                  className="group rounded-3xl border border-slate-800 bg-[#0f172a] p-7 transition hover:-translate-y-1 hover:border-sky-700 hover:bg-[#111c31]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-950/60 text-sky-400">
                      <Icon size={22} />
                    </div>

                    <span className="text-sm font-bold text-sky-400">
                      {course.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {course.title}
                  </h3>

                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">
                    {course.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-sky-600">
                    Explore Course
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}