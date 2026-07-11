"use client";

interface AnalyticsCardProps {
  title: string;
  value: string;
  color: string;
}

export default function AnalyticsCard({
  title,
  value,
  color,
}: AnalyticsCardProps) {
  return (
    <div className="rounded-[30px] bg-white p-6 shadow-lg">

      <div className={`h-2 w-full rounded-full ${color}`} />

      <h3 className="mt-6 text-lg font-semibold text-slate-600">
        {title}
      </h3>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        {value}
      </h2>

    </div>
  );
}