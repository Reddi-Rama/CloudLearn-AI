"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Lesson = {
  id: string;
  number: number;
  title: string;
};

type Module = {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  lessons: Lesson[];
};

const modules: Module[] = [
  {
    id: "module1",
    number: 1,
    title: "Generative AI Foundations",
    shortTitle: "GenAI Foundations",
    description:
      "Build the conceptual foundation of modern Generative AI systems.",
    lessons: [
      { id: "lesson1", number: 1, title: "What Is Generative AI?" },
      {
        id: "lesson2",
        number: 2,
        title: "Generative Models — How Machines Learn to Generate",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Generative AI Architecture & Model Families",
      },
      {
        id: "lesson4",
        number: 4,
        title: "Generative AI Training, Data & Compute",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Generative AI Data Representation & Latent Spaces",
      },
      {
        id: "lesson6",
        number: 6,
        title: "Generative AI Inference & Decoding",
      },
      {
        id: "lesson7",
        number: 7,
        title: "Generative AI Evaluation, Reliability & Limitations",
      },
      {
        id: "lesson8",
        number: 8,
        title: "Generative AI Ecosystem & Application Workflow",
      },
    ],
  },

  {
    id: "module2",
    number: 2,
    title: "Large Language Models",
    shortTitle: "Large Language Models",
    description:
      "Understand Transformers, attention, tokenization, training and LLM behavior.",
    lessons: [
      { id: "lesson1", number: 1, title: "What Are Large Language Models?" },
      {
        id: "lesson2",
        number: 2,
        title: "Transformer Architecture & Attention",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Tokens, Vocabulary & Language Representation",
      },
      {
        id: "lesson4",
        number: 4,
        title: "Embeddings, Positional Information & Hidden States",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Self-Attention in Depth",
      },
      {
        id: "lesson6",
        number: 6,
        title: "Multi-Head Attention",
      },
      {
        id: "lesson7",
        number: 7,
        title: "Transformer Feed-Forward Networks & Transformer Blocks",
      },
      {
        id: "lesson8",
        number: 8,
        title: "Transformer Block Architecture & End-to-End Data Flow",
      },
      {
        id: "lesson9",
        number: 9,
        title:
          "Transformer Encoder, Decoder & Encoder–Decoder Architectures",
      },
      {
        id: "lesson10",
        number: 10,
        title: "Autoregressive Language Modeling & Next-Token Prediction",
      },
      {
        id: "lesson11",
        number: 11,
        title: "Language Model Training Pipeline & Objectives",
      },
      {
        id: "lesson12",
        number: 12,
        title: "Context Windows, Long-Context Modeling & KV Cache",
      },
      {
        id: "lesson13",
        number: 13,
        title: "Pretraining, Fine-Tuning & Instruction Tuning",
      },
      {
        id: "lesson14",
        number: 14,
        title: "Language Model Scaling, Parameters & Compute",
      },
      {
        id: "lesson15",
        number: 15,
        title: "LLM Limitations, Failure Modes & Evaluation",
      },
    ],
  },

  {
    id: "module3",
    number: 3,
    title: "Prompt Engineering",
    shortTitle: "Prompt Engineering",
    description:
      "Design, evaluate, secure and productionize prompts for Generative AI systems.",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "Prompt Engineering Fundamentals",
      },
      {
        id: "lesson2",
        number: 2,
        title: "Prompt Structure, Instructions & Context",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Prompting Techniques & Patterns",
      },
      {
        id: "lesson4",
        number: 4,
        title: "Advanced Prompt Design & Reasoning Patterns",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Prompt Evaluation, Testing & Optimization",
      },
      {
        id: "lesson6",
        number: 6,
        title: "Prompt Security, Reliability & Guardrails",
      },
      {
        id: "lesson7",
        number: 7,
        title: "Prompt Engineering for Coding & Technical Tasks",
      },
      {
        id: "lesson8",
        number: 8,
        title: "Lesson 8",
      },
      {
        id: "lesson9",
        number: 9,
        title: "Prompt Management, Templates & Production Workflows",
      },
      {
        id: "lesson10",
        number: 10,
        title:
          "Prompt Engineering for Multimodal & Structured Outputs",
      },
      {
        id: "lesson11",
        number: 11,
        title:
          "Prompt Evaluation, Observability & AI Quality Engineering",
      },
      {
        id: "lesson12",
        number: 12,
        title: "Lesson 12",
      },
    ],
  },

  {
    id: "module4",
    number: 4,
    title: "Retrieval-Augmented Generation",
    shortTitle: "RAG",
    description:
      "Learn how retrieval systems ground LLMs with external knowledge.",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "Introduction to RAG & Why Retrieval Matters",
      },
      {
        id: "lesson2",
        number: 2,
        title: "RAG Architecture & End-to-End Data Flow",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Documents, Data Sources & Ingestion Pipelines",
      },
      {
        id: "lesson4",
        number: 4,
        title: "Lesson 4",
      },
      {
        id: "lesson5",
        number: 5,
        title:
          "Embeddings & Semantic Representation for Retrieval",
      },
      {
        id: "lesson6",
        number: 6,
        title: "Vector Databases & Similarity Search",
      },
      {
        id: "lesson7",
        number: 7,
        title: "Retrieval Strategies & Search Algorithms",
      },
      {
        id: "lesson8",
        number: 8,
        title:
          "Hybrid Search, Metadata Filtering & Reranking",
      },
      {
        id: "lesson9",
        number: 9,
        title: "Context Construction & Grounded Generation",
      },
      {
        id: "lesson10",
        number: 10,
        title:
          "RAG Evaluation, Quality & Failure Analysis",
      },
      {
        id: "lesson11",
        number: 11,
        title:
          "Advanced RAG: Query Transformation, Multi-Step & Agentic Retrieval",
      },
      {
        id: "lesson12",
        number: 12,
        title:
          "Production RAG Systems, Optimization & Capstone Architecture",
      },
    ],
  },

  {
    id: "module5",
    number: 5,
    title: "Embeddings & Vector Databases",
    shortTitle: "Embeddings & Vector DBs",
    description:
      "Understand embeddings, vector search, ANN indexing and production vector systems.",
    lessons: [
      { id: "lesson1", number: 1, title: "What Are Embeddings?" },
      {
        id: "lesson2",
        number: 2,
        title: "Embedding Models & Semantic Representation",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Vector Similarity & Distance Metrics",
      },
      {
        id: "lesson4",
        number: 4,
        title:
          "Text Embedding Pipelines & Chunk Representations",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Vector Databases & Vector Indexes",
      },
      {
        id: "lesson6",
        number: 6,
        title: "Approximate Nearest Neighbor Search",
      },
      {
        id: "lesson7",
        number: 7,
        title: "HNSW & ANN Indexing in Practice",
      },
      {
        id: "lesson8",
        number: 8,
        title: "Vector Database Operations & Data Lifecycle",
      },
      {
        id: "lesson9",
        number: 9,
        title:
          "Metadata Filtering, Namespaces & Multi-Tenancy",
      },
      {
        id: "lesson10",
        number: 10,
        title:
          "Vector Search Performance Optimization & Scaling",
      },
      {
        id: "lesson11",
        number: 11,
        title:
          "Vector Database Architecture, Index Maintenance & Production Reliability",
      },
      {
        id: "lesson12",
        number: 12,
        title:
          "Advanced Vector Retrieval & Embedding System Design",
      },
      {
        id: "lesson13",
        number: 13,
        title:
          "Advanced Embedding Optimization & Retrieval Quality",
      },
      {
        id: "lesson14",
        number: 14,
        title:
          "Production Embedding & Vector Retrieval Capstone",
      },
    ],
  },

  {
    id: "module6",
    number: 6,
    title: "LLM APIs & Application Development",
    shortTitle: "LLM APIs & Apps",
    description:
      "Build real applications using LLM APIs, tools, structured outputs and production patterns.",
    lessons: [
      { id: "lesson1", number: 1, title: "LLM APIs & Model Providers" },
      {
        id: "lesson2",
        number: 2,
        title: "API Authentication, Requests & Responses",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Building Your First LLM Application",
      },
      {
        id: "lesson4",
        number: 4,
        title:
          "Prompt Templates, Conversation State & Context Management",
      },
      {
        id: "lesson5",
        number: 5,
        title:
          "Streaming, Async LLM Calls & Real-Time Applications",
      },
      {
        id: "lesson6",
        number: 6,
        title:
          "Structured Outputs, Tool Calling & Function Integration",
      },
      {
        id: "lesson7",
        number: 7,
        title:
          "Model Selection, Parameters & Cost Optimization",
      },
      {
        id: "lesson8",
        number: 8,
        title:
          "LLM Application Security, Safety & Guardrails",
      },
      {
        id: "lesson9",
        number: 9,
        title:
          "Testing, Evaluation & Observability for LLM Applications",
      },
      {
        id: "lesson10",
        number: 10,
        title:
          "LLM Application Architecture & Design Patterns",
      },
      {
        id: "lesson11",
        number: 11,
        title:
          "Deployment, Scaling & Production Reliability",
      },
      {
        id: "lesson12",
        number: 12,
        title:
          "End-to-End LLM Application Capstone",
      },
    ],
  },

  {
    id: "module7",
    number: 7,
    title: "Retrieval-Augmented Generation",
    shortTitle: "Advanced RAG",
    description:
      "Build advanced retrieval systems from document ingestion to production RAG architecture.",
    lessons: [
      { id: "lesson1", number: 1, title: "RAG Fundamentals" },
      { id: "lesson2", number: 2, title: "Document Processing" },
      { id: "lesson3", number: 3, title: "Chunking Strategies" },
      {
        id: "lesson4",
        number: 4,
        title: "Embeddings and Vector Stores",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Retrieval and Generation",
      },
      { id: "lesson6", number: 6, title: "RAG Pipeline" },
      {
        id: "lesson7",
        number: 7,
        title: "Grounding and Citations",
      },
      { id: "lesson8", number: 8, title: "RAG Evaluation" },
      {
        id: "lesson9",
        number: 9,
        title: "Query Transformation & Advanced Retrieval",
      },
      {
        id: "lesson10",
        number: 10,
        title:
          "Hybrid Retrieval, Reranking & Retrieval Optimization",
      },
      {
        id: "lesson11",
        number: 11,
        title:
          "Multi-Step, Multi-Hop & Agentic RAG",
      },
      {
        id: "lesson12",
        number: 12,
        title:
          "Corrective, Self-Reflective & Adaptive RAG",
      },
      {
        id: "lesson13",
        number: 13,
        title:
          "Temporal, Hierarchical & Domain-Specific RAG",
      },
      {
        id: "lesson14",
        number: 14,
        title:
          "Production RAG Security, Governance & Cost Optimization",
      },
      {
        id: "lesson15",
        number: 15,
        title:
          "Advanced RAG System Design & Optimization",
      },
      {
        id: "lesson16",
        number: 16,
        title:
          "End-to-End RAG Capstone & Production Architecture",
      },
    ],
  },

  {
    id: "module8",
    number: 8,
    title: "Multimodal Generative AI",
    shortTitle: "Multimodal AI",
    description:
      "Work across text, vision, audio, video, multimodal RAG and multimodal agents.",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "Multimodal Generative AI Foundations",
      },
      {
        id: "lesson2",
        number: 2,
        title: "Multimodal Data & Representations",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Multimodal Model Architectures",
      },
      {
        id: "lesson4",
        number: 4,
        title:
          "Multimodal Prompting & Instruction Following",
      },
      {
        id: "lesson5",
        number: 5,
        title:
          "Image Generation, Editing & Diffusion",
      },
      {
        id: "lesson6",
        number: 6,
        title:
          "Speech, Audio & Video Generative AI",
      },
      {
        id: "lesson7",
        number: 7,
        title:
          "Multimodal RAG & Grounded Multimodal Reasoning",
      },
      {
        id: "lesson8",
        number: 8,
        title:
          "Multimodal Agents & Tool Use",
      },
      {
        id: "lesson9",
        number: 9,
        title:
          "Multimodal Evaluation, Safety & Production Systems",
      },
      {
        id: "lesson10",
        number: 10,
        title:
          "Multimodal AI Capstone & Production Architecture",
      },
    ],
  },

  {
    id: "module9",
    number: 9,
    title: "LLM Application Engineering",
    shortTitle: "LLM Engineering",
    description:
      "Engineer reliable, secure, observable and scalable production LLM applications.",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title:
          "LLM Application Engineering Foundations",
      },
      {
        id: "lesson2",
        number: 2,
        title:
          "LLM Application Architecture & Design Patterns",
      },
      {
        id: "lesson3",
        number: 3,
        title:
          "LLM Context, State & Memory Engineering",
      },
      {
        id: "lesson4",
        number: 4,
        title:
          "Prompt Engineering for Production Applications",
      },
      {
        id: "lesson5",
        number: 5,
        title:
          "Structured Outputs, Tool Calling & Function Execution",
      },
      {
        id: "lesson6",
        number: 6,
        title:
          "LLM Agents, Workflows & Orchestration",
      },
      {
        id: "lesson7",
        number: 7,
        title:
          "LLM Application Security & Guardrails",
      },
      {
        id: "lesson8",
        number: 8,
        title:
          "Testing, Evaluation & Quality Engineering",
      },
      {
        id: "lesson9",
        number: 9,
        title:
          "Observability, Tracing & LLMOps",
      },
      {
        id: "lesson10",
        number: 10,
        title:
          "Cost, Latency & Performance Optimization",
      },
      {
        id: "lesson11",
        number: 11,
        title:
          "Multi-Model Routing, Fallbacks & Reliability",
      },
      {
        id: "lesson12",
        number: 12,
        title:
          "Data, Feedback & Continuous Improvement",
      },
      {
        id: "lesson13",
        number: 13,
        title:
          "Deployment & Infrastructure for LLM Applications",
      },
      {
        id: "lesson14",
        number: 14,
        title:
          "Scaling, Queues, Caching & Distributed AI Systems",
      },
      {
        id: "lesson15",
        number: 15,
        title:
          "Advanced LLM Application System Design",
      },
      {
        id: "lesson16",
        number: 16,
        title:
          "End-to-End LLM Application Engineering Capstone",
      },
    ],
  },
];

const utilityItems = [
  {
    id: "about",
    label: "About Module",
  },
  {
    id: "practice",
    label: "Practice",
  },
  {
    id: "project",
    label: "Project",
  },
];

function isCurrent(
  pathname: string,
  moduleId: string,
  lessonId: string
) {
  return (
    pathname ===
    `/lesson/aiml/generative-ai/${moduleId}/${lessonId}`
  );
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
        flex
        h-full
        min-h-0
        w-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-950/90
        p-3
        shadow-xl
      "
    >
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
          Foundations → LLMs → Prompting → RAG → Multimodal AI → Engineering
        </p>
      </div>

      <Link
        href="/courses/aiml/generative-ai"
        className="
          mb-4
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
          font-semibold
          text-slate-300
          transition
          hover:border-cyan-500/30
          hover:bg-slate-800
          hover:text-white
        "
      >
        <span>←</span>
        <span>Back to Course</span>
      </Link>

      <div className="min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:#475569_transparent]">
        <div className="space-y-5">
          {modules.map((module) => {
          const activeModule = isModuleActive(
            pathname,
            module.id
          );

          return (
            <section key={module.id}>
              <div
                className={`
                  mb-2
                  rounded-xl
                  border
                  px-3
                  py-3
                  transition
                  ${
                    activeModule
                      ? "border-cyan-500/30 bg-cyan-500/10"
                      : "border-slate-800 bg-slate-900/50"
                  }
                `}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      text-xs
                      font-black
                      ${
                        activeModule
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-800 text-slate-300"
                      }
                    `}
                  >
                    {String(module.number).padStart(2, "0")}
                  </div>

                  <div className="min-w-0">
                    <div
                      className={`
                        text-sm
                        font-bold
                        ${
                          activeModule
                            ? "text-white"
                            : "text-slate-200"
                        }
                      `}
                    >
                      {module.title}
                    </div>

                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
                      {module.description}
                    </p>

                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                      {module.lessons.length} lessons
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-2 border-l border-slate-800 pl-3">
                <div className="space-y-1">
                  {module.lessons.map((lesson) => {
                    const current = isCurrent(
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
                          gap-2
                          rounded-lg
                          px-2.5
                          py-2
                          text-xs
                          transition
                          ${
                            current
                              ? "bg-cyan-500/10 text-cyan-300"
                              : "text-slate-400 hover:bg-slate-900 hover:text-white"
                          }
                        `}
                      >
                        <span
                          className={`
                            mt-0.5
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded
                            text-[9px]
                            font-bold
                            ${
                              current
                                ? "bg-cyan-400 text-slate-950"
                                : "bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300"
                            }
                          `}
                        >
                          {lesson.number}
                        </span>

                        <span className="leading-5">
                          {lesson.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-2 border-t border-slate-900 pt-2">
                  {utilityItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`/lesson/aiml/generative-ai/${module.id}/${item.id}`}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        px-2.5
                        py-1.5
                        text-[11px]
                        font-medium
                        text-slate-500
                        transition
                        hover:bg-slate-900
                        hover:text-cyan-300
                      "
                    >
                      <span className="text-slate-700">•</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
          })}
        </div>
      </div>
    </nav>
  );
}