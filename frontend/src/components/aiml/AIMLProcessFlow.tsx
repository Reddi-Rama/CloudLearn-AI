"use client";

type ProcessStep = {
  title: string;
  description: string;
};

type AIMLProcessFlowProps = {
  title?: string;
  description?: string;
  steps: ProcessStep[];
};

export default function AIMLProcessFlow({
  title = "The Machine Learning Process",
  description = "Machine learning follows a general process from data to prediction.",
  steps,
}: AIMLProcessFlowProps) {
  return (
    <section className="my-10 overflow-hidden rounded-3xl border border-sky-500/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5 shadow-2xl md:p-7">

      {/* Header */}
      <div className="mb-7 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl ring-1 ring-violet-400/40">
          ⚙
        </div>

        <div>
          <h3 className="text-2xl font-bold text-violet-400">
            {title}
          </h3>

          <p className="mt-1 text-base leading-7 text-slate-400">
            {description}
          </p>
        </div>
      </div>

      {/* Process */}
      <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-2">

        {steps.map((step, index) => (
          <div
            key={`${step.title}-${index}`}
            className="flex min-w-0 flex-1 items-center lg:contents"
          >
            {/* Card */}
            <div
              className={`
                relative flex min-h-[170px] flex-1 flex-col
                items-center justify-center
                rounded-2xl border
                px-5 py-6 text-center
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                ${
                  index % 4 === 0
                    ? "border-sky-400/70 bg-sky-500/10"
                    : index % 4 === 1
                    ? "border-emerald-400/70 bg-emerald-500/10"
                    : index % 4 === 2
                    ? "border-orange-400/70 bg-orange-500/10"
                    : "border-violet-400/70 bg-violet-500/10"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  mb-4 flex h-12 w-12 items-center justify-center
                  rounded-2xl text-xl font-bold
                  ${
                    index % 4 === 0
                      ? "bg-sky-500/20 text-sky-300"
                      : index % 4 === 1
                      ? "bg-emerald-500/20 text-emerald-300"
                      : index % 4 === 2
                      ? "bg-orange-500/20 text-orange-300"
                      : "bg-violet-500/20 text-violet-300"
                  }
                `}
              >
                {index + 1}
              </div>

              <h4 className="text-lg font-bold text-white">
                {step.title}
              </h4>

              <p className="mt-2 max-w-[190px] text-sm leading-6 text-slate-400">
                {step.description}
              </p>

              {/* Number */}
              <div
                className="
                  absolute -bottom-4
                  flex h-8 w-8 items-center justify-center
                  rounded-full
                  border-4 border-slate-950
                  bg-sky-500
                  text-xs font-bold text-white
                "
              >
                {index + 1}
              </div>
            </div>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-3xl font-light text-sky-400 lg:mx-1">
                <span className="hidden lg:block">→</span>
                <span className="lg:hidden">↓</span>
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}