"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MACHINE_LEARNING_STRUCTURE } from "@/content/aiml/machine-learning/machineLearningStructure";

export default function MachineLearningSidebar() {
  const pathname = usePathname();

  const currentModule =
    pathname.match(/\/(module\d+)\//)?.[1] || "module1";

  const [openModules, setOpenModules] = useState<string[]>([
    currentModule,
  ]);

  function toggleModule(moduleId: string) {
    setOpenModules((current) =>
      current.includes(moduleId)
        ? current.filter((id) => id !== moduleId)
        : [...current, moduleId]
    );
  }

  return (
    <aside
      className="
        fixed
        left-0
        top-24
        bottom-0
        z-20
        hidden
        w-[27vw]
        min-w-[300px]
        border-r
        border-slate-800
        bg-slate-900/95
        backdrop-blur-xl
        lg:block
      "
    >
      <div className="h-full overflow-y-auto px-5 py-6">

        <div className="border-b border-slate-700 pb-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
            Course Navigation
          </p>

          <h2 className="mt-3 text-2xl font-bold leading-8 text-white">
            Machine Learning
          </h2>
        </div>

        <div className="mt-6 space-y-3">
          {MACHINE_LEARNING_STRUCTURE.map((module, moduleIndex) => {
            const isOpen = openModules.includes(module.id);
            const isCurrent = module.id === currentModule;

            return (
              <div
                key={module.id}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-700
                  bg-slate-950/40
                "
              >
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-4
                    text-left
                    transition
                    ${
                      isCurrent
                        ? "bg-sky-600/25"
                        : "hover:bg-white/5"
                    }
                  `}
                >
                  <div className="flex min-w-0 items-center gap-3">

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        text-sm
                        font-bold
                        ${
                          isCurrent
                            ? "bg-sky-500 text-white"
                            : "bg-slate-800 text-slate-300"
                        }
                      `}
                    >
                      {moduleIndex + 1}
                    </span>

                    <span
                      className={`
                        text-sm
                        font-semibold
                        leading-5
                        ${
                          isCurrent
                            ? "text-white"
                            : "text-slate-300"
                        }
                      `}
                    >
                      {module.title.replace(
                        /^Module \d+\s*[—-]\s*/,
                        ""
                      )}
                    </span>
                  </div>

                  <span
                    className={`
                      shrink-0
                      text-xs
                      text-slate-400
                      transition-transform
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-700 bg-black/10 p-2">

                    {module.lessons.map(
                      ([lessonId, title], lessonIndex) => {
                        const href =
                          `/lesson/aiml/machine-learning/${module.id}/${lessonId}`;

                        const active = pathname === href;

                        return (
                          <Link
                            key={lessonId}
                            href={href}
                            className={`
                              mb-1
                              block
                              rounded-xl
                              px-3
                              py-2.5
                              text-sm
                              leading-5
                              transition
                              last:mb-0
                              ${
                                active
                                  ? "bg-green-600 font-semibold text-white"
                                  : "text-slate-300 hover:bg-white/10 hover:text-white"
                              }
                            `}
                          >
                            <span
                              className={`
                                mr-2
                                text-xs
                                ${
                                  active
                                    ? "text-green-100"
                                    : "text-slate-500"
                                }
                              `}
                            >
                              {String(lessonIndex + 1).padStart(2, "0")}.
                            </span>

                            {title}
                          </Link>
                        );
                      }
                    )}

                    {module.id === "module1" && (
                      <>
                        <Link
                          href="/lesson/aiml/machine-learning/module1/about"
                          className="
                            mt-2
                            block
                            rounded-xl
                            px-3
                            py-2.5
                            text-sm
                            font-medium
                            text-slate-300
                            hover:bg-white/10
                            hover:text-white
                          "
                        >
                          About This Module
                        </Link>

                        <Link
                          href="/lesson/aiml/machine-learning/module1/practice"
                          className="
                            block
                            rounded-xl
                            px-3
                            py-2.5
                            text-sm
                            font-medium
                            text-slate-300
                            hover:bg-white/10
                            hover:text-white
                          "
                        >
                          Module Practice
                        </Link>

                        <Link
                          href="/lesson/aiml/machine-learning/module1/project"
                          className="
                            block
                            rounded-xl
                            px-3
                            py-2.5
                            text-sm
                            font-medium
                            text-slate-300
                            hover:bg-white/10
                            hover:text-white
                          "
                        >
                          Module Project
                        </Link>
                      </>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}