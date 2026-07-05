"use client";

import { ReactNode } from "react";

interface LessonContentProps {
  title?: string;
  children: ReactNode;
}

export default function LessonContent({
  title,
  children,
}: LessonContentProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

      {title && (
        <h2 className="mb-8 text-4xl font-bold text-slate-800">
          {title}
        </h2>
      )}

      <div
        className="
          prose
          prose-slate
          max-w-none
          prose-headings:font-bold
          prose-headings:text-slate-800
          prose-p:leading-8
          prose-p:text-slate-700
          prose-li:leading-8
          prose-strong:text-slate-900
        "
      >
        {children}
      </div>

    </section>
  );
}