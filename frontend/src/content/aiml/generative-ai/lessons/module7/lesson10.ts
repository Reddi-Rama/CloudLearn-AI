export const lesson10 = {
  id: "lesson10",
  moduleId: "module7",
  title: "Hybrid Retrieval, Reranking & Retrieval Optimization",
  subtitle: "Combine lexical and semantic retrieval for stronger RAG search",
  description:
    "Learn how production RAG systems combine lexical search, dense vector search, metadata filtering, candidate generation, reranking, and optimization to improve retrieval quality.",
  difficulty: "Advanced",
  estimatedTime: "30–35 minutes",

  learningObjectives: [
    "Understand lexical and semantic retrieval.",
    "Explain why hybrid retrieval can outperform a single retrieval strategy.",
    "Understand candidate generation and reranking.",
    "Understand reciprocal rank fusion conceptually.",
    "Understand metadata filtering in retrieval.",
    "Understand retrieval score normalization.",
    "Design a two-stage retrieval architecture.",
    "Optimize retrieval for quality, latency, and cost."
  ],

  sections: [
    {
      title: "Why One Retrieval Method Is Not Always Enough",
      content: `
Different retrieval methods are good at different kinds of matching.

Lexical retrieval is strong when exact words matter.

Semantic retrieval is strong when meaning matters.

Example:

Query:
"transformer attention"

Lexical search may find documents containing exactly:

transformer
attention

Semantic search may find:

"self-attention mechanisms in neural sequence models"

A production RAG system can combine both approaches.
      `
    },

    {
      title: "Lexical Retrieval",
      content: `
Lexical retrieval matches words and terms.

A simplified model is:

Query
 ↓
Term Matching
 ↓
Scoring
 ↓
Ranked Documents

Common concepts include:

- inverted indexes
- term frequency
- document frequency
- BM25
- exact phrase matching
- keyword matching

Lexical retrieval is useful for:

- names
- IDs
- product codes
- error messages
- exact technical terms
- rare terminology
      `
    },

    {
      title: "Dense Semantic Retrieval",
      content: `
Dense retrieval represents queries and documents as vectors.

Query
 ↓
Embedding
 ↓
Vector Search
 ↓
Similarity Ranking

It can identify semantic relationships even when wording differs.

For example:

Query:
"How much attendance is required?"

Document:
"Students must maintain the minimum attendance percentage."

The exact words differ, but the concepts are related.
      `
    },

    {
      title: "Hybrid Retrieval",
      content: `
Hybrid retrieval combines lexical and semantic signals.

Conceptually:

                Query
               /     \
              /       \
       Lexical       Dense
       Search        Search
          ↓             ↓
       Results       Results
          \             /
           \           /
            Fusion / Ranking
                  ↓
             Final Candidates

This can improve robustness across different query types.
      `
    },

    {
      title: "Why Hybrid Retrieval Helps",
      content: `
Consider two queries.

Query A:
"ERR_CONNECTION_RESET"

Exact lexical matching is highly valuable.

Query B:
"What causes a browser to lose its network connection unexpectedly?"

Semantic matching may be more useful.

A hybrid system can exploit both.

The goal is not to assume one retrieval method is always superior.

The goal is to combine complementary signals.
      `
    },

    {
      title: "Score Normalization",
      content: `
Lexical and vector systems may produce scores on different scales.

For example:

Lexical score:
0–25

Vector similarity:
0–1

These scores cannot simply be added without considering their scales.

Possible normalization:

normalizedScore =
(score - minScore) / (maxScore - minScore)

After normalization:

Hybrid Score =
α × Semantic Score
+
(1 - α) × Lexical Score

where:

0 ≤ α ≤ 1
      `
    },

    {
      title: "Reciprocal Rank Fusion",
      content: `
An alternative to directly combining raw scores is to combine rankings.

A simplified Reciprocal Rank Fusion concept is:

RRF(d) = Σ 1 / (k + rank_i(d))

where:

d = document
rank_i(d) = rank of d in retrieval system i
k = smoothing constant

If a document appears near the top of multiple ranking systems, its combined score increases.

This makes fusion less dependent on incompatible raw score scales.
      `
    },

    {
      title: "Candidate Generation",
      content: `
Hybrid retrieval can first generate a large candidate pool.

Example:

Lexical search → top 50
Dense search → top 50

After merging and deduplication:

Candidate pool → 80 unique documents

The system then reranks the candidates.

This creates a two-stage retrieval architecture:

Stage 1:
Fast candidate generation

Stage 2:
More expensive relevance ranking
      `
    },

    {
      title: "Reranking",
      content: `
A reranker examines the query and candidate document together.

Conceptually:

Query
+
Candidate Document
        ↓
Reranker
        ↓
Relevance Score

Unlike simple vector similarity, a reranker can examine more detailed relationships between the query and candidate text.

Pipeline:

Query
 ↓
Retriever
 ↓
Top 50
 ↓
Reranker
 ↓
Top 5
 ↓
Context
      `
    },

    {
      title: "Two-Stage Retrieval",
      content: `
A common architecture is:

                User Query
                    ↓
          Candidate Generation
             /           \
        Lexical         Dense
           \             /
            \           /
             Candidate Pool
                    ↓
                 Reranker
                    ↓
               Top-k Evidence
                    ↓
              Context Builder
                    ↓
                    LLM

The first stage prioritizes speed and recall.

The second stage prioritizes relevance.
      `
    },

    {
      title: "Metadata Filtering",
      content: `
Retrieval quality can improve when irrelevant documents are removed before ranking.

Metadata can include:

- department
- course
- date
- document type
- language
- access level
- document version

Example:

course = "Machine Learning"
AND
semester = "5"
AND
access = "student"

This reduces the search space and prevents irrelevant evidence from reaching the generation stage.
      `
    },

    {
      title: "Pre-Filtering vs Post-Filtering",
      content: `
Pre-filtering:

Query
 ↓
Metadata Filter
 ↓
Vector Search
 ↓
Results

Post-filtering:

Query
 ↓
Vector Search
 ↓
Large Candidate Set
 ↓
Metadata Filter
 ↓
Results

Pre-filtering can reduce search work.

Post-filtering can preserve more semantic candidates.

The correct strategy depends on the database, index architecture, selectivity, and application requirements.
      `
    },

    {
      title: "Retrieval Optimization",
      content: `
Retrieval optimization can target:

QUALITY
- better embeddings
- better chunking
- hybrid search
- reranking

LATENCY
- smaller candidate sets
- approximate indexes
- caching
- parallel retrieval

COST
- fewer expensive reranking operations
- efficient embeddings
- candidate reduction

SECURITY
- authorization-aware filtering

A good optimization does not improve one metric while destroying the others.
      `
    },

    {
      title: "Retrieval Parameter Tuning",
      content: `
Important parameters include:

top_k
candidate_k
rerank_k
hybrid weight
similarity threshold
metadata filters

Example:

Dense top-k = 40
Lexical top-k = 40
Merged candidates = 60
Reranked candidates = 20
Final context = 5

These values should be tuned using an evaluation dataset rather than chosen arbitrarily.
      `
    },

    {
      title: "Retrieval Optimization Trade-Off",
      content: `
Increasing candidate count can improve recall.

But:

More candidates
    ↓
More reranking work
    ↓
Higher latency
    ↓
Higher cost

Reducing candidates can improve speed.

But:

Fewer candidates
    ↓
Potentially lower recall
    ↓
Missing relevant evidence

Therefore retrieval optimization is a trade-off between:

Recall
Precision
Latency
Cost
      `
    }
  ],

  architecture: [
    {
      title: "Hybrid Retrieval Architecture",
      task: "Design a retrieval system combining lexical and dense search with result fusion."
    },
    {
      title: "Two-Stage Retrieval",
      task: "Design a candidate-generation stage followed by a reranking stage."
    },
    {
      title: "Retrieval Optimization Dashboard",
      task: "Design a dashboard tracking recall, precision, latency, candidate count, reranking cost, and final answer quality."
    }
  ],

  formulas: [
    {
      name: "Normalized Score",
      formula: "s' = (s - s_min) / (s_max - s_min)",
      explanation: "A simple way to normalize scores into a common range."
    },
    {
      name: "Hybrid Score",
      formula: "S = αS_dense + (1 - α)S_lexical",
      explanation: "Combines semantic and lexical scores after appropriate normalization."
    },
    {
      name: "Reciprocal Rank Fusion",
      formula: "RRF(d) = Σ 1 / (k + rank_i(d))",
      explanation: "Combines rankings from multiple retrieval systems."
    },
    {
      name: "End-to-End Retrieval Latency",
      formula: "T = T_lexical + T_dense + T_fusion + T_rerank",
      explanation: "Approximate decomposition of retrieval-stage latency."
    }
  ],

  codeExamples: [
    {
      title: "Simple Score Fusion",
      language: "python",
      code: `def hybrid_score(dense, lexical, alpha=0.7):
    return (
        alpha * dense
        + (1 - alpha) * lexical
    )


score = hybrid_score(
    dense=0.82,
    lexical=0.65,
    alpha=0.7
)

print(score)`
    },

    {
      title: "Simple Rank Fusion",
      language: "python",
      code: `def reciprocal_rank_fusion(rankings, k=60):
    scores = {}

    for ranking in rankings:
        for rank, document in enumerate(ranking, start=1):
            scores[document] = (
                scores.get(document, 0)
                + 1 / (k + rank)
            )

    return sorted(
        scores.items(),
        key=lambda item: item[1],
        reverse=True
    )


rankings = [
    ["A", "B", "C"],
    ["B", "D", "A"]
]

print(reciprocal_rank_fusion(rankings))`
    },

    {
      title: "Candidate Filtering",
      language: "typescript",
      code: `type Candidate = {
  id: string;
  score: number;
  course: string;
};

function filterCandidates(
  candidates: Candidate[],
  course: string
) {
  return candidates.filter(
    candidate => candidate.course === course
  );
}`
    }
  ],

  exercises: [
    "Compare lexical and semantic retrieval.",
    "Why can hybrid retrieval be useful?",
    "Why must scores sometimes be normalized?",
    "Explain reciprocal rank fusion.",
    "What is candidate generation?",
    "What is reranking?",
    "Why use two-stage retrieval?",
    "Compare pre-filtering and post-filtering.",
    "Explain the recall-latency trade-off."
  ],

  codingExercises: [
    {
      title: "Implement Hybrid Scoring",
      task: "Combine normalized lexical and semantic scores using a configurable weighting parameter."
    },
    {
      title: "Implement Rank Fusion",
      task: "Implement Reciprocal Rank Fusion for two or more ranked result lists."
    },
    {
      title: "Build a Candidate Pipeline",
      task: "Create a pipeline that retrieves candidates, removes duplicates, filters metadata, and returns a final candidate set."
    }
  ],

  architectureExercises: [
    "Design a hybrid lexical + vector search architecture.",
    "Design a reranking service.",
    "Design a two-stage retrieval pipeline for a university assistant.",
    "Design a retrieval benchmarking system.",
    "Design a retrieval cache without violating authorization boundaries."
  ],

  comparisons: [
    {
      topic: "Lexical vs Dense Retrieval",
      points: [
        "Lexical retrieval focuses on terms and exact textual relationships.",
        "Dense retrieval focuses on learned semantic representations.",
        "Lexical search is useful for exact identifiers and terminology.",
        "Dense retrieval is useful when wording differs from source text."
      ]
    },
    {
      topic: "Retrieval vs Reranking",
      points: [
        "Retrieval quickly produces candidate documents.",
        "Reranking performs more detailed relevance analysis.",
        "Retrieval usually handles larger candidate sets.",
        "Reranking is normally applied to a smaller candidate pool."
      ]
    }
  ],

  commonMistakes: [
    "Combining raw scores without normalization.",
    "Assuming dense retrieval always handles exact terms well.",
    "Using an expensive reranker on huge candidate sets.",
    "Ignoring metadata filtering.",
    "Tuning top-k without an evaluation dataset.",
    "Optimizing latency while destroying recall.",
    "Caching retrieval results without considering authorization.",
    "Ignoring duplicate documents after result fusion."
  ],

  interviewQuestions: [
    "What is hybrid retrieval?",
    "Why combine lexical and semantic search?",
    "What is BM25 conceptually?",
    "Why normalize retrieval scores?",
    "What is Reciprocal Rank Fusion?",
    "What is reranking?",
    "Why use two-stage retrieval?",
    "What is candidate generation?",
    "How would you optimize retrieval latency?",
    "How would you tune top-k?"
  ],

  summary: `
Production RAG systems often combine multiple retrieval signals.

Lexical retrieval captures exact terminology.
Dense retrieval captures semantic relationships.
Hybrid retrieval combines their strengths.
Reranking improves relevance after candidate generation.
Metadata filtering controls scope and access.

A common architecture is:

Lexical + Dense
→ Candidate Pool
→ Fusion
→ Filtering
→ Reranking
→ Final Evidence

Retrieval optimization must balance quality, latency, cost, and security.
  `,

  keyTakeaways: [
    "Lexical and semantic retrieval solve different matching problems.",
    "Hybrid retrieval combines complementary signals.",
    "Scores may need normalization before fusion.",
    "Rank fusion combines retrieval rankings.",
    "Candidate generation prioritizes recall and speed.",
    "Reranking improves relevance on a smaller candidate set.",
    "Metadata filtering controls retrieval scope.",
    "Two-stage retrieval balances performance and quality.",
    "Retrieval parameters should be tuned using evaluation data.",
    "Optimization requires balancing recall, precision, latency, and cost."
  ],

  visualReferences: [
    "Lexical versus semantic retrieval comparison",
    "Hybrid retrieval architecture",
    "Reciprocal rank fusion diagram",
    "Two-stage retrieval pipeline",
    "Retrieval optimization trade-off graph"
  ]
};

export default lesson10;