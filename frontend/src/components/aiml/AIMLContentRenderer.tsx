"use client";

import React from "react";
import AIMLInputOutput from "./AIMLInputOutput";

/**
 * CloudLearn AI/ML Content Renderer
 *
 * This file is intentionally self-contained.
 * It handles:
 * - headings
 * - paragraphs
 * - bullets
 * - fenced code
 * - indented code
 * - Python / C / C++ / Java code blocks
 * - Markdown tables
 * - horizontal flowcharts
 * - inline arrow flows such as:
 *     Input → Model → Output
 * - simple Java keyword grids
 * - AIML lesson-content normalization
 */

function looksLikeCode(line: string): boolean {
  const text = line.trim();

  if (!text) return false;

  return (
    /^from\s+\S+\s+import\s+/.test(text) ||
    /^import\s+\S+/.test(text) ||
    /^def\s+\w+\s*\(/.test(text) ||
    /^class\s+\w+/.test(text) ||
    /^print\s*\(/.test(text) ||
    /^return(?:\s+.+)?$/.test(text) ||
    /^for\s+.+\s+in\s+.+:/.test(text) ||
    /^while\s+.+:/.test(text) ||
    /^if\s+.+:/.test(text) ||
    /^elif\s+.+:/.test(text) ||
    /^else\s*:/.test(text) ||
    /^try\s*:/.test(text) ||
    /^except\b/.test(text) ||
    /^finally\s*:/.test(text) ||
    /^with\s+.+:/.test(text) ||
    /^raise\s+/.test(text) ||
    /^#\s/.test(text) ||
    /^#include\s*[<"].+[>"]/.test(text) ||
    /^using\s+namespace\s+/.test(text) ||
    /^int\s+main\s*\(/.test(text) ||
    /^public\s+static\s+void\s+main\s*\(/.test(text) ||
    /^public\s+class\s+/.test(text) ||
    /^(int|float|double|char|boolean|bool|string|String|long|short)\s+\w+\s*(=|;|\()/.test(
      text,
    ) ||
    /^cout\s*<</.test(text) ||
    /^cin\s*>>/.test(text) ||
    /^printf\s*\(/.test(text) ||
    /^scanf\s*\(/.test(text) ||
    /^System\.out\./.test(text) ||
    /^\w+\.\w+\s*\(/.test(text) ||
    /^\w+\s*=\s*.+/.test(text)
  );
}

function formatCode(lines: string[]): string[] {
  let indentLevel = 0;

  return lines.map((originalLine) => {
    if (!originalLine.trim()) return "";

    const line = originalLine.trim();

    if (line.startsWith("}") || line.startsWith("};")) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    if (line.startsWith("case ") || line.startsWith("default:")) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    const formattedLine = "    ".repeat(indentLevel) + line;

    if (line.endsWith("{") || line === "{") {
      indentLevel++;
    }

    if (line.startsWith("case ") || line.startsWith("default:")) {
      indentLevel++;
    }

    return formattedLine;
  });
}

function CodeBlock({
  lines,
  language,
  format = false,
}: {
  lines: string[];
  language?: string;
  format?: boolean;
}) {
  const finalLines = format ? formatCode(lines) : lines;

  return (
    <div className="my-8 w-full min-w-0 overflow-hidden rounded-2xl border border-sky-500/20 bg-[#050a16] shadow-xl shadow-black/20">
      {language && (
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/90 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-sky-300">
          <span className="h-2 w-2 rounded-full bg-sky-400" />{language}
        </div>
      )}

      <pre className="max-w-full overflow-x-auto whitespace-pre px-4 py-5 text-sm leading-7 text-slate-200 sm:px-6 sm:py-6 sm:text-base sm:leading-7 lg:text-[17px] lg:leading-8">
        <code className="whitespace-pre font-mono">{finalLines.join("\n")}</code>
      </pre>
    </div>
  );
}

function isFlowArrow(text: string): boolean {
  return [
    "↓",
    "↑",
    "→",
    "←",
    "↔",
    "⇒",
    "➡",
    "⬇",
    "⬆",
    "⟶",
    "⟹",
    "⟷",
    "⇢",
    "⇠",
  ].includes(text.trim());
}

function isSimpleFlowNode(text: string): boolean {
  const value = text.trim();

  if (!value || value.length > 80) return false;

  if (
    value.includes(";") ||
    value.includes("{") ||
    value.includes("}") ||
    value.startsWith("#") ||
    value.startsWith("//") ||
    value.startsWith("/*") ||
    value.startsWith("*")
  ) {
    return false;
  }

  if (
    value.startsWith("class ") ||
    value.startsWith("public ") ||
    value.startsWith("private ") ||
    value.startsWith("protected ") ||
    value.startsWith("static ") ||
    /^if\s*[\s(]/.test(value) ||
    /^for\s*[\s(]/.test(value) ||
    /^while\s*[\s(]/.test(value) ||
    /^switch\s*[\s(]/.test(value) ||
    value.startsWith("return ") ||
    value.startsWith("break") ||
    value.startsWith("continue") ||
    value.startsWith("System.out") ||
    value.startsWith("cout") ||
    value.startsWith("cin") ||
    value.startsWith("printf") ||
    value.startsWith("scanf") ||
    value.startsWith("print(") ||
    value.startsWith("def ") ||
    value.startsWith("import ") ||
    value.startsWith("from ") ||
    value.startsWith("#include")
  ) {
    return false;
  }

  return true;
}

function FlowChart({ items }: { items: string[] }) {
  return (
    <div className="my-8 w-full min-w-0 max-w-full overflow-x-auto overflow-y-hidden">
      <div className="mx-auto flex w-max min-w-full items-center justify-center gap-3 px-2 py-2 md:gap-4">
        {items.map((item, index) => {
          const value = item.trim();

          if (isFlowArrow(value)) {
            return (
              <div
                key={`flow-arrow-${index}`}
                className="flex shrink-0 items-center justify-center px-1 text-2xl font-bold text-sky-400"
                aria-hidden="true"
              >
                →
              </div>
            );
          }

          return (
            <div
              key={`flow-node-${index}`}
              className="flex min-h-[52px] w-[150px] max-w-[220px] shrink-0 items-center justify-center rounded-2xl border border-sky-500/30 bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-slate-100 shadow-lg shadow-sky-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/60 sm:text-base"
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function splitInlineFlow(text: string): string[] | null {
  const value = text.trim();

  if (!value || value.length > 180) return null;

  if (
    value.startsWith("#") ||
    value.startsWith("- ") ||
    value.startsWith("• ") ||
    value.includes("```") ||
    value.includes(";") ||
    value.includes("{") ||
    value.includes("}") ||
    value.includes("|")
  ) {
    return null;
  }

  const hasArrow =
    value.includes("→") ||
    value.includes("⇒") ||
    value.includes("->") ||
    value.includes("⟶") ||
    value.includes("⟹");

  if (!hasArrow) return null;

  const parts = value
    .split(/\s*(?:→|⇒|->|⟶|⟹)\s*/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) return null;
  if (parts.some((part) => part.length > 70)) return null;

  const result: string[] = [];

  parts.forEach((part, index) => {
    if (index > 0) result.push("→");
    result.push(part);
  });

  return result;
}

function isMarkdownTableSeparator(line: string): boolean {
  const cells = line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isMarkdownTableRow(line: string): boolean {
  const text = line.trim();
  return text.includes("|") && text.replace(/\|/g, "").trim().length > 0;
}

function splitMarkdownTableRow(line: string): string[] {
  let text = line.trim();

  if (text.startsWith("|")) text = text.slice(1);
  if (text.endsWith("|")) text = text.slice(0, -1);

  const placeholder = "__CLOUDLEARN_ESCAPED_PIPE__";
  text = text.replace(/\\\|/g, placeholder);

  return text
    .split("|")
    .map((cell) => cell.trim().replace(new RegExp(placeholder, "g"), "|"));
}

function getTableAlignment(
  separatorCell: string,
): "left" | "center" | "right" {
  const cell = separatorCell.trim();

  if (cell.startsWith(":") && cell.endsWith(":")) return "center";
  if (cell.endsWith(":")) return "right";
  return "left";
}

function MarkdownTable({ lines }: { lines: string[] }) {
  if (lines.length < 2) return null;

  const header = splitMarkdownTableRow(lines[0]);
  const separator = splitMarkdownTableRow(lines[1]);

  const body = lines
    .slice(2)
    .map(splitMarkdownTableRow)
    .filter((row) => row.some((cell) => cell.trim() !== ""));

  const columnCount = Math.max(
    header.length,
    separator.length,
    ...body.map((row) => row.length),
  );

  const normalizedHeader = Array.from(
    { length: columnCount },
    (_, index) => header[index] ?? "",
  );

  const normalizedSeparator = Array.from(
    { length: columnCount },
    (_, index) => separator[index] ?? "---",
  );

  return (
    <div className="my-8 w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-lg">
      <div className="w-full max-w-full overflow-x-auto">
        <table className="w-full min-w-full border-collapse text-left text-sm sm:text-base">
          <thead>
            <tr className="bg-slate-800">
              {normalizedHeader.map((cell, index) => {
                const alignment = getTableAlignment(normalizedSeparator[index]);

                return (
                  <th
                    key={`table-head-${index}`}
                    className={`border-b border-slate-600 px-4 py-3 text-base font-bold text-green-400 sm:px-6 sm:py-4 sm:text-lg ${
                      alignment === "center"
                        ? "text-center"
                        : alignment === "right"
                          ? "text-right"
                          : "text-left"
                    }`}
                  >
                    {cell}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {body.map((row, rowIndex) => (
              <tr
                key={`table-row-${rowIndex}`}
                className={rowIndex % 2 === 0 ? "bg-slate-950" : "bg-slate-900/70"}
              >
                {Array.from({ length: columnCount }, (_, columnIndex) => {
                  const cell = row[columnIndex] ?? "";
                  const alignment = getTableAlignment(
                    normalizedSeparator[columnIndex],
                  );

                  return (
                    <td
                      key={`table-cell-${rowIndex}-${columnIndex}`}
                      className={`border-b border-slate-800 px-4 py-3 text-slate-200 sm:px-6 sm:py-4 ${
                        alignment === "center"
                          ? "text-center"
                          : alignment === "right"
                            ? "text-right"
                            : "text-left"
                      }`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionHeading({
  title,
  tone = "sky",
}: {
  title: string;
  tone?: "sky" | "violet" | "teal" | "amber" | "rose";
}) {
  const tones = {
    sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    teal: "border-teal-500/30 bg-teal-500/10 text-teal-300",
    amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    rose: "border-rose-500/30 bg-rose-500/10 text-rose-300",
  };

  return (
    <div className={`mb-5 mt-9 flex w-full min-w-0 items-center gap-3 rounded-xl border px-4 py-3 ${tones[tone]}`}>
      <span className="h-2 w-2 shrink-0 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
      <span className="text-sm font-extrabold uppercase tracking-[0.14em] sm:text-base">
        {title}
      </span>
    </div>
  );
}

function OutputCard({
  lines,
  title = "Output",
}: {
  lines: string[];
  title?: string;
}) {
  return (
    <div className="my-7 w-full min-w-0 overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-950 shadow-lg shadow-emerald-950/10">
      <div className="flex items-center gap-3 border-b border-emerald-500/20 bg-emerald-500/10 px-5 py-3.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-sm font-bold text-emerald-300">
          ✓
        </span>
        <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-300">
          {title}
        </span>
      </div>

      <div className="space-y-2 px-5 py-5 sm:px-6">
        {lines.map((line, index) => (
          <div
            key={`output-line-${index}`}
            className="min-w-0 rounded-lg border border-slate-800 bg-slate-950/80 px-4 py-3 font-mono text-sm leading-6 text-slate-200 sm:text-base"
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function QuestionAnswerCard({
  question,
  answer,
}: {
  question: string[];
  answer: string[];
}) {
  return (
    <div className="my-7 w-full min-w-0 space-y-3">
      <div className="overflow-hidden rounded-2xl border border-violet-500/25 bg-slate-950/70">
        <div className="flex items-center gap-3 border-b border-violet-500/20 bg-violet-500/10 px-5 py-3.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-sm font-extrabold text-violet-300">
            Q
          </span>
          <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-violet-300">
            Question
          </span>
        </div>

        <div className="px-5 py-5 sm:px-6">
          {question.map((line, index) => (
            <p
              key={`question-${index}`}
              className="mb-2 last:mb-0 text-base font-medium leading-7 text-slate-100 sm:text-lg sm:leading-8"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-emerald-500/25 bg-slate-950/70">
        <div className="flex items-center gap-3 border-b border-emerald-500/20 bg-emerald-500/10 px-5 py-3.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-sm font-extrabold text-emerald-300">
            A
          </span>
          <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-300">
            Answer
          </span>
        </div>

        <div className="px-5 py-5 sm:px-6">
          {answer.length > 0 ? (
            answer.map((line, index) => (
              <p
                key={`answer-${index}`}
                className="mb-2 last:mb-0 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-base leading-7 text-slate-400">
              Review the concept above and explain it in your own words.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function normalizeAdjacentCodeBlocks(content: string): string {
  /*
   * Some AIML lesson files contain one Python example split across
   * multiple adjacent fenced blocks, for example:
   *
   * ```python
   * X = [
   * ```
   * ```python
   *     [1], [2], [3]
   * ]
   * ```
   *
   * Those are semantically ONE program. Merge adjacent Python/code
   * fences before the renderer starts classifying individual lines.
   */
  let normalized = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  let previous = "";

  while (previous !== normalized) {
    previous = normalized;

    normalized = normalized.replace(
      /```(?:python|py)\s*\n([\s\S]*?)\n```\s*\n+```(?:python|py)\s*\n/gi,
      (_match, firstBlock) => `\`\`\`python\n${firstBlock}\n`,
    );

    normalized = normalized.replace(
      /```(?:python|py)\s*\n([\s\S]*?)\n```\s*\n+```(?:python|py)\s*$/gi,
      (_match, firstBlock) => `\`\`\`python\n${firstBlock}\n`,
    );
  }

  return normalized;
}

function renderContent(content: string): React.ReactNode[] {
  const normalizedContent = normalizeAdjacentCodeBlocks(content);
  const lines = normalizedContent.split("\n");

  const elements: React.ReactNode[] = [];

  let insideFence = false;
  let fenceLanguage = "";
  let fenceLines: string[] = [];

  let insideCode = false;
  let codeLines: string[] = [];
  let codeFormat = false;
  let codeLanguage = "";

  let insideFlow = false;
  let flowLines: string[] = [];

  const isBlank = (line: string) => line.trim() === "";

  const isInputLabel = (line: string) =>
    /^(?:#{1,6}\s*)?(?:Input|Expected Input)\s*:?\s*$/i.test(line.trim());

  const isOutputLabel = (line: string) =>
    /^(?:#{1,6}\s*)?(?:Output|Expected Output|Desired Output|Prediction)\s*:?\s*$/i.test(
      line.trim(),
    );

  const isProcessLabel = (line: string) =>
    /^(?:#{1,6}\s*)?(?:Model\s*\/\s*Process|Process|How It Works|Steps)\s*:?\s*$/i.test(
      line.trim(),
    );

  const isQuestionLabel = (line: string) =>
    /^(?:#{1,6}\s*)?Question\s*:?\s*$/i.test(line.trim());

  const isAnswerLabel = (line: string) =>
    /^(?:#{1,6}\s*)?Answer\s*:?\s*$/i.test(line.trim());

  const isCodeSectionLabel = (line: string) =>
    /^(?:#{1,6}\s*)?(?:Python|Python Example|Python Code|Code|Code Example)\s*:?[\s]*$/i.test(
      line.trim(),
    );

  const isNamedSectionLabel = (line: string) => {
    const text = line.trim();

    return /^(?:#{1,6}\s*)?(?:Output|Expected Output|Desired Output|Prediction|Common Mistakes|Practice|Quick Check|Experiment|Dataset|Python|Code|Key Takeaway|Summary|Extended Study|Real[- ]World Example|Mathematical Intuition|How It Works|Explanation|Result)\s*:?\s*$/i.test(
      text,
    );
  };

  const sectionTone = (title: string) => {
    const t = title.toLowerCase();

    if (t.includes("output") || t.includes("prediction") || t === "result") {
      return "teal" as const;
    }
    if (t.includes("mistake") || t.includes("practice")) {
      return "amber" as const;
    }
    if (t.includes("quick") || t.includes("question")) {
      return "violet" as const;
    }
    if (t.includes("summary") || t.includes("takeaway")) {
      return "sky" as const;
    }
    if (t.includes("experiment") || t.includes("dataset")) {
      return "rose" as const;
    }
    return "sky" as const;
  };

  const isVisualSectionBoundary = (line: string) => {
    const text = line.trim();

    return (
      isInputLabel(text) ||
      isOutputLabel(text) ||
      isProcessLabel(text) ||
      isQuestionLabel(text) ||
      isAnswerLabel(text) ||
      /^#{1,6}\s+/.test(text) ||
      /^(?:Example|Key Takeaway|Common Mistakes|Summary|Explanation|Result|Practice|Quick Check|Experiment|Dataset|Python|Code|Output|Extended Study|Real[- ]World Example|Mathematical Intuition)\s*:?\s*$/i.test(
        text,
      )
    );
  };

  const cleanVisualLine = (line: string) =>
    line
      .trim()
      .replace(
        /^(?:Input|Expected Input|Output|Expected Output|Desired Output|Prediction|Model\s*\/\s*Process|Process|How It Works|Steps)\s*:\s*/i,
        "",
      )
      .replace(/^[-•*]\s+/, "")
      .trim();

  const flushCode = (index: number) => {
    const hasCode = codeLines.some((line) => line.trim().length > 0);

    if (!hasCode) {
      codeLines = [];
      insideCode = false;
      codeFormat = false;
      codeLanguage = "";
      return;
    }

    elements.push(
      <CodeBlock
        key={`content-code-${index}`}
        lines={codeLines}
        format={codeFormat}
        language={codeLanguage || undefined}
      />,
    );

    codeLines = [];
    insideCode = false;
    codeFormat = false;
  };

  const startCode = (
    line: string,
    formatted: boolean,
    language = "",
  ) => {
    insideCode = true;
    codeFormat = formatted;
    codeLanguage = language;
    codeLines = line ? [line] : [];
  };

  const flushFlow = (index: number) => {
    if (flowLines.length === 0) {
      insideFlow = false;
      return;
    }

    elements.push(<FlowChart key={`flow-${index}`} items={flowLines} />);

    flowLines = [];
    insideFlow = false;
  };

  const isIndented = (line: string) =>
    line.startsWith("    ") || line.startsWith("\t");

  const removeMarkdownIndent = (line: string) => {
    if (line.startsWith("\t")) return line.slice(1);
    return line.slice(4);
  };

  const isStrongCodeLine = (line: string) => {
    const text = line.trim();

    return (
      text === "{" ||
      text === "}" ||
      text.endsWith("{") ||
      text.endsWith("}") ||
      text.endsWith(";") ||
      /^else\b/.test(text) ||
      /^do\b/.test(text) ||
      /^try\b/.test(text) ||
      /^catch\b/.test(text) ||
      /^finally\b/.test(text) ||
      /^throw\b/.test(text) ||
      /^throws\b/.test(text) ||
      /^if\s*\(/.test(text) ||
      /^for\s*\(/.test(text) ||
      /^while\s*\(/.test(text) ||
      /^switch\s*\(/.test(text) ||
      /^case\s+.+:/.test(text) ||
      /^default\s*:/.test(text) ||
      /^break\b/.test(text) ||
      /^continue\b/.test(text) ||
      /^return\b/.test(text) ||
      /^System\.out\./.test(text) ||
      /^cout\s*<</.test(text) ||
      /^cin\s*>>/.test(text) ||
      /^printf\s*\(/.test(text) ||
      /^scanf\s*\(/.test(text) ||
      /^print\s*\(/.test(text) ||
      /^def\s+\w+\s*\(/.test(text) ||
      /^import\s+/.test(text) ||
      /^from\s+/.test(text) ||
      /^#include\s*/.test(text) ||
      looksLikeCode(text)
    );
  };

  const isCodeContinuationLine = (line: string) => {
    const text = line.trim();

    return (
      /^else\b/.test(text) ||
      /^elif\b/.test(text) ||
      /^except\b/.test(text) ||
      /^finally\b/.test(text) ||
      /^do\b/.test(text) ||
      /^try\b/.test(text) ||
      /^catch\b/.test(text) ||
      /^throw\s+/.test(text) ||
      /^throws\s+/.test(text) ||
      /^break;?$/.test(text) ||
      /^continue;?$/.test(text) ||
      /^return(?:\s+.+)?;?$/.test(text) ||
      /^case\s+.+:/.test(text) ||
      /^default\s*:/.test(text)
    );
  };

  const isPythonLikeCodeLine = (line: string) => {
    const text = line.trim();
    if (!text) return false;

    return (
      /^from\s+\S+\s+import\s+/.test(text) ||
      /^import\s+/.test(text) ||
      /^(?:def|class|if|elif|else|for|while|try|except|finally|with|return|raise|pass|break|continue)\b/.test(text) ||
      /^print\s*\(/.test(text) ||
      /^\w+(?:\.\w+)*\s*=/.test(text) ||
      /^\w+(?:\.\w+)*\s*\(/.test(text) ||
      /^\[/.test(text) ||
      /^\]/.test(text) ||
      /^\{/.test(text) ||
      /^\}/.test(text) ||
      /^[\d\s,\[\]{}()'"._:+\-*/]+,?$/.test(text) ||
      /^#/.test(text)
    );
  };

  const isNormalHeading = (text: string) =>
    /^#{1,6}\s+/.test(text);

  const javaKeywords = new Set([
    "abstract",
    "assert",
    "boolean",
    "break",
    "byte",
    "case",
    "catch",
    "char",
    "class",
    "const",
    "continue",
    "default",
    "do",
    "double",
    "else",
    "enum",
    "extends",
    "final",
    "finally",
    "float",
    "for",
    "goto",
    "if",
    "implements",
    "import",
    "instanceof",
    "int",
    "interface",
    "long",
    "native",
    "new",
    "package",
    "private",
    "protected",
    "public",
    "return",
    "short",
    "static",
    "strictfp",
    "super",
    "switch",
    "synchronized",
    "this",
    "throw",
    "throws",
    "transient",
    "try",
    "void",
    "volatile",
    "while",
  ]);

  const consumedKeywordLines = new Set<number>();
  const consumedTableLines = new Set<number>();

  const findNextNonBlankIndex = (start: number) => {
    for (let i = start; i < lines.length; i++) {
      if (lines[i].trim()) return i;
    }
    return -1;
  };

  const findPreviousNonBlankIndex = (start: number) => {
    for (let i = start; i >= 0; i--) {
      if (lines[i].trim()) return i;
    }
    return -1;
  };

  const renderKeywordGridIfNeeded = (index: number) => {
    if (consumedKeywordLines.has(index)) return true;

    const currentText = lines[index].trim();
    if (!javaKeywords.has(currentText)) return false;

    const keywordIndices: number[] = [index];
    let cursor = index + 1;

    while (cursor < lines.length) {
      const nextIndex = findNextNonBlankIndex(cursor);
      if (nextIndex === -1) break;

      const nextText = lines[nextIndex].trim();
      if (!javaKeywords.has(nextText)) break;

      keywordIndices.push(nextIndex);
      cursor = nextIndex + 1;
    }

    if (keywordIndices.length < 4) return false;

    const previousIndex = findPreviousNonBlankIndex(index - 1);
    const previousText =
      previousIndex >= 0 ? lines[previousIndex].trim().toLowerCase() : "";

    const clearlyAKeywordSection =
      previousText.includes("keyword") || keywordIndices.length >= 6;

    if (!clearlyAKeywordSection) return false;

    for (
      let lineIndex = keywordIndices[0];
      lineIndex <= keywordIndices[keywordIndices.length - 1];
      lineIndex++
    ) {
      consumedKeywordLines.add(lineIndex);
    }

    elements.push(
      <div
        key={`keyword-grid-${index}`}
        className="my-6 flex w-full min-w-0 max-w-full flex-wrap items-center gap-x-6 gap-y-3 text-base leading-7 text-slate-200 sm:gap-x-10 sm:text-lg sm:leading-8"
      >
        {keywordIndices.map((lineIndex) => (
          <div key={`keyword-${lineIndex}`} className="max-w-full break-words">
            {lines[lineIndex].trim()}
          </div>
        ))}
      </div>,
    );

    return true;
  };

  for (let index = 0; index < lines.length; index++) {
    const rawLine = lines[index];
    const trimmed = rawLine.trim();

    if (consumedTableLines.has(index) || consumedKeywordLines.has(index)) {
      continue;
    }

    // ==========================================================
    // STANDALONE OUTPUT
    // ==========================================================
    if (
      isOutputLabel(trimmed) &&
      !insideFence &&
      !insideCode &&
      !insideFlow
    ) {
      const output: string[] = [];
      let cursor = index + 1;

      while (cursor < lines.length) {
        const current = lines[cursor];
        const currentTrim = current.trim();

        if (
          isVisualSectionBoundary(currentTrim) &&
          !isOutputLabel(currentTrim)
        ) {
          break;
        }

        if (currentTrim) {
          const cleaned = cleanVisualLine(current);
          if (cleaned) output.push(cleaned);
        }

        cursor++;
      }

      if (output.length > 0) {
        elements.push(
          <OutputCard
            key={`output-card-${index}`}
            lines={output}
            title={
              trimmed
                .replace(/^#{1,6}\s*/g, "")
                .replace(/:$/, "")
                .trim() || "Output"
            }
          />,
        );

        index = cursor - 1;
        continue;
      }
    }

    // ==========================================================
    // QUESTION → ANSWER
    // ==========================================================
    if (
      isQuestionLabel(trimmed) &&
      !insideFence &&
      !insideCode &&
      !insideFlow
    ) {
      const question: string[] = [];
      const answer: string[] = [];

      let cursor = index + 1;
      let section: "question" | "answer" = "question";

      while (cursor < lines.length) {
        const current = lines[cursor];
        const currentTrim = current.trim();

        if (isAnswerLabel(currentTrim)) {
          section = "answer";
          cursor++;
          continue;
        }

        if (
          cursor > index + 1 &&
          isVisualSectionBoundary(currentTrim) &&
          !isAnswerLabel(currentTrim)
        ) {
          break;
        }

        if (currentTrim) {
          if (section === "question") {
            question.push(currentTrim);
          } else {
            answer.push(currentTrim);
          }
        }

        cursor++;
      }

      if (question.length > 0) {
        elements.push(
          <QuestionAnswerCard
            key={`question-answer-${index}`}
            question={question}
            answer={answer}
          />,
        );

        index = cursor - 1;
        continue;
      }
    }

    // ==========================================================
    // CODE SECTION
    // Keep an entire Python/Code section in ONE code box.
    // Blank lines, list literals, tuple rows, closing brackets,
    // assignments, and function calls are all kept together.
    // ==========================================================
    if (
      isCodeSectionLabel(trimmed) &&
      !insideCode &&
      !insideFence &&
      !insideFlow
    ) {
      if (insideCode) flushCode(index);

      const title = trimmed
        .replace(/^#{1,6}\s*/, "")
        .replace(/:$/, "")
        .trim();

      elements.push(
        <SectionHeading
          key={`code-section-heading-${index}`}
          title={title}
          tone="sky"
        />,
      );

      insideCode = true;
      codeFormat = false;
      codeLanguage = /python/i.test(title) ? "python" : "code";
      codeLines = [];
      continue;
    }

    // ==========================================================
    // SPECIAL SECTION HEADINGS
    // ==========================================================
    if (
      isNamedSectionLabel(trimmed) &&
      !isInputLabel(trimmed) &&
      !isOutputLabel(trimmed) &&
      !isQuestionLabel(trimmed) &&
      !isAnswerLabel(trimmed)
    ) {
      if (insideCode) flushCode(index);

      const title = trimmed
        .replace(/^#{1,6}\s*/, "")
        .replace(/:$/, "")
        .trim();

      elements.push(
        <SectionHeading
          key={`section-heading-${index}`}
          title={title}
          tone={sectionTone(title)}
        />,
      );

      continue;
    }

    // Input → Process → Output visual block
    // This is handled before normal headings, paragraphs, and code.
    if (isInputLabel(trimmed) && !insideFence && !insideCode && !insideFlow) {
      const input: string[] = [];
      const process: string[] = [];
      const output: string[] = [];

      let cursor = index + 1;
      let section: "input" | "process" | "output" = "input";

      while (cursor < lines.length) {
        const current = lines[cursor];
        const currentTrim = current.trim();

        if (isProcessLabel(currentTrim)) {
          section = "process";
          cursor++;
          continue;
        }

        if (isOutputLabel(currentTrim)) {
          section = "output";
          cursor++;
          continue;
        }

        if (
          /^#{1,6}\s+/.test(currentTrim) &&
          !isInputLabel(currentTrim) &&
          !isOutputLabel(currentTrim) &&
          !isProcessLabel(currentTrim)
        ) {
          break;
        }

        if (
          /^(?:Example|Key Takeaway|Common Mistakes|Summary|Practice|Quick Check|Experiment|Dataset|Python|Code)\s*:?\s*$/i.test(
            currentTrim,
          )
        ) {
          break;
        }

        if (currentTrim) {
          const cleaned = cleanVisualLine(current);

          if (cleaned) {
            if (section === "input") input.push(cleaned);
            else if (section === "process") process.push(cleaned);
            else output.push(cleaned);
          }
        }

        cursor++;
      }

      if (input.length > 0 && output.length > 0) {
        elements.push(
          <AIMLInputOutput
            key={`aiml-input-output-${index}`}
            input={input}
            process={process}
            output={output}
          />,
        );

        index = cursor - 1;
        continue;
      }
    }

    // Markdown tables
    if (
      !insideFence &&
      !insideCode &&
      !insideFlow &&
      isMarkdownTableRow(rawLine)
    ) {
      let separatorIndex = -1;

      for (let i = index + 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        separatorIndex = i;
        break;
      }

      if (
        separatorIndex === index + 1 &&
        isMarkdownTableSeparator(lines[separatorIndex])
      ) {
        const tableLines: string[] = [rawLine, lines[separatorIndex]];
        let endIndex = separatorIndex + 1;

        while (endIndex < lines.length) {
          const next = lines[endIndex];

          if (!next.trim()) break;
          if (!isMarkdownTableRow(next)) break;

          tableLines.push(next);
          endIndex++;
        }

        elements.push(
          <MarkdownTable key={`markdown-table-${index}`} lines={tableLines} />,
        );

        for (let i = index; i < endIndex; i++) {
          consumedTableLines.add(i);
        }

        continue;
      }
    }

    // Fenced code
    if (trimmed.startsWith("```")) {
      if (!insideFence) {
        if (insideCode) {
          const fenceLanguageCandidate = trimmed
            .replace(/^```/, "")
            .trim();

          const repeatedPythonFence =
            /^(?:python|py)?$/i.test(fenceLanguageCandidate) &&
            /python/i.test(codeLanguage || "");

          // An opening Python fence encountered while an explicit
          // Python section is already active is just another marker.
          // Keep the existing code box instead of starting a new one.
          if (repeatedPythonFence) {
            continue;
          }

          flushCode(index);
        }

        insideFence = true;
        fenceLanguage = trimmed.replace(/^```/, "").trim();
        fenceLines = [];
      } else {
        insideFence = false;

        if (fenceLines.some((line) => line.trim().length > 0)) {
          elements.push(
            <CodeBlock
              key={`fenced-code-${index}`}
              lines={fenceLines}
              language={fenceLanguage || undefined}
            />,
          );
        }

        fenceLanguage = "";
        fenceLines = [];
      }

      continue;
    }

    if (insideFence) {
      fenceLines.push(rawLine);
      continue;
    }

    // ==========================================================
    // HARD CODE MODE
    //
    // Once a lesson explicitly enters a Python/Code section,
    // EVERY line belongs to the same code block until a real
    // lesson section starts. Do NOT classify individual Python
    // lines anymore. This prevents list rows, closing brackets,
    // tuples, dictionary entries, and continuation lines from
    // becoming separate cards.
    // ==========================================================
    if (insideCode) {
      // A lesson may contain repeated labels such as:
      // Python Example
      // Python
      // Python
      // between pieces of the same program. These are presentation
      // markers, not actual Python source, so keep the current code
      // block alive and ignore the repeated labels.
      if (isCodeSectionLabel(trimmed)) {
        continue;
      }

      const codeBoundary =
        isOutputLabel(trimmed) ||
        isQuestionLabel(trimmed) ||
        isAnswerLabel(trimmed) ||
        isInputLabel(trimmed) ||
        isProcessLabel(trimmed) ||
        isNormalHeading(trimmed) ||
        (
          isNamedSectionLabel(trimmed) &&
          !isCodeSectionLabel(trimmed)
        );

      if (codeBoundary) {
        flushCode(index);

        // Let the boundary be processed normally on this iteration.
        index--;
        continue;
      }

      // Keep absolutely everything else in the current code block,
      // including blank lines and lines that do not "look like code".
      codeLines.push(rawLine);
      continue;
    }

    // Java keyword grid
    if (renderKeywordGridIfNeeded(index)) {
      continue;
    }

    // Inline arrow flow:
    // Input → Model → Output
    // This is checked before the old nearby-arrow logic.
    const inlineFlow = splitInlineFlow(trimmed);

    if (inlineFlow) {
      if (insideCode) flushCode(index);
      if (insideFlow) flushFlow(index);

      elements.push(
        <FlowChart key={`inline-flow-${index}`} items={inlineFlow} />,
      );
      continue;
    }

    // Standalone flow nodes / arrows
    const previousNonBlankLine = (() => {
      for (let i = index - 1; i >= 0; i--) {
        const value = lines[i].trim();
        if (value) return value;
      }
      return "";
    })();

    const nextNonBlankLine = (() => {
      for (let i = index + 1; i < lines.length; i++) {
        const value = lines[i].trim();
        if (value) return value;
      }
      return "";
    })();

    const hasFlowArrowNearby =
      isFlowArrow(trimmed) ||
      isFlowArrow(previousNonBlankLine) ||
      isFlowArrow(nextNonBlankLine);

    const safeFlowNode =
      trimmed.length > 0 &&
      trimmed.length <= 80 &&
      !isIndented(rawLine) &&
      !isNormalHeading(trimmed) &&
      !trimmed.startsWith("- ") &&
      !trimmed.startsWith("• ") &&
      !trimmed.includes(";") &&
      !trimmed.includes("{") &&
      !trimmed.includes("}") &&
      !looksLikeCode(trimmed);

    if (
      hasFlowArrowNearby &&
      (isFlowArrow(trimmed) || (safeFlowNode && isSimpleFlowNode(trimmed)))
    ) {
      if (insideCode) flushCode(index);

      if (!insideFlow) {
        insideFlow = true;
        flowLines = [];
      }

      flowLines.push(trimmed);
      continue;
    }

    if (insideFlow) {
      if (isBlank(rawLine)) {
        continue;
      }

      flushFlow(index);
    }

    // Blank line
    if (isBlank(rawLine)) {
      if (insideCode) {
        codeLines.push("");
      } else {
        elements.push(<div key={`space-${index}`} className="h-3" />);
      }
      continue;
    }

    // Indented code
    if (isIndented(rawLine)) {
      if (!insideCode) {
        startCode(removeMarkdownIndent(rawLine), false);
      } else {
        codeLines.push(removeMarkdownIndent(rawLine));
      }
      continue;
    }

    // Code continuation
    if (insideCode && isCodeContinuationLine(rawLine)) {
      codeLines.push(rawLine.trim());
      continue;
    }

    // Python continuation lines. This is intentionally broader than
    // looksLikeCode() so list/tuple/dataset rows never escape the box.
    if (insideCode && isPythonLikeCodeLine(rawLine)) {
      codeLines.push(rawLine.trim());
      continue;
    }

    // Code
    if (looksLikeCode(rawLine) && isStrongCodeLine(rawLine)) {
      if (!insideCode) {
        startCode(
          rawLine.trim(),
          true,
          /^(?:from|import|def|class|print)\b/.test(rawLine.trim()) || /[\[\]]/.test(rawLine.trim())
            ? "python"
            : "",
        );
      } else {
        codeLines.push(rawLine.trim());
      }
      continue;
    }

    // Normal text ends a code block.
    if (insideCode) {
      flushCode(index);
    }

    const text = trimmed;
    if (!text) continue;

    // Headings
    if (text.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${index}`}
          className="mb-4 mt-7 max-w-full break-words rounded-xl border-l-4 border-teal-400 bg-teal-500/5 px-4 py-2 text-xl font-bold leading-tight text-teal-300 sm:text-2xl"
        >
          {text.substring(4)}
        </h3>,
      );
      continue;
    }

    if (text.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${index}`}
          className="mb-5 mt-9 max-w-full break-words border-b border-violet-500/20 pb-3 text-2xl font-extrabold leading-tight text-violet-300 sm:text-3xl"
        >
          {text.substring(3)}
        </h2>,
      );
      continue;
    }

    if (text.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${index}`}
          className="mb-7 max-w-full break-words rounded-2xl border border-sky-500/20 bg-sky-500/5 px-5 py-4 text-3xl font-extrabold leading-tight text-sky-300 sm:text-4xl"
        >
          {text.substring(2)}
        </h1>,
      );
      continue;
    }

    // Bullets
    if (text.startsWith("- ") || text.startsWith("• ")) {
      elements.push(
        <div
          key={`bullet-${index}`}
          className="mb-3 flex max-w-full min-w-0 items-start gap-3 text-base leading-7 text-gray-200 sm:gap-4 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9"
        >
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sky-400 sm:mt-4 sm:h-2.5 sm:w-2.5" />
          <span>{text.substring(2)}</span>
        </div>,
      );
      continue;
    }

    // Colon-style mini headings
    if (
      text.endsWith(":") &&
      text.length <= 110 &&
      !text.startsWith("|") &&
      !text.includes("://")
    ) {
      elements.push(
        <h3
          key={`colon-heading-${index}`}
          className="mb-4 mt-7 max-w-full break-words text-xl font-extrabold text-teal-300 sm:text-2xl"
        >
          {text.slice(0, -1)}
        </h3>,
      );
      continue;
    }

    // Normal paragraph
    elements.push(
      <p
        key={`paragraph-${index}`}
        className="mb-5 max-w-full break-words text-base leading-7 text-gray-200 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9"
      >
        {text}
      </p>,
    );
  }

  if (insideFence && fenceLines.length > 0) {
    elements.push(
      <CodeBlock
        key="final-fenced-code"
        lines={fenceLines}
        language={fenceLanguage || undefined}
      />,
    );
  }

  if (insideCode) flushCode(lines.length);
  if (insideFlow) flushFlow(lines.length);

  return elements;
}

function prepareAIMLContent(value: string): string {
  const lines = value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");

  const result: string[] = [];

  let lessonSeen = false;
  let titleSeen = false;

  const isSectionBoundary = (line: string) => {
    const text = line.trim();

    return (
      /^(?:Input|Expected Input)\s*:?\s*$/i.test(text) ||
      /^(?:Output|Expected Output|Desired Output|Prediction)\s*:?\s*$/i.test(text) ||
      /^(?:Model\s*\/\s*Process|Process|How It Works|Steps)\s*:?\s*$/i.test(text) ||
      /^Explanation\s*:?\s*$/i.test(text) ||
      /^Result\s*:?\s*$/i.test(text) ||
      /^Summary\s*:?\s*$/i.test(text) ||
      /^#{1,6}\s+/.test(text) ||
      /^\d+\.\s+/.test(text)
    );
  };

  const isLikelyPythonCode = (line: string) => {
    const text = line.trim();

    if (!text) return false;

    return (
      /^from\s+.+\s+import\s+/.test(text) ||
      /^import\s+.+/.test(text) ||
      /^def\s+\w+\s*\(/.test(text) ||
      /^class\s+\w+/.test(text) ||
      /^if\s+.+:/.test(text) ||
      /^elif\s+.+:/.test(text) ||
      /^else\s*:/.test(text) ||
      /^for\s+.+\s+in\s+.+:/.test(text) ||
      /^while\s+.+:/.test(text) ||
      /^return\s+/.test(text) ||
      /^print\s*\(/.test(text) ||
      /^\w+\s*=\s*.+/.test(text) ||
      /^\w+\.\w+\s*\(/.test(text) ||
      /^\[[^\]]*$/.test(text) ||
      /^\][,;]?$/.test(text) ||
      /^\[[\]{}(),\d\s.\-+*\"\']+$/.test(text) ||
      /^\w+\s*=\s*[\[{(]/.test(text)
    );
  };

  const looksLikeContinuation = (line: string) => {
    const text = line.trim();

    if (!text) return true;

    return (
      isLikelyPythonCode(text) ||
      /^\w+\[['"][^'"]+['"]\]/.test(text) ||
      /^\w+\([^)]*\)$/.test(text) ||
      /^\w+\.\w+\s*\(/.test(text) ||
      /^\[[^\]]*$/.test(text) ||
      /^\][,;]?$/.test(text) ||
      /^\[[\]{}(),\d\s.\-+*\"\']+$/.test(text) ||
      /^\w+\s*=\s*[\[{(]/.test(text)
    );
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) {
      result.push("");
      continue;
    }

    if (/^Lesson\s+\d+$/i.test(line)) {
      lessonSeen = true;
      titleSeen = false;
      result.push(line);
      continue;
    }

    if (lessonSeen && !titleSeen) {
      result.push("# " + line);
      titleSeen = true;
      lessonSeen = false;
      continue;
    }

    // Preserve existing fenced code exactly.
    if (line.startsWith("```")) {
      result.push(line);
      i++;

      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        result.push(lines[i]);
        i++;
      }

      if (i < lines.length) result.push("```");
      continue;
    }

    // Convert a plain "Python" label into a fenced Python section.
    if (/^Python$/i.test(line)) {
      result.push("### Python");
      result.push("```python");

      i++;

      let lastCodeLine = -1;

      while (i < lines.length) {
        const current = lines[i];
        const currentTrim = current.trim();

        if (!currentTrim) {
          result.push("");
          i++;
          continue;
        }

        if (isSectionBoundary(currentTrim)) {
          break;
        }

        if (
          /^Python$/i.test(currentTrim) ||
          /^C\+\+$/i.test(currentTrim) ||
          /^Java$/i.test(currentTrim)
        ) {
          break;
        }

        if (looksLikeContinuation(currentTrim)) {
          result.push(current);
          lastCodeLine = i;
          i++;
          continue;
        }

        if (lastCodeLine >= 0) break;

        i++;
      }

      while (result.length > 0 && result[result.length - 1] === "") {
        result.pop();
      }

      result.push("```");
      i--;
      continue;
    }

    const numbered = line.match(/^(\d+)\.\s+(.+)$/);

    if (numbered) {
      const heading = numbered[2].trim();

      if (!heading.endsWith("?")) {
        result.push("## " + heading);
      } else {
        result.push(line);
      }

      continue;
    }

    if (/^Example\s*:?\s*$/i.test(line)) {
      result.push("### Example");
      continue;
    }

    if (
      /^(?:Input|Expected Input|Output|Expected Output|Desired Output|Prediction|Model\s*\/\s*Process|Process|How It Works|Steps)\s*:?\s*$/i.test(
        line,
      )
    ) {
      result.push(line);
      continue;
    }

    if (
      line.endsWith(":") &&
      line.length <= 110 &&
      !line.startsWith("|")
    ) {
      result.push("### " + line.slice(0, -1).trim());
      continue;
    }

    if (/^[-•*]\s+/.test(line)) {
      result.push(line.replace(/^[-•*]\s+/, "- "));
      continue;
    }

    // Flow lines are deliberately preserved.
    if (
      line.includes("→") ||
      line.includes("⇒") ||
      line.includes("->") ||
      line.includes("⟶") ||
      line.includes("⟹") ||
      line.includes("↓")
    ) {
      result.push(line);
      continue;
    }

    result.push(raw);
  }

  return result.join("\n");
}

export default function AIMLContentRenderer({
  content,
}: {
  content: unknown;
}) {
  let value = "";

  if (typeof content === "string") {
    value = content;
  } else if (
    content &&
    typeof content === "object" &&
    "content" in content
  ) {
    value = String(
      (content as { content?: unknown }).content ?? "",
    );
  }

  return (
    <div className="w-full min-w-0 max-w-full overflow-visible break-words [overflow-wrap:anywhere] [&_h1]:text-blue-600 [&_h2]:text-purple-600 [&_h3]:text-teal-600 [&_h4]:text-slate-700 dark:[&_h1]:text-blue-400 dark:[&_h2]:text-purple-400 dark:[&_h3]:text-teal-400 dark:[&_h4]:text-slate-200 [&_img]:max-w-full [&_pre]:max-w-full [&_table]:max-w-full">
      {renderContent(prepareAIMLContent(value))}
    </div>
  );
}
