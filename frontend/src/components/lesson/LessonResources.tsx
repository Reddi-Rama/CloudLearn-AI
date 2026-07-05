"use client";

import { BookMarked, ExternalLink } from "lucide-react";

interface Resource {
  title: string;
  url: string;
}

interface LessonResourcesProps {
  resources: Resource[];
}

export default function LessonResources({
  resources,
}: LessonResourcesProps) {
  return (
    <section className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">

        <BookMarked className="text-sky-600" />

        Resources

      </h2>

      <div className="space-y-5">

        {resources.map((resource) => (

          <a
            key={resource.title}
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-sky-400 hover:bg-sky-50"
          >

            <span className="font-medium">

              {resource.title}

            </span>

            <ExternalLink size={18} />

          </a>

        ))}

      </div>

    </section>
  );
}