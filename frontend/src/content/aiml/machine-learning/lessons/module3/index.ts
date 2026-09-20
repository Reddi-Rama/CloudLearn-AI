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

import about from "./about";
import practice from "./practice";
import project from "./project";

export const module3Lessons = [
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
];

export const module3Navigation = module3Lessons.map(
  (lesson, index) => ({
    id: lesson.id,
    title: lesson.title,
    lessonNumber: index + 1,
    type: "lesson" as const,
  })
);

export const module3Content = {
  id: "module3",
  title: "Unsupervised Learning & Preprocessing",
  description:
    "Learn clustering, dimensionality reduction, preprocessing, feature selection, and complete unsupervised learning workflows.",
  type: "module" as const,

  about,

  lessons: module3Lessons,

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
    ...module3Navigation,
    {
      id: "practice",
      title: "Practice",
      lessonNumber: module3Lessons.length + 1,
      type: "practice" as const,
    },
    {
      id: "project",
      title: "Project",
      lessonNumber: module3Lessons.length + 2,
      type: "project" as const,
    },
  ],
};

export const module3 = module3Content;

export const getModule3Lesson = (lessonId: string) => {
  return module3Lessons.find(
    (lesson) => lesson.id === lessonId
  );
};

export const getModule3NavigationItem = (id: string) => {
  return module3Content.navigation.find(
    (item) => item.id === id
  );
};

export const getModule3LessonIndex = (lessonId: string) => {
  return module3Lessons.findIndex(
    (lesson) => lesson.id === lessonId
  );
};

export const getModule3PreviousLesson = (lessonId: string) => {
  const index = getModule3LessonIndex(lessonId);

  if (index <= 0) {
    return null;
  }

  return module3Lessons[index - 1];
};

export const getModule3NextLesson = (lessonId: string) => {
  const index = getModule3LessonIndex(lessonId);

  if (
    index === -1 ||
    index >= module3Lessons.length - 1
  ) {
    return null;
  }

  return module3Lessons[index + 1];
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
  about,
  practice,
  project,
};

export default module3Content;