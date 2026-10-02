import Link from "next/link";
import { notFound } from "next/navigation";

import GenerativeAISidebar from "@/components/aiml/GenerativeAISidebar";
import GenerativeAIContentRenderer from "@/components/aiml/GenerativeAIContentRenderer";
import AIMLCourseLessonCompletion from "@/components/aiml/AIMLCourseLessonCompletion";

// ============================================================
// MODULE 1
// ============================================================

import module1Lesson1 from "@/content/aiml/generative-ai/lessons/module1/lesson1";
import module1Lesson2 from "@/content/aiml/generative-ai/lessons/module1/lesson2";
import module1Lesson3 from "@/content/aiml/generative-ai/lessons/module1/lesson3";
import module1Lesson4 from "@/content/aiml/generative-ai/lessons/module1/lesson4";
import module1Lesson5 from "@/content/aiml/generative-ai/lessons/module1/lesson5";
import module1Lesson6 from "@/content/aiml/generative-ai/lessons/module1/lesson6";
import module1Lesson7 from "@/content/aiml/generative-ai/lessons/module1/lesson7";
import module1Lesson8 from "@/content/aiml/generative-ai/lessons/module1/lesson8";
import module1Practice from "@/content/aiml/generative-ai/lessons/module1/practice";
import module1Project from "@/content/aiml/generative-ai/lessons/module1/project";
import module1About from "@/content/aiml/generative-ai/lessons/module1/about";

// ============================================================
// MODULE 2
// ============================================================

import module2Lesson1 from "@/content/aiml/generative-ai/lessons/module2/lesson1";
import module2Lesson2 from "@/content/aiml/generative-ai/lessons/module2/lesson2";
import module2Lesson3 from "@/content/aiml/generative-ai/lessons/module2/lesson3";
import module2Lesson4 from "@/content/aiml/generative-ai/lessons/module2/lesson4";
import module2Lesson5 from "@/content/aiml/generative-ai/lessons/module2/lesson5";
import module2Lesson6 from "@/content/aiml/generative-ai/lessons/module2/lesson6";
import module2Lesson7 from "@/content/aiml/generative-ai/lessons/module2/lesson7";
import module2Lesson8 from "@/content/aiml/generative-ai/lessons/module2/lesson8";
import module2Lesson9 from "@/content/aiml/generative-ai/lessons/module2/lesson9";
import module2Lesson10 from "@/content/aiml/generative-ai/lessons/module2/lesson10";
import module2Lesson11 from "@/content/aiml/generative-ai/lessons/module2/lesson11";
import module2Lesson12 from "@/content/aiml/generative-ai/lessons/module2/lesson12";
import module2Lesson13 from "@/content/aiml/generative-ai/lessons/module2/lesson13";
import module2Lesson14 from "@/content/aiml/generative-ai/lessons/module2/lesson14";
import module2Lesson15 from "@/content/aiml/generative-ai/lessons/module2/lesson15";
import module2Practice from "@/content/aiml/generative-ai/lessons/module2/practice";
import module2Project from "@/content/aiml/generative-ai/lessons/module2/project";
import module2About from "@/content/aiml/generative-ai/lessons/module2/about";

// ============================================================
// MODULE 3
// ============================================================

import module3Lesson1 from "@/content/aiml/generative-ai/lessons/module3/lesson1";
import module3Lesson2 from "@/content/aiml/generative-ai/lessons/module3/lesson2";
import module3Lesson3 from "@/content/aiml/generative-ai/lessons/module3/lesson3";
import module3Lesson4 from "@/content/aiml/generative-ai/lessons/module3/lesson4";
import module3Lesson5 from "@/content/aiml/generative-ai/lessons/module3/lesson5";
import module3Lesson6 from "@/content/aiml/generative-ai/lessons/module3/lesson6";
import module3Lesson7 from "@/content/aiml/generative-ai/lessons/module3/lesson7";
import module3Lesson8 from "@/content/aiml/generative-ai/lessons/module3/lesson8";
import module3Lesson9 from "@/content/aiml/generative-ai/lessons/module3/lesson9";
import module3Lesson10 from "@/content/aiml/generative-ai/lessons/module3/lesson10";
import module3Lesson11 from "@/content/aiml/generative-ai/lessons/module3/lesson11";
import module3Lesson12 from "@/content/aiml/generative-ai/lessons/module3/lesson12";
import module3Practice from "@/content/aiml/generative-ai/lessons/module3/practice";
import module3Project from "@/content/aiml/generative-ai/lessons/module3/project";
import module3About from "@/content/aiml/generative-ai/lessons/module3/about";

// ============================================================
// MODULE 4
// ============================================================

import module4Lesson1 from "@/content/aiml/generative-ai/lessons/module4/lesson1";
import module4Lesson2 from "@/content/aiml/generative-ai/lessons/module4/lesson2";
import module4Lesson3 from "@/content/aiml/generative-ai/lessons/module4/lesson3";
import module4Lesson4 from "@/content/aiml/generative-ai/lessons/module4/lesson4";
import module4Lesson5 from "@/content/aiml/generative-ai/lessons/module4/lesson5";
import module4Lesson6 from "@/content/aiml/generative-ai/lessons/module4/lesson6";
import module4Lesson7 from "@/content/aiml/generative-ai/lessons/module4/lesson7";
import module4Lesson8 from "@/content/aiml/generative-ai/lessons/module4/lesson8";
import module4Lesson9 from "@/content/aiml/generative-ai/lessons/module4/lesson9";
import module4Lesson10 from "@/content/aiml/generative-ai/lessons/module4/lesson10";
import module4Lesson11 from "@/content/aiml/generative-ai/lessons/module4/lesson11";
import module4Lesson12 from "@/content/aiml/generative-ai/lessons/module4/lesson12";
import module4Practice from "@/content/aiml/generative-ai/lessons/module4/practice";
import module4Project from "@/content/aiml/generative-ai/lessons/module4/project";
import module4About from "@/content/aiml/generative-ai/lessons/module4/about";

// ============================================================
// MODULE 5
// ============================================================

import module5Lesson1 from "@/content/aiml/generative-ai/lessons/module5/lesson1";
import module5Lesson2 from "@/content/aiml/generative-ai/lessons/module5/lesson2";
import module5Lesson3 from "@/content/aiml/generative-ai/lessons/module5/lesson3";
import module5Lesson4 from "@/content/aiml/generative-ai/lessons/module5/lesson4";
import module5Lesson5 from "@/content/aiml/generative-ai/lessons/module5/lesson5";
import module5Lesson6 from "@/content/aiml/generative-ai/lessons/module5/lesson6";
import module5Lesson7 from "@/content/aiml/generative-ai/lessons/module5/lesson7";
import module5Lesson8 from "@/content/aiml/generative-ai/lessons/module5/lesson8";
import module5Lesson9 from "@/content/aiml/generative-ai/lessons/module5/lesson9";
import module5Lesson10 from "@/content/aiml/generative-ai/lessons/module5/lesson10";
import module5Lesson11 from "@/content/aiml/generative-ai/lessons/module5/lesson11";
import module5Lesson12 from "@/content/aiml/generative-ai/lessons/module5/lesson12";
import module5Lesson13 from "@/content/aiml/generative-ai/lessons/module5/lesson13";
import module5Lesson14 from "@/content/aiml/generative-ai/lessons/module5/lesson14";
import module5Practice from "@/content/aiml/generative-ai/lessons/module5/practice";
import module5Project from "@/content/aiml/generative-ai/lessons/module5/project";
import module5About from "@/content/aiml/generative-ai/lessons/module5/about";

// ============================================================
// MODULE 6
// ============================================================

import module6Lesson1 from "@/content/aiml/generative-ai/lessons/module6/lesson1";
import module6Lesson2 from "@/content/aiml/generative-ai/lessons/module6/lesson2";
import module6Lesson3 from "@/content/aiml/generative-ai/lessons/module6/lesson3";
import module6Lesson4 from "@/content/aiml/generative-ai/lessons/module6/lesson4";
import module6Lesson5 from "@/content/aiml/generative-ai/lessons/module6/lesson5";
import module6Lesson6 from "@/content/aiml/generative-ai/lessons/module6/lesson6";
import module6Lesson7 from "@/content/aiml/generative-ai/lessons/module6/lesson7";
import module6Lesson8 from "@/content/aiml/generative-ai/lessons/module6/lesson8";
import module6Lesson9 from "@/content/aiml/generative-ai/lessons/module6/lesson9";
import module6Lesson10 from "@/content/aiml/generative-ai/lessons/module6/lesson10";
import module6Lesson11 from "@/content/aiml/generative-ai/lessons/module6/lesson11";
import module6Lesson12 from "@/content/aiml/generative-ai/lessons/module6/lesson12";
import module6Practice from "@/content/aiml/generative-ai/lessons/module6/practice";
import module6Project from "@/content/aiml/generative-ai/lessons/module6/project";
import module6About from "@/content/aiml/generative-ai/lessons/module6/about";

// ============================================================
// MODULE 7
// ============================================================

import module7Lesson1 from "@/content/aiml/generative-ai/lessons/module7/lesson1";
import module7Lesson2 from "@/content/aiml/generative-ai/lessons/module7/lesson2";
import module7Lesson3 from "@/content/aiml/generative-ai/lessons/module7/lesson3";
import module7Lesson4 from "@/content/aiml/generative-ai/lessons/module7/lesson4";
import module7Lesson5 from "@/content/aiml/generative-ai/lessons/module7/lesson5";
import module7Lesson6 from "@/content/aiml/generative-ai/lessons/module7/lesson6";
import module7Lesson7 from "@/content/aiml/generative-ai/lessons/module7/lesson7";
import module7Lesson8 from "@/content/aiml/generative-ai/lessons/module7/lesson8";
import module7Lesson9 from "@/content/aiml/generative-ai/lessons/module7/lesson9";
import module7Lesson10 from "@/content/aiml/generative-ai/lessons/module7/lesson10";
import module7Lesson11 from "@/content/aiml/generative-ai/lessons/module7/lesson11";
import module7Lesson12 from "@/content/aiml/generative-ai/lessons/module7/lesson12";
import module7Lesson13 from "@/content/aiml/generative-ai/lessons/module7/lesson13";
import module7Lesson14 from "@/content/aiml/generative-ai/lessons/module7/lesson14";
import module7Lesson15 from "@/content/aiml/generative-ai/lessons/module7/lesson15";
import module7Lesson16 from "@/content/aiml/generative-ai/lessons/module7/lesson16";
import module7Practice from "@/content/aiml/generative-ai/lessons/module7/practice";
import module7Project from "@/content/aiml/generative-ai/lessons/module7/project";
import module7About from "@/content/aiml/generative-ai/lessons/module7/about";

// ============================================================
// MODULE 8
// ============================================================

import module8Lesson1 from "@/content/aiml/generative-ai/lessons/module8/lesson1";
import module8Lesson2 from "@/content/aiml/generative-ai/lessons/module8/lesson2";
import module8Lesson3 from "@/content/aiml/generative-ai/lessons/module8/lesson3";
import module8Lesson4 from "@/content/aiml/generative-ai/lessons/module8/lesson4";
import module8Lesson5 from "@/content/aiml/generative-ai/lessons/module8/lesson5";
import module8Lesson6 from "@/content/aiml/generative-ai/lessons/module8/lesson6";
import module8Lesson7 from "@/content/aiml/generative-ai/lessons/module8/lesson7";
import module8Lesson8 from "@/content/aiml/generative-ai/lessons/module8/lesson8";
import module8Lesson9 from "@/content/aiml/generative-ai/lessons/module8/lesson9";
import module8Lesson10 from "@/content/aiml/generative-ai/lessons/module8/lesson10";
import module8Practice from "@/content/aiml/generative-ai/lessons/module8/practice";
import module8Project from "@/content/aiml/generative-ai/lessons/module8/project";
import module8About from "@/content/aiml/generative-ai/lessons/module8/about";

// ============================================================
// MODULE 9
// ============================================================

import module9Lesson1 from "@/content/aiml/generative-ai/lessons/module9/lesson1";
import module9Lesson2 from "@/content/aiml/generative-ai/lessons/module9/lesson2";
import module9Lesson3 from "@/content/aiml/generative-ai/lessons/module9/lesson3";
import module9Lesson4 from "@/content/aiml/generative-ai/lessons/module9/lesson4";
import module9Lesson5 from "@/content/aiml/generative-ai/lessons/module9/lesson5";
import module9Lesson6 from "@/content/aiml/generative-ai/lessons/module9/lesson6";
import module9Lesson7 from "@/content/aiml/generative-ai/lessons/module9/lesson7";
import module9Lesson8 from "@/content/aiml/generative-ai/lessons/module9/lesson8";
import module9Lesson9 from "@/content/aiml/generative-ai/lessons/module9/lesson9";
import module9Lesson10 from "@/content/aiml/generative-ai/lessons/module9/lesson10";
import module9Lesson11 from "@/content/aiml/generative-ai/lessons/module9/lesson11";
import module9Lesson12 from "@/content/aiml/generative-ai/lessons/module9/lesson12";
import module9Lesson13 from "@/content/aiml/generative-ai/lessons/module9/lesson13";
import module9Lesson14 from "@/content/aiml/generative-ai/lessons/module9/lesson14";
import module9Lesson15 from "@/content/aiml/generative-ai/lessons/module9/lesson15";
import module9Lesson16 from "@/content/aiml/generative-ai/lessons/module9/lesson16";
import module9Practice from "@/content/aiml/generative-ai/lessons/module9/practice";
import module9Project from "@/content/aiml/generative-ai/lessons/module9/project";
import module9About from "@/content/aiml/generative-ai/lessons/module9/about";

// ============================================================
// TYPES
// ============================================================

type ContentItem = {
  id?: string;
  title: string;
  [key: string]: any;
};

type ModuleDefinition = {
  id: string;
  title: string;
  lessons: ContentItem[];
  about: ContentItem;
  practice: ContentItem;
  project: ContentItem;
};

// ============================================================
// MODULE DATA
// ============================================================

const MODULES: ModuleDefinition[] = [
  {
    id: "module1",
    title: "Generative AI Foundations",
    lessons: [
      module1Lesson1,
      module1Lesson2,
      module1Lesson3,
      module1Lesson4,
      module1Lesson5,
      module1Lesson6,
      module1Lesson7,
      module1Lesson8,
    ],
    about: module1About,
    practice: module1Practice,
    project: module1Project,
  },

  {
    id: "module2",
    title: "Large Language Models",
    lessons: [
      module2Lesson1,
      module2Lesson2,
      module2Lesson3,
      module2Lesson4,
      module2Lesson5,
      module2Lesson6,
      module2Lesson7,
      module2Lesson8,
      module2Lesson9,
      module2Lesson10,
      module2Lesson11,
      module2Lesson12,
      module2Lesson13,
      module2Lesson14,
      module2Lesson15,
    ],
    about: module2About,
    practice: module2Practice,
    project: module2Project,
  },

  {
    id: "module3",
    title: "Prompt Engineering",
    lessons: [
      module3Lesson1,
      module3Lesson2,
      module3Lesson3,
      module3Lesson4,
      module3Lesson5,
      module3Lesson6,
      module3Lesson7,
      module3Lesson8,
      module3Lesson9,
      module3Lesson10,
      module3Lesson11,
      module3Lesson12,
    ],
    about: module3About,
    practice: module3Practice,
    project: module3Project,
  },

  {
    id: "module4",
    title: "Retrieval-Augmented Generation",
    lessons: [
      module4Lesson1,
      module4Lesson2,
      module4Lesson3,
      module4Lesson4,
      module4Lesson5,
      module4Lesson6,
      module4Lesson7,
      module4Lesson8,
      module4Lesson9,
      module4Lesson10,
      module4Lesson11,
      module4Lesson12,
    ],
    about: module4About,
    practice: module4Practice,
    project: module4Project,
  },

  {
    id: "module5",
    title: "Embeddings & Vector Databases",
    lessons: [
      module5Lesson1,
      module5Lesson2,
      module5Lesson3,
      module5Lesson4,
      module5Lesson5,
      module5Lesson6,
      module5Lesson7,
      module5Lesson8,
      module5Lesson9,
      module5Lesson10,
      module5Lesson11,
      module5Lesson12,
      module5Lesson13,
      module5Lesson14,
    ],
    about: module5About,
    practice: module5Practice,
    project: module5Project,
  },

  {
    id: "module6",
    title: "LLM APIs & Application Development",
    lessons: [
      module6Lesson1,
      module6Lesson2,
      module6Lesson3,
      module6Lesson4,
      module6Lesson5,
      module6Lesson6,
      module6Lesson7,
      module6Lesson8,
      module6Lesson9,
      module6Lesson10,
      module6Lesson11,
      module6Lesson12,
    ],
    about: module6About,
    practice: module6Practice,
    project: module6Project,
  },

  {
    id: "module7",
    title: "Retrieval-Augmented Generation",
    lessons: [
      module7Lesson1,
      module7Lesson2,
      module7Lesson3,
      module7Lesson4,
      module7Lesson5,
      module7Lesson6,
      module7Lesson7,
      module7Lesson8,
      module7Lesson9,
      module7Lesson10,
      module7Lesson11,
      module7Lesson12,
      module7Lesson13,
      module7Lesson14,
      module7Lesson15,
      module7Lesson16,
    ],
    about: module7About,
    practice: module7Practice,
    project: module7Project,
  },

  {
    id: "module8",
    title: "Multimodal Generative AI",
    lessons: [
      module8Lesson1,
      module8Lesson2,
      module8Lesson3,
      module8Lesson4,
      module8Lesson5,
      module8Lesson6,
      module8Lesson7,
      module8Lesson8,
      module8Lesson9,
      module8Lesson10,
    ],
    about: module8About,
    practice: module8Practice,
    project: module8Project,
  },

  {
    id: "module9",
    title: "LLM Application Engineering",
    lessons: [
      module9Lesson1,
      module9Lesson2,
      module9Lesson3,
      module9Lesson4,
      module9Lesson5,
      module9Lesson6,
      module9Lesson7,
      module9Lesson8,
      module9Lesson9,
      module9Lesson10,
      module9Lesson11,
      module9Lesson12,
      module9Lesson13,
      module9Lesson14,
      module9Lesson15,
      module9Lesson16,
    ],
    about: module9About,
    practice: module9Practice,
    project: module9Project,
  },
];

const TOTAL_GENERATIVE_AI_LESSONS = MODULES.reduce(
  (total, module) => total + module.lessons.length,
  0
);

// ============================================================
// SPECIAL CONTENT
// ============================================================

function getSpecialContent(
  module: ModuleDefinition,
  lessonId: string
): ContentItem | null {
  if (lessonId === "about") {
    return module.about;
  }

  if (lessonId === "practice") {
    return module.practice;
  }

  if (lessonId === "project") {
    return module.project;
  }

  return null;
}

// ============================================================
// PAGE PARAMS
// ============================================================

interface PageProps {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
}

// ============================================================
// PAGE
// ============================================================

export default async function GenerativeAILessonPage({
  params,
}: PageProps) {
  const { moduleId, lessonId } = await params;

  const moduleIndex = MODULES.findIndex(
    (item) => item.id === moduleId
  );

  if (moduleIndex === -1) {
    notFound();
  }

  const module = MODULES[moduleIndex];

  const specialContent = getSpecialContent(
    module,
    lessonId
  );

  const lesson = module.lessons.find(
    (item) => item.id === lessonId
  );

  const content = specialContent || lesson;

  if (!content) {
    notFound();
  }

  // Provide the renderer with stable module/lesson identity so
  // local visual assets can be resolved for every lesson and
  // special page without changing the original content objects.
  const renderableContent = {
    ...content,
    moduleId: content.moduleId ?? moduleId,
    id: content.id ?? lessonId,
  };

  // ==========================================================
  // NAVIGATION
  // ==========================================================

  let previousHref: string | null = null;
  let nextHref: string | null = null;

  let previousLabel = "← Previous";
  let nextLabel = "Next →";

  // ----------------------------------------------------------
  // ABOUT
  // ----------------------------------------------------------

  if (lessonId === "about") {
    nextHref =
      module.lessons.length > 0
        ? `/lesson/aiml/generative-ai/${module.id}/${module.lessons[0].id}`
        : `/lesson/aiml/generative-ai/${module.id}/practice`;

    nextLabel = "Start Module →";
  }

  // ----------------------------------------------------------
  // NORMAL LESSON
  // ----------------------------------------------------------

  else if (lesson) {
    const lessonIndex = module.lessons.findIndex(
      (item) => item.id === lesson.id
    );

    if (lessonIndex > 0) {
      previousHref =
        `/lesson/aiml/generative-ai/${module.id}/${module.lessons[lessonIndex - 1].id}`;

      previousLabel = "← Previous Lesson";
    } else {
      previousHref =
        `/lesson/aiml/generative-ai/${module.id}/about`;

      previousLabel = "← Module About";
    }

    if (lessonIndex < module.lessons.length - 1) {
      nextHref =
        `/lesson/aiml/generative-ai/${module.id}/${module.lessons[lessonIndex + 1].id}`;

      nextLabel = "Next Lesson →";
    } else {
      nextHref =
        `/lesson/aiml/generative-ai/${module.id}/practice`;

      nextLabel = "Go to Practice →";
    }
  }

  // ----------------------------------------------------------
  // PRACTICE
  // ----------------------------------------------------------

  else if (lessonId === "practice") {
    const lastLesson =
      module.lessons[module.lessons.length - 1];

    previousHref = lastLesson
      ? `/lesson/aiml/generative-ai/${module.id}/${lastLesson.id}`
      : `/lesson/aiml/generative-ai/${module.id}/about`;

    previousLabel = "← Last Lesson";

    nextHref =
      `/lesson/aiml/generative-ai/${module.id}/project`;

    nextLabel = "Module Project →";
  }

  // ----------------------------------------------------------
  // PROJECT
  // ----------------------------------------------------------

  else if (lessonId === "project") {
    previousHref =
      `/lesson/aiml/generative-ai/${module.id}/practice`;

    previousLabel = "← Practice";

    const nextModule =
      MODULES[moduleIndex + 1];

    if (nextModule) {
      nextHref =
        `/lesson/aiml/generative-ai/${nextModule.id}/about`;

      nextLabel = "Next Module →";
    } else {
      nextHref =
        "/courses/aiml/generative-ai";

      nextLabel = "Finish Course →";
    }
  }

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-[1800px] px-4 pb-12 pt-8 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">

          {/* SIDEBAR */}

          <aside className="hidden min-w-0 lg:block">
            <div
              className="
                sticky
                top-[112px]
                z-20
                w-full
                h-[calc(100vh-128px)]
                overflow-hidden
              "
            >
              <GenerativeAISidebar />
            </div>
          </aside>

          {/* MAIN CONTENT */}

          <section className="min-w-0 pt-4 lg:pt-0">

            <article
              className="
                min-w-0
                w-full
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                p-4
                shadow-2xl
                sm:p-6
                lg:p-8
              "
            >
              <GenerativeAIContentRenderer
                content={renderableContent}
              />
            </article>

            {/* ==========================================================
                LESSON COMPLETION + COURSE PROGRESS

                Only actual lessons are tracked here.
                About / Practice / Project remain navigation pages.
            ========================================================== */}

            {lesson ? (
              <AIMLCourseLessonCompletion
                courseSlug="generative-ai"
                moduleId={moduleId}
                lessonId={lessonId}
                totalLessons={TOTAL_GENERATIVE_AI_LESSONS}
                totalTrackableItems={TOTAL_GENERATIVE_AI_LESSONS}
                itemType="lesson"
              />
            ) : null}

            {/* PREVIOUS / NEXT */}

            <div
              className="
                mt-6
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
              "
            >
              {previousHref ? (
                <Link
                  href={previousHref}
                  className="
                    group
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900
                    px-5
                    py-4
                    transition
                    hover:border-cyan-500/30
                    hover:bg-slate-800
                  "
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 group-hover:text-cyan-500">
                    Previous
                  </div>

                  <div className="mt-1 text-sm font-semibold text-slate-300 group-hover:text-white">
                    {previousLabel}
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextHref ? (
                <Link
                  href={nextHref}
                  className="
                    group
                    rounded-2xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/5
                    px-5
                    py-4
                    text-left
                    transition
                    hover:border-cyan-500/40
                    hover:bg-cyan-500/10
                    sm:text-right
                  "
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-500">
                    Continue
                  </div>

                  <div className="mt-1 text-sm font-semibold text-cyan-200 group-hover:text-cyan-100">
                    {nextLabel}
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* MODULE INFORMATION */}

            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                    Current Module
                  </div>

                  <div className="mt-1 text-sm font-semibold text-slate-300">
                    Module {moduleIndex + 1} · {module.title}
                  </div>
                </div>

                <div className="text-xs text-slate-500">
                  {module.lessons.length} lessons
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
}