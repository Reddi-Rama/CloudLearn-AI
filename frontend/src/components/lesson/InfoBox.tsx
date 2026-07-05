"use client";

import { Info } from "lucide-react";

interface InfoBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function InfoBox({
  title = "Information",
  children,
}: InfoBoxProps) {
  return (
    <div className="my-8 rounded-3xl border-l-4 border-sky-500 bg-sky-50 p-6">

      <div className="mb-4 flex items-center gap-3">

        <Info
          size={22}
          className="text-sky-600"
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