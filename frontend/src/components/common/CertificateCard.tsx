"use client";

import { Award, Calendar } from "lucide-react";
import GlassCard from "./GlassCard";

interface CertificateCardProps {
  title: string;
  issuedOn: string;
}

export default function CertificateCard({
  title,
  issuedOn,
}: CertificateCardProps) {
  return (
    <GlassCard className="p-8">

      <Award
        size={48}
        className="text-yellow-500"
      />

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <div className="mt-4 flex items-center gap-2 text-slate-600">

        <Calendar size={18} />

        {issuedOn}

      </div>

    </GlassCard>
  );
}