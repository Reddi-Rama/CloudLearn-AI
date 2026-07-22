interface CodeBlockProps {
  language?: string;
  code: string;
}

export default function CodeBlock({
  language = "python",
  code,
}: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-lg">
      <div className="border-b border-slate-700 px-6 py-3 text-sm text-slate-400">
        {language}
      </div>

      <pre className="overflow-x-auto p-6 text-sm text-green-400">
        <code>{code}</code>
      </pre>
    </div>
  );
}