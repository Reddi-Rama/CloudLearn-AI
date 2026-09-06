"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const course = searchParams.get("course") || "";
  
  const courseName =
    course === "c-development"
      ? "C Programming"
      : course
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">

        {/* HEADER */}

        <div className="mb-8">
          <Link
            href={`/courses/${course}`}
            className="font-medium text-sky-600 hover:text-sky-700"
          >
            ← Back to Course
          </Link>
        </div>

        {/* CHECKOUT CARD */}

        <section className="overflow-hidden rounded-3xl bg-white shadow-sm">

          {/* TOP */}

          <div className="border-b border-slate-200 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Course Checkout
            </p>

            <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Unlock {courseName}
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600">
              Get complete access to all modules, lessons,
              practical examples, exercises, and course content.
            </p>
          </div>

          {/* CONTENT */}

          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_360px]">

            {/* LEFT */}

            <div>

              <h2 className="text-xl font-bold text-slate-900">
                What's included
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Complete Course Access
                    </p>
                    <p className="text-sm text-slate-600">
                      Access all available course modules.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      All Lessons
                    </p>
                    <p className="text-sm text-slate-600">
                      Learn through structured lessons and examples.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Learning Content
                    </p>
                    <p className="text-sm text-slate-600">
                      Practical examples and real-world applications.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT - PRICE */}

            <div className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6">

              <p className="text-sm font-medium text-slate-500">
                Course Price
              </p>

              <div className="mt-4 flex items-end gap-3">
                <span className="text-lg font-medium text-slate-400 line-through">
                  ₹99
                </span>

                <span className="text-4xl font-bold text-slate-900">
                  ₹49
                </span>
              </div>

              <div className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1.5 text-sm font-bold text-green-700">
                50% OFF
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">
                    Original price
                  </span>

                  <span className="text-slate-500 line-through">
                    ₹99
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-slate-900">
                    ₹49
                  </span>
                </div>

              </div>

              <button
                type="button"
                disabled
                className="
                  mt-6
                  w-full
                  rounded-2xl
                  bg-slate-300
                  px-6
                  py-4
                  font-semibold
                  text-slate-500
                  cursor-not-allowed
                "
              >
                Payment Coming Next
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Secure payment integration will be connected
                in the next step.
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}
