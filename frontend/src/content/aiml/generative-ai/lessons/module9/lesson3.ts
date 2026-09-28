const lesson3 = {
  id: "module9-lesson3",
  moduleId: "module9",
  title: "LLM Context, State & Memory Engineering",
  subtitle: "Managing information across conversations, workflows and long-running AI systems",
  description:
    "Learn how LLM applications manage context windows, conversation history, short-term state, long-term memory, summaries, retrieval and application state.",

  sections: [
    {
      title: "1. What Is Context Engineering?",
      content:
        "Context engineering is the systematic process of deciding what information an LLM receives, how that information is organized, how much information is included and how irrelevant information is removed."
    },

    {
      title: "2. Why Context Matters",
      bullets: [
        "Models generate responses from the information available in context.",
        "Important information may be lost when context is poorly constructed.",
        "Large context can increase latency and cost.",
        "Irrelevant context can reduce answer quality.",
        "Conflicting context can produce unreliable behavior."
      ]
    },

    {
      title: "3. Context Window",
      content:
        "A context window is the amount of tokenized information a model can process for a request.",
      formula: "Context = Instructions + History + Retrieved Data + User Input + Tool Data",
      bullets: [
        "Input tokens consume context capacity.",
        "Output tokens also require capacity.",
        "Different models support different context sizes.",
        "Applications must manage context explicitly."
      ]
    },

    {
      title: "4. Context Budget",
      content:
        "A practical application should reserve space for the model's response instead of consuming the entire context window with input.",
      formula: "Input Budget ≤ Context Limit − Output Budget",
      example: {
        contextLimit: "N tokens",
        outputReserve: "M tokens",
        maximumInput: "N − M tokens"
      }
    },

    {
      title: "5. Conversation History",
      content:
        "Chat applications often maintain previous messages so that the model can understand the conversation.",
      architecture: [
        "User Message 1",
        "Assistant Response 1",
        "User Message 2",
        "Assistant Response 2",
        "Current User Message",
        "Context Builder",
        "LLM"
      ]
    },

    {
      title: "6. Full History Strategy",
      content:
        "The simplest approach is to send the entire conversation history on every request.",
      advantages: [
        "Simple implementation",
        "Preserves detailed history",
        "Easy to understand"
      ],
      limitations: [
        "Context grows over time",
        "Higher cost",
        "Higher latency",
        "May eventually exceed the context budget"
      ]
    },

    {
      title: "7. Sliding Window",
      content:
        "A sliding window keeps only the most recent portion of the conversation.",
      architecture: [
        "Old Messages",
        "Discard / Archive",
        "Recent Messages",
        "Current Request",
        "LLM"
      ]
    },

    {
      title: "8. Conversation Summarization",
      content:
        "Older conversation content can be compressed into a summary while recent messages remain available in detail.",
      architecture: [
        "Long Conversation",
        "Summarization",
        "Conversation Summary",
        "+",
        "Recent Messages",
        "LLM"
      ]
    },

    {
      title: "9. Summary Quality",
      content:
        "A summary should preserve information that remains important to future tasks.",
      bullets: [
        "User goals",
        "Important decisions",
        "Constraints",
        "Relevant facts",
        "Task progress",
        "Unresolved questions"
      ]
    },

    {
      title: "10. Short-Term Memory",
      content:
        "Short-term memory represents information needed for the current task or conversation.",
      examples: [
        "Recent messages",
        "Current task",
        "Temporary tool results",
        "Current retrieved documents",
        "Intermediate reasoning state"
      ]
    },

    {
      title: "11. Long-Term Memory",
      content:
        "Long-term memory stores information that may be useful across future interactions.",
      examples: [
        "User preferences",
        "Persistent project information",
        "Known configuration",
        "Learning progress",
        "Saved application state"
      ]
    },

    {
      title: "12. Memory Architecture",
      architecture: [
        "User Interaction",
        "Memory Decision",
        "Short-Term State",
        "Long-Term Memory",
        "Retrieval",
        "Context Builder",
        "LLM"
      ]
    },

    {
      title: "13. Memory Is Not the Same as Context",
      table: {
        headers: ["Context", "Memory"],
        rows: [
          ["Information supplied to the current model call", "Information stored for possible future use"],
          ["Temporary", "Potentially persistent"],
          ["Consumed by inference", "Retrieved when needed"],
          ["Usually request-specific", "Can span multiple sessions"]
        ]
      }
    },

    {
      title: "14. Memory Retrieval",
      content:
        "Long-term memory should not necessarily be inserted into every request. Relevant memories should be selected according to the current task.",
      architecture: [
        "Current Query",
        "Memory Retrieval",
        "Relevant Memories",
        "Context Builder",
        "LLM"
      ]
    },

    {
      title: "15. Semantic Memory",
      content:
        "Semantic memory stores meaningful facts or information that can be retrieved based on similarity or structured metadata."
    },

    {
      title: "16. Episodic Memory",
      content:
        "Episodic memory represents previous events or interactions, such as a previous task or conversation."
    },

    {
      title: "17. Working Memory",
      content:
        "Working memory contains information actively required during a task.",
      examples: [
        "Current plan",
        "Intermediate results",
        "Tool outputs",
        "Temporary variables",
        "Current constraints"
      ]
    },

    {
      title: "18. Context Construction Pipeline",
      architecture: [
        "User Request",
        "Conversation State",
        "Memory Retrieval",
        "RAG Retrieval",
        "Tool Results",
        "System Instructions",
        "Context Ranking",
        "Token Budgeting",
        "Final Context"
      ]
    },

    {
      title: "19. Context Ranking",
      content:
        "When there is more candidate information than available context space, the application should prioritize information based on relevance and importance.",
      conceptualScore:
        "Priority = w_r × Relevance + w_i × Importance + w_f × Freshness",
      bullets: [
        "Relevance measures task relationship.",
        "Importance measures value to the application.",
        "Freshness can matter for changing information."
      ]
    },

    {
      title: "20. Context Compression",
      bullets: [
        "Summarization",
        "Deduplication",
        "Removing irrelevant messages",
        "Retrieving only relevant documents",
        "Compressing tool results",
        "Extracting important fields"
      ]
    },

    {
      title: "21. State vs Memory vs Database",
      table: {
        headers: ["Concept", "Purpose"],
        rows: [
          ["State", "Current application condition"],
          ["Memory", "Information retained for future model interactions"],
          ["Database", "Persistent structured application data"],
          ["Cache", "Fast temporary reusable data"],
          ["Context", "Information supplied to the current model call"]
        ]
      }
    },

    {
      title: "22. Memory Safety",
      bullets: [
        "Do not store sensitive information unnecessarily.",
        "Validate information before saving it.",
        "Allow appropriate deletion or correction.",
        "Do not treat generated memories as automatically true.",
        "Separate user-provided facts from model-generated assumptions."
      ]
    },

    {
      title: "23. Context Injection Risks",
      content:
        "Retrieved documents, memories and tool outputs may contain instructions that should not override trusted application instructions.",
      architecture: [
        "Trusted Instructions",
        "User Input",
        "Untrusted Retrieved Content",
        "Tool Results",
        "Context Isolation",
        "LLM"
      ]
    },

    {
      title: "24. Context Management Code",
      code: `function buildContext({
  system,
  recentMessages,
  memories,
  retrievedDocs,
  userMessage
}) {
  return [
    system,
    ...memories,
    ...retrievedDocs,
    ...recentMessages,
    userMessage
  ];
}`
    },

    {
      title: "25. Memory Store Example",
      code: `class MemoryStore {
  constructor() {
    this.memories = new Map();
  }

  save(userId, memory) {
    const items = this.memories.get(userId) ?? [];
    items.push(memory);
    this.memories.set(userId, items);
  }

  get(userId) {
    return this.memories.get(userId) ?? [];
  }
}`
    },

    {
      title: "26. Production Context Architecture",
      architecture: [
        "User",
        "Application API",
        "Conversation Store",
        "Memory Store",
        "Vector Store",
        "Context Engine",
        "LLM",
        "Tool Layer",
        "Output Validator"
      ]
    },

    {
      title: "27. Context Engineering Principle",
      content:
        "The goal is not to give the model everything. The goal is to give the model the right information, in the right structure, at the right time."
    }
  ],

  comparisons: [
    {
      title: "History Strategies",
      headers: ["Full History", "Sliding Window", "Summarization", "Retrieval"],
      rows: [
        ["High detail", "Recent detail", "Compressed history", "Relevant information"],
        ["High context cost", "Lower cost", "Moderate cost", "Selective cost"],
        ["Simple", "Simple", "Requires summarization", "Requires retrieval"]
      ]
    }
  ],

  exercises: [
    "Explain what context engineering means.",
    "Why can sending more context reduce quality?",
    "Compare full history and sliding-window memory.",
    "Explain short-term and long-term memory.",
    "Explain why memory should be retrieved selectively."
  ],

  codingExercises: [
    "Implement a sliding-window conversation manager.",
    "Create a conversation summarization interface.",
    "Implement a simple memory store.",
    "Build a context-budget function.",
    "Create a context ranking function."
  ],

  architectureExercises: [
    "Design memory for a personal AI assistant.",
    "Design context management for a coding assistant.",
    "Design a long-running research agent.",
    "Design a secure memory architecture."
  ],

  scenarioExercises: [
    "A conversation exceeds the model context limit. Design a solution.",
    "The assistant remembers incorrect information. Design a memory validation strategy.",
    "Retrieved documents contain conflicting information. Design context prioritization.",
    "An application becomes expensive because every request includes long history. Optimize it."
  ],

  interviewQuestions: [
    "What is context engineering?",
    "What is a context window?",
    "What is short-term memory?",
    "What is long-term memory?",
    "What is the difference between state and memory?",
    "What is a sliding context window?",
    "Why is summarization useful?",
    "How would you manage context for a long-running agent?",
    "How can memory introduce security risks?"
  ],

  commonMistakes: [
    "Sending the entire conversation forever.",
    "Assuming more context is always better.",
    "Saving model-generated assumptions as facts.",
    "Storing sensitive information unnecessarily.",
    "Mixing trusted instructions with untrusted retrieved content.",
    "Ignoring context costs."
  ],

  summary:
    "Context, state and memory are core engineering concerns in LLM applications. Context controls what the model sees during an individual inference call, state represents the current application condition, and memory allows information to persist across interactions. Effective systems selectively retrieve, summarize, rank and compress information rather than blindly sending everything to the model.",

  keyTakeaways: [
    "Context engineering determines what information reaches the model.",
    "Context windows impose practical limits.",
    "Sliding windows and summarization control conversation growth.",
    "Short-term and long-term memory serve different purposes.",
    "Relevant memory should be retrieved rather than blindly inserted.",
    "Context must be designed with cost, quality and security in mind."
  ]
};

export default lesson3;