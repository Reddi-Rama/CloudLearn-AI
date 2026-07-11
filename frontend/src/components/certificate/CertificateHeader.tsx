"use client";

interface CertificateHeaderProps {
  title?: string;
}

export default function CertificateHeader({
  title = "CloudLearn AI Certificates",
}: CertificateHeaderProps) {
  return (
    <div className="text-center mb-12">

      <h1 className="text-5xl font-black text-slate-900">
        {title}
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Verify and manage certificates issued by CloudLearn AI.
      </p>

    </div>
  );
}