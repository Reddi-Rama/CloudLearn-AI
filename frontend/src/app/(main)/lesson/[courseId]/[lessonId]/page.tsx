import {
  LessonHeader,
  LessonSidebar,
  LessonObjectives,
  LessonContent,
  LessonProgress,
  LessonNavigation,
  LessonSummary,
  LessonResources,
  LessonFAQ,
  LessonCompletion,
  LessonActions,
  LessonNotes,
  ModuleTimeline,
  QuizSection,
  ExerciseCard,
  InfoBox,
  WarningBox,
  KeyPoints,
} from "@/components/lesson";

import {
  CloudBackground,
  PageContainer,
} from "@/components/common";

interface LessonPageProps {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { courseId, lessonId } = await params;

  return (
    <CloudBackground>

      <PageContainer>

        <div className="grid gap-10 lg:grid-cols-4">

          {/* Sidebar */}

          <LessonSidebar />

          {/* Lesson */}

          <div className="space-y-10 lg:col-span-3">

            <LessonHeader
              module={courseId.replaceAll("-", " ")}
              title={lessonId.replaceAll("-", " ")}
            />

            <LessonProgress progress={35} />

            <LessonObjectives
              objectives={[
                "Understand Variables",
                "Store Data",
                "Learn Data Types",
              ]}
            />

            <LessonContent
              content="Lesson content will be loaded here. Later this will come from your backend based on courseId and lessonId."
            />

            <InfoBox title="Remember">

              Python automatically determines the data type based on the assigned value.

            </InfoBox>

            <WarningBox>

              Variable names are case-sensitive.

            </WarningBox>

            <KeyPoints
              points={[
                "Variables store values",
                "Python is dynamically typed",
                "Naming matters",
              ]}
            />

            <ExerciseCard
              title="Exercise"
              description="Create three variables and print them."
            />

            <LessonSummary
              points={[
                "Variables are containers.",
                "Different data types exist.",
                "Python handles typing automatically.",
              ]}
            />

            <LessonResources
              resources={[
                {
                  title: "Python Docs",
                  url: "https://docs.python.org/3/",
                },
              ]}
            />

            <LessonFAQ
              faqs={[
                {
                  question: "What is a variable?",
                  answer:
                    "A variable stores information in memory.",
                },
              ]}
            />

            <LessonNotes />

            <ModuleTimeline
              lessons={[
                {
                  title: "Introduction",
                  completed: true,
                },
                {
                  title: "Variables",
                  completed: true,
                },
                {
                  title: "Data Types",
                  completed: false,
                },
              ]}
            />

            <QuizSection
              questionCount={10}
              passingScore={70}
            />

            <LessonActions />

            <LessonNavigation />

            <LessonCompletion />

          </div>

        </div>

      </PageContainer>

    </CloudBackground>
  );
}