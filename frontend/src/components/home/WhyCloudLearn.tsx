"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Route,
  BookOpen,
  Code2,
  ClipboardCheck,
  Award,
  Briefcase,
} from "lucide-react";

const journey = [
  {
    icon: Compass,
    title: "Choose a Domain",
    description:
      "Select your dream career path like AI, Full Stack, Cloud or Cyber Security.",
    color: "bg-blue-500",
  },
  {
    icon: Route,
    title: "Follow Learning Path",
    description:
      "Progress through a carefully designed roadmap from beginner to advanced.",
    color: "bg-indigo-500",
  },
  {
    icon: BookOpen,
    title: "Complete Courses",
    description:
      "Learn every topic through structured lessons, examples and projects.",
    color: "bg-violet-500",
  },
  {
    icon: Code2,
    title: "Practice Daily",
    description:
      "Strengthen your understanding using coding exercises and debugging questions.",
    color: "bg-cyan-500",
  },
  {
    icon: ClipboardCheck,
    title: "Mock Tests",
    description:
      "Evaluate your knowledge using timed assessments and quizzes.",
    color: "bg-orange-500",
  },
  {
    icon: Award,
    title: "Earn Certificates",
    description:
      "Receive completion certificates for every successfully finished course.",
    color: "bg-emerald-500",
  },
  {
    icon: Briefcase,
    title: "Become Career Ready",
    description:
      "Build confidence with real-world skills and placement-focused preparation.",
    color: "bg-sky-500",
  },
];

export default function WhyCloudLearn() {
  return (
    <section className="section">

      <div className="container-custom">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Why CloudLearn AI?
          </span>

          <h2 className="mt-6 heading">
            Your Complete Learning Journey
          </h2>

          <p className="sub-heading mt-6">
            CloudLearn AI guides you from your first lesson to becoming
            placement-ready through a structured, practical learning experience.
          </p>

        </div>

        <div className="relative mt-20">

          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-blue-100 lg:block" />

          <div className="space-y-12">

            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`flex flex-col items-center gap-8 lg:flex-row ${
                    index % 2 === 1
                      ? "lg:flex-row-reverse"
                      : ""
                  }`}
                >
                  <div className="w-full lg:w-1/2">

                    <div className="glass-card rounded-3xl p-8">

                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}
                      >
                        <Icon
                          className="text-white"
                          size={28}
                        />
                      </div>

                      <h3 className="mt-6 text-2xl font-bold text-slate-800">
                        {step.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  <div className="hidden lg:flex h-6 w-6 rounded-full border-4 border-white bg-blue-600 shadow-xl" />

                  <div className="hidden lg:block lg:w-1/2" />

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}