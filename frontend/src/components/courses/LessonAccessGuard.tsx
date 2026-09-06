"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { API } from "@/lib/api";

interface LessonAccessGuardProps {
  courseSlug: string;
  children: React.ReactNode;
}

type EnrollmentResponse = {
  success: boolean;
  data?: {
    enrolled: boolean;
  };
};

export default function LessonAccessGuard({
  courseSlug,
  children,
}: LessonAccessGuardProps) {
  const router = useRouter();

  const [checking, setChecking] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function checkAccess() {
      try {
        const token = localStorage.getItem(
          "cloudlearn-access-token"
        );

        if (!token) {
          const redirectPath =
            window.location.pathname +
            window.location.search;

          router.replace(
            `/login?redirect=${encodeURIComponent(
              redirectPath
            )}`
          );
          return;
        }

        const response = await fetch(
          `${API.BASE_URL}${API.ENDPOINTS.PAYMENT}/enrollment/${encodeURIComponent(
            courseSlug
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Enrollment check failed");
        }

        const result =
          (await response.json()) as EnrollmentResponse;

        if (cancelled) return;

        if (result.success && result.data?.enrolled) {
          setAllowed(true);
          return;
        }

        router.replace(`/courses/${courseSlug}`);
      } catch {
        if (!cancelled) {
          router.replace(`/courses/${courseSlug}`);
        }
      } finally {
        if (!cancelled) {
          setChecking(false);
        }
      }
    }

    checkAccess();

    return () => {
      cancelled = true;
    };
  }, [courseSlug, router]);

  if (checking) {
    return (
      <main className="min-h-screen bg-[#020617] px-6 pt-28 text-white">
        <div className="mx-auto flex max-w-3xl items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/70 px-8 py-16 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-sky-400" />

            <p className="text-lg font-semibold text-slate-200">
              Checking course access...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (!allowed) {
    return null;
  }

  return <>{children}</>;
}
