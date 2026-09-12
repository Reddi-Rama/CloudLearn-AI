"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  BadgeCheck,
  CalendarDays,
  GraduationCap,
  ShieldCheck,
  XCircle,
  Loader2,
  FileBadge,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { API, apiGet } from "@/lib/api";

interface VerificationResult {
  valid: boolean;
  certificateId: string;
  studentName: string;
  courseSlug: string;
  courseTitle: string;
  issuedAt: string;
}

export default function VerifyCertificatePage() {
  const searchParams =
    useSearchParams();

  const certificateId =
    searchParams.get(
      "certificateId"
    )?.trim() || "";

  const [result, setResult] =
    useState<VerificationResult | null>(
      null
    );

  const [loading, setLoading] =
    useState(
      Boolean(certificateId)
    );

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (!certificateId) {
      setLoading(false);
      return;
    }

    async function verify() {
      try {
        setLoading(true);
        setError("");

        const response =
          await apiGet<{
            success: boolean;
            message: string;
            data?: VerificationResult;
          }>(
            `${API.BASE_URL}${API.ENDPOINTS.CERTIFICATES}/verify/${encodeURIComponent(
              certificateId
            )}`
          );

        if (
          !response.success ||
          !response.data
        ) {
          throw new Error(
            response.message ||
              "Certificate could not be verified."
          );
        }

        setResult(response.data);
      } catch (verificationError) {
        setResult(null);

        setError(
          verificationError instanceof Error
            ? verificationError.message
            : "Certificate could not be verified."
        );
      } finally {
        setLoading(false);
      }
    }

    verify();
  }, [certificateId]);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-36">
        <div className="mx-auto max-w-5xl">

          <div className="mb-10 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 shadow-xl">
              <ShieldCheck
                size={34}
                className="text-white"
              />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-sky-400">
              CloudLearn Verification
            </p>

            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              Verify Certificate
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Confirm the authenticity of a CloudLearn
              certificate using its unique certificate ID.
            </p>

          </div>

          {!certificateId && (
            <section className="rounded-[32px] border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">

              <FileBadge
                size={48}
                className="mx-auto text-slate-500"
              />

              <h2 className="mt-5 text-2xl font-bold text-white">
                Certificate ID Required
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-slate-400">
                Scan the QR code on a CloudLearn certificate
                or open a verification link containing a
                certificate ID.
              </p>

            </section>
          )}

          {loading && (
            <section className="rounded-[32px] border border-slate-800 bg-slate-900 p-12 text-center shadow-2xl">

              <Loader2
                size={46}
                className="mx-auto animate-spin text-sky-400"
              />

              <h2 className="mt-5 text-xl font-bold text-white">
                Verifying certificate...
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Checking the CloudLearn certificate database.
              </p>

            </section>
          )}

          {!loading && error && (
            <section className="overflow-hidden rounded-[32px] border border-red-900 bg-slate-900 shadow-2xl">

              <div className="bg-red-950/40 px-8 py-10 text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-600">
                  <XCircle
                    size={42}
                    className="text-white"
                  />
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-red-400">
                  Verification Failed
                </p>

                <h2 className="mt-2 text-3xl font-black text-white">
                  Invalid Certificate
                </h2>

                <p className="mt-3 text-slate-400">
                  {error}
                </p>

                <div className="mx-auto mt-6 max-w-lg rounded-xl border border-red-900 bg-red-950/30 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Certificate ID
                  </p>

                  <p className="mt-2 break-all font-mono text-sm font-bold text-white">
                    {certificateId}
                  </p>
                </div>

              </div>

            </section>
          )}

          {!loading && !error && result && (
            <section className="overflow-hidden rounded-[32px] border border-slate-700 bg-white shadow-2xl">

              <div className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 px-8 py-10 text-center text-white">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 ring-8 ring-white/10">
                  <BadgeCheck
                    size={48}
                    className="text-white"
                  />
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em]">
                  Authentic CloudLearn Credential
                </p>

                <h2 className="mt-2 text-4xl font-black">
                  Certificate Verified
                </h2>

                <p className="mt-3 text-blue-100">
                  This certificate exists in the official
                  CloudLearn verification database.
                </p>

              </div>

              <div className="p-8 sm:p-10">

                <div className="grid gap-6 md:grid-cols-2">

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                        <GraduationCap size={22} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Learner
                        </p>

                        <p className="mt-1 text-xl font-black text-slate-900">
                          {result.studentName}
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                        <FileBadge size={22} />
                      </div>

                      <div className="min-w-0">

                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Course
                        </p>

                        <p className="mt-1 text-xl font-black text-slate-900">
                          {result.courseTitle}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">

                  <div className="rounded-2xl border border-slate-200 bg-white p-6">

                    <div className="flex items-center gap-3">

                      <CalendarDays
                        size={21}
                        className="text-sky-600"
                      />

                      <div>

                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Issued On
                        </p>

                        <p className="mt-1 font-bold text-slate-900">
                          {new Date(
                            result.issuedAt
                          ).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6">

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Certificate ID
                    </p>

                    <p className="mt-2 break-all font-mono text-sm font-black text-slate-900">
                      {result.certificateId}
                    </p>

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-center">

                  <p className="text-sm font-bold text-green-700">
                    ✓ Verified by CloudLearn
                  </p>

                  <p className="mt-1 text-sm text-green-700/80">
                    This credential was issued by CloudLearn
                    and is registered in its certificate database.
                  </p>

                </div>

                <div className="mt-8 text-center">

                  <p className="text-sm font-bold text-slate-900">
                    CloudLearn
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    LEARN • BUILD • GROW
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    www.cloudlearn.com
                  </p>

                </div>

              </div>

            </section>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
