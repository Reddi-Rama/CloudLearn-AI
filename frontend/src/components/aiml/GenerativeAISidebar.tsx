"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LessonItem = {
  id: string;
  number: number;
  title: string;
};

type ModuleItem = {
  id: string;
  number: number;
  title: string;
  lessons: LessonItem[];
};

const modules: ModuleItem[] = [
  {
    id: "module1",
    number: 1,
    title: "Generative AI Foundations",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "What Is Generative AI?"
      },
      {
        id: "lesson2",
        number: 2,
        title: "Generative Models — How Machines Learn to Generate"
      },
      {
        id: "lesson3",
        number: 3,
        title: "Generative AI Architecture & Model Families"
      },
      {
        id: "lesson4",
        number: 4,
        title: "Generative AI Training, Data & Compute"
      },
      {
        id: "lesson5",
        number: 5,
        title: "Generative AI Data Representation & Latent Spaces"
      },
      {
        id: "lesson6",
        number: 6,
        title: "Generative AI Inference & Decoding"
      },
      {
        id: "lesson7",
        number: 7,
        title: "Evaluation, Reliability & Limitations"
      },
      {
        id: "lesson8",
        number: 8,
        title: "Generative AI Ecosystem & Application Workflow"
      }
    ]
  },

  {
    id: "module2",
    number: 2,
    title: "Large Language Models",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "What Are Large Language Models?"
      },
      {
        id: "lesson2",
        number: 2,
        title: "Transformer Architecture & Attention"
      },
      {
        id: "lesson3",
        number: 3,
        title: "Tokens, Vocabulary & Language Representation"
      },
      {
        id: "lesson4",
        number: 4,
        title: "Embeddings, Positional Information & Hidden States"
      },
      {
        id: "lesson5",
        number: 5,
        title: "Self-Attention in Depth"
      },
      {
        id: "lesson6",
        number: 6,
        title: "Multi-Head Attention"
      },
      {
        id: "lesson7",
        number: 7,
        title: "Transformer Blocks & Information Flow"
      },
      {
        id: "lesson8",
        number: 8,
        title: "Language Model Architecture & Generation Pipeline"
      },
      {
        id: "lesson9",
        number: 9,
        title: "Next-Token Prediction & Language Modeling"
      },
      {
        id: "lesson10",
        number: 10,
        title: "Loss, Backpropagation & Optimization"
      },
      {
        id: "lesson11",
        number: 11,
        title: "Language Model Training Pipeline & Objectives"
      },
      {
        id: "lesson12",
        number: 12,
        title: "Context Windows, Long-Context Modeling & KV Cache"
      },
      {
        id: "lesson13",
        number: 13,
        title: "Pretraining, Fine-Tuning & Instruction Tuning"
      },
      {
        id: "lesson14",
        number: 14,
        title: "Language Model Scaling, Parameters & Compute"
      },
      {
        id: "lesson15",
        number: 15,
        title: "LLM Limitations, Failure Modes & Evaluation"
      }
    ]
  }
];

const utilityItems = [
  {
    id: "about",
    label: "About Module"
  },
  {
    id: "practice",
    label: "Practice"
  },
  {
    id: "project",
    label: "Project"
  }
];

function isCurrent(
  pathname: string,
  moduleId: string,
  lessonId: string
) {
  return pathname ===
    `/lesson/aiml/generative-ai/${moduleId}/${lessonId}`;
}

function isModuleActive(
  pathname: string,
  moduleId: string
) {
  return pathname.includes(
    `/lesson/aiml/generative-ai/${moduleId}/`
  );
}

export default function GenerativeAISidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Generative AI course navigation"
      className="
        w-full
        overflow-visible
        rounded-2xl
        border
        border-slate-800
        bg-slate-950/90
        p-3
        shadow-xl
      "
    >
      {/* COURSE HEADER */}
      <div
        className="
          mb-4
          rounded-xl
          border
          border-cyan-500/20
          bg-gradient-to-br
          from-cyan-500/10
          via-slate-900
          to-slate-950
          p-4
        "
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
          Generative AI
        </div>

        <h2 className="mt-1 text-base font-bold text-white">
          LLM Engineering
        </h2>

        <p className="mt-2 text-xs leading-5 text-slate-400">
          Foundations → LLMs → RAG → Application Engineering
        </p>
      </div>

      {/* MODULES */}
      <div className="space-y-4">
        {modules.map((module) => {
          const activeModule = isModuleActive(
            pathname,
            module.id
          );

          return (
            <section key={module.id}>
              {/* MODULE HEADING */}
              <div
                className={`
                  mb-2
                  rounded-xl
                  border
                  px-3
                  py-3
                  ${
                    activeModule
                      ? "border-cyan-500/30 bg-cyan-500/10"
                      : "border-slate-800 bg-slate-900/60"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      text-xs
                      font-bold
                      ${
                        activeModule
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-800 text-slate-300"
                      }
                    `}
                  >
                    {String(module.number).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Module {module.number}
                    </div>

                    <div className="truncate text-sm font-semibold text-slate-100">
                      {module.title}
                    </div>
                  </div>
                </div>
              </div>

              {/* LESSONS */}
              <div className="space-y-1">
                {module.lessons.map((lesson) => {
                  const active = isCurrent(
                    pathname,
                    module.id,
                    lesson.id
                  );

                  return (
                    <Link
                      key={lesson.id}
                      href={`/lesson/aiml/generative-ai/${module.id}/${lesson.id}`}
                      className={`
                        group
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        px-3
                        py-2.5
                        transition
                        ${
                          active
                            ? "border border-cyan-500/30 bg-cyan-500/10"
                            : "border border-transparent hover:border-slate-800 hover:bg-slate-900"
                        }
                      `}
                    >
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
                          text-[10px]
                          font-bold
                          ${
                            active
                              ? "bg-cyan-400 text-slate-950"
                              : "bg-slate-800 text-slate-500 group-hover:text-slate-300"
                          }
                        `}
                      >
                        {String(lesson.number).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          min-w-0
                          text-xs
                          leading-5
                          ${
                            active
                              ? "font-semibold text-cyan-300"
                              : "text-slate-400 group-hover:text-slate-200"
                          }
                        `}
                      >
                        {lesson.title}
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* MODULE UTILITIES */}
              <div className="mt-2 space-y-1 border-t border-slate-800/70 pt-2">
                {utilityItems.map((item) => {
                  const active = isCurrent(
                    pathname,
                    module.id,
                    item.id
                  );

                  return (
                    <Link
                      key={`${module.id}-${item.id}`}
                      href={`/lesson/aiml/generative-ai/${module.id}/${item.id}`}
                      className={`
                        flex
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-2
                        text-xs
                        transition
                        ${
                          active
                            ? "bg-slate-800 text-cyan-300"
                            : "text-slate-500 hover:bg-slate-900 hover:text-slate-200"
                        }
                      `}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* COURSE RETURN */}
      <div className="mt-4 border-t border-slate-800 pt-4">
        <Link
          href="/courses/aiml/generative-ai"
          className="
            flex
            items-center
            justify-center
            rounded-xl
            border
            border-slate-800
            bg-slate-900
            px-3
            py-2.5
            text-xs
            font-medium
            text-slate-400
            transition
            hover:border-cyan-500/30
            hover:bg-slate-800
            hover:text-cyan-300
          "
        >
          ← Back to Course
        </Link>
      </div>
    </nav>
  );
}
