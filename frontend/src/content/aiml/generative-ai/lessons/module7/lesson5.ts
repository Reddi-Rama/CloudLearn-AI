const lesson5 = {
  id: "lesson5",
  moduleId: "module7",

  title: "Retrieval and Generation",

  subtitle:
    "Connect retrieval, context construction, language-model generation, provenance, and response validation into a complete RAG workflow.",

  description:
    "Learn how retrieved evidence becomes model context, how generation should be grounded in that evidence, how citations and provenance are preserved, and how response validation helps reduce unsupported answers.",

  difficulty: "Intermediate",

  estimatedTime: "40 minutes",

  learningObjectives: [
    "Understand the complete retrieval-to-generation pipeline.",
    "Understand query processing and retrieval.",
    "Understand top-k candidate selection.",
    "Understand context assembly.",
    "Understand context ordering.",
    "Understand grounding.",
    "Understand citation and provenance handling.",
    "Understand response validation.",
    "Understand insufficient-evidence handling.",
    "Design a complete RAG response pipeline."
  ],

  sections: [
    {
      id: "complete-pipeline",
      title: "1. Complete Retrieval and Generation Pipeline",

      diagram: [
        "User Question",
        "↓",
        "Query Processing",
        "↓",
        "Query Embedding",
        "↓",
        "Retrieval",
        "↓",
        "Candidate Results",
        "↓",
        "Filtering / Reranking",
        "↓",
        "Context Assembly",
        "↓",
        "Prompt Construction",
        "↓",
        "LLM Generation",
        "↓",
        "Response Validation",
        "↓",
        "Citations / Provenance",
        "↓",
        "Final Answer"
      ],

      content: [
        "RAG is not simply vector search followed by an LLM.",

        "A complete system must transform the user question into a retrieval request, select useful evidence, construct context, instruct the model to use that evidence, generate a response, and validate the result.",

        "Each stage can introduce failure, so the complete pipeline should be evaluated as a system."
      ]
    },

    {
      id: "query-processing",
      title: "2. Query Processing",

      content: [
        "The user's question is the starting point for retrieval.",

        "A raw question may be ambiguous, conversational, or poorly suited for direct retrieval.",

        "Query processing can therefore include normalization, rewriting, decomposition, or clarification."
      ],

      examples: [
        {
          userQuery: "What about the attendance thing?",
          retrievalQuery:
            "What is the minimum attendance requirement for students?"
        },
        {
          userQuery: "Tell me the rule for exams and what happens if I miss one.",
          retrievalQuery:
            "What are examination attendance rules and the consequences of missing an examination?"
        }
      ]
    },

    {
      id: "retrieval",
      title: "3. Retrieval",

      content: [
        "Retrieval selects candidate pieces of knowledge that may help answer the question.",

        "The retrieval layer may use vector search, keyword search, hybrid search, metadata filters, or multiple retrieval strategies."
      ],

      diagram: [
        "Query",
        "↓",
        "Search",
        "├── Semantic Search",
        "├── Keyword Search",
        "├── Metadata Filtering",
        "└── Hybrid Retrieval",
        "↓",
        "Candidate Set"
      ],

      formula: [
        "Top-k retrieval = select the k highest-scoring candidates."
      ]
    },

    {
      id: "reranking",
      title: "4. Candidate Filtering and Reranking",

      content: [
        "The first retrieval stage may produce more candidates than the language model should receive.",

        "A reranking stage can reorder candidates according to a more detailed relevance model.",

        "Metadata filtering can remove candidates that the user is not authorized to access."
      ],

      diagram: [
        "Initial Retrieval",
        "↓",
        "Top 20 Candidates",
        "↓",
        "Metadata Filter",
        "↓",
        "Reranker",
        "↓",
        "Top 5 Evidence Chunks"
      ]
    },

    {
      id: "context",
      title: "5. Context Assembly",

      content: [
        "Retrieved chunks must be converted into a coherent context that the language model can use.",

        "Context assembly determines which evidence is included, how it is ordered, and what metadata is shown."
      ],

      diagram: [
        "Retrieved Chunk 1",
        "Retrieved Chunk 2",
        "Retrieved Chunk 3",
        "↓",
        "Deduplication",
        "↓",
        "Ordering",
        "↓",
        "Context Formatting",
        "↓",
        "Model Context"
      ],

      principles: [
        "Remove duplicate evidence.",
        "Preserve source information.",
        "Group related chunks.",
        "Keep enough context for interpretation.",
        "Avoid unnecessary content.",
        "Respect model context limits."
      ]
    },

    {
      id: "context-order",
      title: "6. Context Ordering",

      content: [
        "The order of retrieved information can influence how effectively the model uses it.",

        "Important evidence should be presented clearly and with enough surrounding context.",

        "Ordering strategies can include relevance order, document order, section order, chronological order, or grouped-source order."
      ],

      strategies: [
        "Highest relevance first.",
        "Original document order.",
        "Grouped by document.",
        "Grouped by topic.",
        "Chronological order.",
        "Hybrid relevance + structure ordering."
      ]
    },

    {
      id: "grounding",
      title: "7. Grounded Generation",

      content: [
        "Grounded generation means that the answer is produced using the retrieved evidence rather than relying only on the model's internal knowledge.",

        "A grounded prompt should clearly distinguish retrieved evidence from user instructions.",

        "The model should be instructed not to invent information that is unsupported by the retrieved evidence."
      ],

      promptExample: `Use the following retrieved evidence to answer the question.

EVIDENCE:
{{retrieved_context}}

QUESTION:
{{user_question}}

Answer using only information supported by the evidence.
If the evidence is insufficient, clearly say that the available evidence is insufficient.`,

      principles: [
        "Separate evidence from instructions.",
        "Preserve source identity.",
        "Require evidence-based answers.",
        "Allow abstention when evidence is insufficient."
      ]
    },

    {
      id: "insufficient",
      title: "8. Insufficient Evidence",

      content: [
        "A reliable RAG system must be able to recognize when retrieved evidence does not adequately support an answer.",

        "Forcing the model to answer every question can increase unsupported responses.",

        "Abstention is therefore an important part of reliable retrieval systems."
      ],

      decisionTree: [
        "Question",
        "↓",
        "Retrieve Evidence",
        "↓",
        "Enough Relevant Evidence?",
        "├── Yes → Generate Answer",
        "└── No → Abstain / Ask Clarifying Question"
      ]
    },

    {
      id: "citations",
      title: "9. Citations and Provenance",

      content: [
        "Provenance records where retrieved information came from.",

        "A citation can include a document name, page number, section, URL, record identifier, or another source reference.",

        "Provenance makes answers easier to inspect and can help users verify important information."
      ],

      codeExamples: [
        {
          title: "Evidence Record",
          language: "typescript",
          code: `type Evidence = {
  chunkId: string;
  documentId: string;
  text: string;
  source: string;
  page?: number;
  section?: string;
  score?: number;
};`
        }
      ],

      diagram: [
        "Retrieved Chunk",
        "↓",
        "Evidence Metadata",
        "├── Document",
        "├── Page",
        "├── Section",
        "└── Chunk ID",
        "↓",
        "Generated Answer",
        "↓",
        "Citation"
      ]
    },

    {
      id: "claim-evidence",
      title: "10. Claim-to-Evidence Relationship",

      content: [
        "A stronger RAG system can conceptually connect answer claims to evidence.",

        "Instead of treating the entire retrieved context as a single undifferentiated block, the application can track which evidence supports which claim."
      ],

      diagram: [
        "Answer Claim A",
        "↓",
        "Evidence Chunk 1",
        "",
        "Answer Claim B",
        "↓",
        "Evidence Chunk 2",
        "",
        "Answer Claim C",
        "↓",
        "Evidence Chunk 3"
      ],

      benefits: [
        "Improves traceability.",
        "Supports citations.",
        "Makes evaluation easier.",
        "Helps detect unsupported claims."
      ]
    },

    {
      id: "response-validation",
      title: "11. Response Validation",

      content: [
        "Generation is not necessarily the final step.",

        "The application can validate the response for structure, evidence usage, required fields, citation presence, or unsupported claims."
      ],

      validationLayers: [
        "Schema Validation",
        "Citation Validation",
        "Evidence Coverage",
        "Safety Validation",
        "Business Rule Validation",
        "Answer Completeness"
      ],

      codeExamples: [
        {
          title: "Simple Response Validation",
          language: "python",
          code: `def validate_response(answer, evidence):
    problems = []

    if not answer.strip():
        problems.append("Empty answer.")

    if not evidence:
        problems.append("No evidence available.")

    return problems


answer = "The attendance requirement is 75%."

evidence = [
    {
        "source": "attendance-policy.pdf",
        "page": 3
    }
]

print(validate_response(answer, evidence))`
        }
      ]
    },

    {
      id: "context-budget",
      title: "12. Context Budget",

      content: [
        "Language models have finite context windows.",

        "Sending every retrieved document to the model can increase latency and cost while reducing the signal-to-noise ratio.",

        "Context construction therefore becomes an optimization problem."
      ],

      formula: [
        "Context Budget = maximum usable tokens available for evidence and instructions."
      ],

      tradeoffs: [
        "More evidence can increase coverage.",
        "Too much evidence can introduce noise.",
        "Too little evidence can cause missing context.",
        "Longer context can increase cost and latency."
      ]
    },

    {
      id: "generation",
      title: "13. Generation",

      content: [
        "After context construction, the language model receives instructions, the user question, and the retrieved evidence.",

        "The model then generates a response using its learned language capabilities together with the supplied context.",

        "The retrieval system does not replace the language model. It provides additional information that the model can use during generation."
      ],

      diagram: [
        "System Instructions",
        "+",
        "Retrieved Evidence",
        "+",
        "User Question",
        "↓",
        "LLM",
        "↓",
        "Generated Answer"
      ]
    },

    {
      id: "answer-handling",
      title: "14. Answer Handling",

      content: [
        "A production application should decide what happens after generation.",

        "Possible outcomes include returning the answer, requesting regeneration, asking for clarification, returning an insufficient-evidence message, or escalating to another workflow."
      ],

      decisionTree: [
        "Generated Response",
        "↓",
        "Validation",
        "├── Valid → Return Answer",
        "├── Missing Evidence → Regenerate / Abstain",
        "├── Invalid Format → Repair / Regenerate",
        "└── Safety / Policy Failure → Block or Escalate"
      ]
    },

    {
      id: "failure-modes",
      title: "15. Retrieval and Generation Failure Modes",

      points: [
        "The wrong documents are retrieved.",
        "Relevant evidence is ranked too low.",
        "Duplicate chunks dominate the context.",
        "Context is too large.",
        "Important evidence is omitted.",
        "The model ignores retrieved evidence.",
        "The answer contains unsupported claims.",
        "Citations do not correspond to claims.",
        "The source document is outdated.",
        "The retrieved evidence conflicts.",
        "The system answers despite insufficient evidence."
      ]
    },

    {
      id: "complete-example",
      title: "16. Complete RAG Example",

      architecture: [
        "User",
        "↓",
        "Application API",
        "↓",
        "Query Processor",
        "↓",
        "Retriever",
        "↓",
        "Vector / Keyword Search",
        "↓",
        "Metadata Filter",
        "↓",
        "Reranker",
        "↓",
        "Context Builder",
        "↓",
        "Prompt Builder",
        "↓",
        "LLM",
        "↓",
        "Response Validator",
        "↓",
        "Citation Builder",
        "↓",
        "User"
      ],

      content: [
        "This architecture shows that RAG is a complete application workflow rather than a single database lookup.",

        "Each stage has a separate responsibility and can be independently measured."
      ]
    }
  ],

  architecture: {
    title: "Production Retrieval and Generation Architecture",

    layers: [
      "User Interface",
      "Application API",
      "Query Processing",
      "Retrieval",
      "Filtering",
      "Reranking",
      "Context Construction",
      "Prompt Construction",
      "LLM Generation",
      "Response Validation",
      "Citation / Provenance",
      "Final Response"
    ]
  },

  mathIntuition: [
    {
      concept: "Top-k Retrieval",
      formula: "Return k highest-scoring candidates.",
      explanation:
        "Controls the number of evidence candidates passed to later stages."
    },
    {
      concept: "Precision@k",
      formula: "Relevant Retrieved / k",
      explanation:
        "Measures how much of the retrieved set is relevant."
    },
    {
      concept: "Recall@k",
      formula: "Relevant Retrieved / Total Relevant",
      explanation:
        "Measures how much relevant evidence was successfully retrieved."
    },
    {
      concept: "Context Budget",
      formula: "Available Context = Model Limit - Instructions - User Input - Reserved Output",
      explanation:
        "Only part of the model context can be allocated to retrieved evidence."
    }
  ],

  codeExamples: [
    {
      title: "Simplified RAG Pipeline",
      language: "python",
      code: `def rag_pipeline(question, retriever, model):
    retrieved = retriever.search(
        question,
        top_k=5
    )

    context = "\\n\\n".join(
        item["text"]
        for item in retrieved
    )

    prompt = f"""
Use the evidence below to answer the question.

Evidence:
{context}

Question:
{question}

If the evidence is insufficient, say so.
"""

    answer = model.generate(prompt)

    return {
        "answer": answer,
        "sources": [
            item["source"]
            for item in retrieved
        ]
    }`
    }
  ],

  exercises: [
    "Explain the complete retrieval-to-generation pipeline.",
    "Why is context construction necessary?",
    "What is grounded generation?",
    "Why should a RAG system support insufficient-evidence handling?",
    "What is provenance?",
    "Why are citations useful?",
    "What is response validation?",
    "Explain the context-budget trade-off.",
    "Describe the role of reranking.",
    "Design a complete RAG answer workflow."
  ],

  codingExercises: [
    "Build a simple retrieval pipeline.",
    "Create a context builder.",
    "Create an evidence record structure.",
    "Add source metadata to retrieved results.",
    "Implement a basic response validator.",
    "Create a simple citation builder.",
    "Implement insufficient-evidence handling."
  ],

  architectureExercises: [
    "Design a complete RAG architecture.",
    "Design a retrieval and reranking pipeline.",
    "Design a provenance system.",
    "Design a context-budget strategy.",
    "Design a response-validation layer.",
    "Design an abstention workflow for insufficient evidence."
  ],

  comparisonTables: [
    {
      title: "Retrieval vs Generation",
      columns: [
        "Retrieval",
        "Generation"
      ],
      rows: [
        [
          "Finds relevant evidence",
          "Produces natural-language response"
        ],
        [
          "Search-oriented",
          "Language-model-oriented"
        ],
        [
          "Evaluated with retrieval metrics",
          "Evaluated with answer metrics"
        ],
        [
          "Can return documents",
          "Uses retrieved evidence"
        ]
      ]
    },
    {
      title: "Grounded vs Ungrounded Generation",
      columns: [
        "Grounded",
        "Ungrounded"
      ],
      rows: [
        [
          "Uses supplied evidence",
          "Primarily relies on model knowledge"
        ],
        [
          "Can provide provenance",
          "Usually lacks direct source traceability"
        ],
        [
          "Supports evidence validation",
          "Harder to verify"
        ]
      ]
    }
  ],

  commonMistakes: [
    "Treating retrieval as the entire RAG system.",
    "Sending all retrieved documents directly to the model.",
    "Ignoring context ordering.",
    "Failing to preserve provenance.",
    "Forcing answers when evidence is insufficient.",
    "Ignoring outdated documents.",
    "Assuming retrieved information is automatically correct.",
    "Skipping response validation.",
    "Using citations that do not correspond to the generated answer."
  ],

  interviewQuestions: [
    "What happens after retrieval in a RAG system?",
    "What is context construction?",
    "What is grounded generation?",
    "Why is provenance important?",
    "What is response validation?",
    "Why should a RAG system support abstention?",
    "What is reranking?",
    "How does context size affect a RAG application?",
    "How would you design citations for a RAG system?"
  ],

  summary: [
    "Retrieval finds candidate evidence.",
    "Filtering and reranking improve candidate quality.",
    "Context construction selects and organizes evidence.",
    "Grounded generation instructs the model to use retrieved information.",
    "Provenance allows generated claims to be traced to sources.",
    "Response validation checks whether the generated answer satisfies application requirements.",
    "Reliable RAG systems should handle insufficient or conflicting evidence."
  ],

  keyTakeaways: [
    "RAG is a complete retrieval-to-generation pipeline.",
    "Retrieval quality and generation quality are separate engineering concerns.",
    "Context construction is a critical intermediate stage.",
    "Grounding requires explicit evidence handling.",
    "Citations and provenance improve traceability.",
    "A reliable system must know when its evidence is insufficient."
  ],

  visualReferences: [
    {
      title: "Complete RAG Pipeline",
      type: "architecture",
      description:
        "Question → retrieval → filtering → context → LLM → validation → answer."
    },
    {
      title: "Grounded Generation",
      type: "diagram",
      description:
        "Retrieved evidence is supplied to the model as the basis for generation."
    },
    {
      title: "Citation Flow",
      type: "diagram",
      description:
        "Answer claims connect back to retrieved evidence and source metadata."
    },
    {
      title: "Insufficient Evidence Decision Tree",
      type: "flowchart",
      description:
        "The system either answers from sufficient evidence or abstains/escalates."
    }
  ]
};

export default lesson5;