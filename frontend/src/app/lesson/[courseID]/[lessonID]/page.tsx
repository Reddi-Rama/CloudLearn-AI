import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  PlayCircle,
  BookOpen,
  FileText,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Clock,
} from "lucide-react";

const lessons = [
  "Introduction",
  "What is Artificial Intelligence?",
  "History of AI",
  "Machine Learning Basics",
  "Deep Learning",
  "Neural Networks",
  "Mini Project",
  "Quiz",
];

export default function LessonPage() {
  return (
    <>
      <Header />

      <main className="pt-32 bg-slate-50 min-h-screen">

        <div className="mx-auto max-w-7xl px-6 py-8">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* LEFT */}

            <div className="lg:col-span-2">

              <div className="overflow-hidden rounded-[35px] bg-white shadow-xl">

                <div className="aspect-video bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 flex items-center justify-center">

                  <PlayCircle
                    size={90}
                    className="text-white"
                  />

                </div>

              </div>

              <div className="mt-8 rounded-[35px] bg-white p-8 shadow">

                <h1 className="text-4xl font-black">

                  Lesson 1 — Introduction

                </h1>

                <div className="mt-5 flex items-center gap-6 text-slate-500">

                  <div className="flex items-center gap-2">

                    <Clock size={18} />

                    18 Minutes

                  </div>

                  <div className="flex items-center gap-2">

                    <BookOpen size={18} />

                    Beginner

                  </div>

                </div>

                <p className="mt-8 leading-9 text-slate-600">

                  This lesson introduces Artificial Intelligence,
                  explains how AI evolved over time,
                  where it is used today,
                  and what you will build throughout this course.

                </p>

              </div>

              <div className="mt-8 rounded-[35px] bg-white p-8 shadow">

                <h2 className="text-3xl font-bold">

                  Lesson Notes

                </h2>

                <div className="mt-6 flex items-start gap-4">

                  <FileText className="text-sky-500" />

                  <p className="leading-8 text-slate-600">

                    Download lesson notes,
                    practice exercises,
                    and additional reference material.

                  </p>

                </div>

              </div>

              <div className="mt-8 flex justify-between">

                <button className="flex items-center gap-3 rounded-2xl border bg-white px-6 py-4 font-semibold">

                  <ArrowLeft />

                  Previous Lesson

                </button>

                <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-4 font-semibold text-white">

                  Next Lesson

                  <ArrowRight />

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="sticky top-32 rounded-[35px] bg-white p-8 shadow-xl">

                <h2 className="text-3xl font-black">

                  Course Lessons

                </h2>

                <div className="mt-8 space-y-4">

                  {lessons.map((lesson, index) => (

                    <div
                      key={lesson}
                      className={`flex items-center justify-between rounded-2xl p-4 transition ${
                        index === 0
                          ? "bg-sky-100"
                          : "hover:bg-slate-100"
                      }`}
                    >

                      <div className="flex items-center gap-3">

                        <CheckCircle2
                          size={20}
                          className={
                            index === 0
                              ? "text-green-600"
                              : "text-slate-400"
                          }
                        />

                        <span className="font-medium">

                          {lesson}

                        </span>

                      </div>

                    </div>

                  ))}

                </div>

                <button className="mt-8 w-full rounded-2xl bg-green-600 py-4 font-semibold text-white">

                  Take Lesson Quiz

                </button>

              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}