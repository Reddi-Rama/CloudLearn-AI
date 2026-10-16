import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, CheckCircle2, ChevronRight, Code2, Home, Layers3, Sparkles } from "lucide-react";
import { modules } from "@/content/programming/c/lessons/module";
import CourseAccessGate from "@/components/courses/CourseAccessGate";

type ModuleData = {
  id: string;
  title: string;
  lessons?: {
    id: string;
    title: string;
  }[];
};

export default function CCoursePage() {
  const course = "c-development";
  const courseName = "C Programming";
  const courseModules = modules.filter(Boolean) as ModuleData[];

  if (!courseModules.length) {
    return notFound();
  }

  const totalLessons = courseModules.reduce(
    (total, module) => total + (module.lessons?.length ?? 0),
    0
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-6 sm:px-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="inline-flex items-center gap-1.5 transition hover:text-blue-600">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-slate-300" />
          <Link href="/courses" className="transition hover:text-blue-600">
            Courses
          </Link>
          <ChevronRight className="h-4 w-4 text-slate-300" />
          <span className="font-medium text-slate-800">C Programming</span>
        </nav>

        <section className="relative isolate overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-6 py-9 text-white shadow-[0_20px_60px_rgba(37,99,235,0.16)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-50 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                PROGRAMMING LEARNING PATH
              </div>

              <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                C Programming
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
                Build a strong foundation in C through structured modules,
                practical lessons, code examples, and progressive learning.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium">
                  <Layers3 className="h-4 w-4" />
                  {courseModules.length} Modules
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium">
                  <BookOpen className="h-4 w-4" />
                  {totalLessons} Lessons
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium">
                  <Code2 className="h-4 w-4" />
                  Practical Coding
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-[32px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-4 rounded-[25px] border border-white/15" />
                <div className="flex h-32 w-32 items-center justify-center rounded-[28px] bg-white text-blue-700 shadow-xl">
                  <Code2 className="h-16 w-16" strokeWidth={1.7} />
                </div>
                <div className="absolute -right-4 top-7 rounded-2xl border border-white/20 bg-white px-4 py-3 text-xs font-bold text-blue-700 shadow-lg">
                  Learn by doing
                </div>
                <div className="absolute -bottom-3 -left-5 flex items-center gap-2 rounded-2xl border border-white/20 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-lg">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Step-by-step lessons
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Layers3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold">{courseModules.length}</p>
              <p className="mt-1 text-sm text-slate-500">Structured modules</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold">{totalLessons}</p>
              <p className="mt-1 text-sm text-slate-500">Lessons to explore</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold">Learn and practice</p>
              <p className="mt-1 text-sm text-slate-500">Explore concepts through code</p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-600">
              Your learning journey
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Explore the course
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Review the course access options and browse the available modules
              below. Your existing enrollment status determines which lessons
              you can open.
            </p>
          </div>

          <CourseAccessGate
            course={course}
            courseName={courseName}
            courseModules={courseModules}
          />
        </section>
      </div>
    </main>
  );
}
