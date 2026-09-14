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
  about: module1About,
  practice: module1Practice,
  project: module1Project,
};

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

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">

      <MachineLearningSidebar />

      <main className="min-h-[calc(100vh-140px)] px-4 pb-24 pt-6 lg:ml-[374px] lg:px-8 lg:pt-8">

        <div className="mx-auto w-full max-w-[1180px]">

          <div className="mb-6">
            <a
              href="/domains/aiml"
              className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-sky-700 dark:hover:text-sky-400"
            >
              ← Back to Home
            </a>
          </div>

          <section className="rounded-[28px] border border-zinc-200 bg-white px-7 py-9 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:px-10 md:py-11">

            <AIMLContentRenderer
              content={lessonContent}
            />

          </section>

        </div>

      </main>
    </div>
  );
}