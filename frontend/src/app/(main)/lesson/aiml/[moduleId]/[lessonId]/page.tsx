import Link from "next/link";
import { notFound } from "next/navigation";

import {
  AIML_MODULES,
  getAIMLModule,
  loadAIMLContent,
} from "@/content/aiml/aimlRegistry";

import AIMLSidebar from "@/components/aiml/AIMLSidebar";
import AIMLContentRenderer from "@/components/aiml/AIMLContentRenderer";
import AIMLCourseCompletion from "@/components/aiml/AIMLCourseCompletion";

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

  /*
   * Normalize IDs such as:
   *
   * lesson-01 -> lesson1
   * lesson-02 -> lesson2
   * lesson-10 -> lesson10
   *
   * Normal lesson IDs such as lesson1 remain unchanged.
   */
  const normalizedLessonId = lessonId.replace(
    /^lesson-0*/,
    "lesson"
  );

  const module = getAIMLModule(moduleId);

  if (!module) {
    notFound();
  }

  /*
   * Load lesson / about / practice / project.
   *
   * loadAIMLContent already knows how to load
   * all four types.
   */
  let lessonContent: any = null;

  try {
    lessonContent = await loadAIMLContent(
      moduleId,
      normalizedLessonId
    );
  } catch (error) {
    console.error(
      "Failed to load AIML content:",
      error
    );

    notFound();
  }

  if (!lessonContent) {
    notFound();
  }

  /*
   * Special module pages.
   *
   * These are NOT lessons, so do not run
   * the lesson-index validation for them.
   */
  const isSpecialPage =
    normalizedLessonId === "about" ||
    normalizedLessonId === "practice" ||
    normalizedLessonId === "project";

  /*
   * Find the current lesson only when this is
   * an actual lesson page.
   */
  let currentIndex = -1;

  if (!isSpecialPage) {
    currentIndex = module.lessons.findIndex(
      (lesson: any) =>
        lesson.id === normalizedLessonId
    );

    if (currentIndex === -1) {
      notFound();
    }
  }

  const previousLesson =
    !isSpecialPage && currentIndex > 0
      ? module.lessons[currentIndex - 1]
      : null;

  const nextLesson =
    !isSpecialPage &&
    currentIndex >= 0 &&
    currentIndex < module.lessons.length - 1
      ? module.lessons[currentIndex + 1]
      : null;

  /*
   * Final lesson of AI Foundations.
   */
  const lastModule =
    AIML_MODULES[AIML_MODULES.length - 1];

  const lastLesson =
    lastModule?.lessons[
      lastModule.lessons.length - 1
    ];

  const isFinalLesson =
    !isSpecialPage &&
    moduleId === lastModule?.id &&
    normalizedLessonId === lastLesson?.id;

  /*
   * Special page title.
   */
  const pageTitle =
    normalizedLessonId === "about"
      ? lessonContent.title ?? "About This Module"
      : normalizedLessonId === "practice"
        ? lessonContent.title ?? "Module Practice"
        : normalizedLessonId === "project"
          ? lessonContent.title ?? "Module Project"
          : lessonContent.title;

  return (
    <main className="min-h-screen w-full bg-[#020617] pt-20 text-white">

      {/* COURSE NAVIGATION */}

      <div className="w-full px-4 pb-4 pt-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto flex w-full max-w-[1800px] items-center">
          <Link
            href="/courses/aiml/ai-foundations"
            className="
              group inline-flex items-center gap-3
              rounded-2xl border border-cyan-500/20
              bg-slate-950/90 px-4 py-2.5
              text-sm font-bold text-slate-200
              shadow-[0_8px_30px_rgba(8,145,178,0.10)]
              backdrop-blur-xl transition-all duration-200
              hover:-translate-y-0.5
              hover:border-cyan-400/40
              hover:bg-slate-900
              hover:text-white
            "
          >
            <span
              className="
                flex h-8 w-8 shrink-0 items-center
                justify-center rounded-xl
                border border-cyan-400/20
                bg-cyan-400/10
                text-lg text-cyan-300
                transition-transform duration-200
                group-hover:-translate-x-0.5
              "
            >
              ←
            </span>

            <span className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-cyan-400">
                Course Navigation
              </span>

              <span className="mt-0.5 text-sm font-bold text-slate-100">
                Back to AI Foundations
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* LESSON AREA */}

      <section className="w-full px-4 pb-16 sm:px-6 lg:px-8 xl:px-10">
        <div
          className="
            mx-auto grid w-full max-w-[1800px]
            grid-cols-1 gap-6
            lg:grid-cols-[300px_minmax(0,1fr)]
          "
        >

          {/* SIDEBAR */}

          <aside className="hidden min-w-0 lg:block">
            <div
              className="
                sticky top-24 z-20 w-full
                max-h-[calc(100vh-7rem)]
                overflow-hidden
              "
            >
              <AIMLSidebar />
            </div>
          </aside>

          {/* ARTICLE */}

          <article
            className="
              min-w-0 w-full overflow-hidden
              rounded-3xl border border-slate-800
              bg-slate-900/70 shadow-2xl
            "
          >

            {/* HEADER */}

            <div
              className="
                border-b border-slate-800
                bg-gradient-to-br
                from-violet-500/[0.08]
                via-slate-950/40
                to-cyan-500/[0.05]
                px-5 py-7
                sm:px-8 sm:py-9
                lg:px-10 lg:py-10
                xl:px-12
              "
            >
              <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                {isSpecialPage
                  ? "AI Foundations"
                  : `Module ${module.number} • Lesson ${
                      currentIndex + 1
                    }`}
              </div>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {pageTitle}
              </h1>

              {lessonContent.description && (
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-400">
                  {lessonContent.description}
                </p>
              )}
            </div>

            {/* CONTENT */}

            <div
              className="
                w-full min-w-0
                px-5 py-7
                sm:px-8 sm:py-9
                lg:px-10 lg:py-10
                xl:px-12 xl:py-12
              "
            >
              <AIMLContentRenderer
                content={
                  lessonContent.content ??
                  lessonContent
                }
              />

              {/* LESSON COMPLETION */}

              {!isSpecialPage && (
                <AIMLCourseCompletion
                  moduleId={moduleId}
                  lessonId={normalizedLessonId}
                  courseSlug="ai-foundations"
                  isFinalLesson={isFinalLesson}
                />
              )}
            </div>

            {/* PREVIOUS / NEXT */}

            {!isSpecialPage &&
              (previousLesson || nextLesson) && (
                <div
                  className="
                    border-t border-slate-800
                    bg-slate-950/30
                    px-5 py-6
                    sm:px-8
                    lg:px-10
                    xl:px-12
                  "
                >
                  <div
                    className="
                      grid grid-cols-1 gap-4
                      lg:grid-cols-2
                    "
                  >

                    {/* PREVIOUS */}

                    {previousLesson ? (
                      <Link
                        href={`/lesson/aiml/${moduleId}/${previousLesson.id}`}
                        className="
                          group min-w-0 rounded-2xl
                          border border-slate-800
                          bg-slate-900/60 p-5
                          transition
                          hover:border-sky-500/40
                          hover:bg-slate-900
                        "
                      >
                        <div
                          className="
                            text-[10px] font-bold
                            uppercase tracking-[0.18em]
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
                              truncate text-sm
                              font-semibold text-slate-200
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
                        href={`/lesson/aiml/${moduleId}/${nextLesson.id}`}
                        className="
                          group min-w-0 rounded-2xl
                          border border-slate-800
                          bg-slate-900/60 p-5
                          transition
                          hover:border-sky-500/40
                          hover:bg-slate-900
                          lg:text-right
                        "
                      >
                        <div
                          className="
                            text-[10px] font-bold
                            uppercase tracking-[0.18em]
                            text-sky-400
                          "
                        >
                          Next Lesson
                        </div>

                        <div
                          className="
                            mt-2 flex items-center
                            gap-2 lg:justify-end
                          "
                        >
                          <span
                            className="
                              truncate text-sm
                              font-semibold text-slate-200
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