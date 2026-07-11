"use client";

interface VerificationResultProps {
  verified: boolean;
}

export default function VerificationResult({
  verified,
}: VerificationResultProps) {
  return (
    <div className="glass-card rounded-3xl p-8 text-center">

      <h2 className="text-3xl font-bold">

        {verified ? "Certificate Verified" : "Certificate Not Found"}

      </h2>

    </div>
  );
}