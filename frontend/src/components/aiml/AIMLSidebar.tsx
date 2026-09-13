"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Dumbbell,
  FolderKanban,
} from "lucide-react";

import {
  AIML_MODULES,
} from "@/content/aiml/aimlRegistry";

interface Props {
  moduleId: string;
  lessonId: string;
}

export default function AIMLSidebar({
  moduleId,
  lessonId,
}: Props) {

  const [openModule, setOpenModule] =
    useState(moduleId);

  useEffect(() => {
    setOpenModule(moduleId);
  }, [moduleId]);

  return (
    <aside
      className="
        z-30
        flex
        h-[calc(100vh-172px)]
        min-h-[560px]
        w-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-[0_12px_40px_rgba(15,23,42,0.08)]

        dark:border-slate-800
        dark:bg-[#0a1220]
        dark:shadow-[0_18px_50px_rgba(0,0,0,0.35)]

        lg:fixed
        lg:left-4
        lg:top-[156px]
        lg:bottom-4
        lg:w-[350px]
      "
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          shrink-0
          border-b
          border-slate-200
          bg-gradient-to-br
          from-sky-50
          via-white
          to-white
          px-5
          py-5
          dark:border-slate-800
          dark:from-[#0d1a2d]
          dark:via-[#0a1220]
          dark:to-[#0a1220]
        "
      >

        <p
          className="
            text-[10px]
            font-black
            uppercase
            tracking-[0.2em]
            text-sky-500
          "
        >
          Course Navigation
        </p>

        <h2
          className="
            mt-2
            text-lg
            font-black
            tracking-tight
            text-slate-900
            dark:text-white
          "
        >
          AI & Machine Learning
        </h2>

        <p
          className="
            mt-1
            text-xs
            leading-5
            text-slate-500
            dark:text-slate-400
          "
        >
          Modules, lessons, practice & projects
        </p>

      </div>

      {/* =====================================================
          SCROLL AREA
      ===================================================== */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          px-3
          py-3
        "
      >

        <div className="space-y-2">

          {AIML_MODULES.map((module) => {

            const activeModule =
              module.id === moduleId;

            const expanded =
              openModule === module.id;

            return (
              <div
                key={module.id}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-slate-800
                "
              >

                {/* MODULE */}

                <button
                  type="button"
                  onClick={() =>
                    setOpenModule(
                      expanded
                        ? ""
                        : module.id
                    )
                  }
                  className={`
                    flex
                    w-full
                    items-center
                    gap-3
                    px-3
                    py-3
                    text-left
                    transition
                    ${
                      activeModule
                        ? "bg-sky-50 dark:bg-sky-950/40"
                        : "bg-white hover:bg-slate-50 dark:bg-[#0a1220] dark:hover:bg-slate-900"
                    }
                  `}
                >

                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      text-xs
                      font-black
                      ${
                        activeModule
                          ? "bg-sky-500 text-white"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      }
                    `}
                  >
                    {String(
                      module.number
                    ).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">

                    <span
                      className={`
                        block
                        text-[13px]
                        font-extrabold
                        leading-5
                        ${
                          activeModule
                            ? "text-sky-600 dark:text-sky-300"
                            : "text-slate-800 dark:text-slate-200"
                        }
                      `}
                    >
                      Module{" "}
                      {String(
                        module.number
                      ).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        block
                        truncate
                        text-[11px]
                        leading-4
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      {module.title}
                    </span>

                    <span
                      className="
                        block
                        text-[10px]
                        font-medium
                        text-slate-400
                      "
                    >
                      {module.lessons.length} lessons
                    </span>

                  </span>

                  {expanded ? (
                    <ChevronDown
                      size={17}
                      className="shrink-0 text-sky-500"
                    />
                  ) : (
                    <ChevronRight
                      size={17}
                      className="shrink-0 text-slate-400"
                    />
                  )}

                </button>

                {/* EXPANDED */}

                {expanded && (

                  <div
                    className="
                      border-t
                      border-slate-200
                      bg-slate-50
                      p-2
                      dark:border-slate-800
                      dark:bg-[#070d17]
                    "
                  >

                    <Link
                      href={`/lesson/aiml/${module.id}/about`}
                      className={`
                        mb-1
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        px-3
                        py-2
                        text-[12px]
                        font-bold
                        transition
                        ${
                          activeModule &&
                          lessonId === "about"
                            ? "bg-sky-500 text-white"
                            : "text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-900"
                        }
                      `}
                    >
                      <BookOpen size={15} />
                      Module Overview
                    </Link>

                    {/* LESSONS */}

                    <div className="space-y-0.5">

                      {module.lessons.map(
                        (lesson) => {

                          const active =
                            activeModule &&
                            lesson.id === lessonId;

                          return (
                            <Link
                              key={lesson.id}
                              href={lesson.href}
                              className={`
                                flex
                                items-center
                                gap-2.5
                                rounded-xl
                                px-2.5
                                py-1.5
                                text-[11px]
                                leading-4
                                transition
                                ${
                                  active
                                    ? "bg-emerald-500 font-bold text-white shadow-sm"
                                    : "text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
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
                                  rounded-lg
                                  text-[10px]
                                  font-black
                                  ${
                                    active
                                      ? "bg-white/20"
                                      : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                                  }
                                `}
                              >
                                {lesson.number}
                              </span>

                              <span className="min-w-0">
                                {lesson.title}
                              </span>

                            </Link>
                          );
                        }
                      )}

                    </div>

                    {/* PRACTICE */}

                    <Link
                      href={`/lesson/aiml/${module.id}/practice`}
                      className={`
                        mt-1
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        px-3
                        py-2
                        text-[12px]
                        font-bold
                        transition
                        ${
                          activeModule &&
                          lessonId === "practice"
                            ? "bg-emerald-500 text-white"
                            : "text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-900"
                        }
                      `}
                    >
                      <Dumbbell size={15} />
                      Practice
                    </Link>

                    {/* PROJECT */}

                    <Link
                      href={`/lesson/aiml/${module.id}/project`}
                      className={`
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        px-3
                        py-2
                        text-[12px]
                        font-bold
                        transition
                        ${
                          activeModule &&
                          lessonId === "project"
                            ? "bg-emerald-500 text-white"
                            : "text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-900"
                        }
                      `}
                    >
                      <FolderKanban size={15} />
                      Project
                    </Link>

                  </div>
                )}

              </div>
            );

          })}

        </div>

      </div>

      {/* BOTTOM */}

      <div
        className="
          shrink-0
          border-t
          border-slate-200
          px-4
          py-3
          dark:border-slate-800
        "
      >
        <p
          className="
            text-center
            text-[10px]
            font-semibold
            text-slate-400
          "
        >
          AI/ML Learning Path
        </p>
      </div>

    </aside>
  );
}