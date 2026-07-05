"use client";

import { CheckCircle2 } from "lucide-react";

export default function VerifiedBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-green-700">

      <CheckCircle2 size={18} />

      Verified

    </div>
  );
}