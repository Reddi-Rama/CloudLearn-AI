"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

export default function DomainHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-600">

            <Sparkles size={18} />

            <span className="font-medium">
              Explore Technology Domains
            </span>

          </div>

          <h1 className="heading mt-8">

            Choose Your

            <span className="text-blue-600">
              {" "}Dream Career
            </span>

          </h1>

          <p className="sub-heading mt-6">

            Browse all learning domains available on CloudLearn AI.
            Every domain includes structured learning paths,
            practical projects, quizzes, mock tests and certificates.

          </p>

          <div className="mt-12 flex justify-center">

            <div className="glass-card flex items-center gap-3 rounded-full px-8 py-4">

              <BookOpen className="text-blue-600" />

              <span className="font-medium">

                40+ Learning Domains

              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}