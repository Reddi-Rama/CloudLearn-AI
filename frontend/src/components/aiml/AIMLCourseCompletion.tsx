"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AIML_MODULES } from "@/content/aiml/aimlRegistry";

interface AIMLCourseCompletionProps {
  moduleId: string;
  lessonId: string;
  courseSlug: string;
  isFinalLesson: boolean;
}

const STORAGE_KEY = "cloudlearn-aiml-completed-lessons";

export default function AIMLCourseCompletion({
  moduleId,
  lessonId,
  courseSlug,
  isFinalLesson,
}: AIMLCourseCompletionProps) {
  const [completed, setCompleted] = useState<string[]>([]);

  const lessonKey = `${courseSlug}:${moduleId}:${lessonId}`;

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        setCompleted([]);
        return;
      }

      const parsed: unknown = JSON.parse(stored);

      if (Array.isArray(parsed)) {
        setCompleted(
          parsed.filter(
            (item): item is string =>
              typeof item === "string"
          )
        );
      }
    } catch {
      setCompleted([]);
    }
  }, []);

  const isCompleted = completed.includes(lessonKey);

  /*
   * Build the complete list of lessons belonging to
   * the AI Foundations course.
   */
  const allCourseLessons = useMemo(() => {
    return AIML_MODULES.flatMap((module) =>
      module.lessons.map((lesson) => ({
        key: `${courseSlug}:${module.id}:${lesson.id}`,
        moduleId: module.id,
        lessonId: lesson.id,
      }))
    );
  }, [courseSlug]);

  const completedCourseLessons = useMemo(() => {
    return allCourseLessons.filter((lesson) =>
      completed.includes(lesson.key)
    ).length;
  }, [allCourseLessons, completed]);

  const totalCourseLessons = allCourseLessons.length;

  const courseCompleted =
    totalCourseLessons > 0 &&
    completedCourseLessons === totalCourseLessons;

  const progressPercentage =
    totalCourseLessons > 0
      ? Math.round(
          (completedCourseLessons / totalCourseLessons) * 100
        )
      : 0;

  const markComplete = () => {
    if (completed.includes(lessonKey)) {
      return;
    }

    const updated = [...completed, lessonKey];

    setCompleted(updated);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  };

  return (
    <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
            Lesson Progress
          </p>

          <h2 className="mt-2 text-xl font-black text-white">
            {isCompleted
              ? "Lesson Completed"
              : "Complete This Lesson"}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            {isCompleted
              ? "This lesson has been added to your course progress."
              : "Finish this lesson and mark it as completed to continue tracking your course progress."}
          </p>
        </div>

        {isCompleted ? (
          <div className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 font-bold text-emerald-300">
            <span className="text-lg">✓</span>
            Completed
          </div>
        ) : (
          <button
            type="button"
            onClick={markComplete}
            className="
              inline-flex shrink-0 items-center
              justify-center gap-2 rounded-xl
              bg-cyan-400 px-5 py-3
              font-black text-slate-950
              shadow-lg shadow-cyan-500/10
              transition-all duration-200
              hover:-translate-y-0.5
              hover:bg-cyan-300
              active:translate-y-0
            "
          >
            <span className="text-lg">✓</span>
            Mark Lesson Complete
          </button>
        )}
      </div>

      {/* Course progress */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              Course Progress
            </p>

            <p className="mt-2 text-sm font-bold text-white">
              {completedCourseLessons} of {totalCourseLessons} lessons completed
            </p>
          </div>

          <span className="text-lg font-black text-cyan-300">
            {progressPercentage}%
          </span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>
      </div>

      {/* Final lesson / assessment unlock */}
      {isFinalLesson && isCompleted && (
        <div
          className={`mt-6 rounded-2xl border p-5 ${
            courseCompleted
              ? "border-emerald-400/30 bg-emerald-500/10"
              : "border-violet-400/20 bg-violet-500/10"
          }`}
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p
                className={`text-xs font-black uppercase tracking-[0.16em] ${
                  courseCompleted
                    ? "text-emerald-300"
                    : "text-violet-300"
                }`}
              >
                Final Lesson
              </p>

              <h3 className="mt-2 text-lg font-black text-white">
                {courseCompleted
                  ? "Course Completed"
                  : "Final lesson completed"}
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                {courseCompleted
                  ? "You have completed every lesson in this course. The final assessment is now unlocked."
                  : `Complete all ${totalCourseLessons} lessons in this course to unlock the final assessment.`}
              </p>
            </div>

            {courseCompleted ? (
              <Link
                href={`/exam/${courseSlug}`}
                className="
                  inline-flex shrink-0 items-center
                  justify-center gap-2 rounded-xl
                  bg-gradient-to-r from-cyan-400 to-violet-500
                  px-6 py-3
                  font-black text-slate-950
                  shadow-lg shadow-violet-500/20
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:brightness-110
                "
              >
                Take Final Assessment
                <span className="text-lg">→</span>
              </Link>
            ) : (
              <div className="inline-flex shrink-0 cursor-not-allowed items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-slate-500">
                Assessment Locked
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}