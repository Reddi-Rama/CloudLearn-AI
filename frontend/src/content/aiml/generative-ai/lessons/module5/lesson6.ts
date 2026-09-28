const lesson = {
  id: "lesson6",
  moduleId: "module5",
  lessonNumber: 6,

  title: "Approximate Nearest Neighbor Search",

  subtitle:
    "Understand how large-scale vector systems accelerate similarity search using ANN algorithms, graph structures, partitioning, and search-quality trade-offs.",

  description: `
Exact nearest-neighbor search compares a query against every stored vector.

That approach becomes expensive as the collection grows.

Approximate Nearest Neighbor (ANN) methods reduce search work by using
specialized data structures that identify promising candidates quickly.

The central trade-off is:

        SEARCH SPEED
             ↕
       SEARCH RECALL

ANN is one of the key technologies that makes large-scale vector search
practical.
`,

  estimatedTime: "90–120 minutes",
  difficulty: "Advanced",

  learningObjectives: [
    "Explain the nearest-neighbor search problem.",
    "Understand why exact search becomes expensive.",
    "Define approximate nearest-neighbor search.",
    "Understand recall and search quality.",
    "Understand graph-based ANN conceptually.",
    "Understand HNSW at a conceptual and practical level.",
    "Understand partition-based search.",
    "Understand quantization conceptually.",
    "Understand ANN tuning parameters.",
    "Understand the latency-recall trade-off."
  ],

  sections: [
    {
      heading: "1. The Nearest-Neighbor Problem",

      content: `
Given a query vector:

    q ∈ R^d

and a collection:

    V = {v₁, v₂, ..., vₙ}

we want to find the vectors closest to q.

Formally:

    TopK(q, V)

returns the k nearest or most similar vectors.

The mathematical problem is simple.

The engineering challenge is performing it efficiently when n is very large.
`
    },

    {
      heading: "2. Brute-Force Search",

      content: `
The simplest method compares the query with every stored vector.

For N vectors of dimension d:

approximately N × d numerical operations are required per query,
ignoring implementation-specific optimizations.

Conceptually:

for vector in database:
    score = similarity(query, vector)
    keep score

This provides exact results but can become expensive at scale.
`,

      formulas: [
        "Approximate brute-force work ∝ N × d"
      ]
    },

    {
      heading: "3. Why ANN Is Needed",

      content: `
Suppose a system contains:

    1,000 vectors

A full scan may be acceptable.

Now consider:

    10,000,000 vectors

or:

    1,000,000,000 vectors

Scanning every vector for every query becomes increasingly expensive.

ANN methods attempt to avoid unnecessary comparisons.

Instead of asking:

"Which of all vectors are closest?"

the system attempts to rapidly identify:

"Which vectors are likely to contain the nearest neighbors?"
`
    },

    {
      heading: "4. Exact vs Approximate Search",

      comparisonTables: [
        {
          title: "Exact vs ANN",
          columns: ["Property", "Exact Search", "ANN"],
          rows: [
            ["Nearest neighbors", "Exact", "Approximate"],
            ["Search work", "Potentially very high", "Reduced"],
            ["Latency", "Can increase with scale", "Designed for efficient search"],
            ["Recall", "100% against the exact metric", "Usually below exact depending on configuration"],
            ["Index complexity", "Low", "Higher"],
            ["Large-scale suitability", "Can become expensive", "Commonly used"]
          ]
        }
      ]
    },

    {
      heading: "5. Recall in ANN Search",

      content: `
ANN systems are commonly evaluated using recall.

Suppose exact search identifies:

    {A, B, C, D, E}

ANN returns:

    {A, B, C, X, Y}

The intersection is:

    {A, B, C}

Therefore:

    Recall = 3 / 5 = 0.60
`,

      formulas: [
        "Recall@k = relevant results retrieved / relevant results available"
      ],

      mathIntuition: `
Recall tells us how many of the expected nearest neighbors were actually
found.

Higher recall generally means the approximate search is closer to the
exact result.
`
    },

    {
      heading: "6. ANN Algorithm Families",

      classificationTree: `
APPROXIMATE NEAREST NEIGHBOR
│
├── Graph-Based
│   └── HNSW
│
├── Partition-Based
│   ├── IVF
│   └── Cluster-based search
│
├── Hashing-Based
│   └── Locality-sensitive hashing
│
└── Quantization-Based
    ├── Product quantization
    └── Compressed representations
`
    },

    {
      heading: "7. Graph-Based ANN",

      content: `
A graph-based ANN index represents vectors as nodes connected to
neighboring nodes.

Conceptually:

       A ----- B
      / \     / \
     C   D---E   F
          \     /
            G

A query can begin from an entry point and move through the graph toward
vectors that appear increasingly similar.

Instead of examining every node, the search explores promising regions.
`
    },

    {
      heading: "8. HNSW",

      content: `
Hierarchical Navigable Small World (HNSW) is a widely used graph-based
ANN approach.

The conceptual idea is to create multiple graph layers.

Top layers:
    sparse
    long-range connections

Lower layers:
    denser
    local connections

A search can move rapidly across long distances in upper layers and then
refine the result in lower layers.
`,

      classificationTree: `
HNSW
│
├── Upper Layer
│   └── Long-range navigation
│
├── Middle Layer
│   └── Intermediate navigation
│
└── Bottom Layer
    └── Detailed local search
`
    },

    {
      heading: "9. HNSW Search Intuition",

      content: `
Suppose the query is somewhere near node Z.

The search may begin at an entry node in an upper layer.

It evaluates neighboring nodes:

Current
  ↓
Better neighbor
  ↓
Better neighbor
  ↓
Lower layer
  ↓
Local refinement
  ↓
Top-k candidates

The algorithm does not need to inspect every vector.
`
    },

    {
      heading: "10. HNSW Parameters",

      content: `
Important conceptual HNSW parameters include:

M:
    controls the number of connections maintained for nodes.

efConstruction:
    controls the search breadth during index construction.

efSearch:
    controls the search breadth during querying.

Increasing search breadth can improve recall but may increase latency.
`
    },

    {
      heading: "11. Partition-Based Search",

      content: `
Another strategy divides the vector space into regions.

Conceptually:

             VECTOR SPACE

        ┌────────┬────────┐
        │   A    │   B    │
        │        │        │
        ├────────┼────────┤
        │   C    │   D    │
        │        │        │
        └────────┴────────┘

A query is assigned to promising regions.

The system searches those regions rather than the entire collection.
`
    },

    {
      heading: "12. Inverted File Indexing",

      content: `
Inverted File (IVF) style approaches can cluster vectors.

Example:

Cluster 1 → vectors near centroid 1
Cluster 2 → vectors near centroid 2
Cluster 3 → vectors near centroid 3

For a query:

1. Find the closest clusters.
2. Search vectors inside those clusters.
3. Rank candidates.

A parameter such as the number of clusters searched can control the
speed-recall trade-off.
`
    },

    {
      heading: "13. Quantization",

      content: `
Quantization reduces the precision or representation size of vectors.

For example:

float32
    ↓
lower-precision representation

This can reduce memory usage and improve efficiency.

However, compression can introduce approximation error.

Therefore:

memory efficiency
        ↕
representation accuracy

must be balanced.
`
    },

    {
      heading: "14. ANN Tuning",

      content: `
ANN systems expose parameters that control search behavior.

A typical tuning process is:

Choose index
    ↓
Build index
    ↓
Measure recall
    ↓
Measure latency
    ↓
Adjust search parameters
    ↓
Measure again
    ↓
Select operating point

The goal is not maximum recall at any cost.

The goal is an acceptable balance for the application.
`
    },

    {
      heading: "15. Recall-Latency Trade-off",

      comparisonTables: [
        {
          title: "ANN Operating Points",
          columns: ["Configuration", "Recall", "Latency", "Use"],
          rows: [
            ["Low search effort", "Lower", "Lower", "Latency-sensitive applications"],
            ["Medium search effort", "Medium", "Medium", "General retrieval"],
            ["High search effort", "Higher", "Higher", "Quality-sensitive retrieval"]
          ]
        }
      ],

      content: `
There is usually no single configuration that is optimal for every
application.

An interactive assistant may prioritize latency.

A scientific knowledge system may prioritize retrieval recall.

The correct operating point depends on the product requirements.
`
    },

    {
      heading: "16. ANN Evaluation Pipeline",

      process: [
        "Create a representative query dataset.",
        "Compute exact nearest neighbors.",
        "Run ANN search.",
        "Compare ANN results with exact results.",
        "Calculate recall@k.",
        "Measure latency.",
        "Measure memory usage.",
        "Tune ANN parameters.",
        "Repeat until an acceptable operating point is found."
      ]
    },

    {
      heading: "17. ANN in RAG",

      content: `
A production RAG system can use ANN as follows:

Documents
    ↓
Chunks
    ↓
Embeddings
    ↓
ANN index
    ↓
Query embedding
    ↓
ANN retrieval
    ↓
Top-k candidates
    ↓
Reranking
    ↓
Context construction
    ↓
LLM generation

ANN therefore affects the retrieval stage before generation.
`
    },

    {
      heading: "18. Important Engineering Principle",

      content: `
ANN optimization should not be performed in isolation.

Improving search latency by drastically reducing recall can harm the
overall RAG system.

Likewise, maximizing recall while creating unacceptable latency can
damage user experience.

The real objective is end-to-end system quality:

retrieval quality
+
generation quality
+
latency
+
cost
+
reliability
`
    }
  ],

  codeExamples: [
    {
      title: "Exact Top-K Search",
      language: "python",
      code: `import numpy as np

vectors = np.array([
    [1.0, 0.0],
    [0.8, 0.2],
    [0.0, 1.0],
    [0.2, 0.9]
])

query = np.array([1.0, 0.1])

scores = vectors @ query

top_k = np.argsort(scores)[::-1][:2]

for index in top_k:
    print(
        "Vector:",
        index,
        "Score:",
        scores[index]
    )`,
      explanation:
        "This demonstrates brute-force scoring before using an ANN index."
    },

    {
      title: "Recall@K",
      language: "python",
      code: `def recall_at_k(expected, retrieved):
    expected = set(expected)
    retrieved = set(retrieved)

    if not expected:
        return 0.0

    return len(expected & retrieved) / len(expected)


expected = ["A", "B", "C", "D", "E"]
retrieved = ["A", "B", "C", "X", "Y"]

print(recall_at_k(expected, retrieved))`,
      explanation:
        "Recall measures how many expected relevant results were recovered."
    },

    {
      title: "Latency Measurement",
      language: "python",
      code: `import time

start = time.perf_counter()

# Simulated search operation
results = sorted(
    [0.2, 0.9, 0.4, 0.8, 0.7],
    reverse=True
)

elapsed = time.perf_counter() - start

print("Results:", results)
print("Latency:", elapsed)`,
      explanation:
        "ANN evaluation should consider latency in addition to recall."
    }
  ],

  mathIntuition: [
    {
      concept: "Exact search",
      intuition:
        "Every vector is compared with the query, so the result is exact for the selected metric."
    },
    {
      concept: "Approximate search",
      intuition:
        "An index reduces the amount of work by searching only promising regions or candidates."
    },
    {
      concept: "Recall",
      intuition:
        "Recall measures how many of the expected nearest neighbors were successfully retrieved."
    },
    {
      concept: "Quantization",
      intuition:
        "Quantization compresses numerical representations to reduce memory or computation at the cost of some approximation."
    }
  ],

  comparisonTables: [
    {
      title: "ANN Families",
      columns: ["Family", "Core Idea", "Main Advantage"],
      rows: [
        ["Graph-based", "Navigate a graph of nearby vectors", "Strong search quality and flexible navigation"],
        ["Partition-based", "Search selected regions", "Reduces candidate space"],
        ["Hashing-based", "Map similar vectors to related buckets", "Fast candidate generation"],
        ["Quantization", "Compress vector representation", "Memory efficiency"]
      ]
    }
  ],

  exercises: [
    "Why does brute-force nearest-neighbor search become expensive?",
    "Define approximate nearest-neighbor search.",
    "What is recall@k?",
    "Explain the central ANN speed-recall trade-off.",
    "Explain the basic idea of HNSW.",
    "What are the roles of M, efConstruction, and efSearch conceptually?",
    "Explain partition-based vector search.",
    "What is quantization?",
    "Why should ANN be evaluated against exact search?",
    "Why can maximizing recall alone be a poor production objective?"
  ],

  codingExercises: [
    {
      title: "Exact Search Benchmark",
      task: "Generate increasingly large vector collections and measure brute-force search latency."
    },
    {
      title: "Recall Evaluation",
      task: "Compare approximate retrieval results against a known exact top-k result set."
    },
    {
      title: "Parameter Sweep",
      task: "Create an experiment that records recall and latency for multiple search configurations."
    }
  ],

  architectureExercises: [
    "Design an ANN-based retrieval layer for one million vectors.",
    "Design a benchmark comparing exact and approximate search.",
    "Design an ANN tuning workflow for a production RAG system.",
    "Explain where reranking should occur after ANN retrieval."
  ],

  commonMistakes: [
    "Assuming ANN means random or low-quality search.",
    "Ignoring recall when optimizing latency.",
    "Comparing ANN systems without a common query dataset.",
    "Tuning indexes using only synthetic queries.",
    "Ignoring memory consumption.",
    "Assuming one ANN algorithm is best for every workload.",
    "Optimizing vector retrieval without measuring end-to-end RAG quality."
  ],

  interviewQuestions: [
    {
      question: "What is ANN search?",
      answer:
        "Approximate nearest-neighbor search uses specialized indexes to find likely nearest vectors without comparing the query against every stored vector."
    },
    {
      question: "Why is ANN useful?",
      answer:
        "It can significantly reduce search work and latency for large vector collections."
    },
    {
      question: "What is HNSW?",
      answer:
        "A graph-based approximate nearest-neighbor indexing approach that uses hierarchical layers to navigate toward nearby vectors efficiently."
    },
    {
      question: "What is the recall-latency trade-off?",
      answer:
        "Increasing search effort can improve retrieval recall but generally increases computation and latency."
    }
  ],

  summary: [
    "Nearest-neighbor search finds vectors closest to a query.",
    "Exact search compares the query against every vector.",
    "ANN reduces search work using specialized indexes.",
    "HNSW is a graph-based ANN approach.",
    "Partition-based methods reduce the candidate search space.",
    "Quantization can reduce memory and computational requirements.",
    "ANN systems must be evaluated using recall, latency, and memory.",
    "The best configuration balances retrieval quality with application requirements."
  ],

  keyTakeaways: [
    "ANN is a core scalability technology for vector search.",
    "Approximation introduces a measurable recall trade-off.",
    "HNSW uses graph navigation to efficiently find nearby vectors.",
    "ANN parameters should be tuned against representative workloads.",
    "Retrieval optimization should ultimately be judged at the end-to-end application level."
  ],

  visualReferences: [
    {
      title: "Exact vs ANN Search",
      type: "comparison",
      description: "Full vector scan versus indexed candidate search."
    },
    {
      title: "HNSW Hierarchical Graph",
      type: "architecture",
      description: "Sparse upper layers and dense lower layers used for graph navigation."
    },
    {
      title: "ANN Recall-Latency Curve",
      type: "chart",
      description: "Conceptual relationship between retrieval recall and search latency."
    },
    {
      title: "ANN in RAG",
      type: "architecture",
      description: "Query embedding → ANN retrieval → reranking → context → generation."
    }
  ]
};

export default lesson;