"use client";

import React, { useMemo, useState } from "react";

type AnyObject = Record<string, any>;

function asArray<T = any>(value: T | T[] | null | undefined | ""): T[] {
  if (value === null || value === undefined || value === "") return [];
  return Array.isArray(value) ? value : [value];
}

function text(value: any): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function clean(value: any): string {
  if (value === undefined || value === null) {
    return "";
  }

  if (typeof value === "string") {
    return value.trim();
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value).trim();
  }

  try {
    const serialized = JSON.stringify(value);
    return serialized ? serialized.trim() : "";
  } catch {
    return "";
  }
}

function firstText(...values: any[]): string {
  for (const value of values) {
    const result = clean(value);
    if (result) return result;
  }
  return "";
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: any;
}) {
  return (
    <div className="mb-7">
      {eyebrow && (
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <div className="mt-3 max-w-4xl text-sm leading-7 text-slate-400">
          <Paragraphs value={description} />
        </div>
      )}
    </div>
  );
}

function Paragraphs({ value }: { value: any }) {
  const items = asArray(value).flatMap((item) => {
    if (typeof item === "string") return [item];
    if (item && typeof item === "object" && Array.isArray(item.content)) {
      return item.content;
    }
    return [item];
  });

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const value = clean(item);
        if (!value) return null;
        return (
          <p key={index} className="text-[15px] leading-8 text-slate-300">
            {value}
          </p>
        );
      })}
    </div>
  );
}

function BulletList({
  items,
  ordered = false,
}: {
  items: any;
  ordered?: boolean;
}) {
  const values = asArray(items).filter((item) => clean(item));
  if (!values.length) return null;

  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag
      className={cx(
        "space-y-3 text-sm leading-7 text-slate-300",
        ordered ? "list-decimal pl-6" : ""
      )}
    >
      {values.map((item, index) => (
        <li key={index} className={cx(!ordered && "flex items-start gap-3")}>
          {!ordered && (
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
          )}
          <span>{clean(item)}</span>
        </li>
      ))}
    </Tag>
  );
}

function MetaPill({ label, value }: { label: string; value: any }) {
  if (!clean(value)) return null;
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2">
      <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
      <div className="mt-1 text-xs font-semibold text-slate-200">{clean(value)}</div>
    </div>
  );
}

function Hero({ lesson }: { lesson: AnyObject }) {
  return (
    <header className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 p-6 shadow-2xl sm:p-9">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
            Generative AI
          </span>
          {lesson.moduleId && (
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              {clean(lesson.moduleId)}
            </span>
          )}
          {lesson.lessonNumber && (
            <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
              Lesson {clean(lesson.lessonNumber)}
            </span>
          )}
        </div>

        <h1 className="mt-6 max-w-5xl text-3xl font-black tracking-tight text-white sm:text-5xl">
          {firstText(lesson.title, "Lesson")}
        </h1>

        {lesson.subtitle && (
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            {clean(lesson.subtitle)}
          </p>
        )}

        {lesson.description && (
          <div className="mt-5 max-w-4xl">
            <Paragraphs value={lesson.description} />
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          <MetaPill label="Difficulty" value={lesson.difficulty} />
          <MetaPill label="Estimated time" value={lesson.estimatedTime} />
        </div>
      </div>
    </header>
  );
}

function Objectives({ items }: { items: any }) {
  const values = asArray(items).filter((item) => clean(item));
  if (!values.length) return null;

  return (
    <section className="rounded-[1.75rem] border border-cyan-500/15 bg-cyan-500/[0.035] p-6 sm:p-8">
      <SectionTitle eyebrow="Learning path" title="Learning Objectives" />
      <div className="grid gap-3 md:grid-cols-2">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-2xl border border-slate-800/90 bg-slate-950/70 p-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
              {String(index + 1).padStart(2, "0")}
            </div>
            <p className="text-sm leading-7 text-slate-300">{clean(item)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

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
  const [copied, setCopied] = useState(false);

  const value = clean(code);
  if (!value) return null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  return (
    <div className="my-7 overflow-hidden rounded-2xl border border-slate-800 bg-[#020617] shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/90 px-4 py-3">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-400">
            {clean(language) || "code"}
          </div>
          {title && <div className="mt-1 text-sm font-semibold text-slate-200">{clean(title)}</div>}
        </div>
        <button
          type="button"
          onClick={copy}
          className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-[11px] font-bold text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {explanation && (
        <div className="border-b border-slate-800 px-5 py-4">
          <Paragraphs value={explanation} />
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

function FormulaBlock({ formula, title = "Mathematical Formula" }: { formula: any; title?: string }) {
  const value = clean(formula);
  if (!value) return null;

  return (
    <div className="my-7 overflow-hidden rounded-2xl border border-violet-500/20 bg-violet-500/[0.045]">
      <div className="border-b border-violet-500/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
        {title}
      </div>
      <div className="overflow-x-auto px-5 py-6">
        <code className="whitespace-pre-wrap break-words font-mono text-sm leading-8 text-violet-100 sm:text-base">
          {value}
        </code>
      </div>
    </div>
  );
}

function ProcessFlow({ process }: { process: any }) {
  const raw = asArray(process);
  if (!raw.length) return null;

  const steps = raw.map((item, index) => {
    if (typeof item === "string") return { title: item };
    return {
      title: firstText(item?.title, item?.name, item?.label, `Step ${index + 1}`),
      description: firstText(item?.description, item?.content, item?.explanation),
      input: item?.input,
      output: item?.output,
    };
  });

  return (
    <div className="my-8 rounded-[1.75rem] border border-cyan-500/15 bg-slate-950/70 p-5 sm:p-7">
      <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
        Process Flow
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="text-[10px] font-black tracking-[0.18em] text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h4 className="mt-2 font-bold text-white">{step.title}</h4>
              {step.description && (
                <p className="mt-2 text-xs leading-6 text-slate-400">{step.description}</p>
              )}
              {step.input && (
                <div className="mt-3 rounded-lg bg-slate-950 px-3 py-2 text-xs text-slate-400">
                  <span className="font-bold text-slate-500">IN: </span>{clean(step.input)}
                </div>
              )}
              {step.output && (
                <div className="mt-2 rounded-lg bg-slate-950 px-3 py-2 text-xs text-slate-400">
                  <span className="font-bold text-slate-500">OUT: </span>{clean(step.output)}
                </div>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center justify-center text-xl font-bold text-cyan-500 lg:px-1">
                <span className="lg:hidden">↓</span>
                <span className="hidden lg:block">→</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ClassificationTree({ tree }: { tree: any }) {
  if (!tree) return null;

  const renderNode = (node: any, depth = 0): React.ReactNode => {
    if (typeof node === "string") {
      return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300">
          {node}
        </div>
      );
    }

    const title = firstText(node?.title, node?.name, node?.label, node?.heading);
    const description = firstText(node?.description, node?.content, node?.explanation);
    const children = node?.children ?? node?.items ?? node?.branches ?? [];

    return (
      <div className="relative">
        <div
          className={cx(
            "rounded-xl border px-4 py-3",
            depth === 0
              ? "border-cyan-500/25 bg-cyan-500/[0.06]"
              : "border-slate-800 bg-slate-900/80"
          )}
        >
          {title && <div className="font-semibold text-white">{title}</div>}
          {description && <div className="mt-1 text-xs leading-6 text-slate-400">{description}</div>}
        </div>

        {asArray(children).length > 0 && (
          <div className="mt-3 ml-5 space-y-3 border-l border-slate-800 pl-5">
            {asArray(children).map((child, index) => (
              <React.Fragment key={index}>{renderNode(child, depth + 1)}</React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="my-8 rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-5 sm:p-7">
      <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
        Classification
      </div>
      {renderNode(tree)}
    </div>
  );
}

function SimpleTable({ table }: { table: any }) {
  if (!table) return null;

  const headers = asArray(table.headers ?? table.columns ?? table.headings);
  const rows = asArray(table.rows ?? table.data ?? table.values);

  if (!headers.length && !rows.length) return null;

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70">
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
                {headers.map((header, index) => (
                  <th key={index} className="border-b border-slate-800 px-4 py-3 text-xs font-bold uppercase tracking-wide text-cyan-300">
                    {clean(header)}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((row, rowIndex) => {
              const cells = Array.isArray(row) ? row : asArray(row?.cells ?? row?.values ?? row);
              return (
                <tr key={rowIndex} className="border-b border-slate-800/70 last:border-0 hover:bg-slate-900/50">
                  {cells.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-4 align-top leading-6 text-slate-300">
                      {clean(cell)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ComparisonTable({ table }: { table: any }) {
  if (!table) return null;
  const title = firstText(table.title, table.heading, "Comparison");
  const columns = asArray(table.columns ?? table.headers);
  const rows = asArray(table.rows ?? table.data);

  if (!columns.length && !rows.length) return null;

  return (
    <div className="my-8 overflow-hidden rounded-[1.5rem] border border-violet-500/15 bg-violet-500/[0.025]">
      <div className="border-b border-violet-500/10 px-5 py-4">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
          Comparison
        </div>
        <div className="mt-1 text-lg font-bold text-white">{title}</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          {columns.length > 0 && (
            <thead>
              <tr className="bg-slate-900/80">
                {columns.map((column, index) => (
                  <th key={index} className="border-b border-slate-800 px-4 py-4 text-left font-bold text-slate-200">
                    {clean(column)}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {rows.map((row, index) => {
              const cells = Array.isArray(row) ? row : asArray(row?.cells ?? row?.values ?? row);
              return (
                <tr key={index} className="border-b border-slate-800/70 last:border-0">
                  {cells.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-4 align-top leading-6 text-slate-300">
                      {clean(cell)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ExampleCard({ example, index }: { example: any; index: number }) {
  const item = typeof example === "string" ? { content: example } : example;
  const title = firstText(item?.title, item?.name, `Example ${index + 1}`);
  const explanation = firstText(item?.explanation, item?.description, item?.content);
  const input = firstText(item?.input, item?.prompt);
  const output = firstText(item?.output, item?.result, item?.expectedOutput);

  return (
    <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.025] p-5">
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
        Example {index + 1}
      </div>
      <h4 className="mt-2 text-base font-bold text-white">{title}</h4>
      {explanation && (
        <div className="mt-4">
          <Paragraphs value={explanation} />
        </div>
      )}
      {input && (
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Input</div>
          <pre className="whitespace-pre-wrap text-xs leading-6 text-slate-300">{input}</pre>
        </div>
      )}
      {output && (
        <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Output</div>
          <pre className="whitespace-pre-wrap text-xs leading-6 text-slate-300">{output}</pre>
        </div>
      )}
    </div>
  );
}

function InputOutput({ item }: { item: any }) {
  const input = firstText(item?.input, item?.prompt, item?.given);
  const output = firstText(item?.output, item?.result, item?.response, item?.expected);
  if (!input && !output) return null;

  return (
    <div className="my-7 grid gap-4 md:grid-cols-2">
      {input && (
        <div className="rounded-2xl border border-blue-500/15 bg-blue-500/[0.035] p-5">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">Input</div>
          <div className="whitespace-pre-wrap text-sm leading-7 text-slate-300">{input}</div>
        </div>
      )}
      {output && (
        <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.035] p-5">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">Output</div>
          <div className="whitespace-pre-wrap text-sm leading-7 text-slate-300">{output}</div>
        </div>
      )}
    </div>
  );
}

function MathIntuition({ items }: { items: any }) {
  const values = asArray(items);
  if (!values.length) return null;

  return (
    <section className="my-10">
      <SectionTitle eyebrow="Mathematical intuition" title="Understand the Math" />
      <div className="grid gap-5">
        {values.map((item, index) => {
          const data = typeof item === "string" ? { content: item } : item;
          return (
            <div key={index} className="rounded-2xl border border-violet-500/15 bg-slate-950/70 p-5 sm:p-6">
              <h3 className="font-bold text-white">
                {firstText(data?.title, data?.concept, `Concept ${index + 1}`)}
              </h3>
              {data?.intuition && <div className="mt-4"><Paragraphs value={data.intuition} /></div>}
              {data?.formula && <FormulaBlock formula={data.formula} />}
              {data?.explanation && <div className="mt-4"><Paragraphs value={data.explanation} /></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ExerciseCard({ item, index }: { item: any; index: number }) {
  const [open, setOpen] = useState(false);
  const data = typeof item === "string" ? { question: item } : item;
  const question = firstText(data?.question, data?.prompt, data?.task, data?.content);
  const answer = firstText(data?.answer, data?.solution, data?.expectedAnswer);
  const explanation = firstText(data?.explanation, data?.reasoning);
  const hints = data?.hints;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
      <div className="flex gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xs font-black text-cyan-300">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Exercise
          </div>
          <p className="mt-2 text-sm font-semibold leading-7 text-slate-200">{question}</p>

          {hints && (
            <div className="mt-4">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-amber-400">Hints</div>
              <BulletList items={hints} />
            </div>
          )}

          {(answer || explanation) && (
            <>
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="mt-5 rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400/10"
              >
                {open ? "Hide solution" : "Show solution"}
              </button>

              {open && (
                <div className="mt-4 space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  {answer && (
                    <div>
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-emerald-400">Answer</div>
                      <Paragraphs value={answer} />
                    </div>
                  )}
                  {explanation && (
                    <div>
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-violet-300">Explanation</div>
                      <Paragraphs value={explanation} />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function InterviewQuestions({ items }: { items: any }) {
  const values = asArray(items);
  if (!values.length) return null;

  return (
    <section className="my-12">
      <SectionTitle eyebrow="Interview preparation" title="Interview Questions" />
      <div className="space-y-4">
        {values.map((item, index) => {
          const data = typeof item === "string" ? { question: item } : item;
          return (
            <ExerciseCard
              key={index}
              index={index}
              item={{
                question: firstText(data?.question, data?.prompt),
                answer: firstText(data?.answer, data?.solution),
                explanation: firstText(data?.explanation, data?.why),
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

function VisualReferences({ items }: { items: any }) {
  const values = asArray(items);
  if (!values.length) return null;

  return (
    <section className="my-12">
      <SectionTitle eyebrow="Visual references" title="Explore Visually" />
      <div className="grid gap-5 md:grid-cols-2">
        {values.map((item, index) => {
          const data = typeof item === "string" ? { title: item } : item;
          const image = firstText(data?.image, data?.imageUrl, data?.src, data?.url);
          const title = firstText(data?.title, data?.name, `Reference ${index + 1}`);
          const description = firstText(data?.description, data?.content);

          return (
            <a
              key={index}
              href={image || "#"}
              target={image ? "_blank" : undefined}
              rel={image ? "noreferrer" : undefined}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/70 transition hover:-translate-y-0.5 hover:border-cyan-400/30"
            >
              {image && /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(image) ? (
                <img src={image} alt={title} className="h-48 w-full object-cover opacity-90 transition group-hover:opacity-100" />
              ) : (
                <div className="flex h-32 items-center justify-center bg-gradient-to-br from-cyan-500/10 to-violet-500/10 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Visual reference
                </div>
              )}
              <div className="p-5">
                <div className="font-bold text-white">{title}</div>
                {description && <div className="mt-2 text-xs leading-6 text-slate-400">{description}</div>}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function CodeExamples({ items }: { items: any }) {
  const values = asArray(items);
  if (!values.length) return null;

  return (
    <section className="my-12">
      <SectionTitle eyebrow="Implementation" title="Code Examples" />
      <div>
        {values.map((item, index) => {
          const data = typeof item === "string" ? { code: item } : item;
          return (
            <CodeBlock
              key={index}
              code={data?.code ?? data?.content ?? data?.example}
              language={data?.language ?? data?.lang}
              title={data?.title ?? data?.name}
              output={data?.output}
              explanation={data?.explanation ?? data?.description}
            />
          );
        })}
      </div>
    </section>
  );
}

function SectionRenderer({ section, index }: { section: AnyObject; index: number }) {
  const heading = firstText(section?.heading, section?.title, `Section ${index + 1}`);

  return (
    <section className="border-t border-slate-800/70 pt-10 first:border-0 first:pt-0">
      <SectionTitle title={heading} description={section?.intro ?? section?.description} />

      {section?.content && <Paragraphs value={section.content} />}

      {section?.process && <ProcessFlow process={section.process} />}
      {section?.processFlow && <ProcessFlow process={section.processFlow} />}

      {section?.classificationTree && <ClassificationTree tree={section.classificationTree} />}
      {section?.tree && <ClassificationTree tree={section.tree} />}

      {section?.formulas &&
        asArray(section.formulas).map((formula, i) => (
          <FormulaBlock key={i} formula={typeof formula === "string" ? formula : formula?.formula ?? formula?.content} />
        ))}

      {section?.formula && <FormulaBlock formula={section.formula} />}

      {section?.table && <SimpleTable table={section.table} />}
      {section?.tables &&
        asArray(section.tables).map((table, i) => <SimpleTable key={i} table={table} />)}

      {section?.comparisonTable && <ComparisonTable table={section.comparisonTable} />}
      {section?.comparisonTables &&
        asArray(section.comparisonTables).map((table, i) => <ComparisonTable key={i} table={table} />)}

      {section?.examples && (
        <div className="my-8 grid gap-5">
          {asArray(section.examples).map((example, i) => (
            <ExampleCard key={i} example={example} index={i} />
          ))}
        </div>
      )}

      {section?.inputOutput &&
        asArray(section.inputOutput).map((item, i) => <InputOutput key={i} item={item} />)}

      {section?.contentAfterProcess && (
        <div className="mt-7"><Paragraphs value={section.contentAfterProcess} /></div>
      )}

      {section?.contentAfterFormula && (
        <div className="mt-7"><Paragraphs value={section.contentAfterFormula} /></div>
      )}

      {section?.codeExamples &&
        asArray(section.codeExamples).map((example, i) => (
          <CodeBlock
            key={i}
            code={typeof example === "string" ? example : example?.code ?? example?.content}
            language={typeof example === "object" ? example?.language : undefined}
            title={typeof example === "object" ? example?.title : undefined}
            output={typeof example === "object" ? example?.output : undefined}
          />
        ))}
    </section>
  );
}

function MainLesson({ lesson }: { lesson: AnyObject }) {
  return (
    <div className="space-y-10">
      <Hero lesson={lesson} />
      <Objectives items={lesson.learningObjectives} />

      {lesson.overview && (
        <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6 sm:p-8">
          <SectionTitle eyebrow="Overview" title="What You Will Learn" />
          <Paragraphs value={lesson.overview} />
        </section>
      )}

      {lesson.sections && (
        <section className="space-y-10">
          {asArray(lesson.sections).map((section, index) => (
            <SectionRenderer key={index} section={section} index={index} />
          ))}
        </section>
      )}

      <MathIntuition items={lesson.mathIntuition} />
      <CodeExamples items={lesson.codeExamples} />

      {lesson.exercises && (
        <section className="my-12">
          <SectionTitle eyebrow="Practice" title="Conceptual Exercises" />
          <div className="space-y-4">
            {asArray(lesson.exercises).map((item, index) => (
              <ExerciseCard key={index} item={item} index={index} />
            ))}
          </div>
        </section>
      )}

      {lesson.codingExercises && (
        <section className="my-12">
          <SectionTitle eyebrow="Practice" title="Coding Exercises" />
          <div className="space-y-4">
            {asArray(lesson.codingExercises).map((item, index) => (
              <ExerciseCard key={index} item={item} index={index} />
            ))}
          </div>
        </section>
      )}

      {lesson.architectureExercises && (
        <section className="my-12">
          <SectionTitle eyebrow="Architecture" title="Architecture Exercises" />
          <div className="space-y-4">
            {asArray(lesson.architectureExercises).map((item, index) => (
              <ExerciseCard key={index} item={item} index={index} />
            ))}
          </div>
        </section>
      )}

      {lesson.comparisonTables && (
        <section className="my-12">
          <SectionTitle eyebrow="Compare" title="Comparison Tables" />
          <div className="space-y-6">
            {asArray(lesson.comparisonTables).map((table, index) => (
              <ComparisonTable key={index} table={table} />
            ))}
          </div>
        </section>
      )}

      {lesson.interviewQuestions && <InterviewQuestions items={lesson.interviewQuestions} />}

      {lesson.commonMistakes && (
        <section className="rounded-[1.75rem] border border-red-500/15 bg-red-500/[0.025] p-6 sm:p-8">
          <SectionTitle eyebrow="Reliability" title="Common Mistakes" />
          <BulletList items={lesson.commonMistakes} />
        </section>
      )}

      {lesson.visualReferences && <VisualReferences items={lesson.visualReferences} />}

      {lesson.summary && (
        <section className="rounded-[1.75rem] border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 p-6 sm:p-8">
          <SectionTitle eyebrow="Recap" title="Summary" />
          <Paragraphs value={lesson.summary} />
        </section>
      )}

      {lesson.keyTakeaways && (
        <section>
          <SectionTitle eyebrow="Remember" title="Key Takeaways" />
          <div className="grid gap-4 md:grid-cols-2">
            {asArray(lesson.keyTakeaways).map((item, index) => (
              <div key={index} className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.025] p-5">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-7 text-slate-200">{clean(item)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function SpecialContent({ content }: { content: AnyObject }) {
  return (
    <div className="space-y-10">
      <Hero lesson={content} />

      {content.description && (
        <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6 sm:p-8">
          <Paragraphs value={content.description} />
        </section>
      )}

      {content.learningObjectives && <Objectives items={content.learningObjectives} />}
      {content.sections &&
        asArray(content.sections).map((section, index) => (
          <SectionRenderer key={index} section={section} index={index} />
        ))}

      <MathIntuition items={content.mathIntuition} />
      <CodeExamples items={content.codeExamples} />

      {content.architecture && (
        <section className="rounded-[1.75rem] border border-cyan-500/15 bg-cyan-500/[0.025] p-6 sm:p-8">
          <SectionTitle
            eyebrow="System design"
            title={firstText(content.architecture.title, "Architecture")}
            description={content.architecture.description}
          />
          {content.architecture.layers && (
            <div className="grid gap-3 md:grid-cols-2">
              {asArray(content.architecture.layers).map((layer, index) => (
                <div key={index} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="font-bold text-white">
                    {firstText(layer?.title, layer?.name, `Layer ${index + 1}`)}
                  </div>
                  {layer?.description && <div className="mt-2 text-xs leading-6 text-slate-400">{clean(layer.description)}</div>}
                </div>
              ))}
            </div>
          )}
          {content.architecture.processFlow && (
            <ProcessFlow process={content.architecture.processFlow} />
          )}
        </section>
      )}

      {content.implementationStages && (
        <section>
          <SectionTitle eyebrow="Implementation" title="Implementation Roadmap" />
          <div className="grid gap-4 md:grid-cols-2">
            {asArray(content.implementationStages).map((stage, index) => (
              <div key={index} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                  Stage {index + 1}
                </div>
                <div className="mt-2 font-bold text-white">
                  {firstText(stage?.title, stage?.name, `Stage ${index + 1}`)}
                </div>
                {stage?.description && <div className="mt-2 text-sm leading-7 text-slate-400">{clean(stage.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      )}

      {content.summary && (
        <section className="rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6 sm:p-8">
          <SectionTitle eyebrow="Recap" title="Summary" />
          <Paragraphs value={content.summary} />
        </section>
      )}

      {content.keyTakeaways && (
        <section>
          <SectionTitle eyebrow="Remember" title="Key Takeaways" />
          <div className="grid gap-4 md:grid-cols-2">
            {asArray(content.keyTakeaways).map((item, index) => (
              <div key={index} className="rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.025] p-5">
                <p className="text-sm leading-7 text-slate-200">{clean(item)}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function normalizeContent(content: any): AnyObject | null {
  if (!content) return null;

  if (
    typeof content === "object" &&
    content.content &&
    typeof content.content === "object"
  ) {
    return content.content;
  }

  return typeof content === "object" ? content : null;
}

export default function GenerativeAIContentRenderer({
  content,
}: {
  content: unknown;
}) {
  const normalized = useMemo(() => normalizeContent(content), [content]);

  if (!normalized) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center text-sm text-slate-400">
        No content available.
      </div>
    );
  }

  const isLesson =
    Array.isArray(normalized.sections) ||
    normalized.learningObjectives ||
    normalized.codeExamples ||
    normalized.keyTakeaways;

  return isLesson ? (
    <MainLesson lesson={normalized} />
  ) : (
    <SpecialContent content={normalized} />
  );
}
