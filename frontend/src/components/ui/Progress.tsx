"use client";

interface Props {
  value: number;
}

export default function Progress({
  value,
}: Props) {
  return (
    <div className="h-3 overflow-hidden rounded-full bg-slate-200">

      <div
        style={{ width: `${value}%` }}
        className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
      />

    </div>
  );
}