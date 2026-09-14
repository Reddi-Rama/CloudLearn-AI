import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MACHINE_LEARNING_STRUCTURE } from "@/content/aiml/machine-learning/machineLearningStructure";

export default function MachineLearningCoursePage() {
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
            Course 02
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Machine Learning
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
            Learn machine learning from foundational concepts through
            supervised learning, unsupervised learning, feature engineering,
            evaluation, tuning, pipelines, text machine learning, and
            real-world workflows.
          </p>
        </section>

        <section className="mt-12">
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">
              Course Structure
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Machine Learning Modules
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {MACHINE_LEARNING_STRUCTURE.map((module, index) => (
              <div
                key={module.id}
                className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-sky-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-lg bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700 dark:bg-sky-950/50 dark:text-sky-400">
                    Module {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs font-semibold text-zinc-500">
                    {module.lessons.length} lessons
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold leading-7">
                  {module.title.replace(/^Module \d+\s*[—-]\s*/, "")}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Explore the lessons in this module and build your
                  understanding step by step.
                </p>

                <Link
                  href={`/lesson/aiml/machine-learning/${module.id}/lesson1`}
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