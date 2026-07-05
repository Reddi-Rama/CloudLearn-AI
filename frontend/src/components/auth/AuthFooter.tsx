"use client";

import Link from "next/link";

interface AuthFooterProps {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthFooter({
  text,
  linkText,
  href,
}: AuthFooterProps) {
  return (
    <p className="mt-8 text-center text-slate-600">

      {text}{" "}

      <Link
        href={href}
        className="font-semibold text-blue-600"
      >
        {linkText}
      </Link>

    </p>
  );
}