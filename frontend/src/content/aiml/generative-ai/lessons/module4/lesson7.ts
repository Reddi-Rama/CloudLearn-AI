const lesson = {
  id: "lesson7",
  moduleId: "module4",
  title: "Retrieval Strategies & Search Algorithms",
  subtitle: "Learn how RAG systems find relevant knowledge using semantic, lexical, filtered, multi-query, and advanced retrieval strategies.",

  overview: `
Retrieval is the heart of a RAG system.

The purpose of retrieval is not simply to find documents that contain the
same words as the user's question. The objective is to identify evidence
that is useful for answering the question.

A modern retrieval pipeline can use several strategies:

User Query
    ↓
Query Understanding
    ↓
Query Transformation
    ↓
Candidate Retrieval
    ↓
Filtering
    ↓
Reranking
    ↓
Context Selection
    ↓
Generation

Common retrieval strategies include:

• Keyword retrieval
• Sparse retrieval
• Dense vector retrieval
• Metadata-filtered retrieval
• Hybrid retrieval
• Multi-query retrieval
• Query expansion
• Query rewriting
• Parent-document retrieval
• Multi-hop retrieval
• Temporal retrieval
• Hierarchical retrieval

The best strategy depends on the data, query type, domain, latency requirements,
and quality requirements of the application.
`,

  learningObjectives: [
    "Understand the purpose of retrieval in RAG.",
    "Understand lexical and semantic retrieval.",
    "Understand sparse retrieval.",
    "Understand dense retrieval.",
    "Understand BM25 conceptually.",
    "Understand top-k retrieval.",
    "Understand query expansion.",
    "Understand query rewriting.",
    "Understand multi-query retrieval.",
    "Understand parent-document retrieval.",
    "Understand multi-hop retrieval.",
    "Understand temporal and metadata-aware retrieval.",
    "Understand retrieval evaluation."
  ],

  prerequisites: [
    "RAG architecture",
    "Embeddings",
    "Vector databases",
    "Basic information retrieval concepts"
  ],

  keyTerms: [
    {
      term: "Retrieval",
      definition: "Selecting potentially relevant information from a larger knowledge collection."
    },
    {
      term: "Lexical Retrieval",
      definition: "Retrieval based primarily on matching terms or words."
    },
    {
      term: "Dense Retrieval",
      definition: "Retrieval using dense vector representations and semantic similarity."
    },
    {
      term: "Sparse Retrieval",
      definition: "Retrieval using sparse term-based representations."
    },
    {
      term: "BM25",
      definition: "A widely used lexical ranking function based on term frequency, document frequency, and document length normalization."
    },
    {
      term: "Query Expansion",
      definition: "Adding related terms or concepts to a query to improve retrieval."
    },
    {
      term: "Query Rewriting",
      definition: "Transforming a user's query into a retrieval-friendly representation."
    },
    {
      term: "Multi-Query Retrieval",
      definition: "Generating multiple alternative queries and combining their retrieved results."
    },
    {
      term: "Multi-Hop Retrieval",
      definition: "Retrieving information through multiple dependent retrieval steps."
    }
  ],

  sections: [
    {
      title: "1. What Is Retrieval?",
      explanation: `
Retrieval is the process of selecting potentially useful information from
a knowledge collection.

Suppose the knowledge base contains 1,000,000 chunks.

A user asks:

"What is the minimum attendance requirement for the B.Tech IT program?"

The system should not send one million chunks to the model.

Instead:

1. Understand the query.
2. Search the knowledge base.
3. Rank candidate chunks.
4. Return the strongest candidates.
5. Build context from those candidates.
`
    },

    {
      title: "2. Retrieval Is Not Generation",
      explanation: `
Retrieval and generation have different responsibilities.

Retriever:
"Which information is relevant?"

Generator:
"How should I explain the retrieved information?"

Conceptually:

Retriever
    ↓
Evidence

Generator
    ↓
Answer

Separating these responsibilities makes RAG systems easier to debug.
`
    },

    {
      title: "3. Lexical Retrieval",
      explanation: `
Lexical retrieval focuses on words and terms.

Query:

"minimum attendance percentage"

Documents containing:

"minimum attendance requirement: 75%"

may receive a high score because important terms overlap.

Lexical retrieval is particularly useful when exact terminology matters.
`
    },

    {
      title: "4. BM25",
      explanation: `
BM25 is a popular lexical ranking method.

It considers factors such as:

• Term frequency
• Inverse document frequency
• Document length

Conceptually:

A term appearing frequently in one document can increase relevance,
but repeated occurrences are not allowed to increase the score without bound.

Terms that are rare across the collection can contribute more information
than extremely common terms.
`
    },

    {
      title: "5. Dense Retrieval",
      explanation: `
Dense retrieval represents queries and documents as vectors.

Query
  ↓
Embedding
  ↓
Query Vector

Document
  ↓
Embedding
  ↓
Document Vector

Then:

similarity(query_vector, document_vector)

Dense retrieval can identify semantic relationships even when exact words differ.
`
    },

    {
      title: "6. Sparse vs Dense",
      explanation: `
Sparse retrieval is often strong for:

• Exact names
• Product IDs
• Error codes
• Rare terminology
• Exact phrases

Dense retrieval is often strong for:

• Semantic questions
• Paraphrases
• Conceptual relationships
• Natural language queries

This is one reason hybrid retrieval is useful.
`
    },

    {
      title: "7. Top-k Retrieval",
      explanation: `
A retrieval system normally returns only the highest-ranked candidates.

Example:

k = 5

Results:

1. Score 0.94
2. Score 0.91
3. Score 0.89
4. Score 0.84
5. Score 0.81

The value of k is an engineering parameter.

Too small:
Relevant evidence may be missed.

Too large:
Irrelevant context may enter the prompt.
`
    },

    {
      title: "8. Query Expansion",
      explanation: `
A query can be expanded with related terminology.

Original:

"reset password"

Expanded:

"reset password
forgot password
change account password
recover login credentials"

This can improve lexical retrieval coverage.

However, excessive expansion can introduce unrelated concepts.
`
    },

    {
      title: "9. Query Rewriting",
      explanation: `
Users often write conversational questions.

Example:

"What about the second one?"

A retrieval system may need previous conversation context to rewrite it into:

"What are the prerequisites for the second course in the AI specialization?"

The rewritten query can then be sent to the retriever.
`
    },

    {
      title: "10. Multi-Query Retrieval",
      explanation: `
Instead of one query, the system generates several retrieval perspectives.

Original:

"How does RAG reduce hallucination?"

Possible queries:

"How does retrieval ground LLM answers?"

"How does external context reduce unsupported generation?"

"What is the role of evidence in RAG?"

The results can then be combined and deduplicated.
`
    },

    {
      title: "11. Parent-Document Retrieval",
      explanation: `
The retriever may index small child chunks but return a larger parent section.

Example:

Parent:
Chapter 4 — Attendance Policy

Child:
"Students must maintain at least 75% attendance."

The child provides precise retrieval.

The parent provides additional context.

This separates:

retrieval granularity

from

generation context granularity.
`
    },

    {
      title: "12. Multi-Hop Retrieval",
      explanation: `
Some questions require more than one retrieval step.

Example:

"Who is the author of the paper that introduced the architecture used by Company X?"

Possible workflow:

Step 1:
Retrieve information about Company X.

Step 2:
Identify the relevant architecture.

Step 3:
Retrieve the original paper.

Step 4:
Retrieve the authors.

This is multi-hop retrieval.
`
    },

    {
      title: "13. Temporal Retrieval",
      explanation: `
Some questions depend on time.

Example:

"What was the attendance policy in 2024?"

The system must distinguish:

2024 policy
2025 policy
2026 policy

Metadata such as:

effective_date
expiration_date
version

can become part of retrieval.
`
    },

    {
      title: "14. Hierarchical Retrieval",
      explanation: `
Large knowledge bases can be organized hierarchically.

Example:

University
  ↓
Department
  ↓
Course
  ↓
Module
  ↓
Lesson
  ↓
Chunk

A retrieval system can first identify the relevant high-level area
and then search smaller units.
`
    },

    {
      title: "15. Retrieval With Access Control",
      explanation: `
Retrieval should respect authorization.

Example:

User:
student-A

Accessible:
student handbook

Not accessible:
faculty confidential document

The retrieval system must enforce the boundary before unauthorized
content becomes part of the model context.
`
    },

    {
      title: "16. Retrieval Evaluation",
      explanation: `
Retrieval should be evaluated independently from generation.

Important metrics include:

Recall@k
Precision@k
MRR
NDCG

These metrics answer questions such as:

Did the system retrieve the relevant document?

Was the relevant document near the top?

How many retrieved results were actually useful?
`
    },

    {
      title: "17. Retrieval Failure Modes",
      explanation: `
Common failures:

• Query ambiguity
• Poor embeddings
• Missing metadata
• Bad chunking
• Wrong top-k
• Vocabulary mismatch
• Stale documents
• Duplicate documents
• Incorrect filters
• Relevant evidence ranked too low

A RAG engineer should inspect retrieval results before blaming the LLM.
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "Precision@k",
      formula: `
Precision@k = relevant_results_in_top_k / k
`,
      explanation: "Measures how much of the retrieved top-k set is relevant."
    },
    {
      concept: "Recall@k",
      formula: `
Recall@k = relevant_results_retrieved_in_top_k / total_relevant_results
`,
      explanation: "Measures how much of the relevant evidence was retrieved."
    },
    {
      concept: "MRR",
      formula: `
MRR = 1 / rank_of_first_relevant_result
`,
      explanation: "Mean Reciprocal Rank rewards systems that place the first relevant result near the top."
    },
    {
      concept: "F1",
      formula: `
F1 = 2 × Precision × Recall / (Precision + Recall)
`,
      explanation: "Provides a balance between precision and recall."
    }
  ],

  codeExamples: [
    {
      title: "Simple Keyword Retrieval",
      language: "python",
      code: `
def keyword_score(query, document):
    query_terms = set(query.lower().split())
    document_terms = set(document.lower().split())

    overlap = query_terms & document_terms

    return len(overlap)


documents = [
    "Students must maintain attendance.",
    "The library closes at eight.",
    "Attendance requirements are defined by policy."
]

query = "attendance requirements"

ranked = sorted(
    documents,
    key=lambda doc: keyword_score(query, doc),
    reverse=True
)

for doc in ranked:
    print(doc)
`
    },

    {
      title: "Top-k Retrieval",
      language: "python",
      code: `
def top_k(results, k):
    return sorted(
        results,
        key=lambda x: x["score"],
        reverse=True
    )[:k]


results = [
    {"id": "A", "score": 0.92},
    {"id": "B", "score": 0.81},
    {"id": "C", "score": 0.97},
    {"id": "D", "score": 0.76}
]

print(top_k(results, 2))
`
    },

    {
      title: "Multi-Query Retrieval Concept",
      language: "python",
      code: `
def multi_query_retrieval(
    queries,
    retriever
):
    results = {}

    for query in queries:
        for item in retriever(query):
            results[item["id"]] = item

    return list(results.values())


queries = [
    "reset password",
    "forgot account password",
    "recover login credentials"
]

# retrieved = multi_query_retrieval(
#     queries,
#     retriever
# )
`
    },

    {
      title: "Simple Recall@k",
      language: "python",
      code: `
def recall_at_k(retrieved, relevant, k):
    top = retrieved[:k]

    retrieved_relevant = len(
        set(top) & set(relevant)
    )

    if not relevant:
        return 0

    return retrieved_relevant / len(relevant)


retrieved = ["A", "C", "D", "B"]
relevant = ["B", "C"]

print(recall_at_k(
    retrieved,
    relevant,
    3
))
`
    }
  ],

  comparisonTables: [
    {
      title: "Retrieval Strategies",
      columns: [
        "Strategy",
        "Strength",
        "Typical Use"
      ],
      rows: [
        ["Keyword", "Exact terminology", "IDs, names, error codes"],
        ["BM25", "Strong lexical ranking", "Traditional document search"],
        ["Dense", "Semantic similarity", "Natural-language questions"],
        ["Hybrid", "Combines lexical and semantic signals", "General-purpose RAG"],
        ["Multi-query", "Multiple perspectives", "Ambiguous or broad queries"],
        ["Multi-hop", "Dependent evidence chains", "Complex research questions"],
        ["Hierarchical", "Search-space reduction", "Large structured collections"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "Retrieval Pipeline",
      type: "flowchart",
      description: "Query → transformation → retrieval → filtering → reranking → context."
    },
    {
      title: "Dense vs Sparse Retrieval",
      type: "comparison",
      description: "Compare semantic vector search with lexical term matching."
    },
    {
      title: "Multi-Query Retrieval",
      type: "architecture",
      description: "One user question produces multiple retrieval queries whose results are merged."
    },
    {
      title: "Multi-Hop Retrieval",
      type: "flowchart",
      description: "Show sequential retrieval steps where one retrieved result enables the next query."
    },
    {
      title: "Hierarchical Retrieval",
      type: "tree",
      description: "Knowledge base → category → document → section → chunk."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Keyword vs Semantic",
      task: "Create ten questions where keyword retrieval and semantic retrieval behave differently."
    },
    {
      title: "Exercise 2 — Top-k Experiment",
      task: "Compare k values of 3, 5, and 10 and measure retrieval precision and recall."
    },
    {
      title: "Exercise 3 — Query Rewriting",
      task: "Take ten conversational questions and rewrite them into retrieval-friendly standalone queries."
    },
    {
      title: "Exercise 4 — Multi-Query Retrieval",
      task: "Generate three alternative queries for five ambiguous questions and compare the retrieved evidence."
    },
    {
      title: "Exercise 5 — Multi-Hop Design",
      task: "Design a two-step retrieval workflow for a question requiring information from two different documents."
    }
  ],

  interviewQuestions: [
    {
      question: "What is the difference between dense and sparse retrieval?",
      answer: "Dense retrieval uses vector representations for semantic similarity, while sparse retrieval relies primarily on term-level signals."
    },
    {
      question: "What is BM25?",
      answer: "A lexical ranking algorithm based on term frequency, inverse document frequency, and document-length normalization."
    },
    {
      question: "What is query rewriting?",
      answer: "Transforming a user's query into a clearer representation suitable for retrieval."
    },
    {
      question: "What is multi-query retrieval?",
      answer: "Generating multiple alternative queries and combining their retrieval results."
    },
    {
      question: "What is multi-hop retrieval?",
      answer: "Retrieving information through multiple dependent steps to answer a complex question."
    },
    {
      question: "Why evaluate retrieval separately?",
      answer: "Because generation quality cannot compensate for missing evidence if the relevant information was never retrieved."
    }
  ],

  commonMistakes: [
    "Using only one retrieval strategy for every query.",
    "Returning too many chunks.",
    "Ignoring exact keywords and identifiers.",
    "Ignoring semantic similarity.",
    "Failing to rewrite conversational queries.",
    "Ignoring authorization during retrieval.",
    "Evaluating only the final LLM answer.",
    "Never inspecting the actual retrieved chunks."
  ],

  keyTakeaways: [
    "Retrieval identifies evidence before generation.",
    "Dense and sparse retrieval solve different problems.",
    "Hybrid strategies can combine their strengths.",
    "Query rewriting can improve retrieval for conversational questions.",
    "Multi-query retrieval provides multiple search perspectives.",
    "Multi-hop retrieval handles questions requiring several evidence steps.",
    "Temporal and hierarchical retrieval add structure to search.",
    "Retrieval quality should be evaluated independently from generation."
  ]
};

export default lesson;