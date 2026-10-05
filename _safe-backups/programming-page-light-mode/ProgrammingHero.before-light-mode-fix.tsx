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
    <section className="relative">

      {/* Light-mode-only background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden dark:hidden"
      >
        <div className="absolute left-[8%] top-16 h-72 w-72 rounded-full bg-sky-100/45 blur-3xl" />
        <div className="absolute right-[5%] top-80 h-80 w-80 rounded-full bg-blue-100/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-7 sm:px-6 sm:pb-24 sm:pt-9 lg:px-8">

        {/* Back button */}
        <Link
          href="/domains"
          className="
            group
            mb-12
            inline-flex
            items-center
            gap-2
            rounded-lg
            border
            border-slate-200
            bg-white
            px-4
            py-2.5
            text-sm
            font-medium
            text-slate-600
            shadow-[0_2px_8px_rgba(15,23,42,0.04)]
            transition-all
            duration-200
            hover:border-sky-300
            hover:bg-sky-50
            hover:text-sky-700
            hover:shadow-[0_4px_12px_rgba(15,23,42,0.06)]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-sky-500
            focus-visible:ring-offset-2
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-200
            dark:hover:border-sky-500
            dark:hover:bg-slate-900
            dark:hover:text-sky-400
          "
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Back to Domains
        </Link>

        {/* Light-mode hero */}
        <header className="mb-12 sm:mb-14">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-1 w-8 rounded-full bg-sky-500 dark:bg-sky-400" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-sky-700
                dark:text-sky-400
              "
            >
              Programming
            </span>
          </div>

          <h1
            className="
              text-4xl
              font-bold
              tracking-[-0.03em]
              text-slate-950
              sm:text-5xl
              lg:text-[3.75rem]
              lg:leading-[1.05]
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
        </header>

        {/* Course collection */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Choose your course
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Start with the language that matches your learning goals.
            </p>
          </div>

          <span
            className="
              hidden
              rounded-full
              border
              border-slate-200
              bg-white
              px-3
              py-1.5
              text-xs
              font-medium
              text-slate-500
              shadow-sm
              sm:inline-flex
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-400
            "
          >
            4 Courses
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {courses.map((course) => (
            <Link
              key={course.name}
              href={course.link}
              className="
                group
                relative
                flex
                min-h-[230px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-[0_3px_14px_rgba(15,23,42,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-sky-200
                hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
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

              {/* Very subtle light-mode card accent */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1
                  bg-sky-500
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                  dark:bg-sky-400
                "
              />

              <div className="flex items-start gap-5">

                {/* Number */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-sky-100
                    bg-sky-50
                    text-sm
                    font-bold
                    tracking-wide
                    text-sky-700
                    transition-colors
                    duration-200
                    group-hover:border-sky-200
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

                <div className="min-w-0 flex-1">

                  {/* Category */}
                  <span
                    className="
                      inline-block
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-slate-400
                      dark:text-slate-500
                    "
                  >
                    {course.category}
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      mt-2
                      text-xl
                      font-bold
                      tracking-tight
                      text-slate-900
                      transition-colors
                      duration-200
                      group-hover:text-sky-700
                      sm:text-2xl
                      dark:text-white
                      dark:group-hover:text-sky-400
                    "
                  >
                    {course.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Bottom action */}
              <div className="mt-auto pt-7">

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-100
                    pt-5
                    dark:border-slate-800
                  "
                >
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-slate-700
                      transition-colors
                      duration-200
                      group-hover:text-sky-700
                      dark:text-slate-300
                      dark:group-hover:text-sky-400
                    "
                  >
                    Explore Course
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-50
                      text-slate-500
                      transition-all
                      duration-200
                      group-hover:bg-sky-50
                      group-hover:text-sky-700
                      dark:bg-slate-800
                      dark:text-slate-400
                      dark:group-hover:bg-slate-700
                      dark:group-hover:text-sky-400
                    "
                  >
                    →
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Learning note */}
        <div
          className="
            mt-7
            border-t
            border-slate-200
            pt-6
            dark:border-slate-800
          "
        >
          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
            Each course is organized into structured modules and lessons,
            helping you progress from fundamentals to practical development.
          </p>
        </div>

      </div>
    </section>
  );
}
