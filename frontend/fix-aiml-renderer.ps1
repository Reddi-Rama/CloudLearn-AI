$ErrorActionPreference = "Stop"

$renderer = "src\components\aiml\AIMLContentRenderer.tsx"
$io = "src\components\aiml\AIMLInputOutput.tsx"

Write-Host ""
Write-Host "Creating backups..." -ForegroundColor Cyan

Copy-Item $renderer "$renderer.before-render-fix" -Force
Copy-Item $io "$io.before-render-fix" -Force

# ============================================================
# 1. FIX AIML CONTENT RENDERER
# ============================================================

Write-Host "Fixing AIMLContentRenderer..." -ForegroundColor Cyan

$s = Get-Content $renderer -Raw

# ------------------------------------------------------------
# Normalize escaped Markdown characters coming from lesson data.
# This converts visible \`\`\` into real ``` so the renderer can
# process the code fence instead of displaying it.
# ------------------------------------------------------------

$normalizeFunction = @'
function normalizeSourceText(value: string): string {
  return value
    .replace(/\\`/g, "`")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n");
}

'@

if ($s -notmatch "function normalizeSourceText") {
    $s = $s -replace "function prepareContent\(value: string\): string\[\] \{", ($normalizeFunction + "function prepareContent(value: string): string[] {")
}

$s = $s -replace `
    'const lines = value\.replace\(/\r\n/g, "\\n"\)\.replace\(/\r/g, "\\n"\)\.split\("\\n"\);', `
    'const lines = normalizeSourceText(value).split("\n");'

# ------------------------------------------------------------
# Fix formula detection so comparisons such as:
#
# if temperature >= 35:
#
# are NEVER treated as formulas.
# ------------------------------------------------------------

$s = $s -replace `
    'if \(looksMathematical\(current\) && /\[=\]/\.test\(current\)\) \{', `
    'if (looksMathematical(current) && /(^|[^<>!])=(?!=)/.test(current) && !/^(?:if|elif|for|while)\b/i.test(current)) {'

# ------------------------------------------------------------
# Replace the Input/Output parser.
#
# IMPORTANT:
# It now creates AIMLInputOutput ONLY when the source actually
# contains Process/How It Works/Output/Prediction.
#
# A normal AI lesson containing:
#
# Input
# ↓
# Processing
# ↓
# Decision
#
# will NOT become an Input/Output card.
# ------------------------------------------------------------

$oldIOPattern = '(?s)\s*// Input .*?\n\s*if \(/\^\(\?:Input\|Expected Input\).*?\n\s*// Output-only block\.'

$newIOBlock = @'

    // ----------------------------------------------------------
    // Explicit Input -> Process -> Output block
    // ----------------------------------------------------------
    //
    // Only create the special Input/Output component when the
    // lesson explicitly contains Process/Output sections.
    //
    // A normal lesson using the word "Input" as part of a flow
    // must remain normal lesson content.
    // ----------------------------------------------------------

    if (/^(?:Input|Expected Input)$/i.test(text)) {
      const input: string[] = [];
      const process: string[] = [];
      const output: string[] = [];

      let section: "input" | "process" | "output" = "input";
      let foundExplicitIO = false;
      let j = i + 1;

      for (; j < lines.length; j++) {
        const t = cleanLine(lines[j]);

        if (!t) {
          continue;
        }

        if (/^(?:Process|How It Works|Steps|Model\s*\/\s*Process)$/i.test(t)) {
          section = "process";
          foundExplicitIO = true;
          continue;
        }

        if (/^(?:Output|Expected Output|Desired Output|Prediction)$/i.test(t)) {
          section = "output";
          foundExplicitIO = true;
          continue;
        }

        if (
          /^#{1,6}\s+/.test(t) ||
          /^(?:Example|Summary|Practice|Quick Check|Common Mistakes|Experiment|Dataset|Python|Code|Extended Study)$/i.test(t)
        ) {
          break;
        }

        if (section === "input") {
          input.push(t);
        } else if (section === "process") {
          process.push(t);
        } else {
          output.push(t);
        }
      }

      if (
        foundExplicitIO &&
        (input.length || process.length || output.length)
      ) {
        elements.push(
          <AIMLInputOutput
            key={`io-${i}`}
            input={input}
            process={process}
            output={output}
          />,
        );

        i = j;
        continue;
      }
    }

    // Output-only block.
'@

if ($s -match $oldIOPattern) {
    $s = [regex]::Replace($s, $oldIOPattern, $newIOBlock, 1)
}
else {
    Write-Host "WARNING: Input/Output parser pattern was not found." -ForegroundColor Yellow
}

# ------------------------------------------------------------
# Add real code detection BEFORE formula detection.
#
# This fixes:
#
# def temperature_advisor(...)
# if temperature >= 35:
# elif ...
# else:
# return ...
# temperatures = [...]
# for ...
# decision = ...
# print(...)
#
# All of these become ONE code block.
# ------------------------------------------------------------

$codeHelper = @'

function isProgramCodeStart(text: string): boolean {
  const value = cleanLine(text);

  if (!value) return false;

  return (
    /^from\s+\S+\s+import\s+/.test(value) ||
    /^import\s+/.test(value) ||
    /^def\s+\w+\s*\(/.test(value) ||
    /^class\s+\w+/.test(value) ||
    /^(?:if|elif|else|for|while|try|except|finally|with)\b/.test(value) ||
    /^return\b/.test(value) ||
    /^raise\b/.test(value) ||
    /^print\s*\(/.test(value) ||
    /^#include\s*[<"]/.test(value) ||
    /^(?:const|let|var)\s+\w+\s*=/.test(value) ||
    /^(?:int|float|double|char|bool|string|String|long|short)\s+\w+\s*(?:=|;)/.test(value) ||
    /^\w+\s*=\s*.+(?:[\[\]()'""]|\.|\+|\-|\*|\/)/.test(value)
  );
}

function isProgramCodeLine(text: string): boolean {
  const value = cleanLine(text);

  if (!value) return false;

  return (
    isProgramCodeStart(value) ||
    isIndented(text) ||
    /^\s*(?:return|else|elif|except|finally)\b/.test(text) ||
    /^[}\])]/.test(value)
  );
}

'@

if ($s -notmatch "function isProgramCodeStart") {
    $s = $s -replace "function renderContent\(content: string\): React\.ReactNode\[\] \{", ($codeHelper + "function renderContent(content: string): React.ReactNode[] {")
}

# ------------------------------------------------------------
# Insert code-block detection immediately before formula parsing.
# ------------------------------------------------------------

$codeParser = @'

    // ----------------------------------------------------------
    // Automatic code detection
    // ----------------------------------------------------------
    //
    // Lesson authors do not have to perfectly format every
    // Python example with Markdown fences.
    //
    // If the renderer recognizes real programming syntax, render
    // the complete sequence as code.
    // ----------------------------------------------------------

    if (isProgramCodeStart(text)) {
      const code: string[] = [raw];
      let j = i + 1;

      while (j < lines.length) {
        const nextRaw = lines[j];
        const nextText = cleanLine(nextRaw);

        if (!nextText) {
          // Allow one blank line inside a code example.
          if (j + 1 < lines.length && isProgramCodeLine(lines[j + 1])) {
            code.push(nextRaw);
            j++;
            continue;
          }
          break;
        }

        if (
          /^#{1,6}\s+/.test(nextText) ||
          isSpecialLabel(nextText) ||
          /^(?:Expected Output|Output|Summary|Practice|Quick Check|Common Mistakes|Experiment|Dataset|Extended Study)$/i.test(nextText)
        ) {
          break;
        }

        if (isProgramCodeLine(nextRaw)) {
          code.push(nextRaw);
          j++;
          continue;
        }

        break;
      }

      elements.push(
        <CodeBlock
          key={`auto-code-${i}`}
          lines={code}
          language="python"
        />,
      );

      i = j;
      continue;
    }

'@

$marker = '    // Formula. This is deliberately checked BEFORE ordinary paragraph rendering.'

if ($s.Contains($marker) -and $s -notmatch "Automatic code detection") {
    $s = $s.Replace($marker, $codeParser + $marker)
}

# ------------------------------------------------------------
# Never display Markdown horizontal rules.
# ------------------------------------------------------------

$horizontalRule = @'

    // Markdown horizontal rules are source formatting only.
    // Never display them as lesson text.
    if (/^(?:-{3,}|_{3,}|\*{3,})$/.test(text)) {
      i++;
      continue;
    }

'@

$blankMarker = '    if (!text) {'

if ($s.Contains($blankMarker) -and $s -notmatch "Markdown horizontal rules are source formatting only") {
    $s = $s.Replace($blankMarker, $horizontalRule + $blankMarker)
}

# ------------------------------------------------------------
# Remove any remaining raw Markdown fence line.
# ------------------------------------------------------------

$s = $s -replace `
    'if \(text\.startsWith\("\\`\\`\\`"\)\)', `
    'if (/^`{3}/.test(text))'

Set-Content $renderer $s -Encoding UTF8

# ============================================================
# 2. FIX INPUT / OUTPUT COMPONENT TEXT
# ============================================================

Write-Host "Fixing AIMLInputOutput..." -ForegroundColor Cyan

$ioText = Get-Content $io -Raw

$ioText = $ioText -replace `
    'Data provided to the machine learning system', `
    'Data provided to the system'

$ioText = $ioText -replace `
    'How the model processes the input', `
    'How the system processes the input'

$ioText = $ioText -replace `
    'Prediction or result produced by the model', `
    'Result or action produced by the system'

Set-Content $io $ioText -Encoding UTF8

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "AIML renderer fix completed." -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Backups created:" -ForegroundColor Cyan
Write-Host "$renderer.before-render-fix"
Write-Host "$io.before-render-fix"
Write-Host ""
