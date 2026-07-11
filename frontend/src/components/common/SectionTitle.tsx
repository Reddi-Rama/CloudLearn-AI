"use client";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      {badge && (
        <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-5xl font-bold text-slate-800">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}

    </div>
  );
}