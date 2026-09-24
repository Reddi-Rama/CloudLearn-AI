import Link from "next/link";
import { notFound } from "next/navigation";

import {
  AIML_MODULES,
  getAIMLModule,
  loadAIMLContent,
} from "@/content/aiml/aimlRegistry";

import AIMLSidebar from "@/components/aiml/AIMLSidebar";
import AIMLContentRenderer from "@/components/aiml/AIMLContentRenderer";

interface Props {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
}

export default async function AIMLLessonPage({
  params,
}: Props) {
  const { moduleId, lessonId } = await params;

  // ============================================================
  // MODULE
  // ============================================================

  const module = getAIMLModule(moduleId);

  if (!module) {
    notFound();
  }

  // ============================================================
  // CONTENT
  // ============================================================

  let lessonContent: any;

  try {
    lessonContent = await loadAIMLContent(
      moduleId,
      lessonId
    );
  } catch (error) {
    console.error(
      "Failed to load AI Foundations content:",
      error
    );

    notFound();
  }

  if (!lessonContent) {
    notFound();
  }

  // ============================================================
  // LESSON NAVIGATION
  // ============================================================

  const currentIndex =
    module.lessons.findIndex(
      (lesson: any) =>
        lesson.id === lessonId
    );

  const previousLesson =
    currentIndex > 0
      ? module.lessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex >= 0 &&
    currentIndex < module.lessons.length - 1
      ? module.lessons[currentIndex + 1]
      : null;

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <main className="min-h-screen w-full bg-[#020617] text-white">

      {/* ======================================================
          BACK BUTTON
      ====================================================== */}

      <div className="w-full px-4 pb-5 pt-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto w-full max-w-[1800px]">

          <Link
            href="/courses/aiml"
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
              <AIMLSidebar />
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
                content={
                  lessonContent.content ??
                  lessonContent
                }
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

                  {/* =================================================
                      PREVIOUS
                  ================================================= */}

                  {previousLesson ? (

                    <Link
                      href={`/lesson/aiml/${moduleId}/${previousLesson.id}`}
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

                  {/* =================================================
                      NEXT
                  ================================================= */}

                  {nextLesson ? (

                    <Link
                      href={`/lesson/aiml/${moduleId}/${nextLesson.id}`}
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