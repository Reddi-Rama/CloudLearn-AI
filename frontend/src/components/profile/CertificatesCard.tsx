"use client";

interface CertificatesCardProps {
  totalCertificates: number;
}

export default function CertificatesCard({
  totalCertificates,
}: CertificatesCardProps) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-900">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Certificates
      </h2>

      <p className="mt-3 text-3xl font-black text-blue-600 dark:text-blue-400">
        {totalCertificates}
      </p>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Certificates earned
      </p>
    </section>
  );
}
