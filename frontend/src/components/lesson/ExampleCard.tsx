"use client";

import { Lightbulb } from "lucide-react";

interface ExampleCardProps {
  title: string;
  example: string;
}

export default function ExampleCard({
  title,
  example,
}: ExampleCardProps) {
  return (
    <section className="rounded-[30px] border-l-4 border-yellow-500 bg-yellow-50 p-8 shadow">

      <div className="flex items-center gap-3">

        <Lightbulb
          size={24}
          className="text-yellow-600"
        />

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

      </div>

      <p className="mt-5 leading-8 text-slate-700">
        {example}
      </p>

    </section>
  );
}