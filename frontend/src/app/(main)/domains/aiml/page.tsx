import Link from "next/link";
import {
  ArrowRight,
  Brain,
  BookOpen,
  Layers3,
} from "lucide-react";

const modules = [
  {
    number: 1,
    title: "AI Foundations",
    description:
      "Understand artificial intelligence, intelligent systems, AI history, capabilities, applications, and problem-solving approaches.",
  },
  {
    number: 2,
    title: "AI & Machine Learning Foundations",
    description:
      "Build foundational understanding of AI and machine-learning concepts through structured lessons and practical learning.",
  },
  {
    number: 3,
    title: "Python & AI Computing",
    description:
      "Learn Python, NumPy, Pandas, Matplotlib, and the computing workflow required for AI development.",
  },
  {
    number: 4,
    title: "Mathematical Foundations for AI",
    description:
      "Build mathematical intuition using functions, vectors, matrices, probability, statistics, distance, loss, and optimization.",
  },
  {
    number: 5,
    title: "Data & Model Fundamentals",
    description:
      "Learn features, labels, datasets, preparation, training, evaluation, models, predictions, and complete machine-learning workflows.",
  },
  {
    number: 6,
    title: "AI Project Lifecycle",
    description:
      "Learn how AI projects are defined, developed, evaluated, deployed, monitored, and continuously improved.",
  },
];

export default function AIMLDomainPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#020617]
        text-white
      "
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 py-10">

        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-slate-800
            bg-gradient-to-br
            from-slate-900
            via-[#0b1328]
            to-[#111c38]
            px-8
            py-16
            shadow-2xl
            md:px-14
            md:py-20
          "
        >

          <div
            className="
              absolute
              -right-32
              -top-32
              h-96
              w-96
              rounded-full
              bg-sky-500/10
              blur-3xl
            "
          />

          <div className="relative max-w-5xl">

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-sky-400/30
                bg-sky-500/10
                px-5
                py-2.5
                text-sm
                font-bold
                text-sky-400
              "
            >
              <Brain size={18} />
              Learning Domain
            </div>

            <h1
              className="
                mt-7
                text-4xl
                font-black
                tracking-tight
                md:text-6xl
              "
            >
              Artificial Intelligence &
              <span className="block text-sky-400">
                Machine Learning
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-4xl
                text-lg
                leading-8
                text-slate-300
                md:text-xl
              "
            >
              Build a strong AI and machine-learning foundation
              through structured lessons, mathematical intuition,
              Python implementation, data, models, projects,
              deployment, and real-world AI workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-800
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-slate-200
                "
              >
                <Layers3 size={18} />
                6 Modules
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-800
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-slate-200
                "
              >
                <BookOpen size={18} />
                Structured Learning
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          COURSE
      ===================================================== */}

      <section className="mx-auto max-w-[1500px] px-6 pb-24">

        <div className="mb-10">

          <p
            className="
              text-sm
              font-black
              uppercase
              tracking-[0.16em]
              text-sky-400
            "
          >
            AI & Machine Learning Course
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-black
              md:text-4xl
            "
          >
            AI & Machine Learning Foundations
          </h2>

          <p
            className="
              mt-4
              max-w-3xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            Follow the six-module learning path from AI
            fundamentals through complete AI project development.
          </p>

        </div>

        {/* ===================================================
            MODULES
        =================================================== */}

        <div
          className="
            grid
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {modules.map((module) => (

            <Link
              key={module.number}
              href={`/lesson/aiml/module${module.number}/about`}
              className="
                group
                flex
                min-h-[330px]
                flex-col
                rounded-[30px]
                border
                border-slate-800
                bg-slate-900
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-sky-500/60
                hover:shadow-2xl
              "
            >

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-sky-500/10
                    text-lg
                    font-black
                    text-sky-400
                  "
                >
                  {String(module.number).padStart(2, "0")}
                </div>

                <ArrowRight
                  size={21}
                  className="
                    text-slate-600
                    transition
                    group-hover:translate-x-1
                    group-hover:text-sky-400
                  "
                />

              </div>

              <h3
                className="
                  mt-7
                  text-2xl
                  font-bold
                  leading-tight
                  text-white
                "
              >
                {module.title}
              </h3>

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-slate-400
                "
              >
                {module.description}
              </p>

              <div className="mt-auto pt-8">

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-slate-800
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-slate-300
                    transition
                    group-hover:bg-sky-600
                    group-hover:text-white
                  "
                >
                  Explore Module
                  <ArrowRight size={17} />
                </span>

              </div>

            </Link>

          ))}

        </div>

        {/* ===================================================
            COURSE BUTTON
        =================================================== */}

        <div className="mt-12">

          <Link
            href="/courses/aiml"
            className="
              inline-flex
              items-center
              gap-3
              rounded-2xl
              bg-sky-600
              px-7
              py-4
              font-bold
              text-white
              shadow-lg
              transition
              hover:bg-sky-500
            "
          >
            Open Complete Course
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}
