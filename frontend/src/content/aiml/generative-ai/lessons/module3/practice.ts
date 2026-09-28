const practice = {
  id: "practice",
  moduleId: "module3",
  type: "practice",
  title: "Module 3 Practice Lab",
  subtitle: "Apply prompt engineering concepts through progressive hands-on exercises.",

  introduction: `
This practice lab brings together the concepts covered throughout Module 3.

The exercises progress from simple prompt improvement to evaluation, security,
structured output, RAG, agent workflows, multimodal prompting, and production design.
`,

  sections: [
    {
      title: "Level 1 — Prompt Foundations",
      description: "Build strong fundamentals in prompt construction.",
      exercises: [
        {
          id: "p1",
          title: "Improve an Ambiguous Prompt",
          difficulty: "Beginner",
          task: `
Rewrite the following vague instruction into a clear prompt:

"Explain machine learning."

Your improved prompt should specify the target audience, expected depth,
structure, examples, and output format.
`,
          expectedSkills: [
            "Instruction clarity",
            "Context specification",
            "Output constraints"
          ]
        },
        {
          id: "p2",
          title: "Role and Task Definition",
          difficulty: "Beginner",
          task: `
Create a prompt for an AI tutor that teaches recursion to a beginner.
The prompt must define the role, learner level, teaching objective,
examples, and response structure.
`,
          expectedSkills: [
            "Role prompting",
            "Task definition",
            "Audience specification"
          ]
        },
        {
          id: "p3",
          title: "Constraint Engineering",
          difficulty: "Beginner",
          task: `
Design a prompt that asks an AI system to summarize a technical article
in exactly five bullet points while preserving important technical terms.
`,
          expectedSkills: [
            "Constraints",
            "Format control",
            "Information preservation"
          ]
        }
      ]
    },

    {
      title: "Level 2 — Prompting Techniques",
      description: "Practice reusable prompting patterns.",
      exercises: [
        {
          id: "p4",
          title: "Zero-Shot vs Few-Shot",
          difficulty: "Intermediate",
          task: `
Create a classification prompt that categorizes customer messages as:
Billing, Technical, Account, or Other.

First design a zero-shot version and then improve it using few-shot examples.
`,
          expectedSkills: [
            "Zero-shot prompting",
            "Few-shot prompting",
            "Classification"
          ]
        },
        {
          id: "p5",
          title: "Prompt Decomposition",
          difficulty: "Intermediate",
          task: `
Design a prompt workflow that takes a large software requirement and
breaks it into smaller implementation tasks.
`,
          expectedSkills: [
            "Task decomposition",
            "Workflow design",
            "Structured reasoning"
          ]
        },
        {
          id: "p6",
          title: "Output Contract",
          difficulty: "Intermediate",
          task: `
Create a prompt that converts an unstructured product description into
a structured JSON object containing:

name, category, price, quantity, features, and warnings.
`,
          expectedSkills: [
            "Structured output",
            "Schema design",
            "Extraction"
          ]
        }
      ]
    },

    {
      title: "Level 3 — Evaluation",
      description: "Learn to measure whether prompts actually work.",
      exercises: [
        {
          id: "p7",
          title: "Create a Golden Dataset",
          difficulty: "Intermediate",
          task: `
Create ten representative test cases for an AI assistant that answers
questions about a university course.
For each case define the input, expected behavior, and evaluation criteria.
`,
          expectedSkills: [
            "Dataset design",
            "Evaluation criteria",
            "Golden examples"
          ]
        },
        {
          id: "p8",
          title: "Prompt A/B Test",
          difficulty: "Intermediate",
          task: `
Design two versions of the same prompt.
Define measurable criteria that can be used to compare their outputs.
`,
          expectedSkills: [
            "A/B testing",
            "Prompt comparison",
            "Quality metrics"
          ]
        }
      ]
    },

    {
      title: "Level 4 — Security",
      description: "Practice identifying and mitigating prompt-related risks.",
      exercises: [
        {
          id: "p9",
          title: "Prompt Injection Analysis",
          difficulty: "Advanced",
          task: `
A document-processing AI is instructed to summarize uploaded documents.
One document contains instructions attempting to override the system's
original task.

Identify the security problem and design a safer instruction hierarchy.
`,
          expectedSkills: [
            "Prompt injection awareness",
            "Instruction hierarchy",
            "Trust boundaries"
          ]
        },
        {
          id: "p10",
          title: "Safe Tool Invocation",
          difficulty: "Advanced",
          task: `
Design a prompt policy for an AI agent that can call external tools.
The agent must verify tool arguments and avoid executing unsupported actions.
`,
          expectedSkills: [
            "Agent safety",
            "Tool validation",
            "Guardrails"
          ]
        }
      ]
    },

    {
      title: "Level 5 — RAG & Agents",
      description: "Apply prompt engineering to retrieval and tool-using systems.",
      exercises: [
        {
          id: "p11",
          title: "RAG Answer Prompt",
          difficulty: "Advanced",
          task: `
Design a prompt for a RAG assistant that answers only from retrieved
documents and clearly indicates when the supplied context is insufficient.
`,
          expectedSkills: [
            "RAG prompting",
            "Grounding",
            "Abstention"
          ]
        },
        {
          id: "p12",
          title: "Agent Decision Prompt",
          difficulty: "Advanced",
          task: `
Create an agent instruction that determines whether a user request
requires a calculator, database lookup, web search, or direct response.
`,
          expectedSkills: [
            "Tool routing",
            "Decision workflows",
            "Agent prompting"
          ]
        }
      ]
    },

    {
      title: "Level 6 — Multimodal & Production",
      description: "Design prompts for real-world AI applications.",
      exercises: [
        {
          id: "p13",
          title: "Image + Text Analysis",
          difficulty: "Advanced",
          task: `
Design a multimodal prompt for analyzing a screenshot of a software error.
The output must distinguish visible facts from inferred causes.
`,
          expectedSkills: [
            "Multimodal prompting",
            "Observation vs inference",
            "Technical analysis"
          ]
        },
        {
          id: "p14",
          title: "Production Prompt Specification",
          difficulty: "Advanced",
          task: `
Design a production prompt for an AI customer-support assistant.
Include instructions, context rules, output schema, refusal behavior,
fallback behavior, and evaluation requirements.
`,
          expectedSkills: [
            "Production prompting",
            "Guardrails",
            "Structured outputs",
            "Fallback design"
          ]
        }
      ]
    }
  ],

  challenge: {
    title: "Final Prompt Engineering Challenge",
    difficulty: "Advanced",
    task: `
Design a complete prompt architecture for an AI learning assistant.

The system should:

1. Understand the learner's question.
2. Retrieve relevant learning material.
3. Answer using grounded context.
4. Generate structured explanations.
5. Provide examples when appropriate.
6. Detect insufficient context.
7. Avoid following malicious instructions inside retrieved content.
8. Produce predictable output.
9. Support evaluation and regression testing.
10. Provide observability information for debugging.

Document the complete prompt workflow and explain why each component exists.
`,
    deliverables: [
      "System instruction",
      "Context template",
      "User prompt template",
      "Output schema",
      "Security rules",
      "Evaluation dataset design",
      "Failure handling strategy",
      "Observability plan"
    ]
  },

  reflectionQuestions: [
    "What makes a prompt precise rather than merely detailed?",
    "When should examples be included in a prompt?",
    "Why should prompts be evaluated using datasets rather than a few manual examples?",
    "How can prompt injection affect an AI system?",
    "Why are structured outputs useful in software applications?",
    "How does prompt engineering change when tools or RAG are introduced?",
    "What should happen when the available context is insufficient?",
    "How can prompt quality be monitored after deployment?"
  ]
};

export default practice;