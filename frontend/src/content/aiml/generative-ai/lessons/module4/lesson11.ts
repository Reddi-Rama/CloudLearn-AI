const lesson = {
  id: "lesson11",
  moduleId: "module4",
  title: "Advanced RAG: Query Transformation, Multi-Step & Agentic Retrieval",
  subtitle: "Move beyond basic retrieval with query decomposition, rewriting, routing, multi-hop reasoning, iterative retrieval, and agentic workflows.",

  overview: `
Basic RAG follows a relatively simple pattern:

Question
  ↓
Retrieve
  ↓
Generate

Advanced RAG systems recognize that real questions can be ambiguous,
multi-part, conversational, temporal, or dependent on several sources.

An advanced system can therefore perform:

Question
   ↓
Understand
   ↓
Rewrite / Decompose
   ↓
Route
   ↓
Retrieve
   ↓
Inspect Evidence
   ↓
Retrieve Again if Necessary
   ↓
Synthesize
   ↓
Validate
   ↓
Answer

This lesson introduces advanced retrieval architectures while emphasizing
that additional complexity should be justified by measurable improvements.
`,

  learningObjectives: [
    "Understand advanced RAG architecture.",
    "Understand query rewriting.",
    "Understand query decomposition.",
    "Understand sub-question generation.",
    "Understand multi-hop retrieval.",
    "Understand iterative retrieval.",
    "Understand retrieval routing.",
    "Understand metadata-aware routing.",
    "Understand agentic RAG.",
    "Understand tool-assisted retrieval.",
    "Understand temporal retrieval.",
    "Understand corrective retrieval.",
    "Understand when advanced RAG is unnecessary."
  ],

  prerequisites: [
    "RAG fundamentals",
    "Retrieval strategies",
    "Hybrid search",
    "Reranking",
    "Grounded generation",
    "Prompt engineering",
    "Basic agent concepts"
  ],

  keyTerms: [
    {
      term: "Query Transformation",
      definition: "Changing a user query into one or more representations that are more suitable for retrieval."
    },
    {
      term: "Query Decomposition",
      definition: "Breaking a complex question into smaller sub-questions."
    },
    {
      term: "Multi-Hop Retrieval",
      definition: "Retrieving evidence through multiple dependent retrieval steps."
    },
    {
      term: "Query Routing",
      definition: "Selecting an appropriate data source or retrieval strategy for a query."
    },
    {
      term: "Agentic RAG",
      definition: "A RAG architecture where an agent can decide when and how to retrieve information or use tools."
    },
    {
      term: "Iterative Retrieval",
      definition: "Repeated retrieval where newly discovered information influences subsequent retrieval."
    },
    {
      term: "Corrective RAG",
      definition: "A retrieval architecture that evaluates retrieved evidence and performs corrective actions when retrieval quality is inadequate."
    }
  ],

  sections: [
    {
      title: "1. Why Basic RAG Is Sometimes Insufficient",
      explanation: `
Consider:

"Compare the 2024 and 2026 attendance policies and explain
which department changed its requirement."

This requires:

1. Find 2024 policy.
2. Find 2026 policy.
3. Identify departments.
4. Compare versions.
5. Determine changes.
6. Generate a grounded explanation.

One retrieval call may not be enough.
`
    },

    {
      title: "2. Query Rewriting",
      explanation: `
A conversational query may not contain enough information.

Conversation:

User:
"What about the second one?"

The system can rewrite it using conversation context:

"What are the prerequisites for the second course in the AI program?"

Retrieval then operates on the standalone query.
`
    },

    {
      title: "3. Query Decomposition",
      explanation: `
Complex questions can be divided.

Original:

"Compare the B.Tech IT and CSE programs, list their duration,
and identify which subjects are common."

Sub-questions:

1. What is the duration of B.Tech IT?
2. What is the duration of B.Tech CSE?
3. What subjects are in IT?
4. What subjects are in CSE?
5. Which subjects overlap?

The answers can then be combined.
`
    },

    {
      title: "4. Parallel Sub-Question Retrieval",
      explanation: `
Independent sub-questions can sometimes be retrieved in parallel.

Question
   ↓
Decompose
   ↓
+-----------+-----------+
|           |           |
Query A     Query B     Query C
|           |           |
Retrieve    Retrieve    Retrieve
+-----------+-----------+
            ↓
         Synthesis
`
    },

    {
      title: "5. Sequential Multi-Hop Retrieval",
      explanation: `
Some questions require one result before the next query can be formed.

Example:

Question:
"Who founded the organization that created technology X?"

Step 1:
Retrieve technology X.

Step 2:
Identify the organization.

Step 3:
Retrieve organization history.

Step 4:
Find founder.

This is sequential multi-hop retrieval.
`
    },

    {
      title: "6. Query Routing",
      explanation: `
Different questions may require different sources.

Example:

"What is the price of product X?"
→ Product database

"What is the product documentation?"
→ Documentation index

"What is today's exchange rate?"
→ External API

"What does this PDF say?"
→ Document retrieval

A router determines the appropriate information source.
`
    },

    {
      title: "7. Routing by Intent",
      explanation: `
A query can first be classified.

Possible intents:

• Documentation question
• Database lookup
• Policy question
• General knowledge
• Calculation
• Troubleshooting
• Current information

Then the system selects the appropriate tool or retrieval source.
`
    },

    {
      title: "8. Routing by Metadata",
      explanation: `
Metadata can guide routing.

Example:

department = IT
document_type = policy

The system can restrict retrieval to:

IT policy documents.
`
    },

    {
      title: "9. Agentic RAG",
      explanation: `
In agentic RAG, an AI agent can decide:

• Whether retrieval is needed.
• Which source to search.
• Which query to use.
• Whether another search is necessary.
• Whether evidence is sufficient.
• Which tool should be used next.

Conceptually:

User
 ↓
Agent
 ├── Search
 ├── Database
 ├── Calculator
 ├── Documentation
 └── API
 ↓
Evidence
 ↓
Answer
`
    },

    {
      title: "10. Agentic RAG vs Basic RAG",
      explanation: `
Basic RAG:

Question
 ↓
Retriever
 ↓
LLM

Agentic RAG:

Question
 ↓
Agent
 ↓
Decide
 ↓
Tool
 ↓
Inspect result
 ↓
Decide again
 ↓
Tool / Retrieval
 ↓
Synthesize

Agentic systems are more flexible but more complex and potentially
more expensive.
`
    },

    {
      title: "11. Iterative Retrieval",
      explanation: `
The first retrieval may reveal that more information is needed.

Example:

Initial question:
"What caused the outage?"

Retrieved:
"The service failed after dependency Y became unavailable."

The system can perform a second retrieval:

"What caused dependency Y to become unavailable?"

This creates an iterative evidence-gathering loop.
`
    },

    {
      title: "12. Corrective Retrieval",
      explanation: `
The system can inspect retrieved results.

If evidence quality is poor:

Retrieve again.

Possible corrective actions:

• Rewrite query
• Increase top-k
• Use another retriever
• Use keyword search
• Search another collection
• Apply different metadata filters
`
    },

    {
      title: "13. Temporal RAG",
      explanation: `
Time-sensitive questions require temporal reasoning.

Question:

"What was the policy before January 2025?"

The system must consider:

effective date
expiration date
version
publication date

Temporal metadata should be part of the retrieval design.
`
    },

    {
      title: "14. Hierarchical RAG",
      explanation: `
A hierarchical knowledge base can be searched from broad to narrow.

Example:

Organization
 ↓
Department
 ↓
Project
 ↓
Document
 ↓
Section
 ↓
Chunk

This can reduce search space and improve contextual understanding.
`
    },

    {
      title: "15. Self-Query Retrieval",
      explanation: `
A system can transform a natural-language query into:

Semantic query:
"attendance policy"

Structured filters:

department = IT
year = 2026
document_type = policy

This allows natural language to control both semantic retrieval and metadata filtering.
`
    },

    {
      title: "16. Tool-Augmented RAG",
      explanation: `
RAG does not have to be limited to vector search.

A system can combine:

Vector search
+
SQL
+
Web search
+
Calculator
+
Knowledge graph
+
APIs

The correct source depends on the question.
`
    },

    {
      title: "17. Knowledge Graph + RAG",
      explanation: `
Knowledge graphs represent explicit relationships.

Example:

Student
  ↓ enrolled_in
Course
  ↓ belongs_to
Department

Vector search is strong for semantic text retrieval.

Knowledge graphs are strong for explicit relationships.

Combining them can support complex questions.
`
    },

    {
      title: "18. Agentic Loop",
      explanation: `
A conceptual loop:

Question
 ↓
Plan
 ↓
Retrieve
 ↓
Observe
 ↓
Is evidence sufficient?
 ├── Yes → Answer
 └── No
       ↓
   Reformulate
       ↓
   Retrieve again
`
    },

    {
      title: "19. Failure Risks of Agentic RAG",
      explanation: `
Additional complexity introduces risks:

• Infinite loops
• Repeated searches
• Tool misuse
• High latency
• High cost
• Poor query planning
• Wrong routing
• Error propagation

Therefore agents require:

• Maximum steps
• Timeouts
• Tool permissions
• Validation
• Fallbacks
• Logging
`
    },

    {
      title: "20. Choosing the Right Architecture",
      explanation: `
Use basic RAG when:

• Questions are straightforward.
• One retrieval step is sufficient.
• Data source is simple.

Use advanced RAG when:

• Queries are complex.
• Multiple sources are required.
• Questions require several evidence steps.
• Routing is necessary.
• Retrieval must adapt dynamically.

Complexity should be justified by actual requirements.
`
    }
  ],

  mathematicalIntuition: [
    {
      concept: "Query Decomposition",
      formula: `
Q → {q1, q2, ..., qn}
`,
      explanation: "A complex question Q is transformed into multiple sub-queries."
    },
    {
      concept: "Evidence Coverage",
      formula: `
Coverage = required_subquestions_answered / total_subquestions
`,
      explanation: "Measures whether all parts of a decomposed question received sufficient evidence."
    },
    {
      concept: "Agent Cost",
      formula: `
Total Cost ≈ Σ(tool calls + retrieval + model calls)
`,
      explanation: "Agentic workflows can increase cost because multiple actions may occur for one user question."
    },
    {
      concept: "Agent Latency",
      formula: `
Latency ≈ Σ sequential step latency + parallel branch latency
`,
      explanation: "Sequential agent steps accumulate latency while independent branches can sometimes execute concurrently."
    }
  ],

  codeExamples: [
    {
      title: "Simple Query Decomposition",
      language: "python",
      code: `
def decompose_question(question):
    return [
        "What is the first part of the question?",
        "What is the second part of the question?"
    ]


sub_questions = decompose_question(
    "Compare two university programs."
)

for question in sub_questions:
    print(question)
`
    },

    {
      title: "Parallel Retrieval Concept",
      language: "python",
      code: `
def retrieve_subquestions(
    questions,
    retriever
):
    results = {}

    for question in questions:
        results[question] = retriever(
            question
        )

    return results
`
    },

    {
      title: "Simple Router",
      language: "python",
      code: `
def route_query(query):
    query = query.lower()

    if "price" in query:
        return "product_database"

    if "documentation" in query:
        return "documentation"

    if "calculate" in query:
        return "calculator"

    return "general_rag"


print(route_query(
    "What is the product price?"
))
`
    },

    {
      title: "Iterative Retrieval Concept",
      language: "python",
      code: `
def iterative_retrieval(
    question,
    retriever,
    evaluator,
    max_steps=3
):
    current_query = question

    for step in range(max_steps):
        evidence = retriever(
            current_query
        )

        if evaluator(evidence):
            return evidence

        current_query = (
            "Find more specific evidence about: "
            + current_query
        )

    return []
`
    },

    {
      title: "Agentic RAG Skeleton",
      language: "python",
      code: `
def agentic_rag(
    question,
    router,
    tools,
    max_steps=5
):
    history = []

    for _ in range(max_steps):
        action = router(
            question,
            history
        )

        if action["type"] == "answer":
            return action["content"]

        tool_name = action["tool"]
        tool_input = action["input"]

        result = tools[
            tool_name
        ](tool_input)

        history.append({
            "action": action,
            "result": result
        })

    return "Unable to complete the request."
`
    }
  ],

  comparisonTables: [
    {
      title: "Basic vs Advanced RAG",
      columns: [
        "Aspect",
        "Basic RAG",
        "Advanced RAG"
      ],
      rows: [
        ["Retrieval", "Usually one main retrieval step", "Can use multiple retrieval steps"],
        ["Query processing", "Minimal", "Rewrite/decompose/route"],
        ["Sources", "Often one collection", "Multiple sources/tools"],
        ["Reasoning", "Simple", "Can involve multi-step evidence gathering"],
        ["Latency", "Lower", "Potentially higher"],
        ["Complexity", "Lower", "Higher"],
        ["Debugging", "Simpler", "More difficult"]
      ]
    },
    {
      title: "Query Strategies",
      columns: [
        "Strategy",
        "Useful When"
      ],
      rows: [
        ["Rewrite", "Conversational or unclear query"],
        ["Expand", "Vocabulary mismatch"],
        ["Decompose", "Multi-part question"],
        ["Multi-hop", "Dependent evidence"],
        ["Route", "Multiple knowledge sources"],
        ["Iterative", "Initial evidence is insufficient"],
        ["Self-query", "Natural language plus structured filters"]
      ]
    }
  ],

  visualReferences: [
    {
      title: "Advanced RAG Architecture",
      type: "architecture",
      description: "Query understanding → transformation → routing → retrieval → evaluation → iterative retrieval → generation."
    },
    {
      title: "Query Decomposition",
      type: "tree",
      description: "One complex question branches into multiple sub-questions and retrieval paths."
    },
    {
      title: "Multi-Hop Retrieval",
      type: "flowchart",
      description: "Retrieved evidence from one step creates the query for the next step."
    },
    {
      title: "Agentic RAG Loop",
      type: "diagram",
      description: "Agent → tool → observation → decision → another tool or final answer."
    },
    {
      title: "Query Router",
      type: "architecture",
      description: "Questions routed to vector search, SQL, documentation, calculator, or external APIs."
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Query Decomposition",
      task: "Take five complex questions and break each into independent or dependent sub-questions."
    },
    {
      title: "Exercise 2 — Query Router",
      task: "Build a router that sends questions to vector search, SQL, calculator, or documentation search."
    },
    {
      title: "Exercise 3 — Multi-Hop Retrieval",
      task: "Design a two- or three-step retrieval workflow for a question requiring evidence from multiple documents."
    },
    {
      title: "Exercise 4 — Corrective RAG",
      task: "Design conditions under which a system should rewrite a query and retrieve again."
    },
    {
      title: "Exercise 5 — Agentic RAG",
      task: "Design an agent that can retrieve information, inspect results, and perform at most five actions."
    }
  ],

  interviewQuestions: [
    {
      question: "What is advanced RAG?",
      answer: "Advanced RAG extends basic retrieval with techniques such as query transformation, routing, multi-hop retrieval, iterative retrieval, and agentic workflows."
    },
    {
      question: "What is query decomposition?",
      answer: "Breaking a complex question into smaller sub-questions that can be retrieved and answered separately."
    },
    {
      question: "What is multi-hop retrieval?",
      answer: "Retrieving information through multiple dependent steps where one result informs the next search."
    },
    {
      question: "What is query routing?",
      answer: "Selecting the appropriate data source or tool for a query."
    },
    {
      question: "What is agentic RAG?",
      answer: "A RAG architecture in which an agent dynamically decides when and how to retrieve information or use tools."
    },
    {
      question: "Why can agentic RAG be expensive?",
      answer: "It may perform multiple model calls, retrieval operations, and tool calls for a single user request."
    },
    {
      question: "When should advanced RAG not be used?",
      answer: "When a simple retrieval-and-generation pipeline already satisfies the application's requirements."
    }
  ],

  commonMistakes: [
    "Using agents when simple RAG is sufficient.",
    "Allowing unlimited retrieval loops.",
    "Ignoring tool permissions.",
    "Failing to set maximum steps.",
    "Using query decomposition for simple questions.",
    "Routing incorrectly.",
    "Not logging intermediate agent actions.",
    "Ignoring latency and cost."
  ],

  keyTakeaways: [
    "Advanced RAG handles questions that basic retrieval cannot efficiently solve.",
    "Query rewriting improves conversational retrieval.",
    "Query decomposition breaks complex questions into manageable parts.",
    "Multi-hop retrieval gathers dependent evidence.",
    "Query routing selects appropriate information sources.",
    "Agentic RAG enables dynamic retrieval and tool use.",
    "Iterative retrieval can correct weak initial evidence.",
    "Advanced systems require strict limits, validation, logging, and evaluation."
  ]
};

export default lesson;