const lesson = {
  id: "lesson5",
  moduleId: "module4",
  title: "Embeddings & Semantic Representation for Retrieval",
  subtitle: "Understand how text becomes vectors and how vector representations enable semantic search in RAG systems.",

  overview: `
Embeddings are the mathematical foundation of many modern retrieval systems.

An embedding model transforms text into a numerical vector.

For example:

"How do I reset my password?"

might become conceptually:

[
  0.12,
 -0.41,
  0.77,
  0.03,
  ...
]

Another sentence:

"I forgot my account password."

may produce a vector that is close to the first vector because the
sentences have related meanings.

This allows retrieval systems to search by semantic similarity rather
than depending only on exact keyword matches.

The basic pipeline is:

TEXT
 ↓
EMBEDDING MODEL
 ↓
VECTOR
 ↓
VECTOR INDEX
 ↓
SIMILARITY SEARCH
 ↓
RELEVANT CONTENT
`,

  learningObjectives: [
    "Define an embedding.",
    "Understand vector representations.",
    "Explain semantic similarity.",
    "Understand embedding dimensions.",
    "Understand cosine similarity.",
    "Understand dot-product similarity.",
    "Understand Euclidean distance.",
    "Understand normalized embeddings.",
    "Understand query and document embeddings.",
    "Understand embedding model selection.",
    "Understand embedding limitations.",
    "Understand embedding drift and model compatibility."
  ],

  prerequisites: [
    "Basic RAG architecture",
    "Basic linear algebra",
    "Basic understanding of vectors"
  ],

  keyTerms: [
    {
      term: "Embedding",
      definition: "A numerical vector representation of information."
    },
    {
      term: "Vector",
      definition: "An ordered collection of numerical values representing an object in a mathematical space."
    },
    {
      term: "Embedding Dimension",
      definition: "The number of numerical components in an embedding vector."
    },
    {
      term: "Semantic Similarity",
      definition: "A measure of how closely two pieces of information are related in meaning."
    },
    {
      term: "Cosine Similarity",
      definition: "A similarity measure based on the angle between vectors."
    },
    {
      term: "Dot Product",
      definition: "The sum of pairwise products between corresponding vector components."
    },
    {
      term: "Normalization",
      definition: "Scaling a vector so that its magnitude becomes standardized, often one."
    },
    {
      term: "Embedding Model",
      definition: "A model that converts text or other inputs into numerical vector representations."
    }
  ],

  sections: [
    {
      title: "1. What Is an Embedding?",
      explanation: `
An embedding maps an input into a numerical vector.

Conceptually:

Text
 ↓
Embedding Model
 ↓
Vector

Example:

"Python programming"
        ↓
[0.12, 0.81, -0.33, 0.27, ...]

"Python coding"
        ↓
[0.10, 0.79, -0.31, 0.25, ...]

Because the meanings are related, the vectors may be close in the
embedding space.
`
    },

    {
      title: "2. Why Are Embeddings Important for RAG?",
      explanation: `
Keyword search can fail when different words express similar concepts.

Query:

"How can I change my login password?"

Document:

"Users can reset their account credentials from the security settings."

The exact words differ.

Semantic embeddings can help identify that these sentences discuss
a related concept.
`
    },

    {
      title: "3. Vector Space",
      explanation: `
An embedding can be viewed as a point in a high-dimensional space.

For a simple two-dimensional illustration:

          y
          ↑
          |
    A •   |      • B
          |
          |
----------+------------→ x
          |
       • C

In real embedding systems there may be hundreds or thousands of dimensions.

Humans cannot visualize all dimensions directly, but mathematical
similarity operations can still be performed.
`
    },

    {
      title: "4. Embedding Dimensions",
      explanation: `
An embedding model produces vectors with a specific dimension.

Example:

Embedding A:
[0.1, 0.2, 0.3, 0.4]

Dimension = 4

Real systems may use much larger dimensions.

Important:

Vectors from incompatible embedding spaces cannot normally be compared
meaningfully just because they contain numbers.
`
    },

    {
      title: "5. Query Embeddings",
      explanation: `
At query time:

User question
      ↓
Same compatible embedding model
      ↓
Query vector
      ↓
Compare against document vectors
      ↓
Retrieve nearest candidates

The query and indexed documents need compatible representations.
`
    },

    {
      title: "6. Cosine Similarity",
      explanation: `
Cosine similarity compares the direction of two vectors.

Formula:

cos(theta) = (A · B) / (||A|| ||B||)

If two vectors point in similar directions, their cosine similarity
is high.

This makes cosine similarity useful for semantic retrieval.
`
    },

    {
      title: "7. Dot Product",
      explanation: `
The dot product is:

A · B = Σ A_i B_i

If vectors are normalized, dot-product similarity and cosine similarity
are closely related.

Many vector indexes can use optimized inner-product search.
`
    },

    {
      title: "8. Euclidean Distance",
      explanation: `
Euclidean distance measures straight-line distance.

d(A,B) = sqrt(Σ(A_i - B_i)^2)

Smaller distance means the vectors are closer.

Different retrieval systems can use different distance functions.
`
    },

    {
      title: "9. Normalized Vectors",
      explanation: `
The magnitude of a vector is:

||A|| = sqrt(Σ A_i²)

A normalized vector is:

A_normalized = A / ||A||

Normalization can make similarity calculations more convenient and
can make dot-product comparison equivalent to cosine similarity
under appropriate conditions.
`
    },

    {
      title: "10. Embedding Model Selection",
      explanation: `
Embedding models should be selected according to the retrieval problem.

Important factors include:

• Semantic quality
• Language coverage
• Domain performance
• Vector dimension
• Latency
• Cost
• Context length
• Licensing
• Deployment requirements
• Hardware requirements

A model that works well for general English text may not necessarily
be optimal for multilingual or specialized technical documents.
`
    },

    {
      title: "11. Dense vs Sparse Retrieval",
      explanation: `
Dense retrieval represents information using dense numerical vectors.

Sparse retrieval represents information using sparse term-based features.

Dense retrieval:
Good at semantic similarity.

Sparse retrieval:
Good at exact terms and rare keywords.

Modern RAG systems can combine both.
`
    },

    {
      title: "12. Semantic Similarity Is Not Truth",
      explanation: `
A high embedding similarity does not mean that a document is factually correct.

It means the representations are similar according to the embedding model.

For example:

Query:
"What is the current company policy?"

Old policy:
"The company previously required..."

This may be semantically similar but temporally outdated.

Therefore retrieval must consider:

• Relevance
• Metadata
• Version
• Permissions
• Freshness
• Source authority
`
    },

    {
      title: "13. Embedding Model Compatibility",
      explanation: `
Suppose documents were embedded using Model A.

At query time, using Model B may produce vectors in a different representation space.

Therefore:

Document embeddings:
Model A

Query embedding:
Model A

is normally the safe compatible design.

If the embedding model changes, the existing index may need to be rebuilt.
`
    },

    {
      title: "14. Multilingual Embeddings",
      explanation: `
Multilingual embedding models attempt to represent multiple languages
in a shared semantic space.

For example:

English:
"What is machine learning?"

Hindi:
"मशीन लर्निंग क्या है?"

A strong multilingual representation may place semantically equivalent
sentences relatively close together.

This is important for applications serving multilingual users.
`
    },

    {
      title: "15. Domain-Specific Embeddings",
      explanation: `
General embedding models may not always understand specialized terminology
as effectively as domain-oriented systems.

Examples:

Medical:
clinical terminology

Legal:
contracts and clauses

Programming:
code and APIs

Scientific:
equations and technical terminology

Evaluation on the actual target dataset is therefore important.
`
    },

    {
      title: "16. Embedding Failure Modes",
      explanation: `
Embedding systems can fail because:

• The query is ambiguous.
• The chunk is too small.
• The chunk is too large.
• The embedding model misunderstands domain terminology.
• Exact keywords are important but semantic similarity is insufficient.
• The relevant information is buried in metadata.
• Documents contain contradictory versions.
• Language support is poor.

This is why dense retrieval is often combined with metadata filtering,
keyword search, reranking, or hybrid retrieval.
`
    },

    {
      title: "17. Embeddings in the Complete RAG Pipeline",
      explanation: `
Documents:
   ↓
Chunks
   ↓
Embedding Model
   ↓
Document Vectors
   ↓
Vector Index

User Query:
   ↓
Embedding Model
   ↓
Query Vector
   ↓
Similarity Search
   ↓
Relevant Chunks
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "Dot Product",
      formula: `
A · B = Σ(i=1 to n) A_i B_i
`,
      explanation: "Measures how strongly two vectors align under the dot-product operation."
    },
    {
      concept: "Vector Magnitude",
      formula: `
||A|| = sqrt(Σ(i=1 to n) A_i²)
`,
      explanation: "Measures the length of a vector."
    },
    {
      concept: "Cosine Similarity",
      formula: `
cos(A,B) = (A · B) / (||A|| ||B||)
`,
      explanation: "Measures directional similarity between vectors."
    },
    {
      concept: "Euclidean Distance",
      formula: `
d(A,B) = sqrt(Σ(i=1 to n)(A_i-B_i)²)
`,
      explanation: "Measures geometric distance between two points."
    },
    {
      concept: "L2 Normalization",
      formula: `
A' = A / ||A||
`,
      explanation: "Scales a vector to unit length."
    }
  ],

  codeExamples: [
    {
      title: "Vector Dot Product",
      language: "python",
      code: `
def dot_product(a, b):
    return sum(
        x * y
        for x, y in zip(a, b)
    )


a = [1, 2, 3]
b = [4, 5, 6]

print(dot_product(a, b))
`
    },

    {
      title: "Cosine Similarity From Scratch",
      language: "python",
      code: `
import math

def dot(a, b):
    return sum(x * y for x, y in zip(a, b))


def magnitude(vector):
    return math.sqrt(
        sum(x * x for x in vector)
    )


def cosine_similarity(a, b):
    denominator = magnitude(a) * magnitude(b)

    if denominator == 0:
        return 0.0

    return dot(a, b) / denominator


a = [1, 2, 3]
b = [1, 2, 4]

print(cosine_similarity(a, b))
`
    },

    {
      title: "L2 Normalization",
      language: "python",
      code: `
import math

def normalize(vector):
    magnitude = math.sqrt(
        sum(x * x for x in vector)
    )

    if magnitude == 0:
        return vector

    return [
        x / magnitude
        for x in vector
    ]


vector = [3, 4]

print(normalize(vector))
`
    },

    {
      title: "Simple Semantic Retrieval",
      language: "python",
      code: `
documents = [
    {
        "text": "Users can reset passwords from account settings.",
        "vector": [0.8, 0.2, 0.1]
    },
    {
        "text": "The library closes at 8 PM.",
        "vector": [0.1, 0.9, 0.3]
    }
]

query_vector = [0.75, 0.25, 0.1]

for document in documents:
    document["score"] = cosine_similarity(
        query_vector,
        document["vector"]
    )

ranked = sorted(
    documents,
    key=lambda x: x["score"],
    reverse=True
)

for document in ranked:
    print(document["score"], document["text"])
`
    },

    {
      title: "Embedding API Concept",
      language: "python",
      code: `
def embed_documents(texts, embedding_model):
    vectors = []

    for text in texts:
        vector = embedding_model.embed(text)
        vectors.append(vector)

    return vectors


texts = [
    "RAG retrieves external knowledge.",
    "Embeddings represent text as vectors."
]

# embedding_model represents your chosen embedding provider.
# vectors = embed_documents(texts, embedding_model)
`
    }
  ],

  comparisonTables: [
    {
      title: "Similarity Measures",
      columns: [
        "Method",
        "Main Idea",
        "Typical Interpretation"
      ],
      rows: [
        ["Cosine", "Compare vector direction", "Higher is more similar"],
        ["Dot product", "Measure vector alignment", "Higher can mean more similar"],
        ["Euclidean distance", "Geometric distance", "Lower is more similar"]
      ]
    },
    {
      title: "Dense vs Sparse Retrieval",
      columns: [
        "Aspect",
        "Dense",
        "Sparse"
      ],
      rows: [
        ["Representation", "Dense vectors", "Sparse term features"],
        ["Semantic similarity", "Strong", "More limited"],
        ["Exact terms", "Can miss rare terms", "Strong"],
        ["Interpretability", "Lower", "Often higher"],
        ["Hybrid use", "Can combine", "Can combine"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "Text to Embedding",
      type: "diagram",
      description: "Visualize text entering an embedding model and becoming a high-dimensional vector."
    },
    {
      title: "Embedding Space",
      type: "diagram",
      description: "Show semantically related sentences positioned near each other in vector space."
    },
    {
      title: "Cosine Similarity",
      type: "math-diagram",
      description: "Visualize two vectors and the angle used by cosine similarity."
    },
    {
      title: "Dense vs Sparse Retrieval",
      type: "comparison",
      description: "Compare dense semantic representations with sparse keyword representations."
    },
    {
      title: "Query and Document Embeddings",
      type: "flowchart",
      description: "Show documents and queries passing through compatible embedding models before similarity search."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Vector Arithmetic",
      task: "Calculate dot products, magnitudes, cosine similarities, and Euclidean distances for several vectors."
    },
    {
      title: "Exercise 2 — Similarity Ranking",
      task: "Given one query vector and five document vectors, rank the documents using cosine similarity."
    },
    {
      title: "Exercise 3 — Dense vs Sparse",
      task: "Create examples where semantic retrieval is useful and examples where exact keyword retrieval is better."
    },
    {
      title: "Exercise 4 — Embedding Model Selection",
      task: "Define criteria for selecting an embedding model for a multilingual university knowledge base."
    },
    {
      title: "Exercise 5 — Query Embedding Experiment",
      task: "Create semantically related and unrelated queries and compare their similarity scores."
    }
  ],

  interviewQuestions: [
    {
      question: "What is an embedding?",
      answer: "An embedding is a numerical vector representation of information."
    },
    {
      question: "Why are embeddings useful in RAG?",
      answer: "They enable semantic similarity search between user queries and document chunks."
    },
    {
      question: "What is cosine similarity?",
      answer: "A measure based on the angle between two vectors."
    },
    {
      question: "What happens if document and query embeddings use incompatible models?",
      answer: "Their vectors may not represent information in a compatible space, making similarity search unreliable."
    },
    {
      question: "Are embeddings guaranteed to identify the correct document?",
      answer: "No. Embedding quality depends on the model, data, query, domain, and retrieval design."
    },
    {
      question: "Dense vs sparse retrieval?",
      answer: "Dense retrieval uses vector representations for semantic similarity, while sparse retrieval emphasizes term-level matching. Hybrid approaches can combine them."
    }
  ],

  commonMistakes: [
    "Assuming higher similarity always means factual correctness.",
    "Mixing incompatible embedding models.",
    "Ignoring multilingual requirements.",
    "Ignoring domain-specific terminology.",
    "Using embeddings without metadata filtering.",
    "Assuming semantic search replaces exact keyword search completely.",
    "Changing embedding models without rebuilding or migrating the index."
  ],

  keyTakeaways: [
    "Embeddings convert information into numerical vectors.",
    "Semantic retrieval compares query and document representations.",
    "Cosine similarity measures vector direction similarity.",
    "Dot product and Euclidean distance are alternative similarity/distance functions.",
    "Embedding dimensions define the vector representation size.",
    "Query and document embeddings need compatible representations.",
    "Dense and sparse retrieval have complementary strengths.",
    "Similarity does not equal truth.",
    "Embedding models should be evaluated on the actual target domain."
  ]
};

export default lesson;