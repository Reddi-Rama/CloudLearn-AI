const lesson = {
  id: "lesson4",
  moduleId: "module3",
  title: "Advanced Prompt Design & Reasoning Patterns",
  description:
    "Explore advanced prompt design patterns for complex tasks, including decomposition, planning, verification, critique, iterative refinement, structured reasoning workflows, and multi-stage generation.",

  learningObjectives: [
    "Understand why complex AI tasks require structured prompting.",
    "Design prompts that decompose complex problems into manageable stages.",
    "Understand planning-oriented prompting.",
    "Understand verification and validation workflows.",
    "Design critique and refinement pipelines.",
    "Understand multi-stage prompt architectures.",
    "Understand how intermediate representations can improve workflows.",
    "Understand the trade-offs between single-prompt and multi-prompt systems.",
    "Design reliable prompts for complex AI applications."
  ],

  sections: [
    {
      id: "complex-task",
      title: "1. Why Complex Tasks Need Structured Prompting",
      content: `
Simple tasks can often be solved with a single instruction.

Example:

"Translate this sentence into French."

Complex tasks are different.

Consider:

"Analyze this software project, identify architectural problems, suggest improvements, create a migration plan, and produce a technical report."

This request contains multiple operations:

1. Understand the project.
2. Extract architecture.
3. Identify problems.
4. Evaluate problems.
5. Generate recommendations.
6. Create a migration plan.
7. Produce documentation.

A single prompt can attempt all of these tasks, but a structured workflow may be easier to evaluate and maintain.

Conceptually:

Complex Task
      ↓
Task Analysis
      ↓
Decomposition
      ↓
Subtasks
      ↓
Intermediate Results
      ↓
Verification
      ↓
Final Generation

This is one of the central ideas of advanced prompt engineering.
      `
    },

    {
      id: "decomposition",
      title: "2. Advanced Task Decomposition",
      content: `
Task decomposition means breaking a complex objective into smaller operations.

For example:

OBJECTIVE:
Create a technical report from a software repository.

DECOMPOSITION:

Stage 1:
Identify technologies.

Stage 2:
Identify project structure.

Stage 3:
Identify architecture.

Stage 4:
Analyze dependencies.

Stage 5:
Identify problems.

Stage 6:
Generate recommendations.

Stage 7:
Create final report.

Each stage has a narrower responsibility.

A useful abstraction is:

T = {t₁, t₂, t₃, ..., tₙ}

where T represents the complete task and each t represents a subtask.

The subtasks can then be executed sequentially or, when independent, in parallel.
      `
    },

    {
      id: "planning",
      title: "3. Planning-Oriented Prompting",
      content: `
Planning prompting asks the model to establish a structured plan before performing a complex task.

Example:

"Before generating the implementation, identify the required components, dependencies, data flow, and validation steps."

The workflow becomes:

Requirement
   ↓
Plan
   ↓
Implementation
   ↓
Validation

Planning can reduce the chance that a complex task is approached in an unstructured way.

For example, a coding assistant might first identify:

• Files involved
• Components required
• Dependencies
• API interactions
• Data structures
• Testing strategy

Then implementation can follow the plan.

A production system may store the plan as an intermediate structured object rather than exposing every internal reasoning step.
      `
    },

    {
      id: "intermediate-representation",
      title: "4. Intermediate Representations",
      content: `
Complex AI workflows can benefit from intermediate representations.

Instead of:

User request
→
Final answer

Use:

User request
→
Structured interpretation
→
Analysis
→
Plan
→
Final answer

For example:

User:
"Build a learning plan for machine learning."

Intermediate representation:

{
  "learner_level": "beginner",
  "goal": "machine learning",
  "duration": "8 weeks",
  "constraints": []
}

The next stage can use this structured representation.

Benefits:

• Easier validation
• Easier debugging
• Easier transformation
• Better modularity
• Better observability
      `
    },

    {
      id: "verification",
      title: "5. Verification-Oriented Prompting",
      content: `
Verification checks whether a generated result satisfies requirements.

Suppose an AI generates a JSON object.

A verification stage can check:

• Required fields
• Allowed values
• Data types
• Missing information
• Internal consistency

Workflow:

Generation
   ↓
Validation
   ↓
PASS ─────→ Continue
   │
   ↓
FAIL
   ↓
Regenerate / Repair

Verification does not have to be performed by another language-model call.

Whenever possible, deterministic checks should be performed by ordinary software.

Example:

if (!allowedCategories.includes(result.category)) {
    rejectResult();
}

This is often more reliable than asking a model to validate a simple enum constraint.
      `
    },

    {
      id: "critique",
      title: "6. Critique-and-Revision Pattern",
      content: `
A critique workflow separates generation from evaluation.

Stage 1:
Generate an answer.

Stage 2:
Evaluate the answer against explicit criteria.

Stage 3:
Identify problems.

Stage 4:
Generate a revised answer.

Architecture:

INPUT
 ↓
GENERATION
 ↓
DRAFT
 ↓
CRITIQUE
 ↓
FEEDBACK
 ↓
REVISION
 ↓
FINAL

Example:

Generate:
"Explain database normalization."

Critique:
"Check whether the explanation correctly covers 1NF, 2NF, and 3NF."

Revision:
"Rewrite the explanation using the identified corrections."

This pattern is useful when quality matters more than minimum latency.
      `
    },

    {
      id: "rubric",
      title: "7. Rubric-Based Prompting",
      content: `
A rubric defines criteria used to evaluate an output.

Example:

Evaluate the answer using:

Accuracy: 0–5
Completeness: 0–5
Clarity: 0–5
Format compliance: 0–5

The rubric creates explicit evaluation dimensions.

Workflow:

Output
 ↓
Rubric
 ↓
Evaluation
 ↓
Score / Feedback
 ↓
Revision

Rubrics are useful because vague instructions such as:

"Make it better."

provide little guidance.

A rubric transforms quality into explicit criteria.
      `
    },

    {
      id: "single-vs-multi",
      title: "8. Single-Prompt vs Multi-Stage Design",
      content: `
There are two broad approaches.

SINGLE PROMPT:

Input
 ↓
Large Prompt
 ↓
Model
 ↓
Output

MULTI-STAGE:

Input
 ↓
Stage 1
 ↓
Stage 2
 ↓
Stage 3
 ↓
Output

Single prompts have advantages:

• Lower implementation complexity
• Fewer API calls
• Lower latency
• Easier deployment

Multi-stage workflows have advantages:

• Easier debugging
• More modularity
• Easier validation
• Specialized stages
• Better observability

However:

More stages
→
More calls
→
More cost
→
More latency
→
More opportunities for failure

The correct architecture depends on the task.
      `
    },

    {
      id: "parallel",
      title: "9. Parallel Reasoning Workflows",
      content: `
Independent subtasks can sometimes be processed separately.

Example:

Analyze a software project for:

• Security
• Performance
• Maintainability

If these analyses are independent:

Project
 ├── Security analysis
 ├── Performance analysis
 └── Maintainability analysis
          ↓
       Combine
          ↓
      Final report

Parallel processing can reduce total wall-clock time when the infrastructure supports concurrent execution.

However, parallelization requires that the subtasks do not depend on one another's outputs.
      `
    },

    {
      id: "routing",
      title: "10. Prompt-Based Task Routing",
      content: `
A model can be used to route requests to specialized workflows.

Example:

User request
    ↓
Classifier / Router
    ├── Coding
    ├── Database
    ├── Networking
    ├── Documentation
    └── General
         ↓
Specialized workflow

For example:

If category = Coding
→
Use coding prompt.

If category = Database
→
Use database prompt.

This architecture can improve specialization.

However, routing decisions should be validated because an incorrect route can cause the wrong workflow to process the request.
      `
    },

    {
      id: "prompt-composition",
      title: "11. Prompt Composition",
      content: `
Large prompts can be assembled from reusable components.

For example:

baseInstructions
+
domainInstructions
+
taskInstructions
+
context
+
outputSchema

This produces:

FinalPrompt

Conceptually:

Final Prompt
=
Base
+
Domain
+
Task
+
Context
+
Output

Benefits:

• Reusability
• Maintainability
• Easier testing
• Easier customization

For example, a company can have:

Base support prompt

Then specialize it for:

Billing
Technical support
Account management
      `
    },

    {
      id: "dynamic-prompts",
      title: "12. Dynamic Prompt Construction",
      content: `
Production applications frequently construct prompts dynamically.

Example:

const prompt = buildPrompt({
  role,
  userLevel,
  task,
  context,
  input,
  outputFormat
});

The values may come from:

• User profile
• Database
• Retrieved documents
• Application state
• Tool results

Therefore:

Static template
+
Runtime data
→
Dynamic prompt

Dynamic construction is powerful but must be carefully controlled.

Untrusted data should not accidentally override trusted application instructions.
      `
    },

    {
      id: "reasoning-vs-output",
      title: "13. Reasoning Structure vs Final Output",
      content: `
A complex task may require internal processing, but the application does not necessarily need every intermediate reasoning detail.

For example:

Task:
Analyze a programming error.

The application may only need:

{
  "cause": "...",
  "fix": "...",
  "verification": "..."
}

The workflow can internally use multiple stages without exposing a long internal reasoning trace.

This distinction is important:

PROCESSING WORKFLOW
≠
USER-FACING OUTPUT

Advanced prompt engineering focuses on designing useful workflows while returning only the information the application actually needs.
      `
    },

    {
      id: "self-consistency",
      title: "14. Multiple-Candidate Generation",
      content: `
For some tasks, multiple candidate outputs can be generated and compared.

Example:

Prompt
 ↓
Candidate A
Candidate B
Candidate C
 ↓
Evaluation
 ↓
Selected result

This can be useful when a task has multiple possible solutions.

For example, a model may generate several software design approaches.

An evaluation stage can compare them using:

• Requirements
• Complexity
• Maintainability
• Performance
• Cost

However, multiple generations increase resource usage.

Therefore this technique should be used when the additional reliability is worth the cost.
      `
    },

    {
      id: "constraint-satisfaction",
      title: "15. Constraint-Based Prompting",
      content: `
Some tasks are best represented as a collection of constraints.

Example:

Generate a database schema satisfying:

• Every table must have a primary key.
• Foreign keys must reference existing tables.
• No duplicate column names.
• Customer email must be unique.

The prompt defines:

OBJECTIVE
+
CONSTRAINTS

The generated solution can then be validated against those constraints.

This creates a useful architecture:

Requirements
 ↓
Generation
 ↓
Constraint validation
 ↓
Accept / Repair
      `
    },

    {
      id: "repair",
      title: "16. Error Repair Prompting",
      content: `
Repair prompting gives the model an existing artifact and asks it to fix a specific problem.

Examples:

• Broken code
• Invalid JSON
• Incorrect SQL
• Poor documentation
• Invalid configuration

Example:

"Repair the following JSON so that it conforms to this schema. Do not change valid fields."

This is different from generation.

Generation:

Requirements
→
New artifact

Repair:

Existing artifact
+
Error
→
Corrected artifact

Repair prompts should clearly identify what must remain unchanged.
      `
    },

    {
      id: "reflection",
      title: "17. Reflection-Oriented Workflows",
      content: `
Reflection-oriented workflows ask the system to inspect an output against explicit criteria.

Example:

"Review the generated SQL and identify possible syntax or logical problems."

This creates:

Generate
 ↓
Inspect
 ↓
Identify issues
 ↓
Correct

Reflection can improve quality for some tasks.

However, reflection is not equivalent to formal verification.

A model can incorrectly conclude that its output is correct.

Therefore:

Model evaluation
+
Deterministic validation
+
External tests

is generally stronger than model self-assessment alone.
      `
    },

    {
      id: "grounding",
      title: "18. Grounded Prompting",
      content: `
Grounded prompting asks the model to base its answer on supplied evidence.

Example:

"Answer using only the following documents."

This is useful for:

• RAG systems
• Enterprise knowledge bases
• Documentation assistants
• Research assistants
• Customer support

A grounding workflow is:

Question
 ↓
Retrieve evidence
 ↓
Prompt with evidence
 ↓
Generate answer
 ↓
Validate evidence relationship

A strong grounded prompt can also specify:

"If the supplied evidence does not contain the answer, state that the information is unavailable."
      `
    },

    {
      id: "source-attribution",
      title: "19. Evidence and Source Attribution",
      content: `
Some AI systems require answers to identify supporting sources.

Example:

"Answer the question and provide the document IDs supporting the answer."

Structured result:

{
  "answer": "...",
  "sources": ["doc-12", "doc-19"]
}

This creates a connection between:

Generated statement
and
Evidence

Source attribution can improve traceability.

However, merely asking a model to provide citations does not guarantee that the citations are valid.

The application may need to validate that referenced sources actually contain relevant information.
      `
    },

    {
      id: "advanced-workflow",
      title: "20. Complete Advanced Prompt Workflow",
      content: `
A sophisticated AI application may use:

USER REQUEST
      ↓
INTENT CLASSIFICATION
      ↓
TASK ROUTING
      ↓
CONTEXT RETRIEVAL
      ↓
PROMPT CONSTRUCTION
      ↓
GENERATION
      ↓
STRUCTURED OUTPUT
      ↓
VALIDATION
      ↓
CRITIQUE
      ↓
REVISION
      ↓
FINAL RESPONSE

Not every application needs every stage.

The architecture should be as simple as possible while still satisfying the required quality and reliability.
      `
    }
  ],

  codeExamples: [
    {
      title: "Example 1 — Planning Prompt",
      language: "text",
      code: `Before implementing the requested feature:

1. Identify the required files.
2. Identify dependencies.
3. Describe the data flow.
4. Identify potential risks.
5. Define verification steps.

Then provide the implementation plan.`
    },
    {
      title: "Example 2 — Critique Prompt",
      language: "text",
      code: `Review the generated answer.

Evaluate:
- Accuracy
- Completeness
- Relevance
- Clarity
- Requirement compliance

List problems first.

Then provide a corrected version.`
    },
    {
      title: "Example 3 — Verification Prompt",
      language: "text",
      code: `Verify the generated result against these requirements:

1. All required fields exist.
2. Category is one of the allowed values.
3. No required field is empty.
4. The result is valid JSON.

Return:

{
  "valid": true,
  "errors": []
}`
    },
    {
      title: "Example 4 — Multi-Stage Workflow",
      language: "text",
      code: `STAGE 1:
Extract facts.

STAGE 2:
Analyze the facts.

STAGE 3:
Generate recommendations.

STAGE 4:
Verify recommendations against the supplied requirements.

STAGE 5:
Generate the final report.`
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1",
      task:
        "Design a multi-stage prompt workflow for analyzing a software project."
    },
    {
      title: "Exercise 2",
      task:
        "Create a critique-and-revision workflow for improving an AI-generated technical explanation."
    },
    {
      title: "Exercise 3",
      task:
        "Design a structured verification stage for an AI-generated JSON response."
    },
    {
      title: "Exercise 4",
      task:
        "Design a routing prompt that sends programming, database, networking, and AI questions to different workflows."
    }
  ],

  mathIntuition: {
    title: "Mathematical Intuition: Multi-Stage Conditional Generation",
    explanation: `
Let a first model call produce:

Y₁ = f(C₁)

The next stage receives Y₁ as part of its context:

C₂ = g(Y₁)

Then:

Y₂ = f(C₂)

A chain therefore becomes:

C₁
 ↓
Y₁
 ↓
C₂
 ↓
Y₂
 ↓
C₃
 ↓
Y₃

The final result depends on the outputs of earlier stages.

This explains error propagation.

If:

Y₁ = incorrect

then:

C₂ contains incorrect information

and therefore Y₂ may also be incorrect.

This is why validation between stages is important.
    `,
    equations: [
      "Y₁ = f(C₁)",
      "C₂ = g(Y₁)",
      "Y₂ = f(C₂)",
      "Yₙ = f(Cₙ)"
    ]
  },

  comparisonTables: [
    {
      title: "Single vs Multi-Stage Prompting",
      columns: ["Aspect", "Single Prompt", "Multi-Stage Workflow"],
      rows: [
        ["Implementation", "Simpler", "More complex"],
        ["API calls", "Usually fewer", "Usually more"],
        ["Latency", "Usually lower", "Can be higher"],
        ["Debugging", "Harder for complex tasks", "More modular"],
        ["Validation", "Often centralized", "Can occur between stages"],
        ["Cost", "Usually lower", "Potentially higher"]
      ]
    }
  ],

  interviewQuestions: [
    {
      question: "What is task decomposition?",
      answer:
        "Task decomposition breaks a complex objective into smaller subtasks that can be processed independently or sequentially."
    },
    {
      question: "Why use intermediate representations?",
      answer:
        "They make complex workflows easier to validate, debug, transform, and integrate."
    },
    {
      question: "What is prompt chaining?",
      answer:
        "Prompt chaining connects multiple model calls where the output of one stage can become input or context for another."
    },
    {
      question: "Why can multi-stage prompting be expensive?",
      answer:
        "Each additional model call can increase token usage, latency, and operational cost."
    },
    {
      question: "What is verification prompting?",
      answer:
        "It evaluates a generated result against explicit requirements or criteria."
    }
  ],

  keyTakeaways: [
    "Complex AI tasks often benefit from decomposition.",
    "Planning can create a structured path before generation.",
    "Intermediate representations improve observability and validation.",
    "Verification should be used between important workflow stages.",
    "Critique and revision can improve generated outputs.",
    "Multi-stage workflows provide modularity but increase cost and latency.",
    "Deterministic validation should be preferred for rules that ordinary software can check.",
    "Advanced prompt engineering is fundamentally workflow engineering."
  ]
};

export default lesson;