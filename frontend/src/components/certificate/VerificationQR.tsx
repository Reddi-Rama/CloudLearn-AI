"use client";

import { QrCode } from "lucide-react";

export default function VerificationQR() {
  return (
    <div className="flex flex-col items-center">

      <div className="rounded-3xl border border-blue-100 p-8">

        <QrCode size={120} className="text-blue-600" />

      </div>

      <p className="mt-4 text-slate-500">

        Scan to verify

      </p>

    </div>
  );
}