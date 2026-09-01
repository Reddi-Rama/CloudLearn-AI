"use client";

import Link from "next/link";

import {
  Cloud,
  Brain,
  ShieldCheck,
  Database,
  Code2,
  Cpu,
} from "lucide-react";

import CloudCard from "./CloudCard";

const domains = [
  {
    title: "Cloud Computing",
    description: "Master AWS, Azure, Docker, Kubernetes and DevOps.",
    icon: Cloud,
    lessons: 120,
    href: "/domains/cloud-computing",
  },

  {
    title: "Artificial Intelligence",
    description: "Build intelligent systems using modern AI.",
    icon: Brain,
    lessons: 90,
    href: "/domains/aiml",
  },

  {
    title: "Cyber Security",
    description:
      "Protect networks, applications and cloud infrastructure.",
    icon: ShieldCheck,
    lessons: 85,
    href: "/domains/cybersecurity",
  },

  {
    title: "Data Science",
    description: "Learn Python, Pandas, ML and analytics.",
    icon: Database,
    lessons: 110,
    href: "/domains/data-science",
  },

  {
    title: "Programming",
    description: "Master C, C++, Python, JavaScript and more.",
    icon: Code2,
    lessons: 150,
    href: "/domains/programming",
  },

  {
    title: "Machine Learning",
    description: "Learn regression, classification and deep learning.",
    icon: Cpu,
    lessons: 95,
    href: "/domains/aiml",
  },
];

export default function CloudDomains() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Popular Domains
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Explore Learning Domains
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Choose from industry-ready learning domains designed for
            engineering students and future professionals.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {domains.map((domain) => (
            <Link
              key={domain.title}
              href={domain.href}
              className="block h-full"
            >
              <CloudCard
                title={domain.title}
                description={domain.description}
                icon={domain.icon}
                lessons={domain.lessons}
              />
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}