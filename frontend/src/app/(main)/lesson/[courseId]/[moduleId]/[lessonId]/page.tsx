import Link from "next/link";
import { notFound } from "next/navigation";

import { modules as pythonModules } from "@/content/programming/python/lessons/module";
import { modules as cppModules } from "@/content/programming/cpp/lessons/module";
import { modules as javaModules } from "@/content/programming/java/lessons/module";

interface PageProps {
  params: Promise<{
    courseId: string;
    moduleId: string;
    lessonId: string;
  }>;
}

type Example = {
  title?: string;
  code?: string;
  output?: string;
};

type LessonData = {
  id: string;
  title: string;
  content: string;
  examples?: Example[];
};

type ModuleData = {
  id: string;
  title: string;
  about: LessonData;
  lessons: LessonData[];
};

/* =========================================================
   RENDER LESSON CONTENT
========================================================= */

function renderContent(content: string) {
  return content.split("\n").map((line, index) => {
    const text = line.trim();

    /* EMPTY LINE */

    if (!text) {
      return <div key={index} className="h-2" />;
    }

    /* H1 */

    if (text.startsWith("# ")) {
      return (
        <h1
          key={index}
          className="
            mb-7
            text-4xl
            font-bold
            leading-tight
            text-green-400
          "
        >
          {text.replace("# ", "")}
        </h1>
      );
    }

    /* H2 */

    if (text.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="
            mb-5
            mt-8
            text-3xl
            font-bold
            leading-tight
            text-green-400
          "
        >
          {text.replace("## ", "")}
        </h2>
      );
    }

    /* H3 */

    if (text.startsWith("### ")) {
      return (
        <h3
          key={index}
          className="
            mb-4
            mt-6
            text-2xl
            font-bold
            leading-tight
            text-green-400
          "
        >
          {text.replace("### ", "")}
        </h3>
      );
    }

    /* BULLET */

    if (text.startsWith("- ")) {
      return (
        <div
          key={index}
          className="
            mb-2
            flex
            items-start
            gap-4
            text-2xl
            leading-9
            text-gray-200
          "
        >
          <span
            className="
              mt-4
              h-2.5
              w-2.5
              shrink-0
              rounded-full
              bg-sky-400
            "
          />

          <span>{text.replace("- ", "")}</span>
        </div>
      );
    }

    /* NORMAL PARAGRAPH */

    return (
      <p
        key={index}
        className="
          mb-4
          text-2xl
          leading-9
          text-gray-200
        "
      >
        {text}
      </p>
    );
  });
}

/* =========================================================
   GET COURSE MODULES
========================================================= */

function getCourseModules(courseId: string): ModuleData[] | null {
  if (courseId === "python-development") {
    return pythonModules as ModuleData[];
  }

  if (courseId === "cpp-development") {
    return cppModules as ModuleData[];
  }

  if (courseId === "java-development") {
    return javaModules as ModuleData[];
  }

  return null;
}

/* =========================================================
   GET COURSE NAME
========================================================= */

function getCourseName(courseId: string) {
  if (courseId === "python-development") {
    return "Python Development";
  }

  if (courseId === "cpp-development") {
    return "Cpp Development";
  }

  if (courseId === "java-development") {
    return "Java Development";
  }

  return courseId.replace(/-/g, " ").replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );
}

/* =========================================================
   LESSON PAGE
========================================================= */

export default async function LessonPage({ params }: PageProps) {
  const { courseId, moduleId, lessonId } = await params;

  /* GET COURSE */

  const modules = getCourseModules(courseId);

  if (!modules) {
    return notFound();
  }

  /* GET MODULE */

  const moduleData = modules.find((module) => module.id === moduleId);

  if (!moduleData) {
    return notFound();
  }

  /* ALL LESSONS INCLUDING ABOUT */

  const pages: LessonData[] = [
    moduleData.about,
    ...moduleData.lessons,
  ];

  /* CURRENT LESSON */

  const currentIndex = pages.findIndex(
    (page) => page.id === lessonId
  );

  if (currentIndex === -1) {
    return notFound();
  }

  const current = pages[currentIndex];

  /* PREVIOUS LESSON */

  const previousLesson =
    currentIndex > 0 ? pages[currentIndex - 1] : null;

  /* NEXT LESSON */

  const nextLesson =
    currentIndex < pages.length - 1
      ? pages[currentIndex + 1]
      : null;

  /* CURRENT MODULE NUMBER */

  const moduleNumber = Number(
    moduleId.replace("module", "")
  );

  /* NEXT MODULE */

  const nextModule = modules.find(
    (module) =>
      module.id === `module${moduleNumber + 1}`
  );

  /* COURSE NAME */

  const courseName = getCourseName(courseId);

  return (
    <main
      className="
        min-h-screen
        w-full
        bg-[#020617]
        pt-20
        text-white
      "
    >

      {/* =================================================
          BACKGROUND STARS
      ================================================= */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          overflow-hidden
        "
      >
        {Array.from({ length: 150 }).map((_, i) => (
          <span
            key={i}
            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-white
              opacity-60
              animate-pulse
            "
            style={{
              top: `${(i * 19) % 100}%`,
              left: `${(i * 37) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          w-full
        "
      >

        {/* =================================================
            BACK TO COURSE BUTTON
        ================================================= */}

        <div
          className="
            relative
            z-20
            w-full
            px-5
            py-6
            sm:px-8
            lg:px-10
            lg:pl-[calc((100vw-1088px)/2)]
          "
        >
          <Link
            href={`/courses/${courseId}`}
            className="
              inline-flex
              items-center
              rounded-2xl
              bg-sky-600
              px-7
              py-4
              text-lg
              font-bold
              text-white
              shadow-lg
              transition
              hover:-translate-y-0.5
              hover:bg-sky-700
            "
          >
            ← Back to {courseName}
          </Link>
        </div>

        {/* =================================================
            COURSE AREA
        ================================================= */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            lg:grid-cols-[360px_minmax(0,1fr)]
          "
        >

          {/* =================================================
              LEFT SIDEBAR
          ================================================= */}

          <aside
            className="
              hidden
              lg:block
            "
          >
            <div
              className="
                sticky
                top-20
                h-[calc(100vh-80px)]
                overflow-y-auto
                border-r
                border-slate-800
                bg-slate-900/70
                px-5
                py-6
                backdrop-blur-sm
              "
            >

              {/* COURSE NAVIGATION */}

              <div
                className="
                  border-b
                  border-slate-700
                  pb-6
                "
              >
                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wider
                    text-sky-400
                  "
                >
                  Course Navigation
                </p>

                <h2
                  className="
                    mt-3
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {courseName}
                </h2>
              </div>

              {/* ALL MODULES */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >
                {modules.map((module, moduleIndex) => {
                  const isCurrentModule =
                    module.id === moduleId;

                  const modulePages: LessonData[] = [
                    module.about,
                    ...module.lessons,
                  ];

                  return (
                    <details
                      key={module.id}
                      open={isCurrentModule}
                      className="
                        group
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-700
                        bg-slate-950/40
                      "
                    >

                      {/* MODULE HEADER */}

                      <summary
                        className="
                          flex
                          cursor-pointer
                          list-none
                          items-center
                          gap-3
                          bg-slate-800
                          px-4
                          py-4
                          transition
                          hover:bg-slate-700
                        "
                      >
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-sky-500
                            text-sm
                            font-bold
                            text-white
                          "
                        >
                          {moduleIndex + 1}
                        </span>

                        <span
                          className="
                            min-w-0
                            flex-1
                            text-base
                            font-bold
                            leading-6
                            text-white
                          "
                        >
                          {module.title}
                        </span>

                        <span
                          className="
                            text-sm
                            text-slate-400
                            transition
                            group-open:rotate-180
                          "
                        >
                          ▲
                        </span>
                      </summary>

                      {/* LESSON LIST */}

                      <div
                        className="
                          border-t
                          border-slate-700
                          px-3
                          py-3
                        "
                      >
                        {modulePages.map(
                          (lesson, lessonIndex) => {
                            const isCurrent =
                              lesson.id === current.id;

                            return (
                              <Link
                                key={lesson.id}
                                href={`/lesson/${courseId}/${module.id}/${lesson.id}`}
                                className={`
                                  mb-1
                                  flex
                                  items-start
                                  gap-3
                                  rounded-xl
                                  px-3
                                  py-3
                                  text-sm
                                  leading-5
                                  transition

                                  ${
                                    isCurrent
                                      ? "bg-green-600 font-bold text-white"
                                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                  }
                                `}
                              >
                                <span
                                  className={`
                                    shrink-0
                                    text-xs

                                    ${
                                      isCurrent
                                        ? "text-green-200"
                                        : "text-slate-500"
                                    }
                                  `}
                                >
                                  {lessonIndex + 1}.
                                </span>

                                <span>
                                  {lesson.title}
                                </span>
                              </Link>
                            );
                          }
                        )}
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <section
            className="
              min-w-0
              w-full
              px-5
              pb-16
              sm:px-8
              lg:px-10
            "
          >
            <article
              className="
                w-full
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                px-6
                py-8
                shadow-2xl
                sm:px-10
                sm:py-10
                lg:px-12
                lg:py-12
              "
            >

              {/* MAIN LESSON TITLE */}

              <h1
                className="
                  mb-9
                  text-4xl
                  font-bold
                  leading-tight
                  text-green-400
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {current.title}
              </h1>

              {/* LESSON CONTENT */}

              <div className="w-full">
                {renderContent(current.content)}
              </div>

              {/* =================================================
                  EXAMPLES
              ================================================= */}

              {current.examples &&
                current.examples.length > 0 && (
                  <div
                    className="
                      mt-10
                      space-y-7
                    "
                  >
                    {current.examples.map(
                      (example, index) => (
                        <div
                          key={index}
                          className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-700
                            bg-slate-950
                          "
                        >

                          {/* EXAMPLE TITLE */}

                          {example.title && (
                            <div
                              className="
                                border-b
                                border-slate-700
                                px-6
                                py-4
                              "
                            >
                              <h3
                                className="
                                  text-xl
                                  font-bold
                                  text-green-400
                                "
                              >
                                {example.title}
                              </h3>
                            </div>
                          )}

                          {/* CODE */}

                          {example.code && (
                            <pre
                              className="
                                overflow-x-auto
                                px-6
                                py-6
                                text-base
                                leading-7
                                text-slate-200
                              "
                            >
                              <code>
                                {example.code}
                              </code>
                            </pre>
                          )}

                          {/* OUTPUT */}

                          {example.output && (
                            <div
                              className="
                                border-t
                                border-slate-700
                              "
                            >
                              <div
                                className="
                                  px-6
                                  py-4
                                "
                              >
                                <p
                                  className="
                                    mb-3
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-wide
                                    text-sky-400
                                  "
                                >
                                  Output
                                </p>

                                <pre
                                  className="
                                    overflow-x-auto
                                    rounded-xl
                                    bg-slate-900
                                    p-5
                                    text-base
                                    leading-7
                                    text-slate-200
                                  "
                                >
                                  <code>
                                    {example.output}
                                  </code>
                                </pre>
                              </div>
                            </div>
                          )}

                        </div>
                      )
                    )}
                  </div>
                )}

              {/* =================================================
                  LESSON NAVIGATION
              ================================================= */}

              <div
                className="
                  mt-10
                  border-t
                  border-slate-700
                  pt-7
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >

                  {/* PREVIOUS LESSON */}

                  {previousLesson ? (
                    <Link
                      href={`/lesson/${courseId}/${moduleId}/${previousLesson.id}`}
                      className="
                        rounded-2xl
                        bg-slate-800
                        px-7
                        py-4
                        text-base
                        font-bold
                        text-white
                        transition
                        hover:bg-slate-700
                      "
                    >
                      ← Previous Lesson
                    </Link>
                  ) : (
                    <div />
                  )}

                  {/* NEXT LESSON / MODULE */}

                  {nextLesson ? (
                    <Link
                      href={`/lesson/${courseId}/${moduleId}/${nextLesson.id}`}
                      className="
                        rounded-2xl
                        bg-green-600
                        px-7
                        py-4
                        text-base
                        font-bold
                        text-white
                        transition
                        hover:bg-green-700
                      "
                    >
                      Next Lesson →
                    </Link>
                  ) : nextModule ? (
                    <Link
                      href={`/lesson/${courseId}/${nextModule.id}/about`}
                      className="
                        rounded-2xl
                        bg-blue-600
                        px-7
                        py-4
                        text-base
                        font-bold
                        text-white
                        transition
                        hover:bg-blue-700
                      "
                    >
                      Next Module →
                    </Link>
                  ) : (
                    <Link
                      href={`/courses/${courseId}`}
                      className="
                        rounded-2xl
                        bg-sky-600
                        px-7
                        py-4
                        text-base
                        font-bold
                        text-white
                        transition
                        hover:bg-sky-700
                      "
                    >
                      Complete Course →
                    </Link>
                  )}

                </div>
              </div>

            </article>
          </section>

        </div>
      </div>
    </main>
  );
}