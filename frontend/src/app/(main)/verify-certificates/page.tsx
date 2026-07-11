import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  CertificateHeader,
  CertificatePreview,
  CertificateActions,
  CertificateFooter,
} from "@/components/certificate";

export default function CertificatesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F8FAFC] pt-36 pb-24">

        <div className="mx-auto max-w-6xl px-6">

          <CertificateHeader
            title="CloudLearn AI Certificates"
          />

          <div className="mt-14">
            <CertificatePreview />
          </div>

          <div className="mt-10">
            <CertificateActions />
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}