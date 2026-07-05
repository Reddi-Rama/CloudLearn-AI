"use client";

import { Lightbulb } from "lucide-react";

interface ExampleCardProps {
  title: string;
  children: React.ReactNode;
}

export default function ExampleCard({
  title,
  children,
}: ExampleCardProps) {
  return (
    <section className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <Lightbulb
          size={26}
          className="text-yellow-600"
        />

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

      </div>

      <div className="leading-8 text-slate-700">
        {children}
      </div>

    </section>
  );
}