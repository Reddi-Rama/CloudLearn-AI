"use client";

import {
  Code2,
  Database,
  Cloud,
  Brain,
  LockKeyhole,
  BarChart3,
} from "lucide-react";

import PathCard from "./PathCard";

interface PathGridProps {
  searchQuery?: string;
  selectedCategory?: string;
}

const learningPaths = [
  {
    title: "Frontend Development",
    description:
      "Learn modern frontend development from HTML and CSS to JavaScript, TypeScript, React, Next.js, accessibility, performance, security, AI-powered interfaces, and frontend architecture.",
    icon: Code2,
    href: "/learning-paths/frontend-development",
    categories: [
      "Programming",
      "Development",
    ],
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
    description:
      "Progress from programming and server fundamentals to databases, APIs, authentication, security, cloud deployment, distributed systems, and backend architecture.",
    icon: Database,
    href: "/learning-paths/backend-development",
    categories: [
      "Programming",
      "Development",
    ],
    keywords: [
      "backend",
      "back end",
      "server",
      "api",
      "apis",
      "database",
      "databases",
      "authentication",
      "node",
    ],
  },

  {
    title: "Cloud Computing",
    description:
      "Learn cloud computing from Linux and networking foundations to cloud infrastructure, containers, Kubernetes, DevOps, security, observability, and cloud architecture.",
    icon: Cloud,
    href: "/learning-paths/cloud-computing",
    categories: ["Cloud"],
    keywords: [
      "cloud",
      "cloud computing",
      "aws",
      "azure",
      "docker",
      "kubernetes",
      "devops",
      "linux",
      "containers",
    ],
  },

  {
    title: "Artificial Intelligence",
    description:
      "Learn AI from programming, mathematics, machine learning, deep learning, NLP, transformers, generative AI, LLMs, RAG, agents, evaluation, and AI architecture.",
    icon: Brain,
    href: "/learning-paths/artificial-intelligence",
    categories: [
      "Artificial Intelligence",
    ],
    keywords: [
      "ai",
      "artificial intelligence",
      "machine learning",
      "ml",
      "deep learning",
      "nlp",
      "generative ai",
      "llm",
      "llms",
      "rag",
      "agents",
    ],
  },

  {
    title: "Cyber Security",
    description:
      "Build cybersecurity skills from security foundations and networking to cryptography, application security, identity, security operations, cloud security, DevSecOps, and security architecture.",
    icon: LockKeyhole,
    href: "/learning-paths/cyber-security",
    categories: [
      "Cyber Security",
    ],
    keywords: [
      "cyber",
      "cyber security",
      "cybersecurity",
      "security",
      "network security",
      "cryptography",
      "devsecops",
      "cloud security",
    ],
  },

  {
    title: "Data Science",
    description:
      "Learn data science through statistics, data analysis, visualization, SQL, machine learning, model evaluation, MLOps, and practical data-driven projects.",
    icon: BarChart3,
    href: "/learning-paths/data-science",
    categories: [
      "Data Science",
    ],
    keywords: [
      "data",
      "data science",
      "datascience",
      "statistics",
      "analytics",
      "data analysis",
      "sql",
      "mlops",
      "machine learning",
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

export default function PathGrid({
  searchQuery = "",
  selectedCategory = "All",
}: PathGridProps) {
  const normalizedSearch =
    normalize(searchQuery);

  const filteredPaths =
    learningPaths.filter((path) => {

      /* Category */
      const categoryMatches =
        selectedCategory === "All" ||
        path.categories.includes(
          selectedCategory
        );

      if (!categoryMatches) {
        return false;
      }

      /* Search */
      if (!normalizedSearch) {
        return true;
      }

      const titleMatches =
        normalize(path.title).includes(
          normalizedSearch
        );

      const descriptionMatches =
        normalize(path.description).includes(
          normalizedSearch
        );

      const keywordMatches =
        path.keywords.some((keyword) =>
          normalize(keyword).includes(
            normalizedSearch
          )
        );

      return (
        titleMatches ||
        descriptionMatches ||
        keywordMatches
      );
    });

  return (
    <section className="bg-transparent px-6 pb-24 pt-4 md:px-10">

      <div className="mx-auto max-w-[1400px]">

        {filteredPaths.length > 0 ? (

          <div
            className="
              grid
              grid-cols-1
              gap-10
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {filteredPaths.map((path) => (
              <PathCard
                key={path.title}
                title={path.title}
                description={path.description}
                icon={path.icon}
                href={path.href}
              />
            ))}

          </div>

        ) : (

          <div className="flex min-h-[300px] items-center justify-center">

            <div className="text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-sky-50
                  text-3xl
                "
              >
                🔍
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                No learning path found
              </h2>

              <p className="mx-auto mt-2 max-w-lg text-base leading-7 text-slate-500">
                Try another search or choose a different category.
              </p>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}