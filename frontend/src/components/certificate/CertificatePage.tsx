"use client";

import CertificateHeader from "./CertificateHeader";
import CertificatesGrid from "./CertificatesGrid";

export default function CertificatesPage() {
  return (
    <div className="space-y-10">

      <div className="rounded-[32px] bg-gradient-to-r from-sky-600 via-indigo-600 to-cyan-500 p-10 text-white shadow-xl">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm">

          Achievement Center

        </span>

        <h1 className="mt-6 text-5xl font-black">

          My Certificates

        </h1>

        <p className="mt-4 max-w-2xl text-lg text-sky-100">

          View, download and verify all certificates
          earned from CloudLearn AI courses.

        </p>

      </div>

      <CertificateHeader />

      <CertificatesGrid />

    </div>
  );
}