"use client";

import CertificateCard from "./CertificateCard";
import { certificates } from "./certificateData";

export default function CertificatesGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {certificates.map((certificate) => (

        <CertificateCard
          key={certificate.id}
          course={certificate.course}
          score={certificate.score}
          issueDate={certificate.issueDate}
          credentialId={certificate.credentialId}
        />

      ))}

    </section>
  );
}