"use client";

import {
  Brain,
  Bot,
  Database,
  BarChart3,
  Globe,
  Cloud,
  Shield,
  Smartphone,
  Settings,
  Sparkles,
} from "lucide-react";

import DomainCard from "./DomainCard";

const domains = [
  {
    title: "Artificial Intelligence",
    description: "Build intelligent AI applications.",
    icon: <Brain size={28} />,
    href: "/courses/artificial-intelligence",
  },
  {
    title: "Machine Learning",
    description: "Master ML algorithms and models.",
    icon: <Bot size={28} />,
    href: "/courses/machine-learning",
  },
  {
    title: "Data Science",
    description: "Learn statistics and predictive analytics.",
    icon: <Database size={28} />,
    href: "/courses/data-science",
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into insights.",
    icon: <BarChart3 size={28} />,
    href: "/courses/data-analytics",
  },
  {
    title: "Generative AI",
    description: "Build LLMs and AI Agents.",
    icon: <Sparkles size={28} />,
    href: "/courses/generative-ai",
  },
  {
    title: "Full Stack",
    description: "Frontend + Backend Development.",
    icon: <Globe size={28} />,
    href: "/courses/full-stack",
  },
  {
    title: "Cloud Computing",
    description: "AWS, Azure & Google Cloud.",
    icon: <Cloud size={28} />,
    href: "/courses/cloud",
  },
  {
    title: "DevOps",
    description: "CI/CD and Docker pipelines.",
    icon: <Settings size={28} />,
    href: "/courses/devops",
  },
  {
    title: "Cyber Security",
    description: "Ethical Hacking & Security.",
    icon: <Shield size={28} />,
    href: "/courses/cyber-security",
  },
  {
    title: "Vibe Coding",
    description: "Create apps with AI assistance.",
    icon: <Smartphone size={28} />,
    href: "/courses/vibe-coding",
  },
];

export default function DomainGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="grid gap-y-14 gap-x-8 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {domains.map((domain) => (
          <DomainCard
            key={domain.title}
            title={domain.title}
            description={domain.description}
            icon={domain.icon}
            href={domain.href}
          />
        ))}

      </div>

    </section>
  );
}