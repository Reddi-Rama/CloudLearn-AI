"use client";

import CertificatePreview from "./CertificatePreview";

export default function CertificateViewer() {
  return (
    <section className="section">

      <div className="container-custom">

        <div className="glass-card rounded-[40px] p-10">

          <CertificatePreview />

        </div>

      </div>

    </section>
  );
}