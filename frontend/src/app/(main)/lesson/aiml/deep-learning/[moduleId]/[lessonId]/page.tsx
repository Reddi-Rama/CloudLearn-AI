import { notFound } from "next/navigation";

import DeepLearningSidebar from "@/components/aiml/DeepLearningSidebar";
import DeepLearningContentRenderer from "@/components/aiml/DeepLearningContentRenderer";

// Module 1
import dlModule1Lesson1 from "@/content/aiml/deep-learning/lessons/module1/lesson1";
import dlModule1Lesson2 from "@/content/aiml/deep-learning/lessons/module1/lesson2";
import dlModule1Lesson3 from "@/content/aiml/deep-learning/lessons/module1/lesson3";
import dlModule1Lesson4 from "@/content/aiml/deep-learning/lessons/module1/lesson4";
import dlModule1Lesson5 from "@/content/aiml/deep-learning/lessons/module1/lesson5";
import dlModule1Lesson6 from "@/content/aiml/deep-learning/lessons/module1/lesson6";
import dlModule1Lesson7 from "@/content/aiml/deep-learning/lessons/module1/lesson7";
import dlModule1Lesson8 from "@/content/aiml/deep-learning/lessons/module1/lesson8";

// Module 2
import dlModule2Lesson1 from "@/content/aiml/deep-learning/lessons/module2/lesson1";
import dlModule2Lesson2 from "@/content/aiml/deep-learning/lessons/module2/lesson2";
import dlModule2Lesson3 from "@/content/aiml/deep-learning/lessons/module2/lesson3";
import dlModule2Lesson4 from "@/content/aiml/deep-learning/lessons/module2/lesson4";
import dlModule2Lesson5 from "@/content/aiml/deep-learning/lessons/module2/lesson5";
import dlModule2Lesson6 from "@/content/aiml/deep-learning/lessons/module2/lesson6";
import dlModule2Lesson7 from "@/content/aiml/deep-learning/lessons/module2/lesson7";
import dlModule2Lesson8 from "@/content/aiml/deep-learning/lessons/module2/lesson8";
import dlModule2Lesson9 from "@/content/aiml/deep-learning/lessons/module2/lesson9";
import dlModule2Lesson10 from "@/content/aiml/deep-learning/lessons/module2/lesson10";
import dlModule2Lesson11 from "@/content/aiml/deep-learning/lessons/module2/lesson11";
import dlModule2Lesson12 from "@/content/aiml/deep-learning/lessons/module2/lesson12";
import dlModule2Lesson13 from "@/content/aiml/deep-learning/lessons/module2/lesson13";
import dlModule2Lesson14 from "@/content/aiml/deep-learning/lessons/module2/lesson14";
import dlModule2Lesson15 from "@/content/aiml/deep-learning/lessons/module2/lesson15";
import dlModule2Lesson16 from "@/content/aiml/deep-learning/lessons/module2/lesson16";

// Module 3
import dlModule3Lesson1 from "@/content/aiml/deep-learning/lessons/module3/lesson1";
import dlModule3Lesson2 from "@/content/aiml/deep-learning/lessons/module3/lesson2";
import dlModule3Lesson3 from "@/content/aiml/deep-learning/lessons/module3/lesson3";
import dlModule3Lesson4 from "@/content/aiml/deep-learning/lessons/module3/lesson4";
import dlModule3Lesson5 from "@/content/aiml/deep-learning/lessons/module3/lesson5";
import dlModule3Lesson6 from "@/content/aiml/deep-learning/lessons/module3/lesson6";
import dlModule3Lesson7 from "@/content/aiml/deep-learning/lessons/module3/lesson7";
import dlModule3Lesson8 from "@/content/aiml/deep-learning/lessons/module3/lesson8";
import dlModule3Lesson9 from "@/content/aiml/deep-learning/lessons/module3/lesson9";
import dlModule3Lesson10 from "@/content/aiml/deep-learning/lessons/module3/lesson10";
import dlModule3Lesson11 from "@/content/aiml/deep-learning/lessons/module3/lesson11";
import dlModule3Lesson12 from "@/content/aiml/deep-learning/lessons/module3/lesson12";
import dlModule3Lesson13 from "@/content/aiml/deep-learning/lessons/module3/lesson13";
import dlModule3Lesson14 from "@/content/aiml/deep-learning/lessons/module3/lesson14";
import dlModule3Lesson15 from "@/content/aiml/deep-learning/lessons/module3/lesson15";

// Module 4
import dlModule4Lesson1 from "@/content/aiml/deep-learning/lessons/module4/lesson1";
import dlModule4Lesson2 from "@/content/aiml/deep-learning/lessons/module4/lesson2";
import dlModule4Lesson3 from "@/content/aiml/deep-learning/lessons/module4/lesson3";
import dlModule4Lesson4 from "@/content/aiml/deep-learning/lessons/module4/lesson4";
import dlModule4Lesson5 from "@/content/aiml/deep-learning/lessons/module4/lesson5";
import dlModule4Lesson6 from "@/content/aiml/deep-learning/lessons/module4/lesson6";
import dlModule4Lesson7 from "@/content/aiml/deep-learning/lessons/module4/lesson7";
import dlModule4Lesson8 from "@/content/aiml/deep-learning/lessons/module4/lesson8";
import dlModule4Lesson9 from "@/content/aiml/deep-learning/lessons/module4/lesson9";
import dlModule4Lesson10 from "@/content/aiml/deep-learning/lessons/module4/lesson10";
import dlModule4Lesson11 from "@/content/aiml/deep-learning/lessons/module4/lesson11";
import dlModule4Lesson12 from "@/content/aiml/deep-learning/lessons/module4/lesson12";
import dlModule4Lesson13 from "@/content/aiml/deep-learning/lessons/module4/lesson13";
import dlModule4Lesson14 from "@/content/aiml/deep-learning/lessons/module4/lesson14";
import dlModule4Lesson15 from "@/content/aiml/deep-learning/lessons/module4/lesson15";
import dlModule4Lesson16 from "@/content/aiml/deep-learning/lessons/module4/lesson16";
import dlModule4Lesson17 from "@/content/aiml/deep-learning/lessons/module4/lesson17";
import dlModule4Lesson18 from "@/content/aiml/deep-learning/lessons/module4/lesson18";
import dlModule4Lesson19 from "@/content/aiml/deep-learning/lessons/module4/lesson19";
import dlModule4Lesson20 from "@/content/aiml/deep-learning/lessons/module4/lesson20";
import dlModule4Lesson21 from "@/content/aiml/deep-learning/lessons/module4/lesson21";
import dlModule4Lesson22 from "@/content/aiml/deep-learning/lessons/module4/lesson22";

// Module 5
import dlModule5Lesson1 from "@/content/aiml/deep-learning/lessons/module5/lesson1";
import dlModule5Lesson2 from "@/content/aiml/deep-learning/lessons/module5/lesson2";
import dlModule5Lesson3 from "@/content/aiml/deep-learning/lessons/module5/lesson3";
import dlModule5Lesson4 from "@/content/aiml/deep-learning/lessons/module5/lesson4";
import dlModule5Lesson5 from "@/content/aiml/deep-learning/lessons/module5/lesson5";
import dlModule5Lesson6 from "@/content/aiml/deep-learning/lessons/module5/lesson6";
import dlModule5Lesson7 from "@/content/aiml/deep-learning/lessons/module5/lesson7";
import dlModule5Lesson8 from "@/content/aiml/deep-learning/lessons/module5/lesson8";
import dlModule5Lesson9 from "@/content/aiml/deep-learning/lessons/module5/lesson9";
import dlModule5Lesson10 from "@/content/aiml/deep-learning/lessons/module5/lesson10";
import dlModule5Lesson11 from "@/content/aiml/deep-learning/lessons/module5/lesson11";
import dlModule5Lesson12 from "@/content/aiml/deep-learning/lessons/module5/lesson12";
import dlModule5Lesson13 from "@/content/aiml/deep-learning/lessons/module5/lesson13";
import dlModule5Lesson14 from "@/content/aiml/deep-learning/lessons/module5/lesson14";
import dlModule5Lesson15 from "@/content/aiml/deep-learning/lessons/module5/lesson15";
import dlModule5Lesson16 from "@/content/aiml/deep-learning/lessons/module5/lesson16";
import dlModule5Lesson17 from "@/content/aiml/deep-learning/lessons/module5/lesson17";
import dlModule5Lesson18 from "@/content/aiml/deep-learning/lessons/module5/lesson18";
import dlModule5Lesson19 from "@/content/aiml/deep-learning/lessons/module5/lesson19";

// Module 6
import dlModule6Lesson1 from "@/content/aiml/deep-learning/lessons/module6/lesson1";
import dlModule6Lesson2 from "@/content/aiml/deep-learning/lessons/module6/lesson2";
import dlModule6Lesson3 from "@/content/aiml/deep-learning/lessons/module6/lesson3";
import dlModule6Lesson4 from "@/content/aiml/deep-learning/lessons/module6/lesson4";
import dlModule6Lesson5 from "@/content/aiml/deep-learning/lessons/module6/lesson5";
import dlModule6Lesson6 from "@/content/aiml/deep-learning/lessons/module6/lesson6";
import dlModule6Lesson7 from "@/content/aiml/deep-learning/lessons/module6/lesson7";
import dlModule6Lesson8 from "@/content/aiml/deep-learning/lessons/module6/lesson8";
import dlModule6Lesson9 from "@/content/aiml/deep-learning/lessons/module6/lesson9";
import dlModule6Lesson10 from "@/content/aiml/deep-learning/lessons/module6/lesson10";
import dlModule6Lesson11 from "@/content/aiml/deep-learning/lessons/module6/lesson11";
import dlModule6Lesson12 from "@/content/aiml/deep-learning/lessons/module6/lesson12";
import dlModule6Lesson13 from "@/content/aiml/deep-learning/lessons/module6/lesson13";
import dlModule6Lesson14 from "@/content/aiml/deep-learning/lessons/module6/lesson14";
import dlModule6Lesson15 from "@/content/aiml/deep-learning/lessons/module6/lesson15";
import dlModule6Lesson16 from "@/content/aiml/deep-learning/lessons/module6/lesson16";
import dlModule6Lesson17 from "@/content/aiml/deep-learning/lessons/module6/lesson17";
import dlModule6Lesson18 from "@/content/aiml/deep-learning/lessons/module6/lesson18";
import dlModule6Lesson19 from "@/content/aiml/deep-learning/lessons/module6/lesson19";
import dlModule6Lesson20 from "@/content/aiml/deep-learning/lessons/module6/lesson20";

const modules: Record<string, any[]> = {
  module1: [
    dlModule1Lesson1,
    dlModule1Lesson2,
    dlModule1Lesson3,
    dlModule1Lesson4,
    dlModule1Lesson5,
    dlModule1Lesson6,
    dlModule1Lesson7,
    dlModule1Lesson8,
  ],

  module2: [
    dlModule2Lesson1,
    dlModule2Lesson2,
    dlModule2Lesson3,
    dlModule2Lesson4,
    dlModule2Lesson5,
    dlModule2Lesson6,
    dlModule2Lesson7,
    dlModule2Lesson8,
    dlModule2Lesson9,
    dlModule2Lesson10,
    dlModule2Lesson11,
    dlModule2Lesson12,
    dlModule2Lesson13,
    dlModule2Lesson14,
    dlModule2Lesson15,
    dlModule2Lesson16,
  ],

  module3: [
    dlModule3Lesson1,
    dlModule3Lesson2,
    dlModule3Lesson3,
    dlModule3Lesson4,
    dlModule3Lesson5,
    dlModule3Lesson6,
    dlModule3Lesson7,
    dlModule3Lesson8,
    dlModule3Lesson9,
    dlModule3Lesson10,
    dlModule3Lesson11,
    dlModule3Lesson12,
    dlModule3Lesson13,
    dlModule3Lesson14,
    dlModule3Lesson15,
  ],

  module4: [
    dlModule4Lesson1,
    dlModule4Lesson2,
    dlModule4Lesson3,
    dlModule4Lesson4,
    dlModule4Lesson5,
    dlModule4Lesson6,
    dlModule4Lesson7,
    dlModule4Lesson8,
    dlModule4Lesson9,
    dlModule4Lesson10,
    dlModule4Lesson11,
    dlModule4Lesson12,
    dlModule4Lesson13,
    dlModule4Lesson14,
    dlModule4Lesson15,
    dlModule4Lesson16,
    dlModule4Lesson17,
    dlModule4Lesson18,
    dlModule4Lesson19,
    dlModule4Lesson20,
    dlModule4Lesson21,
    dlModule4Lesson22,
  ],

  module5: [
    dlModule5Lesson1,
    dlModule5Lesson2,
    dlModule5Lesson3,
    dlModule5Lesson4,
    dlModule5Lesson5,
    dlModule5Lesson6,
    dlModule5Lesson7,
    dlModule5Lesson8,
    dlModule5Lesson9,
    dlModule5Lesson10,
    dlModule5Lesson11,
    dlModule5Lesson12,
    dlModule5Lesson13,
    dlModule5Lesson14,
    dlModule5Lesson15,
    dlModule5Lesson16,
    dlModule5Lesson17,
    dlModule5Lesson18,
    dlModule5Lesson19,
  ],

  module6: [
    dlModule6Lesson1,
    dlModule6Lesson2,
    dlModule6Lesson3,
    dlModule6Lesson4,
    dlModule6Lesson5,
    dlModule6Lesson6,
    dlModule6Lesson7,
    dlModule6Lesson8,
    dlModule6Lesson9,
    dlModule6Lesson10,
    dlModule6Lesson11,
    dlModule6Lesson12,
    dlModule6Lesson13,
    dlModule6Lesson14,
    dlModule6Lesson15,
    dlModule6Lesson16,
    dlModule6Lesson17,
    dlModule6Lesson18,
    dlModule6Lesson19,
    dlModule6Lesson20,
  ],
};

type Props = {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
};

export default async function DeepLearningLessonPage({ params }: Props) {
  const { moduleId, lessonId } = await params;

  const lessons = modules[moduleId];

  if (!lessons) {
    notFound();
  }

  const match = lessonId.match(/^lesson(\d+)$/);

  if (!match) {
    notFound();
  }

  const lessonNumber = Number(match[1]);

  if (!Number.isInteger(lessonNumber) || lessonNumber < 1) {
    notFound();
  }

  const lessonIndex = lessonNumber - 1;
  const lesson = lessons[lessonIndex];

  if (!lesson) {
    notFound();
  }

  const previousLesson =
    lessonIndex > 0
      ? {
          moduleId,
          lessonId: `lesson${lessonNumber - 1}`,
        }
      : null;

  const moduleNumbers = Object.keys(modules);
  const currentModuleIndex = moduleNumbers.indexOf(moduleId);

  const nextLesson =
    lessonIndex < lessons.length - 1
      ? {
          moduleId,
          lessonId: `lesson${lessonNumber + 1}`,
        }
      : currentModuleIndex < moduleNumbers.length - 1
        ? {
            moduleId: moduleNumbers[currentModuleIndex + 1],
            lessonId: "lesson1",
          }
        : null;

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="mx-auto max-w-[1800px] px-4 py-6 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
            <DeepLearningSidebar />
          </aside>

          <section className="min-w-0">
            <article className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl">
              <DeepLearningContentRenderer content={lesson} />
            </article>

            <div className="mt-6 flex items-center justify-between gap-4">
              {previousLesson ? (
                <a
                  href={`/lesson/aiml/deep-learning/${previousLesson.moduleId}/${previousLesson.lessonId}`}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                >
                  ← Previous Lesson
                </a>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <a
                  href={`/lesson/aiml/deep-learning/${nextLesson.moduleId}/${nextLesson.lessonId}`}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                >
                  Next Lesson →
                </a>
              ) : (
                <div />
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}