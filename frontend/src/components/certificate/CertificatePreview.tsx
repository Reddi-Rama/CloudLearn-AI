"use client";

import CertificateDetails from "./CertificateDetails";
import CertificateSeal from "./CertificateSeal";
import CertificateSignature from "./CertificateSignature";
import CredentialID from "./CredentialID";
import CertificateFooter from "./CertificateFooter";

export default function CertificatePreview() {
  return (
    <div className="mx-auto max-w-5xl rounded-[40px] border-[10px] border-blue-100 bg-white p-12 shadow-xl">

      {/* Certificate Title */}

      <div className="text-center">

        <h2 className="text-5xl font-bold text-slate-900">
          Certificate of Completion
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          This certificate is proudly awarded to
        </p>

      </div>

      {/* Student Details */}

      <div className="mt-12">

        <CertificateDetails
          studentName="John Doe"
          courseName="Artificial Intelligence"
          issueDate="05 July 2026"
          certificateId="CLD-2026-AI-001245"
        />

      </div>

      {/* Signature & Seal */}

      <div className="mt-12 flex flex-col items-center justify-between gap-10 lg:flex-row">

        <CertificateSignature
          signer="CloudLearn AI"
          designation="Founder & CEO"
        />

        <CertificateSeal />

      </div>

      {/* Certificate ID */}

      <div className="mt-10">

        <CredentialID id="CLD-2026-AI-001245" />

      </div>

      {/* Footer */}

      <CertificateFooter />

    </div>
  );
}