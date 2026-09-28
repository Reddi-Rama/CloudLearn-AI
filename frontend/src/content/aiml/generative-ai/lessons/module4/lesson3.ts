const lesson = {
  id: "lesson3",
  moduleId: "module4",
  title: "Documents, Data Sources & Ingestion Pipelines",
  subtitle: "Learn how real-world information is collected, parsed, cleaned, normalized, enriched, and prepared for RAG retrieval.",

  overview: `
A RAG system is only as useful as the knowledge that enters it.

Before embeddings, vector databases, retrieval, or generation can work,
raw information must be transformed into clean, meaningful, searchable units.

This process is called ingestion.

A production ingestion pipeline may look like:

SOURCE
  ↓
CONNECT
  ↓
LOAD
  ↓
PARSE
  ↓
EXTRACT
  ↓
CLEAN
  ↓
NORMALIZE
  ↓
ENRICH METADATA
  ↓
DEDUPLICATE
  ↓
CHUNK
  ↓
EMBED
  ↓
INDEX
  ↓
READY FOR RETRIEVAL

This lesson focuses on the data engineering foundation behind RAG.
`,

  learningObjectives: [
    "Identify common RAG data sources.",
    "Understand document ingestion.",
    "Understand parsing and extraction.",
    "Understand structured and unstructured data.",
    "Understand OCR and scanned documents.",
    "Understand cleaning and normalization.",
    "Understand metadata enrichment.",
    "Understand document identifiers and chunk identifiers.",
    "Understand duplicate detection.",
    "Understand incremental ingestion.",
    "Understand document versioning.",
    "Build a conceptual ingestion pipeline."
  ],

  prerequisites: [
    "Basic RAG concepts",
    "Basic Python",
    "Basic file handling",
    "Basic databases are helpful"
  ],

  keyTerms: [
    {
      term: "Ingestion",
      definition: "The process of bringing external information into a system and preparing it for downstream processing."
    },
    {
      term: "Parser",
      definition: "A component that extracts meaningful structures or text from a source format."
    },
    {
      term: "OCR",
      definition: "Optical Character Recognition converts text appearing in images or scanned documents into machine-readable text."
    },
    {
      term: "Metadata",
      definition: "Information describing the source, location, type, version, permissions, and other properties of content."
    },
    {
      term: "Normalization",
      definition: "Transforming data into a consistent representation."
    },
    {
      term: "Deduplication",
      definition: "Identifying and removing or consolidating duplicate content."
    },
    {
      term: "Incremental Ingestion",
      definition: "Processing only new or changed content instead of rebuilding the entire index."
    },
    {
      term: "Document ID",
      definition: "A stable identifier representing a source document."
    },
    {
      term: "Chunk ID",
      definition: "An identifier representing a particular retrievable segment of a document."
    }
  ],

  sections: [
    {
      title: "1. What Is a RAG Data Source?",
      explanation: `
A data source is any location from which knowledge can be collected.

Examples include:

Documents:
• PDF
• DOCX
• TXT
• Markdown

Web:
• Websites
• HTML pages
• Documentation

Structured:
• CSV
• JSON
• SQL databases

Enterprise:
• SharePoint
• Cloud storage
• Internal knowledge systems

Application data:
• Product catalogs
• Customer records
• Support tickets
• Knowledge articles
`
    },

    {
      title: "2. Structured vs Unstructured Data",
      explanation: `
Structured data has a predictable schema.

Example:

{
  "product": "Laptop",
  "price": 55000,
  "stock": 14
}

Unstructured data may look like:

"The laptop is currently available for 55,000 rupees.
There are fourteen units in stock."

Both can become useful knowledge sources,
but their ingestion strategies are different.
`
    },

    {
      title: "3. Document Ingestion",
      explanation: `
Document ingestion normally consists of several steps.

Example:

PDF
 ↓
PDF Loader
 ↓
Text Extraction
 ↓
Metadata Extraction
 ↓
Cleaning
 ↓
Chunking
 ↓
Embedding

The goal is not simply to read a file.

The goal is to transform the source into high-quality retrieval units.
`
    },

    {
      title: "4. PDF Ingestion",
      explanation: `
PDF files can contain:

• Normal text
• Images
• Tables
• Headers
• Footers
• Scanned pages
• Multi-column layouts

A naive text extractor can sometimes produce incorrect reading order.

For example:

Column A          Column B
A1                B1
A2                B2

A poor extraction process might produce:

A1 B1 A2 B2

or:

A1 A2 B1 B2

Therefore document parsing is an important engineering problem.
`
    },

    {
      title: "5. OCR for Scanned Documents",
      explanation: `
Some PDFs contain images of pages rather than actual text.

Example:

Scanned PDF
   ↓
Page Image
   ↓
OCR
   ↓
Recognized Text
   ↓
Cleaning
   ↓
Chunking

OCR can introduce errors.

Example:

Original:
"Attendance: 75%"

OCR:
"Attendance: 75°/o"

This means OCR output may require validation or cleanup.
`
    },

    {
      title: "6. HTML and Web Data",
      explanation: `
Web pages contain more than useful content.

Example:

<html>
  navigation
  advertisements
  footer
  article
  sidebar
</html>

An ingestion pipeline should identify the meaningful content and remove
unnecessary page elements.

Useful extraction targets include:

• Title
• Headings
• Paragraphs
• Tables
• Lists
• Links
• Publication date
• Author
`
    },

    {
      title: "7. CSV and Tabular Data",
      explanation: `
CSV data should not always be treated like ordinary paragraphs.

Example:

product,price,stock
Keyboard,1200,25
Mouse,700,40

Possible representations:

Product: Keyboard
Price: 1200
Stock: 25

This preserves the relationship between fields.
`
    },

    {
      title: "8. Database Ingestion",
      explanation: `
A database can be treated as a dynamic knowledge source.

Example:

SQL table:

products
---------
id
name
category
price
stock

An ingestion system might periodically extract changed records,
convert them into searchable representations, and update the retrieval index.

For highly dynamic information, direct database queries may sometimes
be preferable to embedding everything.
`
    },

    {
      title: "9. Cleaning",
      explanation: `
Cleaning removes unnecessary noise.

Common cleaning tasks:

• Remove repeated whitespace
• Remove duplicated headers
• Remove navigation text
• Normalize encoding
• Repair obvious extraction artifacts
• Remove empty sections
• Normalize line breaks
• Remove repeated boilerplate

But cleaning must be conservative.

Over-cleaning can destroy useful information.
`
    },

    {
      title: "10. Normalization",
      explanation: `
Normalization creates consistency.

Examples:

"USA"
"U.S.A."
"United States"

could potentially be normalized to:

"United States"

Dates may also appear as:

01/02/2026
2026-02-01
February 1, 2026

A consistent internal representation simplifies downstream processing.
`
    },

    {
      title: "11. Metadata Enrichment",
      explanation: `
Metadata can dramatically improve retrieval.

Example:

{
  "document_id": "handbook-2026",
  "chunk_id": "handbook-2026-042",
  "title": "Student Handbook",
  "page": 42,
  "department": "IT",
  "year": 2026,
  "document_type": "policy",
  "access_level": "student"
}

Metadata can support:

• Filtering
• Source citations
• Access control
• Debugging
• Version tracking
• Document management
`
    },

    {
      title: "12. Document and Chunk IDs",
      explanation: `
Every document should have a stable identity.

Example:

Document:
handbook-2026

Chunks:

handbook-2026-001
handbook-2026-002
handbook-2026-003

This makes it possible to trace a retrieved chunk back to its source.
`
    },

    {
      title: "13. Deduplication",
      explanation: `
Duplicate content can reduce retrieval quality.

Suppose the same policy appears:

• On the website
• In a PDF
• In an uploaded DOCX

The same sentence may enter the index three times.

Possible approaches include:

• Exact hashing
• Normalized text hashing
• Similarity-based duplicate detection
• Canonical source selection

Deduplication should be designed carefully because two similar documents
may still contain meaningful differences.
`
    },

    {
      title: "14. Document Versioning",
      explanation: `
Documents change over time.

Example:

Policy v1:
Attendance requirement = 75%

Policy v2:
Attendance requirement = 80%

A RAG system should understand which version is active.

Useful metadata:

version
effective_date
expiration_date
updated_at
status

Without version management, retrieval may return outdated information.
`
    },

    {
      title: "15. Incremental Ingestion",
      explanation: `
Reprocessing millions of documents after every small change is inefficient.

Incremental ingestion processes only:

• New documents
• Modified documents
• Deleted documents

A simplified workflow:

Detect change
   ↓
Identify document
   ↓
Delete old chunks if required
   ↓
Process new version
   ↓
Embed
   ↓
Update index
`
    },

    {
      title: "16. Data Quality Pipeline",
      explanation: `
A production ingestion system should measure quality.

Possible checks:

• Empty documents
• Very short documents
• Excessive OCR errors
• Duplicate documents
• Unsupported file types
• Invalid metadata
• Missing identifiers
• Parsing failures
• Unexpected encoding
• Corrupted files

Bad data should not silently enter the retrieval index.
`
    },

    {
      title: "17. Access Control",
      explanation: `
Enterprise RAG systems must consider permissions.

Suppose:

Employee A can access document X.

Employee B cannot access document X.

If both users search the same RAG system, retrieval must respect
their authorization boundaries.

Therefore metadata can include:

user
role
department
tenant
access_level

Retrieval should be filtered according to authorization rules.
`
    },

    {
      title: "18. End-to-End Ingestion Example",
      explanation: `
Suppose an organization uploads:

employee_handbook.pdf

Pipeline:

1. Detect PDF.
2. Parse pages.
3. Extract text.
4. Run OCR on scanned pages if necessary.
5. Remove repeated headers.
6. Detect headings.
7. Preserve page metadata.
8. Normalize text.
9. Detect duplicate content.
10. Split into chunks.
11. Attach metadata.
12. Generate embeddings.
13. Store vectors.
14. Mark ingestion as successful.

The resulting index is ready for retrieval.
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "Hash-Based Deduplication",
      formula: `
hash(normalized_text)
`,
      explanation: "Identical normalized content can produce the same hash and can therefore be detected efficiently."
    },
    {
      concept: "Chunk Count",
      formula: `
Number of chunks ≈ ceil(document_length / target_chunk_size)
`,
      explanation: "This is a simplified approximation. Real chunking also depends on overlap and structural boundaries."
    },
    {
      concept: "Storage Growth",
      formula: `
Total vectors ≈ number of chunks
`,
      explanation: "Each embedded chunk generally contributes one vector to the retrieval index."
    },
    {
      concept: "Incremental Processing",
      formula: `
Work_incremental ≈ changed_documents
instead of
Work_full ≈ all_documents
`,
      explanation: "Incremental ingestion reduces unnecessary processing when only a small portion of the knowledge base changes."
    }
  ],

  codeExamples: [
    {
      title: "Simple Text Document Loader",
      language: "python",
      code: `
from pathlib import Path

def load_text_file(path):
    path = Path(path)

    return {
        "text": path.read_text(encoding="utf-8"),
        "metadata": {
            "source": str(path),
            "type": "text"
        }
    }


document = load_text_file("handbook.txt")

print(document["metadata"])
print(document["text"])
`
    },

    {
      title: "Basic Cleaning Function",
      language: "python",
      code: `
import re

def clean_text(text):
    text = text.replace("\\r\\n", "\\n")

    # Remove repeated whitespace
    text = re.sub(r"[ \\t]+", " ", text)

    # Collapse excessive blank lines
    text = re.sub(r"\\n{3,}", "\\n\\n", text)

    return text.strip()


raw = """
University Handbook


Attendance must be at least 75%.
"""

print(clean_text(raw))
`
    },

    {
      title: "Simple Chunking",
      language: "python",
      code: `
def chunk_text(text, chunk_size=500, overlap=50):
    chunks = []

    start = 0

    while start < len(text):
        end = start + chunk_size

        chunks.append(text[start:end])

        start += chunk_size - overlap

    return chunks


text = "A" * 1200

chunks = chunk_text(text)

print("Number of chunks:", len(chunks))
`
    },

    {
      title: "Metadata-Enriched Chunks",
      language: "python",
      code: `
def create_chunks(text, document_id, source):
    raw_chunks = chunk_text(text)

    results = []

    for index, chunk in enumerate(raw_chunks):
        results.append({
            "document_id": document_id,
            "chunk_id": f"{document_id}-{index:04d}",
            "source": source,
            "text": chunk
        })

    return results
`
    },

    {
      title: "Incremental Ingestion Concept",
      language: "python",
      code: `
def should_reingest(current_hash, stored_hash):
    return current_hash != stored_hash


documents = {
    "handbook.pdf": "abc123",
    "policy.pdf": "xyz789"
}

new_hash = "abc123"

if should_reingest(new_hash, documents["handbook.pdf"]):
    print("Re-ingest document")
else:
    print("Document unchanged")
`
    },

    {
      title: "Simple Ingestion Pipeline",
      language: "python",
      code: `
def ingest_document(path):
    document = load_text_file(path)

    text = clean_text(document["text"])

    chunks = chunk_text(text)

    records = []

    for index, chunk in enumerate(chunks):
        records.append({
            "document_id": path,
            "chunk_id": f"{path}-{index}",
            "text": chunk,
            "metadata": document["metadata"]
        })

    return records
`
    }
  ],

  comparisonTables: [
    {
      title: "Common Data Sources",
      columns: [
        "Source",
        "Typical Challenge",
        "Useful Metadata"
      ],
      rows: [
        ["PDF", "Layout and extraction", "Page, title, version"],
        ["DOCX", "Structure and formatting", "Heading, section, author"],
        ["HTML", "Navigation and boilerplate", "URL, title, date"],
        ["CSV", "Tabular relationships", "Column names, row ID"],
        ["JSON", "Nested structure", "Object ID, field path"],
        ["Database", "Dynamic updates", "Primary key, timestamp"],
        ["Scanned PDF", "No machine-readable text", "Page, OCR confidence"]
      ]
    },
    {
      title: "Full vs Incremental Ingestion",
      columns: [
        "Aspect",
        "Full",
        "Incremental"
      ],
      rows: [
        ["Processing", "All documents", "Only changed documents"],
        ["Simple", "Yes", "More complex"],
        ["Cost", "Higher for large datasets", "Lower when changes are small"],
        ["Useful for", "Initial indexing", "Ongoing updates"],
        ["Change detection", "Not required", "Required"]
      ]
    },
    {
      title: "Structured vs Unstructured",
      columns: [
        "Aspect",
        "Structured",
        "Unstructured"
      ],
      rows: [
        ["Example", "SQL/CSV/JSON", "PDF/DOCX/text"],
        ["Schema", "Usually explicit", "Often implicit"],
        ["Parsing", "Field-based", "Document parsing"],
        ["Relationships", "Explicit", "May need extraction"],
        ["RAG handling", "Can preserve fields", "Usually requires chunking"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "RAG Ingestion Pipeline",
      type: "flowchart",
      description: "Visualize Source → Load → Parse → Clean → Normalize → Metadata → Deduplicate → Chunk → Embed → Index."
    },
    {
      title: "Document Processing Lifecycle",
      type: "diagram",
      description: "Show how a PDF moves from raw file to searchable chunks."
    },
    {
      title: "Structured vs Unstructured Data",
      type: "comparison",
      description: "Compare SQL/CSV/JSON with PDF/DOCX/text sources."
    },
    {
      title: "Incremental Ingestion",
      type: "flowchart",
      description: "Show how changed documents are detected and re-indexed without rebuilding everything."
    },
    {
      title: "Metadata Model",
      type: "diagram",
      description: "Visualize document_id, chunk_id, source, page, version, access level, and timestamps."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Design a Data Source Inventory",
      task: "Create a list of at least ten possible knowledge sources for a university RAG assistant."
    },
    {
      title: "Exercise 2 — Build a Text Ingestion Pipeline",
      task: "Load several text files, clean them, assign document IDs, and generate chunks."
    },
    {
      title: "Exercise 3 — Metadata Design",
      task: "Design a metadata schema for university documents containing department, academic year, document type, page, version, and access level."
    },
    {
      title: "Exercise 4 — Duplicate Detection",
      task: "Create two identical documents and one slightly different document. Design a method to identify exact duplicates."
    },
    {
      title: "Exercise 5 — Version Management",
      task: "Design an ingestion workflow for documents that are updated every semester."
    },
    {
      title: "Exercise 6 — Production Ingestion",
      task: "Design an ingestion architecture supporting PDF, DOCX, HTML, CSV, JSON, and database sources."
    }
  ],

  miniProject: {
    title: "University Knowledge Ingestion System",
    goal: `
Build a small ingestion pipeline that accepts university documents and produces
clean, metadata-rich chunks ready for embedding.
`,
    inputTypes: [
      "TXT",
      "PDF",
      "DOCX",
      "CSV",
      "JSON"
    ],
    pipeline: [
      "File discovery",
      "File type detection",
      "Parsing",
      "Cleaning",
      "Metadata extraction",
      "Duplicate detection",
      "Chunking",
      "Chunk ID generation",
      "Output validation"
    ],
    output: `
A JSON collection containing:

document_id
chunk_id
source
title
page
version
text
metadata
`
  },

  interviewQuestions: [
    {
      question: "What is ingestion in RAG?",
      answer: "It is the process of loading, parsing, cleaning, enriching, chunking, and preparing external information for retrieval."
    },
    {
      question: "Why is metadata important?",
      answer: "Metadata supports filtering, source tracking, permissions, versioning, and debugging."
    },
    {
      question: "What is OCR?",
      answer: "OCR converts text contained in images or scanned documents into machine-readable text."
    },
    {
      question: "Why is incremental ingestion useful?",
      answer: "It avoids reprocessing the entire knowledge base when only a subset of documents has changed."
    },
    {
      question: "Why is document versioning important?",
      answer: "It helps prevent outdated information from being returned when newer versions exist."
    },
    {
      question: "What is deduplication?",
      answer: "It is the process of identifying duplicate or near-duplicate content so the index does not contain unnecessary repeated information."
    },
    {
      question: "Why can't every database simply be embedded?",
      answer: "Highly dynamic or transactional information may be better accessed through direct structured queries or tools rather than static embeddings."
    }
  ],

  commonMistakes: [
    "Treating every data source as plain text.",
    "Ignoring PDF layout.",
    "Ignoring OCR errors.",
    "Removing too much information during cleaning.",
    "Failing to preserve metadata.",
    "Creating unstable document identifiers.",
    "Ignoring document versions.",
    "Re-indexing everything for every small change.",
    "Allowing corrupted documents into the index.",
    "Ignoring authorization metadata."
  ],

  keyTakeaways: [
    "RAG quality begins with data quality.",
    "Ingestion converts raw sources into searchable knowledge.",
    "Different source types require different parsing strategies.",
    "Cleaning should remove noise without destroying meaning.",
    "Metadata is essential for filtering, traceability, versioning, and security.",
    "Documents and chunks should have stable identifiers.",
    "Deduplication prevents unnecessary repeated information.",
    "Versioning helps prevent stale knowledge from being retrieved.",
    "Incremental ingestion improves efficiency for continuously changing data.",
    "A production RAG system needs an explicit data-quality pipeline."
  ]
};

export default lesson;