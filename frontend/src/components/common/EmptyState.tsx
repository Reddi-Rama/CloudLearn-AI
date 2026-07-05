"use client";

import Link from "next/link";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function EmptyState({
  title,
  description,
  buttonText,
  buttonHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-sky-200 bg-white/70 p-12 text-center">

      <Inbox
        size={72}
        className="text-sky-500"
      />

      <h2 className="mt-6 text-3xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="mt-4 max-w-lg text-slate-600">
        {description}
      </p>

      {buttonText && buttonHref && (
        <Link
          href={buttonHref}
          className="mt-8 rounded-full bg-sky-600 px-8 py-3 font-semibold text-white transition hover:bg-sky-700"
        >
          {buttonText}
        </Link>
      )}

    </div>
  );
}