"use client";

interface DividerProps {
  text?: string;
}

export default function Divider({
  text = "OR",
}: DividerProps) {
  return (
    <div className="flex items-center gap-4">

      <div className="h-px flex-1 bg-slate-300" />

      <span className="text-sm text-slate-500">

        {text}

      </span>

      <div className="h-px flex-1 bg-slate-300" />

    </div>
  );
}