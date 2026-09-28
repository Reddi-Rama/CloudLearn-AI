const lesson10 = {
  id: "lesson10",
  moduleId: "module6",

  title: "LLM Application Architecture & Design Patterns",

  subtitle:
    "Learn how to design maintainable LLM applications by separating interfaces, services, prompts, models, tools, data, and observability.",

  description:
    "As an LLM application grows, placing all logic inside one API endpoint becomes difficult to maintain. This lesson introduces layered architecture, service boundaries, orchestration, adapters, repositories, configuration management, dependency separation, and reusable LLM application design patterns.",

  difficulty: "Advanced",

  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Understand layered LLM application architecture.",
    "Separate frontend, API, service, model, and data responsibilities.",
    "Understand orchestration.",
    "Understand provider abstraction.",
    "Understand adapter patterns.",
    "Separate prompt logic from transport logic.",
    "Design reusable application services.",
    "Understand configuration management.",
    "Design maintainable tool integrations.",
    "Apply architecture patterns to LLM applications."
  ],

  sections: [
    {
      id: "01",
      title: "Why Architecture Matters",
      content: `
A prototype can work with:

UI
 ↓
API
 ↓
LLM

But production applications often contain:

authentication
prompt management
LLM calls
retrieval
tools
validation
logging
evaluation
billing
monitoring
storage

Without clear boundaries, the codebase becomes difficult to maintain.
`
    },

    {
      id: "02",
      title: "Layered Architecture",
      content: `
A useful conceptual architecture is:

PRESENTATION
      ↓
API / CONTROLLER
      ↓
APPLICATION SERVICE
      ↓
ORCHESTRATION
      ↓
MODEL / TOOLS / RETRIEVAL
      ↓
INFRASTRUCTURE

Each layer has a focused responsibility.
`
    },

    {
      id: "03",
      title: "Presentation Layer",
      content: `
The frontend is responsible for:

• user interaction
• displaying state
• collecting input
• showing streaming output
• displaying errors

It should not contain private model-provider credentials.

The browser should communicate with the application's backend.
`
    },

    {
      id: "04",
      title: "API Layer",
      content: `
The API layer handles:

• request parsing
• authentication
• validation
• routing
• response formatting
• error mapping

Example:

POST /api/chat

The API layer should avoid containing every piece of business logic.
`
    },

    {
      id: "05",
      title: "Application Service Layer",
      content: `
The service layer coordinates application behavior.

Example:

ChatService
   ↓
PromptBuilder
   ↓
LLMProvider
   ↓
OutputValidator

This makes the system easier to test.
`
    },

    {
      id: "06",
      title: "Orchestration",
      content: `
Orchestration coordinates multiple components.

Example:

USER
 ↓
VALIDATE
 ↓
BUILD PROMPT
 ↓
RETRIEVE
 ↓
CALL MODEL
 ↓
VALIDATE OUTPUT
 ↓
CALL TOOL IF REQUIRED
 ↓
FINAL RESPONSE

The orchestrator controls the sequence.
`
    },

    {
      id: "07",
      title: "Provider Abstraction",
      content: `
Application code should ideally avoid depending directly on one provider.

Conceptually:

Application
    ↓
LLMProvider Interface
   / \
Provider A  Provider B

This makes provider replacement and testing easier.
`
    },

    {
      id: "08",
      title: "Adapter Pattern",
      content: `
Different providers may expose different SDKs.

An adapter converts provider-specific APIs into a common application
interface.

Application
     ↓
Common Interface
     ↓
Adapter
     ↓
Provider SDK
`
    },

    {
      id: "09",
      title: "Prompt Service",
      content: `
Prompt construction can be separated into its own component.

Example:

PromptService

Responsibilities:

• load prompt
• insert variables
• insert context
• select prompt version
• construct messages

This prevents prompts from being scattered throughout API handlers.
`
    },

    {
      id: "10",
      title: "Tool Service",
      content: `
Tool execution can also have a dedicated service.

ToolService

Responsibilities:

• validate tool
• validate arguments
• authorize operation
• execute tool
• handle errors
• record audit information
`
    },

    {
      id: "11",
      title: "Configuration Management",
      content: `
Configuration may include:

MODEL_NAME
TEMPERATURE
MAX_OUTPUT
TIMEOUT
API_ENDPOINT
FEATURE_FLAGS

Environment variables can provide deployment-specific configuration.

Secrets should not be hard-coded into source code.
`
    },

    {
      id: "12",
      title: "Dependency Injection",
      content: `
A service can receive its dependencies instead of creating them internally.

Example:

ChatService(
    llm_provider,
    prompt_service,
    validator
)

This makes testing easier because mock implementations can be supplied.
`
    },

    {
      id: "13",
      title: "Repository Pattern",
      content: `
A repository abstracts persistence.

Example:

ConversationRepository

Possible operations:

save()
get()
delete()
list()

The application service does not need to know the underlying database
implementation.
`
    },

    {
      id: "14",
      title: "Stateless Application Servers",
      content: `
A stateless API server does not rely on local process memory for important
persistent state.

Instead:

CLIENT
 ↓
API SERVER
 ↓
DATABASE / CACHE

This makes horizontal scaling easier.
`
    },

    {
      id: "15",
      title: "Event-Based Extensions",
      content: `
Some operations do not need to block the main request.

Example:

USER REQUEST
 ↓
API
 ↓
QUEUE
 ↓
BACKGROUND WORKER
 ↓
RESULT

Useful for:

• document processing
• batch evaluation
• analytics
• indexing
• long-running tasks
`
    },

    {
      id: "16",
      title: "Complete Architecture",
      content: `
                    ┌─────────────┐
                    │   FRONTEND  │
                    └──────┬──────┘
                           ↓
                    ┌─────────────┐
                    │ API LAYER   │
                    └──────┬──────┘
                           ↓
                  ┌─────────────────┐
                  │ APPLICATION     │
                  │ SERVICE         │
                  └────────┬────────┘
                           ↓
                  ┌─────────────────┐
                  │ ORCHESTRATOR    │
                  └─────┬─────┬─────┘
                        ↓     ↓
                 ┌───────┐  ┌───────┐
                 │  LLM  │  │ TOOLS │
                 └───────┘  └───────┘
                        ↓
                ┌───────────────┐
                │ DATA / CACHE  │
                └───────────────┘

Observability surrounds the complete request lifecycle.
`
    }
  ],

  codeExamples: [
    {
      title: "Provider Interface",
      language: "python",
      code: `
class LLMProvider:

    async def generate(
        self,
        messages
    ):
        raise NotImplementedError
`
    },

    {
      title: "Service Composition",
      language: "python",
      code: `
class ChatService:

    def __init__(
        self,
        llm_provider,
        prompt_service,
        validator
    ):
        self.llm = llm_provider
        self.prompts = prompt_service
        self.validator = validator

    async def run(self, user_input):

        messages = self.prompts.build(
            user_input
        )

        response = await self.llm.generate(
            messages
        )

        return self.validator.validate(
            response
        )
`
    },

    {
      title: "Repository Interface",
      language: "python",
      code: `
class ConversationRepository:

    async def save(self, conversation):
        raise NotImplementedError

    async def get(self, conversation_id):
        raise NotImplementedError
`
    }
  ],

  exercises: [
    {
      type: "architecture",
      question:
        "Design a layered architecture for an educational AI assistant."
    },
    {
      type: "design",
      question:
        "Design a provider abstraction that supports two different LLM providers."
    },
    {
      type: "analysis",
      question:
        "Why should prompt construction be separated from the API layer?"
    },
    {
      type: "architecture",
      question:
        "Design a service that combines an LLM, a database, and external tools."
    }
  ],

  codingExercises: [
    "Create an LLM provider interface.",
    "Implement a provider adapter.",
    "Create a PromptService.",
    "Create a ChatService.",
    "Create a ConversationRepository.",
    "Implement dependency injection.",
    "Create an application configuration layer."
  ],

  architectureExercises: [
    "Design a production chat architecture.",
    "Design a provider-independent LLM service.",
    "Design a multi-tool orchestration layer.",
    "Design a stateless scalable API architecture.",
    "Design asynchronous background processing."
  ],

  interviewQuestions: [
    "Why is layered architecture useful for LLM applications?",
    "What is an application service?",
    "What is orchestration?",
    "What is the adapter pattern?",
    "Why abstract model providers?",
    "What is dependency injection?",
    "Why separate prompt logic from API logic?",
    "What is the repository pattern?",
    "Why are stateless servers useful for scaling?"
  ],

  commonMistakes: [
    "Putting all logic inside one endpoint.",
    "Hard-coding provider SDK calls everywhere.",
    "Mixing prompt construction with HTTP handling.",
    "Storing secrets in source code.",
    "Using process memory for persistent state.",
    "Creating tightly coupled services.",
    "Ignoring testability when designing architecture."
  ],

  summary: [
    "Production LLM systems benefit from clear architectural boundaries.",
    "The frontend should remain separate from private backend responsibilities.",
    "Application services coordinate business behavior.",
    "Provider abstractions reduce coupling.",
    "Adapters isolate provider-specific implementations.",
    "Prompt and tool services improve maintainability.",
    "Repositories isolate persistence.",
    "Stateless services simplify horizontal scaling."
  ],

  keyTakeaways: [
    "Separate responsibilities before the application becomes complex.",
    "Keep provider-specific code behind abstractions.",
    "Treat prompts as application components.",
    "Design services for testing and replacement.",
    "Prefer stateless application servers when practical."
  ]
};

export default lesson10;