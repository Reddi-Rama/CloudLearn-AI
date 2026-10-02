"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import deepLearningLessonCatalog from "@/content/aiml/deep-learning/deepLearningLessonCatalog";

export default function DeepLearningSidebar() {
  const pathname = usePathname();

  const activeModuleId = useMemo(() => {
    const match = pathname.match(
      /\/lesson\/aiml\/deep-learning\/(module\d+)\/lesson\d+/
    );

    return match?.[1] ?? "module1";
  }, [pathname]);

  const [openModules, setOpenModules] = useState<Record<string, boolean>>(
    () => ({
      [activeModuleId]: true,
    })
  );

  const toggleModule = (moduleId: string) => {
    setOpenModules((current) => ({
      ...current,
      [moduleId]: !current[moduleId],
    }));
  };

  return (
    <nav
      className="
        flex
        h-full
        min-h-0
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-950/95
        shadow-xl
      "
    >
      {/* Header */}
      <div className="shrink-0 border-b border-slate-800 px-4 py-4">
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
              text-lg
            "
          >
            🧠
          </div>

          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-white">
              Deep Learning
            </p>

            <p className="mt-0.5 text-[11px] text-slate-500">
              6 modules · 100 lessons
            </p>
          </div>
        </div>

        {/* Back to Course */}
        <Link
          href="/courses/aiml/deep-learning"
          className="
            mt-4
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-800
            bg-slate-900/70
            px-3
            py-2.5
            text-xs
            font-medium
            text-slate-300
            transition
            hover:border-cyan-400/30
            hover:bg-slate-900
            hover:text-white
          "
        >
          <span className="text-cyan-400">←</span>
          <span>Back to Course</span>
        </Link>
      </div>

      {/* Module navigation */}
      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          px-2
          py-3
          pr-1
          [scrollbar-color:#475569_transparent]
          [scrollbar-width:thin]
        "
      >
        <div className="space-y-2">
          {deepLearningLessonCatalog.map((module) => {
            const isOpen = Boolean(openModules[module.id]);
            const isActiveModule = module.id === activeModuleId;

            return (
              <div
                key={module.id}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-800
                  bg-slate-900/40
                "
              >
                {/* Module header */}
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
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
                      isActiveModule
                        ? "bg-cyan-400/[0.07]"
                        : "hover:bg-slate-900/80"
                    }
                  `}
                >
                  {/* Module number */}
                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      text-[10px]
                      font-bold
                      ${
                        isActiveModule
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : "border-slate-700 bg-slate-900 text-slate-500"
                      }
                    `}
                  >
                    {String(module.number).padStart(2, "0")}
                  </span>

                  {/* Module title */}
                  <span className="min-w-0 flex-1">
                    <span
                      className={`
                        block
                        truncate
                        text-[11px]
                        font-semibold
                        ${
                          isActiveModule
                            ? "text-slate-100"
                            : "text-slate-300"
                        }
                      `}
                    >
                      {module.title}
                    </span>

                    <span className="mt-0.5 block text-[10px] text-slate-500">
                      {module.lessons.length} lessons
                    </span>
                  </span>

                  {/* Count */}
                  <span
                    className="
                      shrink-0
                      rounded-full
                      bg-slate-800
                      px-2
                      py-1
                      text-[9px]
                      font-semibold
                      text-slate-500
                    "
                  >
                    {module.lessons.length}
                  </span>

                  {/* Chevron */}
                  <span
                    className={`
                      shrink-0
                      text-xs
                      text-slate-500
                      transition-transform
                      ${isOpen ? "rotate-90" : ""}
                    `}
                  >
                    ›
                  </span>
                </button>

                {/* Lessons */}
                {isOpen && (
                  <div
                    className="
                      border-t
                      border-slate-800
                      bg-slate-950/50
                      px-2
                      py-2
                    "
                  >
                    <div className="space-y-1">
                      {module.lessons.map((lesson) => {
                        const isActive = pathname === lesson.href;

                        return (
                          <Link
                            key={`${module.id}-${lesson.id}`}
                            href={lesson.href}
                            className={`
                              group
                              flex
                              min-w-0
                              items-start
                              gap-2.5
                              rounded-lg
                              px-2
                              py-2
                              transition
                              ${
                                isActive
                                  ? "bg-cyan-400/10 text-white ring-1 ring-cyan-400/20"
                                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
                              }
                            `}
                          >
                            {/* Lesson number */}
                            <span
                              className={`
                                mt-0.5
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
                                    ? "bg-cyan-400/15 text-cyan-300"
                                    : "bg-slate-900 text-slate-600 group-hover:bg-slate-800 group-hover:text-slate-400"
                                }
                              `}
                            >
                              {String(lesson.number).padStart(2, "0")}
                            </span>

                            {/* Actual lesson title */}
                            <span
                              className={`
                                min-w-0
                                flex-1
                                break-words
                                text-[10px]
                                leading-4
                                ${
                                  isActive
                                    ? "font-medium text-slate-100"
                                    : ""
                                }
                              `}
                            >
                              {lesson.title}
                            </span>

                            {/* Active indicator */}
                            {isActive && (
                              <span className="mt-1 shrink-0 text-[10px] text-cyan-300">
                                →
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div
        className="
          shrink-0
          border-t
          border-slate-800
          px-3
          py-3
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-slate-800
            bg-slate-900/50
            px-3
            py-2.5
          "
        >
          <span className="text-[10px] text-slate-500">
            Course Progress
          </span>

          <span className="text-[10px] font-semibold text-cyan-400">
            100 lessons
          </span>
        </div>
      </div>
    </nav>
  );
}