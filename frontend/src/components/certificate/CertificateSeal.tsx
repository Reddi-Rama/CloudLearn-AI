"use client";

import { ShieldCheck } from "lucide-react";

export default function CertificateSeal() {
  return (
    <div className="flex flex-col items-center">

      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-600">

        <ShieldCheck
          size={45}
          className="text-blue-600"
        />

      </div>

      <p className="mt-3 text-sm font-medium">

        Verified Certificate

      </p>

    </div>
  );
}