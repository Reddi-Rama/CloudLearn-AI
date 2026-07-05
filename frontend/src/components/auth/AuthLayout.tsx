"use client";

import { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">

      <div className="container-custom flex min-h-screen items-center justify-center py-12">

        <div className="glass-card w-full max-w-md rounded-[32px] p-10">

          <h1 className="text-center text-4xl font-bold">
            {title}
          </h1>

          <p className="mt-4 text-center text-slate-600">
            {subtitle}
          </p>

          <div className="mt-10">
            {children}
          </div>

        </div>

      </div>

    </section>
  );
}