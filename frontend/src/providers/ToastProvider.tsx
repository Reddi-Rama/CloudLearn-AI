"use client";

import { ReactNode } from "react";

export default function ToastProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}