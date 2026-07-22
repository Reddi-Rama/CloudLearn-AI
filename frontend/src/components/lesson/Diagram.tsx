interface DiagramProps {
  title: string;
}

export default function Diagram({
  title,
}: DiagramProps) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center">
      <div className="text-5xl">☁️</div>

      <h3 className="mt-5 text-xl font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        Diagram will be displayed here.
      </p>
    </div>
  );
}