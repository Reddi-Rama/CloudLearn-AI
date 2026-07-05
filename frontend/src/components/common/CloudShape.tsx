"use client";

import { ReactNode } from "react";
import GlassCard from "./GlassCard";

interface CloudShapeProps {
  children: ReactNode;
  className?: string;
}

export default function CloudShape({
  children,
  className = "",
}: CloudShapeProps) {
  return (
    <GlassCard
      className={`
        relative
        overflow-hidden
        rounded-[45%]
        p-8
        ${className}
      `}
    >
      {/* Decorative Clouds */}

      <div className="absolute -top-5 left-10 h-12 w-12 rounded-full bg-white/40" />
      <div className="absolute -top-2 left-20 h-16 w-16 rounded-full bg-white/30" />
      <div className="absolute -top-4 right-12 h-10 w-10 rounded-full bg-white/40" />

      <div className="relative z-10">

        {children}

      </div>

    </GlassCard>
  );
}