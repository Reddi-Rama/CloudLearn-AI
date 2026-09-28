const lesson13 = {
  id: "lesson13",
  moduleId: "module7",
  title: "Temporal, Hierarchical & Domain-Specific RAG",
  subtitle:
    "Design retrieval systems that understand time, document hierarchy, and specialized domain knowledge.",
  description:
    "Learn how advanced RAG systems retrieve information when knowledge is time-sensitive, hierarchical, or highly specialized. This lesson covers temporal retrieval, hierarchical retrieval, domain-specific retrieval, metadata-aware filtering, version-aware knowledge, specialized embeddings, query routing, and production architecture patterns.",

  difficulty: "Advanced",
  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Understand why ordinary semantic retrieval can fail for temporal questions.",
    "Design retrieval systems that respect document dates and validity periods.",
    "Understand hierarchical retrieval across collections, documents, sections, and chunks.",
    "Design parent-child and hierarchical retrieval strategies.",
    "Understand domain-specific RAG and why general-purpose retrieval may be insufficient.",
    "Use metadata to represent time, hierarchy, authority, and domain.",
    "Design retrieval routing for different domains and knowledge collections.",
    "Understand version-aware retrieval for changing knowledge bases.",
    "Apply temporal and hierarchical constraints before generation.",
    "Design production-ready retrieval architectures for specialized knowledge."
  ],

  sections: [
    {
      title: "Why Advanced Retrieval Is Necessary",
      content: [
        "Basic RAG often assumes that every document can be treated as an independent chunk and that semantic similarity is enough to identify the correct evidence.",
        "Real knowledge systems are more complicated. Documents have dates, versions, authors, departments, categories, access rules, and relationships with other documents.",
        "A university policy assistant may need the policy that was valid during a particular academic year. A legal assistant may need the current version of a regulation. A technical assistant may need documentation for a specific software version.",
        "These requirements introduce additional retrieval dimensions such as time, hierarchy, domain, authority, and version.",
        "Advanced RAG therefore combines semantic retrieval with structured constraints and domain-aware retrieval strategies."
      ]
    },

    {
      title: "Temporal RAG",
      content: [
        "Temporal RAG is retrieval that explicitly considers when information was created, published, updated, valid, or expired.",
        "A normal vector similarity search may retrieve an older document simply because its wording is highly similar to the query.",
        "Temporal retrieval adds time as a retrieval constraint or ranking signal.",
        "The system should distinguish between document creation time and the period during which the information is valid.",
        "For example, a policy published in 2023 may describe rules that were valid only during 2023–2024.",
        "Temporal reasoning is therefore about validity, not merely timestamps."
      ],
      example: {
        query: "What is the attendance requirement for the 2025 academic year?",
        possibleDocuments: [
          "Attendance Policy 2023–2024",
          "Attendance Policy 2024–2025",
          "Attendance Policy 2025–2026"
        ],
        correctStrategy:
          "Identify the requested time period and prioritize documents whose validity interval covers that period."
      }
    },

    {
      title: "Temporal Metadata",
      content: [
        "Temporal retrieval requires metadata capable of representing the lifecycle of knowledge.",
        "Useful fields include createdAt, updatedAt, validFrom, validUntil, publicationDate, effectiveDate, expiryDate, and version.",
        "The important distinction is between when a document exists and when its information applies.",
        "A document can be created today but contain historical information. Another document may have been created earlier but remain valid today."
      ],
      codeExample: {
        language: "typescript",
        code: [
          "interface TemporalMetadata {",
          "  createdAt: string;",
          "  updatedAt: string;",
          "  validFrom?: string;",
          "  validUntil?: string;",
          "  publicationDate?: string;",
          "  effectiveDate?: string;",
          "  version?: string;",
          "}"
        ]
      }
    },

    {
      title: "Temporal Filtering",
      content: [
        "Temporal filtering restricts retrieval to documents whose validity interval matches the requested time.",
        "Suppose a document is valid from 2025-01-01 until 2025-12-31. A query referring to June 2025 should be able to retrieve it.",
        "A simplified validity condition is:",
        "validFrom <= queryDate AND (validUntil is empty OR queryDate <= validUntil).",
        "Temporal filtering can be implemented before semantic retrieval, after candidate retrieval, or as part of ranking.",
        "Pre-filtering provides stronger correctness boundaries, while post-filtering can be useful when the vector database has limited temporal filtering capabilities."
      ],
      formula: "Valid(d, t) = [validFrom(d) ≤ t] ∧ [validUntil(d) is null ∨ t ≤ validUntil(d)]"
    },

    {
      title: "Temporal Ranking",
      content: [
        "Sometimes several documents are valid for the same time period. In that situation, temporal information can become a ranking signal rather than a strict filter.",
        "A retrieval score can combine semantic similarity with temporal relevance.",
        "The exact weighting depends on the application.",
        "For example, a production documentation system may prefer the latest valid version while a historical research system may prefer documents closest to the requested date.",
        "The key principle is that freshness should not automatically override semantic relevance or authority."
      ],
      formula: "Score(d) = α · SemanticScore(d) + β · TemporalScore(d) + γ · AuthorityScore(d)"
    },

    {
      title: "Historical vs Current Knowledge",
      content: [
        "A RAG system must determine whether the user wants historical information or the latest information.",
        "Consider two questions: 'What was the admission policy in 2022?' and 'What is the current admission policy?'",
        "Both queries may contain similar concepts but require different retrieval behavior.",
        "Historical questions require temporal anchoring.",
        "Current questions require current-version filtering or freshness-aware retrieval.",
        "A production system should avoid silently answering historical questions using current documents."
      ],
      comparison: [
        {
          aspect: "Historical query",
          approach: "Retrieve documents valid during the requested period."
        },
        {
          aspect: "Current query",
          approach: "Prefer currently valid and authoritative documents."
        },
        {
          aspect: "Unspecified time",
          approach: "Prefer current knowledge but disclose relevant uncertainty when historical versions matter."
        }
      ]
    },

    {
      title: "Version-Aware Retrieval",
      content: [
        "Many knowledge sources evolve through explicit versions.",
        "Software documentation, company policies, APIs, academic regulations, and product manuals are common examples.",
        "A retrieval system should preserve version information instead of treating every document as timeless.",
        "Version-aware retrieval can prevent conflicts between old and new knowledge.",
        "A query may explicitly specify a version, such as 'How does the API work in version 4.2?'",
        "The retrieval system should then constrain the search to the appropriate version or version family."
      ],
      codeExample: {
        language: "python",
        code: [
          "def filter_by_version(documents, requested_version):",
          "    return [",
          "        doc for doc in documents",
          "        if doc.get('version') == requested_version",
          "    ]",
          "",
          "documents = [",
          "    {'id': 'a', 'version': '4.1'},",
          "    {'id': 'b', 'version': '4.2'},",
          "    {'id': 'c', 'version': '5.0'}",
          "]",
          "",
          "print(filter_by_version(documents, '4.2'))"
        ]
      }
    },

    {
      title: "Hierarchical Knowledge",
      content: [
        "Many knowledge collections naturally have a hierarchy.",
        "A university may contain departments, regulations, documents, sections, subsections, and paragraphs.",
        "A software documentation system may contain products, versions, manuals, chapters, sections, and individual passages.",
        "A legal knowledge base may contain acts, chapters, sections, clauses, and subclauses.",
        "A flat chunk-only representation can lose this structural relationship.",
        "Hierarchical RAG preserves relationships between higher-level documents and lower-level evidence."
      ],
      hierarchyExample: [
        "Knowledge Base",
        "  ├── University Policies",
        "  │   ├── Academic Regulations",
        "  │   │   ├── Attendance",
        "  │   │   │   ├── Section 1",
        "  │   │   │   └── Section 2",
        "  │   │   └── Examination Rules",
        "  │   └── Hostel Regulations",
        "  └── Administrative Documents"
      ]
    },

    {
      title: "Parent-Child Retrieval",
      content: [
        "Parent-child retrieval stores smaller searchable child chunks while retaining links to larger parent documents.",
        "The child chunk provides precise retrieval.",
        "The parent document provides additional context.",
        "This solves an important trade-off: small chunks are often easier to retrieve accurately, while larger chunks provide better context for generation.",
        "The retrieval process can therefore search children and then expand selected results to their parents."
      ],
      architecture: [
        "User Query",
        "  ↓",
        "Child Chunk Retrieval",
        "  ↓",
        "Top-k Child Chunks",
        "  ↓",
        "Parent Document Lookup",
        "  ↓",
        "Relevant Parent Sections",
        "  ↓",
        "Context Construction",
        "  ↓",
        "Grounded Generation"
      ]
    },

    {
      title: "Hierarchical Retrieval Strategy",
      content: [
        "Hierarchical retrieval can happen in multiple stages.",
        "The first stage may identify a relevant collection or document.",
        "The second stage may identify the relevant section.",
        "The third stage may retrieve the most relevant chunks.",
        "This reduces the search space and can improve retrieval precision.",
        "However, every additional stage introduces latency and another possible failure point."
      ],
      stages: [
        {
          stage: "Level 1",
          purpose: "Identify domain, collection, or document family."
        },
        {
          stage: "Level 2",
          purpose: "Identify relevant document."
        },
        {
          stage: "Level 3",
          purpose: "Identify relevant section."
        },
        {
          stage: "Level 4",
          purpose: "Retrieve precise evidence chunks."
        }
      ]
    },

    {
      title: "Hierarchical Metadata",
      content: [
        "Metadata can encode the position of a chunk inside the document hierarchy.",
        "Useful fields include documentId, parentId, sectionId, chapterId, headingPath, documentType, domain, and version.",
        "This metadata allows the retrieval layer to reconstruct context after finding a precise chunk.",
        "It can also support filtering and authorization."
      ],
      codeExample: {
        language: "typescript",
        code: [
          "interface HierarchicalChunk {",
          "  id: string;",
          "  documentId: string;",
          "  parentId?: string;",
          "  chapterId?: string;",
          "  sectionId?: string;",
          "  headingPath: string[];",
          "  content: string;",
          "  domain: string;",
          "  version?: string;",
          "}"
        ]
      }
    },

    {
      title: "Domain-Specific RAG",
      content: [
        "Domain-specific RAG is designed around a specialized knowledge area rather than a broad general-purpose corpus.",
        "Examples include medical literature, university regulations, financial documents, engineering manuals, software documentation, or internal company policies.",
        "Domain-specific retrieval often requires specialized metadata, terminology, query interpretation, ranking rules, and evaluation datasets.",
        "The retrieval system should understand the vocabulary and information structure of the target domain.",
        "The goal is not simply to add more documents. The goal is to build retrieval behavior appropriate to the domain."
      ]
    },

    {
      title: "Why General Retrieval Can Fail in Specialized Domains",
      content: [
        "General-purpose embeddings may not represent specialized terminology optimally.",
        "A domain can contain abbreviations, technical phrases, identifiers, formulas, product codes, or legal terminology that ordinary semantic retrieval may misunderstand.",
        "A query can also require exact matching rather than broad semantic similarity.",
        "For example, searching for an exact regulation number may be better served by lexical retrieval or metadata filtering than pure vector search.",
        "This is why domain-specific RAG frequently combines semantic retrieval with lexical search, metadata, structured databases, and reranking."
      ]
    },

    {
      title: "Domain-Specific Embeddings",
      content: [
        "A domain may benefit from an embedding model trained or adapted for its terminology and retrieval tasks.",
        "Domain-specific embeddings can improve representation of specialized concepts.",
        "However, changing the embedding model changes the vector space.",
        "Existing vectors generally need to be re-embedded using the new model.",
        "Therefore, embedding migration should be treated as a production data migration rather than a simple configuration change."
      ]
    },

    {
      title: "Domain Routing",
      content: [
        "A large knowledge system may contain multiple domains.",
        "Instead of searching every collection for every query, the system can first identify the likely domain.",
        "This is called retrieval routing.",
        "For example, a university assistant could route questions to admissions, academics, examinations, hostels, or finance.",
        "Routing reduces unnecessary retrieval and can improve relevance.",
        "However, incorrect routing can completely exclude the correct knowledge source."
      ],
      architecture: [
        "User Query",
        "    ↓",
        "Query Classification / Routing",
        "    ↓",
        "┌──────────────┬──────────────┬──────────────┐",
        "│ Admissions   │ Academics    │ Examination  │",
        "└──────────────┴──────────────┴──────────────┘",
        "        ↓",
        "Domain-Specific Retrieval",
        "        ↓",
        "Reranking",
        "        ↓",
        "Context Construction",
        "        ↓",
        "Grounded Generation"
      ]
    },

    {
      title: "Routing with Multiple Retrieval Systems",
      content: [
        "Different domains may require different retrieval strategies.",
        "One collection may use dense vectors.",
        "Another may require lexical search.",
        "A third may require structured SQL queries.",
        "A fourth may combine vector search with graph traversal.",
        "A router can select the appropriate retrieval mechanism based on the query and domain."
      ],
      codeExample: {
        language: "python",
        code: [
          "def route_query(query):",
          "    q = query.lower()",
          "",
          "    if 'exam' in q or 'examination' in q:",
          "        return 'examinations'",
          "    if 'hostel' in q:",
          "        return 'hostel'",
          "    if 'fee' in q or 'tuition' in q:",
          "        return 'finance'",
          "",
          "    return 'general'"
        ]
      }
    },

    {
      title: "Temporal + Hierarchical Retrieval",
      content: [
        "Temporal and hierarchical retrieval can be combined.",
        "For example, a query may ask for the attendance rule in a particular department during a particular academic year.",
        "The system must identify both the relevant hierarchy and the correct temporal version.",
        "A useful retrieval sequence is domain routing → temporal filtering → document selection → section retrieval → chunk retrieval → reranking.",
        "This produces a more controlled retrieval pipeline than performing one global vector search."
      ]
    },

    {
      title: "Temporal + Domain-Specific Retrieval",
      content: [
        "Domain-specific systems often contain rapidly changing knowledge.",
        "Software documentation changes between versions.",
        "Company policies change over time.",
        "Product specifications may be revised.",
        "A domain-specific RAG system therefore needs both domain-aware and time-aware retrieval.",
        "A good system should preserve historical versions while clearly identifying which version is currently authoritative."
      ]
    },

    {
      title: "Advanced Retrieval Score",
      content: [
        "A production retrieval system may combine several signals.",
        "Semantic similarity measures conceptual relevance.",
        "Lexical relevance captures exact terms.",
        "Temporal relevance captures time alignment.",
        "Authority measures source reliability or organizational priority.",
        "Domain relevance measures whether the evidence belongs to the correct knowledge area.",
        "These signals can be combined into a ranking score."
      ],
      formula:
        "Score(d) = w₁Ssemantic + w₂Slexical + w₃Stemporal + w₄Sauthority + w₅Sdomain"
    },

    {
      title: "Choosing Hard Filters vs Ranking Signals",
      content: [
        "Not every retrieval condition should be treated as a ranking signal.",
        "Some conditions are correctness boundaries.",
        "For example, if the user explicitly requests version 3.2 documentation, version 5.0 documentation should normally be excluded rather than merely given a lower score.",
        "Other properties are preferences.",
        "For example, among multiple valid sources, a more authoritative document may receive a higher ranking score.",
        "A useful engineering rule is: use hard filters for correctness constraints and ranking signals for preferences."
      ],
      comparison: [
        {
          aspect: "Hard filter",
          example: "Version must equal 3.2",
          purpose: "Prevent invalid evidence from entering the candidate set."
        },
        {
          aspect: "Ranking signal",
          example: "Prefer recently updated valid document",
          purpose: "Order otherwise acceptable candidates."
        }
      ]
    },

    {
      title: "Advanced RAG Retrieval Pipeline",
      content: [
        "A robust specialized retrieval pipeline can contain several controlled stages.",
        "The first stage interprets the query.",
        "The second stage identifies time and domain constraints.",
        "The third stage routes the query.",
        "The fourth stage applies metadata filters.",
        "The fifth stage performs lexical and semantic retrieval.",
        "The sixth stage reranks candidates.",
        "The seventh stage expands child chunks into parent context.",
        "The final stage constructs grounded context."
      ],
      architecture: [
        "User Query",
        "    ↓",
        "Query Understanding",
        "    ↓",
        "Time + Domain Detection",
        "    ↓",
        "Retrieval Router",
        "    ↓",
        "Metadata / Access Filters",
        "    ↓",
        "Lexical + Dense Retrieval",
        "    ↓",
        "Candidate Pool",
        "    ↓",
        "Reranking",
        "    ↓",
        "Parent / Hierarchical Expansion",
        "    ↓",
        "Context Compression",
        "    ↓",
        "Grounded Generation"
      ]
    },

    {
      title: "Mathematical Intuition: Temporal Relevance",
      content: [
        "Temporal relevance can be represented as a score between zero and one.",
        "One simple conceptual approach is to assign the highest score to documents closest to the requested date.",
        "Real production systems may use more sophisticated functions based on validity intervals and business rules.",
        "The mathematical representation is useful because it separates temporal relevance from semantic similarity."
      ],
      formula:
        "Stemporal(d,t) ∈ [0,1]"
    },

    {
      title: "Mathematical Intuition: Retrieval Coverage",
      content: [
        "Advanced retrieval should still be evaluated using retrieval metrics.",
        "Recall@k measures how many relevant documents were retrieved within the top k results.",
        "Precision@k measures how many of the retrieved results are relevant.",
        "For specialized retrieval, these metrics should also be measured separately by domain, time period, and query type.",
        "A system may have high overall recall but poor temporal recall for historical queries."
      ],
      formulas: [
        "Recall@k = Relevant Retrieved@k / Total Relevant",
        "Precision@k = Relevant Retrieved@k / k"
      ]
    },

    {
      title: "Domain-Specific Evaluation",
      content: [
        "Evaluation datasets should represent the actual domain.",
        "A generic benchmark may not expose failures in specialized terminology.",
        "A domain evaluation set should contain common queries, difficult queries, ambiguous queries, historical queries, version-specific queries, exact identifier queries, and queries where the correct response is insufficient evidence.",
        "Evaluation should also measure whether the system selected the correct source version and hierarchy."
      ]
    },

    {
      title: "Example: University Knowledge Assistant",
      content: [
        "Imagine a university assistant containing academic regulations from several years.",
        "A student asks: 'What is the attendance requirement for B.Tech students in the 2024–2025 academic year?'",
        "The system should first identify the academic domain.",
        "It should detect the requested academic year.",
        "It should filter documents whose validity period covers 2024–2025.",
        "It should retrieve the relevant regulation section.",
        "It should expand the retrieved chunk to preserve its parent heading and policy context.",
        "Finally, the model should generate an answer grounded only in the retrieved regulation."
      ],
      workflow: [
        "Question",
        "→ Identify domain: Academics",
        "→ Identify time: 2024–2025",
        "→ Filter valid documents",
        "→ Retrieve relevant policy",
        "→ Retrieve section/chunk",
        "→ Expand parent context",
        "→ Rerank evidence",
        "→ Generate grounded answer"
      ]
    },

    {
      title: "Example: Software Documentation Assistant",
      content: [
        "Consider a developer asking: 'How do I configure authentication in version 4.2?'",
        "The system should recognize both the technical domain and the requested software version.",
        "It should avoid retrieving documentation from unrelated products or incompatible versions.",
        "The retrieval system can route to the software documentation collection, filter version 4.2, perform semantic and lexical search, and retrieve the appropriate configuration section.",
        "This is more reliable than searching all software documentation globally."
      ]
    },

    {
      title: "Failure Modes in Advanced RAG",
      failureModes: [
        {
          failure: "Wrong temporal version",
          cause: "Date or validity metadata is missing or ignored.",
          mitigation: "Use explicit validity intervals and version-aware filtering."
        },
        {
          failure: "Wrong hierarchy level",
          cause: "A chunk is retrieved without its parent context.",
          mitigation: "Use parent-child or hierarchical expansion."
        },
        {
          failure: "Wrong domain",
          cause: "Global retrieval mixes unrelated knowledge.",
          mitigation: "Use domain routing and metadata filtering."
        },
        {
          failure: "Over-restrictive routing",
          cause: "Router sends query to the wrong collection.",
          mitigation: "Allow fallback or multi-route retrieval."
        },
        {
          failure: "Outdated evidence",
          cause: "Old documents remain highly similar to current queries.",
          mitigation: "Use current-validity filters and freshness-aware ranking."
        },
        {
          failure: "Loss of historical evidence",
          cause: "Only the latest document is retained.",
          mitigation: "Preserve historical versions when historical questions matter."
        },
        {
          failure: "Domain terminology mismatch",
          cause: "General embedding model poorly represents specialized terms.",
          mitigation: "Use hybrid retrieval or domain-specific embeddings."
        }
      ]
    },

    {
      title: "Fallback Retrieval",
      content: [
        "Advanced routing should not become a single point of failure.",
        "If a router is uncertain, the system can search multiple candidate domains.",
        "If temporal interpretation is uncertain, the system can ask the user for clarification.",
        "If version filtering produces no results, the system can explain that the requested version is unavailable instead of silently using another version.",
        "Fallback behavior should preserve correctness rather than maximizing the chance of producing an answer."
      ]
    },

    {
      title: "Production Architecture",
      architecture: [
        "                USER",
        "                  ↓",
        "           Query Understanding",
        "                  ↓",
        "       ┌──────────┴──────────┐",
        "       ↓                     ↓",
        " Temporal Analysis       Domain Router",
        "       ↓                     ↓",
        "       └──────────┬──────────┘",
        "                  ↓",
        "        Metadata / ACL Filter",
        "                  ↓",
        "       ┌──────────┴──────────┐",
        "       ↓                     ↓",
        "  Lexical Search       Dense Retrieval",
        "       ↓                     ↓",
        "       └──────────┬──────────┘",
        "                  ↓",
        "              Reranker",
        "                  ↓",
        "       Parent / Hierarchy Expansion",
        "                  ↓",
        "          Context Construction",
        "                  ↓",
        "          Grounded Generation",
        "                  ↓",
        "          Citation Validation",
        "                  ↓",
        "               Answer"
      ]
    },

    {
      title: "Implementation Pattern",
      content: [
        "A practical implementation separates retrieval concerns into independent components.",
        "The query analyzer extracts constraints.",
        "The router selects candidate knowledge sources.",
        "The filter applies hard constraints.",
        "The retriever generates candidates.",
        "The reranker orders candidates.",
        "The hierarchy resolver expands context.",
        "The context builder prepares evidence for the generation model.",
        "This separation makes the system easier to test and replace."
      ],
      codeExample: {
        language: "python",
        code: [
          "def advanced_retrieve(query, query_date, domain):",
          "    constraints = {",
          "        'domain': domain,",
          "        'query_date': query_date",
          "    }",
          "",
          "    candidates = retrieve_candidates(query, constraints)",
          "    ranked = rerank(candidates, query)",
          "    expanded = expand_parent_context(ranked)",
          "",
          "    return build_context(expanded)"
        ]
      }
    },

    {
      title: "Design Principles",
      principles: [
        "Treat time as part of knowledge semantics when information changes.",
        "Preserve document hierarchy rather than flattening everything permanently.",
        "Use metadata as part of retrieval design.",
        "Use hard filters for correctness constraints.",
        "Use ranking signals for preferences.",
        "Combine lexical and semantic retrieval for specialized terminology.",
        "Use domain routing when a knowledge base contains distinct domains.",
        "Preserve historical versions when historical questions matter.",
        "Provide fallback behavior when routing or temporal interpretation is uncertain.",
        "Evaluate retrieval separately across domains, versions, and time periods."
      ]
    }
  ],

  mathematicalIntuition: [
    {
      title: "Temporal Validity",
      intuition:
        "A document is relevant only if its validity interval contains the requested time.",
      formula:
        "Valid(d,t) = [validFrom(d) ≤ t] ∧ [validUntil(d) is null ∨ t ≤ validUntil(d)]",
      explanation:
        "This transforms time from simple metadata into an explicit retrieval constraint."
    },
    {
      title: "Combined Retrieval Score",
      intuition:
        "Several retrieval signals can contribute to candidate ranking.",
      formula:
        "Score(d) = w₁Ssemantic + w₂Slexical + w₃Stemporal + w₄Sauthority + w₅Sdomain",
      explanation:
        "Weights determine how strongly each signal contributes to the final ranking."
    },
    {
      title: "Recall@k",
      intuition:
        "Recall measures how much of the relevant evidence was found.",
      formula:
        "Recall@k = Relevant Retrieved@k / Total Relevant",
      explanation:
        "Higher recall is important when missing a relevant document could cause an incorrect answer."
    },
    {
      title: "Precision@k",
      intuition:
        "Precision measures how much of the retrieved set is useful.",
      formula:
        "Precision@k = Relevant Retrieved@k / k",
      explanation:
        "High precision reduces irrelevant context and can improve downstream generation."
    }
  ],

  codeExamples: [
    {
      title: "Temporal Filtering",
      language: "python",
      code: [
        "from datetime import date",
        "",
        "def is_valid(document, target_date):",
        "    start = date.fromisoformat(document['valid_from'])",
        "    end = document.get('valid_until')",
        "",
        "    if target_date < start:",
        "        return False",
        "",
        "    if end and target_date > date.fromisoformat(end):",
        "        return False",
        "",
        "    return True"
      ],
      explanation:
        "This simplified function checks whether a document is valid for a requested date."
    },
    {
      title: "Parent-Child Context Expansion",
      language: "python",
      code: [
        "def expand_parent_context(chunks, documents):",
        "    expanded = []",
        "",
        "    for chunk in chunks:",
        "        parent = documents.get(chunk['document_id'])",
        "",
        "        expanded.append({",
        "            'chunk': chunk['content'],",
        "            'heading': chunk.get('heading'),",
        "            'parent': parent",
        "        })",
        "",
        "    return expanded"
      ],
      explanation:
        "Retrieved child chunks can be expanded using their parent document metadata."
    },
    {
      title: "Domain Routing",
      language: "python",
      code: [
        "def route(query):",
        "    q = query.lower()",
        "",
        "    routes = {",
        "        'exam': 'examinations',",
        "        'attendance': 'academics',",
        "        'hostel': 'hostel',",
        "        'fee': 'finance'",
        "    }",
        "",
        "    for keyword, domain in routes.items():",
        "        if keyword in q:",
        "            return domain",
        "",
        "    return 'general'"
      ],
      explanation:
        "A simple rule-based router can be used as a starting point before implementing a learned router."
    }
  ],

  comparisons: [
    {
      title: "Flat RAG vs Hierarchical RAG",
      rows: [
        {
          aspect: "Representation",
          flat: "Independent chunks",
          hierarchical: "Chunks connected to parents and document structure"
        },
        {
          aspect: "Context",
          flat: "Usually retrieved chunk",
          hierarchical: "Chunk plus structural context"
        },
        {
          aspect: "Retrieval",
          flat: "Single-level",
          hierarchical: "Multi-level or parent-child"
        },
        {
          aspect: "Complexity",
          flat: "Lower",
          hierarchical: "Higher"
        },
        {
          aspect: "Best use",
          flat: "Simple knowledge bases",
          hierarchical: "Structured documents and large knowledge systems"
        }
      ]
    },
    {
      title: "Current RAG vs Temporal RAG",
      rows: [
        {
          aspect: "Time awareness",
          current: "Usually limited",
          temporal: "Explicit"
        },
        {
          aspect: "Historical queries",
          current: "Can retrieve wrong version",
          temporal: "Can target validity period"
        },
        {
          aspect: "Metadata",
          current: "Basic",
          temporal: "Includes validity and version information"
        }
      ]
    },
    {
      title: "General RAG vs Domain-Specific RAG",
      rows: [
        {
          aspect: "Knowledge",
          general: "Broad corpus",
          domainSpecific: "Specialized corpus"
        },
        {
          aspect: "Terminology",
          general: "General vocabulary",
          domainSpecific: "Domain terminology"
        },
        {
          aspect: "Retrieval",
          general: "Generic strategy",
          domainSpecific: "Domain-aware strategy"
        },
        {
          aspect: "Evaluation",
          general: "General queries",
          domainSpecific: "Domain-specific evaluation dataset"
        }
      ]
    }
  ],

  exercises: [
    "Explain why semantic similarity alone can retrieve the wrong historical document.",
    "Design metadata for a university policy knowledge base containing five years of regulations.",
    "Explain the difference between document creation date and validity date.",
    "Describe how parent-child retrieval preserves context.",
    "Design a hierarchy for a software documentation system.",
    "Explain why exact identifiers may require lexical retrieval.",
    "Describe when a hard metadata filter is preferable to a ranking signal.",
    "Explain how domain routing can improve retrieval quality.",
    "Design a fallback strategy for uncertain domain routing.",
    "Explain why historical versions should sometimes be preserved."
  ],

  codingExercises: [
    "Implement a temporal validity filter in Python.",
    "Create a TypeScript interface for versioned document metadata.",
    "Implement parent-child context expansion.",
    "Build a simple domain router using keyword rules.",
    "Implement a combined semantic and metadata ranking function.",
    "Create a retrieval function that filters documents by version.",
    "Build a small hierarchical document store.",
    "Calculate Precision@k and Recall@k for a specialized retrieval dataset."
  ],

  debuggingExercises: [
    "A current query retrieves a document from three years ago. Identify the likely metadata and retrieval problems.",
    "A historical query always retrieves the newest policy. Design a correction.",
    "A domain router sends examination queries to the finance collection. Explain how you would debug it.",
    "A child chunk is retrieved without enough context to answer the question. Design a parent-expansion solution.",
    "A domain-specific embedding model improves retrieval but makes all existing vectors incompatible. Explain the migration problem.",
    "A strict domain router causes many queries to return zero results. Design a fallback mechanism."
  ],

  architectureExercises: [
    "Design a temporal RAG architecture for university regulations.",
    "Design a hierarchical RAG architecture for software documentation.",
    "Design a domain-routed RAG system containing admissions, academics, examinations, hostel, and finance collections.",
    "Design a retrieval pipeline that combines metadata filtering, hybrid retrieval, reranking, and parent-child expansion.",
    "Design an evaluation system that measures retrieval quality separately for current and historical queries."
  ],

  scenarioExercises: [
    {
      scenario:
        "A student asks for an examination rule from the 2022–2023 academic year, but the knowledge base contains rules from 2021–2022, 2022–2023, 2023–2024, and 2024–2025.",
      tasks: [
        "Identify the temporal constraint.",
        "Define the required metadata.",
        "Design the retrieval filter.",
        "Explain how the final answer should identify the source version."
      ]
    },
    {
      scenario:
        "A developer asks how to configure authentication in software version 4.2.",
      tasks: [
        "Identify the domain.",
        "Identify the version constraint.",
        "Design the retrieval pipeline.",
        "Explain why current version 5.0 documentation should not automatically be used."
      ]
    },
    {
      scenario:
        "A company has separate knowledge bases for HR, engineering, finance, and security.",
      tasks: [
        "Design a domain router.",
        "Explain how routing errors should be handled.",
        "Design a fallback strategy.",
        "Define evaluation metrics for routing."
      ]
    }
  ],

  interviewQuestions: [
    "What is temporal RAG?",
    "Why is document validity different from document creation time?",
    "What is version-aware retrieval?",
    "What is hierarchical RAG?",
    "What is parent-child retrieval?",
    "Why can hierarchical retrieval improve context quality?",
    "What is domain-specific RAG?",
    "Why can general embeddings perform poorly in specialized domains?",
    "What is retrieval routing?",
    "What is the difference between a hard metadata filter and a ranking signal?",
    "Why should historical documents sometimes be preserved?",
    "How would you combine temporal and semantic retrieval?",
    "How would you design RAG for versioned software documentation?",
    "What are the risks of overly restrictive query routing?",
    "How can domain-specific retrieval be evaluated?",
    "Why is metadata part of the retrieval system?",
    "How can hybrid retrieval help specialized terminology?",
    "How would you design fallback retrieval?"
  ],

  commonMistakes: [
    "Treating timestamps as equivalent to validity periods.",
    "Always preferring the newest document even for historical questions.",
    "Deleting old versions that are still required for historical retrieval.",
    "Flattening hierarchical documents without preserving structure.",
    "Retrieving a tiny child chunk without restoring important parent context.",
    "Searching every domain for every query when routing would be appropriate.",
    "Trusting a router without measuring routing errors.",
    "Using only semantic similarity for exact domain identifiers.",
    "Treating all metadata as ranking signals when some metadata represents correctness constraints.",
    "Using domain-specific embeddings without planning vector migration.",
    "Ignoring version compatibility in software documentation.",
    "Failing to provide fallback behavior when routing confidence is low.",
    "Evaluating only aggregate retrieval quality instead of measuring domains and time periods separately."
  ],

  architectureChecklist: [
    "Define document validity periods.",
    "Store document version metadata.",
    "Preserve parent-child relationships.",
    "Store domain and collection identifiers.",
    "Separate correctness filters from ranking preferences.",
    "Implement temporal filtering where required.",
    "Implement hierarchical context expansion.",
    "Support domain routing where useful.",
    "Provide fallback retrieval.",
    "Evaluate current and historical queries separately.",
    "Evaluate each major domain independently.",
    "Track retrieval latency and candidate counts.",
    "Log selected filters and routing decisions.",
    "Preserve provenance for every retrieved evidence item."
  ],

  summary: [
    "Temporal RAG adds time and validity awareness to retrieval.",
    "A document's creation date is not necessarily the date when its information becomes valid.",
    "Version-aware retrieval prevents incompatible or outdated evidence from being used.",
    "Hierarchical RAG preserves relationships between documents, sections, and chunks.",
    "Parent-child retrieval combines precise retrieval with richer context.",
    "Domain-specific RAG adapts retrieval to specialized knowledge and terminology.",
    "Domain routing can reduce irrelevant retrieval across unrelated knowledge collections.",
    "Hard filters should enforce correctness constraints, while ranking signals should express preferences.",
    "Hybrid retrieval is often valuable for specialized terminology and exact identifiers.",
    "Production RAG systems can combine temporal filtering, domain routing, hybrid retrieval, reranking, and hierarchical expansion."
  ],

  keyTakeaways: [
    "Time can be part of the meaning of knowledge.",
    "Current information and historical information should not be treated identically.",
    "Hierarchy is valuable context.",
    "Metadata is a core retrieval primitive.",
    "Parent-child retrieval balances precision and context.",
    "Specialized domains often require specialized retrieval strategies.",
    "Routing improves efficiency but must have safe fallbacks.",
    "Use hard constraints for correctness and ranking signals for preferences.",
    "Evaluate retrieval quality across domains, versions, and time periods.",
    "Advanced RAG is not just vector search; it is controlled evidence selection."
  ],

  visualReferences: [
    {
      title: "Temporal RAG Retrieval Flow",
      type: "diagram",
      description:
        "Illustrate query date detection, temporal filtering, retrieval, reranking, and grounded generation."
    },
    {
      title: "Hierarchical RAG Structure",
      type: "tree",
      description:
        "Show the relationship between knowledge base, document, section, subsection, parent chunk, and child chunk."
    },
    {
      title: "Domain-Routed RAG Architecture",
      type: "architecture",
      description:
        "Show a query router sending questions to specialized knowledge collections before retrieval."
    },
    {
      title: "Advanced Specialized RAG Pipeline",
      type: "flowchart",
      description:
        "Show query understanding, temporal analysis, domain routing, metadata filtering, hybrid retrieval, reranking, hierarchy expansion, context construction, and grounded generation."
    }
  ]
};

export default lesson13;