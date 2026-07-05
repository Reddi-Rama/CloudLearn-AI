"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">

      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2">

            <GraduationCap
              size={18}
              className="text-blue-600"
            />

            <span className="font-medium text-blue-700">

              Explore Courses

            </span>

          </div>

          <h1 className="heading mt-8">

            Learn One Course
            <br />

            <span className="text-blue-600">

              At A Time

            </span>

          </h1>

          <p className="sub-heading mt-6">

            Discover professionally designed courses with
            interactive lessons, quizzes, coding exercises,
            projects and certificates.

          </p>

          <div className="glass-card mx-auto mt-12 inline-flex items-center gap-3 rounded-full px-8 py-4">

            <BookOpen
              className="text-blue-600"
            />

            <span className="font-medium">

              500+ Courses Available

            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}