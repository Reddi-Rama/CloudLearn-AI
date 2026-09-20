interface AIMLFormulaProps {
  title?: string;
  label?: string;
  numerator?: string;
  denominator?: string;
  expression?: string;
}

function cleanExpression(value: string) {
  return value
    .replace(/\\text\{([^}]+)\}/g, "$1")
    .replace(/\*/g, " · ")
    .trim();
}

function renderInlineExpression(value: string) {
  const cleaned = cleanExpression(value);

  const parts = cleaned.split(
    /(\bTP\b|\bTN\b|\bFP\b|\bFN\b|\bMAE\b|\bMSE\b|\bRMSE\b|\bR²\b|\bR2\b|\bX\b|\by\b|\by-hat\b|\bŷ\b)/
  );

  return parts.map((part, index) => {
    if (
      /^(TP|TN|FP|FN|MAE|MSE|RMSE|R²|R2|X|y|y-hat|ŷ)$/.test(
        part
      )
    ) {
      return (
        <span
          key={index}
          className="font-semibold text-sky-300"
        >
          {part}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export default function AIMLFormula({
  title,
  label,
  numerator,
  denominator,
  expression,
}: AIMLFormulaProps) {
  const heading = title || label;

  return (
    <div className="my-8 w-full">
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-slate-700
          bg-slate-950
          px-5
          py-6
          shadow-lg
          sm:px-8
          sm:py-8
        "
      >
        {/* Decorative glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-sky-500/10
            blur-3xl
          "
        />

        {/* Formula title */}
        {heading && (
          <div className="mb-6">
            <div
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-sky-400
              "
            >
              {heading}
            </div>
          </div>
        )}

        {/* Formula */}
        <div
          className="
            flex
            min-h-[110px]
            items-center
            justify-center
            overflow-x-auto
            py-3
          "
        >
          {numerator && denominator ? (
            <div
              className="
                inline-flex
                items-center
                gap-4
                whitespace-nowrap
                text-xl
                font-medium
                text-slate-100
                sm:text-2xl
                lg:text-3xl
              "
            >
              <span className="text-slate-200">
                {label && `${label} =`}
              </span>

              <span className="inline-flex flex-col items-center">
                <span
                  className="
                    border-b
                    border-slate-300
                    px-5
                    pb-2
                    text-center
                  "
                >
                  {renderInlineExpression(numerator)}
                </span>

                <span
                  className="
                    px-5
                    pt-2
                    text-center
                  "
                >
                  {renderInlineExpression(denominator)}
                </span>
              </span>
            </div>
          ) : (
            <div
              className="
                text-center
                text-xl
                font-medium
                leading-relaxed
                text-slate-100
                sm:text-2xl
                lg:text-3xl
              "
            >
              {expression
                ? renderInlineExpression(expression)
                : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}