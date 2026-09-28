const lesson = {
  id: "lesson10",
  moduleId: "module4",
  title: "RAG Evaluation, Quality & Failure Analysis",
  subtitle: "Learn how to systematically measure retrieval quality, grounded generation, answer correctness, latency, cost, and end-to-end RAG reliability.",

  overview: `
A RAG application should not be considered reliable simply because it can
produce fluent answers.

A production RAG system must be evaluated at multiple levels.

The complete evaluation chain is:

DATA QUALITY
    ↓
CHUNK QUALITY
    ↓
RETRIEVAL QUALITY
    ↓
RANKING QUALITY
    ↓
CONTEXT QUALITY
    ↓
GROUNDING
    ↓
ANSWER QUALITY
    ↓
LATENCY
    ↓
COST
    ↓
USER EXPERIENCE

A useful RAG evaluation framework separates retrieval from generation.

Retrieval evaluation asks:

"Did we retrieve the right evidence?"

Generation evaluation asks:

"Did the model produce a useful answer from that evidence?"

End-to-end evaluation asks:

"Did the complete system solve the user's problem correctly?"
`,

  learningObjectives: [
    "Understand why RAG evaluation is necessary.",
    "Separate retrieval evaluation from generation evaluation.",
    "Understand Recall@k and Precision@k.",
    "Understand MRR and NDCG.",
    "Understand groundedness.",
    "Understand answer correctness.",
    "Understand relevance and completeness.",
    "Create a RAG evaluation dataset.",
    "Understand human evaluation.",
    "Understand model-based evaluation.",
    "Analyze common RAG failure modes.",
    "Measure latency and token cost.",
    "Design regression tests for RAG systems."
  ],

  prerequisites: [
    "RAG architecture",
    "Retrieval strategies",
    "Reranking",
    "Grounded generation",
    "Basic statistics"
  ],

  keyTerms: [
    {
      term: "Golden Dataset",
      definition: "A curated collection of representative questions, expected evidence, and expected behavior used for evaluation."
    },
    {
      term: "Recall@k",
      definition: "The proportion of relevant evidence retrieved within the top k results."
    },
    {
      term: "Precision@k",
      definition: "The proportion of the top k retrieved results that are relevant."
    },
    {
      term: "MRR",
      definition: "Mean Reciprocal Rank measures how highly the first relevant result appears."
    },
    {
      term: "NDCG",
      definition: "Normalized Discounted Cumulative Gain evaluates ranking quality while giving greater importance to highly ranked relevant results."
    },
    {
      term: "Groundedness",
      definition: "The degree to which generated claims are supported by retrieved evidence."
    },
    {
      term: "Faithfulness",
      definition: "Whether an answer remains consistent with the provided evidence."
    },
    {
      term: "Regression",
      definition: "A previously working behavior becoming worse after a system change."
    }
  ],

  sections: [
    {
      title: "1. Why RAG Evaluation Is Different",
      explanation: `
A traditional software function may have a deterministic expected output.

Generative AI systems are more variable.

For a RAG application, quality depends on multiple stages:

Question
 ↓
Query processing
 ↓
Retrieval
 ↓
Reranking
 ↓
Context
 ↓
LLM
 ↓
Answer

A failure at any stage can affect the final answer.

Therefore evaluating only the final response is insufficient.
`
    },

    {
      title: "2. Evaluation Layers",
      explanation: `
A strong evaluation system contains several layers.

Layer 1:
Data quality

Layer 2:
Retrieval quality

Layer 3:
Ranking quality

Layer 4:
Context quality

Layer 5:
Groundedness

Layer 6:
Answer correctness

Layer 7:
System performance

Layer 8:
User experience

This allows engineers to identify where a failure originates.
`
    },

    {
      title: "3. Golden Evaluation Dataset",
      explanation: `
Create a representative dataset containing examples such as:

Question:
"What is the attendance requirement?"

Expected evidence:
Student Handbook, page 42.

Expected answer:
"75%."

The dataset should include:

• Easy questions
• Ambiguous questions
• Multi-document questions
• Questions with no answer
• Outdated-information cases
• Security cases
• Exact identifier cases
• Long-context cases
`
    },

    {
      title: "4. Retrieval Evaluation",
      explanation: `
Retrieval evaluation asks:

Did the system retrieve the evidence needed to answer?

Important metrics include:

Recall@k
Precision@k
MRR
NDCG

These metrics evaluate ranking and retrieval independently of generation.
`
    },

    {
      title: "5. Recall@k",
      explanation: `
Recall@k measures whether relevant evidence appears within the top k results.

Suppose there are three relevant chunks:

A, B, C

Retrieved top five:

A, D, B, E, F

Relevant retrieved:
A, B

Recall:

2 / 3

Recall is especially important when missing a required document makes
answer generation impossible.
`
    },

    {
      title: "6. Precision@k",
      explanation: `
Precision@k measures how much of the retrieved set is relevant.

Suppose top 5 are:

A, B, C, D, E

Only:

A, B, D

are relevant.

Precision@5:

3 / 5

High precision reduces unnecessary context.
`
    },

    {
      title: "7. Mean Reciprocal Rank",
      explanation: `
MRR focuses on the position of the first relevant result.

If the first relevant result is ranked:

1:
Reciprocal rank = 1

2:
Reciprocal rank = 1/2

5:
Reciprocal rank = 1/5

Higher MRR indicates relevant evidence tends to appear earlier.
`
    },

    {
      title: "8. NDCG",
      explanation: `
Not every retrieved result has equal relevance.

For example:

Result 1:
Highly relevant

Result 2:
Somewhat relevant

Result 3:
Irrelevant

NDCG rewards highly relevant results appearing near the top
while accounting for graded relevance.
`
    },

    {
      title: "9. Generation Evaluation",
      explanation: `
Once retrieval is evaluated, generation can be evaluated.

Important dimensions include:

• Correctness
• Relevance
• Groundedness
• Completeness
• Clarity
• Citation quality
• Format compliance
`
    },

    {
      title: "10. Groundedness Evaluation",
      explanation: `
Question:

"Are the claims made by the model supported by the retrieved context?"

Example:

Context:
"Attendance requirement is 75%."

Answer:
"Attendance requirement is 75%."

Grounded.

Answer:
"Attendance requirement is 80%."

Not grounded.

Groundedness is specifically about evidence support.
`
    },

    {
      title: "11. Correctness vs Groundedness",
      explanation: `
An answer can be:

Correct and grounded.

Correct but not grounded.

Incorrect but grounded in a faulty source.

Incorrect and ungrounded.

Example:

Context contains an outdated policy:
"Attendance = 70%."

Model answers:
"Attendance = 70%."

The answer may be grounded in the context but still not represent
the current real-world policy.

This shows why source quality and freshness matter.
`
    },

    {
      title: "12. Human Evaluation",
      explanation: `
Human reviewers can score responses.

Example dimensions:

Correctness: 1–5
Relevance: 1–5
Groundedness: 1–5
Completeness: 1–5

Human evaluation is expensive but useful for creating high-quality
reference datasets and validating automated metrics.
`
    },

    {
      title: "13. Model-Based Evaluation",
      explanation: `
A separate model can evaluate generated answers against:

• Question
• Retrieved context
• Expected answer

This can scale evaluation.

However, model-based evaluation should itself be validated because
the evaluator can make mistakes or show systematic preferences.
`
    },

    {
      title: "14. Pairwise Evaluation",
      explanation: `
Instead of assigning absolute scores, compare two versions.

Version A:
Old retrieval system

Version B:
New retrieval system

Question:

"Which response better answers the question using the evidence?"

Pairwise evaluation can be useful when comparing system changes.
`
    },

    {
      title: "15. RAG Failure Taxonomy",
      explanation: `
Common failures include:

1. No relevant document retrieved.
2. Relevant document ranked too low.
3. Wrong document version retrieved.
4. Duplicate context.
5. Context too large.
6. Context missing important evidence.
7. Model ignores evidence.
8. Model invents unsupported information.
9. Citation mismatch.
10. Output format failure.
`
    },

    {
      title: "16. Debugging by Pipeline Stage",
      explanation: `
Wrong answer?

Do not immediately change the prompt.

Check:

1. Was the correct document ingested?
2. Was it chunked correctly?
3. Was it embedded?
4. Was it retrieved?
5. Was it ranked highly?
6. Was it included in context?
7. Did the model use it?
8. Did validation detect the problem?

This creates systematic debugging.
`
    },

    {
      title: "17. Latency Evaluation",
      explanation: `
RAG latency may include:

Query processing
+
Embedding
+
Vector search
+
Sparse search
+
Reranking
+
Prompt construction
+
LLM generation
+
Validation

Measure each component separately.

This identifies bottlenecks.
`
    },

    {
      title: "18. Cost Evaluation",
      explanation: `
Cost may depend on:

• Embedding requests
• Vector storage
• Retrieval infrastructure
• Reranking
• LLM input tokens
• LLM output tokens
• Evaluation runs

A larger context can improve answer quality but increase token cost.

Optimization therefore requires measuring both quality and cost.
`
    },

    {
      title: "19. Regression Testing",
      explanation: `
Every significant RAG change should be tested against existing examples.

Example:

Version 1:
Recall@5 = 0.82

Version 2:
Recall@5 = 0.89

But perhaps:

Groundedness decreased.

A regression suite catches unintended changes.
`
    },

    {
      title: "20. Continuous Evaluation",
      explanation: `
Production systems change.

Documents change.
Embedding models change.
Prompts change.
Retrieval settings change.
LLMs change.

Therefore evaluation should be continuous rather than performed once.
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "Precision@k",
      formula: `
Precision@k = Relevant Retrieved / k
`,
      explanation: "Measures the fraction of the top-k results that are relevant."
    },
    {
      concept: "Recall@k",
      formula: `
Recall@k = Relevant Retrieved / Total Relevant
`,
      explanation: "Measures how much of the relevant evidence was successfully retrieved."
    },
    {
      concept: "Reciprocal Rank",
      formula: `
RR = 1 / rank
`,
      explanation: "Higher-ranked relevant results receive greater scores."
    },
    {
      concept: "Mean Reciprocal Rank",
      formula: `
MRR = (1/N) Σ 1/rank_i
`,
      explanation: "Average reciprocal rank across evaluation questions."
    },
    {
      concept: "F1",
      formula: `
F1 = 2PR / (P + R)
`,
      explanation: "Balances precision and recall."
    },
    {
      concept: "Latency",
      formula: `
Total latency =
Σ stage latency
`,
      explanation: "The end-to-end latency is approximately the combined latency of sequential pipeline stages."
    }
  ],

  codeExamples: [
    {
      title: "Precision@k",
      language: "python",
      code: `
def precision_at_k(retrieved, relevant, k):
    top_k = retrieved[:k]

    if k == 0:
        return 0

    relevant_count = len(
        set(top_k) & set(relevant)
    )

    return relevant_count / k


retrieved = ["A", "B", "C", "D", "E"]
relevant = ["A", "C"]

print(precision_at_k(
    retrieved,
    relevant,
    5
))
`
    },

    {
      title: "Recall@k",
      language: "python",
      code: `
def recall_at_k(retrieved, relevant, k):
    top_k = retrieved[:k]

    if not relevant:
        return 0

    relevant_count = len(
        set(top_k) & set(relevant)
    )

    return relevant_count / len(relevant)


print(recall_at_k(
    ["A", "D", "B", "E", "F"],
    ["A", "B", "C"],
    5
))
`
    },

    {
      title: "Reciprocal Rank",
      language: "python",
      code: `
def reciprocal_rank(
    retrieved,
    relevant
):
    for index, item in enumerate(
        retrieved,
        start=1
    ):
        if item in relevant:
            return 1 / index

    return 0


print(
    reciprocal_rank(
        ["X", "A", "B"],
        {"A", "B"}
    )
)
`
    },

    {
      title: "Evaluation Record",
      language: "python",
      code: `
evaluation_case = {
    "question": "What is the attendance requirement?",
    "expected_sources": [
        "student-handbook-2026"
    ],
    "expected_answer": "75%",
    "category": "policy",
    "difficulty": "easy"
}

print(evaluation_case)
`
    },

    {
      title: "Simple Regression Test",
      language: "python",
      code: `
def assert_minimum_score(
    actual,
    expected_minimum
):
    if actual < expected_minimum:
        raise AssertionError(
            f"Score {actual} is below "
            f"required {expected_minimum}"
        )


recall_at_5 = 0.91

assert_minimum_score(
    recall_at_5,
    0.85
)

print("Evaluation passed.")
`
    }
  ],

  comparisonTables: [
    {
      title: "RAG Evaluation Metrics",
      columns: [
        "Metric",
        "Measures"
      ],
      rows: [
        ["Precision@k", "How many retrieved results are relevant"],
        ["Recall@k", "How much relevant evidence was retrieved"],
        ["MRR", "Position of first relevant result"],
        ["NDCG", "Quality of ranked results with graded relevance"],
        ["Groundedness", "Evidence support for generated claims"],
        ["Correctness", "Factual quality of answer"],
        ["Relevance", "Whether answer addresses the question"],
        ["Completeness", "Whether required information is covered"]
      ]
    },
    {
      title: "Evaluation Approaches",
      columns: [
        "Approach",
        "Strength",
        "Limitation"
      ],
      rows: [
        ["Human", "Detailed judgment", "Expensive"],
        ["Rule-based", "Fast and deterministic", "Limited semantic understanding"],
        ["Model-based", "Scalable semantic evaluation", "Evaluator can make mistakes"],
        ["Pairwise", "Useful for comparisons", "Does not provide absolute quality"],
        ["End-to-end", "Measures real user outcome", "Harder to diagnose individual stages"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "RAG Evaluation Stack",
      type: "architecture",
      description: "Data quality → retrieval → ranking → context → groundedness → answer quality → performance."
    },
    {
      title: "RAG Failure Taxonomy",
      type: "tree",
      description: "Classify failures into ingestion, retrieval, context, generation, validation, and system-performance categories."
    },
    {
      title: "Evaluation Dataset",
      type: "diagram",
      description: "Show questions, expected sources, expected answers, categories, and evaluation labels."
    },
    {
      title: "RAG Regression Testing",
      type: "flowchart",
      description: "System change → evaluation suite → metric comparison → pass/fail decision."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Build a Golden Dataset",
      task: "Create at least 20 RAG evaluation questions with expected sources and expected answers."
    },
    {
      title: "Exercise 2 — Calculate Retrieval Metrics",
      task: "Calculate Precision@k, Recall@k, and MRR for several retrieval outputs."
    },
    {
      title: "Exercise 3 — Failure Analysis",
      task: "Take ten incorrect RAG answers and classify the failure stage."
    },
    {
      title: "Exercise 4 — Human Evaluation Rubric",
      task: "Create a 1–5 scoring rubric for correctness, relevance, groundedness, and completeness."
    },
    {
      title: "Exercise 5 — Regression Suite",
      task: "Define minimum acceptable retrieval and generation metrics and create regression checks."
    }
  ],

  miniProject: {
    title: "RAG Evaluation Dashboard",
    goal: "Design a system that runs a fixed evaluation dataset against multiple RAG versions and compares quality, latency, and cost.",
    metrics: [
      "Recall@5",
      "Precision@5",
      "MRR",
      "Groundedness",
      "Correctness",
      "Latency",
      "Input tokens",
      "Output tokens",
      "Estimated cost"
    ]
  },

  interviewQuestions: [
    {
      question: "Why should retrieval and generation be evaluated separately?",
      answer: "Because a generation failure may originate from missing or incorrectly ranked evidence rather than from the language model."
    },
    {
      question: "What is Recall@k?",
      answer: "The proportion of relevant evidence retrieved within the top k results."
    },
    {
      question: "What is Precision@k?",
      answer: "The proportion of the top k retrieved results that are relevant."
    },
    {
      question: "What is MRR?",
      answer: "Mean Reciprocal Rank measures the average reciprocal position of the first relevant result."
    },
    {
      question: "What is groundedness?",
      answer: "The degree to which generated claims are supported by supplied evidence."
    },
    {
      question: "What is a golden dataset?",
      answer: "A curated evaluation set containing representative questions and expected evidence or behavior."
    },
    {
      question: "Why is continuous evaluation important?",
      answer: "RAG systems change over time through document, model, prompt, and retrieval updates."
    }
  ],

  commonMistakes: [
    "Evaluating only final answer fluency.",
    "Not creating representative test cases.",
    "Ignoring retrieval metrics.",
    "Using a single metric as the definition of quality.",
    "Never testing insufficient-context questions.",
    "Ignoring latency and cost.",
    "Changing retrieval settings without regression tests.",
    "Treating model-based evaluation as automatically correct."
  ],

  keyTakeaways: [
    "RAG evaluation must cover multiple pipeline stages.",
    "Retrieval and generation should be evaluated separately.",
    "Recall measures whether required evidence was retrieved.",
    "Precision measures how much retrieved content is relevant.",
    "MRR measures the position of the first relevant result.",
    "Groundedness measures evidence support.",
    "A golden dataset enables repeatable testing.",
    "Regression testing protects previously working behavior.",
    "Quality, latency, and cost must be considered together."
  ]
};

export default lesson;