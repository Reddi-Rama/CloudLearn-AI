"use client";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10">

      <h2 className="text-4xl font-black">

        {title}

      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-500">

          {subtitle}

        </p>
      )}

    </div>
  );
}