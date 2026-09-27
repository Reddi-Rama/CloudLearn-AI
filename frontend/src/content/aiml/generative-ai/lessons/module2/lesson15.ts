const lesson15 = {
  id: "lesson15",
  moduleId: "module2",
  lessonNumber: 15,

  title: "LLM Limitations, Failure Modes & Evaluation",

  subtitle:
    "Understand where large language models fail, why failures happen, how to evaluate them, and how application engineers can build reliable systems around them.",

  description:
    "Large language models can generate fluent and useful outputs while still making factual, reasoning, retrieval, formatting, and reliability errors. This lesson develops a practical framework for understanding failure modes, designing evaluations, measuring performance, and improving LLM reliability.",

  estimatedTime: "4–5 hours",

  difficulty: "Advanced",

  learningObjectives: [
    "Understand the major limitations of large language models.",
    "Understand hallucination and factuality failures.",
    "Understand reasoning and arithmetic limitations.",
    "Understand context-related failures.",
    "Understand instruction-following failures.",
    "Understand knowledge and temporal limitations.",
    "Understand bias and representation problems.",
    "Understand prompt sensitivity.",
    "Understand output-format failures.",
    "Understand retrieval-related failures.",
    "Understand tool-use failures.",
    "Understand latency and cost constraints.",
    "Understand LLM evaluation methodology.",
    "Understand automatic and human evaluation.",
    "Understand task-specific evaluation metrics.",
    "Understand robustness testing.",
    "Understand regression testing.",
    "Understand reliability engineering for LLM applications."
  ],

  sections: [
    {
      heading: "1. Why LLM Evaluation Matters",

      content: [
        "A language model can produce fluent text without producing a correct answer.",
        "Therefore, grammatical quality and factual correctness must be evaluated separately.",
        "An LLM application should be evaluated against the actual task it is expected to perform.",
        "Evaluation is not a single final test. It is an ongoing process throughout development and deployment."
      ],

      classificationTree: [
        "LLM Evaluation",
        "├── Correctness",
        "├── Relevance",
        "├── Groundedness",
        "├── Instruction following",
        "├── Safety",
        "├── Robustness",
        "├── Consistency",
        "├── Latency",
        "└── Cost"
      ]
    },

    {
      heading: "2. Major LLM Failure Categories",

      classificationTree: [
        "LLM Failures",
        "├── Knowledge failures",
        "│   ├── Missing knowledge",
        "│   └── Outdated knowledge",
        "├── Generation failures",
        "│   ├── Hallucination",
        "│   └── Inconsistency",
        "├── Reasoning failures",
        "│   ├── Arithmetic",
        "│   ├── Multi-step reasoning",
        "│   └── Constraint errors",
        "├── Context failures",
        "│   ├── Missing information",
        "│   └── Long-context problems",
        "├── Instruction failures",
        "│   └── Incorrect task interpretation",
        "└── System failures",
        "    ├── Tool errors",
        "    ├── Retrieval errors",
        "    └── Application integration errors"
      ]
    },

    {
      heading: "3. Hallucination",

      content: [
        "Hallucination refers to generated content that is presented as meaningful or factual but is unsupported, incorrect, or fabricated.",
        "A model can generate a confident-sounding answer even when it does not have sufficient evidence.",
        "Hallucination is therefore a reliability problem rather than merely a writing-quality problem."
      ],

      table: {
        headers: ["Failure", "Example"],
        rows: [
          ["Fabricated fact", "Inventing a nonexistent event"],
          ["Fabricated citation", "Providing a source that does not support the claim"],
          ["False entity", "Inventing a person, paper, or product"],
          ["Unsupported detail", "Adding details not present in the source"],
          ["Incorrect calculation", "Producing an incorrect numerical result"]
        ]
      }
    },

    {
      heading: "4. Why Hallucinations Can Occur",

      content: [
        "Autoregressive language models are optimized to predict likely continuations rather than to guarantee truth.",
        "The model generates a probability distribution over possible next tokens.",
        "A fluent continuation can therefore be generated even when the underlying factual claim is unsupported.",
        "The problem can be reduced in some applications through retrieval, tools, structured validation, constrained generation, and careful prompting, but no single technique guarantees correctness."
      ],

      formulas: [
        "P(x_t | x_<t)"
      ],

      contentAfterFormula: [
        "The next-token probability objective is not itself a formal truth-verification objective."
      ]
    },

    {
      heading: "5. Factuality vs Fluency",

      comparisonTables: [
        {
          title: "Fluency and Factuality",
          headers: ["Property", "Question"],
          rows: [
            ["Fluency", "Does the output read naturally?"],
            ["Relevance", "Does it address the request?"],
            ["Factuality", "Are factual claims correct?"],
            ["Groundedness", "Are claims supported by provided evidence?"],
            ["Completeness", "Are important required points covered?"]
          ]
        }
      ]
    },

    {
      heading: "6. Knowledge Cutoff and Changing Information",

      content: [
        "A trained model does not automatically know information that appeared after its relevant training data.",
        "Applications involving current information may therefore require external data sources, retrieval systems, APIs, or other tools.",
        "Even when a model knows a topic, details that change over time should be verified against current sources when accuracy matters."
      ],

      process: [
        "User asks about changing information",
        "↓",
        "Model-only response may be insufficient",
        "↓",
        "Retrieve current source / use tool",
        "↓",
        "Ground response in current information"
      ]
    },

    {
      heading: "7. Reasoning Limitations",

      content: [
        "LLMs can solve many reasoning problems but can also fail on tasks involving multiple dependent steps.",
        "Errors in an intermediate step can propagate into the final answer.",
        "Performance can vary with task structure, prompting, model capability, and available tools."
      ],

      classificationTree: [
        "Reasoning Challenges",
        "├── Multi-step problems",
        "├── Arithmetic",
        "├── Logical constraints",
        "├── State tracking",
        "├── Long chains of dependencies",
        "└── Ambiguous requirements"
      ]
    },

    {
      heading: "8. Arithmetic and Tool Use",

      content: [
        "A language model may generate a plausible arithmetic answer without performing exact symbolic computation.",
        "For applications requiring reliable numerical calculations, an external calculator, programming environment, or specialized tool can be used.",
        "This separates language generation from exact computation."
      ],

      process: [
        "Natural-language problem",
        "↓",
        "LLM identifies required computation",
        "↓",
        "External calculator/tool",
        "↓",
        "Verified result",
        "↓",
        "LLM explains result"
      ]
    },

    {
      heading: "9. Context Limitations",

      content: [
        "The model can only directly process the information included in its active context.",
        "Important information can be lost through truncation, poor retrieval, excessive context, or incorrect context construction.",
        "Long context also creates additional computational and memory requirements."
      ]
    },

    {
      heading: "10. Instruction-Following Failures",

      content: [
        "A model may misunderstand ambiguous instructions, ignore constraints, or produce an output in an unexpected format.",
        "Instruction-following quality should therefore be evaluated using representative examples rather than assumed from a few demonstrations."
      ],

      table: {
        headers: ["Failure", "Example"],
        rows: [
          ["Missing requirement", "Required field omitted"],
          ["Format violation", "JSON replaced with prose"],
          ["Constraint violation", "Requested length exceeded"],
          ["Task interpretation error", "Wrong operation performed"],
          ["Priority confusion", "Less important instruction followed instead"]
        ]
      }
    },

    {
      heading: "11. Structured Output Failures",

      content: [
        "Applications often need machine-readable outputs such as JSON.",
        "A model may produce invalid syntax, missing fields, incorrect types, or additional text.",
        "Production systems should validate generated structured data rather than assuming that valid-looking output is guaranteed."
      ],

      process: [
        "LLM generation",
        "↓",
        "Parse output",
        "↓",
        "Schema validation",
        "├── Valid → Continue",
        "└── Invalid → Retry / repair / reject"
      ]
    },

    {
      heading: "12. Retrieval Failures",

      content: [
        "Retrieval-Augmented Generation introduces another source of failure: the retrieval system may return irrelevant, incomplete, duplicated, or misleading information.",
        "A model cannot reliably answer from evidence that was never retrieved.",
        "RAG evaluation should therefore separate retrieval quality from generation quality."
      ],

      classificationTree: [
        "RAG Failure",
        "├── Retrieval failure",
        "│   ├── Wrong documents",
        "│   ├── Missing documents",
        "│   └── Poor ranking",
        "└── Generation failure",
        "    ├── Misreading evidence",
        "    ├── Unsupported claim",
        "    └── Incorrect synthesis"
      ]
    },

    {
      heading: "13. Tool-Use Failures",

      content: [
        "LLM applications can use external tools such as search systems, databases, calculators, APIs, and code execution environments.",
        "Tool-enabled systems introduce additional failure points.",
        "The model may select the wrong tool, provide invalid arguments, misunderstand the result, or fail to handle a tool error."
      ],

      table: {
        headers: ["Stage", "Potential failure"],
        rows: [
          ["Tool selection", "Wrong tool chosen"],
          ["Arguments", "Invalid or incomplete parameters"],
          ["Execution", "Tool returns an error"],
          ["Interpretation", "Result misunderstood"],
          ["Final response", "Tool result incorrectly represented"]
        ]
      }
    },

    {
      heading: "14. Prompt Sensitivity",

      content: [
        "Small changes in wording, formatting, examples, or ordering can sometimes change model behavior.",
        "This means an application should test prompts using representative variations rather than assuming that one successful example proves reliability."
      ],

      process: [
        "Prompt version A",
        "↓",
        "Evaluate test set",
        "↓",
        "Prompt version B",
        "↓",
        "Evaluate same test set",
        "↓",
        "Compare behavior"
      ]
    },

    {
      heading: "15. Non-Determinism",

      content: [
        "Sampling-based generation can produce different outputs for the same input.",
        "This can be useful for creative applications but can complicate reproducibility and evaluation.",
        "Evaluation systems should account for generation settings and, when appropriate, repeated trials."
      ],

      table: {
        headers: ["Generation behavior", "Implication"],
        rows: [
          ["Deterministic configuration", "More reproducible outputs"],
          ["Sampling", "Potentially different outputs"],
          ["Higher randomness", "Greater output variation"],
          ["Repeated evaluation", "Can reveal consistency"]
        ]
      }
    },

    {
      heading: "16. Bias and Representation",

      content: [
        "Models learn patterns from their training data.",
        "If training data contains uneven representation, stereotypes, or problematic associations, model outputs can reflect those patterns.",
        "Evaluation should therefore consider relevant demographic, linguistic, cultural, and domain-specific cases when appropriate to the application."
      ]
    },

    {
      heading: "17. Safety and Reliability",

      content: [
        "Safety evaluation and task-quality evaluation are related but distinct.",
        "A system can produce an accurate answer for a task while still failing an important safety requirement.",
        "Production systems should therefore evaluate both task performance and applicable safety constraints."
      ],

      classificationTree: [
        "LLM Quality",
        "├── Task quality",
        "│   ├── Correctness",
        "│   └── Relevance",
        "└── System reliability",
        "    ├── Safety",
        "    ├── Robustness",
        "    └── Operational stability"
      ]
    },

    {
      heading: "18. Latency Limitations",

      content: [
        "Large models can require substantial computation.",
        "Long prompts can increase processing time, while autoregressive generation requires repeated decoding steps.",
        "Applications must therefore consider latency requirements when selecting models and designing prompts."
      ],

      formulas: [
        "End-to-end latency ≈ preprocessing + prompt processing + generation + tool/retrieval latency"
      ]
    },

    {
      heading: "19. Cost Limitations",

      content: [
        "LLM applications can incur costs associated with model inference, token processing, retrieval, storage, and external tools.",
        "Long prompts and long outputs can increase token usage.",
        "Application design should therefore treat token consumption as an engineering resource."
      ],

      table: {
        headers: ["Factor", "Potential effect"],
        rows: [
          ["Input tokens", "More processing"],
          ["Output tokens", "More generation"],
          ["Model size", "Potentially greater compute requirement"],
          ["Repeated calls", "Higher total usage"],
          ["Tool calls", "Additional service cost"]
        ]
      }
    },

    {
      heading: "20. Evaluation Dimensions",

      content: [
        "A useful evaluation framework defines separate dimensions rather than reducing every result to one number.",
        "The dimensions should reflect the application's actual requirements."
      ],

      classificationTree: [
        "Evaluation",
        "├── Correctness",
        "├── Relevance",
        "├── Groundedness",
        "├── Completeness",
        "├── Format compliance",
        "├── Robustness",
        "├── Safety",
        "├── Latency",
        "└── Cost"
      ]
    },

    {
      heading: "21. Golden Test Sets",

      content: [
        "A golden test set is a curated collection of representative evaluation examples with known expectations or reference answers.",
        "The same test set can be used to compare model versions, prompts, retrieval strategies, or application changes.",
        "The test set should contain both ordinary and difficult cases."
      ],

      process: [
        "Collect representative cases",
        "↓",
        "Define expected behavior",
        "↓",
        "Run system",
        "↓",
        "Evaluate",
        "↓",
        "Store results",
        "↓",
        "Compare future versions"
      ]
    },

    {
      heading: "22. Automatic Evaluation",

      content: [
        "Some outputs can be evaluated automatically using exact matching, numerical metrics, schemas, reference comparisons, or specialized evaluators.",
        "Automatic evaluation is useful for large test sets but may not capture every aspect of quality."
      ],

      table: {
        headers: ["Task type", "Possible metric"],
        rows: [
          ["Classification", "Accuracy / F1"],
          ["Extraction", "Precision / recall"],
          ["Structured output", "Schema validity"],
          ["Generation", "Task-specific similarity or evaluation"],
          ["Retrieval", "Precision / recall / ranking metrics"],
          ["Code", "Tests / execution results"]
        ]
      }
    },

    {
      heading: "23. Human Evaluation",

      content: [
        "Human evaluation can assess qualities that are difficult to measure automatically, such as usefulness, clarity, factual adequacy, and adherence to nuanced requirements.",
        "Human evaluation requires clear criteria and consistent evaluation procedures."
      ],

      comparisonTables: [
        {
          title: "Automatic vs Human Evaluation",
          headers: ["Property", "Automatic", "Human"],
          rows: [
            ["Scale", "High", "Lower"],
            ["Speed", "Fast", "Slower"],
            ["Cost", "Usually lower per example", "Higher"],
            ["Nuanced judgment", "Limited", "Strong"],
            ["Consistency", "Can be high if metric is stable", "Requires evaluator guidelines"]
          ]
        }
      ]
    },

    {
      heading: "24. LLM-as-Judge",

      content: [
        "A language model can sometimes be used to evaluate another model's outputs according to a defined rubric.",
        "This can provide scalable evaluation for dimensions that are difficult to measure with simple exact-match metrics.",
        "However, evaluator models can have biases, inconsistencies, and blind spots, so judge-based evaluation should itself be validated."
      ]
    },

    {
      heading: "25. Reference-Based vs Reference-Free Evaluation",

      comparisonTables: [
        {
          title: "Evaluation Styles",
          headers: ["Approach", "Description"],
          rows: [
            ["Reference-based", "Compare output against a known reference"],
            ["Reference-free", "Evaluate using criteria without one exact answer"],
            ["Grounded evaluation", "Check output against supplied evidence"],
            ["Execution-based", "Run generated result and test behavior"]
          ]
        }
      ]
    },

    {
      heading: "26. Retrieval Evaluation",

      content: [
        "For RAG systems, retrieval quality should be evaluated independently from answer generation.",
        "Relevant documents should be retrieved consistently for representative queries.",
        "Useful retrieval metrics include precision, recall, ranking quality, and retrieval hit rates depending on the task."
      ],

      formulas: [
        "Precision = relevant retrieved / retrieved",
        "Recall = relevant retrieved / all relevant"
      ]
    },

    {
      heading: "27. Groundedness",

      content: [
        "Groundedness measures whether generated claims are supported by the provided evidence.",
        "A response can be fluent and relevant while still containing claims that are not supported by retrieved documents."
      ],

      process: [
        "Retrieved evidence",
        "↓",
        "Generated claims",
        "↓",
        "Claim-evidence comparison",
        "├── Supported",
        "└── Unsupported"
      ]
    },

    {
      heading: "28. Robustness Testing",

      content: [
        "Robustness testing checks whether small or realistic changes to inputs cause inappropriate changes in behavior.",
        "Examples include paraphrases, reordered information, formatting variations, incomplete inputs, and edge cases."
      ],

      classificationTree: [
        "Robustness Tests",
        "├── Paraphrase",
        "├── Formatting variation",
        "├── Input length variation",
        "├── Missing information",
        "├── Ambiguity",
        "└── Adversarial / edge cases"
      ]
    },

    {
      heading: "29. Regression Testing",

      content: [
        "A regression occurs when a change intended to improve one part of a system causes another previously working behavior to deteriorate.",
        "LLM applications should rerun established test cases whenever prompts, models, retrieval systems, tools, or preprocessing pipelines change."
      ],

      process: [
        "Existing version",
        "↓",
        "Run evaluation suite",
        "↓",
        "Change model/prompt/system",
        "↓",
        "Run same suite",
        "↓",
        "Compare",
        "↓",
        "Accept / investigate regression"
      ]
    },

    {
      heading: "30. Error Analysis",

      content: [
        "A single aggregate score cannot explain why a model failed.",
        "Error analysis categorizes failures so that engineers can identify appropriate improvements.",
        "For example, a poor RAG answer may be caused by retrieval failure rather than generation failure."
      ],

      table: {
        headers: ["Observed failure", "Possible root cause"],
        rows: [
          ["Wrong factual answer", "Knowledge or generation problem"],
          ["Missing evidence", "Retrieval problem"],
          ["Invalid JSON", "Formatting/generation problem"],
          ["Slow response", "Model/context/tool latency"],
          ["Wrong calculation", "Need for external computation"],
          ["Wrong tool", "Tool-selection problem"]
        ]
      }
    },

    {
      heading: "31. Evaluation Pipeline",

      process: [
        "Define task",
        "↓",
        "Define success criteria",
        "↓",
        "Create test set",
        "↓",
        "Run system",
        "↓",
        "Calculate metrics",
        "↓",
        "Analyze failures",
        "↓",
        "Improve system",
        "↓",
        "Regression test",
        "↓",
        "Deploy"
      ]
    },

    {
      heading: "32. Reliability Engineering for LLMs",

      content: [
        "Reliable LLM applications usually combine the model with additional engineering controls.",
        "Useful controls can include retrieval, tool verification, schemas, validation, retries, monitoring, logging, test suites, and human review where appropriate.",
        "The goal is to design the complete system so that a single model error does not automatically become an application failure."
      ],

      classificationTree: [
        "Reliable LLM Application",
        "├── Model",
        "├── Prompt",
        "├── Retrieval",
        "├── Tools",
        "├── Validation",
        "├── Monitoring",
        "├── Evaluation",
        "└── Recovery mechanisms"
      ]
    },

    {
      heading: "33. Defense in Depth",

      content: [
        "A robust application can use multiple independent checks rather than relying on one mechanism.",
        "For example, retrieval can provide evidence, structured output can enforce a schema, application code can validate fields, and tests can monitor regressions."
      ],

      process: [
        "User request",
        "↓",
        "LLM",
        "↓",
        "Schema validation",
        "↓",
        "Business-rule validation",
        "↓",
        "Evidence / tool verification",
        "↓",
        "Final response"
      ]
    },

    {
      heading: "34. Evaluation Is Application-Specific",

      content: [
        "There is no single universal metric that completely describes LLM quality.",
        "A coding assistant, document summarizer, customer-support system, and RAG research assistant require different evaluation criteria.",
        "The evaluation framework should therefore begin with the intended task and failure costs."
      ]
    },

    {
      heading: "35. Complete LLM Reliability Mental Model",

      classificationTree: [
        "Input",
        "↓",
        "Prompt + Context",
        "↓",
        "Model",
        "↓",
        "Generation",
        "↓",
        "Validation",
        "↓",
        "Evidence / Tool Checks",
        "↓",
        "Application Rules",
        "↓",
        "Output",
        "↓",
        "Monitoring + Evaluation",
        "↓",
        "Continuous Improvement"
      ]
    },

    {
      heading: "36. Common Misconceptions",

      content: [
        "Fluent text is not proof of factual correctness.",
        "A high benchmark score does not guarantee success on a particular application.",
        "A larger context window does not guarantee perfect use of every token.",
        "RAG does not automatically eliminate hallucination.",
        "An LLM judge is not automatically an objective evaluator.",
        "One evaluation metric cannot represent every quality dimension.",
        "Prompt improvements should still be regression tested.",
        "A model failure and an application failure are not always the same thing."
      ]
    },

    {
      heading: "37. Interview Questions",

      content: [
        "What is hallucination?",
        "Why can an LLM generate fluent but incorrect information?",
        "What is groundedness?",
        "How is factuality different from fluency?",
        "Why can external tools improve numerical reliability?",
        "What is a golden test set?",
        "What is regression testing for LLM applications?",
        "What is the difference between automatic and human evaluation?",
        "What is LLM-as-a-judge?",
        "How should RAG retrieval quality be evaluated?",
        "What is robustness testing?",
        "Why should retrieval and generation failures be analyzed separately?",
        "What is defense in depth?",
        "Why is evaluation application-specific?"
      ]
    }
  ],

  codeExamples: [
    {
      title: "Simple Structured Output Validation",
      language: "python",
      code: `import json

text = '{"name": "Alex", "score": 92}'

try:
    data = json.loads(text)

    required = ["name", "score"]

    if all(field in data for field in required):
        print("Valid structure")
    else:
        print("Missing required field")

except json.JSONDecodeError:
    print("Invalid JSON")`
    },

    {
      title: "Simple Retrieval Precision and Recall",
      language: "python",
      code: `retrieved = {"doc1", "doc2", "doc3"}
relevant = {"doc2", "doc3", "doc4", "doc5"}

true_retrieved = retrieved & relevant

precision = len(true_retrieved) / len(retrieved)
recall = len(true_retrieved) / len(relevant)

print("Precision:", precision)
print("Recall:", recall)`
    },

    {
      title: "Regression Test Structure",
      language: "python",
      code: `tests = [
    {
        "input": "What is binary search?",
        "expected_keyword": "sorted"
    },
    {
        "input": "What is a stack?",
        "expected_keyword": "LIFO"
    }
]

outputs = {
    "What is binary search?":
        "Binary search works efficiently on sorted data.",
    "What is a stack?":
        "A stack follows the LIFO principle."
}

for test in tests:
    output = outputs[test["input"]]

    passed = (
        test["expected_keyword"].lower()
        in output.lower()
    )

    print(test["input"], ":", passed)`
    },

    {
      title: "Context Budget Check",
      language: "python",
      code: `context_limit = 8192
input_tokens = 6500
output_budget = 2000

if input_tokens + output_budget <= context_limit:
    print("Context fits")
else:
    print("Context exceeds budget")`
    }
  ],

  mathIntuition: [
    {
      concept: "Precision",
      intuition:
        "Precision asks what fraction of retrieved items were actually relevant.",
      equation:
        "Precision = relevant retrieved / retrieved"
    },
    {
      concept: "Recall",
      intuition:
        "Recall asks what fraction of all relevant items were successfully retrieved.",
      equation:
        "Recall = relevant retrieved / all relevant"
    },
    {
      concept: "F1 score",
      intuition:
        "F1 combines precision and recall using their harmonic mean.",
      equation:
        "F1 = 2PR / (P + R)"
    },
    {
      concept: "Reliability",
      intuition:
        "LLM reliability is a system property influenced by the model, context, tools, validation, and application logic.",
      equation:
        "System reliability ≠ model quality alone"
    }
  ],

  exercises: [
    {
      question:
        "Why can an LLM produce fluent but incorrect answers?",
      answer:
        "Its generation objective models likely token continuations rather than directly guaranteeing factual truth."
    },
    {
      question:
        "What is hallucination?",
      answer:
        "Unsupported, incorrect, or fabricated generated information presented as meaningful or factual."
    },
    {
      question:
        "Why is RAG not a complete solution to hallucination?",
      answer:
        "Retrieval can return poor evidence, and the model can still misinterpret or generate unsupported claims from the retrieved context."
    },
    {
      question:
        "What is groundedness?",
      answer:
        "The degree to which generated claims are supported by the available evidence."
    },
    {
      question:
        "What is a golden test set?",
      answer:
        "A curated set of representative evaluation cases used to compare system versions consistently."
    },
    {
      question:
        "Why is regression testing important?",
      answer:
        "Changes to models, prompts, retrieval, or tools can improve one behavior while unintentionally breaking another."
    },
    {
      question:
        "What is the difference between precision and recall in retrieval?",
      answer:
        "Precision measures the fraction of retrieved items that are relevant, while recall measures the fraction of all relevant items that were retrieved."
    },
    {
      question:
        "Why should an LLM application use validation?",
      answer:
        "Validation can catch malformed, unsupported, or business-rule-invalid outputs before they reach downstream systems."
    }
  ],

  codingExercises: [
    {
      title: "JSON Output Validator",
      difficulty: "Easy",
      task:
        "Create a validator that checks whether an LLM-generated JSON object contains required fields and expected data types."
    },
    {
      title: "Retrieval Metrics",
      difficulty: "Medium",
      task:
        "Implement precision, recall, and F1 calculations for a retrieval system."
    },
    {
      title: "Golden Test Runner",
      difficulty: "Medium",
      task:
        "Build a Python program that runs a collection of test cases and records pass/fail results."
    },
    {
      title: "Regression Comparison",
      difficulty: "Advanced",
      task:
        "Compare outputs from two versions of an LLM application and report which test cases changed."
    },
    {
      title: "Context Budget Validator",
      difficulty: "Easy",
      task:
        "Create a function that verifies whether prompt, retrieval, history, and generation tokens fit within a configured context budget."
    },
    {
      title: "Failure Categorizer",
      difficulty: "Advanced",
      task:
        "Create a small evaluation program that categorizes failures into retrieval, factuality, formatting, instruction-following, and tool-use categories."
    }
  ],

  architectureExercises: [
    {
      title: "LLM Evaluation Pipeline",
      task:
        "Draw an evaluation system containing test data, model execution, automatic metrics, human review, error analysis, and regression testing."
    },
    {
      title: "Reliable RAG System",
      task:
        "Design a RAG pipeline containing retrieval, generation, citation/evidence checking, schema validation, and monitoring."
    },
    {
      title: "Tool-Using LLM",
      task:
        "Draw a system showing model tool selection, argument validation, tool execution, result validation, and final generation."
    },
    {
      title: "Defense-in-Depth Architecture",
      task:
        "Design multiple validation layers that prevent one model error from becoming an application-level failure."
    }
  ],

  comparisonTables: [
    {
      title: "Major Failure Types",
      headers: ["Failure", "Typical cause"],
      rows: [
        ["Hallucination", "Unsupported generation"],
        ["Retrieval failure", "Poor evidence selection"],
        ["Format failure", "Invalid structured output"],
        ["Reasoning failure", "Incorrect multi-step computation"],
        ["Tool failure", "Incorrect selection or arguments"],
        ["Context failure", "Missing or poorly managed information"]
      ]
    },
    {
      title: "Evaluation Approaches",
      headers: ["Method", "Strength"],
      rows: [
        ["Exact match", "Simple and objective"],
        ["Task metrics", "Useful for measurable tasks"],
        ["Human evaluation", "Handles nuanced quality"],
        ["LLM-as-judge", "Scalable qualitative evaluation"],
        ["Execution-based", "Tests actual behavior"],
        ["Grounded evaluation", "Checks evidence support"]
      ]
    }
  ],

  commonMistakes: [
    "Assuming fluent output is factual.",
    "Using only one evaluation metric.",
    "Evaluating only easy examples.",
    "Ignoring retrieval quality in RAG systems.",
    "Assuming RAG completely eliminates hallucination.",
    "Accepting generated JSON without validation.",
    "Changing prompts without regression testing.",
    "Using an evaluator model without validating the evaluation methodology.",
    "Ignoring latency and cost.",
    "Treating model quality and complete application reliability as the same thing."
  ],

  summary: [
    "LLMs can produce fluent outputs that are incorrect or unsupported.",
    "Hallucination is an important reliability failure.",
    "Reasoning, arithmetic, context handling, instruction following, retrieval, and tool use can all fail.",
    "Longer context does not guarantee better information use.",
    "RAG can improve grounding but introduces retrieval-specific failure modes.",
    "Structured outputs should be validated programmatically.",
    "Evaluation should use representative test sets and task-specific criteria.",
    "Automatic, human, execution-based, and judge-based evaluation each have different strengths.",
    "Regression testing is essential when models or application components change.",
    "Reliable LLM systems use multiple layers of validation and monitoring.",
    "LLM evaluation is application-specific rather than reducible to one universal score."
  ],

  keyTakeaways: [
    "Fluency is not the same as factuality.",
    "Hallucination is a system reliability problem.",
    "Retrieval quality and generation quality should be evaluated separately.",
    "Use tools for tasks requiring exact computation when appropriate.",
    "Validate structured outputs before using them downstream.",
    "Build golden test sets.",
    "Run regression tests after changes.",
    "Evaluate correctness, relevance, groundedness, robustness, safety, latency, and cost according to the application.",
    "Reliable LLM applications require engineering beyond the base model."
  ],

  visualReferences: [
    {
      title: "HELM: Holistic Evaluation of Language Models",
      url: "https://crfm.stanford.edu/helm/",
      description:
        "Framework for evaluating language models across multiple dimensions."
    },
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      description:
        "Original Transformer architecture."
    },
    {
      title: "Hugging Face Evaluate",
      url: "https://huggingface.co/docs/evaluate/",
      description:
        "Documentation for evaluating machine-learning models."
    },
    {
      title: "Hugging Face Transformers",
      url: "https://huggingface.co/docs/transformers/",
      description:
        "Transformer implementation and evaluation ecosystem."
    }
  ]
};

export default lesson15;
