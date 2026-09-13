export { module1About } from "./about";

export { lesson1 } from "./lesson1";
export { lesson2 } from "./lesson2";
export { lesson3 } from "./lesson3";
export { lesson4 } from "./lesson4";
export { lesson5 } from "./lesson5";
export { lesson6 } from "./lesson6";
export { lesson7 } from "./lesson7";
export { lesson8 } from "./lesson8";
export { lesson9 } from "./lesson9";
export { lesson10 } from "./lesson10";

export { practice as module1Practice } from "./practice";
export { project as module1Project } from "./project";

export const module1Lessons = [
  {
    id: "lesson1",
    number: 1,
    title: "What Is Artificial Intelligence?",
    href: "/lesson/aiml/module1/lesson1",
  },

  {
    id: "lesson2",
    number: 2,
    title: "AI vs Traditional Programming",
    href: "/lesson/aiml/module1/lesson2",
  },

  {
    id: "lesson3",
    number: 3,
    title: "History and Evolution of AI",
    href: "/lesson/aiml/module1/lesson3",
  },

  {
    id: "lesson4",
    number: 4,
    title: "Types and Capabilities of AI",
    href: "/lesson/aiml/module1/lesson4",
  },

  {
    id: "lesson5",
    number: 5,
    title:
      "Artificial Intelligence vs Machine Learning vs Deep Learning",
    href: "/lesson/aiml/module1/lesson5",
  },

  {
    id: "lesson6",
    number: 6,
    title: "Generative AI and Modern AI Systems",
    href: "/lesson/aiml/module1/lesson6",
  },

  {
    id: "lesson7",
    number: 7,
    title: "Applications of Artificial Intelligence",
    href: "/lesson/aiml/module1/lesson7",
  },

  {
    id: "lesson8",
    number: 8,
    title:
      "Strengths, Limitations and Challenges of AI",
    href: "/lesson/aiml/module1/lesson8",
  },

  {
    id: "lesson9",
    number: 9,
    title: "AI Problem-Solving Approaches",
    href: "/lesson/aiml/module1/lesson9",
  },

  {
    id: "lesson10",
    number: 10,
    title:
      "Building a Simple Rule-Based Intelligent System",
    href: "/lesson/aiml/module1/lesson10",
  },
] as const;

export const module1Navigation = {
  courseOverview: "/courses/aiml",

  courseRoadmap: "/courses/aiml/roadmap",

  module: "/lesson/aiml/module1/about",

  lessons: module1Lessons,

  practice: "/lesson/aiml/module1/practice",

  project: "/lesson/aiml/module1/project",

  nextModule: "/lesson/aiml/module2/about",
} as const;