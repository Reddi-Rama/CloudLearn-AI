const lesson15 = {
  id: "lesson15",
  moduleId: "module7",
  title: "Advanced RAG System Design & Optimization",
  subtitle:
    "Design complete retrieval systems by balancing quality, latency, cost, security, and maintainability",

  description:
    "This lesson brings together the advanced RAG concepts learned throughout the module and focuses on system-level design. You will learn how to reason about retrieval architecture, pipeline bottlenecks, context budgets, caching, routing, evaluation, reliability, cost, and production trade-offs.",

  difficulty: "Advanced",
  estimatedTime: "4 hours",

  learningObjectives: [
    "Design a complete RAG architecture from requirements.",
    "Identify bottlenecks across the RAG pipeline.",
    "Optimize retrieval quality without blindly increasing top-k.",
    "Optimize context size and generation cost.",
    "Apply caching and routing strategies.",
    "Balance latency, cost, and answer quality.",
    "Design evaluation-driven optimization workflows.",
    "Reason about production RAG trade-offs."
  ],

  sections: [
    {
      title: "RAG as a Complete System",
      content: `
A mature RAG system is not simply:

Query → Vector Search → LLM

It is a coordinated system containing:

1. Knowledge ingestion
2. Document processing
3. Chunking
4. Embedding generation
5. Vector indexing
6. Query understanding
7. Retrieval
8. Filtering
9. Reranking
10. Context construction
11. Grounded generation
12. Validation
13. Evaluation
14. Observability
15. Security
16. Cost management

The quality of the final answer depends on the complete pipeline.
`
    },

    {
      title: "Start With Requirements",
      content: `
Before choosing a retrieval architecture, define:

- What knowledge is being searched?
- How frequently does knowledge change?
- How many users exist?
- How sensitive is the data?
- How quickly must responses arrive?
- What accuracy is required?
- Is historical retrieval required?
- Are citations required?
- What is the acceptable cost?
- What happens when evidence is unavailable?

Architecture should follow requirements rather than technology preference.
`
    },

    {
      title: "RAG Architecture Layers",
      content: `
A useful architecture can be divided into layers:

Knowledge Layer
↓
Ingestion Layer
↓
Representation Layer
↓
Index Layer
↓
Retrieval Layer
↓
Context Layer
↓
Generation Layer
↓
Validation Layer
↓
Application Layer
↓
Evaluation and Observability

Each layer has different responsibilities.

This separation makes debugging and optimization easier.
`
    },

    {
      title: "Retrieval Optimization",
      content: `
Retrieval optimization should be evidence-driven.

Possible controls include:

- chunk size
- overlap
- embedding model
- top-k
- metadata filtering
- lexical search
- dense search
- hybrid search
- reranking
- query transformation
- retrieval routing

Increasing top-k is not automatically an improvement.

More documents can introduce:

- irrelevant evidence
- redundancy
- larger prompts
- higher cost
- longer latency
- more opportunities for conflicting information
`
    },

    {
      title: "Context Optimization",
      content: `
The goal is not to maximize context.

The goal is to maximize useful evidence.

Context optimization techniques include:

- deduplication
- reranking
- relevance thresholds
- context compression
- sentence selection
- parent expansion
- ordering
- source prioritization
- token budgets

A conceptual objective is:

UsefulContext / ContextCost

The best context is therefore not necessarily the largest context.
`
    },

    {
      title: "Context Budget",
      content: `
Suppose a model has a usable context budget B.

Then:

B =
system instructions
+ user query
+ retrieved evidence
+ conversation state
+ tool results

Therefore:

RetrievedContext <= B - OtherContext

A production system should reserve space for:

- instructions
- the user's question
- output requirements
- conversation state
- generated response
`
    },

    {
      title: "Latency Optimization",
      content: `
A simplified latency model is:

L_total =
L_query
+ L_retrieval
+ L_reranking
+ L_context
+ L_generation
+ L_validation

Optimization opportunities include:

- parallel retrieval
- caching
- smaller candidate sets
- efficient vector indexes
- faster reranking
- streaming generation
- model routing
- prompt reduction
`
    },

    {
      title: "Parallel Retrieval",
      content: `
Instead of:

Dense Search
↓
Lexical Search
↓
Reranking

a system can perform:

        ┌── Dense Search ──┐
Query ──┤                 ├── Merge → Rerank
        └── Lexical Search┘

This can reduce sequential latency.

However, parallel execution increases infrastructure concurrency and may increase cost.
`
    },

    {
      title: "Caching Strategy",
      content: `
Possible caches include:

Embedding Cache
Query Cache
Retrieval Cache
Reranking Cache
Generation Cache

Each cache requires an appropriate key.

For example:

cache_key =
query
+ retrieval_configuration
+ tenant
+ authorization_context
+ index_version

Ignoring these dimensions can produce stale or unauthorized results.
`
    },

    {
      title: "Model Routing",
      content: `
Not every question requires the same model.

A routing layer can classify requests:

Simple query
→ smaller model

Complex reasoning query
→ larger model

High-risk query
→ stricter pipeline

Low-confidence retrieval
→ additional retrieval

This can improve cost efficiency without applying the most expensive pipeline to every request.
`
    },

    {
      title: "Quality-Latency-Cost Triangle",
      content: `
RAG optimization often involves three competing goals:

Quality
   /\
  /  \
 /    \
Latency ─── Cost

Improving one dimension can affect another.

Examples:

More retrieval
→ potentially higher quality
→ higher latency
→ higher cost

More compression
→ lower cost
→ lower latency
→ possible loss of evidence

The correct configuration depends on application requirements.
`
    },

    {
      title: "Evaluation-Driven Optimization",
      content: `
Do not optimize RAG using intuition alone.

Use a controlled evaluation dataset.

For each experiment record:

configuration
↓
retrieval metrics
↓
grounding metrics
↓
answer metrics
↓
latency
↓
cost

Then compare changes against a baseline.

Example:

Baseline:
Recall@5 = 0.78

New configuration:
Recall@5 = 0.84

But:

Latency:
420 ms → 780 ms

Cost:
$0.004 → $0.009

The change must therefore be evaluated as a system trade-off.
`
    },

    {
      title: "Failure-Driven Optimization",
      content: `
Collect failed questions and classify them.

Example:

Failure
├── Retrieval failure
├── Ranking failure
├── Context failure
├── Grounding failure
├── Generation failure
├── Authorization failure
└── Infrastructure failure

Each category requires a different optimization.

This prevents engineers from trying to solve every problem by changing the embedding model.
`
    },

    {
      title: "Production Optimization Workflow",
      content: `
A disciplined workflow:

1. Establish baseline.
2. Collect representative evaluation data.
3. Measure retrieval quality.
4. Measure answer quality.
5. Measure latency.
6. Measure cost.
7. Identify bottleneck.
8. Change one major variable.
9. Re-run evaluation.
10. Compare against baseline.
11. Check regressions.
12. Deploy only after validation.
`
    },

    {
      title: "Architecture Trade-Off Example",
      content: `
Suppose a university assistant must answer questions about regulations.

Possible design:

Dense retrieval
+
Lexical retrieval
+
Metadata filtering
+
Reranking
+
Parent expansion
+
Grounded generation
+
Citations

For current policy questions:

Temporal filtering is important.

For historical questions:

Version-aware retrieval is important.

For sensitive documents:

Authorization filtering is mandatory.

Architecture should therefore adapt to the problem.
`
    },

    {
      title: "Python Example — RAG Cost",
      content: `
\`\`\`python
def rag_cost(
    embedding_cost,
    retrieval_cost,
    rerank_cost,
    input_cost,
    output_cost
):
    return (
        embedding_cost
        + retrieval_cost
        + rerank_cost
        + input_cost
        + output_cost
    )
\`\`\`
`
    },

    {
      title: "Python Example — Configuration Evaluation",
      content: `
\`\`\`python
configs = [
    {
        "name": "baseline",
        "recall": 0.78,
        "latency_ms": 420,
        "cost": 0.004
    },
    {
        "name": "hybrid",
        "recall": 0.84,
        "latency_ms": 650,
        "cost": 0.006
    }
]

for config in configs:
    print(
        config["name"],
        config["recall"],
        config["latency_ms"],
        config["cost"]
    )
\`\`\`
`
    },

    {
      title: "Advanced RAG Architecture",
      content: `
                         User
                           ↓
                    Query Analyzer
                           ↓
                    Retrieval Router
                    /      |       \\
                   /       |        \\
              Dense     Lexical    Structured
                \\         |         /
                 \\        |        /
                    Candidate Merge
                           ↓
                       Reranker
                           ↓
                  Evidence Validation
                           ↓
                    Context Builder
                           ↓
                     LLM Gateway
                           ↓
                   Output Validation
                           ↓
                       Response

        ┌───────────────────────────────────┐
        │ Evaluation / Observability        │
        │ Security / Cost / Governance      │
        └───────────────────────────────────┘
`
    }
  ],

  formulas: [
    {
      name: "Context Budget",
      formula: "B_retrieval = B_total - B_system - B_query - B_history - B_output",
      explanation:
        "The retrieval context must fit inside the usable model context budget."
    },
    {
      name: "Total Latency",
      formula: "L = L_query + L_retrieval + L_rerank + L_context + L_generation",
      explanation:
        "End-to-end latency is determined by the major sequential stages."
    },
    {
      name: "Cost",
      formula: "C_total = C_embedding + C_retrieval + C_rerank + C_input + C_output",
      explanation:
        "A complete RAG cost model includes both retrieval infrastructure and model usage."
    }
  ],

  codeExamples: [
    {
      language: "typescript",
      title: "RAG Configuration",
      code: `type RagConfig = {
  topK: number;
  rerankTopK: number;
  useHybridSearch: boolean;
  useParentExpansion: boolean;
  contextBudget: number;
  enableCaching: boolean;
};`
    },
    {
      language: "python",
      title: "Simple Context Budget",
      code: `def available_context(
    total_budget,
    system_tokens,
    query_tokens,
    history_tokens,
    output_reserve
):
    return max(
        0,
        total_budget
        - system_tokens
        - query_tokens
        - history_tokens
        - output_reserve
    )`
    }
  ],

  architecture: {
    title: "Advanced RAG System",
    layers: [
      "Knowledge Sources",
      "Ingestion",
      "Chunking",
      "Embeddings",
      "Indexing",
      "Query Understanding",
      "Retrieval Routing",
      "Hybrid Retrieval",
      "Reranking",
      "Context Construction",
      "Grounded Generation",
      "Validation",
      "Evaluation",
      "Observability",
      "Security",
      "Cost Management"
    ]
  },

  exercises: [
    "Design a RAG architecture for a university knowledge base.",
    "Explain why increasing top-k can reduce answer quality.",
    "Design a context-budget policy.",
    "Identify three possible latency bottlenecks.",
    "Design a caching strategy for multi-tenant RAG.",
    "Explain the quality-latency-cost trade-off.",
    "Design an evaluation-driven optimization process."
  ],

  codingExercises: [
    "Implement a simple RAG cost calculator.",
    "Implement a context-budget calculator.",
    "Create a configurable retrieval pipeline.",
    "Build a small experiment runner comparing retrieval configurations."
  ],

  architectureExercises: [
    "Design an enterprise RAG system with hybrid retrieval and reranking.",
    "Design a low-latency RAG architecture.",
    "Design a cost-sensitive RAG architecture for thousands of daily users.",
    "Design a secure multi-tenant RAG platform."
  ],

  comparisons: [
    {
      topic: "High Recall vs Low Latency",
      points: [
        "Higher recall can require larger candidate sets.",
        "Larger candidate sets can increase latency.",
        "Reranking can improve precision after broad retrieval.",
        "The final configuration should be selected using evaluation data."
      ]
    },
    {
      topic: "Caching vs Freshness",
      points: [
        "Caching reduces repeated computation.",
        "Caching can return stale information.",
        "Knowledge-changing systems require explicit invalidation or versioning."
      ]
    }
  ],

  interviewQuestions: [
    "How would you optimize a slow RAG system?",
    "Why is increasing top-k not always beneficial?",
    "How would you design a RAG cache?",
    "What metrics should be tracked during RAG optimization?",
    "How do you balance quality, latency, and cost?",
    "How would you identify whether a failure comes from retrieval or generation?"
  ],

  commonMistakes: [
    "Optimizing without a baseline.",
    "Increasing top-k without measuring context quality.",
    "Optimizing model cost while ignoring retrieval infrastructure.",
    "Caching without considering authorization.",
    "Changing multiple variables simultaneously.",
    "Ignoring regression testing."
  ],

  summary: [
    "RAG is a complete system rather than a single retrieval call.",
    "Optimization should begin with requirements and a measurable baseline.",
    "Context quality is more important than context quantity.",
    "Caching, routing, parallel retrieval, and reranking can improve system efficiency.",
    "Quality, latency, and cost must be evaluated together.",
    "Failure-driven analysis makes RAG optimization more systematic."
  ],

  keyTakeaways: [
    "Measure before optimizing.",
    "Optimize the bottleneck rather than changing components randomly.",
    "Use evaluation datasets as the foundation for RAG engineering.",
    "Treat context as a limited engineering resource.",
    "Production RAG is a systems-design problem."
  ],

  visualReferences: [
    {
      title: "Advanced RAG Architecture",
      type: "architecture",
      description: "Complete retrieval, reranking, context, generation, validation, and observability architecture."
    },
    {
      title: "Quality-Latency-Cost Trade-Off",
      type: "diagram",
      description: "Shows the three-way trade-off involved in production RAG optimization."
    }
  ]
};

export default lesson15;