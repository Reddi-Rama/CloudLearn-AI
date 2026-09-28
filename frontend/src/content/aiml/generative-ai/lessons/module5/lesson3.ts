const lesson = {
  id: "lesson3",
  moduleId: "module5",
  lessonNumber: 3,

  title: "Vector Similarity & Distance Metrics",

  subtitle:
    "Learn the mathematics behind comparing embeddings using dot product, cosine similarity, Euclidean distance, Manhattan distance, and related retrieval measures.",

  description: `
Once information has been converted into vectors, an important question
appears:

How do we determine which vectors are similar?

Vector similarity and distance metrics provide the mathematical foundation
for semantic search and vector databases.

The basic retrieval process is:

Query vector
     ↓
Compare against document vectors
     ↓
Calculate similarity / distance
     ↓
Rank candidates
     ↓
Return top-k results
`,

  estimatedTime: "90–120 minutes",
  difficulty: "Intermediate",

  learningObjectives: [
    "Understand vector space geometrically.",
    "Calculate vector magnitude.",
    "Calculate dot product.",
    "Understand cosine similarity.",
    "Calculate Euclidean distance.",
    "Understand Manhattan distance.",
    "Compare similarity and distance metrics.",
    "Understand normalization and dot product.",
    "Understand ranking with vector scores.",
    "Understand top-k semantic retrieval."
  ],

  sections: [
    {
      heading: "1. Why Do We Need Similarity Metrics?",

      content: `
Suppose a database contains thousands of document embeddings.

A user submits:

"How can I change my password?"

The system converts the question into a vector:

    q = [q₁, q₂, ..., q_d]

Every stored document also has a vector:

    d₁, d₂, ..., dₙ

The system needs a mathematical function that tells us how closely q
relates to each document vector.

This is the job of a similarity or distance metric.
`
    },

    {
      heading: "2. Vector Space Intuition",

      content: `
A vector can be interpreted as a point or direction in a mathematical space.

In two dimensions:

    y
    ↑
    |
    |        B ●
    |
    |   A ●
    |
    +----------------→ x

The geometric relationship between A and B can be measured.

Real embeddings may have hundreds or thousands of dimensions, but the
mathematical principles remain similar.
`,

      classificationTree: `
VECTOR COMPARISON
│
├── Similarity
│   ├── Dot Product
│   ├── Cosine Similarity
│   └── Other similarity functions
│
└── Distance
    ├── Euclidean Distance
    ├── Manhattan Distance
    └── Other distance functions
`
    },

    {
      heading: "3. Vector Magnitude",

      content: `
Before understanding several similarity metrics, we need vector magnitude.

For:

    A = [a₁, a₂, ..., a_d]

the L2 magnitude is:

    ||A||₂ = √(a₁² + a₂² + ... + a_d²)
`,

      formulas: [
        "||A||₂ = √(Σ aᵢ²)"
      ],

      examples: [
        {
          input: "A = [3, 4]",
          process: "√(3² + 4²)",
          output: "5"
        }
      ]
    },

    {
      heading: "4. Dot Product",

      content: `
The dot product of two vectors is:

    A · B = Σ AᵢBᵢ

For two-dimensional vectors:

    A = [a₁, a₂]
    B = [b₁, b₂]

then:

    A · B = a₁b₁ + a₂b₂

The dot product measures both directional alignment and magnitude.

For normalized vectors, dot product becomes especially useful because
it is directly related to cosine similarity.
`,

      formulas: [
        "A · B = Σᵢ AᵢBᵢ"
      ],

      examples: [
        {
          input: "A = [2, 3], B = [4, 5]",
          process: "(2 × 4) + (3 × 5)",
          output: "23"
        }
      ]
    },

    {
      heading: "5. Cosine Similarity",

      content: `
Cosine similarity measures the angle between two vectors.

The formula is:

    cos(A,B) = (A · B) / (||A|| ||B||)

The value is bounded between -1 and 1 for ordinary real-valued vectors.

A value close to 1 means the vectors point in similar directions.

A value near 0 means they are approximately orthogonal.

A negative value indicates opposing directions.

In many embedding systems, cosine similarity is particularly useful
because semantic comparison often focuses on direction rather than
absolute magnitude.
`,

      formulas: [
        "cos(A,B) = (A · B) / (||A||₂ ||B||₂)"
      ],

      examples: [
        {
          input: "A = [1, 0], B = [1, 0]",
          process: "1 / (1 × 1)",
          output: "1"
        },
        {
          input: "A = [1, 0], B = [0, 1]",
          process: "0 / (1 × 1)",
          output: "0"
        }
      ],

      mathIntuition: `
Imagine two arrows.

If the arrows point in nearly the same direction:

        ↗
       ↗

cosine similarity is high.

If they point at roughly 90 degrees:

        ↑
        |
        └──→

cosine similarity is near zero.

The metric emphasizes orientation rather than raw length.
`
    },

    {
      heading: "6. Euclidean Distance",

      content: `
Euclidean distance measures the straight-line distance between vectors.

For two vectors:

    A = [a₁, ..., a_d]
    B = [b₁, ..., b_d]

the distance is:

    d(A,B) = √(Σ(Aᵢ - Bᵢ)²)

Smaller distance means the vectors are closer geometrically.
`,

      formulas: [
        "d(A,B) = √(Σᵢ(Aᵢ - Bᵢ)²)"
      ],

      examples: [
        {
          input: "A = [1, 2], B = [4, 6]",
          process: "√((1-4)² + (2-6)²)",
          output: "5"
        }
      ]
    },

    {
      heading: "7. Manhattan Distance",

      content: `
Manhattan distance measures the sum of absolute coordinate differences.

    d(A,B) = Σ |Aᵢ - Bᵢ|

For:

    A = [1, 2]
    B = [4, 6]

we obtain:

    |1-4| + |2-6|
    = 3 + 4
    = 7

It can be useful in settings where movement along dimensions is treated
independently.
`,

      formulas: [
        "d₁(A,B) = Σᵢ |Aᵢ - Bᵢ|"
      ]
    },

    {
      heading: "8. Similarity vs Distance",

      comparisonTables: [
        {
          title: "Vector Comparison Metrics",
          columns: ["Metric", "Type", "Interpretation", "Typical Direction"],
          rows: [
            ["Dot Product", "Similarity", "Alignment + magnitude", "Higher can mean more similar"],
            ["Cosine Similarity", "Similarity", "Angular alignment", "Higher = more similar"],
            ["Euclidean Distance", "Distance", "Straight-line separation", "Lower = closer"],
            ["Manhattan Distance", "Distance", "Absolute coordinate difference", "Lower = closer"]
          ]
        }
      ],

      content: `
Similarity metrics generally reward larger scores for more related
vectors.

Distance metrics generally reward smaller values for more related
vectors.

A retrieval system must therefore know whether it is ranking by:

    highest similarity

or:

    lowest distance.
`
    },

    {
      heading: "9. Why Cosine Similarity Is Popular",

      content: `
Suppose two vectors have the same direction but different magnitudes.

    A = [1, 1]

    B = [10, 10]

They point in exactly the same direction.

Cosine similarity is:

    1

because their angle is zero.

Euclidean distance, however, is large.

This demonstrates the fundamental difference:

Cosine:
    "Do they point in the same direction?"

Euclidean:
    "How far apart are their coordinates?"
`
    },

    {
      heading: "10. Normalized Vectors and Dot Product",

      content: `
If vectors are normalized to unit length:

    ||A|| = 1
    ||B|| = 1

then:

    cos(A,B) = A · B

Therefore, normalized vector search can use dot products while preserving
the ranking produced by cosine similarity.

This can be computationally useful in vector retrieval systems.
`,

      formulas: [
        "If ||A|| = ||B|| = 1, then cos(A,B) = A · B"
      ]
    },

    {
      heading: "11. Top-K Retrieval",

      content: `
A vector search system often needs only the best few results.

This is called top-k retrieval.

Suppose:

Query = q

Documents:

D1 → 0.91
D2 → 0.84
D3 → 0.77
D4 → 0.61
D5 → 0.48

For:

    k = 3

the system returns:

    D1
    D2
    D3

The value of k is an important retrieval design parameter.
`
    },

    {
      heading: "12. Ranking Pipeline",

      process: [
        "Generate the query embedding.",
        "Retrieve candidate vectors.",
        "Calculate similarity or distance.",
        "Assign a score to each candidate.",
        "Sort candidates.",
        "Select top-k.",
        "Return documents and metadata."
      ],

      contentAfterProcess: `
The result is a ranked candidate list.

This ranking becomes the foundation for later techniques such as
metadata filtering, hybrid search, reranking, and RAG context construction.
`
    },

    {
      heading: "13. Similarity Does Not Mean Truth",

      content: `
A very important limitation:

High vector similarity does not guarantee that a document is factually
correct.

Similarity answers a representation question:

"How related are these representations according to this model and metric?"

It does not automatically answer:

"Is this statement true?"

Therefore production RAG systems need additional mechanisms such as:

• source authority
• metadata
• reranking
• grounding
• validation
• evaluation
• citations
`
    }
  ],

  codeExamples: [
    {
      title: "Dot Product",
      language: "python",
      code: `import numpy as np

a = np.array([2.0, 3.0])
b = np.array([4.0, 5.0])

dot_product = np.dot(a, b)

print("Dot product:", dot_product)`,
      explanation:
        "The dot product multiplies corresponding components and sums the results."
    },

    {
      title: "Cosine Similarity",
      language: "python",
      code: `import numpy as np

a = np.array([1.0, 2.0, 3.0])
b = np.array([2.0, 1.0, 4.0])

similarity = np.dot(a, b) / (
    np.linalg.norm(a) * np.linalg.norm(b)
)

print("Cosine similarity:", similarity)`,
      explanation:
        "Cosine similarity compares the angle between the two vectors."
    },

    {
      title: "Euclidean Distance",
      language: "python",
      code: `import numpy as np

a = np.array([1.0, 2.0])
b = np.array([4.0, 6.0])

distance = np.linalg.norm(a - b)

print("Euclidean distance:", distance)`,
      explanation:
        "Euclidean distance measures the straight-line separation between two vectors."
    },

    {
      title: "Simple Top-K Ranking",
      language: "python",
      code: `scores = {
    "document_1": 0.91,
    "document_2": 0.84,
    "document_3": 0.77,
    "document_4": 0.61,
    "document_5": 0.48
}

top_k = sorted(
    scores.items(),
    key=lambda item: item[1],
    reverse=True
)[:3]

for document_id, score in top_k:
    print(document_id, score)`,
      explanation:
        "Candidates are sorted by descending similarity and the highest three are selected."
    }
  ],

  mathIntuition: [
    {
      concept: "Dot Product",
      intuition:
        "Measures how strongly two vectors align while also being affected by their magnitudes."
    },
    {
      concept: "Cosine Similarity",
      intuition:
        "Measures the angle between vectors and therefore focuses on directional alignment."
    },
    {
      concept: "Euclidean Distance",
      intuition:
        "Measures the straight-line separation between two points."
    },
    {
      concept: "Manhattan Distance",
      intuition:
        "Measures the total absolute movement needed across dimensions."
    }
  ],

  comparisonTables: [
    {
      title: "Cosine vs Euclidean",
      columns: ["Property", "Cosine Similarity", "Euclidean Distance"],
      rows: [
        ["Measures", "Angular similarity", "Geometric distance"],
        ["Best direction", "Higher is more similar", "Lower is more similar"],
        ["Affected by magnitude", "Less directly", "Yes"],
        ["Common embedding use", "Very common", "Also common"],
        ["Normalization effect", "Important", "Changes geometric behavior"]
      ]
    }
  ],

  exercises: [
    "Calculate the dot product of [2,3] and [4,5].",
    "Calculate the L2 norm of [3,4].",
    "Calculate cosine similarity for [1,0] and [1,0].",
    "Calculate cosine similarity for [1,0] and [0,1].",
    "Calculate Euclidean distance between [1,2] and [4,6].",
    "Calculate Manhattan distance between [1,2] and [4,6].",
    "Explain why cosine similarity can consider [1,1] and [10,10] identical in direction.",
    "Explain why high similarity does not prove factual correctness."
  ],

  codingExercises: [
    {
      title: "Cosine Similarity Function",
      task: "Implement cosine similarity from scratch using Python and NumPy."
    },
    {
      title: "Distance Calculator",
      task: "Implement Euclidean and Manhattan distance functions."
    },
    {
      title: "Top-K Search",
      task: "Create a program that receives a query vector and a list of document vectors and returns the top-k most similar documents."
    },
    {
      title: "Metric Comparison",
      task: "Generate several random vectors and compare their rankings using cosine similarity and Euclidean distance."
    }
  ],

  architectureExercises: [
    "Design a top-k semantic retrieval pipeline.",
    "Explain where similarity calculation occurs in a RAG system.",
    "Design a vector search API that returns document ID, score, and metadata.",
    "Explain how similarity scores could be passed to a reranking stage."
  ],

  commonMistakes: [
    "Confusing similarity with distance.",
    "Sorting distance scores in the wrong direction.",
    "Forgetting vector normalization when required.",
    "Comparing vectors with different dimensions.",
    "Assuming a high similarity score proves factual correctness.",
    "Treating cosine similarity and Euclidean distance as interchangeable.",
    "Using raw token IDs as vector representations."
  ],

  interviewQuestions: [
    {
      question: "What is cosine similarity?",
      answer:
        "A measure of the cosine of the angle between two vectors, commonly used to measure directional similarity."
    },
    {
      question: "What is the difference between cosine similarity and Euclidean distance?",
      answer:
        "Cosine similarity measures angular alignment, while Euclidean distance measures straight-line separation."
    },
    {
      question: "Why is dot product useful for normalized embeddings?",
      answer:
        "For unit-length vectors, dot product equals cosine similarity."
    },
    {
      question: "What is top-k retrieval?",
      answer:
        "Selecting the k highest-ranked candidates according to a similarity or distance metric."
    }
  ],

  summary: [
    "Vector metrics allow embeddings to be compared mathematically.",
    "Dot product measures alignment and magnitude.",
    "Cosine similarity measures angular alignment.",
    "Euclidean distance measures straight-line separation.",
    "Manhattan distance sums absolute coordinate differences.",
    "Top-k retrieval selects the highest-ranked candidates.",
    "Similarity indicates representational relatedness, not truth."
  ],

  keyTakeaways: [
    "Similarity metrics are the mathematical foundation of vector retrieval.",
    "Cosine similarity is especially useful for comparing embedding directions.",
    "Normalized vectors allow dot product to represent cosine similarity.",
    "Distance and similarity must be ranked in opposite directions.",
    "A retrieval score should never be treated as a factuality score."
  ],

  visualReferences: [
    {
      title: "Vector Similarity Geometry",
      type: "diagram",
      description: "Two-dimensional visualization of vector direction and angle."
    },
    {
      title: "Cosine Similarity",
      type: "formula",
      description: "Dot product divided by the product of vector magnitudes."
    },
    {
      title: "Vector Retrieval Pipeline",
      type: "architecture",
      description: "Query vector → similarity calculation → ranking → top-k."
    }
  ]
};

export default lesson;