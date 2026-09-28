const lesson7 = {
  id: "lesson7",
  moduleId: "module8",
  title: "Multimodal RAG & Grounded Multimodal Reasoning",
  subtitle: "Build retrieval systems that understand text, images, audio and video together",
  description:
    "Learn how Retrieval-Augmented Generation extends beyond text by retrieving and reasoning over multimodal information such as documents, images, charts, screenshots, audio transcripts and video segments.",

  sections: [
    {
      id: "introduction",
      title: "What Is Multimodal RAG?",
      content: `
Multimodal Retrieval-Augmented Generation combines retrieval with models that can understand more than one information modality.

Traditional RAG commonly follows:

User Query
→ Text Retrieval
→ Retrieved Text
→ Language Model
→ Answer

Multimodal RAG expands the pipeline:

User Query
→ Multimodal Query Understanding
→ Retrieval
→ Text + Images + Audio + Video
→ Multimodal Context Construction
→ Multimodal Model
→ Grounded Answer

The important idea is that useful knowledge is not always represented as plain text.

A company manual may contain:
- paragraphs
- diagrams
- screenshots
- tables
- charts
- scanned pages
- photographs
- audio recordings
- instructional videos

A text-only retrieval system can lose important information contained in those other modalities.
`
    },

    {
      id: "why-multimodal-rag",
      title: "Why Multimodal RAG Is Necessary",
      content: `
Consider a technical maintenance manual containing:

Page 1:
Text describing a machine.

Page 2:
A diagram showing the machine's components.

Page 3:
A table containing error codes.

Page 4:
A photograph showing the correct wiring.

If a user asks:

"Which cable should be connected to the component shown in the diagram?"

A text-only system may retrieve the paragraph but fail to understand the visual relationship.

Multimodal RAG can retrieve:
- the relevant textual explanation
- the diagram
- the table
- the image

The model can then reason over these sources together.

This creates a richer grounded reasoning process.
`
    },

    {
      id: "multimodal-knowledge",
      title: "Multimodal Knowledge Representation",
      content: `
A multimodal knowledge collection can contain several representations of the same underlying information.

For example:

Document
├── Text
├── Tables
├── Images
├── Charts
├── Captions
├── Metadata
└── Page relationships

Video
├── Frames
├── Transcript
├── Audio
├── Timestamp
├── Speaker information
└── Scene boundaries

Audio
├── Transcript
├── Speaker segments
├── Timestamp
├── Acoustic features
└── Metadata

The retrieval system should preserve relationships between these representations.

A screenshot extracted from page 12 should remain associated with page 12.

A video frame at 03:21 should remain associated with its timestamp.

This relationship information becomes part of the retrieval metadata.
`
    },

    {
      id: "multimodal-indexing",
      title: "Multimodal Indexing",
      content: `
Different modalities may require different indexing strategies.

Text:
→ Text embeddings

Images:
→ Image embeddings

Audio:
→ Audio embeddings or transcript embeddings

Video:
→ Frame embeddings + transcript embeddings + temporal metadata

Tables:
→ Structured representations + text representations

A practical multimodal index can therefore contain:

{
  id,
  modality,
  embedding,
  source,
  page,
  timestamp,
  metadata
}

The modality field is important because retrieval results should not be treated as identical objects.

For example:

{
  id: "img_42",
  modality: "image",
  source: "manual.pdf",
  page: 12
}

can be combined with:

{
  id: "txt_42",
  modality: "text",
  source: "manual.pdf",
  page: 12
}
`
    },

    {
      id: "embedding-strategies",
      title: "Embedding Strategies for Multimodal Retrieval",
      content: `
There are several common strategies.

Strategy 1: Separate embedding spaces

Text → Text encoder
Image → Image encoder
Audio → Audio encoder

Each modality has its own retrieval mechanism.

Strategy 2: Shared embedding space

Different modalities are mapped into a compatible vector space.

Text:
"red sports car"

Image:
photograph of a red sports car

can potentially become nearby vectors.

Similarity can then be calculated as:

sim(q, x) = q · x

or cosine similarity:

cos(q,x) =
(q · x) / (||q|| ||x||)

A shared representation makes cross-modal retrieval possible.
`
    },

    {
      id: "cross-modal-retrieval",
      title: "Cross-Modal Retrieval",
      content: `
Cross-modal retrieval means the query and retrieved information can belong to different modalities.

Example:

Query:
"Find the image showing the damaged connector."

Possible retrieval process:

Text query
→ Text embedding
→ Shared vector space
→ Image candidates
→ Similarity ranking
→ Relevant image

Another example:

Image query
→ Image embedding
→ Retrieve text descriptions

This enables systems where users can search knowledge using:
- text
- images
- screenshots
- audio
- combinations of modalities
`
    },

    {
      id: "document-rag",
      title: "Multimodal RAG for Documents",
      content: `
PDF documents are a particularly important multimodal RAG source.

A PDF page can contain:

Text + Table + Diagram + Image + Caption

A strong document pipeline can perform:

PDF
→ Page extraction
→ Text extraction
→ Image extraction
→ Table detection
→ OCR when necessary
→ Layout analysis
→ Chunking
→ Embedding
→ Indexing

Metadata should preserve:

document_id
page_number
section
bounding_box
modality
caption
source
`
    },

    {
      id: "table-reasoning",
      title: "Tables and Charts in Multimodal RAG",
      content: `
Tables should not always be flattened into ordinary text.

Suppose a table contains:

Year | Revenue | Growth
2023 | 120     | 8%
2024 | 145     | 21%
2025 | 181     | 25%

A user may ask:

"What was the growth in 2025?"

The retrieval system should return the table or a structured representation of it.

Charts create another challenge.

The system may need to understand:
- axes
- labels
- legends
- trends
- data points
- relationships

A multimodal model can combine chart understanding with textual context.
`
    },

    {
      id: "video-rag",
      title: "Video RAG",
      content: `
Video RAG introduces a temporal dimension.

A video can be represented as:

Video
→ Scene detection
→ Frame sampling
→ Audio extraction
→ Speech transcription
→ Timestamp alignment
→ Embeddings
→ Retrieval

Suppose a user asks:

"When does the instructor demonstrate connecting the sensor?"

The system should retrieve the relevant time segment rather than the entire video.

Example metadata:

{
  video: "network_lab.mp4",
  start: "08:42",
  end: "09:18",
  transcript: "...",
  frames: [...]
}

The answer can then cite the relevant time interval.
`
    },

    {
      id: "grounding",
      title: "Grounded Multimodal Generation",
      content: `
Grounding means connecting generated claims to evidence.

A grounded multimodal response should be able to answer:

"What evidence supports this statement?"

Evidence may include:

- document page
- paragraph
- image
- table
- chart
- video timestamp
- transcript segment

A useful internal structure is:

Claim
→ Evidence
→ Source
→ Location

For example:

Claim:
"The connector is shown on the upper-right side."

Evidence:
Image from page 12.

Source:
maintenance_manual.pdf

Location:
Page 12.

This makes multimodal answers more auditable.
`
    },

    {
      id: "context-construction",
      title: "Multimodal Context Construction",
      content: `
Retrieving information is only the first part of multimodal RAG.

The application must construct a useful context.

Example:

Query
↓
Retrieve 3 text chunks
Retrieve 2 images
Retrieve 1 table
Retrieve 1 video segment
↓
Rank evidence
↓
Remove duplicates
↓
Preserve source metadata
↓
Build multimodal context
↓
Generate answer

Context selection matters because model context windows are limited.

More retrieved information does not automatically mean better answers.

The goal is:

Relevant evidence
+
Correct modality
+
Useful ordering
+
Traceable provenance
`
    },

    {
      id: "multimodal-reasoning",
      title: "Multimodal Reasoning Workflow",
      content: `
A robust workflow can be expressed as:

1. Understand the user request.
2. Identify required modalities.
3. Transform the query into retrieval representations.
4. Search relevant indexes.
5. Rank retrieved evidence.
6. Verify modality compatibility.
7. Construct grounded context.
8. Ask the multimodal model to reason over evidence.
9. Generate the answer.
10. Attach citations or evidence references.
11. Validate the response.

This separates retrieval from generation.

That separation is important because a model should not be expected to invent missing evidence.
`
    },

    {
      id: "hybrid-retrieval",
      title: "Hybrid Multimodal Retrieval",
      content: `
A strong retrieval system can combine several signals.

Lexical similarity:
→ keyword matching

Semantic similarity:
→ embedding similarity

Visual similarity:
→ image embedding similarity

Metadata filtering:
→ page, date, document, category

Temporal filtering:
→ video timestamp

A combined score can be represented as:

Score =
αS_text +
βS_visual +
γS_metadata +
δS_temporal

where the coefficients determine the importance of each signal.

The exact weights should be evaluated experimentally rather than assumed.
`
    },

    {
      id: "query-transformation",
      title: "Multimodal Query Transformation",
      content: `
A user query may be ambiguous.

Example:

"Explain this."

If the user attaches an image, the system may transform the request into:

Task:
Explain image.

Required operations:
- identify objects
- read visible text
- understand relationships
- determine uncertainty
- produce explanation

For more complex queries:

"Compare these two diagrams and tell me what changed."

The system should create multiple retrieval and reasoning tasks:

Image A analysis
Image B analysis
Shared concept extraction
Difference detection
Evidence construction
Final comparison
`
    },

    {
      id: "multimodal-rag-architecture",
      title: "End-to-End Multimodal RAG Architecture",
      content: `
A production architecture can look like:

User
 ↓
Frontend
 ↓
Query Orchestrator
 ↓
Query Understanding
 ↓
┌───────────────┬───────────────┬───────────────┐
│ Text Search   │ Image Search  │ Video Search  │
└───────────────┴───────────────┴───────────────┘
 ↓
Multimodal Ranker
 ↓
Evidence Builder
 ↓
Multimodal Context
 ↓
Multimodal LLM
 ↓
Grounding Validator
 ↓
Answer + Citations
 ↓
User

Supporting services:

Document Store
Vector Database
Object Storage
Metadata Database
Observability
Evaluation System
`
    },

    {
      id: "python-example",
      title: "Python Retrieval Scoring Example",
      content: `
A simple multimodal ranking function can combine multiple signals.

Example:

def multimodal_score(
    text_score,
    visual_score,
    metadata_score,
    alpha=0.5,
    beta=0.4,
    gamma=0.1
):
    return (
        alpha * text_score
        + beta * visual_score
        + gamma * metadata_score
    )

This is not a complete production ranker.

It demonstrates the idea that evidence can be ranked using multiple signals.
`
    },

    {
      id: "typescript-example",
      title: "TypeScript Evidence Representation",
      content: `
A frontend or orchestration layer can represent multimodal evidence like this:

type Evidence = {
  id: string;
  modality: "text" | "image" | "audio" | "video" | "table";
  source: string;
  page?: number;
  startTime?: number;
  endTime?: number;
  score: number;
  content?: string;
};

This representation makes evidence handling explicit and traceable.
`
    },

    {
      id: "failure-modes",
      title: "Multimodal RAG Failure Modes",
      content: `
Common failures include:

1. Wrong image retrieval
2. Correct text but wrong page
3. Incorrect OCR
4. Poor chart interpretation
5. Missing video timestamps
6. Duplicate evidence
7. Modality mismatch
8. Context overload
9. Unsupported claims
10. Incorrect source attribution

A system should therefore evaluate both retrieval and generation.

A perfect language model cannot compensate for consistently retrieving the wrong evidence.
`
    },

    {
      id: "evaluation",
      title: "Evaluating Multimodal RAG",
      content: `
Evaluation should cover multiple stages.

Retrieval:
- Recall
- Precision
- MRR
- nDCG
- modality coverage

Grounding:
- citation correctness
- evidence relevance
- claim support

Generation:
- factuality
- completeness
- clarity
- instruction following

System:
- latency
- cost
- reliability
- failure rate

A useful principle is:

End-to-end quality
≠
generation quality alone

Retrieval quality, grounding quality and generation quality all contribute.
`
    },

    {
      id: "security",
      title: "Security in Multimodal RAG",
      content: `
Multimodal inputs can contain untrusted information.

Examples:

An image can contain hidden instructions.

A PDF can contain malicious text.

A document can contain prompt injection.

An audio transcript can contain attacker-controlled instructions.

Therefore:

Retrieved content should be treated as data, not automatically as instructions.

The system should distinguish:

System Instructions
User Instructions
Retrieved Evidence
Tool Results

This separation is essential for secure multimodal applications.
`
    },

    {
      id: "mathematical-intuition",
      title: "Mathematical Intuition",
      content: `
Suppose a query vector is q and a retrieved item vector is x.

Cosine similarity:

sim(q,x) =
(q · x) / (||q|| ||x||)

For multiple evidence types:

S_i =
αT_i +
βV_i +
γM_i

where:

T_i = text relevance
V_i = visual relevance
M_i = metadata relevance

The final ranking can be:

rank(i) = S_i

The important mathematical idea is that multimodal retrieval converts heterogeneous evidence into comparable scoring signals.
`
    },

    {
      id: "production-design",
      title: "Production Design Principles",
      content: `
A production multimodal RAG system should prioritize:

- traceable evidence
- modality-aware retrieval
- metadata preservation
- context control
- source attribution
- evaluation
- security
- caching
- observability
- graceful failure

The system should also clearly communicate uncertainty.

If the retrieved evidence is insufficient, the application should say that the available evidence is insufficient instead of fabricating an answer.
`
    }
  ],

  architecture: {
    title: "Multimodal RAG Architecture",
    description: "A multimodal retrieval and grounded generation pipeline.",
    flow: [
      "User Query",
      "Multimodal Query Understanding",
      "Text / Image / Audio / Video Retrieval",
      "Evidence Ranking",
      "Multimodal Context Construction",
      "Multimodal LLM",
      "Grounding Validation",
      "Answer + Evidence"
    ]
  },

  codeExamples: [
    {
      title: "Multimodal Evidence Type",
      language: "typescript",
      code: `type Evidence = {
  id: string;
  modality: "text" | "image" | "audio" | "video" | "table";
  source: string;
  score: number;
};`
    },
    {
      title: "Multimodal Retrieval Score",
      language: "python",
      code: `def score(text, visual, metadata):
    return (
        0.5 * text +
        0.4 * visual +
        0.1 * metadata
    )`
    }
  ],

  comparisons: [
    {
      title: "Traditional RAG vs Multimodal RAG",
      rows: [
        ["Primary data", "Mostly text", "Text + images + audio + video"],
        ["Retrieval", "Text/vector retrieval", "Multimodal retrieval"],
        ["Context", "Text chunks", "Heterogeneous evidence"],
        ["Grounding", "Text citations", "Pages, images, timestamps and sources"],
        ["Complexity", "Lower", "Higher"]
      ]
    }
  ],

  exercises: [
    "Explain why text-only RAG can fail on diagrams.",
    "Design metadata for a multimodal document chunk.",
    "Explain cross-modal retrieval with an example.",
    "Describe how video RAG preserves timestamps.",
    "Explain why evidence provenance matters."
  ],

  codingExercises: [
    "Implement a multimodal evidence data structure.",
    "Implement a weighted multimodal ranking function.",
    "Build a simple evidence deduplication function.",
    "Create a retrieval result formatter that preserves page and timestamp metadata."
  ],

  architectureExercises: [
    "Design a multimodal RAG system for technical manuals.",
    "Design a video knowledge retrieval system for online courses.",
    "Design a multimodal customer-support assistant."
  ],

  scenarioExercises: [
    "A retrieved image conflicts with retrieved text. Design the validation workflow.",
    "A user asks about a video event but retrieval returns the entire video. Improve the architecture.",
    "A model produces a claim without supporting evidence. Design a grounding check."
  ],

  interviewQuestions: [
    "What is multimodal RAG?",
    "How is multimodal retrieval different from text retrieval?",
    "What is cross-modal retrieval?",
    "Why is metadata important in multimodal RAG?",
    "How would you implement video RAG?",
    "How can multimodal systems provide grounded answers?",
    "What are common multimodal RAG failure modes?",
    "How would you evaluate multimodal retrieval?",
    "How can prompt injection occur inside retrieved multimodal data?",
    "Why should retrieval quality be evaluated separately from generation quality?"
  ],

  commonMistakes: [
    "Treating every modality as ordinary text.",
    "Discarding page or timestamp metadata.",
    "Retrieving too much evidence.",
    "Ignoring conflicting evidence.",
    "Generating answers without source attribution.",
    "Assuming a multimodal model automatically provides grounding.",
    "Ignoring security of retrieved content."
  ],

  summary: `
Multimodal RAG extends retrieval-augmented generation to multiple information modalities.

The central architecture is:

Query
→ Multimodal Retrieval
→ Evidence Ranking
→ Context Construction
→ Multimodal Generation
→ Grounding

The difficult part is not simply sending images to a multimodal model.

A production system must correctly retrieve, represent, rank, connect and validate heterogeneous evidence.

Multimodal RAG becomes especially powerful for documents, technical manuals, charts, screenshots, educational content, meetings and video knowledge bases.
`,

  keyTakeaways: [
    "Multimodal RAG retrieves information across multiple modalities.",
    "Metadata such as pages and timestamps is essential.",
    "Cross-modal retrieval allows one modality to retrieve another.",
    "Grounding connects generated claims to evidence.",
    "Retrieval quality must be evaluated separately from generation quality.",
    "Multimodal retrieved content must be treated as untrusted data.",
    "Production systems require observability, evaluation and security."
  ],

  visualReferences: [
    {
      title: "Multimodal RAG Pipeline",
      type: "architecture",
      description: "Query-to-retrieval-to-grounded-generation workflow."
    },
    {
      title: "Cross-Modal Retrieval",
      type: "flowchart",
      description: "Text, image, audio and video retrieval relationships."
    }
  ]
};

export default lesson7;