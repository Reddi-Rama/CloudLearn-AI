const lesson8 = {
  id: "lesson8",
  moduleId: "module6",

  title: "LLM Application Security, Safety & Guardrails",

  subtitle:
    "Learn how to protect LLM applications from prompt injection, unsafe inputs, data leakage, unauthorized actions, and unreliable model behavior.",

  description:
    "LLM applications introduce security concerns that combine traditional application security with model-specific risks. This lesson covers trust boundaries, prompt injection, sensitive data, authorization, output validation, tool security, guardrails, rate limiting, logging, and defense in depth.",

  difficulty: "Advanced",

  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Understand LLM application trust boundaries.",
    "Understand prompt injection.",
    "Distinguish direct and indirect prompt injection.",
    "Understand sensitive-data risks.",
    "Apply authentication and authorization.",
    "Validate model outputs.",
    "Secure tool execution.",
    "Understand input and output guardrails.",
    "Apply rate limiting and abuse controls.",
    "Design defense-in-depth architectures."
  ],

  sections: [
    {
      id: "01",
      title: "Why LLM Security Is Different",
      content: `
Traditional software usually executes deterministic instructions.

LLM applications introduce probabilistic behavior.

The model may receive:

• user input
• retrieved documents
• tool results
• uploaded files
• conversation history
• external content

Some of this content may be untrusted.

Therefore:

UNTRUSTED DATA
must not automatically become
TRUSTED INSTRUCTIONS.
`
    },

    {
      id: "02",
      title: "Trust Boundaries",
      content: `
A useful architecture is:

USER
 ↓
APPLICATION
 ↓
LLM
 ↓
TOOLS / DATABASES / SERVICES

Every boundary should have validation and authorization.

The model should not be treated as a security boundary by itself.
`
    },

    {
      id: "03",
      title: "Prompt Injection",
      content: `
Prompt injection occurs when input attempts to influence model behavior
in a way that conflicts with application instructions.

The input may attempt to:

• override instructions
• expose hidden information
• manipulate tool use
• change the application's intended behavior

Prompt injection is an application-security concern.
`
    },

    {
      id: "04",
      title: "Direct vs Indirect Injection",
      comparison: [
        {
          type: "Direct injection",
          description:
            "The user directly provides adversarial instructions."
        },
        {
          type: "Indirect injection",
          description:
            "Untrusted external content contains instructions that are later presented to the model."
        }
      ]
    },

    {
      id: "05",
      title: "Retrieved Content as Untrusted Data",
      content: `
RAG systems may retrieve documents from external or user-controlled
sources.

A retrieved document should be treated as DATA.

Conceptually:

SYSTEM POLICY
      ↓
APPLICATION INSTRUCTIONS
      ↓
USER REQUEST
      ↓
RETRIEVED DATA

Retrieved text should not automatically override application policy.
`
    },

    {
      id: "06",
      title: "Sensitive Information",
      content: `
Applications may process:

• personal information
• credentials
• internal documents
• customer records
• business information
• private conversations

Security design should determine:

what data can enter the model
what data can be retrieved
what data can be logged
what data can leave the system
`
    },

    {
      id: "07",
      title: "Authentication vs Authorization",
      comparison: [
        {
          concept: "Authentication",
          meaning: "Who is the user?"
        },
        {
          concept: "Authorization",
          meaning: "What is the user allowed to do?"
        }
      ],

      content: `
An authenticated user should not automatically receive access to every
LLM tool or every document.
`
    },

    {
      id: "08",
      title: "Authorization-Aware Retrieval",
      content: `
A secure retrieval flow is:

USER
 ↓
AUTHENTICATION
 ↓
AUTHORIZATION
 ↓
RETRIEVAL FILTER
 ↓
ALLOWED DOCUMENTS
 ↓
LLM

Access control should happen before protected information is exposed.
`
    },

    {
      id: "09",
      title: "Input Validation",
      content: `
Validate application inputs before sending them downstream.

Possible controls:

• maximum length
• allowed file types
• content limits
• request schema
• user permissions
• abuse detection
• rate limits
`
    },

    {
      id: "10",
      title: "Output Validation",
      content: `
Model output should not automatically be trusted.

Validation may include:

• schema validation
• content checks
• business-rule validation
• prohibited-content checks
• link validation
• tool-call validation

For critical workflows:

MODEL OUTPUT
 ↓
VALIDATION
 ↓
APPLICATION ACTION
`
    },

    {
      id: "11",
      title: "Tool Security",
      content: `
Tools create an important security boundary.

A model may request:

delete_record(id)

The application must determine:

• Is this tool allowed?
• Is the user authorized?
• Is the target valid?
• Is confirmation required?
• Is the operation reversible?
• Should it be logged?

The model should never bypass these checks.
`
    },

    {
      id: "12",
      title: "Guardrails",
      content: `
Guardrails are controls that constrain or validate application behavior.

They can operate at multiple stages:

INPUT GUARDRAIL
      ↓
MODEL
      ↓
OUTPUT GUARDRAIL
      ↓
TOOL AUTHORIZATION
      ↓
APPLICATION ACTION

Guardrails should complement—not replace—normal security controls.
`
    },

    {
      id: "13",
      title: "Rate Limiting",
      formula: `
Allowed requests =
requests per user per time window
`,

      content: `
Rate limiting helps control:

• abuse
• accidental overload
• unexpected cost
• automated attacks

Limits may be applied by:

• user
• IP
• API key
• organization
• endpoint
`
    },

    {
      id: "14",
      title: "Safe Logging",
      content: `
Logs are useful for debugging and auditing.

However, logging complete prompts and responses may expose sensitive data.

A safer strategy can include:

• request ID
• timestamp
• model
• latency
• token usage
• status
• sanitized metadata

Sensitive content should be handled according to application policy.
`
    },

    {
      id: "15",
      title: "Defense in Depth",
      content: `
Do not depend on a single protection.

Example:

AUTHENTICATION
      ↓
AUTHORIZATION
      ↓
INPUT VALIDATION
      ↓
PROMPT CONTROLS
      ↓
MODEL
      ↓
OUTPUT VALIDATION
      ↓
TOOL AUTHORIZATION
      ↓
AUDIT LOGGING

If one control fails, additional layers remain.
`
    },

    {
      id: "16",
      title: "Security Failure Example",
      content: `
Unsafe architecture:

USER
 ↓
LLM
 ↓
DIRECT DATABASE ACCESS

Safer architecture:

USER
 ↓
AUTH
 ↓
LLM
 ↓
TOOL REQUEST
 ↓
VALIDATION
 ↓
AUTHORIZATION
 ↓
DATABASE
 ↓
SANITIZED RESULT
 ↓
LLM
`
    },

    {
      id: "17",
      title: "Security Testing",
      content: `
Security testing should deliberately test failure cases.

Examples:

• malicious instructions
• oversized input
• unauthorized document requests
• invalid tool arguments
• repeated requests
• malformed structured output
• sensitive-data exposure attempts
• tool misuse
`
    }
  ],

  codeExamples: [
    {
      title: "Basic Input Validation",
      language: "python",
      code: `
def validate_query(query):
    if not isinstance(query, str):
        raise ValueError(
            "Query must be text"
        )

    if not query.strip():
        raise ValueError(
            "Query cannot be empty"
        )

    if len(query) > 5000:
        raise ValueError(
            "Query is too long"
        )

    return query.strip()
`
    },

    {
      title: "Authorization Check",
      language: "python",
      code: `
def can_access(user, resource):
    return (
        resource.owner_id == user.id
        or user.is_admin
    )
`
    },

    {
      title: "Tool Permission Check",
      language: "python",
      code: `
def execute_sensitive_tool(user, tool):
    if not user.can_use(tool):
        raise PermissionError(
            "Tool access denied"
        )

    return tool.execute()
`
    }
  ],

  exercises: [
    {
      type: "conceptual",
      question:
        "Why should retrieved documents be treated as untrusted data?"
    },
    {
      type: "security",
      question:
        "Explain the difference between authentication and authorization."
    },
    {
      type: "architecture",
      question:
        "Design a secure LLM application that can search private company documents."
    },
    {
      type: "analysis",
      question:
        "Why is defense in depth important for LLM applications?"
    }
  ],

  codingExercises: [
    "Implement input validation.",
    "Implement a simple authorization check.",
    "Create a tool permission system.",
    "Build a rate limiter.",
    "Create sanitized logging.",
    "Implement output schema validation.",
    "Create security-test cases for an LLM application."
  ],

  interviewQuestions: [
    "What is prompt injection?",
    "What is indirect prompt injection?",
    "Why is retrieved content untrusted?",
    "What is the difference between authentication and authorization?",
    "Why should model outputs be validated?",
    "How should LLM tools be secured?",
    "What are guardrails?",
    "Why is rate limiting important?",
    "What is defense in depth?",
    "What information should be avoided in production logs?"
  ],

  commonMistakes: [
    "Treating the model as a trusted security boundary.",
    "Giving the model unrestricted tool access.",
    "Skipping authorization.",
    "Logging sensitive prompts.",
    "Trusting retrieved documents as instructions.",
    "Trusting model-generated tool arguments.",
    "Using only one security control.",
    "Ignoring abuse and rate limiting."
  ],

  summary: [
    "LLM applications combine traditional security with model-specific risks.",
    "Prompt injection can manipulate model behavior.",
    "Retrieved content should be treated as untrusted data.",
    "Authentication and authorization solve different problems.",
    "Model outputs require validation.",
    "Tools need explicit authorization boundaries.",
    "Guardrails should operate across the application lifecycle.",
    "Defense in depth reduces dependence on a single control."
  ],

  keyTakeaways: [
    "Never treat an LLM as a trusted security boundary.",
    "Separate instructions from untrusted data.",
    "Authorize every sensitive operation.",
    "Validate both inputs and outputs.",
    "Protect tools with application-level controls.",
    "Use layered security rather than one guardrail."
  ]
};

export default lesson8;