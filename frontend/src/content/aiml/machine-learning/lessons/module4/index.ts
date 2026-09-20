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

import about from "./about";
import practice from "./practice";
import project from "./project";

export const module4Lessons = [
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
];

export const module4Navigation = module4Lessons.map(
  (lesson, index) => ({
    id: lesson.id,
    title: lesson.title,
    lessonNumber: index + 1,
    type: "lesson" as const,
  })
);

export const module4Content = {
  id: "module4",
  title: "Feature Engineering",
  description:
    "Learn how to create, transform, select, and safely integrate features into machine learning workflows.",
  type: "module" as const,

  about,

  lessons: module4Lessons,

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
    ...module4Navigation,
    {
      id: "practice",
      title: "Practice",
      lessonNumber: module4Lessons.length + 1,
      type: "practice" as const,
    },
    {
      id: "project",
      title: "Project",
      lessonNumber: module4Lessons.length + 2,
      type: "project" as const,
    },
  ],
};

export const module4 = module4Content;

export const getModule4Lesson = (lessonId: string) => {
  return module4Lessons.find(
    (lesson) => lesson.id === lessonId
  );
};

export const getModule4NavigationItem = (id: string) => {
  return module4Content.navigation.find(
    (item) => item.id === id
  );
};

export const getModule4LessonIndex = (lessonId: string) => {
  return module4Lessons.findIndex(
    (lesson) => lesson.id === lessonId
  );
};

export const getModule4PreviousLesson = (lessonId: string) => {
  const index = getModule4LessonIndex(lessonId);

  if (index <= 0) {
    return null;
  }

  return module4Lessons[index - 1];
};

export const getModule4NextLesson = (lessonId: string) => {
  const index = getModule4LessonIndex(lessonId);

  if (
    index === -1 ||
    index >= module4Lessons.length - 1
  ) {
    return null;
  }

  return module4Lessons[index + 1];
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
  about,
  practice,
  project,
};

export default module4Content;