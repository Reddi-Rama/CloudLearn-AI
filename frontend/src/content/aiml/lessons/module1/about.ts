export const module1About = {
  id: "module1",
  courseId: "aiml",
  moduleNumber: 1,

  title: "Introduction to Artificial Intelligence",

  description:
    "Build a strong practical foundation in Artificial Intelligence by understanding intelligent systems, problem formulation, AI approaches, modern AI systems, and basic AI implementation using Python.",

  purpose:
    "This module introduces the fundamental ideas behind Artificial Intelligence and connects them directly to practical problem solving. Learners move from understanding AI concepts to analyzing real-world AI systems and finally building a working rule-based intelligent application.",

  prerequisites: [
    "Basic computer knowledge",
    "Basic programming concepts",
    "Variables and data types",
    "Conditional statements",
    "Loops",
    "Functions",
  ],

  outcomes: [
    "Explain Artificial Intelligence using practical examples.",
    "Identify problems that can benefit from AI techniques.",
    "Differentiate AI from traditional rule-based programming.",
    "Explain the relationship between AI, Machine Learning, Deep Learning, and Generative AI.",
    "Understand the major capabilities of modern AI systems.",
    "Analyze real-world AI applications from an engineering perspective.",
    "Identify the strengths, limitations, risks, and challenges of AI.",
    "Formulate an AI problem using inputs, outputs, goals, constraints, and success criteria.",
    "Select an appropriate AI problem-solving approach.",
    "Implement a simple rule-based intelligent system using Python.",
    "Validate inputs and handle basic edge cases.",
    "Design test cases for an intelligent system.",
    "Explain decisions produced by a rule-based system.",
  ],

  tools: [
    "Python 3",
    "VS Code",
    "Jupyter Notebook",
    "Terminal / Command Prompt",
  ],

  libraries: [
    "Python Standard Library",
    "json",
    "dataclasses",
  ],

  lessons: [
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
  ],

  navigation: {
    courseOverview: {
      label: "Course Overview",
      href: "/courses/aiml",
    },

    courseRoadmap: {
      label: "Course Roadmap",
      href: "/courses/aiml/roadmap",
    },

    previousModule: null,

    currentModule: {
      label: "Module 01",
      href: "/lesson/aiml/module1/about",
    },

    nextModule: {
      label: "Module 02",
      href: "/lesson/aiml/module2/about",
    },
  },

  completionFlow: [
    {
      label: "Module Overview",
      href: "/lesson/aiml/module1/about",
    },
    {
      label: "Lesson 01",
      href: "/lesson/aiml/module1/lesson1",
    },
    {
      label: "Lesson 02",
      href: "/lesson/aiml/module1/lesson2",
    },
    {
      label: "Lesson 03",
      href: "/lesson/aiml/module1/lesson3",
    },
    {
      label: "Lesson 04",
      href: "/lesson/aiml/module1/lesson4",
    },
    {
      label: "Lesson 05",
      href: "/lesson/aiml/module1/lesson5",
    },
    {
      label: "Lesson 06",
      href: "/lesson/aiml/module1/lesson6",
    },
    {
      label: "Lesson 07",
      href: "/lesson/aiml/module1/lesson7",
    },
    {
      label: "Lesson 08",
      href: "/lesson/aiml/module1/lesson8",
    },
    {
      label: "Lesson 09",
      href: "/lesson/aiml/module1/lesson9",
    },
    {
      label: "Lesson 10",
      href: "/lesson/aiml/module1/lesson10",
    },
    {
      label: "Module Practice",
      href: "/lesson/aiml/module1/practice",
    },
    {
      label: "Module Project",
      href: "/lesson/aiml/module1/project",
    },
    {
      label: "Module 02",
      href: "/lesson/aiml/module2/about",
    },
  ],

  practice: {
    label: "Module Practice",
    href: "/lesson/aiml/module1/practice",
  },

  project: {
    label: "AI Decision Assistant",
    href: "/lesson/aiml/module1/project",
    evaluated: false,
  },

  achievement: {
    label: "AI Foundations — Module 01 Progress",
  },
};