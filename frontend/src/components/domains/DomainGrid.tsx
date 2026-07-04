"use client";

import DomainCard from "./DomainCard";
import {
  Code2,
  Brain,
  Database,
  Cloud,
  Shield,
  Globe,
  Server,
  Sparkles,
  GraduationCap,
  Cpu,
  Workflow,
  BarChart3,
} from "lucide-react";

const domains = [
  {
    title: "Programming",
    courses: 8,
    icon: Code2,
    color: "from-sky-500 to-blue-600",
    href: "/domains/programming",
  },
  {
    title: "Artificial Intelligence",
    courses: 6,
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    href: "/domains/artificial-intelligence",
  },
  {
    title: "Machine Learning",
    courses: 5,
    icon: Cpu,
    color: "from-indigo-500 to-blue-600",
    href: "/domains/machine-learning",
  },
  {
    title: "Data Science",
    courses: 6,
    icon: Database,
    color: "from-cyan-500 to-blue-600",
    href: "/domains/data-science",
  },
  {
    title: "Cloud Computing",
    courses: 5,
    icon: Cloud,
    color: "from-sky-500 to-cyan-600",
    href: "/domains/cloud-computing",
  },
  {
    title: "Cyber Security",
    courses: 5,
    icon: Shield,
    color: "from-red-500 to-orange-500",
    href: "/domains/cyber-security",
  },
  {
    title: "Full Stack Development",
    courses: 8,
    icon: Globe,
    color: "from-green-500 to-emerald-600",
    href: "/domains/full-stack",
  },
  {
    title: "DevOps",
    courses: 5,
    icon: Server,
    color: "from-emerald-500 to-green-600",
    href: "/domains/devops",
  },
  {
    title: "Data Analytics",
    courses: 5,
    icon: BarChart3,
    color: "from-pink-500 to-rose-600",
    href: "/domains/data-analytics",
  },
  {
    title: "AI Tools",
    courses: 6,
    icon: Sparkles,
    color: "from-yellow-500 to-orange-500",
    href: "/domains/ai-tools",
  },
  {
    title: "Vibe Coding",
    courses: 1,
    icon: Workflow,
    color: "from-fuchsia-500 to-violet-600",
    href: "/domains/vibe-coding",
  },
  {
    title: "B.Tech Subjects",
    courses: 12,
    icon: GraduationCap,
    color: "from-slate-500 to-slate-700",
    href: "/domains/btech",
  },
];

export default function DomainGrid() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {domains.map((domain) => (
            <DomainCard key={domain.title} {...domain} />
          ))}

        </div>

      </div>
    </section>
  );
}