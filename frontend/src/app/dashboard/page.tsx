import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  BookOpen,
  Award,
  TrendingUp,
  Clock,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    title: "Artificial Intelligence",
    progress: 72,
  },
  {
    title: "Python Programming",
    progress: 48,
  },
  {
    title: "Cloud Computing",
    progress: 20,
  },
];

export default function DashboardPage() {
  return (
    <>
      <Header />

      <main className="pt-36 min-h-screen bg-slate-50">

        <section className="mx-auto max-w-7xl px-6 py-12">

          <h1 className="text-5xl font-black text-slate-900">
            Welcome Back 👋
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Continue your learning journey.
          </p>

          {/* Stats */}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white p-8 shadow">

              <BookOpen className="text-sky-500" size={34} />

              <h2 className="mt-5 text-4xl font-black">
                12
              </h2>

              <p className="mt-2 text-slate-500">
                Courses Enrolled
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <GraduationCap className="text-indigo-500" size={34} />

              <h2 className="mt-5 text-4xl font-black">
                38
              </h2>

              <p className="mt-2 text-slate-500">
                Lessons Completed
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <Award className="text-yellow-500" size={34} />

              <h2 className="mt-5 text-4xl font-black">
                4
              </h2>

              <p className="mt-2 text-slate-500">
                Certificates
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <TrendingUp className="text-green-500" size={34} />

              <h2 className="mt-5 text-4xl font-black">
                84%
              </h2>

              <p className="mt-2 text-slate-500">
                Average Progress
              </p>

            </div>

          </div>

          {/* Continue Learning */}

          <div className="mt-16 rounded-[35px] bg-white p-10 shadow">

            <h2 className="text-3xl font-bold">
              Continue Learning
            </h2>

            <div className="mt-10 space-y-8">

              {courses.map((course) => (

                <div key={course.title}>

                  <div className="flex justify-between">

                    <h3 className="font-bold text-lg">

                      {course.title}

                    </h3>

                    <span className="font-semibold">

                      {course.progress}%

                    </span>

                  </div>

                  <div className="mt-3 h-3 rounded-full bg-slate-200">

                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Quick Actions */}

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <button className="rounded-3xl bg-sky-500 p-8 text-white shadow-lg hover:bg-sky-600">

              <BookOpen size={34} />

              <h3 className="mt-5 text-2xl font-bold">

                Browse Courses

              </h3>

            </button>

            <button className="rounded-3xl bg-indigo-500 p-8 text-white shadow-lg hover:bg-indigo-600">

              <Award size={34} />

              <h3 className="mt-5 text-2xl font-bold">

                View Certificates

              </h3>

            </button>

            <button className="rounded-3xl bg-emerald-500 p-8 text-white shadow-lg hover:bg-emerald-600">

              <Clock size={34} />

              <h3 className="mt-5 text-2xl font-bold">

                Resume Learning

              </h3>

            </button>

          </div>

          <div className="mt-16 flex justify-center">

            <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 font-semibold text-white">

              Go To My Courses

              <ArrowRight size={20} />

            </button>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}