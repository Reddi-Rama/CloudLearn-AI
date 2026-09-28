const lesson4 = {
  id: "lesson4",
  moduleId: "module8",
  title: "Multimodal Prompting & Instruction Following",
  subtitle:
    "Learn how to design precise instructions for systems that reason across text, images, documents, audio, and other modalities.",
  description:
    "This lesson explains how prompting changes when models receive multiple modalities. You will learn multimodal prompt structure, image-aware instructions, visual grounding, task decomposition, structured outputs, document prompting, ambiguity handling, multimodal context management, validation, and production prompting patterns.",

  difficulty: "Advanced",
  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Understand how multimodal prompts differ from text-only prompts.",
    "Understand the components of a multimodal instruction.",
    "Design prompts that combine text and images.",
    "Use explicit visual grounding instructions.",
    "Design prompts for screenshots, documents, charts, and tables.",
    "Use structured output requirements with multimodal inputs.",
    "Handle ambiguity and missing visual evidence.",
    "Design multimodal reasoning workflows.",
    "Understand multimodal context management.",
    "Build reliable multimodal prompt pipelines."
  ],

  sections: [
    {
      title: "What Is Multimodal Prompting?",
      content: [
        "Multimodal prompting is the process of giving an AI system instructions together with information from multiple modalities.",
        "A prompt may contain text plus an image, text plus a document, text plus audio, or combinations of several modalities.",
        "The instruction tells the model what task to perform while the additional modalities provide evidence or context.",
        "The goal is not simply to attach a file. The prompt should establish what the model should inspect, how it should reason about the evidence, and what output it should produce."
      ]
    },

    {
      title: "Text-Only Prompt vs Multimodal Prompt",
      comparison: [
        {
          aspect: "Input",
          textOnly: "Text instructions and text context",
          multimodal: "Text instructions plus one or more modalities"
        },
        {
          aspect: "Evidence",
          textOnly: "Language-based",
          multimodal: "Visual, audio, document, or mixed evidence"
        },
        {
          aspect: "Grounding",
          textOnly: "Ground response in provided text",
          multimodal: "Ground response in provided multimodal evidence"
        },
        {
          aspect: "Failure modes",
          textOnly: "Language ambiguity and hallucination",
          multimodal: "Visual errors, OCR errors, missing evidence, ambiguity"
        }
      ]
    },

    {
      title: "Anatomy of a Multimodal Prompt",
      classificationTree: [
        "Multimodal Prompt",
        "├── Role / System Instruction",
        "├── User Task",
        "├── Modality References",
        "│   ├── Image",
        "│   ├── Document",
        "│   ├── Audio",
        "│   └── Video",
        "├── Reasoning Constraints",
        "├── Evidence Rules",
        "├── Output Format",
        "├── Validation Rules",
        "└── Fallback Behavior"
      ]
    },

    {
      title: "Explicit Task Definition",
      content: [
        "Multimodal systems benefit from precise task descriptions.",
        "Instead of saying 'Analyze this image', specify the desired analysis.",
        "For example, ask the model to identify visible objects, extract text, explain a chart, or compare two images.",
        "The more precise the task, the easier it becomes to evaluate the output."
      ],
      examples: [
        {
          weak: "Analyze this image.",
          strong:
            "Identify the visible components of the network diagram and explain how traffic flows between them."
        },
        {
          weak: "Read this document.",
          strong:
            "Extract the invoice number, invoice date, supplier name, line items, and final total."
        }
      ]
    },

    {
      title: "Visual Grounding Instructions",
      content: [
        "Visual grounding instructions tell the model to base its answer on information actually visible in the supplied evidence.",
        "This is especially important when the task involves factual extraction.",
        "A useful instruction is to explicitly distinguish visible evidence from inference.",
        "For example, a model can be instructed to say when a value cannot be read instead of inventing it."
      ]
    },

    {
      title: "Observation vs Interpretation",
      content: [
        "A reliable multimodal prompt can separate observation from interpretation.",
        "Observation describes what is directly visible or audible.",
        "Interpretation explains what that evidence may mean.",
        "This separation reduces the risk of treating an inference as directly observed evidence."
      ],
      architecture: [
        "Input Image",
        "↓",
        "Observation",
        "↓",
        "Extracted Evidence",
        "↓",
        "Interpretation / Reasoning",
        "↓",
        "Final Answer"
      ]
    },

    {
      title: "Example: Screenshot Analysis",
      content: [
        "A screenshot debugging prompt should identify what the model needs to inspect.",
        "Useful instructions can include reading visible error messages, identifying filenames, identifying line numbers, and separating visible facts from suggested causes."
      ],
      codeExample: {
        language: "text",
        code: [
          "Task:",
          "Analyze the supplied screenshot of the application error.",
          "",
          "Instructions:",
          "1. Extract the exact visible error message.",
          "2. Identify any visible file path and line number.",
          "3. Explain what the error means.",
          "4. Distinguish visible evidence from inference.",
          "5. Suggest the next debugging step.",
          "6. Do not invent information that is not visible."
        ]
      }
    },

    {
      title: "Prompting for Documents",
      content: [
        "Documents may contain text, tables, diagrams, headers, footers, page numbers, and visual layout.",
        "A multimodal prompt should tell the model which parts matter.",
        "For extraction tasks, define the exact fields required.",
        "For summarization tasks, define the scope and desired structure.",
        "For comparison tasks, explicitly identify the documents or pages being compared."
      ]
    },

    {
      title: "Prompting for Tables",
      content: [
        "Tables require both textual and spatial interpretation.",
        "A model may need to associate a value with the correct row and column.",
        "Prompts should explicitly request preservation of row-column relationships.",
        "For numeric extraction, the prompt can require that values be returned exactly as displayed."
      ]
    },

    {
      title: "Prompting for Charts",
      content: [
        "Chart understanding requires interpretation of axes, labels, legends, data points, and trends.",
        "A good chart prompt should identify the analytical task.",
        "For example, the task may be trend identification, maximum-value detection, comparison between categories, or explanation of a visual relationship."
      ],
      workflow: [
        "Chart Image",
        "↓",
        "Identify Title / Axes / Legend",
        "↓",
        "Identify Data Elements",
        "↓",
        "Perform Requested Analysis",
        "↓",
        "Validate Numerical Claims",
        "↓",
        "Structured Answer"
      ]
    },

    {
      title: "Multimodal Prompt Ordering",
      content: [
        "Prompt organization matters when multiple inputs are involved.",
        "A useful structure is to establish the task first, identify the evidence, state constraints, and then specify the output format.",
        "For multiple images, explicit labels such as Image A, Image B, and Image C can reduce ambiguity."
      ]
    },

    {
      title: "Comparing Multiple Images",
      content: [
        "When comparing images, identify each image explicitly.",
        "The model should know which image is the baseline and which is the comparison.",
        "The prompt should specify the dimensions of comparison.",
        "Examples include visual differences, layout changes, text changes, object presence, or before-and-after analysis."
      ]
    },

    {
      title: "Multimodal Structured Outputs",
      content: [
        "Multimodal systems often need to convert unstructured visual information into structured data.",
        "A structured output contract makes the result easier to validate.",
        "For example, invoice analysis can return JSON containing supplier, invoice number, date, line items, taxes, and total."
      ],
      codeExample: {
        language: "json",
        code: [
          "{",
          "  \"invoiceNumber\": \"INV-001\",",
          "  \"supplier\": \"Example Supplier\",",
          "  \"date\": \"2026-09-27\",",
          "  \"items\": [],",
          "  \"total\": 1250.00",
          "}"
        ]
      }
    },

    {
      title: "Handling Missing Information",
      content: [
        "A robust multimodal prompt should define what happens when required information is missing.",
        "The model should not be forced to guess.",
        "Useful fallback instructions include returning null, 'not visible', 'not readable', or another predefined state.",
        "This creates a predictable boundary between evidence and uncertainty."
      ]
    },

    {
      title: "Confidence and Evidence",
      content: [
        "Confidence values generated by models should not automatically be treated as calibrated probabilities.",
        "Instead, applications should define evidence-based validation rules.",
        "For critical extraction, the system can require evidence snippets, coordinates, page numbers, or source references where available."
      ]
    },

    {
      title: "Multimodal Prompt Chaining",
      content: [
        "Complex tasks can be divided into multiple stages.",
        "For example, a document system can first identify pages, then extract relevant regions, then extract structured fields, and finally validate the result.",
        "Breaking a difficult task into smaller stages can improve observability and error analysis."
      ],
      architecture: [
        "Raw Document",
        "↓",
        "Page / Region Identification",
        "↓",
        "Relevant Evidence Extraction",
        "↓",
        "Task-Specific Analysis",
        "↓",
        "Structured Output",
        "↓",
        "Validation",
        "↓",
        "Final Result"
      ]
    },

    {
      title: "Multimodal Context Management",
      content: [
        "Large images, long documents, audio, and video can consume substantial context and compute resources.",
        "Applications should avoid sending unnecessary information.",
        "Relevant regions, pages, frames, or audio segments can be selected before model inference.",
        "This creates a multimodal version of context engineering."
      ]
    },

    {
      title: "Image Region Selection",
      content: [
        "Instead of sending an entire large image for every task, an application can identify relevant regions.",
        "For example, an invoice total may appear in a small section of the document.",
        "Region selection can reduce unnecessary processing and improve task focus."
      ]
    },

    {
      title: "Multimodal Reasoning Workflow",
      architecture: [
        "User Request",
        "↓",
        "Input Validation",
        "↓",
        "Modality Detection",
        "↓",
        "Preprocessing",
        "↓",
        "Evidence Selection",
        "↓",
        "Prompt Construction",
        "↓",
        "Multimodal Model",
        "↓",
        "Output Parsing",
        "↓",
        "Validation",
        "↓",
        "Response"
      ]
    },

    {
      title: "Prompting for Visual Reasoning",
      content: [
        "Visual reasoning prompts should specify the reasoning task rather than simply requesting a description.",
        "Examples include identifying relationships, comparing regions, explaining a process shown in a diagram, or extracting evidence from a chart.",
        "The prompt should define what evidence is relevant and what output is expected."
      ]
    },

    {
      title: "Prompting for Safety and Uncertainty",
      content: [
        "Multimodal applications should define behavior for ambiguous or uncertain inputs.",
        "The model should be encouraged to identify uncertainty rather than invent visual details.",
        "For production applications, uncertain results can be routed to a human review step."
      ]
    },

    {
      title: "Prompt Injection Through Images",
      content: [
        "Images and documents can contain text that attempts to influence the model's instructions.",
        "For example, an uploaded document might contain text such as 'ignore previous instructions'.",
        "Applications should treat external multimodal content as untrusted data rather than authoritative instructions.",
        "System and application instructions should remain higher priority than content extracted from user-provided evidence."
      ]
    },

    {
      title: "Multimodal Prompt Security",
      principles: [
        "Treat uploaded content as untrusted data.",
        "Separate instructions from evidence.",
        "Validate extracted structured data.",
        "Do not execute model-generated actions without application-level authorization.",
        "Limit tool access.",
        "Log relevant prompt and evidence metadata.",
        "Use human review for high-impact operations."
      ]
    },

    {
      title: "Multimodal Prompt Evaluation",
      content: [
        "Multimodal prompts should be evaluated systematically.",
        "Evaluation can measure extraction accuracy, visual grounding, instruction following, structured output validity, hallucination rate, latency, and cost.",
        "A golden dataset should contain representative images, documents, questions, expected outputs, and edge cases."
      ]
    },

    {
      title: "Prompt Optimization Loop",
      architecture: [
        "Prompt Version",
        "↓",
        "Golden Multimodal Dataset",
        "↓",
        "Model Execution",
        "↓",
        "Evaluation",
        "↓",
        "Failure Analysis",
        "↓",
        "Prompt Revision",
        "↓",
        "Regression Test",
        "↓",
        "New Prompt Version"
      ]
    },

    {
      title: "Production Multimodal Prompt Design",
      content: [
        "A production prompt is part of a larger system rather than a single text string.",
        "It may depend on application state, retrieved evidence, user instructions, modality metadata, tool results, output schemas, and safety rules.",
        "Therefore multimodal prompting should be treated as prompt engineering plus context engineering plus application engineering."
      ]
    }
  ],

  mathematicalIntuition: [
    {
      title: "Multimodal Context Size",
      intuition:
        "A multimodal request can contain representations from multiple sources.",
      formula:
        "C_total = C_text + C_visual + C_audio + C_video",
      explanation:
        "The effective context cost depends on the representation size of each modality."
    },
    {
      title: "Task Accuracy",
      intuition:
        "A multimodal system can be evaluated by the proportion of outputs that satisfy the required task.",
      formula:
        "Accuracy = Correct Outputs / Total Evaluated Outputs",
      explanation:
        "The exact metric depends on the task."
    },
    {
      title: "Structured Output Validity",
      intuition:
        "A generated response should satisfy both semantic and structural requirements.",
      formula:
        "Validity = Valid Structured Outputs / Total Outputs",
      explanation:
        "Schema validation can measure whether generated outputs conform to the expected structure."
    }
  ],

  codeExamples: [
    {
      title: "Multimodal Prompt Builder",
      language: "python",
      code: [
        "def build_prompt(task, evidence, output_format):",
        "    return {",
        "        'task': task,",
        "        'evidence': evidence,",
        "        'output_format': output_format,",
        "        'rules': [",
        "            'Use only supplied evidence.',",
        "            'Do not invent missing information.',",
        "            'Clearly identify uncertainty.'",
        "        ]",
        "    }",
        "",
        "prompt = build_prompt(",
        "    'Extract invoice information',",
        "    ['invoice.png'],",
        "    'JSON'",
        ")"
      ],
      explanation:
        "Separating task, evidence, output requirements, and rules makes multimodal prompts easier to maintain."
    },
    {
      title: "Structured Output Validation",
      language: "python",
      code: [
        "def validate_invoice(data):",
        "    required = [",
        "        'invoiceNumber',",
        "        'supplier',",
        "        'date',",
        "        'total'",
        "    ]",
        "",
        "    for field in required:",
        "        if field not in data:",
        "            return False",
        "",
        "    return True"
      ],
      explanation:
        "Model output should be validated before downstream processing."
    },
    {
      title: "Multimodal Request Type",
      language: "typescript",
      code: [
        "interface MultimodalPromptRequest {",
        "  task: string;",
        "  images?: string[];",
        "  documents?: string[];",
        "  audio?: string[];",
        "  outputFormat: 'text' | 'json';",
        "  requireEvidence?: boolean;",
        "}"
      ],
      explanation:
        "A typed application contract makes multimodal prompt construction explicit."
    }
  ],

  comparisons: [
    {
      title: "Weak vs Strong Multimodal Prompt",
      rows: [
        {
          aspect: "Task",
          weak: "Analyze this",
          strong: "Extract and explain the visible error message"
        },
        {
          aspect: "Evidence",
          weak: "Implicit",
          strong: "Explicitly identify supplied image/document"
        },
        {
          aspect: "Uncertainty",
          weak: "Not specified",
          strong: "Do not invent unreadable information"
        },
        {
          aspect: "Output",
          weak: "Free-form",
          strong: "Defined schema or response structure"
        }
      ]
    },
    {
      title: "Single-Step vs Chained Multimodal Processing",
      rows: [
        {
          aspect: "Architecture",
          singleStep: "One model call",
          chained: "Multiple controlled stages"
        },
        {
          aspect: "Observability",
          singleStep: "Lower",
          chained: "Higher"
        },
        {
          aspect: "Latency",
          singleStep: "Usually lower",
          chained: "Can be higher"
        },
        {
          aspect: "Complexity",
          singleStep: "Lower",
          chained: "Higher"
        }
      ]
    }
  ],

  exercises: [
    "Explain how multimodal prompting differs from text-only prompting.",
    "Design a prompt for screenshot debugging.",
    "Design a prompt for invoice extraction.",
    "Explain observation versus interpretation.",
    "Why should external document content be treated as untrusted data?",
    "Design a chart-analysis prompt.",
    "Explain how missing visual information should be handled.",
    "Explain multimodal context engineering.",
    "Why is structured output useful for multimodal systems?",
    "Design a multimodal prompt evaluation dataset."
  ],

  codingExercises: [
    "Create a multimodal prompt builder.",
    "Implement structured JSON validation.",
    "Create a multimodal request TypeScript interface.",
    "Implement a missing-evidence detector.",
    "Create a prompt versioning structure.",
    "Build a simple multimodal evaluation record."
  ],

  architectureExercises: [
    "Design an invoice extraction pipeline.",
    "Design a screenshot debugging assistant.",
    "Design a chart-analysis assistant.",
    "Design a document comparison system.",
    "Design a multimodal prompt evaluation service."
  ],

  scenarioExercises: [
    {
      scenario:
        "A user uploads a screenshot containing an error message and asks the assistant to fix the problem.",
      tasks: [
        "Design the multimodal prompt.",
        "Separate observation from interpretation.",
        "Define the structured output.",
        "Define fallback behavior."
      ]
    },
    {
      scenario:
        "A document contains text that attempts to override the application's instructions.",
      tasks: [
        "Identify the security issue.",
        "Explain how the application should treat the document.",
        "Design instruction and evidence separation.",
        "Define validation and authorization controls."
      ]
    }
  ],

  interviewQuestions: [
    "What is multimodal prompting?",
    "How is multimodal prompting different from ordinary prompt engineering?",
    "What is visual grounding?",
    "Why should observation and interpretation be separated?",
    "How should prompts handle missing visual information?",
    "Why are structured outputs useful?",
    "What is multimodal context engineering?",
    "Why can images contain prompt injection attempts?",
    "How should external multimodal content be treated?",
    "What is a multimodal prompt evaluation dataset?",
    "Why would prompt chaining be useful?",
    "How can multimodal prompts be optimized for cost?"
  ],

  commonMistakes: [
    "Using vague instructions such as 'analyze this'.",
    "Failing to identify the relevant evidence.",
    "Not defining what to do when information is missing.",
    "Treating model confidence as a calibrated probability.",
    "Allowing external document text to override application instructions.",
    "Sending unnecessarily large visual inputs.",
    "Ignoring structured output validation.",
    "Failing to version multimodal prompts.",
    "Evaluating only a few examples.",
    "Ignoring latency and cost."
  ],

  summary: [
    "Multimodal prompting combines instructions with multiple forms of evidence.",
    "Good prompts explicitly define tasks, evidence, constraints, output formats, and fallback behavior.",
    "Visual grounding helps keep responses connected to supplied evidence.",
    "Observation and interpretation should be distinguished.",
    "Structured outputs make multimodal applications easier to validate.",
    "Large multimodal inputs require context engineering.",
    "Prompt chaining can make complex multimodal workflows more observable.",
    "External multimodal content should be treated as untrusted data.",
    "Multimodal prompts require systematic evaluation and regression testing."
  ],

  keyTakeaways: [
    "A multimodal prompt is an application contract, not merely a sentence.",
    "Explicit evidence boundaries improve reliability.",
    "Structured outputs make visual and document extraction easier to integrate.",
    "Multimodal context can be expensive and should be managed deliberately.",
    "Security must account for instructions hidden inside external content.",
    "Prompt quality should be measured using representative multimodal evaluation data."
  ],

  visualReferences: [
    {
      title: "Multimodal Prompt Anatomy",
      type: "classification",
      description:
        "Show task, evidence, constraints, output format, validation, and fallback behavior."
    },
    {
      title: "Multimodal Prompt Pipeline",
      type: "flowchart",
      description:
        "Show user input, validation, evidence selection, prompt construction, model execution, validation, and response."
    },
    {
      title: "Observation vs Interpretation",
      type: "diagram",
      description:
        "Show raw visual evidence flowing through observation before interpretation."
    }
  ]
};

export default lesson4;