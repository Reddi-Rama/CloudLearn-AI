"use client";

import { ReactNode } from "react";
import GlassCard from "./GlassCard";

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function StatCard({
  icon,
  title,
  value,
}: Props) {
  return (
    <GlassCard className="p-8 text-center">

      <div className="flex justify-center">

        {icon}

      </div>

      <h2 className="mt-5 text-4xl font-bold">

        {value}

      </h2>

      <p className="mt-3 text-slate-600">

        {title}

      </p>

    </GlassCard>
  );
}