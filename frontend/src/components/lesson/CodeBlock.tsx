"use client";

interface CodeBlockProps {
  language: string;
  code: string;
}

export default function CodeBlock({
  language,
  code,
}: CodeBlockProps) {
  return (
    <section className="overflow-hidden rounded-[30px] bg-slate-900 shadow-lg">

      <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">

        <span className="font-semibold text-white">
          {language}
        </span>

      </div>

      <pre className="overflow-x-auto p-6 text-sm text-green-400">

        <code>
          {code}
        </code>

      </pre>

    </section>
  );
}