const lesson6 = {
  id: "lesson6",
  moduleId: "module6",

  title: "Structured Outputs, Tool Calling & Function Integration",

  subtitle:
    "Learn how LLM applications move beyond plain text by producing structured data and interacting with external application functions.",

  description:
    "Modern LLM applications often need reliable machine-readable outputs and access to external capabilities. This lesson introduces structured outputs, schemas, validation, function and tool calling, tool execution loops, safety boundaries, and application orchestration.",

  difficulty: "Advanced",

  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Understand why plain text is insufficient for many applications.",
    "Understand structured output.",
    "Understand schemas and validation.",
    "Understand function calling.",
    "Understand tool definitions.",
    "Understand tool selection.",
    "Understand the tool execution loop.",
    "Separate model decisions from tool execution.",
    "Validate tool arguments.",
    "Design safe tool-enabled LLM applications."
  ],

  sections: [
    {
      id: "01",
      title: "Why Structured Outputs Matter",
      content: `
Plain text is useful for humans but often difficult for software to
consume reliably.

Example:

"The weather is 29 degrees and it may rain."

A program would need to extract meaning from prose.

Structured output can instead represent:

{
  temperature: 29,
  rain_probability: 0.65
}

Now application code can process the result directly.
`
    },

    {
      id: "02",
      title: "Structured Output",

      content: `
A structured response follows a defined shape.

Example:

{
  "answer": "Cosine similarity measures angular similarity.",
  "topic": "embeddings",
  "difficulty": "beginner"
}

The application can validate the structure before using it.
`
    },

    {
      id: "03",
      title: "Schemas",

      content: `
A schema defines expected data.

Conceptually:

Object
├── answer: string
├── topic: string
└── difficulty: enum

Schemas provide:

• predictable structure
• validation
• easier integration
• safer downstream processing
`
    },

    {
      id: "04",
      title: "Validation Pipeline",

      content: `
MODEL
 ↓
RAW RESPONSE
 ↓
PARSE
 ↓
SCHEMA VALIDATION
 ↓
VALID?
 /   \
YES   NO
 |     |
USE   RETRY/FALLBACK
`
    },

    {
      id: "05",
      title: "Structured Output vs Free Text",

      comparison: [
        {
          aspect: "Free text",
          strength: "Flexible and natural for humans",
          weakness: "Harder for deterministic parsing"
        },
        {
          aspect: "Structured output",
          strength: "Easier for software integration",
          weakness: "Requires schema design and validation"
        }
      ]
    },

    {
      id: "06",
      title: "What Is Tool Calling?",

      content: `
Tool calling allows an LLM application to request execution of an
external capability.

Example:

USER
 ↓
LLM
 ↓
"I need weather information"
 ↓
WEATHER TOOL
 ↓
TOOL RESULT
 ↓
LLM
 ↓
FINAL RESPONSE

The model does not necessarily execute the external function itself.

The application executes the tool.
`
    },

    {
      id: "07",
      title: "Tool Definition",

      content: `
A tool definition can describe:

• tool name
• purpose
• arguments
• argument types
• required fields

Example:

get_weather(
    city: string
)

The model can determine when the tool is relevant.
`
    },

    {
      id: "08",
      title: "Tool Calling Lifecycle",

      content: `
1. User asks a question.
2. Application sends context to the model.
3. Model determines that a tool may help.
4. Model produces a tool call.
5. Application validates the tool call.
6. Application executes the tool.
7. Tool returns a result.
8. Application sends the result back to the model.
9. Model generates the final response.

Flow:

USER
 ↓
LLM
 ↓
TOOL CALL
 ↓
VALIDATE
 ↓
EXECUTE
 ↓
TOOL RESULT
 ↓
LLM
 ↓
FINAL RESPONSE
`
    },

    {
      id: "09",
      title: "Model Decision vs Tool Execution",

      content: `
A critical architectural boundary is:

MODEL
→ decides what tool it wants to call

APPLICATION
→ decides whether that call is allowed

APPLICATION
→ executes the tool

This means the model should not automatically receive unrestricted
system access.
`
    },

    {
      id: "10",
      title: "Argument Validation",

      content: `
Tool arguments must be validated.

Example:

delete_file(
    path="/important/file"
)

The application should verify:

• path format
• user authorization
• allowed directories
• operation permissions

Never assume model-generated arguments are safe.
`
    },

    {
      id: "11",
      title: "Tool Permissions",

      content: `
Tools can be classified by risk.

READ
• search documents
• retrieve weather
• calculate values

WRITE
• create records
• modify files

HIGH IMPACT
• financial operations
• account changes
• destructive operations

Higher-risk tools require stronger authorization and confirmation.
`
    },

    {
      id: "12",
      title: "Tool Calling Loop",

      content: `
Some tasks require multiple tool calls.

Example:

USER
 ↓
LLM
 ↓
SEARCH TOOL
 ↓
RESULT
 ↓
LLM
 ↓
CALCULATION TOOL
 ↓
RESULT
 ↓
LLM
 ↓
FINAL ANSWER

The application orchestrates the loop.
`
    },

    {
      id: "13",
      title: "Tool Result Validation",

      content: `
External tools can fail.

Possible states:

SUCCESS
EMPTY
TIMEOUT
INVALID
UNAUTHORIZED
ERROR

The application should validate the result before sending it back to
the model.
`
    },

    {
      id: "14",
      title: "Idempotency",

      content: `
Repeated tool execution can be dangerous.

For example:

charge_customer()

If a request is retried incorrectly, the operation might happen twice.

Production systems can use idempotency mechanisms to prevent unintended
duplicate actions.
`
    },

    {
      id: "15",
      title: "Tool Security",

      content: `
A tool-enabled LLM application should enforce:

• authentication
• authorization
• argument validation
• input limits
• output validation
• audit logging
• rate limiting
• confirmation for sensitive actions

The model should be treated as an untrusted decision component rather
than an unrestricted system administrator.
`
    },

    {
      id: "16",
      title: "Tool Calling Architecture",

      content: `
                 ┌───────────────┐
                 │     USER      │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │      LLM      │
                 └───────┬───────┘
                         ↓
                  TOOL DECISION
                         ↓
                ┌─────────────────┐
                │ APPLICATION     │
                │ VALIDATION       │
                │ AUTHORIZATION    │
                └────────┬────────┘
                         ↓
                    TOOL EXECUTION
                         ↓
                    TOOL RESULT
                         ↓
                        LLM
                         ↓
                  FINAL RESPONSE
`
    },

    {
      id: "17",
      title: "Structured Outputs + Tools",

      content: `
The two capabilities can work together.

Example:

USER
 ↓
LLM
 ↓
STRUCTURED TOOL CALL
 ↓
VALIDATION
 ↓
TOOL
 ↓
STRUCTURED RESULT
 ↓
LLM
 ↓
STRUCTURED FINAL RESPONSE

This pattern is foundational for agentic applications.
`
    },

    {
      id: "18",
      title: "When Tools Are Better Than Generation",

      content: `
Use a tool when the application needs:

• current external data
• deterministic computation
• database access
• search
• file operations
• business-system integration

Use model generation when the task is primarily:

• explanation
• summarization
• transformation
• natural-language generation

Many real applications combine both.
`
    }
  ],

  codeExamples: [
    {
      title: "Tool Definition",
      language: "python",
      code: `
def get_weather(city: str):
    """
    Return weather information
    for an allowed city.
    """
    return {
        "city": city,
        "temperature": 29
    }
`
    },

    {
      title: "Tool Validation",
      language: "python",
      code: `
ALLOWED_CITIES = {
    "Mumbai",
    "Delhi",
    "Hyderabad"
}


def validate_city(city):
    if city not in ALLOWED_CITIES:
        raise ValueError(
            "City is not allowed"
        )

    return city
`
    },

    {
      title: "Tool Execution Boundary",
      language: "python",
      code: `
def execute_tool(name, arguments):
    if name == "get_weather":
        city = validate_city(
            arguments["city"]
        )

        return get_weather(city)

    raise ValueError(
        "Unknown tool"
    )
`
    }
  ],

  exercises: [
    {
      type: "conceptual",
      question:
        "Why is structured output useful for LLM applications?"
    },
    {
      type: "architecture",
      question:
        "Design a tool-calling workflow for an application that searches a document database."
    },
    {
      type: "security",
      question:
        "Why should an application validate model-generated tool arguments?"
    },
    {
      type: "design",
      question:
        "Which operations should require explicit user confirmation?"
    }
  ],

  codingExercises: [
    "Create a structured response schema.",
    "Validate model output.",
    "Define a simple search tool.",
    "Validate tool arguments.",
    "Implement a tool dispatcher.",
    "Handle tool errors.",
    "Implement a multi-step tool loop.",
    "Add audit logging to tool execution."
  ],

  architectureExercises: [
    "Build a calculator tool.",
    "Build a document-search tool.",
    "Build a weather-information tool.",
    "Design a database query tool with authorization.",
    "Design a tool system with read and write permissions.",
    "Design a confirmation mechanism for high-impact tools."
  ],

  interviewQuestions: [
    "What is structured output?",
    "Why is schema validation important?",
    "What is function calling?",
    "Does the model directly execute a function?",
    "Why must tool arguments be validated?",
    "What is a tool dispatcher?",
    "What is idempotency?",
    "How should high-risk tools be protected?",
    "How do structured outputs and tool calling work together?"
  ],

  commonMistakes: [
    "Trusting model-generated tool arguments.",
    "Giving unrestricted system access to tools.",
    "Executing unknown tools.",
    "Skipping authorization.",
    "Ignoring tool failures.",
    "Retrying destructive operations without idempotency.",
    "Assuming structured output is automatically valid.",
    "Mixing tool execution with prompt generation."
  ],

  summary: [
    "Structured outputs make model responses easier for software to consume.",
    "Schemas define expected response structure.",
    "Validation should occur before downstream processing.",
    "Tool calling allows models to request external capabilities.",
    "The application should control actual tool execution.",
    "Tool arguments must be validated and authorized.",
    "High-impact operations require stronger controls.",
    "Tool loops can support multi-step workflows.",
    "Structured outputs and tools together form an important foundation for agentic systems."
  ],

  keyTakeaways: [
    "Treat model output as untrusted application input.",
    "Validate structured responses.",
    "Separate tool selection from tool execution.",
    "Never give an LLM unrestricted system access.",
    "Use authorization, validation, logging, and idempotency for tools.",
    "Tool calling is an application orchestration pattern, not magic model execution."
  ]
};

export default lesson6;