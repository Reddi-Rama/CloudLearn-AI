"use client";

import { ReactNode } from "react";

interface ProgrammingLayoutProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

export default function ProgrammingLayout({
  left,
  center,
  right,
}: ProgrammingLayoutProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[320px_1fr_350px]">

      <aside>{left}</aside>

      <main>{center}</main>

      <aside>{right}</aside>

    </div>
  );
}