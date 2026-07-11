"use client";

import CertificateCard from "./CertificateCard";

export default function CertificatePreview() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Certificates
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Earn Industry Certificates
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Complete assessments and showcase verified
            certificates in your professional portfolio.
          </p>

        </div>

        <div className="mt-16 flex justify-center">

          <CertificateCard
            title="Cloud Computing Professional"
          />

        </div>

      </div>

    </section>
  );
}