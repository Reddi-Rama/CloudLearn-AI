"use client";

import React from "react";

type AIMLInputOutputProps = {
  input: string[];
  output: string[];
  process?: string[];
};

function CheckItem({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "cyan" | "violet" | "pink";
}) {
  const toneClass = {
    cyan: "bg-cyan-400 text-slate-950",
    violet: "bg-violet-400 text-slate-950",
    pink: "bg-pink-400 text-slate-950",
  }[tone];

  return (
    <div className="flex items-start gap-3 text-[15px] leading-6 text-slate-200">
      <span
        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${toneClass}`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>
      </span>
      <span>{children}</span>
    </div>
  );
}

function FlowArrow() {
  return (
    <>
      <div className="hidden lg:flex items-center justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.3)]">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h13" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </div>
      </div>

      <div className="flex justify-center lg:hidden">
        <div className="flex h-10 w-10 rotate-90 items-center justify-center rounded-full bg-violet-600 text-white">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h13" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </div>
      </div>
    </>
  );
}

function InputCard({ lines }: { lines: string[] }) {
  return (
    <div className="rounded-2xl border border-cyan-400/80 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-slate-950 p-5 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/30">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-cyan-300">Input</h3>
          <p className="mt-1 text-sm text-slate-300">
            Data provided to the machine learning system
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-cyan-400/30 bg-slate-950/70 p-4">
        <div className="space-y-3">
          {lines.map((line, index) => (
            <CheckItem key={`input-${index}`} tone="cyan">
              {line}
            </CheckItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessCard({ lines }: { lines: string[] }) {
  return (
    <div className="rounded-2xl border border-violet-400/80 bg-gradient-to-br from-violet-500/10 via-slate-900/80 to-slate-950 p-5 shadow-[0_0_30px_rgba(139,92,246,0.08)]">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300 ring-1 ring-violet-400/30">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            <path d="m4.93 4.93 3.54 3.54M15.53 15.53l3.54 3.54" />
            <path d="m4.93 19.07 3.54-3.54M15.53 8.47l3.54-3.54" />
          </svg>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-violet-300">
            Model / Process
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            How the model processes the input
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-violet-400/30 bg-slate-950/70 p-4">
        <div className="space-y-3">
          {lines.map((line, index) => (
            <CheckItem key={`process-${index}`} tone="violet">
              {line}
            </CheckItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function OutputCard({ lines }: { lines: string[] }) {
  return (
    <div className="rounded-2xl border border-pink-400/80 bg-gradient-to-br from-pink-500/10 via-slate-900/80 to-slate-950 p-5 shadow-[0_0_30px_rgba(236,72,153,0.08)]">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-300 ring-1 ring-pink-400/30">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 4V2M12 22v-2M20 12h2M2 12h2" />
          </svg>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-pink-300">Output</h3>
          <p className="mt-1 text-sm text-slate-300">
            Prediction or result produced by the model
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-pink-400/30 bg-slate-950/70 p-4">
        <div className="space-y-3">
          {lines.map((line, index) => (
            <CheckItem key={`output-${index}`} tone="pink">
              {line}
            </CheckItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AIMLInputOutput({
  input,
  output,
  process = [],
}: AIMLInputOutputProps) {
  const hasProcess = process.length > 0;

  return (
    <section className="my-8 w-full">
      <div
        className={
          hasProcess
            ? "grid grid-cols-1 gap-5"
            : "grid grid-cols-1 items-center gap-5 lg:grid-cols-[1fr_auto_1fr]"
        }
      >
        <InputCard lines={input} />

        <FlowArrow />

        {hasProcess && <ProcessCard lines={process} />}

        {hasProcess && <FlowArrow />}

        <OutputCard lines={output} />
      </div>
    </section>
  );
}
