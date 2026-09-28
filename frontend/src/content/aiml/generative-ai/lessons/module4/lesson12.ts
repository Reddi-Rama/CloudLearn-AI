const lesson = {
  id: "lesson12",
  moduleId: "module4",
  title: "Production RAG Systems, Optimization & Capstone Architecture",
  subtitle: "Bring the complete RAG pipeline together and design a reliable, scalable, observable, secure, and cost-aware production system.",

  overview: `
A prototype RAG application can be built quickly.

A production RAG system is much more demanding.

Production requirements include:

• Reliable ingestion
• High-quality retrieval
• Access control
• Version management
• Evaluation
• Observability
• Latency management
• Cost control
• Failure handling
• Security
• Scalability
• Data lifecycle management
• Monitoring
• Regression testing

The complete production architecture can be represented as:

                  ┌─────────────────────┐
                  │   DATA SOURCES      │
                  └──────────┬──────────┘
                             ↓
                    INGESTION PIPELINE
                             ↓
                 CLEAN / CHUNK / METADATA
                             ↓
                      EMBEDDINGS
                             ↓
                 VECTOR + LEXICAL INDEX
                             ↓
USER → QUERY → ROUTER → RETRIEVAL → RERANKER
                             ↓
                    CONTEXT BUILDER
                             ↓
                       LLM / MODEL
                             ↓
                    VALIDATION / GUARD
                             ↓
                    CITATION / RESPONSE
                             ↓
                       USER

Alongside the entire system:

MONITORING
EVALUATION
LOGGING
SECURITY
COST CONTROL
VERSIONING
`
  ,

  learningObjectives: [
    "Design a production-ready RAG architecture.",
    "Understand RAG scalability.",
    "Optimize retrieval latency.",
    "Optimize context size.",
    "Optimize token usage and cost.",
    "Understand caching.",
    "Understand asynchronous ingestion.",
    "Understand document lifecycle management.",
    "Understand observability.",
    "Understand security and access control.",
    "Understand multi-tenancy.",
    "Understand reliability and fallbacks.",
    "Design a complete RAG capstone system."
  ],

  prerequisites: [
    "All previous Module 4 lessons",
    "Prompt engineering",
    "Basic backend development",
    "Basic databases",
    "Basic cloud concepts"
  ],

  keyTerms: [
    {
      term: "Production RAG",
      definition: "A RAG system engineered for reliability, security, scalability, observability, and operational use."
    },
    {
      term: "Observability",
      definition: "The ability to understand system behavior using logs, metrics, traces, and evaluation signals."
    },
    {
      term: "Caching",
      definition: "Storing reusable results so repeated work can be avoided."
    },
    {
      term: "Multi-Tenancy",
      definition: "Supporting multiple independent users or organizations while maintaining data isolation."
    },
    {
      term: "Fallback",
      definition: "A controlled alternative behavior used when a primary system component fails."
    },
    {
      term: "Circuit Breaker",
      definition: "A reliability mechanism that prevents repeated calls to a failing dependency."
    },
    {
      term: "Data Lifecycle",
      definition: "The stages through which information moves from creation and ingestion to update, archival, and deletion."
    },
    {
      term: "SLO",
      definition: "A service-level objective defining a target for a reliability or performance metric."
    }
  ],

  sections: [
    {
      title: "1. Prototype RAG vs Production RAG",
      explanation: `
Prototype:

User
 ↓
Vector Search
 ↓
LLM
 ↓
Answer

Production:

User
 ↓
Authentication
 ↓
Query Processing
 ↓
Authorization
 ↓
Routing
 ↓
Hybrid Retrieval
 ↓
Reranking
 ↓
Context Construction
 ↓
LLM
 ↓
Validation
 ↓
Citations
 ↓
Monitoring
 ↓
Answer

Production systems must handle failure, scale, security, and changing data.
`
    },

    {
      title: "2. Production Architecture",
      explanation: `
A complete system can contain:

Frontend
   ↓
API Gateway
   ↓
Application Service
   ↓
Authentication
   ↓
Query Router
   ↓
Retrieval Service
   ↓
Vector / Sparse Index
   ↓
Reranker
   ↓
Context Builder
   ↓
LLM Gateway
   ↓
Validation
   ↓
Response

Separate ingestion:

Data Sources
   ↓
Ingestion Workers
   ↓
Processing Queue
   ↓
Parser
   ↓
Chunker
   ↓
Embedding
   ↓
Index
`
    },

    {
      title: "3. Authentication and Authorization",
      explanation: `
A production RAG system must determine:

Who is the user?

What data can the user access?

Authorization should happen before protected information enters
the model context.

Example:

Tenant:
company-A

User:
employee-42

Allowed:
company-A documents

Denied:
company-B documents
`
    },

    {
      title: "4. Multi-Tenant RAG",
      explanation: `
Multi-tenant systems require strong isolation.

Possible isolation strategies:

• Separate collections
• Separate namespaces
• Tenant metadata filters
• Separate databases

The correct architecture depends on security and scale requirements.

The most important principle:

A tenant must never receive another tenant's protected context.
`
    },

    {
      title: "5. Ingestion at Scale",
      explanation: `
Large knowledge bases should not necessarily be processed synchronously
inside a user request.

Instead:

Upload
 ↓
Queue
 ↓
Worker
 ↓
Parse
 ↓
Chunk
 ↓
Embed
 ↓
Index
 ↓
Status update

Asynchronous ingestion prevents large files from blocking user-facing requests.
`
    },

    {
      title: "6. Incremental Updates",
      explanation: `
Production knowledge bases change.

The system should identify:

New documents
Modified documents
Deleted documents

Only affected content should normally be reprocessed when possible.
`
    },

    {
      title: "7. Caching",
      explanation: `
Caching can reduce repeated computation.

Possible caches:

• Query embedding cache
• Retrieval result cache
• Reranking cache
• LLM response cache
• Parsed document cache

Caching must account for:

• Data freshness
• User permissions
• Query differences
• Document updates
`
    },

    {
      title: "8. Latency Optimization",
      explanation: `
Potential optimization techniques:

• Parallel retrieval
• Smaller candidate sets
• Efficient indexes
• Cached embeddings
• Cached retrieval
• Faster reranking
• Streaming generation
• Asynchronous processing
• Smaller prompts
• Better query routing

Optimization should be measured rather than assumed.
`
    },

    {
      title: "9. Context Optimization",
      explanation: `
More context is not automatically better.

Optimization strategies:

• Better chunking
• Reranking
• Deduplication
• Compression
• Top-k tuning
• Metadata filtering
• Parent-child retrieval

Goal:

Maximum useful evidence

with

minimum unnecessary tokens.
`
    },

    {
      title: "10. Cost Optimization",
      explanation: `
RAG cost can come from:

Embedding
Vector storage
Retrieval
Reranking
LLM input tokens
LLM output tokens
Evaluation
Monitoring

Possible strategies:

• Cache repeated work.
• Reduce unnecessary context.
• Use appropriate embedding models.
• Limit retrieval candidates.
• Use smaller models for simple tasks.
• Route difficult tasks to stronger models.
`
    },

    {
      title: "11. Model Routing",
      explanation: `
Not every question needs the same model.

Example:

Simple lookup
→ smaller/faster model

Complex synthesis
→ stronger model

Structured extraction
→ specialized model

This can reduce cost while maintaining quality.
`
    },

    {
      title: "12. Reliability and Fallbacks",
      explanation: `
Production systems need fallback behavior.

Possible failures:

Vector database unavailable
LLM unavailable
Embedding service unavailable
Reranker timeout
Malformed output
No evidence

Possible fallback:

Vector search unavailable
   ↓
Keyword search

LLM unavailable
   ↓
Cached response / controlled error

No evidence
   ↓
Abstain
`
    },

    {
      title: "13. Timeouts and Retries",
      explanation: `
External services can fail temporarily.

A production application should define:

• Timeout
• Retry count
• Backoff
• Maximum total request time

Blindly retrying can increase load and make an outage worse.
`
    },

    {
      title: "14. Circuit Breakers",
      explanation: `
If a dependency repeatedly fails:

Normal
 ↓
Failure
 ↓
Failure
 ↓
Circuit opens
 ↓
Stop repeated calls
 ↓
Recovery check
 ↓
Resume

This protects the application from repeatedly calling an unhealthy dependency.
`
    },

    {
      title: "15. Observability",
      explanation: `
Important information to monitor:

Request ID
User/tenant ID where appropriate
Query
Retrieval latency
Retrieved document IDs
Retrieval scores
Reranking scores
Context size
Model latency
Input tokens
Output tokens
Validation result
Final status

Sensitive information should be handled according to the application's
privacy and security requirements.
`
    },

    {
      title: "16. Distributed Tracing",
      explanation: `
A single user request may cross many services:

API
 ↓
Router
 ↓
Embedding
 ↓
Vector DB
 ↓
Reranker
 ↓
LLM
 ↓
Validator

Tracing connects these operations into one request timeline.

This makes performance bottlenecks easier to identify.
`
    },

    {
      title: "17. Security",
      explanation: `
Production RAG security should address:

• Authentication
• Authorization
• Prompt injection
• Indirect prompt injection
• Data leakage
• Tenant isolation
• Tool permissions
• Sensitive information
• Logging exposure
• Malicious documents
• Dependency security
`
    },

    {
      title: "18. Data Lifecycle",
      explanation: `
Documents have a lifecycle:

Created
 ↓
Ingested
 ↓
Indexed
 ↓
Updated
 ↓
Re-indexed
 ↓
Archived
 ↓
Deleted

The retrieval index must reflect the intended lifecycle.

Deleted or unauthorized documents should not remain retrievable indefinitely.
`
    },

    {
      title: "19. Evaluation in Production",
      explanation: `
Production evaluation can include:

Offline golden datasets
Online user feedback
Sampled conversations
Retrieval metrics
Groundedness checks
Latency metrics
Cost metrics
Failure rates

The system should continuously detect quality degradation.
`
    },

    {
      title: "20. RAG Monitoring Dashboard",
      explanation: `
Useful dashboard metrics:

Requests per minute
Average latency
P95 latency
Error rate
Retrieval recall
Groundedness
Answer quality
No-answer rate
Token usage
Estimated cost
Cache hit rate
Retrieval failure rate
`
    },

    {
      title: "21. Production RAG Checklist",
      explanation: `
Before deployment ask:

Data:
Is ingestion reliable?

Retrieval:
Is relevant evidence found?

Security:
Are permissions enforced?

Generation:
Are answers grounded?

Evaluation:
Do regression tests exist?

Performance:
Is latency acceptable?

Cost:
Is token and infrastructure usage controlled?

Operations:
Are logs and metrics available?

Reliability:
Are fallbacks defined?
`
    },

    {
      title: "22. Capstone Architecture",
      explanation: `
The final Module 4 project can combine:

Frontend
   ↓
API
   ↓
Authentication
   ↓
Query Router
   ↓
Query Rewriter
   ↓
Hybrid Retriever
   ↓
Metadata Filter
   ↓
Reranker
   ↓
Context Builder
   ↓
LLM
   ↓
Groundedness Validator
   ↓
Citation Generator
   ↓
Response

Knowledge pipeline:

PDF / DOCX / HTML / CSV / JSON
   ↓
Ingestion
   ↓
Parsing
   ↓
Cleaning
   ↓
Chunking
   ↓
Metadata
   ↓
Embeddings
   ↓
Vector + Sparse Index

Cross-cutting:

Evaluation
Security
Observability
Caching
Versioning
Cost control
`
    },

    {
      title: "23. Capstone Development Phases",
      explanation: `
Phase 1:
Build ingestion.

Phase 2:
Build chunking and metadata.

Phase 3:
Build embeddings and vector search.

Phase 4:
Add sparse or keyword search.

Phase 5:
Add hybrid retrieval.

Phase 6:
Add reranking.

Phase 7:
Build grounded context generation.

Phase 8:
Add citations and validation.

Phase 9:
Create evaluation dataset.

Phase 10:
Add observability and optimization.

Phase 11:
Security testing.

Phase 12:
Production readiness review.
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "End-to-End Latency",
      formula: `
T_total =
T_auth +
T_route +
T_embed +
T_retrieve +
T_rerank +
T_context +
T_llm +
T_validate
`,
      explanation: "Sequential stages contribute to total request latency."
    },
    {
      concept: "Cache Hit Rate",
      formula: `
Hit Rate = cache_hits / total_requests
`,
      explanation: "Measures how often reusable results are served from cache."
    },
    {
      concept: "Cost per Request",
      formula: `
Cost_request =
embedding_cost +
retrieval_cost +
reranking_cost +
LLM_input_cost +
LLM_output_cost
`,
      explanation: "A conceptual decomposition of RAG request cost."
    },
    {
      concept: "Availability",
      formula: `
Availability =
successful_requests / total_requests
`,
      explanation: "Measures the fraction of requests completed successfully."
    },
    {
      concept: "P95 Latency",
      formula: `
P95 = latency value below which approximately 95% of requests fall
`,
      explanation: "Tail latency is often more informative than average latency for production systems."
    }
  ],

  codeExamples: [
    {
      title: "Production-Style RAG Pipeline Skeleton",
      language: "python",
      code: `
def production_rag(
    user,
    question,
    router,
    retriever,
    reranker,
    generator,
    validator
):
    # 1. Authorize
    authorize(user)

    # 2. Route
    route = router(question)

    # 3. Retrieve
    candidates = retriever(
        question,
        route=route,
        user=user
    )

    # 4. Rerank
    ranked = reranker(
        question,
        candidates
    )

    # 5. Build context
    context = build_context(
        ranked[:5]
    )

    # 6. Generate
    answer = generator(
        question,
        context
    )

    # 7. Validate
    result = validator(
        question,
        context,
        answer
    )

    if not result["valid"]:
        return {
            "status": "fallback",
            "message": "Unable to produce a validated answer."
        }

    return {
        "status": "success",
        "answer": answer
    }
`
    },

    {
      title: "Simple Retry With Backoff",
      language: "python",
      code: `
import time

def retry(
    operation,
    attempts=3
):
    for attempt in range(attempts):
        try:
            return operation()

        except Exception:
            if attempt == attempts - 1:
                raise

            delay = 2 ** attempt
            time.sleep(delay)
`
    },

    {
      title: "Simple Cache",
      language: "python",
      code: `
cache = {}

def cached_retrieval(
    query,
    retriever
):
    key = query.strip().lower()

    if key in cache:
        return cache[key]

    result = retriever(query)

    cache[key] = result

    return result
`
    },

    {
      title: "Request Metrics",
      language: "python",
      code: `
import time

def measured_call(operation):
    start = time.perf_counter()

    result = operation()

    elapsed = (
        time.perf_counter()
        - start
    )

    return {
        "result": result,
        "latency_seconds": elapsed
    }
`
    },

    {
      title: "RAG Health Check",
      language: "python",
      code: `
def health_check(
    vector_store,
    embedding_service,
    model_service
):
    return {
        "vector_store": vector_store.is_available(),
        "embedding": embedding_service.is_available(),
        "model": model_service.is_available()
    }
`
    }
  ],

  comparisonTables: [
    {
      title: "Prototype vs Production RAG",
      columns: [
        "Area",
        "Prototype",
        "Production"
      ],
      rows: [
        ["Retrieval", "Basic vector search", "Hybrid + reranking"],
        ["Security", "Minimal", "Authentication + authorization + isolation"],
        ["Evaluation", "Manual", "Automated regression suite"],
        ["Observability", "Console logs", "Metrics + traces + structured logs"],
        ["Failures", "Basic errors", "Timeouts + retries + fallbacks"],
        ["Scale", "Single process", "Scalable services/workers"],
        ["Data updates", "Manual", "Incremental lifecycle"],
        ["Cost", "Often ignored", "Measured and optimized"]
      ]
    },
    {
      title: "Optimization Techniques",
      columns: [
        "Technique",
        "Primary Benefit",
        "Trade-Off"
      ],
      rows: [
        ["Caching", "Lower repeated work", "Freshness complexity"],
        ["Reranking", "Higher relevance", "Latency"],
        ["Compression", "Lower token usage", "Possible evidence loss"],
        ["Hybrid retrieval", "Better coverage", "More infrastructure"],
        ["Parallel retrieval", "Lower latency", "More concurrency"],
        ["Model routing", "Lower cost", "Routing complexity"],
        ["Incremental ingestion", "Lower processing cost", "Change tracking"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "Production RAG Architecture",
      type: "architecture",
      description: "Complete production architecture from data sources through retrieval, generation, validation, security, and observability."
    },
    {
      title: "Production Ingestion Pipeline",
      type: "flowchart",
      description: "Source → queue → worker → parser → cleaner → chunker → embedding → index."
    },
    {
      title: "RAG Observability",
      type: "architecture",
      description: "Trace request flow across API, retrieval, reranking, LLM, validation, and response."
    },
    {
      title: "RAG Reliability",
      type: "flowchart",
      description: "Failure → timeout → retry → fallback → controlled response."
    },
    {
      title: "Multi-Tenant RAG",
      type: "architecture",
      description: "Authentication → tenant authorization → isolated retrieval → grounded generation."
    },
    {
      title: "Complete RAG Capstone",
      type: "architecture",
      description: "End-to-end architecture combining ingestion, hybrid retrieval, reranking, grounding, evaluation, and observability."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Production Architecture",
      task: "Draw a complete production RAG architecture including frontend, API, ingestion, retrieval, generation, validation, and monitoring."
    },
    {
      title: "Exercise 2 — Failure Handling",
      task: "Design fallback behavior for vector database failure, embedding failure, model timeout, invalid output, and missing evidence."
    },
    {
      title: "Exercise 3 — Cost Optimization",
      task: "Identify five ways to reduce RAG cost without significantly reducing answer quality."
    },
    {
      title: "Exercise 4 — Latency Optimization",
      task: "Analyze a RAG pipeline and identify which stages can be parallelized or cached."
    },
    {
      title: "Exercise 5 — Security Architecture",
      task: "Design tenant isolation and authorization for a multi-company RAG application."
    }
  ],

  capstoneProject: {
    title: "Production-Ready Knowledge Assistant",
    objective: `
Build a complete RAG application that allows users to ask questions
about a controlled knowledge base and receive grounded, source-aware answers.
`,
    suggestedStack: [
      "Python",
      "FastAPI",
      "Embedding model",
      "Vector database",
      "Sparse search",
      "Reranker",
      "LLM API",
      "React or Next.js",
      "PostgreSQL or equivalent metadata store"
    ],
    features: [
      "Document upload",
      "PDF/DOCX/HTML ingestion",
      "Cleaning",
      "Chunking",
      "Metadata extraction",
      "Embeddings",
      "Vector search",
      "Keyword search",
      "Hybrid retrieval",
      "Reranking",
      "Context construction",
      "Grounded generation",
      "Citations",
      "Conversation history",
      "Evaluation dataset",
      "Retrieval metrics",
      "Groundedness checks",
      "Authentication",
      "Authorization",
      "Observability",
      "Caching",
      "Failure handling"
    ],
    evaluation: [
      "At least 30 evaluation questions",
      "Recall@5",
      "Precision@5",
      "MRR",
      "Groundedness",
      "Correctness",
      "Citation accuracy",
      "Latency",
      "Token usage",
      "Failure rate"
    ],
    deliverables: [
      "System architecture diagram",
      "Source ingestion pipeline",
      "Chunking strategy",
      "Metadata schema",
      "Retrieval architecture",
      "Prompt templates",
      "Evaluation dataset",
      "Evaluation report",
      "Security design",
      "Observability design",
      "Optimization report",
      "Final application"
    ]
  },

  interviewQuestions: [
    {
      question: "What makes a RAG system production-ready?",
      answer: "Reliable ingestion, quality retrieval, grounded generation, security, evaluation, observability, scalability, failure handling, and cost/performance management."
    },
    {
      question: "Why is caching useful in RAG?",
      answer: "It can avoid repeated computation for embeddings, retrieval, or responses, reducing latency and cost."
    },
    {
      question: "Why are retries not always enough?",
      answer: "Repeated retries can increase load and latency, so systems also need timeouts, backoff, circuit breakers, and fallbacks."
    },
    {
      question: "What is observability?",
      answer: "The ability to understand system behavior through logs, metrics, traces, and evaluation signals."
    },
    {
      question: "How can RAG cost be reduced?",
      answer: "Reduce unnecessary context, cache repeated work, tune retrieval, route tasks to appropriate models, and monitor token and infrastructure usage."
    },
    {
      question: "How should multi-tenant RAG protect data?",
      answer: "Authorization and tenant isolation must be enforced in the retrieval architecture so unauthorized information never enters model context."
    },
    {
      question: "What should happen when no relevant evidence is found?",
      answer: "The system should use controlled abstention, clarification, or another safe fallback rather than inventing an answer."
    }
  ],

  commonMistakes: [
    "Deploying RAG without evaluation.",
    "Ignoring authorization.",
    "Sending excessive context to the model.",
    "Ignoring latency and cost.",
    "Logging sensitive information carelessly.",
    "Using unlimited retries.",
    "Having no fallback when retrieval or generation fails.",
    "Rebuilding the entire index for every small document change.",
    "Treating production monitoring as optional.",
    "Adding advanced components without measuring their benefit."
  ],

  finalChecklist: [
    "Knowledge sources are defined.",
    "Ingestion is reliable.",
    "Chunking has been evaluated.",
    "Metadata is preserved.",
    "Embeddings are compatible.",
    "Vector and lexical retrieval are tested.",
    "Reranking is evaluated.",
    "Context construction is controlled.",
    "Grounded prompts are implemented.",
    "Citations are validated.",
    "Insufficient evidence is handled.",
    "Authorization is enforced.",
    "Evaluation dataset exists.",
    "Regression tests exist.",
    "Latency is monitored.",
    "Cost is monitored.",
    "Failures have fallbacks.",
    "Logs and traces exist.",
    "Document lifecycle is implemented.",
    "Security testing is performed."
  ],

  keyTakeaways: [
    "Production RAG is a complete software system, not simply a vector database connected to an LLM.",
    "Security and authorization must be enforced before protected information reaches the model.",
    "Hybrid retrieval, reranking, context construction, and validation improve the retrieval-generation pipeline when justified by evaluation.",
    "Caching and optimization can reduce latency and cost.",
    "Asynchronous ingestion is useful for large and continuously changing knowledge bases.",
    "Observability is essential for debugging production RAG.",
    "Evaluation must continue after deployment.",
    "Reliable RAG systems require explicit failure handling and controlled fallbacks.",
    "The final goal is not merely fluent generation but useful, traceable, grounded, and operationally reliable answers."
  ]
};

export default lesson;