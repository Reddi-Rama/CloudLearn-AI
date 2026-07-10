"use client";

import LessonHeader from "./LessonHeader";
import LessonObjectives from "./LessonObjectives";
import LessonProgress from "./LessonProgress";
import LessonContent from "./LessonContent";
import InfoBox from "./InfoBox";
import WarningBox from "./WarningBox";
import CodeBlock from "./CodeBlock";
import DiagramCard from "./DiagramCard";
import ExampleCard from "./ExampleCard";
import ExerciseCard from "./ExerciseCard";
import KeyPoints from "./KeyPoints";
import LessonResources from "./LessonResources";
import LessonNotes from "./LessonNotes";
import LessonFAQ from "./LessonFAQ";
import QuizSection from "./QuizSection";
import LessonSummary from "./LessonSummary";
import LessonCompletion from "./LessonCompletion";
import LessonNavigation from "./LessonNavigation";
import LessonSidebar from "./LessonSidebar";

export default function LessonPage() {
  return (
    <div className="grid gap-8 xl:grid-cols-[320px_1fr]">

      <LessonSidebar />

      <div className="space-y-8">

        <LessonHeader />

        <LessonObjectives />

        <LessonProgress />

        <LessonContent />

        <InfoBox />

        <WarningBox />

        <CodeBlock />

        <DiagramCard />

        <ExampleCard />

        <ExerciseCard />

        <KeyPoints />

        <LessonResources />

        <LessonNotes />

        <LessonFAQ />

        <QuizSection />

        <LessonSummary />

        <LessonCompletion />

        <LessonNavigation />

      </div>

    </div>
  );
}