"use client";

import {
  Award,
  BadgeCheck,
  Calendar,
  Download,
  QrCode,
} from "lucide-react";

export default function CertificateViewer() {
  return (
    <section className="grid gap-12 lg:grid-cols-2">

      {/* Certificate */}

      <div className="rounded-[40px] border-[12px] border-yellow-300 bg-white p-12 shadow-2xl">

        <div className="text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
            <Award size={48} />
          </div>

          <h1 className="mt-8 text-5xl font-black text-slate-900">
            CloudLearn
          </h1>

          <p className="mt-2 text-blue-600 font-semibold">
            Certificate of Completion
          </p>

          <div className="my-10 h-px bg-slate-300"></div>

          <p className="text-slate-500">
            This certificate is proudly presented to
          </p>

          <h2 className="mt-5 text-4xl font-black text-sky-600">
            Reddi Rama
          </h2>

          <p className="mt-8 text-slate-500">
            for successfully completing
          </p>

          <h3 className="mt-4 text-3xl font-bold">
            Python Programming
          </h3>

          <div className="mt-12 grid grid-cols-2 gap-8">

            <div>
              <p className="text-sm text-slate-500">
                Certificate ID
              </p>

              <h4 className="font-bold">
                CLD-2026-001254
              </h4>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Issue Date
              </p>

              <h4 className="font-bold">
                12 July 2026
              </h4>
            </div>

          </div>

          <div className="mt-12 flex items-center justify-between">

            <div>

              <p className="font-bold">
                CloudLearn Team
              </p>

              <p className="text-sm text-slate-500">
                Authorized Signature
              </p>

            </div>

            <QrCode
              size={80}
              className="text-slate-700"
            />

          </div>

        </div>

      </div>

      {/* Right */}

      <div>

        <h2 className="text-5xl font-black">
          Your Certificate
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">

          Your certificate is permanently stored and can be
          downloaded anytime.

        </p>

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg">

            <BadgeCheck className="text-green-500"/>

            <div>

              <h3 className="font-bold">
                Verified Certificate
              </h3>

              <p className="text-slate-500">
                Public verification available.
              </p>

            </div>

          </div>

          <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-lg">

            <Calendar className="text-sky-500"/>

            <div>

              <h3 className="font-bold">
                Lifetime Access
              </h3>

              <p className="text-slate-500">
                Download anytime.
              </p>

            </div>

          </div>

        </div>

        <button className="mt-12 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-10 py-5 text-white font-bold shadow-xl">

          <Download />

          Download Certificate

        </button>

      </div>

    </section>
  );
}