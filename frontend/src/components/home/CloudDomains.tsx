"use client";

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
  },
  {
    title: "Artificial Intelligence",
    description: "Build intelligent systems using modern AI.",
    icon: Brain,
    lessons: 90,
  },
  {
    title: "Cyber Security",
    description: "Protect networks, applications and cloud infrastructure.",
    icon: ShieldCheck,
    lessons: 85,
  },
  {
    title: "Data Science",
    description: "Learn Python, Pandas, ML and analytics.",
    icon: Database,
    lessons: 110,
  },
  {
    title: "Programming",
    description: "Master C, C++, Python, JavaScript and more.",
    icon: Code2,
    lessons: 150,
  },
  {
    title: "Machine Learning",
    description: "Learn regression, classification and deep learning.",
    icon: Cpu,
    lessons: 95,
  },
];

export default function CloudDomains() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
            Popular Domains
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Explore Learning Domains
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Choose from industry-ready learning domains designed for
            engineering students and future professionals.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {domains.map((domain) => (
            <CloudCard
              key={domain.title}
              {...domain}
            />
          ))}

        </div>

      </div>

    </section>
  );
}