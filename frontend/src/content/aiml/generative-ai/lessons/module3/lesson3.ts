const lesson = {
  id: "lesson3",
  moduleId: "module3",
  title: "Prompting Techniques & Patterns",
  description:
    "A comprehensive study of zero-shot, one-shot, few-shot, role prompting, decomposition, structured prompting, reasoning-oriented workflows, prompt chaining, critique and refinement, classification, extraction, transformation, summarization, generation, and production prompting patterns.",

  learningObjectives: [
    "Understand zero-shot, one-shot, and few-shot prompting.",
    "Understand role and persona prompting.",
    "Learn task decomposition and structured problem solving.",
    "Understand classification and extraction prompt patterns.",
    "Understand summarization, transformation, generation, and comparison patterns.",
    "Understand prompt chaining and multi-stage AI workflows.",
    "Understand critique and refinement patterns.",
    "Understand structured output prompting.",
    "Understand when different prompting techniques should be used.",
    "Compare prompting techniques using practical examples.",
    "Understand cost, latency, reliability, and maintainability trade-offs.",
    "Design production-oriented prompt workflows."
  ],

  sections: [
    {
      id: "technique-overview",
      title: "1. Overview of Prompting Techniques",
      content: `
Prompting techniques are reusable strategies for communicating tasks to generative AI models.

A technique changes the way information is presented to the model.

Major categories include:

PROMPTING TECHNIQUES
│
├── Direct prompting
│   ├── Zero-shot
│   ├── One-shot
│   └── Few-shot
│
├── Behavioral prompting
│   ├── Role prompting
│   └── Style prompting
│
├── Task-structure prompting
│   ├── Decomposition
│   ├── Stepwise workflows
│   └── Prompt chaining
│
├── Output-oriented prompting
│   ├── Structured output
│   ├── Classification
│   └── Extraction
│
├── Transformation prompting
│   ├── Summarization
│   ├── Rewriting
│   ├── Translation
│   └── Conversion
│
└── Evaluation-oriented prompting
    ├── Critique
    ├── Refinement
    └── Verification

No technique is universally optimal.

The technique should match the task.
      `
    },

    {
      id: "zero-shot",
      title: "2. Zero-Shot Prompting",
      content: `
Zero-shot prompting asks the model to perform a task without providing task-specific examples.

Example:

"Classify the following review as positive, negative, or neutral:

The laptop battery lasts all day."

The model must infer the classification behavior from the instruction.

Structure:

INSTRUCTION
+
INPUT
→
OUTPUT

Zero-shot prompting works particularly well when:

• The task is familiar.
• Categories are clearly defined.
• Output format is simple.
• No unusual behavior is required.

Advantages:

• Short prompts
• Low token usage
• Easy to implement
• Easy to maintain

Limitations:

• May struggle with unusual formats.
• May interpret ambiguous instructions differently.
• May not reproduce highly specific behavior.
      `
    },

    {
      id: "one-shot",
      title: "3. One-Shot Prompting",
      content: `
One-shot prompting provides one example before the actual task.

Example:

Input:
"The battery lasts all day."

Output:
Positive

Now classify:

"The screen quality is disappointing."

The example establishes the desired mapping.

One-shot prompting can be useful when a single example is enough to communicate:

• Output format
• Style
• Classification behavior
• Transformation pattern

Conceptually:

Instruction
+
One Example
+
New Input
→
Output
      `
    },

    {
      id: "few-shot",
      title: "4. Few-Shot Prompting",
      content: `
Few-shot prompting provides multiple examples.

Example:

Input:
"The battery lasts all day."

Output:
Positive

Input:
"The screen broke after one week."

Output:
Negative

Input:
"The design is acceptable."

Output:
Neutral

Now:

Input:
"The camera is excellent but the battery is weak."

Output:

The examples demonstrate the task.

Few-shot prompting can be useful when:

• The task is difficult to describe.
• The output format is unusual.
• The desired classification boundary is subtle.
• A particular style must be reproduced.

Few-shot prompting also increases prompt length.

Therefore there is a trade-off:

More examples
→
Potentially clearer behavior

but:

More examples
→
More tokens
→
Higher cost
→
Less available context
      `
    },

    {
      id: "example-selection",
      title: "5. Selecting Good Few-Shot Examples",
      content: `
Few-shot examples should be selected carefully.

Useful examples are:

• Correct
• Representative
• Relevant
• Diverse
• Consistent
• Similar to expected production inputs

Suppose a model classifies customer support tickets.

Bad example selection:

All examples are simple billing questions.

Then the model receives a complex technical issue.

The examples may not adequately demonstrate the classification boundary.

Better:

Billing example
Technical example
Account example
Ambiguous example
Edge-case example

Example selection therefore becomes part of prompt engineering.

A useful principle is:

Examples should cover the behavior you expect in production.
      `
    },

    {
      id: "role-prompting",
      title: "6. Role Prompting",
      content: `
Role prompting defines the desired perspective or behavior of the model.

Example:

"You are a senior software engineer reviewing a production API."

The role may influence:

• Vocabulary
• Depth
• Perspective
• Priorities
• Communication style

Another example:

"You are a beginner-friendly programming tutor."

The response may become more educational and explanatory.

Role prompting should not be confused with actual expertise.

The model does not acquire new factual knowledge simply because a role is assigned.

Role prompting mainly establishes behavioral expectations.
      `
    },

    {
      id: "style-prompting",
      title: "7. Style and Audience Prompting",
      content: `
The same information can be presented differently depending on the audience.

Example:

Audience:
Beginner

"Explain neural networks using a simple analogy and avoid advanced mathematics."

Audience:
Advanced student

"Explain neural networks using vector notation, activation functions, forward propagation, and gradient-based optimization."

The topic is similar.

The context and expected audience are different.

Therefore prompts can explicitly define:

• Audience
• Reading level
• Tone
• Technical depth
• Communication style
• Output length
      `
    },

    {
      id: "task-decomposition",
      title: "8. Task Decomposition",
      content: `
Task decomposition breaks a complex task into smaller tasks.

Instead of:

"Analyze this software project and create a report."

Use:

1. Identify technologies.
2. Identify architecture.
3. Identify important modules.
4. Identify dependencies.
5. Identify possible issues.
6. Identify improvement opportunities.
7. Generate final report.

Conceptually:

COMPLEX TASK
      ↓
┌───────────────┐
│ Subtask 1     │
│ Subtask 2     │
│ Subtask 3     │
│ Subtask 4     │
└───────────────┘
      ↓
COMBINATION
      ↓
FINAL RESULT

Decomposition can make complex workflows easier to understand and evaluate.
      `
    },

    {
      id: "stepwise",
      title: "9. Stepwise Task Prompting",
      content: `
A task can be structured into explicit stages.

Example:

"Solve the problem using these stages:

1. Identify the known values.
2. Identify the required result.
3. Select the appropriate formula.
4. Substitute the values.
5. Calculate the result.
6. Verify the result."

The prompt establishes a process structure.

In practical AI systems, developers should distinguish between:

Internal model reasoning

and

Useful externally visible output.

The application often needs only:

Input
→
Validated result

rather than a long internal reasoning trace.

The key lesson is structured task execution, not exposing hidden internal reasoning.
      `
    },

    {
      id: "classification",
      title: "10. Classification Prompt Pattern",
      content: `
Classification maps an input to a predefined category.

Example:

"Classify this customer request as Billing, Technical, or Account."

Input:

"My payment was charged twice."

Output:

Billing

General template:

CLASSIFY THE INPUT INTO EXACTLY ONE OF:

CATEGORY A
CATEGORY B
CATEGORY C

INPUT:
{{input}}

OUTPUT:
{{category}}

Classification prompts should clearly define:

• Categories
• Category meanings
• Output format
• Edge-case behavior
      `
    },

    {
      id: "extraction",
      title: "11. Information Extraction Pattern",
      content: `
Extraction converts unstructured information into structured data.

Example:

Input:

"John purchased three keyboards for ₹4,500 on 20 September."

Extract:

{
  "customer": "John",
  "product": "keyboards",
  "quantity": 3,
  "price": 4500,
  "date": "20 September"
}

Pipeline:

UNSTRUCTURED DATA
       ↓
LLM
       ↓
STRUCTURED FIELDS
       ↓
VALIDATION
       ↓
DATABASE

Extraction is widely useful for:

• Invoices
• Emails
• Forms
• Resumes
• Support tickets
• Legal documents
• Reports
      `
    },

    {
      id: "summarization",
      title: "12. Summarization Pattern",
      content: `
Summarization transforms large information into a shorter representation.

Basic prompt:

"Summarize the document."

Production prompt:

"Summarize the document in 150 words for a beginner. Include the main idea, architecture, advantages, and limitations."

Useful controls include:

• Length
• Audience
• Focus
• Structure
• Level of detail

Types of summarization include:

Extractive-style summarization
→
Focuses on information from the source.

Abstractive summarization
→
Produces a newly phrased representation.

Prompt design should make the desired objective clear.
      `
    },

    {
      id: "transformation",
      title: "13. Transformation Prompting",
      content: `
Transformation prompts convert information from one representation into another.

Examples:

Text
→
Bullet points

Paragraph
→
Table

English
→
French

Requirements
→
User stories

Natural language
→
SQL

Source code
→
Documentation

Example:

"Convert the following requirements into five user stories. Each story must contain:

As a...
I want...
So that..."

Transformation prompts are useful because the input already contains information and the model's job is to change its representation.
      `
    },

    {
      id: "generation",
      title: "14. Generation Prompting",
      content: `
Generation prompts ask the model to create new content.

Examples:

• Write an explanation
• Generate code
• Create documentation
• Generate test cases
• Create questions
• Produce an email
• Generate SQL

A strong generation prompt defines:

WHAT to generate
WHO it is for
WHAT constraints apply
WHAT format is required

Example:

"Generate ten C++ practice problems on arrays for a second-year student. Divide them into easy, medium, and difficult levels."
      `
    },

    {
      id: "comparison",
      title: "15. Comparison Prompting",
      content: `
Comparison prompts evaluate multiple entities using shared criteria.

Example:

"Compare REST and GraphQL using:

1. Data fetching
2. API design
3. Flexibility
4. Complexity
5. Performance considerations
6. Typical use cases

Return a table."

This is stronger than:

"REST vs GraphQL?"

because the evaluation criteria are explicit.

Comparison prompts can be used for:

• Technologies
• Algorithms
• Products
• Architectures
• Models
• Approaches
      `
    },

    {
      id: "ranking",
      title: "16. Selection and Ranking Tasks",
      content: `
Some applications ask a model to select or rank options.

Example:

"Rank these software tools according to:

1. Ease of use
2. Integration complexity
3. Documentation quality

Explain the reasoning."

For production systems, ranking tasks should define criteria clearly.

Otherwise the model may use implicit criteria.

A better prompt states:

"Use only the following criteria."

This makes the task more reproducible.

Important:

Ranking quality depends on the quality and completeness of the criteria.
      `
    },

    {
      id: "structured-output",
      title: "17. Structured Output Prompting",
      content: `
Structured prompting asks the model to produce a predefined schema.

Example:

{
  "category": "...",
  "priority": "...",
  "summary": "..."
}

The application can then validate the response.

Pipeline:

PROMPT
 ↓
LLM
 ↓
STRUCTURED OUTPUT
 ↓
SCHEMA VALIDATION
 ↓
APPLICATION

Structured output is particularly useful for:

• Classification
• Extraction
• Routing
• Agent workflows
• Database operations
• API responses
      `
    },

    {
      id: "critique",
      title: "18. Critique Prompting",
      content: `
Critique prompting asks the model to evaluate an existing output.

Example:

"Review the following answer for factual errors, missing information, and unclear explanations."

The model produces:

• Problems
• Missing information
• Suggestions

Architecture:

Initial Output
      ↓
Critique
      ↓
Identified Problems
      ↓
Revision
      ↓
Improved Output

Critique can be useful in writing, coding, documentation, and structured content generation.
      `
    },

    {
      id: "refinement",
      title: "19. Refinement Prompting",
      content: `
Refinement takes an existing result and improves it.

Example:

Initial answer
      ↓
Review
      ↓
Identify problems
      ↓
Rewrite
      ↓
Final answer

Prompt:

"Improve the following explanation. Preserve the technical meaning, remove unnecessary repetition, and make the explanation easier for a beginner to understand."

Refinement can be used repeatedly.

However, repeated model calls increase:

• Cost
• Latency
• Complexity

Therefore refinement should be used when the improvement is valuable.
      `
    },

    {
      id: "prompt-chaining",
      title: "20. Prompt Chaining",
      content: `
Prompt chaining divides a workflow into multiple model calls.

Example:

DOCUMENT
   ↓
Prompt 1
Extract facts
   ↓
Structured facts
   ↓
Prompt 2
Analyze facts
   ↓
Analysis
   ↓
Prompt 3
Generate report
   ↓
Final report

Each prompt has a focused responsibility.

Advantages:

• Easier debugging
• Easier evaluation
• Smaller individual tasks
• Better modularity

Disadvantages:

• More model calls
• Higher latency
• Higher cost
• Error propagation

Example:

If Prompt 1 extracts incorrect information, Prompt 2 may produce incorrect analysis even if Prompt 2 itself works correctly.
      `
    },

    {
      id: "parallel-prompting",
      title: "21. Parallel Prompt Workflows",
      content: `
Some tasks can be divided into independent operations.

Example:

Document
   ↓
 ┌───────────────┬────────────────┬────────────────┐
 ↓               ↓                ↓
Summary       Sentiment        Keywords
 ↓               ↓                ↓
 └───────────────┴────────────────┘
                 ↓
             Final report

The independent tasks can potentially be executed separately and then combined.

This can improve workflow organization and, depending on the architecture, reduce latency through parallel execution.

However, the application must ensure that tasks are actually independent.
      `
    },

    {
      id: "verification",
      title: "22. Verification Prompting",
      content: `
Verification asks the system to check whether an output satisfies requirements.

Example:

"Check whether the generated JSON contains all required fields and whether the category is one of the allowed values."

Pipeline:

Generated Output
      ↓
Verification
      ↓
PASS / FAIL
      ↓
Accept or Regenerate

Verification is particularly useful when:

• Output has a schema.
• Errors are costly.
• Requirements are explicit.
• A deterministic validator can supplement the model.

Important principle:

When a rule can be checked deterministically, traditional code should often perform the final validation.

For example:

if category not in allowedCategories:
    reject()

This is stronger than asking the model alone to validate itself.
      `
    },

    {
      id: "self-correction",
      title: "23. Self-Correction Workflows",
      content: `
A model can be asked to inspect and revise its own output.

Conceptually:

Generate
  ↓
Evaluate
  ↓
Revise
  ↓
Final

However, self-correction is not a guarantee of correctness.

The model can repeat or reinforce an incorrect assumption.

Therefore self-correction is strongest when combined with:

• External information
• Deterministic checks
• Retrieval
• Unit tests
• Schema validation
• Domain-specific validators
      `
    },

    {
      id: "tool-use",
      title: "24. Prompting for Tool-Using AI",
      content: `
AI agents may use tools such as:

• Search
• Databases
• Calculators
• APIs
• Code execution
• File systems

A tool workflow can be:

USER
 ↓
MODEL
 ↓
DECIDE WHETHER TOOL IS REQUIRED
 ↓
TOOL
 ↓
TOOL RESULT
 ↓
MODEL
 ↓
FINAL RESPONSE

Prompting can define:

• When a tool should be used
• What information should be supplied
• How results should be interpreted
• What the model should do when a tool fails

For example:

"If current inventory is required, use the inventory tool rather than guessing."
      `
    },

    {
      id: "decision-tree",
      title: "25. Choosing a Prompting Technique",
      content: `
A practical decision process is:

Is the task simple and clearly defined?
        │
        ├── YES → Try zero-shot.
        │
        └── NO
             ↓
Does the task need examples?
        │
        ├── YES → Try few-shot.
        │
        └── NO
             ↓
Does the task contain multiple stages?
        │
        ├── YES → Decompose or chain.
        │
        └── NO
             ↓
Does software need predictable structure?
        │
        ├── YES → Structured output.
        │
        └── NO
             ↓
Does the task require evaluation?
        │
        ├── YES → Critique / verification.
        │
        └── NO → Direct generation.

This is not a rigid algorithm.

It is a design framework.
      `
    },

    {
      id: "cost-latency",
      title: "26. Cost, Latency, and Prompting Techniques",
      content: `
Prompting techniques have operational consequences.

Zero-shot:

Shorter context
→
Lower token usage

Few-shot:

More examples
→
More input tokens

Prompt chaining:

Multiple calls
→
Higher cumulative latency and cost

Critique + refinement:

Multiple generations
→
Higher cost

Large retrieved context:

More tokens
→
Potentially higher cost and latency

Therefore prompt engineering must consider:

QUALITY
+
COST
+
LATENCY
+
RELIABILITY

A technique that improves quality slightly but multiplies cost may not be appropriate for every application.
      `
    },

    {
      id: "production-patterns",
      title: "27. Production Prompting Patterns",
      content: `
Common production patterns include:

PATTERN 1 — CLASSIFIER

Input
→
Category

PATTERN 2 — EXTRACTOR

Document
→
Structured data

PATTERN 3 — ROUTER

User request
→
Select tool / workflow

PATTERN 4 — GENERATOR

Requirements
→
Generated content

PATTERN 5 — SUMMARIZER

Large document
→
Summary

PATTERN 6 — CRITIC

Output
→
Evaluation

PATTERN 7 — REFINER

Output + feedback
→
Improved output

PATTERN 8 — AGENT

User
→
Model
→
Tools
→
Model
→
Final result

These patterns can be combined into larger AI workflows.
      `
    },

    {
      id: "combined-workflow",
      title: "28. Combining Multiple Prompting Techniques",
      content: `
Real systems often combine techniques.

Example:

Customer support system:

Step 1:
Classify request.

Step 2:
Retrieve relevant policy.

Step 3:
Generate response using retrieved policy.

Step 4:
Check response against policy.

Step 5:
Return structured result.

Architecture:

Customer
   ↓
Classification
   ↓
Retrieval
   ↓
Context Construction
   ↓
Generation
   ↓
Verification
   ↓
Response

This is more realistic than assuming one giant prompt should solve every problem.
      `
    },

    {
      id: "failure-modes",
      title: "29. Common Failure Modes in Prompting Techniques",
      content: `
Technique-specific failures include:

ZERO-SHOT FAILURE
The instruction is too ambiguous.

FEW-SHOT FAILURE
Examples are inconsistent.

ROLE FAILURE
The role is treated as authority rather than behavior.

DECOMPOSITION FAILURE
Subtasks depend on information that earlier stages did not provide.

CHAIN FAILURE
An error in one stage propagates forward.

STRUCTURED OUTPUT FAILURE
Required fields are missing.

CRITIQUE FAILURE
The model fails to detect its own error.

TOOL FAILURE
The model uses a tool when it is unnecessary or fails to use it when required.

Therefore every workflow needs evaluation and validation.
      `
    },

    {
      id: "best-practices",
      title: "30. Prompting Best Practices",
      content: `
Use these principles:

1. Match technique to task.

2. Start with the simplest technique that works.

3. Add examples only when they provide value.

4. Use representative examples.

5. Define output structure.

6. Decompose complex tasks.

7. Use deterministic validation where possible.

8. Avoid unnecessary model calls.

9. Monitor cost and latency.

10. Test edge cases.

11. Version prompts.

12. Measure performance.

13. Keep trusted instructions separate from external data.

14. Combine prompts with retrieval and tools when information is required.

15. Never assume that a prompting technique guarantees correctness.
      `
    }
  ],

  codeExamples: [
    {
      title: "Example 1 — Zero-Shot",
      language: "text",
      code: `Classify the following review as Positive, Negative, or Neutral.

Review:
"The laptop battery lasts for ten hours."

Return only the category.`
    },

    {
      title: "Example 2 — Few-Shot",
      language: "text",
      code: `Review:
"The battery lasts all day."

Sentiment:
Positive

Review:
"The display stopped working."

Sentiment:
Negative

Review:
"The product is acceptable."

Sentiment:
Neutral

Review:
"The keyboard feels excellent."

Sentiment:`
    },

    {
      title: "Example 3 — Classification",
      language: "text",
      code: `Classify the support ticket.

Categories:
- Billing
- Technical
- Account

Ticket:
"The customer was charged twice."

Return:
{
  "category": "...",
  "reason": "..."
}`
    },

    {
      title: "Example 4 — Information Extraction",
      language: "text",
      code: `Extract the following fields:

- customer
- product
- quantity
- price
- date

Text:
"John purchased three keyboards for ₹4,500 on 20 September."

Return valid JSON.`
    },

    {
      title: "Example 5 — Critique and Refinement",
      language: "text",
      code: `Review the following explanation.

Identify:
1. Factual problems
2. Missing information
3. Unclear statements
4. Unnecessary repetition

Then produce an improved version.

TEXT:
{{generated_answer}}`
    },

    {
      title: "Example 6 — Prompt Chaining",
      language: "text",
      code: `STEP 1:
Extract important facts from the document.

STEP 2:
Using only those facts, identify the main issues.

STEP 3:
Generate recommendations.

STEP 4:
Return a concise final report in Markdown.`
    },

    {
      title: "Example 7 — Structured Agent Workflow",
      language: "text",
      code: `TASK:
Determine whether a tool is required.

If current database information is required:
use the database tool.

If no external information is required:
answer directly.

Never invent database values.

After receiving tool results:
use the returned information to construct the final response.`
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Zero-Shot",
      task:
        "Create a zero-shot prompt that classifies student questions into Programming, Database, Networking, or AI."
    },
    {
      title: "Exercise 2 — Few-Shot",
      task:
        "Create three examples that teach a model a custom classification task."
    },
    {
      title: "Exercise 3 — Extraction",
      task:
        "Design an extraction prompt that converts an invoice paragraph into structured JSON."
    },
    {
      title: "Exercise 4 — Prompt Chain",
      task:
        "Design a three-stage workflow that reads a document, extracts facts, and produces a report."
    },
    {
      title: "Exercise 5 — Critique",
      task:
        "Create a prompt that evaluates an AI-generated explanation and suggests improvements."
    },
    {
      title: "Exercise 6 — Agent Workflow",
      task:
        "Design a prompt that decides whether an AI assistant should answer directly or call an external information tool."
    }
  ],

  mathIntuition: {
    title: "Mathematical Intuition: Prompting Changes the Conditioning Context",
    explanation: `
Let the complete prompt context be C.

The model estimates:

P(xₜ₊₁ | C)

Different prompting techniques construct different forms of C.

Zero-shot:

C = Instruction + Input

Few-shot:

C = Examples + Instruction + Input

Role prompting:

C = Role + Instruction + Input

RAG:

C = Instruction + Retrieved Documents + User Question

Prompt chaining:

C₂ = f(Output₁)

where the output of an earlier stage becomes part of the context for the next stage.

Therefore a multi-stage workflow can be represented as:

C₁
 ↓
Model
 ↓
Y₁
 ↓
C₂ = g(Y₁)
 ↓
Model
 ↓
Y₂

This explains why errors can propagate between chained model calls.
    `,
    equations: [
      "P(xₜ₊₁ | C)",
      "C_few-shot = Examples + Instructions + Input",
      "C_RAG = Instructions + RetrievedContext + Question",
      "C₂ = g(Y₁)",
      "P(Y₂ | C₂)"
    ]
  },

  comparisonTables: [
    {
      title: "Major Prompting Techniques",
      columns: ["Technique", "Main Idea", "Typical Use"],
      rows: [
        ["Zero-shot", "Task without examples", "Simple classification"],
        ["One-shot", "One demonstration", "Simple custom behavior"],
        ["Few-shot", "Multiple demonstrations", "Complex formatting or classification"],
        ["Role prompting", "Define behavioral perspective", "Tutors, assistants"],
        ["Decomposition", "Break task into stages", "Complex analysis"],
        ["Structured output", "Define response schema", "APIs and automation"],
        ["Critique", "Evaluate generated output", "Quality improvement"],
        ["Refinement", "Improve an existing result", "Writing and code"],
        ["Prompt chaining", "Multiple focused calls", "Multi-stage workflows"]
      ]
    },
    {
      title: "Prompting Pattern Selection",
      columns: ["Task", "Useful Pattern", "Typical Output"],
      rows: [
        ["Categorize input", "Classification", "Category"],
        ["Extract fields", "Extraction", "JSON"],
        ["Shorten document", "Summarization", "Summary"],
        ["Rewrite content", "Transformation", "Rewritten text"],
        ["Create new content", "Generation", "New content"],
        ["Compare entities", "Comparison", "Table/report"],
        ["Improve response", "Critique + refinement", "Improved output"],
        ["Complex workflow", "Decomposition / chaining", "Multi-stage result"],
        ["Use external data", "Tool / RAG workflow", "Grounded response"]
      ]
    },
    {
      title: "Operational Trade-offs",
      columns: ["Technique", "Quality Potential", "Token/Call Cost", "Complexity"],
      rows: [
        ["Zero-shot", "Good for simple tasks", "Low", "Low"],
        ["Few-shot", "Can improve task alignment", "Higher input tokens", "Low-Medium"],
        ["Decomposition", "Useful for complex tasks", "Multiple calls possible", "Medium"],
        ["Critique + refinement", "Can improve output", "Multiple calls", "Medium"],
        ["Prompt chaining", "Strong workflow control", "Multiple calls", "High"],
        ["Tool/RAG workflow", "Can provide external information", "Retrieval + model cost", "High"]
      ]
    }
  ],

  interviewQuestions: [
    {
      question: "What is zero-shot prompting?",
      answer:
        "Zero-shot prompting asks a model to perform a task without providing task-specific examples."
    },
    {
      question: "What is few-shot prompting?",
      answer:
        "Few-shot prompting provides multiple examples that demonstrate the desired input-output behavior."
    },
    {
      question: "What is task decomposition?",
      answer:
        "Task decomposition divides a complex problem into smaller subtasks that can be solved or processed separately."
    },
    {
      question: "What is prompt chaining?",
      answer:
        "Prompt chaining divides a workflow across multiple model calls where the output of one stage can become input to another."
    },
    {
      question: "Why can prompt chaining increase errors?",
      answer:
        "An incorrect output from an earlier stage can become incorrect context for a later stage, causing error propagation."
    },
    {
      question: "Why is structured output useful?",
      answer:
        "It gives downstream software a predictable representation that can be parsed and validated."
    },
    {
      question: "What is critique prompting?",
      answer:
        "Critique prompting asks a model to evaluate an existing output for problems, missing information, or improvements."
    },
    {
      question: "Is self-correction guaranteed to make an answer correct?",
      answer:
        "No. A model can fail to identify its own mistakes, so external validation and deterministic checks can still be necessary."
    },
    {
      question: "When should few-shot prompting be used?",
      answer:
        "It can be useful when examples communicate desired behavior or formatting more clearly than instructions alone."
    },
    {
      question: "What is the main disadvantage of prompt chaining?",
      answer:
        "It can increase latency, cost, implementation complexity, and the possibility of error propagation."
    }
  ],

  keyTakeaways: [
    "Zero-shot prompting performs a task without task-specific examples.",
    "One-shot prompting provides one example.",
    "Few-shot prompting provides multiple examples.",
    "Role prompting establishes desired behavioral context.",
    "Task decomposition divides complex problems into smaller stages.",
    "Classification maps inputs to predefined categories.",
    "Extraction converts unstructured information into structured fields.",
    "Summarization compresses information into a shorter representation.",
    "Transformation converts information from one representation into another.",
    "Structured output creates predictable interfaces between models and software.",
    "Critique and refinement can be used to improve generated outputs.",
    "Prompt chaining creates multi-stage AI workflows.",
    "Tool-using systems combine model generation with external information or actions.",
    "More sophisticated prompting workflows can increase cost and latency.",
    "The simplest technique that reliably solves the task is often a useful starting point.",
    "Prompting techniques should be evaluated using representative test cases rather than isolated examples."
  ]
};

export default lesson;