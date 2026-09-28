"use client";

import Image from "next/image";

interface GenerativeAIVisualGalleryProps {
  images: string[];
  title?: string;
}

export default function GenerativeAIVisualGallery({
  images,
  title = "Visual Explanation",
}: GenerativeAIVisualGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="mt-10 space-y-5">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />

        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Explore the architecture, workflow, and concepts visually.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="group overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 shadow-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-950/20"
          >
            <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/60 px-5 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-xs font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium text-slate-300">
                  Diagram {index + 1}
                </span>
              </div>

              <span className="text-xs text-slate-500">
                Visual Reference
              </span>
            </div>

            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#020617] p-4 sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_60%)]" />

              <Image
                src={src}
                alt={`Generative AI visual diagram ${index + 1}`}
                width={1400}
                height={800}
                className="relative z-10 h-auto max-h-[720px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}