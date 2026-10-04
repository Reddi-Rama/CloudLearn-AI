"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AIMLCourseAccessGateProps {
  course: string;
  courseName: string;
  startHref: string;
}

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api/v1";

export default function AIMLCourseAccessGate({
  course,
  courseName,
  startHref,
}: AIMLCourseAccessGateProps) {
  const [enrolled, setEnrolled] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState("");

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
            data.message || "Unable to check course access."
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
              : "Unable to check course access."
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
  }, [course]);

  if (checking) {
    return (
      <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 animate-pulse rounded-full bg-cyan-400" />
          <p className="text-sm font-medium text-slate-300">
            Checking course access...
          </p>
        </div>
      </section>
    );
  }

  if (enrolled) {
    return (
      <section className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
              Course Unlocked
            </p>

            <h2 className="mt-2 text-2xl font-black text-white">
              You have full access to {courseName}
            </h2>

            <p className="mt-2 text-sm text-slate-300">
              Your AIML bundle purchase is active. All four AIML
              courses are included.
            </p>
          </div>

          <Link
            href={startHref}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-emerald-400"
          >
            Continue Learning →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8 rounded-3xl border border-violet-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950/30 p-7 shadow-2xl">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-300">
            🔒 AIML Full Course
          </div>

          <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
            Unlock the complete AIML bundle
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            One payment gives you access to all four AIML courses:
            AI Foundations, Machine Learning, Deep Learning, and
            Generative AI.
          </p>

          {error && (
            <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-3 text-sm text-yellow-300">
              {error}
            </div>
          )}
        </div>

        <div className="min-w-[250px] rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Limited Offer
          </p>

          <div className="mt-3 flex items-end gap-3">
            <span className="text-lg font-medium text-slate-500 line-through">
              ₹149
            </span>

            <span className="text-4xl font-black text-white">
              ₹99
            </span>
          </div>

          <span className="mt-3 inline-flex rounded-full bg-emerald-500/15 px-3 py-1.5 text-sm font-black text-emerald-300">
            OFFER 4
          </span>

          <Link
            href={`/payment/checkout?course=${encodeURIComponent(course)}`}
            className="mt-5 flex w-full items-center justify-center rounded-xl bg-violet-500 px-5 py-3.5 font-bold text-white transition hover:bg-violet-400"
          >
            Unlock Full AIML Course →
          </Link>

          <p className="mt-3 text-center text-xs text-slate-500">
            One payment • 4 courses
          </p>
        </div>
      </div>
    </section>
  );
}
