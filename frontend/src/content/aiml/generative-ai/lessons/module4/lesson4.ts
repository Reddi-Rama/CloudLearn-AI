const lesson4 = {
  id: "lesson4",

  moduleId: "module4",

  lessonNumber: 4,

  title: "Chunking Strategies for Retrieval",

  subtitle:
    "Learn how to split documents into retrieval-friendly chunks while preserving meaning, context, and useful relationships.",

  description:
    "Chunking is a critical stage in a Retrieval-Augmented Generation pipeline. Good chunking improves retrieval precision, recall, context quality, latency, and cost. This lesson covers fixed-size, recursive, semantic, structural, sentence-based, and hybrid chunking strategies.",

  estimatedTime: "30 min",

  difficulty: "Intermediate",

  learningObjectives: [
    "Understand why documents must be divided into smaller retrieval units.",
    "Understand the relationship between chunk size, overlap, retrieval quality, and context size.",
    "Implement fixed-size and overlapping chunking.",
    "Understand recursive and structure-aware chunking.",
    "Understand semantic chunking and when to use it.",
    "Choose an appropriate chunking strategy for different document types.",
    "Identify common chunking failures in RAG systems."
  ],

  sections: [
    {
      id: "what-is-chunking",
      title: "1. What Is Document Chunking?",
      content: [
        "Document chunking is the process of dividing a large document into smaller pieces called chunks.",
        "Instead of sending an entire document to a retrieval system, a RAG application creates smaller searchable units. These units can later be embedded, stored in a vector database, retrieved, and supplied to an LLM as context.",
        "The goal is not simply to make smaller pieces. The goal is to create chunks that contain enough information to represent a useful idea while remaining small enough for efficient retrieval."
      ]
    },

    {
      id: "why-chunking-matters",
      title: "2. Why Chunking Matters in RAG",
      content: [
        "If chunks are too large, each retrieved result may contain a large amount of irrelevant information. This increases context size and can make retrieval less precise.",
        "If chunks are too small, important context may be separated across multiple chunks. The retriever may then return incomplete information.",
        "Good chunking creates a balance between information density, context preservation, retrieval precision, and computational cost."
      ]
    },

    {
      id: "rag-flow",
      title: "3. Chunking in the RAG Pipeline",
      content: [
        "Documents",
        "↓",
        "Document parsing",
        "↓",
        "Cleaning and normalization",
        "↓",
        "Chunking",
        "↓",
        "Chunk overlap and metadata",
        "↓",
        "Embedding generation",
        "↓",
        "Vector storage",
        "↓",
        "Retrieval"
      ]
    },

    {
      id: "fixed-size",
      title: "4. Fixed-Size Chunking",
      content: [
        "Fixed-size chunking divides a document into chunks containing approximately the same number of characters or tokens.",
        "For example, a document can be divided into chunks of 500 tokens. The next chunk begins after the previous chunk reaches the selected size.",
        "This approach is simple, predictable, and computationally inexpensive."
      ]
    },

    {
      id: "fixed-size-example",
      title: "5. Fixed-Size Chunking Example",
      content: [
        "Suppose a document contains 2,000 tokens and the selected chunk size is 500 tokens.",
        "The document can be divided into approximately four chunks.",
        "The major limitation is that a fixed boundary can occur in the middle of a sentence, paragraph, table, or important concept."
      ]
    },

    {
      id: "overlap",
      title: "6. Chunk Overlap",
      content: [
        "Chunk overlap allows neighboring chunks to share a small amount of content.",
        "For example, a chunk size of 500 tokens with an overlap of 50 tokens means that the end of one chunk is repeated at the beginning of the next chunk.",
        "Overlap helps preserve information located near chunk boundaries."
      ]
    },

    {
      id: "overlap-flow",
      title: "7. Chunk Overlap Process",
      content: [
        "Original document",
        "↓",
        "Create Chunk 1",
        "↓",
        "Keep overlap region",
        "↓",
        "Create Chunk 2",
        "↓",
        "Repeat until document ends"
      ]
    },

    {
      id: "recursive",
      title: "8. Recursive Chunking",
      content: [
        "Recursive chunking attempts to split text using increasingly smaller structural boundaries.",
        "A typical hierarchy may begin with sections, then paragraphs, then sentences, and finally smaller units when necessary.",
        "This strategy generally preserves document structure better than blindly cutting text at fixed character positions."
      ]
    },

    {
      id: "recursive-flow",
      title: "9. Recursive Splitting Strategy",
      content: [
        "Large document",
        "↓",
        "Split by section",
        "↓",
        "Split oversized sections by paragraph",
        "↓",
        "Split oversized paragraphs by sentence",
        "↓",
        "Split remaining oversized text"
      ]
    },

    {
      id: "semantic",
      title: "10. Semantic Chunking",
      content: [
        "Semantic chunking groups text according to meaning rather than only using a fixed number of characters or tokens.",
        "Sentences with closely related meanings can remain together while major semantic changes can form new chunk boundaries.",
        "Semantic chunking can improve retrieval quality for concept-heavy documents, although it may require additional computation."
      ]
    },

    {
      id: "structural",
      title: "11. Structure-Aware Chunking",
      content: [
        "Different document types contain different structures. A technical document may contain headings, paragraphs, tables, equations, code blocks, and lists.",
        "Structure-aware chunking attempts to preserve these relationships.",
        "For example, a heading can be attached to the paragraphs beneath it so that the retrieved chunk retains the topic context."
      ]
    },

    {
      id: "document-types",
      title: "12. Choosing a Chunking Strategy",
      content: [
        "Technical documentation often benefits from structure-aware or recursive chunking.",
        "Long articles can often use recursive chunking with moderate overlap.",
        "Frequently changing knowledge bases may use smaller chunks to improve update and retrieval granularity.",
        "Source code should generally preserve functions, classes, imports, and related code structures rather than splitting purely by character count.",
        "Tables and structured records should be handled in a way that preserves their relationships and headers."
      ]
    },

    {
      id: "chunk-size",
      title: "13. Chunk Size Trade-Off",
      content: [
        "There is no universally correct chunk size.",
        "Smaller chunks can provide more precise retrieval but may lose surrounding context.",
        "Larger chunks preserve more context but can introduce irrelevant information and increase token usage.",
        "The appropriate size depends on document structure, embedding model, retriever, query type, and downstream LLM context capacity."
      ]
    },

    {
      id: "formula",
      title: "14. Chunk Count Intuition",
      content: [
        "For a document with approximately N tokens, chunk size C, and overlap O, the approximate number of chunks can be understood from the effective step size C − O."
      ]
    },

    {
      id: "metadata",
      title: "15. Chunk Metadata",
      content: [
        "Chunks should usually retain useful metadata from their source document.",
        "Useful metadata can include document ID, source URL, file name, page number, section title, document type, timestamp, author, and chunk position.",
        "Metadata can later be used for filtering, citation generation, access control, and debugging."
      ]
    },

    {
      id: "metadata-flow",
      title: "16. Chunk With Metadata",
      content: [
        "Source document",
        "↓",
        "Create chunk",
        "↓",
        "Attach metadata",
        "↓",
        "Generate embedding",
        "↓",
        "Store vector + text + metadata"
      ]
    },

    {
      id: "python-example",
      title: "17. Python Example: Simple Chunking",
      content: [
        "A basic implementation can split text into fixed-size chunks and optionally preserve overlap between neighboring chunks."
      ]
    },

    {
      id: "quality",
      title: "18. Measuring Chunking Quality",
      content: [
        "Chunking should be evaluated using the retrieval system rather than judged only by chunk length.",
        "Useful signals include retrieval recall, retrieval precision, context relevance, answer correctness, citation quality, latency, and token usage.",
        "A chunking strategy that looks clean structurally may still perform poorly if it does not return the information required by real user queries."
      ]
    },

    {
      id: "common-failures",
      title: "19. Common Chunking Failures",
      content: [
        "Splitting in the middle of important concepts can remove necessary context.",
        "Using extremely large chunks can cause noisy retrieval results.",
        "Using extremely small chunks can fragment useful information.",
        "Ignoring headings can make retrieved passages difficult to interpret.",
        "Ignoring metadata can make filtering and source attribution harder.",
        "Using the same chunking strategy for every document type can reduce retrieval quality."
      ]
    },

    {
      id: "practical-strategy",
      title: "20. Practical RAG Chunking Strategy",
      content: [
        "Inspect the document structure first.",
        "Preserve meaningful headings and sections.",
        "Use recursive splitting for general-purpose documents.",
        "Introduce moderate overlap when boundary context is important.",
        "Attach source metadata to every chunk.",
        "Evaluate retrieval quality using representative queries.",
        "Adjust chunk size and overlap based on measured results."
      ]
    },

    {
      id: "end-to-end",
      title: "21. End-to-End Chunking Workflow",
      content: [
        "Raw document",
        "↓",
        "Parse document",
        "↓",
        "Clean text",
        "↓",
        "Detect structure",
        "↓",
        "Split into chunks",
        "↓",
        "Add overlap",
        "↓",
        "Attach metadata",
        "↓",
        "Generate embeddings",
        "↓",
        "Store chunks",
        "↓",
        "Retrieve relevant chunks"
      ]
    }
  ],

  codeExamples: [
    {
      id: "fixed-chunking-python",
      title: "Fixed-Size Chunking With Overlap",
      language: "python",
      code: `def chunk_text(text, chunk_size=500, overlap=50):
    if chunk_size <= overlap:
        raise ValueError("chunk_size must be greater than overlap")

    chunks = []
    start = 0

    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])

        if end >= len(text):
            break

        start = end - overlap

    return chunks


text = """
Retrieval-Augmented Generation combines
retrieval with language model generation.
The retrieval system first finds useful
information from an external knowledge base.
"""

chunks = chunk_text(
    text,
    chunk_size=100,
    overlap=20
)

for index, chunk in enumerate(chunks, start=1):
    print(f"Chunk {index}:")
    print(chunk)
    print()`
    }
  ],

  exercises: [
    {
      id: "exercise1",
      question:
        "Why can extremely small chunks reduce retrieval quality?",
      answer:
        "They can separate related information and remove the surrounding context required to understand the retrieved passage."
    },
    {
      id: "exercise2",
      question:
        "What is the purpose of chunk overlap?",
      answer:
        "Overlap preserves some boundary context between neighboring chunks."
    },
    {
      id: "exercise3",
      question:
        "When can recursive chunking be preferable to fixed-size chunking?",
      answer:
        "When preserving document structure such as sections, paragraphs, and sentences is important."
    }
  ],

  codingExercises: [
    {
      id: "coding1",
      title: "Build a Chunking Utility",
      description:
        "Implement a Python function that accepts text, chunk size, and overlap and returns a list of chunks."
    },
    {
      id: "coding2",
      title: "Add Chunk Metadata",
      description:
        "Extend the chunking utility so every chunk contains its document ID, chunk index, and source section."
    }
  ],

  commonMistakes: [
    "Using a chunk size without considering the structure of the source documents.",
    "Setting overlap so high that almost identical chunks are repeatedly stored.",
    "Splitting tables, code, or structured content without preserving relationships.",
    "Ignoring metadata such as source document and section.",
    "Choosing chunk size based only on intuition instead of retrieval evaluation.",
    "Using the same chunking strategy for every type of document."
  ],

  summary: [
    "Chunking divides large documents into smaller retrieval units.",
    "Fixed-size chunking is simple but can ignore semantic and structural boundaries.",
    "Overlap helps preserve context around chunk boundaries.",
    "Recursive chunking preserves document structure better than naive splitting.",
    "Semantic and structure-aware chunking can improve retrieval quality for appropriate datasets.",
    "Chunk metadata supports filtering, citations, debugging, and source attribution.",
    "Chunking parameters should ultimately be evaluated using real retrieval performance."
  ],

  keyTakeaways: [
    "Good chunking is a retrieval-quality problem, not simply a text-splitting problem.",
    "Chunk size and overlap should be selected according to the document and retrieval task.",
    "Preserve meaningful structure whenever possible.",
    "Always attach useful source metadata to chunks.",
    "Measure retrieval quality before deciding that a chunking strategy is effective."
  ]
};

export default lesson4;