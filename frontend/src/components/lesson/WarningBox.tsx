"use client";

import { TriangleAlert } from "lucide-react";

interface WarningBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function WarningBox({
  title = "Common Mistake",
  children,
}: WarningBoxProps) {
  return (
    <div className="my-8 rounded-3xl border-l-4 border-amber-500 bg-amber-50 p-6">

      <div className="mb-4 flex items-center gap-3">

        <TriangleAlert
          size={22}
          className="text-amber-600"
        />

        <h3 className="text-lg font-semibold">

          {title}

        </h3>

      </div>

      <div className="leading-8 text-slate-700">

        {children}

      </div>

    </div>
  );
}