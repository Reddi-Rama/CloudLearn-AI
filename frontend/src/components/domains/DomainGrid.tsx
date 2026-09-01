"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { domains } from "./domainData";

interface DomainGridProps {
  query?: string;
  selectedCategory?: string;
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

const availableDomains = new Set([
  "programming",
]);

const domainKeywords: Record<string, string[]> = {
  programming: [
    "programming",
    "coding",
    "python",
    "javascript",
    "c",
    "cpp",
    "java",
  ],

  aiml: [
    "ai",
    "artificial intelligence",
    "machine learning",
    "ml",
    "deep learning",
    "nlp",
  ],

  "data-science": [
    "data",
    "data science",
    "datascience",
    "statistics",
    "analytics",
    "sql",
  ],

  cybersecurity: [
    "cyber",
    "cybersecurity",
    "cyber security",
    "security",
    "ethical hacking",
    "cryptography",
  ],

  "cloud-computing": [
    "cloud",
    "cloud computing",
    "aws",
    "azure",
    "docker",
    "kubernetes",
    "devops",
  ],
};

function matchesCategory(
  slug: string,
  category: string
) {
  if (category === "All") {
    return true;
  }

  const categoryMap: Record<string, string> = {
    Programming: "programming",
    "Artificial Intelligence": "aiml",
    "Data Science": "data-science",
    "Cloud Computing": "cloud-computing",
    "Cyber Security": "cybersecurity",
  };

  return categoryMap[category] === slug;
}

export default function DomainGrid({
  query = "",
  selectedCategory = "All",
}: DomainGridProps) {
  const normalizedSearch = normalize(query);

  const filteredDomains = domains.filter((domain) => {
    /* ------------------------------------------
       Category filter
    ------------------------------------------ */
    const categoryMatches = matchesCategory(
      domain.slug,
      selectedCategory
    );

    if (!categoryMatches) {
      return false;
    }

    /* ------------------------------------------
       Search filter
    ------------------------------------------ */
    if (!normalizedSearch) {
      return true;
    }

    const titleMatches = normalize(
      domain.name
    ).includes(normalizedSearch);

    const descriptionMatches = normalize(
      domain.description
    ).includes(normalizedSearch);

    const keywordMatches =
      domainKeywords[domain.slug]?.some(
        (keyword) =>
          normalize(keyword).includes(
            normalizedSearch
          )
      ) ?? false;

    return (
      titleMatches ||
      descriptionMatches ||
      keywordMatches
    );
  });

  return (
    <section className="px-6 pb-24 pt-4">
      <div className="mx-auto max-w-[1400px]">

        {filteredDomains.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-10
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {filteredDomains.map((domain) => {
              const isAvailable =
                availableDomains.has(
                  domain.slug
                );

              const card = (
                <article
                  className="
                    group
                    relative
                    flex
                    min-h-[370px]
                    flex-col
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    p-9
                    shadow-[0_10px_35px_rgba(15,23,42,0.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-sky-300
                    hover:shadow-[0_20px_55px_rgba(14,165,233,0.18)]
                  "
                >

                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-44
                      w-44
                      rounded-full
                      bg-sky-100
                      opacity-60
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:opacity-90
                    "
                  />

                  {/* Label */}
                  <div className="relative flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-sky-100
                        bg-sky-50
                        text-sky-600
                      "
                    >
                      <Sparkles size={20} />
                    </div>

                    <span className="text-sm font-bold uppercase tracking-wider text-sky-600">
                      Learning Domain
                    </span>

                  </div>

                  {/* Title */}
                  <h2
                    className="
                      relative
                      mt-7
                      text-3xl
                      font-extrabold
                      leading-tight
                      tracking-tight
                      text-slate-900
                      transition-colors
                      duration-300
                      group-hover:text-sky-600
                    "
                  >
                    {domain.name}
                  </h2>

                  {/* Accent */}
                  <div
                    className="
                      relative
                      mt-5
                      h-1
                      w-14
                      rounded-full
                      bg-sky-500
                      transition-all
                      duration-500
                      group-hover:w-24
                    "
                  />

                  {/* Description */}
                  <p
                    className="
                      relative
                      mt-6
                      text-base
                      leading-8
                      text-slate-600
                    "
                  >
                    {domain.description}
                  </p>

                  {/* Bottom Action */}
                  <div className="relative mt-auto pt-10">

                    {isAvailable ? (
                      <div
                        className="
                          inline-flex
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          border-sky-100
                          bg-sky-50
                          px-5
                          py-3
                          text-base
                          font-bold
                          text-sky-600
                          shadow-sm
                          transition-all
                          duration-300
                          group-hover:border-sky-600
                          group-hover:bg-sky-600
                          group-hover:text-white
                          group-hover:shadow-lg
                        "
                      >
                        <span>Explore Domain</span>

                        <ArrowRight
                          size={19}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    ) : (
                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-2xl
                          border
                          border-slate-200
                          bg-slate-100
                          px-5
                          py-3
                          text-sm
                          font-bold
                          uppercase
                          tracking-wide
                          text-slate-500
                        "
                      >
                        <Sparkles size={16} />
                        Coming Soon
                      </div>
                    )}

                  </div>

                  {/* Bottom Line */}
                  <div
                    className={`
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      h-1
                      transition-all
                      duration-500
                      ${
                        isAvailable
                          ? "w-0 bg-sky-500 group-hover:w-full"
                          : "w-full bg-slate-200"
                      }
                    `}
                  />

                </article>
              );

              return isAvailable ? (
                <Link
                  key={domain.slug}
                  href={`/domains/${domain.slug}`}
                  className="block h-full"
                >
                  {card}
                </Link>
              ) : (
                <Link
                  key={domain.slug}
                  href="/coming-soon"
                  className="block h-full"
                >
                  {card}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center">

            <div className="text-center">

              <div className="text-5xl">
                🔍
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                No domain found
              </h2>

              <p className="mt-2 text-base text-slate-500">
                Try another search or category.
              </p>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}