const lesson = {
  id: "lesson4",
  moduleId: "module5",
  lessonNumber: 4,

  title: "Text Embedding Pipelines & Chunk Representations",

  subtitle:
    "Understand how raw documents are transformed into retrieval-ready chunks and embeddings for semantic search and RAG systems.",

  description: `
An embedding system does not normally send an entire raw document directly
into a vector database.

Real applications usually perform a pipeline:

Documents
    ↓
Extraction
    ↓
Cleaning
    ↓
Structure detection
    ↓
Chunking
    ↓
Metadata attachment
    ↓
Embedding generation
    ↓
Vector storage

The quality of this pipeline strongly influences downstream retrieval.

Poor chunking can produce poor retrieval even when the embedding model
itself is excellent.
`,

  estimatedTime: "90–120 minutes",
  difficulty: "Intermediate",

  learningObjectives: [
    "Understand the complete text-to-embedding pipeline.",
    "Understand why document preprocessing matters.",
    "Understand chunking and chunk boundaries.",
    "Compare fixed-size and semantic chunking.",
    "Understand overlap.",
    "Understand metadata associated with chunks.",
    "Understand token-based chunking.",
    "Understand parent-child representations.",
    "Understand chunk quality and retrieval quality.",
    "Design a production-oriented embedding ingestion pipeline."
  ],

  sections: [
    {
      heading: "1. From Documents to Embeddings",

      content: `
A production retrieval system normally begins with documents rather than
already-clean text.

Documents may come from:

• PDF files
• DOCX files
• HTML pages
• Markdown
• databases
• emails
• knowledge bases
• source-code repositories
• spreadsheets

The first challenge is therefore converting heterogeneous information
into meaningful text units.

A simplified pipeline is:

SOURCE
  ↓
EXTRACT
  ↓
CLEAN
  ↓
STRUCTURE
  ↓
CHUNK
  ↓
EMBED
  ↓
INDEX
`
    },

    {
      heading: "2. Document Extraction",

      content: `
Extraction converts source files into machine-processable content.

For example:

PDF
 ↓
Text + headings + tables + page information

HTML
 ↓
Main content + headings + links + metadata

DOCX
 ↓
Paragraphs + headings + tables

The extraction stage should preserve useful structure whenever possible.

For example, this:

Chapter 4
Neural Networks

A neural network contains...

is more useful than an unstructured sequence of text where the heading
relationship has been completely lost.
`
    },

    {
      heading: "3. Cleaning and Normalization",

      content: `
Raw extracted text may contain:

• repeated headers
• page numbers
• broken line wrapping
• duplicated content
• navigation menus
• HTML artifacts
• OCR errors
• excessive whitespace

Cleaning attempts to remove noise while preserving meaning.

The goal is not to aggressively rewrite the document.

The goal is:

useful information
        +
structure
        -
irrelevant extraction noise
`
    },

    {
      heading: "4. Why Chunking Is Necessary",

      content: `
Large documents are often too large to represent or retrieve as a single
unit.

Suppose a 300-page manual is converted into one embedding.

That embedding must summarize an enormous amount of information.

A query such as:

"How do I configure the database connection pool?"

may require only a small section.

Chunking divides the document into smaller retrieval units.
`,

      classificationTree: `
DOCUMENT
│
├── Section
│   ├── Paragraph
│   ├── Paragraph
│   └── Paragraph
│
├── Section
│   ├── Paragraph
│   └── Paragraph
│
└── Section
    └── Paragraph

            ↓

       RETRIEVAL CHUNKS

            ↓

        EMBEDDINGS
`
    },

    {
      heading: "5. Fixed-Size Chunking",

      content: `
Fixed-size chunking divides text according to a predefined size.

For example:

Chunk size = 500 tokens

The system repeatedly creates approximately 500-token chunks.

Advantages:

• simple
• predictable
• fast
• easy to implement

Disadvantages:

• may split sentences
• may split ideas
• may separate headings from content
• may destroy logical structure
`
    },

    {
      heading: "6. Token-Based Chunking",

      content: `
Embedding and language models operate around token-based limits.

Therefore chunking by token count is often more reliable than simply
counting characters.

For example:

Chunk A:
tokens 1–500

Chunk B:
tokens 501–1000

Chunk C:
tokens 1001–1500

The exact tokenizer matters because different tokenizers can produce
different token counts for the same text.
`,

      formulas: [
        "Approximate number of chunks ≈ ceil(total_tokens / chunk_size)"
      ]
    },

    {
      heading: "7. Chunk Overlap",

      content: `
Chunk boundaries can cause important context to be split.

Suppose:

Chunk 1:
A B C D E

Chunk 2:
F G H I J

Information around E/F may be separated.

Overlap repeats a small region:

Chunk 1:
A B C D E

Chunk 2:
D E F G H

This can preserve continuity across boundaries.

However, excessive overlap increases:

• storage
• embedding computation
• retrieval redundancy
• downstream context size
`
    },

    {
      heading: "8. Semantic Chunking",

      content: `
Semantic chunking attempts to create chunks around meaningful boundaries.

Possible boundaries include:

• headings
• paragraphs
• sections
• topic changes
• list boundaries
• code blocks
• tables

For example:

Chapter
  ↓
Section
  ↓
Subsection
  ↓
Paragraph group
  ↓
Chunk

Semantic chunking can preserve meaning better than blindly splitting
every N tokens.
`
    },

    {
      heading: "9. Chunk Size Trade-offs",

      comparisonTables: [
        {
          title: "Small vs Large Chunks",
          columns: ["Property", "Small Chunks", "Large Chunks"],
          rows: [
            ["Retrieval precision", "Can be higher", "Can be lower"],
            ["Context completeness", "Can be lower", "Can be higher"],
            ["Embedding count", "Higher", "Lower"],
            ["Storage", "Higher", "Lower"],
            ["Noise", "Potentially lower", "Potentially higher"],
            ["Boundary risk", "Higher", "Lower"],
            ["Generation context", "More chunks may be needed", "Fewer chunks may be needed"]
          ]
        }
      ]
    },

    {
      heading: "10. Metadata",

      content: `
Each chunk should normally carry metadata.

Example:

{
  "document_id": "manual-001",
  "chunk_id": "manual-001-042",
  "page": 42,
  "section": "Database Configuration",
  "source": "database-manual.pdf",
  "created_at": "2026-09-01"
}

Metadata enables:

• filtering
• citations
• access control
• source display
• debugging
• document tracking
• updates
• deletion
`
    },

    {
      heading: "11. Parent-Child Chunking",

      content: `
Sometimes a small chunk is useful for precise retrieval but insufficient
for generation.

A parent-child strategy separates retrieval granularity from generation
context.

Example:

Parent document
    ↓
Large section
    ↓
Child chunks
    ├── child 1
    ├── child 2
    └── child 3

Search can retrieve child 2.

The system can then return the parent section or surrounding context
for generation.

This can improve contextual completeness.
`
    },

    {
      heading: "12. Embedding Generation",

      content: `
After chunking:

Chunk
  ↓
Embedding model
  ↓
Vector

For N chunks:

    C₁ → E₁
    C₂ → E₂
    C₃ → E₃
    ...
    Cₙ → Eₙ

Each vector is stored together with the corresponding chunk and metadata.
`
    },

    {
      heading: "13. End-to-End Ingestion Pipeline",

      process: [
        "Collect source documents.",
        "Extract text and structure.",
        "Clean extraction noise.",
        "Normalize content.",
        "Detect document structure.",
        "Create chunks.",
        "Attach metadata.",
        "Generate embeddings.",
        "Store vectors and metadata.",
        "Validate indexing results."
      ],

      contentAfterProcess: `
The ingestion process creates the searchable representation used by
the online retrieval system.
`
    },

    {
      heading: "14. Chunk Quality Determines Retrieval Quality",

      content: `
A strong embedding model cannot completely compensate for poor chunks.

Consider:

Bad chunk:
"database... therefore... however... section 14..."

Good chunk:
"Connection pooling allows an application to reuse database connections
instead of creating a new connection for every request."

The second representation is more likely to support precise retrieval.

Therefore RAG quality depends on the complete pipeline:

document quality
+
extraction
+
chunking
+
embedding model
+
indexing
+
retrieval
`
    }
  ],

  codeExamples: [
    {
      title: "Simple Fixed-Size Chunking",
      language: "python",
      code: `def chunk_text(text, size=100):
    words = text.split()

    chunks = []

    for i in range(0, len(words), size):
        chunks.append(
            " ".join(words[i:i + size])
        )

    return chunks


text = " ".join(["word"] * 250)

chunks = chunk_text(text, size=100)

for i, chunk in enumerate(chunks):
    print(i, len(chunk.split()))`,
      explanation:
        "This demonstrates the basic idea of dividing a document into fixed-size chunks."
    },

    {
      title: "Chunk Overlap",
      language: "python",
      code: `def chunk_with_overlap(words, size=5, overlap=2):
    chunks = []
    step = size - overlap

    for start in range(0, len(words), step):
        chunk = words[start:start + size]

        if not chunk:
            break

        chunks.append(chunk)

    return chunks


words = list("ABCDEFGHIJKLMNO")

for chunk in chunk_with_overlap(words):
    print(chunk)`,
      explanation:
        "Overlap preserves some neighboring information between chunks."
    },

    {
      title: "Chunk Metadata",
      language: "python",
      code: `chunk = {
    "chunk_id": "doc-001-03",
    "document_id": "doc-001",
    "text": "Connection pooling reuses database connections.",
    "page": 12,
    "section": "Database Configuration"
}

print(chunk["chunk_id"])
print(chunk["section"])`,
      explanation:
        "Metadata makes chunks traceable and enables later filtering and citations."
    }
  ],

  mathIntuition: [
    {
      concept: "Chunk count",
      intuition:
        "More chunks increase the number of embeddings and searchable units."
    },
    {
      concept: "Overlap",
      intuition:
        "Overlap trades additional storage and computation for greater continuity across chunk boundaries."
    },
    {
      concept: "Retrieval granularity",
      intuition:
        "Smaller chunks provide more precise retrieval units, while larger chunks preserve more surrounding context."
    }
  ],

  comparisonTables: [
    {
      title: "Chunking Strategies",
      columns: ["Strategy", "Strength", "Weakness"],
      rows: [
        ["Fixed-size", "Simple and predictable", "Can break semantic boundaries"],
        ["Token-based", "Aligned with model limits", "Requires tokenizer awareness"],
        ["Semantic", "Preserves meaning", "More complex"],
        ["Hierarchical", "Preserves document structure", "More engineering"],
        ["Parent-child", "Separates retrieval and context granularity", "More metadata and logic"]
      ]
    }
  ],

  exercises: [
    "Why is chunking necessary for large documents?",
    "Compare fixed-size and semantic chunking.",
    "What is chunk overlap?",
    "Why can excessive overlap be harmful?",
    "Why should chunks carry metadata?",
    "Explain parent-child chunking.",
    "Why does chunk quality affect RAG quality?",
    "How would you chunk a technical PDF containing headings, tables, and code?"
  ],

  codingExercises: [
    {
      title: "Token-Aware Chunker",
      task: "Implement a chunking function that targets a maximum token count and supports overlap."
    },
    {
      title: "Metadata Pipeline",
      task: "Create chunk objects containing document ID, chunk ID, page, section, and text."
    },
    {
      title: "Semantic Chunk Prototype",
      task: "Build a simple paragraph-based chunker that keeps headings attached to their content."
    }
  ],

  architectureExercises: [
    "Design a PDF ingestion pipeline.",
    "Design a chunking strategy for technical documentation.",
    "Design a parent-child retrieval architecture.",
    "Design an incremental ingestion pipeline that only re-embeds changed documents."
  ],

  commonMistakes: [
    "Splitting documents without considering semantic boundaries.",
    "Using excessively large chunks.",
    "Using excessive overlap.",
    "Discarding metadata during ingestion.",
    "Embedding noisy extraction output.",
    "Using different embedding models for indexing and querying without compatibility.",
    "Ignoring document updates and stale vectors."
  ],

  interviewQuestions: [
    {
      question: "Why is chunking important in RAG?",
      answer:
        "Chunking creates manageable and meaningful retrieval units so relevant information can be found without representing an entire large document as one vector."
    },
    {
      question: "What is chunk overlap?",
      answer:
        "Overlap repeats a portion of neighboring text between chunks to reduce context loss at chunk boundaries."
    },
    {
      question: "What is parent-child chunking?",
      answer:
        "A retrieval strategy where small child chunks are searched while a larger parent context can be returned for generation."
    },
    {
      question: "What metadata should a chunk contain?",
      answer:
        "Useful metadata can include document ID, chunk ID, source, page, section, timestamps, permissions, and other filtering or citation information."
    }
  ],

  summary: [
    "Embedding pipelines begin with document extraction and preprocessing.",
    "Chunking converts large documents into retrieval units.",
    "Fixed-size, token-based, semantic, hierarchical, and parent-child strategies have different trade-offs.",
    "Overlap can preserve boundary context.",
    "Metadata is essential for filtering, citations, debugging, and lifecycle management.",
    "Chunk quality strongly influences retrieval quality."
  ],

  keyTakeaways: [
    "Embedding quality begins before the embedding model is called.",
    "Chunking is an architectural decision.",
    "There is no universally optimal chunk size.",
    "Metadata should travel with every indexed chunk.",
    "Good retrieval requires meaningful representations of meaningful chunks."
  ],

  visualReferences: [
    {
      title: "Document-to-Embedding Pipeline",
      type: "architecture",
      description: "Documents → extraction → cleaning → chunking → embedding → vector storage."
    },
    {
      title: "Chunking Strategies",
      type: "comparison",
      description: "Fixed-size, token-based, semantic, hierarchical, and parent-child chunking."
    },
    {
      title: "Parent-Child Retrieval",
      type: "architecture",
      description: "Small child chunks for retrieval with larger parent context for generation."
    }
  ]
};

export default lesson;