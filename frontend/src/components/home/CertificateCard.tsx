"use client";

import { Award, BadgeCheck } from "lucide-react";

interface CertificateCardProps {
  title: string;
}

export default function CertificateCard({
  title,
}: CertificateCardProps) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

      <Award
        size={60}
        className="text-yellow-500"
      />

      <h3 className="mt-6 text-3xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600">
        Successfully completed with distinction.
      </p>

      <div className="mt-8 flex items-center gap-3">

        <BadgeCheck className="text-emerald-500" />

        Verified Certificate

      </div>

    </div>
  );
}