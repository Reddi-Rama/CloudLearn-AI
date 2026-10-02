"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  Circle,
  Sparkles,
} from "lucide-react";

const STORAGE_KEY =
  "cloudlearn-aiml-learning-progress-v3:generative-ai";

const TOTAL_LESSONS = 115;

export default function GenerativeAICourseProgress() {
  const [completedLessons, setCompletedLessons] = useState(0);
  const [ready, setReady] = useState(false);

  const readProgress = () => {
    try {
      const stored =
        window.localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        setCompletedLessons(0);
        setReady(true);
        return;
      }

      const parsed: unknown = JSON.parse(stored);

      if (!Array.isArray(parsed)) {
        setCompletedLessons(0);
        setReady(true);
        return;
      }

      const lessons = parsed.filter(
        (item): item is string =>
          typeof item === "string" &&
          item.split(":").length >= 3 &&
          item.split(":")[1] === "lesson"
      );

      setCompletedLessons(
        new Set(lessons).size
      );
    } catch {
      setCompletedLessons(0);
    } finally {
      setReady(true);
    }
  };

  useEffect(() => {
    readProgress();

    const handleStorage = () => {
      readProgress();
    };

    const handleProgressUpdate = () => {
      readProgress();
    };

    window.addEventListener(
      "storage",
      handleStorage
    );

    window.addEventListener(
      "cloudlearn-aiml-progress-updated",
      handleProgressUpdate
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorage
      );

      window.removeEventListener(
        "cloudlearn-aiml-progress-updated",
        handleProgressUpdate
      );
    };
  }, []);

  const progress = useMemo(() => {
    if (TOTAL_LESSONS <= 0) {
      return 0;
    }

    return Math.min(
      100,
      Math.round(
        (completedLessons / TOTAL_LESSONS) * 100
      )
    );
  }, [completedLessons]);

  const assessmentUnlocked =
    completedLessons >=
    Math.ceil(TOTAL_LESSONS * 0.8);

  if (!ready) {
    return (
      <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="h-5 w-48 animate-pulse rounded bg-slate-800" />
        <div className="mt-5 h-3 animate-pulse rounded-full bg-slate-800" />
      </section>
    );
  }

  return (
    <section
      className="
        mt-8
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-6
        shadow-xl
        sm:p-7
      "
    >
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-cyan-400/20
              bg-cyan-400/10
            "
          >
            <Sparkles className="h-6 w-6 text-cyan-300" />
          </div>

          <div>
            <p
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                text-cyan-400
              "
            >
              Your Learning Progress
            </p>

            <h2 className="mt-1 text-xl font-bold text-white">
              Generative AI
            </h2>
          </div>

        </div>

        <div className="text-left sm:text-right">
          <div className="text-3xl font-black text-white">
            {progress}%
          </div>

          <div className="text-xs font-semibold text-slate-500">
            {completedLessons} / {TOTAL_LESSONS} lessons
          </div>
        </div>

      </div>

      {/* Progress Bar */}
      <div className="mt-6">

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              via-sky-400
              to-violet-500
              shadow-[0_0_18px_rgba(34,211,238,0.25)]
              transition-all
              duration-500
              ease-out
            "
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Status */}
      <div className="mt-5 flex flex-wrap items-center gap-3">

        {completedLessons > 0 ? (
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-3
              py-1.5
              text-xs
              font-semibold
              text-emerald-300
            "
          >
            <CheckCircle2 className="h-4 w-4" />
            {completedLessons} lessons completed
          </div>
        ) : (
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-700
              bg-slate-800/70
              px-3
              py-1.5
              text-xs
              font-semibold
              text-slate-400
            "
          >
            <Circle className="h-4 w-4" />
            Start your learning journey
          </div>
        )}

        {assessmentUnlocked && (
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-500/20
              bg-violet-500/10
              px-3
              py-1.5
              text-xs
              font-semibold
              text-violet-300
            "
          >
            <Sparkles className="h-4 w-4" />
            Assessment unlocked
          </div>
        )}

      </div>

      {/* 80% explanation */}
      <div className="mt-4 text-xs leading-6 text-slate-500">
        Complete at least{" "}
        <span className="font-bold text-slate-300">
          {Math.ceil(TOTAL_LESSONS * 0.8)} lessons
        </span>{" "}
        to unlock the final assessment.
      </div>

    </section>
  );
}