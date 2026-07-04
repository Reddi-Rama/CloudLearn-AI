"use client";

import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react";

interface Props {
  score?: number;
}

export default function AssessmentResult({
  score = 4,
}: Props) {

  const passed = score >= 3;

  return (
    <section className="w-full max-w-3xl rounded-[36px] bg-white p-12 shadow-2xl">

      <div className="flex justify-center">

        {passed ? (
          <CheckCircle2
            size={90}
            className="text-green-500"
          />
        ) : (
          <XCircle
            size={90}
            className="text-red-500"
          />
        )}

      </div>

      <h1 className="mt-8 text-center text-5xl font-black">

        {passed ? "Assessment Passed!" : "Assessment Failed"}

      </h1>

      <p className="mt-5 text-center text-lg text-slate-600">

        You scored

        <span className="mx-2 font-bold text-sky-600">

          {score}/4

        </span>

        in this lesson assessment.

      </p>

      <div className="mt-10 rounded-3xl bg-slate-50 p-8">

        <div className="mb-5 flex justify-between">

          <span>Total Questions</span>

          <span>4</span>

        </div>

        <div className="mb-5 flex justify-between">

          <span>Correct Answers</span>

          <span>{score}</span>

        </div>

        <div className="flex justify-between">

          <span>Status</span>

          <span
            className={
              passed
                ? "font-bold text-green-600"
                : "font-bold text-red-600"
            }
          >
            {passed ? "Passed" : "Failed"}
          </span>

        </div>

      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        {passed ? (

          <Link
            href="/lessons/next"
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 font-bold text-white"
          >

            Next Lesson

            <ArrowRight size={20}/>

          </Link>

        ) : (

          <button className="flex items-center gap-3 rounded-2xl bg-red-500 px-8 py-4 font-bold text-white">

            <RotateCcw size={20}/>

            Retry Assessment

          </button>

        )}

      </div>

    </section>
  );
}