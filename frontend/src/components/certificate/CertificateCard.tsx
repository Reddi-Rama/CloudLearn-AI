"use client";

import { Award } from "lucide-react";

interface CertificateCardProps {
  courseName: string;
  issueDate: string;
  credentialId: string;
}

export default function CertificateCard({
  courseName,
  issueDate,
  credentialId,
}: CertificateCardProps) {
  return (
    <div className="glass-card rounded-3xl p-8">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-blue-100 p-4">

          <Award className="text-blue-600" size={30} />

        </div>

        <div>

          <h2 className="text-2xl font-bold">

            {courseName}

          </h2>

          <p className="text-slate-500">

            Issued: {issueDate}

          </p>

        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-5">

        <p className="text-sm text-slate-500">

          Credential ID

        </p>

        <h3 className="mt-2 font-mono text-lg font-bold">

          {credentialId}

        </h3>

      </div>

    </div>
  );
}