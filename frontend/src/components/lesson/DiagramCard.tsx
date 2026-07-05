"use client";

import { Network } from "lucide-react";

interface DiagramCardProps {
  title: string;
  description: string;
}

export default function DiagramCard({
  title,
  description,
}: DiagramCardProps) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-blue-100 p-8 shadow">

      <Network
        size={36}
        className="text-blue-600"
      />

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}