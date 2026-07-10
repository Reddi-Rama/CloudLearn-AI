"use client";

import { TriangleAlert } from "lucide-react";

interface WarningBoxProps {
  children?: React.ReactNode;
}

export default function WarningBox({
  children,
}: WarningBoxProps) {
  return (
    <div className="rounded-3xl border-l-4 border-red-500 bg-red-50 p-6">

      <div className="flex items-center gap-3">

        <TriangleAlert className="text-red-600" />

        <h3 className="text-xl font-bold text-red-700">
          Important
        </h3>

      </div>

      <p className="mt-4 leading-8 text-slate-700">

        {children ||
          "Always close HTML tags correctly. Invalid HTML can cause layout issues."}

      </p>

    </div>
  );
}