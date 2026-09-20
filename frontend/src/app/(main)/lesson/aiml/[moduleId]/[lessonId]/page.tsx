import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

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

  const {
    moduleId,
    lessonId,
  } = await params;

  const module =
    getAIMLModule(moduleId);

  if (!module) {
    notFound();
  }

  const isAbout =
    lessonId === "about";

  const isPractice =
    lessonId === "practice";

  const isProject =
    lessonId === "project";

  let content:
    {
      title: string;
      content: string;
    }
    | null = null;

  if (!isAbout) {

    try {

      content =
        await loadAIMLContent(
          moduleId,
          lessonId
        );

    } catch (error) {

      console.error(
        "AI/ML content error:",
        error
      );

      notFound();
    }

    if (!content) {
      notFound();
    }
  }

  const lessonIndex =
    module.lessons.findIndex(
      (lesson) =>
        lesson.id === lessonId
    );

  let previousHref:
    string | null = null;

  let nextHref:
    string | null = null;

  if (isAbout) {

    nextHref =
      module.lessons[0]?.href ??
      null;

  } else if (lessonIndex >= 0) {

    previousHref =
      lessonIndex > 0
        ? module.lessons[
            lessonIndex - 1
          ].href
        : `/lesson/aiml/${moduleId}/about`;

    nextHref =
      lessonIndex <
      module.lessons.length - 1
        ? module.lessons[
            lessonIndex + 1
          ].href
        : `/lesson/aiml/${moduleId}/practice`;

  } else if (isPractice) {

    previousHref =
      module.lessons.length
        ? module.lessons[
            module.lessons.length - 1
          ].href
        : `/lesson/aiml/${moduleId}/about`;

    nextHref =
      `/lesson/aiml/${moduleId}/project`;

  } else if (isProject) {

    previousHref =
      `/lesson/aiml/${moduleId}/practice`;

    const moduleIndex =
      AIML_MODULES.findIndex(
        (item) =>
          item.id === moduleId
      );

    const nextModule =
      AIML_MODULES[
        moduleIndex + 1
      ];

    nextHref = nextModule
      ? `/lesson/aiml/${nextModule.id}/about`
      : `/courses/aiml`;
  }

  return (
    <main
      className="
        min-h-screen
        bg-slate-100
        text-slate-900
        dark:bg-[#07111f]
        dark:text-slate-100
      "
    >

      {/* =====================================================
          SUBTLE PAGE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-0
          bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.07),_transparent_25%)]
          dark:bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.06),_transparent_25%)]
        "
      />

      {/* COURSE AREA */}

      <div className="grid w-full min-w-0 grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)]">

        <aside className="hidden lg:block">
          <div className="sticky top-20 h-[calc(100vh-80px)] overflow-y-auto border-r border-slate-800 bg-slate-900/70 px-5 py-6 backdrop-blur-sm">
            <AIMLSidebar
              moduleId={moduleId}
              lessonId={lessonId}
            />
          </div>
        </aside>

        <section className="min-w-0 w-full px-5 pb-16 sm:px-8 lg:px-10">

          <article
            className="
              min-h-[calc(100vh-175px)]
              w-full
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              shadow-[0_14px_50px_rgba(15,23,42,0.07)]
              dark:border-slate-800
              dark:bg-[#0c1726]
              dark:shadow-[0_18px_55px_rgba(0,0,0,0.42)]
            "
          >

            {/* =================================================
                HEADER
            ================================================= */}

            <header
              className="
                border-b
                border-slate-200
                bg-gradient-to-br
                from-sky-50
                via-white
                to-white
                px-7
                py-8
                dark:border-slate-800
                dark:from-[#102238]
                dark:via-[#0c1726]
                dark:to-[#0b1522]
                md:px-10
                md:py-9
              "
            >

              <Link
                href="/courses/aiml"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-2
                  text-xs
                  font-bold
                  text-slate-600
                  transition
                  hover:border-sky-400
                  hover:text-sky-500
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-300
                "
              >
                <ArrowLeft size={15} />
                AI/ML Course
              </Link>

              <div
                className="
                  mt-5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-sky-500
                "
              >
                Artificial Intelligence & Machine Learning
              </div>

              <div
                className="
                  mt-3
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-slate-500
                  dark:text-slate-400
                "
              >
                <span>
                  Module{" "}
                  {String(
                    module.number
                  ).padStart(2, "0")}
                </span>

                <span>
                  /
                </span>

                <span>
                  {module.title}
                </span>
              </div>

              <h1
                className="
                  mt-4
                  max-w-6xl
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-slate-950
                  dark:text-white
                  md:text-4xl
                  xl:text-[42px]
                "
              >
                {isAbout
                  ? module.title
                  : content?.title}
              </h1>

              <p
                className="
                  mt-4
                  max-w-5xl
                  text-[15px]
                  leading-7
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {isAbout
                  ? module.description
                  : isPractice
                  ? "Practice the concepts from this module using structured problems and applied examples."
                  : isProject
                  ? "Apply the concepts from this module through the associated AI project."
                  : `Module ${module.number} Â· AI & Machine Learning`}
              </p>

            </header>

            {/* =================================================
                BODY
            ================================================= */}

            <div
              className="
                px-7
                py-8
                md:px-10
                md:py-10
                xl:px-12
                xl:py-11
              "
            >

              {isAbout ? (

                <div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-sky-100
                      bg-sky-50
                      p-6
                      dark:border-sky-900/60
                      dark:bg-sky-950/25
                    "
                  >
                    <p
                      className="
                        text-[16px]
                        leading-7
                        text-slate-700
                        dark:text-slate-300
                      "
                    >
                      {module.description}
                    </p>
                  </div>

                  <div className="mt-10">

                    <h2
                      className="
                        text-2xl
                        font-black
                        tracking-tight
                        text-slate-950
                        dark:text-white
                        md:text-3xl
                      "
                    >
                      Module Lessons
                    </h2>

                    <p
                      className="
                        mt-2
                        text-[15px]
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Follow the lessons in sequence.
                    </p>

                    <div
                      className="
                        mt-6
                        grid
                        gap-3
                        md:grid-cols-2
                      "
                    >

                      {module.lessons.map(
                        (lesson) => (

                          <Link
                            key={lesson.id}
                            href={lesson.href}
                            className="
                              group
                              flex
                              items-center
                              gap-4
                              rounded-2xl
                              border
                              border-slate-200
                              bg-slate-50
                              px-4
                              py-4
                              transition
                              hover:-translate-y-0.5
                              hover:border-sky-400
                              hover:bg-sky-50
                              dark:border-slate-800
                              dark:bg-slate-950
                              dark:hover:border-sky-700
                              dark:hover:bg-slate-900
                            "
                          >

                            <span
                              className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-sky-500
                                text-sm
                                font-black
                                text-white
                              "
                            >
                              {lesson.number}
                            </span>

                            <span
                              className="
                                min-w-0
                                flex-1
                                text-sm
                                font-bold
                                leading-6
                                text-slate-700
                                dark:text-slate-200
                              "
                            >
                              {lesson.title}
                            </span>

                            <ArrowRight
                              size={17}
                              className="
                                shrink-0
                                text-slate-400
                                transition
                                group-hover:translate-x-1
                                group-hover:text-sky-500
                              "
                            />

                          </Link>

                        )
                      )}

                    </div>

                  </div>

                </div>

              ) : (

                <AIMLContentRenderer
                  content={
                    content?.content ?? ""
                  }
                />

              )}

            </div>

          </article>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              gap-4
            "
          >

            {previousHref ? (

              <Link
                href={previousHref}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-slate-700
                  shadow-sm
                  transition
                  hover:border-sky-400
                  hover:text-sky-500
                  dark:border-slate-800
                  dark:bg-[#0a1220]
                  dark:text-slate-300
                "
              >
                <ArrowLeft size={17} />
                Previous
              </Link>

            ) : (
              <span />
            )}

            {nextHref && (

              <Link
                href={nextHref}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-emerald-500
                  px-6
                  py-3
                  text-sm
                  font-black
                  text-white
                  shadow-sm
                  transition
                  hover:bg-emerald-600
                "
              >
                Next
                <ArrowRight size={17} />
              </Link>

            )}

          </div>

        </section>

      </div>

    </main>
  );
}


