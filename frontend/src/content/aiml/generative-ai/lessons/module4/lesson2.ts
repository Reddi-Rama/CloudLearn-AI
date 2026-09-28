const lesson = {
  id: "lesson2",
  moduleId: "module4",
  title: "RAG Architecture & End-to-End Data Flow",
  subtitle: "Understand how a production RAG system transforms documents into searchable knowledge and user questions into grounded answers.",

  overview: `
A RAG system is not simply a database connected to an LLM.

It is a pipeline containing multiple stages:

DOCUMENTS
   ↓
INGESTION
   ↓
CLEANING
   ↓
CHUNKING
   ↓
EMBEDDING
   ↓
INDEX / VECTOR STORE
   ↓
USER QUERY
   ↓
QUERY PROCESSING
   ↓
RETRIEVAL
   ↓
RERANKING / FILTERING
   ↓
CONTEXT CONSTRUCTION
   ↓
PROMPT
   ↓
LLM
   ↓
VALIDATION
   ↓
ANSWER

Understanding this complete data flow is essential before implementing advanced RAG systems.
`,

  learningObjectives: [
    "Describe the complete RAG architecture.",
    "Differentiate indexing-time and query-time operations.",
    "Understand the role of each major RAG component.",
    "Explain document ingestion.",
    "Explain chunking and embedding stages.",
    "Understand vector storage.",
    "Understand query embedding and retrieval.",
    "Understand top-k retrieval.",
    "Explain reranking and filtering.",
    "Understand context construction.",
    "Understand generation and response validation.",
    "Identify failure points across the RAG pipeline."
  ],

  keyTerms: [
    {
      term: "Ingestion",
      definition: "The process of loading and preparing source information for a retrieval system."
    },
    {
      term: "Chunk",
      definition: "A smaller piece of a document used as a retrievable unit."
    },
    {
      term: "Embedding",
      definition: "A numerical vector representation of information."
    },
    {
      term: "Vector Store",
      definition: "A storage and retrieval system designed to search vector representations."
    },
    {
      term: "Top-k",
      definition: "The number of highest-ranked retrieval results returned for a query."
    },
    {
      term: "Reranking",
      definition: "A second-stage process that reorders retrieved candidates using a more detailed relevance model."
    },
    {
      term: "Context Construction",
      definition: "The process of selecting and formatting retrieved information for the LLM."
    },
    {
      term: "Response Validation",
      definition: "Checking whether the generated answer satisfies expected quality, structure, and safety requirements."
    }
  ],

  sections: [
    {
      title: "1. High-Level RAG Architecture",
      explanation: `
A complete RAG architecture can be divided into two large systems.

SYSTEM A — KNOWLEDGE PREPARATION

Source Documents
      ↓
Document Loader
      ↓
Parser
      ↓
Cleaner
      ↓
Chunker
      ↓
Embedding Model
      ↓
Vector Database

SYSTEM B — QUESTION ANSWERING

User
 ↓
Question
 ↓
Query Processing
 ↓
Embedding
 ↓
Retriever
 ↓
Candidate Documents
 ↓
Reranker / Filter
 ↓
Context Builder
 ↓
Prompt
 ↓
LLM
 ↓
Validation
 ↓
Answer
`
    },

    {
      title: "2. Offline Indexing Pipeline",
      explanation: `
The indexing pipeline prepares knowledge before users ask questions.

Example:

PDF
 ↓
Extract text
 ↓
Clean text
 ↓
Split into chunks
 ↓
Generate embeddings
 ↓
Store vectors + metadata

This is normally performed when documents are added or updated.

The result is a searchable representation of the source collection.
`
    },

    {
      title: "3. Online Query Pipeline",
      explanation: `
At query time:

User:
"What is the university attendance requirement?"

The system:

1. Receives the question.
2. Optionally rewrites or expands it.
3. Creates a query representation.
4. Searches the index.
5. Retrieves candidate chunks.
6. Optionally reranks them.
7. Constructs context.
8. Sends context and question to the LLM.
9. Validates the response.
10. Returns the final answer.
`
    },

    {
      title: "4. Document Loader",
      explanation: `
Different knowledge sources require different loaders.

Examples:

• PDF files
• DOCX documents
• Markdown
• HTML
• CSV
• JSON
• Database records
• Cloud storage
• APIs
• Web pages

The loader converts source data into a representation the pipeline can process.
`
    },

    {
      title: "5. Parser",
      explanation: `
Parsing extracts meaningful content from a source.

For a PDF:

PDF file
 ↓
Pages
 ↓
Text
 ↓
Tables / headings / metadata

Parsing quality matters because poor extraction produces poor retrieval.

If a PDF contains:

"Attendance requirement: 75%"

but the parser fails to extract that sentence,
the retrieval system cannot reliably retrieve it later.
`
    },

    {
      title: "6. Cleaning and Normalization",
      explanation: `
Raw documents can contain:

• Repeated headers
• Page numbers
• Broken whitespace
• OCR errors
• Navigation menus
• HTML markup
• Duplicate content
• Irrelevant boilerplate

Cleaning attempts to remove noise without destroying useful meaning.

Example:

Raw:
"Page 4 | University Handbook | Page 4"

Cleaned:
"University Handbook"
`
    },

    {
      title: "7. Chunking",
      explanation: `
Large documents are usually divided into smaller chunks.

Example:

A 100-page handbook
       ↓
500 chunks

Each chunk becomes a candidate retrieval unit.

Chunking must balance:

Too small:
• Missing context
• Fragmented meaning

Too large:
• Less precise retrieval
• Excessive context
• Higher token usage
`
    },

    {
      title: "8. Embedding",
      explanation: `
An embedding model transforms text into a vector.

Conceptually:

Text
 ↓
Embedding Model
 ↓
[0.12, -0.43, 0.77, ... ]

Semantically related texts should tend to occupy nearby regions
in the embedding space.

This allows semantic search rather than exact keyword matching.
`
    },

    {
      title: "9. Vector Database",
      explanation: `
A vector database stores:

• Vector
• Original text or reference
• Metadata
• Document identifier
• Chunk identifier

Example metadata:

{
  "document": "student_handbook.pdf",
  "page": 42,
  "department": "IT",
  "year": 2026
}

Metadata becomes useful for filtering and source tracking.
`
    },

    {
      title: "10. Retrieval",
      explanation: `
The user question is converted into a representation that can be compared
with indexed vectors.

For example:

Question
"What is the attendance requirement?"

      ↓

Query embedding

      ↓

Similarity search

      ↓

Top 5 chunks
`
    },

    {
      title: "11. Top-k Retrieval",
      explanation: `
If k = 5, the system returns the five highest-ranked candidates.

Top-k is an important design parameter.

Small k:
• Less context
• Lower token usage
• Risk of missing evidence

Large k:
• More evidence
• Higher token usage
• More irrelevant information
`
    },

    {
      title: "12. Reranking",
      explanation: `
Initial retrieval may be optimized for speed.

A reranker can take the top candidates and perform a more detailed relevance
calculation.

Example:

Initial retrieval:
20 candidates

Reranking:
20 → 5 best candidates

This creates a two-stage retrieval architecture:

Fast retrieval
      ↓
Candidate set
      ↓
More precise ranking
      ↓
Final context
`
    },

    {
      title: "13. Context Construction",
      explanation: `
The application must decide how retrieved chunks are presented to the model.

Example:

SYSTEM:
Answer using supplied evidence.

CONTEXT:
[Document A, Page 10]
Attendance must be at least 75%.

[Document B, Page 22]
Students below the required attendance may be subject to university rules.

QUESTION:
What is the attendance requirement?

The context builder therefore acts as a bridge between retrieval and generation.
`
    },

    {
      title: "14. Generation",
      explanation: `
The LLM receives:

• System instructions
• Retrieved context
• User question
• Output requirements

It generates the final response.

Important:
The LLM does not perform retrieval automatically in a basic RAG architecture.
The application is responsible for retrieving and supplying the context.
`
    },

    {
      title: "15. Response Validation",
      explanation: `
Production systems can validate the response after generation.

Possible checks:

• Required fields exist.
• JSON is valid.
• Answer is grounded.
• Citations are present.
• Safety rules are satisfied.
• Unsupported claims are detected.
• Length constraints are satisfied.

If validation fails:

Generated answer
      ↓
Validation
      ↓
FAIL
      ↓
Retry / repair / fallback / human review
`
    },

    {
      title: "16. Failure Points",
      explanation: `
Every stage can fail.

Document problem:
Bad extraction

Chunking problem:
Important information split incorrectly

Embedding problem:
Poor semantic representation

Retrieval problem:
Wrong chunks returned

Reranking problem:
Relevant chunk removed

Context problem:
Important evidence omitted

Generation problem:
Model misinterprets evidence

Validation problem:
Incorrect output accepted

Therefore debugging RAG requires examining the pipeline stage by stage.
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "Top-k Retrieval",
      formula: `
R_k(q) = top-k documents according to score(q,d)
`,
      explanation: "The retrieval system selects the k highest-scoring candidates for a query."
    },
    {
      concept: "Similarity Search",
      formula: `
score(q,d) = cos(E(q), E(d))
`,
      explanation: "E(q) and E(d) represent the query and document chunk in embedding space."
    },
    {
      concept: "Context Budget",
      formula: `
Total Context ≈ Instructions + Query + Retrieved Tokens + Output Budget
`,
      explanation: "Retrieved context consumes part of the model's available context window."
    },
    {
      concept: "Recall",
      formula: `
Recall = Relevant Retrieved Items / Total Relevant Items
`,
      explanation: "Higher retrieval recall means the system is more likely to retrieve relevant evidence."
    }
  ],

  codeExamples: [
    {
      title: "Minimal RAG Pipeline",
      language: "python",
      code: `
def rag(question, retriever, generator):
    retrieved = retriever(question)

    context = "\\n\\n".join(retrieved)

    prompt = f"""
Use the following context to answer the question.

CONTEXT:
{context}

QUESTION:
{question}

If the context is insufficient, say so.
"""

    return generator(prompt)
`
    },

    {
      title: "Simple Top-k Retrieval",
      language: "python",
      code: `
def top_k(results, k=5):
    ranked = sorted(
        results,
        key=lambda item: item["score"],
        reverse=True
    )

    return ranked[:k]


results = [
    {"text": "RAG combines retrieval and generation.", "score": 0.91},
    {"text": "Embeddings represent text numerically.", "score": 0.82},
    {"text": "Transformers use attention.", "score": 0.71}
]

print(top_k(results, 2))
`
    },

    {
      title: "Metadata Filtering",
      language: "python",
      code: `
documents = [
    {
        "text": "Attendance must be at least 75%.",
        "department": "IT",
        "year": 2026
    },
    {
        "text": "Library closes at 8 PM.",
        "department": "Library",
        "year": 2026
    }
]

filtered = [
    doc for doc in documents
    if doc["department"] == "IT"
]

for doc in filtered:
    print(doc["text"])
`
    },

    {
      title: "RAG Pipeline Object",
      language: "python",
      code: `
class RAGPipeline:

    def __init__(self, retriever, llm):
        self.retriever = retriever
        self.llm = llm

    def run(self, question):
        documents = self.retriever.search(question)

        context = "\\n\\n".join(
            doc["text"] for doc in documents
        )

        prompt = f"""
Context:
{context}

Question:
{question}

Answer only from the context.
"""

        return self.llm.generate(prompt)
`
    }
  ],

  comparisonTables: [
    {
      title: "Indexing Phase vs Query Phase",
      columns: [
        "Aspect",
        "Indexing",
        "Query"
      ],
      rows: [
        ["Trigger", "Document addition/update", "User question"],
        ["Input", "Source documents", "User query"],
        ["Main work", "Prepare searchable knowledge", "Find and use relevant knowledge"],
        ["Embedding", "Document embeddings", "Query embedding"],
        ["Output", "Searchable index", "Generated answer"]
      ]
    },
    {
      title: "Retrieval vs Reranking",
      columns: [
        "Aspect",
        "Retrieval",
        "Reranking"
      ],
      rows: [
        ["Purpose", "Find candidates", "Improve candidate ordering"],
        ["Typical position", "First stage", "Second stage"],
        ["Candidate count", "Large", "Smaller"],
        ["Speed", "Usually optimized for speed", "Usually more computationally expensive"],
        ["Goal", "High recall", "Higher precision"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "Complete RAG Architecture",
      type: "architecture",
      description: "Documents → ingestion → chunking → embeddings → vector store → query → retrieval → reranking → context → LLM → validation."
    },
    {
      title: "Offline vs Online RAG",
      type: "flowchart",
      description: "Two-lane diagram showing indexing-time and query-time pipelines."
    },
    {
      title: "Top-k Retrieval",
      type: "diagram",
      description: "Visualize a query retrieving the highest-scoring document chunks."
    },
    {
      title: "RAG Failure Points",
      type: "architecture",
      description: "Mark potential failure points at ingestion, chunking, embedding, retrieval, context, generation, and validation."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Draw the RAG Architecture",
      task: "Draw the complete indexing and query pipelines and label every component."
    },
    {
      title: "Exercise 2 — Calculate Top-k",
      task: "Given ten similarity scores, manually determine the top three retrieval results."
    },
    {
      title: "Exercise 3 — Metadata Filtering",
      task: "Design metadata filters for department, year, document type, and access level."
    },
    {
      title: "Exercise 4 — Debug a RAG Pipeline",
      task: "Given a wrong answer, determine whether the failure occurred during ingestion, chunking, retrieval, context construction, or generation."
    }
  ],

  interviewQuestions: [
    {
      question: "What are the two major phases of RAG?",
      answer: "Knowledge indexing/preparation and query-time retrieval plus generation."
    },
    {
      question: "What is top-k retrieval?",
      answer: "Selecting the k highest-ranked candidates for a query."
    },
    {
      question: "Why is reranking useful?",
      answer: "It can improve the relevance ordering of an initial candidate set."
    },
    {
      question: "What is context construction?",
      answer: "Selecting, organizing, and formatting retrieved information before sending it to the LLM."
    },
    {
      question: "Why can RAG still produce incorrect answers?",
      answer: "Any stage can fail, including parsing, chunking, retrieval, ranking, context construction, or generation."
    },
    {
      question: "What is metadata used for?",
      answer: "Metadata enables filtering, source tracking, access control, and additional retrieval constraints."
    }
  ],

  commonMistakes: [
    "Treating the vector database as the entire RAG system.",
    "Ignoring indexing quality.",
    "Retrieving too many chunks.",
    "Never reranking candidates when precision is important.",
    "Sending raw retrieved text without clear context boundaries.",
    "Failing to preserve source metadata.",
    "Not validating generated responses.",
    "Debugging only the LLM instead of inspecting retrieval."
  ],

  keyTakeaways: [
    "RAG is a multi-stage pipeline.",
    "Indexing prepares external knowledge for retrieval.",
    "Query-time processing retrieves relevant evidence.",
    "Chunking and embeddings are critical to retrieval quality.",
    "Top-k controls how many candidates are returned.",
    "Reranking can improve relevance after initial retrieval.",
    "Context construction connects retrieval with generation.",
    "Production RAG systems should validate generated outputs.",
    "Every RAG stage can introduce failure."
  ]
};

export default lesson;