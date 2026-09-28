export const lesson11 = {
  id: "lesson11",
  moduleId: "module7",
  title: "Multi-Step, Multi-Hop & Agentic RAG",
  subtitle: "Build retrieval systems that reason across multiple information sources and retrieval steps",
  description:
    "Learn how advanced RAG systems handle questions that require multiple retrieval operations, intermediate reasoning, query decomposition, iterative retrieval, routing, and controlled agentic workflows.",
  difficulty: "Advanced",
  estimatedTime: "30–35 minutes",

  learningObjectives: [
    "Explain multi-hop retrieval.",
    "Understand why some questions require multiple retrieval steps.",
    "Design multi-step retrieval workflows.",
    "Understand iterative retrieval.",
    "Understand corrective retrieval.",
    "Understand agentic RAG conceptually.",
    "Design retrieval routing and stopping conditions.",
    "Identify risks of uncontrolled agentic retrieval."
  ],

  sections: [
    {
      title: "Why Single-Step Retrieval Can Fail",
      content: `
Some questions cannot be answered from one document.

Example:

"Who founded Company A, and what university did that person's co-founder attend?"

This may require:

Step 1:
Find Company A founders.

Step 2:
Identify the co-founder.

Step 3:
Retrieve the co-founder's education.

Step 4:
Combine the evidence.

A single query may not retrieve all required information.

This is a multi-hop problem.
      `
    },

    {
      title: "What Is Multi-Hop Retrieval?",
      content: `
Multi-hop retrieval means retrieving information in multiple stages where one retrieval result helps determine the next retrieval step.

Conceptually:

Question
   ↓
Retrieve A
   ↓
Intermediate Entity
   ↓
Construct Query B
   ↓
Retrieve B
   ↓
Combine Evidence
   ↓
Generate Answer

The retrieval process therefore becomes conditional.

The output of one retrieval step influences the next step.
      `
    },

    {
      title: "Multi-Step Retrieval",
      content: `
Multi-step retrieval is a broader concept.

A system may perform:

Step 1 — Understand question
Step 2 — Search knowledge
Step 3 — Inspect evidence
Step 4 — Identify missing information
Step 5 — Search again
Step 6 — Combine evidence
Step 7 — Generate answer

The important principle is:

Retrieve
→ inspect
→ identify information gap
→ retrieve again.
      `
    },

    {
      title: "Query Decomposition for Multi-Hop RAG",
      content: `
A complex question can be decomposed into sub-questions.

Example:

"Which department offers the course taught by the professor who authored the referenced research paper?"

Sub-questions:

Q1:
Who authored the paper?

Q2:
Which professor is associated with that author?

Q3:
Which course does the professor teach?

Q4:
Which department offers the course?

Each answer becomes input to the next step.

This creates a retrieval dependency graph.
      `
    },

    {
      title: "Dependency Graph",
      content: `
A multi-hop workflow can be represented as:

                Main Question
                      ↓
                 Find Author
                      ↓
               Identify Professor
                      ↓
                Find Course
                      ↓
             Find Department
                      ↓
                  Answer

The retrieval stages are not independent.

Each stage depends on information discovered earlier.
      `
    },

    {
      title: "Iterative Retrieval",
      content: `
Instead of deciding every retrieval query at the beginning, the system can retrieve iteratively.

Loop:

Question
  ↓
Retrieve
  ↓
Inspect Evidence
  ↓
Enough Evidence?
 /       \
Yes       No
 |         |
Answer   New Query
            ↓
         Retrieve
            ↓
          Inspect

The system stops when sufficient evidence has been collected or a stopping condition is reached.
      `
    },

    {
      title: "Corrective Retrieval",
      content: `
Sometimes the first retrieval attempt fails.

Example:

Query:
"attendance shortage examination rules"

Retrieved results:
mostly irrelevant.

A corrective system can detect poor retrieval and attempt:

- query rewriting
- broader search
- alternate search terms
- metadata relaxation
- different retrieval method
- another knowledge source

Conceptually:

Retrieve
  ↓
Evaluate Retrieval
  ↓
Good?
 ├── Yes → Continue
 └── No → Correct Query / Strategy
              ↓
           Retrieve Again
      `
    },

    {
      title: "Retrieval Routing",
      content: `
Different questions may require different sources.

Example:

Question
  ↓
Router
  ├── Course Material
  ├── Policy Database
  ├── Research Papers
  ├── Structured Database
  └── External Search

Routing prevents a system from applying one retrieval method to every problem.
      `
    },

    {
      title: "Agentic RAG",
      content: `
Agentic RAG allows a model-driven controller to decide which retrieval or tool action should happen next.

A conceptual loop is:

User Question
     ↓
Agent / Controller
     ↓
Choose Action
     ↓
Retrieve / Search / Tool
     ↓
Observe Result
     ↓
Update State
     ↓
Choose Next Action
     ↓
...
     ↓
Final Answer

The agent does not simply retrieve once.

It can adapt based on intermediate results.
      `
    },

    {
      title: "Controlled Agentic RAG",
      content: `
Unrestricted agentic behavior can be expensive and unpredictable.

A production system should define boundaries.

Examples:

Maximum retrieval steps = 4
Maximum tool calls = 6
Maximum context tokens = 8,000
Maximum execution time = 10 seconds

The controller must also have stopping conditions.

Possible stop reasons:

- sufficient evidence
- answer found
- no useful results
- maximum iterations reached
- timeout
- authorization failure
      `
    },

    {
      title: "Tool-Enhanced RAG",
      content: `
A RAG system can use tools beyond vector search.

Example:

Question:
"What was the revenue reported by the company in Q4?"

The system might use:

Document Search
+
Structured Financial Database
+
Calculation Tool

The workflow could be:

Question
 ↓
Router
 ↓
Document Retrieval
 ↓
Database Query
 ↓
Calculation
 ↓
Evidence Combination
 ↓
Answer
      `
    },

    {
      title: "Knowledge Graph + RAG",
      content: `
Some multi-hop problems are naturally represented as relationships.

Example:

Professor
   ↓ teaches
Course
   ↓ belongs to
Department

A knowledge graph can represent these relationships explicitly.

RAG can then retrieve supporting documents around the graph relationships.

A combined architecture can be:

Question
 ↓
Entity Detection
 ↓
Knowledge Graph
 ↓
Related Entities
 ↓
Document Retrieval
 ↓
Evidence
 ↓
Generation
      `
    },

    {
      title: "Evidence Accumulation",
      content: `
Multi-step systems should preserve evidence from every retrieval stage.

Example:

Hop 1:
Source A supports entity identification.

Hop 2:
Source B supports the second relationship.

Hop 3:
Source C supports the final fact.

The final answer should retain:

Claim
+
Supporting Evidence
+
Provenance

This prevents intermediate retrieval results from disappearing from the final audit trail.
      `
    },

    {
      title: "Multi-Hop Failure Modes",
      content: `
Advanced retrieval creates new failure modes.

1. Wrong first hop
2. Incorrect entity identification
3. Query propagation error
4. Retrieval drift
5. Infinite retrieval loops
6. Excessive tool calls
7. Context accumulation
8. Conflicting intermediate evidence
9. Cost explosion
10. Latency explosion
11. Unsupported final synthesis

A small error in an early hop can propagate through later steps.
      `
    },

    {
      title: "Stopping Conditions",
      content: `
A multi-step system needs explicit stopping logic.

Possible conditions:

STOP IF:
- sufficient evidence exists
- all required sub-questions are answered
- confidence threshold is reached
- maximum hops are reached
- time budget is exhausted
- no additional retrieval value is expected

Without stopping conditions, agentic retrieval can become unnecessarily expensive.
      `
    },

    {
      title: "Complete Multi-Hop RAG Architecture",
      content: `
                         User Question
                              ↓
                         Controller
                              ↓
                    Question Analysis
                              ↓
                       Query Planner
                              ↓
                ┌─────────────┴─────────────┐
                ↓                           ↓
          Retrieval A                 Retrieval B
                ↓                           ↓
          Evidence A                  Evidence B
                └─────────────┬─────────────┘
                              ↓
                       Evidence Manager
                              ↓
                      Missing Information?
                         /           \
                       Yes            No
                        ↓              ↓
                 New Retrieval       Context
                        ↓              ↓
                   More Evidence     LLM
                        └──────┬───────┘
                               ↓
                         Validation
                               ↓
                           Answer
      `
    }
  ],

  architecture: [
    {
      title: "Multi-Hop Retrieval System",
      task: "Design a retrieval workflow where each retrieval stage depends on information discovered by the previous stage."
    },
    {
      title: "Agentic RAG Controller",
      task: "Design a bounded controller with retrieval, observation, state, tool calls, and stopping conditions."
    },
    {
      title: "Corrective Retrieval System",
      task: "Design a system that detects poor retrieval and automatically changes its search strategy."
    }
  ],

  formulas: [
    {
      name: "Hop Budget",
      formula: "H ≤ H_max",
      explanation: "The number of retrieval hops should remain below a configured maximum."
    },
    {
      name: "Tool Budget",
      formula: "Calls ≤ C_max",
      explanation: "Agentic workflows should limit the number of external operations."
    },
    {
      name: "Total Multi-Hop Latency",
      formula: "T_total ≈ Σ(T_retrieval_i + T_reasoning_i + T_tool_i)",
      explanation: "Multi-step systems accumulate the latency of each retrieval and reasoning step."
    },
    {
      name: "Evidence Coverage",
      formula: "Coverage = Answered Required Sub-Questions / Total Required Sub-Questions",
      explanation: "A conceptual measure of whether all required information has been retrieved."
    }
  ],

  codeExamples: [
    {
      title: "Simple Multi-Hop Retrieval",
      language: "python",
      code: `def multi_hop(question, retrieve):
    evidence = []

    first_results = retrieve(question)
    evidence.extend(first_results)

    entity = extract_entity(first_results)

    if entity:
        second_query = f"information about {entity}"
        second_results = retrieve(second_query)
        evidence.extend(second_results)

    return evidence


def extract_entity(results):
    if not results:
        return None

    return results[0].get("entity")`
    },

    {
      title: "Bounded Retrieval Loop",
      language: "python",
      code: `def bounded_retrieval(question, retrieve, max_steps=3):
    current_query = question
    evidence = []

    for _ in range(max_steps):
        results = retrieve(current_query)

        if not results:
            break

        evidence.extend(results)

        if enough_evidence(evidence):
            break

        current_query = build_next_query(
            current_query,
            results
        )

    return evidence`
    },

    {
      title: "Agentic Retrieval State",
      language: "typescript",
      code: `type RetrievalState = {
  question: string;
  currentQuery: string;
  hopCount: number;
  maxHops: number;
  evidence: string[];
  status:
    | "searching"
    | "sufficient"
    | "failed"
    | "limit_reached";
};`
    }
  ],

  exercises: [
    "What is multi-hop retrieval?",
    "Why can a single retrieval operation fail on complex questions?",
    "Explain query decomposition in multi-hop RAG.",
    "What is iterative retrieval?",
    "What is corrective retrieval?",
    "What is agentic RAG?",
    "Why should agentic retrieval have a maximum hop limit?",
    "Explain retrieval routing.",
    "How can knowledge graphs complement RAG?"
  ],

  codingExercises: [
    {
      title: "Multi-Hop Retriever",
      task: "Build a toy multi-hop retriever where the first result determines the second query."
    },
    {
      title: "Bounded Retrieval Agent",
      task: "Implement a retrieval loop with maximum hops, evidence accumulation, and stopping conditions."
    },
    {
      title: "Corrective Retrieval",
      task: "Implement a simple system that changes the query when the initial retrieval result set is too weak."
    }
  ],

  architectureExercises: [
    "Design a multi-hop university policy assistant.",
    "Design an agentic RAG system with strict tool limits.",
    "Design a knowledge-graph-assisted RAG system.",
    "Design a corrective retrieval architecture.",
    "Design observability for multi-step retrieval."
  ],

  comparisons: [
    {
      topic: "Single-Step vs Multi-Hop RAG",
      points: [
        "Single-step RAG performs one main retrieval operation.",
        "Multi-hop RAG performs dependent retrieval operations.",
        "Single-step systems are simpler and usually cheaper.",
        "Multi-hop systems can answer questions requiring relationships across sources."
      ]
    },
    {
      topic: "Standard RAG vs Agentic RAG",
      points: [
        "Standard RAG generally follows a predefined retrieval flow.",
        "Agentic RAG allows a controller to choose actions dynamically.",
        "Agentic systems can adapt to intermediate results.",
        "Agentic systems require stronger limits, monitoring, and cost controls."
      ]
    }
  ],

  commonMistakes: [
    "Using multi-hop retrieval for simple questions.",
    "Allowing unlimited retrieval iterations.",
    "Failing to preserve evidence from intermediate hops.",
    "Allowing early retrieval errors to propagate unchecked.",
    "Ignoring tool-call cost.",
    "Ignoring latency accumulation.",
    "Treating agent decisions as automatically correct.",
    "Failing to define stopping conditions.",
    "Losing authorization checks during later retrieval steps."
  ],

  interviewQuestions: [
    "What is multi-hop retrieval?",
    "What is the difference between multi-step and single-step RAG?",
    "What is agentic RAG?",
    "Why are stopping conditions important?",
    "What is corrective retrieval?",
    "How would you prevent an agentic RAG loop from running indefinitely?",
    "How can knowledge graphs complement RAG?",
    "What are the major failure modes of multi-hop retrieval?",
    "How would you monitor an agentic retrieval workflow?",
    "How would you control cost in an agentic RAG system?"
  ],

  summary: `
Some questions require more than one retrieval operation.

Multi-hop RAG retrieves information in dependent stages.
Multi-step RAG can iteratively inspect evidence and retrieve again.
Corrective retrieval changes strategy when the first search fails.
Agentic RAG allows a controller to dynamically choose retrieval or tool actions.

These systems are powerful but require strict limits on:

Hops
Tool calls
Latency
Context
Cost
Authorization

The goal is not maximum autonomy.

The goal is controlled retrieval that obtains sufficient evidence and stops reliably.
  `,

  keyTakeaways: [
    "Some questions require multiple retrieval operations.",
    "Multi-hop retrieval uses intermediate information to guide later searches.",
    "Query decomposition can create dependent retrieval tasks.",
    "Iterative retrieval allows the system to search again when evidence is insufficient.",
    "Corrective retrieval responds to poor initial search results.",
    "Agentic RAG dynamically selects retrieval or tool actions.",
    "Multi-step systems require explicit budgets and stopping conditions.",
    "Evidence must be preserved across retrieval hops.",
    "Early retrieval errors can propagate through later steps.",
    "Controlled autonomy is more important than unlimited retrieval."
  ],

  visualReferences: [
    "Multi-hop retrieval architecture",
    "Query decomposition dependency graph",
    "Iterative retrieval loop",
    "Agentic RAG controller",
    "Corrective retrieval flowchart",
    "Knowledge graph plus RAG architecture"
  ]
};

export default lesson11;