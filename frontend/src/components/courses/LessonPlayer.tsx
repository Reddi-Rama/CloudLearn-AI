"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  PlayCircle,
} from "lucide-react";

interface LessonPlayerProps {
  title: string;
  duration: string;
  description: string;
  completed?: boolean;
}

export default function LessonPlayer({
  title,
  duration,
  description,
  completed = false,
}: LessonPlayerProps) {
  return (
    <section className="section">

      <div className="container-custom">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Lesson Content */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-2"
          >

            {/* Video */}

            <div className="glass-card overflow-hidden rounded-[32px]">

              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200">

                <PlayCircle
                  size={90}
                  className="text-white"
                />

              </div>

            </div>

            {/* Lesson */}

            <div className="glass-card mt-8 rounded-[32px] p-8">

              <h1 className="text-4xl font-bold">

                {title}

              </h1>

              <div className="mt-6 flex flex-wrap gap-4">

                <span className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">

                  <Clock3 size={18} />

                  {duration}

                </span>

                <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">

                  <BookOpen size={18} />

                  Lesson

                </span>

                {completed && (

                  <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">

                    <CheckCircle2 size={18} />

                    Completed

                  </span>

                )}

              </div>

              <div className="mt-10">

                <h2 className="text-2xl font-bold">

                  Lesson Overview

                </h2>

                <p className="mt-5 leading-8 text-slate-600">

                  {description}

                </p>

              </div>

            </div>

          </motion.div>

          {/* Resources */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >

            <div className="glass-card rounded-[32px] p-8">

              <h2 className="text-2xl font-bold">

                Resources

              </h2>

              <div className="mt-8 space-y-5">

                <button className="flex w-full items-center gap-4 rounded-2xl border border-blue-100 p-4 hover:bg-blue-50">

                  <FileText />

                  Lesson Notes

                </button>

                <button className="flex w-full items-center gap-4 rounded-2xl border border-blue-100 p-4 hover:bg-blue-50">

                  <BookOpen />

                  Source Code

                </button>

                <button className="flex w-full items-center gap-4 rounded-2xl border border-blue-100 p-4 hover:bg-blue-50">

                  <CheckCircle2 />

                  Take Quiz

                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}