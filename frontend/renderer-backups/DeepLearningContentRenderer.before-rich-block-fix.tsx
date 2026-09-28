"use client";

import type { ReactNode } from "react";

/* ============================================================================
   Types
   ========================================================================== */

type LessonSection = {
  id?: string;
  title?: string;
  content?: string | string[];
};

type CodeExample = {
  id?: string;
  title?: string;
  explanation?: string;
  code?: string;
  language?: string;
  output?: string;
};

type MathematicalIntuition = {
  id?: string;
  title?: string;
  explanation?: string;
};

type Exercise = {
  id?: string;
  question?: string;
  difficulty?: string;
};

type CodingExercise = {
  id?: string;
  title?: string;
  task?: string;
};

type CommonMistake = {
  mistake?: string;
  correction?: string;
};

type DeepLearningLesson = {
  id?: string;
  moduleId?: string;
  lessonNumber?: number | string;
  title?: string;
  subtitle?: string;
  description?: string;
  estimatedTime?: string;
  difficulty?: string;

  learningObjectives?: string[];

  sections?: LessonSection[];

  codeExamples?: CodeExample[];

  mathematicalIntuition?: MathematicalIntuition[];

  exercises?: Exercise[];

  codingExercises?: CodingExercise[];

  commonMistakes?: CommonMistake[];

  summary?: string[];

  keyTakeaways?: string[];
};

/* ============================================================================
   Utility Functions
   ========================================================================== */

function cleanText(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\u00a0/g, " ")
    .replace(/\\`\\`\\`/g, "```")
    .replace(/\\`/g, "`")
    .trim();
}

function normalizeContent(
  content: string | string[] | undefined | null
): string[] {
  if (content === undefined || content === null) {
    return [];
  }

  if (Array.isArray(content)) {
    return content.flatMap((item) => {
      const value = String(item ?? "")
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n");

      return value.split("\n");
    });
  }

  return String(content)
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n");
}

function isHorizontalRule(text: string): boolean {
  const value = text.trim();

  return (
    /^-{3,}$/.test(value) ||
    /^_{3,}$/.test(value) ||
    /^\*{3,}$/.test(value)
  );
}

function isCodeFence(text: string): boolean {
  return /^```/.test(text.trim());
}

function isHeading(text: string): boolean {
  return /^#{1,6}\s+/.test(text.trim());
}

function headingLevel(text: string): number {
  const match = text.trim().match(/^(#{1,6})\s+/);

  return match ? match[1].length : 2;
}

function headingText(text: string): string {
  return text.trim().replace(/^#{1,6}\s+/, "").trim();
}

function isBullet(text: string): boolean {
  return /^[-*•]\s+/.test(text.trim());
}

function isNumberedItem(text: string): boolean {
  return /^\d+[.)]\s+/.test(text.trim());
}

function removeBulletPrefix(text: string): string {
  return text.trim().replace(/^[-*•]\s+/, "");
}

function removeNumberPrefix(text: string): string {
  return text.trim().replace(/^\d+[.)]\s+/, "");
}

function isIndented(text: string): boolean {
  return /^\s{2,}/.test(text);
}

/* ============================================================================
   Code Detection
   ========================================================================== */

function isLikelyCode(text: string): boolean {
  const value = text.trim();

  if (!value) {
    return false;
  }

  /*
   * Never classify obvious prose as code.
   */
  if (
    value.endsWith(".") &&
    !/[=()[\]{}:]/.test(value)
  ) {
    return false;
  }

  /*
   * Python
   */
  if (
    /^(import|from)\s+\w+/.test(value) ||
    /^(def|class)\s+\w+/.test(value) ||
    /^(if|elif|else|for|while|try|except|finally|with)\b/.test(value) ||
    /^(return|yield|raise|pass|break|continue)\b/.test(value) ||
    /^\w+\s*=\s*(torch|nn|np|numpy|pd|pandas|math|random)\./.test(value) ||
    /^\w+\s*=\s*torch\./.test(value) ||
    /^\w+\s*=\s*np\./.test(value) ||
    /^\w+\s*=\s*\[/.test(value) ||
    /^\w+\s*=\s*\{/.test(value) ||
    /^print\s*\(/.test(value)
  ) {
    return true;
  }

  /*
   * Common Python statements.
   */
  if (
    /^\w+\s*=\s*.+$/.test(value) &&
    (
      value.includes("(") ||
      value.includes("[") ||
      value.includes(".") ||
      value.includes("_")
    )
  ) {
    return true;
  }

  /*
   * C/C++ / JavaScript / TypeScript style.
   */
  if (
    /^(const|let|var)\s+\w+\s*=/.test(value) ||
    /^(public|private|protected)\s+/.test(value) ||
    /^(int|float|double|string|char|bool)\s+\w+\s*=/.test(value) ||
    /^#include\s*</.test(value) ||
    /^using\s+namespace\s+/.test(value) ||
    /^console\.(log|error|warn)\s*\(/.test(value)
  ) {
    return true;
  }

  /*
   * Function calls.
   */
  if (
    /^[A-Za-z_][A-Za-z0-9_]*\s*\([^)]*\)\s*;?$/.test(value) &&
    !value.includes("?")
  ) {
    return true;
  }

  /*
   * Python method calls such as:
   * tensor.shape
   * x.backward()
   * model.train()
   */
  if (
    /^[A-Za-z_][A-Za-z0-9_]*\.[A-Za-z_][A-Za-z0-9_]*\s*(\([^)]*\))?$/.test(
      value
    )
  ) {
    return true;
  }

  return false;
}

/* ============================================================================
   Formula Detection
   ========================================================================== */

function isFormula(text: string): boolean {
  const value = text.trim();

  if (!value) {
    return false;
  }

  /*
   * Code must NEVER become a formula.
   */
  if (isLikelyCode(value)) {
    return false;
  }

  /*
   * Python conditions are not formulas.
   */
  if (
    /^(if|elif|while|for)\b/.test(value) ||
    /^\w+\s*=\s*(torch|np|numpy|pd|math)\./.test(value)
  ) {
    return false;
  }

  /*
   * Long prose containing "=" should remain prose.
   */
  if (
    value.length > 180 &&
    !/[∑∫√∞λμσθ∇≤≥→←⊗]/.test(value)
  ) {
    return false;
  }

  /*
   * LaTeX-like expressions.
   */
  if (
    value.includes("\\frac") ||
    value.includes("\\sum") ||
    value.includes("\\nabla") ||
    value.includes("\\partial") ||
    value.includes("\\theta") ||
    value.includes("\\sigma")
  ) {
    return true;
  }

  /*
   * Mathematical symbols strongly indicate formulas.
   */
  if (
    /[∑∫√∞∇≤≥≈≠±⊙⊗]/.test(value)
  ) {
    return true;
  }

  /*
   * Typical ML equation.
   *
   * Examples:
   * y = Xw + b
   * L = (y - ŷ)^2
   * p(y|x)
   */
  if (
    /^[A-Za-zΔ∇][A-Za-z0-9_{}()^]*\s*=\s*.+/.test(value) &&
    (
      /[+\-*/^]/.test(value) ||
      /[A-Za-z]\([A-Za-z]/.test(value) ||
      /[xywbhWXYZ]/.test(value)
    )
  ) {
    return true;
  }

  /*
   * Vector / matrix notation.
   */
  if (
    /[A-Za-z]\s*∈\s*[Rℝ]/.test(value) ||
    /\bR\^\w+/.test(value) ||
    /\bR\s*\^/.test(value)
  ) {
    return true;
  }

  return false;
}

/* ============================================================================
   Flow Detection
   ========================================================================== */

function splitFlow(text: string): string[] | null {
  const value = text.trim();

  if (!value) {
    return null;
  }

  /*
   * Only explicitly written arrows become flowcharts.
   * This prevents normal prose from becoming flow nodes.
   */
  const hasArrow =
    value.includes("→") ||
    value.includes("->") ||
    value.includes("⇒");

  if (!hasArrow) {
    return null;
  }

  /*
   * Never turn source code into a flowchart.
   */
  if (
    isLikelyCode(value) ||
    value.includes("{") ||
    value.includes("}") ||
    value.includes(";")
  ) {
    return null;
  }

  const parts = value
    .split(/\s*(?:→|->|⇒)\s*/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    return null;
  }

  return parts;
}

/* ============================================================================
   Inline Text
   ========================================================================== */

function InlineText({
  text,
}: {
  text: string;
}) {
  const value = cleanText(text);

  if (!value) {
    return null;
  }

  /*
   * Split basic inline Markdown:
   * **bold**
   * `code`
   */
  const parts = value.split(
    /(\*\*[^*]+\*\*|`[^`]+`)/g
  );

  return (
    <>
      {parts.map((part, index) => {
        if (
          part.startsWith("**") &&
          part.endsWith("**")
        ) {
          return (
            <strong
              key={index}
              className="font-bold text-white"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }

        if (
          part.startsWith("`") &&
          part.endsWith("`")
        ) {
          return (
            <code
              key={index}
              className="rounded-md border border-slate-700 bg-slate-950 px-1.5 py-0.5 font-mono text-[0.9em] text-cyan-300"
            >
              {part.slice(1, -1)}
            </code>
          );
        }

        return (
          <span key={index}>
            {part}
          </span>
        );
      })}
    </>
  );
}

/* ============================================================================
   Heading
   ========================================================================== */

function SectionTitle({
  title,
  level = 2,
}: {
  title: string;
  level?: number;
}) {
  const safeTitle = cleanText(title);

  if (!safeTitle) {
    return null;
  }

  if (level === 1) {
    return (
      <h2 className="mb-6 mt-12 border-b border-slate-800 pb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {safeTitle}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3 className="mb-4 mt-8 text-xl font-bold text-cyan-300 sm:text-2xl">
        {safeTitle}
      </h3>
    );
  }

  return (
    <h2 className="mb-5 mt-10 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
      {safeTitle}
    </h2>
  );
}

/* ============================================================================
   Paragraph
   ========================================================================== */

function Paragraph({
  text,
}: {
  text: string;
}) {
  const value = cleanText(text);

  if (!value) {
    return null;
  }

  return (
    <p className="my-4 text-base leading-8 text-slate-300 sm:text-lg">
      <InlineText text={value} />
    </p>
  );
}

/* ============================================================================
   Bullet List
   ========================================================================== */

function BulletList({
  items,
}: {
  items: string[];
}) {
  if (!items.length) {
    return null;
  }

  return (
    <ul className="my-6 space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-base leading-8 text-slate-300 sm:text-lg"
        >
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

          <span className="min-w-0">
            <InlineText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ============================================================================
   Numbered List
   ========================================================================== */

function NumberedList({
  items,
}: {
  items: string[];
}) {
  if (!items.length) {
    return null;
  }

  return (
    <ol className="my-6 space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-4 text-base leading-8 text-slate-300 sm:text-lg"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-300">
            {index + 1}
          </span>

          <span className="min-w-0">
            <InlineText text={item} />
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ============================================================================
   Formula
   ========================================================================== */

function FormulaCard({
  formula,
}: {
  formula: string;
}) {
  return (
    <div className="my-7 overflow-x-auto rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5 sm:p-7">
      <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
        Mathematical Expression
      </div>

      <div className="whitespace-pre-wrap font-mono text-base leading-8 text-violet-100 sm:text-lg">
        {formula}
      </div>
    </div>
  );
}

/* ============================================================================
   Flow Chart
   ========================================================================== */

function FlowChart({
  items,
}: {
  items: string[];
}) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-cyan-500/20 bg-slate-950 p-5 sm:p-7">
      <div className="flex min-w-max items-center gap-3">
        {items.map((item, index) => {
          const isArrow = item === "→";

          if (isArrow) {
            return (
              <span
                key={index}
                className="px-1 text-2xl font-bold text-cyan-400"
              >
                →
              </span>
            );
          }

          return (
            <div
              key={index}
              className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 shadow-lg sm:text-base"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================================
   Code Block
   ========================================================================== */

function CodeBlock({
  code,
  language = "python",
}: {
  code: string;
  language?: string;
}) {
  const cleanedCode = code
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/^```[a-zA-Z0-9_+-]*\s*\n?/, "")
    .replace(/\n?```\s*$/, "")
    .trimEnd();

  return (
    <div className="my-7 overflow-hidden rounded-2xl border border-slate-700 bg-[#020617] shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
          {language || "Code"}
        </span>

        <span className="text-xs text-slate-500">
          Deep Learning
        </span>
      </div>

      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200 sm:p-6 sm:text-[15px]">
        <code>{cleanedCode}</code>
      </pre>
    </div>
  );
}

/* ============================================================================
   Output
   ========================================================================== */

function OutputCard({
  output,
}: {
  output: string;
}) {
  if (!output.trim()) {
    return null;
  }

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
      <div className="border-b border-emerald-500/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
        Output
      </div>

      <pre className="overflow-x-auto whitespace-pre-wrap p-5 text-sm leading-7 text-emerald-100 sm:text-base">
        {output}
      </pre>
    </div>
  );
}

/* ============================================================================
   Info Card
   ========================================================================== */

function InfoCard({
  title,
  children,
  tone = "sky",
}: {
  title: string;
  children: ReactNode;
  tone?:
    | "sky"
    | "violet"
    | "amber"
    | "rose"
    | "emerald";
}) {
  const tones = {
    sky: {
      border: "border-sky-500/20",
      background: "bg-sky-500/5",
      title: "text-sky-300",
    },
    violet: {
      border: "border-violet-500/20",
      background: "bg-violet-500/5",
      title: "text-violet-300",
    },
    amber: {
      border: "border-amber-500/20",
      background: "bg-amber-500/5",
      title: "text-amber-300",
    },
    rose: {
      border: "border-rose-500/20",
      background: "bg-rose-500/5",
      title: "text-rose-300",
    },
    emerald: {
      border: "border-emerald-500/20",
      background: "bg-emerald-500/5",
      title: "text-emerald-300",
    },
  };

  const current = tones[tone];

  return (
    <div
      className={`my-7 rounded-2xl border ${current.border} ${current.background} p-5 sm:p-7`}
    >
      <h3
        className={`mb-4 text-lg font-bold ${current.title} sm:text-xl`}
      >
        {title}
      </h3>

      <div className="text-slate-200">
        {children}
      </div>
    </div>
  );
}

/* ============================================================================
   Table
   ========================================================================== */

function SimpleTable({
  rows,
}: {
  rows: string[][];
}) {
  if (!rows.length) {
    return null;
  }

  const columnCount = Math.max(
    1,
    ...rows.map((row) => row.length)
  );

  return (
    <div className="my-7 w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-left">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex === 0
                    ? "bg-slate-800"
                    : rowIndex % 2 === 0
                      ? "bg-slate-950"
                      : "bg-slate-900/70"
                }
              >
                {Array.from(
                  { length: columnCount },
                  (_, columnIndex) => (
                    <td
                      key={columnIndex}
                      className={`border-b border-slate-800 px-4 py-4 ${
                        rowIndex === 0
                          ? "font-bold text-cyan-300"
                          : "text-slate-200"
                      }`}
                    >
                      <InlineText
                        text={row[columnIndex] || ""}
                      />
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ============================================================================
   Markdown Table Parser
   ========================================================================== */

function isMarkdownTableRow(text: string): boolean {
  const value = text.trim();

  return (
    value.startsWith("|") &&
    value.endsWith("|") &&
    value.split("|").length >= 3
  );
}

function isMarkdownTableSeparator(
  text: string
): boolean {
  const cells = text
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

  if (!cells.length) {
    return false;
  }

  return cells.every((cell) =>
    /^:?-{3,}:?$/.test(cell)
  );
}

function parseMarkdownTable(
  lines: string[]
): string[][] | null {
  if (lines.length < 2) {
    return null;
  }

  if (!isMarkdownTableRow(lines[0])) {
    return null;
  }

  if (!isMarkdownTableSeparator(lines[1])) {
    return null;
  }

  return lines
    .filter((line) => isMarkdownTableRow(line))
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim())
    );
}

/* ============================================================================
   Text Block Renderer
   ========================================================================== */

function renderTextBlock(
  rawContent: string | string[],
  keyPrefix: string
): ReactNode[] {
  const content = normalizeContent(rawContent);

  const elements: ReactNode[] = [];

  let i = 0;

  while (i < content.length) {
    const rawLine = content[i] ?? "";
    const text = cleanText(rawLine);

    /*
     * Blank lines are spacing only.
     */
    if (!text) {
      i++;
      continue;
    }

    /*
     * Markdown horizontal rules should never appear.
     */
    if (isHorizontalRule(text)) {
      i++;
      continue;
    }

    /* ---------------------------------------------------------------------- */
    /* Fenced Code                                                            */
    /* ---------------------------------------------------------------------- */

    if (isCodeFence(text)) {
      const language =
        text
          .replace(/^```/, "")
          .trim() || "code";

      const codeLines: string[] = [];

      i++;

      while (i < content.length) {
        const current = cleanText(content[i]);

        if (isCodeFence(current)) {
          break;
        }

        codeLines.push(content[i]);
        i++;
      }

      if (
        i < content.length &&
        isCodeFence(cleanText(content[i]))
      ) {
        i++;
      }

      elements.push(
        <CodeBlock
          key={`${keyPrefix}-fenced-code-${i}`}
          code={codeLines.join("\n")}
          language={language}
        />
      );

      continue;
    }

    /* ---------------------------------------------------------------------- */
    /* Markdown Tables                                                        */
    /* ---------------------------------------------------------------------- */

    if (
      isMarkdownTableRow(text) &&
      i + 1 < content.length &&
      isMarkdownTableSeparator(
        cleanText(content[i + 1])
      )
    ) {
      const tableLines: string[] = [
        content[i],
        content[i + 1],
      ];

      let j = i + 2;

      while (j < content.length) {
        const next = cleanText(content[j]);

        if (!next) {
          break;
        }

        if (!isMarkdownTableRow(next)) {
          break;
        }

        tableLines.push(content[j]);
        j++;
      }

      const rows = parseMarkdownTable(tableLines);

      if (rows) {
        elements.push(
          <SimpleTable
            key={`${keyPrefix}-table-${i}`}
            rows={rows}
          />
        );

        i = j;
        continue;
      }
    }

    /* ---------------------------------------------------------------------- */
    /* Markdown Headings                                                      */
    /* ---------------------------------------------------------------------- */

    if (isHeading(text)) {
      elements.push(
        <SectionTitle
          key={`${keyPrefix}-heading-${i}`}
          title={headingText(text)}
          level={headingLevel(text)}
        />
      );

      i++;
      continue;
    }

    /* ---------------------------------------------------------------------- */
    /* Bullet Group                                                           */
    /* ---------------------------------------------------------------------- */

    if (isBullet(text)) {
      const bullets: string[] = [];

      while (
        i < content.length &&
        isBullet(cleanText(content[i]))
      ) {
        bullets.push(
          removeBulletPrefix(
            cleanText(content[i])
          )
        );

        i++;
      }

      elements.push(
        <BulletList
          key={`${keyPrefix}-bullets-${i}`}
          items={bullets}
        />
      );

      continue;
    }

    /* ---------------------------------------------------------------------- */
    /* Numbered Group                                                         */
    /* ---------------------------------------------------------------------- */

    if (isNumberedItem(text)) {
      const numbered: string[] = [];

      while (
        i < content.length &&
        isNumberedItem(cleanText(content[i]))
      ) {
        numbered.push(
          removeNumberPrefix(
            cleanText(content[i])
          )
        );

        i++;
      }

      elements.push(
        <NumberedList
          key={`${keyPrefix}-numbered-${i}`}
          items={numbered}
        />
      );

      continue;
    }

    /* ---------------------------------------------------------------------- */
    /* Explicit Flow                                                         */
    /* ---------------------------------------------------------------------- */

    const flow = splitFlow(text);

    if (flow) {
      const flowItems: string[] = [];

      flow.forEach((item, index) => {
        flowItems.push(item);

        if (index < flow.length - 1) {
          flowItems.push("→");
        }
      });

      elements.push(
        <FlowChart
          key={`${keyPrefix}-flow-${i}`}
          items={flowItems}
        />
      );

      i++;
      continue;
    }

    /* ---------------------------------------------------------------------- */
    /* Code-like Block                                                        */
    /* ---------------------------------------------------------------------- */

    if (isLikelyCode(text)) {
      const codeLines: string[] = [rawLine];

      let j = i + 1;

      while (j < content.length) {
        const nextRaw = content[j];
        const next = cleanText(nextRaw);

        if (!next) {
          /*
           * Keep blank lines inside code only if the
           * following line is also clearly code/indented.
           */
          if (
            j + 1 < content.length &&
            (
              isLikelyCode(
                cleanText(content[j + 1])
              ) ||
              isIndented(content[j + 1])
            )
          ) {
            codeLines.push("");
            j++;
            continue;
          }

          break;
        }

        if (
          isLikelyCode(next) ||
          isIndented(nextRaw)
        ) {
          codeLines.push(nextRaw);
          j++;
          continue;
        }

        break;
      }

      elements.push(
        <CodeBlock
          key={`${keyPrefix}-auto-code-${i}`}
          code={codeLines.join("\n")}
          language="python"
        />
      );

      i = j;
      continue;
    }

    /* ---------------------------------------------------------------------- */
    /* Formula                                                                */
    /* ---------------------------------------------------------------------- */

    if (isFormula(text)) {
      elements.push(
        <FormulaCard
          key={`${keyPrefix}-formula-${i}`}
          formula={text}
        />
      );

      i++;
      continue;
    }

    /* ---------------------------------------------------------------------- */
    /* Normal Paragraph                                                       */
    /* ---------------------------------------------------------------------- */

    /*
     * Combine consecutive prose lines into one paragraph.
     * This prevents every line of a template string from
     * becoming a separate paragraph.
     */
    const paragraphLines: string[] = [text];

    let j = i + 1;

    while (j < content.length) {
      const nextRaw = content[j];
      const next = cleanText(nextRaw);

      if (!next) {
        break;
      }

      /*
       * Stop when a new structured element begins.
       */
      if (
        isHeading(next) ||
        isBullet(next) ||
        isNumberedItem(next) ||
        isCodeFence(next) ||
        isHorizontalRule(next) ||
        isLikelyCode(next) ||
        isFormula(next) ||
        splitFlow(next)
      ) {
        break;
      }

      /*
       * Stop before a table.
       */
      if (
        isMarkdownTableRow(next) &&
        j + 1 < content.length &&
        isMarkdownTableSeparator(
          cleanText(content[j + 1])
        )
      ) {
        break;
      }

      paragraphLines.push(next);
      j++;
    }

    elements.push(
      <Paragraph
        key={`${keyPrefix}-paragraph-${i}`}
        text={paragraphLines.join(" ")}
      />
    );

    i = j;
  }

  return elements;
}

/* ============================================================================
   Section Renderer
   ========================================================================== */

function SectionRenderer({
  section,
  index,
}: {
  section: LessonSection;
  index: number;
}) {
  const title = cleanText(section.title);

  const content =
    section.content !== undefined
      ? normalizeContent(section.content)
      : [];

  if (!title && content.length === 0) {
    return null;
  }

  return (
    <section
      id={
        section.id ||
        `section-${index + 1}`
      }
      className="scroll-mt-24"
    >
      {title && (
        <SectionTitle
          title={title.replace(
            /^\d+\.\s*/,
            ""
          )}
          level={2}
        />
      )}

      {content.length > 0 &&
        renderTextBlock(
          content,
          `section-${index}`
        )}
    </section>
  );
}

/* ============================================================================
   Lesson Detection
   ========================================================================== */

function isDeepLearningLesson(
  value: unknown
): value is DeepLearningLesson {
  if (!value || typeof value !== "object") {
    return false;
  }

  const record = value as Record<
    string,
    unknown
  >;

  return (
    Array.isArray(record.sections) ||
    Array.isArray(record.learningObjectives) ||
    Array.isArray(record.codeExamples) ||
    Array.isArray(record.keyTakeaways) ||
    typeof record.title === "string"
  );
}

/* ============================================================================
   Main Renderer
   ========================================================================== */

export default function DeepLearningContentRenderer({
  content,
}: {
  content: unknown;
}) {
  let lesson: DeepLearningLesson | null =
    null;

  /*
   * Direct lesson object.
   */
  if (isDeepLearningLesson(content)) {
    lesson = content;
  }

  /*
   * Support:
   * { content: lesson }
   */
  if (
    !lesson &&
    content &&
    typeof content === "object" &&
    "content" in content
  ) {
    const nested = (
      content as {
        content?: unknown;
      }
    ).content;

    if (isDeepLearningLesson(nested)) {
      lesson = nested;
    }
  }

  /* ==========================================================================
     Structured Lesson
     ======================================================================== */

  if (lesson) {
    return (
      <div className="w-full min-w-0 max-w-full overflow-visible break-words [overflow-wrap:anywhere]">
        <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">

          {/* ----------------------------------------------------------------
             Header
             ---------------------------------------------------------------- */}

          <header className="mb-10">
            <div className="mb-5 flex flex-wrap items-center gap-2">

              {lesson.moduleId && (
                <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet-300">
                  {lesson.moduleId.replace(
                    /^module/i,
                    "Module "
                  )}
                </span>
              )}

              {lesson.lessonNumber !==
                undefined && (
                <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                  Lesson{" "}
                  {lesson.lessonNumber}
                </span>
              )}

              {lesson.difficulty && (
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  {lesson.difficulty}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {lesson.title ||
                "Deep Learning Lesson"}
            </h1>

            {lesson.subtitle && (
              <p className="mt-4 max-w-5xl text-base leading-8 text-slate-400 sm:text-lg">
                <InlineText
                  text={lesson.subtitle}
                />
              </p>
            )}

            {lesson.description && (
              <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-950/50 p-5 sm:p-6">
                <p className="text-base leading-8 text-slate-300 sm:text-lg">
                  <InlineText
                    text={lesson.description}
                  />
                </p>
              </div>
            )}

            {(lesson.estimatedTime ||
              lesson.difficulty) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {lesson.estimatedTime && (
                  <div className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-400">
                    <span className="font-semibold text-slate-200">
                      Estimated time:
                    </span>{" "}
                    {
                      lesson.estimatedTime
                    }
                  </div>
                )}

                {lesson.difficulty && (
                  <div className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-400">
                    <span className="font-semibold text-slate-200">
                      Difficulty:
                    </span>{" "}
                    {lesson.difficulty}
                  </div>
                )}
              </div>
            )}
          </header>

          {/* ----------------------------------------------------------------
             Learning Objectives
             ---------------------------------------------------------------- */}

          {lesson.learningObjectives &&
            lesson.learningObjectives.length >
              0 && (
              <InfoCard
                title="Learning Objectives"
                tone="sky"
              >
                <ul className="space-y-3">
                  {lesson.learningObjectives.map(
                    (
                      objective,
                      index
                    ) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-base leading-8 sm:text-lg"
                      >
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                        <span className="min-w-0">
                          <InlineText
                            text={objective}
                          />
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </InfoCard>
            )}

          {/* ----------------------------------------------------------------
             Main Sections
             ---------------------------------------------------------------- */}

          {lesson.sections &&
            lesson.sections.length > 0 && (
              <div>
                {lesson.sections.map(
                  (
                    section,
                    index
                  ) => (
                    <SectionRenderer
                      key={
                        section.id ||
                        `section-${index}`
                      }
                      section={
                        section
                      }
                      index={index}
                    />
                  )
                )}
              </div>
            )}

          {/* ----------------------------------------------------------------
             Code Examples
             ---------------------------------------------------------------- */}

          {lesson.codeExamples &&
            lesson.codeExamples.length >
              0 && (
              <section className="mt-12">
                <SectionTitle
                  title="Code Examples"
                  level={2}
                />

                {lesson.codeExamples.map(
                  (
                    example,
                    index
                  ) => (
                    <div
                      key={
                        example.id ||
                        example.title ||
                        `code-example-${index}`
                      }
                      className="mb-9"
                    >
                      {example.title && (
                        <SectionTitle
                          title={
                            example.title
                          }
                          level={3}
                        />
                      )}

                      {example.explanation && (
                        <Paragraph
                          text={
                            example.explanation
                          }
                        />
                      )}

                      {example.code && (
                        <CodeBlock
                          code={
                            example.code
                          }
                          language={
                            example.language ||
                            "python"
                          }
                        />
                      )}

                      {example.output && (
                        <OutputCard
                          output={
                            example.output
                          }
                        />
                      )}
                    </div>
                  )
                )}
              </section>
            )}

          {/* ----------------------------------------------------------------
             Mathematical Intuition
             ---------------------------------------------------------------- */}

          {lesson.mathematicalIntuition &&
            lesson.mathematicalIntuition
              .length > 0 && (
              <section className="mt-12">
                <SectionTitle
                  title="Mathematical Intuition"
                  level={2}
                />

                <div className="space-y-5">
                  {lesson.mathematicalIntuition.map(
                    (
                      item,
                      index
                    ) => (
                      <InfoCard
                        key={
                          item.id ||
                          item.title ||
                          `math-${index}`
                        }
                        title={
                          item.title ||
                          `Concept ${
                            index + 1
                          }`
                        }
                        tone="violet"
                      >
                        <p className="text-base leading-8 sm:text-lg">
                          <InlineText
                            text={
                              item.explanation ||
                              ""
                            }
                          />
                        </p>
                      </InfoCard>
                    )
                  )}
                </div>
              </section>
            )}

          {/* ----------------------------------------------------------------
             Exercises
             ---------------------------------------------------------------- */}

          {lesson.exercises &&
            lesson.exercises.length > 0 && (
              <section className="mt-12">
                <SectionTitle
                  title="Practice"
                  level={2}
                />

                <div className="space-y-4">
                  {lesson.exercises.map(
                    (
                      exercise,
                      index
                    ) => (
                      <div
                        key={
                          exercise.id ||
                          `exercise-${index}`
                        }
                        className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="text-sm font-bold text-amber-300">
                            Exercise{" "}
                            {index + 1}
                          </span>

                          {exercise.difficulty && (
                            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                              {
                                exercise.difficulty
                              }
                            </span>
                          )}
                        </div>

                        <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
                          <InlineText
                            text={
                              exercise.question ||
                              ""
                            }
                          />
                        </p>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

          {/* ----------------------------------------------------------------
             Coding Exercises
             ---------------------------------------------------------------- */}

          {lesson.codingExercises &&
            lesson.codingExercises.length >
              0 && (
              <section className="mt-12">
                <SectionTitle
                  title="Coding Practice"
                  level={2}
                />

                <div className="space-y-5">
                  {lesson.codingExercises.map(
                    (
                      exercise,
                      index
                    ) => (
                      <div
                        key={
                          exercise.id ||
                          `coding-${index}`
                        }
                        className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 sm:p-6"
                      >
                        <div className="text-sm font-bold uppercase tracking-wider text-cyan-300">
                          Coding Exercise{" "}
                          {index + 1}
                        </div>

                        {exercise.title && (
                          <h3 className="mt-3 text-xl font-bold text-white">
                            {
                              exercise.title
                            }
                          </h3>
                        )}

                        {exercise.task && (
                          <p className="mt-3 text-base leading-8 text-slate-200 sm:text-lg">
                            <InlineText
                              text={
                                exercise.task
                              }
                            />
                          </p>
                        )}
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

          {/* ----------------------------------------------------------------
             Common Mistakes
             ---------------------------------------------------------------- */}

          {lesson.commonMistakes &&
            lesson.commonMistakes.length >
              0 && (
              <section className="mt-12">
                <SectionTitle
                  title="Common Mistakes"
                  level={2}
                />

                <div className="space-y-5">
                  {lesson.commonMistakes.map(
                    (
                      item,
                      index
                    ) => (
                      <div
                        key={`mistake-${index}`}
                        className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-5 sm:p-6"
                      >
                        {item.mistake && (
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-rose-300">
                              Mistake
                            </div>

                            <p className="mt-2 text-base leading-7 text-slate-200 sm:text-lg">
                              <InlineText
                                text={
                                  item.mistake
                                }
                              />
                            </p>
                          </div>
                        )}

                        {item.correction && (
                          <div className="mt-5 border-t border-rose-500/10 pt-5">
                            <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                              Correction
                            </div>

                            <p className="mt-2 text-base leading-7 text-slate-200 sm:text-lg">
                              <InlineText
                                text={
                                  item.correction
                                }
                              />
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

          {/* ----------------------------------------------------------------
             Summary
             ---------------------------------------------------------------- */}

          {lesson.summary &&
            lesson.summary.length > 0 && (
              <section className="mt-12">
                <InfoCard
                  title="Summary"
                  tone="emerald"
                >
                  <ul className="space-y-3">
                    {(Array.isArray(lesson.summary) ? lesson.summary : lesson.summary ? [lesson.summary] : []).map(
                      (item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-base leading-8 sm:text-lg"
                        >
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

                          <span className="min-w-0">
                            <InlineText
                              text={item}
                            />
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </InfoCard>
              </section>
            )}

          {/* ----------------------------------------------------------------
             Key Takeaways
             ---------------------------------------------------------------- */}

          {lesson.keyTakeaways &&
            lesson.keyTakeaways.length >
              0 && (
              <section className="mt-10">
                <div className="rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 via-slate-900 to-cyan-500/5 p-6 shadow-xl sm:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                      ✓
                    </div>

                    <h2 className="text-2xl font-extrabold text-violet-300">
                      Key Takeaways
                    </h2>
                  </div>

                  <ul className="space-y-4">
                    {lesson.keyTakeaways.map(
                      (item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-base leading-8 text-slate-200 sm:text-lg"
                        >
                          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-violet-400" />

                          <span className="min-w-0">
                            <InlineText
                              text={item}
                            />
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </section>
            )}
        </div>
      </div>
    );
  }

  /* ==========================================================================
     String Content Fallback
     ======================================================================== */

  if (typeof content === "string") {
    return (
      <div className="w-full min-w-0 max-w-full overflow-visible break-words [overflow-wrap:anywhere] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
        {renderTextBlock(
          content,
          "string-content"
        )}
      </div>
    );
  }

  /* ==========================================================================
     Array Content Fallback
     ======================================================================== */

  if (Array.isArray(content)) {
    return (
      <div className="w-full min-w-0 max-w-full overflow-visible break-words [overflow-wrap:anywhere] px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
        {renderTextBlock(
          content.map(String),
          "array-content"
        )}
      </div>
    );
  }

  /* ==========================================================================
     Invalid / Empty Content
     ======================================================================== */

  return (
    <div className="flex min-h-[400px] items-center justify-center px-6 py-16">
      <div className="max-w-xl rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 text-center">
        <h2 className="text-xl font-bold text-amber-300">
          Lesson content could not be loaded
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          The lesson exists, but its content
          format could not be recognized by
          the Deep Learning renderer.
        </p>
      </div>
    </div>
  );
}
