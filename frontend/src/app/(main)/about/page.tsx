import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F8FAFC] pt-40">

        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              About CloudLearn AI
            </span>

            <h1 className="mt-8 text-5xl font-extrabold text-slate-900">
              Learn Beyond Limits
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              CloudLearn AI is a modern learning platform designed especially
              for B.Tech students. Our goal is to make technical education
              simple, practical and industry-ready through structured learning
              paths, interactive lessons, quizzes, projects and certificates.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <h2 className="text-2xl font-bold text-blue-600">
                Our Mission
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                To empower students with practical skills that help them
                succeed in academics, internships and professional careers.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <h2 className="text-2xl font-bold text-blue-600">
                Our Vision
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                To become one of the most trusted cloud-based learning
                platforms for engineering students across the world.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">

              <h2 className="text-2xl font-bold text-blue-600">
                Why CloudLearn AI?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Practical courses, personalized learning paths, certificates,
                quizzes, progress tracking and AI-powered guidance—all in one
                platform.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}