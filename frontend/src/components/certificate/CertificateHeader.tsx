"use client";

import { Award, ShieldCheck, Download, BadgeCheck } from "lucide-react";

interface CertificateHeaderProps {
  title: string;
}

export default function CertificateHeader({
  title,
}: CertificateHeaderProps) {
  return (
    <section className="mb-16">

      <div className="text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <Award
            size={38}
            className="text-blue-600"
          />
        </div>

        <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Celebrate your learning achievements with industry-recognized
          CloudLearn AI certificates. Every certificate validates your
          knowledge, showcases your skills, and helps you build a stronger
          professional profile for internships, placements, and career
          opportunities.
        </p>

      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <ShieldCheck
            className="text-blue-600"
            size={34}
          />

          <h3 className="mt-5 text-xl font-bold">
            Verified Credentials
          </h3>

          <p className="mt-3 text-slate-600">
            Every certificate includes a unique verification ID and QR code
            to ensure authenticity.
          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <Download
            className="text-green-600"
            size={34}
          />

          <h3 className="mt-5 text-xl font-bold">
            Download Anytime
          </h3>

          <p className="mt-3 text-slate-600">
            Download high-quality PDF certificates and share them with
            employers, universities, and professional networks.
          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <BadgeCheck
            className="text-purple-600"
            size={34}
          />

          <h3 className="mt-5 text-xl font-bold">
            Career Recognition
          </h3>

          <p className="mt-3 text-slate-600">
            Showcase your achievements on LinkedIn, resumes, portfolios,
            and job applications with confidence.
          </p>

        </div>

      </div>

    </section>
  );
}