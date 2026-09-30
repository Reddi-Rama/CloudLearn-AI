"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Flag,
  RotateCcw,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";

import {
  AIML_EXAM_BANKS,
  AIMLCourseSlug,
  AIMLQuestion,
} from "./aimlExamBanks";

type Props = {
  course: AIMLCourseSlug;
};

type PreparedQuestion = AIMLQuestion & {
  shuffledOptions: {
    text: string;
    originalIndex: number;
  }[];
};

const COURSE_META: Record<
  AIMLCourseSlug,
  {
    title: string;
    eyebrow: string;
    accent: string;
    description: string;
  }
> = {
  "ai-foundations": {
    title: "AI Foundations",
    eyebrow: "AIML • FINAL ASSESSMENT",
    accent: "cyan",
    description:
      "Reasoning across AI concepts, mathematics, data, models, evaluation and the complete AI project lifecycle.",
  },

  "machine-learning": {
    title: "Machine Learning",
    eyebrow: "AIML • FINAL ASSESSMENT",
    accent: "violet",
    description:
      "A rigorous assessment of supervised and unsupervised learning, preprocessing, features, evaluation, tuning and real-world ML.",
  },

  "deep-learning": {
    title: "Deep Learning",
    eyebrow: "AIML • FINAL ASSESSMENT",
    accent: "fuchsia",
    description:
      "Test neural-network reasoning, optimization, CNN architecture, computer vision and production deep-learning decisions.",
  },

  "generative-ai": {
    title: "Generative AI",
    eyebrow: "AIML • FINAL ASSESSMENT",
    accent: "emerald",
    description:
      "Challenge yourself on LLMs, prompting, embeddings, vector retrieval, RAG, multimodality, agents and LLMOps.",
  },
};

function shuffle<T>(items: T[]) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function prepare(
  bank: AIMLQuestion[]
): PreparedQuestion[] {
  return shuffle(bank).map((question) => ({
    ...question,

    shuffledOptions: shuffle(
      question.options.map(
        (text, originalIndex) => ({
          text,
          originalIndex,
        })
      )
    ),
  }));
}

export default function AIMLExam({
  course,
}: Props) {
  const meta = COURSE_META[course];

  const [questions, setQuestions] =
    useState<PreparedQuestion[]>(() =>
      prepare(AIML_EXAM_BANKS[course])
    );

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] =
    useState<Record<string, number>>({});

  const [marked, setMarked] =
    useState<Record<string, boolean>>({});

  const [submitted, setSubmitted] =
    useState(false);

  const [reviewFilter, setReviewFilter] =
    useState<
      "all" | "wrong" | "unanswered"
    >("all");

  const [dark, setDark] = useState(true);

  const selected =
    answers[questions[current]?.id];

  const answeredCount =
    Object.keys(answers).length;

  const markedCount =
    Object.values(marked).filter(Boolean)
      .length;

  const result = useMemo(() => {
    if (!submitted) {
      return null;
    }

    let correct = 0;

    for (const q of questions) {
      if (answers[q.id] === q.answer) {
        correct++;
      }
    }

    const unanswered =
      questions.length - answeredCount;

    const percentage = Math.round(
      (correct / questions.length) * 100
    );

    return {
      correct,
      wrong:
        questions.length -
        correct -
        unanswered,
      unanswered,
      percentage,
      passed: percentage >= 70,
    };
  }, [
    submitted,
    questions,
    answers,
    answeredCount,
  ]);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      dark
    );
  }, [dark]);

  function selectAnswer(
    optionIndex: number
  ) {
    if (submitted) {
      return;
    }

    setAnswers((prev) => ({
      ...prev,
      [questions[current].id]:
        optionIndex,
    }));
  }

  function retake() {
    setQuestions(
      prepare(AIML_EXAM_BANKS[course])
    );

    setCurrent(0);
    setAnswers({});
    setMarked({});
    setSubmitted(false);
    setReviewFilter("all");
  }

  /*
   * =========================================================
   * RESULT SCREEN
   * =========================================================
   */

  if (submitted && result) {
    const review = questions.filter((q) => {
      if (reviewFilter === "wrong") {
        return (
          answers[q.id] !== undefined &&
          answers[q.id] !== q.answer
        );
      }

      if (
        reviewFilter === "unanswered"
      ) {
        return answers[q.id] === undefined;
      }

      return true;
    });

    return (
      <main
        className={`aiml-exam-page ${
          dark
            ? "aiml-exam-dark min-h-screen bg-[#050816] text-white"
            : "aiml-exam-light min-h-screen bg-slate-50 text-slate-950"
        }`}
      >
        <ExamLightModeStyles />

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          <header className="mb-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">

            <div>
              <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
                <Sparkles className="h-4 w-4" />

                Assessment complete
              </div>

              <h1 className="text-xl font-black sm:text-2xl">
                {meta.title} Final Assessment
              </h1>
            </div>

            <button
              onClick={() =>
                setDark(!dark)
              }
              className="exam-theme-toggle rounded-xl border border-white/10 px-3 py-2 text-sm font-bold"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </header>

          <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-2xl sm:p-10">

            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center">

              <div
                className="mx-auto flex h-52 w-52 items-center justify-center rounded-full p-3"
                style={{
                  background: `conic-gradient(rgb(34 211 238) ${
                    result.percentage * 3.6
                  }deg, rgba(255,255,255,.08) 0deg)`,
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#080d20]">
                  <span className="text-5xl font-black">
                    {result.percentage}%
                  </span>

                  <span className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                    score
                  </span>
                </div>
              </div>

              <div>

                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
                  {result.passed ? (
                    <Trophy className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <CircleAlert className="h-4 w-4 text-amber-400" />
                  )}

                  {result.passed
                    ? "Assessment Passed"
                    : "Assessment Not Passed"}
                </div>

                <h2 className="text-3xl font-black sm:text-4xl">
                  {result.correct} /{" "}
                  {questions.length} correct
                </h2>

                <p className="mt-3 max-w-2xl text-slate-400">
                  Passing score:{" "}
                  <strong className="text-white">
                    70%
                  </strong>
                  . Review every question below
                  to understand the reasoning behind
                  the correct answer.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <Stat
                    label="Correct"
                    value={result.correct}
                  />

                  <Stat
                    label="Wrong"
                    value={result.wrong}
                  />

                  <Stat
                    label="Unanswered"
                    value={result.unanswered}
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">

                  <button
                    onClick={retake}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-bold text-slate-950"
                  >
                    <RotateCcw className="h-4 w-4" />

                    Retake with new order
                  </button>

                  <Link
                    href={`/courses/aiml/${course}`}
                    className="rounded-2xl border border-white/10 px-5 py-3 font-bold"
                  >
                    Back to course
                  </Link>

                </div>
              </div>
            </div>
          </section>

          <section className="mt-6">

            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

              <div>
                <h2 className="text-2xl font-black">
                  Detailed Review
                </h2>

                <p className="text-sm text-slate-400">
                  Your selected answer, the correct
                  answer, and the reasoning.
                </p>
              </div>

              <div className="flex gap-2">

                {(
                  [
                    "all",
                    "wrong",
                    "unanswered",
                  ] as const
                ).map((filter) => (
                  <button
                    key={filter}
                    onClick={() =>
                      setReviewFilter(filter)
                    }
                    className={`rounded-xl px-3 py-2 text-sm font-bold ${
                      reviewFilter === filter
                        ? "bg-cyan-400 text-slate-950"
                        : "border border-white/10 bg-white/5 text-slate-300"
                    }`}
                  >
                    {filter === "all"
                      ? "All"
                      : filter === "wrong"
                      ? "Wrong"
                      : "Unanswered"}
                  </button>
                ))}

              </div>
            </div>

            <div className="space-y-4">

              {review.map((q, index) => {
                const userIndex =
                  answers[q.id];

                const correctText =
                  q.options[q.answer];

                const userText =
                  userIndex === undefined
                    ? "Not answered"
                    : q.options[userIndex];

                const ok =
                  userIndex === q.answer;

                return (
                  <article
                    key={q.id}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7"
                  >

                    <div className="mb-4 flex flex-wrap items-center gap-2">

                      <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-black">
                        Q{index + 1}
                      </span>

                      <span className="rounded-lg bg-cyan-400/10 px-2.5 py-1 text-xs font-bold text-cyan-300">
                        {q.topic}
                      </span>

                      <span
                        className={`ml-auto rounded-lg px-2.5 py-1 text-xs font-bold ${
                          ok
                            ? "bg-emerald-400/10 text-emerald-300"
                            : userIndex === undefined
                            ? "bg-amber-400/10 text-amber-300"
                            : "bg-rose-400/10 text-rose-300"
                        }`}
                      >
                        {ok
                          ? "Correct"
                          : userIndex === undefined
                          ? "Unanswered"
                          : "Incorrect"}
                      </span>

                    </div>

                    <h3 className="text-base font-bold leading-7">
                      {q.question}
                    </h3>

                    <div className="mt-5 grid gap-3 md:grid-cols-2">

                      <ReviewBox
                        title="Your answer"
                        value={userText}
                        good={ok}
                      />

                      <ReviewBox
                        title="Correct answer"
                        value={correctText}
                        good
                      />

                    </div>

                    <div className="mt-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-4 text-sm leading-6 text-slate-300">
                      <strong className="text-cyan-300">
                        Why:
                      </strong>{" "}
                      {q.explanation}
                    </div>

                  </article>
                );
              })}

            </div>
          </section>
        </div>
      </main>
    );
  }

  /*
   * =========================================================
   * EXAM SCREEN
   * =========================================================
   */

  const q = questions[current];

  const progress =
    (answeredCount / questions.length) * 100;

  return (
    <main
      className={`aiml-exam-page ${
        dark
          ? "aiml-exam-dark min-h-screen bg-[#050816] text-white"
          : "aiml-exam-light min-h-screen bg-slate-50 text-slate-950"
      }`}
    >
      <ExamLightModeStyles />

      <div className="mx-auto max-w-[1500px] px-3 py-3 sm:px-5 lg:px-7">

        {/* HEADER */}

        <header className="sticky top-3 z-20 mb-4 rounded-3xl border border-white/10 bg-[#0b1022]/90 p-4 shadow-2xl backdrop-blur-xl">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="min-w-0">

              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                <Sparkles className="h-4 w-4" />

                {meta.eyebrow}
              </div>

              <h1 className="mt-1 truncate text-xl font-black sm:text-2xl">
                {meta.title}
              </h1>

              <p className="mt-1 hidden text-xs text-slate-400 sm:block">
                {meta.description}
              </p>

            </div>

            <div className="flex items-center gap-2">

              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold">
                {answeredCount}/{questions.length}{" "}
                answered
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold">
                {markedCount} marked
              </div>

              <button
                onClick={() =>
                  setDark(!dark)
                }
                className="exam-theme-toggle rounded-xl border border-white/10 px-3 py-2 text-sm font-bold"
              >
                {dark ? "Light" : "Dark"}
              </button>

            </div>
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 transition-all"
              style={{
                width: `${Math.max(
                  progress,
                  2
                )}%`,
              }}
            />
          </div>
        </header>

        <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">

          {/* QUESTION NAVIGATOR */}

          <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-4 lg:sticky lg:top-[140px] lg:h-[calc(100vh-160px)] lg:overflow-y-auto">

            <div className="mb-4">

              <div className="text-sm font-black">
                Question Navigator
              </div>

              <div className="mt-1 text-xs leading-5 text-slate-400">
                Jump between questions. Mark
                difficult ones for review.
              </div>

            </div>

            <div className="grid grid-cols-5 gap-2">

              {questions.map((item, i) => {

                const answered =
                  answers[item.id] !==
                  undefined;

                const isCurrent =
                  i === current;

                const isMarked =
                  marked[item.id];

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      setCurrent(i)
                    }
                    className={`relative aspect-square rounded-xl border text-sm font-black transition ${
                      isCurrent
                        ? "border-cyan-300 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                        : answered
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10"
                    }`}
                  >
                    {i + 1}

                    {isMarked && (
                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}

            </div>

            <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-400">

              <Legend
                dot="bg-cyan-400"
                text="Current"
              />

              <Legend
                dot="bg-emerald-400"
                text="Answered"
              />

              <Legend
                dot="bg-amber-400"
                text="Marked for review"
              />

            </div>
          </aside>

          {/* QUESTION */}

          <section className="min-w-0">

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-5 shadow-2xl sm:p-8">

              <div className="flex flex-wrap items-center gap-2">

                <span className="rounded-xl bg-cyan-400/10 px-3 py-1.5 text-xs font-black text-cyan-300">
                  QUESTION {current + 1} OF{" "}
                  {questions.length}
                </span>

                <span className="rounded-xl border border-white/10 px-3 py-1.5 text-xs font-bold text-slate-400">
                  {q.topic}
                </span>

                <button
                  onClick={() =>
                    setMarked((m) => ({
                      ...m,
                      [q.id]: !m[q.id],
                    }))
                  }
                  className={`ml-auto inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold ${
                    marked[q.id]
                      ? "bg-amber-400 text-slate-950"
                      : "border border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  <Flag className="h-3.5 w-3.5" />

                  {marked[q.id]
                    ? "Marked"
                    : "Mark for review"}
                </button>

              </div>

              <h2 className="mt-7 max-w-5xl text-xl font-black leading-8 sm:text-2xl sm:leading-9">
                {q.question}
              </h2>

              <div className="mt-7 grid gap-3">

                {q.shuffledOptions.map(
                  (option, i) => {

                    const isSelected =
                      selected ===
                      option.originalIndex;

                    return (
                      <button
                        key={option.text}
                        onClick={() =>
                          selectAnswer(
                            option.originalIndex
                          )
                        }
                        className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${
                          isSelected
                            ? "border-cyan-300 bg-cyan-400/10 shadow-lg shadow-cyan-400/10"
                            : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.05]"
                        }`}
                      >

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                            isSelected
                              ? "bg-cyan-400 text-slate-950"
                              : "bg-white/10 text-slate-300 group-hover:bg-white/15"
                          }`}
                        >
                          {String.fromCharCode(
                            65 + i
                          )}
                        </span>

                        <span className="pt-1 text-sm font-semibold leading-6 text-slate-200">
                          {option.text}
                        </span>

                        {isSelected && (
                          <Check className="ml-auto mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                        )}

                      </button>
                    );
                  }
                )}

              </div>

              {/* BOTTOM CONTROLS */}

              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

                <button
                  disabled={current === 0}
                  onClick={() =>
                    setCurrent(
                      (v) => v - 1
                    )
                  }
                  className="exam-control-button inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" />

                  Previous
                </button>

                <button
                  onClick={() =>
                    setAnswers((prev) => {
                      const next = {
                        ...prev,
                      };

                      delete next[q.id];

                      return next;
                    })
                  }
                  disabled={
                    selected === undefined
                  }
                  className="exam-clear-button inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-slate-400 hover:text-white disabled:opacity-30"
                >
                  <X className="h-4 w-4" />

                  Clear answer
                </button>

                {current ===
                questions.length - 1 ? (
                  <button
                    onClick={() =>
                      setSubmitted(true)
                    }
                    className="exam-next-button inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-400 px-7 py-3 font-black text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:shadow-cyan-400/30"
                  >
                    Submit Assessment

                    <Check className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setCurrent(
                        (v) => v + 1
                      )
                    }
                    className="exam-next-button inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-400 px-7 py-3 font-black text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:shadow-cyan-400/30"
                  >
                    Save & Next

                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}

              </div>
            </div>

            {/* INFO CARDS */}

            <div className="mt-4 grid gap-4 md:grid-cols-3">

              <InfoCard
                number="45"
                label="challenging questions"
              />

              <InfoCard
                number="70%"
                label="passing requirement"
              />

              <InfoCard
                number="∞"
                label="no time limit"
              />

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/*
 * ============================================================
 * LIGHT MODE FIX
 * ============================================================
 *
 * This only affects AIMLExam.tsx.
 * It does not modify any other CloudLearn page.
 */

function ExamLightModeStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /*
           * Base light exam surface
           */
          html:not(.dark) .aiml-exam-light {
            background:
              radial-gradient(
                circle at 15% 10%,
                rgba(34, 211, 238, 0.10),
                transparent 30%
              ),
              radial-gradient(
                circle at 85% 15%,
                rgba(139, 92, 246, 0.08),
                transparent 30%
              ),
              #f8fafc !important;

            color: #0f172a !important;
          }

          /*
           * Main text
           */
          html:not(.dark) .aiml-exam-light .text-white {
            color: #0f172a !important;
          }

          html:not(.dark) .aiml-exam-light .text-slate-100 {
            color: #0f172a !important;
          }

          html:not(.dark) .aiml-exam-light .text-slate-200 {
            color: #334155 !important;
          }

          html:not(.dark) .aiml-exam-light .text-slate-300 {
            color: #475569 !important;
          }

          html:not(.dark) .aiml-exam-light .text-slate-400 {
            color: #64748b !important;
          }

          html:not(.dark) .aiml-exam-light .text-slate-500 {
            color: #64748b !important;
          }

          /*
           * Header
           */
          html:not(.dark) .aiml-exam-light header {
            background: rgba(255,255,255,0.94) !important;
            border-color: #dbe4ee !important;
            color: #0f172a !important;
            box-shadow:
              0 12px 40px rgba(15,23,42,0.08) !important;
          }

          /*
           * Header dark background
           */
          html:not(.dark) .aiml-exam-light .bg-\\[\\#0b1022\\]\\/90 {
            background: rgba(255,255,255,0.96) !important;
          }

          /*
           * Question navigator
           */
          html:not(.dark) .aiml-exam-light aside {
            background: rgba(255,255,255,0.92) !important;
            border-color: #dbe4ee !important;
            box-shadow:
              0 12px 35px rgba(15,23,42,0.06) !important;
          }

          /*
           * Main question card
           */
          html:not(.dark) .aiml-exam-light section > div {
            color: #0f172a;
          }

          /*
           * All translucent white surfaces become clean white.
           */
          html:not(.dark) .aiml-exam-light .bg-white\\/\\[0\\.07\\],
          html:not(.dark) .aiml-exam-light .bg-white\\/\\[0\\.05\\],
          html:not(.dark) .aiml-exam-light .bg-white\\/\\[0\\.04\\],
          html:not(.dark) .aiml-exam-light .bg-white\\/\\[0\\.035\\],
          html:not(.dark) .aiml-exam-light .bg-white\\/\\[0\\.025\\] {
            background: #ffffff !important;
          }

          html:not(.dark) .aiml-exam-light .bg-white\\/5 {
            background: #f1f5f9 !important;
          }

          /*
           * Borders
           */
          html:not(.dark) .aiml-exam-light .border-white\\/10 {
            border-color: #dbe4ee !important;
          }

          html:not(.dark) .aiml-exam-light .border-white\\/20 {
            border-color: #cbd5e1 !important;
          }

          /*
           * Question options
           */
          html:not(.dark) .aiml-exam-light button.group {
            background: #ffffff !important;
            border-color: #dbe4ee !important;
            color: #334155 !important;

            box-shadow:
              0 3px 12px rgba(15,23,42,0.04);
          }

          html:not(.dark) .aiml-exam-light button.group:hover {
            background: #f8fafc !important;
            border-color: #94a3b8 !important;
          }

          /*
           * Selected answer
           */
          html:not(.dark) .aiml-exam-light button.group.border-cyan-300 {
            background: #ecfeff !important;
            border-color: #22d3ee !important;
            color: #0f172a !important;

            box-shadow:
              0 8px 24px rgba(6,182,212,0.12);
          }

          /*
           * Option letter boxes
           */
          html:not(.dark) .aiml-exam-light button.group .bg-white\\/10 {
            background: #e2e8f0 !important;
            color: #334155 !important;
          }

          /*
           * Navigator unanswered buttons
           */
          html:not(.dark) .aiml-exam-light aside button {
            background: #ffffff !important;
            border-color: #dbe4ee !important;
            color: #475569 !important;
          }

          /*
           * Current navigator button
           */
          html:not(.dark) .aiml-exam-light aside button.bg-cyan-400 {
            background: #22d3ee !important;
            color: #083344 !important;
            border-color: #06b6d4 !important;
          }

          /*
           * Answered navigator button
           */
          html:not(.dark) .aiml-exam-light aside button.bg-emerald-400\\/10 {
            background: #ecfdf5 !important;
            color: #047857 !important;
            border-color: #86efac !important;
          }

          /*
           * Mark button
           */
          html:not(.dark) .aiml-exam-light button {
            transition:
              background-color 0.2s ease,
              border-color 0.2s ease,
              color 0.2s ease,
              transform 0.2s ease;
          }

          /*
           * Theme toggle
           */
          html:not(.dark) .aiml-exam-light .exam-theme-toggle {
            background: #0f172a !important;
            border-color: #0f172a !important;
            color: #ffffff !important;
          }

          /*
           * Previous / Clear controls
           */
          html:not(.dark) .aiml-exam-light .exam-control-button {
            background: #ffffff !important;
            border-color: #cbd5e1 !important;
            color: #334155 !important;
          }

          html:not(.dark) .aiml-exam-light .exam-control-button:hover {
            background: #f1f5f9 !important;
            border-color: #94a3b8 !important;
          }

          html:not(.dark) .aiml-exam-light .exam-clear-button {
            color: #64748b !important;
          }

          html:not(.dark) .aiml-exam-light .exam-clear-button:hover {
            color: #0f172a !important;
          }

          /*
           * SAVE & NEXT / SUBMIT
           *
           * This is deliberately strong so the button
           * remains clearly visible in light mode.
           */
          html:not(.dark) .aiml-exam-light .exam-next-button {
            background:
              linear-gradient(
                135deg,
                #0891b2,
                #7c3aed
              ) !important;

            color: #ffffff !important;

            border: 1px solid
              rgba(8,145,178,0.35) !important;

            box-shadow:
              0 10px 25px
              rgba(8,145,178,0.22) !important;
          }

          html:not(.dark) .aiml-exam-light .exam-next-button:hover {
            background:
              linear-gradient(
                135deg,
                #0e7490,
                #6d28d9
              ) !important;

            color: #ffffff !important;

            transform: translateY(-1px);
          }

          /*
           * Progress bar background
           */
          html:not(.dark) .aiml-exam-light .bg-white\\/10 {
            background: #e2e8f0 !important;
          }

          /*
           * Info cards
           */
          html:not(.dark) .aiml-exam-light .bg-white\\/\\[0\\.03\\] {
            background: #ffffff !important;
            border-color: #dbe4ee !important;
          }

          /*
           * Result screen cards
           */
          html:not(.dark) .aiml-exam-light article {
            background: #ffffff !important;
            border-color: #dbe4ee !important;
            box-shadow:
              0 8px 30px rgba(15,23,42,0.06);
          }

          /*
           * Result review boxes
           */
          html:not(.dark) .aiml-exam-light .bg-emerald-400\\/5 {
            background: #ecfdf5 !important;
          }

          html:not(.dark) .aiml-exam-light .bg-rose-400\\/5 {
            background: #fff1f2 !important;
          }

          /*
           * Keep disabled controls visibly disabled.
           */
          html:not(.dark) .aiml-exam-light button:disabled {
            opacity: 0.45;
          }

          /*
           * Remove accidental dark shadows/text effects.
           */
          html:not(.dark) .aiml-exam-light h1,
          html:not(.dark) .aiml-exam-light h2,
          html:not(.dark) .aiml-exam-light h3,
          html:not(.dark) .aiml-exam-light p {
            text-shadow: none !important;
          }

          /*
           * Mobile button sizing.
           */
          @media (max-width: 640px) {
            html:not(.dark) .aiml-exam-light .exam-next-button,
            html:not(.dark) .aiml-exam-light .exam-control-button {
              width: 100%;
            }
          }
        `,
      }}
    />
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-black">
        {value}
      </div>

      <div className="text-xs text-slate-400">
        {label}
      </div>
    </div>
  );
}

function ReviewBox({
  title,
  value,
  good,
}: {
  title: string;
  value: string;
  good: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        good
          ? "border-emerald-400/20 bg-emerald-400/5"
          : "border-rose-400/20 bg-rose-400/5"
      }`}
    >
      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </div>

      <div className="mt-2 text-sm font-semibold leading-6">
        {value}
      </div>
    </div>
  );
}

function Legend({
  dot,
  text,
}: {
  dot: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2.5 w-2.5 rounded-full ${dot}`}
      />

      {text}
    </div>
  );
}

function InfoCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-xl font-black">
        {number}
      </div>

      <div className="text-xs text-slate-500">
        {label}
      </div>
    </div>
  );
}