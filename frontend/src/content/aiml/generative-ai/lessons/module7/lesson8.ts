export const lesson8 = {
  id: "lesson8",
  moduleId: "module7",
  title: "RAG Evaluation",
  subtitle: "Measure retrieval quality, answer quality, and failure cases separately",
  description:
    "Learn how to evaluate a RAG system systematically by separating retrieval quality, context quality, grounding, answer quality, latency, cost, and failure analysis.",
  difficulty: "Intermediate",
  estimatedTime: "25–30 minutes",

  learningObjectives: [
    "Explain why RAG evaluation must be decomposed into multiple stages.",
    "Evaluate retrieval quality independently from generation quality.",
    "Understand Precision@k and Recall@k for retrieval.",
    "Understand answer-level evaluation.",
    "Design a golden evaluation dataset.",
    "Identify retrieval, context, grounding, and generation failures.",
    "Measure latency and cost alongside quality.",
    "Design a continuous RAG evaluation workflow."
  ],

  sections: [
    {
      title: "Why RAG Evaluation Is Different",
      content: `
A RAG application has multiple stages.

Therefore:

Poor Answer
    ↓
Does not automatically mean
    ↓
Poor Language Model

The failure could come from:

- document ingestion
- chunking
- embeddings
- retrieval
- filtering
- reranking
- context construction
- grounding
- generation
- output validation

A useful evaluation system measures these stages separately.
      `
    },

    {
      title: "Evaluation Layers",
      content: `
A practical RAG evaluation hierarchy is:

LEVEL 1
Data Quality

LEVEL 2
Retrieval Quality

LEVEL 3
Context Quality

LEVEL 4
Grounding Quality

LEVEL 5
Answer Quality

LEVEL 6
System Quality

System quality includes:

- latency
- throughput
- cost
- reliability
- failure rate

This layered approach makes debugging much easier.
      `
    },

    {
      title: "Golden Evaluation Dataset",
      content: `
A golden dataset contains representative questions with expected evidence and expected answer characteristics.

Example:

{
  "question": "What is the attendance requirement?",
  "expectedSources": [
    "attendance-policy.pdf"
  ],
  "expectedAnswer": "Students must maintain the required attendance percentage."
}

A strong dataset should include:

- easy questions
- difficult questions
- ambiguous questions
- questions requiring multiple chunks
- questions with no answer
- questions with conflicting sources
- questions across document versions
- edge cases

The dataset becomes a stable benchmark for regression testing.
      `
    },

    {
      title: "Retrieval Evaluation",
      content: `
Retrieval asks:

"Did the system retrieve the right evidence?"

Suppose the expected relevant documents are:

A, B

Retrieved top-5:

A, C, D, E, F

Then:

Relevant retrieved = 1
Retrieved = 5

Precision@5:

1 / 5 = 0.20

Recall depends on the total number of relevant items available.

If two relevant documents exist and only A was retrieved:

Recall = 1 / 2 = 0.50

These metrics evaluate retrieval independently from the language model.
      `
    },

    {
      title: "Precision@k",
      content: `
Precision@k measures how many of the top-k retrieved items are relevant.

Formula:

Precision@k =
Relevant Retrieved Items in Top-k
---------------------------------
k

Example:

Top 5 results:

1. Relevant
2. Relevant
3. Irrelevant
4. Irrelevant
5. Irrelevant

Precision@5:

2 / 5 = 0.40

Higher precision means the retrieved set contains a larger proportion of relevant items.
      `
    },

    {
      title: "Recall@k",
      content: `
Recall@k measures how much of the relevant information was retrieved.

Formula:

Recall@k =
Relevant Retrieved Items
------------------------
Total Relevant Items

Example:

There are 4 relevant chunks.

The top-k retrieval returns 3 of them.

Recall:

3 / 4 = 0.75

A system may therefore have:

High precision + low recall

or:

Low precision + high recall.

Both characteristics matter.
      `
    },

    {
      title: "Context Quality",
      content: `
Even if retrieval returns relevant chunks, context construction can fail.

Problems include:

- duplicate information
- missing critical evidence
- excessive irrelevant text
- bad ordering
- broken chunk boundaries
- conflicting versions
- excessive context length

Therefore evaluate:

Retrieved Evidence
        ↓
Context Actually Sent to LLM

These are not always identical.
      `
    },

    {
      title: "Grounding Evaluation",
      content: `
Grounding evaluation asks:

"Are the generated claims supported by the retrieved evidence?"

Example:

Evidence:
"Registration closes on Friday."

Answer:
"Registration closes on Friday at 5 PM."

The second statement contains additional unsupported information.

Grounding evaluation can therefore classify claims as:

SUPPORTED
PARTIALLY_SUPPORTED
UNSUPPORTED

This helps identify hallucination-like behavior within a grounded application.
      `
    },

    {
      title: "Answer Quality",
      content: `
Answer evaluation can consider:

1. Correctness
2. Relevance
3. Completeness
4. Groundedness
5. Clarity
6. Format compliance

A response can be:

Correct but incomplete.

Relevant but unsupported.

Well-written but incorrect.

Therefore "good answer" is not a single dimension.
      `
    },

    {
      title: "Reference-Based Evaluation",
      content: `
If an expected answer is available, the generated response can be compared with the reference.

However, exact string matching is usually insufficient.

Two answers may use different wording while expressing the same meaning.

Therefore evaluation can consider:

- semantic similarity
- factual correctness
- required facts
- citation support
- task completion

Reference answers are useful, but they should not be treated as the only evaluation method.
      `
    },

    {
      title: "Human Evaluation",
      content: `
Human reviewers can evaluate dimensions that are difficult to measure automatically.

A reviewer may score:

- correctness
- usefulness
- completeness
- citation quality
- groundedness
- clarity

Human evaluation is especially valuable for building and validating the first golden dataset.

However, human evaluation can be:

- expensive
- slow
- inconsistent

Therefore many production systems combine human evaluation with automated evaluation.
      `
    },

    {
      title: "LLM-Based Evaluation",
      content: `
Another approach is to use a language model as an evaluator.

For example:

Evaluator Input:
Question
Retrieved Evidence
Generated Answer

Evaluator Output:

{
  "grounded": true,
  "complete": false,
  "reason": "The answer omits the required deadline."
}

This can scale evaluation, but the evaluator itself must be validated.

An evaluator can also make mistakes or develop biases.

Therefore LLM-as-judge should be treated as an evaluation component rather than absolute truth.
      `
    },

    {
      title: "Failure Taxonomy",
      content: `
A useful RAG failure taxonomy is:

INGESTION FAILURE
The source document was not processed correctly.

CHUNKING FAILURE
Important information was split incorrectly.

EMBEDDING FAILURE
Semantic representation was weak or mismatched.

RETRIEVAL FAILURE
Relevant evidence was not retrieved.

FILTERING FAILURE
Correct evidence was excluded.

RANKING FAILURE
Relevant evidence was retrieved but ranked too low.

CONTEXT FAILURE
Useful evidence was lost or poorly organized.

GROUNDING FAILURE
The answer contains unsupported claims.

GENERATION FAILURE
The model misinterpreted or incorrectly synthesized evidence.

VALIDATION FAILURE
The application failed to detect the problem.
      `
    },

    {
      title: "Debugging RAG with Evaluation",
      content: `
Suppose users report incorrect answers.

Do not immediately change the prompt.

Instead:

Question
  ↓
Was the correct document indexed?
  ↓
Was the correct chunk created?
  ↓
Was the relevant chunk retrieved?
  ↓
Was it ranked highly enough?
  ↓
Was it included in context?
  ↓
Did the model use the evidence?
  ↓
Was the final answer validated?

This turns debugging into a measurable engineering process.
      `
    },

    {
      title: "Latency Evaluation",
      content: `
RAG adds processing stages.

A simplified latency model is:

T_total =
T_query
+
T_embedding
+
T_retrieval
+
T_reranking
+
T_prompt
+
T_generation
+
T_validation

The system should measure more than average latency.

Useful percentiles include:

P50
P95
P99

For example:

P50 = typical request latency
P95 = latency experienced by 95% of requests
P99 = latency experienced by 99% of requests

Tail latency is important for user experience.
      `
    },

    {
      title: "Cost Evaluation",
      content: `
RAG cost can come from:

- embedding generation
- vector database operations
- reranking
- LLM input tokens
- LLM output tokens
- evaluation
- storage
- infrastructure

A simplified cost model is:

C_total =
C_embedding
+
C_retrieval
+
C_reranking
+
C_input
+
C_output
+
C_infrastructure

Optimization should therefore consider both quality and cost.
      `
    },

    {
      title: "Regression Testing",
      content: `
Once a golden dataset exists, every significant system change can be evaluated against it.

Example changes:

- new embedding model
- new chunking strategy
- different top-k
- new reranker
- prompt modification
- model change
- metadata filtering change

The pipeline becomes:

Change
 ↓
Run Evaluation Dataset
 ↓
Compare Metrics
 ↓
Detect Regression
 ↓
Accept / Reject Change

This turns RAG development into an engineering lifecycle rather than trial-and-error prompting.
      `
    },

    {
      title: "Continuous RAG Evaluation",
      content: `
A mature system continuously evaluates:

Quality
Latency
Cost
Failures
User feedback

A production loop can be:

Production Requests
      ↓
Sampling / Logging
      ↓
Evaluation Dataset
      ↓
Automated Evaluation
      ↓
Human Review
      ↓
Failure Analysis
      ↓
System Improvement
      ↓
Regression Test
      ↓
Deployment

This creates a feedback loop for continuous improvement.
      `
    }
  ],

  architecture: [
    {
      title: "Multi-Layer RAG Evaluation Architecture",
      task: "Design an evaluation architecture that measures retrieval, context, grounding, answer quality, latency, and cost separately.",
      requirements: [
        "Create a golden dataset.",
        "Track retrieval metrics.",
        "Track answer metrics.",
        "Track latency.",
        "Track cost.",
        "Store failure categories."
      ]
    },
    {
      title: "RAG Debugging Decision Tree",
      task: "Create a decision tree that identifies the failed pipeline stage from an incorrect answer."
    }
  ],

  formulas: [
    {
      name: "Precision@k",
      formula: "Precision@k = Relevant Retrieved Items / k",
      explanation: "Measures the proportion of top-k retrieved items that are relevant."
    },
    {
      name: "Recall@k",
      formula: "Recall@k = Relevant Retrieved Items / Total Relevant Items",
      explanation: "Measures how much of the relevant information was retrieved."
    },
    {
      name: "F1 Score",
      formula: "F1 = 2PR / (P + R)",
      explanation: "Combines precision and recall into one harmonic-mean metric."
    },
    {
      name: "Total Latency",
      formula: "T_total = T_query + T_embedding + T_retrieval + T_reranking + T_generation + T_validation",
      explanation: "Approximate decomposition of end-to-end RAG latency."
    },
    {
      name: "Unsupported Claim Rate",
      formula: "UCR = Unsupported Claims / Total Generated Claims",
      explanation: "Measures how many generated claims lack supporting evidence."
    }
  ],

  codeExamples: [
    {
      title: "Precision@k",
      language: "python",
      code: `def precision_at_k(retrieved, relevant, k):
    top_k = retrieved[:k]

    relevant_count = sum(
        1 for item in top_k
        if item in relevant
    )

    return relevant_count / k if k else 0.0


retrieved = ["A", "B", "C", "D", "E"]
relevant = {"A", "C"}

print(precision_at_k(retrieved, relevant, 5))`
    },

    {
      title: "Recall@k",
      language: "python",
      code: `def recall_at_k(retrieved, relevant, k):
    if not relevant:
        return 0.0

    top_k = set(retrieved[:k])
    relevant_retrieved = len(top_k.intersection(relevant))

    return relevant_retrieved / len(relevant)


retrieved = ["A", "B", "C", "D", "E"]
relevant = {"A", "C", "F"}

print(recall_at_k(retrieved, relevant, 5))`
    },

    {
      title: "Simple Evaluation Record",
      language: "typescript",
      code: `type RAGEvaluation = {
  question: string;
  expectedSources: string[];
  retrievedSources: string[];
  answer: string;
  grounded: boolean;
  complete: boolean;
  latencyMs: number;
  cost?: number;
  failureType?: string;
};`
    }
  ],

  exercises: [
    "Why should retrieval and generation be evaluated separately?",
    "Calculate Precision@5 for a retrieval result containing 3 relevant items.",
    "Calculate Recall@5 when 4 of 6 relevant items were retrieved.",
    "Explain why exact string matching is insufficient for answer evaluation.",
    "Design a golden dataset for a university knowledge assistant.",
    "List five RAG failure categories.",
    "Explain why P95 latency can be more useful than average latency.",
    "Explain why a change in embedding model should trigger regression testing."
  ],

  codingExercises: [
    {
      title: "Build Retrieval Metrics",
      task: "Implement Precision@k and Recall@k for a toy retrieval dataset."
    },
    {
      title: "Build a Golden Dataset Runner",
      task: "Create a Python script that runs a list of questions through a RAG pipeline and stores retrieval and answer results."
    },
    {
      title: "Create a Failure Classifier",
      task: "Create a simple function that classifies evaluation failures as retrieval, context, grounding, generation, or validation failures."
    },
    {
      title: "Latency Logger",
      task: "Measure query processing, retrieval, generation, and total latency separately."
    }
  ],

  architectureExercises: [
    "Design a RAG evaluation dashboard.",
    "Design a golden dataset for an academic assistant.",
    "Design a regression-testing pipeline for embedding-model changes.",
    "Design an evaluation architecture that combines automated and human evaluation.",
    "Design a production feedback loop from user reports to regression tests."
  ],

  comparisons: [
    {
      topic: "Retrieval Evaluation vs Answer Evaluation",
      points: [
        "Retrieval evaluation asks whether relevant evidence was found.",
        "Answer evaluation asks whether the generated response is useful and correct.",
        "A system can have strong retrieval but weak generation.",
        "A strong generator cannot compensate for consistently missing evidence."
      ]
    },
    {
      topic: "Automated vs Human Evaluation",
      points: [
        "Automated evaluation scales efficiently.",
        "Human evaluation can capture nuanced quality judgments.",
        "Automated evaluators can make errors.",
        "Human evaluation can be expensive and slower.",
        "Production systems can combine both approaches."
      ]
    }
  ],

  commonMistakes: [
    "Evaluating only the final answer.",
    "Using one metric for the entire RAG system.",
    "Ignoring retrieval quality.",
    "Using only exact string matching.",
    "Never testing insufficient-evidence questions.",
    "Ignoring latency and cost.",
    "Changing prompts without regression testing.",
    "Treating LLM-as-judge results as absolute truth.",
    "Not maintaining a stable golden dataset."
  ],

  interviewQuestions: [
    "How do you evaluate a RAG system?",
    "What is Precision@k?",
    "What is Recall@k?",
    "Why should retrieval and generation be evaluated separately?",
    "What is a golden dataset?",
    "What is grounding evaluation?",
    "What are common RAG failure categories?",
    "Why are P95 and P99 latency useful?",
    "How would you detect a retrieval regression?",
    "How would you combine automated and human evaluation?"
  ],

  summary: `
RAG evaluation must be decomposed into multiple layers.

The system should evaluate:

Data
→ Retrieval
→ Context
→ Grounding
→ Answer
→ Latency
→ Cost

A golden dataset provides a stable benchmark, while retrieval metrics such as Precision@k and Recall@k help isolate retrieval quality.

Production RAG systems should continuously monitor quality and operational metrics and use regression testing whenever important system components change.
  `,

  keyTakeaways: [
    "RAG evaluation should be multi-layered.",
    "Retrieval quality and answer quality are different measurements.",
    "Precision@k measures relevance within the retrieved set.",
    "Recall@k measures how much relevant evidence was found.",
    "Golden datasets support repeatable evaluation.",
    "Grounding evaluation checks whether claims are supported.",
    "Latency and cost are also production-quality dimensions.",
    "Failure taxonomies make debugging systematic.",
    "Regression testing protects against quality degradation.",
    "Continuous evaluation turns RAG improvement into an engineering process."
  ],

  visualReferences: [
    "RAG evaluation pyramid",
    "Precision@k and Recall@k diagram",
    "RAG failure taxonomy tree",
    "RAG debugging decision tree",
    "Golden dataset evaluation workflow",
    "Continuous RAG evaluation lifecycle"
  ]
};

export default lesson8;