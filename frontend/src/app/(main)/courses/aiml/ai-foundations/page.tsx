"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

import { AIML_MODULES } from "@/content/aiml/aimlRegistry";
const STORAGE_KEY = "cloudlearn-aiml-completed-lessons";

export default function AIFoundationsCoursePage() {
  const [completedCourseLessons, setCompletedCourseLessons] = useState(0);

  const totalCourseLessons = AIML_MODULES.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  const refreshCourseProgress = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        setCompletedCourseLessons(0);
        return;
      }

      const parsed = JSON.parse(stored);

      if (!Array.isArray(parsed)) {
        setCompletedCourseLessons(0);
        return;
      }

      const validCompletedLessons = new Set(
        parsed.filter(
          (item) =>
            typeof item === "string" &&
            item.startsWith("ai-foundations:")
        )
      );

      setCompletedCourseLessons(validCompletedLessons.size);
    } catch {
      setCompletedCourseLessons(0);
    }
  };

  useEffect(() => {
    refreshCourseProgress();

    window.addEventListener(
      "storage",
      refreshCourseProgress
    );

    return () => {
      window.removeEventListener(
        "storage",
        refreshCourseProgress
      );
    };
  }, []);

  const courseCompleted =
    totalCourseLessons > 0 &&
    completedCourseLessons === totalCourseLessons;

  return (<main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/domains/aiml"
            className="
              inline-flex items-center gap-2 rounded-xl
              border border-zinc-200 bg-white px-4 py-2.5
              text-sm font-semibold text-zinc-700
              transition hover:border-sky-300
              hover:bg-sky-50 hover:text-sky-700
              dark:border-zinc-800 dark:bg-zinc-900
              dark:text-zinc-300 dark:hover:border-sky-700
              dark:hover:bg-sky-950/40 dark:hover:text-sky-300
            "
          >
            â† Back to AI & Machine Learning
          </Link>
        </div>

        {/* Hero */}
        <section
          className="
            relative overflow-hidden rounded-[2rem]
            border border-zinc-200
            bg-gradient-to-br from-sky-50 via-white to-violet-50
            p-7 shadow-sm
            dark:border-zinc-800
            dark:from-sky-950/40
            dark:via-zinc-950
            dark:to-violet-950/30
            sm:p-10 lg:p-12
          "
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative">

            {/* Eyebrow */}
            <div
              className="
                mb-5 inline-flex items-center gap-2
                rounded-full border border-sky-200
                bg-white/80 px-4 py-2
                text-xs font-bold uppercase
                tracking-[0.18em] text-sky-700
                dark:border-sky-900
                dark:bg-zinc-900/70
                dark:text-sky-300
              "
            >
              <Sparkles className="h-4 w-4" />
              AI & Machine Learning
            </div>

            {/* Title */}
            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              AI Foundations
            </h1>

            {/* Description */}
            <p
              className="
                mt-5 max-w-3xl text-base
                leading-7 text-zinc-600
                dark:text-zinc-400 sm:text-lg
              "
            >
              Build a strong foundation in Artificial Intelligence through
              problem formulation, AI concepts, Python-based computing,
              mathematics, data, model fundamentals, evaluation and the
              complete AI project lifecycle.
            </p>

            {/* Course Stats */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div
                className="
                  rounded-xl border border-zinc-200
                  bg-white/80 px-4 py-2.5
                  text-sm font-semibold
                  dark:border-zinc-800
                  dark:bg-zinc-900/80
                "
              >
                6 Modules
              </div>

              <div
                className="
                  rounded-xl border border-zinc-200
                  bg-white/80 px-4 py-2.5
                  text-sm font-semibold
                  dark:border-zinc-800
                  dark:bg-zinc-900/80
                "
              >
                AI Fundamentals
              </div>

              <div
                className="
                  rounded-xl border border-zinc-200
                  bg-white/80 px-4 py-2.5
                  text-sm font-semibold
                  dark:border-zinc-800
                  dark:bg-zinc-900/80
                "
              >
                Mathematics + Data
              </div>

            </div>

{/* Course Completion Notice */}
            <div
              className="
                mt-8 rounded-2xl
                border border-sky-200
                bg-sky-50/80 p-5
                dark:border-sky-900/70
                dark:bg-sky-950/20
              "
            >
              <div className="flex items-start gap-4">

                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl
                    border border-sky-200
                    bg-white
                    text-sky-600
                    dark:border-sky-900
                    dark:bg-sky-950/60
                    dark:text-sky-300
                  "
                >
                  <BookOpen className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-black text-sky-700 dark:text-sky-300">
                    Complete the course first
                  </p>

                  <h2 className="mt-1 text-lg font-black text-zinc-950 dark:text-white">
                    The final assessment unlocks after all modules are completed
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Work through every lesson in all six modules. Once the
                    complete AI Foundations course is finished, the final
                    45-question assessment will become available.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Course Modules */}
        <section className="mt-10">

          <div className="mb-6">
            <p
              className="
                text-sm font-bold uppercase
                tracking-[0.18em]
                text-sky-600
                dark:text-sky-400
              "
            >
              Course Curriculum
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Explore the modules
            </h2>

            <p
              className="
                mt-2 max-w-2xl text-sm
                leading-6 text-zinc-500
                dark:text-zinc-400
              "
            >
              Complete the modules in sequence and finish every lesson
              to complete the AI Foundations course.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {AIML_MODULES.map((module, index) => (
              <article
                key={module.id}
                className="
                  group rounded-3xl
                  border border-zinc-200
                  bg-white p-6 shadow-sm
                  transition duration-200
                  hover:-translate-y-1
                  hover:border-sky-300
                  hover:shadow-xl
                  dark:border-zinc-800
                  dark:bg-zinc-900
                  dark:hover:border-sky-800
                "
              >

                {/* Module Header */}
                <div className="flex items-start justify-between gap-4">

                  <div
                    className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-2xl
                      bg-sky-50
                      text-sm font-black
                      text-sky-700
                      dark:bg-sky-950/50
                      dark:text-sky-300
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="
                      flex items-center gap-2
                      rounded-full
                      bg-zinc-100 px-3 py-1.5
                      text-xs font-semibold
                      text-zinc-600
                      dark:bg-zinc-800
                      dark:text-zinc-400
                    "
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    {module.lessons.length} lessons
                  </div>

                </div>

                {/* Module Content */}
                <h3 className="mt-5 text-xl font-bold leading-7">
                  {module.title}
                </h3>

                <p
                  className="
                    mt-3 text-sm leading-6
                    text-zinc-500
                    dark:text-zinc-400
                  "
                >
                  {module.description}
                </p>

                {/* Open Module */}
                <Link
                  href={`/lesson/aiml/${module.id}/lesson1`}
                  className="
                    mt-6 inline-flex items-center
                    gap-2 rounded-xl
                    bg-zinc-900 px-4 py-2.5
                    text-sm font-semibold text-white
                    transition hover:bg-sky-600
                    dark:bg-white
                    dark:text-zinc-900
                    dark:hover:bg-sky-400
                  "
                >
                  Open Module
                  <ArrowRight size={15} />
                </Link>

              </article>
            ))}

          </div>
        </section>

        {/* Course Completion Information */}
        <section
          className="
            mt-10 overflow-hidden
            rounded-3xl
            border border-violet-200
            bg-gradient-to-br
            from-violet-50
            via-white
            to-sky-50
            p-7
            dark:border-violet-900/60
            dark:from-violet-950/30
            dark:via-zinc-950
            dark:to-sky-950/20
            sm:p-9
          "
        >
          <div className="mx-auto max-w-4xl text-center">

            <div
              className="
                mx-auto flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-violet-100
                text-violet-600
                dark:bg-violet-950/60
                dark:text-violet-300
              "
            >
              <Sparkles className="h-6 w-6" />
            </div>

            <p
              className="
                mt-5 text-xs font-black
                uppercase tracking-[0.2em]
                text-violet-600
                dark:text-violet-400
              "
            >
              Final Assessment
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              {courseCompleted ? "Course Completed" : "Finish all six modules to unlock it"}
            </h2>

            <p
              className="
                mx-auto mt-3 max-w-2xl
                text-sm leading-6
                text-zinc-600
                dark:text-zinc-400
              "
            >
              The assessment is intentionally unavailable from this
              course page until every lesson in the AI Foundations
              course has been completed.
            </p>

            {courseCompleted ? (
  <Link
    href="/exam/ai-foundations"
    className="
      mt-6 inline-flex
      items-center justify-center
      gap-2 rounded-xl
      bg-gradient-to-r
      from-cyan-400
      to-violet-500
      px-6 py-3
      text-sm font-black
      text-slate-950
      shadow-lg
      shadow-violet-500/20
      transition-all duration-200
      hover:-translate-y-0.5
      hover:brightness-110
    "
  >
    Take Final Assessment →
  </Link>
) : (
  <div
    className="
      mt-6 inline-flex
      items-center justify-center
      rounded-xl
      border border-violet-200
      bg-violet-100
      px-5 py-3
      text-sm font-black
      text-violet-700
      dark:border-violet-900
      dark:bg-violet-950/50
      dark:text-violet-300
    "
  >
    Assessment Locked
  </div>
)}

          </div>
        </section>

      </div>
    </main>
  );
}




