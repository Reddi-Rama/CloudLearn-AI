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
    return value
      .replace(/\u00e2\u20ac\u00a2/g, "\u2022")
      .replace(/\u00e2\u2020\u2018/g, "\u2191")
      .replace(/\u00e2\u2020\u201c/g, "\u2193")
      .replace(/\u00e2\u2020\u2019/g, "\u2192")
      .replace(/\u00e2\u20ac\u201d/g, "\u2014")
      .replace(/\u00e2\u20ac\u2013/g, "\u2013")
      .replace(/\u00c2\u0020/g, " ")
      .trim();
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
}: {
  nodes: string[];
  arrows: string[];
}) {
  const vertical = arrows.some(
    (arrow) => arrow === "↓" || arrow === "↑"
  );

  return (
    <div className="my-7 w-full overflow-hidden rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5 shadow-lg sm:p-7">
      <div className="mb-5 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300">
          Process Flow
        </span>
      </div>

      {vertical ? (
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          {nodes.map((node, index) => (
            <React.Fragment key={index}>
              <div className="relative flex min-h-[72px] w-full items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-900 px-6 py-4 text-center text-sm font-semibold leading-6 text-slate-100 shadow-md ring-1 ring-white/5 sm:text-base">
                <span className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-black text-cyan-300 ring-1 ring-cyan-400/20">
                  {index + 1}
                </span>
                <span>{node}</span>
              </div>

              {index < nodes.length - 1 && (
                <div
                  className="flex h-10 items-center justify-center text-2xl font-black text-cyan-400"
                  aria-hidden="true"
                >
                  {arrows[index]}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="flex w-full items-stretch gap-2 overflow-x-auto pb-2">
          {nodes.map((node, index) => (
            <React.Fragment key={index}>
              <div className="flex min-h-[86px] min-w-[190px] flex-1 items-center justify-center gap-3 rounded-2xl border border-cyan-400/20 bg-slate-900 px-5 py-4 text-center text-sm font-semibold leading-6 text-slate-100 shadow-md ring-1 ring-white/5 sm:min-w-[210px] sm:text-base">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-xs font-black text-cyan-300 ring-1 ring-cyan-400/20">
                  {index + 1}
                </span>
                <span>{node}</span>
              </div>

              {index < nodes.length - 1 && (
                <div
                  className="flex shrink-0 items-center justify-center px-1 text-2xl font-black text-cyan-400"
                  aria-hidden="true"
                >
                  {arrows[index]}
                </div>
              )}
            </React.Fragment>
          ))}
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
        <p className="text-[15px] font-semibold leading-8 text-slate-100 sm:text-base">
          {question}
        </p>
      )}

      {answer && (
        <div className="mt-5 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.035] p-4">
          <div className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
            Answer
          </div>
          <p className="text-sm leading-7 text-slate-200">
            {answer}
          </p>
        </div>
      )}

      {explanation && (
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
          <div className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
            Explanation
          </div>
          <p className="text-sm leading-7 text-slate-400">
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

  const description =
    item.description ??
    item.explanation ??
    item.content ??
    item.example;

  return (
    <InfoCard
      eyebrow={`Worked Example ${index + 1}`}
      title={title}
      tone="amber"
    >
      {description !== undefined &&
        description !== null && (
          <div className="max-w-5xl">
            <Paragraphs value={description} />
          </div>
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
  /*
   * IMPORTANT: explanation content must NOT be rendered as one plain <p>.
   * Generative AI lessons frequently store bullets, process arrows, examples,
   * numbered points, and normal prose inside the explanation field.
   * Paragraphs() is the rich-content dispatcher that understands all of them.
   */
  const explanation =
    item.explanation ??
    item.description ??
    item.content ??
    item.text ??
    item.details;

  if (
    explanation === undefined ||
    explanation === null ||
    explanation === ""
  ) {
    return null;
  }

  return (
    <InfoCard
      eyebrow="Explanation"
      title={firstText(item.title, item.heading)}
      tone="cyan"
    >
      <div className="max-w-5xl">
        <Paragraphs value={explanation} />
      </div>
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

function findEmbeddedArrowFlow(text: string): {
  before: string;
  nodes: string[];
  arrows: string[];
  after: string;
} | null {
  const value = clean(text);

  if (!value) {
    return null;
  }

  /*
   * IMPORTANT:
   * Generative AI lessons often store a process inside normal prose, e.g.
   *
   * "For a PDF: PDF file ↓ Pages ↓ Text ↓ Tables / headings / metadata.
   *  Parsing quality matters because ..."
   *
   * The old renderer rejected this because the last node contained the
   * following explanation and became longer than the node limit.
   *
   * This parser separates the actual pipeline from the prose that follows.
   */

  const arrowPattern =
    /(?:\u2193|\u2191|\u2192|\u21d2|->|=>)/g;

  const matches = [
    ...value.matchAll(arrowPattern),
  ];

  if (matches.length < 2) {
    return null;
  }

  const proseMarkers = [
    "Parsing quality",
    "Quality matters",
    "The quality",
    "This stage",
    "This process",
    "This means",
    "Therefore",
    "The result",
    "The response",
    "The key",
    "The goal",
    "Overall",
    "In practice",
    "After retrieval",
    "After generation",
  ];

  const splitTrailingProse = (
    value: string
  ): {
    node: string;
    after: string;
  } => {
    const candidates = [
      ...proseMarkers.map((marker) => ({
        index: value.search(
          new RegExp(
            `\\s+${marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
            "i"
          )
        ),
        marker,
      })),
    ].filter(
      (item) => item.index >= 0
    );

    let boundary = -1;

    for (const candidate of candidates) {
      if (
        boundary < 0 ||
        candidate.index < boundary
      ) {
        boundary = candidate.index;
      }
    }

    /*
     * Also stop at a sentence boundary when the final node is followed
     * by ordinary explanatory prose.
     */
    const sentenceMatch =
      value.match(/\.\s+[A-Z]/);

    if (
      sentenceMatch &&
      sentenceMatch.index !== undefined
    ) {
      const sentenceBoundary =
        sentenceMatch.index + 1;

      if (
        boundary < 0 ||
        sentenceBoundary < boundary
      ) {
        boundary = sentenceBoundary;
      }
    }

    if (boundary >= 0) {
      return {
        node: value
          .slice(0, boundary)
          .replace(/[.!?]+$/, "")
          .trim(),
        after: value
          .slice(boundary)
          .trim(),
      };
    }

    return {
      node: value
        .replace(/[.!?]+$/, "")
        .trim(),
      after: "",
    };
  };

  for (
    let start = 0;
    start < matches.length - 1;
    start++
  ) {
    const firstArrow = matches[start];

    const firstArrowIndex =
      firstArrow.index ?? 0;

    const prefix = value.slice(
      0,
      firstArrowIndex
    );

    /*
     * A colon is an excellent boundary for patterns such as:
     * "For a PDF: PDF file ↓ Pages ↓ Text"
     */
    const boundary = Math.max(
      prefix.lastIndexOf("."),
      prefix.lastIndexOf("\n"),
      prefix.lastIndexOf(":")
    );

    const candidateStart =
      boundary + 1;

    let firstNode = value
      .slice(
        candidateStart,
        firstArrowIndex
      )
      .trim();

    if (!firstNode) {
      continue;
    }

    const before =
      value.slice(0, candidateStart).trim();

    /*
     * If the colon was part of a normal sentence, preserve the text before
     * it as prose and use only the actual process term as the first node.
     */
    if (
      firstNode.length > 100 ||
      /[.!?]/.test(firstNode)
    ) {
      continue;
    }

    const nodes = [firstNode];
    const arrows: string[] = [];

    let cursor = start;

    while (
      cursor < matches.length - 1
    ) {
      const arrow = matches[cursor];

      const arrowEnd =
        (arrow.index ?? 0) +
        arrow[0].length;

      const nextArrow =
        matches[cursor + 1];

      if (!nextArrow) {
        break;
      }

      const rawNode = value
        .slice(
          arrowEnd,
          nextArrow.index ??
            value.length
        )
        .trim();

      /*
       * Intermediate flow nodes should be short labels, not sentences.
       */
      if (
        !rawNode ||
        rawNode.length > 100 ||
        /[.!?]/.test(rawNode)
      ) {
        break;
      }

      nodes.push(rawNode);

      arrows.push(
        normalizeFlowArrow(
          arrow[0]
        )
      );

      cursor += 1;

      if (nodes.length >= 20) {
        break;
      }
    }

    if (
      nodes.length < 2 ||
      arrows.length !==
        nodes.length - 1
    ) {
      continue;
    }

    /*
     * There is one more arrow after the last intermediate node.
     * Extract its final node and separate the explanatory prose.
     */
    const finalArrow =
      matches[cursor];

    if (!finalArrow) {
      continue;
    }

    const finalNodeStart =
      (finalArrow.index ?? 0) +
      finalArrow[0].length;

    const remaining = value
      .slice(finalNodeStart)
      .trim();

    if (!remaining) {
      continue;
    }

    const split =
      splitTrailingProse(remaining);

    if (
      !split.node ||
      split.node.length > 100
    ) {
      continue;
    }

    nodes.push(split.node);

    arrows.push(
      normalizeFlowArrow(
        finalArrow[0]
      )
    );

    /*
     * Don't include a leading colon in the prose section.
     */
    const cleanBefore =
      before.replace(/\s+$/, "").trim();

    return {
      before: cleanBefore,
      nodes,
      arrows,
      after: split.after,
    };
  }

  return null;
}

function SmartParagraph({ text }: { text: string }) {
  const bulletData = splitInlineBullets(text);

  if (bulletData) {
    return (
      <div className="space-y-5">
        {bulletData.before && (
          <p className="max-w-5xl text-[15px] leading-8 text-slate-300 sm:text-base">
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

  const flowData = findEmbeddedArrowFlow(text);

  if (flowData) {
    return (
      <div className="space-y-5">
        {flowData.before && (
          <p className="max-w-5xl text-[15px] leading-8 text-slate-300 sm:text-base">
            {flowData.before}
          </p>
        )}

        <ContentFlow
          nodes={flowData.nodes}
          arrows={flowData.arrows}
        />

        {flowData.after && (
          <SmartParagraph text={flowData.after} />
        )}
      </div>
    );
  }

  return (
    <p className="max-w-5xl text-[15px] leading-8 text-slate-300 sm:text-base">
      {text}
    </p>
  );
}

function Paragraphs({
  value,
}: {
  value: any;
}) {
  const values = Array.isArray(value)
    ? value
    : [value];

  if (!values.length) {
    return null;
  }

  const elements: React.ReactNode[] = [];
  let paragraphBuffer: string[] = [];

  const flushParagraphBuffer = () => {
    if (!paragraphBuffer.length) {
      return;
    }

    let index = 0;

    while (index < paragraphBuffer.length) {
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
      const structured =
        renderStructuredParagraphItem(
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
        paragraphBuffer.push(text);
      }
      return;
    }

    if (Array.isArray(item)) {
      item.forEach((child) => {
        if (isObject(child)) {
          const structured =
            renderStructuredParagraphItem(
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
          paragraphBuffer.push(text);
        }
      });
    }
  });

  flushParagraphBuffer();

  return (
    <div className="space-y-4">
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
        <div className="mt-4 max-w-4xl">
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

  const renderNode = (
    node: any,
    depth = 0
  ): React.ReactNode => {
    if (typeof node === "string") {
      return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300">
          {node}
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

      {renderNode(tree)}
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

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
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
                  <p className="mt-3 text-sm leading-7 text-slate-400">
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
  "type",
  "slug",
  "number",
  "title",
  "name",
  "label",
  "heading",
  "description",
  "overview",
  "content",
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
      <p className="max-w-4xl text-sm leading-8 text-slate-300">
        {String(value)}
      </p>
    );
  }

  if (Array.isArray(value)) {
    if (!value.length) {
      return null;
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
              <span className="text-sm leading-7 text-slate-300">
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

      {section?.explanation && (
        <InfoCard
          eyebrow="Explanation"
          title="Concept Explanation"
          tone="cyan"
        >
          <div className="max-w-5xl">
            <Paragraphs value={section.explanation} />
          </div>
        </InfoCard>
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
  "classificationTree",
  "tree",
  "formula",
  "formulaTitle",
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
