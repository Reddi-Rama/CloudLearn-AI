"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Terminal,
} from "lucide-react";

interface Props {
  code: string;
  language?: string;
  output?: string;
}

export default function AIMLCodeCard({
  code,
  language = "code",
  output,
}: Props) {

  const [copied, setCopied] =
    useState(false);

  async function copyCode() {

    try {

      await navigator.clipboard.writeText(
        code
      );

      setCopied(true);

      setTimeout(
        () => setCopied(false),
        1800
      );

    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="my-8 space-y-3">

      {/* CODE */}

      <div
        className="
          overflow-hidden
          rounded-[22px]
          border
          border-slate-800
          bg-[#07111f]
          shadow-[0_12px_35px_rgba(15,23,42,0.18)]
          dark:border-slate-700
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-800
            bg-[#0d1929]
            px-4
            py-3
          "
        >

          <div className="flex items-center gap-3">

            <Terminal
              size={16}
              className="text-cyan-400"
            />

            <span
              className="
                rounded-lg
                bg-cyan-500/10
                px-2.5
                py-1
                text-[10px]
                font-black
                uppercase
                tracking-[0.16em]
                text-cyan-400
              "
            >
              {language}
            </span>

          </div>

          <button
            type="button"
            onClick={copyCode}
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-slate-700
              px-3
              py-1.5
              text-xs
              font-bold
              text-slate-300
              transition
              hover:border-cyan-500
              hover:text-cyan-400
            "
          >
            {copied ? (
              <>
                <Check size={14} />
                Copied
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy
              </>
            )}
          </button>

        </div>

        <pre
          className="
            overflow-x-auto
            px-5
            py-5
            font-mono
            text-sm
            leading-7
            text-slate-200
          "
        >
          <code>{code}</code>
        </pre>

      </div>

      {/* OUTPUT */}

      {output && (
        <div
          className="
            overflow-hidden
            rounded-[22px]
            border
            border-emerald-200
            bg-emerald-50
            shadow-sm
            dark:border-emerald-900/60
            dark:bg-emerald-950/25
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
              border-b
              border-emerald-200
              bg-emerald-100/70
              px-4
              py-3
              dark:border-emerald-900/60
              dark:bg-emerald-950/35
            "
          >

            <Terminal
              size={15}
              className="
                text-emerald-600
                dark:text-emerald-400
              "
            />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.16em]
                text-emerald-700
                dark:text-emerald-400
              "
            >
              Output
            </span>

          </div>

          <pre
            className="
              overflow-x-auto
              px-5
              py-5
              font-mono
              text-sm
              leading-7
              text-emerald-900
              dark:text-emerald-200
            "
          >
            <code>{output}</code>
          </pre>

        </div>
      )}

    </div>
  );
}