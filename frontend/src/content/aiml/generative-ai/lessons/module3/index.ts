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

import about from "./about";
import practice from "./practice";
import project from "./project";

export const module3 = {
  id: "module3",

  title: "Prompt Engineering",

  subtitle:
    "Design, evaluate, secure, and productionize prompts for modern Generative AI systems.",

  description: `
Learn prompt engineering from fundamentals to production systems.
This module covers prompt structure, prompting techniques, reasoning patterns,
evaluation, security, coding, RAG, agents, structured outputs, multimodal AI,
observability, and production prompt workflows.
`,

  lessons: [
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
    lesson12
  ],

  specialContent: {
    about,
    practice,
    project
  },

  lessonCount: 12,

  topics: [
    "Prompt fundamentals",
    "Prompt structure",
    "Prompting techniques",
    "Advanced prompt design",
    "Prompt evaluation",
    "Prompt security",
    "Coding prompts",
    "RAG prompting",
    "Agent and tool prompting",
    "Prompt templates",
    "Multimodal prompting",
    "Structured outputs",
    "AI quality engineering",
    "Observability",
    "Production prompt systems"
  ],

  progression: [
    {
      phase: 1,
      title: "Foundations",
      lessons: [1, 2]
    },
    {
      phase: 2,
      title: "Prompt Design",
      lessons: [3, 4]
    },
    {
      phase: 3,
      title: "Evaluation & Security",
      lessons: [5, 6]
    },
    {
      phase: 4,
      title: "Technical Prompting",
      lessons: [7, 8, 9]
    },
    {
      phase: 5,
      title: "Advanced & Production",
      lessons: [10, 11, 12]
    }
  ]
};

export {
  about,
  practice,
  project,

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
  lesson12
};

export default module3;