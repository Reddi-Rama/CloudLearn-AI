"use client";

import {
  Brain,
  Globe,
  Database,
  Cloud,
  Shield,
  Smartphone,
} from "lucide-react";

import LearningPathCard from "./LearningPathCard";

const learningPaths = [
  {
    title: "Artificial Intelligence",
    description:
      "Learn Machine Learning, Deep Learning and Generative AI step by step.",
    icon: Brain,
    color: "bg-violet-500",
    courses: 18,
    href: "/learning-paths/ai",
  },
  {
    title: "Full Stack Development",
    description:
      "Become a modern full stack developer using React, Next.js and Node.js.",
    icon: Globe,
    color: "bg-blue-500",
    courses: 22,
    href: "/learning-paths/full-stack",
  },
  {
    title: "Data Science",
    description:
      "Master Python, SQL, Statistics, Visualization and Machine Learning.",
    icon: Database,
    color: "bg-cyan-500",
    courses: 16,
    href: "/learning-paths/data-science",
  },
  {
    title: "Cloud Computing",
    description:
      "Learn AWS, Azure, Docker, Kubernetes and DevOps practices.",
    icon: Cloud,
    color: "bg-sky-500",
    courses: 14,
    href: "/learning-paths/cloud",
  },
  {
    title: "Cyber Security",
    description:
      "Build practical skills in networking, ethical hacking and security.",
    icon: Shield,
    color: "bg-red-500",
    courses: 15,
    href: "/learning-paths/cyber-security",
  },
  {
    title: "Mobile Development",
    description:
      "Create Android and iOS apps using Flutter and modern mobile tools.",
    icon: Smartphone,
    color: "bg-emerald-500",
    courses: 12,
    href: "/learning-paths/mobile",
  },
];

export default function LearningPaths() {
  return (
    <section className="section">

      <div className="container-custom">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Learning Paths
          </span>

          <h2 className="mt-6 heading">
            Follow a Complete
            <br />
            Career Roadmap
          </h2>

          <p className="sub-heading mt-6">
            Choose a career path and progress from beginner to advanced
            through carefully curated courses and practical exercises.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {learningPaths.map((path) => (

            <LearningPathCard
              key={path.title}
              {...path}
            />

          ))}

        </div>

      </div>

    </section>
  );
}