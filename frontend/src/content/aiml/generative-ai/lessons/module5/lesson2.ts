const lesson = {
  id: "lesson2",
  moduleId: "module5",
  lessonNumber: 2,

  title: "Embedding Models & Semantic Representation",

  subtitle:
    "Understand how embedding models learn useful vector representations and how model choice affects semantic search quality.",

  description: `
An embedding is only as useful as the representation produced by the
embedding model.

This lesson moves from the basic idea of embeddings into embedding-model
design, representation learning, contextual meaning, pooling, normalization,
domain adaptation, multilingual embeddings, and model selection.

The central pipeline is:

Input
  ↓
Tokenizer / Encoder
  ↓
Hidden representations
  ↓
Pooling / Representation strategy
  ↓
Normalization when appropriate
  ↓
Embedding vector
  ↓
Similarity / Retrieval
`,

  estimatedTime: "80–110 minutes",
  difficulty: "Intermediate",

  learningObjectives: [
    "Explain what an embedding model does.",
    "Understand representation learning.",
    "Distinguish static and contextual representations.",
    "Understand token-level and sentence-level representations.",
    "Understand pooling strategies.",
    "Understand embedding normalization.",
    "Understand general-purpose and domain-specific embedding models.",
    "Understand multilingual embedding considerations.",
    "Understand query/document representation compatibility.",
    "Choose an embedding model using practical criteria."
  ],

  sections: [
    {
      heading: "1. What Is an Embedding Model?",

      content: `
An embedding model is a model that transforms an input object into a
fixed-size or structured numerical representation.

For text:

    text
      ↓
    encoder
      ↓
    hidden representations
      ↓
    pooling / projection
      ↓
    embedding vector

The model learns a representation space in which certain relationships
are useful for the intended task.

For retrieval, the model should place relevant queries and documents
near each other according to an appropriate similarity function.
`
    },

    {
      heading: "2. Representation Learning",

      content: `
Representation learning means that the system learns useful features
from data instead of requiring a human to manually define every feature.

Traditional feature engineering might explicitly define:

• word counts
• keyword frequencies
• document length
• manually selected categories

A learned embedding can encode many useful patterns across its dimensions.

This is one reason neural embeddings are powerful for semantic applications.
`,

      comparisonTables: [
        {
          title: "Feature Engineering vs Representation Learning",
          columns: ["Aspect", "Feature Engineering", "Representation Learning"],
          rows: [
            ["Feature design", "Mostly human-designed", "Learned from data"],
            ["Flexibility", "Depends on manual design", "Can learn complex patterns"],
            ["Semantic relationships", "Often limited", "Can capture rich relationships"],
            ["Adaptation", "Requires redesign", "Can retrain/adapt model"]
          ]
        }
      ]
    },

    {
      heading: "3. Static vs Contextual Representations",

      content: `
A static word representation assigns approximately one vector to a word
regardless of the sentence.

Contextual representations depend on surrounding information.

Consider:

"The bank approved the loan."

"The river bank was flooded."

The word "bank" has different meanings.

A contextual representation can incorporate surrounding words so that the
representation changes according to context.
`,

      classificationTree: `
TEXT REPRESENTATIONS
│
├── Static
│   ├── Word2Vec-style representations
│   ├── GloVe-style representations
│   └── One primary vector per vocabulary item
│
└── Contextual
    ├── Transformer encoders
    ├── Context-aware token representations
    └── Sentence/document embedding models
`
    },

    {
      heading: "4. Token-Level vs Sentence-Level Embeddings",

      content: `
Different tasks require different representation levels.

Token-level representation:

    "The" → vector
    "model" → vector
    "retrieves" → vector

Sentence-level representation:

    "The model retrieves relevant documents."
                    ↓
              one vector

Document-level representation:

    complete document
            ↓
       one or more vectors

Retrieval applications often use sentence or chunk-level embeddings
because the search system needs to compare queries against meaningful
units of information.
`,

      comparisonTables: [
        {
          title: "Representation Granularity",
          columns: ["Level", "Represents", "Typical Use"],
          rows: [
            ["Token", "Individual token", "Language modeling / token processing"],
            ["Sentence", "Sentence meaning", "Semantic search"],
            ["Chunk", "Document segment", "RAG retrieval"],
            ["Document", "Large document", "Document-level retrieval"],
            ["Image", "Visual content", "Image search"]
          ]
        }
      ]
    },

    {
      heading: "5. How Does a Sentence Become One Vector?",

      content: `
A text encoder may initially produce one hidden representation per token.

For example:

Sentence:
"The model retrieves documents."

Conceptually:

Token 1 → h₁
Token 2 → h₂
Token 3 → h₃
Token 4 → h₄

But retrieval may need one vector for the complete sentence.

A representation strategy therefore combines token-level information.

This process is often called pooling.
`
    },

    {
      heading: "6. Pooling Strategies",

      content: `
Common conceptual pooling approaches include:

1. Mean pooling
2. Max pooling
3. Special-token pooling
4. Learned pooling
5. Model-specific pooling

Mean pooling can be represented as:

    e = (1/n) Σ hᵢ

where hᵢ represents a token-level hidden vector.

The exact approach depends on the embedding architecture.
`,

      formulas: [
        "Mean pooling: e = (1/n) Σᵢ hᵢ"
      ],

      mathIntuition: `
Mean pooling combines information from multiple token representations.

It can be understood as calculating the average location of the token
representations in the vector space.

However, the best pooling method depends on how the model was trained.
`
    },

    {
      heading: "7. Normalization",

      content: `
Vector normalization changes the scale of a vector while preserving its
direction.

A common operation is L2 normalization:

    e_normalized = e / ||e||₂

where:

    ||e||₂ = sqrt(e₁² + e₂² + ... + e_d²)

Normalized vectors have unit length.

Normalization can make similarity calculations easier to interpret,
especially when using dot product as a proxy for cosine similarity.
`,

      formulas: [
        "||e||₂ = √(Σ eᵢ²)",
        "ê = e / ||e||₂"
      ]
    },

    {
      heading: "8. General-Purpose vs Domain-Specific Embeddings",

      content: `
A general-purpose embedding model is trained to work across many kinds
of language.

A domain-specific model may be optimized for areas such as:

• medicine
• law
• finance
• scientific research
• programming
• technical documentation

The choice depends on the target retrieval problem.

A model that performs well on general web text is not automatically
optimal for highly specialized technical information.
`,

      comparisonTables: [
        {
          title: "Embedding Model Selection",
          columns: ["Criterion", "Question"],
          rows: [
            ["Quality", "Does it retrieve relevant information?"],
            ["Domain", "Does it understand the target content?"],
            ["Language", "Does it support required languages?"],
            ["Dimension", "Is vector size suitable for storage/search?"],
            ["Latency", "Can it process queries fast enough?"],
            ["Cost", "Is inference affordable?"],
            ["Deployment", "Can it run where required?"],
            ["Privacy", "Can sensitive data remain controlled?"]
          ]
        }
      ]
    },

    {
      heading: "9. Query and Document Embedding Compatibility",

      content: `
A retrieval system normally embeds both:

    query → q

and:

    document → d

The vectors need to exist in a compatible representation space.

A simplified retrieval score is:

    score(q, d) = similarity(q, d)

If the query and document representations are generated by incompatible
systems, direct comparison may not be meaningful.

This is why embedding model choice is an architectural decision rather
than merely a configuration detail.
`
    },

    {
      heading: "10. Multilingual Embeddings",

      content: `
Multilingual embedding models attempt to represent multiple languages
in compatible semantic spaces.

For example:

English:
"How do I reset my password?"

Another language:
"A sentence expressing the same meaning."

A multilingual embedding system may place the two representations
relatively close together.

This enables cross-lingual semantic search.

However, performance can vary significantly across languages, domains,
scripts, and query types.
`
    },

    {
      heading: "11. Embeddings for Code",

      content: `
Code embedding systems represent programming-related information.

Possible inputs include:

• source code
• functions
• classes
• documentation
• error messages
• code comments

Applications include:

• code search
• duplicate detection
• repository navigation
• bug analysis
• documentation retrieval
• developer assistants
`
    },

    {
      heading: "12. Embedding Model Evaluation",

      content: `
An embedding model should not be selected solely because it produces
vectors successfully.

It should be evaluated on the target task.

A retrieval evaluation pipeline might be:

Dataset
   ↓
Queries + relevant documents
   ↓
Embedding model
   ↓
Similarity search
   ↓
Top-k results
   ↓
Recall / Precision / MRR
   ↓
Model comparison

This turns model selection into an empirical engineering problem.
`
    }
  ],

  codeExamples: [
    {
      title: "Mean Pooling Concept",
      language: "python",
      code: `import numpy as np

token_vectors = np.array([
    [1.0, 2.0, 3.0],
    [2.0, 1.0, 4.0],
    [3.0, 2.0, 1.0]
])

sentence_vector = token_vectors.mean(axis=0)

print("Sentence embedding:", sentence_vector)`,
      explanation:
        "This demonstrates the mathematical idea of mean pooling over token-level vectors."
    },

    {
      title: "L2 Normalization",
      language: "python",
      code: `import numpy as np

vector = np.array([3.0, 4.0])

norm = np.linalg.norm(vector)

normalized = vector / norm

print("Original:", vector)
print("Norm:", norm)
print("Normalized:", normalized)`,
      explanation:
        "The vector [3,4] has L2 norm 5, so normalization produces [0.6,0.8]."
    }
  ],

  mathIntuition: [
    {
      concept: "Pooling",
      intuition:
        "Pooling combines several token-level representations into a representation for a larger unit such as a sentence."
    },
    {
      concept: "Normalization",
      intuition:
        "Normalization changes vector magnitude while preserving direction."
    },
    {
      concept: "Representation space",
      intuition:
        "An embedding model defines a numerical space in which useful relationships can be measured."
    }
  ],

  exercises: [
    "Explain representation learning.",
    "Compare static and contextual representations.",
    "Why might a sentence need a single embedding vector?",
    "Explain mean pooling mathematically.",
    "What does L2 normalization do?",
    "Why should query and document embeddings be compatible?",
    "Why might a domain-specific embedding model outperform a general-purpose model?",
    "What factors should be considered when selecting an embedding model?"
  ],

  codingExercises: [
    {
      title: "Implement Mean Pooling",
      task: "Write a Python function that receives a matrix of token vectors and returns their mean vector."
    },
    {
      title: "Implement L2 Normalization",
      task: "Implement vector normalization using NumPy without calling a built-in normalization function."
    },
    {
      title: "Embedding Model Benchmark",
      task: "Design a small experiment that compares two embedding models on the same retrieval dataset."
    }
  ],

  architectureExercises: [
    "Design a sentence embedding pipeline.",
    "Design an embedding service for a RAG system.",
    "Design a multilingual semantic search architecture.",
    "Design an embedding evaluation dataset for technical documentation."
  ],

  comparisonTables: [
    {
      title: "Embedding Model Trade-offs",
      columns: ["Dimension", "Smaller Model", "Larger Model"],
      rows: [
        ["Inference cost", "Usually lower", "Usually higher"],
        ["Latency", "Usually lower", "Usually higher"],
        ["Storage", "Usually lower", "Usually higher"],
        ["Capacity", "May be lower", "May be higher"],
        ["Quality", "Task dependent", "Task dependent"]
      ]
    }
  ],

  commonMistakes: [
    "Assuming every embedding model has the same vector space.",
    "Assuming a larger embedding dimension always gives better retrieval.",
    "Ignoring multilingual requirements.",
    "Ignoring domain-specific terminology.",
    "Comparing incompatible embedding spaces.",
    "Skipping evaluation and selecting models only by popularity.",
    "Assuming normalization automatically improves every retrieval task."
  ],

  interviewQuestions: [
    {
      question: "What does an embedding model do?",
      answer:
        "It transforms an input into a learned numerical representation suitable for a particular semantic or machine-learning task."
    },
    {
      question: "What is mean pooling?",
      answer:
        "Mean pooling combines multiple token representations by calculating their element-wise average."
    },
    {
      question: "Why normalize embeddings?",
      answer:
        "Normalization removes differences in vector magnitude and can make direction-based similarity calculations more useful."
    },
    {
      question: "How do you choose an embedding model?",
      answer:
        "Evaluate quality, domain coverage, languages, dimensionality, latency, cost, deployment requirements, and privacy."
    }
  ],

  summary: [
    "Embedding models transform information into useful vector representations.",
    "Representation learning allows models to learn features from data.",
    "Contextual representations depend on surrounding information.",
    "Pooling can convert token-level representations into sentence-level representations.",
    "Normalization controls vector magnitude.",
    "Embedding models should be selected and evaluated for the actual target task."
  ],

  keyTakeaways: [
    "Embedding quality depends on the model and its training objective.",
    "Contextual representations capture meaning using surrounding information.",
    "Pooling is important when converting token representations into larger-unit embeddings.",
    "Model selection should consider quality, domain, language, latency, cost, and privacy.",
    "The query and document representations must be compatible for semantic retrieval."
  ],

  visualReferences: [
    {
      title: "Embedding Model Pipeline",
      type: "architecture",
      description: "Input text → encoder → token representations → pooling → embedding."
    },
    {
      title: "Static vs Contextual Representation",
      type: "diagram",
      description: "Same word represented differently depending on surrounding context."
    },
    {
      title: "Embedding Model Selection",
      type: "flowchart",
      description: "Quality → domain → language → latency → cost → deployment."
    }
  ]
};

export default lesson;