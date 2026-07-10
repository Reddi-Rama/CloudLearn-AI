"use client";

import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-xl rounded-[36px] border border-slate-200 bg-white/90 p-10 shadow-2xl backdrop-blur-xl">
      {children}
    </div>
  );
}