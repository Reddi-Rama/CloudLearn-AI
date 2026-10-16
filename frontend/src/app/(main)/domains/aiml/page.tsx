
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  BookOpen,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Network,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import BackButton from "@/components/layout/BackButton";
import AIMLCourseAccessGate from "@/components/aiml/AIMLCourseAccessGate";

const courses = [
  {
    number: "01",
    title: "AI Foundations",
    subtitle: "Start with intelligence",
    description:
      "Understand artificial intelligence, intelligent systems, AI history, problem solving, agents, and real-world applications.",
    icon: Brain,
    href: "/courses/aiml/ai-foundations",
    accent: "blue",
    topics: ["AI fundamentals", "Intelligent agents", "Problem solving"],
    level: "Beginner friendly",
  },
  {
    number: "02",
    title: "Machine Learning",
    subtitle: "Discover patterns in data",
    description:
      "Learn supervised and unsupervised learning, data preprocessing, model evaluation, and practical machine learning workflows.",
    icon: Cpu,
    href: "/courses/aiml/machine-learning",
    accent: "violet",
    topics: ["Learning algorithms", "Data preparation", "Model evaluation"],
    level: "Build your skills",
  },
  {
    number: "03",
    title: "Deep Learning",
    subtitle: "Build neural intelligence",
    description:
      "Explore neural networks, optimization, computer vision, sequence models, and modern deep learning systems.",
    icon: Network,
    href: "/courses/aiml/deep-learning",
    accent: "cyan",
    topics: ["Neural networks", "Computer vision", "Deep architectures"],
    level: "Go deeper",
  },
  {
    number: "04",
    title: "Generative AI",
    subtitle: "Create with modern AI",
    description:
      "Explore generative models, large language models, prompting, embeddings, multimodal systems, and AI applications.",
    icon: Sparkles,
    href: "/courses/aiml/generative-ai",
    accent: "rose",
    topics: ["Large language models", "Prompt engineering", "AI applications"],
    level: "Explore what's next",
  },
];

const accentStyles = {
  blue: {
    icon: "bg-blue-100 text-blue-700 ring-blue-200 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20",
    number: "text-blue-700 dark:text-blue-300",
    glow: "bg-blue-400/10",
    line: "from-blue-500 to-sky-400",
    hover: "group-hover:border-blue-300 dark:group-hover:border-blue-400/40",
  },
  violet: {
    icon: "bg-violet-100 text-violet-700 ring-violet-200 dark:bg-violet-400/10 dark:text-violet-300 dark:ring-violet-400/20",
    number: "text-violet-700 dark:text-violet-300",
    glow: "bg-violet-400/10",
    line: "from-violet-500 to-fuchsia-400",
    hover: "group-hover:border-violet-300 dark:group-hover:border-violet-400/40",
  },
  cyan: {
    icon: "bg-cyan-100 text-cyan-800 ring-cyan-200 dark:bg-cyan-400/10 dark:text-cyan-300 dark:ring-cyan-400/20",
    number: "text-cyan-800 dark:text-cyan-300",
    glow: "bg-cyan-400/10",
    line: "from-cyan-500 to-teal-400",
    hover: "group-hover:border-cyan-300 dark:group-hover:border-cyan-400/40",
  },
  rose: {
    icon: "bg-rose-100 text-rose-700 ring-rose-200 dark:bg-rose-400/10 dark:text-rose-300 dark:ring-rose-400/20",
    number: "text-rose-700 dark:text-rose-300",
    glow: "bg-rose-400/10",
    line: "from-rose-500 to-orange-400",
    hover: "group-hover:border-rose-300 dark:group-hover:border-rose-400/40",
  },
} as const;

export default function AIMLDomainPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f9ff] text-slate-900 transition-colors duration-300 dark:bg-[#070b18] dark:text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[680px] overflow-hidden"
      >
        <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-blue-300/20 blur-[110px] dark:bg-blue-600/10" />
        <div className="absolute -right-24 top-12 h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-[130px] dark:bg-violet-600/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent dark:from-transparent" />
      </div>

      <div className="fixed left-4 top-[92px] z-40 sm:left-6">
        <BackButton href="/domains" label="Back to Domains" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-7 md:pt-32 lg:px-10">
        {/* Hero */}
        <section className="relative isolate overflow-hidden rounded-[32px] border border-white/80 bg-white/80 px-6 py-10 shadow-[0_24px_80px_-35px_rgba(37,99,235,0.22)] backdrop-blur-xl dark:border-white/[0.09] dark:bg-[#0e1528]/90 dark:shadow-[0_24px_80px_-35px_rgba(59,130,246,0.16)] sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 via-violet-400/15 to-transparent blur-3xl"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_280px] lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/[0.08] dark:text-blue-300 sm:text-sm">
                <Sparkles size={15} />
                Your AI learning journey
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
                Master the future
                <span className="mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 bg-clip-text pb-2 text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-fuchsia-400">
                  with Artificial Intelligence.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                From your first AI concept to neural networks and
                generative models, follow a structured path to understand
                the technology transforming our world.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/courses/aiml/ai-foundations"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40"
                >
                  Start learning
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#explore-courses"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-blue-400/30 dark:hover:bg-blue-400/[0.07]"
                >
                  Explore courses
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-500" />
                  Structured learning
                </span>
                <span className="inline-flex items-center gap-2">
                  <Target size={17} className="text-blue-500" />
                  Practical concepts
                </span>
              </div>
            </div>

            {/* Decorative learning illustration */}
            <div className="relative mx-auto hidden w-full max-w-[260px] lg:block">
              <div className="absolute inset-3 rounded-[36px] bg-gradient-to-br from-blue-400/20 to-violet-400/20 blur-2xl" />

              <div className="relative rounded-[32px] border border-slate-200/80 bg-white/80 p-5 shadow-2xl shadow-blue-950/[0.07] dark:border-white/10 dark:bg-[#111a30]/90 dark:shadow-black/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                    AI universe
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                    <Sparkles size={16} />
                  </span>
                </div>

                <div className="relative my-7 flex h-40 items-center justify-center">
                  <div className="absolute h-36 w-36 rounded-full border border-dashed border-blue-300 dark:border-blue-400/30" />
                  <div className="absolute h-28 w-28 rounded-full border border-violet-300/80 dark:border-violet-400/30" />
                  <div className="absolute h-20 w-20 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-xl" />

                  <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-[26px] bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-violet-600/25">
                    <Brain size={38} strokeWidth={1.6} />
                  </div>

                  <span className="absolute right-5 top-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-blue-600 shadow-lg dark:border-white/10 dark:bg-[#17213a] dark:text-blue-300">
                    <Cpu size={20} />
                  </span>
                  <span className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-violet-600 shadow-lg dark:border-white/10 dark:bg-[#17213a] dark:text-violet-300">
                    <Network size={20} />
                  </span>
                  <span className="absolute bottom-1 right-4 flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-rose-600 shadow-lg dark:border-white/10 dark:bg-[#17213a] dark:text-rose-300">
                    <Sparkles size={17} />
                  </span>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                      <GraduationCap size={21} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        Learn by progression
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        Foundations to innovation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-11 grid grid-cols-1 gap-3 border-t border-slate-200/80 pt-7 dark:border-white/[0.09] sm:grid-cols-3 sm:gap-5 sm:pt-8">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50/80 p-4 dark:bg-white/[0.035] sm:bg-transparent sm:p-0 sm:dark:bg-transparent">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                <BookOpen size={21} />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight">04</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Learning pathways
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-50/80 p-4 dark:bg-white/[0.035] sm:bg-transparent sm:p-0 sm:dark:bg-transparent">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                <Target size={21} />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight">01–04</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Follow the sequence
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-50/80 p-4 dark:bg-white/[0.035] sm:bg-transparent sm:p-0 sm:dark:bg-transparent">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                <Zap size={21} />
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight">Learn</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  Build knowledge step by step
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Existing course access functionality */}
        <div className="mt-8">
          <AIMLCourseAccessGate
            course="ai-foundations"
            courseName="AIML Full Course"
            startHref="/courses/aiml/ai-foundations"
          />
        </div>

        {/* Course collection */}
        <section id="explore-courses" className="scroll-mt-24 pt-16 sm:pt-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
                <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                Explore the curriculum
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Your next chapter
                <span className="text-blue-600 dark:text-blue-400"> starts here.</span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                Choose a pathway, build your understanding, and progress
                toward modern AI technologies.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
              <BookOpen size={16} className="text-blue-600 dark:text-blue-400" />
              4 courses
            </div>
          </div>

          <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            {courses.map((course) => {
              const Icon = course.icon;
              const accent = accentStyles[course.accent];

              return (
                <Link
                  key={course.href}
                  href={course.href}
                  className={`group relative isolate flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/90 bg-white/90 p-6 shadow-[0_8px_35px_-22px_rgba(15,23,42,0.20)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-28px_rgba(37,99,235,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/40 dark:border-white/[0.09] dark:bg-[#101729]/90 dark:shadow-black/10 dark:hover:bg-[#131d33] sm:p-8 ${accent.hover}`}
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-16 -top-16 -z-10 h-48 w-48 rounded-full opacity-70 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${accent.glow}`}
                  />

                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r opacity-70 transition-opacity group-hover:opacity-100" >
                    <div className={`h-full w-full bg-gradient-to-r ${accent.line}`} />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className={`flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[19px] ring-1 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 ${accent.icon}`}>
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <span className={`pt-1 text-sm font-black tracking-[0.16em] ${accent.number}`}>
                      COURSE {course.number}
                    </span>
                  </div>

                  <div className="mt-6 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-500 dark:text-slate-400">
                      {course.subtitle}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 sm:text-[28px]">
                      {course.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-[15px]">
                      {course.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.035] dark:text-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-slate-200/80 pt-5 dark:border-white/[0.09]">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Learning pathway
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                        {course.level}
                      </p>
                    </div>

                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20 dark:bg-white/[0.07] dark:text-slate-200 dark:group-hover:bg-blue-500">
                      <ArrowUpRight size={21} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Closing call to action */}
        <section className="relative mt-12 overflow-hidden rounded-[30px] border border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-7 dark:border-white/[0.09] dark:from-blue-500/[0.09] dark:via-[#101729] dark:to-violet-500/[0.09] sm:mt-16 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-bold text-violet-700 dark:text-violet-300">
                <Sparkles size={17} />
                Your journey starts with one step
              </div>

              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                Curious today. Capable tomorrow.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                Begin with the fundamentals and keep building toward
                the skills needed to understand tomorrow&apos;s AI.
              </p>
            </div>

            <Link
              href="/courses/aiml/ai-foundations"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-100"
            >
              Begin your journey
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
