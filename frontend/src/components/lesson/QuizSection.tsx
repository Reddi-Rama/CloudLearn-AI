"use client";

import Link from "next/link";
import { Brain, ArrowRight, CircleHelp } from "lucide-react";

interface QuizSectionProps {
  title?: string;
  description?: string;
  questions: number;
  passingScore: number;
  href: string;
}

export default function QuizSection({
  title = "Ready for the Quiz?",
  description = "Test your understanding before moving to the next lesson.",
  questions,
  passingScore,
  href,
}: QuizSectionProps) {
  return (
    <section className="rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-8 shadow-sm">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="mb-5 flex items-center gap-3">

            <Brain
              size={32}
              className="text-sky-600"
            />

            <h2 className="text-3xl font-bold">
              {title}
            </h2>

          </div>

          <p className="max-w-2xl leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-full bg-sky-100 px-5 py-2">

              <CircleHelp
                size={18}
                className="text-sky-600"
              />

              <span className="font-medium">
                {questions} Questions
              </span>

            </div>

            <div className="rounded-full bg-green-100 px-5 py-2 font-medium text-green-700">

              Pass Score: {passingScore}%

            </div>

          </div>

        </div>

        <Link
          href={href}
          className="flex items-center justify-center gap-3 rounded-full bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700"
        >
          Start Quiz

          <ArrowRight size={20} />

        </Link>

      </div>

    </section>
  );
}