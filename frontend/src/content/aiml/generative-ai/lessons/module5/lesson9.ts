const lesson = {
  id: "lesson9",
  moduleId: "module5",
  lessonNumber: 9,

  title: "Metadata Filtering, Namespaces & Multi-Tenancy",

  subtitle:
    "Learn how metadata, namespaces, authorization boundaries, and tenant isolation make vector retrieval controllable and secure.",

  description: `
Semantic similarity alone does not answer every retrieval requirement.

A production query may need to satisfy multiple constraints:

semantic relevance
        +
department
        +
language
        +
date
        +
document type
        +
permissions
        +
tenant

This lesson explains how metadata and logical isolation work with vector
search.
`,

  estimatedTime: "90–120 minutes",
  difficulty: "Advanced",

  learningObjectives: [
    "Understand metadata in vector search.",
    "Understand metadata filters.",
    "Understand namespaces.",
    "Understand tenant isolation.",
    "Understand authorization-aware retrieval.",
    "Compare pre-filtering and post-filtering.",
    "Understand filter selectivity.",
    "Understand metadata schema design.",
    "Understand security risks in vector retrieval.",
    "Design multi-tenant vector search."
  ],

  sections: [
    {
      heading: "1. Why Similarity Alone Is Not Enough",

      content: `
Imagine a company has:

Engineering documents
Finance documents
HR documents
Legal documents

A query:

"How do I configure the production database?"

might retrieve a technically similar document from the wrong department.

Semantic relevance alone is therefore insufficient.

The system may need:

department = "engineering"

in addition to similarity.
`
    },

    {
      heading: "2. What Is Metadata?",

      content: `
Metadata is information describing a vector record.

Example:

{
  "document_id": "doc-101",
  "department": "engineering",
  "language": "en",
  "document_type": "manual",
  "year": 2026,
  "visibility": "internal"
}

Metadata does not necessarily represent the semantic content itself.

Instead, it describes properties of the content.
`
    },

    {
      heading: "3. Metadata Schema",

      classificationTree: `
CHUNK METADATA
│
├── Identity
│   ├── document_id
│   ├── chunk_id
│   └── version
│
├── Source
│   ├── filename
│   ├── page
│   └── URL
│
├── Classification
│   ├── department
│   ├── document_type
│   └── category
│
├── Temporal
│   ├── created_at
│   └── updated_at
│
├── Language
│   └── language
│
└── Security
    ├── tenant_id
    ├── visibility
    └── access_groups
`
    },

    {
      heading: "4. Metadata Filtering",

      content: `
A filtered vector query conceptually looks like:

    similarity(query, vector)

subject to:

    department = "engineering"

The search system therefore considers only records satisfying the
specified constraints.
`
    },

    {
      heading: "5. Filter Operators",

      content: `
Common conceptual filter operations include:

Equality:
    department == "engineering"

Inequality:
    status != "archived"

Range:
    year >= 2025

Membership:
    department IN ["engineering", "research"]

Logical AND:
    department == "engineering"
    AND language == "en"

Logical OR:
    type == "manual"
    OR type == "guide"
`
    },

    {
      heading: "6. Pre-Filtering",

      content: `
Pre-filtering applies metadata constraints before or during candidate
generation.

Conceptually:

Query
 ↓
Metadata filter
 ↓
Candidate vectors
 ↓
Similarity search
 ↓
Top-k

This can reduce the candidate search space.

However, the underlying index must support efficient filtered search.
`
    },

    {
      heading: "7. Post-Filtering",

      content: `
Post-filtering retrieves candidates first and filters them afterward.

Conceptually:

Query
 ↓
Similarity search
 ↓
Top-N candidates
 ↓
Metadata filter
 ↓
Final results

This is simpler in some systems but can cause problems.

Suppose:

top-10 similarity results

are retrieved.

After filtering:

only one result remains.

The system may have discarded relevant filtered candidates that were
ranked below the initial top-10.
`
    },

    {
      heading: "8. Filter Selectivity",

      content: `
Selectivity describes how strongly a filter reduces the candidate set.

Example:

100 million vectors

Filter:
department = engineering

may reduce the candidate set to:

10 million

A highly selective filter can substantially change the search workload.

But extremely selective filters may also require specialized indexing
or careful query planning.
`
    },

    {
      heading: "9. Namespaces",

      content: `
A namespace provides logical separation between groups of vectors.

Example:

tenant-a
tenant-b
tenant-c

A query can be restricted to:

namespace = tenant-b

Namespaces can simplify:

• organization
• isolation
• deletion
• lifecycle management
• tenant-specific retrieval
`
    },

    {
      heading: "10. Multi-Tenancy",

      content: `
A multi-tenant vector application serves multiple independent users,
organizations, or customers.

Conceptually:

                    VECTOR SYSTEM
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
       Tenant A       Tenant B       Tenant C
          │              │              │
       vectors         vectors        vectors

A fundamental requirement is:

Tenant A must not retrieve Tenant B's private information.
`
    },

    {
      heading: "11. Tenant Isolation Strategies",

      comparisonTables: [
        {
          title: "Isolation Strategies",
          columns: ["Strategy", "Idea", "Trade-off"],
          rows: [
            ["Separate database", "Independent data stores", "Strong isolation, higher operational cost"],
            ["Separate collection", "One collection per tenant", "Clear separation, operational scaling concerns"],
            ["Namespace", "Logical partition inside a system", "Convenient, depends on platform guarantees"],
            ["Metadata filter", "tenant_id filter", "Flexible, requires strict enforcement"]
          ]
        }
      ]
    },

    {
      heading: "12. Authorization-Aware Retrieval",

      content: `
Authorization must influence retrieval.

A dangerous design is:

retrieve everything
      ↓
generate answer
      ↓
check permission afterward

By then unauthorized content may already have entered the model context.

A safer conceptual design is:

authenticate
    ↓
determine permissions
    ↓
construct retrieval constraints
    ↓
retrieve only authorized content
    ↓
generate response
`
    },

    {
      heading: "13. Security Boundary",

      content: `
The retrieval filter should be treated as a security boundary.

For example:

user.tenant_id = "tenant-A"

should result in a retrieval constraint such as:

tenant_id = "tenant-A"

The client should not be trusted to freely choose:

tenant_id = "tenant-B"

The server must derive security-sensitive filters from trusted identity
and authorization information.
`
    },

    {
      heading: "14. Metadata and Citations",

      content: `
Metadata also improves the user experience.

Retrieved chunk:

text:
"Connection pooling..."

metadata:
{
  source: "database-manual.pdf",
  page: 17,
  section: "Pooling"
}

The application can display:

Source:
database-manual.pdf
Page:
17
Section:
Pooling

Therefore metadata supports both security and usability.
`
    },

    {
      heading: "15. Temporal Filtering",

      content: `
Some systems need time-aware retrieval.

Example:

Find the current company policy.

A naive semantic search might retrieve:

Policy 2021
Policy 2023
Policy 2026

Metadata can constrain:

effective_date <= today
and
expiration_date > today

This reduces retrieval of obsolete information.
`
    },

    {
      heading: "16. Complete Secure Retrieval Pipeline",

      process: [
        "Authenticate the user.",
        "Determine tenant and permissions.",
        "Convert the question into a query representation.",
        "Construct trusted metadata filters.",
        "Apply tenant and authorization constraints.",
        "Perform semantic or hybrid retrieval.",
        "Validate returned records.",
        "Construct authorized context.",
        "Generate the answer.",
        "Attach source metadata."
      ]
    }
  ],

  codeExamples: [
    {
      title: "Metadata Filtering",
      language: "python",
      code: `records = [
    {
        "id": "1",
        "tenant_id": "A",
        "department": "engineering"
    },
    {
        "id": "2",
        "tenant_id": "B",
        "department": "engineering"
    },
    {
        "id": "3",
        "tenant_id": "A",
        "department": "finance"
    }
]

current_tenant = "A"

filtered = [
    record
    for record in records
    if record["tenant_id"] == current_tenant
]

print(filtered)`,
      explanation:
        "The server-side tenant constraint limits retrieval to the current tenant."
    },

    {
      title: "Multiple Metadata Conditions",
      language: "python",
      code: `records = [
    {
        "id": "1",
        "tenant_id": "A",
        "language": "en",
        "year": 2026
    },
    {
        "id": "2",
        "tenant_id": "A",
        "language": "fr",
        "year": 2026
    },
    {
        "id": "3",
        "tenant_id": "B",
        "language": "en",
        "year": 2025
    }
]

results = [
    record
    for record in records
    if (
        record["tenant_id"] == "A"
        and record["language"] == "en"
        and record["year"] >= 2026
    )
]

print(results)`,
      explanation:
        "Multiple metadata constraints can be combined before retrieval."
    }
  ],

  mathIntuition: [
    {
      concept: "Candidate set",
      intuition:
        "Metadata filters reduce the set of vectors that are eligible for retrieval."
    },
    {
      concept: "Selectivity",
      intuition:
        "A highly selective filter leaves a small candidate population."
    },
    {
      concept: "Recall after filtering",
      intuition:
        "A filter can improve precision and security but can also eliminate relevant results if the filter is incorrect."
    }
  ],

  comparisonTables: [
    {
      title: "Similarity vs Metadata",
      columns: ["Mechanism", "Question Answered"],
      rows: [
        ["Vector similarity", "Which content is semantically related?"],
        ["Metadata filter", "Which records are eligible?"],
        ["Authorization", "Which records is this user allowed to access?"],
        ["Reranking", "Which eligible candidates are most relevant?"]
      ]
    }
  ],

  exercises: [
    "Why is semantic similarity insufficient for private knowledge bases?",
    "What is metadata?",
    "Explain pre-filtering and post-filtering.",
    "What is filter selectivity?",
    "What is a namespace?",
    "Explain multi-tenancy.",
    "Compare separate databases, collections, namespaces, and metadata filtering.",
    "Why should authorization filters be created server-side?",
    "Why should unauthorized documents not enter the LLM context?",
    "Design a secure retrieval query for a multi-tenant application."
  ],

  codingExercises: [
    {
      title: "Metadata Query Engine",
      task: "Implement equality, range, and membership filters over a collection of vector records."
    },
    {
      title: "Tenant-Aware Retrieval",
      task: "Build a retrieval function that derives the tenant filter from a trusted user object."
    },
    {
      title: "Temporal Retrieval",
      task: "Implement filtering that returns only currently active documents."
    }
  ],

  architectureExercises: [
    "Design a multi-tenant RAG architecture.",
    "Design an authorization-aware vector retrieval service.",
    "Design a metadata schema for an enterprise knowledge base.",
    "Design a temporal document retrieval system."
  ],

  commonMistakes: [
    "Trusting tenant IDs supplied directly by the client.",
    "Applying authorization after generation.",
    "Using metadata inconsistently.",
    "Forgetting tenant filters.",
    "Returning unauthorized vectors to the application.",
    "Using post-filtering with too small a candidate set.",
    "Allowing obsolete documents to compete with current documents."
  ],

  interviewQuestions: [
    {
      question: "Why is metadata important in vector search?",
      answer:
        "Metadata enables filtering, authorization, source tracking, lifecycle management, and structured retrieval constraints."
    },
    {
      question: "What is a namespace?",
      answer:
        "A logical partition used to organize or isolate groups of vector records."
    },
    {
      question: "Why should tenant filtering happen before generation?",
      answer:
        "Unauthorized information should never enter the model context in the first place."
    },
    {
      question: "What is filter selectivity?",
      answer:
        "It describes how strongly a filter reduces the eligible candidate set."
    }
  ],

  summary: [
    "Metadata adds structure and constraints to vector retrieval.",
    "Pre-filtering and post-filtering have different trade-offs.",
    "Namespaces provide logical organization and isolation.",
    "Multi-tenant systems require strict tenant boundaries.",
    "Authorization should influence retrieval before content reaches the model.",
    "Metadata also enables better citations, temporal retrieval, and debugging."
  ],

  keyTakeaways: [
    "Vector similarity answers relevance, not authorization.",
    "Metadata defines which records are eligible.",
    "Security filters should be derived from trusted server-side identity.",
    "Multi-tenancy requires explicit isolation design.",
    "Unauthorized information should never reach the generation context."
  ],

  visualReferences: [
    {
      title: "Metadata-Aware Retrieval",
      type: "architecture",
      description: "Query → metadata filters → vector search → authorized candidates."
    },
    {
      title: "Multi-Tenant Vector Database",
      type: "architecture",
      description: "One vector infrastructure with isolated tenant retrieval boundaries."
    },
    {
      title: "Authorization-Aware RAG",
      type: "flowchart",
      description: "Authentication → authorization → filtered retrieval → grounded generation."
    }
  ]
};

export default lesson;