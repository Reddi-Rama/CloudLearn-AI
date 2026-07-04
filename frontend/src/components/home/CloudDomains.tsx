"use client";

import {
  Brain,
  Boxes,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";

import CloudCard from "./CloudCard";

const domains = [
  {
    title: "Programming",
    learners: "12K+ Learners",
    icon: Code2,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Artificial Intelligence",
    learners: "10K+ Learners",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Data Science",
    learners: "9K+ Learners",
    icon: Database,
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Cloud Computing",
    learners: "8K+ Learners",
    icon: Cloud,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Cyber Security",
    learners: "8K+ Learners",
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Full Stack",
    learners: "9K+ Learners",
    icon: Globe,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "DevOps",
    learners: "6K+ Learners",
    icon: Boxes,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "B.Tech Subjects",
    learners: "15K+ Learners",
    icon: GraduationCap,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "AI Tools",
    learners: "18K+ Learners",
    icon: Sparkles,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Vibe Coding",
    learners: "20K+ Learners",
    icon: Workflow,
    color: "from-fuchsia-500 to-violet-600",
  },
  {
    title: "Interview Prep",
    learners: "11K+ Learners",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Computer Fundamentals",
    learners: "13K+ Learners",
    icon: Cpu,
    color: "from-slate-500 to-slate-700",
  },
];

export default function CloudDomains() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF8FF] to-white py-28">

      {/* Background Blur */}

      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-sky-200/30 blur-[130px]" />

      <div className="absolute right-0 top-52 h-96 w-96 rounded-full bg-blue-200/30 blur-[160px]" />

      <div className="absolute left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-sky-100 px-6 py-3 font-semibold text-sky-700">

            ☁ Explore Learning Domains

          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900 lg:text-6xl">

            Choose Your

            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">

              {" "}Domain

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">

            Every cloud represents a complete learning
            roadmap with lessons, assessments,
            quizzes and professional certification.

          </p>

        </div>

        <div className="mt-24 grid justify-items-center gap-y-20 md:grid-cols-2 xl:grid-cols-3">

          {domains.map((domain) => (

            <CloudCard
              key={domain.title}
              title={domain.title}
              learners={domain.learners}
              icon={domain.icon}
              color={domain.color}
            />

          ))}

        </div>

      </div>

    </section>
  );
}