"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Clock3 } from "lucide-react";

import dataSciencePath from "@/content/learningpaths/dataScience/text";

export default function DataSciencePage() {
  const path = dataSciencePath;
  const domainTitle = path.title.replace(" Learning Path", "");

  return (
    <main className="min-h-screen bg-[#080d20] text-slate-100">

      {/* =========================================================
          BACK TO LEARNING PATHS
      ========================================================= */}
      <div className="mx-auto w-full max-w-[1600px] bg-[#080d20] px-6 py-4 lg:px-8">
        <Link
          href="/learning-paths"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            px-4
            py-2.5
            text-base
            font-semibold
            text-slate-200
            shadow-md
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-sky-500
            hover:bg-slate-700
            hover:text-sky-400
            hover:shadow-lg
          "
        >
          <ArrowLeft size={19} />
          Back to Learning Paths
        </Link>
      </div>

      {/* =========================================================
          TOP NAVIGATION
      ========================================================= */}
      <div
        className="
          sticky
          top-[72px]
          z-40
          border-b
          border-slate-800
          bg-[#080d20]
          shadow-[0_4px_15px_rgba(0,0,0,0.35)]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-16
            w-full
            max-w-[1600px]
            items-center
            justify-between
            px-6
            lg:px-8
          "
        >
          <Link
            href="/learning-paths"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-2.5
              text-base
              font-semibold
              text-slate-200
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-sky-500
              hover:bg-slate-700
              hover:text-sky-400
              hover:shadow-lg
            "
          >
            <ArrowLeft size={19} />
            Learning Paths
          </Link>

          <div className="flex items-center gap-2 text-lg font-semibold text-slate-200">
            <BookOpen size={20} className="text-sky-400" />
            {domainTitle}
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN LEARNING AREA
      ========================================================= */}
      <div className="mx-auto flex w-full max-w-[1600px] bg-[#080d20]">

        {/* =======================================================
            SIDEBAR
        ======================================================= */}
        <aside
          className="
            sticky
            top-[136px]
            hidden
            h-[calc(100vh-136px)]
            w-[320px]
            shrink-0
            overflow-y-auto
            border-r
            border-slate-800
            bg-[#080d20]
            lg:block
          "
        >
          <div className="p-7">

            <p className="text-base font-semibold uppercase tracking-wider text-sky-400">
              Learning Path
            </p>

            <h2 className="mt-4 text-2xl font-bold text-white">
              {domainTitle} Roadmap
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-400">
              Navigate through all {path.totalStages} stages of the learning
              path.
            </p>

            <nav className="mt-8 space-y-3">

              {path.stages.map((stage) => (
                <a
                  key={stage.id}
                  href={`#stage-${stage.id}`}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-slate-800
                    bg-[#0b1124]
                    px-4
                    py-3.5
                    text-base
                    text-slate-300
                    shadow-[0_5px_14px_rgba(0,0,0,0.3)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-sky-500/40
                    hover:bg-slate-800
                    hover:text-white
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
                      rounded-lg
                      bg-slate-800
                      text-sm
                      font-semibold
                      text-sky-400
                    "
                  >
                    {String(stage.id).padStart(2, "0")}
                  </span>

                  <span className="leading-5">
                    {stage.title}
                  </span>
                </a>
              ))}

            </nav>

            <div className="mt-7 border-t border-slate-800 pt-7">

              <a
                href="#project-progression"
                className="
                  mb-3
                  block
                  rounded-xl
                  border
                  border-slate-800
                  bg-[#0b1124]
                  px-4
                  py-3.5
                  text-base
                  text-slate-300
                  transition
                  hover:border-sky-500/40
                  hover:bg-slate-800
                  hover:text-white
                "
              >
                Project Progression
              </a>

              <a
                href="#achievement-path"
                className="
                  mb-3
                  block
                  rounded-xl
                  border
                  border-slate-800
                  bg-[#0b1124]
                  px-4
                  py-3.5
                  text-base
                  text-slate-300
                  transition
                  hover:border-sky-500/40
                  hover:bg-slate-800
                  hover:text-white
                "
              >
                Achievement Path
              </a>

              <a
                href="#learning-philosophy"
                className="
                  block
                  rounded-xl
                  border
                  border-slate-800
                  bg-[#0b1124]
                  px-4
                  py-3.5
                  text-base
                  text-slate-300
                  transition
                  hover:border-sky-500/40
                  hover:bg-slate-800
                  hover:text-white
                "
              >
                Learning Philosophy
              </a>

            </div>

          </div>
        </aside>

        {/* =======================================================
            RIGHT CONTENT
        ======================================================= */}
        <section className="min-w-0 flex-1">

          {/* =====================================================
              HERO
          ===================================================== */}
          <div
            className="
              border-b
              border-slate-800
              bg-[#080d20]
              px-8
              py-14
              md:px-10
              lg:px-14
              xl:px-16
            "
          >
            <div className="mx-auto w-full max-w-[1250px]">

              <div className="flex items-center gap-2 text-lg font-semibold text-sky-400">
                <BookOpen size={21} />
                CloudLearn
              </div>

              <h1
                className="
                  mt-7
                  text-5xl
                  font-bold
                  tracking-tight
                  text-white
                  md:text-6xl
                  lg:text-7xl
                "
              >
                {domainTitle}

                <span className="block text-sky-400">
                  Learning Path
                </span>
              </h1>

              <p className="mt-6 text-xl leading-8 text-slate-300 lg:text-2xl">
                {path.subtitle}
              </p>

              <p className="mt-6 max-w-[1100px] text-lg leading-8 text-slate-400 lg:text-xl lg:leading-9">
                {path.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-slate-800
                    px-5
                    py-3
                    text-base
                    font-semibold
                    text-slate-200
                    shadow-md
                  "
                >
                  <BookOpen size={18} />
                  {path.totalStages} Stages
                </span>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-slate-800
                    px-5
                    py-3
                    text-base
                    font-semibold
                    text-slate-200
                    shadow-md
                  "
                >
                  <Clock3 size={18} />
                  Complete Roadmap
                </span>

              </div>

            </div>
          </div>

          {/* =====================================================
              STAGES
          ===================================================== */}
          <div
            className="
              px-8
              py-12
              md:px-10
              lg:px-14
              xl:px-16
            "
          >
            <div className="mx-auto w-full max-w-[1250px]">

              {path.stages.map((stage) => (
                <section
                  key={stage.id}
                  id={`stage-${stage.id}`}
                  className="
                    scroll-mt-24
                    border-b
                    border-slate-800
                    py-16
                    first:pt-4
                  "
                >

                  {/* Stage Heading */}
                  <div className="flex items-start gap-5">

                    <span
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-slate-800
                        text-lg
                        font-semibold
                        text-sky-400
                        shadow-lg
                      "
                    >
                      {String(stage.id).padStart(2, "0")}
                    </span>

                    <div>

                      <p className="text-lg font-semibold uppercase tracking-wide text-sky-400">
                        Stage {stage.id}
                      </p>

                      <h2 className="mt-1 text-3xl font-bold text-white md:text-4xl">
                        {stage.title}
                      </h2>

                    </div>

                  </div>

                  {/* Topics */}
                  <div className="mt-10">

                    <h3 className="text-lg font-semibold text-slate-200">
                      Topics
                    </h3>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                      {stage.topics.map((topic) => (
                        <div
                          key={topic}
                          className="
                            rounded-xl
                            border-2
                            border-slate-700
                            bg-[#0b1124]
                            px-6
                            py-5
                            text-lg
                            font-medium
                            leading-7
                            text-slate-200
                            shadow-[0_8px_20px_rgba(0,0,0,0.38)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-sky-500/40
                            hover:bg-[#0e162d]
                            hover:text-white
                          "
                        >
                          {topic}
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* Detailed Topics */}
                  {stage.topicDetails &&
                    stage.topicDetails.length > 0 && (
                      <div className="mt-10">

                        <h3 className="text-lg font-semibold text-slate-200">
                          Detailed Topic Coverage
                        </h3>

                        <div className="mt-5 space-y-5">

                          {stage.topicDetails.map((group) => (
                            <div
                              key={group.title}
                              className="
                                rounded-xl
                                border-2
                                border-slate-700
                                bg-[#0b1124]
                                p-6
                                shadow-[0_8px_20px_rgba(0,0,0,0.38)]
                              "
                            >

                              <h4 className="text-xl font-semibold text-white">
                                {group.title}
                              </h4>

                              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                                {group.items.map((item) => (
                                  <div
                                    key={item}
                                    className="
                                      rounded-lg
                                      border
                                      border-slate-700
                                      bg-[#10182d]
                                      px-5
                                      py-4
                                      text-base
                                      leading-7
                                      text-slate-300
                                    "
                                  >
                                    {item}
                                  </div>
                                ))}

                              </div>

                            </div>
                          ))}

                        </div>
                      </div>
                    )}

                  {/* Understanding */}
                  {stage.understanding && (
                    <div className="mt-10">

                      <h3 className="text-lg font-semibold text-slate-200">
                        What the Student Should Understand
                      </h3>

                      <div
                        className="
                          mt-5
                          rounded-xl
                          border-2
                          border-slate-700
                          bg-[#0b1124]
                          px-6
                          py-6
                          text-lg
                          leading-8
                          text-slate-300
                          shadow-[0_8px_20px_rgba(0,0,0,0.38)]
                        "
                      >
                        {stage.understanding}
                      </div>

                    </div>
                  )}

                  {/* Practice */}
                  {stage.practice && (
                    <div className="mt-9">

                      <h3 className="text-lg font-semibold text-slate-200">
                        Practice
                      </h3>

                      <div
                        className="
                          mt-5
                          rounded-xl
                          border-2
                          border-slate-700
                          bg-[#0b1124]
                          px-6
                          py-6
                          text-lg
                          leading-8
                          text-slate-300
                          shadow-[0_8px_20px_rgba(0,0,0,0.38)]
                        "
                      >
                        {stage.practice}
                      </div>

                    </div>
                  )}

                  {/* Project */}
                  <div
                    className="
                      mt-10
                      rounded-xl
                      border-2
                      border-slate-700
                      bg-[#0b1124]
                      p-7
                      shadow-[0_10px_25px_rgba(0,0,0,0.42)]
                    "
                  >

                    <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">
                      Project
                    </p>

                    <p className="mt-3 text-xl font-semibold leading-8 text-slate-100">
                      {stage.project}
                    </p>

                  </div>

                  {/* Achievement */}
                  {stage.achievement && (
                    <div
                      className="
                        mt-7
                        rounded-xl
                        border-2
                        border-slate-700
                        bg-[#0b1124]
                        p-7
                        shadow-[0_10px_25px_rgba(0,0,0,0.4)]
                      "
                    >

                      <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">
                        CloudLearn Achievement
                      </p>

                      <p className="mt-3 text-xl font-semibold leading-8 text-slate-100">
                        {stage.achievement}
                      </p>

                    </div>
                  )}

                </section>
              ))}

              {/* =====================================================
                  PROJECT PROGRESSION
              ===================================================== */}
              <section
                id="project-progression"
                className="
                  scroll-mt-24
                  border-b
                  border-slate-800
                  py-16
                "
              >

                <p className="text-lg font-semibold uppercase tracking-wide text-sky-400">
                  Project Progression
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                  From Data Foundations to Enterprise Systems
                </h2>

                <div className="mt-10 space-y-5">

                  {path.projectProgression.map(
                    (project, index) => (
                      <div
                        key={`${project}-${index}`}
                        className="
                          flex
                          items-center
                          gap-5
                          rounded-xl
                          border-2
                          border-slate-700
                          bg-[#0b1124]
                          px-6
                          py-5
                          shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                        "
                      >

                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-base font-semibold text-sky-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-lg font-medium text-slate-200">
                          {project}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </section>

              {/* =====================================================
                  ACHIEVEMENT PATH
              ===================================================== */}
              <section
                id="achievement-path"
                className="
                  scroll-mt-24
                  border-b
                  border-slate-800
                  py-16
                "
              >

                <p className="text-lg font-semibold uppercase tracking-wide text-sky-400">
                  CloudLearn Achievement Path
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                  Your Data Science Progression
                </h2>

                <div className="mt-10 space-y-5">

                  {path.achievementPath.map(
                    (achievement, index) => (
                      <div
                        key={`${achievement}-${index}`}
                        className="
                          flex
                          items-center
                          gap-5
                          rounded-xl
                          border-2
                          border-slate-700
                          bg-[#0b1124]
                          px-6
                          py-5
                          shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                        "
                      >

                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-base font-semibold text-sky-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-lg font-medium text-slate-200">
                          {achievement}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </section>

              {/* =====================================================
                  LEARNING PHILOSOPHY
              ===================================================== */}
              <section
                id="learning-philosophy"
                className="scroll-mt-24 py-16"
              >

                <p className="text-lg font-semibold uppercase tracking-wide text-sky-400">
                  The CloudLearn Learning Philosophy
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                  Understand → Improve
                </h2>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">

                  {path.learningPhilosophy.map(
                    (step, index) => (
                      <div
                        key={`${step}-${index}`}
                        className="
                          flex
                          items-center
                          gap-5
                          rounded-xl
                          border-2
                          border-slate-700
                          bg-[#0b1124]
                          px-6
                          py-5
                          shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                        "
                      >

                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-base font-semibold text-sky-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-lg font-semibold text-slate-200">
                          {step}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </section>

            </div>
          </div>

        </section>
      </div>

    </main>
  );
}