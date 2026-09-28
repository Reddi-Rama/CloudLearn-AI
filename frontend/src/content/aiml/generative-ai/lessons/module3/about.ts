const about = {
  id: "about",
  moduleId: "module3",
  type: "about",
  title: "About Module 3 — Prompt Engineering",
  subtitle: "Learn how to design, evaluate, secure, and productionize prompts for modern generative AI systems.",

  overview: `
Prompt engineering is the discipline of designing instructions and context that help
generative AI systems produce useful, reliable, structured, and task-specific outputs.

This module moves from basic prompt construction to advanced production workflows.
You will learn how prompts work, how to structure instructions, how to evaluate them,
how to defend against prompt-related security problems, and how prompt engineering
connects with RAG, agents, tools, multimodal AI, and structured outputs.
`,

  learningObjectives: [
    "Understand the purpose and anatomy of effective prompts.",
    "Design clear instructions, context, constraints, examples, and output requirements.",
    "Apply common prompting techniques and reasoning patterns.",
    "Create reusable prompt templates for technical and business workflows.",
    "Evaluate prompt quality using systematic testing and evaluation datasets.",
    "Identify prompt injection, instruction conflicts, and other prompt security risks.",
    "Design prompts for coding, debugging, analysis, and technical tasks.",
    "Use prompts effectively with RAG systems, agents, and external tools.",
    "Design prompts for multimodal inputs and structured outputs.",
    "Build observability and evaluation workflows for AI applications.",
    "Optimize prompts for reliability, latency, context usage, and cost.",
    "Design an end-to-end production-ready prompt engineering workflow."
  ],

  skills: [
    "Prompt construction",
    "Instruction design",
    "Few-shot prompting",
    "Reasoning patterns",
    "Prompt evaluation",
    "Prompt testing",
    "Prompt security",
    "Prompt injection awareness",
    "Structured output design",
    "Multimodal prompting",
    "RAG prompting",
    "Agent prompting",
    "Tool-use prompting",
    "Prompt templates",
    "AI observability",
    "Production prompt engineering"
  ],

  moduleFlow: [
    {
      stage: "Foundation",
      lessons: "1–2",
      focus: "Understand prompts, instructions, context, and prompt structure."
    },
    {
      stage: "Prompt Design",
      lessons: "3–4",
      focus: "Learn prompting patterns and advanced reasoning-oriented design."
    },
    {
      stage: "Evaluation & Security",
      lessons: "5–6",
      focus: "Test prompt quality and design safer, more reliable prompts."
    },
    {
      stage: "Technical Applications",
      lessons: "7–9",
      focus: "Apply prompt engineering to coding, RAG, agents, tools, and reusable workflows."
    },
    {
      stage: "Advanced Systems",
      lessons: "10–12",
      focus: "Work with multimodal AI, structured outputs, evaluation systems, observability, and production workflows."
    }
  ],

  prerequisites: [
    "Basic understanding of Generative AI",
    "Basic understanding of Large Language Models",
    "Familiarity with tokens and context windows",
    "Basic programming knowledge is helpful but not mandatory"
  ],

  outcomes: [
    "Write precise and reusable prompts.",
    "Diagnose weak prompt behavior.",
    "Create evaluation datasets for prompts.",
    "Design prompts for structured AI outputs.",
    "Build safer prompt workflows.",
    "Integrate prompting into RAG and agent systems.",
    "Design production-oriented prompt pipelines."
  ],

  completionNote: `
After completing this module, learners should be able to treat prompts as engineered
components of an AI system rather than simple questions sent to a chatbot.
`
};

export default about;