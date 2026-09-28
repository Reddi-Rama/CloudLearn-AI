const lesson12 = {
  id: "lesson12",
  moduleId: "module7",
  title: "Corrective, Self-Reflective & Adaptive RAG",
  subtitle:
    "Build RAG systems that evaluate retrieval quality, correct weak evidence, and adapt their retrieval strategy",

  description:
    "This lesson explores advanced RAG systems that do more than retrieve once and generate once. You will learn how corrective retrieval, self-reflection, adaptive retrieval, confidence estimation, query reformulation, and controlled feedback loops can improve retrieval quality and reduce unsupported answers.",

  difficulty: "Advanced",
  estimatedTime: "3.5 hours",

  learningObjectives: [
    "Understand why standard single-pass RAG can fail.",
    "Explain corrective retrieval and adaptive retrieval.",
    "Understand self-reflective RAG workflows.",
    "Design retrieval quality checks before generation.",
    "Use confidence and evidence signals to control retrieval.",
    "Design bounded corrective retrieval loops.",
    "Understand the trade-off between quality, latency, and cost.",
    "Build an adaptive RAG architecture."
  ],

  sections: [
    {
      title: "Why Standard RAG Is Not Always Enough",
      content: `
A basic RAG system usually follows:

User Query
→ Retrieval
→ Context
→ Generation

This works well when the query is clear and the retrieval system returns useful evidence.

However, retrieval may fail because:

- the query is ambiguous
- terminology differs between the query and documents
- the correct document was not retrieved
- retrieved documents are irrelevant
- evidence is incomplete
- multiple sources are required
- the knowledge is time-sensitive
- metadata filters are incorrect
- the retrieval threshold is too strict
- the retrieval threshold is too loose

A production RAG system therefore needs mechanisms that can detect weak retrieval and respond appropriately.
`
    },

    {
      title: "Corrective Retrieval",
      content: `
Corrective retrieval means evaluating the first retrieval result and taking corrective action when the evidence is insufficient.

Basic workflow:

Query
↓
Initial Retrieval
↓
Evidence Quality Check
↓
Strong Evidence?
├── Yes → Generate
└── No → Correct Query
          ↓
       Retrieve Again

Possible corrective actions include:

- query rewriting
- query expansion
- removing unnecessary terms
- adding missing entities
- changing retrieval strategy
- increasing top-k
- using hybrid search
- applying another metadata filter
- searching another collection
- using an external tool
`
    },

    {
      title: "Retrieval Quality as a Control Signal",
      content: `
The retrieval stage should produce more than documents.

It can produce signals such as:

- similarity score
- lexical score
- reranker score
- number of retrieved documents
- evidence coverage
- metadata match
- source authority
- document freshness
- duplicate ratio

These signals can be combined into a retrieval-quality estimate.

For example:

Q_retrieval =
w1 × similarity
+ w2 × reranker_score
+ w3 × evidence_coverage

The weights should be determined experimentally rather than assumed to be universally correct.
`
    },

    {
      title: "Self-Reflective RAG",
      content: `
Self-reflective RAG introduces an evaluation step around retrieval or generation.

A simplified workflow is:

Query
↓
Retrieve
↓
Evaluate Evidence
↓
Retrieve Again if Necessary
↓
Generate
↓
Evaluate Answer
↓
Accept / Revise / Escalate

The reflection step should have a clear purpose.

Examples:

- Is there enough evidence?
- Does the evidence answer the question?
- Are important claims unsupported?
- Are the retrieved sources contradictory?
- Should another retrieval attempt be made?

Reflection should not become an unlimited loop.
`
    },

    {
      title: "Adaptive Retrieval",
      content: `
Adaptive retrieval means changing the retrieval strategy according to the query and current evidence.

Simple questions may need:

Query → Dense Retrieval → Answer

Complex questions may need:

Query
→ Query Classification
→ Query Transformation
→ Hybrid Retrieval
→ Reranking
→ Evidence Evaluation
→ Additional Retrieval
→ Grounded Generation

Possible routing categories:

- simple factual query
- semantic search query
- keyword-heavy query
- multi-hop query
- temporal query
- structured-data query
- domain-specific query
- insufficient-evidence query
`
    },

    {
      title: "Confidence and Evidence Thresholds",
      content: `
A system can use thresholds to decide whether generation should proceed.

For example:

if evidence_score >= threshold:
    generate_answer()
else:
    retrieve_again()

However, thresholds must be calibrated.

A threshold that is too high can produce excessive abstention.

A threshold that is too low can allow weak evidence to reach generation.

Therefore:

Quality
vs
Coverage
vs
Latency
vs
Cost

must be evaluated together.
`
    },

    {
      title: "Query Reformulation During Correction",
      content: `
Suppose the user asks:

"What was the policy introduced after the earlier rule?"

The query may be ambiguous because "earlier rule" has no explicit entity.

A corrective system can:

1. inspect retrieved evidence
2. identify missing entities
3. infer a more precise search target
4. construct a new query
5. retrieve again

Example:

Original:
"policy introduced after the earlier rule"

Rewritten:
"policy introduced after the 2022 data retention regulation"

The rewritten query should be based on available evidence rather than unsupported guessing.
`
    },

    {
      title: "Bounded Corrective Loops",
      content: `
Corrective retrieval must be bounded.

A safe architecture can define:

max_retrieval_attempts = 3

Then:

attempt 1
↓
evaluate
↓
attempt 2
↓
evaluate
↓
attempt 3
↓
final decision

Possible final states:

- grounded answer
- insufficient evidence
- clarification required
- human review
- safe fallback

Bounded loops prevent runaway latency and cost.
`
    },

    {
      title: "Mathematical Intuition",
      content: `
Let:

q = original query
R(q) = retrieval function
E = evidence quality
T = minimum evidence threshold

Then:

if E(R(q)) >= T:

    Generate(R(q))

otherwise:

    q' = Transform(q, R(q))
    R(q') = Retrieve(q')

For multiple attempts:

TotalCost =
Σ RetrievalCost_i
+ GenerationCost

TotalLatency =
Σ RetrievalLatency_i
+ GenerationLatency

Therefore corrective retrieval can improve quality while increasing latency and cost.
`
    },

    {
      title: "Python Example — Bounded Corrective Retrieval",
      content: `
\`\`\`python
def adaptive_retrieval(query, retrieve, evaluate, rewrite, max_attempts=3):
    current_query = query

    for attempt in range(max_attempts):
        docs = retrieve(current_query)
        score = evaluate(current_query, docs)

        if score >= 0.75:
            return docs

        current_query = rewrite(current_query, docs)

    return []
\`\`\`

The important engineering principle is not the exact threshold.

The important principle is that retrieval quality controls the next system action.
`
    },

    {
      title: "Adaptive RAG Architecture",
      content: `
User
 ↓
Query Analyzer
 ↓
Retrieval Router
 ├── Dense Search
 ├── Lexical Search
 ├── Hybrid Search
 ├── Structured Search
 └── External Tool
 ↓
Candidate Retrieval
 ↓
Reranker
 ↓
Evidence Evaluator
 ↓
 ┌─────────────────────────────┐
 │ Strong Evidence?            │
 └─────────────────────────────┘
       ↓ Yes              ↓ No
   Grounded Answer     Query Correction
                           ↓
                     Bounded Retry
                           ↓
                    Evidence Evaluation
                           ↓
                    Final Decision
`
    },

    {
      title: "Failure Modes",
      content: `
Common mistakes include:

1. Infinite retrieval loops
2. Overusing reflection
3. Treating similarity as factual correctness
4. Rewriting queries without evidence
5. Excessive top-k growth
6. Ignoring latency
7. Ignoring cost
8. Using one threshold for every query type
9. Failing to log correction decisions
10. Generating despite insufficient evidence
`
    }
  ],

  formulas: [
    {
      name: "Retrieval Quality",
      formula: "Q = w1S + w2R + w3C",
      explanation:
        "A conceptual weighted combination of similarity, reranker quality, and evidence coverage."
    },
    {
      name: "Total Retrieval Cost",
      formula: "C_total = Σ C_retrieval_i + C_generation",
      explanation:
        "Repeated retrieval increases total system cost."
    },
    {
      name: "Total Latency",
      formula: "L_total = Σ L_retrieval_i + L_generation",
      explanation:
        "Every corrective retrieval attempt contributes additional latency."
    }
  ],

  codeExamples: [
    {
      language: "python",
      title: "Evidence-Gated Generation",
      code: `def should_generate(evidence_score, threshold=0.75):
    return evidence_score >= threshold

if should_generate(score):
    answer = generate(context)
else:
    answer = "Insufficient evidence."`
    },
    {
      language: "typescript",
      title: "Retrieval State",
      code: `type RetrievalState = {
  query: string;
  attempt: number;
  evidenceScore: number;
  documents: string[];
  status: "searching" | "grounded" | "retry" | "insufficient";
};`
    }
  ],

  architecture: {
    title: "Corrective Adaptive RAG",
    steps: [
      "User Query",
      "Query Analysis",
      "Initial Retrieval",
      "Reranking",
      "Evidence Evaluation",
      "Corrective Retrieval",
      "Grounded Generation",
      "Answer Validation"
    ]
  },

  exercises: [
    "Explain why a single retrieval attempt can fail.",
    "Design three corrective actions for weak retrieval.",
    "Explain why corrective retrieval must be bounded.",
    "Compare standard RAG and adaptive RAG.",
    "Explain the quality-latency-cost trade-off.",
    "Design a retrieval confidence policy."
  ],

  codingExercises: [
    "Implement a bounded corrective retrieval loop.",
    "Create an evidence-score function.",
    "Implement query rewriting based on retrieved metadata.",
    "Log every retrieval attempt and its score."
  ],

  architectureExercises: [
    "Design an adaptive RAG router for university documents.",
    "Design a system that decides between dense, lexical, and hybrid retrieval.",
    "Add human escalation when three retrieval attempts fail."
  ],

  comparisons: [
    {
      topic: "Standard RAG vs Adaptive RAG",
      points: [
        "Standard RAG normally follows a fixed retrieval path.",
        "Adaptive RAG can change its retrieval strategy.",
        "Adaptive RAG can improve difficult-query handling.",
        "Adaptive RAG generally adds latency and engineering complexity."
      ]
    },
    {
      topic: "Reflection vs Correction",
      points: [
        "Reflection evaluates the current state.",
        "Correction changes the retrieval or generation strategy.",
        "Reflection can trigger correction."
      ]
    }
  ],

  interviewQuestions: [
    "What is corrective RAG?",
    "Why should retrieval quality control generation?",
    "What is adaptive retrieval?",
    "Why should corrective loops be bounded?",
    "How can retrieval confidence be estimated?",
    "What trade-offs are introduced by self-reflective RAG?"
  ],

  commonMistakes: [
    "Using unlimited retry loops.",
    "Treating similarity scores as truth scores.",
    "Ignoring retrieval latency.",
    "Rewriting queries based on unsupported assumptions.",
    "Failing to log correction decisions."
  ],

  summary: [
    "Corrective RAG evaluates retrieval before generation.",
    "Adaptive RAG can change retrieval strategy dynamically.",
    "Self-reflective RAG introduces explicit evaluation steps.",
    "Evidence thresholds can control generation.",
    "Corrective loops must be bounded.",
    "Quality improvements must be balanced against latency and cost."
  ],

  keyTakeaways: [
    "Retrieval should be treated as an observable system, not a black box.",
    "Weak evidence should trigger a controlled response.",
    "Adaptive retrieval is especially useful for complex queries.",
    "Every corrective mechanism needs limits.",
    "Production RAG requires quality, latency, cost, and reliability together."
  ],

  visualReferences: [
    {
      title: "Corrective RAG Loop",
      type: "flowchart",
      description: "Query → retrieval → evidence evaluation → correction → retrieval → generation."
    },
    {
      title: "Adaptive Retrieval Router",
      type: "architecture",
      description: "Routes queries to dense, lexical, hybrid, structured, or tool-based retrieval."
    }
  ]
};

export default lesson12;