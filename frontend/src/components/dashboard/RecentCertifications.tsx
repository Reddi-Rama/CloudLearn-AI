"use client";

import {
  Award,
  Download,
  BadgeCheck,
} from "lucide-react";

const certificates = [
  {
    course: "Python Programming",
    date: "12 Jul 2026",
  },
  {
    course: "C Programming",
    date: "25 Jun 2026",
  },
];

export default function RecentCertificates() {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg border">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-2xl font-bold">

          Recent Certificates

        </h2>

        <Award className="text-yellow-500"/>

      </div>

      <div className="space-y-5">

        {certificates.map((certificate) => (

          <div
            key={certificate.course}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-5"
          >

            <div>

              <h3 className="font-bold">

                {certificate.course}

              </h3>

              <p className="text-sm text-slate-500 mt-1">

                Issued on {certificate.date}

              </p>

            </div>

            <div className="flex gap-3">

              <button className="rounded-xl bg-green-100 p-3">

                <BadgeCheck
                  className="text-green-600"
                  size={20}
                />

              </button>

              <button className="rounded-xl bg-blue-100 p-3">

                <Download
                  className="text-blue-600"
                  size={20}
                />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}