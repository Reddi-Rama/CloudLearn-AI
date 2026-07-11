"use client";

import {
  BookOpen,
  Route,
  Code2,
  ClipboardCheck,
  Award,
  BarChart3,
} from "lucide-react";

import FeaturedCard from "./FeaturedCard";

const features = [
  {
    title: "Structured Courses",
    description:
      "Step-by-step courses designed to help you master every concept from basics to advanced.",
    icon: BookOpen,
    color: "bg-blue-500",
  },
  {
    title: "Learning Paths",
    description:
      "Follow carefully planned roadmaps for AI, Web Development, Cloud, Data Science and more.",
    icon: Route,
    color: "bg-indigo-500",
  },
  {
    title: "Hands-on Practice",
    description:
      "Strengthen your skills through coding problems, debugging exercises and real-world practice.",
    icon: Code2,
    color: "bg-violet-500",
  },
  {
    title: "Mock Tests",
    description:
      "Evaluate your knowledge with timed assessments that simulate real placement tests.",
    icon: ClipboardCheck,
    color: "bg-cyan-500",
  },
  {
    title: "Certificates",
    description:
      "Earn certificates after successfully completing your learning journey and assessments.",
    icon: Award,
    color: "bg-emerald-500",
  },
  {
    title: "Track Progress",
    description:
      "Monitor your completed lessons, learning streaks and overall growth from your dashboard.",
    icon: BarChart3,
    color: "bg-orange-500",
  },
];

export default function Features() {
  return (
    <section className="section">

      <div className="container-custom">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Features
          </span>

          <h2 className="mt-6 heading">
            Everything You Need
            <br />
            To Learn Smarter
          </h2>

          <p className="sub-heading mt-6">
            CloudLearn AI combines structured learning,
            practical coding, assessments and certifications
            into one seamless learning experience.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (

            <FeaturedCard
              key={feature.title}
              {...feature}
            />

          ))}

        </div>

      </div>

    </section>
  );
}