"use client";

import { Search as SearchIcon, X, ArrowRight } from "lucide-react";

interface DomainSearchProps {
  query: string;
  onQueryChange: (value: string) => void;
}

const domains = [
  "Programming",
  "Artificial Intelligence & Machine Learning",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

export default function DomainSearch({
  query,
  onQueryChange,
}: DomainSearchProps) {
  const search = normalize(query);

  const suggestions =
    search.length === 0
      ? []
      : domains.filter((domain) =>
          normalize(domain).includes(search)
        );

  return (
    <section className="pb-8">
      <div className="relative mx-auto max-w-3xl px-6">

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
            shadow-lg
            transition-all
            duration-300
            focus-within:border-sky-400
            focus-within:shadow-[0_10px_35px_rgba(14,165,233,0.15)]
          "
        >
          <SearchIcon
            size={21}
            className="shrink-0 text-slate-400"
          />

          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search domains..."
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

          {query && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                text-slate-400
                hover:bg-slate-100
                hover:text-slate-700
              "
            >
              <X size={18} />
            </button>
          )}
        </div>

        {suggestions.length > 0 && (
          <div
            className="
              absolute
              left-6
              right-6
              top-full
              z-50
              mt-2
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-[0_15px_40px_rgba(15,23,42,0.12)]
            "
          >
            {suggestions.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => onQueryChange(domain)}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-slate-100
                  px-5
                  py-4
                  text-left
                  last:border-0
                  hover:bg-sky-50
                "
              >
                <span className="font-semibold text-slate-800">
                  {domain}
                </span>

                <ArrowRight
                  size={18}
                  className="text-slate-400 group-hover:translate-x-1 group-hover:text-sky-600"
                />
              </button>
            ))}
          </div>
        )}

        {query && suggestions.length === 0 && (
          <div
            className="
              absolute
              left-6
              right-6
              top-full
              z-50
              mt-2
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              py-4
              text-sm
              text-slate-500
              shadow-[0_15px_40px_rgba(15,23,42,0.12)]
            "
          >
            No matching domains found.
          </div>
        )}

      </div>
    </section>
  );
}