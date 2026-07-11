"use client";

import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  current: string;
}

export default function Breadcrumb({
  current,
}: BreadcrumbProps) {
  return (
    <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">

      <span>Dashboard</span>

      <ChevronRight size={16} />

      <span className="font-semibold text-slate-900">

        {current}

      </span>

    </div>
  );
}