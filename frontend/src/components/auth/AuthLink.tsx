"use client";

import Link from "next/link";

interface AuthLinkProps {
  href: string;
  text: string;
}

export default function AuthLink({
  href,
  text,
}: AuthLinkProps) {
  return (
    <Link
      href={href}
      className="font-semibold text-sky-600 hover:text-sky-700"
    >
      {text}
    </Link>
  );
}