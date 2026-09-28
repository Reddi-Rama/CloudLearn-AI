const lesson = {
  id: "lesson1",
  moduleId: "module4",
  title: "Introduction to RAG & Why Retrieval Matters",
  subtitle: "Understand Retrieval-Augmented Generation, why LLM knowledge is limited, and how retrieval connects external knowledge with generation.",

  overview: `
Retrieval-Augmented Generation (RAG) is one of the most important architectures
for building useful applications with Large Language Models.

A language model can generate fluent answers, but the model's internal parameters
are not automatically connected to every private document, database, website,
company policy, product catalog, or newly created piece of information.

RAG addresses this limitation by retrieving relevant information from an external
knowledge source and providing that information to the language model as context
before generation.

The basic idea is:

User Question
      ↓
Retrieve Relevant Information
      ↓
Add Retrieved Information to Prompt
      ↓
Language Model
      ↓
Grounded Answer

This lesson introduces the motivation, terminology, architecture, benefits,
limitations, mathematical intuition, and practical foundations of RAG.
`,

  learningObjectives: [
    "Define Retrieval-Augmented Generation.",
    "Explain why retrieval is useful for LLM applications.",
    "Understand the difference between model knowledge and external knowledge.",
    "Explain hallucination and why RAG can reduce unsupported answers.",
    "Understand parametric and non-parametric knowledge.",
    "Describe the basic RAG workflow.",
    "Understand retrieval, context, grounding, and generation.",
    "Identify suitable use cases for RAG.",
    "Understand when RAG is not the right solution.",
    "Build a basic conceptual RAG pipeline."
  ],

  prerequisites: [
    "Generative AI fundamentals",
    "Basic understanding of LLMs",
    "Prompt engineering fundamentals",
    "Basic Python programming",
    "Basic understanding of embeddings is helpful but not required"
  ],

  keyTerms: [
    {
      term: "RAG",
      definition: "Retrieval-Augmented Generation combines information retrieval with language generation."
    },
    {
      term: "Retriever",
      definition: "The component responsible for finding relevant information from a knowledge source."
    },
    {
      term: "Context",
      definition: "Information supplied to the language model to help it answer the current request."
    },
    {
      term: "Grounding",
      definition: "Constraining an answer to evidence or information supplied by a trusted source."
    },
    {
      term: "Knowledge Base",
      definition: "A collection of documents, records, or other information used as an external source."
    },
    {
      term: "Parametric Knowledge",
      definition: "Information represented implicitly in the learned parameters of a model."
    },
    {
      term: "Non-Parametric Knowledge",
      definition: "Information stored outside the model and retrieved at runtime."
    },
    {
      term: "Hallucination",
      definition: "A generated statement that is unsupported, incorrect, or fabricated."
    }
  ],

  sections: [
    {
      title: "1. What Is Retrieval-Augmented Generation?",
      explanation: `
Retrieval-Augmented Generation is an architecture in which an AI system first
retrieves relevant information and then gives that information to a generative
model as context.

Instead of asking:

"Answer this question using only what you know."

the application can perform:

1. Receive the user question.
2. Search a knowledge source.
3. Select relevant information.
4. Insert that information into the model context.
5. Ask the model to answer using the supplied evidence.
6. Return the response.

The model therefore acts as both a language understanding and language generation
component while an external retrieval system supplies application-specific knowledge.
`,

      example: `
Suppose a university has a private document:

"Students must submit the final project before 5:00 PM on Friday."

A general language model cannot be expected to know this private rule.

A RAG application can:

Question:
"What is the deadline for the final project?"

Retriever:
Finds the university policy document.

Retrieved context:
"Students must submit the final project before 5:00 PM on Friday."

Generator:
"The final project must be submitted before 5:00 PM on Friday."
`
    },

    {
      title: "2. Why Do We Need RAG?",
      explanation: `
LLMs are trained using large collections of data, but training does not mean
that the model has live access to every source of information.

Important limitations include:

• Knowledge cutoff or stale information
• Private organizational information
• Frequently changing information
• Domain-specific documents
• Large document collections
• Lack of source traceability
• Hallucination risk
• Limited ability to access application databases directly

RAG provides a mechanism for supplying relevant external information at inference time.
`
    },

    {
      title: "3. Parametric vs Non-Parametric Knowledge",
      explanation: `
A useful conceptual distinction is between parametric and non-parametric knowledge.

Parametric knowledge:
Information represented inside model parameters.

Non-parametric knowledge:
Information stored outside the model and accessed through retrieval.

RAG primarily extends the model with non-parametric knowledge.

Conceptually:

             AI SYSTEM
                 |
       +---------+---------+
       |                   |
 Parametric          Non-Parametric
 Knowledge              Knowledge
       |                   |
 Model Weights       External Sources
                           |
                  Documents / DB / APIs
`
    },

    {
      title: "4. RAG vs Fine-Tuning",
      explanation: `
RAG and fine-tuning solve different problems.

RAG is mainly useful when the model needs access to external or changing information.

Fine-tuning is mainly useful when we want to change model behavior, style,
specialization, or task performance.

Example:

Company policies change every month.

RAG:
Store the policies externally and retrieve the current policy.

Fine-tuning:
Would not normally be the preferred mechanism for continuously changing policy data.

Another example:

A company wants the model to consistently produce a particular structured
classification behavior.

Fine-tuning may be useful.

The two techniques can also be combined.
`
    },

    {
      title: "5. Basic RAG Pipeline",
      explanation: `
A minimal RAG system contains two major phases.

OFFLINE / INDEXING PHASE

Documents
   ↓
Load
   ↓
Clean
   ↓
Chunk
   ↓
Embed
   ↓
Store

ONLINE / QUERY PHASE

User Question
   ↓
Query Embedding
   ↓
Retrieve
   ↓
Relevant Chunks
   ↓
Prompt Construction
   ↓
LLM
   ↓
Answer
`
    },

    {
      title: "6. What Does Retrieval Actually Mean?",
      explanation: `
Retrieval means selecting information from a larger collection that is likely
to be useful for the current query.

If a knowledge base contains 100,000 chunks, the application does not normally
send all 100,000 chunks to the model.

Instead, it tries to identify a small relevant subset.

For example:

Knowledge Base:
10,000 documents

Retrieved:
5 relevant chunks

LLM context:
5 chunks + user question + instructions

This improves efficiency and helps the model focus on relevant evidence.
`
    },

    {
      title: "7. Grounding",
      explanation: `
Grounding means connecting the generated answer to evidence.

A grounded system can be instructed:

"Answer using the supplied context. If the context does not contain enough
information, say that the information is unavailable."

This creates an important behavior:

Evidence available
      ↓
Answer using evidence

Evidence unavailable
      ↓
Abstain / request more information

Grounding does not mathematically guarantee that every answer is correct,
but it provides an architectural mechanism for evidence-based generation.
`
    },

    {
      title: "8. Hallucination and RAG",
      explanation: `
Hallucination occurs when a model produces information that is unsupported or incorrect.

RAG can reduce some hallucination scenarios by supplying relevant evidence.

However:

RAG ≠ zero hallucinations.

A retrieval system can retrieve the wrong document.
The retrieved document can contain incorrect information.
The model can misunderstand the retrieved context.
The prompt can be poorly designed.
The context can contain conflicting information.

Therefore a reliable RAG system requires:

Retrieval quality
+
Context quality
+
Prompt quality
+
Generation quality
+
Evaluation
`
    },

    {
      title: "9. When RAG Is Useful",
      explanation: `
Common RAG applications include:

• Company knowledge assistants
• University learning assistants
• Documentation assistants
• Customer support
• Legal document search
• Technical troubleshooting
• Product knowledge systems
• Research assistants
• Internal policy assistants
• Healthcare information retrieval systems
• Enterprise search
• Code documentation assistants
`
    },

    {
      title: "10. When RAG May Not Be Necessary",
      explanation: `
RAG adds infrastructure and complexity.

It may be unnecessary when:

• The task does not require external knowledge.
• The answer is simple reasoning.
• The information is already fully contained in the prompt.
• There is no knowledge base to retrieve from.
• Retrieval quality would not improve the result.

For example:

"What is 25 × 4?"

A retrieval system adds unnecessary complexity.
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "Retrieval Scoring",
      explanation: `
A retrieval system can assign a relevance score between a query q and a document d.

Conceptually:

score(q,d) = similarity(embedding(q), embedding(d))

Higher similarity means the document is considered more relevant.
`
    },
    {
      concept: "Cosine Similarity",
      formula: `
cos(q,d) = (q · d) / (||q|| ||d||)
`,
      explanation: `
Cosine similarity measures the angle between two vectors.

Values closer to 1 generally indicate greater directional similarity.
`
    },
    {
      concept: "RAG as Conditional Generation",
      formula: `
P(answer | question, retrieved_context)

instead of:

P(answer | question)
`,
      explanation: `
The important conceptual change is that generation is conditioned on retrieved
external context in addition to the user question.
`
    }
  ],

  codeExamples: [
    {
      title: "Simple Conceptual RAG in Python",
      language: "python",
      code: `
documents = [
    "Python is a high-level programming language.",
    "RAG retrieves external information before generation.",
    "Embeddings represent text as numerical vectors."
]

question = "What does RAG do?"

# Simplified keyword-based retrieval
matches = [
    doc for doc in documents
    if "RAG" in doc or "retriev" in doc.lower()
]

context = "\\n".join(matches)

prompt = f"""
Answer the question using the supplied context.

Context:
{context}

Question:
{question}
"""

print(prompt)
`
    },

    {
      title: "Basic RAG Pipeline Structure",
      language: "python",
      code: `
def rag_pipeline(question, retriever, llm):
    documents = retriever(question)

    context = "\\n\\n".join(documents)

    prompt = f"""
    Use the following context to answer the question.

    Context:
    {context}

    Question:
    {question}

    If the context does not contain enough information,
    clearly say that the information is unavailable.
    """

    return llm(prompt)
`
    },

    {
      title: "Simple Grounded Response Pattern",
      language: "python",
      code: `
def build_grounded_prompt(question, context):
    return f"""
You are a grounded knowledge assistant.

Rules:
1. Use only the supplied context.
2. Do not invent missing facts.
3. If the answer is not present, say so.
4. Explain the answer clearly.

Context:
{context}

Question:
{question}
"""
`
    }
  ],

  comparisonTables: [
    {
      title: "LLM vs RAG",
      columns: [
        "Aspect",
        "LLM Only",
        "RAG"
      ],
      rows: [
        ["External knowledge", "Limited to supplied prompt/model knowledge", "Can retrieve external knowledge"],
        ["Private documents", "Not automatically available", "Can retrieve from private sources"],
        ["Fresh information", "Not automatically guaranteed", "Can retrieve updated information"],
        ["Source grounding", "Limited", "Can provide retrieved evidence"],
        ["Architecture", "Simpler", "More components"],
        ["Maintenance", "Model-centric", "Knowledge source can be updated independently"]
      ]
    },
    {
      title: "RAG vs Fine-Tuning",
      columns: [
        "Aspect",
        "RAG",
        "Fine-Tuning"
      ],
      rows: [
        ["Main purpose", "External knowledge", "Behavior/task adaptation"],
        ["Changing documents", "Easy to update source", "Requires training workflow if knowledge is encoded"],
        ["Private knowledge", "Strong use case", "Possible but not usually the first choice"],
        ["Retrieval required", "Yes", "No"],
        ["Training required", "Usually no model training", "Yes"],
        ["Can combine with other", "Yes", "Yes"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "RAG Conceptual Architecture",
      type: "diagram",
      description: "Visualize User Query → Retriever → Knowledge Base → Context → LLM → Grounded Answer."
    },
    {
      title: "Parametric vs Non-Parametric Knowledge",
      type: "diagram",
      description: "Compare model parameters with externally stored documents and databases."
    },
    {
      title: "RAG Indexing and Query Pipeline",
      type: "flowchart",
      description: "Show the offline indexing path and online query path."
    },
    {
      title: "RAG vs Fine-Tuning",
      type: "comparison",
      description: "Visual comparison of external knowledge retrieval and model adaptation."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Identify the Need for RAG",
      task: "For five AI application scenarios, decide whether external retrieval would be useful and explain why."
    },
    {
      title: "Exercise 2 — Build a Tiny Knowledge Base",
      task: "Create ten text documents and design a simple retrieval function."
    },
    {
      title: "Exercise 3 — Grounded Prompt",
      task: "Write a prompt that forces the model to distinguish between supplied evidence and missing information."
    },
    {
      title: "Exercise 4 — RAG vs Fine-Tuning",
      task: "Analyze three real-world requirements and determine whether RAG, fine-tuning, or a combination is appropriate."
    }
  ],

  interviewQuestions: [
    {
      question: "What is RAG?",
      answer: "RAG combines information retrieval with language generation by retrieving relevant external context before generating an answer."
    },
    {
      question: "Why is RAG useful?",
      answer: "It allows an application to supply external, private, domain-specific, or changing information to an LLM at inference time."
    },
    {
      question: "Does RAG eliminate hallucinations?",
      answer: "No. It can reduce unsupported generation when retrieval and grounding work correctly, but retrieval and generation can still fail."
    },
    {
      question: "What is grounding?",
      answer: "Grounding means basing generated responses on supplied evidence or trusted information."
    },
    {
      question: "RAG or fine-tuning?",
      answer: "RAG is generally focused on providing external knowledge, while fine-tuning changes model behavior or specialization. They solve different problems."
    },
    {
      question: "What are the main phases of RAG?",
      answer: "A typical system has an indexing phase and a query-time retrieval and generation phase."
    }
  ],

  commonMistakes: [
    "Assuming RAG automatically guarantees factual answers.",
    "Retrieving too much irrelevant information.",
    "Ignoring document quality.",
    "Using poor chunking strategies.",
    "Failing to evaluate retrieval separately from generation.",
    "Treating retrieved text as trusted instructions.",
    "Ignoring source conflicts.",
    "Using RAG when the task does not require external knowledge."
  ],

  keyTakeaways: [
    "RAG connects LLM generation with external knowledge.",
    "Retrieval happens before generation.",
    "RAG is useful for private, changing, and domain-specific information.",
    "Grounding attempts to connect answers with evidence.",
    "RAG can reduce some hallucination scenarios but does not eliminate them.",
    "RAG and fine-tuning solve different problems.",
    "A reliable RAG system requires good retrieval, context construction, prompting, generation, and evaluation."
  ]
};

export default lesson;