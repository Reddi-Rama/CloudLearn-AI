"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  LockKeyhole,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type AIMLCourseSlug =
  | "machine-learning"
  | "deep-learning"
  | "generative-ai";

type CompletionItemType =
  | "lesson"
  | "about"
  | "practice"
  | "project";

interface Props {
  courseSlug: AIMLCourseSlug;
  moduleId: string;
  lessonId: string;

  totalLessons: number;
  totalTrackableItems: number;

  itemType: CompletionItemType;
}

function getStorageKey(
  courseSlug: AIMLCourseSlug
) {
  return `cloudlearn-aiml-learning-progress-v3:${courseSlug}`;
}

const COURSE_NAMES: Record<
  AIMLCourseSlug,
  string
> = {
  "machine-learning": "Machine Learning",
  "deep-learning": "Deep Learning",
  "generative-ai": "Generative AI",
};

const ITEM_LABELS: Record<
  CompletionItemType,
  string
> = {
  lesson: "Lesson",
  about: "About",
  practice: "Practice",
  project: "Project",
};

export default function AIMLCourseLessonCompletion({
  courseSlug,
  moduleId,
  lessonId,
  totalLessons,
  totalTrackableItems,
  itemType,
}: Props) {
  const [completedItems, setCompletedItems] =
    useState<string[]>([]);

  const [ready, setReady] =
    useState(false);

  const itemLabel =
    ITEM_LABELS[itemType];

  const courseName =
    COURSE_NAMES[courseSlug];

  /*
   * Every learning page gets a unique key.
   *
   * Examples:
   *
   * module1:lesson:lesson1
   * module1:about:about
   * module1:practice:practice
   * module1:project:project
   */

  const currentItemKey =
    `${moduleId}:${itemType}:${lessonId}`;

  /*
   * Load saved progress.
   */

  useEffect(() => {
    let mounted = true;

    const loadProgress = () => {
      try {
        const stored =
          window.localStorage.getItem(
            getStorageKey(courseSlug)
          );

        if (!stored) {
          if (mounted) {
            setCompletedItems([]);
          }

          return;
        }

        const parsed: unknown =
          JSON.parse(stored);

        if (Array.isArray(parsed)) {
          const validItems =
            parsed.filter(
              (
                item
              ): item is string =>
                typeof item === "string" &&
                item.split(":").length >= 3
            );

          if (mounted) {
            setCompletedItems(
              Array.from(
                new Set(validItems)
              )
            );
          }
        } else {
          if (mounted) {
            setCompletedItems([]);
          }
        }
      } catch {
        if (mounted) {
          setCompletedItems([]);
        }
      } finally {
        if (mounted) {
          setReady(true);
        }
      }
    };

    loadProgress();

    /*
     * Update immediately when the current
     * lesson is marked complete.
     */
    window.addEventListener(
      "cloudlearn-lesson-progress-updated",
      loadProgress
    );

    /*
     * Also react to localStorage changes.
     */
    window.addEventListener(
      "storage",
      loadProgress
    );

    return () => {
      mounted = false;

      window.removeEventListener(
        "cloudlearn-lesson-progress-updated",
        loadProgress
      );

      window.removeEventListener(
        "storage",
        loadProgress
      );
    };
  }, [courseSlug]);

  /*
   * Current page completion.
   */

  const isCompleted =
    completedItems.includes(
      currentItemKey
    );

  /*
   * Remove duplicates.
   */

  const uniqueCompletedItems =
    useMemo(() => {
      return Array.from(
        new Set(completedItems)
      );
    }, [completedItems]);

  /*
   * Total completed learning pages.
   */

  const completedCount =
    Math.min(
      uniqueCompletedItems.length,
      totalTrackableItems
    );

  /*
   * Only actual lessons count toward
   * the assessment unlock.
   */

  const completedLessonCount =
    uniqueCompletedItems.filter(
      (item) => {
        const parts =
          item.split(":");

        return (
          parts.length >= 3 &&
          parts[1] === "lesson"
        );
      }
    ).length;

  /*
   * Assessment unlock:
   *
   * 80% of the actual lessons.
   *
   * Deep Learning:
   * 100 lessons -> 80 required
   *
   * Machine Learning:
   * 110 lessons -> 88 required
   *
   * Generative AI:
   * depends on its lesson count.
   */

  const assessmentUnlockThreshold =
    Math.ceil(
      totalLessons * 0.8
    );

  const courseCompleted =
    ready &&
    totalLessons > 0 &&
    completedLessonCount >=
      assessmentUnlockThreshold;

  /*
   * Overall progress is based on
   * all trackable learning pages.
   */

  const progress = useMemo(() => {
    if (
      totalTrackableItems <= 0
    ) {
      return 0;
    }

    return Math.min(
      100,
      Math.round(
        (completedCount /
          totalTrackableItems) *
          100
      )
    );
  }, [
    completedCount,
    totalTrackableItems,
  ]);

  /*
   * Mark the current page complete.
   */

  function markComplete() {
    if (isCompleted) {
      return;
    }

    const updated =
      Array.from(
        new Set([
          ...completedItems,
          currentItemKey,
        ])
      );

    setCompletedItems(updated);

    try {
      window.localStorage.setItem(
        getStorageKey(courseSlug),
        JSON.stringify(updated)
      );

      /*
       * Tell every sidebar that
       * progress has changed.
       */
      window.dispatchEvent(
        new Event(
          "cloudlearn-lesson-progress-updated"
        )
      );
    } catch {
      /*
       * Keep the UI usable if
       * localStorage is unavailable.
       */
    }
  }

  return (
    <section
      className="
        border-t
        border-slate-800
        bg-slate-950/40
        px-5
        py-6
        sm:px-8
        lg:px-10
        xl:px-12
      "
    >
      <div
        className="
          rounded-2xl
          border
          border-cyan-500/20
          bg-slate-950/70
          p-5
          shadow-[0_12px_40px_rgba(8,145,178,0.08)]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* LEFT SIDE */}

          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  text-cyan-300
                "
              >
                {isCompleted ? (
                  <CheckCircle2
                    size={20}
                  />
                ) : (
                  <ClipboardCheck
                    size={20}
                  />
                )}
              </div>

              <div>
                <div
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-cyan-400
                  "
                >
                  {itemLabel} Progress
                </div>

                <h3
                  className="
                    mt-1
                    text-base
                    font-bold
                    text-white
                  "
                >
                  {isCompleted
                    ? `${itemLabel} Completed`
                    : `Mark ${itemLabel} Complete`}
                </h3>
              </div>
            </div>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-slate-400
              "
            >
              {isCompleted
                ? `This ${itemLabel.toLowerCase()} is saved as completed for your ${courseName} course progress.`
                : `Finish this ${itemLabel.toLowerCase()} and mark it complete to save your progress.`}
            </p>

            {/* COURSE PROGRESS */}

            <div className="mt-4">
              <div
                className="
                  mb-2
                  flex
                  items-center
                  justify-between
                  text-xs
                "
              >
                <span
                  className="
                    font-semibold
                    text-slate-500
                  "
                >
                  Course progress
                </span>

                <span
                  className="
                    font-bold
                    text-cyan-300
                  "
                >
                  {completedCount} /{" "}
                  {totalTrackableItems}
                </span>
              </div>

              <div
                className="
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-slate-800
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-500
                    transition-all
                    duration-300
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <div
                className="
                  mt-2
                  text-xs
                  font-semibold
                  text-slate-500
                "
              >
                {progress}% complete
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div
            className="
              flex
              shrink-0
              flex-col
              gap-3
              sm:flex-row
              lg:flex-col
            "
          >
            <button
              type="button"
              onClick={markComplete}
              disabled={
                !ready || isCompleted
              }
              className="
                inline-flex
                min-w-[220px]
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-cyan-400/30
                bg-cyan-500
                px-5
                py-3
                text-sm
                font-black
                text-slate-950
                shadow-lg
                transition
                hover:bg-cyan-400
                disabled:cursor-default
                disabled:border-emerald-400/20
                disabled:bg-emerald-500/10
                disabled:text-emerald-300
              "
            >
              <CheckCircle2
                size={17}
              />

              {isCompleted
                ? `${itemLabel} Completed`
                : `Mark ${itemLabel} Complete`}
            </button>

            {/* ASSESSMENT */}

            {courseCompleted ? (
              <Link
                href={`/exam/${courseSlug}`}
                className="
                  inline-flex
                  min-w-[220px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-violet-400/30
                  bg-violet-500/15
                  px-5
                  py-3
                  text-sm
                  font-black
                  text-violet-200
                  shadow-lg
                  transition
                  hover:border-violet-300/50
                  hover:bg-violet-500/25
                  hover:text-white
                "
              >
                <ClipboardCheck
                  size={17}
                />

                Open Final Assessment

                <ArrowRight
                  size={16}
                />
              </Link>
            ) : (
              <div
                className="
                  inline-flex
                  min-w-[220px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900/70
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-slate-500
                "
              >
                <LockKeyhole
                  size={16}
                />

                Assessment Locked
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}