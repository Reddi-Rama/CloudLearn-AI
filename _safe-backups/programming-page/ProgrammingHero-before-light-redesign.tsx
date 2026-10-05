import Link from "next/link";

export default function ProgrammingHero() {
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

  return (
    <section className="relative overflow-hidden">
      {/* Subtle light-mode background accents.
          Dark mode remains intentionally restrained. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
      >
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -right-32 top-72 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8">

        {/* Back navigation */}
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
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-sky-300
            hover:text-sky-700
            hover:shadow-md
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-sky-500
            focus-visible:ring-offset-2
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-200
            dark:hover:border-sky-500
            dark:hover:text-sky-400
            dark:hover:shadow-none
            dark:focus-visible:ring-offset-slate-950
          "
        >
          <span
            aria-hidden="true"
            className="text-base transition-transform duration-200 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Back to Domains
        </Link>

        {/* Hero heading */}
        <div className="mb-12 max-w-3xl sm:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-sky-500 dark:bg-sky-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
              Programming
            </span>
          </div>

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-[3.4rem]
              lg:leading-[1.08]
              dark:text-white
            "
          >
            Programming Domain
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
              dark:text-slate-400
            "
          >
            Build strong programming foundations through structured courses,
            practical examples, problem solving, and project-oriented learning.
          </p>
        </div>

        {/* Course grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-7">
          {courses.map((course) => (
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
                p-7
                shadow-[0_4px_18px_rgba(15,23,42,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-sky-300
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-sky-500
                focus-visible:ring-offset-2
                sm:p-8
                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-black/20
                dark:hover:border-slate-600
                dark:hover:bg-slate-800
                dark:hover:shadow-black/30
                dark:focus-visible:ring-offset-slate-950
              "
            >
              {/* Top accent */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-1
                  bg-gradient-to-r
                  from-sky-500
                  via-cyan-500
                  to-sky-400
                  opacity-70
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                  dark:opacity-50
                  dark:group-hover:opacity-80
                "
              />

              <div className="flex items-start gap-5 sm:gap-6">

                {/* Course number */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-sky-200
                    bg-sky-50
                    text-sm
                    font-bold
                    tracking-wide
                    text-sky-700
                    transition-all
                    duration-300
                    group-hover:border-sky-300
                    group-hover:bg-sky-100
                    dark:border-sky-900
                    dark:bg-sky-950
                    dark:text-sky-400
                    dark:group-hover:border-sky-800
                    dark:group-hover:bg-sky-900
                  "
                >
                  {course.number}
                </div>

                {/* Course content */}
                <div className="min-w-0 flex-1">

                  <div className="mb-3">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        px-2.5
                        py-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-slate-500
                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-400
                      "
                    >
                      {course.category}
                    </span>
                  </div>

                  <h2
                    className="
                      text-xl
                      font-bold
                      tracking-tight
                      text-slate-950
                      transition-colors
                      duration-200
                      group-hover:text-sky-700
                      sm:text-2xl
                      dark:text-white
                      dark:group-hover:text-sky-400
                    "
                  >
                    {course.name}
                  </h2>

                  <p
                    className="
                      mt-3
                      max-w-xl
                      text-sm
                      leading-6
                      text-slate-600
                      sm:text-[15px]
                      dark:text-slate-400
                    "
                  >
                    {course.description}
                  </p>

                  {/* Course action */}
                  <div
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-sky-700
                      transition-all
                      duration-200
                      group-hover:gap-3
                      dark:text-sky-400
                    "
                  >
                    <span>Explore Course</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom learning note */}
        <div
          className="
            mt-8
            rounded-2xl
            border
            border-slate-200
            bg-white/80
            px-5
            py-4
            shadow-sm
            backdrop-blur-sm
            dark:border-slate-800
            dark:bg-slate-900/60
            dark:shadow-none
          "
        >
          <div className="flex items-start gap-3">
            <div
              aria-hidden="true"
              className="
                mt-0.5
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-sky-50
                text-sm
                text-sky-700
                dark:bg-sky-950
                dark:text-sky-400
              "
            >
              ✓
            </div>

            <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
              Each course is organized into structured modules and lessons so
              you can progress from fundamentals to practical development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
