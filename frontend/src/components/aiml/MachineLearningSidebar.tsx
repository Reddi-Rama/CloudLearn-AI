"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { MACHINE_LEARNING_STRUCTURE } from "@/content/aiml/machine-learning/machineLearningStructure";

export default function MachineLearningSidebar() {
  const pathname = usePathname();
  const [openModule, setOpenModule] = useState("module1");

  return (
    <aside className="fixed left-4 top-[156px] bottom-4 z-30 hidden w-[350px] lg:block">
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">

        <div className="shrink-0 border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Course 02
          </p>
          <h2 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">
            Machine Learning
          </h2>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-3">
          {MACHINE_LEARNING_STRUCTURE.map((module) => {
            const isOpen = openModule === module.id;

            return (
              <div key={module.id} className="mb-1">
                <button
                  type="button"
                  onClick={() => setOpenModule(isOpen ? "" : module.id)}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-3 text-left hover:bg-zinc-100 dark:hover:bg-zinc-900"
                >
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4 shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  )}

                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {module.title}
                  </span>
                </button>

                {isOpen && (
                  <div className="ml-4 border-l border-zinc-200 pl-3 dark:border-zinc-800">

                    {module.id === "module1" && (
                      <Link
                        href="/lesson/aiml/machine-learning/module1/about"
                        className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      >
                        About This Module
                      </Link>
                    )}

                    {module.lessons.map(([lessonId, title], index) => {
                      const href =
                        `/lesson/aiml/machine-learning/${module.id}/${lessonId}`;

                      const active = pathname === href;

                      return (
                        <Link
                          key={lessonId}
                          href={href}
                          className={`block rounded-lg px-3 py-2 text-sm ${
                            active
                              ? "bg-blue-50 font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-400"
                              : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}. {title}
                        </Link>
                      );
                    })}

                    {module.id === "module1" && (
                      <>
                        <Link
                          href="/lesson/aiml/machine-learning/module1/practice"
                          className="mt-2 block rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900"
                        >
                          Module Practice
                        </Link>

                        <Link
                          href="/lesson/aiml/machine-learning/module1/project"
                          className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900"
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