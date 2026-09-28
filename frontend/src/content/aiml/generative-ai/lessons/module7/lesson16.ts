const lesson16 = {
  id: "lesson16",
  moduleId: "module7",
  title: "End-to-End RAG Capstone & Production Architecture",
  subtitle:
    "Design and reason through a complete knowledge-based AI assistant from ingestion to production",

  description:
    "This final lesson integrates the complete RAG engineering journey into one end-to-end system. You will design a Knowledge-Based AI Assistant that processes documents, creates embeddings, performs retrieval, constructs grounded context, generates answers, validates responses, evaluates quality, and operates securely in production.",

  difficulty: "Advanced",
  estimatedTime: "5 hours",

  learningObjectives: [
    "Design a complete end-to-end RAG application.",
    "Connect ingestion, indexing, retrieval, generation, and validation.",
    "Design a grounded knowledge assistant.",
    "Apply security and authorization.",
    "Design evaluation and observability.",
    "Estimate latency and cost.",
    "Identify major RAG failure modes.",
    "Prepare a production-oriented RAG architecture."
  ],

  sections: [
    {
      title: "The Knowledge-Based AI Assistant",
      content: `
The module capstone is a Knowledge-Based AI Assistant.

The assistant should answer questions using a controlled knowledge collection.

The system should:

- ingest documents
- process and normalize content
- create chunks
- generate embeddings
- store searchable representations
- retrieve relevant evidence
- construct context
- generate grounded answers
- provide provenance or citations
- validate responses
- measure retrieval and answer quality
- record system metrics
`
    },

    {
      title: "Capstone Problem Statement",
      content: `
Design an assistant for a controlled knowledge domain.

Example:

A university uploads:

- academic regulations
- examination rules
- department policies
- student handbooks
- admission documents
- course regulations

Students can ask questions.

The assistant should answer using the indexed documents rather than relying only on model memory.
`
    },

    {
      title: "Complete Knowledge Lifecycle",
      content: `
The complete lifecycle is:

Documents
↓
Parsing
↓
Cleaning
↓
Metadata Extraction
↓
Chunking
↓
Embedding Generation
↓
Vector / Hybrid Index
↓
Query
↓
Query Transformation
↓
Retrieval
↓
Filtering
↓
Reranking
↓
Context Construction
↓
Grounded Generation
↓
Validation
↓
Response + Citations
↓
Evaluation
↓
Monitoring
`
    },

    {
      title: "System Requirements",
      content: `
Functional requirements:

1. Upload documents.
2. Process documents.
3. Search knowledge.
4. Ask natural-language questions.
5. Generate grounded responses.
6. Show citations.
7. Handle insufficient evidence.
8. Track document versions.
9. Support metadata filtering.
10. Evaluate retrieval and generation.

Non-functional requirements:

- security
- reliability
- observability
- reasonable latency
- predictable cost
- maintainability
- scalability
`
    },

    {
      title: "Recommended Architecture",
      content: `
Frontend
↓
API Gateway
↓
Authentication
↓
Question Service
↓
RAG Orchestrator
 ├── Query Transformation
 ├── Metadata Filtering
 ├── Dense Retrieval
 ├── Lexical Retrieval
 ├── Reranking
 └── Context Builder
↓
LLM Service
↓
Grounding Validator
↓
Response Formatter
↓
Frontend

Knowledge pipeline:

Upload
↓
Document Processor
↓
Chunker
↓
Embedding Service
↓
Vector Database
↓
Metadata Store
`
    },

    {
      title: "Data Model",
      content: `
A useful document representation:

Document
- id
- title
- source
- tenant
- version
- effective_from
- effective_until
- created_at
- updated_at

Chunk
- id
- document_id
- parent_id
- content
- embedding
- metadata
- chunk_index
`
    },

    {
      title: "Query Lifecycle",
      content: `
User asks:

"What are the attendance requirements?"

The system:

1. authenticates the user
2. identifies tenant and permissions
3. validates query
4. transforms query if needed
5. applies metadata filters
6. retrieves candidates
7. reranks candidates
8. builds context
9. checks evidence sufficiency
10. generates answer
11. validates grounding
12. attaches citations
13. records metrics
14. returns response
`
    },

    {
      title: "Grounded Answer Policy",
      content: `
The assistant should follow a simple principle:

No sufficient evidence
→
Do not invent an answer.

Possible response states:

GROUNDED
The retrieved evidence supports the answer.

PARTIALLY_GROUNDED
Only part of the requested information is supported.

INSUFFICIENT_EVIDENCE
The knowledge base does not contain enough evidence.

CONFLICTING_EVIDENCE
Reliable sources disagree.

CLARIFICATION_REQUIRED
The question is ambiguous.
`
    },

    {
      title: "Evaluation Strategy",
      content: `
Create a golden dataset containing:

- question
- expected evidence
- expected answer characteristics
- relevant document
- relevant chunk
- acceptable answer variations

Evaluate:

Retrieval
- Recall@k
- Precision@k
- MRR

Generation
- correctness
- relevance
- completeness

Grounding
- evidence coverage
- unsupported claim rate

System
- latency
- cost
- failure rate
`
    },

    {
      title: "Failure Analysis",
      content: `
When an answer is wrong, do not immediately blame the model.

Trace:

Question
↓
Query Transformation
↓
Retrieval
↓
Ranking
↓
Context
↓
Generation
↓
Validation

Possible root causes:

- wrong query transformation
- missing document
- bad chunk
- weak embedding
- poor retrieval
- poor reranking
- incomplete context
- unsupported generation
`
    },

    {
      title: "Security Architecture",
      content: `
Security must be independent of generation.

User
↓
Authentication
↓
Authorization
↓
Authorized Retrieval
↓
Context
↓
LLM

The LLM should never decide whether a user is allowed to access a document.

Retrieved content should also be treated as untrusted data.
`
    },

    {
      title: "Production Observability",
      content: `
For every request, consider recording:

request_id
tenant_id
retrieval_strategy
retrieved_document_ids
retrieval_latency
reranking_latency
generation_latency
input_tokens
output_tokens
estimated_cost
grounding_status
final_status

Sensitive content should not automatically be placed into logs.
`
    },

    {
      title: "Capstone Cost Model",
      content: `
A simplified cost model:

C_total =
C_ingestion
+ C_embeddings
+ C_storage
+ C_retrieval
+ C_reranking
+ C_generation
+ C_observability

For online requests:

C_request =
C_retrieval
+ C_reranking
+ C_input_tokens
+ C_output_tokens
`
    },

    {
      title: "Capstone Latency Model",
      content: `
A simplified request latency:

L_total =
L_auth
+ L_query
+ L_retrieval
+ L_reranking
+ L_context
+ L_generation
+ L_validation

Optimization should focus on the largest contributors.
`
    },

    {
      title: "Production Readiness Checklist",
      content: `
Before considering the system complete:

Knowledge:
- documents processed correctly
- metadata validated
- versions handled

Retrieval:
- retrieval metrics measured
- filters tested
- reranking evaluated

Generation:
- grounded prompts
- insufficient-evidence handling
- output validation

Security:
- authentication
- authorization
- tenant isolation
- secret protection

Operations:
- tracing
- logging
- monitoring
- cost tracking
- failure handling

Evaluation:
- golden dataset
- regression tests
- failure analysis
`
    },

    {
      title: "Final Architecture",
      content: `
                         ┌─────────────────┐
                         │     Client      │
                         └────────┬────────┘
                                  ↓
                         ┌─────────────────┐
                         │ API / Auth      │
                         └────────┬────────┘
                                  ↓
                         ┌─────────────────┐
                         │ RAG Orchestrator│
                         └────────┬────────┘
                                  ↓
                    ┌─────────────┴─────────────┐
                    ↓                           ↓
             Query Processing             Metadata Filter
                    ↓                           ↓
                    └─────────────┬─────────────┘
                                  ↓
                       ┌──────────────────┐
                       │ Retrieval Layer  │
                       │ Dense + Lexical  │
                       └────────┬─────────┘
                                ↓
                         ┌──────────────┐
                         │  Reranker    │
                         └──────┬───────┘
                                ↓
                       ┌─────────────────┐
                       │ Context Builder │
                       └────────┬────────┘
                                ↓
                          ┌────────────┐
                          │    LLM     │
                          └─────┬──────┘
                                ↓
                       ┌─────────────────┐
                       │ Grounding Check │
                       └────────┬────────┘
                                ↓
                         ┌────────────┐
                         │  Response  │
                         └────────────┘

       ┌─────────────────────────────────────────┐
       │ Evaluation / Observability / Security   │
       │ Cost / Governance / Reliability         │
       └─────────────────────────────────────────┘
`
    }
  ],

  formulas: [
    {
      name: "Retrieval Recall",
      formula: "Recall@k = RelevantRetrieved@k / TotalRelevantDocuments",
      explanation:
        "Measures how much relevant evidence is retrieved."
    },
    {
      name: "Unsupported Claim Rate",
      formula: "UCR = UnsupportedClaims / TotalClaims",
      explanation:
        "Measures how much of the generated answer lacks retrieved support."
    },
    {
      name: "Request Latency",
      formula: "L_total = Σ L_i",
      explanation:
        "End-to-end latency is the sum of the major sequential stages."
    },
    {
      name: "Request Cost",
      formula: "C_request = C_retrieval + C_reranking + C_input + C_output",
      explanation:
        "Approximate online cost for one RAG request."
    }
  ],

  codeExamples: [
    {
      language: "typescript",
      title: "Capstone Request",
      code: `type RagQuestion = {
  question: string;
  tenantId: string;
  userId: string;
  filters?: Record<string, string>;
};

type RagAnswer = {
  answer: string;
  citations: string[];
  status:
    | "grounded"
    | "partial"
    | "insufficient"
    | "conflicting";
};`
    },
    {
      language: "python",
      title: "Grounding Decision",
      code: `def decide_answer(evidence_score, threshold=0.75):
    if evidence_score >= threshold:
        return "grounded"

    return "insufficient"`
    },
    {
      language: "python",
      title: "Recall Evaluation",
      code: `def recall_at_k(relevant, retrieved):
    retrieved_relevant = set(relevant) & set(retrieved)

    if not relevant:
        return 0.0

    return len(retrieved_relevant) / len(set(relevant))`
    }
  ],

  architecture: {
    title: "Knowledge-Based AI Assistant",
    phases: [
      "Document Ingestion",
      "Processing and Cleaning",
      "Chunking",
      "Embedding",
      "Indexing",
      "Query Understanding",
      "Retrieval",
      "Reranking",
      "Context Construction",
      "Grounded Generation",
      "Validation",
      "Evaluation",
      "Monitoring",
      "Production Operations"
    ]
  },

  exercises: [
    "Design the complete architecture for a Knowledge-Based AI Assistant.",
    "Define the data model for documents and chunks.",
    "Design the request lifecycle.",
    "Define three grounded answer states.",
    "Design a RAG evaluation dataset.",
    "Identify five possible failure points.",
    "Design authorization-aware retrieval.",
    "Estimate latency and cost for a request."
  ],

  codingExercises: [
    "Create a document and chunk data model.",
    "Implement a simple retrieval interface.",
    "Implement Recall@k.",
    "Implement an evidence-gated answer policy.",
    "Create a structured RAG response object.",
    "Implement basic request tracing."
  ],

  architectureExercises: [
    "Design a university Knowledge-Based AI Assistant.",
    "Design a multi-tenant enterprise RAG platform.",
    "Design a production RAG system with hybrid retrieval.",
    "Design an evaluation and observability architecture.",
    "Design failure handling for every major pipeline stage."
  ],

  capstoneProject: {
    title: "Knowledge-Based AI Assistant",
    objective:
      "Build an assistant that answers questions using a controlled knowledge collection and provides grounded responses.",

    requirements: [
      "Document ingestion",
      "Document processing",
      "Chunking",
      "Embedding generation",
      "Vector or hybrid retrieval",
      "Metadata filtering",
      "Context construction",
      "Grounded generation",
      "Citations or provenance",
      "Insufficient-evidence handling",
      "Evaluation",
      "Basic observability"
    ],

    deliverables: [
      "Problem statement",
      "System architecture",
      "Knowledge collection",
      "Ingestion pipeline",
      "Retrieval implementation",
      "Generation workflow",
      "Evaluation dataset",
      "Results",
      "Failure analysis",
      "Limitations",
      "Reflection and future improvements"
    ],

    evaluationAreas: [
      "Retrieval quality",
      "Grounding quality",
      "Answer quality",
      "Architecture",
      "Security",
      "Evaluation methodology",
      "Code quality",
      "Documentation"
    ]
  },

  interviewQuestions: [
    "Design a complete production RAG system.",
    "How would you debug a hallucinated RAG answer?",
    "How would you determine whether retrieval or generation caused a failure?",
    "How would you secure a multi-tenant RAG application?",
    "How would you evaluate the system?",
    "How would you optimize latency?",
    "How would you reduce cost?",
    "When should a RAG system abstain?",
    "How would you handle conflicting documents?"
  ],

  commonMistakes: [
    "Treating RAG as only vector search plus an LLM.",
    "Skipping evaluation.",
    "Failing to preserve source provenance.",
    "Allowing unsupported answers.",
    "Ignoring authorization.",
    "Ignoring document versions.",
    "Measuring only final answer quality.",
    "Ignoring latency and cost.",
    "Failing to analyze retrieval failures."
  ],

  summary: [
    "A complete RAG application requires ingestion, retrieval, context construction, generation, validation, and evaluation.",
    "Knowledge-Based AI Assistant is a practical way to integrate the module concepts.",
    "Retrieval and generation should be evaluated separately.",
    "Security and authorization must be enforced outside the model.",
    "Grounding and provenance are central to trustworthy RAG.",
    "Production readiness requires observability, reliability, cost management, and governance."
  ],

  keyTakeaways: [
    "RAG is an end-to-end system.",
    "Good retrieval is necessary but not sufficient.",
    "Context construction strongly affects generation quality.",
    "Evidence should control whether an answer is generated.",
    "Evaluation should identify where failures originate.",
    "A production RAG system must be secure, observable, measurable, and maintainable."
  ],

  visualReferences: [
    {
      title: "Knowledge-Based AI Assistant Architecture",
      type: "architecture",
      description: "Complete ingestion, retrieval, generation, validation, and monitoring architecture."
    },
    {
      title: "End-to-End RAG Lifecycle",
      type: "flowchart",
      description: "Shows the complete lifecycle from documents to grounded responses and evaluation."
    }
  ]
};

export default lesson16;