"use client";

import Image from "next/image";

interface DiagramProps {
  src: string;
  title: string;
  description?: string;
}

export default function Diagram({
  src,
  title,
  description,
}: DiagramProps) {
  return (
    <section className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-slate-600">
          {description}
        </p>
      )}

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="h-auto w-full object-contain"
        />

      </div>

    </section>
  );
}