"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Database,
  Cloud,
  Shield,
  Smartphone,
} from "lucide-react";

import CloudCard from "./CloudCard";

const domains = [
  {
    title: "Artificial Intelligence",
    description:
      "Machine Learning, Deep Learning, NLP, Computer Vision and Generative AI.",
    icon: Brain,
    courses: 18,
    level: "Beginner → Advanced",
    href: "/domains/artificial-intelligence",
    color: "bg-violet-500",
  },
  {
    title: "Full Stack Development",
    description:
      "HTML, CSS, JavaScript, React, Next.js, Node.js and databases.",
    icon: Globe,
    courses: 22,
    level: "Beginner → Advanced",
    href: "/domains/full-stack",
    color: "bg-blue-500",
  },
  {
    title: "Data Science",
    description:
      "Python, Statistics, Data Analysis, Visualization and Machine Learning.",
    icon: Database,
    courses: 16,
    level: "Intermediate",
    href: "/domains/data-science",
    color: "bg-cyan-500",
  },
  {
    title: "Cloud Computing",
    description:
      "AWS, Azure, Docker, Kubernetes, DevOps and cloud architecture.",
    icon: Cloud,
    courses: 14,
    level: "Intermediate",
    href: "/domains/cloud-computing",
    color: "bg-sky-500",
  },
  {
    title: "Cyber Security",
    description:
      "Networking, Ethical Hacking, Penetration Testing and Security.",
    icon: Shield,
    courses: 15,
    level: "Intermediate",
    href: "/domains/cyber-security",
    color: "bg-red-500",
  },
  {
    title: "Mobile Development",
    description:
      "Flutter, Android, iOS and cross-platform application development.",
    icon: Smartphone,
    courses: 12,
    level: "Beginner",
    href: "/domains/mobile-development",
    color: "bg-emerald-500",
  },
];

export default function CloudDomains() {
  return (
    <section className="section">

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Explore Domains
          </span>

          <h2 className="mt-6 heading">
            Discover Your Dream Career
          </h2>

          <p className="sub-heading mt-6">
            Explore structured learning domains designed to help you
            master modern technologies with guided roadmaps,
            practical projects and certifications.
          </p>

        </motion.div>

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