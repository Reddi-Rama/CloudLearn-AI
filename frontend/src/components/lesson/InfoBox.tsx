"use client";

import { Info } from "lucide-react";

interface InfoBoxProps {
  title?: string;
  children?: React.ReactNode;
}

export default function InfoBox({
  title = "Did You Know?",
  children,
}: InfoBoxProps) {
  return (
    <div className="rounded-3xl border-l-4 border-sky-500 bg-sky-50 p-6">

      <div className="flex items-center gap-3">

        <Info className="text-sky-600" />

        <h3 className="text-xl font-bold text-sky-700">
          {title}
        </h3>

      </div>

      <div className="mt-4 text-slate-700 leading-8">

        {children ||
          "HTML is not a programming language. It is a markup language used to structure webpages."}

      </div>

    </div>
  );
}