const lesson = {
  id: "lesson1",
  moduleId: "module5",
  lessonNumber: 1,

  title: "What Are Embeddings?",

  subtitle:
    "Understand how text, images, audio, and other data are transformed into numerical vector representations that machines can compare and search.",

  description: `
Embeddings are numerical representations of information.

They convert objects such as words, sentences, documents, images, users,
products, or other entities into vectors in a mathematical space.

The central idea is:

    Meaningful information
            ↓
       Embedding model
            ↓
       Numerical vector
            ↓
      Vector space
            ↓
Similarity / search / retrieval

Embeddings are one of the foundations of semantic search, recommendation
systems, Retrieval-Augmented Generation, clustering, classification,
deduplication, and many modern AI applications.
`,

  estimatedTime: "75–100 minutes",
  difficulty: "Intermediate",

  learningObjectives: [
    "Define an embedding.",
    "Understand why AI systems use vector representations.",
    "Distinguish raw data from numerical representations.",
    "Understand dense and sparse representations.",
    "Understand embedding dimensions.",
    "Understand semantic similarity.",
    "Understand token, sentence, and document embeddings.",
    "Understand the relationship between embeddings and vector spaces.",
    "Understand normalization at a conceptual level.",
    "Understand how embeddings are used in RAG and semantic search."
  ],

  sections: [
    {
      heading: "1. The Problem: Machines Need Numerical Representations",

      content: `
Computers ultimately operate on numerical representations.

A human can understand:

"The laptop battery lasts for many hours."

But a machine learning algorithm cannot directly calculate the semantic
relationship between this sentence and:

"The device has excellent battery life."

The words are different, but the meanings are related.

An embedding system attempts to represent these meanings numerically.

The goal is not simply to convert every character into a number.

The goal is to produce a representation in which useful relationships
can be measured mathematically.
`,

      classificationTree: `
DATA
├── Text
│   ├── Words
│   ├── Sentences
│   ├── Paragraphs
│   └── Documents
│
├── Images
│   ├── Objects
│   ├── Scenes
│   └── Visual features
│
├── Audio
│   ├── Speech
│   ├── Music
│   └── Sound events
│
└── Structured entities
    ├── Products
    ├── Users
    └── Locations

             ↓

        EMBEDDING MODEL

             ↓

        VECTOR REPRESENTATION
`,

      examples: [
        {
          input: "The car is fast.",
          output: "[0.21, -0.14, 0.83, ...]"
        },
        {
          input: "The automobile has high speed.",
          output: "[0.19, -0.11, 0.79, ...]"
        }
      ]
    },

    {
      heading: "2. What Is an Embedding?",

      content: `
An embedding is a numerical vector representation of an object.

Mathematically, an embedding can be represented as:

    e ∈ R^d

where:

e = embedding vector
d = embedding dimension

For example, a simplified four-dimensional embedding might look like:

    e = [0.21, -0.43, 0.77, 0.18]

Real embedding models commonly use hundreds or thousands of dimensions.

The dimensions should not normally be interpreted as simple human-readable
features such as:

dimension 1 = happiness
dimension 2 = speed
dimension 3 = topic

Instead, the model learns a distributed representation across dimensions.
`,

      formulas: [
        "e ∈ R^d",
        "e = [e₁, e₂, ..., e_d]"
      ],

      mathIntuition: `
Think of an embedding as placing an object at a coordinate in a
high-dimensional mathematical space.

Two semantically related objects should often appear relatively close
to one another according to an appropriate similarity function.

For example:

"doctor"
        ●

"physician"
        ●

"banana"
                         ●

The first two may be close in embedding space while the third may be
farther away.
`
    },

    {
      heading: "3. Why Not Just Use Words or Token IDs?",

      content: `
Token IDs are identifiers, not semantic coordinates.

Suppose a tokenizer produces:

"cat" → 1543
"dog" → 2891
"car" → 721

The numerical difference between these IDs has no useful semantic meaning.

For example:

    |1543 - 2891| = 1348

does not mean that cat and dog are semantically 1348 units apart.

Token IDs are labels used to index a vocabulary.

Embeddings are learned numerical representations that can capture useful
relationships.
`,

      comparisonTables: [
        {
          title: "Token IDs vs Embeddings",
          columns: ["Property", "Token ID", "Embedding"],
          rows: [
            ["Purpose", "Identify a token", "Represent information"],
            ["Type", "Integer", "Vector"],
            ["Semantic meaning", "Not directly encoded", "Learned representation"],
            ["Dimension", "One integer", "Many dimensions"],
            ["Similarity", "Numeric ID difference is meaningless", "Vector similarity can be meaningful"],
            ["Used for", "Vocabulary lookup", "Semantic computation"]
          ]
        }
      ]
    },

    {
      heading: "4. Dense and Sparse Representations",

      content: `
Representations can be broadly divided into sparse and dense forms.

Sparse representations contain mostly zero values.

Dense representations contain many non-zero values.

Traditional one-hot encoding is a classic sparse representation.

If the vocabulary contains 10,000 words, one word could be represented as:

    [0, 0, 0, 1, 0, 0, ..., 0]

Only one position is active.

An embedding might instead look like:

    [0.12, -0.45, 0.71, 0.03, -0.19, ...]

Many dimensions can contain useful information.
`,

      classificationTree: `
NUMERICAL REPRESENTATIONS
│
├── Sparse
│   ├── One-hot
│   ├── Bag-of-Words
│   └── TF-IDF
│
└── Dense
    ├── Word embeddings
    ├── Sentence embeddings
    ├── Document embeddings
    └── Multimodal embeddings
`,

      comparisonTables: [
        {
          title: "Sparse vs Dense",
          columns: ["Property", "Sparse", "Dense"],
          rows: [
            ["Non-zero values", "Few", "Many"],
            ["Typical representation", "One-hot / TF-IDF", "Embedding vector"],
            ["Semantic relationships", "Limited", "Often stronger"],
            ["Storage efficiency", "Can exploit sparsity", "Depends on dimension"],
            ["Modern semantic retrieval", "Usually not sufficient alone", "Widely used"]
          ]
        }
      ]
    },

    {
      heading: "5. Embedding Dimensions",

      content: `
The dimensionality of an embedding is the number of numerical values
contained in the vector.

If:

    e = [0.2, 0.4, -0.1, 0.7]

then:

    d = 4

If a model produces 768-dimensional embeddings:

    e ∈ R^768

Higher dimensionality can provide greater representational capacity,
but it also increases storage and computational requirements.

Therefore embedding dimension is an engineering trade-off.
`,

      formulas: [
        "Vector storage ≈ number_of_vectors × dimensions × bytes_per_value"
      ],

      examples: [
        {
          input: "1,000,000 vectors × 768 dimensions × 4 bytes",
          output: "≈ 3.072 GB for raw float32 vector values, excluding index and metadata overhead."
        }
      ]
    },

    {
      heading: "6. Semantic Similarity",

      content: `
The most important property of many embeddings is that they allow
semantic relationships to be measured.

Consider:

A = "How do I reset my password?"
B = "I forgot my password. How can I change it?"

C = "How do I make pasta?"

A and B are semantically related even though their exact wording differs.

A semantic embedding system attempts to represent this relationship
in vector space.

This enables semantic search:

    User query
        ↓
    Query embedding
        ↓
    Compare with document embeddings
        ↓
    Retrieve similar vectors
`,

      process: [
        "Convert the query into an embedding.",
        "Convert stored documents into embeddings.",
        "Calculate similarity between query and documents.",
        "Rank documents by similarity.",
        "Return the highest-ranked candidates."
      ]
    },

    {
      heading: "7. Types of Embeddings",

      classificationTree: `
EMBEDDINGS
│
├── Text Embeddings
│   ├── Token embeddings
│   ├── Word embeddings
│   ├── Sentence embeddings
│   └── Document embeddings
│
├── Image Embeddings
│
├── Audio Embeddings
│
├── Video Embeddings
│
└── Multimodal Embeddings
    └── Shared representation spaces
`,

      content: `
Different embedding systems are designed for different tasks.

Token embeddings represent individual tokens.

Sentence embeddings represent complete sentences.

Document embeddings represent larger pieces of information.

Image embeddings represent visual information.

Multimodal embedding systems attempt to place different modalities
into compatible representation spaces.
`
    },

    {
      heading: "8. Embeddings in Semantic Search",

      content: `
Traditional keyword search asks:

"Does the document contain these words?"

Semantic search asks:

"Does the document represent a meaning similar to this query?"

For example:

Query:
"How can I recover access to my account?"

A semantic search system may retrieve:

"Steps for resetting a forgotten password."

even if the exact phrase "recover access" never appears.
`,

      process: [
        "Index documents.",
        "Generate an embedding for each document chunk.",
        "Store vectors.",
        "Receive user query.",
        "Generate query embedding.",
        "Compare query vector against stored vectors.",
        "Rank results.",
        "Return relevant documents."
      ]
    },

    {
      heading: "9. Embeddings in RAG",

      content: `
Embeddings are a fundamental part of many RAG systems.

A simplified RAG indexing pipeline is:

Documents
    ↓
Text extraction
    ↓
Chunking
    ↓
Embedding model
    ↓
Vector representations
    ↓
Vector database

At query time:

User question
    ↓
Query embedding
    ↓
Vector search
    ↓
Relevant chunks
    ↓
LLM context
    ↓
Grounded answer
`,

      classificationTree: `
RAG REPRESENTATION PIPELINE

OFFLINE / INDEXING
Documents
   ↓
Chunks
   ↓
Document Embeddings
   ↓
Vector Index

ONLINE / QUERY
Question
   ↓
Query Embedding
   ↓
Similarity Search
   ↓
Relevant Chunks
   ↓
Generation
`
    },

    {
      heading: "10. Embeddings Are Not Magic Meaning Coordinates",

      content: `
An important misconception is that embeddings are universal measurements
of meaning.

They are learned representations produced by a particular model and
training process.

Therefore embedding quality depends on:

• model architecture
• training data
• training objective
• domain
• language
• modality
• dimensionality
• preprocessing
• similarity function
• downstream task

An embedding model trained for general text retrieval may behave differently
from a model specialized for code, scientific documents, images, or multilingual
search.
`
    }
  ],

  codeExamples: [
    {
      title: "Simple Vector Representation in Python",
      language: "python",
      code: `import numpy as np

vector = np.array([
    0.21,
    -0.43,
    0.77,
    0.18
])

print("Embedding:", vector)
print("Dimensions:", len(vector))`,
      explanation:
        "This example represents an embedding as a numerical vector and shows how its dimensionality can be inspected."
    },

    {
      title: "Comparing Vector Dimensions",
      language: "python",
      code: `import numpy as np

a = np.random.randn(8)
b = np.random.randn(8)

print("A shape:", a.shape)
print("B shape:", b.shape)

if a.shape == b.shape:
    print("Vectors are dimensionally compatible.")`,
      explanation:
        "Similarity calculations generally require compatible vector dimensions."
    }
  ],

  mathIntuition: [
    {
      concept: "Vector",
      intuition:
        "A vector is a point or direction in a mathematical space represented by multiple numbers."
    },
    {
      concept: "Dimension",
      intuition:
        "Dimension tells us how many numerical coordinates are used to represent the object."
    },
    {
      concept: "Similarity",
      intuition:
        "Similarity functions measure how closely two vector representations relate according to a chosen mathematical rule."
    }
  ],

  comparisonTables: [
    {
      title: "Representation Hierarchy",
      columns: ["Representation", "Example", "Primary Purpose"],
      rows: [
        ["Raw text", "Hello world", "Human-readable information"],
        ["Token", "hello", "Unit of model processing"],
        ["Token ID", "1534", "Vocabulary lookup"],
        ["Embedding", "[0.21, -0.43, ...]", "Numerical semantic representation"],
        ["Document vector", "[...] ", "Search / retrieval representation"]
      ]
    }
  ],

  exercises: [
    "Define an embedding in your own words.",
    "Why is a token ID not a semantic representation?",
    "Explain dense and sparse representations.",
    "What does embedding dimensionality mean?",
    "Why can semantic search find results that do not contain the exact query words?",
    "Explain the role of embeddings in RAG.",
    "Why can two embedding models produce different representations for the same sentence?"
  ],

  codingExercises: [
    {
      title: "Embedding Shape Analyzer",
      task: "Write a Python program that accepts multiple vectors and reports their dimensions."
    },
    {
      title: "Vector Dataset",
      task: "Create ten toy document vectors and store them in a NumPy matrix."
    },
    {
      title: "Representation Comparison",
      task: "Create a small example comparing one-hot vectors with dense vectors."
    }
  ],

  architectureExercises: [
    "Design a semantic search pipeline for a collection of 10,000 documents.",
    "Design the embedding portion of a RAG indexing pipeline.",
    "Explain where embeddings are created during indexing and where they are created during query processing."
  ],

  commonMistakes: [
    "Treating token IDs as semantic coordinates.",
    "Assuming every embedding dimension has an obvious human-readable meaning.",
    "Assuming larger dimensionality automatically means better embeddings.",
    "Comparing vectors with incompatible dimensions.",
    "Ignoring the embedding model's domain and training objective.",
    "Assuming semantic similarity automatically means factual similarity.",
    "Confusing LLM hidden states with retrieval embeddings."
  ],

  interviewQuestions: [
    {
      question: "What is an embedding?",
      answer:
        "A numerical vector representation learned or constructed to represent useful properties of an object."
    },
    {
      question: "Why are embeddings useful in semantic search?",
      answer:
        "They allow information to be represented in a vector space where similarity can be measured mathematically."
    },
    {
      question: "What is embedding dimensionality?",
      answer:
        "The number of numerical components in an embedding vector."
    },
    {
      question: "What is the difference between a token ID and an embedding?",
      answer:
        "A token ID identifies a vocabulary entry, while an embedding is a learned numerical representation."
    }
  ],

  summary: [
    "Embeddings transform information into numerical vectors.",
    "The vector representation allows mathematical comparison.",
    "Dense embeddings are widely used for semantic retrieval.",
    "Embedding dimensionality determines the number of vector components.",
    "Semantic search uses embeddings to find meaning-related information.",
    "Embeddings are central to modern RAG pipelines.",
    "Embedding quality depends on the model, data, objective, and domain."
  ],

  keyTakeaways: [
    "An embedding is a vector representation of information.",
    "Token IDs and embeddings serve different purposes.",
    "Semantic relationships can be represented geometrically.",
    "Embedding dimensions are learned distributed features rather than simple human labels.",
    "Embeddings provide the foundation for vector search and RAG."
  ],

  visualReferences: [
    {
      title: "Embedding Concept",
      type: "diagram",
      description: "Raw information → embedding model → vector representation."
    },
    {
      title: "Sparse vs Dense Representation",
      type: "diagram",
      description: "Comparison of one-hot/sparse vectors and dense embeddings."
    },
    {
      title: "RAG Embedding Pipeline",
      type: "architecture",
      description: "Documents → chunks → embeddings → vector index → retrieval."
    }
  ]
};

export default lesson;