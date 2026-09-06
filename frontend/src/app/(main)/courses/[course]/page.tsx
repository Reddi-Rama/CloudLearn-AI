import Link from "next/link";
import { notFound } from "next/navigation";

import { modules as pythonModules } from "@/content/programming/python/lessons/module";
import { modules as cppModules } from "@/content/programming/cpp/lessons/module";
import { modules as javaModules } from "@/content/programming/java/lessons/module";
import { modules as cModules } from "@/content/programming/c/lessons/module";

interface CoursePageProps {
  params: Promise<{
    course: string;
  }>;
}

type ModuleData = {
  id: string;
  title: string;
  lessons?: {
    id: string;
    title: string;
  }[];
};

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { course } = await params;

  const courseModules: ModuleData[] | null =
    course === "python-development"
      ? pythonModules as ModuleData[]
      : course === "cpp-development"
        ? cppModules as ModuleData[]
        : course === "java-development"
          ? javaModules as ModuleData[]
          : course === "c-development"
            ? cModules as ModuleData[]
            : null;

  if (!courseModules) {
    return notFound();
  }

  const courseName =
    course === "c-development"
      ? "C Programming"
      : course
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main
      className="
        min-h-screen
        bg-slate-50
        py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >

        {/* HERO SECTION */}

        <section
          className="
            rounded-3xl
            bg-white
            p-12
            shadow-sm
          "
        >

          <p
            className="
              font-medium
              text-sky-600
            "
          >
            Programming Domain
          </p>

          <h1
            className="
              mt-4
              text-5xl
              font-bold
              text-slate-900
            "
          >
            {courseName}
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Learn {courseName} from beginner to advanced
            through structured modules, practical lessons,
            examples, and real-world applications.
          </p>

          {/* LOCKED COURSE PAYMENT AREA */}

          <div
            className="
              mt-10
              rounded-3xl
              border
              border-sky-100
              bg-sky-50
              p-8
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  text-2xl
                  shadow-sm
                "
              >
                🔒
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wide
                    text-sky-600
                  "
                >
                  Course Locked
                </p>

                <h2
                  className="
                    mt-1
                    text-2xl
                    font-bold
                    text-slate-900
                  "
                >
                  Unlock {courseName}
                </h2>
              </div>
            </div>

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              <span
                className="
                  text-lg
                  font-medium
                  text-slate-400
                  line-through
                "
              >
                ₹99
              </span>

              <span
                className="
                  text-4xl
                  font-bold
                  text-slate-900
                "
              >
                ₹49
              </span>

              <span
                className="
                  rounded-full
                  bg-green-100
                  px-4
                  py-2
                  text-sm
                  font-bold
                  text-green-700
                "
              >
                50% OFF
              </span>
            </div>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-slate-600
              "
            >
              Unlock this complete course to access all
              modules, lessons, practical examples, and
              learning content.
            </p>

            <Link
              href={`/payment/checkout?course=${encodeURIComponent(course)}`}
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                rounded-2xl
                bg-sky-600
                px-8
                py-4
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-sky-700
              "
            >
              Unlock Course →
            </Link>

          </div>

        </section>

        {/* MODULES */}

        <section
          className="
            mt-16
          "
        >

          <div
            className="
              flex
              flex-wrap
              items-end
              justify-between
              gap-4
            "
          >

            <div>
              <h2
                className="
                  text-3xl
                  font-bold
                  text-slate-900
                "
              >
                Course Modules
              </h2>

              <p
                className="
                  mt-2
                  text-slate-600
                "
              >
                Unlock the course to access these modules.
              </p>
            </div>

            <span
              className="
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-sm
                font-medium
                text-slate-600
              "
            >
              🔒 Locked
            </span>

          </div>

          <div
            className="
              mt-8
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {
              courseModules
                .filter(Boolean)
                .map((module, index) => (

                  <div
                    key={`${module.id}-${index}`}
                    className="
                      flex
                      min-h-[310px]
                      flex-col
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-sm
                    "
                  >

                    {/* MODULE NUMBER */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-slate-100
                          font-bold
                          text-slate-500
                        "
                      >
                        {index + 1}
                      </div>

                      <span className="text-xl">
                        🔒
                      </span>

                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-6
                        h-16
                        overflow-hidden
                        text-xl
                        font-bold
                        leading-7
                        text-slate-900
                      "
                    >
                      {module.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-4
                        h-14
                        overflow-hidden
                        text-sm
                        leading-6
                        text-slate-600
                      "
                    >
                      Learn {module.title} through structured lessons,
                      practical examples, and real-world applications.
                    </p>

                    {/* FOOTER */}

                    <div
                      className="
                        mt-auto
                        flex
                        items-center
                        justify-between
                        pt-8
                      "
                    >

                      <span
                        className="
                          rounded-full
                          bg-slate-100
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-slate-700
                        "
                      >
                        {module.lessons?.length ?? 0} Lessons
                      </span>

                      <span
                        className="
                          font-semibold
                          text-slate-400
                        "
                      >
                        Locked 🔒
                      </span>

                    </div>

                  </div>

                ))
            }

          </div>

        </section>

      </div>
    </main>
  );
}
