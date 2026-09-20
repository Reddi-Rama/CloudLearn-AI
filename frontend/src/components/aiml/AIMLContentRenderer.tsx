"use client";

import React from "react";
import AIMLInputOutput from "./AIMLInputOutput";
import AIMLRealtimeVisual from "./AIMLRealtimeVisual";

type Tone = "sky" | "violet" | "teal" | "amber" | "rose";

type FormulaData = {
  label?: string;
  expression: string;
  numerator?: string;
  denominator?: string;
};

function decodeEntities(value: string): string {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&#x20;/gi, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

function cleanLine(value: string): string {
  return decodeEntities(value).replace(/\u00a0/g, " ").trim();
}

function normalizeMath(value: string): string {
  return value
    .trim()
    .replace(/\\text\{([^}]*)\}/g, "$1")
    .replace(/\\cdot/g, "·")
    .replace(/\\times/g, "×")
    .replace(/\\sqrt\{([^}]*)\}/g, "√($1)")
    .replace(/\\hat\{y\}/g, "ŷ")
    .replace(/\\bar\{y\}/g, "ȳ")
    .replace(/\\sum/g, "Σ")
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, "$1/$2")
    .replace(/\^2/g, "²")
    .replace(/\^3/g, "³")
    .replace(/\^\{2\}/g, "²")
    .replace(/\^\{3\}/g, "³")
    .replace(/\s+/g, " ")
    .trim();
}

function looksMathematical(value: string): boolean {
  const text = normalizeMath(value);
  if (!text) return false;

  return (
    /[=Σ√∑∫]/.test(text) ||
    /\b(?:TP|TN|FP|FN|MAE|MSE|RMSE|R²|F1|MCC|AUC)\b/.test(text) ||
    /[ŷyᵢx̄]/.test(text) ||
    /\b(?:precision|recall|accuracy|variance|mean|error)\b/i.test(text) && /[+\-*/]/.test(text)
  );
}

function isFormulaOperatorLine(value: string): boolean {
  const text = cleanLine(value);
  return text === "=" || text === "≈" || text === "≠";
}

function isFormulaLabel(value: string): boolean {
  const text = cleanLine(value).replace(/^#{1,6}\s+/, "");
  return /^(?:MAE|MSE|RMSE|R²|R2|Accuracy|Precision|Recall|F1|F1 Score|Specificity|Sensitivity|Error|Loss|Variance|Mean|Probability)$/i.test(text);
}

function buildFormula(lines: string[], index: number): { data: FormulaData; end: number } | null {
  const current = cleanLine(lines[index]);

  if (!current || current.startsWith("-") || /^\d+\.\s+/.test(current)) {
    return null;
  }

  // ----------------------------------------------------------
  // Explicit formula label:
  // Formula
  // Accuracy
  // =
  // (TP + TN)
  // /
  // (TP + TN + FP + FN)
  // ----------------------------------------------------------
  if (/^Formula:?$/i.test(current)) {
    let j = index + 1;
    while (j < lines.length && !cleanLine(lines[j])) j++;

    if (j >= lines.length) return null;

    const label = cleanLine(lines[j]);
    j++;

    while (j < lines.length && !cleanLine(lines[j])) j++;
    if (j >= lines.length || !isFormulaOperatorLine(lines[j])) return null;

    j++;
    while (j < lines.length && !cleanLine(lines[j])) j++;
    if (j >= lines.length) return null;

    const numerator = normalizeMath(lines[j]);
    j++;

    // IMPORTANT: allow blank lines around the slash.
    while (j < lines.length && !cleanLine(lines[j])) j++;

    if (j < lines.length && cleanLine(lines[j]) === "/") {
      j++;
      while (j < lines.length && !cleanLine(lines[j])) j++;

      if (j < lines.length) {
        const denominator = normalizeMath(lines[j]);

        return {
          data: {
            label,
            expression: `${numerator}/${denominator}`,
            numerator,
            denominator,
          },
          end: j,
        };
      }
    }

    // Not a fraction: render the complete expression normally.
    if (looksMathematical(numerator)) {
      const fraction = numerator.match(/^(.+?)\s*\/\s*(.+)$/);

      return {
        data: fraction
          ? {
              label,
              expression: numerator,
              numerator: fraction[1],
              denominator: fraction[2],
            }
          : {
              label,
              expression: numerator,
            },
        end: j - 1,
      };
    }

    return null;
  }

  // ----------------------------------------------------------
  // Named formula:
  // Accuracy
  // =
  // (TP + TN)
  // /
  // (TP + TN + FP + FN)
  //
  // IMPORTANT: check the vertical fraction FIRST. The previous
  // implementation returned immediately after seeing the
  // numerator, which is why '/' and the denominator appeared
  // outside the formula card.
  // ----------------------------------------------------------
  if (isFormulaLabel(current)) {
    let j = index + 1;
    while (j < lines.length && !cleanLine(lines[j])) j++;

    if (j < lines.length && isFormulaOperatorLine(lines[j])) {
      j++;
      while (j < lines.length && !cleanLine(lines[j])) j++;

      if (j >= lines.length) return null;

      const numerator = normalizeMath(lines[j]);
      j++;

      // Look for the slash BEFORE deciding that numerator is a
      // complete expression.
      while (j < lines.length && !cleanLine(lines[j])) j++;

      if (j < lines.length && cleanLine(lines[j]) === "/") {
        j++;
        while (j < lines.length && !cleanLine(lines[j])) j++;

        if (j < lines.length) {
          const denominator = normalizeMath(lines[j]);

          return {
            data: {
              label: current,
              expression: `${numerator}/${denominator}`,
              numerator,
              denominator,
            },
            end: j,
          };
        }
      }

      // No vertical slash: render a normal equation.
      if (looksMathematical(numerator)) {
        const fraction = numerator.match(/^(.+?)\s*\/\s*(.+)$/);

        return {
          data: fraction
            ? {
                label: current,
                expression: numerator,
                numerator: fraction[1],
                denominator: fraction[2],
              }
            : {
                label: current,
                expression: numerator,
              },
          end: j - 1,
        };
      }
    }
  }

  // ----------------------------------------------------------
  // Single-line equation:
  // Accuracy = (TP + TN) / (...)
  // ----------------------------------------------------------
  if (looksMathematical(current) && /[=]/.test(current)) {
    const expression = normalizeMath(current);
    const match = expression.match(/^([^=]+)=\s*(.+)$/);

    if (match) {
      const rhs = match[2].trim();
      const fraction = rhs.match(/^(.+?)\s*\/\s*(.+)$/);

      return {
        data: fraction
          ? {
              label: match[1].trim(),
              expression: rhs,
              numerator: fraction[1],
              denominator: fraction[2],
            }
          : {
              label: match[1].trim(),
              expression: rhs,
            },
        end: index,
      };
    }
  }

  return null;
}

function FormulaCard({ data }: { data: FormulaData }) {
  return (
    <div className="my-8 w-full min-w-0 overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#071525] shadow-lg shadow-cyan-950/10">
      <div className="border-l-4 border-cyan-400 px-6 py-4">
        <div className="mb-4 text-sm font-extrabold uppercase tracking-[0.16em] text-cyan-300">
          Formula
        </div>
        <div className="flex min-w-0 flex-wrap items-center justify-center gap-4 overflow-x-auto py-5 text-center font-serif text-2xl leading-relaxed text-white sm:text-3xl lg:text-4xl">
          {data.label && <span className="font-semibold">{normalizeMath(data.label)}</span>}
          {data.label && <span className="text-cyan-300">=</span>}
          {data.numerator && data.denominator ? (
            <span className="inline-flex min-w-[150px] flex-col items-center align-middle leading-none">
              <span className="border-b-2 border-slate-300 px-5 pb-2">{data.numerator}</span>
              <span className="px-5 pt-2">{data.denominator}</span>
            </span>
          ) : (
            <span className="font-medium">{normalizeMath(data.expression)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function CodeBlock({ lines, language }: { lines: string[]; language?: string }) {
  return (
    <div className="my-8 w-full min-w-0 overflow-hidden rounded-2xl border border-sky-500/20 bg-[#050a16] shadow-xl shadow-black/20">
      {language && (
        <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900/90 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-sky-300">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          {language}
        </div>
      )}
      <pre className="max-w-full overflow-x-auto whitespace-pre px-4 py-5 text-sm leading-7 text-slate-200 sm:px-6 sm:py-6 sm:text-base lg:text-[17px] lg:leading-8">
        <code className="font-mono whitespace-pre">{lines.join("\n")}</code>
      </pre>
    </div>
  );
}

function SectionHeading({ title, tone = "sky" }: { title: string; tone?: Tone }) {
  const tones: Record<Tone, string> = {
    sky: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    teal: "border-teal-500/30 bg-teal-500/10 text-teal-300",
    amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    rose: "border-rose-500/30 bg-rose-500/10 text-rose-300",
  };

  return (
    <div className={`mb-4 mt-7 flex w-full min-w-0 items-center gap-3 rounded-xl border px-4 py-3 ${tones[tone]}`}>
      <span className="h-2 w-2 shrink-0 rounded-full bg-current shadow-[0_0_10px_currentColor]" />
      <span className="text-sm font-extrabold uppercase tracking-[0.14em] sm:text-base">{title}</span>
    </div>
  );
}

function OutputCard({ lines, title = "Output" }: { lines: string[]; title?: string }) {
  return (
    <div className="my-7 w-full min-w-0 overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-950/40 via-slate-950 to-slate-950 shadow-lg">
      <div className="flex items-center gap-3 border-b border-emerald-500/20 bg-emerald-500/10 px-5 py-3.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-sm font-bold text-emerald-300">✓</span>
        <span className="text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-300">{title}</span>
      </div>
      <div className="space-y-2 px-5 py-5 sm:px-6">
        {lines.map((line, index) => (
          <div key={index} className="min-w-0 rounded-lg border border-slate-800 bg-slate-950/80 px-4 py-3 font-mono text-sm leading-6 text-slate-200 sm:text-base">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

function QuestionAnswerCard({ question, answer }: { question: string[]; answer: string[] }) {
  return (
    <div className="my-7 w-full min-w-0 space-y-3">
      <div className="overflow-hidden rounded-2xl border border-violet-500/25 bg-slate-950/70">
        <div className="border-b border-violet-500/20 bg-violet-500/10 px-5 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-violet-300">Question</div>
        <div className="px-5 py-5 sm:px-6">
          {question.map((line, index) => <p key={index} className="mb-2 text-base leading-7 text-slate-100 last:mb-0 sm:text-lg">{line}</p>)}
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-emerald-500/25 bg-slate-950/70">
        <div className="border-b border-emerald-500/20 bg-emerald-500/10 px-5 py-3.5 text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-300">Answer</div>
        <div className="px-5 py-5 sm:px-6">
          {answer.length ? answer.map((line, index) => <p key={index} className="mb-2 text-base leading-7 text-slate-200 last:mb-0 sm:text-lg">{line}</p>) : <p className="text-slate-400">Review the concept above and explain it in your own words.</p>}
        </div>
      </div>
    </div>
  );
}

function FlowChart({ items }: { items: string[] }) {
  return (
    <div className="my-8 w-full min-w-0 overflow-x-auto">
      <div className="mx-auto flex w-max min-w-full items-center justify-center gap-3 px-2 py-2 sm:gap-4">
        {items.map((item, index) => item === "→" ? (
          <div key={index} className="shrink-0 px-1 text-2xl font-bold text-sky-400">→</div>
        ) : (
          <div key={index} className="flex min-h-[52px] w-[150px] shrink-0 items-center justify-center rounded-2xl border border-sky-500/30 bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-slate-100 shadow-lg sm:text-base">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function splitInlineFlow(text: string): string[] | null {
  const value = cleanLine(text);
  if (!value || value.length > 180 || value.includes("|") || value.includes(";") || value.startsWith("-") || value.startsWith("#")) return null;
  if (!/(?:→|⇒|->|⟶|⟹)/.test(value)) return null;
  const parts = value.split(/\s*(?:→|⇒|->|⟶|⟹)\s*/).map((x) => x.trim()).filter(Boolean);
  if (parts.length < 2 || parts.some((x) => x.length > 70)) return null;
  const result: string[] = [];
  parts.forEach((part, index) => { if (index) result.push("→"); result.push(part); });
  return result;
}

function isStandaloneArrow(text: string): boolean {
  return ["↓", "↑", "→", "←", "↔", "⇒", "➡", "⬇", "⬆", "⟶", "⟹", "⟷", "⇢", "⇠"].includes(cleanLine(text));
}

function looksLikeCode(line: string): boolean {
  const text = cleanLine(line);
  if (!text) return false;
  return (
    /^from\s+\S+\s+import\s+/.test(text) ||
    /^import\s+/.test(text) ||
    /^(?:def|class)\s+\w+/.test(text) ||
    /^(?:if|elif|for|while|with|try|except|finally)\b.*:/.test(text) ||
    /^print\s*\(/.test(text) ||
    /^return\b/.test(text) ||
    /^raise\b/.test(text) ||
    /^#include\s*[<"]/.test(text) ||
    /^(?:int|float|double|char|bool|boolean|string|String|long|short)\s+\w+\s*(?:=|;)/.test(text) ||
    /^cout\s*<</.test(text) ||
    /^cin\s*>>/.test(text) ||
    /^(?:printf|scanf)\s*\(/.test(text) ||
    /^System\.out\./.test(text) ||
    /^\w+(?:\.\w+)*\s*\([^)]*\)\s*;?$/.test(text) ||
    /^\w+\s*=\s*.+/.test(text)
  );
}

function isMarkdownTableSeparator(line: string): boolean {
  const cells = cleanLine(line).replace(/^\|/, "").replace(/\|$/, "").split("|").map((x) => x.trim());
  return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isMarkdownTableRow(line: string): boolean {
  const text = cleanLine(line);
  return text.includes("|") && text.replace(/\|/g, "").trim().length > 0;
}

function splitTableRow(line: string): string[] {
  let text = cleanLine(line);
  if (text.startsWith("|")) text = text.slice(1);
  if (text.endsWith("|")) text = text.slice(0, -1);
  return text.split(/(?<!\\)\|/).map((x) => x.trim().replace(/\\\|/g, "|"));
}

function MarkdownTable({ lines }: { lines: string[] }) {
  if (lines.length < 2) return null;
  const header = splitTableRow(lines[0]);
  const separator = splitTableRow(lines[1]);
  const body = lines.slice(2).map(splitTableRow).filter((row) => row.some(Boolean));
  const count = Math.max(header.length, separator.length, ...body.map((r) => r.length));
  const getAlign = (cell: string) => cell.startsWith(":") && cell.endsWith(":") ? "text-center" : cell.endsWith(":") ? "text-right" : "text-left";

  return (
    <div className="my-8 w-full min-w-0 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm sm:text-base">
          <thead><tr className="bg-slate-800">
            {Array.from({ length: count }, (_, i) => <th key={i} className={`border-b border-slate-600 px-4 py-3 font-bold text-green-400 sm:px-6 sm:py-4 ${getAlign(separator[i] || "---")}`}>{header[i] || ""}</th>)}
          </tr></thead>
          <tbody>{body.map((row, ri) => <tr key={ri} className={ri % 2 ? "bg-slate-900/70" : "bg-slate-950"}>
            {Array.from({ length: count }, (_, ci) => <td key={ci} className={`border-b border-slate-800 px-4 py-3 text-slate-200 sm:px-6 sm:py-4 ${getAlign(separator[ci] || "---")}`}>{row[ci] || ""}</td>)}
          </tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

function sectionTone(title: string): Tone {
  const t = title.toLowerCase();
  if (t.includes("output") || t.includes("prediction") || t === "result") return "teal";
  if (t.includes("mistake") || t.includes("practice")) return "amber";
  if (t.includes("quick") || t.includes("question")) return "violet";
  if (t.includes("experiment") || t.includes("dataset")) return "rose";
  return "sky";
}

function isSpecialLabel(text: string): boolean {
  const t = cleanLine(text).replace(/^#{1,6}\s+/, "");
  return /^(?:Input|Expected Input|Output|Expected Output|Desired Output|Prediction|Process|How It Works|Steps|Model\s*\/\s*Process|Question|Answer|Python|Python Example|Python Code|Code|Code Example|Example|Key Takeaway|Common Mistakes|Summary|Quick Check|Experiment|Dataset|Extended Study|Explanation|Result|Mathematical Intuition|Real[- ]World Example)$/i.test(t);
}

function isBoundary(text: string): boolean {
  const t = cleanLine(text);
  return !t || /^#{1,6}\s+/.test(t) || isSpecialLabel(t);
}

function isIndented(line: string): boolean {
  return /^\s{4}|^\t/.test(line);
}

function renderMarkdownInline(text: string): React.ReactNode {
  const importantTerms = [
    "Accuracy",
    "Precision",
    "Recall",
    "F1-score",
    "F1 Score",
    "ROC-AUC",
    "PR-AUC",
    "MAE",
    "MSE",
    "RMSE",
    "R²",
    "Overfitting",
    "Underfitting",
    "Cross-Validation",
    "Regularization",
    "Classification",
    "Regression",
    "Clustering",
    "Feature Engineering",
    "Model Evaluation",
    "Hyperparameter",
    "Hyperparameters",
    "Precision-Recall",
    "Confusion Matrix",
    "Generalization",
    "Training Set",
    "Test Set",
    "Validation Set",
  ];

  const escaped = importantTerms
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

const parts = text.split(
    new RegExp(`(\`[^\`]+\`|\\*\\*[^*]+\\*\\*|\\b(?:${escaped})\\b)`, "gi"),
  );

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded-md bg-slate-800 px-1.5 py-0.5 font-mono text-[0.9em] text-cyan-300"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const isImportant = importantTerms.some(
      (term) => term.toLowerCase() === part.toLowerCase(),
    );

    if (isImportant) {
      return (
        <strong
          key={index}
          className="font-semibold text-cyan-300"
        >
          {part}
        </strong>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function isCompactTerm(text: string): boolean {
  const value = cleanLine(text).replace(/[.!?]+$/, "");
  if (!value || value.length > 55) return false;

  return /^(?:Accuracy|Precision|Recall|F1(?:-score| Score)?|ROC-AUC|PR-AUC|MAE|MSE|RMSE|R²|Specificity|Sensitivity|Cross-Validation|Overfitting|Underfitting|Regularization|Generalization|Classification|Regression|Clustering|Feature Engineering|Confusion Matrix|Training Set|Validation Set|Test Set)$/i.test(value);
}

function CompactTermList({ terms }: { terms: string[] }) {
  return (
    <div className="my-4 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {terms.map((term, index) => (
        <div
          key={`${term}-${index}`}
          className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-800/80 bg-slate-900/55 px-4 py-2.5 text-base leading-6 text-slate-200 transition-colors hover:border-cyan-500/30 hover:bg-slate-900/80 sm:text-[17px]"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
          <span>{renderMarkdownInline(term.replace(/[.!?]+$/, ""))}</span>
        </div>
      ))}
    </div>
  );
}

function prepareContent(value: string): string[] {
  const lines = value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  const result: string[] = [];
  let lessonTitlePending = false;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const text = cleanLine(raw);

    if (/^Lesson\s+\d+$/i.test(text)) {
      result.push(text);
      lessonTitlePending = true;
      continue;
    }

    if (lessonTitlePending && text) {
      result.push(`# ${text}`);
      lessonTitlePending = false;
      continue;
    }

    // IMPORTANT: numbered lines are NOT automatically headings.
    // Only convert a numbered section when it is surrounded by blank lines.
    const numbered = text.match(/^(\d+)\.\s+(.+)$/);
    if (numbered) {
      const prev = i > 0 ? cleanLine(lines[i - 1]) : "";
      const next = i + 1 < lines.length ? cleanLine(lines[i + 1]) : "";
      const isSection = !prev && !next && numbered[2].length <= 110;
      result.push(isSection ? `## ${numbered[2]}` : raw);
      continue;
    }

    result.push(raw);
  }

  return result;
}

function getLessonVisualQuery(content: string): string {
  const lines = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");

  for (let i = 0; i < lines.length; i++) {
    const value = cleanLine(lines[i]);
    if (!value) continue;

    if (/^Lesson\s+\d+$/i.test(value)) {
      for (let j = i + 1; j < lines.length; j++) {
        const title = cleanLine(lines[j]);
        if (title) return title;
      }
    }

    if (/^#{1,2}\s+/.test(value)) {
      return value.replace(/^#{1,2}\s+/, "");
    }
  }

  return "machine learning";
}

function renderContent(content: string): React.ReactNode[] {
  const lines = prepareContent(content);
  const elements: React.ReactNode[] = [];
  let i = 0;

  // One relevant live visual per lesson. The visual is enhancement-only and
  // never prevents the lesson itself from rendering if the image service fails.
  elements.push(
    <AIMLRealtimeVisual
      key="lesson-realtime-visual"
      query={getLessonVisualQuery(content)}
    />,
  );

  while (i < lines.length) {
    const raw = lines[i];
    const text = cleanLine(raw);

    if (!text) {
      // Blank lines are structural separators in the source content.
      // Do not turn every blank line into a large visible spacer.
      i++;
      continue;
    }

    // Fenced code.
    if (text.startsWith("```")) {
      const language = text.slice(3).trim();
      const code: string[] = [];
      i++;
      while (i < lines.length && !cleanLine(lines[i]).startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;
      elements.push(<CodeBlock key={`fenced-${i}`} lines={code} language={language || undefined} />);
      continue;
    }

    // Input → Process → Output card. Stop on a real section boundary OR
    // a blank line after content, so ordinary lesson paragraphs are never swallowed.
    if (/^(?:Input|Expected Input)$/i.test(text)) {
      const input: string[] = [];
      const process: string[] = [];
      const output: string[] = [];
      let section: "input" | "process" | "output" = "input";
      let j = i + 1;
      let hadContent = false;

      for (; j < lines.length; j++) {
        const t = cleanLine(lines[j]);
        if (!t) {
          if (hadContent) break;
          continue;
        }
        if (/^(?:Process|How It Works|Steps|Model\s*\/\s*Process)$/i.test(t)) { section = "process"; hadContent = false; continue; }
        if (/^(?:Output|Expected Output|Desired Output|Prediction)$/i.test(t)) { section = "output"; hadContent = false; continue; }
        if (/^#{1,6}\s+/.test(t) || /^(?:Example|Summary|Practice|Quick Check|Common Mistakes|Experiment|Dataset|Python|Code|Extended Study)$/i.test(t)) break;
        hadContent = true;
        if (section === "input") input.push(t); else if (section === "process") process.push(t); else output.push(t);
      }

      if (input.length || process.length || output.length) {
        elements.push(<AIMLInputOutput key={`io-${i}`} input={input} process={process} output={output} />);
        i = j;
        continue;
      }
    }

    // Output-only block.
    if (/^(?:Output|Expected Output|Desired Output|Prediction)$/i.test(text)) {
      const output: string[] = [];
      let j = i + 1;
      for (; j < lines.length; j++) {
        const t = cleanLine(lines[j]);
        if (!t) break;
        if (/^#{1,6}\s+/.test(t) || isSpecialLabel(t)) break;
        output.push(t);
      }
      if (output.length) {
        elements.push(<OutputCard key={`output-${i}`} lines={output} title={text.replace(/:$/, "")} />);
        i = j;
        continue;
      }
    }

    // Question / answer block.
    if (/^Question:?$/i.test(text)) {
      const question: string[] = [];
      const answer: string[] = [];
      let mode: "q" | "a" = "q";
      let j = i + 1;
      for (; j < lines.length; j++) {
        const t = cleanLine(lines[j]);
        if (!t) { if (question.length || answer.length) break; continue; }
        if (/^Answer:?$/i.test(t)) { mode = "a"; continue; }
        if (/^#{1,6}\s+/.test(t) || isSpecialLabel(t) && !/^Answer:?$/i.test(t)) break;
        (mode === "q" ? question : answer).push(t);
      }
      if (question.length) {
        elements.push(<QuestionAnswerCard key={`qa-${i}`} question={question} answer={answer} />);
        i = j;
        continue;
      }
    }

    // Markdown table.
    if (isMarkdownTableRow(raw) && i + 1 < lines.length && isMarkdownTableSeparator(lines[i + 1])) {
      const table: string[] = [raw, lines[i + 1]];
      let j = i + 2;
      while (j < lines.length && cleanLine(lines[j]) && isMarkdownTableRow(lines[j])) { table.push(lines[j]); j++; }
      elements.push(<MarkdownTable key={`table-${i}`} lines={table} />);
      i = j;
      continue;
    }

    // Formula. This is deliberately checked BEFORE ordinary paragraph rendering,
    // but only for positively identified mathematical patterns.
    const formula = buildFormula(lines, i);
    if (formula) {
      elements.push(<FormulaCard key={`formula-${i}`} data={formula.data} />);
      i = formula.end + 1;
      continue;
    }

    // Inline flowchart.
    const inlineFlow = splitInlineFlow(text);
    if (inlineFlow) {
      elements.push(<FlowChart key={`inline-flow-${i}`} items={inlineFlow} />);
      i++;
      continue;
    }

    // Consecutive standalone flow nodes/arrows.
    if (isStandaloneArrow(text)) {
      const flow: string[] = [];
      let j = i;
      while (j < lines.length) {
        const t = cleanLine(lines[j]);
        if (!t) { j++; continue; }
        if (isStandaloneArrow(t)) { flow.push(t === "⇒" || t === "⟹" ? "→" : t); j++; continue; }
        if (flow.length && t.length <= 80 && !looksLikeCode(t) && !isBoundary(t)) { flow.push(t); j++; continue; }
        break;
      }
      if (flow.length > 1) {
        elements.push(<FlowChart key={`flow-${i}`} items={flow} />);
        i = j;
        continue;
      }
    }

    // Explicit Python/Code section: consume until next major section.
    if (/^(?:Python|Python Example|Python Code|Code|Code Example):?$/i.test(text)) {
      elements.push(<SectionHeading key={`code-heading-${i}`} title={text.replace(/:$/, "")} />);
      const code: string[] = [];
      let j = i + 1;
      for (; j < lines.length; j++) {
        const t = cleanLine(lines[j]);
        if (/^#{1,6}\s+/.test(t) || /^(?:Input|Output|Process|Question|Answer|Summary|Practice|Quick Check|Common Mistakes|Experiment|Dataset|Extended Study)$/i.test(t)) break;
        code.push(lines[j]);
      }
      while (code.length && !cleanLine(code[code.length - 1])) code.pop();
      if (code.length) elements.push(<CodeBlock key={`section-code-${i}`} lines={code} language={/python/i.test(text) ? "python" : "code"} />);
      i = j;
      continue;
    }

    // Markdown headings.
    if (text.startsWith("### ")) {
      elements.push(<h3 key={`h3-${i}`} className="mb-3 mt-6 max-w-full break-words rounded-xl border-l-4 border-teal-400 bg-teal-500/5 px-4 py-2 text-xl font-bold leading-tight text-teal-300 sm:text-2xl">{renderMarkdownInline(text.slice(4))}</h3>);
      i++; continue;
    }
    if (text.startsWith("## ")) {
      elements.push(<h2 key={`h2-${i}`} className="mb-4 mt-7 max-w-full break-words border-b border-violet-500/20 pb-3 text-2xl font-extrabold leading-tight text-violet-300 sm:text-3xl">{renderMarkdownInline(text.slice(3))}</h2>);
      i++; continue;
    }
    if (text.startsWith("# ")) {
      elements.push(<h1 key={`h1-${i}`} className="mb-5 max-w-full break-words rounded-2xl border border-sky-500/20 bg-sky-500/5 px-5 py-4 text-3xl font-extrabold leading-tight text-sky-300 sm:text-4xl">{renderMarkdownInline(text.slice(2))}</h1>);
      i++; continue;
    }

    // Special section headings.
    if (isSpecialLabel(text)) {
      const title = text.replace(/^#{1,6}\s+/, "").replace(/:$/, "");
      elements.push(<SectionHeading key={`section-${i}`} title={title} tone={sectionTone(title)} />);
      i++; continue;
    }

    // Bullets.
    const bullet = text.match(/^[-•*]\s+(.+)$/);
    if (bullet) {
      elements.push(
        <div key={`bullet-${i}`} className="mb-1.5 flex max-w-full min-w-0 items-start gap-3 text-base leading-7 text-gray-200 sm:gap-3 sm:text-lg sm:leading-7 lg:text-lg lg:leading-8">
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sky-400 sm:mt-4 sm:h-2.5 sm:w-2.5" />
          <span>{renderMarkdownInline(bullet[1])}</span>
        </div>,
      );
      i++; continue;
    }

    // Numbered lists remain numbered lists. They are NEVER swallowed by formula logic.
    const numbered = text.match(/^(\d+)\.\s+(.+)$/);
    if (numbered) {
      elements.push(
        <div key={`number-${i}`} className="mb-1.5 flex max-w-full min-w-0 items-start gap-3 text-base leading-7 text-gray-200 sm:gap-3 sm:text-lg sm:leading-7 lg:text-lg lg:leading-8">
          <span className="min-w-[2rem] shrink-0 font-semibold text-sky-400">{numbered[1]}.</span>
          <span>{renderMarkdownInline(numbered[2])}</span>
        </div>,
      );
      i++; continue;
    }

    // Compact technical-term groups.
    // Lessons often store short important terms as separate lines with
    // blank lines between them. Keep them compact and visually distinct
    // instead of rendering each one as a full paragraph.
    if (isCompactTerm(text)) {
      const terms: string[] = [text];
      let j = i + 1;

      while (j < lines.length) {
        let k = j;
        while (k < lines.length && !cleanLine(lines[k])) k++;
        if (k >= lines.length) break;

        const candidate = cleanLine(lines[k]);
        if (!isCompactTerm(candidate)) break;
        terms.push(candidate);
        j = k + 1;
      }

      if (terms.length >= 3) {
        elements.push(<CompactTermList key={`terms-${i}`} terms={terms} />);
        i = j;
        continue;
      }
    }

    // Colon mini-heading.
    if (text.endsWith(":") && text.length <= 110 && !text.includes("://")) {
      elements.push(<h3 key={`mini-${i}`} className="mb-4 mt-7 max-w-full break-words text-xl font-extrabold text-teal-300 sm:text-2xl">{text.slice(0, -1)}</h3>);
      i++; continue;
    }

    // Indented lines outside an explicit code section are kept as readable text.
    // We intentionally do NOT automatically turn arbitrary indented prose into code.
    elements.push(<p key={`paragraph-${i}`} className="mb-3 max-w-full break-words text-base leading-7 text-gray-200 sm:text-lg sm:leading-7 lg:text-lg lg:leading-8">{renderMarkdownInline(isIndented(raw) ? raw.replace(/^\s{4}|^\t/, "") : text)}</p>);
    i++;
  }

  return elements;
}

export default function AIMLContentRenderer({ content }: { content: unknown }) {
  let value = "";

  if (typeof content === "string") {
    value = content;
  } else if (content && typeof content === "object" && "content" in content) {
    value = String((content as { content?: unknown }).content ?? "");
  }

  return (
    <div className="w-full min-w-0 max-w-full overflow-visible break-words [overflow-wrap:anywhere] [&_img]:max-w-full [&_pre]:max-w-full [&_table]:max-w-full">
      {renderContent(value)}
    </div>
  );
}
