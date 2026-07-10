"use client";

import { ReactNode } from "react";
import AuthBackground from "./AuthBackground";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <AuthBackground />

      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}