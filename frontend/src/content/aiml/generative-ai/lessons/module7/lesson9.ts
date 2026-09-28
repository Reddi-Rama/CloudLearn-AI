export const lesson9 = {
  id: "lesson9",
  moduleId: "module7",
  title: "Query Transformation & Advanced Retrieval",
  subtitle: "Transform difficult user questions into retrieval-friendly search strategies",
  description:
    "Learn how advanced RAG systems transform user questions before retrieval using rewriting, expansion, decomposition, multi-query retrieval, hypothetical-document techniques, and retrieval routing.",
  difficulty: "Advanced",
  estimatedTime: "25–35 minutes",

  learningObjectives: [
    "Explain why raw user queries are not always ideal for retrieval.",
    "Understand query rewriting and query expansion.",
    "Understand multi-query retrieval.",
    "Understand query decomposition for complex questions.",
    "Understand hypothetical-document-based retrieval.",
    "Design retrieval strategies for ambiguous queries.",
    "Understand query routing.",
    "Identify failure modes introduced by query transformation."
  ],

  sections: [
    {
      title: "Why Query Transformation Is Needed",
      content: `
A user's question is written for communication with a human.

A retrieval system needs a query that effectively matches the representation of stored knowledge.

These goals are not always identical.

Example:

User:
"Can I still attend the exam if I didn't meet the attendance requirement?"

A simple keyword search may focus on:

attendance
exam
requirement

But the actual knowledge may be written as:

"Students who fall below the minimum attendance percentage may be subject to examination restrictions."

The semantic meaning is similar even though the wording is different.

Query transformation attempts to bridge this gap.

User Query
    ↓
Query Transformation
    ↓
Retrieval-Friendly Query
    ↓
Search
      `
    },

    {
      title: "Query Rewriting",
      content: `
Query rewriting converts the original question into a clearer retrieval query.

Original:

"Can I still write the final test if my attendance is low?"

Rewritten:

"attendance shortage examination eligibility policy"

The rewrite should preserve intent.

A dangerous rewrite would change the meaning:

Original:
"Can I attend the exam despite low attendance?"

Incorrect rewrite:
"How can I improve attendance?"

The second query represents a different intent.

Therefore query rewriting must be evaluated for semantic preservation.
      `
    },

    {
      title: "Query Expansion",
      content: `
Query expansion adds related terms to improve recall.

Original:

"attendance shortage"

Expanded:

"attendance shortage attendance requirement examination eligibility shortage condonation"

Expansion can help lexical retrieval discover documents containing terminology that the user did not use.

However, excessive expansion can introduce unrelated concepts.

Therefore:

More terms
≠
Always better retrieval
      `
    },

    {
      title: "Multi-Query Retrieval",
      content: `
One query can be transformed into several retrieval queries.

Example:

Original:
"What happens if my attendance is below the required percentage?"

Generated queries:

1. attendance requirement policy
2. attendance shortage examination eligibility
3. attendance condonation rules
4. attendance shortage consequences

Each query retrieves candidates.

The results are then merged:

Query 1 → A, B, C
Query 2 → B, D, E
Query 3 → F, G
Query 4 → A, H

Merged candidates:

A, B, C, D, E, F, G, H

Duplicates can then be removed and the candidates reranked.
      `
    },

    {
      title: "Query Decomposition",
      content: `
Some questions contain multiple information requirements.

Example:

"Compare the attendance requirement for theory and laboratory courses and explain what happens when a student falls below the requirement."

This can be decomposed into:

Question A:
"What is the attendance requirement for theory courses?"

Question B:
"What is the attendance requirement for laboratory courses?"

Question C:
"What happens when attendance falls below the requirement?"

Each sub-question can be retrieved separately.

The results can then be combined.

This is particularly useful for multi-part questions.
      `
    },

    {
      title: "Parallel Retrieval",
      content: `
After decomposition, retrieval can happen in parallel.

                 Complex Question
                        ↓
                 Query Decomposer
                  /      |      \
                 /       |       \
               Q1        Q2       Q3
               ↓         ↓        ↓
           Retrieve   Retrieve  Retrieve
               ↓         ↓        ↓
               A1        A2       A3
                  \       |       /
                   \      |      /
                    Evidence Pool
                         ↓
                   Context Builder
                         ↓
                         LLM

Parallel retrieval can reduce overall latency compared with processing every sub-question sequentially.
      `
    },

    {
      title: "Hypothetical Document Retrieval",
      content: `
A retrieval system can sometimes work better if it compares the query against a hypothetical answer-like document rather than the short question itself.

Conceptually:

User Question
      ↓
Generate Hypothetical Answer
      ↓
Embed Hypothetical Answer
      ↓
Search Knowledge Base

The generated hypothetical text is not treated as factual evidence.

Its purpose is to create a richer semantic representation for retrieval.

The actual answer must still come from retrieved source documents.
      `
    },

    {
      title: "Query Routing",
      content: `
Not every question should use the same retrieval strategy.

A router can classify the query.

Example:

Question
   ↓
Query Router
   ├── Policy Question → Policy Index
   ├── Technical Question → Technical Index
   ├── Recent Information → Freshness-Aware Search
   ├── Structured Data → SQL / Database Tool
   └── General Question → Semantic Retrieval

This avoids forcing every request through one retrieval pipeline.
      `
    },

    {
      title: "Temporal Query Transformation",
      content: `
Some questions depend on time.

Example:

"What was the attendance policy in 2024?"

The system should preserve the temporal requirement.

Possible query representation:

{
  "query": "attendance policy",
  "year": 2024
}

Retrieval can then apply:

semantic similarity
+
date/version filtering

This prevents a current document from incorrectly answering a historical question.
      `
    },

    {
      title: "Transformation Before Retrieval vs After Retrieval",
      content: `
Transformation can occur at different stages.

Before retrieval:

Query rewriting
Query expansion
Query decomposition

After initial retrieval:

Reranking
Filtering
Deduplication
Context compression

A mature system often combines both.

Query
 ↓
Transform
 ↓
Retrieve
 ↓
Filter
 ↓
Rerank
 ↓
Compress
 ↓
Generate
      `
    },

    {
      title: "Query Transformation Failure Modes",
      content: `
Advanced retrieval strategies introduce their own risks.

1. Intent drift
2. Incorrect query rewriting
3. Excessive query expansion
4. Duplicate retrieval
5. Increased latency
6. Increased cost
7. Retrieval noise
8. Incorrect query decomposition
9. Temporal information loss
10. Router misclassification

Therefore transformation should be evaluated just like retrieval itself.
      `
    }
  ],

  architecture: [
    {
      title: "Multi-Query Retrieval Architecture",
      task: "Design a system that generates multiple retrieval queries, executes them, merges results, removes duplicates, and reranks candidates."
    },
    {
      title: "Query Router",
      task: "Design a router that selects between semantic search, structured data retrieval, and specialized knowledge collections."
    },
    {
      title: "Complex Question Decomposition",
      task: "Design a pipeline that decomposes multi-part questions and combines the resulting evidence."
    }
  ],

  formulas: [
    {
      name: "Query Coverage",
      formula: "Coverage = Retrieved Relevant Concepts / Required Concepts",
      explanation: "A conceptual measure of how many required concepts are represented in retrieved evidence."
    },
    {
      name: "Candidate Pool",
      formula: "C = Union(R1, R2, ..., Rn)",
      explanation: "The candidate set can be constructed from the union of results from multiple retrieval queries."
    },
    {
      name: "Transformation Cost",
      formula: "C_total = C_transform + C_retrieval + C_rerank + C_generation",
      explanation: "Advanced query transformation introduces additional processing cost."
    }
  ],

  codeExamples: [
    {
      title: "Simple Query Expansion",
      language: "python",
      code: `def expand_query(query):
    terms = query.lower().split()

    related = {
        "attendance": [
            "attendance requirement",
            "attendance shortage",
            "attendance policy"
        ],
        "exam": [
            "examination eligibility",
            "exam restriction"
        ]
    }

    expanded = [query]

    for term in terms:
        expanded.extend(related.get(term, []))

    return list(dict.fromkeys(expanded))


queries = expand_query(
    "attendance exam"
)

for query in queries:
    print(query)`
    },

    {
      title: "Merge Multi-Query Results",
      language: "python",
      code: `def merge_results(result_lists):
    merged = []

    for results in result_lists:
        for item in results:
            if item not in merged:
                merged.append(item)

    return merged


results = merge_results([
    ["A", "B", "C"],
    ["B", "D", "E"],
    ["A", "F"]
])

print(results)`
    },

    {
      title: "Query Decomposition Structure",
      language: "typescript",
      code: `type RetrievalQuery = {
  id: string;
  text: string;
  purpose: string;
};

const queries: RetrievalQuery[] = [
  {
    id: "q1",
    text: "theory attendance requirement",
    purpose: "theory policy"
  },
  {
    id: "q2",
    text: "laboratory attendance requirement",
    purpose: "laboratory policy"
  },
  {
    id: "q3",
    text: "attendance shortage consequences",
    purpose: "shortage policy"
  }
];`
    }
  ],

  exercises: [
    "Why is a user query not always ideal for retrieval?",
    "Explain query rewriting.",
    "Explain query expansion.",
    "What is multi-query retrieval?",
    "Why is query decomposition useful?",
    "Explain hypothetical-document retrieval.",
    "Design a query router for a university assistant.",
    "Identify risks introduced by query transformation."
  ],

  codingExercises: [
    {
      title: "Query Rewriter",
      task: "Build a simple rule-based query rewriting system for a small domain."
    },
    {
      title: "Multi-Query Retriever",
      task: "Generate several search queries, retrieve results for each, merge the results, and remove duplicates."
    },
    {
      title: "Question Decomposer",
      task: "Create a simple program that splits multi-part questions into independent retrieval tasks."
    }
  ],

  architectureExercises: [
    "Design a query transformation layer.",
    "Design a multi-query retrieval pipeline.",
    "Design a query router for multiple knowledge collections.",
    "Design a temporal retrieval system.",
    "Design an evaluation dataset specifically for query rewriting."
  ],

  comparisons: [
    {
      topic: "Query Rewriting vs Query Expansion",
      points: [
        "Rewriting replaces or restructures the query.",
        "Expansion adds related terms or concepts.",
        "Rewriting focuses on clarity and intent preservation.",
        "Expansion often focuses on improving recall."
      ]
    },
    {
      topic: "Single Query vs Multi-Query Retrieval",
      points: [
        "Single-query retrieval is simpler and cheaper.",
        "Multi-query retrieval can improve recall.",
        "Multi-query retrieval adds latency and processing cost.",
        "Multiple results require deduplication and ranking."
      ]
    }
  ],

  commonMistakes: [
    "Changing the user's intent during rewriting.",
    "Adding too many unrelated terms.",
    "Assuming more queries always improve retrieval.",
    "Ignoring duplicate results.",
    "Using query decomposition for simple questions.",
    "Ignoring transformation latency.",
    "Treating hypothetical generated text as evidence.",
    "Failing to evaluate query transformations."
  ],

  interviewQuestions: [
    "Why transform a user query before retrieval?",
    "What is query rewriting?",
    "What is query expansion?",
    "What is multi-query retrieval?",
    "What is query decomposition?",
    "What is hypothetical-document retrieval?",
    "What is query routing?",
    "What are the risks of query transformation?",
    "How would you evaluate a query rewriting system?",
    "When should a system avoid query transformation?"
  ],

  summary: `
Advanced RAG systems often transform user questions before retrieval.

Query rewriting improves clarity.
Query expansion improves search coverage.
Multi-query retrieval explores multiple formulations.
Query decomposition separates complex questions.
Query routing chooses specialized retrieval strategies.

These techniques can improve retrieval quality, but they also introduce latency, cost, noise, and transformation errors.

Therefore every transformation should preserve user intent and be evaluated as part of the retrieval system.
  `,

  keyTakeaways: [
    "User language and retrieval language are not always identical.",
    "Query rewriting can improve retrieval alignment.",
    "Query expansion can improve recall.",
    "Multi-query retrieval explores multiple query formulations.",
    "Complex questions can be decomposed into sub-queries.",
    "Query routing selects specialized retrieval strategies.",
    "Hypothetical documents can improve semantic retrieval.",
    "Transformation can introduce intent drift and additional cost.",
    "Generated hypothetical text must not be treated as factual evidence."
  ],

  visualReferences: [
    "Query transformation pipeline",
    "Multi-query retrieval architecture",
    "Question decomposition flowchart",
    "Query routing decision tree",
    "Hypothetical-document retrieval diagram"
  ]
};

export default lesson9;