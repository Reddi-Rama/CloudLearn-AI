/* ============================================================
   Module 02 — AI/ML
   index.ts
============================================================ */

import * as lesson1Module from "./lesson1";
import * as lesson2Module from "./lesson2";
import * as lesson3Module from "./lesson3";
import * as lesson4Module from "./lesson4";
import * as lesson5Module from "./lesson5";
import * as lesson6Module from "./lesson6";
import * as lesson7Module from "./lesson7";
import * as lesson8Module from "./lesson8";
import * as lesson9Module from "./lesson9";
import * as lesson10Module from "./lesson10";
import * as lesson11Module from "./lesson11";
import * as lesson12Module from "./lesson12";

type LessonModule = Record<string, unknown>;

function getLessonTitle(
  loaded: LessonModule,
  fallback: string
): string {

  const candidates = [
    loaded.default,
    loaded.lesson,
    ...Object.values(loaded),
  ];

  for (const candidate of candidates) {

    if (
      typeof candidate === "object" &&
      candidate !== null &&
      !Array.isArray(candidate)
    ) {

      const record =
        candidate as Record<string, unknown>;

      if (
        typeof record.title === "string"
      ) {
        return record.title;
      }
    }
  }

  return fallback;
}

export const module2Lessons = [
  {
    id: "lesson1",
    number: 1,
    title: getLessonTitle(
      lesson1Module,
      "Lesson 1"
    ),
    href: "/lesson/aiml/module2/lesson1",
  },

  {
    id: "lesson2",
    number: 2,
    title: getLessonTitle(
      lesson2Module,
      "Lesson 2"
    ),
    href: "/lesson/aiml/module2/lesson2",
  },

  {
    id: "lesson3",
    number: 3,
    title: getLessonTitle(
      lesson3Module,
      "Lesson 3"
    ),
    href: "/lesson/aiml/module2/lesson3",
  },

  {
    id: "lesson4",
    number: 4,
    title: getLessonTitle(
      lesson4Module,
      "Lesson 4"
    ),
    href: "/lesson/aiml/module2/lesson4",
  },

  {
    id: "lesson5",
    number: 5,
    title: getLessonTitle(
      lesson5Module,
      "Lesson 5"
    ),
    href: "/lesson/aiml/module2/lesson5",
  },

  {
    id: "lesson6",
    number: 6,
    title: getLessonTitle(
      lesson6Module,
      "Lesson 6"
    ),
    href: "/lesson/aiml/module2/lesson6",
  },

  {
    id: "lesson7",
    number: 7,
    title: getLessonTitle(
      lesson7Module,
      "Lesson 7"
    ),
    href: "/lesson/aiml/module2/lesson7",
  },

  {
    id: "lesson8",
    number: 8,
    title: getLessonTitle(
      lesson8Module,
      "Lesson 8"
    ),
    href: "/lesson/aiml/module2/lesson8",
  },

  {
    id: "lesson9",
    number: 9,
    title: getLessonTitle(
      lesson9Module,
      "Lesson 9"
    ),
    href: "/lesson/aiml/module2/lesson9",
  },

  {
    id: "lesson10",
    number: 10,
    title: getLessonTitle(
      lesson10Module,
      "Lesson 10"
    ),
    href: "/lesson/aiml/module2/lesson10",
  },

  {
    id: "lesson11",
    number: 11,
    title: getLessonTitle(
      lesson11Module,
      "Lesson 11"
    ),
    href: "/lesson/aiml/module2/lesson11",
  },

  {
    id: "lesson12",
    number: 12,
    title: getLessonTitle(
      lesson12Module,
      "Lesson 12"
    ),
    href: "/lesson/aiml/module2/lesson12",
  },
] as const;


/* ============================================================
   NAVIGATION
============================================================ */

export const module2Navigation = {
  courseOverview: "/courses/aiml",

  courseRoadmap: "/courses/aiml/roadmap",

  module: "/lesson/aiml/module2/about",

  lessons: module2Lessons,

  practice: "/lesson/aiml/module2/practice",

  project: "/lesson/aiml/module2/project",

  nextModule: "/lesson/aiml/module3/about",
} as const;


/* ============================================================
   MODULE OBJECT
============================================================ */

export const module2 = {
  id: "module-02",
  moduleNumber: 2,

  title: "Module 02",

  description:
    "AI/ML Module 02",

  lessons: module2Lessons,

  practice: {
    title: "Module 02 Practice",
    file: "practice.ts",
  },

  project: {
    title: "Module 02 Project",
    file: "project.ts",
  },

  completion: {
    practice: true,
    project: true,
  },
};


/* ============================================================
   ALIASES
============================================================ */

export const module02 = module2;


/* ============================================================
   LESSON RE-EXPORTS
============================================================ */

export { lesson1 } from "./lesson1";
export { lesson2 } from "./lesson2";

export { default as lesson3 } from "./lesson3";
export { lesson4 } from "./lesson4";
export { default as lesson5 } from "./lesson5";
export { default as lesson6 } from "./lesson6";
export { default as lesson7 } from "./lesson7";
export { default as lesson8 } from "./lesson8";
export { default as lesson9 } from "./lesson9";
export { default as lesson10 } from "./lesson10";
export { default as lesson11 } from "./lesson11";
export { default as lesson12 } from "./lesson12";


export default module2;


