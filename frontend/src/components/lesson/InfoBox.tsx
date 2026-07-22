interface InfoBoxProps {
  title: string;
  description: string;
}

export default function InfoBox({
  title,
  description,
}: InfoBoxProps) {
  return (
    <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6">
      <h3 className="text-lg font-semibold text-sky-700">
        💡 {title}
      </h3>

      <p className="mt-3 text-slate-700">
        {description}
      </p>
    </div>
  );
}