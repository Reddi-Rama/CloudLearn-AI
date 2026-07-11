"use client";

import Link from "next/link";

export default function TermsCheckbox() {
  return (
    <label className="flex items-start gap-3">

      <input
        type="checkbox"
        className="mt-1 h-4 w-4"
      />

      <span className="text-sm text-slate-600">

        I agree to the

        <Link
          href="/terms"
          className="mx-1 font-semibold text-sky-600"
        >
          Terms
        </Link>

        and

        <Link
          href="/privacy"
          className="ml-1 font-semibold text-sky-600"
        >
          Privacy Policy
        </Link>

      </span>

    </label>
  );
}