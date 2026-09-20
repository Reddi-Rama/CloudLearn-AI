import Link from "next/link";
import { notFound } from "next/navigation";

import MachineLearningSidebar from "@/components/aiml/MachineLearningSidebar";
import AIMLContentRenderer from "@/components/aiml/AIMLContentRenderer";

import lesson1 from "@/content/aiml/machine-learning/lessons/module1/lesson1";
import lesson2 from "@/content/aiml/machine-learning/lessons/module1/lesson2";
import lesson3 from "@/content/aiml/machine-learning/lessons/module1/lesson3";
import lesson4 from "@/content/aiml/machine-learning/lessons/module1/lesson4";
import lesson5 from "@/content/aiml/machine-learning/lessons/module1/lesson5";
import lesson6 from "@/content/aiml/machine-learning/lessons/module1/lesson6";
import lesson7 from "@/content/aiml/machine-learning/lessons/module1/lesson7";
import lesson8 from "@/content/aiml/machine-learning/lessons/module1/lesson8";
import lesson9 from "@/content/aiml/machine-learning/lessons/module1/lesson9";
import lesson10 from "@/content/aiml/machine-learning/lessons/module1/lesson10";
import lesson11 from "@/content/aiml/machine-learning/lessons/module1/lesson11";
import lesson12 from "@/content/aiml/machine-learning/lessons/module1/lesson12";
import lesson13 from "@/content/aiml/machine-learning/lessons/module1/lesson13";
import lesson14 from "@/content/aiml/machine-learning/lessons/module1/lesson14";
import lesson15 from "@/content/aiml/machine-learning/lessons/module1/lesson15";

import module1About from "@/content/aiml/machine-learning/lessons/module1/about";
import module1Practice from "@/content/aiml/machine-learning/lessons/module1/practice";
import module1Project from "@/content/aiml/machine-learning/lessons/module1/project";

interface Props {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
}

const module1Content: Record<string, any> = {
  about: module1About,
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  practice: module1Practice,
  project: module1Project,
};

const lessonTitles = [
  ["lesson1", "What Is Machine Learning?"],
  ["lesson2", "Why Machine Learning?"],
  ["lesson3", "Types of Machine Learning"],
  ["lesson4", "Supervised vs Unsupervised Learning"],
  ["lesson5", "Classification vs Regression"],
  ["lesson6", "Understanding ML Problems"],
  ["lesson7", "Data, Samples, Features and Targets"],
  ["lesson8", "Training, Validation and Test Data"],
  ["lesson9", "Generalization"],
  ["lesson10", "Overfitting and Underfitting"],
  ["lesson11", "Model Complexity and Dataset Size"],
  ["lesson12", "Python Environment for Machine Learning"],
  ["lesson13", "NumPy, Pandas and Matplotlib for ML"],
  ["lesson14", "Introduction to scikit-learn"],
  ["lesson15", "Your First Machine Learning Model"],
];

export default async function MachineLearningLessonPage({
  params,
}: Props) {
  const { moduleId, lessonId } = await params;

  if (moduleId !== "module1") {
    notFound();
  }

  const content = module1Content[lessonId];

  if (!content) {
    notFound();
  }

  const lessonContent =
    content?.content !== undefined
      ? content.content
      : content;

  const currentIndex = lessonTitles.findIndex(
    ([id]) => id === lessonId
  );

  const previousLesson =
    currentIndex > 0
      ? lessonTitles[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex >= 0 &&
    currentIndex < lessonTitles.length - 1
      ? lessonTitles[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen w-full bg-[#020617] pt-20 text-white">

      <div className="relative z-10 w-full">

        <div className="w-full px-5 py-6 sm:px-8 lg:px-10">
          <Link
            href="/courses/aiml/machine-learning"
            className="
              inline-flex
              items-center
              rounded-2xl
              bg-sky-600
              px-6
              py-3
              text-base
              font-bold
              text-white
              shadow-lg
              transition
              hover:-translate-y-0.5
              hover:bg-sky-700
            "
          >
            ← Back to Course
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)]">

          <MachineLearningSidebar />

          <section className="min-w-0 w-full px-5 pb-16 sm:px-8 lg:col-start-2 lg:px-10">

            <article
              className="
                w-full
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                px-6
                py-8
                shadow-2xl
                sm:px-10
                sm:py-10
                lg:px-12
                lg:py-12
              "
            >

              <AIMLContentRenderer
                content={lessonContent}
              />

              <div className="mt-12 flex items-center justify-between gap-4 border-t border-slate-700 pt-8">

                {previousLesson ? (
                  <Link
                    href={`/lesson/aiml/machine-learning/${moduleId}/${previousLesson[0]}`}
                    className="
                      rounded-2xl
                      bg-slate-700
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:bg-slate-600
                    "
                  >
                    ← Previous Lesson
                  </Link>
                ) : (
                  <div />
                )}

                {nextLesson ? (
                  <Link
                    href={`/lesson/aiml/machine-learning/${moduleId}/${nextLesson[0]}`}
                    className="
                      rounded-2xl
                      bg-green-600
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:bg-green-700
                    "
                  >
                    Next Lesson →
                  </Link>
                ) : (
                  <Link
                    href="/courses/aiml/machine-learning"
                    className="
                      rounded-2xl
                      bg-sky-600
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:bg-sky-700
                    "
                  >
                    Complete Module →
                  </Link>
                )}

              </div>

            </article>

          </section>
        </div>
      </div>
    </main>
  );
}