import Link from "next/link";

const courses = [
  {
    name: "Python Development",
    description:
      "Learn Python from fundamentals to advanced concepts with practical projects.",
    href: "/courses/python-development",
    number: "01",
  },
  {
    name: "C++ Development",
    description:
      "Master object-oriented programming, data structures, and problem solving.",
    href: "/courses/cpp-development",
    number: "02",
  },
  {
    name: "Java Development",
    description:
      "Learn Java programming, OOP concepts, and application development.",
    href: "/courses/java-development",
    number: "03",
  },
  {
    name: "C Development",
    description:
      "Understand programming fundamentals, memory concepts, and system programming.",
    href: "/courses/c-development",
    number: "04",
  },
];

export default function CoursesPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#F7FAFC]
        py-20
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">

          <p
            className="
              font-semibold
              text-sky-700
              dark:text-sky-400
            "
          >
            Programming Domain
          </p>

          <h1
            className="
              mt-3
              text-5xl
              font-bold
              tracking-tight
              text-slate-950
              dark:text-white
            "
          >
            Programming Courses
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-400
            "
          >
            Choose a programming course and start learning through structured
            modules, practical lessons, examples, and projects.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {courses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="
                group
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-[0_4px_18px_rgba(15,23,42,0.04)]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-sky-200
                hover:bg-sky-50/30
                hover:shadow-[0_10px_28px_rgba(15,23,42,0.07)]
                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-black/20
                dark:hover:border-slate-600
                dark:hover:bg-slate-800
              "
            >

              <div className="flex items-start gap-5">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-sky-100
                    bg-sky-50
                    font-semibold
                    text-sky-700
                    transition-colors
                    duration-200
                    group-hover:border-sky-200
                    group-hover:bg-sky-100
                    dark:border-sky-900
                    dark:bg-sky-950
                    dark:text-sky-400
                  "
                >
                  {course.number}
                </div>

                <div>

                  <h2
                    className="
                      text-2xl
                      font-semibold
                      text-slate-950
                      transition-colors
                      duration-200
                      group-hover:text-sky-700
                      dark:text-white
                      dark:group-hover:text-sky-400
                    "
                  >
                    {course.name}
                  </h2>

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

                  <p
                    className="
                      mt-5
                      text-sm
                      font-semibold
                      text-sky-700
                      dark:text-sky-400
                    "
                  >
                    Start Learning{" "}
                    <span aria-hidden="true">→</span>
                  </p>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}
