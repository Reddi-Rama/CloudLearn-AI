"use client";

import React from "react";

/*
 * AIML CONTENT RENDERER
 *
 * The rendering engine below is taken from the existing
 * CloudLearn Programming lesson implementation.
 *
 * AIML content is normalized first so that the same renderer
 * can display ML lessons without requiring every lesson file
 * to be rewritten.
 */
function looksLikeCode(line: string) {
  const text = line.trim();

  if (!text) return false;

  /*
   * Python
   */
  if (
    /^from\s+\S+\s+import\s+/.test(text) ||
    /^import\s+\S+/.test(text) ||
    /^def\s+\w+\s*\(/.test(text) ||
    /^class\s+\w+/.test(text) ||
    /^print\s*\(/.test(text) ||
    /^return\s+/.test(text) ||
    /^for\s+.+\s+in\s+.+:/.test(text) ||
    /^while\s+.+:/.test(text) ||
    /^if\s+.+:/.test(text) ||
    /^elif\s+.+:/.test(text) ||
    /^else\s*:/.test(text) ||
    /^\w+\s*=\s*.+/.test(text) ||
    /^\w+\.\w+\s*\(/.test(text) ||
    /^\w+\[['"].+['"]\]\s*=/.test(text)
  ) {
    return true;
  }

  /*
   * Python comments
   */
  if (text.startsWith("# ")) {
    return true;
  }

  /*
   * C / C++ / Java
   */
  if (
    /^#include\s*[<"].+[>"]/.test(text) ||
    /^using\s+namespace\s+/.test(text) ||
    /^int\s+main\s*\(/.test(text) ||
    /^public\s+static\s+void\s+main\s*\(/.test(text) ||
    /^public\s+class\s+/.test(text) ||
    /^class\s+\w+/.test(text) ||
    /^(int|float|double|char|boolean|string|String)\s+\w+\s*(=|;|\()/.test(text) ||
    /^cout\s*<</.test(text) ||
    /^cin\s*>>/.test(text) ||
    /^printf\s*\(/.test(text) ||
    /^scanf\s*\(/.test(text) ||
    /^System\.out\./.test(text)
  ) {
    return true;
  }

  return false;
}
function formatCode(lines: string[]) {
  let indentLevel = 0;

  return lines.map((originalLine) => {
    /*
      Keep empty lines inside the same code block.
      This is important for Java, C++, and Python examples.
    */
    if (!originalLine.trim()) {
      return "";
    }

    const line = originalLine.trim();

    /*
      Closing braces reduce indentation before the line.
    */
    if (line.startsWith("}") || line.startsWith("};")) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    /*
      case/default are aligned one level inside switch.
    */
    if (line.startsWith("case ") || line.startsWith("default:")) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    const formattedLine =
      "    ".repeat(indentLevel) + line;

    /*
      Opening braces increase indentation for following lines.
    */
    if (line.endsWith("{") || line === "{") {
      indentLevel++;
    }

    /*
      A case/default body starts one level deeper.
    */
    if (line.startsWith("case ") || line.startsWith("default:")) {
      indentLevel++;
    }

    return formattedLine;
  });
}


/* =========================================================
   RENDER CODE BLOCK
========================================================= */

function CodeBlock({
  lines,
  language,
  format = false,
}: {
  lines: string[];
  language?: string;
  format?: boolean;
}) {
  const finalLines = format
    ? formatCode(lines)
    : lines;

  return (
    <div
      className="
        my-7
        overflow-hidden
        rounded-2xl
        border
        border-slate-700
        bg-slate-950
      "
    >

      {language && (
        <div
          className="
            border-b
            border-slate-700
            bg-slate-900
            px-5
            py-3
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-sky-400
          "
        >
          {language}
        </div>
      )}

      <pre
        className="
          overflow-x-auto
          whitespace-pre
          px-6
          py-6
          text-[18px]
          leading-8
          text-slate-200
        "
      >
        <code className="font-mono whitespace-pre">
          {finalLines.join("\n")}
        </code>
      </pre>

    </div>
  );
}


/* =========================================================
   FLOWCHART DETECTION

   This is intentionally separate from program/code rendering.
   Java, C++, and Python programs continue to use the existing
   looksLikeCode(), formatCode(), and CodeBlock() logic.
========================================================= */

function isFlowArrow(text: string) {
  return [
    "\u2193",
    "\u2191",
    "\u2192",
    "\u2194",
    "\u27A1",
    "\u2B07",
    "\u2B06",
    "\u27F6",
    "\u27F7",
  ].includes(text.trim());
}

function isSimpleFlowNode(text: string) {
  const value = text.trim();

  if (!value) return false;

  // Never treat programming code as a flowchart node.
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
    value.startsWith("if ") ||
    value.startsWith("if(") ||
    value.startsWith("for ") ||
    value.startsWith("for(") ||
    value.startsWith("while ") ||
    value.startsWith("while(") ||
    value.startsWith("switch ") ||
    value.startsWith("switch(") ||
    value.startsWith("return ") ||
    value.startsWith("break ") ||
    value.startsWith("continue ") ||
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

  // Keep this renderer for short flowchart labels only.
  if (value.length > 80) return false;

  return true;
}

function FlowChart({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="my-8 flex w-full justify-center">
      <div className="flex w-full max-w-md flex-col items-center">
        {items.map((item, index) => {
          const value = item.trim();

          if (isFlowArrow(value)) {
            return (
              <div
                key={`flow-arrow-${index}`}
                className="
                  flex
                  h-8
                  items-center
                  justify-center
                  text-2xl
                  font-semibold
                  leading-none
                  text-sky-400
                "
              >
                {value}
              </div>
            );
          }

          return (
            <div
              key={`flow-node-${index}`}
              className="
                flex
                min-h-[48px]
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-slate-700
                bg-slate-950
                px-6
                py-2.5
                text-center
                font-mono
                text-lg
                font-semibold
                text-slate-200
              "
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   MARKDOWN TABLE DETECTION + RENDERING

   Tables are handled separately from programs, keyword lists,
   flowcharts, and normal paragraphs.

   A table is recognized only when a header row is followed by
   a Markdown separator row such as:

   | Type | Size |
   |------|------|

   This prevents normal text or programming code containing `|`
   from accidentally becoming a table.
========================================================= */

function isMarkdownTableSeparator(line: string) {
  const cells = line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

  if (cells.length === 0) return false;

  return cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function isMarkdownTableRow(line: string) {
  const text = line.trim();
  return text.includes("|") && text.replace(/\|/g, "").trim().length > 0;
}

function splitMarkdownTableRow(line: string) {
  let text = line.trim();

  if (text.startsWith("|")) text = text.slice(1);
  if (text.endsWith("|")) text = text.slice(0, -1);

  // Protect escaped Markdown pipes while splitting columns.
  const placeholder = "__CLOUDLEARN_ESCAPED_PIPE__";
  text = text.replace(/\\\|/g, placeholder);

  return text.split("|").map((cell) =>
    cell.trim().replaceAll(placeholder, "|")
  );
}

function getTableAlignment(separatorCell: string) {
  const cell = separatorCell.trim();

  if (cell.startsWith(":") && cell.endsWith(":")) return "center";
  if (cell.endsWith(":")) return "right";
  return "left";
}

function MarkdownTable({
  lines,
}: {
  lines: string[];
}) {
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
    ...body.map((row) => row.length)
  );

  const normalizedHeader = Array.from(
    { length: columnCount },
    (_, index) => header[index] ?? ""
  );

  const normalizedSeparator = Array.from(
    { length: columnCount },
    (_, index) => separator[index] ?? "---"
  );

  return (
    <div className="my-8 w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left text-lg">
          <thead>
            <tr className="bg-slate-800">
              {normalizedHeader.map((cell, index) => {
                const alignment = getTableAlignment(
                  normalizedSeparator[index]
                );

                return (
                  <th
                    key={`table-head-${index}`}
                    className={`border-b border-slate-600 px-6 py-4 text-xl font-bold text-green-400 ${
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
                className={
                  rowIndex % 2 === 0
                    ? "bg-slate-950"
                    : "bg-slate-900/70"
                }
              >
                {Array.from({ length: columnCount }, (_, columnIndex) => {
                  const cell = row[columnIndex] ?? "";
                  const alignment = getTableAlignment(
                    normalizedSeparator[columnIndex]
                  );

                  return (
                    <td
                      key={`table-cell-${rowIndex}-${columnIndex}`}
                      className={`border-b border-slate-800 px-6 py-4 text-slate-200 ${
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

/* =========================================================
   RENDER LESSON CONTENT
========================================================= */

function renderContent(content: string) {
  const lines = content
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n");

  const elements: React.ReactNode[] = [];

  let insideFence = false;
  let fenceLanguage = "";
  let fenceLines: string[] = [];

  let insideCode = false;
  let codeLines: string[] = [];
  let codeFormat = false;

  let flowLines: string[] = [];
  let insideFlow = false;

  const flushCode = (index: number) => {
    if (codeLines.length === 0) {
      insideCode = false;
      codeFormat = false;
      return;
    }

    elements.push(
      <CodeBlock
        key={`content-code-${index}`}
        lines={codeLines}
        format={codeFormat}
      />
    );

    codeLines = [];
    insideCode = false;
    codeFormat = false;
  };

  const startCode = (line: string, formatted: boolean) => {
    insideCode = true;
    codeFormat = formatted;
    codeLines = [line];
  };

  const isBlank = (line: string) => line.trim() === "";

  const flushFlow = (index: number) => {
    if (flowLines.length === 0) {
      insideFlow = false;
      return;
    }

    elements.push(
      <FlowChart
        key={`flow-${index}`}
        items={flowLines}
      />
    );

    flowLines = [];
    insideFlow = false;
  };

  const looksLikeFlowContent = (line: string) => {
    const text = line.trim();
    return isFlowArrow(text) || isSimpleFlowNode(text);
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
      /^[A-Za-z_$][\\w$]*:$/.test(text) ||
      text.startsWith("class ") ||
      text.startsWith("public ") ||
      text.startsWith("private ") ||
      text.startsWith("protected ") ||
      text.startsWith("static ") ||
      text.startsWith("else") ||
      text.startsWith("do") ||
      text.startsWith("try") ||
      text.startsWith("catch") ||
      text.startsWith("finally") ||
      text.startsWith("throw") ||
      text.startsWith("throws") ||
      text.startsWith("if(") ||
      text.startsWith("if (") ||
      text.startsWith("for(") ||
      text.startsWith("for (") ||
      text.startsWith("while(") ||
      text.startsWith("while (") ||
      text.startsWith("switch(") ||
      text.startsWith("switch (") ||
      text.startsWith("case ") ||
      text.startsWith("default:") ||
      text.startsWith("break") ||
      text.startsWith("continue") ||
      text.startsWith("return ") ||
      text.startsWith("System.out") ||
      text.startsWith("cout") ||
      text.startsWith("cin") ||
      text.startsWith("printf") ||
      text.startsWith("scanf") ||
      text.startsWith("print(") ||
      text.startsWith("def ") ||
      text.startsWith("import ") ||
      text.startsWith("from ") ||
      text.startsWith("#include")
    );
  };

  const isCodeContinuationLine = (line: string) => {
    const text = line.trim();

    return (
      /^else(?:\s+if\s*\(|\s*$)/.test(text) ||
      /^do\s*\{?\s*$/.test(text) ||
      /^try\s*\{?\s*$/.test(text) ||
      /^catch\s*(?:\([^)]*\))?\s*\{?\s*$/.test(text) ||
      /^finally\s*\{?\s*$/.test(text) ||
      /^throw\s+/.test(text) ||
      /^throws\s+/.test(text) ||
      /^break(?:\s*;)?$/.test(text) ||
      /^continue(?:\s*;)?$/.test(text) ||
      /^return(?:\s+.+)?;?$/.test(text) ||
      /^case\s+.+:/.test(text) ||
      /^default\s*:/.test(text)
    );
  };

  const isNormalHeading = (text: string) =>
    text.startsWith("# ") ||
    text.startsWith("## ") ||
    text.startsWith("### ");

  /* =====================================================
     JAVA KEYWORD LIST

     A plain sequence such as:

     class
     public
     private
     static
     void

     is explanatory content, not a program.
     When several standalone Java keywords appear together,
     render them as a clean text grid without boxes.
  ===================================================== */
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

  const isStandaloneJavaKeyword = (text: string) =>
    javaKeywords.has(text.trim());

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
    if (!isStandaloneJavaKeyword(currentText)) return false;

    const keywordIndices: number[] = [index];
    let cursor = index + 1;

    while (cursor < lines.length) {
      const nextIndex = findNextNonBlankIndex(cursor);
      if (nextIndex === -1) break;

      const nextText = lines[nextIndex].trim();
      if (!isStandaloneJavaKeyword(nextText)) break;

      keywordIndices.push(nextIndex);
      cursor = nextIndex + 1;
    }

    // Only convert a genuine keyword list, not an isolated keyword.
    if (keywordIndices.length < 4) return false;

    const previousIndex = findPreviousNonBlankIndex(index - 1);
    const previousText =
      previousIndex >= 0 ? lines[previousIndex].trim().toLowerCase() : "";

    const clearlyAKeywordSection =
      previousText.includes("keyword") ||
      keywordIndices.length >= 6;

    if (!clearlyAKeywordSection) return false;

    const firstKeywordIndex = keywordIndices[0];
    const lastKeywordIndex = keywordIndices[keywordIndices.length - 1];

    for (
      let lineIndex = firstKeywordIndex;
      lineIndex <= lastKeywordIndex;
      lineIndex++
    ) {
      consumedKeywordLines.add(lineIndex);
    }

    elements.push(
      <div
        key={`keyword-grid-${index}`}
        className="my-6 flex w-fit max-w-full flex-wrap items-center gap-x-12 gap-y-3 text-xl leading-8 text-slate-200"
      >
        {keywordIndices.map((lineIndex) => (
          <div key={`keyword-${lineIndex}`} className="whitespace-nowrap">
            {lines[lineIndex].trim()}
          </div>
        ))}
      </div>
    );

    return true;
  };

  lines.forEach((rawLine, index) => {
    const trimmed = rawLine.trim();

    if (consumedTableLines.has(index)) {
      return;
    }

    /* =====================================================
       MARKDOWN TABLE

       Only recognize a table when the current line is a table
       row AND the next non-empty line is a valid Markdown
       separator row. This keeps programs and normal text safe.
    ===================================================== */

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
          <MarkdownTable
            key={`markdown-table-${index}`}
            lines={tableLines}
          />
        );

        // Mark all table rows as consumed so the normal renderer
        // does not render them again.
        for (let i = index; i < endIndex; i++) {
          consumedTableLines.add(i);
        }

        return;
      }
    }

    /* =====================================================
       FENCED MARKDOWN CODE
       ```java
       ...
       ```
    ===================================================== */

    if (trimmed.startsWith("```")) {
      if (!insideFence) {
        if (insideCode) flushCode(index);

        insideFence = true;
        fenceLanguage = trimmed.replace(/^```/, "").trim();
        fenceLines = [];
      } else {
        insideFence = false;

        elements.push(
          <CodeBlock
            key={`fenced-code-${index}`}
            lines={fenceLines}
            language={fenceLanguage}
          />
        );

        fenceLanguage = "";
        fenceLines = [];
      }

      return;
    }

    if (insideFence) {
      fenceLines.push(rawLine);
      return;
    }

    /* =====================================================
       JAVA KEYWORD GRID

       This runs before normal text/code detection and only
       activates for a consecutive list of standalone Java
       keywords. Actual programs remain on the existing code path.
    ===================================================== */
    if (renderKeywordGridIfNeeded(index)) {
      return;
    }

    if (consumedKeywordLines.has(index)) {
      return;
    }

    /* =====================================================
       FLOWCHART DETECTION

       IMPORTANT:
       Only handles simple arrow-based diagrams.

       Blank lines in the lesson string are ignored while
       looking for an arrow, so:

       byte

       "\u2192"

       short

       "\u2192"

       int

       is still recognized as ONE flowchart.

       Programming code is explicitly excluded and continues
       through the existing code renderer unchanged.
    ===================================================== */

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
      !trimmed.startsWith("\u2022 ") &&
      !trimmed.includes(";") &&
      !trimmed.includes("{") &&
      !trimmed.includes("}");

    if (
      hasFlowArrowNearby &&
      (isFlowArrow(trimmed) || safeFlowNode)
    ) {
      if (insideCode) {
        flushCode(index);
      }

      if (!insideFlow) {
        insideFlow = true;
        flowLines = [];
      }

      flowLines.push(trimmed);
      return;
    }

    if (insideFlow) {
      /*
        A blank line between flow items is ignored.
        Any real non-flow content ends the flow.
      */
      if (isBlank(rawLine)) {
        return;
      }

      flushFlow(index);
    }
    /* =====================================================
       BLANK LINE

       This is the important fix.
       A blank line DOES NOT automatically end a code block.
       It is kept inside the current code block.
    ===================================================== */

    if (isBlank(rawLine)) {
      if (insideCode) {
        codeLines.push("");
      } else {
        elements.push(
          <div key={`space-${index}`} className="h-3" />
        );
      }

      return;
    }

    /* =====================================================
       INDENTED PROGRAMMING CODE

       Lesson content often has markdown indentation because
       the code is written inside a template literal.

       We must NOT create a new box for every indented line.
    ===================================================== */

    if (isIndented(rawLine)) {
      if (!insideCode) {
        startCode(removeMarkdownIndent(rawLine), false);
      } else {
        codeLines.push(removeMarkdownIndent(rawLine));
      }

      return;
    }

    /* =====================================================
       CODE LINE WITHOUT MARKDOWN INDENTATION
    ===================================================== */

    /*
      Continuation keywords are allowed ONLY after a real code block
      has already started. This prevents normal lesson text such as
      `else`, `return`, `int`, `double`, etc. from becoming code boxes.
    */
    if (insideCode && isCodeContinuationLine(rawLine)) {
      codeLines.push(rawLine.trim());
      return;
    }

    if (looksLikeCode(rawLine) && isStrongCodeLine(rawLine)) {
      if (!insideCode) {
        startCode(rawLine.trim(), true);
      } else {
        codeLines.push(rawLine.trim());
      }

      return;
    }

    /* =====================================================
       A NORMAL TEXT LINE ENDS CODE
    ===================================================== */

    if (insideCode) {
      flushCode(index);
    }

    const text = trimmed;

    if (!text) return;

    /* =====================================================
       HEADINGS
    ===================================================== */

    if (text.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${index}`}
          className="mb-4 mt-6 text-2xl font-bold leading-tight text-green-400"
        >
          {text.substring(4)}
        </h3>
      );
      return;
    }

    if (text.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${index}`}
          className="mb-5 mt-8 text-3xl font-bold leading-tight text-green-400"
        >
          {text.substring(3)}
        </h2>
      );
      return;
    }

    if (text.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${index}`}
          className="mb-7 text-4xl font-bold leading-tight text-green-400"
        >
          {text.substring(2)}
        </h1>
      );
      return;
    }

    /* =====================================================
       BULLETS
    ===================================================== */

    if (text.startsWith("- ") || text.startsWith("\u2022 ")) {
      elements.push(
        <div
          key={`bullet-${index}`}
          className="mb-2 flex items-start gap-4 text-2xl leading-9 text-gray-200"
        >
          <span className="mt-4 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400" />
          <span>{text.substring(2)}</span>
        </div>
      );
      return;
    }

    /* =====================================================
       NORMAL PARAGRAPH
    ===================================================== */

    elements.push(
      <p
        key={`paragraph-${index}`}
        className="mb-4 text-2xl leading-9 text-gray-200"
      >
        {text}
      </p>
    );
  });

  if (insideFence && fenceLines.length > 0) {
    elements.push(
      <CodeBlock
        key="final-fenced-code"
        lines={fenceLines}
        language={fenceLanguage}
      />
    );
  }

  if (insideCode) {
    flushCode(lines.length);
  }

  if (insideFlow) {
    flushFlow(lines.length);
  }

  return elements;
}


/* =========================================================
   GET COURSE MODULES
========================================================= */

function prepareAIMLContent(value: string) {
  const lines=value
    .replace(/\r\n/g,"\n")
    .replace(/\r/g,"\n")
    .split("\n");

  const result:string[]=[];

  let lessonSeen=false;
  let titleSeen=false;

  const isSectionBoundary=(line:string)=>{
    const text=line.trim();

    return (
      /^Output\s*:?\s*$/i.test(text) ||
      /^Expected Output\s*:?\s*$/i.test(text) ||
      /^Explanation\s*:?\s*$/i.test(text) ||
      /^Result\s*:?\s*$/i.test(text) ||
      /^Summary\s*:?\s*$/i.test(text) ||
      /^#{1,6}\s+/.test(text) ||
      /^\d+\.\s+/.test(text)
    );
  };

  const isLikelyPythonCode=(line:string)=>{
    const text=line.trim();

    if(!text) return false;

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
      /^#/.test(text)
    );
  };

  const looksLikeContinuation=(line:string)=>{
    const text=line.trim();

    if(!text) return true;

    return (
      isLikelyPythonCode(text) ||
      /^\w+\[['"][^'"]+['"]\]/.test(text) ||
      /^\w+\([^)]*\)$/.test(text) ||
      /^\w+\.\w+\(/.test(text)
    );
  };

  for(let i=0;i<lines.length;i++){
    const raw=lines[i];
    const line=raw.trim();

    if(!line){
      result.push("");
      continue;
    }

    /*
     * Lesson label
     */
    if(/^Lesson\s+\d+$/i.test(line)){
      lessonSeen=true;
      result.push(line);
      continue;
    }

    /*
     * First line after Lesson 01 = lesson title
     */
    if(lessonSeen && !titleSeen){
      result.push("# "+line);
      titleSeen=true;
      lessonSeen=false;
      continue;
    }

    /*
     * Existing fenced code is preserved exactly.
     */
    if(line.startsWith("```")){
      result.push(line);

      i++;

      while(
        i<lines.length &&
        !lines[i].trim().startsWith("```")
      ){
        result.push(lines[i]);
        i++;
      }

      if(i<lines.length){
        result.push("```");
      }

      continue;
    }

    /*
     * =====================================================
     * AIML PYTHON CODE
     *
     * This is the important fix.
     *
     * Example:
     *
     * Python
     *
     * from sklearn...
     *
     * X = ...
     *
     * y = ...
     *
     * model = ...
     *
     * model.fit(...)
     *
     * prediction = ...
     *
     * print(...)
     *
     * Output
     *
     * EVERYTHING between Python and Output becomes ONE
     * code block, including blank lines.
     * =====================================================
     */
    if(/^Python$/i.test(line)){
      result.push("### Python");
      result.push("```python");

      i++;

      let lastCodeLine=-1;

      while(i<lines.length){
        const current=lines[i];
        const currentTrim=current.trim();

        /*
         * Blank lines belong INSIDE the code block.
         */
        if(!currentTrim){
          result.push("");
          i++;
          continue;
        }

        /*
         * These always end the code section.
         */
        if(isSectionBoundary(currentTrim)){
          break;
        }

        /*
         * Another explicit language/content section ends code.
         */
        if(
          /^Python$/i.test(currentTrim) ||
          /^C\+\+$/i.test(currentTrim) ||
          /^Java$/i.test(currentTrim)
        ){
          break;
        }

        /*
         * As long as the line looks like code, keep it.
         */
        if(looksLikeContinuation(currentTrim)){
          result.push(current);
          lastCodeLine=i;
          i++;
          continue;
        }

        /*
         * A normal sentence after the code ends the block.
         */
        if(lastCodeLine>=0){
          break;
        }

        i++;
      }

      /*
       * Remove trailing blank lines from the code block.
       */
      while(
        result.length>0 &&
        result[result.length-1]===""
      ){
        result.pop();
      }

      result.push("```");

      /*
       * Do not consume the boundary.
       */
      i--;

      continue;
    }

    /*
     * Numbered sections = main subheadings.
     */
    const numbered=line.match(/^(\d+)\.\s+(.+)$/);

    if(numbered){
      const heading=numbered[2].trim();

      if(!heading.endsWith("?")){
        result.push("## "+heading);
      }else{
        result.push(line);
      }

      continue;
    }

    /*
     * Output
     */
    if(
      /^Output\s*:?\s*$/i.test(line) ||
      /^Expected Output\s*:?\s*$/i.test(line)
    ){
      result.push("### Output");

      /*
       * Keep output together as one fenced block.
       */
      result.push("```text");

      i++;

      while(i<lines.length){
        const current=lines[i];
        const currentTrim=current.trim();

        if(
          !currentTrim ||
          isSectionBoundary(currentTrim)
        ){
          if(!currentTrim){
            i++;
            continue;
          }

          break;
        }

        result.push(current);
        i++;
      }

      while(
        result.length>0 &&
        result[result.length-1]===""
      ){
        result.pop();
      }

      result.push("```");

      i--;

      continue;
    }

    /*
     * Example
     */
    if(/^Example\s*:?\s*$/i.test(line)){
      result.push("### Example");
      continue;
    }

    /*
     * Colon headings
     */
    if(
      line.endsWith(":") &&
      line.length<=110 &&
      !line.startsWith("|")
    ){
      result.push("### "+line.slice(0,-1).trim());
      continue;
    }

    /*
     * Preserve bullets
     */
    if(/^[-•*]\s+/.test(line)){
      result.push(
        line.replace(/^[-•*]\s+/,"- ")
      );
      continue;
    }

    /*
     * Preserve flow lines
     */
    if(
      line.includes("→") ||
      line.includes("⇒") ||
      line.includes("->") ||
      line.includes("↓")
    ){
      result.push(line);
      continue;
    }

    /*
     * Normal lesson text
     */
    result.push(raw);
  }

  return result.join("\n");
}
export default function AIMLContentRenderer({
  content,
}: {
  content: unknown;
}) {
  let value="";

  if(typeof content==="string"){
    value=content;
  }else if(
    content &&
    typeof content==="object" &&
    "content" in content
  ){
    value=String(
      (content as {content?:unknown}).content ?? ""
    );
  }

  return (
    <div className="w-full [&_h1]:text-blue-600 [&_h2]:text-purple-600 [&_h3]:text-teal-600 [&_h4]:text-slate-700 dark:[&_h1]:text-blue-400 dark:[&_h2]:text-purple-400 dark:[&_h3]:text-teal-400 dark:[&_h4]:text-slate-200">
      {renderContent(prepareAIMLContent(value))}
    </div>
  );
}