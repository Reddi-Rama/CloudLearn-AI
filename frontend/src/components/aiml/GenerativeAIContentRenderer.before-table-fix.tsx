"use client";
import GenerativeAIVisualGallery from "./GenerativeAIVisualGallery";
import { generativeAIVisualMap } from "@/content/aiml/generative-ai/generativeAIVisualMap";
import React, { useState } from "react";

type AnyObject = Record<string, any>;

function asArray<T = any>(
  value: T | T[] | null | undefined | ""
): T[] {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function clean(value: any): string {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  if (typeof value === "string") {
    return value.trim();
  }

  if (
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value).trim();
  }

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function firstText(...values: any[]): string {
  for (const value of values) {
    const result = clean(value);

    if (result) {
      return result;
    }
  }

  return "";
}

function cx(
  ...classes: Array<
    string | false | null | undefined
  >
) {
  return classes.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/* TEXT                                                                        */
/* -------------------------------------------------------------------------- */

function Paragraphs({
  value,
}: {
  value: any;
}) {
  const items = asArray(value).flatMap(
    (item) => {
      if (typeof item === "string") {
        return [item];
      }

      if (
        item &&
        typeof item === "object"
      ) {
        const text = firstText(
          item.content,
          item.text,
          item.description,
          item.explanation,
          item.value
        );

        return text ? [text] : [];
      }

      const text = clean(item);

      return text ? [text] : [];
    }
  );

  if (!items.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <p
          key={index}
          className="text-[15px] leading-8 text-slate-300 sm:text-base"
        >
          {item}
        </p>
      ))}
    </div>
  );
}

function BulletList({
  items,
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) {
    return null;
  }

  return (
    <ul className="space-y-3">
      {values.map((item, index) => {
        const value =
          typeof item === "string"
            ? item
            : firstText(
                item?.content,
                item?.text,
                item?.description,
                item?.title,
                item?.name
              );

        if (!value) {
          return null;
        }

        return (
          <li
            key={index}
            className="flex gap-3 text-sm leading-7 text-slate-300"
          >
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

            <span>{value}</span>
          </li>
        );
      })}
    </ul>
  );
}

function OrderedList({
  items,
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) {
    return null;
  }

  return (
    <div className="space-y-3">
      {values.map((item, index) => {
        const value =
          typeof item === "string"
            ? item
            : firstText(
                item?.content,
                item?.text,
                item?.description,
                item?.title,
                item?.name
              );

        if (!value) {
          return null;
        }

        return (
          <div
            key={index}
            className="flex gap-4"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-xs font-bold text-cyan-300">
              {index + 1}
            </div>

            <p className="text-sm leading-7 text-slate-300">
              {value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION TITLE                                                               */
/* -------------------------------------------------------------------------- */

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title?: string;
  description?: any;
}) {
  const cleanTitle = clean(title);
  const cleanEyebrow = clean(eyebrow);

  return (
    <div className="mb-7">
      {cleanEyebrow && (
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
          {cleanEyebrow}
        </div>
      )}

      {cleanTitle && (
        <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
          {cleanTitle}
        </h2>
      )}

      {description && (
        <div className="mt-3 max-w-4xl">
          <Paragraphs
            value={description}
          />
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                        */
/* -------------------------------------------------------------------------- */

function Hero({
  lesson,
}: {
  lesson: AnyObject;
}) {
  const title = firstText(
    lesson.title,
    "Generative AI"
  );

  const subtitle = firstText(
    lesson.subtitle,
    lesson.description
  );

  return (
    <header className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-cyan-500/[0.07] via-slate-950 to-violet-500/[0.06] px-6 py-9 sm:px-10 sm:py-11 lg:px-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-violet-500/[0.06] blur-3xl" />

      <div className="relative">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
            Generative AI
          </span>

          {lesson.difficulty && (
            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              {clean(lesson.difficulty)}
            </span>
          )}

          {lesson.estimatedTime && (
            <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              {clean(lesson.estimatedTime)}
            </span>
          )}
        </div>

        <h1 className="max-w-5xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <div className="mt-5 max-w-4xl">
            <Paragraphs
              value={subtitle}
            />
          </div>
        )}
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* OBJECTIVES                                                                  */
/* -------------------------------------------------------------------------- */

function LearningObjectives({
  objectives,
}: {
  objectives: any;
}) {
  const values = asArray(objectives);

  if (!values.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-cyan-500/15 bg-cyan-500/[0.025] p-6 sm:p-8">
      <SectionTitle
        eyebrow="Learning"
        title="What You Will Learn"
      />

      <div className="grid gap-3 md:grid-cols-2">
        {values.map((item, index) => {
          const value =
            typeof item === "string"
              ? item
              : firstText(
                  item?.content,
                  item?.text,
                  item?.description,
                  item?.title
                );

          return (
            <div
              key={index}
              className="flex gap-4 rounded-2xl border border-slate-800/90 bg-slate-950/70 p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
                {index + 1}
              </div>

              <p className="text-sm leading-7 text-slate-300">
                {value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FORMULA                                                                     */
/* -------------------------------------------------------------------------- */

function FormulaBlock({
  formula,
  title,
}: {
  formula: any;
  title?: string;
}) {
  const value = clean(formula);

  if (!value) {
    return null;
  }

  return (
    <div className="my-5 overflow-hidden rounded-2xl border border-violet-500/15 bg-violet-500/[0.025]">
      {title && (
        <div className="border-b border-violet-500/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
          {clean(title)}
        </div>
      )}

      <div className="overflow-x-auto px-5 py-5">
        <code className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-violet-100">
          {value}
        </code>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* FLOWCHART                                                                    */
/* -------------------------------------------------------------------------- */

type FlowStep = {
  title: string;
  description?: string;
  input?: string;
  output?: string;
};

function isFlowArrow(
  value: any
): boolean {
  const text = clean(value)
    .replace(/\s+/g, "")
    .toLowerCase();

  return [
    "→",
    "->",
    "⇒",
    "➡",
    "↓",
    "⇓",
    "▼",
    "⬇",
    "↑",
    "⇑",
    "←",
    "<-",
    "↔",
    "⇄",
  ].includes(text);
}

function normalizeFlow(
  process: any
): {
  steps: FlowStep[];
  direction:
    | "horizontal"
    | "vertical";
  title?: string;
} {
  let source = process;

  let direction:
    | "horizontal"
    | "vertical" = "horizontal";

  let title = "";

  if (
    source &&
    typeof source === "object" &&
    !Array.isArray(source)
  ) {
    const requestedDirection =
      firstText(
        source.direction,
        source.orientation,
        source.layout
      ).toLowerCase();

    if (
      requestedDirection ===
        "vertical" ||
      requestedDirection === "down"
    ) {
      direction = "vertical";
    }

    title = firstText(
      source.title,
      source.heading
    );

    source =
      source.steps ??
      source.items ??
      source.nodes ??
      source.flow ??
      source.process ??
      [];
  }

  const steps = asArray(source)
    .filter((item) => {
      if (typeof item === "string") {
        return !isFlowArrow(item);
      }

      if (
        item &&
        typeof item === "object"
      ) {
        const label = firstText(
          item.title,
          item.name,
          item.label,
          item.text
        );

        return !isFlowArrow(label);
      }

      return false;
    })
    .map((item, index) => {
      if (typeof item === "string") {
        return {
          title: clean(item),
        };
      }

      return {
        title: firstText(
          item?.title,
          item?.name,
          item?.label,
          item?.text,
          `Step ${index + 1}`
        ),

        description: firstText(
          item?.description,
          item?.content,
          item?.explanation
        ),

        input: firstText(
          item?.input,
          item?.prompt,
          item?.given
        ),

        output: firstText(
          item?.output,
          item?.result,
          item?.response,
          item?.expected
        ),
      };
    })
    .filter(
      (step) => step.title
    );

  return {
    steps,
    direction,
    title: title || undefined,
  };
}

function FlowStepBox({
  step,
}: {
  step: FlowStep;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-lg transition duration-200 hover:border-cyan-500/30 hover:bg-slate-900">
      <div className="font-bold leading-6 text-white">
        {step.title}
      </div>

      {step.description && (
        <p className="mt-2 text-xs leading-6 text-slate-400">
          {step.description}
        </p>
      )}

      {step.input && (
        <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs leading-5 text-slate-400">
          <span className="font-bold text-slate-500">
            IN:
          </span>{" "}
          {step.input}
        </div>
      )}

      {step.output && (
        <div className="mt-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs leading-5 text-slate-400">
          <span className="font-bold text-slate-500">
            OUT:
          </span>{" "}
          {step.output}
        </div>
      )}
    </div>
  );
}

function ProcessFlow({
  process,
}: {
  process: any;
}) {
  const normalized =
    normalizeFlow(process);

  if (!normalized.steps.length) {
    return null;
  }

  const vertical =
    normalized.direction ===
    "vertical";

  return (
    <section className="my-9 rounded-[1.5rem] border border-cyan-500/15 bg-slate-950/70 p-5 sm:p-7">
      <div className="mb-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
          Process Flow
        </div>

        {normalized.title && (
          <h3 className="mt-2 text-lg font-bold text-white">
            {normalized.title}
          </h3>
        )}
      </div>

      {vertical ? (
        <div className="mx-auto flex max-w-3xl flex-col">
          {normalized.steps.map(
            (step, index) => (
              <React.Fragment
                key={index}
              >
                <FlowStepBox
                  step={step}
                />

                {index <
                  normalized.steps
                    .length -
                    1 && (
                  <div
                    aria-hidden="true"
                    className="flex h-10 items-center justify-center text-xl font-bold text-cyan-400"
                  >
                    ↓
                  </div>
                )}
              </React.Fragment>
            )
          )}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {normalized.steps.map(
            (step, index) => (
              <div
                key={index}
                className="relative"
              >
                <FlowStepBox
                  step={step}
                />

                {index <
                  normalized.steps
                    .length -
                    1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-bold text-cyan-400 xl:block"
                  >
                    →
                  </span>
                )}
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* CLASSIFICATION TREE                                                         */
/* -------------------------------------------------------------------------- */

function ClassificationTree({
  tree,
}: {
  tree: any;
}) {
  if (!tree) {
    return null;
  }

  /*
   * Supports both formats used by the course content:
   *
   * 1. Object tree:
   *    {
   *      title: "...",
   *      children: [...]
   *    }
   *
   * 2. Text tree:
   *    [
   *      "Generative AI",
   *      "├── Text Generation",
   *      "├── Image Generation",
   *      "└── Multimodal Generation"
   *    ]
   */

  const textTree = Array.isArray(tree)
    ? tree.filter(
        (item) =>
          typeof item === "string" &&
          item.trim().length > 0
      )
    : [];

  const renderNode = (
    node: any,
    depth = 0
  ): React.ReactNode => {
    if (typeof node === "string") {
      return (
        <div
          className={cx(
            "rounded-xl border px-4 py-3",
            depth === 0
              ? "border-cyan-500/25 bg-cyan-500/[0.05]"
              : "border-slate-800 bg-slate-900/80"
          )}
        >
          <div className="font-semibold text-white">
            {node}
          </div>
        </div>
      );
    }

    if (
      !node ||
      typeof node !== "object"
    ) {
      return null;
    }

    const title = firstText(
      node.title,
      node.name,
      node.label,
      node.heading
    );

    const description = firstText(
      node.description,
      node.content,
      node.explanation
    );

    const children = asArray(
      node.children ??
        node.items ??
        node.branches ??
        node.nodes
    );

    return (
      <div>
        <div
          className={cx(
            "rounded-xl border px-4 py-3",
            depth === 0
              ? "border-cyan-500/25 bg-cyan-500/[0.05]"
              : "border-slate-800 bg-slate-900/80"
          )}
        >
          {title && (
            <div className="font-semibold text-white">
              {title}
            </div>
          )}

          {description && (
            <div className="mt-1 text-xs leading-6 text-slate-400">
              {description}
            </div>
          )}
        </div>

        {children.length > 0 && (
          <div className="mt-3 ml-5 space-y-3 border-l border-slate-800 pl-5">
            {children.map(
              (child, index) => (
                <React.Fragment
                  key={index}
                >
                  {renderNode(
                    child,
                    depth + 1
                  )}
                </React.Fragment>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="my-9 rounded-3xl border border-slate-800 bg-slate-950/70 p-5 sm:p-7">
      <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
        Classification
      </div>

      {textTree.length > 0 ? (
        <div className="overflow-x-auto rounded-2xl border border-cyan-500/15 bg-slate-950/80 p-5 sm:p-7">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Classification Structure
            </div>
          </div>

          <pre className="overflow-x-auto whitespace-pre font-mono text-sm leading-8 text-slate-300 sm:text-[15px]">
            {textTree.join("\n")}
          </pre>
        </div>
      ) : (
        renderNode(tree)
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* TABLE                                                                       */
/* -------------------------------------------------------------------------- *//* -------------------------------------------------------------------------- */
/* TABLE                                                                       */
/* -------------------------------------------------------------------------- */

function SimpleTable({
  table,
}: {
  table: any;
}) {
  if (!table) {
    return null;
  }

  const headers = asArray(
    table.headers ??
      table.columns ??
      table.headings
  );

  const rows = asArray(
    table.rows ??
      table.data ??
      table.values
  );

  if (
    !headers.length &&
    !rows.length
  ) {
    return null;
  }

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80">
      {table.title && (
        <div className="border-b border-slate-800 px-5 py-4 text-sm font-bold text-white">
          {clean(table.title)}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left text-sm">
          {headers.length > 0 && (
            <thead>
              <tr className="bg-slate-900">
                {headers.map(
                  (header, index) => (
                    <th
                      key={index}
                      className="border-b border-slate-800 px-4 py-3 text-xs font-bold uppercase tracking-wide text-cyan-300"
                    >
                      {clean(header)}
                    </th>
                  )
                )}
              </tr>
            </thead>
          )}

          <tbody>
            {rows.map(
              (row, rowIndex) => {
                const cells =
                  Array.isArray(row)
                    ? row
                    : asArray(
                        row?.cells ??
                          row?.values ??
                          row
                      );

                return (
                  <tr
                    key={rowIndex}
                    className="border-b border-slate-800/70 last:border-0 hover:bg-slate-900/50"
                  >
                    {cells.map(
                      (
                        cell,
                        cellIndex
                      ) => (
                        <td
                          key={
                            cellIndex
                          }
                          className="px-4 py-4 align-top leading-6 text-slate-300"
                        >
                          {clean(cell)}
                        </td>
                      )
                    )}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ComparisonTable({
  table,
}: {
  table: any;
}) {
  if (!table) {
    return null;
  }

  const title = firstText(
    table.title,
    table.heading
  );

  const columns = asArray(
    table.columns ??
      table.headers
  );

  const rows = asArray(
    table.rows ??
      table.data
  );

  if (
    !columns.length &&
    !rows.length
  ) {
    return null;
  }

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-violet-500/15 bg-violet-500/[0.025]">
      {title && (
        <div className="border-b border-violet-500/10 px-5 py-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
            Comparison
          </div>

          <div className="mt-1 text-lg font-bold text-white">
            {title}
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          {columns.length > 0 && (
            <thead>
              <tr className="bg-slate-900/80">
                {columns.map(
                  (column, index) => (
                    <th
                      key={index}
                      className="border-b border-slate-800 px-4 py-4 text-left font-bold text-slate-200"
                    >
                      {clean(column)}
                    </th>
                  )
                )}
              </tr>
            </thead>
          )}

          <tbody>
            {rows.map(
              (row, index) => {
                const cells =
                  Array.isArray(row)
                    ? row
                    : asArray(
                        row?.cells ??
                          row?.values ??
                          row
                      );

                return (
                  <tr
                    key={index}
                    className="border-b border-slate-800/70 last:border-0"
                  >
                    {cells.map(
                      (
                        cell,
                        cellIndex
                      ) => (
                        <td
                          key={
                            cellIndex
                          }
                          className="px-4 py-4 align-top leading-6 text-slate-300"
                        >
                          {clean(cell)}
                        </td>
                      )
                    )}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CODE                                                                        */
/* -------------------------------------------------------------------------- */

function CodeBlock({
  code,
  language,
  title,
  output,
  explanation,
}: {
  code: any;
  language?: any;
  title?: any;
  output?: any;
  explanation?: any;
}) {
  const [copied, setCopied] =
    useState(false);

  const value = clean(code);

  if (!value) {
    return null;
  }

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(
        value
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="my-7 overflow-hidden rounded-2xl border border-slate-800 bg-[#050a14]">
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-4 py-3">
        <div className="min-w-0">
          {title && (
            <div className="truncate text-sm font-bold text-white">
              {clean(title)}
            </div>
          )}

          <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            {clean(language) ||
              "code"}
          </div>
        </div>

        <button
          type="button"
          onClick={copyCode}
          className="shrink-0 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-[11px] font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
        >
          {copied
            ? "Copied"
            : "Copy"}
        </button>
      </div>

      {explanation && (
        <div className="border-b border-slate-800 px-5 py-4">
          <Paragraphs
            value={explanation}
          />
        </div>
      )}

      <pre className="overflow-x-auto p-5 text-[12px] leading-7 text-slate-300 sm:text-[13px]">
        <code>{value}</code>
      </pre>

      {output && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-4">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">
            Output
          </div>

          <pre className="overflow-x-auto whitespace-pre-wrap text-xs leading-6 text-slate-300">
            {clean(output)}
          </pre>
        </div>
      )}
    </div>
  );
}

function CodeExamples({
  examples,
}: {
  examples: any;
}) {
  const values = asArray(examples);

  if (!values.length) {
    return null;
  }

  return (
    <section>
      <SectionTitle
        eyebrow="Implementation"
        title="Code Examples"
      />

      <div className="space-y-7">
        {values.map(
          (example, index) => {
            if (
              typeof example ===
              "string"
            ) {
              return (
                <CodeBlock
                  key={index}
                  code={example}
                  language="python"
                />
              );
            }

            return (
              <div key={index}>
                {example.title && (
                  <h3 className="mb-3 text-lg font-bold text-white">
                    {clean(
                      example.title
                    )}
                  </h3>
                )}

                {example.description && (
                  <div className="mb-4">
                    <Paragraphs
                      value={
                        example.description
                      }
                    />
                  </div>
                )}

                <CodeBlock
                  code={clean(
                    example.code ??
                      example.content ??
                      example.example
                  )}
                  language={
                    example.language ??
                    "python"
                  }
                />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MATHEMATICAL INTUITION                                                      */
/* -------------------------------------------------------------------------- */

function MathIntuition({
  items,
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) {
    return null;
  }

  return (
    <section className="border-t border-slate-800/70 pt-12">
      <div className="mb-7">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-400">
          Mathematics
        </div>

        <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
          Mathematical Intuition
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
          The key mathematical ideas behind
          the concepts in this lesson,
          expressed in a compact form for
          easier understanding and recall.
        </p>
      </div>

      <div className="grid gap-4">
        {values.map(
          (item, index) => {
            const data =
              typeof item === "string"
                ? {
                    content: item,
                  }
                : item ?? {};

            const title = firstText(
              data.title,
              data.name
            );

            const explanation =
              firstText(
                data.content,
                data.explanation,
                data.description,
                data.text
              );

            const formula =
              firstText(
                data.formula
              );

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-violet-500/15 bg-gradient-to-br from-violet-500/[0.045] via-slate-950/80 to-slate-950 transition-all duration-200 hover:border-violet-500/30"
              >
                <div className="flex items-start gap-4 px-5 py-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-xs font-black text-violet-300">
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1">
                    {title && (
                      <h3 className="text-sm font-bold text-white">
                        {title}
                      </h3>
                    )}

                    {explanation &&
                      explanation !==
                        formula && (
                        <p className="mt-2 text-sm leading-7 text-slate-400">
                          {explanation}
                        </p>
                      )}

                    {formula && (
                      <div className="mt-4 overflow-x-auto rounded-xl border border-violet-500/10 bg-[#080b18] px-4 py-4">
                        <code className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-violet-100 sm:text-[15px]">
                          {formula}
                        </code>
                      </div>
                    )}

                    {!formula &&
                      explanation && (
                        <div className="mt-3 rounded-xl border border-violet-500/10 bg-[#080b18] px-4 py-4">
                          <code className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-violet-100">
                            {explanation}
                          </code>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* EXERCISES                                                                   */
/* -------------------------------------------------------------------------- */

function Exercises({
  items,
  title,
}: {
  items: any;
  title: string;
}) {
  const values = asArray(items);

  if (!values.length) {
    return null;
  }

  return (
    <section>
      <SectionTitle
        eyebrow="Practice"
        title={title}
      />

      <div className="space-y-4">
        {values.map(
          (item, index) => {
            if (
              typeof item ===
              "string"
            ) {
              return (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-xs font-black text-slate-950">
                    {index + 1}
                  </div>

                  <p className="text-sm leading-7 text-slate-300">
                    {item}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-xs font-black text-slate-950">
                    {index + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    {item.title && (
                      <h3 className="font-semibold text-white">
                        {clean(
                          item.title
                        )}
                      </h3>
                    )}

                    <Paragraphs
                      value={
                        item.question ??
                        item.problem ??
                        item.description ??
                        item.content
                      }
                    />

                    {item.code && (
                      <CodeBlock
                        code={item.code}
                        language={
                          item.language ??
                          "python"
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* INTERVIEW QUESTIONS                                                         */
/* -------------------------------------------------------------------------- */

function InterviewQuestions({
  items,
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) {
    return null;
  }

  return (
    <section>
      <SectionTitle
        eyebrow="Interview"
        title="Interview Questions"
      />

      <div className="space-y-4">
        {values.map(
          (question, index) => {
            const value =
              typeof question ===
              "string"
                ? question
                : firstText(
                    question?.question,
                    question?.title,
                    question?.content
                  );

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <div className="flex gap-4">
                  <span className="font-mono text-xs font-bold text-violet-300">
                    Q{index + 1}
                  </span>

                  <p className="text-sm leading-7 text-slate-300">
                    {value}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* COMMON MISTAKES                                                            */
/* -------------------------------------------------------------------------- */

function CommonMistakes({
  items,
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-red-500/15 bg-red-500/[0.025] p-6 sm:p-8">
      <SectionTitle
        eyebrow="Reliability"
        title="Common Mistakes"
      />

      <BulletList
        items={values}
      />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* KEY TAKEAWAYS                                                               */
/* -------------------------------------------------------------------------- */

function KeyTakeaways({
  items,
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) {
    return null;
  }

  return (
    <section>
      <SectionTitle
        eyebrow="Remember"
        title="Key Takeaways"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {values.map(
          (item, index) => {
            const value =
              typeof item ===
              "string"
                ? item
                : firstText(
                    item?.content,
                    item?.text,
                    item?.title,
                    item?.description
                  );

            return (
              <div
                key={index}
                className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.025] p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
                    {index + 1}
                  </div>

                  <p className="text-sm leading-7 text-slate-200">
                    {value}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SUMMARY                                                                     */
/* -------------------------------------------------------------------------- */

function Summary({
  items,
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-emerald-500/15 bg-emerald-500/[0.025] p-6 sm:p-8">
      <SectionTitle
        eyebrow="Recap"
        title="Summary"
      />

      <BulletList
        items={values}
      />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* VISUAL REFERENCES                                                           */
/* -------------------------------------------------------------------------- */

function VisualReferences({
  items,
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) {
    return null;
  }

  function getImageSource(
    data: any
  ): string {
    return firstText(
      data?.image,
      data?.imageUrl,
      data?.src,
      data?.path,
      data?.asset,
      data?.imageRef,
      data?.imageReference,
      data?.visual,
      data?.visualReference,
      data?.url
    );
  }

  function looksLikeImage(
    source: string
  ): boolean {
    if (!source) {
      return false;
    }

    return (
      /^https?:\/\//i.test(source) ||
      /^\/(?!\/)/.test(source) ||
      /\.(png|jpe?g|gif|webp|svg|avif|bmp)(\?.*)?(#.*)?$/i.test(
        source
      )
    );
  }

  return (
    <section className="border-t border-slate-800/70 pt-12">
      <div className="mb-7">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
          Visual References
        </div>

        <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
          Explore Visually
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
          Diagrams, architecture references, workflows,
          and visual explanations related to this lesson.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {values.map((item, index) => {
          const data =
            typeof item === "string"
              ? {
                  title: item,
                }
              : item ?? {};

          const imageSource =
            getImageSource(data);

          const title = firstText(
            data?.title,
            data?.name,
            data?.label,
            `Visual Reference ${index + 1}`
          );

          const description =
            firstText(
              data?.description,
              data?.content,
              data?.explanation,
              data?.text
            );

          const caption =
            firstText(
              data?.caption,
              data?.alt
            );

          const hasImage =
            looksLikeImage(
              imageSource
            );

          return (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:border-cyan-500/30"
            >
              {hasImage ? (
                <a
                  href={imageSource}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden bg-slate-950">
                    <img
                      src={imageSource}
                      alt={
                        caption ||
                        title
                      }
                      loading="lazy"
                      className="block h-auto max-h-[420px] min-h-[180px] w-full object-contain bg-[#050a14] transition duration-300 group-hover:scale-[1.01]"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";

                        const parent =
                          event.currentTarget
                            .parentElement;

                        if (
                          parent &&
                          !parent.querySelector(
                            "[data-image-error]"
                          )
                        ) {
                          const fallback =
                            document.createElement(
                              "div"
                            );

                          fallback.setAttribute(
                            "data-image-error",
                            "true"
                          );

                          fallback.className =
                            "flex min-h-[180px] items-center justify-center bg-gradient-to-br from-cyan-500/10 via-slate-950 to-violet-500/10 px-6 text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-500";

                          fallback.textContent =
                            "Visual unavailable";

                          parent.appendChild(
                            fallback
                          );
                        }
                      }}
                    />
                  </div>
                </a>
              ) : (
                <div className="flex min-h-[180px] items-center justify-center bg-gradient-to-br from-cyan-500/[0.08] via-slate-950 to-violet-500/[0.08] px-6">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-lg text-cyan-300">
                      ◇
                    </div>

                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Visual Reference
                    </div>

                    <div className="mt-2 text-xs text-slate-600">
                      Image source not provided
                    </div>
                  </div>
                </div>
              )}

              <div className="p-5">
                <div className="text-base font-bold text-white">
                  {title}
                </div>

                {caption &&
                  caption !== title && (
                    <div className="mt-2 text-xs font-medium text-cyan-300">
                      {caption}
                    </div>
                  )}

                {description && (
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {description}
                  </p>
                )}

                {hasImage && (
                  <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Click image to view full size
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* ARCHITECTURE                                                                */
/* -------------------------------------------------------------------------- */

function Architecture({
  architecture,
}: {
  architecture: any;
}) {
  if (!architecture) {
    return null;
  }

  const layers = asArray(
    architecture.layers
  );

  return (
    <section className="rounded-3xl border border-cyan-500/15 bg-cyan-500/[0.02] p-6 sm:p-8">
      <SectionTitle
        eyebrow="System Design"
        title={firstText(
          architecture.title,
          "Architecture"
        )}
        description={
          architecture.description
        }
      />

      {layers.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {layers.map(
            (layer, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <div className="font-bold text-white">
                  {firstText(
                    layer?.title,
                    layer?.name
                  )}
                </div>

                {layer?.description && (
                  <div className="mt-2 text-sm leading-7 text-slate-400">
                    {clean(
                      layer.description
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}

      {(architecture.processFlow ||
        architecture.process ||
        architecture.flow) && (
        <ProcessFlow
          process={
            architecture.processFlow ??
            architecture.process ??
            architecture.flow
          }
        />
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* IMPLEMENTATION ROADMAP                                                      */
/* -------------------------------------------------------------------------- */

function ImplementationStages({
  stages,
}: {
  stages: any;
}) {
  const values = asArray(stages);

  if (!values.length) {
    return null;
  }

  return (
    <section>
      <SectionTitle
        eyebrow="Implementation"
        title="Implementation Roadmap"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {values.map(
          (stage, index) => {
            const data =
              typeof stage ===
              "string"
                ? {
                    title: stage,
                  }
                : stage ?? {};

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <div className="font-bold text-white">
                  {firstText(
                    data.title,
                    data.name
                  )}
                </div>

                {data.description && (
                  <div className="mt-2 text-sm leading-7 text-slate-400">
                    {clean(
                      data.description
                    )}
                  </div>
                )}

                {data.tasks && (
                  <div className="mt-4">
                    <BulletList
                      items={
                        data.tasks
                      }
                    />
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION RENDERER                                                            */
/* -------------------------------------------------------------------------- */

function SectionRenderer({
  section,
  index,
}: {
  section: AnyObject;
  index: number;
}) {
  const heading = firstText(
    section?.heading,
    section?.title
  );

  const intro = firstText(
    section?.intro,
    section?.description
  );

  const mathSection =
    /mathematical|mathematics|math intuition|formula/i.test(
      heading
    );

  return (
    <section
      className={cx(
        "border-t border-slate-800/70 pt-12",
        index === 0 &&
          "border-t-0 pt-0"
      )}
    >
      {(heading || intro) && (
        <SectionTitle
          eyebrow={
            mathSection
              ? "Mathematics"
              : undefined
          }
          title={
            mathSection
              ? heading.replace(
                  /^\s*\d+[\s.)-]+/,
                  ""
                )
              : heading
          }
          description={intro}
        />
      )}

      {section?.content && (
        <Paragraphs
          value={section.content}
        />
      )}

      {section?.paragraphs && (
        <Paragraphs
          value={section.paragraphs}
        />
      )}

      {section?.bullets && (
        <div className="my-7">
          <BulletList
            items={section.bullets}
          />
        </div>
      )}

      {section?.orderedList && (
        <div className="my-7">
          <OrderedList
            items={
              section.orderedList
            }
          />
        </div>
      )}

      {(section?.process ||
        section?.processFlow ||
        section?.flow) && (
        <ProcessFlow
          process={
            section.process ??
            section.processFlow ??
            section.flow
          }
        />
      )}

      {(section?.classificationTree ||
        section?.tree) && (
        <ClassificationTree
          tree={
            section.classificationTree ??
            section.tree
          }
        />
      )}

      {section?.formula && (
        <FormulaBlock
          formula={
            section.formula
          }
          title={
            section.formulaTitle
          }
        />
      )}

      {section?.formulas &&
        asArray(
          section.formulas
        ).map((formula, i) => (
          <FormulaBlock
            key={i}
            formula={
              typeof formula ===
              "string"
                ? formula
                : formula?.formula ??
                  formula?.content
            }
            title={
              typeof formula ===
              "object"
                ? formula?.title
                : undefined
            }
          />
        ))}

      {section?.table && (
        <SimpleTable
          table={section.table}
        />
      )}

      {section?.tables &&
        asArray(
          section.tables
        ).map((table, i) => (
          <SimpleTable
            key={i}
            table={table}
          />
        ))}

      {section?.comparisonTable && (
        <ComparisonTable
          table={
            section.comparisonTable
          }
        />
      )}

      {section?.comparisonTables &&
        asArray(
          section.comparisonTables
        ).map((table, i) => (
          <ComparisonTable
            key={i}
            table={table}
          />
        ))}

      {section?.examples && (
        <div className="my-8 space-y-5">
          {asArray(
            section.examples
          ).map(
            (example, i) => {
              if (
                typeof example ===
                "string"
              ) {
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <Paragraphs
                      value={
                        example
                      }
                    />
                  </div>
                );
              }

              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  {example?.title && (
                    <h3 className="font-bold text-white">
                      {clean(
                        example.title
                      )}
                    </h3>
                  )}

                  <div className="mt-3">
                    <Paragraphs
                      value={
                        example?.content ||
                        example?.description ||
                        example?.explanation
                      }
                    />
                  </div>

                  {example?.code && (
                    <CodeBlock
                      code={
                        example.code
                      }
                      language={
                        example.language ??
                        "text"
                      }
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      )}

      {section?.code && (
        <CodeBlock
          code={section.code}
          language={
            section.language ??
            "text"
          }
        />
      )}

      {section?.codeExamples &&
        asArray(
          section.codeExamples
        ).map(
          (example, i) => {
            const data =
              typeof example ===
              "string"
                ? {
                    code: example,
                  }
                : example ?? {};

            return (
              <CodeBlock
                key={i}
                code={
                  data.code ??
                  data.content ??
                  data.example
                }
                language={
                  data.language ??
                  "text"
                }
                title={
                  data.title
                }
                output={
                  data.output
                }
                explanation={
                  data.explanation ??
                  data.description
                }
              />
            );
          }
        )}

      {section?.mathIntuition && (
        <MathIntuition
          items={
            section.mathIntuition
          }
        />
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN LESSON                                                                 */
/* -------------------------------------------------------------------------- */

function MainLesson({
  lesson,
}: {
  lesson: AnyObject;
}) {
  return (
    <div className="w-full min-w-0 break-words [overflow-wrap:anywhere]">
      <Hero lesson={lesson} />

      <div className="space-y-12 px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-12">
        {lesson.learningObjectives && (
          <LearningObjectives
            objectives={
              lesson.learningObjectives
            }
          />
        )}

        {lesson.overview && (
          <section>
            <SectionTitle
              eyebrow="Overview"
              title="Overview"
            />

            <Paragraphs
              value={lesson.overview}
            />
          </section>
        )}

        {lesson.sections && (
          <div className="space-y-10">
            {asArray(
              lesson.sections
            ).map(
              (section, index) => (
                <SectionRenderer
                  key={index}
                  section={section}
                  index={index}
                />
              )
            )}
          </div>
        )}

        {lesson.codeExamples && (
          <CodeExamples
            examples={
              lesson.codeExamples
            }
          />
        )}

        {lesson.mathIntuition && (
          <MathIntuition
            items={
              lesson.mathIntuition
            }
          />
        )}

        {lesson.comparisonTables && (
          <section>
            <SectionTitle
              eyebrow="Compare"
              title="Comparisons"
            />

            <div className="space-y-6">
              {asArray(
                lesson.comparisonTables
              ).map(
                (table, index) => (
                  <ComparisonTable
                    key={index}
                    table={table}
                  />
                )
              )}
            </div>
          </section>
        )}

        {lesson.exercises && (
          <Exercises
            items={lesson.exercises}
            title="Conceptual Exercises"
          />
        )}

        {lesson.codingExercises && (
          <Exercises
            items={
              lesson.codingExercises
            }
            title="Coding Exercises"
          />
        )}

        {lesson.architectureExercises && (
          <Exercises
            items={
              lesson.architectureExercises
            }
            title="Architecture Exercises"
          />
        )}

        {lesson.interviewQuestions && (
          <InterviewQuestions
            items={
              lesson.interviewQuestions
            }
          />
        )}

        {lesson.commonMistakes && (
          <CommonMistakes
            items={
              lesson.commonMistakes
            }
          />
        )}

        {lesson.visualReferences && (
          <VisualReferences
            items={
              lesson.visualReferences
            }
          />
        )}

        {lesson.summary && (
          <Summary
            items={lesson.summary}
          />
        )}

        {lesson.keyTakeaways && (
          <KeyTakeaways
            items={
              lesson.keyTakeaways
            }
          />
        )}

        <GenerativeAIVisualGallery
          images={
            generativeAIVisualMap[
              `${lesson.moduleId}/${lesson.id}`
            ] ?? []
          }
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SPECIAL CONTENT                                                             */
/* -------------------------------------------------------------------------- */

function SpecialContent({
  content,
}: {
  content: AnyObject;
}) {
  return (
    <div className="w-full min-w-0 break-words [overflow-wrap:anywhere]">
      <Hero lesson={content} />

      <div className="space-y-12 px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-12">
        {content.description && (
          <section>
            <Paragraphs
              value={
                content.description
              }
            />
          </section>
        )}

        {content.overview && (
          <section>
            <SectionTitle
              eyebrow="Overview"
              title="Overview"
            />

            <Paragraphs
              value={
                content.overview
              }
            />
          </section>
        )}

        {content.learningObjectives && (
          <LearningObjectives
            objectives={
              content.learningObjectives
            }
          />
        )}

        {content.sections && (
          <div className="space-y-10">
            {asArray(
              content.sections
            ).map(
              (section, index) => (
                <SectionRenderer
                  key={index}
                  section={section}
                  index={index}
                />
              )
            )}
          </div>
        )}

        {content.codeExamples && (
          <CodeExamples
            examples={
              content.codeExamples
            }
          />
        )}

        {content.mathIntuition && (
          <MathIntuition
            items={
              content.mathIntuition
            }
          />
        )}

        {content.architecture && (
          <Architecture
            architecture={
              content.architecture
            }
          />
        )}

        {content.implementationStages && (
          <ImplementationStages
            stages={
              content.implementationStages
            }
          />
        )}

        {content.exercises && (
          <Exercises
            items={content.exercises}
            title="Exercises"
          />
        )}

        {content.codingExercises && (
          <Exercises
            items={
              content.codingExercises
            }
            title="Coding Exercises"
          />
        )}

        {content.architectureExercises && (
          <Exercises
            items={
              content.architectureExercises
            }
            title="Architecture Exercises"
          />
        )}

        {content.interviewQuestions && (
          <InterviewQuestions
            items={
              content.interviewQuestions
            }
          />
        )}

        {content.commonMistakes && (
          <CommonMistakes
            items={
              content.commonMistakes
            }
          />
        )}

        {content.visualReferences && (
          <VisualReferences
            items={
              content.visualReferences
            }
          />
        )}

        {content.summary && (
          <Summary
            items={
              content.summary
            }
          />
        )}

        {content.keyTakeaways && (
          <KeyTakeaways
            items={
              content.keyTakeaways
            }
          />
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* NORMALIZATION                                                               */
/* -------------------------------------------------------------------------- */

function normalizeContent(
  content: any
): AnyObject | null {
  if (!content) {
    return null;
  }

  if (
    typeof content === "object" &&
    content.content &&
    typeof content.content ===
      "object"
  ) {
    return content.content;
  }

  if (
    typeof content === "object"
  ) {
    return content;
  }

  return null;
}

/* -------------------------------------------------------------------------- */
/* EXPORT                                                                      */
/* -------------------------------------------------------------------------- */

export default function GenerativeAIContentRenderer({
  content,
}: {
  content: unknown;
}) {
  const normalized =
    normalizeContent(content);

  if (!normalized) {
    return (
      <div className="p-8 text-center text-sm text-slate-400">
        No content available.
      </div>
    );
  }

  const hasLessonStructure =
    Array.isArray(
      normalized.sections
    ) ||
    normalized.learningObjectives ||
    normalized.codeExamples ||
    normalized.keyTakeaways ||
    normalized.mathIntuition;

  if (hasLessonStructure) {
    return (
      <MainLesson
        lesson={normalized}
      />
    );
  }

  return (
    <SpecialContent
      content={normalized}
    />
  );
}
