"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Item {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Item[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm">

      {items.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center gap-2"
        >
          {item.href ? (
            <Link
              href={item.href}
              className="text-sky-600 hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-slate-700">
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <ChevronRight
              size={16}
              className="text-slate-400"
            />
          )}
        </div>
      ))}

    </nav>
  );
}