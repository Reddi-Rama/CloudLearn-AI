interface ExampleCardProps {
  title: string;
  example: string;
}

export default function ExampleCard({
  title,
  example,
}: ExampleCardProps) {
  return (
    <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
      <h3 className="text-xl font-semibold text-green-700">
        🌍 {title}
      </h3>

      <p className="mt-4 text-slate-700 leading-8">
        {example}
      </p>
    </div>
  );
}