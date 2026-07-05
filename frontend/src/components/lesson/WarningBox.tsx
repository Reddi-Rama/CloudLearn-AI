"use client";

import { TriangleAlert } from "lucide-react";

interface WarningBoxProps {
  warning: string;
}

export default function WarningBox({
  warning,
}: WarningBoxProps) {
  return (
    <div className="rounded-3xl border-l-4 border-red-500 bg-red-50 p-6">

      <div className="flex items-start gap-4">

        <TriangleAlert
          className="mt-1 text-red-600"
          size={22}
        />

        <div>

          <h3 className="font-bold text-red-700">
            Common Mistake
          </h3>

          <p className="mt-2 leading-7 text-slate-700">
            {warning}
          </p>

        </div>

      </div>

    </div>
  );
}