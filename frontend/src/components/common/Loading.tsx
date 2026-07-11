"use client";

import { Loader2 } from "lucide-react";

interface LoadingProps {
  text?: string;
}

export default function Loading({
  text = "Loading...",
}: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">

      <Loader2
        size={48}
        className="animate-spin text-sky-600"
      />

      <p className="mt-6 text-slate-600">
        {text}
      </p>

    </div>
  );
}