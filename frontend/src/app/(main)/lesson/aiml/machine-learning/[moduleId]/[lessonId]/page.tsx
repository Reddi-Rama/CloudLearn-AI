import Link from "next/link";
import { notFound } from "next/navigation";

import MachineLearningSidebar from "@/components/aiml/MachineLearningSidebar";
import AIMLContentRenderer from "@/components/aiml/AIMLContentRenderer";

// ============================================================
// MODULE 1
// ============================================================

import module1Lesson1 from "@/content/aiml/machine-learning/lessons/module1/lesson1";
import module1Lesson2 from "@/content/aiml/machine-learning/lessons/module1/lesson2";
import module1Lesson3 from "@/content/aiml/machine-learning/lessons/module1/lesson3";
import module1Lesson4 from "@/content/aiml/machine-learning/lessons/module1/lesson4";
import module1Lesson5 from "@/content/aiml/machine-learning/lessons/module1/lesson5";
import module1Lesson6 from "@/content/aiml/machine-learning/lessons/module1/lesson6";
import module1Lesson7 from "@/content/aiml/machine-learning/lessons/module1/lesson7";
import module1Lesson8 from "@/content/aiml/machine-learning/lessons/module1/lesson8";
import module1Lesson9 from "@/content/aiml/machine-learning/lessons/module1/lesson9";
import module1Lesson10 from "@/content/aiml/machine-learning/lessons/module1/lesson10";
import module1Lesson11 from "@/content/aiml/machine-learning/lessons/module1/lesson11";
import module1Lesson12 from "@/content/aiml/machine-learning/lessons/module1/lesson12";
import module1Lesson13 from "@/content/aiml/machine-learning/lessons/module1/lesson13";
import module1Lesson14 from "@/content/aiml/machine-learning/lessons/module1/lesson14";
import module1Lesson15 from "@/content/aiml/machine-learning/lessons/module1/lesson15";

// ============================================================
// MODULE 2
// ============================================================

import module2Lesson1 from "@/content/aiml/machine-learning/lessons/module2/lesson1";
import module2Lesson2 from "@/content/aiml/machine-learning/lessons/module2/lesson2";
import module2Lesson3 from "@/content/aiml/machine-learning/lessons/module2/lesson3";
import module2Lesson4 from "@/content/aiml/machine-learning/lessons/module2/lesson4";
import module2Lesson5 from "@/content/aiml/machine-learning/lessons/module2/lesson5";
import module2Lesson6 from "@/content/aiml/machine-learning/lessons/module2/lesson6";
import module2Lesson7 from "@/content/aiml/machine-learning/lessons/module2/lesson7";
import module2Lesson8 from "@/content/aiml/machine-learning/lessons/module2/lesson8";
import module2Lesson9 from "@/content/aiml/machine-learning/lessons/module2/lesson9";
import module2Lesson10 from "@/content/aiml/machine-learning/lessons/module2/lesson10";
import module2Lesson11 from "@/content/aiml/machine-learning/lessons/module2/lesson11";
import module2Lesson12 from "@/content/aiml/machine-learning/lessons/module2/lesson12";
import module2Lesson13 from "@/content/aiml/machine-learning/lessons/module2/lesson13";
import module2Lesson14 from "@/content/aiml/machine-learning/lessons/module2/lesson14";
import module2Lesson15 from "@/content/aiml/machine-learning/lessons/module2/lesson15";
import module2Lesson16 from "@/content/aiml/machine-learning/lessons/module2/lesson16";
import module2Lesson17 from "@/content/aiml/machine-learning/lessons/module2/lesson17";
import module2Lesson18 from "@/content/aiml/machine-learning/lessons/module2/lesson18";

// ============================================================
// MODULE 3
// ============================================================

import module3Lesson1 from "@/content/aiml/machine-learning/lessons/module3/lesson1";
import module3Lesson2 from "@/content/aiml/machine-learning/lessons/module3/lesson2";
import module3Lesson3 from "@/content/aiml/machine-learning/lessons/module3/lesson3";
import module3Lesson4 from "@/content/aiml/machine-learning/lessons/module3/lesson4";
import module3Lesson5 from "@/content/aiml/machine-learning/lessons/module3/lesson5";
import module3Lesson6 from "@/content/aiml/machine-learning/lessons/module3/lesson6";
import module3Lesson7 from "@/content/aiml/machine-learning/lessons/module3/lesson7";
import module3Lesson8 from "@/content/aiml/machine-learning/lessons/module3/lesson8";
import module3Lesson9 from "@/content/aiml/machine-learning/lessons/module3/lesson9";
import module3Lesson10 from "@/content/aiml/machine-learning/lessons/module3/lesson10";
import module3Lesson11 from "@/content/aiml/machine-learning/lessons/module3/lesson11";
import module3Lesson12 from "@/content/aiml/machine-learning/lessons/module3/lesson12";
import module3Lesson13 from "@/content/aiml/machine-learning/lessons/module3/lesson13";
import module3Lesson14 from "@/content/aiml/machine-learning/lessons/module3/lesson14";
import module3Lesson15 from "@/content/aiml/machine-learning/lessons/module3/lesson15";
import module3Lesson16 from "@/content/aiml/machine-learning/lessons/module3/lesson16";
import module3Lesson17 from "@/content/aiml/machine-learning/lessons/module3/lesson17";
import module3Lesson18 from "@/content/aiml/machine-learning/lessons/module3/lesson18";

// ============================================================
// MODULE 4
// ============================================================

import module4Lesson1 from "@/content/aiml/machine-learning/lessons/module4/lesson1";
import module4Lesson2 from "@/content/aiml/machine-learning/lessons/module4/lesson2";
import module4Lesson3 from "@/content/aiml/machine-learning/lessons/module4/lesson3";
import module4Lesson4 from "@/content/aiml/machine-learning/lessons/module4/lesson4";
import module4Lesson5 from "@/content/aiml/machine-learning/lessons/module4/lesson5";
import module4Lesson6 from "@/content/aiml/machine-learning/lessons/module4/lesson6";
import module4Lesson7 from "@/content/aiml/machine-learning/lessons/module4/lesson7";
import module4Lesson8 from "@/content/aiml/machine-learning/lessons/module4/lesson8";
import module4Lesson9 from "@/content/aiml/machine-learning/lessons/module4/lesson9";
import module4Lesson10 from "@/content/aiml/machine-learning/lessons/module4/lesson10";
import module4Lesson11 from "@/content/aiml/machine-learning/lessons/module4/lesson11";
import module4Lesson12 from "@/content/aiml/machine-learning/lessons/module4/lesson12";
import module4Lesson13 from "@/content/aiml/machine-learning/lessons/module4/lesson13";
import module4Lesson14 from "@/content/aiml/machine-learning/lessons/module4/lesson14";
import module4Lesson15 from "@/content/aiml/machine-learning/lessons/module4/lesson15";
import module4Lesson16 from "@/content/aiml/machine-learning/lessons/module4/lesson16";

// ============================================================
// MODULE 5
// ============================================================

import module5Lesson1 from "@/content/aiml/machine-learning/lessons/module5/lesson1";
import module5Lesson2 from "@/content/aiml/machine-learning/lessons/module5/lesson2";
import module5Lesson3 from "@/content/aiml/machine-learning/lessons/module5/lesson3";
import module5Lesson4 from "@/content/aiml/machine-learning/lessons/module5/lesson4";
import module5Lesson5 from "@/content/aiml/machine-learning/lessons/module5/lesson5";
import module5Lesson6 from "@/content/aiml/machine-learning/lessons/module5/lesson6";
import module5Lesson7 from "@/content/aiml/machine-learning/lessons/module5/lesson7";
import module5Lesson8 from "@/content/aiml/machine-learning/lessons/module5/lesson8";
import module5Lesson9 from "@/content/aiml/machine-learning/lessons/module5/lesson9";
import module5Lesson10 from "@/content/aiml/machine-learning/lessons/module5/lesson10";
import module5Lesson11 from "@/content/aiml/machine-learning/lessons/module5/lesson11";
import module5Lesson12 from "@/content/aiml/machine-learning/lessons/module5/lesson12";
import module5Lesson13 from "@/content/aiml/machine-learning/lessons/module5/lesson13";
import module5Lesson14 from "@/content/aiml/machine-learning/lessons/module5/lesson14";
import module5Lesson15 from "@/content/aiml/machine-learning/lessons/module5/lesson15";
import module5Lesson16 from "@/content/aiml/machine-learning/lessons/module5/lesson16";
import module5Lesson17 from "@/content/aiml/machine-learning/lessons/module5/lesson17";
import module5Lesson18 from "@/content/aiml/machine-learning/lessons/module5/lesson18";
import module5Lesson19 from "@/content/aiml/machine-learning/lessons/module5/lesson19";
import module5Lesson20 from "@/content/aiml/machine-learning/lessons/module5/lesson20";
import module5Lesson21 from "@/content/aiml/machine-learning/lessons/module5/lesson21";
import module5Lesson22 from "@/content/aiml/machine-learning/lessons/module5/lesson22";

// ============================================================
// MODULE 6
// ============================================================

import module6Lesson1 from "@/content/aiml/machine-learning/lessons/module6/lesson1";
import module6Lesson2 from "@/content/aiml/machine-learning/lessons/module6/lesson2";
import module6Lesson3 from "@/content/aiml/machine-learning/lessons/module6/lesson3";
import module6Lesson4 from "@/content/aiml/machine-learning/lessons/module6/lesson4";
import module6Lesson5 from "@/content/aiml/machine-learning/lessons/module6/lesson5";
import module6Lesson6 from "@/content/aiml/machine-learning/lessons/module6/lesson6";
import module6Lesson7 from "@/content/aiml/machine-learning/lessons/module6/lesson7";
import module6Lesson8 from "@/content/aiml/machine-learning/lessons/module6/lesson8";
import module6Lesson9 from "@/content/aiml/machine-learning/lessons/module6/lesson9";
import module6Lesson10 from "@/content/aiml/machine-learning/lessons/module6/lesson10";
import module6Lesson11 from "@/content/aiml/machine-learning/lessons/module6/lesson11";
import module6Lesson12 from "@/content/aiml/machine-learning/lessons/module6/lesson12";
import module6Lesson13 from "@/content/aiml/machine-learning/lessons/module6/lesson13";
import module6Lesson14 from "@/content/aiml/machine-learning/lessons/module6/lesson14";
import module6Lesson15 from "@/content/aiml/machine-learning/lessons/module6/lesson15";
import module6Lesson16 from "@/content/aiml/machine-learning/lessons/module6/lesson16";
import module6Lesson17 from "@/content/aiml/machine-learning/lessons/module6/lesson17";
import module6Lesson18 from "@/content/aiml/machine-learning/lessons/module6/lesson18";
import module6Lesson19 from "@/content/aiml/machine-learning/lessons/module6/lesson19";
import module6Lesson20 from "@/content/aiml/machine-learning/lessons/module6/lesson20";
import module6Lesson21 from "@/content/aiml/machine-learning/lessons/module6/lesson21";

// ============================================================
// TYPES
// ============================================================

interface Props {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
}

// ============================================================
// MODULE LESSONS
// ============================================================

const modules: Record<string, any[]> = {
  module1: [
    module1Lesson1,
    module1Lesson2,
    module1Lesson3,
    module1Lesson4,
    module1Lesson5,
    module1Lesson6,
    module1Lesson7,
    module1Lesson8,
    module1Lesson9,
    module1Lesson10,
    module1Lesson11,
    module1Lesson12,
    module1Lesson13,
    module1Lesson14,
    module1Lesson15,
  ],

  module2: [
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
    module2Lesson16,
    module2Lesson17,
    module2Lesson18,
  ],

  module3: [
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
    module3Lesson13,
    module3Lesson14,
    module3Lesson15,
    module3Lesson16,
    module3Lesson17,
    module3Lesson18,
  ],

  module4: [
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
    module4Lesson13,
    module4Lesson14,
    module4Lesson15,
    module4Lesson16,
  ],

  module5: [
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
    module5Lesson15,
    module5Lesson16,
    module5Lesson17,
    module5Lesson18,
    module5Lesson19,
    module5Lesson20,
    module5Lesson21,
    module5Lesson22,
  ],

  module6: [
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
    module6Lesson13,
    module6Lesson14,
    module6Lesson15,
    module6Lesson16,
    module6Lesson17,
    module6Lesson18,
    module6Lesson19,
    module6Lesson20,
    module6Lesson21,
  ],
};

// ============================================================
// PAGE
// ============================================================

export default async function MachineLearningLessonPage({
  params,
}: Props) {
  const { moduleId, lessonId } = await params;

  // ----------------------------------------------------------
  // GET MODULE
  // ----------------------------------------------------------

  const lessons = modules[moduleId];

  if (!lessons) {
    notFound();
  }

  // ----------------------------------------------------------
  // GET CURRENT LESSON
  // ----------------------------------------------------------

  const currentLesson = lessons.find(
    (lesson: any) => lesson.id === lessonId
  );

  if (!currentLesson) {
    notFound();
  }

  // ----------------------------------------------------------
  // CONTENT
  // ----------------------------------------------------------

  const lessonContent =
    currentLesson.content !== undefined
      ? currentLesson.content
      : currentLesson;

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------

  const currentIndex = lessons.findIndex(
    (lesson: any) => lesson.id === lessonId
  );

  const previousLesson =
    currentIndex > 0
      ? lessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : null;

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <main className="min-h-screen w-full bg-[#020617] text-white">

      {/* ======================================================
          BACK BUTTON
      ====================================================== */}

      <div className="w-full px-4 pb-5 pt-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto w-full max-w-[1800px]">

          <Link
            href="/courses/aiml/machine-learning"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-2.5
              text-sm
              font-semibold
              text-slate-700
              shadow-lg
              transition
              hover:bg-slate-100
              hover:text-slate-950
            "
          >
            ← Back to Course
          </Link>

        </div>
      </div>

      {/* ======================================================
          LESSON AREA
      ====================================================== */}

      <section className="w-full px-4 pb-16 sm:px-6 lg:px-8 xl:px-10">

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1800px]
            grid-cols-1
            gap-6
            lg:grid-cols-[300px_minmax(0,1fr)]
            lg:gap-6
          "
        >

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside className="hidden min-w-0 lg:block">

            <div
              className="
                sticky
                top-24
                z-20
                w-full
                max-h-[calc(100vh-7rem)]
                overflow-hidden
              "
            >
              <MachineLearningSidebar />
            </div>

          </aside>

          {/* ==================================================
              ARTICLE
          ================================================== */}

          <article
            className="
              min-w-0
              w-full
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/70
              shadow-2xl
            "
          >

            {/* =================================================
                LESSON CONTENT
            ================================================= */}

            <div
              className="
                w-full
                min-w-0
                px-5
                py-7
                sm:px-8
                sm:py-9
                lg:px-10
                lg:py-10
                xl:px-12
                xl:py-12
              "
            >

              <AIMLContentRenderer
                content={lessonContent}
              />

            </div>

            {/* =================================================
                PREVIOUS / NEXT
            ================================================= */}

            {(previousLesson || nextLesson) && (
              <div
                className="
                  border-t
                  border-slate-800
                  bg-slate-950/30
                  px-5
                  py-6
                  sm:px-8
                  lg:px-10
                  xl:px-12
                "
              >

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-4
                    lg:grid-cols-2
                  "
                >

                  {/* PREVIOUS */}

                  {previousLesson ? (
                    <Link
                      href={`/lesson/aiml/machine-learning/${moduleId}/${previousLesson.id}`}
                      className="
                        group
                        min-w-0
                        rounded-2xl
                        border
                        border-slate-800
                        bg-slate-900/60
                        p-5
                        transition
                        hover:border-sky-500/40
                        hover:bg-slate-900
                      "
                    >

                      <div
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Previous Lesson
                      </div>

                      <div className="mt-2 flex items-center gap-2">

                        <span className="text-sky-400">
                          ←
                        </span>

                        <span
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-200
                            group-hover:text-white
                          "
                        >
                          {previousLesson.title}
                        </span>

                      </div>

                    </Link>
                  ) : (
                    <div />
                  )}

                  {/* NEXT */}

                  {nextLesson ? (
                    <Link
                      href={`/lesson/aiml/machine-learning/${moduleId}/${nextLesson.id}`}
                      className="
                        group
                        min-w-0
                        rounded-2xl
                        border
                        border-slate-800
                        bg-slate-900/60
                        p-5
                        transition
                        hover:border-sky-500/40
                        hover:bg-slate-900
                        lg:text-right
                      "
                    >

                      <div
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-sky-400
                        "
                      >
                        Next Lesson
                      </div>

                      <div
                        className="
                          mt-2
                          flex
                          items-center
                          gap-2
                          lg:justify-end
                        "
                      >

                        <span
                          className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-200
                            group-hover:text-white
                          "
                        >
                          {nextLesson.title}
                        </span>

                        <span className="text-sky-400">
                          →
                        </span>

                      </div>

                    </Link>
                  ) : (
                    <div />
                  )}

                </div>

              </div>
            )}

          </article>

        </div>

      </section>

    </main>
  );
}