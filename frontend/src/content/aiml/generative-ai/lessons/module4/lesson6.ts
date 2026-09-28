const lesson = {
  id: "lesson6",
  moduleId: "module4",
  title: "Vector Databases & Similarity Search",
  subtitle: "Understand how embeddings are stored, indexed, searched, filtered, and retrieved efficiently at scale.",

  overview: `
Once documents have been converted into embeddings, the system needs a way
to store and search those vectors efficiently.

A vector database or vector index provides infrastructure for this purpose.

The conceptual workflow is:

DOCUMENT CHUNKS
      ↓
EMBEDDING MODEL
      ↓
VECTORS
      ↓
VECTOR DATABASE
      ↓
SIMILARITY INDEX
      ↓
QUERY VECTOR
      ↓
NEAREST-NEIGHBOR SEARCH
      ↓
TOP-K RESULTS
      ↓
METADATA FILTERING
      ↓
RAG CONTEXT

A simple brute-force search compares the query against every vector.

That can work for small datasets but becomes expensive at large scale.

Modern systems therefore use approximate nearest-neighbor methods and
specialized indexing structures to make vector search faster.
`,

  learningObjectives: [
    "Explain what a vector database is.",
    "Understand vector storage.",
    "Understand metadata storage.",
    "Understand nearest-neighbor search.",
    "Understand exact versus approximate search.",
    "Understand approximate nearest-neighbor indexing.",
    "Understand HNSW conceptually.",
    "Understand IVF conceptually.",
    "Understand top-k vector search.",
    "Understand metadata filtering.",
    "Understand namespaces and collections.",
    "Understand indexing trade-offs.",
    "Understand vector database scaling concerns."
  ],

  prerequisites: [
    "RAG fundamentals",
    "Embeddings",
    "Cosine similarity",
    "Basic databases"
  ],

  keyTerms: [
    {
      term: "Vector Database",
      definition: "A system optimized for storing and retrieving vector representations."
    },
    {
      term: "Nearest Neighbor",
      definition: "A vector that is close to a query vector according to a selected distance or similarity function."
    },
    {
      term: "ANN",
      definition: "Approximate Nearest Neighbor search trades some exactness for improved search speed and scalability."
    },
    {
      term: "HNSW",
      definition: "Hierarchical Navigable Small World, a graph-based approximate nearest-neighbor indexing method."
    },
    {
      term: "IVF",
      definition: "Inverted File indexing partitions vector space into groups to reduce the search area."
    },
    {
      term: "Metadata Filter",
      definition: "A condition that restricts which records can participate in retrieval."
    },
    {
      term: "Collection",
      definition: "A logical grouping of vectors and associated records."
    },
    {
      term: "Namespace",
      definition: "A logical separation of records within a vector storage system."
    }
  ],

  sections: [
    {
      title: "1. Why Do We Need a Vector Database?",
      explanation: `
Suppose an application contains 10 million document chunks.

Each chunk has:

• Text
• Embedding
• Metadata

A query produces a vector.

The system needs to find the most relevant vectors quickly.

A vector database provides storage, indexing, search, filtering,
and management capabilities for this workload.
`
    },

    {
      title: "2. What Does a Vector Record Contain?",
      explanation: `
A typical record may contain:

{
  id: "doc42-chunk7",

  vector: [0.12, -0.31, 0.77, ...],

  text: "Students must maintain 75% attendance.",

  metadata: {
    document: "handbook.pdf",
    page: 42,
    department: "IT",
    year: 2026
  }
}

The vector enables similarity search.

The metadata enables filtering and traceability.

The text provides the content returned to the RAG pipeline.
`
    },

    {
      title: "3. Exact Nearest-Neighbor Search",
      explanation: `
The simplest approach is:

For every stored vector:
    calculate similarity with query

Then:

sort by similarity
return top k

If there are N vectors, the query may require approximately N similarity
comparisons.

This can be acceptable for small collections but expensive for very large indexes.
`
    },

    {
      title: "4. Approximate Nearest Neighbor",
      explanation: `
Approximate Nearest Neighbor (ANN) methods avoid examining every vector.

Instead they use specialized index structures to identify likely candidates.

The goal is:

Much faster search

while maintaining

high retrieval quality.
`
    },

    {
      title: "5. HNSW",
      explanation: `
HNSW is a graph-based approximate nearest-neighbor method.

Conceptually:

Layer 2:
       A -------- B
        \        /
          C

Layer 1:
A --- D --- E --- B
      \     /
        C

The system navigates a graph toward vectors that are increasingly
close to the query.

The exact implementation is more sophisticated, but the important concept
is graph-based navigation through vector space.
`
    },

    {
      title: "6. IVF",
      explanation: `
Inverted File indexing divides vectors into clusters.

Conceptually:

Vector Space
    ↓
Cluster 1
Cluster 2
Cluster 3
Cluster 4

For a query:

1. Determine the closest cluster(s).
2. Search primarily within those clusters.
3. Return the best candidates.

This reduces the number of vectors that need to be examined.
`
    },

    {
      title: "7. Exact vs Approximate Search",
      explanation: `
Exact search:

Pros:
• Exact nearest neighbors
• Simple conceptually

Cons:
• Expensive at scale

Approximate search:

Pros:
• Much faster
• Scales better

Cons:
• May not return the mathematically exact nearest neighbors

Production systems choose parameters based on the application's
quality and latency requirements.
`
    },

    {
      title: "8. Top-k Search",
      explanation: `
A query might request:

top_k = 5

The vector index returns five high-scoring candidates.

Example:

1. Chunk A — 0.94
2. Chunk D — 0.91
3. Chunk B — 0.88
4. Chunk H — 0.84
5. Chunk C — 0.81

The application can then construct context from those results.
`
    },

    {
      title: "9. Metadata Filtering",
      explanation: `
Vector similarity alone may not be sufficient.

Suppose the knowledge base contains policies from:

2023
2024
2025
2026

A query asks for the current policy.

The application can filter:

year >= 2026

before or during similarity retrieval depending on the system.

Other filters:

department = "IT"
document_type = "policy"
access_level = "student"
language = "en"
`
    },

    {
      title: "10. Hybrid Filtering and Retrieval",
      explanation: `
A powerful retrieval query can combine:

Semantic similarity
+
Metadata filtering
+
Keyword matching

Example:

Find documents semantically related to:

"attendance"

AND:

department = "IT"

AND:

year = 2026

AND:

document_type = "policy"

This can dramatically reduce irrelevant candidates.
`
    },

    {
      title: "11. Collections and Namespaces",
      explanation: `
Large systems may logically separate data.

Example collections:

university_docs
product_docs
support_docs

Or namespaces:

tenant_a
tenant_b
tenant_c

Logical separation can simplify:

• Multi-tenancy
• Access control
• Data management
• Index lifecycle
`
    },

    {
      title: "12. Multi-Tenant Vector Search",
      explanation: `
Suppose a SaaS application serves 100 companies.

Tenant A must not retrieve Tenant B's documents.

Possible architecture:

Tenant
  ↓
Authorization
  ↓
Tenant filter / namespace
  ↓
Vector search

Security must be enforced at the retrieval layer rather than trusting
the LLM to ignore unauthorized information.
`
    },

    {
      title: "13. Index Updates",
      explanation: `
Documents can be:

• Inserted
• Updated
• Deleted

If a document changes:

Old chunks
    ↓
Remove or deactivate

New chunks
    ↓
Embed
    ↓
Insert

The index therefore requires lifecycle management.
`
    },

    {
      title: "14. Vector Database Scaling",
      explanation: `
As the number of vectors grows, important concerns include:

• Memory
• Storage
• Query latency
• Index build time
• Replication
• Sharding
• Backup
• Availability
• Cost

A production architecture must consider these requirements early enough
to avoid expensive redesigns.
`
    },

    {
      title: "15. Filtering Before vs After Retrieval",
      explanation: `
Pre-filtering:
Apply metadata restrictions before similarity search.

Post-filtering:
Retrieve candidates first and filter afterward.

If security is involved, relying on post-filtering can be dangerous
because unauthorized records may already have entered the retrieval pipeline.

The exact behavior depends on the database and architecture.
`
    },

    {
      title: "16. Similarity Thresholds",
      explanation: `
Instead of always returning exactly k results, a system may apply a threshold.

Example:

return result only if similarity >= 0.80

This can support abstention when no sufficiently relevant result exists.

However, thresholds are model- and dataset-dependent.

A value such as 0.80 does not universally mean "correct."
`
    },

    {
      title: "17. Vector Database Does Not Solve Retrieval Alone",
      explanation: `
A vector database provides infrastructure.

It does not automatically guarantee:

• Good chunking
• Good embeddings
• Correct metadata
• Correct query formulation
• Good reranking
• Grounded answers

Overall retrieval quality depends on the complete pipeline.
`
    },

    {
      title: "18. Complete Retrieval Architecture",
      explanation: `
User Query
    ↓
Query Embedding
    ↓
Metadata / Access Filters
    ↓
Vector Search
    ↓
Top-k Candidates
    ↓
Optional Keyword Search
    ↓
Optional Reranking
    ↓
Final Context
    ↓
LLM
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "Brute-Force Search Complexity",
      formula: `
O(ND)
`,
      explanation: `
For N vectors with D dimensions, comparing one query against every vector
requires work proportional to N × D.
`
    },
    {
      concept: "Top-k Retrieval",
      formula: `
TopK(q) = arg top_k score(q, x)
`,
      explanation: "The retrieval system selects the k highest-scoring vectors for the query."
    },
    {
      concept: "Recall of ANN",
      formula: `
Recall@k = relevant retrieved results / relevant results found by exact search
`,
      explanation: "ANN systems can be evaluated by comparing their retrieval with exact nearest-neighbor results."
    },
    {
      concept: "Memory",
      formula: `
Approximate vector memory ∝ N × D × bytes_per_dimension
`,
      explanation: "The number of vectors and their dimensions strongly influence storage requirements."
    }
  ],

  codeExamples: [
    {
      title: "Simple In-Memory Vector Search",
      language: "python",
      code: `
def cosine_similarity(a, b):
    dot = sum(x * y for x, y in zip(a, b))

    mag_a = sum(x * x for x in a) ** 0.5
    mag_b = sum(x * x for x in b) ** 0.5

    if mag_a == 0 or mag_b == 0:
        return 0

    return dot / (mag_a * mag_b)


def search(query, records, k=3):
    scored = []

    for record in records:
        score = cosine_similarity(
            query,
            record["vector"]
        )

        scored.append((score, record))

    scored.sort(
        key=lambda item: item[0],
        reverse=True
    )

    return scored[:k]
`
    },

    {
      title: "Metadata Filtering",
      language: "python",
      code: `
def filter_records(records, department=None, year=None):
    results = records

    if department is not None:
        results = [
            r for r in results
            if r["metadata"]["department"] == department
        ]

    if year is not None:
        results = [
            r for r in results
            if r["metadata"]["year"] == year
        ]

    return results
`
    },

    {
      title: "Combined Filtering and Search",
      language: "python",
      code: `
def filtered_vector_search(
    query,
    records,
    department,
    year,
    k=5
):
    candidates = filter_records(
        records,
        department=department,
        year=year
    )

    return search(
        query,
        candidates,
        k=k
    )
`
    },

    {
      title: "Vector Record Structure",
      language: "python",
      code: `
record = {
    "id": "handbook-2026-0042",
    "vector": [0.12, -0.43, 0.77],
    "text": "Students must maintain 75% attendance.",
    "metadata": {
        "document": "handbook.pdf",
        "page": 42,
        "department": "IT",
        "year": 2026,
        "document_type": "policy"
    }
}

print(record["id"])
print(record["metadata"])
`
    },

    {
      title: "Conceptual Vector Database Interface",
      language: "python",
      code: `
class VectorStore:

    def __init__(self):
        self.records = []

    def add(self, record):
        self.records.append(record)

    def search(self, query_vector, k=5):
        return search(
            query_vector,
            self.records,
            k=k
        )


store = VectorStore()

store.add({
    "id": "doc1",
    "vector": [0.8, 0.1, 0.2],
    "text": "RAG uses retrieval."
})

results = store.search(
    [0.75, 0.15, 0.2],
    k=1
)

print(results)
`
    }
  ],

  comparisonTables: [
    {
      title: "Exact vs Approximate Search",
      columns: [
        "Aspect",
        "Exact",
        "Approximate"
      ],
      rows: [
        ["Accuracy", "Exact nearest neighbors", "Approximation"],
        ["Speed", "Can become expensive", "Usually faster"],
        ["Scale", "Best for smaller datasets", "Useful for large datasets"],
        ["Complexity", "Simple conceptually", "Index configuration required"],
        ["Trade-off", "Quality for computation", "Speed for slight approximation"]
      ]
    },
    {
      title: "HNSW vs IVF Conceptually",
      columns: [
        "Aspect",
        "HNSW",
        "IVF"
      ],
      rows: [
        ["Core idea", "Graph navigation", "Vector-space partitions"],
        ["Search", "Navigate graph", "Search selected clusters"],
        ["Tuning", "Graph parameters", "Cluster/search parameters"],
        ["Use", "Fast ANN search", "Large-scale partitioned search"]
      ]
    },
    {
      title: "Vector Search vs Keyword Search",
      columns: [
        "Aspect",
        "Vector",
        "Keyword"
      ],
      rows: [
        ["Meaning similarity", "Strong", "Limited"],
        ["Exact terminology", "Can miss", "Strong"],
        ["Synonyms", "Strong", "Depends on query expansion"],
        ["Rare identifiers", "Can be weak", "Often strong"],
        ["Hybrid", "Recommended when useful", "Recommended when useful"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "Vector Database Architecture",
      type: "architecture",
      description: "Show vectors, metadata, index, query vector, nearest-neighbor search, and returned chunks."
    },
    {
      title: "Exact vs Approximate Search",
      type: "comparison",
      description: "Visualize searching every vector versus searching an optimized index."
    },
    {
      title: "HNSW Graph",
      type: "diagram",
      description: "Illustrate hierarchical graph navigation through vector space."
    },
    {
      title: "IVF Clustering",
      type: "diagram",
      description: "Visualize vectors grouped into clusters and a query searching relevant clusters."
    },
    {
      title: "Metadata-Filtered Retrieval",
      type: "flowchart",
      description: "Show authorization and metadata filters interacting with vector retrieval."
    },
    {
      title: "Multi-Tenant Vector Architecture",
      type: "architecture",
      description: "Show isolated tenant namespaces and retrieval boundaries."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Build an In-Memory Vector Store",
      task: "Implement insertion, cosine similarity, top-k search, and metadata filtering in Python."
    },
    {
      title: "Exercise 2 — Exact Search Complexity",
      task: "Estimate the number of similarity operations for 1,000, 100,000, and 1,000,000 vectors."
    },
    {
      title: "Exercise 3 — Metadata Filtering",
      task: "Design retrieval filters for tenant, department, year, document type, and access level."
    },
    {
      title: "Exercise 4 — ANN Concepts",
      task: "Draw a conceptual HNSW graph and explain how graph navigation can reduce search work."
    },
    {
      title: "Exercise 5 — Hybrid Retrieval",
      task: "Design a retrieval system that combines vector similarity with keyword search and metadata filtering."
    },
    {
      title: "Exercise 6 — Retrieval Threshold",
      task: "Design an experiment to determine whether a similarity threshold improves answer quality."
    }
  ],

  interviewQuestions: [
    {
      question: "What is a vector database?",
      answer: "A system optimized for storing, indexing, and searching vector representations."
    },
    {
      question: "What is nearest-neighbor search?",
      answer: "Finding vectors that are most similar or closest to a query vector according to a chosen metric."
    },
    {
      question: "Why use ANN?",
      answer: "Approximate nearest-neighbor methods can significantly reduce search cost for large vector collections."
    },
    {
      question: "What is HNSW?",
      answer: "A graph-based approximate nearest-neighbor indexing approach."
    },
    {
      question: "What is IVF?",
      answer: "An indexing approach that partitions vector space into clusters and searches selected clusters."
    },
    {
      question: "Why is metadata filtering important?",
      answer: "It can improve relevance and enforce constraints such as department, date, document type, and authorization."
    },
    {
      question: "Can a vector database eliminate hallucinations?",
      answer: "No. It only provides retrieval infrastructure. Generation and other pipeline stages can still fail."
    }
  ],

  commonMistakes: [
    "Assuming vector databases automatically provide semantic correctness.",
    "Ignoring metadata filters.",
    "Ignoring access control.",
    "Using approximate search without measuring retrieval quality.",
    "Returning too many results.",
    "Using only vector search for exact identifiers.",
    "Changing vector dimensions without considering index compatibility.",
    "Ignoring index update and deletion workflows."
  ],

  keyTakeaways: [
    "Vector databases store and search embedding representations.",
    "Exact search compares against every vector.",
    "ANN methods improve search efficiency at scale.",
    "HNSW uses graph-based navigation.",
    "IVF uses vector-space partitions.",
    "Top-k controls the number of retrieved candidates.",
    "Metadata filtering adds important retrieval constraints.",
    "Multi-tenant systems must enforce retrieval boundaries.",
    "Hybrid retrieval can combine semantic and exact matching.",
    "Vector infrastructure is only one component of overall RAG quality."
  ]
};

export default lesson;