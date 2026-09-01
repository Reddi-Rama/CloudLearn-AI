"use client";

import {
  Search as SearchIcon,
  X,
  ArrowRight,
} from "lucide-react";

interface SearchProps {
  query: string;
  onQueryChange: (value: string) => void;
}

const learningPaths = [
  {
    title: "Frontend Development",
    keywords: [
      "frontend",
      "front end",
      "web development",
      "html",
      "css",
      "javascript",
      "typescript",
      "react",
      "nextjs",
    ],
  },
  {
    title: "Backend Development",
    keywords: [
      "backend",
      "back end",
      "server",
      "api",
      "apis",
      "database",
      "databases",
      "node",
    ],
  },
  {
    title: "Cloud Computing",
    keywords: [
      "cloud",
      "aws",
      "azure",
      "docker",
      "kubernetes",
      "devops",
      "linux",
    ],
  },
  {
    title: "Artificial Intelligence",
    keywords: [
      "ai",
      "artificial intelligence",
      "machine learning",
      "ml",
      "deep learning",
      "nlp",
      "generative ai",
      "llm",
      "rag",
    ],
  },
  {
    title: "Cyber Security",
    keywords: [
      "cyber",
      "cyber security",
      "cybersecurity",
      "security",
      "cryptography",
      "devsecops",
    ],
  },
  {
    title: "Data Science",
    keywords: [
      "data",
      "data science",
      "datascience",
      "statistics",
      "analytics",
      "sql",
      "mlops",
    ],
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export default function Search({
  query,
  onQueryChange,
}: SearchProps) {
  const normalizedQuery = normalize(query);

  const suggestions =
    normalizedQuery.length === 0
      ? []
      : learningPaths
          .filter((path) => {
            const titleMatch = normalize(
              path.title
            ).includes(normalizedQuery);

            const keywordMatch = path.keywords.some(
              (keyword) =>
                normalize(keyword).includes(
                  normalizedQuery
                )
            );

            return titleMatch || keywordMatch;
          })
          .slice(0, 6);

  return (
    <section className="relative z-30 bg-transparent px-6 pb-8">
      <div className="relative mx-auto max-w-3xl">

        {/* Search Input */}
        <div
          className="
            flex
            items-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-5
            py-4
            shadow-[0_10px_30px_rgba(15,23,42,0.08)]
            transition-all
            duration-300
            focus-within:border-sky-400
            focus-within:shadow-[0_12px_35px_rgba(14,165,233,0.15)]
          "
        >
          <SearchIcon
            size={21}
            className="shrink-0 text-slate-400"
          />

          <input
            type="text"
            value={query}
            onChange={(event) =>
              onQueryChange(event.target.value)
            }
            placeholder="Search learning paths..."
            aria-label="Search learning paths"
            className="
              ml-4
              w-full
              bg-transparent
              text-base
              text-slate-900
              outline-none
              placeholder:text-slate-400
            "
          />

          {query.length > 0 && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              aria-label="Clear search"
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                text-slate-400
                transition
                hover:bg-slate-100
                hover:text-slate-700
              "
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div
            className="
              absolute
              left-0
              right-0
              top-full
              mt-2
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-[0_18px_45px_rgba(15,23,42,0.14)]
            "
          >
            {suggestions.map((path) => (
              <button
                key={path.title}
                type="button"
                onClick={() =>
                  onQueryChange(path.title)
                }
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-slate-100
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-200
                  last:border-b-0
                  hover:bg-sky-50
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-sky-50
                      text-sky-600
                    "
                  >
                    <SearchIcon size={17} />
                  </div>

                  <span className="text-base font-semibold text-slate-800">
                    {path.title}
                  </span>

                </div>

                <ArrowRight
                  size={18}
                  className="
                    text-slate-400
                    transition
                    duration-200
                    group-hover:translate-x-1
                    group-hover:text-sky-600
                  "
                />
              </button>
            ))}
          </div>
        )}

        {/* No Suggestions */}
        {query.trim().length > 0 &&
          suggestions.length === 0 && (
            <div
              className="
                absolute
                left-0
                right-0
                top-full
                mt-2
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                py-4
                text-sm
                text-slate-500
                shadow-[0_18px_45px_rgba(15,23,42,0.12)]
              "
            >
              No matching learning paths found.
            </div>
          )}

      </div>
    </section>
  );
}