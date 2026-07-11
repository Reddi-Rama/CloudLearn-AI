"use client";

interface PartnerCardProps {
  name: string;
}

export default function PartnerCard({
  name,
}: PartnerCardProps) {
  return (
    <div className="flex h-28 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-xl font-bold text-slate-700">
        {name}
      </h3>
    </div>
  );
}