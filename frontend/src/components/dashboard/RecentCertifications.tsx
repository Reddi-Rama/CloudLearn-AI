"use client";

import Link from "next/link";
import {
  Award,
  Download,
  ExternalLink,
  CalendarDays,
} from "lucide-react";

const certificates = [
  {
    title: "Artificial Intelligence",
    issueDate: "05 July 2026",
    credential: "CLD-AI-2026-001",
  },
  {
    title: "Python Programming",
    issueDate: "28 June 2026",
    credential: "CLD-PY-2026-002",
  },
  {
    title: "Cloud Computing",
    issueDate: "18 June 2026",
    credential: "CLD-CC-2026-003",
  },
];

export default function RecentCertifications() {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-slate-900">
          Recent Certificates
        </h2>

        <Link
          href="/certificates"
          className="font-semibold text-blue-600 hover:underline"
        >
          View All
        </Link>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {certificates.map((certificate) => (

          <div
            key={certificate.credential}
            className="rounded-[32px] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="flex items-center justify-between">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">

                <Award
                  size={32}
                  className="text-yellow-600"
                />

              </div>

              <Link
                href="/certificates"
                className="rounded-xl bg-blue-50 p-3 text-blue-600 transition hover:bg-blue-100"
              >

                <ExternalLink size={20} />

              </Link>

            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {certificate.title}
            </h3>

            <div className="mt-5 flex items-center gap-3 text-slate-600">

              <CalendarDays size={18} />

              <span>
                {certificate.issueDate}
              </span>

            </div>

            <p className="mt-5 text-sm text-slate-500">
              Credential ID
            </p>

            <p className="font-semibold text-slate-800">
              {certificate.credential}
            </p>

            <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">

              <Download size={18} />

              Download Certificate

            </button>

          </div>

        ))}

      </div>

    </section>
  );
}