"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  MACHINE_LEARNING_STRUCTURE,
} from "@/content/aiml/machine-learning/machineLearningStructure";

export default function MachineLearningSidebar() {
  const pathname = usePathname();

  const moduleMatch = pathname.match(
    /\/(module\d+)(?:\/|$)/
  );

  const currentModule =
    moduleMatch?.[1] ?? "module1";

  const [openModules, setOpenModules] = useState<string[]>([
    currentModule,
  ]);

  const toggleModule = (moduleId: string) => {
    setOpenModules((current) =>
      current.includes(moduleId)
        ? current.filter((id) => id !== moduleId)
        : [...current, moduleId]
    );
  };

  const getLessonId = (
    lesson: any,
    index: number
  ) => {
    if (Array.isArray(lesson)) {
      return lesson[0] ?? `lesson${index + 1}`;
    }

    if (typeof lesson === "string") {
      return (
        lesson
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "") ||
        `lesson${index + 1}`
      );
    }

    return (
      lesson?.id ??
      lesson?.lessonId ??
      lesson?.slug ??
      `lesson${index + 1}`
    );
  };

  const getLessonTitle = (
    lesson: any,
    index: number
  ) => {
    if (Array.isArray(lesson)) {
      return (
        lesson[1] ??
        lesson[0] ??
        `Lesson ${index + 1}`
      );
    }

    if (typeof lesson === "string") {
      return lesson;
    }

    return (
      lesson?.title ??
      lesson?.name ??
      lesson?.label ??
      lesson?.lessonTitle ??
      lesson?.heading ??
      `Lesson ${index + 1}`
    );
  };

  return (
    <div
      className="
        w-full
        min-w-0
      "
    >
      {/* ======================================================
          NAVIGATION CARD

          Only the card itself is sticky.

          It is NOT forced to fill the lesson height.
      ====================================================== */}

      <div
        className="
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-slate-800
          bg-[#0b1224]
        "
      >
        {/* ====================================================
            HEADER
        ==================================================== */}

        <div
          className="
            border-b
            border-slate-800
            px-4
            py-4
          "
        >
          <div
            className="
              mb-2
              flex
              items-center
              gap-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-sky-400
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            Course Navigation
          </div>

          <div
            className="
              text-sm
              font-bold
              text-white
            "
          >
            Machine Learning
          </div>

          <div
            className="
              mt-1
              text-xs
              text-slate-500
            "
          >
            Course roadmap
          </div>
        </div>

        {/* ====================================================
            NAVIGATION SCROLL

            No unnecessary height.

            It becomes scrollable only when necessary.
        ==================================================== */}

        <div
          className="
            max-h-[calc(100vh-10rem)]
            overflow-y-auto
            overscroll-contain
            px-2
            py-2
          "
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#334155 transparent",
          }}
        >
          {MACHINE_LEARNING_STRUCTURE.map(
            (module: any, moduleIndex: number) => {
              const moduleId =
                module?.id ??
                module?.moduleId ??
                `module${moduleIndex + 1}`;

              const isOpen =
                openModules.includes(moduleId);

              const lessons =
                module?.lessons ??
                module?.items ??
                module?.content ??
                [];

              return (
                <div
                  key={moduleId}
                  className="mb-2"
                >
                  {/* MODULE HEADER */}

                  <button
                    type="button"
                    onClick={() =>
                      toggleModule(moduleId)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-950/40
                      p-3
                      text-left
                      transition
                      hover:border-sky-500/30
                      hover:bg-slate-900
                    "
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-slate-800
                        text-xs
                        font-bold
                        text-slate-300
                      "
                    >
                      {moduleIndex + 1}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className="
                          block
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        Module {moduleIndex + 1}
                      </span>

                      <span
                        className="
                          mt-1
                          block
                          text-xs
                          font-semibold
                          leading-5
                          text-slate-200
                        "
                      >
                        {module?.title ??
                          module?.name ??
                          `Module ${moduleIndex + 1}`}
                      </span>
                    </span>

                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-slate-700
                        text-xs
                        text-slate-400
                      "
                    >
                      {isOpen ? "↑" : "↓"}
                    </span>
                  </button>

                  {/* LESSONS */}

                  {isOpen && (
                    <div className="mt-1 space-y-1 pl-1">
                      {lessons.map(
                        (
                          lesson: any,
                          lessonIndex: number
                        ) => {
                          const lessonId =
                            getLessonId(
                              lesson,
                              lessonIndex
                            );

                          const lessonTitle =
                            getLessonTitle(
                              lesson,
                              lessonIndex
                            );

                          const href =
                            `/lesson/aiml/machine-learning/${moduleId}/${lessonId}`;

                          const isActive =
                            pathname === href;

                          return (
                            <Link
                              key={`${moduleId}-${lessonId}`}
                              href={href}
                              className={`
                                flex
                                min-w-0
                                items-center
                                gap-2
                                rounded-lg
                                px-2
                                py-2
                                text-xs
                                transition
                                ${
                                  isActive
                                    ? "bg-emerald-500 text-white"
                                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                                }
                              `}
                            >
                              <span
                                className={`
                                  flex
                                  h-6
                                  w-6
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-md
                                  text-[9px]
                                  font-bold
                                  ${
                                    isActive
                                      ? "bg-white/15 text-white"
                                      : "bg-slate-800 text-slate-500"
                                  }
                                `}
                              >
                                {String(
                                  lessonIndex + 1
                                ).padStart(2, "0")}
                              </span>

                              <span
                                className="
                                  min-w-0
                                  flex-1
                                  break-words
                                  leading-4
                                "
                              >
                                {lessonTitle}
                              </span>

                              {isActive && (
                                <span className="shrink-0">
                                  →
                                </span>
                              )}
                            </Link>
                          );
                        }
                      )}
                    </div>
                  )}
                </div>
              );
            }
          )}

          {/* RESOURCES */}

          <div
            className="
              mt-4
              border-t
              border-slate-800
              px-2
              pb-4
              pt-4
            "
          >
            <div
              className="
                mb-3
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-slate-600
              "
            >
              Module Resources
            </div>

            <Link
              href="/lesson/aiml/machine-learning/module1/about"
              className="
                mb-1
                flex
                items-center
                gap-3
                rounded-lg
                px-2
                py-2
                text-xs
                text-slate-400
                hover:bg-slate-900
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-md
                  bg-slate-800
                  text-[10px]
                "
              >
                i
              </span>

              About This Module
            </Link>

            <Link
              href="/lesson/aiml/machine-learning/module1/practice"
              className="
                mb-1
                flex
                items-center
                gap-3
                rounded-lg
                px-2
                py-2
                text-xs
                text-slate-400
                hover:bg-slate-900
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-md
                  bg-slate-800
                  text-[10px]
                "
              >
                ✓
              </span>

              Module Practice
            </Link>

            <Link
              href="/lesson/aiml/machine-learning/module1/project"
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-2
                py-2
                text-xs
                text-slate-400
                hover:bg-slate-900
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-md
                  bg-slate-800
                  text-[10px]
                "
              >
                ◆
              </span>

              Module Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}