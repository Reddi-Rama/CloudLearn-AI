import Link from "next/link";
import { notFound } from "next/navigation";

import MachineLearningSidebar from "@/components/aiml/MachineLearningSidebar";
import AIMLContentRenderer from "@/components/aiml/AIMLContentRenderer";

// ============================================================
// LESSON CONTENT
// ============================================================

import lesson1 from "@/content/aiml/machine-learning/lessons/module1/lesson1";
import lesson2 from "@/content/aiml/machine-learning/lessons/module1/lesson2";
import lesson3 from "@/content/aiml/machine-learning/lessons/module1/lesson3";
import lesson4 from "@/content/aiml/machine-learning/lessons/module1/lesson4";
import lesson5 from "@/content/aiml/machine-learning/lessons/module1/lesson5";
import lesson6 from "@/content/aiml/machine-learning/lessons/module1/lesson6";
import lesson7 from "@/content/aiml/machine-learning/lessons/module1/lesson7";
import lesson8 from "@/content/aiml/machine-learning/lessons/module1/lesson8";
import lesson9 from "@/content/aiml/machine-learning/lessons/module1/lesson9";
import lesson10 from "@/content/aiml/machine-learning/lessons/module1/lesson10";
import lesson11 from "@/content/aiml/machine-learning/lessons/module1/lesson11";
import lesson12 from "@/content/aiml/machine-learning/lessons/module1/lesson12";
import lesson13 from "@/content/aiml/machine-learning/lessons/module1/lesson13";
import lesson14 from "@/content/aiml/machine-learning/lessons/module1/lesson14";
import lesson15 from "@/content/aiml/machine-learning/lessons/module1/lesson15";

import module1About from "@/content/aiml/machine-learning/lessons/module1/about";
import module1Practice from "@/content/aiml/machine-learning/lessons/module1/practice";
import module1Project from "@/content/aiml/machine-learning/lessons/module1/project";

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
// CONTENT
// ============================================================

const module1Content: Record<string, any> = {
  about: module1About,

  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,

  practice: module1Practice,
  project: module1Project,
};

// ============================================================
// LESSON TITLES
// ============================================================

const lessonTitles: [string, string][] = [
  ["lesson1", "What Is Machine Learning?"],
  ["lesson2", "Why Machine Learning?"],
  ["lesson3", "Types of Machine Learning"],
  ["lesson4", "Supervised vs Unsupervised Learning"],
  ["lesson5", "Classification vs Regression"],
  ["lesson6", "Understanding ML Problems"],
  ["lesson7", "Data, Samples, Features and Targets"],
  ["lesson8", "Training, Validation and Test Data"],
  ["lesson9", "Generalization"],
  ["lesson10", "Overfitting and Underfitting"],
  ["lesson11", "Model Complexity and Dataset Size"],
  ["lesson12", "Python Environment for Machine Learning"],
  ["lesson13", "NumPy, Pandas and Matplotlib for ML"],
  ["lesson14", "Introduction to scikit-learn"],
  ["lesson15", "Your First Machine Learning Model"],
];

// ============================================================
// PAGE
// ============================================================

export default async function MachineLearningLessonPage({
  params,
}: Props) {
  const { moduleId, lessonId } = await params;

  if (moduleId !== "module1") {
    notFound();
  }

  const content = module1Content[lessonId];

  if (!content) {
    notFound();
  }

  const lessonContent =
    content?.content !== undefined
      ? content.content
      : content;

  const currentIndex = lessonTitles.findIndex(
    ([id]) => id === lessonId
  );

  const previousLesson =
    currentIndex > 0
      ? lessonTitles[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex >= 0 &&
    currentIndex < lessonTitles.length - 1
      ? lessonTitles[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen w-full bg-[#020617] text-white">
      {/* ======================================================
          TOP BACK BUTTON
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

              IMPORTANT:
              NO background here.
              NO full-height panel.
              NO fixed.
              NO h-full.
              NO bottom-0.
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
              LESSON CONTENT
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
                CONTENT
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
              <AIMLContentRenderer content={lessonContent} />
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
                      href={`/lesson/aiml/machine-learning/${moduleId}/${previousLesson[0]}`}
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
                          {previousLesson[1]}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {/* NEXT */}

                  {nextLesson ? (
                    <Link
                      href={`/lesson/aiml/machine-learning/${moduleId}/${nextLesson[0]}`}
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
                          {nextLesson[1]}
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