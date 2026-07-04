"use client";

import {
  Award,
  BadgeCheck,
  Download,
  ShieldCheck,
  QrCode,
} from "lucide-react";

export default function CertificatePreview() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            PROFESSIONAL CERTIFICATE
          </span>

          <h2 className="mt-6 text-5xl font-black">

            Earn an Industry Ready Certificate

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

            Successfully complete your course, pass the
            final assessment and unlock your verified
            CloudLearn Certificate.

          </p>

        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* Certificate */}

          <div className="rounded-[40px] border-[10px] border-blue-100 bg-gradient-to-br from-white via-sky-50 to-blue-50 p-10 shadow-2xl">

            <div className="text-center">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-700 text-white shadow-xl">

                <Award size={48} />

              </div>

              <h3 className="mt-8 text-5xl font-black text-slate-900">

                CloudLearn

              </h3>

              <p className="mt-2 text-blue-600 font-semibold">

                Certificate of Completion

              </p>

              <div className="my-10 h-px bg-blue-200" />

              <p className="text-slate-500">

                This Certificate is proudly presented to

              </p>

              <h2 className="mt-4 text-4xl font-black text-blue-700">

                Your Name

              </h2>

              <p className="mt-8 text-slate-600">

                for successfully completing

              </p>

              <h3 className="mt-3 text-3xl font-bold">

                Python Programming

              </h3>

              <div className="mt-12 grid grid-cols-2 gap-8 text-left">

                <div>

                  <p className="text-sm text-slate-500">

                    Certificate ID

                  </p>

                  <p className="font-bold">

                    CLD-2026-000245

                  </p>

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Date

                  </p>

                  <p className="font-bold">

                    July 2026

                  </p>

                </div>

              </div>

              <div className="mt-10 flex items-center justify-between">

                <div>

                  <p className="font-bold">

                    CloudLearn Team

                  </p>

                  <p className="text-sm text-slate-500">

                    Authorized Signature

                  </p>

                </div>

                <QrCode
                  size={70}
                  className="text-slate-700"
                />

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-4xl font-black">

              Why Get Certified?

            </h3>

            <div className="mt-10 space-y-8">

              <div className="flex gap-5">

                <BadgeCheck
                  className="text-blue-600"
                  size={30}
                />

                <div>

                  <h4 className="text-2xl font-bold">

                    Verified Certificate

                  </h4>

                  <p className="mt-2 text-slate-600">

                    Every certificate contains a unique ID
                    for verification.

                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Download
                  className="text-green-600"
                  size={30}
                />

                <div>

                  <h4 className="text-2xl font-bold">

                    Download PDF

                  </h4>

                  <p className="mt-2 text-slate-600">

                    Download your certificate anytime.

                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <ShieldCheck
                  className="text-violet-600"
                  size={30}
                />

                <div>

                  <h4 className="text-2xl font-bold">

                    Only ₹29

                  </h4>

                  <p className="mt-2 text-slate-600">

                    Unlock your professional certificate
                    after passing the final assessment.

                  </p>

                </div>

              </div>

            </div>

            <button className="mt-12 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-700 px-8 py-4 text-lg font-bold text-white transition hover:scale-105">

              View Sample Certificate

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}