export const lesson6 = {
  id: "lesson6",
  moduleId: "module7",
  title: "RAG Pipeline",
  subtitle: "Connect ingestion, retrieval, context construction, generation, and answer handling",
  description:
    "Learn how the individual components of Retrieval-Augmented Generation work together as a complete pipeline, from a user query and knowledge retrieval to grounded answer generation and response validation.",
  difficulty: "Intermediate",
  estimatedTime: "25–30 minutes",

  learningObjectives: [
    "Explain the complete RAG pipeline from query to final answer.",
    "Understand the relationship between ingestion, indexing, retrieval, context construction, and generation.",
    "Distinguish offline ingestion from online query-time processing.",
    "Understand query embedding and similarity-based retrieval.",
    "Construct useful context from retrieved chunks.",
    "Understand how retrieved evidence is passed to a language model.",
    "Design answer handling and validation steps.",
    "Identify common RAG pipeline failure modes."
  ],

  sections: [
    {
      title: "What Is a RAG Pipeline?",
      content: `
Retrieval-Augmented Generation is best understood as a SYSTEM rather than a single model.

A basic RAG system combines:

User Query
    ↓
Query Processing
    ↓
Retrieval
    ↓
Relevant Documents / Chunks
    ↓
Context Construction
    ↓
Language Model
    ↓
Generated Answer
    ↓
Validation / Citations / Response Handling

The retrieval stage supplies external information to the language model at inference time.

This allows an application to answer questions using a controlled knowledge collection rather than relying only on information encoded in model parameters.

The key idea is:

Generation + Retrieved Evidence = Grounded Generation
      `
    },

    {
      title: "The Two Major Phases of RAG",
      content: `
A production RAG system normally has two broad phases.

1. Offline Knowledge Preparation

Documents
   ↓
Parsing
   ↓
Cleaning
   ↓
Chunking
   ↓
Metadata Extraction
   ↓
Embedding Generation
   ↓
Vector Store / Search Index

This phase prepares knowledge for fast retrieval.

2. Online Question Answering

User Question
   ↓
Query Processing
   ↓
Query Embedding
   ↓
Similarity Search
   ↓
Filtering / Ranking
   ↓
Context Construction
   ↓
LLM Generation
   ↓
Validation
   ↓
Answer

Keeping these phases conceptually separate is important.

The offline phase prepares knowledge.

The online phase uses that knowledge to answer a query.
      `
    },

    {
      title: "Step 1 — User Query",
      content: `
The pipeline begins with a user question.

Example:

"What is the attendance requirement for laboratory courses?"

The query may be:

- short
- conversational
- ambiguous
- incomplete
- misspelled
- highly specific
- multi-part

A strong RAG system does not always send the raw query directly to the vector database.

The application may first perform:

- normalization
- query rewriting
- spelling correction
- intent detection
- query expansion
- decomposition
- metadata extraction

Example:

Raw query:
"What is the attendance requirement for labs?"

Possible structured interpretation:

{
  "topic": "attendance",
  "courseType": "laboratory",
  "intent": "policy_lookup"
}

Query processing should improve retrieval without changing the user's intended meaning.
      `
    },

    {
      title: "Step 2 — Query Representation",
      content: `
Semantic retrieval commonly converts the query into an embedding.

Conceptually:

q = Embedding(userQuery)

The result is a vector:

q ∈ R^d

where d is the embedding dimension.

For example:

User Query
    ↓
Embedding Model
    ↓
[0.12, -0.31, 0.44, ...]
    ↓
Vector Search

The query embedding must be compatible with the document embeddings used by the retrieval system.

Using incompatible embedding spaces can produce poor retrieval results.
      `
    },

    {
      title: "Step 3 — Retrieval",
      content: `
The retrieval system searches the knowledge collection for chunks that are relevant to the query.

A simplified semantic retrieval process is:

Query Vector
    ↓
Compare Against Stored Vectors
    ↓
Calculate Similarity
    ↓
Rank Results
    ↓
Return Top-k

For cosine similarity:

cos(q, d) = (q · d) / (||q|| ||d||)

where:

q = query vector
d = document vector

If k = 5, the system may initially return the five highest-ranked candidates.

However:

Top-k retrieval does NOT guarantee that every returned chunk is useful.

A later reranking or filtering stage may improve the final evidence set.
      `
    },

    {
      title: "Step 4 — Metadata Filtering",
      content: `
Similarity alone is often insufficient.

Documents can contain metadata such as:

- course
- department
- document type
- author
- date
- version
- access level
- language
- category

Example:

{
  "course": "DBMS",
  "documentType": "syllabus",
  "semester": "5",
  "access": "student"
}

A query may therefore be processed as:

Semantic Query
+
Metadata Constraints
=
Filtered Retrieval

This is particularly important in multi-tenant and permission-sensitive applications.

A user should not receive retrieved chunks simply because they are semantically similar if the user is not authorized to access them.
      `
    },

    {
      title: "Step 5 — Candidate Ranking",
      content: `
Retrieval may produce a larger candidate set.

Example:

Vector search → 20 candidates

The system can then:

1. Filter candidates.
2. Remove duplicates.
3. Apply metadata constraints.
4. Rerank candidates.
5. Select the final context.

A common architecture is:

Query
 ↓
Vector Search
 ↓
Top 20
 ↓
Metadata Filtering
 ↓
Reranking
 ↓
Top 5
 ↓
Context Construction

This separates candidate generation from final relevance selection.
      `
    },

    {
      title: "Step 6 — Context Construction",
      content: `
The language model cannot automatically access every document returned by the database.

The application must construct a context package.

Example:

SOURCE 1
Course Attendance Policy
"Students must maintain the required attendance percentage..."

SOURCE 2
Laboratory Regulations
"Laboratory attendance is calculated separately..."

SOURCE 3
Academic Handbook
"Attendance shortages may require..."

These pieces are placed into the model input.

The goal is not:

"Send everything."

The goal is:

"Send the most useful evidence within the available context budget."
      `
    },

    {
      title: "Context Ordering",
      content: `
The ordering of retrieved chunks can affect how useful the context is.

A simple structure is:

SYSTEM INSTRUCTION
        ↓
USER QUESTION
        ↓
RETRIEVED EVIDENCE
        ↓
ANSWERING INSTRUCTION

For example:

You are an academic assistant.

Answer the question using only the supplied evidence.

Question:
What is the laboratory attendance requirement?

Evidence:
[Source 1]
...

[Source 2]
...

If the evidence does not contain the answer, state that the available material is insufficient.

This creates a clear boundary between:

Instruction
Question
Evidence
Expected behavior
      `
    },

    {
      title: "Step 7 — Grounded Generation",
      content: `
The retrieved information is passed to the language model as evidence.

Conceptually:

Prompt =
Instruction
+
Question
+
Retrieved Context

The model then generates:

Answer = LLM(Prompt)

A grounded generation instruction might say:

"Answer using only the supplied context. If the context does not support the answer, say that the available information is insufficient."

This does not mathematically guarantee correctness.

It establishes an application-level constraint that the answer should be supported by retrieved evidence.
      `
    },

    {
      title: "Step 8 — Answer Handling",
      content: `
The generated response should not necessarily be displayed immediately.

A production application may perform:

Generation
   ↓
Output Parsing
   ↓
Evidence Validation
   ↓
Citation Attachment
   ↓
Safety Checks
   ↓
Formatting
   ↓
Final Response

Possible checks include:

- Is the answer empty?
- Does it contain unsupported claims?
- Are citations available?
- Are cited sources actually relevant?
- Does the response satisfy the requested format?
- Did the model follow the instruction?
- Should the system abstain?
      `
    },

    {
      title: "RAG Context Budget",
      content: `
A language model has a finite context capacity.

Suppose:

Context budget = 4,000 tokens

Retrieved chunks require:

Chunk 1 = 800 tokens
Chunk 2 = 900 tokens
Chunk 3 = 700 tokens
Chunk 4 = 1,100 tokens

Total:

800 + 900 + 700 + 1100 = 3500 tokens

The remaining space must accommodate:

- system instructions
- user question
- formatting
- generated answer budget

Therefore retrieval must be context-aware.

More retrieved text is not automatically better.

A large amount of irrelevant context can make the useful evidence harder to identify.
      `
    },

    {
      title: "Complete RAG Architecture",
      content: `
                    KNOWLEDGE PREPARATION

Documents
    ↓
Parser
    ↓
Cleaner
    ↓
Chunker
    ↓
Embedding Model
    ↓
Vector Store
    │
    │
    │
    ▼
                QUERY TIME

User Question
    ↓
Query Processor
    ↓
Query Embedding
    ↓
Retriever
    ↓
Metadata Filter
    ↓
Reranker
    ↓
Context Builder
    ↓
Prompt Builder
    ↓
LLM
    ↓
Output Validator
    ↓
Citation / Provenance
    ↓
Final Answer
      `
    },

    {
      title: "Common RAG Pipeline Failure Modes",
      content: `
Failure can happen at almost every stage.

1. Poor document parsing
2. Bad chunk boundaries
3. Weak embeddings
4. Wrong embedding model
5. Poor query representation
6. Irrelevant retrieval
7. Missing metadata filters
8. Duplicate chunks
9. Incorrect ranking
10. Excessive context
11. Missing evidence
12. Model ignores evidence
13. Unsupported generation
14. Broken citations
15. Output validation failure

A major RAG debugging principle is:

Do not immediately blame the language model.

First determine WHICH stage failed.
      `
    }
  ],

  architecture: [
    {
      title: "End-to-End RAG Pipeline",
      task: "Design the complete flow from document ingestion to grounded answer generation.",
      requirements: [
        "Show offline ingestion.",
        "Show chunking and embeddings.",
        "Show vector storage.",
        "Show query-time retrieval.",
        "Show context construction.",
        "Show generation and validation."
      ]
    },
    {
      title: "RAG Failure Localization",
      task: "Create a diagnostic flowchart that identifies whether a poor answer came from retrieval, context construction, generation, or validation."
    }
  ],

  formulas: [
    {
      name: "Cosine Similarity",
      formula: "cos(q,d) = (q · d) / (||q|| ||d||)",
      explanation: "Measures angular similarity between query and document vectors."
    },
    {
      name: "Top-k Retrieval",
      formula: "R_k(q) = top-k documents ranked by similarity to q",
      explanation: "Returns the k highest-ranked retrieval candidates."
    },
    {
      name: "Context Budget",
      formula: "B_context = B_total - B_instructions - B_query - B_output",
      explanation: "Approximate available token budget for retrieved evidence."
    }
  ],

  codeExamples: [
    {
      title: "Simple Cosine Similarity",
      language: "python",
      code: `import math

def cosine_similarity(a, b):
    dot = sum(x * y for x, y in zip(a, b))
    norm_a = math.sqrt(sum(x * x for x in a))
    norm_b = math.sqrt(sum(y * y for y in b))

    if norm_a == 0 or norm_b == 0:
        return 0.0

    return dot / (norm_a * norm_b)


query = [0.8, 0.2, 0.1]
document = [0.7, 0.3, 0.2]

print(cosine_similarity(query, document))`
    },

    {
      title: "Simplified RAG Pipeline",
      language: "python",
      code: `def rag_pipeline(question, retrieve, generate):
    candidates = retrieve(question)

    context = "\\n\\n".join(
        item["text"]
        for item in candidates
    )

    prompt = f"""
Answer the question using only the supplied context.

Context:
{context}

Question:
{question}
"""

    answer = generate(prompt)

    return {
        "question": question,
        "sources": candidates,
        "answer": answer
    }`
    }
  ],

  exercises: [
    "Explain every stage of a complete RAG pipeline.",
    "Why are offline ingestion and online retrieval separated?",
    "Why is metadata filtering important?",
    "Why should retrieval and generation be evaluated separately?",
    "Explain why retrieving more chunks does not always improve the answer.",
    "Design a RAG pipeline for a university syllabus assistant.",
    "Identify three possible failure points when the correct document exists but the answer is incorrect."
  ],

  codingExercises: [
    {
      title: "Build a Toy RAG Retriever",
      task: "Create a small Python program that calculates similarity between a query vector and several document vectors, ranks them, and returns the top-k results."
    },
    {
      title: "Build a Context Constructor",
      task: "Write a function that receives ranked chunks and constructs a context while respecting a maximum token or character budget."
    },
    {
      title: "Add Source Tracking",
      task: "Modify a simple RAG pipeline so every retrieved chunk retains its document ID and source metadata."
    }
  ],

  architectureExercises: [
    "Design a RAG architecture for a university policy assistant.",
    "Design a RAG architecture with metadata filtering by department.",
    "Design a RAG system that refuses to answer when no relevant evidence is retrieved.",
    "Design a diagnostic flow for separating retrieval failures from generation failures."
  ],

  comparisons: [
    {
      topic: "RAG vs Direct LLM Generation",
      points: [
        "Direct generation relies primarily on model knowledge and instructions.",
        "RAG adds external retrieved evidence.",
        "RAG can use controlled and updateable knowledge collections.",
        "RAG introduces additional retrieval and indexing complexity."
      ]
    },
    {
      topic: "Retrieval vs Generation",
      points: [
        "Retrieval selects evidence.",
        "Generation converts evidence and instructions into natural-language output.",
        "Retrieval quality can be measured independently.",
        "Generation quality can remain poor even when retrieval is correct."
      ]
    }
  ],

  commonMistakes: [
    "Treating RAG as simply sending documents to an LLM.",
    "Ignoring metadata and authorization.",
    "Retrieving too many irrelevant chunks.",
    "Failing to preserve source identifiers.",
    "Using incompatible embedding models.",
    "Skipping output validation.",
    "Assuming retrieved evidence automatically guarantees factuality.",
    "Debugging only the language model instead of the entire pipeline."
  ],

  interviewQuestions: [
    "What is the complete RAG pipeline?",
    "What is the difference between offline ingestion and online retrieval?",
    "Why do we generate an embedding for the user query?",
    "What is top-k retrieval?",
    "Why is reranking useful?",
    "What is context construction?",
    "Why can excessive context reduce answer quality?",
    "How would you debug a RAG system that retrieves the wrong documents?",
    "How would you distinguish a retrieval failure from a generation failure?",
    "Why should source metadata be preserved throughout the pipeline?"
  ],

  summary: `
A RAG pipeline connects knowledge preparation, retrieval, context construction, language-model generation, and answer handling.

The central flow is:

Question
→ Query Processing
→ Retrieval
→ Filtering / Ranking
→ Context Construction
→ Generation
→ Validation
→ Answer

A reliable RAG system treats retrieval and generation as separate engineering stages and evaluates each stage independently.
  `,

  keyTakeaways: [
    "RAG is a complete system, not a single model.",
    "Knowledge preparation happens before user queries arrive.",
    "Query-time retrieval selects relevant evidence.",
    "Metadata can constrain retrieval.",
    "Context construction controls what the model actually sees.",
    "Grounded generation should use retrieved evidence.",
    "Answer validation and provenance are important application stages.",
    "RAG failures can originate at many different pipeline stages."
  ],

  visualReferences: [
    "RAG end-to-end architecture diagram",
    "Offline ingestion versus online query-time pipeline",
    "Retrieval and reranking flowchart",
    "Context construction diagram",
    "Complete RAG failure-localization tree"
  ]
};

export default lesson6;