const lesson2 = {
  id: "lesson2",
  moduleId: "module7",

  title: "Document Processing",

  subtitle:
    "Transform raw knowledge sources into clean, structured, metadata-rich information ready for chunking, indexing, retrieval, and grounded generation.",

  description:
    "Document processing is the ingestion foundation of a RAG system. This lesson explains how raw PDFs, documents, web pages, structured data, scanned files, and other knowledge sources are parsed, normalized, enriched with metadata, validated, deduplicated, and transformed into reliable internal representations.",

  difficulty: "Intermediate",

  estimatedTime: "35 minutes",

  learningObjectives: [
    "Understand why document processing is required before retrieval.",
    "Identify the major types of knowledge sources used in RAG systems.",
    "Understand the difference between parsing, extraction, normalization, and enrichment.",
    "Understand how PDF, text, web, structured, and scanned documents require different processing strategies.",
    "Understand OCR and when it is required.",
    "Preserve useful document structure such as headings, sections, tables, lists, and page information.",
    "Design useful document metadata.",
    "Understand document quality validation.",
    "Understand duplicate detection and document versioning.",
    "Design an ingestion pipeline that prepares documents for chunking and embedding."
  ],

  sections: [
    {
      id: "why-processing",
      title: "1. Why Document Processing Matters",

      content: [
        "A RAG system cannot assume that every knowledge source is already clean text.",

        "Real-world knowledge exists in many formats: PDFs, DOCX files, Markdown files, web pages, spreadsheets, JSON records, database rows, scanned documents, images, manuals, policies, research papers, and internal knowledge bases.",

        "These sources contain both useful information and presentation or storage artifacts.",

        "For example, a PDF may contain headers, footers, page numbers, columns, tables, images, captions, and decorative elements. A web page may contain navigation menus, advertisements, scripts, cookie notices, and unrelated content.",

        "Document processing converts these heterogeneous sources into a representation that downstream RAG components can reliably consume.",

        "If document processing is poor, later stages such as chunking, embedding, retrieval, and generation can produce technically valid but semantically poor results."
      ],

      classificationTree: [
        "Raw Knowledge",
        "├── Human Documents",
        "│   ├── PDF",
        "│   ├── DOCX",
        "│   ├── TXT",
        "│   └── Markdown",
        "├── Web Sources",
        "│   ├── Web Pages",
        "│   ├── Documentation",
        "│   └── Knowledge Portals",
        "├── Structured Sources",
        "│   ├── CSV",
        "│   ├── JSON",
        "│   └── Database Records",
        "├── Visual Sources",
        "│   ├── Scanned Documents",
        "│   ├── Images",
        "│   └── Diagrams",
        "└── Mixed Sources",
        "    ├── Tables",
        "    ├── Reports",
        "    └── Technical Manuals"
      ]
    },

    {
      id: "knowledge-sources",
      title: "2. Types of Knowledge Sources",

      subsections: [
        {
          title: "PDF Documents",
          points: [
            "May contain selectable text or scanned images.",
            "May contain multiple columns.",
            "May contain headers and footers.",
            "May contain tables and figures.",
            "Page information can be useful for citations."
          ]
        },

        {
          title: "DOCX Documents",
          points: [
            "Usually contain structured paragraphs.",
            "Can contain headings.",
            "Can contain tables.",
            "Can contain lists.",
            "Can contain embedded images."
          ]
        },

        {
          title: "Web Pages",
          points: [
            "Contain useful text mixed with navigation and interface elements.",
            "May change over time.",
            "Require source URL and retrieval-date metadata.",
            "Can contain dynamically generated content."
          ]
        },

        {
          title: "Structured Data",
          points: [
            "CSV files contain rows and columns.",
            "JSON represents nested structures.",
            "Database records already have explicit fields.",
            "Structured information should not automatically be flattened into plain text."
          ]
        },

        {
          title: "Scanned Documents",
          points: [
            "May contain no machine-readable text layer.",
            "Require OCR to extract text.",
            "OCR output should be validated because recognition errors can change meaning."
          ]
        }
      ],

      comparisonTables: [
        {
          title: "Knowledge Source Comparison",
          columns: [
            "Source",
            "Main Challenge",
            "Useful Metadata"
          ],
          rows: [
            [
              "PDF",
              "Layout, tables, columns, scans",
              "Page, title, version"
            ],
            [
              "DOCX",
              "Structure and embedded content",
              "Heading, author, date"
            ],
            [
              "Web",
              "Navigation and changing content",
              "URL, timestamp, title"
            ],
            [
              "CSV",
              "Rows and schema",
              "Dataset, row ID"
            ],
            [
              "JSON",
              "Nested structure",
              "Record ID, fields"
            ],
            [
              "Scanned document",
              "OCR accuracy",
              "Page, OCR confidence"
            ]
          ]
        }
      ]
    },

    {
      id: "processing-pipeline",
      title: "3. Complete Document Processing Pipeline",

      diagram: [
        "Raw Knowledge Source",
        "↓",
        "Source Detection",
        "↓",
        "File / Request Validation",
        "↓",
        "Format-Specific Parser",
        "↓",
        "Text + Structure Extraction",
        "↓",
        "OCR / Table Extraction When Required",
        "↓",
        "Normalization",
        "↓",
        "Metadata Extraction",
        "↓",
        "Quality Validation",
        "↓",
        "Deduplication",
        "↓",
        "Version Validation",
        "↓",
        "Clean Structured Document",
        "↓",
        "Chunking",
        "↓",
        "Embedding Generation",
        "↓",
        "Index Storage"
      ],

      content: [
        "Document processing should be treated as a pipeline rather than a single cleaning function.",

        "Each stage has a specific responsibility. Separating responsibilities makes the ingestion system easier to debug and evaluate."
      ],

      subsections: [
        {
          title: "Stage 1 — Source Detection",
          points: [
            "Identify the source type.",
            "Determine the correct parser.",
            "Record the source identity.",
            "Validate file size.",
            "Validate supported formats."
          ]
        },

        {
          title: "Stage 2 — Parsing",
          points: [
            "Extract machine-readable content.",
            "Preserve useful document structure.",
            "Extract headings and paragraphs.",
            "Extract tables where possible.",
            "Preserve page information when available."
          ]
        },

        {
          title: "Stage 3 — OCR",
          points: [
            "Detect scanned pages.",
            "Run OCR when a usable text layer is absent.",
            "Preserve page boundaries.",
            "Validate OCR output."
          ]
        },

        {
          title: "Stage 4 — Normalization",
          points: [
            "Normalize line endings.",
            "Reduce unnecessary whitespace.",
            "Remove obvious extraction noise.",
            "Normalize encoding.",
            "Preserve meaningful punctuation."
          ]
        },

        {
          title: "Stage 5 — Metadata Extraction",
          points: [
            "Assign document ID.",
            "Record source.",
            "Record title.",
            "Record author where available.",
            "Record date and version.",
            "Record page number.",
            "Record category or department.",
            "Preserve access permissions."
          ]
        },

        {
          title: "Stage 6 — Quality Validation",
          points: [
            "Check whether text exists.",
            "Check text length.",
            "Detect corrupted characters.",
            "Detect excessive duplication.",
            "Check missing pages.",
            "Validate extracted tables.",
            "Check source version."
          ]
        }
      ]
    },

    {
      id: "parsing",
      title: "4. Parsing",

      content: [
        "Parsing converts a source format into machine-readable information.",

        "For plain text, parsing is relatively simple because the source already consists of characters. For PDF and DOCX documents, the parser must reconstruct useful logical content from a richer representation.",

        "A good parser should not merely extract characters. It should preserve information that will be useful for downstream retrieval."
      ],

      diagram: [
        "Source File",
        "↓",
        "Format Detection",
        "↓",
        "Parser",
        "↓",
        "Logical Content",
        "├── Paragraphs",
        "├── Headings",
        "├── Tables",
        "├── Lists",
        "├── Images",
        "└── Page Information"
      ],

      codeExamples: [
        {
          title: "Simple Text Document Loader",
          language: "python",
          code: `from pathlib import Path

path = Path("knowledge.txt")

text = path.read_text(encoding="utf-8")

print(text[:500])`
        }
      ]
    },

    {
      id: "pdf-processing",
      title: "5. PDF Processing",

      content: [
        "PDF is one of the most common sources for RAG systems, but extracting information from PDF files can be difficult.",

        "The visual appearance of a PDF does not necessarily describe the logical order of the underlying content.",

        "A two-column research paper may be extracted in an incorrect reading order. Headers may be repeated on every page. Tables may be represented as disconnected text fragments.",

        "Therefore, PDF processing should be treated as an extraction problem rather than a simple text-reading problem."
      ],

      points: [
        "Detect whether the PDF contains a text layer.",
        "Extract text while preserving page boundaries.",
        "Identify repeated headers and footers.",
        "Preserve headings where possible.",
        "Extract tables separately when necessary.",
        "Use OCR for scanned pages.",
        "Validate extraction quality."
      ],

      commonFailureModes: [
        "Incorrect reading order",
        "Missing text",
        "Repeated headers",
        "Repeated footers",
        "Broken tables",
        "Lost page boundaries",
        "OCR errors",
        "Corrupted characters"
      ]
    },

    {
      id: "ocr",
      title: "6. OCR and Scanned Documents",

      content: [
        "OCR stands for Optical Character Recognition.",

        "OCR converts visual characters in an image into machine-readable text.",

        "OCR becomes important when a scanned document contains no usable text layer.",

        "OCR should not be treated as perfect extraction. Recognition errors can change numbers, names, formulas, punctuation, and technical terminology."
      ],

      diagram: [
        "Scanned Page",
        "↓",
        "Image",
        "↓",
        "OCR Engine",
        "↓",
        "Recognized Text",
        "↓",
        "Validation",
        "↓",
        "Normalized Document"
      ],

      examples: [
        {
          input: "A scanned university regulation PDF",
          process: "OCR extracts the visible text from each page",
          output: "Machine-readable text with page metadata"
        },
        {
          input: "Scanned table",
          process: "OCR + table extraction",
          output: "Rows and columns reconstructed for downstream processing"
        }
      ],

      contentAfterProcess: [
        "OCR output should be inspected for missing characters, incorrect numbers, broken words, and unexpected formatting."
      ]
    },

    {
      id: "normalization",
      title: "7. Normalization and Cleaning",

      content: [
        "Normalization makes extracted content more consistent.",

        "Cleaning should be conservative. Removing too much information can damage retrieval quality just as much as leaving too much noise.",

        "The goal is not to produce the shortest possible text. The goal is to produce useful, semantically faithful text."
      ],

      examples: [
        {
          before:
            "This   is a document.\\n\\n\\n\\nSection   1",
          after:
            "This is a document.\\n\\nSection 1"
        }
      ],

      codeExamples: [
        {
          title: "Basic Text Normalization",
          language: "python",
          code: `import re

def normalize_text(text: str) -> str:
    text = text.replace("\\r\\n", "\\n")
    text = text.replace("\\r", "\\n")

    text = re.sub(r"[ \\t]+", " ", text)
    text = re.sub(r"\\n{3,}", "\\n\\n", text)

    return text.strip()


sample = """
This   is   a document.


With unnecessary spacing.
"""

print(normalize_text(sample))`
        }
      ],

      commonMistakes: [
        "Removing punctuation blindly.",
        "Removing all line breaks.",
        "Deleting headings.",
        "Deleting numbers.",
        "Removing table information.",
        "Over-cleaning meaningful content."
      ]
    },

    {
      id: "headers-footers",
      title: "8. Headers, Footers and Repeated Noise",

      content: [
        "Documents often contain repeated information such as page headers, footers, copyright notices, or navigation text.",

        "Repeated content can appear in many chunks and may distort retrieval.",

        "However, automatic removal must be conservative because a repeated string may sometimes be meaningful."
      ],

      diagram: [
        "Page 1 → University Policy → Content A → Page Number",
        "Page 2 → University Policy → Content B → Page Number",
        "Page 3 → University Policy → Content C → Page Number"
      ],

      strategy: [
        "Detect repeated text across many pages.",
        "Measure frequency.",
        "Compare location and content.",
        "Determine whether the repeated content is structural noise.",
        "Remove only when confidence is high."
      ]
    },

    {
      id: "structure",
      title: "9. Preserving Document Structure",

      content: [
        "Structure often contains meaning.",

        "A heading tells us what the following paragraphs are about. A numbered list can represent a procedure. A table can encode relationships between fields. Page numbers can support citations.",

        "Flattening every document into a single text string can therefore destroy useful information."
      ],

      classificationTree: [
        "Document Structure",
        "├── Title",
        "├── Sections",
        "│   ├── Heading",
        "│   └── Subheading",
        "├── Paragraphs",
        "├── Lists",
        "│   ├── Ordered",
        "│   └── Unordered",
        "├── Tables",
        "├── Figures",
        "└── Page Boundaries"
      ],

      comparisonTables: [
        {
          title: "Flat vs Structure-Aware Processing",
          columns: [
            "Approach",
            "Advantage",
            "Risk"
          ],
          rows: [
            [
              "Plain text extraction",
              "Simple",
              "May lose document structure"
            ],
            [
              "Structure-aware extraction",
              "Preserves headings and relationships",
              "More complex"
            ],
            [
              "Metadata-rich representation",
              "Supports filtering and provenance",
              "Requires consistent schema"
            ]
          ]
        }
      ]
    },

    {
      id: "tables",
      title: "10. Tables and Structured Information",

      content: [
        "Tables are particularly important because their meaning depends on relationships between rows and columns.",

        "Simply concatenating table cells into a paragraph can destroy those relationships.",

        "For retrieval systems, the processing strategy should depend on the table's purpose."
      ],

      examples: [
        {
          input: "Course table",
          structure:
            "Course ID | Course Name | Credits | Semester",
          retrievalMeaning:
            "Each row represents a course record."
        },
        {
          input: "Policy table",
          structure:
            "Role | Permission | Condition",
          retrievalMeaning:
            "The relationship between role, permission, and condition matters."
        }
      ],

      strategies: [
        "Preserve the table as structured data.",
        "Generate row-level textual representations.",
        "Attach table metadata.",
        "Preserve source page information.",
        "Avoid destroying column relationships."
      ]
    },

    {
      id: "metadata",
      title: "11. Metadata",

      content: [
        "Metadata describes the document or the specific piece of content being indexed.",

        "Metadata becomes especially important in production RAG because retrieval may need to be constrained by source, date, department, document type, language, version, or access permissions.",

        "Metadata also supports provenance and citation generation."
      ],

      metadataCategories: [
        {
          category: "Identity",
          fields: [
            "documentId",
            "sourceId",
            "fileName",
            "checksum"
          ]
        },
        {
          category: "Content",
          fields: [
            "title",
            "author",
            "language",
            "documentType"
          ]
        },
        {
          category: "Location",
          fields: [
            "page",
            "section",
            "paragraph"
          ]
        },
        {
          category: "Lifecycle",
          fields: [
            "version",
            "createdAt",
            "updatedAt",
            "indexedAt"
          ]
        },
        {
          category: "Access",
          fields: [
            "department",
            "tenantId",
            "accessLevel",
            "permissions"
          ]
        }
      ],

      codeExamples: [
        {
          title: "Document Record With Metadata",
          language: "python",
          code: `document = {
    "id": "policy-001",
    "text": "Employees must follow the security policy.",
    "metadata": {
        "source": "security-policy.pdf",
        "page": 4,
        "department": "security",
        "version": "2026.1",
        "language": "en"
    }
}

print(document["metadata"]["source"])`
        }
      ]
    },

    {
      id: "internal-representation",
      title: "12. Internal Document Representation",

      content: [
        "After extraction and normalization, the application should convert the source into a consistent internal representation.",

        "A standard representation makes later processing stages independent from the original file format."
      ],

      codeExamples: [
        {
          title: "Normalized Document Object",
          language: "typescript",
          code: `type DocumentRecord = {
  id: string;
  text: string;
  source: string;
  title?: string;
  metadata: Record<string, string>;
  version?: string;
  createdAt: string;
  checksum?: string;
};`
        }
      ],

      architecture: [
        "PDF Parser ─┐",
        "DOCX Parser ├──> DocumentRecord",
        "Web Loader ─┤",
        "JSON Loader ┘"
      ]
    },

    {
      id: "quality",
      title: "13. Document Quality Validation",

      content: [
        "A successful parser call does not necessarily mean that the document was processed correctly.",

        "Quality validation should happen before chunking and indexing.",

        "The purpose of validation is to detect ingestion failures before they become retrieval failures."
      ],

      qualityChecks: [
        "Is the extracted text empty?",
        "Is the extracted text suspiciously short?",
        "Are pages missing?",
        "Are pages duplicated?",
        "Are headers or footers repeated excessively?",
        "Are characters corrupted?",
        "Are tables readable?",
        "Is the detected language correct?",
        "Is important content missing?",
        "Does the source version match the indexed version?",
        "Does the document have a stable identity?"
      ],

      codeExamples: [
        {
          title: "Simple Document Quality Check",
          language: "python",
          code: `def validate_document(text: str) -> list[str]:
    errors = []

    if not text.strip():
        errors.append("Document contains no text.")

    if len(text.strip()) < 100:
        errors.append("Document may be suspiciously short.")

    replacement_count = text.count("\\ufffd")

    if replacement_count > 0:
        errors.append("Document contains replacement characters.")

    return errors


errors = validate_document("Example document content")

for error in errors:
    print(error)`
        }
      ]
    },

    {
      id: "deduplication",
      title: "14. Deduplication",

      content: [
        "Duplicate documents can enter a knowledge base through repeated uploads, mirrored sources, backups, or multiple versions of the same file.",

        "Duplicates can consume storage and may cause repeated or redundant retrieval results.",

        "A stable document identifier and content checksum can help detect exact duplicates."
      ],

      mathematicalIntuition: [
        "For a document D, a checksum can be represented conceptually as:",
        "checksum = H(D)",
        "where H is a deterministic hash function.",
        "If two documents have identical normalized content, their checksums can be compared to detect exact duplication."
      ],

      codeExamples: [
        {
          title: "Document Checksum",
          language: "python",
          code: `import hashlib

def document_checksum(text: str) -> str:
    return hashlib.sha256(
        text.encode("utf-8")
    ).hexdigest()

text = "University policy content"

print(document_checksum(text))`
        }
      ]
    },

    {
      id: "versioning",
      title: "15. Document Versions and Freshness",

      content: [
        "Knowledge changes over time.",

        "A policy document may be updated. A product manual may receive a new edition. A web page may change after indexing.",

        "A RAG system therefore needs a strategy for identifying current and outdated content."
      ],

      versionStrategies: [
        "Store explicit document versions.",
        "Store update timestamps.",
        "Use source checksums.",
        "Track ingestion timestamps.",
        "Remove or deactivate outdated versions when appropriate.",
        "Preserve historical versions when the application requires them."
      ],

      diagram: [
        "Version 1",
        "↓",
        "Indexed",
        "↓",
        "Source Updated",
        "↓",
        "Version 2",
        "↓",
        "Re-process",
        "↓",
        "Re-index",
        "↓",
        "Current Knowledge Base"
      ]
    },

    {
      id: "access-control",
      title: "16. Access-Control Metadata",

      content: [
        "Document processing is also where access-control information can become attached to knowledge records.",

        "If two users have different permissions, the retrieval layer may need to filter documents before returning them.",

        "Therefore, permissions should not be treated as an afterthought."
      ],

      examples: [
        {
          user: "Student",
          documentAccess: "Public course material"
        },
        {
          user: "Faculty",
          documentAccess: "Faculty-only policy"
        },
        {
          user: "Administrator",
          documentAccess: "Administrative records"
        }
      ],

      securityPrinciples: [
        "Preserve authorization metadata during ingestion.",
        "Do not assume retrieval results are safe merely because the vector search succeeded.",
        "Apply authorization-aware filtering before exposing protected content.",
        "Keep tenant and access metadata attached to indexed records."
      ]
    },

    {
      id: "failure-modes",
      title: "17. Document Processing Failure Modes",

      points: [
        "Scanned PDFs produce no usable text because OCR was not applied.",
        "Repeated headers pollute every chunk.",
        "Tables are extracted in the wrong order.",
        "Encoding errors corrupt characters.",
        "Page boundaries are lost.",
        "Important metadata is discarded.",
        "Duplicate documents enter the knowledge base.",
        "Old document versions remain searchable.",
        "Access-control information is not preserved.",
        "Cleaning removes meaningful content.",
        "OCR introduces incorrect characters.",
        "Web extraction captures navigation instead of knowledge.",
        "Structured data is flattened unnecessarily."
      ],

      comparisonTables: [
        {
          title: "Failure → Effect → Detection",
          columns: [
            "Failure",
            "Possible Effect",
            "Detection"
          ],
          rows: [
            [
              "Missing OCR",
              "No searchable content",
              "Very low extracted text length"
            ],
            [
              "Broken table extraction",
              "Incorrect relationships",
              "Structural validation"
            ],
            [
              "Repeated headers",
              "Retrieval noise",
              "Frequency analysis"
            ],
            [
              "Duplicate document",
              "Redundant results",
              "Checksum comparison"
            ],
            [
              "Old version",
              "Outdated answers",
              "Version metadata"
            ]
          ]
        }
      ]
    },

    {
      id: "math-intuition",
      title: "18. Mathematical Intuition",

      content: [
        "Document processing is not primarily a mathematical stage, but several simple quantitative ideas help engineers reason about quality."
      ],

      formulas: [
        {
          name: "Document Length",
          formula: "L = number of tokens or characters in the processed document",
          intuition:
            "A sudden reduction in document length may indicate extraction or processing failure."
        },
        {
          name: "Duplicate Ratio",
          formula: "Duplicate Ratio = duplicate documents / total documents",
          intuition:
            "A high duplicate ratio indicates ingestion quality problems."
        },
        {
          name: "Extraction Coverage",
          formula: "Coverage = extracted content / expected content",
          intuition:
            "Low coverage may indicate missing pages, OCR failures, or parser problems."
        },
        {
          name: "Checksum",
          formula: "c = H(D)",
          intuition:
            "A deterministic hash can provide a compact identity for exact content comparison."
        }
      ]
    },

    {
      id: "rag-connection",
      title: "19. How Document Processing Connects to RAG",

      diagram: [
        "Knowledge Source",
        "↓",
        "Document Processing",
        "↓",
        "Clean Structured Content",
        "↓",
        "Chunking",
        "↓",
        "Embeddings",
        "↓",
        "Vector / Search Index",
        "↓",
        "Retrieval",
        "↓",
        "Retrieved Context",
        "↓",
        "LLM",
        "↓",
        "Grounded Answer"
      ],

      content: [
        "Document processing is therefore the foundation of the ingestion side of RAG.",

        "If the source is processed incorrectly, later stages may appear technically correct while still producing poor retrieval results.",

        "A high-quality retriever cannot recover information that was lost during ingestion."
      ],

      contentAfterProcess: [
        "This creates an important engineering principle: retrieval quality depends not only on the retrieval algorithm but also on the quality of the knowledge representation created during ingestion."
      ]
    }
  ],

  architecture: {
    title: "Production Document Ingestion Architecture",

    layers: [
      "Source Connectors",
      "File Validation",
      "Format-Specific Parsers",
      "OCR / Table Extraction",
      "Normalization",
      "Metadata Extraction",
      "Quality Validation",
      "Deduplication",
      "Version Management",
      "Access-Control Metadata",
      "Chunking",
      "Embedding Generation",
      "Index Storage"
    ],

    flow: [
      "Source",
      "→",
      "Parser",
      "→",
      "Normalized Document",
      "→",
      "Metadata",
      "→",
      "Validation",
      "→",
      "Chunking",
      "→",
      "Embedding",
      "→",
      "Index"
    ]
  },

  mathIntuition: [
    {
      concept: "Document Length",
      explanation:
        "Processed length can be used as a basic signal for detecting extraction failures."
    },
    {
      concept: "Checksum",
      explanation:
        "Hashing provides a deterministic representation useful for exact duplicate detection."
    },
    {
      concept: "Coverage",
      explanation:
        "Comparing expected and extracted content provides a simple way to reason about extraction completeness."
    }
  ],

  codeExamples: [
    {
      title: "Complete Mini Ingestion Pipeline",
      language: "python",
      code: `from pathlib import Path
import hashlib
import re


def normalize_text(text: str) -> str:
    text = text.replace("\\r\\n", "\\n")
    text = text.replace("\\r", "\\n")
    text = re.sub(r"[ \\t]+", " ", text)
    text = re.sub(r"\\n{3,}", "\\n\\n", text)
    return text.strip()


def checksum(text: str) -> str:
    return hashlib.sha256(
        text.encode("utf-8")
    ).hexdigest()


def process_document(path: str):
    raw_text = Path(path).read_text(
        encoding="utf-8"
    )

    clean_text = normalize_text(raw_text)

    return {
        "id": checksum(clean_text),
        "source": path,
        "text": clean_text,
        "metadata": {
            "fileName": Path(path).name
        }
    }


document = process_document("knowledge.txt")

print(document["id"])
print(document["metadata"])
print(document["text"][:300])`
    }
  ],

  exercises: [
    "Explain why raw PDFs cannot simply be treated as clean text.",
    "Describe the complete document-processing pipeline.",
    "Explain the difference between parsing and normalization.",
    "Why is OCR required for some documents?",
    "Why should document structure sometimes be preserved?",
    "List five types of metadata useful in a RAG system.",
    "Explain why aggressive cleaning can damage retrieval.",
    "Explain how duplicate documents can be detected.",
    "Explain why document versioning matters.",
    "Design a document-processing pipeline for university regulations."
  ],

  codingExercises: [
    "Write a Python text-normalization function.",
    "Create a DocumentRecord structure.",
    "Build a directory loader that reads all .txt files.",
    "Add metadata containing filename and document ID.",
    "Generate a SHA-256 checksum for normalized document content.",
    "Detect empty or suspiciously short documents.",
    "Create a duplicate-detection dictionary using checksums.",
    "Add document version metadata.",
    "Build a simple ingestion pipeline combining loading, normalization, validation, and metadata extraction."
  ],

  architectureExercises: [
    "Design a RAG ingestion architecture for university regulations.",
    "Design a pipeline capable of processing PDF, DOCX, and TXT files.",
    "Design an OCR branch for scanned documents.",
    "Design a document version-management strategy.",
    "Design metadata fields required for department-level access control.",
    "Explain where quality validation should occur and why."
  ],

  comparisonTables: [
    {
      title: "Parsing vs Normalization vs Enrichment",
      columns: [
        "Stage",
        "Purpose",
        "Example"
      ],
      rows: [
        [
          "Parsing",
          "Extract information",
          "PDF → text"
        ],
        [
          "Normalization",
          "Reduce extraction noise",
          "Whitespace cleanup"
        ],
        [
          "Metadata enrichment",
          "Attach useful context",
          "Page, source, version"
        ],
        [
          "Validation",
          "Detect processing problems",
          "Empty-text detection"
        ]
      ]
    },
    {
      title: "Source Type vs Processing Strategy",
      columns: [
        "Source",
        "Primary Processing",
        "Important Concern"
      ],
      rows: [
        [
          "TXT",
          "Direct loading",
          "Encoding"
        ],
        [
          "PDF",
          "PDF parser",
          "Layout"
        ],
        [
          "Scanned PDF",
          "OCR",
          "Recognition accuracy"
        ],
        [
          "DOCX",
          "Structured parser",
          "Document structure"
        ],
        [
          "Web",
          "HTML extraction",
          "Navigation noise"
        ],
        [
          "CSV",
          "Schema-aware loading",
          "Row/column relationships"
        ],
        [
          "JSON",
          "Structured parsing",
          "Nested relationships"
        ]
      ]
    }
  ],

  commonMistakes: [
    "Treating extracted text as automatically clean.",
    "Using the same parser strategy for every file type.",
    "Skipping OCR detection.",
    "Removing headings and structure unnecessarily.",
    "Ignoring tables.",
    "Ignoring metadata.",
    "Skipping quality validation.",
    "Indexing duplicate documents.",
    "Allowing outdated versions to remain active without a strategy.",
    "Discarding access-control information.",
    "Over-cleaning source content.",
    "Assuming successful parsing means successful ingestion."
  ],

  interviewQuestions: [
    "What is document processing in RAG?",
    "Why is document processing important?",
    "What is the difference between parsing and normalization?",
    "What is OCR and when is it needed?",
    "Why can PDF extraction be difficult?",
    "Why is metadata important in RAG?",
    "What metadata would you store for a document?",
    "Why should document structure sometimes be preserved?",
    "How would you detect duplicate documents?",
    "Why does document versioning matter?",
    "How can poor document processing affect retrieval?",
    "How would you design a production document ingestion pipeline?"
  ],

  summary: [
    "Document processing converts raw sources into searchable knowledge.",
    "Different source types require different extraction strategies.",
    "Parsing extracts content from source formats.",
    "OCR is required when scanned documents lack usable text layers.",
    "Normalization removes unnecessary noise while preserving meaning.",
    "Document structure can contain important semantic information.",
    "Metadata supports filtering, provenance, versioning, and access-aware retrieval.",
    "Quality validation should happen before chunking and indexing.",
    "Checksums can help detect exact duplicate content.",
    "Version metadata helps manage changing knowledge.",
    "Poor document processing can degrade every later RAG stage."
  ],

  keyTakeaways: [
    "Garbage in can become poor retrieval out.",
    "Document processing is an engineering pipeline, not merely text cleaning.",
    "Preserve information that can improve retrieval, grounding, or provenance.",
    "Metadata is part of the retrieval system, not merely extra information.",
    "Quality validation should occur before expensive downstream processing.",
    "Document structure can carry meaning.",
    "RAG quality begins before the first embedding is generated."
  ],

  visualReferences: [
    {
      title: "Document Processing Pipeline",
      type: "diagram",
      description:
        "Raw source → parsing → normalization → metadata → validation → clean document → chunking."
    },
    {
      title: "Knowledge Source Classification",
      type: "classification",
      description:
        "Documents, web sources, structured data, visual sources, and mixed sources."
    },
    {
      title: "OCR Pipeline",
      type: "diagram",
      description:
        "Scanned page → image → OCR → recognized text → validation."
    },
    {
      title: "RAG Ingestion Pipeline",
      type: "architecture",
      description:
        "Source → document processing → chunking → embeddings → index → retrieval → LLM."
    }
  ]
};

export default lesson2;