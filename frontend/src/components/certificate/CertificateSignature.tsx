"use client";

interface CertificateSignatureProps {
  signer: string;
  designation: string;
}

export default function CertificateSignature({
  signer,
  designation,
}: CertificateSignatureProps) {
  return (
    <div className="text-center">

      <div className="mx-auto mb-4 h-px w-48 bg-slate-400" />

      <h3 className="text-xl font-semibold">

        {signer}

      </h3>

      <p className="text-slate-500">

        {designation}

      </p>

    </div>
  );
}