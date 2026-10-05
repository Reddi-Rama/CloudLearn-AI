"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ModuleData = {
  id: string;
  title: string;
  lessons?: {
    id: string;
    title: string;
  }[];
};

interface CourseAccessGateProps {
  course: string;
  courseName: string;
  courseModules: ModuleData[];
}

export default function CourseAccessGate({
  course,
  courseName,
  courseModules,
}: CourseAccessGateProps) {
  const [enrolled, setEnrolled] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState("");

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api/v1";

  useEffect(() => {
    let cancelled = false;

    const checkEnrollment = async () => {
      try {
        const token = localStorage.getItem(
          "cloudlearn-access-token"
        );

        if (!token) {
          if (!cancelled) {
            setEnrolled(false);
            setChecking(false);
          }
          return;
        }

        const response = await fetch(
          `${apiUrl}/payment/enrollment/${encodeURIComponent(course)}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(
            data.message || "Unable to check enrollment"
          );
        }

        if (!cancelled) {
          setEnrolled(Boolean(data.data?.enrolled));
          setChecking(false);
        }
      } catch (checkError) {
        if (!cancelled) {
          setError(
            checkError instanceof Error
              ? checkError.message
              : "Unable to check enrollment"
          );
          setEnrolled(false);
          setChecking(false);
        }
      }
    };

    checkEnrollment();

    return () => {
      cancelled = true;
    };
  }, [apiUrl, course]);

  if (checking) {
    return (
      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-sky-600" />
          <p className="font-medium text-slate-600">
            Checking course access...
          </p>
        </div>
      </section>
    );
  }

  if (enrolled) {
    return (
      <>
        {/* UNLOCKED COURSE AREA */}

        <section className="mt-10 rounded-3xl border border-green-100 bg-green-50 p-8">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
              ✅
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                Course Unlocked
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                You have full access to {courseName}
              </h2>
            </div>

          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Your payment has been verified and your enrollment
            is active. You can now access all course modules
            and lessons.
          </p>

          <Link
            href={
              courseModules[0]
                ? `/lesson/${course}/${courseModules[0].id}/about`
                : `/courses/${course}`
            }
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
            Start Learning →
          </Link>

        </section>

        {/* UNLOCKED MODULES */}

        <section className="mt-16">

          <div className="flex flex-wrap items-end justify-between gap-4">

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Course Modules
              </h2>

              <p className="mt-2 text-slate-600">
                All modules are unlocked.
              </p>
            </div>

            <span className="
              rounded-full
              bg-green-100
              px-4
              py-2
              text-sm
              font-medium
              text-green-700
            ">
              ✅ Unlocked
            </span>

          </div>

          <div className="
            mt-8
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          ">

            {courseModules
              .filter(Boolean)
              .map((module, index) => (

                <Link
                  key={`${module.id}-${index}`}
                  href={`/lesson/${course}/${module.id}/about`}
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
                    transition
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  <div className="
                    flex
                    items-center
                    justify-between
                  ">

                    <div className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-sky-100
                      font-bold
                      text-sky-600
                    ">
                      {index + 1}
                    </div>

                    <span className="text-xl">
                      🔓
                    </span>

                  </div>

                  <h3 className="
                    mt-6
                    h-16
                    overflow-hidden
                    text-xl
                    font-bold
                    leading-7
                    text-slate-900
                  ">
                    {module.title}
                  </h3>

                  <p className="
                    mt-4
                    h-14
                    overflow-hidden
                    text-sm
                    leading-6
                    text-slate-600
                  ">
                    Learn {module.title} through structured lessons,
                    practical examples, and real-world applications.
                  </p>

                  <div className="
                    mt-auto
                    flex
                    items-center
                    justify-between
                    pt-8
                  ">

                    <span className="
                      rounded-full
                      bg-slate-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-700
                    ">
                      {module.lessons?.length ?? 0} Lessons
                    </span>

                    <span className="
                      font-semibold
                      text-sky-600
                    ">
                      Start Module →
                    </span>

                  </div>

                </Link>

              ))}

          </div>

        </section>
      </>
    );
  }

  return (
    <>
      {/* LOCKED COURSE PAYMENT AREA */}

      <section className="
        mt-10
        rounded-3xl
        border
        border-sky-100
        bg-sky-50
        p-8
      ">

        <div className="
          flex
          items-center
          gap-3
        ">

          <div className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-white
            text-2xl
            shadow-sm
          ">
            🔒
          </div>

          <div>

            <p className="
              text-sm
              font-semibold
              uppercase
              tracking-wide
              text-sky-600
            ">
              Course Locked
            </p>

            <h2 className="
              mt-1
              text-2xl
              font-bold
              text-slate-900
            ">
              Unlock {courseName}
            </h2>

          </div>

        </div>

        <div className="
          mt-6
          flex
          flex-wrap
          items-center
          gap-4
        ">

          <span className="
            text-lg
            font-medium
            text-slate-400
            line-through
          ">
            ₹99
          </span>

          <span className="
            text-4xl
            font-bold
            text-slate-900
          ">
            ₹49
          </span>

          <span className="
            rounded-full
            bg-green-100
            px-4
            py-2
            text-sm
            font-bold
            text-green-700
          ">
            50% OFF
          </span>

        </div>

        <p className="
          mt-4
          max-w-2xl
          text-sm
          leading-6
          text-slate-600
        ">
          Unlock this complete course to access all
          modules, lessons, practical examples, and
          learning content.
        </p>

        {error && (
          <div className="
            mt-5
            rounded-2xl
            border
            border-yellow-200
            bg-yellow-50
            p-4
            text-sm
            text-yellow-800
          ">
            {error}
          </div>
        )}

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

      </section>

      {/* LOCKED MODULES */}

      <section className="mt-16">

        <div className="
          flex
          flex-wrap
          items-end
          justify-between
          gap-4
        ">

          <div>

            <h2 className="
              text-3xl
              font-bold
              text-slate-900
            ">
              Course Modules
            </h2>

            <p className="
              mt-2
              text-slate-600
            ">
              Unlock the course to access these modules.
            </p>

          </div>

          <span className="
            rounded-full
            bg-slate-100
            px-4
            py-2
            text-sm
            font-medium
            text-slate-600
          ">
            🔒 Locked
          </span>

        </div>

        <div className="
          mt-8
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        ">

          {courseModules
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

                <div className="
                  flex
                  items-center
                  justify-between
                ">

                  <div className="
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
                  ">
                    {index + 1}
                  </div>

                  <span className="text-xl">
                    🔒
                  </span>

                </div>

                <h3 className="
                  mt-6
                  h-16
                  overflow-hidden
                  text-xl
                  font-bold
                  leading-7
                  text-slate-900
                ">
                  {module.title}
                </h3>

                <p className="
                  mt-4
                  h-14
                  overflow-hidden
                  text-sm
                  leading-6
                  text-slate-600
                ">
                  Learn {module.title} through structured lessons,
                  practical examples, and real-world applications.
                </p>

                <div className="
                  mt-auto
                  flex
                  items-center
                  justify-between
                  pt-8
                ">

                  <span className="
                    rounded-full
                    bg-slate-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                  ">
                    {module.lessons?.length ?? 0} Lessons
                  </span>

                  <span className="
                    font-semibold
                    text-slate-400
                  ">
                    Locked 🔒
                  </span>

                </div>

              </div>

            ))}

        </div>

      </section>
    </>
  );
}
