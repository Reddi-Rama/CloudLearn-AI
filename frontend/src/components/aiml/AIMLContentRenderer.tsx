"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronRight,
  Copy,
  Maximize2,
  Lightbulb,
  Code2,
  Play,
  GitBranch,
  Info,
  Star,
  BookOpen,
} from "lucide-react";

type RendererProps = {
  content: unknown;
};

type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullet"; text: string }
  | { type: "number"; text: string }
  | { type: "divider" }
  | { type: "code"; language: string; code: string }
  | { type: "output"; text: string }
  | { type: "example"; text: string }
  | { type: "concept"; text: string }
  | { type: "special"; title: string; text: string; kind: string }
  | { type: "formula"; text: string }
  | { type: "flow"; steps: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

function cleanText(value: unknown): string {
  if (value === null || value === undefined) return "";

  return String(value)
    .replace(/\\\[/g, "")
    .replace(/\\\]/g, "")
    .replace(/\\\\/g, "\\")
    .replace(/\\\|/g, "|")
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/^---+\s*$/gm, "")
    .trim();
}

function inline(text: string) {
  const parts = text.split(
    /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g
  );

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded-md border border-sky-200 bg-sky-50 px-1.5 py-0.5 font-mono text-[0.9em] text-sky-700 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={index}
          className="font-bold text-zinc-950 dark:text-white"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em
          key={index}
          className="italic text-zinc-600 dark:text-zinc-300"
        >
          {part.slice(1, -1)}
        </em>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function getContentString(content: unknown): string {
  if (typeof content === "string") {
    return cleanText(content);
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => {
        if (typeof item === "string") return item;

        if (item && typeof item === "object") {
          const obj = item as Record<string, unknown>;

          return cleanText(
            obj.content ??
              obj.text ??
              obj.description ??
              obj.body ??
              ""
          );
        }

        return "";
      })
      .filter(Boolean)
      .join("\n\n");
  }

  if (content && typeof content === "object") {
    const obj = content as Record<string, unknown>;

    if (typeof obj.content === "string") {
      return cleanText(obj.content);
    }

    if (Array.isArray(obj.content)) {
      return getContentString(obj.content);
    }

    for (const key of [
      "body",
      "text",
      "description",
      "lessonContent",
    ]) {
      if (typeof obj[key] === "string") {
        return cleanText(obj[key]);
      }
    }

    return Object.entries(obj)
      .map(([key, value]) => {
        if (typeof value === "string") {
          return `${key}\n${value}`;
        }

        if (Array.isArray(value)) {
          return getContentString(value);
        }

        return "";
      })
      .filter(Boolean)
      .join("\n\n");
  }

  return "";
}

function normalizeLines(raw: string): string[] {
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd());
}

function isTableSeparator(line: string) {
  return /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(
    line
  );
}

function splitTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function looksLikeFlow(lines: string[]) {
  const usable = lines.filter(Boolean);

  if (usable.length < 2 || usable.length > 12) return false;

  return usable.some(
    (line) =>
      line.includes("→") ||
      line.includes("->") ||
      line.includes("⇒") ||
      line.includes("↓")
  );
}

function flowSteps(lines: string[]) {
  const joined = lines
    .join(" ")
    .replace(/→/g, "|")
    .replace(/->/g, "|")
    .replace(/⇒/g, "|")
    .replace(/↓/g, "|");

  return joined
    .split("|")
    .map((step) => step.trim())
    .filter(Boolean);
}

function parseBlocks(raw: string): Block[] {
  const lines = normalizeLines(raw);
  const blocks: Block[] = [];

  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    /* HEADINGS */
    if (/^#{1,6}\s+/.test(line)) {
      const match = line.match(/^(#{1,6})\s+(.*)$/);

      if (match) {
        blocks.push({
          type: "heading",
          level: match[1].length,
          text: match[2].replace(/^#+\s*/, "").trim(),
        });
      }

      i++;
      continue;
    }

    /* DIVIDER */
    if (/^---+$/.test(line) || /^\*\*\*+$/.test(line)) {
      i++;
      continue;
    }

    /* CODE */
    if (/^```/.test(line)) {
      const language =
        line.replace(/^```/, "").trim() || "text";

      const codeLines: string[] = [];
      i++;

      while (
        i < lines.length &&
        !lines[i].trim().startsWith("```")
      ) {
        codeLines.push(lines[i]);
        i++;
      }

      if (i < lines.length) i++;

      if (
        ["flow", "flowchart", "process"].includes(
          language.toLowerCase()
        ) ||
        looksLikeFlow(codeLines)
      ) {
        blocks.push({
          type: "flow",
          steps: flowSteps(codeLines),
        });
      } else {
        blocks.push({
          type: "code",
          language,
          code: codeLines.join("\n"),
        });
      }

      continue;
    }

    /* OUTPUT */
    if (
      /^Output\s*:/i.test(line) ||
      /^Expected Output\s*:/i.test(line) ||
      /^Output$/i.test(line)
    ) {
      const first = line
        .replace(/^Expected Output\s*:/i, "")
        .replace(/^Output\s*:/i, "")
        .trim();

      const outputLines = first ? [first] : [];

      i++;

      while (
        i < lines.length &&
        lines[i].trim() &&
        !/^#{1,6}\s+/.test(lines[i]) &&
        !/^```/.test(lines[i]) &&
        !/^Example\s*:/i.test(lines[i]) &&
        !/^Key Concept\s*:/i.test(lines[i]) &&
        !/^Definition\s*:/i.test(lines[i]) &&
        !/^Note\s*:/i.test(lines[i])
      ) {
        outputLines.push(lines[i]);
        i++;
      }

      const output = outputLines.join("\n").trim();

      if (output) {
        blocks.push({
          type: "output",
          text: output,
        });
      }

      continue;
    }

    /* EXAMPLE */
    if (
      /^Example\s*:/i.test(line) ||
      /^Example$/i.test(line)
    ) {
      const first = line
        .replace(/^Example\s*:/i, "")
        .trim();

      const exampleLines = first ? [first] : [];

      i++;

      while (
        i < lines.length &&
        lines[i].trim() &&
        !/^#{1,6}\s+/.test(lines[i]) &&
        !/^```/.test(lines[i]) &&
        !/^Output\s*:/i.test(lines[i]) &&
        !/^Definition\s*:/i.test(lines[i]) &&
        !/^Key Concept\s*:/i.test(lines[i]) &&
        !/^Important\s*:/i.test(lines[i]) &&
        !/^Note\s*:/i.test(lines[i])
      ) {
        exampleLines.push(lines[i]);
        i++;
      }

      blocks.push({
        type: "example",
        text: exampleLines.join("\n"),
      });

      continue;
    }

    /* DEFINITION */
    if (/^Definition\s*:/i.test(line)) {
      blocks.push({
        type: "special",
        title: "Definition",
        text: line.replace(/^Definition\s*:/i, "").trim(),
        kind: "definition",
      });

      i++;
      continue;
    }

    /* KEY CONCEPT */
    if (
      /^Key Concept\s*:/i.test(line) ||
      /^Key Concepts?\s*:/i.test(line)
    ) {
      blocks.push({
        type: "concept",
        text: line
          .replace(/^Key Concepts?\s*:/i, "")
          .trim(),
      });

      i++;
      continue;
    }

    /* IMPORTANT */
    if (/^Important\s*:/i.test(line)) {
      blocks.push({
        type: "special",
        title: "Important",
        text: line.replace(/^Important\s*:/i, "").trim(),
        kind: "important",
      });

      i++;
      continue;
    }

    /* NOTE */
    if (/^Note\s*:/i.test(line)) {
      blocks.push({
        type: "special",
        title: "Note",
        text: line.replace(/^Note\s*:/i, "").trim(),
        kind: "note",
      });

      i++;
      continue;
    }

    /* REMEMBER */
    if (/^Remember\s*:/i.test(line)) {
      blocks.push({
        type: "special",
        title: "Remember",
        text: line.replace(/^Remember\s*:/i, "").trim(),
        kind: "remember",
      });

      i++;
      continue;
    }

    /* FORMULA */
    if (
      /^Formula\s*:/i.test(line) ||
      /^Mathematical Form/i.test(line)
    ) {
      blocks.push({
        type: "formula",
        text: line
          .replace(/^Formula\s*:/i, "")
          .trim(),
      });

      i++;
      continue;
    }

    /* TABLE */
    if (
      line.startsWith("|") &&
      i + 1 < lines.length &&
      isTableSeparator(lines[i + 1])
    ) {
      const headers = splitTableRow(line);
      const rows: string[][] = [];

      i += 2;

      while (
        i < lines.length &&
        lines[i].trim() &&
        lines[i].includes("|")
      ) {
        rows.push(splitTableRow(lines[i]));
        i++;
      }

      blocks.push({
        type: "table",
        headers,
        rows,
      });

      continue;
    }

    /* BULLET */
    if (/^[-•]\s+/.test(line)) {
      blocks.push({
        type: "bullet",
        text: line.replace(/^[-•]\s+/, ""),
      });

      i++;
      continue;
    }

    /* NUMBERED */
    if (/^\d+\.\s+/.test(line)) {
      blocks.push({
        type: "number",
        text: line.replace(/^\d+\.\s+/, ""),
      });

      i++;
      continue;
    }

    /* FLOW */
    if (looksLikeFlow([line, lines[i + 1] || ""])) {
      const flowLines: string[] = [];

      while (
        i < lines.length &&
        lines[i].trim() &&
        (lines[i].includes("→") ||
          lines[i].includes("->") ||
          lines[i].includes("⇒") ||
          lines[i].includes("↓"))
      ) {
        flowLines.push(lines[i]);
        i++;
      }

      blocks.push({
        type: "flow",
        steps: flowSteps(flowLines),
      });

      continue;
    }

    /* PARAGRAPH */
    const paragraphLines = [line];
    i++;

    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,6}\s+/.test(lines[i]) &&
      !/^```/.test(lines[i]) &&
      !/^[-•]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !/^\|/.test(lines[i]) &&
      !/^Output\s*:/i.test(lines[i]) &&
      !/^Example\s*:/i.test(lines[i]) &&
      !/^Definition\s*:/i.test(lines[i]) &&
      !/^Key Concept\s*:/i.test(lines[i]) &&
      !/^Important\s*:/i.test(lines[i]) &&
      !/^Note\s*:/i.test(lines[i]) &&
      !/^Remember\s*:/i.test(lines[i]) &&
      !/^Formula\s*:/i.test(lines[i])
    ) {
      paragraphLines.push(lines[i]);
      i++;
    }

    blocks.push({
      type: "paragraph",
      text: paragraphLines.join(" "),
    });
  }

  return blocks;
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyCode}
      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function CodeBlock({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  return (
    <section className="my-8 overflow-hidden rounded-2xl border border-zinc-800 bg-[#0a0f1d] shadow-lg">
      <header className="flex items-center justify-between border-b border-zinc-800 bg-[#111827] px-4 py-3">
        <div className="flex items-center gap-2">
          <Code2 size={17} className="text-sky-400" />

          <span className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">
            {language}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CopyButton value={code} />

          <button
            type="button"
            title="Expand"
            className="rounded-lg border border-zinc-700 bg-zinc-900 p-1.5 text-zinc-400 hover:text-white"
          >
            <Maximize2 size={14} />
          </button>
        </div>
      </header>

      <pre className="overflow-x-auto p-5 text-[14px] leading-7 text-zinc-200">
        <code>{code}</code>
      </pre>
    </section>
  );
}

function OutputBlock({ text }: { text: string }) {
  return (
    <section className="my-5 overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-900/70 dark:bg-emerald-950/20">
      <div className="flex items-center gap-2 border-b border-emerald-200 px-4 py-3 dark:border-emerald-900/70">
        <Play
          size={15}
          className="text-emerald-600 dark:text-emerald-400"
        />

        <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
          Output
        </span>
      </div>

      <pre className="overflow-x-auto p-4 text-sm leading-6 text-emerald-950 dark:text-emerald-100">
        {text}
      </pre>
    </section>
  );
}

function ExampleBlock({ text }: { text: string }) {
  return (
    <section className="my-7 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/60 dark:bg-amber-950/20">
      <div className="mb-3 flex items-center gap-2">
        <Lightbulb
          size={18}
          className="text-amber-600 dark:text-amber-400"
        />

        <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700 dark:text-amber-400">
          Example
        </span>
      </div>

      <div className="whitespace-pre-line text-[15px] leading-7 text-amber-950 dark:text-amber-100">
        {inline(text)}
      </div>
    </section>
  );
}

function ConceptBlock({ text }: { text: string }) {
  return (
    <section className="my-7 rounded-2xl border-l-4 border-sky-500 bg-sky-50 px-5 py-4 dark:bg-sky-950/20">
      <div className="flex items-start gap-3">
        <Info
          size={18}
          className="mt-0.5 shrink-0 text-sky-600 dark:text-sky-400"
        />

        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-sky-700 dark:text-sky-400">
            Key Concept
          </p>

          <div className="text-[15px] leading-7 text-sky-950 dark:text-sky-100">
            {inline(text)}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecialBlock({
  title,
  text,
  kind,
}: {
  title: string;
  text: string;
  kind: string;
}) {
  const icon =
    kind === "definition" ? (
      <BookOpen size={17} />
    ) : kind === "remember" ? (
      <Star size={17} />
    ) : (
      <Info size={17} />
    );

  return (
    <section className="my-6 rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="mb-1.5 flex items-center gap-2 text-sm font-bold text-sky-700 dark:text-sky-400">
        {icon}
        <span>{title}</span>
      </div>

      <div className="text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">
        {inline(text)}
      </div>
    </section>
  );
}

function FormulaBlock({ text }: { text: string }) {
  return (
    <section className="my-8 rounded-2xl border border-violet-200 bg-violet-50 px-6 py-6 text-center dark:border-violet-900/60 dark:bg-violet-950/20">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-violet-600 dark:text-violet-400">
        Formula
      </p>

      <div className="overflow-x-auto font-mono text-lg font-semibold text-violet-950 dark:text-violet-100 md:text-xl">
        {text}
      </div>
    </section>
  );
}

function FlowBlock({ steps }: { steps: string[] }) {
  return (
    <section className="my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      <div className="mb-7 flex items-center gap-2">
        <GitBranch
          size={18}
          className="text-sky-600 dark:text-sky-400"
        />

        <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-300">
          Process Flow
        </span>
      </div>

      <div className="relative overflow-x-auto pb-2">
        <div className="flex min-w-max items-center gap-0">
          {steps.map((step, index) => (
            <div
              key={`${step}-${index}`}
              className="flex items-center"
            >
              <div className="relative rounded-2xl border-2 border-sky-200 bg-sky-50 px-5 py-4 text-center shadow-sm dark:border-sky-900 dark:bg-sky-950/40">
                <div className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Step {index + 1}
                </div>

                <div className="mt-1 max-w-[190px] text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100">
                  {inline(step)}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="flex w-14 items-center justify-center">
                  <div className="h-0.5 w-8 bg-sky-300 dark:bg-sky-700" />

                  <ChevronRight
                    size={18}
                    className="-ml-1 text-sky-500"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TableBlock({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <section className="my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-zinc-100 dark:bg-zinc-900">
              {headers.map((header, index) => (
                <th
                  key={`${header}-${index}`}
                  className="border-b border-r border-zinc-200 px-5 py-4 text-sm font-bold text-zinc-950 last:border-r-0 dark:border-zinc-800 dark:text-white"
                >
                  {inline(header)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="transition hover:bg-zinc-50 dark:hover:bg-zinc-900/60"
              >
                {headers.map((_, columnIndex) => (
                  <td
                    key={columnIndex}
                    className="border-b border-r border-zinc-200 px-5 py-4 align-top text-[14px] leading-6 text-zinc-700 last:border-r-0 dark:border-zinc-800 dark:text-zinc-300"
                  >
                    {inline(row[columnIndex] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function AIMLContentRenderer({
  content,
}: RendererProps) {
  const raw = useMemo(
    () => getContentString(content),
    [content]
  );

  const blocks = useMemo(
    () => parseBlocks(raw),
    [raw]
  );

  if (!raw.trim()) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-zinc-500 dark:text-zinc-400">
          No lesson content available.
        </p>
      </div>
    );
  }

  return (
    <article className="w-full pb-20">

      {blocks.map((block, index) => {
        switch (block.type) {

          case "heading":
            if (block.level === 1) {
              return (
                <h1
                  key={index}
                  className="mb-7 mt-1 text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl"
                >
                  {inline(block.text)}
                </h1>
              );
            }

            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  className="mb-5 mt-12 text-3xl font-extrabold tracking-tight text-sky-700 dark:text-sky-400 md:text-[32px]"
                >
                  {inline(block.text)}
                </h2>
              );
            }

            if (block.level === 3) {
              return (
                <h3
                  key={index}
                  className="mb-4 mt-9 text-2xl font-bold text-indigo-700 dark:text-indigo-400"
                >
                  {inline(block.text)}
                </h3>
              );
            }

            if (block.level === 4) {
              return (
                <h4
                  key={index}
                  className="mb-3 mt-7 text-xl font-bold text-slate-900 dark:text-slate-100"
                >
                  {inline(block.text)}
                </h4>
              );
            }

            if (block.level === 5) {
              return (
                <h5
                  key={index}
                  className="mb-3 mt-6 text-lg font-bold text-slate-700 dark:text-slate-200"
                >
                  {inline(block.text)}
                </h5>
              );
            }

            return (
              <h6
                key={index}
                className="mb-2 mt-5 text-base font-bold text-slate-600 dark:text-slate-300"
              >
                {inline(block.text)}
              </h6>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="mb-6 text-[16px] leading-[1.85] text-zinc-700 dark:text-zinc-300"
              >
                {inline(block.text)}
              </p>
            );

          case "bullet":
            return (
              <div
                key={index}
                className="mb-2.5 flex gap-3 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300"
              >
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{inline(block.text)}</span>
              </div>
            );

          case "number":
            return (
              <div
                key={index}
                className="mb-2.5 flex gap-3 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300"
              >
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                  {index + 1}
                </span>

                <span>{inline(block.text)}</span>
              </div>
            );

          case "code":
            return (
              <CodeBlock
                key={index}
                language={block.language}
                code={block.code}
              />
            );

          case "output":
            return (
              <OutputBlock
                key={index}
                text={block.text}
              />
            );

          case "example":
            return (
              <ExampleBlock
                key={index}
                text={block.text}
              />
            );

          case "concept":
            return (
              <ConceptBlock
                key={index}
                text={block.text}
              />
            );

          case "special":
            return (
              <SpecialBlock
                key={index}
                title={block.title}
                text={block.text}
                kind={block.kind}
              />
            );

          case "formula":
            return (
              <FormulaBlock
                key={index}
                text={block.text}
              />
            );

          case "flow":
            return (
              <FlowBlock
                key={index}
                steps={block.steps}
              />
            );

          case "table":
            return (
              <TableBlock
                key={index}
                headers={block.headers}
                rows={block.rows}
              />
            );

          case "divider":
            return null;

          default:
            return null;
        }
      })}
    </article>
  );
}
