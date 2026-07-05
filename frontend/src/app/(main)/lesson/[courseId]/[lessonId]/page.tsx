import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  LessonHeader,
  LessonProgress,
  ModuleTimeline,
  LessonSidebar,
  LessonObjectives,
  LessonContent,
  InfoBox,
  DiagramCard,
  ExampleCard,
  ExerciseCard,
  WarningBox,
  KeyPoints,
  LessonNotes,
  LessonResources,
  LessonFAQ,
  LessonSummary,
  QuizSection,
  LessonActions,
  LessonCompletion,
  LessonNavigation,
} from "@/components/lesson";

export default function LessonPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 pt-36 pb-20">

        <div className="mx-auto max-w-7xl px-6">

          {/* Lesson Header */}

          <LessonHeader
            title="Introduction to Cloud Computing"
            module="Module 1"
            duration="20 Minutes"
            difficulty="Beginner"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-4">

            {/* Sidebar */}

            <div className="space-y-8 lg:col-span-1">

              <LessonSidebar />

              <LessonProgress
                completed={1}
                total={10}
              />

              <ModuleTimeline />

            </div>

            {/* Main Content */}

            <div className="space-y-8 lg:col-span-3">

              <LessonObjectives />

              <LessonContent />

              <InfoBox
                title="Did You Know?"
                description="Cloud computing allows organizations to scale applications quickly without investing in expensive hardware."
              />

              <DiagramCard
                title="Cloud Infrastructure"
                description="Understand how users connect to cloud providers through the internet."
              />

              <ExampleCard
                title="Real World Example"
                example="When you use Google Drive or Microsoft OneDrive to store files online, you are using cloud computing."
              />

              <ExerciseCard
                title="Practice Exercise"
                instruction="Identify five cloud services that you use in your daily life and classify them as SaaS, PaaS, or IaaS."
              />

              <WarningBox
                warning="Cloud computing is not the same as simply using the internet. It provides computing resources on demand."
              />

              <KeyPoints
                points={[
                  "Cloud services are available on demand.",
                  "Cloud computing reduces infrastructure cost.",
                  "Scalability is one of its biggest advantages.",
                  "Security remains a shared responsibility.",
                ]}
              />

              <LessonNotes />

              <LessonResources />

              <LessonFAQ />

              <LessonSummary />

              <QuizSection />

              <LessonActions />

              <LessonCompletion />

              <LessonNavigation />

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}