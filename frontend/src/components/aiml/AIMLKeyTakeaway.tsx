"use client";

export default function AIMLKeyTakeaway({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 flex items-start gap-4 rounded-2xl border border-emerald-500/60 bg-emerald-500/10 p-5 shadow-lg">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xl text-white">
        ✓
      </div>

      <div>
        <h3 className="text-xl font-bold text-emerald-400">
          Key Takeaway
        </h3>

        <p className="mt-2 text-base leading-7 text-slate-300">
          {children}
        </p>
      </div>

    </div>
  );
}