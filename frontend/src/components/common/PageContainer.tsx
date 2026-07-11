"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageContainer({
  children,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      {children}
    </section>
  );
}