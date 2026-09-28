const lesson = {
  id: "lesson12",
  moduleId: "module5",
  lessonNumber: 12,

  title: "Advanced Vector Retrieval & Embedding System Design",

  subtitle:
    "Combine embedding models, vector search, filtering, reranking, evaluation, and infrastructure into complete retrieval architectures.",

  description: `
The previous lessons introduced individual components:

embeddings
vectors
similarity
chunking
vector databases
ANN
metadata
multi-tenancy
performance
reliability

This lesson combines those ideas into complete embedding and vector
retrieval systems.

The goal is not simply to know how vector search works.

The goal is to design a system that works correctly under realistic
requirements.
`,

  estimatedTime: "100–130 minutes",
  difficulty: "Advanced",

  learningObjectives: [
    "Design complete embedding pipelines.",
    "Select appropriate embedding strategies.",
    "Design retrieval architectures.",
    "Combine semantic search with metadata filtering.",
    "Use candidate generation and reranking.",
    "Reason about recall and latency.",
    "Design embedding migrations.",
    "Design multilingual retrieval.",
    "Design domain-specific retrieval.",
    "Evaluate complete vector retrieval systems."
  ],

  sections: [
    {
      heading: "1. Complete Embedding System",

      process: [
        "Collect source data.",
        "Normalize content.",
        "Split documents into chunks.",
        "Attach metadata.",
        "Generate embeddings.",
        "Validate dimensions and quality.",
        "Store vectors.",
        "Build ANN index.",
        "Run retrieval evaluation.",
        "Deploy retrieval service.",
        "Monitor quality and performance."
      ]
    },

    {
      heading: "2. Choosing an Embedding Strategy",

      content: `
Embedding-model selection depends on the application.

Important dimensions include:

• semantic quality
• dimensionality
• language coverage
• domain coverage
• code support
• latency
• cost
• maximum input size
• licensing constraints
• deployment requirements

There is no universal embedding configuration for every application.
`
    },

    {
      heading: "3. General vs Domain-Specific Embeddings",

      comparisonTables: [
        {
          title: "Embedding Strategy",
          columns: ["Approach", "Strength", "Potential Concern"],
          rows: [
            ["General-purpose", "Broad semantic coverage", "May miss specialized terminology"],
            ["Domain-specific", "Strong domain representation", "Less general coverage"],
            ["Multilingual", "Multiple languages", "Quality may vary across languages"],
            ["Code-focused", "Programming concepts", "Not ideal for ordinary prose"]
          ]
        }
      ]
    },

    {
      heading: "4. Query and Document Representation",

      content: `
Retrieval normally compares:

query embedding

against:

document/chunk embeddings.

Conceptually:

q = embed(query)

d_i = embed(document_i)

score_i = similarity(q, d_i)

The system then ranks:

d_1, d_2, ..., d_n

by score.
`
    },

    {
      heading: "5. Query-Document Mismatch",

      content: `
A retrieval system can fail even when the vector database is functioning.

For example:

User query:
"How do I stop the service automatically?"

Document:
"Automatic process termination is configured through shutdown policies."

The words differ substantially.

A strong embedding model should represent related meaning even when
surface vocabulary differs.

This is one reason semantic retrieval is useful.
`
    },

    {
      heading: "6. Hybrid Retrieval Architecture",

      classificationTree: `
QUERY
│
├── Semantic Representation
│        ↓
│    Dense Retrieval
│
└── Keyword Representation
         ↓
     Sparse Retrieval
          │
          └──────┐
                 ↓
          Candidate Fusion
                 ↓
             Reranking
                 ↓
             Top Results
`
    },

    {
      heading: "7. Retrieval Pipeline with Filters",

      process: [
        "Receive user query.",
        "Authenticate user.",
        "Determine tenant.",
        "Construct authorization constraints.",
        "Generate query embedding.",
        "Apply metadata constraints.",
        "Run ANN retrieval.",
        "Combine with keyword retrieval when needed.",
        "Rerank candidates.",
        "Return top results with metadata."
      ]
    },

    {
      heading: "8. Candidate Generation",

      content: `
The first retrieval stage should normally be relatively inexpensive.

Example:

1,000,000 vectors
       ↓
ANN search
       ↓
top 100 candidates
       ↓
reranking
       ↓
top 10

Candidate generation focuses on recall.

Reranking focuses more strongly on ordering quality.
`
    },

    {
      heading: "9. Reranking",

      content: `
A reranker receives:

query + candidate document

and estimates how well they match.

Conceptually:

score(query, document)

This can provide a stronger relevance judgment than raw vector
similarity alone.

The trade-off is computational cost.
`
    },

    {
      heading: "10. Recall vs Latency",

      formulas: [
        "Recall@k = relevant retrieved items / total relevant items"
      ],

      content: `
Increasing search effort can improve recall.

But increased search effort can increase latency.

Therefore retrieval engineering is often a constrained optimization
problem:

maximize retrieval quality

subject to:

latency ≤ target
cost ≤ target
memory ≤ target
`
    },

    {
      heading: "11. Multilingual Retrieval",

      content: `
A multilingual application may contain:

English
Hindi
Telugu
Tamil
French
German
etc.

The embedding strategy must consider whether semantically equivalent
content in different languages maps to compatible vector regions.

A multilingual retrieval architecture may use:

language detection
       ↓
multilingual embedding
       ↓
shared vector space
       ↓
semantic retrieval
`
    },

    {
      heading: "12. Domain-Specific Retrieval",

      content: `
Specialized domains may contain vocabulary that general models do not
represent optimally.

Examples include:

• medicine
• law
• finance
• engineering
• scientific literature
• source code

Evaluation should therefore use domain-specific queries rather than
only generic benchmark questions.
`
    },

    {
      heading: "13. Embedding Migration",

      content: `
Changing an embedding model is not simply changing one configuration.

Old vectors:

    model-A
    dimension = 768

New vectors:

    model-B
    dimension = 1024

These may not be directly interchangeable.

A migration can use:

OLD INDEX
    │
    ├── continue serving
    │
    └── source chunks
            ↓
        NEW MODEL
            ↓
        NEW VECTORS
            ↓
        NEW INDEX
            ↓
        EVALUATION
            ↓
        TRAFFIC SWITCH
`
    },

    {
      heading: "14. Shadow Evaluation",

      content: `
A new retrieval system can sometimes be evaluated without immediately
serving its results to users.

Production queries can be copied to:

Current retrieval
       +
Candidate retrieval

The candidate system's results are measured offline.

This is useful for comparing:

• recall
• ranking
• latency
• cost
`
    },

    {
      heading: "15. Evaluation Dataset",

      content: `
A retrieval evaluation dataset can contain:

{
  "query": "How do I configure connection pooling?",
  "relevant_documents": [
    "doc-17",
    "doc-23"
  ]
}

For every query the system can measure:

Recall@k
Precision@k
MRR
NDCG
latency
`
    },

    {
      heading: "16. Complete System Design Example",

      content: `
Consider an enterprise knowledge assistant.

Requirements:

• multiple organizations
• millions of chunks
• PDF and HTML documents
• semantic search
• exact keyword search
• access control
• citations
• low latency
• continuous updates

Possible architecture:

Documents
   ↓
Extraction
   ↓
Chunking
   ↓
Metadata
   ↓
Embedding
   ↓
Vector Store
   +
Keyword Index
   ↓
Hybrid Retrieval
   ↓
Reranking
   ↓
Authorization Validation
   ↓
Top Context
   ↓
LLM
`
    },

    {
      heading: "17. Design Checklist",

      classificationTree: `
VECTOR SYSTEM DESIGN
│
├── DATA
│   ├── Source
│   ├── Chunking
│   └── Metadata
│
├── REPRESENTATION
│   ├── Embedding model
│   ├── Dimensions
│   └── Normalization
│
├── RETRIEVAL
│   ├── ANN
│   ├── Filters
│   ├── Hybrid search
│   └── Reranking
│
├── QUALITY
│   ├── Recall
│   ├── Precision
│   ├── MRR
│   └── NDCG
│
├── PERFORMANCE
│   ├── Latency
│   ├── Throughput
│   └── Cost
│
└── PRODUCTION
    ├── Security
    ├── Monitoring
    ├── Backup
    ├── Scaling
    └── Recovery
`
    }
  ],

  codeExamples: [
    {
      title: "Cosine Retrieval",
      language: "python",
      code: `import math

def cosine(a, b):
    dot = sum(x * y for x, y in zip(a, b))

    norm_a = math.sqrt(sum(x * x for x in a))
    norm_b = math.sqrt(sum(y * y for y in b))

    if norm_a == 0 or norm_b == 0:
        return 0.0

    return dot / (norm_a * norm_b)


query = [1.0, 0.0]

documents = {
    "doc-a": [0.9, 0.1],
    "doc-b": [0.0, 1.0],
    "doc-c": [0.8, 0.2]
}

ranked = sorted(
    documents.items(),
    key=lambda item: cosine(query, item[1]),
    reverse=True
)

print(ranked)`,
      explanation:
        "The query is compared with every document vector and the results are ranked by cosine similarity."
    },

    {
      title: "Recall@K",
      language: "python",
      code: `def recall_at_k(retrieved, relevant, k):
    retrieved_top_k = retrieved[:k]

    hits = sum(
        1
        for item in retrieved_top_k
        if item in relevant
    )

    return hits / len(relevant) if relevant else 0.0


retrieved = ["d3", "d7", "d2", "d8"]
relevant = {"d2", "d8"}

print(recall_at_k(retrieved, relevant, 3))`,
      explanation:
        "Recall@k measures how many known relevant documents were retrieved within the first k results."
    },

    {
      title: "Simple Retrieval Pipeline",
      language: "python",
      code: `def retrieve(query_vector, records, k=3):
    scored = []

    for record in records:
        score = cosine(query_vector, record["vector"])

        scored.append({
            "id": record["id"],
            "score": score,
            "metadata": record["metadata"]
        })

    scored.sort(
        key=lambda item: item["score"],
        reverse=True
    )

    return scored[:k]`,
      explanation:
        "A retrieval service can return ranked candidates together with metadata."
    }
  ],

  mathIntuition: [
    {
      concept: "Retrieval ranking",
      intuition:
        "The embedding converts semantic relationships into geometric relationships that can be ranked."
    },
    {
      concept: "Recall",
      intuition:
        "Recall measures whether relevant information survives the retrieval stage."
    },
    {
      concept: "Optimization",
      intuition:
        "Production retrieval balances relevance against latency, memory, and cost."
    },
    {
      concept: "Two-stage retrieval",
      intuition:
        "A cheap first stage finds candidates while a more expensive second stage improves ordering."
    }
  ],

  formulas: [
    "cosine(q,d) = (q · d) / (||q|| ||d||)",
    "Recall@k = relevant retrieved items / total relevant items",
    "Precision@k = relevant retrieved items / k",
    "MRR = average reciprocal rank of the first relevant result",
    "Total retrieval cost ≈ embedding + ANN + filtering + reranking"
  ],

  exercises: [
    "How do you choose an embedding model?",
    "Why can a general-purpose embedding model perform poorly in a specialized domain?",
    "Explain query-document mismatch.",
    "Design a hybrid retrieval system.",
    "Why separate candidate generation from reranking?",
    "Explain the recall-latency trade-off.",
    "How would you migrate from one embedding model to another?",
    "What is shadow evaluation?",
    "How would you evaluate multilingual retrieval?",
    "Design an enterprise vector retrieval architecture."
  ],

  codingExercises: [
    {
      title: "Top-K Semantic Search",
      task: "Implement cosine-similarity retrieval and return the top-k documents."
    },
    {
      title: "Metadata-Aware Retrieval",
      task: "Add tenant and document-type filters to a semantic search implementation."
    },
    {
      title: "Retrieval Evaluation",
      task: "Implement Precision@k, Recall@k, and MRR."
    },
    {
      title: "Embedding Migration Simulator",
      task: "Simulate two embedding models and compare their retrieval results over a test set."
    }
  ],

  architectureExercises: [
    "Design a multilingual knowledge retrieval system.",
    "Design a domain-specific legal document retrieval system.",
    "Design a hybrid semantic + keyword retrieval system.",
    "Design an embedding-model migration with zero planned downtime.",
    "Design an enterprise multi-tenant vector search platform."
  ],

  commonMistakes: [
    "Selecting an embedding model without evaluation.",
    "Optimizing latency while ignoring recall.",
    "Using too few ANN candidates before reranking.",
    "Ignoring metadata security.",
    "Assuming different embedding models produce interchangeable vectors.",
    "Evaluating retrieval with unrealistic queries.",
    "Using only average latency.",
    "Ignoring multilingual or domain-specific behavior."
  ],

  interviewQuestions: [
    {
      question: "Why use two-stage retrieval?",
      answer:
        "A fast retrieval stage can produce a manageable candidate set, allowing a more expensive reranker to improve final ranking."
    },
    {
      question: "Why can embedding-model migrations require rebuilding vectors?",
      answer:
        "Different models can produce vectors with different dimensions and representation spaces."
    },
    {
      question: "What is shadow evaluation?",
      answer:
        "It evaluates a candidate system using production-like queries without immediately exposing its results to users."
    },
    {
      question: "What should determine embedding-model selection?",
      answer:
        "Quality, domain and language coverage, dimensions, latency, cost, deployment constraints, and measured retrieval performance."
    }
  ],

  summary: [
    "Complete vector systems combine representation, storage, retrieval, filtering, ranking, evaluation, and operations.",
    "Embedding selection should be driven by application requirements and evaluation.",
    "Hybrid retrieval can combine semantic and lexical strengths.",
    "Candidate generation and reranking solve different problems.",
    "Embedding migrations require new vectors and careful evaluation.",
    "Production vector retrieval is an optimization problem involving quality, latency, memory, and cost."
  ],

  keyTakeaways: [
    "A good vector system is designed as an end-to-end retrieval architecture.",
    "Embedding quality must be evaluated against real application queries.",
    "Recall is a critical signal for retrieval systems.",
    "Security constraints must remain part of retrieval design.",
    "Production systems require evaluation before architecture changes are deployed."
  ],

  visualReferences: [
    {
      title: "Complete Embedding Pipeline",
      type: "architecture",
      description: "Source → chunking → embedding → vector database → ANN → evaluation."
    },
    {
      title: "Two-Stage Retrieval",
      type: "flowchart",
      description: "Candidate generation → reranking → final results."
    },
    {
      title: "Embedding Migration",
      type: "architecture",
      description: "Old model/index → new model/index → shadow evaluation → traffic switch."
    },
    {
      title: "Enterprise Vector Architecture",
      type: "architecture",
      description: "Multi-tenant source ingestion, hybrid retrieval, authorization, reranking and monitoring."
    }
  ]
};

export default lesson;