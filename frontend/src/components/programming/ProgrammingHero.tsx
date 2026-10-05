"use client";

import Link from "next/link";

type Course = {
  name: string;
  description: string;
  link: string;
  number: string;
  category: string;
  shortName: string;
  accent: "sky" | "violet" | "amber" | "emerald";
};

const courses: Course[] = [
  {
    name: "Python Development",
    description:
      "Learn Python from fundamentals to advanced concepts with practical projects.",
    link: "/courses/python-development",
    number: "01",
    category: "Programming Language",
    shortName: "Py",
    accent: "sky",
  },
  {
    name: "C++ Development",
    description:
      "Master object-oriented programming, data structures, and problem solving.",
    link: "/courses/cpp-development",
    number: "02",
    category: "Systems & DSA",
    shortName: "C++",
    accent: "violet",
  },
  {
    name: "Java Development",
    description:
      "Learn Java programming, OOP concepts, and enterprise application development.",
    link: "/courses/java-development",
    number: "03",
    category: "Application Development",
    shortName: "Java",
    accent: "amber",
  },
  {
    name: "C Development",
    description:
      "Understand programming fundamentals, memory concepts, and system programming.",
    link: "/courses/c-development",
    number: "04",
    category: "Systems Programming",
    shortName: "C",
    accent: "emerald",
  },
];

const accentStyles = {
  sky: {
    icon: "border-sky-200 bg-sky-50 text-sky-700",
    number: "bg-sky-50 text-sky-700",
    line: "from-sky-500 to-cyan-400",
    hover: "group-hover:text-sky-700",
    glow: "bg-sky-100",
  },
  violet: {
    icon: "border-violet-200 bg-violet-50 text-violet-700",
    number: "bg-violet-50 text-violet-700",
    line: "from-violet-500 to-purple-400",
    hover: "group-hover:text-violet-700",
    glow: "bg-violet-100",
  },
  amber: {
    icon: "border-amber-200 bg-amber-50 text-amber-700",
    number: "bg-amber-50 text-amber-700",
    line: "from-amber-500 to-orange-400",
    hover: "group-hover:text-amber-700",
    glow: "bg-amber-100",
  },
  emerald: {
    icon: "border-emerald-200 bg-emerald-50 text-emerald-700",
    number: "bg-emerald-50 text-emerald-700",
    line: "from-emerald-500 to-teal-400",
    hover: "group-hover:text-emerald-700",
    glow: "bg-emerald-100",
  },
};

function CourseIcon({ course }: { course: Course }) {
  if (course.shortName === "Py") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M15.8 3.5c-6.2 0-5.8 2.7-5.8 2.7v4h5.9v1.2H7.6S3 10.9 3 17.1c0 6.2 4 6 4 6h2.4v-3.4s-.1-4 3.9-4h6.5s3.8.1 3.8-3.7V7.3s.6-3.8-7.8-3.8Zm-3.3 2.1c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1Z"
          fill="currentColor"
        />
        <path
          d="M16.2 28.5c6.2 0 5.8-2.7 5.8-2.7v-4h-5.9v-1.2h8.3s4.6.5 4.6-5.7c0-6.2-4-6-4-6h-2.4v3.4s.1 4-3.9 4h-6.5s-3.8-.1-3.8 3.7v4.7s-.6 3.8 7.8 3.8Zm3.3-2.1c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (course.shortName === "C++") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="12.5"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <path
          d="M10 16h5m-2.5-2.5V18.5M18 13.5V18.5M15.5 16h5M23 13.5V18.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (course.shortName === "Java") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M17 5c3 2.8-2.8 4.1-.9 6.1 1.7 1.8 4.8-.1 4.8-.1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M13 12.5c-3.5 2.8-2.2 5.3 2.7 5.5 5.4.2 8.1-1.5 8.1-1.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M11.2 20.5c-1.8.8-2.1 2 .3 2.5 4.7 1 11.4-.2 12.8-1.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12.8 25.2c2.2 1 7.5 1.2 10.6-.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        d="M7 7.5h18M7 16h18M7 24.5h18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7.5" r="2.5" fill="currentColor" />
      <circle cx="21" cy="16" r="2.5" fill="currentColor" />
      <circle cx="14" cy="24.5" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function ProgrammingHero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7FAFF] text-slate-900">

      {/* ============================================================
          SOFT BACKGROUND
      ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[160px] h-[460px] w-[460px] rounded-full bg-sky-100/60 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[420px] h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-220px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-50 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-6 lg:px-8">

        {/* ============================================================
            BACK BUTTON
        ============================================================ */}

        <Link
          href="/domains"
          className="
            group
            mb-12
            inline-flex
            items-center
            gap-2.5
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-2.5
            text-sm
            font-semibold
            text-slate-700
            shadow-[0_4px_16px_rgba(15,23,42,0.05)]
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-sky-300
            hover:text-sky-700
            hover:shadow-[0_10px_25px_rgba(14,165,233,0.10)]
          "
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>

          Back to Domains
        </Link>

        {/* ============================================================
            HERO
        ============================================================ */}

        <section
          className="
            relative
            mb-14
            overflow-hidden
            rounded-[32px]
            border
            border-sky-100
            bg-white/90
            px-7
            py-9
            shadow-[0_18px_60px_rgba(15,23,42,0.06)]
            backdrop-blur-xl
            sm:px-10
            sm:py-11
            lg:px-12
            lg:py-12
          "
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-sky-100/70 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-120px] right-[30%] h-60 w-60 rounded-full bg-cyan-100/50 blur-3xl"
          />

          <div className="relative max-w-4xl">

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M8 8h8M8 12h5M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-700">
                  Programming
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Learn • Build • Practice
                </p>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
              Turn code into
              <span className="block bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                real skills.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Build strong programming foundations through structured courses,
              practical examples, problem solving, and project-oriented learning.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                <span className="mr-2 text-sm font-black text-sky-600">04</span>
                <span className="text-xs font-semibold text-slate-600">
                  Courses
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                <span className="mr-2 text-sm font-black text-cyan-600">∞</span>
                <span className="text-xs font-semibold text-slate-600">
                  Practice
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                <span className="mr-2 text-sm font-black text-blue-600">01</span>
                <span className="text-xs font-semibold text-slate-600">
                  Learning Path
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION HEADING
        ============================================================ */}

        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-700">
                Learning paths
              </p>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Choose where you want to start
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Select a course and begin building your skills step by step.
            </p>
          </div>

          <div className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm sm:block">
            4 Courses
          </div>
        </div>

        {/* ============================================================
            COURSE CARDS
        ============================================================ */}

        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => {
            const colors = accentStyles[course.accent];

            return (
              <Link
                key={course.name}
                href={course.link}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-[0_10px_35px_rgba(15,23,42,0.055)]
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-slate-300
                  hover:shadow-[0_24px_60px_rgba(15,23,42,0.11)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-sky-500
                  sm:p-7
                "
              >
                {/* Accent line */}
                <div
                  aria-hidden="true"
                  className={`
                    absolute
                    inset-x-0
                    top-0
                    h-[3px]
                    bg-gradient-to-r
                    ${colors.line}
                  `}
                />

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    right-[-80px]
                    top-[-80px]
                    h-48
                    w-48
                    rounded-full
                    ${colors.glow}
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-70
                  `}
                />

                <div className="relative">

                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        ${colors.icon}
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      `}
                    >
                      <CourseIcon course={course} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.15em] text-slate-300">
                      {course.number}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="mt-6">
                    <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500">
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      mt-4
                      text-2xl
                      font-bold
                      tracking-tight
                      text-slate-950
                      transition-colors
                      duration-200
                      ${colors.hover}
                    `}
                  >
                    {course.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-bold text-slate-800">
                      Explore Course
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        text-slate-600
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:border-sky-200
                        group-hover:bg-sky-50
                        group-hover:text-sky-700
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ============================================================
            BOTTOM MESSAGE
        ============================================================ */}

        <div className="mt-8 overflow-hidden rounded-[24px] border border-sky-100 bg-gradient-to-r from-white via-sky-50/70 to-white shadow-[0_8px_30px_rgba(15,23,42,0.045)]">
          <div className="flex items-center gap-4 px-5 py-5 sm:px-6">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-700">
              ✓
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Learn progressively. Build confidently.
              </p>

              <p className="mt-0.5 text-sm leading-6 text-slate-500">
                Each course is organized into structured modules and lessons,
                helping you move from fundamentals to practical development.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
