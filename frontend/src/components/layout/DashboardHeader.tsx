"use client";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

export default function DashboardHeader({
  title,
  subtitle,
}: DashboardHeaderProps) {
  return (
    <section className="mb-10">

      <h1 className="text-4xl font-black text-slate-900">

        {title}

      </h1>

      <p className="mt-2 text-slate-600">

        {subtitle}

      </p>

    </section>
  );
}