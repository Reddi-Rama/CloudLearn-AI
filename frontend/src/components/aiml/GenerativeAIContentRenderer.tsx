"use client";

import React from "react";

type AnyObject = Record<string, any>;

function asArray(value: any): any[] {
  if (Array.isArray(value)) return value;
  if (value === undefined || value === null || value === "") {
    return [];
  }
  return [value];
}

function text(value: any): string {
  if (value === undefined || value === null) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return JSON.stringify(value);
}

function clean(value: any): string {
  return text(value).trim();
}

function SectionHeading({
  children,
  level = 2
}: {
  children: React.ReactNode;
  level?: 2 | 3;
}) {
  if (level === 3) {
    return (
      <h3 className="mt-8 mb-4 text-lg font-bold tracking-tight text-white">
        {children}
      </h3>
    );
  }

  return (
    <h2 className="mb-5 text-xl font-bold tracking-tight text-white sm:text-2xl">
      {children}
    </h2>
  );
}

function Paragraphs({
  value
}: {
  value: any;
}) {
  const items = asArray(value);

  if (!items.length) return null;

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const value = clean(item);

        if (!value) return null;

        return (
          <p
            key={index}
            className="
              text-sm
              leading-7
              text-slate-300
              sm:text-[15px]
            "
          >
            {value}
          </p>
        );
      })}
    </div>
  );
}

function BulletList({
  items,
  ordered = false
}: {
  items: any;
  ordered?: boolean;
}) {
  const values = asArray(items).filter(
    (item) => clean(item)
  );

  if (!values.length) return null;

  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag
      className={`
        space-y-3
        ${ordered ? "list-decimal pl-6" : ""}
      `}
    >
      {values.map((item, index) => (
        <li
          key={index}
          className={`
            text-sm
            leading-7
            text-slate-300
            ${ordered ? "" : "flex items-start gap-3"}
          `}
        >
          {!ordered && (
            <span
              className="
                mt-3
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-cyan-400
              "
            />
          )}

          <span>{clean(item)}</span>
        </li>
      ))}
    </Tag>
  );
}

function CodeBlock({
  code,
  language
}: {
  code: string;
  language?: string;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#020617] shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
          {language || "code"}
        </span>

        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        </span>
      </div>

      <pre className="overflow-x-auto p-5 text-[12px] leading-6 text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function FormulaCard({
  formula
}: {
  formula: any;
}) {
  const value = clean(formula);

  if (!value) return null;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-violet-500/20 bg-violet-500/5">
      <div className="border-b border-violet-500/10 px-5 py-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
          Mathematical Formula
        </span>
      </div>

      <div className="overflow-x-auto px-5 py-6">
        <code className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-violet-100 sm:text-base">
          {value}
        </code>
      </div>
    </div>
  );
}

function KeyTakeaway({
  value,
  index
}: {
  value: any;
  index: number;
}) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
      <div className="flex gap-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
          {String(index + 1).padStart(2, "0")}
        </div>

        <p className="text-sm leading-7 text-slate-200">
          {clean(value)}
        </p>
      </div>
    </div>
  );
}

function ComparisonTable({
  table
}: {
  table: AnyObject;
}) {
  const headers = asArray(table?.headers);
  const rows = asArray(table?.rows);

  if (!headers.length && !rows.length) {
    return null;
  }

  return (
    <div className="my-7 overflow-hidden rounded-2xl border border-slate-800">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          {headers.length > 0 && (
            <thead>
              <tr className="bg-slate-800/80">
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="
                      border-b
                      border-slate-700
                      px-4
                      py-3
                      text-left
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-slate-200
                    "
                  >
                    {clean(header)}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <tbody>
            {rows.map((row, rowIndex) => {
              const cells = Array.isArray(row)
                ? row
                : asArray(row);

              return (
                <tr
                  key={rowIndex}
                  className="border-b border-slate-800/70 last:border-0"
                >
                  {cells.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="
                        px-4
                        py-3
                        text-sm
                        leading-6
                        text-slate-300
                      "
                    >
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

function ProcessFlow({
  items
}: {
  items: any;
}) {
  const values = asArray(items).filter(
    (item) => clean(item)
  );

  if (!values.length) return null;

  return (
    <div className="my-7 rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5 sm:p-6">
      <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
        Process Flow
      </div>

      <div className="space-y-3">
        {values.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="
                rounded-xl
                border
                border-slate-800
                bg-slate-900
                px-4
                py-3
                text-sm
                font-medium
                leading-6
                text-slate-200
              "
            >
              {clean(item)}
            </div>

            {index < values.length - 1 && (
              <div className="flex justify-center text-cyan-500">
                ↓
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ClassificationTree({
  tree
}: {
  tree: any;
}) {
  if (!tree) return null;

  if (typeof tree === "string") {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300">
        {tree}
      </div>
    );
  }

  const renderNode = (
    node: any,
    depth = 0
  ): React.ReactNode => {
    if (!node) return null;

    if (typeof node === "string") {
      return (
        <div
          className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300"
          style={{
            marginLeft: `${Math.min(depth, 5) * 18}px`
          }}
        >
          {node}
        </div>
      );
    }

    const title =
      node.title ||
      node.name ||
      node.label ||
      node.heading ||
      "";

    const children =
      node.children ||
      node.items ||
      node.branches ||
      [];

    return (
      <div
        className="space-y-3"
        style={{
          marginLeft: `${Math.min(depth, 5) * 18}px`
        }}
      >
        {title && (
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 text-sm font-semibold text-cyan-200">
            {clean(title)}
          </div>
        )}

        {asArray(children).map(
          (child, index) => (
            <React.Fragment key={index}>
              {renderNode(child, depth + 1)}
            </React.Fragment>
          )
        )}
      </div>
    );
  };

  return (
    <div className="my-7 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
      <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
        Classification
      </div>

      {renderNode(tree)}
    </div>
  );
}

function InputOutput({
  item
}: {
  item: AnyObject;
}) {
  if (!item) return null;

  const input =
    item.input ??
    item.inputExample ??
    item.exampleInput;

  const output =
    item.output ??
    item.outputExample ??
    item.exampleOutput;

  if (input === undefined && output === undefined) {
    return null;
  }

  return (
    <div className="my-7 grid gap-4 md:grid-cols-2">
      {input !== undefined && (
        <div className="overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-500/5">
          <div className="border-b border-blue-500/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
            Input
          </div>

          <pre className="overflow-x-auto p-5 text-sm leading-6 text-slate-300">
            {clean(input)}
          </pre>
        </div>
      )}

      {output !== undefined && (
        <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
          <div className="border-b border-emerald-500/10 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
            Output
          </div>

          <pre className="overflow-x-auto p-5 text-sm leading-6 text-slate-300">
            {clean(output)}
          </pre>
        </div>
      )}
    </div>
  );
}

function ReferenceLinks({
  references
}: {
  references: any;
}) {
  const values = asArray(references);

  if (!values.length) return null;

  return (
    <div className="my-8 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
      <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
        Visuals & References
      </div>

      <div className="space-y-3">
        {values.map((reference, index) => {
          if (typeof reference === "string") {
            return (
              <a
                key={index}
                href={reference}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-cyan-300 transition hover:border-cyan-500/30 hover:bg-slate-800"
              >
                {reference}
              </a>
            );
          }

          const href =
            reference.url ||
            reference.href ||
            reference.link;

          const title =
            reference.title ||
            reference.name ||
            href ||
            `Reference ${index + 1}`;

          if (!href) {
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300"
              >
                {clean(title)}
              </div>
            );
          }

          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-cyan-300 transition hover:border-cyan-500/30 hover:bg-slate-800"
            >
              {clean(title)}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function SectionRenderer({
  section,
  index
}: {
  section: AnyObject;
  index: number;
}) {
  if (!section) return null;

  const heading =
    section.heading ||
    section.title ||
    section.name;

  return (
    <section
      id={`section-${index + 1}`}
      className="
        scroll-mt-24
        border-b
        border-slate-800/70
        pb-10
        last:border-0
      "
    >
      {heading && (
        <SectionHeading>
          {clean(heading)}
        </SectionHeading>
      )}

      {section.subtitle && (
        <p className="mb-5 text-sm font-medium text-cyan-300">
          {clean(section.subtitle)}
        </p>
      )}

      <Paragraphs value={section.content} />

      {section.process && (
        <ProcessFlow items={section.process} />
      )}

      {section.processFlow && (
        <ProcessFlow
          items={section.processFlow}
        />
      )}

      {section.classificationTree && (
        <ClassificationTree
          tree={section.classificationTree}
        />
      )}

      {section.formula && (
        <FormulaCard
          formula={section.formula}
        />
      )}

      {section.formulas && (
        <div className="space-y-4">
          {asArray(section.formulas).map(
            (formula, index) => (
              <FormulaCard
                key={index}
                formula={
                  typeof formula === "string"
                    ? formula
                    : formula.formula ||
                      formula.expression ||
                      formula
                }
              />
            )
          )}
        </div>
      )}

      {section.table && (
        <ComparisonTable
          table={section.table}
        />
      )}

      {section.comparisonTable && (
        <ComparisonTable
          table={section.comparisonTable}
        />
      )}

      {section.comparisonTables && (
        <div className="space-y-6">
          {asArray(
            section.comparisonTables
          ).map((table, index) => (
            <ComparisonTable
              key={index}
              table={table}
            />
          ))}
        </div>
      )}

      {section.inputOutput && (
        <InputOutput
          item={section.inputOutput}
        />
      )}

      {section.examples && (
        <div className="mt-7 space-y-4">
          <SectionHeading level={3}>
            Examples
          </SectionHeading>

          {asArray(section.examples).map(
            (example, index) => {
              if (
                typeof example === "string"
              ) {
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-7 text-slate-300"
                  >
                    {example}
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  {example.title && (
                    <h4 className="mb-2 font-semibold text-white">
                      {clean(example.title)}
                    </h4>
                  )}

                  <Paragraphs
                    value={
                      example.content ||
                      example.description ||
                      example.explanation
                    }
                  />

                  {example.code && (
                    <CodeBlock
                      code={clean(
                        example.code
                      )}
                      language={
                        example.language ||
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

      {section.code && (
        <CodeBlock
          code={clean(section.code)}
          language={
            section.language ||
            "text"
          }
        />
      )}

      {section.contentAfterProcess && (
        <div className="mt-6">
          <Paragraphs
            value={
              section.contentAfterProcess
            }
          />
        </div>
      )}

      {section.contentAfterFormula && (
        <div className="mt-6">
          <Paragraphs
            value={
              section.contentAfterFormula
            }
          />
        </div>
      )}

      {section.points && (
        <div className="mt-6">
          <BulletList
            items={section.points}
          />
        </div>
      )}

      {section.keyPoints && (
        <div className="mt-6">
          <BulletList
            items={section.keyPoints}
          />
        </div>
      )}
    </section>
  );
}

function LearningObjectives({
  objectives
}: {
  objectives: any;
}) {
  const values = asArray(objectives);

  if (!values.length) return null;

  return (
    <div className="mb-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-slate-950 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
          ✓
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            Learning Path
          </div>

          <h2 className="mt-1 text-lg font-bold text-white">
            What you will learn
          </h2>
        </div>
      </div>

      <BulletList items={values} />
    </div>
  );
}

function CodeExamples({
  examples
}: {
  examples: any;
}) {
  const values = asArray(examples);

  if (!values.length) return null;

  return (
    <div className="space-y-7">
      {values.map((example, index) => {
        if (
          typeof example === "string"
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
              <SectionHeading level={3}>
                {clean(example.title)}
              </SectionHeading>
            )}

            {example.description && (
              <Paragraphs
                value={
                  example.description
                }
              />
            )}

            <CodeBlock
              code={clean(
                example.code ||
                example.content ||
                example.example
              )}
              language={
                example.language ||
                "python"
              }
            />
          </div>
        );
      })}
    </div>
  );
}

function Exercises({
  items,
  title
}: {
  items: any;
  title: string;
}) {
  const values = asArray(items);

  if (!values.length) return null;

  return (
    <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-8">
      <div className="mb-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
          Practice
        </div>

        <h2 className="mt-1 text-xl font-bold text-white">
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {values.map((item, index) => {
          if (
            typeof item === "string"
          ) {
            return (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/70 p-4"
              >
                <span className="font-mono text-xs font-bold text-amber-400">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p className="text-sm leading-7 text-slate-300">
                  {item}
                </p>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
            >
              <div className="flex gap-4">
                <span className="font-mono text-xs font-bold text-amber-400">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div className="min-w-0 flex-1">
                  {item.title && (
                    <h3 className="font-semibold text-white">
                      {clean(item.title)}
                    </h3>
                  )}

                  <Paragraphs
                    value={
                      item.question ||
                      item.problem ||
                      item.description ||
                      item.content
                    }
                  />

                  {item.code && (
                    <CodeBlock
                      code={clean(
                        item.code
                      )}
                      language={
                        item.language ||
                        "python"
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Summary({
  items
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) return null;

  return (
    <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8">
      <div className="mb-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
          Lesson Complete
        </div>

        <h2 className="mt-1 text-xl font-bold text-white">
          Summary
        </h2>
      </div>

      <BulletList items={values} />
    </div>
  );
}

function InterviewQuestions({
  items
}: {
  items: any;
}) {
  const values = asArray(items);

  if (!values.length) return null;

  return (
    <div className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-6 sm:p-8">
      <div className="mb-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
          Interview Preparation
        </div>

        <h2 className="mt-1 text-xl font-bold text-white">
          Questions to master
        </h2>
      </div>

      <div className="space-y-3">
        {values.map((question, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="flex gap-4">
              <span className="font-mono text-xs font-bold text-violet-300">
                Q{index + 1}
              </span>

              <p className="text-sm leading-7 text-slate-300">
                {clean(
                  typeof question ===
                    "string"
                    ? question
                    : question.question ||
                        question.title ||
                        question.content
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero({
  lesson
}: {
  lesson: AnyObject;
}) {
  const title =
    lesson.title ||
    "Generative AI";

  const subtitle =
    lesson.subtitle ||
    lesson.description ||
    "";

  return (
    <header className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-violet-500/5 px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />

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
          {clean(title)}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
            {clean(subtitle)}
          </p>
        )}
      </div>
    </header>
  );
}

function MainLesson({
  lesson
}: {
  lesson: AnyObject;
}) {
  return (
    <div className="w-full min-w-0 overflow-visible break-words [overflow-wrap:anywhere]">
      <Hero lesson={lesson} />

      <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <LearningObjectives
          objectives={
            lesson.learningObjectives
          }
        />

        {lesson.sections && (
          <div className="space-y-10">
            {asArray(lesson.sections).map(
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
          <div className="mt-12">
            <SectionHeading>
              Code Examples
            </SectionHeading>

            <CodeExamples
              examples={
                lesson.codeExamples
              }
            />
          </div>
        )}

        {lesson.mathIntuition && (
          <div className="mt-12">
            <SectionHeading>
              Mathematical Intuition
            </SectionHeading>

            <div className="space-y-4">
              {asArray(
                lesson.mathIntuition
              ).map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5"
                >
                  {typeof item ===
                  "string" ? (
                    <p className="text-sm leading-7 text-slate-300">
                      {item}
                    </p>
                  ) : (
                    <>
                      {item.title && (
                        <h3 className="mb-2 font-semibold text-white">
                          {clean(
                            item.title
                          )}
                        </h3>
                      )}

                      <Paragraphs
                        value={
                          item.content ||
                          item.explanation ||
                          item.description
                        }
                      />

                      {item.formula && (
                        <FormulaCard
                          formula={
                            item.formula
                          }
                        />
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {lesson.comparisonTables && (
          <div className="mt-12">
            <SectionHeading>
              Comparisons
            </SectionHeading>

            <div className="space-y-7">
              {asArray(
                lesson.comparisonTables
              ).map((table, index) => (
                <ComparisonTable
                  key={index}
                  table={table}
                />
              ))}
            </div>
          </div>
        )}

        {lesson.exercises && (
          <div className="mt-12">
            <Exercises
              items={lesson.exercises}
              title="Conceptual Exercises"
            />
          </div>
        )}

        {lesson.codingExercises && (
          <div className="mt-12">
            <Exercises
              items={
                lesson.codingExercises
              }
              title="Coding Exercises"
            />
          </div>
        )}

        {lesson.architectureExercises && (
          <div className="mt-12">
            <Exercises
              items={
                lesson.architectureExercises
              }
              title="Architecture Exercises"
            />
          </div>
        )}

        {lesson.interviewQuestions && (
          <div className="mt-12">
            <InterviewQuestions
              items={
                lesson.interviewQuestions
              }
            />
          </div>
        )}

        {lesson.commonMistakes && (
          <div className="mt-12 rounded-3xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">
            <div className="mb-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-300">
                Avoid These
              </div>

              <h2 className="mt-1 text-xl font-bold text-white">
                Common Mistakes
              </h2>
            </div>

            <BulletList
              items={
                lesson.commonMistakes
              }
            />
          </div>
        )}

        {lesson.summary && (
          <div className="mt-12">
            <Summary
              items={lesson.summary}
            />
          </div>
        )}

        {lesson.keyTakeaways && (
          <div className="mt-12">
            <SectionHeading>
              Key Takeaways
            </SectionHeading>

            <div className="grid gap-4 md:grid-cols-2">
              {asArray(
                lesson.keyTakeaways
              ).map((item, index) => (
                <KeyTakeaway
                  key={index}
                  value={
                    typeof item ===
                    "string"
                      ? item
                      : item.content ||
                        item.text ||
                        item.title ||
                        item
                  }
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {lesson.visualReferences && (
          <ReferenceLinks
            references={
              lesson.visualReferences
            }
          />
        )}
      </div>
    </div>
  );
}

function SpecialContent({
  content
}: {
  content: AnyObject;
}) {
  const title =
    content.title ||
    "Module Content";

  return (
    <div className="w-full">
      <Hero lesson={content} />

      <div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        {content.overview && (
          <section className="mb-10">
            <SectionHeading>
              Overview
            </SectionHeading>

            <Paragraphs
              value={content.overview}
            />
          </section>
        )}

        {content.description && (
          <section className="mb-10">
            <Paragraphs
              value={content.description}
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
            ).map((section, index) => (
              <SectionRenderer
                key={index}
                section={section}
                index={index}
              />
            ))}
          </div>
        )}

        {content.coreFeatures && (
          <section className="mt-10">
            <SectionHeading>
              Core Features
            </SectionHeading>

            <div className="grid gap-4 md:grid-cols-2">
              {asArray(
                content.coreFeatures
              ).map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  {item.title && (
                    <h3 className="font-semibold text-white">
                      {clean(item.title)}
                    </h3>
                  )}

                  <Paragraphs
                    value={
                      item.description ||
                      item.content
                    }
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {content.architecture && (
          <section className="mt-10">
            <SectionHeading>
              {content.architecture.title ||
                "Architecture"}
            </SectionHeading>

            {content.architecture.description && (
              <Paragraphs
                value={
                  content.architecture
                    .description
                }
              />
            )}

            {content.architecture.layers && (
              <div className="grid gap-4 md:grid-cols-2">
                {asArray(
                  content.architecture
                    .layers
                ).map((layer, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                  >
                    <h3 className="font-semibold text-cyan-300">
                      {clean(
                        layer.name ||
                          layer.title
                      )}
                    </h3>

                    <BulletList
                      items={
                        layer.components ||
                        layer.items
                      }
                    />
                  </div>
                ))}
              </div>
            )}

            {content.architecture.processFlow && (
              <ProcessFlow
                items={
                  content.architecture
                    .processFlow
                }
              />
            )}
          </section>
        )}

        {content.implementationStages && (
          <section className="mt-10">
            <SectionHeading>
              Implementation Roadmap
            </SectionHeading>

            <div className="space-y-4">
              {asArray(
                content.implementationStages
              ).map((stage, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
                      {stage.stage ||
                        index + 1}
                    </span>

                    <h3 className="font-semibold text-white">
                      {clean(
                        stage.title
                      )}
                    </h3>
                  </div>

                  <BulletList
                    items={stage.tasks}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {content.summary && (
          <div className="mt-12">
            <Summary
              items={content.summary}
            />
          </div>
        )}

        {content.keyTakeaways && (
          <div className="mt-12">
            <SectionHeading>
              Key Takeaways
            </SectionHeading>

            <div className="grid gap-4 md:grid-cols-2">
              {asArray(
                content.keyTakeaways
              ).map((item, index) => (
                <KeyTakeaway
                  key={index}
                  value={
                    typeof item ===
                    "string"
                      ? item
                      : item.content ||
                        item.text ||
                        item.title ||
                        item
                  }
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function normalizeContent(
  content: any
): AnyObject | null {
  if (!content) return null;

  if (
    typeof content === "object" &&
    content.content &&
    typeof content.content === "object"
  ) {
    return content.content;
  }

  if (typeof content === "object") {
    return content;
  }

  return null;
}

export default function GenerativeAIContentRenderer({
  content
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
    normalized.keyTakeaways;

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
