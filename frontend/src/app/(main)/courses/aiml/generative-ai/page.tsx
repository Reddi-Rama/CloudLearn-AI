import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";

import module1 from "@/content/aiml/generative-ai/lessons/module1";
import module2 from "@/content/aiml/generative-ai/lessons/module2";

const modules = [
  {
    id: module1.id,
    number: "01",
    title: module1.title,
    description: module1.description,
    lessons: module1.lessonCount,
    icon: BrainCircuit,
    href: "/lesson/aiml/generative-ai/module1/about",
  },
  {
    id: module2.id,
    number: "02",
    title: module2.title,
    description:
      "Explore large language models through a structured sequence of lessons covering the concepts and engineering foundations of modern LLM systems.",
    lessons: module2.lessonCount,
    icon: Layers3,
    href: "/lesson/aiml/generative-ai/module2/about",
  },
];

export default function GenerativeAICoursePage() {
  const totalLessons = modules.reduce(
    (total, module) => total + module.lessons,
    0
  );

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-10">

        {/* Back */}
        <Link
          href="/domains/aiml"
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to AI & Machine Learning
        </Link>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-2xl sm:p-10 lg:p-12">

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative max-w-5xl">

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800">
                <Sparkles className="h-6 w-6 text-cyan-300" />
              </div>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Course 04
              </span>

              <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
                AI & Machine Learning
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Generative AI
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                & LLM Engineering
              </span>
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
              Build the conceptual and engineering foundation required to
              understand and build modern Generative AI systems, progressing
              from generative models and representations to large language
              models and application engineering.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                <BookOpen className="h-4 w-4 text-cyan-300" />
                2 Active Modules
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                <Sparkles className="h-4 w-4 text-violet-300" />
                {totalLessons} Lessons
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                <Zap className="h-4 w-4 text-emerald-300" />
                Foundations → LLMs
              </div>

            </div>

            <div className="mt-8">
              <Link
                href="/lesson/aiml/generative-ai/module1/about"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* Modules */}
        <section className="mt-10">

          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Learning Path
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Course Modules
            </h2>

            <p className="mt-2 max-w-2xl text-slate-400">
              Progress through the active Generative AI curriculum in sequence,
              from foundations to large language models.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <Link
                  key={module.id}
                  href={module.href}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl transition duration-200 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl transition group-hover:bg-cyan-500/10" />

                  <div className="relative">

                    <div className="flex items-start justify-between gap-5">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800">
                        <Icon className="h-6 w-6 text-cyan-300" />
                      </div>

                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                        {module.lessons} Lessons
                      </span>

                    </div>

                    <div className="mt-6">

                      <p className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                        MODULE {module.number}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        {module.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {module.description}
                      </p>

                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                      Explore Module
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>

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