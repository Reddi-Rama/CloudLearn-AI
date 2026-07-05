"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  language?: string;
  code: string;
}

export default function CodeBlock({
  language = "text",
  code,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-lg">

      <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">

        <span className="text-sm font-medium uppercase tracking-wide text-slate-300">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm text-white transition hover:bg-slate-700"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied" : "Copy"}
        </button>

      </div>

      <pre className="overflow-x-auto p-6 text-sm leading-7 text-green-400">
        <code>{code}</code>
      </pre>

    </div>
  );
}