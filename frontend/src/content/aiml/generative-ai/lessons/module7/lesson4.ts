const lesson4 = {
  id: "lesson4",
  moduleId: "module7",

  title: "Embeddings and Vector Stores",

  subtitle:
    "Convert knowledge into numerical representations and store those representations for efficient semantic retrieval.",

  description:
    "Learn how text and other information become embeddings, how vector stores organize those embeddings, how similarity search works, and how metadata filtering connects vector retrieval to practical RAG systems.",

  difficulty: "Intermediate",

  estimatedTime: "40 minutes",

  learningObjectives: [
    "Understand what an embedding is.",
    "Understand why embeddings are useful for RAG.",
    "Understand vector dimensions.",
    "Understand semantic similarity.",
    "Understand cosine similarity and dot product.",
    "Understand how documents and queries are embedded.",
    "Understand the role of vector stores.",
    "Understand vector records and metadata.",
    "Understand similarity search.",
    "Understand metadata filtering.",
    "Understand the relationship between embeddings, vector stores, and RAG."
  ],

  sections: [
    {
      id: "what-embedding",
      title: "1. What Is an Embedding?",

      content: [
        "An embedding is a numerical representation of an object such as text, an image, audio, or another piece of information.",

        "For text retrieval, an embedding model maps text into a vector in a high-dimensional numerical space.",

        "The important idea is that semantically related content can be represented by vectors that are close according to an appropriate similarity measure."
      ],

      formula: [
        "Embedding function:",
        "f(text) → vector ∈ R^d",
        "where d is the embedding dimension."
      ],

      diagram: [
        "Text",
        "↓",
        "Embedding Model",
        "↓",
        "[0.12, -0.43, 0.71, ...]",
        "↓",
        "Vector Space"
      ]
    },

    {
      id: "semantic-space",
      title: "2. Semantic Representation",

      content: [
        "Traditional keyword search primarily looks for lexical overlap between the query and documents.",

        "Embedding-based retrieval attempts to capture semantic relationships.",

        "For example, a query asking about 'tuition payment deadlines' may retrieve a document using the phrase 'fee submission last date' even if the exact words are different."
      ],

      comparisonTables: [
        {
          title: "Keyword vs Semantic Retrieval",
          columns: [
            "Keyword Search",
            "Embedding Search"
          ],
          rows: [
            [
              "Matches terms",
              "Compares representations"
            ],
            [
              "Strong lexical precision",
              "Strong semantic matching"
            ],
            [
              "Synonyms may be missed",
              "Can capture related meaning"
            ],
            [
              "Usually interpretable",
              "Requires embedding model"
            ]
          ]
        }
      ]
    },

    {
      id: "vector-dimensions",
      title: "3. Vector Dimensions",

      content: [
        "An embedding is represented by multiple numerical dimensions.",

        "If an embedding model produces a 768-dimensional vector, each piece of text is represented by 768 numerical values.",

        "The dimensions are learned representations rather than human-readable labels such as 'topic' or 'sentiment'."
      ],

      formula: [
        "e ∈ R^d",
        "For d = 768:",
        "e = [e₁, e₂, ..., e₇₆₈]"
      ],

      points: [
        "Higher dimension can provide expressive representation.",
        "Higher dimension increases storage requirements.",
        "The embedding model determines the representation space.",
        "Vectors from incompatible embedding spaces should not be compared directly."
      ]
    },

    {
      id: "embedding-pipeline",
      title: "4. Embedding Pipeline",

      diagram: [
        "Source Document",
        "↓",
        "Document Processing",
        "↓",
        "Chunking",
        "↓",
        "Text Chunk",
        "↓",
        "Embedding Model",
        "↓",
        "Vector",
        "↓",
        "Vector Store"
      ],

      content: [
        "Documents are normally embedded after processing and chunking.",

        "Each chunk receives an embedding and metadata before being inserted into the vector store."
      ]
    },

    {
      id: "query-embedding",
      title: "5. Query Embeddings",

      content: [
        "The user's query must normally be represented in the same or compatible embedding space as the indexed documents.",

        "The query is embedded using the appropriate embedding model and compared against stored document vectors."
      ],

      diagram: [
        "User Query",
        "↓",
        "Query Embedding",
        "↓",
        "Query Vector",
        "↓",
        "Similarity Search",
        "↓",
        "Top-k Document Vectors"
      ]
    },

    {
      id: "cosine",
      title: "6. Cosine Similarity",

      content: [
        "Cosine similarity measures the angle between two vectors.",

        "It is commonly used for comparing embedding vectors."
      ],

      formula: [
        "cosine_similarity(a, b) = (a · b) / (||a|| ||b||)"
      ],

      mathematicalIntuition: [
        "If two vectors point in similar directions, their cosine similarity approaches 1.",
        "If they are orthogonal, the similarity approaches 0.",
        "If they point in opposite directions, the value can approach -1 depending on the representation."
      ],

      codeExamples: [
        {
          title: "Cosine Similarity",
          language: "python",
          code: `import math

def cosine_similarity(a, b):
    dot = sum(x * y for x, y in zip(a, b))

    norm_a = math.sqrt(
        sum(x * x for x in a)
    )

    norm_b = math.sqrt(
        sum(y * y for y in b)
    )

    if norm_a == 0 or norm_b == 0:
        return 0.0

    return dot / (norm_a * norm_b)


a = [1.0, 2.0, 3.0]
b = [1.0, 2.0, 2.5]

print(cosine_similarity(a, b))`
        }
      ]
    },

    {
      id: "dot-product",
      title: "7. Dot Product",

      formula: [
        "a · b = Σ(aᵢbᵢ)"
      ],

      content: [
        "The dot product measures the interaction between corresponding vector components.",

        "When vectors are normalized, dot-product ranking and cosine-similarity ranking are equivalent because the vector magnitudes are fixed."
      ],

      comparisonTables: [
        {
          title: "Common Similarity Measures",
          columns: [
            "Measure",
            "Idea",
            "Common Use"
          ],
          rows: [
            [
              "Cosine",
              "Angle between vectors",
              "Semantic embeddings"
            ],
            [
              "Dot Product",
              "Vector interaction",
              "Many embedding systems"
            ],
            [
              "Euclidean Distance",
              "Geometric distance",
              "Vector similarity"
            ]
          ]
        }
      ]
    },

    {
      id: "vector-store",
      title: "8. What Is a Vector Store?",

      content: [
        "A vector store is a system designed to store vector representations together with identifiers and metadata and to retrieve vectors according to similarity.",

        "A practical vector record normally contains at least a vector, an identifier, and metadata."
      ],

      codeExamples: [
        {
          title: "Vector Record",
          language: "typescript",
          code: `type VectorRecord = {
  id: string;
  vector: number[];
  text: string;
  metadata: {
    documentId: string;
    source?: string;
    page?: number;
    section?: string;
  };
};`
        }
      ]
    },

    {
      id: "vector-store-architecture",
      title: "9. Vector Store Architecture",

      diagram: [
        "Application",
        "↓",
        "Embedding Service",
        "↓",
        "Vector Store",
        "├── Vector Index",
        "├── Metadata",
        "├── Document IDs",
        "└── Stored Text / References",
        "↓",
        "Similarity Search"
      ],

      components: [
        "Vector storage",
        "Vector index",
        "Metadata storage",
        "Collection or namespace",
        "Similarity search",
        "Filtering",
        "Insert / update / delete operations"
      ]
    },

    {
      id: "indexing",
      title: "10. Indexing Embeddings",

      content: [
        "After embeddings are generated, they need to be stored in an index that supports efficient nearest-neighbor search.",

        "Searching every vector using brute force is possible for small datasets but becomes expensive as the number of vectors increases.",

        "Production systems therefore commonly use specialized vector indexes."
      ],

      diagram: [
        "Documents",
        "↓",
        "Chunks",
        "↓",
        "Embeddings",
        "↓",
        "Vector Index",
        "↓",
        "Nearest-Neighbor Search"
      ]
    },

    {
      id: "metadata-filtering",
      title: "11. Metadata Filtering",

      content: [
        "Semantic similarity alone is not always sufficient.",

        "A retrieval system may need to search only documents belonging to a particular department, date range, tenant, language, or access level.",

        "Metadata filtering combines semantic retrieval with explicit constraints."
      ],

      example: {
        query: "What is the attendance requirement?",
        filters: {
          department: "academics",
          language: "en",
          version: "current"
        }
      },

      diagram: [
        "Query",
        "↓",
        "Metadata Filter",
        "↓",
        "Candidate Vectors",
        "↓",
        "Similarity Search",
        "↓",
        "Top-k Results"
      ]
    },

    {
      id: "top-k",
      title: "12. Top-k Similarity Search",

      content: [
        "The system generally returns the k most similar vectors rather than every vector in the database.",

        "The value of k controls how much candidate information is retrieved."
      ],

      formula: [
        "Top-k = select the k highest-scoring candidates"
      ],

      example: {
        query: "What is the refund policy?",
        results: [
          "Document A — score 0.92",
          "Document B — score 0.87",
          "Document C — score 0.82",
          "Document D — score 0.74"
        ],
        selected:
          "If k = 3, return A, B, and C."
      }
    },

    {
      id: "embedding-consistency",
      title: "13. Embedding Consistency",

      content: [
        "The document and query embedding pipelines must be compatible.",

        "Changing the embedding model can change the entire vector space.",

        "Therefore, an embedding-model migration may require re-embedding existing documents."
      ],

      migration: [
        "Existing Embedding Model",
        "↓",
        "New Embedding Model",
        "↓",
        "Re-embed Documents",
        "↓",
        "Evaluate Retrieval",
        "↓",
        "Replace Index"
      ]
    },

    {
      id: "failure-modes",
      title: "14. Embedding and Vector Store Failure Modes",

      points: [
        "Query and document embeddings use incompatible models.",
        "Poor chunking creates poor vectors.",
        "Metadata is missing.",
        "Wrong similarity metric is used.",
        "Vector dimensions do not match.",
        "Old embeddings remain after source updates.",
        "Metadata filters are applied incorrectly.",
        "Top-k is too small.",
        "Top-k is too large.",
        "Vector index configuration reduces recall."
      ]
    },

    {
      id: "rag-connection",
      title: "15. Embeddings and Vector Stores in RAG",

      diagram: [
        "Documents",
        "↓",
        "Processing",
        "↓",
        "Chunking",
        "↓",
        "Document Embeddings",
        "↓",
        "Vector Store",
        "↓",
        "User Query",
        "↓",
        "Query Embedding",
        "↓",
        "Similarity Search",
        "↓",
        "Retrieved Chunks",
        "↓",
        "LLM"
      ],

      content: [
        "Embeddings provide the representation used for semantic retrieval.",

        "The vector store provides the infrastructure for storing and searching those representations.",

        "Together they form a central part of modern retrieval pipelines."
      ]
    }
  ],

  architecture: {
    title: "Embedding and Vector Store Architecture",

    layers: [
      "Knowledge Sources",
      "Document Processing",
      "Chunking",
      "Embedding Model",
      "Vector Store",
      "Vector Index",
      "Metadata Filtering",
      "Similarity Search",
      "Retrieved Context",
      "LLM"
    ]
  },

  mathIntuition: [
    {
      concept: "Embedding",
      formula: "f(x) → e ∈ R^d",
      explanation:
        "An embedding function maps an input into a d-dimensional vector."
    },
    {
      concept: "Cosine Similarity",
      formula: "cos(a,b) = (a·b)/(||a||||b||)",
      explanation:
        "Measures directional similarity between vectors."
    },
    {
      concept: "Dot Product",
      formula: "a·b = Σaᵢbᵢ",
      explanation:
        "Measures interaction between vector components."
    }
  ],

  codeExamples: [
    {
      title: "Simple In-Memory Vector Search",
      language: "python",
      code: `import math

def cosine(a, b):
    dot = sum(x * y for x, y in zip(a, b))

    na = math.sqrt(sum(x * x for x in a))
    nb = math.sqrt(sum(y * y for y in b))

    if na == 0 or nb == 0:
        return 0.0

    return dot / (na * nb)


records = [
    {
        "id": "doc-1",
        "vector": [1.0, 0.0, 0.0],
        "text": "Attendance policy"
    },
    {
        "id": "doc-2",
        "vector": [0.0, 1.0, 0.0],
        "text": "Examination policy"
    },
    {
        "id": "doc-3",
        "vector": [0.9, 0.1, 0.0],
        "text": "Attendance shortage rules"
    }
]

query = [1.0, 0.0, 0.0]

ranked = sorted(
    records,
    key=lambda item: cosine(query, item["vector"]),
    reverse=True
)

for item in ranked:
    print(item["id"], item["text"])`
    }
  ],

  exercises: [
    "What is an embedding?",
    "Why are embeddings useful for RAG?",
    "What does vector dimension mean?",
    "Explain cosine similarity.",
    "Explain dot product.",
    "What is a vector store?",
    "Why are vector indexes needed?",
    "What is top-k search?",
    "Why is metadata filtering useful?",
    "Why can changing the embedding model require re-indexing?"
  ],

  codingExercises: [
    "Implement cosine similarity in Python.",
    "Implement dot-product similarity.",
    "Create a VectorRecord structure.",
    "Build an in-memory vector store.",
    "Implement top-k similarity search.",
    "Add metadata filtering.",
    "Create a simple embedding migration simulation."
  ],

  architectureExercises: [
    "Design an embedding pipeline for university documents.",
    "Design a vector store schema.",
    "Design a query-to-vector retrieval pipeline.",
    "Design metadata filtering for multi-department documents.",
    "Design an embedding migration strategy."
  ],

  comparisonTables: [
    {
      title: "Embedding vs Vector Store",
      columns: [
        "Embedding",
        "Vector Store"
      ],
      rows: [
        [
          "Represents information",
          "Stores representations"
        ],
        [
          "Produces vectors",
          "Indexes vectors"
        ],
        [
          "Model-dependent",
          "Storage/search infrastructure"
        ],
        [
          "Creates semantic representation",
          "Performs retrieval"
        ]
      ]
    }
  ],

  commonMistakes: [
    "Treating embeddings as human-readable features.",
    "Comparing incompatible embedding spaces.",
    "Ignoring vector dimensions.",
    "Forgetting metadata.",
    "Using inappropriate similarity metrics.",
    "Using an arbitrary top-k value.",
    "Failing to re-embed after model migration.",
    "Assuming vector similarity means factual correctness."
  ],

  interviewQuestions: [
    "What is an embedding?",
    "Why are embeddings useful in RAG?",
    "What is cosine similarity?",
    "What is a vector store?",
    "What is a vector index?",
    "What is top-k retrieval?",
    "Why is metadata filtering important?",
    "Why must query and document embeddings be compatible?",
    "When would you need to re-embed a knowledge base?"
  ],

  summary: [
    "Embeddings represent information as numerical vectors.",
    "Semantic similarity can be measured between query and document vectors.",
    "Vector stores manage vector storage and retrieval.",
    "Similarity search returns the most relevant candidates.",
    "Metadata filtering adds explicit constraints to semantic retrieval.",
    "Embedding-model changes can require re-embedding existing content.",
    "Embeddings and vector stores form a central part of modern RAG retrieval."
  ],

  keyTakeaways: [
    "Embeddings convert meaning into a machine-searchable representation.",
    "Vector stores make semantic retrieval operational.",
    "Similarity scores rank candidates but do not guarantee truth.",
    "Metadata is essential for practical retrieval systems.",
    "Embedding consistency must be maintained across ingestion and querying."
  ],

  visualReferences: [
    {
      title: "Embedding Pipeline",
      type: "diagram",
      description:
        "Text chunk → embedding model → vector → vector store."
    },
    {
      title: "Cosine Similarity",
      type: "diagram",
      description:
        "Two vectors compared by their directional relationship."
    },
    {
      title: "Vector Store Architecture",
      type: "architecture",
      description:
        "Application → embedding service → vector index → metadata filtering → retrieval."
    },
    {
      title: "RAG Embedding Flow",
      type: "diagram",
      description:
        "Documents and queries are independently embedded into a compatible vector space."
    }
  ]
};

export default lesson4;