"use client";
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

function normalizeFlowArrow(value: any): string {
  const text = clean(value).replace(/\s+/g, "");

  if (text === "->" || text === "=>" || text === "⇒") {
    return "→";
  }

  if (text === "↓" || text === "⇓" || text === "▼" || text === "⬇") {
    return "↓";
  }

  if (text === "↑" || text === "⇑") {
    return "↑";
  }

  if (text === "←" || text === "<-") {
    return "←";
  }

  if (text === "↔" || text === "⇄") {
    return "↔";
  }

  return text;
}

function isStandaloneFlowArrow(value: any): boolean {
  const text = clean(value).replace(/\s+/g, "");

  return [
    "→",
    "->",
    "=>",
    "⇒",
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

function isFlowNodeText(value: any): boolean {
  const text = clean(value);

  if (!text || text.length > 140) {
    return false;
  }

  if (isStandaloneFlowArrow(text)) {
    return false;
  }

  return true;
}

type TextFlow = {
  nodes: string[];
  arrows: string[];
  endIndex: number;
};

function parseTextFlow(
  items: string[],
  startIndex: number
): TextFlow | null {
  const first = clean(items[startIndex]);

  if (!isFlowNodeText(first)) {
    return null;
  }

  const inlineParts = first
    .split(/\s*(?:→|->|=>|⇒)\s*/)
    .map((part) => part.trim())
    .filter(Boolean);

  /*
   * Labelled inline relationships such as
   * "Predictive model: Input → prediction"
   * must be handled by SmartParagraph so the label
   * can be preserved.
   */
  if (
    first.includes(":") &&
    inlineParts.length >= 2
  ) {
    return null;
  }

  if (
    inlineParts.length >= 2 &&
    inlineParts.every(isFlowNodeText)
  ) {
    return {
      nodes: inlineParts,
      arrows: inlineParts.slice(1).map(() => "→"),
      endIndex: startIndex + 1,
    };
  }

  const nodes = [first];
  const arrows: string[] = [];
  let cursor = startIndex + 1;

  while (cursor < items.length) {
    if (!isStandaloneFlowArrow(items[cursor])) {
      break;
    }

    const arrow = normalizeFlowArrow(items[cursor]);
    const nextNode = clean(items[cursor + 1]);

    if (!isFlowNodeText(nextNode)) {
      break;
    }

    arrows.push(arrow);
    nodes.push(nextNode);
    cursor += 2;
  }

  if (nodes.length >= 2 && arrows.length === nodes.length - 1) {
    return {
      nodes,
      arrows,
      endIndex: cursor,
    };
  }

  return null;
}

function ContentFlow({
  nodes,
  arrows,
  compact = false,
  label,
}: {
  nodes: string[];
  arrows: string[];
  compact?: boolean;
  label?: string;
}) {
  if (!nodes.length) return null;

  const vertical = arrows.some(
    (arrow) => arrow === "↓" || arrow === "↑"
  );

  return (
    <div className={cx("my-6 w-full", compact && "my-4")}>
      {label && (
        <div className="mb-3 text-sm font-semibold leading-7 text-slate-300">
          {label}
        </div>
      )}

      {compact ? (
        <div className="w-full overflow-x-auto">
          <div className="flex min-w-max items-center gap-2 py-1">
            {nodes.map((node, index) => (
              <React.Fragment key={index}>
                <span className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.035] px-3.5 py-2 text-sm font-medium leading-6 text-slate-200">
                  {node}
                </span>

                {index < nodes.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="px-1 text-lg font-semibold text-cyan-400"
                  >
                    {arrows[index] || "→"}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : vertical ? (
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          {nodes.map((node, index) => (
            <React.Fragment key={index}>
              <div className="w-full rounded-xl border border-cyan-400/20 bg-slate-900/70 px-5 py-4 text-center text-sm font-semibold leading-7 text-slate-100 sm:text-base">
                {node}
              </div>

              {index < nodes.length - 1 && (
                <div
                  aria-hidden="true"
                  className="flex h-9 items-center justify-center text-lg font-semibold text-cyan-400"
                >
                  {arrows[index] || "↓"}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="w-full overflow-x-auto">
          <div className="flex min-w-max items-center gap-2 py-1">
            {nodes.map((node, index) => (
              <React.Fragment key={index}>
                <span className="rounded-xl border border-cyan-400/20 bg-slate-900/70 px-4 py-3 text-center text-sm font-semibold leading-6 text-slate-100">
                  {node}
                </span>

                {index < nodes.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="px-1 text-xl font-semibold text-cyan-400"
                  >
                    {arrows[index] || "→"}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function extractParagraphItems(value: any): string[] {
  const result: string[] = [];

  const visit = (current: any, depth = 0) => {
    if (
      current === null ||
      current === undefined ||
      depth > 8
    ) {
      return;
    }

    if (
      typeof current === "string" ||
      typeof current === "number" ||
      typeof current === "boolean"
    ) {
      const value = clean(current);

      if (value) {
        result.push(value);
      }

      return;
    }

    if (Array.isArray(current)) {
      current.forEach((item) => visit(item, depth + 1));
      return;
    }

    if (typeof current !== "object") {
      return;
    }

    /*
     * Lesson content is not perfectly uniform across all
     * Generative AI lessons. Some sections use `content`,
     * while others use body/details/notes/points/etc.
     *
     * Read the meaningful educational fields instead of
     * silently dropping them.
     */
    const preferredKeys = [
      "content",
      "body",
      "text",
      "description",
      "explanation",
      "details",
      "summary",
      "notes",
      "reason",
      "why",
      "how",
      "value",
      "points",
      "steps",
      "items",
      "examples",
    ];

    let foundPreferred = false;

    for (const key of preferredKeys) {
      if (
        Object.prototype.hasOwnProperty.call(
          current,
          key
        ) &&
        current[key] !== null &&
        current[key] !== undefined
      ) {
        foundPreferred = true;
        visit(current[key], depth + 1);
      }
    }

    if (foundPreferred) {
      return;
    }

    /*
     * Final fallback for an object whose educational
     * text is stored under an unexpected field name.
     * Metadata fields are intentionally skipped.
     */
    const ignoredKeys = new Set([
      "id",
      "type",
      "number",
      "index",
      "slug",
      "href",
      "url",
      "language",
      "title",
      "heading",
      "name",
    ]);

    for (const [key, item] of Object.entries(current)) {
      if (ignoredKeys.has(key)) {
        continue;
      }

      visit(item, depth + 1);
    }
  };

  visit(value);

  return result;
}

function isObject(value: any): value is AnyObject {
  return Boolean(
    value &&
      typeof value === "object" &&
      !Array.isArray(value)
  );
}

function InfoCard({
  eyebrow,
  title,
  children,
  tone = "cyan",
}: {
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
  tone?: "cyan" | "violet" | "amber" | "emerald" | "rose";
}) {
  const styles = {
    cyan: {
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/[0.035]",
      label: "text-cyan-300",
      dot: "bg-cyan-400",
    },
    violet: {
      border: "border-violet-500/20",
      bg: "bg-violet-500/[0.035]",
      label: "text-violet-300",
      dot: "bg-violet-400",
    },
    amber: {
      border: "border-amber-500/20",
      bg: "bg-amber-500/[0.035]",
      label: "text-amber-300",
      dot: "bg-amber-400",
    },
    emerald: {
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/[0.035]",
      label: "text-emerald-300",
      dot: "bg-emerald-400",
    },
    rose: {
      border: "border-rose-500/20",
      bg: "bg-rose-500/[0.035]",
      label: "text-rose-300",
      dot: "bg-rose-400",
    },
  }[tone];

  return (
    <div
      className={cx(
        "my-6 overflow-hidden rounded-2xl border shadow-sm",
        styles.border,
        styles.bg
      )}
    >
      <div className="flex items-center gap-2 border-b border-slate-800/70 px-5 py-3">
        <span className={cx("h-1.5 w-1.5 rounded-full", styles.dot)} />
        <span
          className={cx(
            "text-[10px] font-black uppercase tracking-[0.2em]",
            styles.label
          )}
        >
          {eyebrow}
        </span>
      </div>

      <div className="px-5 py-5 sm:px-6 sm:py-6">
        {title && (
          <h4 className="mb-3 text-base font-bold leading-7 text-white sm:text-lg">
            {clean(title)}
          </h4>
        )}
        {children}
      </div>
    </div>
  );
}

function QuestionCard({
  item,
  index,
}: {
  item: AnyObject;
  index: number;
}) {
  const question = firstText(
    item.question,
    item.prompt,
    item.title,
    item.content
  );
  const answer = firstText(
    item.answer,
    item.answerText,
    item.expectedAnswer
  );
  const explanation = firstText(
    item.explanation,
    item.reason,
    item.solution
  );

  if (!question && !answer && !explanation) {
    return null;
  }

  return (
    <InfoCard
      eyebrow={`Question ${index + 1}`}
      tone="violet"
    >
      {question && (
        <p className="text-[16px] font-semibold leading-8 text-slate-100 sm:text-[17px]">
          {question}
        </p>
      )}

      {answer && (
        <div className="mt-5 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.035] p-4">
          <div className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
            Answer
          </div>
          <p className="text-[16px] leading-8 text-slate-200 sm:text-[17px]">
            {answer}
          </p>
        </div>
      )}

      {explanation && (
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
            Explanation
          </div>
          <p className="w-full max-w-5xl text-left text-[16px] leading-8 text-slate-400 sm:text-[17px]">
            {explanation}
          </p>
        </div>
      )}
    </InfoCard>
  );
}

function ExampleCard({
  item,
  index,
}: {
  item: AnyObject;
  index: number;
}) {
  const title = firstText(
    item.title,
    item.name,
    item.exampleTitle,
    `Example ${index + 1}`
  );
  const description = firstText(
    item.description,
    item.explanation,
    item.content,
    item.example
  );

  return (
    <InfoCard
      eyebrow={`Worked Example ${index + 1}`}
      title={title}
      tone="amber"
    >
      {description && (
        <p className="text-[16px] leading-8 text-slate-300 sm:text-[17px]">
          {description}
        </p>
      )}

      {item.code && (
        <CodeBlock
          code={item.code}
          language={item.language ?? "text"}
          output={item.output}
          explanation={item.codeExplanation}
        />
      )}
    </InfoCard>
  );
}

function ExplanationCard({
  item,
}: {
  item: AnyObject;
}) {
  const explanation = firstText(
    item.explanation,
    item.description,
    item.content,
    item.text,
    item.details
  );

  if (!explanation) {
    return null;
  }

  return (
    <InfoCard
      eyebrow="Explanation"
      title={firstText(item.title, item.heading)}
      tone="cyan"
    >
      <p className="w-full max-w-5xl text-left text-[17px] leading-8 text-slate-300 sm:text-[18px]">
        {explanation}
      </p>
    </InfoCard>
  );
}

function renderStructuredParagraphItem(
  item: any,
  index: number
): React.ReactNode | null {
  if (!isObject(item)) {
    return null;
  }

  const explicitProcess =
    item.process ??
    item.processFlow ??
    item.flow ??
    (item.steps ? {
      title: item.title ?? item.heading,
      steps: item.steps,
      direction: item.direction ?? "vertical",
    } : null);

  if (explicitProcess) {
    return (
      <ProcessFlow
        key={`structured-flow-${index}`}
        process={explicitProcess}
      />
    );
  }

  if (item.formula || item.formulas) {
    return (
      <div key={`structured-formula-${index}`} className="space-y-3">
        {item.formula && (
          <FormulaBlock
            formula={item.formula}
            title={item.formulaTitle ?? item.title}
          />
        )}
        {item.formulas &&
          asArray(item.formulas).map((formula, formulaIndex) => (
            <FormulaBlock
              key={formulaIndex}
              formula={
                typeof formula === "string"
                  ? formula
                  : formula?.formula ?? formula?.content
              }
              title={
                typeof formula === "object"
                  ? formula?.title
                  : undefined
              }
            />
          ))}
      </div>
    );
  }

  if (
    item.question ||
    item.prompt ||
    item.expectedAnswer ||
    item.answerText
  ) {
    return (
      <QuestionCard
        key={`structured-question-${index}`}
        item={item}
        index={index}
      />
    );
  }

  if (
    item.example ||
    item.exampleTitle ||
    item.code
  ) {
    return (
      <ExampleCard
        key={`structured-example-${index}`}
        item={item}
        index={index}
      />
    );
  }

  if (item.explanation) {
    return (
      <ExplanationCard
        key={`structured-explanation-${index}`}
        item={item}
      />
    );
  }

  return null;
}


function splitInlineBullets(text: string): {
  before: string;
  items: string[];
  after: string;
} | null {
  const value = clean(text);

  if (!value || !value.includes("•")) {
    return null;
  }

  const parts = value
    .split(/\s*•\s*/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    return null;
  }

  const before = parts[0];
  const items: string[] = [];
  let after = "";

  const trailingMarker = /\b(?:This stage is called|A complete flow is|The quality of|Therefore:)\b/i;

  for (const rawPart of parts.slice(1)) {
    const marker = rawPart.search(trailingMarker);

    if (marker >= 0) {
      const bulletText = rawPart.slice(0, marker).trim();
      const trailingText = rawPart.slice(marker).trim();

      if (bulletText) {
        items.push(bulletText);
      }

      after = trailingText;
      break;
    }

    items.push(rawPart);
  }

  if (!items.length) {
    return null;
  }

  return {
    before,
    items,
    after,
  };
}


/* -------------------------------------------------------------------------- */
/* SEMANTIC INTELLIGENCE                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Normalize common LaTeX-style mathematical notation into readable Unicode.
 * The lesson files can therefore use either LaTeX or Unicode without making
 * the renderer display raw control sequences such as \theta or \sqrt{}.
 */
function normalizeMathText(input: string): string {
  let value = clean(input);

  if (!value) return "";

  value = value
    .replace(/^\$\$([\s\S]*?)\$\$$/, "$1")
    .replace(/^\\\[([\s\S]*?)\\\]$/, "$1")
    .replace(/^\\\(([\s\S]*?)\\\)$/, "$1")
    .replace(/\\text\{([^{}]*)\}/g, "$1")
    .replace(/\\mathrm\{([^{}]*)\}/g, "$1")
    .replace(/\\mathbf\{([^{}]*)\}/g, "$1")
    .replace(/\\mathit\{([^{}]*)\}/g, "$1")
    .replace(/\\theta/g, "θ")
    .replace(/\\alpha/g, "α")
    .replace(/\\beta/g, "β")
    .replace(/\\gamma/g, "γ")
    .replace(/\\lambda/g, "λ")
    .replace(/\\mu/g, "μ")
    .replace(/\\sigma/g, "σ")
    .replace(/\\phi/g, "φ")
    .replace(/\\pi/g, "π")
    .replace(/\\tau/g, "τ")
    .replace(/\\eta/g, "η")
    .replace(/\\epsilon/g, "ε")
    .replace(/\\varepsilon/g, "ε")
    .replace(/\\Delta/g, "Δ")
    .replace(/\\Sigma/g, "Σ")
    .replace(/\\sum/g, "∑")
    .replace(/\\prod/g, "∏")
    .replace(/\\int/g, "∫")
    .replace(/\\partial/g, "∂")
    .replace(/\\nabla/g, "∇")
    .replace(/\\infty/g, "∞")
    .replace(/\\cdot/g, "·")
    .replace(/\\times/g, "×")
    .replace(/\\pm/g, "±")
    .replace(/\\leq/g, "≤")
    .replace(/\\le/g, "≤")
    .replace(/\\geq/g, "≥")
    .replace(/\\ge/g, "≥")
    .replace(/\\neq/g, "≠")
    .replace(/\\approx/g, "≈")
    .replace(/\\in/g, "∈")
    .replace(/\\propto/g, "∝")
    .replace(/\\rightarrow/g, "→")
    .replace(/\\to/g, "→")
    .replace(/\\left/g, "")
    .replace(/\\right/g, "")
    .replace(/\\,/g, " ")
    .replace(/\\;/g, " ")
    .replace(/\\!/g, "")
    .replace(/\\quad/g, "  ")
    .replace(/\\qquad/g, "    ");

  // Repeatedly unwrap simple \frac{a}{b} expressions.
  let previous = "";
  while (previous !== value) {
    previous = value;
    value = value.replace(
      /\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g,
      "($1) / ($2)"
    );
  }

  value = value.replace(
    /\\sqrt\s*\{([^{}]*)\}/g,
    "√($1)"
  );

  // Common hats/bars/tilde notation.
  value = value
    .replace(/\\hat\s*\{([^{}]*)\}/g, "ŷ")
    .replace(/\\bar\s*\{([^{}]*)\}/g, "ȳ")
    .replace(/\\tilde\s*\{([^{}]*)\}/g, "~$1")
    .replace(/\^\{([^{}]+)\}/g, "^($1)")
    .replace(/_\{([^{}]+)\}/g, "_($1)");

  return value
    .replace(/[ \t]+/g, " ")
    .replace(/\s*([=≈≤≥≠∈∝])\s*/g, " $1 ")
    .replace(/\s*([·×])\s*/g, " $1 ")
    .trim();
}

function isStandaloneOperator(value: any): boolean {
  const text = clean(value).replace(/\s+/g, "");
  return [
    "=",
    "≈",
    "≤",
    "≥",
    "≠",
    "∝",
    "→",
    "↔",
    "+",
    "−",
    "-",
    "×",
    "·",
  ].includes(text);
}

function isFormulaFragment(value: any): boolean {
  const text = clean(value);
  if (!text || text.length > 240) return false;

  if (isStandaloneOperator(text)) return true;

  return (
    isLikelyFormulaText(text) ||
    /^(?:P|p|L|D|E|H|KL|CE|ŷ|θ|x|y|z)\s*[\w₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹]*(?:\s*[\(\[])/.test(
      text
    ) ||
    /[∑∏∫√∇∂∞θλμσπφαβγτ]/.test(text)
  );
}

/**
 * Detect a formula that has been accidentally split over several array
 * elements, for example:
 *
 * P(x₁, x₂, ..., xₜ)
 * =
 * ∏ P(xᵢ | x₁, ..., xᵢ₋₁)
 */
function findEquationRun(
  items: string[],
  startIndex: number
): { formula: string; endIndex: number } | null {
  if (startIndex >= items.length) return null;

  const first = clean(items[startIndex]);
  if (!isFormulaFragment(first)) return null;

  let cursor = startIndex + 1;
  const parts = [first];
  let hasOperator = isStandaloneOperator(first);

  while (cursor < items.length && cursor < startIndex + 7) {
    const current = clean(items[cursor]);
    if (!current) break;

    if (
      isStandaloneOperator(current) ||
      isFormulaFragment(current)
    ) {
      parts.push(current);
      hasOperator = hasOperator || isStandaloneOperator(current);
      cursor += 1;
      continue;
    }

    break;
  }

  if (!hasOperator || parts.length < 2) {
    return null;
  }

  const joined = normalizeMathText(parts.join(" "));
  const signalCount = [
    /=/,
    /[∑∏∫√∇∂∞]/,
    /[θλμσπφαβγτŷȳ]/,
    /[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹]/,
    /\bP\s*\(/,
    /\barg(?:min|max)\b/,
  ].filter((pattern) => pattern.test(joined)).length;

  if (signalCount < 2) return null;

  return {
    formula: joined,
    endIndex: cursor,
  };
}

/**
 * Detect composition stacks such as:
 *
 * Foundation model
 * +
 * Application instructions
 * +
 * User context
 * +
 * External data
 *
 * These are relationships, not five independent paragraphs.
 */
function findCompositionRun(
  items: string[],
  startIndex: number
): { nodes: string[]; endIndex: number } | null {
  const first = clean(items[startIndex]);
  if (!first || first.length > 100 || isStandaloneOperator(first)) {
    return null;
  }

  const nodes = [first];
  let cursor = startIndex + 1;

  while (cursor + 1 < items.length) {
    const operator = clean(items[cursor]).replace(/\s+/g, "");
    const next = clean(items[cursor + 1]);

    if (
      operator !== "+" &&
      operator !== "＋"
    ) {
      break;
    }

    if (
      !next ||
      next.length > 100 ||
      isStandaloneFlowArrow(next) ||
      isLikelyFormulaText(next)
    ) {
      break;
    }

    nodes.push(next);
    cursor += 2;
  }

  if (nodes.length < 3) {
    return null;
  }

  return { nodes, endIndex: cursor };
}

function CompositionStack({
  nodes,
}: {
  nodes: string[];
}) {
  if (!nodes.length) return null;

  return (
    <div className="my-6 w-full">
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            <div className="w-full rounded-2xl border border-cyan-400/20 bg-slate-900/75 px-5 py-4 text-center shadow-sm">
              <div className="text-sm font-semibold leading-7 text-slate-100 sm:text-base">
                {node}
              </div>
            </div>

            {index < nodes.length - 1 && (
              <div
                aria-hidden="true"
                className="flex h-8 items-center justify-center text-lg font-bold text-cyan-400"
              >
                +
              </div>
            )}
          </React.Fragment>
        ))}

        <div className="mt-3 rounded-full border border-violet-500/20 bg-violet-500/[0.04] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-300">
          Combined application system
        </div>
      </div>
    </div>
  );
}

function CandidateGroup({
  items,
  label = "Possible candidates",
}: {
  items: string[];
  label?: string;
}) {
  const values = items.map(clean).filter(Boolean);
  if (!values.length) return null;

  return (
    <div className="my-6 rounded-2xl border border-amber-500/15 bg-amber-500/[0.025] p-5 sm:p-6">
      <div className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-amber-300">
        {label}
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-200"
          >
            <span className="mr-2 text-amber-400">•</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function DefinitionCard({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  return (
    <div className="my-5 rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.025] p-5">
      <div className="text-sm font-black text-cyan-300">
        {term}
      </div>
      <div className="mt-2 text-[16px] leading-8 text-slate-300 sm:text-[17px]">
        {definition}
      </div>
    </div>
  );
}

function parseDefinition(text: string): {
  term: string;
  definition: string;
} | null {
  const value = clean(text);

  if (!value || value.length > 320) return null;

  const colon = value.indexOf(":");
  if (colon <= 0 || colon > 65) return null;

  const term = value.slice(0, colon).trim();
  const definition = value.slice(colon + 1).trim();

  if (
    !term ||
    !definition ||
    term.split(/\s+/).length > 8 ||
    definition.split(/\s+/).length < 3
  ) {
    return null;
  }

  if (
    /[.!?]$/.test(term) ||
    /\b(?:http|www\.)/i.test(term)
  ) {
    return null;
  }

  return { term, definition };
}

function looksLikeCandidateContext(text: string): boolean {
  return /\b(?:possible|potential|candidate|next|outputs?|tokens?|choices?|options?|alternatives?|examples?)\b/i.test(
    text
  );
}

function looksLikeCandidateItem(text: string): boolean {
  const value = clean(text);
  if (!value || value.length > 55) return false;

  return (
    value.split(/\s+/).length <= 6 &&
    !/[.!?]$/.test(value) &&
    !/^(?:the|this|that|these|those|because|therefore|however|for|during|when|if|while)\b/i.test(
      value
    )
  );
}

function findCandidateRun(
  items: string[],
  startIndex: number
): { items: string[]; endIndex: number } | null {
  if (startIndex <= 0) return null;

  const previous = clean(items[startIndex - 1]);
  if (!looksLikeCandidateContext(previous)) return null;

  const candidates: string[] = [];
  let cursor = startIndex;

  while (
    cursor < items.length &&
    candidates.length < 12 &&
    looksLikeCandidateItem(items[cursor])
  ) {
    candidates.push(clean(items[cursor]));
    cursor += 1;
  }

  if (candidates.length < 3) return null;

  return {
    items: candidates,
    endIndex: cursor,
  };
}


function isLikelyFormulaText(text: string): boolean {
  const value = clean(text);

  if (!value || value.length > 220) {
    return false;
  }

  // Full-sentence prose should remain prose.
  if (
    /[.!?]$/.test(value) &&
    !/^[A-Za-zŷȳθλμσπφαβγτ][^.!?]{0,80}\s*(?:=|≈|≤|≥|≠|∈|∝)/.test(
      value
    ) &&
    !/^P\s*\(/.test(value)
  ) {
    return false;
  }

  const strongFormulaPatterns = [
    /^P\s*\(.+\)$/,
    /^[A-Za-zŷȳθλμσπφαβγτ][A-Za-z0-9_ŷȳθλμσπφαβγτ₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹*'′]*\s*(?:=|≈|≤|≥|≠|∈|∝)/,
    /^(?:θ|θ\*|L\(θ\)|D)\s*(?:=|≈|≤|≥|≠|∈)/,
    /\barg(?:min|max)\b/,
  ];

  if (
    strongFormulaPatterns.some((pattern) =>
      pattern.test(value)
    )
  ) {
    return true;
  }

  const mathSignals = [
    /[=≈≤≥≠∈∝]/,
    /[∑∏∫√∇∂∞]/,
    /[θλμσπφαβγτŷȳ]/,
    /[₀₁₂₃₄₅₆₇₈₉]/,
    /[⁰¹²³⁴⁵⁶⁷⁸⁹]/,
    /\^/,
    /\barg(?:min|max)\b/,
    /\b(?:log|exp|softmax|sigmoid)\s*\(/,
  ];

  const signals = mathSignals.filter((pattern) =>
    pattern.test(value)
  ).length;

  const wordCount = value
    .replace(/[()[\]{}=+\-*/|,:;<>]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return signals >= 2 && wordCount <= 16;
}

function SmartFormula({
  formula,
}: {
  formula: string;
}) {
  const displayFormula = normalizeMathText(formula);

  return (
    <div className="my-5 w-full overflow-x-auto">
      <div className="inline-flex min-w-[180px] items-center rounded-xl border border-violet-500/15 bg-violet-500/[0.025] px-5 py-3">
        <code className="whitespace-pre-wrap font-mono text-sm font-medium leading-8 text-violet-100 sm:text-base">
          {displayFormula}
        </code>
      </div>
    </div>
  );
}

function findArrowRun(
  text: string
): {
  before: string;
  label?: string;
  nodes: string[];
  arrows: string[];
  after: string;
} | null {
  const value = clean(text);

  if (!value) {
    return null;
  }

  const arrowPattern = /→|⇒|->|=>|↓|↑/g;
  const matches = [...value.matchAll(arrowPattern)];

  if (!matches.length) {
    return null;
  }

  for (
    let startIndex = 0;
    startIndex < matches.length;
    startIndex++
  ) {
    const first = matches[startIndex];
    const firstIndex =
      first.index ?? -1;

    if (firstIndex < 0) {
      continue;
    }

    const beforeArrow =
      value.slice(0, firstIndex);

    /*
     * Find the beginning of the sentence/statement
     * containing the flow.
     */
    const sentenceBoundary = Math.max(
      beforeArrow.lastIndexOf("\n"),
      beforeArrow.lastIndexOf("."),
      beforeArrow.lastIndexOf("?"),
      beforeArrow.lastIndexOf("!")
    );

    const statementStart =
      sentenceBoundary + 1;

    const statementPrefix =
      value
        .slice(
          statementStart,
          firstIndex
        )
        .trim();

    if (!statementPrefix) {
      continue;
    }

    /*
     * Handle:
     *
     * Predictive model: Input → prediction
     *
     * and:
     *
     * A useful hierarchy is:
     * AI → ML → Deep Learning
     *
     * A colon in the current statement separates
     * an optional label from the first node.
     */
    const colon =
      statementPrefix.lastIndexOf(":");

    let label = "";
    let firstNode = statementPrefix;

    if (colon >= 0) {
      const possibleLabel =
        statementPrefix
          .slice(0, colon)
          .trim();

      const possibleNode =
        statementPrefix
          .slice(colon + 1)
          .trim();

      if (
        possibleLabel &&
        possibleNode
      ) {
        label = possibleLabel;
        firstNode = possibleNode;
      }
    }

    if (
      firstNode.length > 100 ||
      /[.!?]$/.test(firstNode)
    ) {
      continue;
    }

    /*
     * Single-arrow relationships should be compact.
     * Multiple-arrow chains can have more descriptive nodes.
     */
    if (
      matches.length === 1 &&
      !label &&
      firstNode.split(/\s+/).length > 7
    ) {
      continue;
    }

    /*
     * Collect the node between each arrow.
     */
    const nodes = [firstNode];
    const arrows: string[] = [];

    let previousEnd =
      firstIndex +
      first[0].length;

    let lastArrowIndex =
      startIndex;

    for (
      let i = startIndex + 1;
      i < matches.length;
      i++
    ) {
      const current =
        matches[i];

      const currentIndex =
        current.index ?? -1;

      if (currentIndex < 0) {
        break;
      }

      const middleNode =
        value
          .slice(
            previousEnd,
            currentIndex
          )
          .trim();

      if (
        !middleNode ||
        middleNode.length > 100 ||
        /[.!?]$/.test(middleNode)
      ) {
        break;
      }

      arrows.push(
        normalizeFlowArrow(
          matches[
            lastArrowIndex
          ][0]
        )
      );

      nodes.push(middleNode);

      previousEnd =
        currentIndex +
        current[0].length;

      lastArrowIndex = i;
    }

    /*
     * Determine the final node from the text after
     * the final arrow.
     */
    const tail =
      value.slice(previousEnd).trim();

    if (!tail) {
      continue;
    }

    /*
     * Separate the final flow node from the next
     * explanatory sentence.
     *
     * Example:
     *
     * Foundation Models → Generative AI Applications
     * This hierarchy is not...
     */
    const afterBoundary =
      tail.search(
        /\s+(?=(?:This|The|It|A|An|Therefore|For|During|Each|In|Overall|However|These|Those)\b)/
      );

    let finalNode =
      afterBoundary >= 0
        ? tail
            .slice(0, afterBoundary)
            .trim()
        : tail;

    let after =
      afterBoundary >= 0
        ? tail
            .slice(afterBoundary)
            .trim()
        : "";

    /*
     * A final node may have ordinary sentence punctuation
     * because it is written as a complete statement.
     * Remove only the punctuation from the visual node.
     */
    finalNode =
      finalNode.replace(
        /[.!?]+$/,
        ""
      ).trim();

    if (
      !finalNode ||
      finalNode.length > 110
    ) {
      continue;
    }

    arrows.push(
      normalizeFlowArrow(
        matches[lastArrowIndex][0]
      )
    );
    nodes.push(finalNode);

    /*
     * A single arrow without a label and with a
     * long/descriptive right side is usually prose,
     * not a diagram.
     */
    if (
      nodes.length === 2 &&
      !label &&
      (
        nodes[0].split(/\s+/).length > 7 ||
        nodes[1].split(/\s+/).length > 9
      )
    ) {
      continue;
    }

    /*
     * Preserve everything before the flow as ordinary prose.
     * If a label was used, the label itself stays attached
     * to the flow rather than becoming a paragraph.
     */
    const before =
      value
        .slice(
          0,
          statementStart
        )
        .trim();

    return {
      before,
      label: label || undefined,
      nodes,
      arrows,
      after,
    };
  }

  return null;
}

function isAsciiTreeLine(value: string): boolean {
  const text = String(value ?? "").replace(/\s+$/, "");
  if (!text.trim()) return false;

  return (
    /(?:├|└|│|╭|╰|┣|┗|┃|┌|┐|└|┘)/.test(text) &&
    (/(?:├──|└──|├─|└─|╰─|╭─|┣━|┗━)/.test(text) || /^\s*[│┃|]+\s*$/.test(text))
  );
}

type AsciiTreeNode = {
  label: string;
  depth: number;
  branch: "root" | "branch" | "connector";
};

function parseAsciiTreeLines(lines: string[]): {
  title: string;
  nodes: AsciiTreeNode[];
} | null {
  const raw = lines
    .map((line) => String(line ?? "").replace(/\s+$/, ""))
    .filter((line) => line.trim());

  if (raw.length < 3) return null;

  const branchLines = raw.filter((line) =>
    /(?:├──|└──|├─|└─|╰─|╭─|┣━|┗━)/.test(line)
  );

  if (branchLines.length < 2) return null;

  const firstBranchIndex = raw.findIndex((line) =>
    /(?:├──|└──|├─|└─|╰─|╭─|┣━|┗━)/.test(line)
  );

  const titleCandidate = firstBranchIndex > 0
    ? raw.slice(0, firstBranchIndex).find((line) => {
        const value = line.trim();
        return value && !/^[|│┃]+$/.test(value);
      })
    : "";

  const title = titleCandidate?.trim() ?? "";
  const nodes: AsciiTreeNode[] = [];

  for (const line of raw.slice(firstBranchIndex)) {
    if (/^[\s|│┃]+$/.test(line)) continue;

    const branchMatch = line.match(/(?:├──|└──|├─|└─|╰─|╭─|┣━|┗━)\s*(.*)$/);
    if (!branchMatch) continue;

    const label = branchMatch[1].trim();
    if (!label) continue;

    const prefix = line.slice(0, branchMatch.index ?? 0);

    /*
     * Each visible vertical connector represents one hierarchy level.
     * The spaces used by the common ASCII tree format are also counted
     * so trees remain correct when a lesson uses mixed spacing.
     */
    const verticalDepth = (prefix.match(/[│┃|]/g) ?? []).length;
    const groupedSpaceDepth = Math.floor(
      (prefix.replace(/[│┃|]/g, "").length) / 4
    );

    const depth = Math.max(
      verticalDepth,
      groupedSpaceDepth
    );

    nodes.push({
      label,
      depth,
      branch: "branch",
    });
  }

  if (nodes.length < 2) return null;

  return { title, nodes };
}

function AsciiHierarchy({
  title,
  nodes,
}: {
  title: string;
  nodes: AsciiTreeNode[];
}) {
  if (!nodes.length) return null;

  const maxDepth = Math.max(...nodes.map((node) => node.depth), 0);

  return (
    <section className="my-8 w-full rounded-3xl border border-cyan-500/15 bg-slate-950/70 p-5 sm:p-7">
      {title && (
        <div className="mb-6 text-[17px] font-bold leading-8 text-white sm:text-[18px]">
          {title}
        </div>
      )}

      <div className="relative w-full overflow-x-auto">
        <div className="min-w-[680px] space-y-1 py-1">
          {nodes.map((node, index) => {
            const next = nodes[index + 1];
            const hasChildren = next && next.depth > node.depth;
            const isLastAtDepth = !next || next.depth < node.depth;

            return (
              <div
                key={`${node.label}-${index}`}
                className="relative"
                style={{ paddingLeft: `${node.depth * 34}px` }}
              >
                {node.depth > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 border-l border-slate-700/80"
                    style={{ left: `${(node.depth - 1) * 34 + 14}px` }}
                  />
                )}

                <div className="relative flex min-h-[48px] items-center gap-3">
                  {node.depth > 0 && (
                    <span
                      aria-hidden="true"
                      className="absolute -left-5 top-1/2 w-5 -translate-y-1/2 border-t border-slate-700/80"
                    />
                  )}

                  <div
                    className={cx(
                      "relative z-10 w-full rounded-xl border px-4 py-3 text-left transition",
                      node.depth === 0
                        ? "border-cyan-400/25 bg-cyan-400/[0.045]"
                        : "border-slate-800 bg-slate-900/75"
                    )}
                  >
                    <span className={cx(
                      "text-[16px] leading-7 sm:text-[17px]",
                      node.depth === 0
                        ? "font-bold text-white"
                        : "font-medium text-slate-300"
                    )}>
                      {node.label}
                    </span>
                  </div>
                </div>

                {hasChildren && (
                  <div className="pointer-events-none absolute bottom-[-1px] left-0 h-3 w-full" />
                )}

                {isLastAtDepth && node.depth > 0 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-1/2 border-l border-slate-700/80"
                    style={{ left: `${(node.depth - 1) * 34 + 14}px` }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {maxDepth > 0 && (
        <div className="mt-5 text-xs leading-6 text-slate-500">
          Hierarchy is shown from broader categories to more specific techniques.
        </div>
      )}
    </section>
  );
}

function findAsciiTreeRun(
  items: string[],
  startIndex: number
): { title: string; nodes: AsciiTreeNode[]; endIndex: number } | null {
  const first = clean(items[startIndex]);
  if (!first) return null;

  const looksLikeBranch = (value: string) =>
    /(?:├──|└──|├─|└─|╰─|╭─|┣━|┗━)/.test(value);

  const looksLikeConnector = (value: string) =>
    /^[\s|│┃]+$/.test(value) && /[|│┃]/.test(value);

  /*
   * A lesson often introduces a hierarchy with one sentence first:
   *
   *   Major categories include:
   *   PROMPTING TECHNIQUES
   *   |
   *   ├── Direct prompting
   *
   * We must start at PROMPTING TECHNIQUES, not at the introductory
   * sentence, otherwise the hierarchy absorbs unrelated prose.
   */
  let firstBranchIndex = -1;

  for (
    let cursor = startIndex;
    cursor < Math.min(items.length, startIndex + 8);
    cursor += 1
  ) {
    if (looksLikeBranch(String(items[cursor] ?? ""))) {
      firstBranchIndex = cursor;
      break;
    }
  }

  if (firstBranchIndex < 0) return null;

  let rootIndex = firstBranchIndex - 1;

  while (
    rootIndex >= startIndex &&
    looksLikeConnector(String(items[rootIndex] ?? ""))
  ) {
    rootIndex -= 1;
  }

  if (rootIndex < startIndex) return null;

  const rootText = clean(items[rootIndex]);

  /* Introductory prose is not a hierarchy root. */
  if (
    !rootText ||
    rootText.length > 120 ||
    /[.!?]$/.test(rootText) ||
    isLikelyFormulaText(rootText)
  ) {
    return null;
  }

  const collected: string[] = [];
  let cursor = rootIndex;
  let branchCount = 0;

  while (cursor < items.length) {
    const raw = String(items[cursor] ?? "").replace(/\s+$/, "");
    const trimmed = raw.trim();

    if (!trimmed) break;

    if (looksLikeBranch(raw)) {
      collected.push(raw);
      branchCount += 1;
      cursor += 1;
      continue;
    }

    if (looksLikeConnector(raw)) {
      collected.push(raw);
      cursor += 1;
      continue;
    }

    /*
     * Only the root is allowed to be an ordinary text line. Once the
     * tree has started, another ordinary paragraph ends the structure.
     */
    if (cursor === rootIndex) {
      collected.push(raw);
      cursor += 1;
      continue;
    }

    break;
  }

  if (branchCount < 2) return null;

  const parsed = parseAsciiTreeLines(collected);
  if (!parsed) return null;

  return {
    title: parsed.title || rootText,
    nodes: parsed.nodes,
    endIndex: cursor,
  };
}

function splitSmartText(
  value: string
): string[] {
  const text = clean(value);

  if (!text) return [];

  /*
   * Preserve explicit line breaks as separate educational
   * units whenever possible.
   */
  const lines = text
    .split(/\n+/)
    .map((line) => {
      const raw = line.replace(/\s+$/, "");
      return isAsciiTreeLine(raw) ? raw : raw.trim();
    })
    .filter((line) => line.trim());

  if (lines.length > 1) {
    return lines.flatMap((line) =>
      splitSmartText(line)
    );
  }

  /*
   * Long prose is split at strong discourse boundaries,
   * not blindly every two sentences.
   */
  const boundaryPattern =
    /\s+(?=(?:This hierarchy|This relationship|This distinction|This process|This means|The hierarchy|The relationship|The distinction|The important point|The key idea|In practice|Therefore|Overall|However|For example|During training|During inference|At the application level|At a high level)\b)/g;

  const chunks = text
    .split(boundaryPattern)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  if (chunks.length > 1) {
    return chunks;
  }

  /*
   * Only split very long prose when it clearly contains
   * multiple complete sentences.
   */
  if (text.length > 650) {
    const sentences =
      text.match(
        /[^.!?]+[.!?]+(?:\s+|$)/g
      );

    if (sentences && sentences.length >= 3) {
      const result: string[] = [];
      let buffer = "";

      for (const sentence of sentences) {
        const next =
          `${buffer} ${sentence}`.trim();

        if (
          buffer &&
          next.length > 360
        ) {
          result.push(buffer.trim());
          buffer = sentence.trim();
        } else {
          buffer = next;
        }
      }

      if (buffer) {
        result.push(buffer.trim());
      }

      return result.filter(Boolean);
    }
  }

  return [text];
}

function SmartParagraph({
  text,
}: {
  text: string;
}) {
  const value = clean(text);

  if (!value) {
    return null;
  }

  /*
   * 1. Mathematics comes first.
   *
   * This keeps equations from being mistaken for flows, definitions,
   * or ordinary prose.
   */
  if (isLikelyFormulaText(value)) {
    return <SmartFormula formula={value} />;
  }

  /*
   * 2. Explicit bullet characters inside plain content.
   */
  const bulletData = splitInlineBullets(value);

  if (bulletData) {
    return (
      <div className="space-y-4">
        {bulletData.before && (
          <p className="w-full max-w-5xl text-left text-[17px] leading-8 text-slate-300 sm:text-[18px]">
            {bulletData.before}
          </p>
        )}

        <BulletList items={bulletData.items} />

        {bulletData.after && (
          <SmartParagraph text={bulletData.after} />
        )}
      </div>
    );
  }

  /*
   * 3. Definitions such as:
   *
   * Token: A small unit used by a language model.
   *
   * Only short, clearly labelled definitions are promoted so normal
   * prose containing a colon is not redesigned.
   */
  const definition = parseDefinition(value);

  if (definition) {
    return (
      <DefinitionCard
        term={definition.term}
        definition={definition.definition}
      />
    );
  }

  /*
   * 4. Arrow-based relationships.
   */
  const flow = findArrowRun(value);

  if (flow) {
    return (
      <div className="space-y-3">
        {flow.before && (
          <p className="w-full max-w-5xl text-left text-[17px] leading-8 text-slate-300 sm:text-[18px]">
            {flow.before}
          </p>
        )}

        <ContentFlow
          nodes={flow.nodes}
          arrows={flow.arrows}
          label={flow.label}
          compact={flow.nodes.length <= 3}
        />

        {flow.after && (
          <SmartParagraph text={flow.after} />
        )}
      </div>
    );
  }

  /*
   * 5. Ordinary educational paragraph.
   */
  return (
    <p className="w-full max-w-5xl text-left text-[17px] leading-8 text-slate-300 sm:text-[18px]">
      {value}
    </p>
  );
}

function Paragraphs({
  value,
}: {
  value: any;
}) {
  const values = Array.isArray(value) ? value : [value];

  if (!values.length) {
    return null;
  }

  const elements: React.ReactNode[] = [];
  let paragraphBuffer: string[] = [];

  const flushParagraphBuffer = () => {
    if (!paragraphBuffer.length) return;

    let index = 0;

    while (index < paragraphBuffer.length) {
      /*
       * Highest-confidence structural detection: an ASCII/tree hierarchy
       * must remain one visual unit. It must be detected before equations,
       * candidate groups, compositions, or ordinary flow parsing so those
       * components cannot split the hierarchy in the middle.
       */
      const hierarchy = findAsciiTreeRun(
        paragraphBuffer,
        index
      );

      if (hierarchy) {
        elements.push(
          <AsciiHierarchy
            key={`ascii-hierarchy-${elements.length}`}
            title={hierarchy.title}
            nodes={hierarchy.nodes}
          />
        );
        index = hierarchy.endIndex;
        continue;
      }

      /*
       * Highest-confidence multi-line formula grouping.
       */
      const equation = findEquationRun(
        paragraphBuffer,
        index
      );

      if (equation) {
        elements.push(
          <SmartFormula
            key={`equation-${elements.length}`}
            formula={equation.formula}
          />
        );
        index = equation.endIndex;
        continue;
      }

      /*
       * Composition systems such as:
       *
       * Model + Instructions + Context + Tools
       */
      const composition = findCompositionRun(
        paragraphBuffer,
        index
      );

      if (composition) {
        elements.push(
          <CompositionStack
            key={`composition-${elements.length}`}
            nodes={composition.nodes}
          />
        );
        index = composition.endIndex;
        continue;
      }

      /*
       * Context-aware candidate groups. The preceding sentence must
       * explicitly indicate candidates/options/tokens/outputs.
       */
      const candidates = findCandidateRun(
        paragraphBuffer,
        index
      );

      if (candidates) {
        elements.push(
          <CandidateGroup
            key={`candidate-${elements.length}`}
            items={candidates.items}
            label="Possible next choices"
          />
        );
        index = candidates.endIndex;
        continue;
      }

      const flow = parseTextFlow(
        paragraphBuffer,
        index
      );

      if (flow) {
        elements.push(
          <ContentFlow
            key={`content-flow-${elements.length}`}
            nodes={flow.nodes}
            arrows={flow.arrows}
          />
        );
        index = flow.endIndex;
        continue;
      }

      const text = clean(paragraphBuffer[index]);

      if (text) {
        elements.push(
          <SmartParagraph
            key={`paragraph-${elements.length}`}
            text={text}
          />
        );
      }

      index += 1;
    }

    paragraphBuffer = [];
  };

  values.forEach((item, index) => {
    if (isObject(item)) {
      const structured = renderStructuredParagraphItem(
        item,
        index
      );

      if (structured) {
        flushParagraphBuffer();
        elements.push(structured);
        return;
      }
    }

    if (
      typeof item === "string" ||
      typeof item === "number" ||
      typeof item === "boolean"
    ) {
      const text = clean(item);

      if (text) {
        splitSmartText(text).forEach((piece) =>
          paragraphBuffer.push(piece)
        );
      }

      return;
    }

    if (Array.isArray(item)) {
      item.forEach((child) => {
        if (isObject(child)) {
          const structured = renderStructuredParagraphItem(
            child,
            index
          );

          if (structured) {
            flushParagraphBuffer();
            elements.push(structured);
            return;
          }
        }

        const text = clean(child);

        if (text) {
          splitSmartText(text).forEach((piece) =>
            paragraphBuffer.push(piece)
          );
        }
      });
    }
  });

  flushParagraphBuffer();

  return (
    <div className="w-full max-w-5xl space-y-5 text-left">
      {elements}
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
            className="flex w-full max-w-5xl gap-3 text-left text-[17px] leading-8 text-slate-300 sm:text-[18px]"
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
            className="flex gap-4 text-left"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-xs font-bold text-cyan-300">
              {index + 1}
            </div>

            <p className="text-[16px] leading-8 text-slate-300 sm:text-[17px]">
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
  const match = cleanTitle.match(
    /^\s*(\d+)[\s.)-]+(.+)$/
  );

  const sectionNumber = match?.[1] ?? "";
  const sectionTitle =
    match?.[2]?.trim() ?? cleanTitle;

  return (
    <div className="mb-7">
      {cleanEyebrow && (
        <div className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-400">
          {cleanEyebrow}
        </div>
      )}

      {cleanTitle && (
        <div className="flex items-start gap-3 sm:gap-4">
          {sectionNumber && (
            <span className="mt-1 flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-2 font-mono text-xs font-black text-cyan-300 sm:h-9 sm:min-w-9">
              {sectionNumber}
            </span>
          )}

          <h2 className="min-w-0 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
            {sectionTitle}
          </h2>
        </div>
      )}

      {description && (
        <div className="mt-4 w-full max-w-5xl">
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

              <p className="text-[16px] leading-8 text-slate-300 sm:text-[17px]">
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
  const value = normalizeMathText(clean(formula));

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
  direction: "horizontal" | "vertical";
  title?: string;
  groups?: Array<{ title: string; items: string[] }>;
} {
  let source = process;
  let direction: "horizontal" | "vertical" = "horizontal";
  let title = "";

  if (source && typeof source === "object" && !Array.isArray(source)) {
    const requestedDirection = firstText(
      source.direction,
      source.orientation,
      source.layout
    ).toLowerCase();

    if (
      requestedDirection === "vertical" ||
      requestedDirection === "down"
    ) {
      direction = "vertical";
    }

    title = firstText(source.title, source.heading, source.label);

    source =
      source.steps ??
      source.items ??
      source.nodes ??
      source.flow ??
      source.process ??
      source.stages ??
      [];
  }

  const rawValues: any[] = [];

  const collect = (value: any) => {
    if (value === null || value === undefined || value === "") return;

    if (Array.isArray(value)) {
      value.forEach(collect);
      return;
    }

    if (typeof value === "object") {
      const nestedTitle = firstText(
        value.title,
        value.name,
        value.label,
        value.heading,
        value.text
      );

      const nestedDescription = firstText(
        value.description,
        value.content,
        value.explanation,
        value.details
      );

      const nestedChildren =
        value.steps ??
        value.items ??
        value.nodes ??
        value.children ??
        value.branches;

      if (nestedChildren !== undefined) {
        if (nestedTitle) {
          rawValues.push({
            title: nestedTitle,
            description: nestedDescription,
          });
        }
        collect(nestedChildren);
        return;
      }

      rawValues.push(value);
      return;
    }

    const text = String(value);
    const lines = text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length > 1) {
      lines.forEach((line) => rawValues.push(line));
    } else {
      rawValues.push(text);
    }
  };

  collect(source);

  const cleanFlowLabel = (value: any): string => {
    let result = clean(value);

    if (!result) return "";

    // Remove ASCII-tree / box-drawing prefixes.
    result = result
      .replace(/^[\s|│┃├└┌┐┬┤┝┥╰╭╴─—\-]+/u, "")
      .replace(/[|│┃]+$/u, "")
      .trim();

    // Remove decorative separators that are not content.
    result = result.replace(/^[+•·]+\s*/u, "").trim();

    return result;
  };

  const isStructuralOnly = (value: string): boolean => {
    const normalized = value.replace(/\s+/g, "");
    return (
      !normalized ||
      /^[|│┃├└┌┐┬┤┝┥╰╭╴─—\-+_.:]+$/u.test(normalized) ||
      isStandaloneFlowArrow(normalized)
    );
  };

  const cleanedValues = rawValues
    .map((item) => {
      if (typeof item === "string") {
        return {
          title: cleanFlowLabel(item),
          original: item,
        };
      }

      return {
        title: cleanFlowLabel(
          firstText(
            item?.title,
            item?.name,
            item?.label,
            item?.heading,
            item?.text
          )
        ),
        description: firstText(
          item?.description,
          item?.content,
          item?.explanation,
          item?.details
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
    .filter((item) => item.title && !isStructuralOnly(item.title));

  // Infer a vertical flow for multi-stage educational processes.
  if (cleanedValues.length >= 3 && !title) {
    const firstTitle = cleanedValues[0]?.title?.toLowerCase() ?? "";

    if (
      firstTitle.includes("complex task") ||
      firstTitle.includes("input") ||
      firstTitle.includes("problem") ||
      firstTitle.includes("request")
    ) {
      direction = "vertical";
    }
  }

  const steps: FlowStep[] = cleanedValues.map((item, index) => ({
    title: item.title || `Step ${index + 1}`,
    description: item.description,
    input: item.input,
    output: item.output,
  }));

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
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 px-5 py-4 shadow-sm">
      <div className="text-[16px] font-bold leading-7 text-white sm:text-[17px]">
        {step.title}
      </div>

      {step.description && (
        <p className="mt-2 text-[14px] leading-7 text-slate-400 sm:text-[15px]">
          {step.description}
        </p>
      )}

      {step.input && (
        <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-[13px] leading-6 text-slate-400">
          <span className="font-bold text-slate-500">IN:</span>{" "}
          {step.input}
        </div>
      )}

      {step.output && (
        <div className="mt-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-[13px] leading-6 text-slate-400">
          <span className="font-bold text-slate-500">OUT:</span>{" "}
          {step.output}
        </div>
      )}
    </div>
  );
}

function DecompositionFlow({
  steps,
}: {
  steps: FlowStep[];
}) {
  if (steps.length < 3) return null;

  const subtaskIndexes = steps
    .map((step, index) => ({
      step,
      index,
    }))
    .filter(({ step }) =>
      /\b(?:subtask|sub-task|task\s*[A-Z]?)\b/i.test(step.title)
    );

  if (subtaskIndexes.length < 2) return null;

  const firstSubtask = subtaskIndexes[0].index;
  const lastSubtask =
    subtaskIndexes[subtaskIndexes.length - 1].index;

  const before = steps.slice(0, firstSubtask);
  const subtasks = subtaskIndexes.map(({ step }) => step);
  const after = steps.slice(lastSubtask + 1);

  return (
    <div className="my-8 w-full">
      {before.length > 0 && (
        <div className="mx-auto max-w-3xl">
          {before.map((step, index) => (
            <React.Fragment key={`before-${index}`}>
              <FlowStepBox step={step} />
              {index < before.length - 1 && (
                <div className="flex h-8 items-center justify-center text-lg font-bold text-cyan-400">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {before.length > 0 && (
        <div className="flex h-8 items-center justify-center text-lg font-bold text-cyan-400">
          ↓
        </div>
      )}

      <div className="rounded-2xl border border-cyan-500/15 bg-slate-950/60 p-4 sm:p-5">
        <div className="mb-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
          Parallel Subtasks
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {subtasks.map((step, index) => (
            <div key={`subtask-${index}`} className="relative">
              <FlowStepBox step={step} />
              {index < subtasks.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-cyan-400 lg:block"
                >
                  •
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {after.length > 0 && (
        <div className="mx-auto mt-6 max-w-3xl">
          <div className="flex h-8 items-center justify-center text-lg font-bold text-cyan-400">
            ↓
          </div>

          {after.map((step, index) => (
            <React.Fragment key={`after-${index}`}>
              <FlowStepBox step={step} />
              {index < after.length - 1 && (
                <div className="flex h-8 items-center justify-center text-lg font-bold text-cyan-400">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
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
  const normalized = normalizeFlow(process);

  if (!normalized.steps.length) {
    return null;
  }

  const decomposition = DecompositionFlow({
    steps: normalized.steps,
  });

  if (decomposition) {
    return (
      <section className="my-8 w-full text-left">
        {normalized.title && (
          <div className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
            {normalized.title}
          </div>
        )}
        {decomposition}
      </section>
    );
  }

  const vertical = normalized.direction === "vertical";

  return (
    <section className="my-8 w-full text-left">
      {normalized.title && (
        <div className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
          {normalized.title}
        </div>
      )}

      {vertical ? (
        <div className="mx-auto flex max-w-3xl flex-col">
          {normalized.steps.map((step, index) => (
            <React.Fragment key={index}>
              <FlowStepBox step={step} />

              {index < normalized.steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="flex h-8 items-center justify-center text-lg font-bold text-cyan-400"
                >
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {normalized.steps.map((step, index) => (
            <div key={index} className="relative">
              <FlowStepBox step={step} />

              {index < normalized.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-bold text-cyan-400 xl:block"
                >
                  →
                </span>
              )}
            </div>
          ))}
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
  if (tree === null || tree === undefined || tree === "") {
    return null;
  }

  const hasNodeContent = (node: any): boolean => {
    if (typeof node === "string") {
      return clean(node).length > 0;
    }

    if (!node || typeof node !== "object") {
      return false;
    }

    const title = firstText(
      node.title,
      node.name,
      node.label,
      node.heading,
      node.text
    );

    const description = firstText(
      node.description,
      node.content,
      node.explanation,
      node.details
    );

    const children = asArray(
      node.children ??
        node.items ??
        node.branches ??
        node.nodes ??
        node.steps
    );

    return (
      Boolean(title || description) ||
      children.some(hasNodeContent)
    );
  };

  const unwrapTree = (value: any): any => {
    if (value === null || value === undefined) {
      return null;
    }

    if (Array.isArray(value)) {
      const filtered = value.filter(hasNodeContent);
      return filtered.length ? filtered : null;
    }

    if (typeof value === "string") {
      return clean(value) ? value : null;
    }

    if (typeof value !== "object") {
      return null;
    }

    if (hasNodeContent(value)) {
      return value;
    }

    const candidates = [
      value.tree,
      value.root,
      value.rootNode,
      value.classification,
      value.classificationTree,
      value.data,
      value.content,
      value.structure,
      value.nodes,
      value.items,
      value.children,
    ];

    for (const candidate of candidates) {
      const normalized = unwrapTree(candidate);

      if (
        normalized !== null &&
        normalized !== undefined &&
        (
          Array.isArray(normalized)
            ? normalized.length > 0
            : hasNodeContent(normalized)
        )
      ) {
        return normalized;
      }
    }

    return null;
  };

  const normalizedTree = unwrapTree(tree);

  if (
    normalizedTree === null ||
    normalizedTree === undefined ||
    (Array.isArray(normalizedTree) && normalizedTree.length === 0) ||
    !hasNodeContent(normalizedTree)
  ) {
    return null;
  }

  const renderNode = (
    node: any,
    depth = 0
  ): React.ReactNode => {
    if (typeof node === "string") {
      const text = clean(node);
      if (!text) return null;

      return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-[16px] leading-7 text-slate-300 sm:text-[17px]">
          {text}
        </div>
      );
    }

    if (!node || typeof node !== "object") {
      return null;
    }

    const title = firstText(
      node.title,
      node.name,
      node.label,
      node.heading,
      node.text
    );

    const description = firstText(
      node.description,
      node.content,
      node.explanation,
      node.details
    );

    const children = asArray(
      node.children ??
        node.items ??
        node.branches ??
        node.nodes ??
        node.steps
    ).filter(hasNodeContent);

    if (!title && !description && children.length === 0) {
      const nested = unwrapTree(node);
      if (nested && nested !== node) {
        return renderNode(nested, depth);
      }
      return null;
    }

    return (
      <div>
        {(title || description) && (
          <div
            className={cx(
              "rounded-xl border px-4 py-3",
              depth === 0
                ? "border-cyan-500/25 bg-cyan-500/[0.05]"
                : "border-slate-800 bg-slate-900/80"
            )}
          >
            {title && (
              <div className="text-[16px] font-semibold leading-7 text-white sm:text-[17px]">
                {title}
              </div>
            )}

            {description && (
              <div className="mt-1 text-[15px] leading-7 text-slate-400 sm:text-[16px]">
                {description}
              </div>
            )}
          </div>
        )}

        {children.length > 0 && (
          <div
            className={cx(
              "space-y-3",
              title || description
                ? "mt-3 ml-5 border-l border-slate-800 pl-5"
                : ""
            )}
          >
            {children.map((child, index) => (
              <React.Fragment key={index}>
                {renderNode(child, depth + 1)}
              </React.Fragment>
            ))}
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

      {Array.isArray(normalizedTree) ? (
        <div className="space-y-3">
          {normalizedTree.map((node, index) => (
            <React.Fragment key={index}>
              {renderNode(node, 0)}
            </React.Fragment>
          ))}
        </div>
      ) : (
        renderNode(normalizedTree)
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
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

        <p className="mt-3 max-w-3xl text-[16px] leading-8 text-slate-400 sm:text-[17px]">
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
                        <p className="mt-2 text-[15px] leading-8 text-slate-400 sm:text-[16px]">
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

                  <p className="text-[16px] leading-8 text-slate-300 sm:text-[17px]">
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
                <div className="flex gap-4 text-left">
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
                <div className="flex gap-4 text-left">
                  <span className="font-mono text-xs font-bold text-violet-300">
                    Q{index + 1}
                  </span>

                  <p className="text-[16px] leading-8 text-slate-300 sm:text-[17px]">
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
                <div className="flex gap-4 text-left">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-xs font-black text-slate-950">
                    {index + 1}
                  </div>

                  <p className="text-[16px] leading-8 text-slate-200 sm:text-[17px]">
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


function visualKind(text: string): "transformer" | "rag" | "embedding" | "flow" | "generic" {
  const value = text.toLowerCase();

  if (
    value.includes("transformer") ||
    value.includes("attention") ||
    value.includes("encoder") ||
    value.includes("decoder")
  ) {
    return "transformer";
  }

  if (
    value.includes("rag") ||
    value.includes("retrieval") ||
    value.includes("vector database") ||
    value.includes("knowledge")
  ) {
    return "rag";
  }

  if (
    value.includes("embedding") ||
    value.includes("latent") ||
    value.includes("vector")
  ) {
    return "embedding";
  }

  if (
    value.includes("flow") ||
    value.includes("pipeline") ||
    value.includes("architecture") ||
    value.includes("workflow") ||
    value.includes("training") ||
    value.includes("inference")
  ) {
    return "flow";
  }

  return "generic";
}

function GeneratedDiagram({
  title,
  description,
  index,
}: {
  title: string;
  description?: string;
  index: number;
}) {
  const kind = visualKind(`${title} ${description ?? ""}`);

  const nodeClass =
    "fill-slate-900 stroke-cyan-400/50";
  const labelClass =
    "fill-slate-100 text-[13px] font-semibold";
  const arrowClass =
    "stroke-cyan-400";
  const mutedClass =
    "fill-slate-400 text-[10px]";

  if (kind === "transformer") {
    return (
      <svg
        viewBox="0 0 900 360"
        className="h-auto w-full"
        role="img"
        aria-label={`${title} generated diagram`}
      >
        <defs>
          <linearGradient id={`tf-${index}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#0e7490" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        <rect
          x="20"
          y="20"
          width="860"
          height="320"
          rx="28"
          fill="#020617"
          stroke="#1e293b"
        />

        <text
          x="450"
          y="52"
          textAnchor="middle"
          className="fill-cyan-300 text-[13px] font-bold"
        >
          CLOUDLEARN · GENERATED CONCEPT DIAGRAM
        </text>

        {[
          ["Input Tokens", 65],
          ["Embeddings", 225],
          ["Self-Attention", 385],
          ["Feed Forward", 545],
          ["Output", 705],
        ].map(([label, x]) => (
          <g key={String(label)}>
            <rect
              x={Number(x)}
              y="135"
              width="130"
              height="82"
              rx="18"
              className={nodeClass}
            />
            <text
              x={Number(x) + 65}
              y="169"
              textAnchor="middle"
              className={labelClass}
            >
              {String(label)}
            </text>
            <text
              x={Number(x) + 65}
              y="190"
              textAnchor="middle"
              className={mutedClass}
            >
              Transformer stage
            </text>
          </g>
        ))}

        {[195, 355, 515, 675].map((x) => (
          <path
            key={x}
            d={`M ${x} 176 L ${x + 28} 176`}
            className={arrowClass}
            strokeWidth="3"
            markerEnd={`url(#arrow-${index})`}
          />
        ))}

        <defs>
          <marker
            id={`arrow-${index}`}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="#22d3ee" />
          </marker>
        </defs>

        <rect
          x="255"
          y="265"
          width="390"
          height="42"
          rx="12"
          fill={`url(#tf-${index})`}
          opacity="0.18"
        />
        <text
          x="450"
          y="291"
          textAnchor="middle"
          className="fill-slate-300 text-[11px]"
        >
          Learn the transformation from representation to prediction
        </text>
      </svg>
    );
  }

  if (kind === "rag") {
    return (
      <svg
        viewBox="0 0 900 380"
        className="h-auto w-full"
        role="img"
        aria-label={`${title} generated diagram`}
      >
        <rect
          x="20"
          y="20"
          width="860"
          height="340"
          rx="28"
          fill="#020617"
          stroke="#1e293b"
        />

        <text
          x="450"
          y="52"
          textAnchor="middle"
          className="fill-cyan-300 text-[13px] font-bold"
        >
          CLOUDLEARN · RETRIEVAL-AUGMENTED GENERATION
        </text>

        <rect x="55" y="115" width="150" height="80" rx="18" className={nodeClass} />
        <text x="130" y="148" textAnchor="middle" className={labelClass}>User Query</text>
        <text x="130" y="170" textAnchor="middle" className={mutedClass}>Question</text>

        <rect x="270" y="90" width="180" height="130" rx="20" fill="#082f49" stroke="#22d3ee" strokeOpacity=".45" />
        <text x="360" y="125" textAnchor="middle" className={labelClass}>Retriever</text>
        <text x="360" y="150" textAnchor="middle" className={mutedClass}>Similarity search</text>
        <text x="360" y="172" textAnchor="middle" className={mutedClass}>Top-k context</text>
        <text x="360" y="194" textAnchor="middle" className={mutedClass}>Grounded evidence</text>

        <rect x="515" y="70" width="150" height="70" rx="18" className={nodeClass} />
        <text x="590" y="100" textAnchor="middle" className={labelClass}>Vector Store</text>
        <text x="590" y="121" textAnchor="middle" className={mutedClass}>Embeddings</text>

        <rect x="515" y="175" width="150" height="70" rx="18" className={nodeClass} />
        <text x="590" y="205" textAnchor="middle" className={labelClass}>Prompt</text>
        <text x="590" y="226" textAnchor="middle" className={mutedClass}>Query + context</text>

        <rect x="720" y="115" width="125" height="80" rx="18" fill="#312e81" stroke="#a78bfa" strokeOpacity=".5" />
        <text x="782" y="148" textAnchor="middle" className={labelClass}>LLM</text>
        <text x="782" y="170" textAnchor="middle" className={mutedClass}>Answer</text>

        <path d="M205 155 L270 155" className={arrowClass} strokeWidth="3" markerEnd={`url(#rag-arrow-${index})`} />
        <path d="M450 130 L515 105" className={arrowClass} strokeWidth="3" markerEnd={`url(#rag-arrow-${index})`} />
        <path d="M450 180 L515 210" className={arrowClass} strokeWidth="3" markerEnd={`url(#rag-arrow-${index})`} />
        <path d="M665 210 L720 170" className={arrowClass} strokeWidth="3" markerEnd={`url(#rag-arrow-${index})`} />

        <defs>
          <marker id={`rag-arrow-${index}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#22d3ee" />
          </marker>
        </defs>
      </svg>
    );
  }

  if (kind === "embedding") {
    const points = [
      [110, 110], [155, 145], [200, 100], [245, 175],
      [330, 130], [375, 165], [420, 105], [465, 190],
      [560, 115], [610, 150], [655, 95], [700, 175],
    ];

    return (
      <svg
        viewBox="0 0 900 330"
        className="h-auto w-full"
        role="img"
        aria-label={`${title} generated diagram`}
      >
        <rect x="20" y="20" width="860" height="290" rx="28" fill="#020617" stroke="#1e293b" />
        <text x="450" y="52" textAnchor="middle" className="fill-cyan-300 text-[13px] font-bold">
          CLOUDLEARN · EMBEDDING SPACE
        </text>

        <line x1="90" y1="260" x2="780" y2="260" stroke="#334155" />
        <line x1="90" y1="260" x2="90" y2="80" stroke="#334155" />

        <text x="785" y="280" textAnchor="end" className={mutedClass}>Dimension 1</text>
        <text x="65" y="82" className={mutedClass}>Dimension 2</text>

        {points.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="9"
            fill={i < 4 ? "#22d3ee" : i < 8 ? "#818cf8" : "#c084fc"}
            fillOpacity=".85"
          />
        ))}

        <text x="170" y="215" className="fill-cyan-300 text-[11px]">semantic cluster</text>
        <text x="365" y="225" className="fill-indigo-300 text-[11px]">related concepts</text>
        <text x="590" y="215" className="fill-violet-300 text-[11px]">another meaning region</text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 900 330"
      className="h-auto w-full"
      role="img"
      aria-label={`${title} generated diagram`}
    >
      <defs>
        <linearGradient id={`generic-${index}`} x1="0" x2="1">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <marker id={`generic-arrow-${index}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#22d3ee" />
        </marker>
      </defs>

      <rect x="20" y="20" width="860" height="290" rx="28" fill="#020617" stroke="#1e293b" />
      <text x="450" y="52" textAnchor="middle" className="fill-cyan-300 text-[13px] font-bold">
        CLOUDLEARN · CONCEPT FLOW
      </text>

      {["Input", "Transform", "Reason", "Generate", "Evaluate"].map((label, i) => {
        const x = 55 + i * 165;

        return (
          <g key={label}>
            <rect
              x={x}
              y="125"
              width="125"
              height="70"
              rx="18"
              fill="#0f172a"
              stroke={`url(#generic-${index})`}
              strokeOpacity=".65"
            />
            <text x={x + 62.5} y="155" textAnchor="middle" className={labelClass}>
              {label}
            </text>
            <text x={x + 62.5} y="176" textAnchor="middle" className={mutedClass}>
              AI stage
            </text>

            {i < 4 && (
              <path
                d={`M${x + 125} 160 L${x + 157} 160`}
                stroke="#22d3ee"
                strokeWidth="3"
                markerEnd={`url(#generic-arrow-${index})`}
              />
            )}
          </g>
        );
      })}

      <rect x="270" y="240" width="360" height="35" rx="10" fill={`url(#generic-${index})`} opacity=".14" />
      <text x="450" y="263" textAnchor="middle" className="fill-slate-400 text-[11px]">
        Locally generated CloudLearn visual — no external image
      </text>
    </svg>
  );
}

function GeneratedVisualGallery({
  items,
  lessonTitle,
}: {
  items?: any;
  lessonTitle: string;
}) {
  const values = asArray(items);

  const visualItems =
    values.length > 0
      ? values
      : [
          {
            title: lessonTitle,
            description: "Concept architecture and workflow generated locally by CloudLearn.",
          },
        ];

  return (
    <section className="border-t border-slate-800/70 pt-12">
      <div className="mb-7">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
          CloudLearn Visuals
        </div>

        <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
          Explore Visually
        </h2>

        <p className="mt-3 max-w-3xl text-[16px] leading-8 text-slate-400 sm:text-[17px]">
          These diagrams are generated locally inside CloudLearn. No web images,
          external image URLs, or third-party image hosting are used.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visualItems.map((item, index) => {
          const data =
            typeof item === "string"
              ? { title: item }
              : item ?? {};

          const title = firstText(
            data?.title,
            data?.name,
            data?.label,
            `Concept Visual ${index + 1}`
          );

          const description = firstText(
            data?.description,
            data?.content,
            data?.explanation,
            data?.text
          );

          return (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-cyan-500/15 bg-slate-950/80 shadow-xl"
            >
              <div className="bg-[#030712] p-3 sm:p-5">
                <GeneratedDiagram
                  title={title}
                  description={description}
                  index={index}
                />
              </div>

              <div className="border-t border-slate-800/80 p-5">
                <div className="text-base font-bold text-white">
                  {title}
                </div>

                {description && (
                  <p className="mt-3 text-[15px] leading-8 text-slate-400 sm:text-[16px]">
                    {description}
                  </p>
                )}

                <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-500/70">
                  Locally generated CloudLearn visual
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const KNOWN_CONTENT_KEYS = new Set([
  "id",
  "moduleId",
  "lessonId",
  "lessonNumber",
  "moduleNumber",
  "lessonCount",
  "type",
  "slug",
  "number",
  "title",
  "name",
  "label",
  "heading",
  "subtitle",
  "description",
  "overview",
  "content",
  "estimatedTime",
  "duration",
  "difficulty",
  "status",
  "learningObjectives",
  "sections",
  "codeExamples",
  "mathIntuition",
  "comparisonTables",
  "architecture",
  "implementationStages",
  "exercises",
  "codingExercises",
  "architectureExercises",
  "interviewQuestions",
  "commonMistakes",
  "visualReferences",
  "summary",
  "keyTakeaways",
]);

function prettyFieldName(value: string): string {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function AdditionalValue({
  value,
}: {
  value: any;
}) {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return null;
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return (
      <p className="w-full max-w-5xl text-left text-[17px] leading-8 text-slate-300 sm:text-[18px]">
        {String(value)}
      </p>
    );
  }

  if (Array.isArray(value)) {
    if (!value.length) {
      return null;
    }

    /*
     * Smart object-array detection:
     * [{term, meaning}, ...] and similar educational records are much
     * easier to read as a compact table than as unrelated cards.
     */
    const objectItems = value.filter(isObject);

    if (
      objectItems.length >= 2 &&
      objectItems.length === value.length
    ) {
      const keySet = new Set(
        objectItems.flatMap((item) => Object.keys(item))
      );

      const preferredColumns = [
        "term",
        "concept",
        "name",
        "definition",
        "meaning",
        "description",
        "purpose",
        "example",
        "use",
      ].filter((key) => keySet.has(key));

      if (preferredColumns.length >= 2) {
        const columns = preferredColumns.slice(0, 4);

        return (
          <div className="my-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/70">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900">
                  {columns.map((column) => (
                    <th
                      key={column}
                      className="border-b border-slate-800 px-4 py-3 text-xs font-bold uppercase tracking-wide text-cyan-300"
                    >
                      {prettyFieldName(column)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {objectItems.map((item, rowIndex) => (
                  <tr key={rowIndex} className="align-top">
                    {columns.map((column) => (
                      <td
                        key={column}
                        className="border-b border-slate-900 px-4 py-3 text-[15px] leading-7 text-slate-300 sm:text-[16px]"
                      >
                        {clean(item[column]) || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }

    return (
      <div className="space-y-3">
        {value.map((item, index) => {
          if (isObject(item)) {
            const structured =
              renderStructuredParagraphItem(
                item,
                index
              );

            if (structured) {
              return structured;
            }
          }

          const text = clean(item);

          if (!text) {
            return null;
          }

          return (
            <div
              key={index}
              className="flex gap-3 rounded-xl border border-slate-800/80 bg-slate-900/45 p-4"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span className="text-[16px] leading-8 text-slate-300 sm:text-[17px]">
                {text}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  if (typeof value === "object") {
    return (
      <div className="grid gap-4">
        {Object.entries(value).map(([key, child]) => {
          const structured =
            renderStructuredParagraphItem(
              { [key]: child },
              0
            );

          if (structured) {
            return structured;
          }

          return (
            <div
              key={key}
              className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4"
            >
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-400">
                {prettyFieldName(key)}
              </div>

              <AdditionalValue value={child} />
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}

function AdditionalContent({
  content,
}: {
  content: AnyObject;
}) {
  const entries = Object.entries(content).filter(
    ([key, value]) =>
      !KNOWN_CONTENT_KEYS.has(key) &&
      value !== null &&
      value !== undefined &&
      value !== ""
  );

  if (!entries.length) {
    return null;
  }

  return (
    <section className="space-y-7 border-t border-slate-800/70 pt-10">
      <SectionTitle
        eyebrow="More Content"
        title="Additional Learning Material"
      />

      <div className="space-y-6">
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="rounded-3xl border border-slate-800 bg-slate-950/55 p-5 shadow-lg sm:p-7"
          >
            <div className="mb-4 text-lg font-bold text-white sm:text-xl">
              {prettyFieldName(key)}
            </div>

            <AdditionalValue value={value} />
          </div>
        ))}
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
                  <div className="mt-2 text-[15px] leading-8 text-slate-400 sm:text-[16px]">
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
                  <div className="mt-2 text-[15px] leading-8 text-slate-400 sm:text-[16px]">
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

      {section?.contentAfterProcess && (
        <Paragraphs
          value={section.contentAfterProcess}
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

      {section?.contentAfterFormula && (
        <Paragraphs
          value={section.contentAfterFormula}
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

      {/* --------------------------------------------------------------
         Flexible lesson-body fields

         Different Generative AI lessons use slightly different
         educational field names. Render those fields instead of
         showing only the section heading.
         -------------------------------------------------------------- */}

      {[
        ["body", section?.body],
        ["details", section?.details],
        ["notes", section?.notes],
        ["reason", section?.reason],
        ["why", section?.why],
        ["how", section?.how],
        ["intuition", section?.intuition],
        ["implementation", section?.implementation],
        ["practicalExample", section?.practicalExample],
        ["caseStudy", section?.caseStudy],
        ["keyPoint", section?.keyPoint],
      ]
        .filter(([, value]) => value !== undefined && value !== null && value !== "")
        .map(([key, value]) => (
          <div
            key={String(key)}
            className="mt-6"
          >
            <Paragraphs value={value} />
          </div>
        ))}

      <SectionAdditionalContent section={section} />
    </section>
  );
}

const SECTION_KNOWN_KEYS = new Set([
  "id",
  "type",
  "number",
  "index",
  "slug",
  "href",
  "url",
  "title",
  "heading",
  "intro",
  "description",
  "content",
  "paragraphs",
  "bullets",
  "orderedList",
  "process",
  "processFlow",
  "flow",
  "contentAfterProcess",
  "classificationTree",
  "tree",
  "formula",
  "formulaTitle",
  "contentAfterFormula",
  "formulas",
  "table",
  "tables",
  "comparisonTable",
  "comparisonTables",
  "examples",
  "code",
  "language",
  "codeExamples",
  "mathIntuition",
  "body",
  "details",
  "notes",
  "reason",
  "why",
  "how",
  "intuition",
  "implementation",
  "practicalExample",
  "caseStudy",
  "keyPoint",
]);

function SectionAdditionalContent({
  section,
}: {
  section: AnyObject;
}) {
  const entries = Object.entries(section).filter(
    ([key, value]) =>
      !SECTION_KNOWN_KEYS.has(key) &&
      value !== null &&
      value !== undefined &&
      value !== ""
  );

  if (!entries.length) {
    return null;
  }

  return (
    <div className="mt-7 space-y-5">
      {entries.map(([key, value]) => (
        <div
          key={key}
          className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-5"
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
            {prettyFieldName(key)}
          </div>

          <AdditionalValue value={value} />
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CONTENT ALIGNMENT                                                          */
/*                                                                            */
/* Main educational prose uses one consistent reading column: max-w-5xl,      */
/* left aligned, with 17px/18px responsive text and 2rem line-height.          */
/* Cards, formulas, code, diagrams and navigation keep their own sizing.      */
/* -------------------------------------------------------------------------- */

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

      <div className="space-y-12 px-5 py-9 text-left sm:px-8 sm:py-11 lg:px-12 lg:py-12">
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

        <AdditionalContent content={lesson} />

        <GeneratedVisualGallery
          items={lesson.visualReferences}
          lessonTitle={firstText(lesson.title, lesson.name, "Generative AI Concept")}
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

      <div className="space-y-12 px-5 py-9 text-left sm:px-8 sm:py-11 lg:px-12 lg:py-12">
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

        <GeneratedVisualGallery
          items={content.visualReferences}
          lessonTitle={firstText(content.title, content.name, "Generative AI Concept")}
        />

        <AdditionalContent content={content} />
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
