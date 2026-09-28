const lesson1 = {
  id: "lesson1",
  moduleId: "module6",

  title: "LLM APIs & Model Providers",

  subtitle:
    "Understand how applications communicate with large language models through APIs and how model providers fit into an LLM application stack.",

  description:
    "This lesson introduces the application-facing side of LLM engineering. You will learn what an LLM API is, how model providers expose inference capabilities, how requests and responses move through an application, and how developers select and integrate models.",

  difficulty: "Intermediate",

  estimatedTime: "2–3 hours",

  learningObjectives: [
    "Understand what an LLM API is.",
    "Understand the role of model providers.",
    "Understand hosted versus self-hosted inference.",
    "Understand the basic request-response lifecycle.",
    "Understand model identifiers and model selection.",
    "Understand API-based inference.",
    "Understand tokens, latency, and cost at the API layer.",
    "Understand synchronous and streaming responses.",
    "Understand provider abstraction.",
    "Understand basic application architecture around LLM APIs."
  ],

  sections: [
    {
      id: "01",
      title: "What Is an LLM API?",

      content: `
An LLM API is a software interface that allows an application to send
input to a language model and receive generated output.

Conceptually:

APPLICATION
     │
     │ request
     ▼
  LLM API
     │
     ▼
LANGUAGE MODEL
     │
     │ response
     ▼
  LLM API
     │
     ▼
APPLICATION

The application does not need to implement the Transformer itself.

Instead, the application communicates with an inference service.
`
    },

    {
      id: "02",
      title: "Why APIs Matter",

      content: `
Modern LLM applications usually need more than a model.

They need:

• authentication
• request construction
• prompt management
• model selection
• output handling
• retries
• error handling
• streaming
• logging
• evaluation
• cost tracking
• security

The API becomes the boundary between the application and the model.

This separation allows application developers to build useful systems
without implementing the entire model inference stack.
`
    },

    {
      id: "03",
      title: "LLM Application Stack",

      content: `
A simplified application stack is:

USER
  ↓
FRONTEND
  ↓
APPLICATION BACKEND
  ↓
LLM CLIENT / SDK
  ↓
LLM API
  ↓
MODEL INFERENCE
  ↓
LLM API
  ↓
APPLICATION BACKEND
  ↓
FRONTEND
  ↓
USER

Additional components can appear between these layers:

• authentication
• prompt templates
• retrieval
• tools
• structured output validation
• moderation
• observability
• caching
• rate limiting
`
    },

    {
      id: "04",
      title: "Model Providers",

      content: `
A model provider operates infrastructure that exposes one or more models
through an API or another inference interface.

A provider may expose:

• general-purpose language models
• reasoning-oriented models
• embedding models
• multimodal models
• speech models
• image models
• specialized models

The exact model catalog changes over time.

Therefore applications should avoid hard-coding assumptions about a model's
capabilities without checking the provider's current documentation.
`
    },

    {
      id: "05",
      title: "Hosted vs Self-Hosted Models",

      comparison: [
        {
          aspect: "Infrastructure",
          hosted: "Managed by provider",
          selfHosted: "Managed by application team"
        },
        {
          aspect: "Deployment effort",
          hosted: "Usually lower",
          selfHosted: "Usually higher"
        },
        {
          aspect: "Control",
          hosted: "Provider-dependent",
          selfHosted: "Greater infrastructure control"
        },
        {
          aspect: "Scaling",
          hosted: "Provider-managed options",
          selfHosted: "Application-managed"
        },
        {
          aspect: "Operational responsibility",
          hosted: "Shared with provider",
          selfHosted: "Primarily application team"
        }
      ]
    },

    {
      id: "06",
      title: "API Request Lifecycle",

      content: `
A typical request lifecycle is:

1. User submits input.
2. Backend validates the request.
3. Application constructs the model input.
4. Authentication credentials are attached.
5. Request is sent to the provider.
6. Provider validates the request.
7. Model inference executes.
8. Provider returns generated output.
9. Application validates the response.
10. Application sends a safe result to the user.

This can be represented as:

USER INPUT
    ↓
VALIDATE
    ↓
CONSTRUCT
    ↓
AUTHENTICATE
    ↓
API REQUEST
    ↓
MODEL INFERENCE
    ↓
API RESPONSE
    ↓
VALIDATE OUTPUT
    ↓
APPLICATION RESPONSE
`
    },

    {
      id: "07",
      title: "Model Selection",

      content: `
Model selection is an engineering decision.

Important dimensions include:

• task quality
• reasoning capability
• context length
• latency
• cost
• output format support
• tool support
• multimodal support
• reliability
• availability
• privacy requirements

For example:

A simple classification task may not require the same model configuration
as a complex reasoning workflow.

Therefore:

Task requirements
        ↓
Model capabilities
        ↓
Evaluation
        ↓
Model selection
`
    },

    {
      id: "08",
      title: "Tokens at the API Layer",

      content: `
LLM APIs generally operate on tokenized input and output.

A simplified request can be viewed as:

Input tokens
     +
Output tokens
     =
Total token usage

Token usage can influence:

• cost
• latency
• context consumption

A useful conceptual relationship is:

Total tokens =
input tokens + output tokens

The exact pricing model depends on the provider and model.
`
    },

    {
      id: "09",
      title: "Synchronous Responses",

      content: `
In a synchronous request:

CLIENT
  ↓
REQUEST
  ↓
MODEL
  ↓
WAIT
  ↓
COMPLETE RESPONSE
  ↓
CLIENT

This is simple and useful for:

• short responses
• classification
• extraction
• backend workflows

However, users may have to wait until generation completes.
`
    },

    {
      id: "10",
      title: "Streaming Responses",

      content: `
Streaming sends output progressively.

Instead of:

REQUEST
   ↓
WAIT
   ↓
FULL RESPONSE

the system can behave like:

REQUEST
   ↓
TOKEN
   ↓
TOKEN
   ↓
TOKEN
   ↓
TOKEN
   ↓
END

This improves perceived responsiveness for interactive applications.

Streaming is especially useful for:

• chat interfaces
• writing assistants
• long-form generation
• interactive agents
`
    },

    {
      id: "11",
      title: "SDKs and Client Libraries",

      content: `
Developers can communicate with APIs directly using HTTP or use an SDK.

Direct HTTP:

Application
   ↓
HTTP
   ↓
API

SDK:

Application
   ↓
SDK
   ↓
HTTP
   ↓
API

An SDK can simplify:

• authentication
• request construction
• response parsing
• streaming
• retries
• type definitions
`
    },

    {
      id: "12",
      title: "Provider Abstraction",

      content: `
Applications can isolate provider-specific code behind an internal
interface.

For example:

Application
    ↓
LLMService
    ↓
Provider Adapter
    ↓
Model API

This allows the application to change providers or models with less
application-wide modification.

Example conceptual interface:

generate(request)
stream(request)
embed(text)
`
    },

    {
      id: "13",
      title: "Basic Error Categories",

      content: `
LLM API failures can occur at different layers.

CLIENT ERRORS
• invalid request
• malformed parameters
• unsupported model

AUTHENTICATION ERRORS
• missing credentials
• invalid credentials

RATE LIMIT ERRORS
• too many requests
• quota limitations

SERVER ERRORS
• provider-side failures
• temporary infrastructure problems

NETWORK ERRORS
• timeout
• connection failure

APPLICATION ERRORS
• invalid response handling
• schema mismatch
`
    },

    {
      id: "14",
      title: "The First Production Principle",

      content: `
Never treat an LLM API call as:

input → output

A production system should treat it as:

input
 ↓
validation
 ↓
authentication
 ↓
request construction
 ↓
API call
 ↓
timeout/retry handling
 ↓
response validation
 ↓
logging
 ↓
application result

This mindset becomes important throughout this module.
`
    }
  ],

  architecture: {
    title: "Basic LLM API Architecture",

    flow: [
      "User",
      "Frontend",
      "Backend",
      "LLM Client",
      "LLM API",
      "Model Inference",
      "LLM API Response",
      "Backend Validation",
      "Frontend"
    ]
  },

  codeExamples: [
    {
      title: "Conceptual Python LLM Client",
      language: "python",
      code: `
class LLMClient:
    def __init__(self, provider):
        self.provider = provider

    def generate(self, prompt):
        response = self.provider.generate(
            prompt=prompt
        )

        return response


client = LLMClient(provider)

answer = client.generate(
    "Explain vector databases."
)

print(answer)
`
    },

    {
      title: "Provider Abstraction",
      language: "python",
      code: `
class LLMProvider:
    def generate(self, prompt):
        raise NotImplementedError


class Application:
    def __init__(self, llm):
        self.llm = llm

    def answer(self, prompt):
        return self.llm.generate(prompt)
`
    }
  ],

  exercises: [
    {
      type: "conceptual",
      question: "What problem does an LLM API solve?"
    },
    {
      type: "architecture",
      question:
        "Draw the complete request-response flow from a user's message to an LLM and back."
    },
    {
      type: "comparison",
      question:
        "Compare hosted and self-hosted inference."
    },
    {
      type: "design",
      question:
        "Why might an application use a provider abstraction layer?"
    }
  ],

  codingExercises: [
    "Create a basic LLM client abstraction.",
    "Create a provider interface.",
    "Implement request validation.",
    "Implement basic exception handling.",
    "Add request timing.",
    "Log model and token metadata without exposing secrets."
  ],

  interviewQuestions: [
    "What is an LLM API?",
    "What is the difference between an API and an SDK?",
    "What happens during an LLM API request?",
    "What is streaming?",
    "Why is model selection an engineering problem?",
    "What is provider abstraction?",
    "What are common API failure categories?",
    "Why should API keys never be exposed in frontend code?"
  ],

  commonMistakes: [
    "Putting API credentials in frontend code.",
    "Hard-coding provider-specific logic everywhere.",
    "Ignoring timeouts.",
    "Ignoring rate limits.",
    "Assuming every model supports the same capabilities.",
    "Not validating model responses.",
    "Logging sensitive request data.",
    "Treating API calls as infallible."
  ],

  summary: [
    "LLM APIs provide application access to language-model inference.",
    "Model providers expose models through managed interfaces.",
    "Applications should separate UI, backend, API client, and model concerns.",
    "Model selection depends on task requirements.",
    "Tokens influence cost and latency.",
    "Streaming improves interactive responsiveness.",
    "SDKs simplify API integration.",
    "Provider abstraction can reduce application coupling.",
    "Production systems need validation, error handling, security, and observability."
  ],

  keyTakeaways: [
    "An LLM API is an application boundary around model inference.",
    "Never expose private API credentials in client-side code.",
    "Design API integrations as reliable software components.",
    "Keep provider-specific code isolated.",
    "Measure quality, latency, and cost when selecting models."
  ]
};

export default lesson1;