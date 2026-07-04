import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";

import {
  BookOpen,
  Code2,
  Brain,
  Cloud,
  Database,
  Shield,
  ArrowRight,
} from "lucide-react";

const paths = [
  {
    title: "Programming",
    icon: Code2,
    color: "from-sky-500 to-blue-600",
    lessons: "120 Lessons",
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    lessons: "95 Lessons",
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    color: "from-cyan-500 to-blue-600",
    lessons: "82 Lessons",
  },
  {
    title: "Data Science",
    icon: Database,
    color: "from-indigo-500 to-blue-600",
    lessons: "90 Lessons",
  },
  {
    title: "Cyber Security",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    lessons: "75 Lessons",
  },
];

export default function LearningPathsPage() {
  return (
    <>
      <Header />

      <main className="pt-36">

        <section className="py-24 text-center">

          <span className="rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">
            📚 Learning Paths
          </span>

          <h1 className="mt-8 text-6xl font-black text-slate-900">
            Structured Learning
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}Roadmaps
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Master every technology through beginner,
            intermediate and advanced learning paths.
          </p>

        </section>

        <section className="pb-24">

          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">

            {paths.map((path) => {

              const Icon = path.icon;

              return (

                <div
                  key={path.title}
                  className="rounded-[30px] bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${path.color}`}
                  >

                    <Icon className="text-white" size={30} />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">

                    {path.title}

                  </h3>

                  <p className="mt-3 text-slate-500">

                    {path.lessons}

                  </p>

                  <button
                    className="mt-8 flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-600"
                  >

                    Start Learning

                    <ArrowRight size={18} />

                  </button>

                </div>

              );

            })}

          </div>

        </section>

        <FAQ />

        <CTA />

      </main>

      <Footer />

    </>
  );
}