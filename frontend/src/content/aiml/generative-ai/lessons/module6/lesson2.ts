const lesson2 = {
  id: "lesson2",
  moduleId: "module6",

  title: "API Authentication, Requests & Responses",

  subtitle:
    "Learn how LLM API requests are authenticated, constructed, transmitted, validated, and handled safely inside an application.",

  description:
    "This lesson focuses on the engineering mechanics behind LLM API integration. You will learn API keys, environment variables, request structures, message formats, parameters, response parsing, errors, timeouts, retries, rate limits, and secure secret management.",

  difficulty: "Intermediate",

  estimatedTime: "2.5–3 hours",

  learningObjectives: [
    "Understand API authentication.",
    "Understand secure API-key management.",
    "Understand environment variables.",
    "Understand request and response structures.",
    "Understand system, user, and assistant messages.",
    "Understand common generation parameters.",
    "Understand response validation.",
    "Understand HTTP status categories.",
    "Understand timeouts and retries.",
    "Understand rate limiting.",
    "Understand safe logging."
  ],

  sections: [
    {
      id: "01",
      title: "Authentication",

      content: `
An API must determine whether a caller is authorized to use a service.

A common pattern is an API credential.

Conceptually:

APPLICATION
    │
    │ credential
    ▼
API GATEWAY
    │
    ▼
AUTHENTICATION
    │
    ▼
MODEL SERVICE

The exact authentication mechanism depends on the provider.
`
    },

    {
      id: "02",
      title: "API Keys",

      content: `
An API key is a secret credential used by an application to authenticate
with an API.

A key should be treated like a password.

Never place secrets directly inside:

• frontend JavaScript
• public repositories
• screenshots
• source-control commits
• client-visible configuration
• public documentation

A safer architecture is:

Browser
   ↓
Your Backend
   ↓
Secret API Credential
   ↓
LLM Provider
`
    },

    {
      id: "03",
      title: "Environment Variables",

      content: `
A common development pattern is storing secrets in environment variables.

Conceptually:

LLM_API_KEY=secret-value

Application:

read environment variable
        ↓
create API client
        ↓
send authenticated request

The actual secret should not be hard-coded into source code.
`
    },

    {
      id: "04",
      title: "Frontend vs Backend API Calls",

      comparison: [
        {
          aspect: "Credential exposure",
          frontend: "High risk if secret key is embedded",
          backend: "Secret remains server-side"
        },
        {
          aspect: "Control",
          frontend: "Limited",
          backend: "Centralized"
        },
        {
          aspect: "Rate limiting",
          frontend: "Harder to control",
          backend: "Can be centralized"
        },
        {
          aspect: "Validation",
          frontend: "Client-controlled",
          backend: "Server-enforced"
        }
      ],

      content: `
For applications using private provider credentials, the usual pattern is:

CLIENT
  ↓
APPLICATION BACKEND
  ↓
LLM PROVIDER

The backend becomes the trusted boundary.
`
    },

    {
      id: "05",
      title: "Request Structure",

      content: `
An LLM request commonly contains some combination of:

• model
• messages or input
• generation parameters
• output format
• tools
• metadata

Conceptually:

{
  model: "...",
  input: "...",
  parameters: {...}
}

The exact schema depends on the API.
`
    },

    {
      id: "06",
      title: "Messages",

      content: `
Chat-oriented APIs commonly represent conversations using messages.

Typical conceptual roles include:

SYSTEM
USER
ASSISTANT

Example:

SYSTEM:
"You are a technical tutor."

USER:
"Explain embeddings."

The model receives the structured conversation and generates an assistant
response.

The exact API representation varies by provider.
`
    },

    {
      id: "07",
      title: "System Instructions",

      content: `
System-level instructions establish application behavior.

They can define:

• role
• style
• constraints
• output requirements
• safety boundaries
• task behavior

Example:

SYSTEM
   ↓
"You are a programming tutor.
Explain concepts clearly.
Use examples."

USER
   ↓
"Explain cosine similarity."

The application should distinguish persistent instructions from user input.
`
    },

    {
      id: "08",
      title: "Generation Parameters",

      content: `
Depending on the model and API, generation may expose parameters such as:

• temperature
• maximum output tokens
• top-p
• stop conditions
• response format
• tool configuration

These parameters should not be treated as universal.

Always use parameters supported by the selected model and API.
`
    },

    {
      id: "09",
      title: "Temperature",

      formula: `
p_i' = exp(z_i / T)
       ───────────────
       Σ_j exp(z_j / T)
`,

      content: `
Temperature changes the sharpness of a probability distribution.

Lower temperature:

• tends toward more concentrated choices

Higher temperature:

• tends toward more varied choices

The exact behavioral effect depends on the model and decoding system.

Temperature should therefore be evaluated for the application's task.
`
    },

    {
      id: "10",
      title: "Request Validation",

      content: `
Before sending a request, validate:

• input exists
• input size is acceptable
• model is allowed
• requested parameters are valid
• user is authorized
• request does not exceed application limits

Pipeline:

CLIENT INPUT
     ↓
VALIDATION
     ↓
AUTHORIZATION
     ↓
API REQUEST
`
    },

    {
      id: "11",
      title: "Response Validation",

      content: `
Never assume an API response is automatically usable.

Validate:

• response exists
• expected fields exist
• output type is correct
• structured output follows schema
• content is not unexpectedly empty
• tool calls are valid
• token usage is handled correctly

Then:

API RESPONSE
     ↓
VALIDATION
     ↓
APPLICATION LOGIC
`
    },

    {
      id: "12",
      title: "HTTP Status Categories",

      content: `
HTTP responses can be grouped conceptually.

2xx
Success

4xx
Client-side request problems

5xx
Server-side service problems

Examples:

400 → invalid request
401 → authentication problem
403 → authorization problem
429 → rate limiting
500+ → server-side failure

The exact status behavior depends on the service.
`
    },

    {
      id: "13",
      title: "Timeouts",

      content: `
An application should not wait indefinitely for an external API.

Conceptually:

request
   ↓
start timer
   ↓
response?
  / \
yes  no
 |    |
done timeout
      ↓
retry/fallback/fail
`
    },

    {
      id: "14",
      title: "Retries",

      content: `
Retries can recover from temporary failures.

However, blindly retrying every error is dangerous.

Retry candidates may include temporary infrastructure failures or
transient rate-limit conditions, depending on provider guidance.

Do not repeatedly retry:

• invalid credentials
• malformed requests
• unsupported models
• permanent validation errors

A retry policy should include limits and backoff.
`
    },

    {
      id: "15",
      title: "Exponential Backoff",

      formula: `
delay_n = min(maxDelay, baseDelay × 2^n)
`,

      content: `
Instead of immediately repeating failed requests:

attempt 1
   ↓
wait
   ↓
attempt 2
   ↓
wait longer
   ↓
attempt 3

This reduces pressure on a temporarily overloaded service.

Production implementations may also add jitter.
`
    },

    {
      id: "16",
      title: "Rate Limits",

      content: `
External APIs can restrict request frequency or usage.

A system may encounter:

• requests-per-minute limits
• token limits
• concurrency limits
• quota limits

Applications should respond gracefully.

Possible strategies:

• queue requests
• reduce concurrency
• retry with backoff
• cache repeated results
• use appropriate model routing
`
    },

    {
      id: "17",
      title: "Safe Logging",

      content: `
Logs are useful for debugging, but LLM applications may handle sensitive
information.

Avoid blindly logging:

• API keys
• authentication tokens
• private user data
• confidential documents
• sensitive prompts

Prefer structured operational metadata:

request ID
model
latency
status
token counts
error category

without exposing secrets.
`
    },

    {
      id: "18",
      title: "Request IDs and Observability",

      content: `
Every request can receive an application-generated request ID.

Example:

request_id = req_12345

Then logs can connect:

frontend request
      ↓
backend request
      ↓
LLM API call
      ↓
response
      ↓
error or success

This makes distributed debugging much easier.
`
    },

    {
      id: "19",
      title: "Complete Secure Request Flow",

      content: `
USER
 ↓
FRONTEND
 ↓
AUTHENTICATED BACKEND
 ↓
INPUT VALIDATION
 ↓
AUTHORIZATION
 ↓
REQUEST ID
 ↓
LLM CLIENT
 ↓
API AUTHENTICATION
 ↓
LLM API
 ↓
TIMEOUT / RETRY HANDLING
 ↓
RESPONSE VALIDATION
 ↓
LOGGING
 ↓
APPLICATION RESPONSE
 ↓
FRONTEND
`
    }
  ],

  codeExamples: [
    {
      title: "Environment Variable",
      language: "python",
      code: `
import os

api_key = os.getenv("LLM_API_KEY")

if not api_key:
    raise RuntimeError(
        "LLM_API_KEY is not configured"
    )

print("API credential loaded")
`
    },

    {
      title: "Basic Request Wrapper",
      language: "python",
      code: `
class LLMService:
    def __init__(self, client):
        self.client = client

    def generate(self, prompt):
        if not prompt.strip():
            raise ValueError(
                "Prompt cannot be empty"
            )

        return self.client.generate(
            prompt=prompt
        )
`
    },

    {
      title: "Retry Skeleton",
      language: "python",
      code: `
import time


def call_with_retry(call, attempts=3):
    for attempt in range(attempts):
        try:
            return call()

        except TemporaryError:
            if attempt == attempts - 1:
                raise

            delay = 2 ** attempt
            time.sleep(delay)
`
    }
  ],

  diagrams: [
    {
      title: "Secure LLM API Flow",
      flow: [
        "User",
        "Frontend",
        "Backend Authentication",
        "Input Validation",
        "LLM Client",
        "Provider API",
        "Response Validation",
        "Application Response"
      ]
    },

    {
      title: "Failure Handling",
      flow: [
        "API Request",
        "Success",
        "Response Validation",
        "Temporary Failure",
        "Backoff",
        "Retry",
        "Final Failure",
        "Fallback/Error"
      ]
    }
  ],

  exercises: [
    {
      type: "conceptual",
      question:
        "Why should an LLM provider API key normally remain on the backend?"
    },
    {
      type: "architecture",
      question:
        "Design a secure request flow for a web application using an LLM API."
    },
    {
      type: "debugging",
      question:
        "A request repeatedly receives HTTP 429. What should the application investigate?"
    },
    {
      type: "design",
      question:
        "Design a retry policy that does not retry permanent client errors."
    }
  ],

  codingExercises: [
    "Load an API key from an environment variable.",
    "Create a reusable LLM service wrapper.",
    "Validate user input before an API request.",
    "Implement timeout handling.",
    "Implement bounded retries.",
    "Implement exponential backoff.",
    "Generate request IDs.",
    "Create structured API logs."
  ],

  interviewQuestions: [
    "How should API keys be stored?",
    "Why should secrets not be exposed in frontend code?",
    "What is the difference between authentication and authorization?",
    "What is a 429 response?",
    "Why are retries dangerous when implemented incorrectly?",
    "What is exponential backoff?",
    "Why is response validation important?",
    "What information should be logged for LLM requests?",
    "How would you design a secure LLM API backend?"
  ],

  commonMistakes: [
    "Hard-coding API keys.",
    "Committing secrets to Git.",
    "Calling the provider directly from an untrusted browser.",
    "Retrying every error.",
    "Using infinite retries.",
    "Logging complete sensitive prompts.",
    "Ignoring rate limits.",
    "Failing to validate responses.",
    "Using unsupported model parameters."
  ],

  summary: [
    "API credentials must be protected.",
    "Backend services provide a safer boundary for private provider credentials.",
    "Requests should be validated before transmission.",
    "Responses should be validated before application use.",
    "Timeouts prevent indefinite waiting.",
    "Retries should be bounded and selective.",
    "Exponential backoff reduces repeated pressure on external services.",
    "Rate limits must be treated as normal engineering constraints.",
    "Observability should provide useful metadata without exposing secrets."
  ],

  keyTakeaways: [
    "Treat API credentials as secrets.",
    "Validate both requests and responses.",
    "Design explicit failure handling.",
    "Use bounded retries with backoff.",
    "Keep sensitive data out of logs.",
    "Use request IDs for traceability."
  ]
};

export default lesson2;