"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock3,
  Users,
  Star,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

interface CourseDetailsProps {
  title: string;
  description: string;
  instructor: string;
  lessons: number;
  duration: string;
  students: number;
  rating: number;
}

export default function CourseDetails({
  title,
  description,
  instructor,
  lessons,
  duration,
  students,
  rating,
}: CourseDetailsProps) {
  return (
    <section className="section">

      <div className="container-custom">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Professional Course
            </span>

            <h1 className="heading mt-6">
              {title}
            </h1>

            <p className="sub-heading mt-6">
              {description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="glass-card rounded-2xl p-5">

                <BookOpen className="text-blue-600" />

                <h3 className="mt-3 text-xl font-bold">
                  {lessons}
                </h3>

                <p>Lessons</p>

              </div>

              <div className="glass-card rounded-2xl p-5">

                <Clock3 className="text-green-600" />

                <h3 className="mt-3 text-xl font-bold">
                  {duration}
                </h3>

                <p>Duration</p>

              </div>

              <div className="glass-card rounded-2xl p-5">

                <Users className="text-violet-600" />

                <h3 className="mt-3 text-xl font-bold">
                  {students.toLocaleString()}
                </h3>

                <p>Students</p>

              </div>

              <div className="glass-card rounded-2xl p-5">

                <Star className="text-yellow-500" />

                <h3 className="mt-3 text-xl font-bold">
                  {rating}
                </h3>

                <p>Rating</p>

              </div>

            </div>

            <div className="mt-10">

              <p className="font-semibold">
                Instructor
              </p>

              <p className="mt-2 text-slate-600">
                {instructor}
              </p>

            </div>

            <Link
              href="#lessons"
              className="btn-primary mt-10 inline-flex"
            >
              Start Learning

              <ArrowRight size={18} />
            </Link>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="glass-card overflow-hidden rounded-[36px]">

              <div className="flex h-[350px] items-center justify-center bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200">

                <PlayCircle
                  size={90}
                  className="text-white"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}