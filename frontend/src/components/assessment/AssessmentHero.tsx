"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import Timer from "./Timer";
import ProgressBar from "./ProgressBar";

interface AssessmentHeaderProps {
  title: string;
  currentQuestion: number;
  totalQuestions: number;
  timeRemaining: string;
}

export default function AssessmentHeader({
  title,
  currentQuestion,
  totalQuestions,
  timeRemaining,
}: AssessmentHeaderProps) {
  const progress = Math.round(
    (currentQuestion / totalQuestions) * 100
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-card sticky top-4 z-50 rounded-3xl p-6"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-center gap-4">

          <Link
            href="/courses"
            className="rounded-xl p-3 transition hover:bg-blue-50"
          >
            <ArrowLeft className="text-blue-600" />
          </Link>

          <div>

            <div className="flex items-center gap-2">

              <BookOpen
                size={18}
                className="text-blue-600"
              />

              <span className="text-sm font-medium text-blue-600">
                Assessment
              </span>

            </div>

            <h1 className="mt-2 text-2xl font-bold text-slate-800">
              {title}
            </h1>

            <p className="mt-1 text-slate-500">
              Question {currentQuestion} of {totalQuestions}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-5 lg:w-[340px]">

          <Timer time={timeRemaining} />

          <ProgressBar progress={progress} />

        </div>

      </div>
    </motion.header>
  );
}