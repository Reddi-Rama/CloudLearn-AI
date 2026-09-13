"use client";

import React from "react";
import {
  Copy,
  Check,
  Code2,
  Folder,
  File,
  Workflow,
  Lightbulb,
  AlertCircle,
  BookOpen,
} from "lucide-react";

import { useState } from "react";

/* ============================================================
   CLEAN NORMAL TEXT
============================================================ */

function cleanText(value: string): string {
  return value
    .replace(/\r/g, "")
    .replace(/\\rightarrow/g, "→")
    .replace(/\\to\b/g, "→")
    .replace(/\\downarrow/g, "↓")
    .replace(/\\uparrow/g, "↑")
    .replace(/\\times/g, "×")
    .replace(/\\cdot/g, "·")
    .replace(/\\geq/g, "≥")
    .replace(/\\leq/g, "≤")
    .replace(/\\neq/g, "≠")
    .replace(/\\approx/g, "≈")
    .replace(/\\\[/g, "")
    .replace(/\\\]/g, "")
    .replace(/\\\(/g, "")
    .replace(/\\\)/g, "")
    .replace(/\\\|/g, "|")
    .replace(/\\/g, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/* ============================================================
   INLINE
============================================================ */

function Inline({ text }: { text: string }) {
  const value = cleanText(text);

  const parts = value.split(
    /(\*\*[^*]+\*\*|\*[^*]+\*)/g
  );

  return (
    <>
      {parts.map((part, index) => {
        if (
          part.startsWith("**") &&
          part.endsWith("**")
        ) {
          return (
            <strong key={index}>
              {part.slice(2, -2)}
            </strong>
          );
        }

        if (
          part.startsWith("*") &&
          part.endsWith("*")
        ) {
          return (
            <em key={index}>
              {part.slice(1, -1)}
            </em>
          );
        }

        return (
          <React.Fragment key={index}>
            {part}
          </React.Fragment>
        );
      })}
    </>
  );
}

/* ============================================================
   CODE
============================================================ */

function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <section className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1220] shadow-sm">

      <div className="flex items-center justify-between border-b border-slate-800 bg-[#111a2b] px-4 py-3">

        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-cyan-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
            {language}
          </span>
        </div>

        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white"
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

      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-7 text-slate-200 md:text-sm">
        <code>{code}</code>
      </pre>

    </section>
  );
}

/* ============================================================
   EXAMPLE
============================================================ */

function ExampleBox({
  title,
  lines,
}: {
  title: string;
  lines: string[];
}) {
  return (
    <section className="my-8 rounded-2xl border border-amber-200 bg-amber-50/70 p-6 dark:border-amber-900/60 dark:bg-amber-950/20">

      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white">
          ✦
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Example
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
        </div>
      </div>

      <div className="space-y-3 text-[15px] leading-7 text-slate-700 dark:text-slate-300">
        {lines.map((line, index) => (
          <p key={index}>
            <Inline text={line} />
          </p>
        ))}
      </div>

    </section>
  );
}

/* ============================================================
   PROCESS
============================================================ */

function ProcessBox({
  steps,
  title = "Process",
}: {
  steps: string[];
  title?: string;
}) {
  const clean = steps
    .map(cleanText)
    .filter(Boolean);

  if (clean.length < 2) return null;

  return (
    <section className="my-8 rounded-2xl border border-sky-200 bg-sky-50/60 p-6 dark:border-sky-900/60 dark:bg-sky-950/20">

      <div className="mb-5 flex items-center gap-3">
        <Workflow size={18} className="text-sky-600 dark:text-sky-400" />
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <div className="flex min-w-max items-center">

          {clean.map((step, index) => (
            <React.Fragment key={index}>

              <div className="flex min-h-[58px] min-w-[165px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-950">

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-500 text-xs font-bold text-white">
                  {index + 1}
                </span>

                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {step}
                </span>

              </div>

              {index < clean.length - 1 && (
                <div className="px-2 text-xl font-bold text-sky-500">
                  →
                </div>
              )}

            </React.Fragment>
          ))}

        </div>
      </div>

    </section>
  );
}

/* ============================================================
   TREE / STRUCTURE
============================================================ */

function TreeBox({
  lines,
  title = "Structure",
}: {
  lines: string[];
  title?: string;
}) {

  const values = lines
    .map((raw) => {
      const cleaned = raw
        .replace(/\\/g, "")
        .replace(/`/g, "")
        .trimEnd();

      const depth =
        Math.max(
          0,
          Math.floor(
            (
              cleaned.search(/[A-Za-z0-9]/)
            ) / 3
          )
        );

      const name = cleaned
        .replace(
          /^[\s│├└─|-]+/,
          ""
        )
        .trim();

      const folder =
        name.endsWith("/") ||
        !name.includes(".");

      return {
        name,
        depth,
        folder,
      };
    })
    .filter((x) => x.name);

  if (!values.length) return null;

  return (
    <section className="my-8 overflow-hidden rounded-2xl border border-indigo-200 bg-indigo-50/60 dark:border-indigo-900/60 dark:bg-indigo-950/20">

      <div className="border-b border-indigo-200 px-5 py-4 dark:border-indigo-900/60">

        <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          Structure
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>

      </div>

      <div className="overflow-x-auto p-5">

        <div className="min-w-[520px] rounded-xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">

          {values.map((node, index) => (
            <div
              key={index}
              className="flex min-h-[34px] items-center gap-2"
              style={{
                paddingLeft: `${node.depth * 24}px`,
              }}
            >

              {node.folder ? (
                <Folder size={16} className="shrink-0 text-amber-500" />
              ) : (
                <File size={15} className="shrink-0 text-slate-400" />
              )}

              <span
                className={
                  node.folder
                    ? "font-semibold text-slate-900 dark:text-white"
                    : "font-mono text-[13px] text-slate-600 dark:text-slate-300"
                }
              >
                {node.name}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

/* ============================================================
   INFO BOX
============================================================ */

function InfoBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const isIntuition =
    /intuition/i.test(title);

  return (
    <section
      className={`
        my-7
        rounded-2xl
        border-l-4
        px-5
        py-4
        ${
          isIntuition
            ? "border-violet-500 bg-violet-50 dark:bg-violet-950/20"
            : "border-sky-500 bg-sky-50 dark:bg-sky-950/20"
        }
      `}
    >

      <div className="flex items-center gap-2">

        {isIntuition ? (
          <Lightbulb size={17} className="text-violet-500" />
        ) : (
          <AlertCircle size={17} className="text-sky-500" />
        )}

        <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
          {title}
        </span>

      </div>

      {text && (
        <p className="mt-2 text-[15px] leading-7 text-slate-700 dark:text-slate-300">
          <Inline text={text} />
        </p>
      )}

    </section>
  );
}

/* ============================================================
   TABLE
============================================================ */

function isTableSeparator(line: string) {
  const cells = line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((x) => x.trim());

  return (
    cells.length >= 2 &&
    cells.every((x) => /^:?-{3,}:?$/.test(x))
  );
}

function parseRow(line: string) {
  return cleanText(line)
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map(cleanText);
}

/* ============================================================
   RENDERER
============================================================ */

export default function AIMLContentRenderer({
  content,
}: {
  content: string;
}) {

  const lines =
    content
      .replace(/\r\n/g, "\n")
      .split("\n");

  const output: React.ReactNode[] = [];

  let i = 0;

  while (i < lines.length) {

    const raw = lines[i];
    const line = cleanText(raw);

    if (!line) {
      i++;
      continue;
    }

    /* CODE */

    if (
      raw.trim().startsWith("```") ||
      raw.trim().startsWith("\\```")
    ) {

      const opening =
        raw
          .trim()
          .replace(/^\\/, "")
          .replace(/^```/, "")
          .trim();

      const language =
        opening &&
        !opening.includes(" ")
          ? opening
          : "Code";

      const code: string[] = [];

      i++;

      while (
        i < lines.length &&
        lines[i].trim() !== "```" &&
        lines[i].trim() !== "\\```"
      ) {

        code.push(
          lines[i]
        );

        i++;
      }

      if (i < lines.length) {
        i++;
      }

      output.push(
        <CodeBlock
          key={output.length}
          code={code.join("\n")}
          language={language}
        />
      );

      continue;
    }

    /* TABLE */

    if (
      line.includes("|") &&
      i + 1 < lines.length &&
      isTableSeparator(
        cleanText(lines[i + 1])
      )
    ) {

      const headers =
        parseRow(line);

      const rows: string[][] = [];

      i += 2;

      while (
        i < lines.length &&
        cleanText(lines[i]) &&
        cleanText(lines[i]).includes("|")
      ) {

        rows.push(
          parseRow(lines[i])
        );

        i++;
      }

      output.push(
        <div
          key={output.length}
          className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
        >

          <table className="w-full min-w-[650px] border-collapse">

            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900">

                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="border-b border-slate-200 px-4 py-3 text-left text-xs font-bold text-slate-800 dark:border-slate-800 dark:text-white"
                  >
                    <Inline text={header} />
                  </th>
                ))}

              </tr>
            </thead>

            <tbody>

              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>

                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-b border-slate-100 px-4 py-3 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:text-slate-300"
                    >
                      <Inline text={cell} />
                    </td>
                  ))}

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      );

      continue;
    }

    /* EXAMPLE */

    const example =
      line.match(
        /^(Example(?:\s+\d+)?|Worked Example|Situation\s+[A-Z]|Case Study|Real[- ]World Example)\s*:?\s*(.*)$/i
      );

    if (example) {

      const body: string[] = [];

      if (example[2]) {
        body.push(example[2]);
      }

      i++;

      while (
        i < lines.length
      ) {

        const next =
          cleanText(lines[i]);

        if (!next) {
          i++;
          continue;
        }

        if (
          /^#{1,3}\s+/.test(next) ||
          /^(Example|Worked Example|Situation\s+[A-Z]|Case Study|Real[- ]World Example)\b/i.test(next) ||
          /^(Important|Key Concept|Definition|Note|Tip|Warning|Intuition|Mathematical Intuition)\b/i.test(next)
        ) {
          break;
        }

        body.push(next);
        i++;
      }

      output.push(
        <ExampleBox
          key={output.length}
          title={
            example[2] ||
            example[1]
          }
          lines={body}
        />
      );

      continue;
    }

    /* STRUCTURE */

    if (
      /^(Project Structure|Folder Structure|File Structure|Directory Structure|Structure|Architecture)\s*:?\s*$/i.test(line)
    ) {

      const tree: string[] = [];

      i++;

      while (
        i < lines.length &&
        cleanText(lines[i])
      ) {

        const next =
          cleanText(lines[i]);

        if (
          /^#{1,3}\s+/.test(next) ||
          /^(Example|Important|Note|Tip)\b/i.test(next)
        ) {
          break;
        }

        tree.push(lines[i]);
        i++;
      }

      if (tree.length) {

        output.push(
          <TreeBox
            key={output.length}
            lines={tree}
            title={line.replace(/:$/, "")}
          />
        );

        continue;
      }
    }

    /* RAW TREE */

    if (
      /[├└│]/.test(raw)
    ) {

      const tree: string[] = [];

      let cursor = i;

      while (
        cursor < lines.length &&
        (
          /[├└│]/.test(lines[cursor]) ||
          /[└├]──/.test(lines[cursor])
        )
      ) {

        tree.push(
          lines[cursor]
        );

        cursor++;
      }

      if (tree.length >= 2) {

        output.push(
          <TreeBox
            key={output.length}
            lines={tree}
            title="Structure"
          />
        );

        i = cursor;
        continue;
      }
    }

    /* PROCESS */

    if (
      /^(Process|Workflow|How It Works|AI Workflow|Working Process|Steps)\s*:?\s*$/i.test(line)
    ) {

      const steps: string[] = [];

      i++;

      while (
        i < lines.length
      ) {

        const next =
          cleanText(lines[i]);

        const match =
          next.match(
            /^(?:Step\s*)?\d+[.):]\s*(.*)$/i
          );

        if (!match) {
          break;
        }

        steps.push(match[1]);
        i++;
      }

      if (steps.length >= 2) {

        output.push(
          <ProcessBox
            key={output.length}
            title="How It Works"
            steps={steps}
          />
        );

        continue;
      }
    }

    /* INLINE ARROW FLOW */

    if (
      line.includes("→")
    ) {

      const steps =
        line
          .split("→")
          .map(cleanText)
          .filter(Boolean);

      if (steps.length >= 2) {

        output.push(
          <ProcessBox
            key={output.length}
            title="Process"
            steps={steps}
          />
        );

        i++;
        continue;
      }
    }

    /* INFO */

    const info =
      line.match(
        /^(Key Concept|Definition|Important|Note|Tip|Warning|Intuition|Mathematical Intuition)\s*:?\s*(.*)$/i
      );

    if (info) {

      output.push(
        <InfoBox
          key={output.length}
          title={info[1]}
          text={info[2]}
        />
      );

      i++;
      continue;
    }

    /* HEADINGS */

    if (
      /^###\s+/.test(line)
    ) {

      output.push(
        <h3
          key={output.length}
          className="mt-8 mb-3 text-xl font-extrabold text-sky-700 dark:text-cyan-300 md:text-2xl"
        >
          <Inline text={line.replace(/^###\s+/, "")} />
        </h3>
      );

      i++;
      continue;
    }

    if (
      /^##\s+/.test(line)
    ) {

      output.push(
        <h2
          key={output.length}
          className="mt-10 mb-4 border-b border-slate-200 pb-3 text-2xl font-black text-slate-950 dark:border-slate-800 dark:text-white md:text-3xl"
        >
          <Inline text={line.replace(/^##\s+/, "")} />
        </h2>
      );

      i++;
      continue;
    }

    if (
      /^#\s+/.test(line)
    ) {

      output.push(
        <h1
          key={output.length}
          className="mb-6 text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-4xl"
        >
          <Inline text={line.replace(/^#\s+/, "")} />
        </h1>
      );

      i++;
      continue;
    }

    /* BULLETS */

    if (
      /^[-*•]\s+/.test(line)
    ) {

      const items: string[] = [];

      while (
        i < lines.length &&
        /^[-*•]\s+/.test(
          cleanText(lines[i])
        )
      ) {

        items.push(
          cleanText(lines[i]).replace(
            /^[-*•]\s+/,
            ""
          )
        );

        i++;
      }

      output.push(
        <ul
          key={output.length}
          className="my-5 space-y-1.5 pl-6 text-[16px] leading-7 text-slate-700 dark:text-slate-300"
        >
          {items.map(
            (item, index) => (
              <li
                key={index}
                className="list-disc marker:text-sky-500"
              >
                <Inline text={item} />
              </li>
            )
          )}
        </ul>
      );

      continue;
    }

    /* DIVIDERS / FENCE REMNANTS */

    if (
      line === "---" ||
      line === "***" ||
      line === "___" ||
      line === "`" ||
      line === "``" ||
      line === "```"
    ) {
      i++;
      continue;
    }

    /* NORMAL PARAGRAPH */

    output.push(
      <p
        key={output.length}
        className="my-4 text-[16px] leading-7 text-slate-700 dark:text-slate-300 md:text-[17px]"
      >
        <Inline text={line} />
      </p>
    );

    i++;
  }

  return (
    <div className="w-full">
      {output}
    </div>
  );
}