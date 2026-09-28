const lesson3 = {
  id: "lesson3",
  moduleId: "module6",

  title: "Building Your First LLM Application",

  subtitle:
    "Move from a single API call to a structured LLM application with a frontend, backend, prompt layer, validation, error handling, and observability.",

  description:
    "This lesson connects the API concepts from the first two lessons into a complete application workflow. You will learn how to structure an LLM application, separate responsibilities, build a backend service, manage prompts, validate inputs and outputs, and prepare the application for production improvements.",

  difficulty: "Intermediate",

  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Understand the architecture of a basic LLM application.",
    "Separate frontend and backend responsibilities.",
    "Create an LLM service layer.",
    "Construct prompts programmatically.",
    "Validate user input.",
    "Call an LLM through a backend.",
    "Validate generated output.",
    "Handle errors gracefully.",
    "Track latency and usage.",
    "Design the application for future RAG and tool integration."
  ],

  sections: [
    {
      id: "01",
      title: "From API Call to Application",

      content: `
A single API call is not yet a complete application.

A real application usually contains:

FRONTEND
   ↓
BACKEND
   ↓
PROMPT / APPLICATION LOGIC
   ↓
LLM SERVICE
   ↓
MODEL API
   ↓
RESPONSE PROCESSING
   ↓
FRONTEND

Each layer has a responsibility.
`
    },

    {
      id: "02",
      title: "Basic Application Architecture",

      content: `
A simple architecture can contain four major layers:

1. Presentation layer
2. API layer
3. Application/service layer
4. Model integration layer

Architecture:

┌──────────────────────┐
│      FRONTEND        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      API ROUTE       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ APPLICATION SERVICE  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     LLM CLIENT       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     MODEL API        │
└──────────────────────┘
`
    },

    {
      id: "03",
      title: "Frontend Responsibility",

      content: `
The frontend should handle user interaction.

Typical responsibilities:

• collecting input
• displaying loading state
• showing generated output
• displaying errors
• managing conversation UI
• handling streaming UI

The frontend should not contain private provider credentials.
`
    },

    {
      id: "04",
      title: "Backend Responsibility",

      content: `
The backend provides the trusted application boundary.

Responsibilities can include:

• authentication
• authorization
• validation
• prompt construction
• model selection
• API credentials
• LLM calls
• output validation
• logging
• rate limiting
• caching
• monitoring

This makes the backend the central control layer.
`
    },

    {
      id: "05",
      title: "Application Service Layer",

      content: `
Instead of placing all logic inside an API route, use a service layer.

API ROUTE
   ↓
LLM SERVICE
   ↓
PROMPT SERVICE
   ↓
MODEL CLIENT

Benefits:

• easier testing
• reusable logic
• clearer architecture
• easier provider changes
• easier evaluation
• easier future RAG integration
`
    },

    {
      id: "06",
      title: "Prompt Construction",

      content: `
Prompts should be treated as application inputs rather than scattered
strings throughout the codebase.

A prompt can be composed from:

system instructions
+
user input
+
application context
+
retrieved information
+
tool results

Conceptually:

Prompt =
Instructions
+
Context
+
User Request
`
    },

    {
      id: "07",
      title: "Prompt Templates",

      code: `
def build_prompt(topic):
    return f"""
You are a technical tutor.

Explain the following topic clearly:

Topic:
{topic}

Requirements:
- Explain the concept.
- Give an example.
- Include important terminology.
"""
`,

      content: `
Templates make prompts:

• reusable
• testable
• easier to version
• easier to evaluate

They also reduce duplication.
`
    },

    {
      id: "08",
      title: "Input Validation",

      content: `
Before sending user input to an LLM:

validate
   ↓
normalize
   ↓
apply limits
   ↓
construct request

Possible validation rules:

• required field
• maximum length
• allowed format
• authorization
• request quota

Validation protects both the application and the model API.
`
    },

    {
      id: "09",
      title: "Output Validation",

      content: `
Generated text is not automatically trustworthy application data.

For free-form text:

validate basic expectations.

For structured output:

validate a schema.

Conceptually:

MODEL OUTPUT
     ↓
PARSE
     ↓
SCHEMA VALIDATION
     ↓
VALID
  /   \
yes    no
 |      |
use    retry/fallback
`
    },

    {
      id: "10",
      title: "Structured Application Responses",

      content: `
Suppose an application needs:

{
  "answer": "...",
  "confidence": 0.82,
  "topics": ["embeddings"]
}

The application should validate:

• required fields
• field types
• allowed values
• ranges
• nested structure

This is much safer than assuming that generated text always follows
the expected format.
`
    },

    {
      id: "11",
      title: "Conversation State",

      content: `
A chat application needs some representation of conversation history.

Conceptually:

Message 1
Message 2
Message 3
Message 4
      ↓
Context construction
      ↓
LLM

The application must manage:

• history size
• token limits
• ordering
• system instructions
• user messages
• assistant messages

Long conversations can require summarization or other context strategies.
`
    },

    {
      id: "12",
      title: "Stateless vs Stateful Applications",

      comparison: [
        {
          aspect: "Stateless",
          description:
            "Each request contains the required context."
        },
        {
          aspect: "Stateful",
          description:
            "The application stores and retrieves conversation state."
        }
      ],

      content: `
The correct choice depends on application requirements.

A stateful system may store conversation history in:

• database
• cache
• session storage
• application state

The model itself does not automatically provide durable application
memory.
`
    },

    {
      id: "13",
      title: "Latency",

      formula: `
Total latency ≈

frontend
+
network
+
backend
+
prompt construction
+
LLM inference
+
response processing
`,

      content: `
A slow application may have multiple contributors.

Therefore measure each stage instead of assuming the model is the only
source of latency.
`
    },

    {
      id: "14",
      title: "Usage and Cost Tracking",

      content: `
An application should track model usage where the API provides usage
information.

Useful fields include:

• input tokens
• output tokens
• total tokens
• model
• request count
• latency

This enables:

cost estimation
+
capacity planning
+
model comparison
+
optimization
`
    },

    {
      id: "15",
      title: "Error Handling",

      content: `
A user-friendly application should distinguish:

VALIDATION ERROR
      ↓
Tell user what to fix

AUTHENTICATION ERROR
      ↓
Application configuration issue

RATE LIMIT
      ↓
Retry/backoff or queue

TIMEOUT
      ↓
Retry/fallback

MODEL ERROR
      ↓
Graceful failure

APPLICATION ERROR
      ↓
Log and investigate
`
    },

    {
      id: "16",
      title: "Application Observability",

      content: `
Useful application-level signals include:

REQUEST
• request ID
• timestamp
• user/session identifier where appropriate

MODEL
• model identifier
• latency
• token usage

RESULT
• success/failure
• validation status

ERROR
• error category
• retry count

Observability allows developers to understand how the application
behaves in real usage.
`
    },

    {
      id: "17",
      title: "Designing for Future RAG",

      content: `
A good basic LLM application should leave room for future retrieval.

Initial:

USER
 ↓
PROMPT
 ↓
LLM

Later:

USER
 ↓
QUERY
 ↓
RETRIEVAL
 ↓
CONTEXT
 ↓
PROMPT
 ↓
LLM

Therefore application architecture should keep retrieval logic separate
from the core model client.
`
    },

    {
      id: "18",
      title: "Designing for Tools",

      content: `
Later, an LLM application may need tools.

Example:

USER
 ↓
LLM
 ↓
TOOL DECISION
 ↓
TOOL
 ↓
TOOL RESULT
 ↓
LLM
 ↓
FINAL RESPONSE

If the LLM client is isolated behind a service layer, adding tool
orchestration becomes easier.
`
    },

    {
      id: "19",
      title: "Complete Beginner Application",

      content: `
A useful first project can be:

AI Study Assistant

Features:

• user enters a topic
• backend validates input
• prompt template is constructed
• LLM generates explanation
• response is validated
• frontend displays answer
• request latency is recorded
• usage metadata is recorded
• errors are handled gracefully

Architecture:

STUDENT
  ↓
WEB UI
  ↓
BACKEND API
  ↓
PROMPT SERVICE
  ↓
LLM SERVICE
  ↓
MODEL API
  ↓
RESPONSE VALIDATION
  ↓
WEB UI
`
    },

    {
      id: "20",
      title: "Application Engineering Principles",

      content: `
A strong LLM application should follow these principles:

1. Keep secrets server-side.
2. Validate inputs.
3. Validate outputs.
4. Separate application logic from model integration.
5. Handle external failures.
6. Track latency and usage.
7. Keep prompts maintainable.
8. Design for testing.
9. Keep provider-specific code isolated.
10. Prepare the architecture for retrieval and tools.
`
    }
  ],

  architecture: {
    title: "First LLM Application Architecture",

    layers: [
      {
        name: "Presentation",
        components: [
          "Chat UI",
          "Input",
          "Loading State",
          "Error State"
        ]
      },
      {
        name: "API",
        components: [
          "Authentication",
          "Validation",
          "Rate Limiting"
        ]
      },
      {
        name: "Application",
        components: [
          "Prompt Service",
          "Conversation Service",
          "LLM Service"
        ]
      },
      {
        name: "Model",
        components: [
          "Provider API",
          "Language Model"
        ]
      },
      {
        name: "Observability",
        components: [
          "Logs",
          "Metrics",
          "Tracing"
        ]
      }
    ]
  },

  codeExamples: [
    {
      title: "Simple Application Service",
      language: "python",
      code: `
class StudyAssistant:
    def __init__(self, llm):
        self.llm = llm

    def answer(self, topic):
        if not topic.strip():
            raise ValueError(
                "Topic cannot be empty"
            )

        prompt = f"""
You are a technical tutor.

Explain:
{topic}

Include:
- definition
- intuition
- example
- key takeaway
"""

        return self.llm.generate(prompt)
`
    },

    {
      title: "Simple Request Model",
      language: "python",
      code: `
from dataclasses import dataclass


@dataclass
class StudyRequest:
    topic: str

    def validate(self):
        if not self.topic.strip():
            raise ValueError(
                "Topic is required"
            )

        if len(self.topic) > 500:
            raise ValueError(
                "Topic is too long"
            )
`
    },

    {
      title: "Application Timing",
      language: "python",
      code: `
import time


def generate_with_timing(llm, prompt):
    start = time.perf_counter()

    result = llm.generate(prompt)

    elapsed = time.perf_counter() - start

    return {
        "result": result,
        "latency_seconds": elapsed
    }
`
    }
  ],

  exercises: [
    {
      type: "architecture",
      question:
        "Design the architecture of an AI study assistant using a frontend, backend, and LLM API."
    },
    {
      type: "coding",
      question:
        "Create a Python service class that validates input and calls an LLM client."
    },
    {
      type: "design",
      question:
        "How would you change the architecture to add RAG later?"
    },
    {
      type: "debugging",
      question:
        "The application works locally but users receive empty responses intermittently. What layers would you inspect?"
    }
  ],

  codingExercises: [
    "Build a basic LLM service class.",
    "Create a prompt-template function.",
    "Create request validation.",
    "Create response validation.",
    "Add latency measurement.",
    "Add structured logging.",
    "Implement bounded retries.",
    "Create a simple chat-history manager."
  ],

  architectureExercises: [
    "Design a study assistant.",
    "Design a customer-support assistant.",
    "Design a code-explanation assistant.",
    "Add streaming to an existing architecture.",
    "Add RAG without tightly coupling retrieval to the model client.",
    "Add tool calling while preserving service boundaries."
  ],

  interviewQuestions: [
    "What are the main layers of an LLM application?",
    "Why should the frontend normally not call a private model API directly?",
    "Why use an application service layer?",
    "How should prompts be managed?",
    "Why validate LLM output?",
    "How would you add RAG to a basic LLM application?",
    "How would you measure application latency?",
    "What information should be tracked for cost analysis?",
    "How would you design an LLM application for future provider changes?"
  ],

  commonMistakes: [
    "Putting all application logic inside one API endpoint.",
    "Hard-coding prompts throughout the application.",
    "Exposing provider credentials.",
    "Not validating input.",
    "Trusting generated structured data without validation.",
    "Ignoring latency.",
    "Ignoring usage and cost.",
    "Mixing retrieval logic directly into low-level model clients.",
    "Not designing error states for the frontend."
  ],

  summary: [
    "An LLM application is more than a model API call.",
    "Frontend, backend, application, and model layers should have clear responsibilities.",
    "The backend should protect credentials and enforce application rules.",
    "Prompt construction should be maintainable and testable.",
    "Inputs and outputs should be validated.",
    "Conversation state must be deliberately managed.",
    "Latency and usage should be measured.",
    "The architecture should leave room for RAG and tools.",
    "A service layer reduces coupling and improves maintainability."
  ],

  keyTakeaways: [
    "Separate presentation, API, application, and model responsibilities.",
    "Treat prompts as application components.",
    "Validate everything crossing important system boundaries.",
    "Measure model usage and latency.",
    "Design today's simple application so tomorrow's RAG and tool systems can fit naturally."
  ]
};

export default lesson3;