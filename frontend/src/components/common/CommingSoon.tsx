"use client";

import { Rocket } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description = "We're working hard to bring this feature to CloudLearn AI.",
}: ComingSoonProps) {
  return (
    <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-12 text-center shadow-lg">

      <Rocket
        size={72}
        className="mx-auto text-sky-600"
      />

      <h2 className="mt-6 text-4xl font-bold">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-slate-600">
        {description}
      </p>

    </div>
  );
}