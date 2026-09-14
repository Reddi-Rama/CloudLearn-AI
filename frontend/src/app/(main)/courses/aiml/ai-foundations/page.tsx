import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AIML_MODULES } from "@/content/aiml/aimlRegistry";

export default function AIFoundationsCoursePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-6">

        <Link
          href="/domains/aiml"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:text-sky-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
        >
          <ArrowLeft size={16} />
          Back to AI & Machine Learning
        </Link>

        <section className="mt-8 rounded-[30px] border border-zinc-200 bg-white px-7 py-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
            Course 01
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            AI & Machine Learning Foundations
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
            Build a strong foundation in artificial intelligence and machine
            learning through structured modules, practical concepts, and
            step-by-step lessons.
          </p>
        </section>

        <section className="mt-12">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
              Course Structure
            </p>

            <h2 className="mt-2 text-3xl font-black">
              AI Foundations Modules
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {AIML_MODULES.map((module) => (
              <div
                key={module.id}
                className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-lg bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700 dark:bg-sky-950/50 dark:text-sky-400">
                    Module {String(module.number).padStart(2, "0")}
                  </span>

                  <span className="text-xs font-semibold text-zinc-500">
                    {module.lessons.length} lessons
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold leading-7">
                  {module.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {module.description}
                </p>

                <Link
                  href={`/lesson/aiml/${module.id}/about`}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-600 dark:bg-white dark:text-zinc-900 dark:hover:bg-sky-400"
                >
                  Open Module
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
