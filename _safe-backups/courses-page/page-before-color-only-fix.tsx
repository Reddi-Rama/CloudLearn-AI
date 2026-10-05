import Link from "next/link";

const courses = [
  {
    name: "Python Development",
    description:
      "Learn Python from fundamentals to advanced concepts with practical projects.",
    href: "/courses/python-development",
    number: "01",
    label: "Python",
    accent:
      "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/50 dark:text-blue-400 dark:border-blue-900",
    icon: "Py",
  },
  {
    name: "C++ Development",
    description:
      "Master object-oriented programming, data structures, and problem solving.",
    href: "/courses/cpp-development",
    number: "02",
    label: "C++",
    accent:
      "bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-950/50 dark:text-violet-400 dark:border-violet-900",
    icon: "C++",
  },
  {
    name: "Java Development",
    description:
      "Learn Java programming, OOP concepts, and application development.",
    href: "/courses/java-development",
    number: "03",
    label: "Java",
    accent:
      "bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-950/50 dark:text-orange-400 dark:border-orange-900",
    icon: "Jv",
  },
  {
    name: "C Development",
    description:
      "Understand programming fundamentals, memory concepts, and system programming.",
    href: "/courses/c-development",
    number: "04",
    label: "C",
    accent:
      "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-400 dark:border-emerald-900",
    icon: "C",
  },
];

export default function CoursesPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f6faff]
        dark:bg-slate-950
      "
    >
      {/* Light-mode background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
      >
        <div className="absolute left-[-180px] top-[-160px] h-[460px] w-[460px] rounded-full bg-sky-100/55 blur-3xl" />
        <div className="absolute right-[-180px] top-[260px] h-[430px] w-[430px] rounded-full bg-blue-100/45 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-6 lg:px-8">

        {/* Hero */}
        <section className="mb-12">

          <div className="mb-8">
            <Link
              href="/domains"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                font-semibold
                text-slate-600
                shadow-sm
                transition-all
                duration-200
                hover:border-sky-300
                hover:bg-sky-50
                hover:text-sky-700
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-sky-500
                focus-visible:ring-offset-2
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-300
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
          </div>

          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-slate-200
              bg-white
              shadow-[0_12px_45px_rgba(30,64,175,0.07)]
              dark:border-slate-800
              dark:bg-slate-900
              dark:shadow-black/20
            "
          >
            <div className="relative px-7 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-14">

              {/* Light accent */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  right-0
                  top-0
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-sky-500
                  via-blue-500
                  to-cyan-400
                  dark:from-sky-600
                  dark:via-blue-600
                  dark:to-cyan-500
                "
              />

              <div className="max-w-3xl">

                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="
                      inline-flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-sky-50
                      text-sky-700
                      dark:bg-sky-950
                      dark:text-sky-400
                    "
                    aria-hidden="true"
                  >
                    &lt;/&gt;
                  </span>

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-sky-700
                      dark:text-sky-400
                    "
                  >
                    Programming Domain
                  </span>
                </div>

                <h1
                  className="
                    text-4xl
                    font-bold
                    tracking-[-0.035em]
                    text-slate-950
                    sm:text-5xl
                    lg:text-[3.8rem]
                    lg:leading-[1.04]
                    dark:text-white
                  "
                >
                  Programming Courses
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
                  Build a strong programming foundation with structured
                  learning paths, practical lessons, examples, problem
                  solving, and hands-on development.
                </p>

                {/* Course summary */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-600
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-slate-300
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    4 Programming Courses
                  </div>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-600
                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-slate-300
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Structured Learning
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Section heading */}
        <section>

          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-sky-700
                  dark:text-sky-400
                "
              >
                Learning paths
              </p>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-bold
                  tracking-tight
                  text-slate-950
                  sm:text-3xl
                  dark:text-white
                "
              >
                Choose where you want to start
              </h2>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Select a course to explore its modules.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {courses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="
                  group
                  relative
                  flex
                  min-h-[265px]
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-[0_5px_20px_rgba(15,23,42,0.045)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-slate-300
                  hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-sky-500
                  focus-visible:ring-offset-2
                  sm:p-8
                  dark:border-slate-800
                  dark:bg-slate-900
                  dark:shadow-black/20
                  dark:hover:border-slate-700
                  dark:hover:bg-slate-900
                  dark:hover:shadow-black/30
                  dark:focus-visible:ring-offset-slate-950
                "
              >

                {/* Card top line */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-[3px]
                    bg-slate-100
                    transition-colors
                    duration-300
                    group-hover:bg-sky-400
                    dark:bg-slate-800
                    dark:group-hover:bg-sky-500
                  "
                />

                <div className="flex items-start justify-between gap-5">

                  {/* Course icon */}
                  <div
                    className={`
                      flex
                      h-14
                      min-w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      px-2
                      text-xs
                      font-bold
                      ${course.accent}
                    `}
                  >
                    {course.icon}
                  </div>

                  {/* Number */}
                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-[0.12em]
                      text-slate-300
                      dark:text-slate-700
                    "
                  >
                    {course.number}
                  </span>
                </div>

                <div className="mt-7">

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-slate-400
                      dark:text-slate-500
                    "
                  >
                    {course.label}
                  </span>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      tracking-tight
                      text-slate-950
                      transition-colors
                      duration-200
                      group-hover:text-sky-700
                      dark:text-white
                      dark:group-hover:text-sky-400
                    "
                  >
                    {course.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-lg
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {course.description}
                  </p>
                </div>

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
                        font-bold
                        text-slate-700
                        transition-colors
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
                        h-9
                        w-9
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
        </section>

        {/* Bottom information */}
        <section
          className="
            mt-8
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-5
            shadow-sm
            dark:border-slate-800
            dark:bg-slate-900
            dark:shadow-none
          "
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Learn at your own pace
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Work through structured modules and lessons as you build your
                programming skills.
              </p>
            </div>

            <div
              className="
                hidden
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-sky-50
                text-sky-600
                sm:flex
                dark:bg-sky-950
                dark:text-sky-400
              "
              aria-hidden="true"
            >
              ✓
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
