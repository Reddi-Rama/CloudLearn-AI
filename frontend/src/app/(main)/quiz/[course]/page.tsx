"use client";

import QuizHeader from "@/components/quiz/QuizHeader";
import QuizProgress from "@/components/quiz/QuizProgress";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import QuizNavigation from "@/components/quiz/QuizNavigation";

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-12 pt-28 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <QuizHeader />
        <QuizProgress />
        <QuizQuestion />
        <QuizNavigation />
      </div>
    </main>
  );
}