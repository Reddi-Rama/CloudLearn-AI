"use client";

import { Info } from "lucide-react";

interface InfoBoxProps {
  title: string;
  description: string;
}

export default function InfoBox({
  title,
  description,
}: InfoBoxProps) {
  return (
    <div className="rounded-3xl border-l-4 border-blue-600 bg-blue-50 p-6">

      <div className="flex items-start gap-4">

        <Info
          className="mt-1 text-blue-600"
          size={22}
        />

        <div>

          <h3 className="font-bold text-blue-700">
            {title}
          </h3>

          <p className="mt-2 leading-7 text-slate-700">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}