"use client";

interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14 text-center">

      <h1 className="text-5xl font-bold text-slate-800">

        {title}

      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">

        {subtitle}

      </p>

    </div>
  );
}