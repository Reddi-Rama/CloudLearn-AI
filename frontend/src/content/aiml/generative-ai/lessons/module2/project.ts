const project = {
  id: "project",
  moduleId: "module2",

  title: "Build an LLM Evaluation & Analysis Platform",

  subtitle:
    "Build a practical mini-platform that analyzes LLM behavior, evaluates responses, measures retrieval quality, detects failures, and performs regression testing.",

  description:
    "This project brings together the major concepts from the Large Language Models module. You will build an evaluation-oriented application that accepts test cases, simulates or connects to an LLM, evaluates generated responses, categorizes failures, calculates metrics, and compares different model or prompt versions.",

  difficulty: "Advanced",

  estimatedTime: "12–20 hours",

  prerequisites: [
    "Python fundamentals",
    "Basic NumPy knowledge",
    "Understanding of tokenization",
    "Understanding of embeddings",
    "Understanding of self-attention",
    "Understanding of Transformer architecture",
    "Understanding of LLM inference",
    "Understanding of retrieval concepts",
    "Basic JSON handling",
    "Basic software testing concepts"
  ],

  technologies: [
    "Python",
    "NumPy",
    "JSON",
    "Pandas",
    "FastAPI",
    "LLM API",
    "Vector database concepts",
    "REST API concepts",
    "HTML/CSS/JavaScript or React"
  ],

  projectGoal:
    "Create a small but realistic LLM evaluation platform that demonstrates how an LLM application can be tested for correctness, relevance, groundedness, formatting, robustness, latency, and regression.",

  problemStatement: {
    title: "The Problem",

    content: [
      "LLM applications cannot be considered reliable simply because they generate fluent responses.",
      "A model can hallucinate facts, ignore instructions, return malformed JSON, use irrelevant retrieved documents, or behave differently after a prompt or model update.",
      "Developers therefore need an evaluation system that can repeatedly test an LLM application against representative examples.",
      "The goal of this project is to build such a system."
    ]
  },

  solutionOverview: {
    title: "Proposed Solution",

    content: [
      "The platform stores a collection of evaluation cases.",
      "Each case contains an input, expected behavior, optional reference information, and evaluation criteria.",
      "The system sends the input to the selected LLM application.",
      "The generated response is evaluated using automated checks.",
      "Failures are categorized and stored.",
      "Different model or prompt versions can then be compared using the same evaluation dataset."
    ]
  },

  architecture: {
    title: "System Architecture",

    layers: [
      {
        name: "Frontend",
        components: [
          "Dashboard",
          "Test-case manager",
          "Evaluation runner",
          "Results table",
          "Failure analysis",
          "Model comparison"
        ]
      },

      {
        name: "Backend",
        components: [
          "Evaluation API",
          "Test-case API",
          "LLM execution service",
          "Metrics service",
          "Regression service"
        ]
      },

      {
        name: "LLM Layer",
        components: [
          "Prompt builder",
          "Model provider",
          "Generation configuration",
          "Response parser"
        ]
      },

      {
        name: "Evaluation Layer",
        components: [
          "Correctness evaluator",
          "Format validator",
          "Groundedness evaluator",
          "Retrieval evaluator",
          "Robustness evaluator",
          "Latency measurement"
        ]
      },

      {
        name: "Storage Layer",
        components: [
          "Test cases",
          "Evaluation results",
          "Model versions",
          "Prompt versions",
          "Failure categories"
        ]
      }
    ],

    processFlow: [
      "Create evaluation dataset",
      "↓",
      "Select model / prompt version",
      "↓",
      "Run evaluation",
      "↓",
      "Send test input",
      "↓",
      "Generate LLM response",
      "↓",
      "Validate response",
      "↓",
      "Calculate metrics",
      "↓",
      "Classify failures",
      "↓",
      "Store results",
      "↓",
      "Compare versions",
      "↓",
      "Analyze regressions"
    ]
  },

  coreFeatures: [
    {
      title: "Evaluation Dataset Management",
      description:
        "Create, edit, import, export, and organize representative LLM evaluation cases."
    },

    {
      title: "LLM Test Runner",
      description:
        "Run a selected collection of test cases against an LLM or application endpoint."
    },

    {
      title: "Structured Output Validation",
      description:
        "Check whether generated JSON or structured responses follow the required schema."
    },

    {
      title: "Correctness Evaluation",
      description:
        "Compare responses against expected answers or task-specific validation rules."
    },

    {
      title: "Groundedness Evaluation",
      description:
        "Check whether generated claims are supported by supplied evidence."
    },

    {
      title: "Retrieval Evaluation",
      description:
        "Measure retrieval precision, recall, and ranking behavior."
    },

    {
      title: "Failure Classification",
      description:
        "Categorize failures into hallucination, retrieval, formatting, instruction, reasoning, tool, and context failures."
    },

    {
      title: "Regression Testing",
      description:
        "Compare a new model or prompt version against a previous version using the same test suite."
    },

    {
      title: "Performance Monitoring",
      description:
        "Record latency, token usage, and other operational measurements."
    },

    {
      title: "Evaluation Dashboard",
      description:
        "Display aggregate metrics, failure distributions, and model-version comparisons."
    }
  ],

  dataModel: {
    evaluationCase: {
      fields: [
        "id",
        "title",
        "category",
        "input",
        "expectedOutput",
        "referenceDocuments",
        "evaluationCriteria",
        "difficulty",
        "tags"
      ]
    },

    evaluationResult: {
      fields: [
        "testCaseId",
        "modelVersion",
        "promptVersion",
        "generatedOutput",
        "passed",
        "correctnessScore",
        "groundednessScore",
        "formatValid",
        "latencyMs",
        "inputTokens",
        "outputTokens",
        "failureCategory",
        "notes",
        "timestamp"
      ]
    }
  },

  failureTaxonomy: [
    {
      category: "Hallucination",
      detection:
        "Generated claim is unsupported or factually incorrect."
    },
    {
      category: "Retrieval Failure",
      detection:
        "Required relevant document was not retrieved."
    },
    {
      category: "Grounding Failure",
      detection:
        "Answer contains claims not supported by supplied evidence."
    },
    {
      category: "Instruction Failure",
      detection:
        "Model does not follow an explicit requirement."
    },
    {
      category: "Formatting Failure",
      detection:
        "Output violates the required structure or schema."
    },
    {
      category: "Reasoning Failure",
      detection:
        "Intermediate or final reasoning result is incorrect."
    },
    {
      category: "Tool Failure",
      detection:
        "Incorrect tool, arguments, or tool-result interpretation."
    },
    {
      category: "Context Failure",
      detection:
        "Required information is lost, truncated, or poorly utilized."
    },
    {
      category: "Performance Failure",
      detection:
        "Latency or resource usage exceeds the application's requirement."
    }
  ],

  metrics: [
    {
      name: "Accuracy",
      formula: "correct predictions / total predictions",
      purpose: "Measures the fraction of evaluation cases that pass a correctness criterion."
    },
    {
      name: "Precision",
      formula: "relevant retrieved / retrieved",
      purpose: "Measures retrieval relevance."
    },
    {
      name: "Recall",
      formula: "relevant retrieved / all relevant",
      purpose: "Measures retrieval coverage."
    },
    {
      name: "F1",
      formula: "2PR / (P + R)",
      purpose: "Combines precision and recall."
    },
    {
      name: "Pass Rate",
      formula: "passed cases / total cases",
      purpose: "Measures overall test success."
    },
    {
      name: "Average Latency",
      formula: "sum(latencies) / number of requests",
      purpose: "Measures typical response time."
    }
  ],

  implementationStages: [
    {
      stage: 1,
      title: "Create the project",
      tasks: [
        "Create backend and frontend structure.",
        "Configure Python environment.",
        "Configure required packages.",
        "Create environment-variable configuration."
      ]
    },

    {
      stage: 2,
      title: "Create evaluation dataset",
      tasks: [
        "Create JSON evaluation cases.",
        "Add simple factual questions.",
        "Add reasoning questions.",
        "Add structured-output cases.",
        "Add RAG cases.",
        "Add edge cases."
      ]
    },

    {
      stage: 3,
      title: "Build LLM execution layer",
      tasks: [
        "Create model configuration.",
        "Create prompt builder.",
        "Send requests to the model.",
        "Capture generated responses.",
        "Record token and latency information."
      ]
    },

    {
      stage: 4,
      title: "Build evaluators",
      tasks: [
        "Implement exact-match evaluation.",
        "Implement keyword or rule-based checks.",
        "Implement JSON schema validation.",
        "Implement retrieval metrics.",
        "Implement groundedness checks."
      ]
    },

    {
      stage: 5,
      title: "Build failure classification",
      tasks: [
        "Create failure categories.",
        "Map evaluation failures to categories.",
        "Store failure explanations."
      ]
    },

    {
      stage: 6,
      title: "Build regression testing",
      tasks: [
        "Store baseline results.",
        "Run new model or prompt version.",
        "Compare results.",
        "Identify regressions.",
        "Identify improvements."
      ]
    },

    {
      stage: 7,
      title: "Build dashboard",
      tasks: [
        "Show overall pass rate.",
        "Show failure distribution.",
        "Show latency.",
        "Show model comparison.",
        "Show individual test results."
      ]
    },

    {
      stage: 8,
      title: "Testing and documentation",
      tasks: [
        "Create unit tests.",
        "Create integration tests.",
        "Run the complete evaluation suite.",
        "Document architecture.",
        "Document limitations."
      ]
    }
  ],

  sampleDataset: [
    {
      id: "TC001",
      category: "factual",
      input: "Explain what a Transformer is.",
      expectedBehavior:
        "Provide a technically correct explanation of Transformer architecture."
    },

    {
      id: "TC002",
      category: "structured-output",
      input: "Return a JSON object containing name and score.",
      expectedBehavior:
        "Return valid JSON containing both required fields."
    },

    {
      id: "TC003",
      category: "reasoning",
      input: "Solve a multi-step numerical problem.",
      expectedBehavior:
        "Produce the correct final numerical result."
    },

    {
      id: "TC004",
      category: "rag",
      input: "Answer using only the supplied documents.",
      expectedBehavior:
        "Use evidence from the supplied documents and avoid unsupported claims."
    },

    {
      id: "TC005",
      category: "instruction",
      input: "Answer using exactly three bullet points.",
      expectedBehavior:
        "Return exactly three bullet points."
    }
  ],

  codingRequirements: [
    "Implement a tokenizer simulation.",
    "Implement cosine similarity.",
    "Implement scaled dot-product attention.",
    "Implement a context-budget calculator.",
    "Implement retrieval precision and recall.",
    "Implement JSON validation.",
    "Implement a test runner.",
    "Implement regression comparison.",
    "Implement failure categorization."
  ],

  advancedExtensions: [
    "Add an LLM-as-judge evaluator.",
    "Add human review.",
    "Add prompt-version tracking.",
    "Add model-version tracking.",
    "Add experiment comparison.",
    "Add evaluation history.",
    "Add automated regression alerts.",
    "Add RAG document-level evaluation.",
    "Add benchmark import/export.",
    "Add visualization of failure trends."
  ],

  expectedOutput: [
    "Working LLM evaluation application",
    "Evaluation dataset",
    "Automated evaluation pipeline",
    "Failure taxonomy",
    "Metrics dashboard",
    "Regression testing system",
    "Architecture diagram",
    "Technical documentation",
    "Project demonstration"
  ],

  projectDeliverables: [
    "Source code",
    "README",
    "Architecture diagram",
    "Dataset",
    "Evaluation methodology",
    "Test results",
    "Failure analysis report",
    "Regression comparison report",
    "Screenshots",
    "Demo video or presentation"
  ],

  evaluationRubric: [
    {
      criterion: "LLM integration",
      weight: 15
    },
    {
      criterion: "Evaluation dataset",
      weight: 10
    },
    {
      criterion: "Automated evaluation",
      weight: 20
    },
    {
      criterion: "Failure analysis",
      weight: 15
    },
    {
      criterion: "Regression testing",
      weight: 15
    },
    {
      criterion: "Dashboard and visualization",
      weight: 10
    },
    {
      criterion: "Code quality",
      weight: 5
    },
    {
      criterion: "Documentation",
      weight: 10
    }
  ],

  interviewQuestions: [
    "Why does an LLM evaluation system need a golden dataset?",
    "How would you detect hallucination?",
    "How would you evaluate a RAG system?",
    "Why should retrieval and generation be evaluated separately?",
    "How would you detect an LLM regression?",
    "Why is schema validation important?",
    "What metrics would you use for retrieval?",
    "What metrics would you use for classification?",
    "How would you measure latency?",
    "How would you compare two prompt versions?",
    "What are the limitations of automated evaluation?",
    "When would human evaluation be useful?",
    "What is LLM-as-a-judge?",
    "How would you make an LLM application more reliable?"
  ],

  finalChallenge:
    "Extend the platform so that a developer can register multiple model versions, execute the same golden dataset against each version, automatically calculate task-specific metrics, categorize failures, and visualize regressions across versions."
};

export default project;
