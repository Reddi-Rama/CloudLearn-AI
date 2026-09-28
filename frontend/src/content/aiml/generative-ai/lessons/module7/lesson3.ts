const lesson3 = {
  id: "lesson3",
  moduleId: "module7",

  title: "Chunking Strategies",

  subtitle:
    "Break documents into meaningful retrieval units without destroying context, structure, or semantic relationships.",

  description:
    "Chunking determines how large documents are divided before embedding and indexing. This lesson explains fixed-size, token-based, overlap-based, semantic, structural, hierarchical, and parent-child chunking, together with the trade-offs between context, retrieval precision, storage, and latency.",

  difficulty: "Intermediate",

  estimatedTime: "35 minutes",

  learningObjectives: [
    "Understand why chunking is required in RAG.",
    "Understand what makes a chunk useful for retrieval.",
    "Explain fixed-size chunking.",
    "Explain token-based chunking.",
    "Understand chunk overlap.",
    "Understand semantic chunking.",
    "Understand structure-aware chunking.",
    "Understand hierarchical and parent-child chunking.",
    "Analyze chunk-size trade-offs.",
    "Evaluate chunk quality using retrieval-oriented metrics.",
    "Choose an appropriate chunking strategy for a real application."
  ],

  sections: [
    {
      id: "why-chunking",
      title: "1. Why Chunking Is Required",

      content: [
        "Documents can be much larger than the amount of information that should be retrieved for a single question.",

        "A complete 100-page document should rarely be embedded and retrieved as one enormous unit. Retrieval works better when the knowledge base is divided into smaller units that correspond to meaningful pieces of information.",

        "Chunking converts a processed document into retrieval units.",

        "Each chunk can then receive an embedding, metadata, and an identifier before being inserted into a vector or search index."
      ],

      diagram: [
        "Processed Document",
        "↓",
        "Chunking",
        "├── Chunk 1",
        "├── Chunk 2",
        "├── Chunk 3",
        "├── Chunk 4",
        "└── Chunk N",
        "↓",
        "Embedding",
        "↓",
        "Vector Index"
      ]
    },

    {
      id: "good-chunk",
      title: "2. What Makes a Good Chunk?",

      content: [
        "A good chunk should contain enough information to answer or support a question while avoiding unnecessary unrelated material.",

        "The ideal chunk is therefore not simply the smallest possible text fragment.",

        "A chunk should preserve enough semantic context for its embedding to represent the intended meaning."
      ],

      classificationTree: [
        "Good Chunk",
        "├── Semantically Coherent",
        "├── Enough Context",
        "├── Limited Noise",
        "├── Useful Metadata",
        "├── Stable Identity",
        "└── Appropriate Size"
      ],

      points: [
        "Contains a coherent idea.",
        "Does not arbitrarily cut important relationships.",
        "Contains enough surrounding context.",
        "Can be independently retrieved.",
        "Retains source metadata.",
        "Can be traced back to the original document."
      ]
    },

    {
      id: "fixed-size",
      title: "3. Fixed-Size Chunking",

      content: [
        "Fixed-size chunking divides text into units based on a predefined character or token length.",

        "It is simple, predictable, and inexpensive to implement.",

        "However, fixed-size boundaries do not understand meaning. A sentence or paragraph may be split in the middle."
      ],

      diagram: [
        "Document",
        "│",
        "├──── Chunk 1 ────┤",
        "├──── Chunk 2 ────┤",
        "├──── Chunk 3 ────┤",
        "└──── Chunk 4 ────┘"
      ],

      codeExamples: [
        {
          title: "Character-Based Chunking",
          language: "python",
          code: `def fixed_chunks(text: str, size: int):
    return [
        text[i:i + size]
        for i in range(0, len(text), size)
    ]


text = "This is an example document " * 20

chunks = fixed_chunks(text, 100)

for index, chunk in enumerate(chunks):
    print(index, len(chunk))`
        }
      ],

      advantages: [
        "Simple.",
        "Fast.",
        "Predictable.",
        "Easy to scale.",
        "Easy to benchmark."
      ],

      limitations: [
        "Can split sentences.",
        "Can split paragraphs.",
        "Does not understand semantic boundaries.",
        "May produce incomplete context."
      ]
    },

    {
      id: "token-chunking",
      title: "4. Token-Based Chunking",

      content: [
        "Token-based chunking uses model tokens instead of characters.",

        "This is useful because language models and embedding models operate with token limits rather than raw character counts.",

        "Token-aware chunking allows engineers to reason more directly about context windows and embedding limits."
      ],

      mathematicalIntuition: [
        "If a document contains N tokens and each chunk contains at most C tokens, then the approximate number of chunks is:",
        "Number of chunks ≈ ceil(N / C)"
      ],

      codeExamples: [
        {
          title: "Simple Token-Style Chunking",
          language: "python",
          code: `def token_chunks(tokens, chunk_size):
    chunks = []

    for i in range(0, len(tokens), chunk_size):
        chunks.append(
            tokens[i:i + chunk_size]
        )

    return chunks


tokens = "RAG systems retrieve useful information".split()

chunks = token_chunks(tokens, 3)

print(chunks)`
        }
      ]
    },

    {
      id: "overlap",
      title: "5. Chunk Overlap",

      content: [
        "Chunk overlap means that adjacent chunks share a portion of their content.",

        "Overlap reduces the probability that important context is lost exactly at a chunk boundary.",

        "However, excessive overlap increases storage, embedding cost, and duplicate retrieval results."
      ],

      diagram: [
        "Chunk 1",
        "[ A B C D E F ]",
        "        overlap",
        "          ↓",
        "Chunk 2",
        "      [ E F G H I J ]",
        "              ↓",
        "Chunk 3",
        "          [ I J K L M ]"
      ],

      mathematicalIntuition: [
        "If chunk size is C and overlap is O, the effective step size is:",
        "Step = C - O",
        "Therefore, increasing overlap decreases the distance between consecutive chunk starts."
      ],

      codeExamples: [
        {
          title: "Overlapping Chunks",
          language: "python",
          code: `def overlapping_chunks(tokens, size, overlap):
    step = size - overlap
    chunks = []

    for start in range(0, len(tokens), step):
        chunk = tokens[start:start + size]

        if not chunk:
            break

        chunks.append(chunk)

        if start + size >= len(tokens):
            break

    return chunks


tokens = list("ABCDEFGHIJKLMNO")

chunks = overlapping_chunks(
    tokens,
    size=5,
    overlap=2
)

print(chunks)`
        }
      ],

      comparisonTables: [
        {
          title: "Overlap Trade-Off",
          columns: [
            "Low Overlap",
            "High Overlap"
          ],
          rows: [
            [
              "Lower storage",
              "Higher storage"
            ],
            [
              "Lower embedding cost",
              "Higher embedding cost"
            ],
            [
              "Higher boundary risk",
              "Lower boundary risk"
            ],
            [
              "Fewer duplicate results",
              "More duplicate results"
            ]
          ]
        }
      ]
    },

    {
      id: "semantic",
      title: "6. Semantic Chunking",

      content: [
        "Semantic chunking attempts to place related ideas together rather than relying only on fixed length.",

        "The system can use sentence similarity, topic transitions, headings, or embedding-based signals to identify natural boundaries.",

        "Semantic chunking can improve coherence but is more computationally expensive and more complex than fixed-size chunking."
      ],

      diagram: [
        "Sentences",
        "↓",
        "Semantic Similarity",
        "↓",
        "Topic Boundaries",
        "↓",
        "Semantic Chunks"
      ],

      advantages: [
        "Better semantic coherence.",
        "Less arbitrary splitting.",
        "Useful for technical and narrative documents."
      ],

      limitations: [
        "More computation.",
        "More implementation complexity.",
        "Boundary decisions can depend on thresholds."
      ]
    },

    {
      id: "structural",
      title: "7. Structure-Aware Chunking",

      content: [
        "Structure-aware chunking uses the organization already present in the document.",

        "Examples include headings, sections, paragraphs, numbered procedures, tables, and document chapters.",

        "This strategy is particularly useful for manuals, university regulations, technical documentation, and policies."
      ],

      classificationTree: [
        "Document",
        "├── Chapter",
        "│   ├── Section",
        "│   │   ├── Paragraph",
        "│   │   └── Paragraph",
        "│   └── Section",
        "└── Appendix"
      ],

      example: {
        document: "University Examination Regulations",
        structure: [
          "1. Eligibility",
          "2. Attendance Requirements",
          "3. Examination Rules",
          "4. Grading",
          "5. Appeals"
        ],
        chunkingStrategy:
          "Create chunks around meaningful regulation sections while preserving section titles."
      }
    },

    {
      id: "hierarchical",
      title: "8. Hierarchical and Parent-Child Chunking",

      content: [
        "Some systems maintain multiple levels of representation.",

        "A small child chunk can be used for precise retrieval while a larger parent section can be supplied to the language model as additional context.",

        "This separates retrieval precision from generation context."
      ],

      diagram: [
        "Document",
        "↓",
        "Parent Section",
        "├── Child Chunk 1",
        "├── Child Chunk 2",
        "├── Child Chunk 3",
        "└── Child Chunk 4",
        "↓",
        "Retrieve Child",
        "↓",
        "Expand to Parent",
        "↓",
        "LLM Context"
      ],

      advantages: [
        "Precise retrieval.",
        "Better surrounding context.",
        "Useful for long technical documents.",
        "Supports hierarchical navigation."
      ]
    },

    {
      id: "chunk-size",
      title: "9. Chunk Size Trade-Off",

      content: [
        "Chunk size is one of the most important RAG design decisions.",

        "Very small chunks may provide precise matches but lack context.",

        "Very large chunks contain more context but may include unrelated information and consume more context-window space."
      ],

      comparisonTables: [
        {
          title: "Chunk Size Trade-Off",
          columns: [
            "Small Chunks",
            "Large Chunks"
          ],
          rows: [
            [
              "High precision",
              "More context"
            ],
            [
              "Less irrelevant text",
              "More irrelevant text"
            ],
            [
              "Potential context loss",
              "Potential retrieval dilution"
            ],
            [
              "More chunks",
              "Fewer chunks"
            ],
            [
              "More metadata records",
              "Fewer metadata records"
            ]
          ]
        }
      ],

      mathematicalIntuition: [
        "If the total document token count is N and chunk size is C:",
        "Chunks ≈ ceil(N / C)",
        "Smaller C increases the number of indexed units.",
        "Larger C decreases the number of units but increases the amount of information contained in each retrieval result."
      ]
    },

    {
      id: "retrieval-quality",
      title: "10. Chunking and Retrieval Quality",

      content: [
        "Chunking should ultimately be evaluated through retrieval quality rather than intuition alone.",

        "A chunking strategy that looks elegant may still produce poor search results.",

        "The correct approach is to create an evaluation dataset and compare strategies."
      ],

      formulas: [
        {
          name: "Recall@k",
          formula:
            "Recall@k = relevant retrieved items / total relevant items",
          intuition:
            "Measures how much of the relevant information was successfully retrieved."
        },
        {
          name: "Precision@k",
          formula:
            "Precision@k = relevant retrieved items / k",
          intuition:
            "Measures how much of the retrieved set is relevant."
        }
      ]
    },

    {
      id: "chunk-metadata",
      title: "11. Metadata Attached to Chunks",

      content: [
        "Every chunk should normally retain enough metadata to trace it back to its source.",

        "Without provenance metadata, a retrieved chunk can become difficult to explain or cite."
      ],

      codeExamples: [
        {
          title: "Chunk Representation",
          language: "typescript",
          code: `type Chunk = {
  id: string;
  documentId: string;
  text: string;
  chunkIndex: number;
  metadata: {
    title?: string;
    section?: string;
    page?: number;
    source?: string;
  };
};`
        }
      ]
    },

    {
      id: "failure-modes",
      title: "12. Chunking Failure Modes",

      points: [
        "Chunks are too small to contain useful context.",
        "Chunks are too large and contain unrelated information.",
        "Important sentences are split across boundaries.",
        "Headings are separated from their sections.",
        "Tables are broken apart incorrectly.",
        "Overlap is too large.",
        "Overlap is too small.",
        "Chunk metadata is lost.",
        "Parent-child relationships are lost.",
        "Chunking is selected without evaluating retrieval quality."
      ]
    },

    {
      id: "choosing-strategy",
      title: "13. Choosing a Chunking Strategy",

      comparisonTables: [
        {
          title: "Strategy Selection",
          columns: [
            "Strategy",
            "Useful When",
            "Main Risk"
          ],
          rows: [
            [
              "Fixed-size",
              "Simple general-purpose ingestion",
              "Semantic boundaries"
            ],
            [
              "Token-based",
              "Token-limited systems",
              "Still length-oriented"
            ],
            [
              "Overlap-based",
              "Boundary-sensitive content",
              "Duplicate content"
            ],
            [
              "Semantic",
              "Topic-rich documents",
              "Higher complexity"
            ],
            [
              "Structural",
              "Well-organized documents",
              "Depends on structure quality"
            ],
            [
              "Parent-child",
              "Large technical documents",
              "More complex retrieval logic"
            ]
          ]
        }
      ]
    },

    {
      id: "practical-example",
      title: "14. Practical University Policy Example",

      content: [
        "Consider a university regulations document containing sections for attendance, examinations, grading, and disciplinary procedures.",

        "A fixed-size strategy might split an attendance rule across two chunks.",

        "A structure-aware strategy can preserve the entire attendance section.",

        "A parent-child strategy could retrieve a precise rule while still allowing the application to supply the larger policy section as context."
      ],

      architecture: [
        "University Policy PDF",
        "↓",
        "Document Processing",
        "↓",
        "Section Detection",
        "↓",
        "Parent Sections",
        "↓",
        "Child Chunks",
        "↓",
        "Embeddings",
        "↓",
        "Vector Search"
      ]
    }
  ],

  architecture: {
    title: "Chunking Architecture",

    layers: [
      "Processed Document",
      "Structure Detection",
      "Chunking Strategy",
      "Chunk Boundary Selection",
      "Overlap Handling",
      "Metadata Attachment",
      "Chunk Validation",
      "Embedding Generation",
      "Vector Index"
    ]
  },

  mathIntuition: [
    {
      concept: "Chunk Count",
      formula: "Chunks ≈ ceil(N / C)",
      explanation:
        "The number of chunks grows as chunk size decreases."
    },
    {
      concept: "Overlap Step",
      formula: "Step = C - O",
      explanation:
        "Overlap controls how far the next chunk starts from the previous chunk."
    },
    {
      concept: "Precision@k",
      formula: "Relevant Retrieved / k",
      explanation:
        "Measures the proportion of retrieved results that are relevant."
    },
    {
      concept: "Recall@k",
      formula: "Relevant Retrieved / Total Relevant",
      explanation:
        "Measures how much relevant information was retrieved."
    }
  ],

  codeExamples: [
    {
      title: "Simple Structure-Aware Chunking",
      language: "python",
      code: `def section_chunks(sections):
    chunks = []

    for index, section in enumerate(sections):
        chunks.append({
            "id": f"section-{index}",
            "text": section["title"] + "\\n" + section["content"],
            "metadata": {
                "section": section["title"],
                "index": index
            }
        })

    return chunks


sections = [
    {
        "title": "Attendance",
        "content": "Students must satisfy attendance requirements."
    },
    {
        "title": "Examinations",
        "content": "Students must follow examination regulations."
    }
]

chunks = section_chunks(sections)

for chunk in chunks:
    print(chunk)`
    }
  ],

  exercises: [
    "Explain why chunking is necessary in RAG.",
    "What makes a chunk useful for retrieval?",
    "Compare fixed-size and semantic chunking.",
    "Explain why overlap is useful.",
    "What happens when overlap becomes too large?",
    "Explain structure-aware chunking.",
    "Explain parent-child chunking.",
    "Describe the trade-off between small and large chunks.",
    "Explain Precision@k and Recall@k.",
    "Design a chunking strategy for a university policy document."
  ],

  codingExercises: [
    "Implement fixed-size character chunking.",
    "Implement token-style chunking.",
    "Implement overlapping chunking.",
    "Create a chunk metadata structure.",
    "Implement section-based chunking.",
    "Create a duplicate-safe chunk ID.",
    "Build a simple chunking benchmark comparing two chunk sizes."
  ],

  architectureExercises: [
    "Design a chunking pipeline for technical documentation.",
    "Design a parent-child chunking system.",
    "Design a chunk metadata schema.",
    "Design an evaluation experiment comparing fixed and semantic chunking.",
    "Design a strategy for chunking tables and structured policies."
  ],

  commonMistakes: [
    "Choosing chunk size arbitrarily.",
    "Assuming smaller chunks are always better.",
    "Assuming larger chunks are always better.",
    "Using excessive overlap.",
    "Ignoring document structure.",
    "Separating headings from their content.",
    "Breaking tables without preserving relationships.",
    "Dropping metadata.",
    "Never evaluating retrieval quality."
  ],

  interviewQuestions: [
    "Why is chunking important in RAG?",
    "What is fixed-size chunking?",
    "What is semantic chunking?",
    "Why use chunk overlap?",
    "What is structure-aware chunking?",
    "What is parent-child chunking?",
    "How does chunk size affect retrieval?",
    "How would you evaluate a chunking strategy?",
    "What is Precision@k?",
    "What is Recall@k?"
  ],

  summary: [
    "Chunking converts documents into retrieval units.",
    "Good chunks preserve useful semantic context.",
    "Fixed-size chunking is simple but does not understand meaning.",
    "Token-based chunking aligns chunk sizes with model token limits.",
    "Overlap reduces boundary information loss.",
    "Semantic chunking attempts to preserve topic coherence.",
    "Structure-aware chunking uses headings and document organization.",
    "Parent-child chunking separates precise retrieval from broader context.",
    "Chunk size creates a trade-off between precision, context, storage, and cost.",
    "Chunking should be evaluated using retrieval metrics."
  ],

  keyTakeaways: [
    "Chunking is a retrieval design decision, not merely a preprocessing step.",
    "The best chunk is a useful semantic retrieval unit.",
    "Document structure should be preserved whenever it carries meaning.",
    "Overlap can help but should not be excessive.",
    "Chunking strategies should be evaluated empirically."
  ],

  visualReferences: [
    {
      title: "Chunking Pipeline",
      type: "diagram",
      description:
        "Document → chunking → metadata → embeddings → vector index."
    },
    {
      title: "Chunk Overlap",
      type: "diagram",
      description:
        "Adjacent chunks share a controlled region of context."
    },
    {
      title: "Parent-Child Retrieval",
      type: "architecture",
      description:
        "Small child chunks provide precise retrieval while parent sections provide broader context."
    },
    {
      title: "Chunk Size Trade-Off",
      type: "comparison",
      description:
        "Small chunks provide precision while large chunks provide more context."
    }
  ]
};

export default lesson3;