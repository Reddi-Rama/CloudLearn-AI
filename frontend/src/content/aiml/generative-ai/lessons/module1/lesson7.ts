const lesson7 = {
  id: "lesson7",
  moduleId: "module1",
  lessonNumber: 7,

  title: "Generative AI Evaluation, Reliability & Limitations",
  subtitle:
    "Learn how to evaluate generated content, measure reliability, understand hallucinations, identify failure modes, and design trustworthy Generative AI systems.",

  description:
    "This lesson develops a complete framework for evaluating Generative AI systems. It covers quality, correctness, relevance, faithfulness, consistency, robustness, hallucination, bias, uncertainty, evaluation datasets, automated metrics, human evaluation, model-as-judge approaches, reliability engineering, monitoring, failure analysis, and practical evaluation workflows.",

  estimatedTime: "130–160 min",
  difficulty: "Intermediate",

  learningObjectives: [
    "Understand why evaluating Generative AI is difficult.",
    "Differentiate model evaluation from application evaluation.",
    "Define quality, correctness, relevance, faithfulness, consistency, and robustness.",
    "Understand hallucination and why it occurs.",
    "Understand factuality versus fluency.",
    "Understand grounded and ungrounded generation.",
    "Understand evaluation datasets.",
    "Understand reference-based and reference-free evaluation.",
    "Understand automated evaluation metrics.",
    "Understand human evaluation.",
    "Understand model-based evaluation.",
    "Understand reliability metrics.",
    "Understand failure analysis.",
    "Understand robustness testing.",
    "Understand prompt sensitivity.",
    "Understand distribution shift.",
    "Understand monitoring after deployment.",
    "Design an end-to-end evaluation framework for a Generative AI application."
  ],

  sections: [
    {
      heading: "1. Why Evaluation Matters",
      content: [
        "Generative AI systems can produce fluent and convincing outputs even when those outputs are incomplete, irrelevant, unsupported, or incorrect.",
        "Traditional software often has clearly defined expected outputs. Generative systems may have many acceptable outputs for the same input.",
        "Evaluation therefore needs to measure multiple dimensions instead of relying on a single score."
      ],
      classificationTree: [
        "Generative AI Evaluation",
        "├── Quality",
        "│   ├── Fluency",
        "│   ├── Coherence",
        "│   └── Relevance",
        "├── Correctness",
        "│   ├── Factuality",
        "│   └── Task accuracy",
        "├── Grounding",
        "│   └── Faithfulness to provided evidence",
        "├── Safety",
        "├── Robustness",
        "├── Consistency",
        "└── User usefulness"
      ]
    },

    {
      heading: "2. Model Evaluation vs Application Evaluation",
      table: [
        {
          level: "Model evaluation",
          focus: "Behavior and capabilities of the underlying model"
        },
        {
          level: "Application evaluation",
          focus: "Complete system including prompts, retrieval, tools, logic, and UI"
        }
      ],
      contentAfterTable: [
        "A model can perform well in isolation while an application built around it performs poorly because of bad retrieval, poor prompting, incorrect tool usage, or weak validation."
      ]
    },

    {
      heading: "3. What Makes Generative Evaluation Different?",
      content: [
        "There may be many acceptable responses.",
        "Outputs are often open-ended.",
        "Correctness can depend on context.",
        "Quality can involve subjective preferences.",
        "A response can be fluent but wrong.",
        "Small changes in prompts or context can change outputs.",
        "The same model can behave differently across domains."
      ]
    },

    {
      heading: "4. Evaluation Dimensions",
      classificationTree: [
        "Output Evaluation",
        "├── Correctness",
        "├── Relevance",
        "├── Completeness",
        "├── Fluency",
        "├── Coherence",
        "├── Faithfulness",
        "├── Consistency",
        "├── Robustness",
        "├── Safety",
        "└── Usefulness"
      ]
    },

    {
      heading: "5. Correctness",
      content: [
        "Correctness asks whether the output satisfies the factual or task-specific requirements.",
        "For a mathematical problem, correctness may be objectively verifiable.",
        "For an open-ended explanation, correctness can require domain-specific evaluation.",
        "Correctness should be defined according to the task rather than assumed to mean grammatical quality."
      ]
    },

    {
      heading: "6. Fluency",
      content: [
        "Fluency describes how naturally and coherently generated language reads.",
        "Fluency is useful, but it is not equivalent to factual correctness.",
        "A response can be highly fluent while containing false information."
      ]
    },

    {
      heading: "7. Relevance",
      content: [
        "Relevance asks whether the generated response addresses the user's actual request.",
        "A response can be factually correct but irrelevant if it answers a different question.",
        "Relevance is particularly important in conversational applications."
      ]
    },

    {
      heading: "8. Completeness",
      content: [
        "Completeness measures whether the response covers the important parts of the requested task.",
        "A response may contain only correct statements while still being incomplete.",
        "For example, a programming explanation may correctly describe three required steps while omitting a fourth essential step."
      ]
    },

    {
      heading: "9. Faithfulness",
      content: [
        "Faithfulness is especially important in Retrieval-Augmented Generation.",
        "A response is faithful when its claims are supported by the information supplied as evidence according to the evaluation criteria.",
        "A system can retrieve relevant documents but still produce a response that introduces unsupported claims."
      ]
    },

    {
      heading: "10. Grounding",
      content: [
        "Grounding means connecting generated output to a defined source of information or evidence.",
        "In a document question-answering application, grounding may involve retrieved document chunks.",
        "Grounding can improve reliability, but retrieval alone does not guarantee that every generated statement is supported."
      ],

      process: [
        "User question",
        "Retrieve evidence",
        "Construct context",
        "Generate response",
        "Check claims against evidence",
        "Return grounded response"
      ]
    },

    {
      heading: "11. Hallucination",
      content: [
        "A hallucination is generated content that appears plausible but is unsupported, incorrect, or fabricated relative to the task or available evidence.",
        "Hallucination is a central reliability challenge in Generative AI.",
        "The model's objective is not automatically identical to the objective of producing verified factual statements.",
        "Therefore, fluent generation should not be treated as proof of correctness."
      ]
    },

    {
      heading: "12. Why Hallucinations Can Occur",
      classificationTree: [
        "Possible Hallucination Factors",
        "├── Missing knowledge",
        "├── Ambiguous prompt",
        "├── Insufficient context",
        "├── Conflicting context",
        "├── Weak retrieval",
        "├── Model uncertainty",
        "├── Training-data limitations",
        "├── Long-context issues",
        "├── Decoding behavior",
        "└── Application design"
      ]
    },

    {
      heading: "13. Fluency vs Factuality",
      table: [
        {
          outputType: "Fluent + Correct",
          quality: "Desired"
        },
        {
          outputType: "Fluent + Incorrect",
          quality: "Dangerous failure mode"
        },
        {
          outputType: "Unclear + Correct",
          quality: "Needs improvement"
        },
        {
          outputType: "Unclear + Incorrect",
          quality: "Poor output"
        }
      ]
    },

    {
      heading: "14. The Fluent-Wrong Problem",
      content: [
        "Humans often associate confidence and fluent language with competence.",
        "Generative models can produce polished language without having verified the underlying claims.",
        "Therefore, evaluation systems should explicitly separate language quality from factual correctness."
      ]
    },

    {
      heading: "15. Reference Answers",
      content: [
        "Some evaluation tasks provide a reference answer against which a generated answer can be compared.",
        "Reference answers are useful when the task has a relatively well-defined expected output.",
        "However, open-ended tasks can have many valid responses, making direct string comparison insufficient."
      ]
    },

    {
      heading: "16. Exact Match",
      content: [
        "Exact match checks whether the generated answer exactly matches an expected answer.",
        "It can be useful for highly structured tasks but is often too strict for natural-language generation.",
        "Two answers can be semantically equivalent while using different words."
      ]
    },

    {
      heading: "17. String Similarity",
      content: [
        "String-based metrics compare textual overlap between generated and reference answers.",
        "They can provide useful signals but may not capture meaning completely.",
        "A response can use different wording and still be correct."
      ]
    },

    {
      heading: "18. Semantic Evaluation",
      content: [
        "Semantic evaluation attempts to compare meaning rather than exact wording.",
        "Embeddings can be used to measure similarity between representations.",
        "However, semantic similarity does not automatically prove factual correctness."
      ]
    },

    {
      heading: "19. Automated Metrics",
      table: [
        {
          metricType: "Exact match",
          strength: "Simple and objective for exact tasks",
          limitation: "Too strict for open-ended language"
        },
        {
          metricType: "Token overlap",
          strength: "Easy to calculate",
          limitation: "Can miss semantic equivalence"
        },
        {
          metricType: "Embedding similarity",
          strength: "Captures semantic relationships",
          limitation: "Similarity does not guarantee correctness"
        },
        {
          metricType: "Task-specific metric",
          strength: "Aligned with application objective",
          limitation: "Requires careful design"
        }
      ]
    },

    {
      heading: "20. Human Evaluation",
      content: [
        "Human evaluation is important when quality involves subjective or domain-specific judgment.",
        "Evaluators can assess correctness, helpfulness, relevance, clarity, style, and other dimensions.",
        "Human evaluation can be expensive and can introduce evaluator disagreement, so clear rubrics are important."
      ]
    },

    {
      heading: "21. Human Evaluation Rubric",
      table: [
        {
          criterion: "Correctness",
          question: "Is the response factually or task-wise correct?"
        },
        {
          criterion: "Relevance",
          question: "Does it answer the actual request?"
        },
        {
          criterion: "Completeness",
          question: "Does it cover the required information?"
        },
        {
          criterion: "Clarity",
          question: "Is it understandable?"
        },
        {
          criterion: "Grounding",
          question: "Are important claims supported by available evidence?"
        }
      ]
    },

    {
      heading: "22. Inter-Rater Agreement",
      content: [
        "When multiple evaluators assess the same outputs, they may disagree.",
        "Agreement analysis helps determine whether an evaluation rubric produces consistent judgments.",
        "High disagreement may indicate ambiguous evaluation criteria or genuinely subjective tasks."
      ]
    },

    {
      heading: "23. Model-Based Evaluation",
      content: [
        "Another approach is to use an AI model to evaluate another model's output.",
        "A judge model can score outputs according to a specified rubric.",
        "This can scale evaluation but introduces its own limitations, including judge bias, sensitivity to prompts, and imperfect understanding."
      ]
    },

    {
      heading: "24. Model-as-Judge Workflow",
      process: [
        "Input",
        "Generated response",
        "Evaluation rubric",
        "Judge model",
        "Score / explanation",
        "Aggregate results",
        "Human verification of important cases"
      ]
    },

    {
      heading: "25. Evaluation Dataset",
      content: [
        "A useful evaluation system needs representative examples.",
        "An evaluation dataset can contain user questions, expected behaviors, reference answers, relevant documents, expected tool actions, or other information required to judge the application.",
        "The dataset should cover normal cases as well as difficult and failure-prone cases."
      ],
      classificationTree: [
        "Evaluation Dataset",
        "├── Normal cases",
        "├── Edge cases",
        "├── Ambiguous cases",
        "├── Adversarial cases",
        "├── Long-context cases",
        "├── Out-of-domain cases",
        "└── Regression cases"
      ]
    },

    {
      heading: "26. Golden Dataset",
      content: [
        "A curated evaluation set can serve as a stable reference for comparing system versions.",
        "When the application changes, the same evaluation examples can be rerun to detect regressions.",
        "This creates a repeatable evaluation process."
      ]
    },

    {
      heading: "27. Regression Testing",
      content: [
        "A regression occurs when a change that was intended to improve one aspect causes another previously working behavior to degrade.",
        "Generative AI applications should therefore be evaluated after changes to prompts, models, retrieval systems, chunking, tools, or application logic."
      ],
      process: [
        "Existing evaluation set",
        "Change system",
        "Run evaluation",
        "Compare results",
        "Identify regressions",
        "Approve or revise change"
      ]
    },

    {
      heading: "28. Robustness",
      content: [
        "Robustness measures how reliably the system behaves when inputs change in reasonable ways.",
        "A robust system should not fail dramatically because of minor wording changes, formatting changes, or irrelevant context."
      ],
      classificationTree: [
        "Robustness Testing",
        "├── Rephrased prompt",
        "├── Spelling variation",
        "├── Formatting variation",
        "├── Different context order",
        "├── Longer input",
        "├── Missing optional information",
        "└── Distracting information"
      ]
    },

    {
      heading: "29. Prompt Sensitivity",
      content: [
        "Generative models can respond differently to changes in wording.",
        "Some sensitivity is expected because prompts influence model context.",
        "However, excessive sensitivity can create reliability problems for production applications."
      ],

      example: {
        promptA: "Explain recursion.",
        promptB: "Can you explain what recursion means?",
        evaluationGoal:
          "Check whether the system provides similarly useful conceptual answers."
      }
    },

    {
      heading: "30. Distribution Shift",
      content: [
        "A model or application may be evaluated on one distribution and later encounter a different distribution in production.",
        "For example, a system developed using clean short questions may later receive long, ambiguous, multilingual, or domain-specific inputs.",
        "Evaluation should therefore include realistic production-like cases."
      ]
    },

    {
      heading: "31. Edge Cases",
      content: [
        "Edge cases are inputs that occur less frequently or expose unusual behavior.",
        "They are valuable because production failures often occur outside the simplest examples used during development."
      ],
      classificationTree: [
        "Edge Cases",
        "├── Empty input",
        "├── Extremely long input",
        "├── Ambiguous input",
        "├── Unexpected format",
        "├── Missing context",
        "├── Conflicting information",
        "└── Unsupported request"
      ]
    },

    {
      heading: "32. Safety and Reliability",
      content: [
        "Safety evaluation examines whether a system behaves appropriately under problematic or risky inputs.",
        "The exact evaluation criteria depend on the application.",
        "Safety should be evaluated at the model level and the application level because application tools, data, and workflows can introduce additional risks."
      ]
    },

    {
      heading: "33. Tool-Use Evaluation",
      content: [
        "AI applications that call tools need additional evaluation.",
        "It is not enough to check the final response. The system should also evaluate whether the correct tool was selected, whether arguments were correct, whether tool results were interpreted correctly, and whether the final response accurately reflects those results."
      ],
      classificationTree: [
        "Tool Evaluation",
        "├── Tool selection",
        "├── Argument generation",
        "├── Tool execution",
        "├── Tool-result interpretation",
        "├── Error handling",
        "└── Final response"
      ]
    },

    {
      heading: "34. RAG Evaluation",
      content: [
        "Retrieval-Augmented Generation requires evaluating both retrieval and generation.",
        "A system can fail because it retrieved irrelevant information even if the language model generated a fluent response.",
        "It can also retrieve the correct information but fail to use it correctly."
      ],

      process: [
        "Question",
        "Retrieval evaluation",
        "Relevant evidence?",
        "Context construction",
        "Generation evaluation",
        "Faithful response?",
        "Final application evaluation"
      ]
    },

    {
      heading: "35. Retrieval Metrics",
      table: [
        {
          concept: "Precision",
          intuition: "How much of the retrieved information is relevant?"
        },
        {
          concept: "Recall",
          intuition: "How much of the relevant information was retrieved?"
        },
        {
          concept: "Ranking quality",
          intuition: "Are the most useful results near the top?"
        }
      ]
    },

    {
      heading: "36. Faithfulness Evaluation",
      content: [
        "For grounded generation, faithfulness asks whether generated claims can be supported by the retrieved evidence.",
        "A response may be relevant to the retrieved documents while still introducing unsupported information.",
        "Therefore, evidence-to-claim checking is an important evaluation dimension."
      ]
    },

    {
      heading: "37. Completeness in RAG",
      content: [
        "A RAG response can be faithful but incomplete.",
        "For example, the retrieved evidence may contain five important facts while the response only mentions two.",
        "Evaluation should therefore separate faithfulness from completeness."
      ]
    },

    {
      heading: "38. Reliability Metrics",
      table: [
        {
          metric: "Success rate",
          meaning: "Percentage of requests satisfying defined success criteria"
        },
        {
          metric: "Error rate",
          meaning: "Percentage of requests producing defined failures"
        },
        {
          metric: "Groundedness rate",
          meaning: "Fraction of evaluated claims supported by evidence under the chosen rubric"
        },
        {
          metric: "Format compliance",
          meaning: "Percentage of outputs satisfying required structure"
        },
        {
          metric: "Tool success rate",
          meaning: "Percentage of tool interactions completed correctly"
        }
      ]
    },

    {
      heading: "39. Reliability Is Multi-Dimensional",
      content: [
        "There is no universal single number that completely describes the reliability of a Generative AI application.",
        "A system may be highly fluent but weak on factuality, highly accurate but slow, or excellent on common cases but poor on edge cases.",
        "A useful evaluation dashboard therefore tracks multiple dimensions."
      ]
    },

    {
      heading: "40. Evaluation Matrix",
      table: [
        {
          dimension: "Correctness",
          question: "Is the answer correct?"
        },
        {
          dimension: "Relevance",
          question: "Does it answer the request?"
        },
        {
          dimension: "Completeness",
          question: "Does it cover required information?"
        },
        {
          dimension: "Faithfulness",
          question: "Is it supported by provided evidence?"
        },
        {
          dimension: "Robustness",
          question: "Does it remain reliable under reasonable variations?"
        },
        {
          dimension: "Latency",
          question: "Does it respond quickly enough?"
        },
        {
          dimension: "Cost",
          question: "Is operation economically practical?"
        }
      ]
    },

    {
      heading: "41. Error Taxonomy",
      classificationTree: [
        "Generative AI Failures",
        "├── Input failures",
        "│   ├── Ambiguous input",
        "│   └── Missing information",
        "├── Retrieval failures",
        "│   ├── Wrong document",
        "│   └── Missing evidence",
        "├── Model failures",
        "│   ├── Hallucination",
        "│   ├── Reasoning error",
        "│   └── Instruction failure",
        "├── Tool failures",
        "│   ├── Wrong tool",
        "│   └── Wrong arguments",
        "├── Output failures",
        "│   ├── Wrong format",
        "│   └── Incomplete answer",
        "└── Infrastructure failures",
        "    ├── Timeout",
        "    └── Service error"
      ]
    },

    {
      heading: "42. Root Cause Analysis",
      content: [
        "When an AI application fails, developers should investigate the cause rather than simply changing the prompt.",
        "A failure might originate from retrieval, context construction, model behavior, decoding, tool execution, output parsing, or application logic."
      ],

      process: [
        "Observe failure",
        "Capture input",
        "Inspect context",
        "Inspect retrieval",
        "Inspect tool calls",
        "Inspect model output",
        "Identify root cause",
        "Apply targeted fix",
        "Run regression evaluation"
      ]
    },

    {
      heading: "43. Observability",
      content: [
        "Observability allows engineers to understand what happened inside an AI application.",
        "Useful telemetry can include latency, token counts, model version, retrieval results, tool calls, errors, evaluation signals, and other application-specific information.",
        "Logging must be designed carefully to avoid exposing sensitive information."
      ]
    },

    {
      heading: "44. Production Monitoring",
      classificationTree: [
        "Production Monitoring",
        "├── Performance",
        "│   ├── Latency",
        "│   └── Throughput",
        "├── Cost",
        "├── Reliability",
        "│   ├── Error rate",
        "│   └── Timeout rate",
        "├── Quality",
        "│   ├── User feedback",
        "│   └── Evaluation samples",
        "└── System health"
      ]
    },

    {
      heading: "45. Online vs Offline Evaluation",
      table: [
        {
          type: "Offline evaluation",
          description: "Evaluate a fixed dataset before or during development"
        },
        {
          type: "Online evaluation",
          description: "Monitor behavior on real application traffic under appropriate privacy and governance controls"
        }
      ]
    },

    {
      heading: "46. A/B Testing",
      content: [
        "A/B testing compares different system versions under a defined experimental methodology.",
        "For Generative AI, evaluation can include user outcomes, task success, quality assessments, latency, and other application-specific metrics.",
        "Experiments need careful design because user populations and request distributions can vary."
      ]
    },

    {
      heading: "47. Human Feedback",
      content: [
        "User feedback can reveal failure modes that predefined evaluation datasets miss.",
        "Feedback should be categorized and analyzed rather than treated only as a collection of isolated complaints.",
        "The resulting examples can become new evaluation cases."
      ],
      process: [
        "Production interaction",
        "User feedback",
        "Failure categorization",
        "Add evaluation case",
        "Update system",
        "Regression test",
        "Monitor"
      ]
    },

    {
      heading: "48. Evaluation Dataset Growth",
      content: [
        "A mature AI application should continuously improve its evaluation dataset.",
        "Important failures become regression tests.",
        "This creates a feedback loop between production behavior and development."
      ],
      process: [
        "Initial evaluation set",
        "Deploy",
        "Observe failures",
        "Convert failures into test cases",
        "Improve system",
        "Rerun complete evaluation",
        "Deploy again"
      ]
    },

    {
      heading: "49. Reliability Engineering Loop",
      process: [
        "Define success",
        "Create evaluation set",
        "Measure baseline",
        "Deploy",
        "Monitor",
        "Detect failures",
        "Analyze root cause",
        "Fix",
        "Evaluate",
        "Deploy improved version"
      ]
    },

    {
      heading: "50. Evaluation of Prompt Changes",
      content: [
        "Changing a system prompt can improve one behavior while damaging another.",
        "Therefore, prompts should be treated as part of the application configuration and evaluated like code changes.",
        "A stable regression suite makes prompt iteration safer."
      ]
    },

    {
      heading: "51. Evaluation of Model Changes",
      content: [
        "Replacing one model with another can change quality, latency, cost, formatting, tool behavior, and failure patterns.",
        "Model replacement should therefore be evaluated across the complete application rather than through one example."
      ]
    },

    {
      heading: "52. Evaluation of Retrieval Changes",
      content: [
        "Changing chunk size, embedding models, ranking methods, or retrieval parameters can alter which information reaches the generative model.",
        "Retrieval changes should therefore be evaluated separately and jointly with final answer quality."
      ]
    },

    {
      heading: "53. Evaluation of Decoding Changes",
      content: [
        "Changing temperature, top-k, top-p, or other generation settings can alter output diversity and reliability.",
        "Decoding changes should be tested on representative tasks rather than assumed to be improvements."
      ]
    },

    {
      heading: "54. Evaluation Pipeline",
      classificationTree: [
        "System Version",
        "├── Prompt",
        "├── Model",
        "├── Retrieval",
        "├── Tools",
        "├── Decoding",
        "└── Application Logic",
        "",
        "Evaluation",
        "├── Correctness",
        "├── Relevance",
        "├── Grounding",
        "├── Robustness",
        "├── Latency",
        "└── Cost"
      ]
    },

    {
      heading: "55. Evaluation Scorecard",
      table: [
        {
          category: "Quality",
          examples: "Correctness, relevance, completeness"
        },
        {
          category: "Grounding",
          examples: "Faithfulness, evidence support"
        },
        {
          category: "Reliability",
          examples: "Failure rate, format compliance"
        },
        {
          category: "Robustness",
          examples: "Prompt variation, edge cases"
        },
        {
          category: "Performance",
          examples: "Latency, throughput"
        },
        {
          category: "Economics",
          examples: "Cost per request"
        }
      ]
    },

    {
      heading: "56. Example: Evaluating a College Q&A Assistant",
      content: [
        "Imagine an AI assistant that answers questions using university documents.",
        "A useful evaluation set could contain questions from course syllabi, policies, laboratory manuals, and academic procedures.",
        "Each test case can define the relevant evidence and expected behavior.",
        "The evaluation should test retrieval, grounding, correctness, completeness, and response format."
      ],

      process: [
        "Question",
        "Retrieve university document",
        "Check retrieved evidence",
        "Generate response",
        "Check factual claims",
        "Check completeness",
        "Check citation/source behavior",
        "Record score"
      ]
    },

    {
      heading: "57. Example Evaluation Table",
      table: [
        {
          question: "What topics are covered in Module 2?",
          retrieval: "Relevant",
          correctness: "Correct",
          grounding: "Supported",
          completeness: "Complete"
        },
        {
          question: "What is the assignment deadline?",
          retrieval: "Relevant",
          correctness: "Verify against source",
          grounding: "Required",
          completeness: "Required"
        },
        {
          question: "Summarize the laboratory procedure.",
          retrieval: "Multiple sections",
          correctness: "Domain review",
          grounding: "Required",
          completeness: "Important"
        }
      ]
    },

    {
      heading: "58. Limitations of Automated Evaluation",
      content: [
        "Automated metrics can be fast and scalable, but they may not capture every aspect of quality.",
        "A high similarity score does not necessarily mean that an answer is factually correct.",
        "A judge model can also make mistakes.",
        "Human evaluation remains valuable for complex or high-impact tasks."
      ]
    },

    {
      heading: "59. Evaluation Limitations",
      classificationTree: [
        "Evaluation Challenges",
        "├── Open-ended outputs",
        "├── Multiple valid answers",
        "├── Subjectivity",
        "├── Domain expertise",
        "├── Model-based evaluator bias",
        "├── Distribution shift",
        "├── Evaluation leakage",
        "└── Changing user expectations"
      ]
    },

    {
      heading: "60. The Evaluation Flywheel",
      process: [
        "Build system",
        "Create tests",
        "Measure",
        "Deploy",
        "Observe",
        "Collect failures",
        "Expand evaluation dataset",
        "Improve system",
        "Measure again"
      ]
    },

    {
      heading: "61. Common Mistakes",
      content: [
        "Mistake 1: Evaluating only whether the answer sounds good.",
        "Mistake 2: Using one metric for every task.",
        "Mistake 3: Testing only easy examples.",
        "Mistake 4: Ignoring retrieval quality in RAG.",
        "Mistake 5: Ignoring tool-call correctness.",
        "Mistake 6: Treating model-based evaluation as perfect ground truth.",
        "Mistake 7: Never adding production failures to the evaluation set.",
        "Mistake 8: Evaluating a model but not the complete application.",
        "Mistake 9: Ignoring latency and cost.",
        "Mistake 10: Changing prompts or models without regression testing.",
        "Mistake 11: Confusing fluency with factuality.",
        "Mistake 12: Assuming high semantic similarity proves correctness."
      ]
    },

    {
      heading: "62. Interview Questions",
      content: [
        "Why is Generative AI difficult to evaluate?",
        "What is the difference between correctness and fluency?",
        "What is relevance?",
        "What is completeness?",
        "What is faithfulness?",
        "What is grounding?",
        "What is hallucination?",
        "Why can hallucinations occur?",
        "What is a golden evaluation dataset?",
        "What is regression testing?",
        "What is robustness testing?",
        "What is prompt sensitivity?",
        "What is distribution shift?",
        "What is human evaluation?",
        "What is model-as-judge evaluation?",
        "What is retrieval evaluation?",
        "Why should RAG evaluate retrieval separately from generation?",
        "What is observability?",
        "What is the difference between offline and online evaluation?",
        "Why should production failures become evaluation cases?"
      ]
    }
  ],

  formulas: [
    "Success Rate = successful cases / total evaluated cases",
    "Error Rate = failed cases / total evaluated cases",
    "Precision = relevant retrieved items / retrieved items",
    "Recall = relevant retrieved items / total relevant items",
    "Similarity(a,b) = comparison function over representations"
  ],

  codeExamples: [
    {
      title: "Simple Exact Match Evaluation",
      language: "python",
      description:
        "A basic evaluator for tasks where an exact answer is appropriate.",
      code: "predictions = ['Paris', 'Delhi', 'Tokyo']\nreferences = ['Paris', 'Delhi', 'Tokyo']\n\ncorrect = sum(\n    prediction == reference\n    for prediction, reference in zip(predictions, references)\n)\n\naccuracy = correct / len(references)\n\nprint('Accuracy:', accuracy)"
    },
    {
      title: "Simple Evaluation Report",
      language: "python",
      description:
        "Build a small evaluation summary from multiple criteria.",
      code: "results = [\n    {'correct': True, 'relevant': True, 'grounded': True},\n    {'correct': True, 'relevant': True, 'grounded': False},\n    {'correct': False, 'relevant': True, 'grounded': False},\n    {'correct': True, 'relevant': True, 'grounded': True}\n]\n\nfor metric in ['correct', 'relevant', 'grounded']:\n    score = sum(item[metric] for item in results) / len(results)\n    print(metric, round(score, 2))"
    },
    {
      title: "Regression Test",
      language: "python",
      description:
        "Compare an expected result with the behavior of a new system version.",
      code: "expected = 'The model predicts the next token.'\n\nold_output = 'The model predicts the next token.'\nnew_output = 'The model generates the next token prediction.'\n\nprint('Old passed:', old_output == expected)\nprint('New exact-match passed:', new_output == expected)"
    },
    {
      title: "Simple Similarity Evaluation",
      language: "python",
      description:
        "Illustrate semantic-style comparison using vectors.",
      code: "import math\n\n\ndef cosine(a, b):\n    dot = sum(x * y for x, y in zip(a, b))\n    na = math.sqrt(sum(x * x for x in a))\n    nb = math.sqrt(sum(x * x for x in b))\n\n    if na == 0 or nb == 0:\n        return 0.0\n\n    return dot / (na * nb)\n\nreference = [0.9, 0.8, 0.1]\nprediction = [0.85, 0.75, 0.2]\n\nprint('Similarity:', cosine(reference, prediction))"
    },
    {
      title: "Failure Categorization",
      language: "python",
      description:
        "Turn individual failures into structured evaluation information.",
      code: "failures = [\n    {'type': 'retrieval', 'description': 'Wrong document retrieved'},\n    {'type': 'hallucination', 'description': 'Unsupported claim'},\n    {'type': 'format', 'description': 'Invalid JSON'},\n    {'type': 'retrieval', 'description': 'Missing relevant chunk'}\n]\n\nfrom collections import Counter\n\ncounts = Counter(item['type'] for item in failures)\n\nfor failure_type, count in counts.items():\n    print(failure_type, count)"
    }
  ],

  mathIntuition: [
    {
      concept: "Precision",
      explanation:
        "Precision asks how much of the retrieved set is actually relevant."
    },
    {
      concept: "Recall",
      explanation:
        "Recall asks how much of the relevant information was successfully retrieved."
    },
    {
      concept: "Accuracy",
      explanation:
        "Accuracy measures the fraction of evaluated cases that satisfy a defined correctness criterion."
    },
    {
      concept: "Similarity",
      explanation:
        "Similarity measures how closely two representations correspond under a chosen mathematical function."
    },
    {
      concept: "Reliability",
      explanation:
        "Reliability is multi-dimensional and should be defined using the actual success criteria of the application."
    }
  ],

  exercises: [
    {
      question:
        "Why can a fluent response still be incorrect?",
      difficulty: "Easy"
    },
    {
      question:
        "Explain correctness, relevance, completeness, and faithfulness.",
      difficulty: "Easy"
    },
    {
      question:
        "What is hallucination and why is it difficult to eliminate completely?",
      difficulty: "Medium"
    },
    {
      question:
        "Design an evaluation dataset for a university-document Q&A system.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain why RAG needs separate retrieval and generation evaluation.",
      difficulty: "Medium"
    },
    {
      question:
        "Design a robustness test suite for an AI chatbot.",
      difficulty: "Medium"
    },
    {
      question:
        "Explain the difference between offline evaluation and online monitoring.",
      difficulty: "Medium"
    },
    {
      question:
        "Design an end-to-end evaluation framework for an AI application that uses an LLM, RAG, and tools.",
      difficulty: "Hard"
    }
  ],

  codingExercises: [
    {
      title: "Build an Evaluation Framework",
      task:
        "Create a Python evaluation framework that scores generated responses across multiple criteria.",
      requirements: [
        "Create a test-case structure.",
        "Store expected behavior.",
        "Store generated output.",
        "Calculate correctness.",
        "Calculate relevance.",
        "Calculate format compliance.",
        "Generate an overall report."
      ]
    },
    {
      title: "Build a Regression Suite",
      task:
        "Create a collection of AI test cases and run them against two system versions.",
      requirements: [
        "Create at least 20 test cases.",
        "Store expected behavior.",
        "Run old-version results.",
        "Run new-version results.",
        "Detect regressions.",
        "Print failed cases."
      ]
    },
    {
      title: "Failure Analytics",
      task:
        "Create a program that categorizes AI failures and identifies the most frequent failure types.",
      requirements: [
        "Use at least six failure categories.",
        "Store at least 50 simulated failures.",
        "Count each category.",
        "Calculate percentages.",
        "Print the top failure categories."
      ]
    },
    {
      title: "RAG Evaluation Simulator",
      task:
        "Build a toy evaluation system that separately evaluates retrieval quality and final-answer quality.",
      requirements: [
        "Create questions.",
        "Create relevant document IDs.",
        "Create retrieved document IDs.",
        "Calculate simple precision and recall.",
        "Evaluate answer correctness.",
        "Print an evaluation report."
      ]
    }
  ],

  summary: [
    "Generative AI evaluation is difficult because many outputs can be valid and quality is multi-dimensional.",
    "Fluency does not guarantee factual correctness.",
    "Important evaluation dimensions include correctness, relevance, completeness, faithfulness, grounding, robustness, consistency, safety, latency, and cost.",
    "Hallucination is a major reliability problem in generative systems.",
    "Evaluation datasets should include normal cases, edge cases, difficult cases, and regression cases.",
    "Automated metrics are useful but have limitations.",
    "Human evaluation is valuable for subjective and domain-specific tasks.",
    "Model-as-judge evaluation can scale assessment but should not be treated as perfect ground truth.",
    "RAG systems should evaluate retrieval and generation separately.",
    "Tool-using systems should evaluate tool selection, arguments, execution, interpretation, and final responses.",
    "Production failures should become new regression tests.",
    "Monitoring and observability are essential after deployment.",
    "Reliable Generative AI requires continuous evaluation rather than one-time testing."
  ],

  keyTakeaways: [
    "Never equate fluent language with factual correctness.",
    "Define what success means before choosing an evaluation metric.",
    "Evaluate the complete application, not just the underlying model.",
    "Use multiple evaluation dimensions.",
    "Treat hallucination as a measurable failure mode.",
    "RAG needs retrieval evaluation as well as answer evaluation.",
    "Prompt, model, retrieval, decoding, and application changes should be regression-tested.",
    "Production monitoring creates a feedback loop for improving evaluation datasets.",
    "Reliability is an engineering process, not a single model property."
  ]
};

export default lesson7;
