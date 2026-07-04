import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  Clock,
  BookOpen,
  Users,
  Star,
  PlayCircle,
  CheckCircle2,
  Award,
} from "lucide-react";

const lessons = [
  "Introduction",
  "Fundamentals",
  "Hands-on Practice",
  "Mini Project",
  "Advanced Concepts",
  "Final Assessment",
];

export default function CoursePage() {
  return (
    <>
      <Header />

      <main className="pt-36">

        {/* Hero */}

        <section className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 py-24 text-white">

          <div className="mx-auto max-w-7xl px-6">

            <span className="rounded-full bg-white/20 px-5 py-2">

              Artificial Intelligence

            </span>

            <h1 className="mt-8 text-6xl font-black">

              Artificial Intelligence Mastery

            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-sky-100">

              Learn AI from scratch with structured lessons,
              projects, quizzes, assessments and certification.

            </p>

            <div className="mt-10 flex flex-wrap gap-8">

              <div className="flex items-center gap-2">

                <Clock />

                60 Hours

              </div>

              <div className="flex items-center gap-2">

                <BookOpen />

                120 Lessons

              </div>

              <div className="flex items-center gap-2">

                <Users />

                15K Students

              </div>

              <div className="flex items-center gap-2">

                <Star />

                4.9 Rating

              </div>

            </div>

          </div>

        </section>

        {/* Content */}

        <section className="py-24">

          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">

            {/* Left */}

            <div className="lg:col-span-2">

              <h2 className="text-4xl font-black">

                Course Curriculum

              </h2>

              <div className="mt-10 space-y-6">

                {lessons.map((lesson, index) => (

                  <div
                    key={lesson}
                    className="flex items-center justify-between rounded-3xl bg-white p-6 shadow"
                  >

                    <div className="flex items-center gap-4">

                      <CheckCircle2
                        className="text-sky-500"
                        size={28}
                      />

                      <div>

                        <h3 className="font-bold">

                          Lesson {index + 1}

                        </h3>

                        <p className="text-slate-600">

                          {lesson}

                        </p>

                      </div>

                    </div>

                    <PlayCircle
                      className="text-sky-500"
                      size={28}
                    />

                  </div>

                ))}

              </div>

            </div>

            {/* Right */}

            <div>

              <div className="sticky top-32 rounded-[35px] bg-white p-8 shadow-xl">

                <h3 className="text-3xl font-black">

                  Course Details

                </h3>

                <div className="mt-8 space-y-5">

                  <div className="flex justify-between">

                    <span>Lessons</span>

                    <strong>120</strong>

                  </div>

                  <div className="flex justify-between">

                    <span>Projects</span>

                    <strong>8</strong>

                  </div>

                  <div className="flex justify-between">

                    <span>Assessments</span>

                    <strong>12</strong>

                  </div>

                  <div className="flex justify-between">

                    <span>Certificate</span>

                    <strong>Included</strong>

                  </div>

                </div>

                <button className="mt-10 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 py-4 font-bold text-white">

                  Start Learning

                </button>

                <button className="mt-4 w-full rounded-2xl border py-4 font-semibold">

                  Preview Course

                </button>

                <div className="mt-8 flex items-center gap-3 rounded-2xl bg-green-50 p-4">

                  <Award className="text-green-600" />

                  <span className="font-semibold">

                    Certificate Available

                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}