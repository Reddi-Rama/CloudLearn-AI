"use client";

import { BookMarked, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Official Documentation",
    url: "#",
  },
  {
    title: "CloudLearn AI Notes",
    url: "#",
  },
  {
    title: "Practice Questions",
    url: "#",
  },
];

export default function LessonResources() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <div className="flex items-center gap-3">

        <BookMarked
          className="text-blue-600"
          size={24}
        />

        <h2 className="text-2xl font-bold">
          Learning Resources
        </h2>

      </div>

      <div className="mt-8 space-y-4">

        {resources.map((resource) => (

          <a
            key={resource.title}
            href={resource.url}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-5 transition hover:bg-blue-50"
          >

            <span>{resource.title}</span>

            <ExternalLink
              size={18}
              className="text-blue-600"
            />

          </a>

        ))}

      </div>

    </section>
  );
}