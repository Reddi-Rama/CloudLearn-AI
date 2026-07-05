"use client";

import { BadgeCheck } from "lucide-react";

export default function VerificationBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700">

      <BadgeCheck size={18} />

      Certificate Verified

    </div>
  );
}