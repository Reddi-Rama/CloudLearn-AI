import lesson1 from "./lesson1";
import lesson2 from "./lesson2";
import lesson3 from "./lesson3";
import lesson4 from "./lesson4";
import lesson5 from "./lesson5";
import lesson6 from "./lesson6";
import lesson7 from "./lesson7";
import lesson8 from "./lesson8";
import lesson9 from "./lesson9";
import lesson10 from "./lesson10";
import lesson11 from "./lesson11";
import lesson12 from "./lesson12";
import lesson13 from "./lesson13";
import lesson14 from "./lesson14";
import lesson15 from "./lesson15";
import lesson16 from "./lesson16";
import lesson17 from "./lesson17";
import lesson18 from "./lesson18";
import lesson19 from "./lesson19";
import lesson20 from "./lesson20";
import lesson21 from "./lesson21";
import lesson22 from "./lesson22";

import about from "./about";
import practice from "./practice";
import project from "./project";

export const module5Lessons = [
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
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
  lesson21,
  lesson22,
];

export const module5Navigation = module5Lessons.map(
  (lesson, index) => ({
    id: lesson.id,
    title: lesson.title,
    lessonNumber: index + 1,
    type: "lesson" as const,
  })
);

export const module5Content = {
  id: "module5",
  title: "Model Evaluation, Tuning & Pipelines",
  description:
    "Learn how to evaluate machine learning models correctly, compare models, tune hyperparameters, build reliable pipelines, and prepare models for production.",
  type: "module" as const,

  about,

  lessons: module5Lessons,

  practice: {
    id: "practice",
    title: "Module Practice",
    type: "practice" as const,
    content: practice,
  },

  project: {
    id: "project",
    title: "Module Project",
    type: "project" as const,
    content: project,
  },

  navigation: [
    ...module5Navigation,
    {
      id: "practice",
      title: "Practice",
      lessonNumber: module5Lessons.length + 1,
      type: "practice" as const,
    },
    {
      id: "project",
      title: "Project",
      lessonNumber: module5Lessons.length + 2,
      type: "project" as const,
    },
  ],
};

export const module5 = module5Content;

export const getModule5Lesson = (lessonId: string) => {
  return module5Lessons.find(
    (lesson) => lesson.id === lessonId
  );
};

export const getModule5NavigationItem = (id: string) => {
  return module5Content.navigation.find(
    (item) => item.id === id
  );
};

export const getModule5LessonIndex = (lessonId: string) => {
  return module5Lessons.findIndex(
    (lesson) => lesson.id === lessonId
  );
};

export const getModule5PreviousLesson = (lessonId: string) => {
  const index = getModule5LessonIndex(lessonId);

  if (index <= 0) {
    return null;
  }

  return module5Lessons[index - 1];
};

export const getModule5NextLesson = (lessonId: string) => {
  const index = getModule5LessonIndex(lessonId);

  if (
    index === -1 ||
    index >= module5Lessons.length - 1
  ) {
    return null;
  }

  return module5Lessons[index + 1];
};

export {
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
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
  lesson21,
  lesson22,
  about,
  practice,
  project,
};

export default module5Content;