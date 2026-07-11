"use client";

import { Lightbulb } from "lucide-react";

interface ExampleCardProps {
  title?: string;
  description?: string;
  code?: string;
}

export default function ExampleCard({
  title = "Example",
  description = "Basic HTML document example.",
  code = `<!DOCTYPE html>
<html>
<head>
<title>CloudLearn</title>
</head>
<body>

<h1>Hello World</h1>

</body>
</html>`,
}: ExampleCardProps) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <Lightbulb className="text-yellow-500" />

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

      </div>

      <p className="mt-5 text-slate-600">
        {description}
      </p>

      <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-900 p-6 text-green-400">
        <code>{code}</code>
      </pre>

    </section>
  );
}