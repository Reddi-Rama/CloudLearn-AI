const lesson = {
  id: "lesson8",
  moduleId: "module4",
  title: "Hybrid Search, Metadata Filtering & Reranking",
  subtitle: "Combine lexical and semantic retrieval, enforce metadata constraints, and improve relevance with second-stage ranking.",

  overview: `
A single retrieval technique is often insufficient for production RAG.

Consider a support system.

User:
"What does error ORA-00942 mean?"

Dense retrieval may understand the general concept of a database error.

Lexical retrieval can recognize the exact identifier:

ORA-00942

A production system can combine both.

Hybrid retrieval:

Semantic Search
       +
Keyword Search
       +
Metadata Filtering
       ↓
Candidate Set
       ↓
Reranker
       ↓
Final Evidence
       ↓
LLM

This lesson explains how these components work together.
`,

  learningObjectives: [
    "Understand hybrid retrieval.",
    "Understand lexical and semantic score combination.",
    "Understand metadata filtering.",
    "Understand pre-filtering and post-filtering.",
    "Understand access-control filtering.",
    "Understand reranking.",
    "Understand cross-encoder reranking conceptually.",
    "Understand score normalization.",
    "Understand candidate generation.",
    "Understand retrieval fusion.",
    "Understand reciprocal rank fusion.",
    "Design a production retrieval pipeline."
  ],

  prerequisites: [
    "Dense retrieval",
    "Sparse retrieval",
    "Vector databases",
    "Metadata",
    "Basic ranking concepts"
  ],

  keyTerms: [
    {
      term: "Hybrid Search",
      definition: "Combining multiple retrieval signals such as semantic vector similarity and lexical matching."
    },
    {
      term: "Metadata Filtering",
      definition: "Restricting retrieval candidates using structured attributes."
    },
    {
      term: "Reranking",
      definition: "Reordering an initial candidate set using a more detailed relevance model."
    },
    {
      term: "Candidate Generation",
      definition: "The first retrieval stage that creates a pool of potentially relevant results."
    },
    {
      term: "Score Fusion",
      definition: "Combining scores from multiple retrieval systems."
    },
    {
      term: "RRF",
      definition: "Reciprocal Rank Fusion combines rankings from multiple retrieval systems."
    },
    {
      term: "Cross-Encoder",
      definition: "A model that jointly processes a query and candidate document to estimate their relevance."
    }
  ],

  sections: [
    {
      title: "1. Why Hybrid Search?",
      explanation: `
Different retrieval systems notice different signals.

Dense retrieval:
"password reset" ≈ "recover login credentials"

Lexical retrieval:
"ORA-00942" exactly matches "ORA-00942"

A hybrid system can benefit from both.

Dense:
semantic understanding

Sparse:
exact terminology

Together:
broader and more precise candidate retrieval.
`
    },

    {
      title: "2. Hybrid Retrieval Architecture",
      explanation: `
User Query
    |
    +----------+
    |          |
Dense       Sparse
Search      Search
    |          |
    +----+-----+
         |
    Candidate Merge
         |
   Metadata Filter
         |
      Reranker
         |
     Top Results
`
    },

    {
      title: "3. Score Combination",
      explanation: `
Suppose:

Dense score = 0.82
Sparse score = 0.71

A simple conceptual combination is:

combined_score =
    alpha × dense_score
    +
    (1-alpha) × sparse_score

If alpha = 0.7:

combined_score =
0.7 × 0.82 + 0.3 × 0.71

The exact weighting should be determined through evaluation.
`
    },

    {
      title: "4. Score Normalization",
      explanation: `
Different retrieval systems may produce scores on different scales.

Example:

Dense:
0.82

Sparse:
14.7

Adding them directly is meaningless.

Scores may need normalization before fusion.

Possible approaches include:

• Min-max normalization
• Z-score normalization
• Rank-based fusion

Rank-based methods can avoid direct score-scale comparison.
`
    },

    {
      title: "5. Reciprocal Rank Fusion",
      explanation: `
Reciprocal Rank Fusion combines rankings.

A simplified formula is:

RRF(d) = Σ 1 / (k + rank(d))

A document appearing highly in multiple rankings receives a stronger
combined score.

This is useful when individual retrieval systems produce incompatible
score scales.
`
    },

    {
      title: "6. Metadata Filtering",
      explanation: `
Metadata filters constrain retrieval.

Example:

Query:
"What is the attendance policy?"

Filter:

department = "IT"
year = 2026
document_type = "policy"

Only records satisfying the constraints participate in retrieval.
`
    },

    {
      title: "7. Security Filtering",
      explanation: `
Security filters are more important than ordinary relevance filters.

Suppose:

Document A:
Public

Document B:
Faculty-only

Student query:

The retrieval layer must prevent Document B from entering the context.

The model should never be trusted as the primary authorization mechanism.
`
    },

    {
      title: "8. Pre-Filtering",
      explanation: `
Pre-filtering applies constraints before candidate search.

Conceptually:

Knowledge Base
   ↓
Authorization Filter
   ↓
Metadata Filter
   ↓
Similarity Search

This can reduce the candidate search space and prevent unauthorized
documents from becoming retrieval candidates.
`
    },

    {
      title: "9. Post-Filtering",
      explanation: `
Post-filtering retrieves candidates first and filters afterward.

Conceptually:

Vector Search
   ↓
Candidates
   ↓
Metadata Filter
   ↓
Final Results

This can be useful in some architectures but must be designed carefully,
especially when access control is involved.
`
    },

    {
      title: "10. What Is Reranking?",
      explanation: `
Initial retrieval is often optimized for recall and speed.

Suppose:

100,000 chunks
      ↓
Fast retrieval
      ↓
100 candidates
      ↓
Reranker
      ↓
10 high-quality candidates

The reranker can inspect query and candidate text together
and make a more detailed relevance judgment.
`
    },

    {
      title: "11. Cross-Encoder Reranking",
      explanation: `
A cross-encoder can receive:

[QUERY]
"What is the attendance requirement?"

[CANDIDATE]
"Students must maintain a minimum attendance of 75%."

and produce a relevance score.

Unlike independently embedded vectors, the model jointly processes
the query and candidate.

This can provide stronger relevance estimation at additional computational cost.
`
    },

    {
      title: "12. Candidate Generation vs Reranking",
      explanation: `
Stage 1:
Fast candidate retrieval.

Goal:
High recall.

Stage 2:
Detailed reranking.

Goal:
High precision.

This creates a common architecture:

Large collection
     ↓
Fast retrieval
     ↓
Candidate pool
     ↓
Reranking
     ↓
Final evidence
`
    },

    {
      title: "13. Reranking Too Many Candidates",
      explanation: `
Reranking is usually more expensive than initial retrieval.

If there are one million documents, reranking all of them may be impractical.

Therefore:

1,000,000 documents
       ↓
Retrieve 100
       ↓
Rerank 100
       ↓
Top 10

Candidate count becomes an important latency parameter.
`
    },

    {
      title: "14. Hybrid Search for Error Codes",
      explanation: `
Technical systems often benefit from hybrid search.

Query:

"How do I fix ERR_CONNECTION_REFUSED?"

Keyword retrieval can strongly match:

ERR_CONNECTION_REFUSED

Dense retrieval can understand:

"browser cannot establish a connection to the server"

Combining both can improve robustness.
`
    },

    {
      title: "15. Hybrid Search for Names and IDs",
      explanation: `
Exact identifiers can be poorly represented by semantic embeddings.

Examples:

INC-48291
SKU-AX92
API-ERR-401
CS101

Keyword retrieval is especially valuable for such strings.
`
    },

    {
      title: "16. Reranking With Metadata",
      explanation: `
Reranking can operate after metadata filtering.

Example:

Query
 ↓
Access filter
 ↓
Department filter
 ↓
Hybrid retrieval
 ↓
50 candidates
 ↓
Reranker
 ↓
5 results
`
    },

    {
      title: "17. Retrieval Fusion Strategy",
      explanation: `
A practical architecture may use:

Dense retrieval:
top 50

Sparse retrieval:
top 50

Merge:
up to 100 unique candidates

Metadata filtering:
remove invalid candidates

Reranking:
score 100

Final:
top 5–10
`
    },

    {
      title: "18. Evaluating Hybrid Retrieval",
      explanation: `
Compare:

Dense only
Sparse only
Hybrid
Hybrid + reranking

Measure:

• Recall@k
• Precision@k
• MRR
• NDCG
• Latency
• Token cost
• Answer accuracy

A more complex pipeline is only useful if it improves the desired outcome.
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "Weighted Score Fusion",
      formula: `
S = αS_dense + (1-α)S_sparse
`,
      explanation: "Combines normalized retrieval scores using a tunable weight."
    },
    {
      concept: "Reciprocal Rank Fusion",
      formula: `
RRF(d) = Σ 1/(k + rank_i(d))
`,
      explanation: "Rewards documents that appear near the top across multiple rankings."
    },
    {
      concept: "Precision@k",
      formula: `
Precision@k = relevant_top_k / k
`,
      explanation: "Measures the proportion of retrieved results that are relevant."
    },
    {
      concept: "Recall@k",
      formula: `
Recall@k = relevant_retrieved / total_relevant
`,
      explanation: "Measures how much relevant evidence was found."
    }
  ],

  codeExamples: [
    {
      title: "Weighted Score Fusion",
      language: "python",
      code: `
def combine_scores(
    dense_score,
    sparse_score,
    alpha=0.7
):
    return (
        alpha * dense_score
        +
        (1 - alpha) * sparse_score
    )


score = combine_scores(
    dense_score=0.82,
    sparse_score=0.75
)

print(score)
`
    },

    {
      title: "Simple Reciprocal Rank Fusion",
      language: "python",
      code: `
def rrf(rankings, k=60):
    scores = {}

    for ranking in rankings:
        for rank, document_id in enumerate(
            ranking,
            start=1
        ):
            scores[document_id] = (
                scores.get(document_id, 0)
                + 1 / (k + rank)
            )

    return sorted(
        scores.items(),
        key=lambda x: x[1],
        reverse=True
    )


dense = ["A", "B", "C", "D"]
sparse = ["C", "A", "E", "B"]

print(rrf([dense, sparse]))
`
    },

    {
      title: "Metadata Filtering",
      language: "python",
      code: `
def allowed(record, user):
    metadata = record["metadata"]

    if metadata["tenant"] != user["tenant"]:
        return False

    if metadata["access_level"] == "faculty":
        return user["role"] == "faculty"

    return True


user = {
    "tenant": "company-a",
    "role": "student"
}

safe_records = [
    record
    for record in records
    if allowed(record, user)
]
`
    },

    {
      title: "Candidate Generation and Reranking",
      language: "python",
      code: `
def retrieval_pipeline(
    query,
    dense_search,
    sparse_search,
    reranker,
    k=5
):
    dense_results = dense_search(query, 50)
    sparse_results = sparse_search(query, 50)

    candidates = {
        item["id"]: item
        for item in dense_results + sparse_results
    }

    ranked = reranker(
        query,
        list(candidates.values())
    )

    return ranked[:k]
`
    }
  ],

  comparisonTables: [
    {
      title: "Dense vs Sparse vs Hybrid",
      columns: [
        "Aspect",
        "Dense",
        "Sparse",
        "Hybrid"
      ],
      rows: [
        ["Semantic matching", "Strong", "Limited", "Strong"],
        ["Exact terms", "Variable", "Strong", "Strong"],
        ["Rare identifiers", "Variable", "Strong", "Strong"],
        ["Complexity", "Medium", "Medium", "Higher"],
        ["Coverage", "Semantic", "Lexical", "Combined"]
      ]
    },
    {
      title: "Retrieval vs Reranking",
      columns: [
        "Aspect",
        "Retrieval",
        "Reranking"
      ],
      rows: [
        ["Primary goal", "Candidate recall", "Candidate precision"],
        ["Candidates", "Large collection", "Smaller candidate set"],
        ["Latency", "Optimized for speed", "More expensive"],
        ["Typical model", "Vector/BM25/index", "Cross-encoder or relevance model"],
        ["Output", "Candidate pool", "Final ranking"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "Hybrid Retrieval Architecture",
      type: "architecture",
      description: "Dense search and sparse search feed a common candidate pool."
    },
    {
      title: "RRF Ranking Fusion",
      type: "diagram",
      description: "Visualize two ranked lists merging into a unified ranking."
    },
    {
      title: "Metadata Security Filter",
      type: "flowchart",
      description: "Show authorization and metadata constraints before retrieval."
    },
    {
      title: "Two-Stage Retrieval",
      type: "flowchart",
      description: "Fast candidate retrieval followed by expensive reranking."
    },
    {
      title: "Cross-Encoder Reranking",
      type: "diagram",
      description: "Query and candidate document enter a joint relevance model."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Hybrid Score Fusion",
      task: "Calculate combined retrieval scores for different alpha values and compare rankings."
    },
    {
      title: "Exercise 2 — RRF",
      task: "Given three ranked retrieval lists, calculate the RRF score for each document."
    },
    {
      title: "Exercise 3 — Metadata Security",
      task: "Design a retrieval filter that separates public, student, faculty, and administrator documents."
    },
    {
      title: "Exercise 4 — Reranking",
      task: "Create ten candidates and manually design a second-stage relevance ranking."
    },
    {
      title: "Exercise 5 — Pipeline Evaluation",
      task: "Compare dense-only, sparse-only, hybrid, and hybrid-plus-reranking retrieval."
    }
  ],

  interviewQuestions: [
    {
      question: "What is hybrid search?",
      answer: "Hybrid search combines multiple retrieval signals, commonly dense semantic search and sparse lexical search."
    },
    {
      question: "Why is metadata filtering important?",
      answer: "It improves relevance and can enforce constraints such as time, document type, tenant, department, and access level."
    },
    {
      question: "What is reranking?",
      answer: "Reranking reorders an initial candidate set using a more detailed relevance model."
    },
    {
      question: "What is RRF?",
      answer: "Reciprocal Rank Fusion combines ranked lists without requiring their raw scores to be on the same scale."
    },
    {
      question: "What is a cross-encoder?",
      answer: "A model that jointly processes a query and candidate document to estimate their relevance."
    },
    {
      question: "Why not rerank the entire database?",
      answer: "Reranking is usually more computationally expensive, so a fast retrieval stage first reduces the candidate set."
    }
  ],

  commonMistakes: [
    "Adding multiple retrieval systems without measuring their value.",
    "Combining incompatible raw scores without normalization.",
    "Ignoring exact identifiers.",
    "Applying security filtering too late.",
    "Reranking too many candidates.",
    "Returning many redundant chunks.",
    "Assuming reranking automatically fixes poor chunking.",
    "Failing to measure latency and cost."
  ],

  keyTakeaways: [
    "Hybrid retrieval combines complementary search signals.",
    "Dense search is strong for semantic relationships.",
    "Sparse search is strong for exact terminology.",
    "Metadata filters add important constraints.",
    "Authorization must be enforced before unauthorized context reaches the model.",
    "Reranking improves ordering after candidate retrieval.",
    "RRF is useful for combining ranked lists.",
    "Two-stage retrieval balances recall, precision, and latency."
  ]
};

export default lesson;