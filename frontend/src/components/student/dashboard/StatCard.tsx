"use client";

interface StatCardProps {
  title: string;
  value: string;
  color: string;
}

export default function StatCard({
  title,
  value,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-[28px] bg-white p-8 shadow-lg">

      <p className="text-slate-500">
        {title}
      </p>

      <h2
        className={`mt-4 text-5xl font-black ${color}`}
      >
        {value}
      </h2>

    </div>
  );
}