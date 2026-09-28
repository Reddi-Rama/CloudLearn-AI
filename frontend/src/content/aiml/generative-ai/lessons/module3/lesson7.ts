const lesson = {
  id: "lesson7",
  moduleId: "module3",
  lessonNumber: 7,

  title: "Prompt Engineering for Coding & Technical Tasks",

  description:
    "Learn how to design precise prompts for programming, debugging, code generation, code explanation, refactoring, testing, architecture design, and other technical workflows.",

  learningObjectives: [
    "Understand why technical prompting requires more precision than general prompting.",
    "Design prompts for code generation and implementation tasks.",
    "Use constraints, specifications, examples, and acceptance criteria effectively.",
    "Prompt language models for debugging and error analysis.",
    "Design prompts for code explanation and documentation.",
    "Use prompts for refactoring and optimization.",
    "Generate unit tests and edge-case tests using structured prompts.",
    "Use AI effectively for algorithms and data structures.",
    "Prompt for SQL, APIs, regular expressions, and configuration files.",
    "Understand hallucination risks in technical outputs.",
    "Evaluate generated code systematically.",
    "Design reusable technical prompt templates.",
    "Understand human verification requirements for AI-generated code."
  ],

  sections: [

    {
      title: "1. Why Technical Prompting Is Different",
      content: `
Technical tasks have stricter correctness requirements than many ordinary conversational tasks.

Consider two prompts.

General prompt:

"Explain databases."

Technical prompt:

"Design a PostgreSQL schema for an online bookstore containing users, books, authors, orders, and order_items. Define primary keys, foreign keys, constraints, and indexes. Normalize the design to at least 3NF and explain the relationships."

The second prompt specifies:

- Technology
- Domain
- Entities
- Relationships
- Constraints
- Quality requirements
- Expected output

Technical prompting therefore requires precise task specification.

A useful principle is:

Technical Prompt = Task + Context + Constraints + Inputs + Expected Output + Validation Criteria

The model should not have to guess important requirements.
`
    },

    {
      title: "2. Technical Prompt Architecture",
      content: `
A strong technical prompt can be organized into layers.

ROLE
   ↓
TASK
   ↓
CONTEXT
   ↓
INPUT
   ↓
CONSTRAINTS
   ↓
OUTPUT FORMAT
   ↓
ACCEPTANCE CRITERIA

Example:

ROLE:
"You are a senior Python developer."

TASK:
"Implement a function that finds duplicate values."

CONTEXT:
"The function will process integer arrays containing up to 100,000 elements."

CONSTRAINTS:
"Do not modify the input array."

OUTPUT:
"Return the duplicated values as a list."

ACCEPTANCE CRITERIA:
"Explain time and space complexity and include edge cases."

This structure reduces ambiguity.
`
    },

    {
      title: "3. Prompting for Code Generation",
      content: `
A weak coding prompt might be:

"Write a binary search program."

The model has to guess:

- Language
- Input format
- Output format
- Function signature
- Error handling
- Complexity requirements
- Whether recursion is allowed

A stronger prompt is:

"Write a C++17 implementation of binary search. Create a function named binarySearch that accepts a sorted vector<int> and an integer target. Return the index if found and -1 otherwise. Use iterative binary search. Do not use STL search functions. Include time and space complexity."

Now the model has a much smaller space of possible valid answers.

Technical prompts should minimize unnecessary ambiguity.
`
    },

    {
      title: "4. Specification Before Implementation",
      content: `
For complex coding tasks, ask the model to understand the specification before generating implementation details.

A useful workflow is:

Requirements
    ↓
Assumptions
    ↓
Design
    ↓
Implementation
    ↓
Tests
    ↓
Review

For example:

"Before writing code:
1. Restate the requirements.
2. Identify ambiguous requirements.
3. State assumptions.
4. Propose the algorithm.
5. Provide complexity.
6. Then implement."

This makes hidden assumptions easier to detect.

It also separates problem understanding from code generation.
`
    },

    {
      title: "5. Acceptance Criteria",
      content: `
Acceptance criteria define what must be true for generated code to be considered acceptable.

Example:

Task:
Create a function to validate email addresses.

Acceptance criteria:

- Function accepts a string.
- Empty strings are rejected.
- Valid standard email formats are accepted.
- Invalid formats are rejected.
- Function returns bool.
- No external libraries.
- Include at least ten tests.
- Explain limitations.

The model should generate code against these criteria rather than simply producing something that looks plausible.

Acceptance criteria are particularly useful for software engineering workflows because they provide a measurable target.
`
    },

    {
      title: "6. Prompting for Debugging",
      content: `
Debugging prompts should include evidence.

Weak:

"My code is not working. Fix it."

Strong:

"Analyze the following C++ program.

Goal:
Find the maximum value in an integer array.

Observed behavior:
The program crashes when the array contains one element.

Compiler:
GCC 13

Error:
Segmentation fault

Code:
[code]

Identify:
1. The exact failure location.
2. Why it happens.
3. The minimal fix.
4. A corrected version.
5. Edge cases that should be tested."

This gives the model the information needed to reason about the problem.

The key idea is:

Do not ask the model to guess the bug.

Give it the evidence.
`
    },

    {
      title: "7. Debugging Evidence Hierarchy",
      content: `
Useful debugging evidence includes:

1. Error message
2. Stack trace
3. Source code
4. Input data
5. Expected output
6. Actual output
7. Runtime environment
8. Dependency versions
9. Reproduction steps

A debugging prompt becomes much stronger when these are supplied.

Architecture:

Bug
 ↓
Reproduction
 ↓
Evidence
 ↓
Diagnosis
 ↓
Hypothesis
 ↓
Fix
 ↓
Test
`
    },

    {
      title: "8. Prompting for Code Explanation",
      content: `
AI can explain existing code at multiple levels.

For example:

"Explain this code."

is ambiguous.

A better prompt can specify:

"Explain this Python function to a second-year computer science student. Start with the purpose, then explain each major block, then explain the algorithm, then give time and space complexity, and finally provide a small example."

This controls:

- Audience
- Depth
- Structure
- Technical level

Code explanation prompts should be adapted to the learner.
`
    },

    {
      title: "9. Prompting for Refactoring",
      content: `
Refactoring changes internal structure while preserving intended behavior.

A useful refactoring prompt should explicitly state:

"Preserve functionality."

Example:

"Refactor this Java method to improve readability. Preserve the exact behavior and public method signature. Do not change the algorithm unless necessary. Remove duplication and improve variable names. Explain each structural change."

Important constraints include:

- Preserve API
- Preserve behavior
- Preserve compatibility
- Avoid unnecessary dependencies
- Maintain tests

Without these constraints, a model may rewrite working code rather than refactor it.
`
    },

    {
      title: "10. Prompting for Performance Optimization",
      content: `
Performance prompts should provide measurable requirements.

Weak:

"Make this code faster."

Better:

"Analyze this Python implementation. It processes approximately 1,000,000 records. Identify the major performance bottleneck. Preserve the output behavior. Prefer an algorithmic improvement before micro-optimizations. Explain the current complexity and the proposed complexity."

This encourages the model to consider algorithmic complexity.

Example:

O(n²)
     ↓
Optimization
     ↓
O(n log n)

The important point is to request evidence for the optimization rather than blindly accepting the generated code.
`
    },

    {
      title: "11. Prompting for Unit Tests",
      content: `
A strong testing prompt should specify:

- Function under test
- Expected behavior
- Testing framework
- Edge cases
- Invalid inputs
- Boundary values
- Expected coverage

Example:

"Generate pytest tests for this function. Include normal cases, empty input, minimum values, maximum values, invalid input, duplicate values, and boundary conditions. Do not modify the implementation."

This encourages broader test coverage.
`
    },

    {
      title: "12. Test-Driven Prompting",
      content: `
For some tasks, tests can be specified before implementation.

Workflow:

Requirements
    ↓
Test Cases
    ↓
Implementation
    ↓
Run Tests
    ↓
Fix Failures

Example prompt:

"First define ten test cases for the requested function. Then implement the function so that it satisfies those tests. Explain any assumptions."

This creates an explicit behavioral contract.

The model is no longer generating code without a target.
`
    },

    {
      title: "13. Prompting for Algorithms",
      content: `
Algorithm prompts should request:

1. Problem interpretation
2. Input constraints
3. Brute-force approach
4. Optimized approach
5. Algorithm steps
6. Correctness reasoning
7. Complexity
8. Implementation
9. Edge cases
10. Test cases

Example:

"Solve this problem using C++. First explain the brute-force solution. Then derive an optimized solution. State the invariant or reasoning behind correctness. Give time and space complexity. Finally provide C++17 code and five test cases."

This is much stronger than:

"Solve this problem."
`
    },

    {
      title: "14. Prompting for SQL",
      content: `
SQL prompts should include:

- Database system
- Schema
- Tables
- Relationships
- Desired result
- Performance requirements

Example:

"Write PostgreSQL SQL to find the top five customers by total order value during 2026. Tables are customers(id, name), orders(id, customer_id, order_date), and order_items(order_id, quantity, unit_price). Include customers with no matching orders only if required."

The database engine matters because SQL dialects differ.

Always specify:

PostgreSQL
MySQL
SQL Server
SQLite
Oracle

when dialect-specific behavior matters.
`
    },

    {
      title: "15. Prompting for APIs",
      content: `
API prompts should specify:

- HTTP method
- Endpoint
- Request schema
- Authentication assumptions
- Response schema
- Error cases
- Status codes

Example:

"Design a REST API endpoint for creating a course. Use POST /api/courses. Request fields: title, description, difficulty. Return HTTP 201 on success and 400 for invalid input. Show request and response JSON."

This prevents the model from inventing an arbitrary API structure.
`
    },

    {
      title: "16. Prompting for Regular Expressions",
      content: `
Regular expressions are another area where precise requirements matter.

Instead of:

"Give me a regex for email."

Specify:

"Create a regular expression that matches basic email addresses such as user@example.com. It should reject strings without @ and a domain. Explain that the expression is not intended to validate every possible RFC-compliant email address."

This is important because natural-language requirements for regex are often ambiguous.

The model should explain limitations instead of presenting an expression as universally correct.
`
    },

    {
      title: "17. Prompting for Configuration Files",
      content: `
AI can generate:

- Dockerfiles
- GitHub Actions
- YAML
- JSON
- Terraform
- Kubernetes manifests
- Environment templates

These outputs require validation.

Example prompt:

"Create a Dockerfile for a Node.js 20 production application. Use a multi-stage build, install only production dependencies in the final stage, expose port 3000, and run the application as a non-root user."

The output should then be tested using the actual toolchain.

Generated configuration should never be trusted solely because it looks syntactically correct.
`
    },

    {
      title: "18. Technical Hallucinations",
      content: `
Technical hallucination occurs when a model generates plausible but incorrect technical information.

Examples:

- Non-existent library functions
- Incorrect API parameters
- Invalid configuration options
- Wrong version-specific syntax
- Incorrect algorithm complexity
- Invented package names
- Incorrect framework behavior

A prompt can reduce these risks by asking:

"If you are uncertain about an API or version-specific behavior, explicitly state the uncertainty rather than inventing an answer."

For current library behavior, verification against official documentation is still necessary.
`
    },

    {
      title: "19. Version-Aware Technical Prompting",
      content: `
Software changes over time.

A prompt should specify versions when relevant.

Example:

"Use Python 3.12."

"Use React 19."

"Use Node.js 22."

"Use PostgreSQL 17."

Without a version constraint, a model may generate code based on another version.

Technical prompts should therefore include:

Technology
Version
Environment
Dependencies
Constraints
`
    },

    {
      title: "20. Code Review Prompt",
      content: `
A useful code-review prompt can request analysis across several dimensions.

Example:

"Review this TypeScript code for:

1. Correctness
2. Type safety
3. Error handling
4. Security
5. Performance
6. Maintainability
7. Readability
8. Edge cases

For each issue provide:
- Severity
- Location
- Explanation
- Suggested fix

Do not rewrite the entire application unless necessary."

This produces a more structured review.
`
    },

    {
      title: "21. Security-Focused Code Prompting",
      content: `
Security should be explicitly included when relevant.

Possible categories:

- Input validation
- Authentication
- Authorization
- Secrets
- Injection
- Access control
- Dependency risks
- Data exposure
- Logging
- Error leakage

Example:

"Review this API handler for security weaknesses. Focus on authentication, authorization, input validation, injection risks, sensitive information exposure, and unsafe error handling."

This is more useful than simply asking:

"Is this code secure?"
`
    },

    {
      title: "22. Prompting for Documentation",
      content: `
Documentation prompts can specify:

- Audience
- Format
- Sections
- Examples
- API signatures
- Installation steps
- Limitations

Example:

"Create developer documentation for this REST endpoint. Include purpose, authentication, request schema, response schema, status codes, errors, and curl examples."

The output becomes much more predictable when the documentation structure is explicit.
`
    },

    {
      title: "23. Code Generation Validation Pipeline",
      content: `
Generated code should pass through a validation pipeline.

AI Generation
     ↓
Syntax Check
     ↓
Type Check
     ↓
Lint
     ↓
Unit Tests
     ↓
Integration Tests
     ↓
Security Checks
     ↓
Human Review
     ↓
Deployment

The model produces a candidate.

The engineering pipeline determines whether the candidate is acceptable.

This separation is extremely important.
`
    },

    {
      title: "24. Technical Prompt Evaluation",
      content: `
Technical prompts should be evaluated using criteria such as:

Correctness
Compilation
Tests passing
Requirement coverage
Complexity
Security
Maintainability
Format compliance
Documentation quality

For generated code, a very strong signal is:

Does the code actually execute and pass the required tests?

A fluent explanation is not proof of implementation correctness.
`
    },

    {
      title: "25. Example Technical Prompt Template",
      content: `
A reusable template:

"You are an experienced [ROLE].

TASK:
[Describe the task.]

CONTEXT:
[Relevant project information.]

TECHNOLOGY:
[Language/framework/version.]

INPUT:
[Input specification.]

CONSTRAINTS:
[Rules and limitations.]

EXPECTED OUTPUT:
[Required structure.]

ACCEPTANCE CRITERIA:
[List measurable requirements.]

EDGE CASES:
[List important edge cases.]

Before producing the final answer, verify that all acceptance criteria are addressed."

This template can be adapted to many software engineering tasks.
`
    },

    {
      title: "26. Practical Exercise — Debugging Assistant",
      content: `
Take a program containing a deliberate bug.

Create two prompts.

Prompt A:
"Fix this code."

Prompt B:
Include:

- Goal
- Error
- Input
- Expected output
- Actual output
- Environment
- Code
- Required explanation

Compare the results.

Evaluate:

- Correct diagnosis
- Correct fix
- Explanation
- Regression risk
`
    },

    {
      title: "27. Practical Exercise — Code Generator",
      content: `
Create a prompt for generating a C++ data-structure implementation.

Require:

- C++17
- Class design
- Constructor
- Insert
- Delete
- Search
- Complexity
- Edge cases
- Unit tests

Then evaluate the generated implementation manually and by compiling it.
`
    },

    {
      title: "28. Practical Exercise — Code Review",
      content: `
Give the model a small program containing:

- Poor naming
- Duplicate code
- Missing error handling
- Inefficient loop
- One potential edge-case bug

Ask the model to identify the problems.

Then verify every reported issue yourself.

This teaches an important lesson:

AI-generated review output is evidence for investigation, not automatic truth.
`
    },

    {
      title: "29. Production Principle",
      content: `
The safest technical workflow is:

AI proposes
     ↓
Tools validate
     ↓
Tests verify
     ↓
Human reviews
     ↓
System deploys

The model should accelerate engineering work.

It should not eliminate engineering verification.
`
    }
  ],

  codeExamples: [

    {
      title: "Example 1 — Structured Coding Prompt",
      language: "text",
      code: `You are a senior C++ developer.

TASK:
Implement binary search.

REQUIREMENTS:
- Use C++17.
- Accept vector<int> and target.
- Return the target index.
- Return -1 when not found.
- Use iterative binary search.
- Do not use STL search algorithms.

ALSO PROVIDE:
- Algorithm explanation.
- Complexity.
- Edge cases.
- Five test cases.`
    },

    {
      title: "Example 2 — Debugging Prompt",
      language: "text",
      code: `Analyze this program as a debugging task.

GOAL:
Find the maximum value in an array.

EXPECTED:
Return the largest integer.

OBSERVED:
The program crashes for an empty array.

ENVIRONMENT:
C++17 / GCC 13

TASK:
1. Identify the failure.
2. Explain the root cause.
3. Provide the minimal fix.
4. Provide corrected code.
5. Add tests for empty and single-element arrays.`
    },

    {
      title: "Example 3 — Python Test Generation",
      language: "text",
      code: `Generate pytest tests for this function.

Requirements:
- Normal cases
- Empty input
- Duplicate values
- Boundary values
- Invalid input
- Large input

Do not modify the original implementation.

For every test explain what behavior is being verified.`
    },

    {
      title: "Example 4 — Code Review Prompt",
      language: "text",
      code: `Review the following TypeScript code.

Check:
1. Correctness
2. Type safety
3. Error handling
4. Security
5. Performance
6. Maintainability
7. Edge cases

For every issue return:
Severity
Location
Problem
Reason
Suggested fix

Do not rewrite unrelated code.`
    }
  ],

  mathIntuition: [
    {
      title: "Complexity Improvement",
      formula: "O(n²) → O(n log n)",
      explanation:
        "A technical prompt can explicitly request an algorithmic improvement and require the model to justify the resulting complexity."
    },
    {
      title: "Test Coverage",
      formula: "Coverage = Tested Behavior / Relevant Behavior",
      explanation:
        "Coverage provides an intuition for how much of the relevant behavior is exercised by tests."
    },
    {
      title: "Defect Detection",
      formula: "Detection Rate = Detected Defects / Total Known Defects",
      explanation:
        "This can be used conceptually to evaluate how effectively a review or testing prompt identifies known problems."
    }
  ],

  comparisonTables: [
    {
      title: "Weak vs Strong Technical Prompts",
      headers: [
        "Weak Prompt",
        "Strong Prompt"
      ],
      rows: [
        [
          "Write code for sorting.",
          "Implement merge sort in C++17 for vector<int>."
        ],
        [
          "Fix my code.",
          "Analyze this error, identify the root cause, provide the minimal fix, and explain it."
        ],
        [
          "Make it faster.",
          "Identify the bottleneck and improve algorithmic complexity while preserving behavior."
        ],
        [
          "Write tests.",
          "Generate pytest tests covering normal, edge, invalid, and boundary cases."
        ],
        [
          "Review this code.",
          "Review correctness, security, performance, type safety, and maintainability."
        ]
      ]
    },
    {
      title: "Technical AI Workflow",
      headers: [
        "Stage",
        "Purpose"
      ],
      rows: [
        [
          "Specification",
          "Define what must be built"
        ],
        [
          "Generation",
          "Produce candidate implementation"
        ],
        [
          "Validation",
          "Check syntax and structure"
        ],
        [
          "Testing",
          "Verify behavior"
        ],
        [
          "Review",
          "Inspect quality and risks"
        ],
        [
          "Deployment",
          "Release only after verification"
        ]
      ]
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Coding Prompt",
      instructions: [
        "Choose a programming problem.",
        "Write a weak prompt.",
        "Write a structured technical prompt.",
        "Compare the generated outputs.",
        "Identify which requirements changed the result."
      ]
    },
    {
      title: "Exercise 2 — Debugging Prompt",
      instructions: [
        "Choose a buggy program.",
        "Create a debugging prompt containing evidence.",
        "Ask the model for diagnosis and fix.",
        "Compile and test the proposed fix.",
        "Record any incorrect assumptions."
      ]
    },
    {
      title: "Exercise 3 — Test Generation",
      instructions: [
        "Choose a function.",
        "Ask the model to generate unit tests.",
        "Classify tests as normal, edge, invalid, and boundary.",
        "Run the tests.",
        "Add missing cases manually."
      ]
    }
  ],

  interviewQuestions: [
    {
      question: "Why is technical prompting different from general prompting?",
      answer:
        "Technical tasks usually have stricter correctness, compatibility, performance, and format requirements, so the prompt must specify these constraints clearly."
    },
    {
      question: "What information should a coding prompt contain?",
      answer:
        "Task, language, version, context, inputs, constraints, expected output, acceptance criteria, and important edge cases."
    },
    {
      question: "Why should generated code be tested?",
      answer:
        "Because plausible-looking code can contain syntax errors, logic errors, security issues, incorrect assumptions, or edge-case failures."
    },
    {
      question: "What is acceptance criteria in a coding prompt?",
      answer:
        "A set of measurable conditions that the generated solution must satisfy."
    },
    {
      question: "Can AI-generated code be trusted without verification?",
      answer:
        "No. Generated code should be validated using compilation, tests, static analysis, security checks, and appropriate human review."
    },
    {
      question: "Why should software versions be included?",
      answer:
        "Frameworks and libraries change, so version information helps prevent incompatible or outdated code from being generated."
    },
    {
      question: "What is technical hallucination?",
      answer:
        "Generation of plausible but incorrect technical information such as nonexistent APIs, incorrect configuration options, or unsupported library behavior."
    },
    {
      question: "What is the difference between refactoring and rewriting?",
      answer:
        "Refactoring changes internal structure while preserving intended behavior, whereas rewriting may replace a larger portion of the implementation."
    }
  ],

  keyTakeaways: [
    "Technical prompting requires precise specifications.",
    "A strong technical prompt includes task, context, constraints, expected output, and acceptance criteria.",
    "Debugging prompts should provide evidence rather than asking the model to guess.",
    "Coding prompts should specify language and version when relevant.",
    "AI-generated code must be compiled, tested, and reviewed.",
    "Acceptance criteria make technical prompting measurable.",
    "Prompting can assist coding, debugging, testing, documentation, SQL, APIs, architecture, and code review.",
    "Technical hallucinations are possible even when generated code looks convincing.",
    "Version-aware prompting reduces compatibility problems.",
    "The safest workflow is AI generation followed by automated validation and human review."
  ]
};

export default lesson;