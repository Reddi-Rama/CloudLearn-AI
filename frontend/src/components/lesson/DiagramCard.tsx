"use client";

interface DiagramCardProps {
  title: string;
  children: React.ReactNode;
}

export default function DiagramCard({
  title,
  children,
}: DiagramCardProps) {
  return (
    <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8">

      <h3 className="mb-6 text-2xl font-bold text-slate-800">
        {title}
      </h3>

      <div>
        {children}
      </div>

    </div>
  );
}