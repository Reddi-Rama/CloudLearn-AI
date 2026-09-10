import Link from "next/link";

export default function ProgrammingHero() {
  const courses = [
    {
      name: "Python Development",
      description:
        "Learn Python from fundamentals to advanced concepts with practical projects.",
      link: "/courses/python-development",
      number: "01",
    },
    {
      name: "C++ Development",
      description:
        "Master object-oriented programming, data structures, and problem solving.",
      link: "/courses/cpp-development",
      number: "02",
    },
    {
      name: "Java Development",
      description:
        "Learn Java programming, OOP concepts, and enterprise application development.",
      link: "/courses/java-development",
      number: "03",
    },
    {
      name: "C Development",
      description:
        "Understand programming fundamentals, memory concepts, and system programming.",
      link: "/courses/c-development",
      number: "04",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">

      <Link
        href="/domains"
        className="
          mb-10
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-slate-700
          shadow-sm
          transition
          hover:border-sky-300
          hover:text-sky-600
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-slate-200
          dark:hover:border-sky-500
          dark:hover:text-sky-400
        "
      >
        <span aria-hidden="true">&larr;</span>
        Back to Domains
      </Link>

      <h1
        className="
          mb-12
          text-5xl
          font-semibold
          text-slate-900
          dark:text-white
        "
      >
        Programming Domain
      </h1>

      <div className="grid gap-10 md:grid-cols-2">
        {courses.map((course) => (
          <Link
            key={course.name}
            href={course.link}
            className="
              group
              rounded-[40px]
              border
              border-slate-200
              bg-white
              px-10
              py-8
              shadow-sm
              transition
              hover:-translate-y-2
              hover:shadow-xl
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
                  bg-sky-100
                  font-semibold
                  text-sky-600
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
                    text-slate-900
                    transition
                    group-hover:text-sky-600
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
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {course.description}
                </p>

                <p
                  className="
                    mt-5
                    text-sm
                    font-medium
                    text-sky-600
                    dark:text-sky-400
                  "
                >
                  Explore Course <span aria-hidden="true">&rarr;</span>
                </p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
