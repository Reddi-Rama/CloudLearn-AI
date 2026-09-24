"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, BookOpen } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const DEEP_LEARNING_STRUCTURE = [
  {
    id: "module1",
    title: "Module 1",
    subtitle: "Deep Learning Foundations",
    lessons: 8,
  },
  {
    id: "module2",
    title: "Module 2",
    subtitle: "Neural Networks and Learning",
    lessons: 16,
  },
  {
    id: "module3",
    title: "Module 3",
    subtitle: "Convolutional Neural Networks",
    lessons: 15,
  },
  {
    id: "module4",
    title: "Module 4",
    subtitle: "Sequence Models and Transformers",
    lessons: 22,
  },
  {
    id: "module5",
    title: "Module 5",
    subtitle: "Advanced Deep Learning and Training",
    lessons: 19,
  },
  {
    id: "module6",
    title: "Module 6",
    subtitle: "Advanced Computer Vision",
    lessons: 20,
  },
];

export default function DeepLearningSidebar() {
  const pathname = usePathname();

  const currentModuleId = useMemo(() => {
    const match = pathname.match(
      /\/lesson\/aiml\/deep-learning\/(module\d+)/
    );

    return match?.[1] ?? "module1";
  }, [pathname]);

  const currentLessonId = useMemo(() => {
    const match = pathname.match(
      /\/lesson\/aiml\/deep-learning\/module\d+\/(lesson\d+)/
    );

    return match?.[1] ?? "lesson1";
  }, [pathname]);

  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    [currentModuleId]: true,
  });

  useEffect(() => {
    setOpenModules((previous) => ({
      ...previous,
      [currentModuleId]: true,
    }));
  }, [currentModuleId]);

  const toggleModule = (moduleId: string) => {
    setOpenModules((previous) => ({
      ...previous,
      [moduleId]: !previous[moduleId],
    }));
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl">
      
      {/* Header */}
      <div className="border-b border-slate-800 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">
            <BookOpen className="h-5 w-5 text-slate-200" />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-base font-bold text-white">
              Deep Learning
            </h2>

            <p className="mt-0.5 text-xs text-slate-400">
              Deep Learning & Computer Vision
            </p>
          </div>
        </div>
      </div>

      {/* Modules */}
      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
        <div className="space-y-2">
          {DEEP_LEARNING_STRUCTURE.map((module) => {
            const isOpen = !!openModules[module.id];
            const isCurrentModule = currentModuleId === module.id;

            return (
              <div
                key={module.id}
                className="overflow-hidden rounded-2xl border border-slate-800"
              >
                {/* Module Header */}
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition ${
                    isCurrentModule
                      ? "bg-slate-800/80"
                      : "bg-slate-950/30 hover:bg-slate-800/50"
                  }`}
                >
                  <span className="flex-shrink-0 text-slate-400">
                    {isOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-slate-100">
                      {module.title}
                    </span>

                    <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                      {module.subtitle}
                    </span>
                  </span>

                  <span className="flex-shrink-0 rounded-full bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-400">
                    {module.lessons}
                  </span>
                </button>

                {/* Lessons */}
                {isOpen && (
                  <div className="border-t border-slate-800 bg-slate-950/30 px-2 py-2">
                    <div className="space-y-1">
                      {Array.from(
                        { length: module.lessons },
                        (_, index) => {
                          const lessonNumber = index + 1;
                          const lessonId = `lesson${lessonNumber}`;

                          const href = `/lesson/aiml/deep-learning/${module.id}/${lessonId}`;

                          const isActive =
                            currentModuleId === module.id &&
                            currentLessonId === lessonId;

                          return (
                            <Link
                              key={lessonId}
                              href={href}
                              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                                isActive
                                  ? "bg-slate-800 text-white shadow-sm"
                                  : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                              }`}
                            >
                              <span
                                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${
                                  isActive
                                    ? "bg-slate-700 text-white"
                                    : "bg-slate-900 text-slate-500"
                                }`}
                              >
                                {lessonNumber}
                              </span>

                              <span className="truncate">
                                Lesson {lessonNumber}
                              </span>
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}