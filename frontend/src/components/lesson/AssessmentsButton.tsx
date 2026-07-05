"use client";

import Link from "next/link";
import { ClipboardCheck } from "lucide-react";

interface AssessmentsButtonProps {
  href?: string;
}

export default function AssessmentsButton({
  href = "/assessment",
}: AssessmentsButtonProps) {
  return (
    <div className="flex justify-center">

      <Link
        href={href}
        className="flex items-center gap-3 rounded-full bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700"
      >
        <ClipboardCheck size={20} />

        Go to Assessment

      </Link>

    </div>
  );
}