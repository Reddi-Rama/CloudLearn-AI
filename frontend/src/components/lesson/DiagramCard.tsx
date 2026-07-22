interface DiagramCardProps {
  title: string;
  description: string;
}

export default function DiagramCard({
  title,
  description,
}: DiagramCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">
        📊 {title}
      </h3>

      <p className="mt-4 text-slate-700">
        {description}
      </p>

      <div className="mt-6 flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50">
        Diagram Placeholder
      </div>
    </div>
  );
}