"use client";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <div className="space-y-4 text-center">

      <h1 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">

        {title}

      </h1>

      <p className="mx-auto max-w-md text-base leading-7 text-slate-600">

        {subtitle}

      </p>

    </div>
  );
}