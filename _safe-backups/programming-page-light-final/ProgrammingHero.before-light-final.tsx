"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function ProgrammingHero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const courses = [
    {
      name: "Python Development",
      description:
        "Learn Python from fundamentals to advanced concepts with practical projects.",
      link: "/courses/python-development",
      number: "01",
      category: "Programming Language",
    },
    {
      name: "C++ Development",
      description:
        "Master object-oriented programming, data structures, and problem solving.",
      link: "/courses/cpp-development",
      number: "02",
      category: "Systems & DSA",
    },
    {
      name: "Java Development",
      description:
        "Learn Java programming, OOP concepts, and enterprise application development.",
      link: "/courses/java-development",
      number: "03",
      category: "Application Development",
    },
    {
      name: "C Development",
      description:
        "Understand programming fundamentals, memory concepts, and system programming.",
      link: "/courses/c-development",
      number: "04",
      category: "Systems Programming",
    },
  ];

  const headingColor = isDark ? "text-white" : "text-slate-950";
  const bodyColor = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <section
      className={`
        relative
        min-h-screen
        overflow-hidden
        ${
          isDark
            ? "bg-[#020617]"
            : "bg-gradient-to-b from-[#F8FBFF] via-white to-[#F5FAFF]"
        }
      `}
    >
      {/* ============================================================
          LIGHT MODE ATMOSPHERE
      ============================================================ */}
      {!isDark && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-180px] top-[180px] h-[420px] w-[420px] rounded-full bg-sky-100/50 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-180px] top-[420px] h-[460px] w-[460px] rounded-full bg-cyan-100/40 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-180px] h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl"
          />
        </>
      )}

      {/* ============================================================
          CONTENT
      ============================================================ */}
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8">

        {/* ============================================================
            BACK NAVIGATION
        ============================================================ */}
        <Link
          href="/domains"
          className={`
            group
            mb-14
            inline-flex
            items-center
            gap-2.5
            rounded-xl
            border
            px-4
            py-2.5
            text-sm
            font-semibold
            transition-all
            duration-200
            hover:-translate-y-0.5
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-sky-500
            ${
              isDark
                ? `
                  border-slate-700
                  bg-slate-900
                  text-slate-200
                  hover:border-sky-500
                  hover:text-sky-400
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-slate-950
                `
                : `
                  border-slate-200
                  bg-white
                  text-slate-700
                  shadow-[0_4px_14px_rgba(15,23,42,0.05)]
                  hover:border-sky-300
                  hover:text-sky-700
                  hover:shadow-[0_8px_22px_rgba(14,165,233,0.10)]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-white
                `
            }
          `}
        >
          <span
            aria-hidden="true"
            className="text-base transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>

          Back to Domains
        </Link>

        {/* ============================================================
            HERO
        ============================================================ */}
        <div className="relative mb-14 max-w-4xl sm:mb-16">

          {/* Small eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span
              className={`
                h-[2px]
                w-10
                rounded-full
                ${isDark ? "bg-sky-400" : "bg-sky-500"}
              `}
            />

            <span
              className={`
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                ${isDark ? "text-sky-400" : "text-sky-700"}
              `}
            >
              Programming
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`
              max-w-4xl
              text-4xl
              font-bold
              tracking-[-0.035em]
              sm:text-5xl
              lg:text-[3.7rem]
              lg:leading-[1.05]
              ${headingColor}
            `}
          >
            Build your programming
            <span
              className={`
                block
                ${
                  isDark
                    ? "text-sky-400"
                    : "bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent"
                }
              `}
            >
              foundation.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`
              mt-6
              max-w-2xl
              text-base
              leading-7
              sm:text-lg
              sm:leading-8
              ${bodyColor}
            `}
          >
            Build strong programming foundations through structured courses,
            practical examples, problem solving, and project-oriented learning.
          </p>

          {/* Small supporting indicators */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {["4 Courses", "Structured Learning", "Practical Projects"].map(
              (item) => (
                <span
                  key={item}
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-3.5
                    py-1.5
                    text-xs
                    font-semibold
                    ${
                      isDark
                        ? "border-slate-700 bg-slate-900 text-slate-300"
                        : "border-slate-200 bg-white text-slate-600 shadow-sm"
                    }
                  `}
                >
                  <span
                    className={`
                      h-1.5
                      w-1.5
                      rounded-full
                      ${isDark ? "bg-sky-400" : "bg-sky-500"}
                    `}
                  />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        {/* ============================================================
            COURSE HEADER
        ============================================================ */}
        <div className="mb-6 flex items-end justify-between gap-5">
          <div>
            <p
              className={`
                text-sm
                font-semibold
                ${isDark ? "text-slate-300" : "text-slate-800"}
              `}
            >
              Choose your course
            </p>

            <p
              className={`
                mt-1
                text-sm
                ${isDark ? "text-slate-500" : "text-slate-500"}
              `}
            >
              Start with the language that matches your learning goals.
            </p>
          </div>

          <div
            className={`
              hidden
              shrink-0
              rounded-full
              border
              px-3
              py-1.5
              text-xs
              font-bold
              sm:inline-flex
              ${
                isDark
                  ? "border-slate-700 bg-slate-900 text-slate-300"
                  : "border-slate-200 bg-white text-slate-600 shadow-sm"
              }
            `}
          >
            4 Courses
          </div>
        </div>

        {/* ============================================================
            COURSE GRID
        ============================================================ */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-7">
          {courses.map((course) => (
            <Link
              key={course.name}
              href={course.link}
              className={`
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-sky-500
                sm:p-7
                ${
                  isDark
                    ? `
                      border-slate-700
                      bg-[#0F172A]
                      shadow-[0_6px_22px_rgba(0,0,0,0.20)]
                      hover:border-slate-600
                      hover:bg-[#111C32]
                      hover:shadow-[0_20px_45px_rgba(0,0,0,0.30)]
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-slate-950
                    `
                    : `
                      border-slate-200/90
                      bg-white
                      shadow-[0_8px_30px_rgba(15,23,42,0.055)]
                      hover:border-sky-300
                      hover:shadow-[0_20px_50px_rgba(14,165,233,0.13)]
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-white
                    `
                }
              `}
            >
              {/* Top accent */}
              <div
                aria-hidden="true"
                className={`
                  absolute
                  inset-x-0
                  top-0
                  h-[3px]
                  bg-gradient-to-r
                  from-sky-500
                  via-cyan-500
                  to-sky-400
                  transition-opacity
                  duration-300
                  ${
                    isDark
                      ? "opacity-45 group-hover:opacity-80"
                      : "opacity-75 group-hover:opacity-100"
                  }
                `}
              />

              {/* Soft light-mode hover wash */}
              {!isDark && (
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-[-90px]
                    top-[-90px]
                    h-44
                    w-44
                    rounded-full
                    bg-sky-100/40
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              )}

              <div className="relative flex items-start gap-5 sm:gap-6">

                {/* ====================================================
                    NUMBER
                ==================================================== */}
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    text-sm
                    font-bold
                    tracking-wide
                    transition-all
                    duration-300
                    group-hover:scale-105
                    ${
                      isDark
                        ? `
                          border-sky-900
                          bg-sky-950
                          text-sky-400
                          group-hover:border-sky-800
                          group-hover:bg-sky-900
                        `
                        : `
                          border-sky-200
                          bg-gradient-to-br from-sky-50 to-cyan-50
                          text-sky-700
                          group-hover:border-sky-300
                          group-hover:from-sky-100
                          group-hover:to-cyan-100
                        `
                    }
                  `}
                >
                  {course.number}
                </div>

                {/* ====================================================
                    COURSE CONTENT
                ==================================================== */}
                <div className="min-w-0 flex-1">

                  {/* Category */}
                  <div className="mb-3">
                    <span
                      className={`
                        inline-flex
                        rounded-full
                        border
                        px-2.5
                        py-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        ${
                          isDark
                            ? "border-slate-700 bg-slate-800 text-slate-400"
                            : "border-slate-200 bg-slate-50 text-slate-500"
                        }
                      `}
                    >
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className={`
                      text-xl
                      font-bold
                      tracking-tight
                      transition-colors
                      duration-200
                      sm:text-2xl
                      ${headingColor}
                      ${
                        isDark
                          ? "group-hover:text-sky-400"
                          : "group-hover:text-sky-700"
                      }
                    `}
                  >
                    {course.name}
                  </h2>

                  {/* Description */}
                  <p
                    className={`
                      mt-3
                      max-w-xl
                      text-sm
                      leading-6
                      sm:text-[15px]
                      ${bodyColor}
                    `}
                  >
                    {course.description}
                  </p>

                  {/* Divider */}
                  <div
                    className={`
                      mt-6
                      h-px
                      w-full
                      ${
                        isDark
                          ? "bg-slate-800"
                          : "bg-slate-100"
                      }
                    `}
                  />

                  {/* Action */}
                  <div
                    className={`
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      transition-all
                      duration-200
                      group-hover:gap-3
                      ${
                        isDark
                          ? "text-sky-400"
                          : "text-sky-700"
                      }
                    `}
                  >
                    <span>Explore Course</span>

                    <span
                      aria-hidden="true"
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ============================================================
            LEARNING NOTE
        ============================================================ */}
        <div
          className={`
            mt-8
            overflow-hidden
            rounded-2xl
            border
            ${
              isDark
                ? "border-slate-800 bg-slate-900/60"
                : "border-sky-100 bg-gradient-to-r from-white via-sky-50/50 to-white shadow-[0_6px_24px_rgba(15,23,42,0.04)]"
            }
          `}
        >
          <div className="flex items-start gap-4 px-5 py-4 sm:px-6">

            {/* Check */}
            <div
              aria-hidden="true"
              className={`
                mt-0.5
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-xl
                text-sm
                font-bold
                ${
                  isDark
                    ? "bg-sky-950 text-sky-400"
                    : "bg-sky-100 text-sky-700"
                }
              `}
            >
              ✓
            </div>

            <div>
              <p
                className={`
                  text-sm
                  font-semibold
                  ${isDark ? "text-slate-200" : "text-slate-800"}
                `}
              >
                Learn progressively
              </p>

              <p
                className={`
                  mt-1
                  text-sm
                  leading-6
                  ${bodyColor}
                `}
              >
                Each course is organized into structured modules and lessons
                so you can progress from fundamentals to practical development.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
