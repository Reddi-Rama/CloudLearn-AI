const lesson12 = {
  id: "lesson12",
  moduleId: "module6",

  title: "End-to-End LLM Application Capstone",

  subtitle:
    "Bring the complete Module 6 concepts together by designing a production-oriented LLM application from requirements to deployment.",

  description:
    "This final lesson integrates model APIs, prompt engineering, structured outputs, streaming, tools, security, evaluation, observability, architecture, deployment, and reliability into one complete application workflow.",

  difficulty: "Advanced",

  estimatedTime: "4–6 hours",

  learningObjectives: [
    "Translate application requirements into an LLM architecture.",
    "Select an appropriate model strategy.",
    "Design secure API communication.",
    "Construct reusable prompts.",
    "Implement conversation management.",
    "Use structured outputs.",
    "Integrate tools.",
    "Implement streaming.",
    "Add evaluation and observability.",
    "Design deployment and reliability controls."
  ],

  sections: [
    {
      id: "01",
      title: "Capstone Scenario",
      content: `
Build an AI Learning Assistant.

The application should allow a student to:

• ask technical questions
• receive explanations
• request examples
• continue conversations
• receive structured study plans
• use selected external tools
• see responses progressively through streaming

The application must also include:

authentication
validation
observability
evaluation
rate limiting
error handling
`
    },

    {
      id: "02",
      title: "Requirements Analysis",
      content: `
Functional requirements:

1. User submits a question.
2. Backend authenticates the request.
3. Application validates input.
4. Prompt is constructed.
5. LLM generates a response.
6. Response is streamed.
7. Structured operations use schemas.
8. Tools can be called when required.
9. Conversation state is persisted.
10. Usage is monitored.

Non-functional requirements:

• security
• reliability
• reasonable latency
• controlled cost
• scalability
• observability
`
    },

    {
      id: "03",
      title: "High-Level Architecture",
      content: `
                        USER
                         ↓
                    WEB CLIENT
                         ↓
                  AUTHENTICATION
                         ↓
                    API SERVER
                         ↓
                 CHAT APPLICATION
                    SERVICE
                         ↓
                  ORCHESTRATOR
                  /     |      \
                 ↓      ↓       ↓
             PROMPT    LLM     TOOLS
               ↓        ↓       ↓
               └────────┼───────┘
                        ↓
                  VALIDATION
                        ↓
                    STREAMING
                        ↓
                       USER

Supporting services:

DATABASE
CACHE
OBSERVABILITY
EVALUATION
QUEUE
`
    },

    {
      id: "04",
      title: "Request Lifecycle",
      content: `
1. User enters question.
2. Frontend sends authenticated request.
3. Backend validates input.
4. Conversation state is loaded.
5. Prompt is constructed.
6. Model request is created.
7. LLM begins generation.
8. Tokens are streamed.
9. Tool calls are detected when required.
10. Tool arguments are validated.
11. Tool executes.
12. Result returns to model.
13. Final response is validated.
14. Conversation state is persisted.
15. Metrics are recorded.
`
    },

    {
      id: "05",
      title: "Prompt Architecture",
      content: `
SYSTEM INSTRUCTIONS
        +
USER PROFILE
        +
CONVERSATION HISTORY
        +
CURRENT QUESTION
        +
OPTIONAL CONTEXT
        ↓
     PROMPT
        ↓
       LLM
`
    },

    {
      id: "06",
      title: "Conversation State",
      content: `
A conversation record may contain:

conversation_id
user_id
messages
created_at
updated_at
model
prompt_version
usage

Important:

Do not rely on process memory as the only persistent source of
conversation state.
`
    },

    {
      id: "07",
      title: "Structured Study Plan",
      content: `
A study-plan operation can return:

{
  "topic": "Machine Learning",
  "duration_days": 7,
  "daily_tasks": [
    {
      "day": 1,
      "topic": "Regression"
    }
  ]
}

The schema can then be validated before the frontend displays it.
`
    },

    {
      id: "08",
      title: "Tool Integration",
      content: `
Example tools:

search_course_content()
calculate()
get_progress()
save_study_plan()

Flow:

LLM
 ↓
TOOL REQUEST
 ↓
APPLICATION VALIDATION
 ↓
AUTHORIZATION
 ↓
TOOL
 ↓
RESULT
 ↓
LLM
`
    },

    {
      id: "09",
      title: "Streaming",
      content: `
For normal conversational answers:

REQUEST
 ↓
LLM
 ↓
CHUNK 1
 ↓
CHUNK 2
 ↓
CHUNK 3
 ↓
FINAL

The frontend should display a generating state until the stream
successfully completes.
`
    },

    {
      id: "10",
      title: "Security Architecture",
      content: `
SECURITY CONTROLS:

Authentication
      ↓
Authorization
      ↓
Input Validation
      ↓
Prompt Controls
      ↓
LLM
      ↓
Output Validation
      ↓
Tool Authorization
      ↓
Audit Logging

No single control should be responsible for the entire security model.
`
    },

    {
      id: "11",
      title: "Evaluation Strategy",
      content: `
Create a golden dataset containing:

• beginner questions
• intermediate questions
• difficult questions
• ambiguous questions
• invalid questions
• tool-use cases
• structured-output cases
• security cases

Evaluate:

correctness
relevance
completeness
format
latency
cost
tool correctness
`
    },

    {
      id: "12",
      title: "Observability",
      content: `
Every important request should have a request ID.

Example trace:

request_id
   ↓
API
   ↓
prompt_build
   ↓
LLM_call
   ↓
tool_call
   ↓
LLM_call
   ↓
response

Record useful metadata such as:

• model
• prompt version
• latency
• token usage
• tool calls
• error state
`
    },

    {
      id: "13",
      title: "Cost Model",

      formula: `
Total application cost ≈

LLM input cost
+
LLM output cost
+
database cost
+
cache cost
+
compute cost
+
network cost
`,

      content: `
Cost should be monitored per:

• request
• user
• feature
• organization
• time period
`
    },

    {
      id: "14",
      title: "Reliability Design",
      content: `
The application should define behavior for:

LLM timeout
LLM rate limit
provider outage
tool failure
database failure
invalid model output
stream interruption

Possible mechanisms:

timeouts
bounded retries
backoff
fallbacks
circuit breakers
safe error responses
`
    },

    {
      id: "15",
      title: "Deployment Architecture",
      content: `
                     USERS
                       ↓
                 LOAD BALANCER
                       ↓
              ┌────────┴────────┐
              ↓                 ↓
           API-1             API-2
              │                 │
              └────────┬────────┘
                       ↓
                APPLICATION
                  SERVICE
                 /   |    \
                ↓    ↓     ↓
             CACHE  DB     LLM
                       \
                        ↓
                     TOOLS

Monitoring surrounds the complete system.
`
    },

    {
      id: "16",
      title: "Production Checklist",
      content: `
Before deployment:

ARCHITECTURE
[ ] Responsibilities separated
[ ] Provider abstraction defined

SECURITY
[ ] Authentication
[ ] Authorization
[ ] Input validation
[ ] Output validation
[ ] Tool authorization

LLM
[ ] Model selected
[ ] Prompt versioned
[ ] Token usage monitored

RELIABILITY
[ ] Timeout
[ ] Retry
[ ] Backoff
[ ] Fallback
[ ] Circuit breaker where appropriate

OBSERVABILITY
[ ] Logs
[ ] Metrics
[ ] Traces
[ ] Request IDs

EVALUATION
[ ] Golden dataset
[ ] Regression tests
[ ] Quality metrics

DEPLOYMENT
[ ] Environment configuration
[ ] Staging
[ ] Production
[ ] Rollback strategy
`
    },

    {
      id: "17",
      title: "Capstone Development Workflow",
      content: `
PHASE 1
Requirements

        ↓

PHASE 2
Architecture

        ↓

PHASE 3
API + Model Integration

        ↓

PHASE 4
Prompt + Context Management

        ↓

PHASE 5
Structured Outputs + Tools

        ↓

PHASE 6
Streaming + Conversation State

        ↓

PHASE 7
Security

        ↓

PHASE 8
Testing + Evaluation

        ↓

PHASE 9
Observability

        ↓

PHASE 10
Deployment

        ↓

PHASE 11
Production Monitoring
`
    },

    {
      id: "18",
      title: "What You Have Built",
      content: `
After completing Module 6, you should understand the complete path:

USER
 ↓
APPLICATION
 ↓
LLM API
 ↓
PROMPT
 ↓
CONTEXT
 ↓
MODEL
 ↓
STRUCTURED OUTPUT
 ↓
TOOLS
 ↓
VALIDATION
 ↓
STREAMING
 ↓
OBSERVABILITY
 ↓
DEPLOYMENT

This provides the application-development foundation required for later
topics such as RAG, multimodal systems, and advanced LLM engineering.
`
    }
  ],

  codeExamples: [
    {
      title: "Application Service Skeleton",
      language: "python",
      code: `
class LearningAssistant:

    def __init__(
        self,
        llm,
        conversation_store,
        validator
    ):
        self.llm = llm
        self.store = conversation_store
        self.validator = validator

    async def answer(
        self,
        user_id,
        conversation_id,
        question
    ):
        history = await self.store.get(
            conversation_id
        )

        messages = build_messages(
            history,
            question
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
      title: "Application Configuration",
      language: "python",
      code: `
from dataclasses import dataclass


@dataclass
class Settings:
    model: str
    timeout: float
    max_output_tokens: int
    environment: str
`
    },

    {
      title: "Request Processing Pipeline",
      language: "python",
      code: `
async def process_request(request):

    user = authenticate(request)

    validate_input(request)

    history = await load_history(
        user.id
    )

    prompt = build_prompt(
        history,
        request.question
    )

    result = await call_model(
        prompt
    )

    validated = validate_output(
        result
    )

    await save_history(
        user.id,
        request.question,
        validated
    )

    return validated
`
    }
  ],

  exercises: [
    {
      type: "architecture",
      question:
        "Design the complete architecture of the Learning Assistant."
    },
    {
      type: "design",
      question:
        "Define the responsibilities of the frontend, API, application service, model service, and database."
    },
    {
      type: "security",
      question:
        "Identify the security boundaries in the capstone architecture."
    },
    {
      type: "evaluation",
      question:
        "Create five evaluation cases for the assistant."
    }
  ],

  codingExercises: [
    "Build the backend application service.",
    "Implement conversation persistence.",
    "Implement prompt construction.",
    "Add structured output validation.",
    "Add streaming.",
    "Add one safe tool.",
    "Add authentication and authorization.",
    "Add request tracing.",
    "Add token and cost tracking.",
    "Add automated evaluation."
  ],

  architectureExercises: [
    "Design the complete capstone architecture.",
    "Design a scalable deployment.",
    "Design the tool authorization layer.",
    "Design the evaluation pipeline.",
    "Design the observability system.",
    "Design the failure and fallback strategy."
  ],

  interviewQuestions: [
    "How would you architect an LLM application from scratch?",
    "Where should prompt construction happen?",
    "How should conversation state be stored?",
    "How would you secure tool calling?",
    "How would you stream model output?",
    "How would you evaluate an LLM application?",
    "What should be monitored in production?",
    "How would you handle provider failures?",
    "How would you control LLM costs?",
    "How would you scale the application?"
  ],

  commonMistakes: [
    "Putting the entire application inside one API endpoint.",
    "Exposing provider credentials to the frontend.",
    "Trusting model output without validation.",
    "Giving unrestricted tool access.",
    "Ignoring conversation persistence.",
    "Deploying without monitoring.",
    "Skipping evaluation.",
    "Ignoring token costs.",
    "Using unlimited retries.",
    "Having no rollback or fallback strategy."
  ],

  capstoneProject: {
    title: "AI Learning Assistant",

    objective:
      "Build a production-oriented conversational learning assistant using an LLM API.",

    requiredFeatures: [
      "User authentication",
      "Conversation management",
      "Prompt templates",
      "LLM API integration",
      "Streaming responses",
      "Structured outputs",
      "At least one tool",
      "Input validation",
      "Output validation",
      "Rate limiting",
      "Error handling",
      "Observability",
      "Evaluation dataset",
      "Cost tracking"
    ],

    recommendedMilestones: [
      "Create the basic chat API.",
      "Connect the model provider.",
      "Add prompt templates.",
      "Add conversation persistence.",
      "Add streaming.",
      "Add structured responses.",
      "Add a tool.",
      "Add security controls.",
      "Add testing and evaluation.",
      "Add observability.",
      "Deploy to staging.",
      "Perform production-readiness review."
    ]
  },

  summary: [
    "A complete LLM application requires much more than an API call.",
    "Architecture separates application responsibilities.",
    "Prompt construction and conversation management form core application services.",
    "Structured outputs make model responses easier to integrate.",
    "Tools extend model capabilities but require authorization.",
    "Streaming improves interactive experiences.",
    "Security must be layered.",
    "Evaluation measures application quality.",
    "Observability makes production behavior visible.",
    "Deployment requires reliability, scaling, monitoring, and rollback planning."
  ],

  keyTakeaways: [
    "Think of an LLM as one component inside a larger software system.",
    "Design clear boundaries between users, application logic, models, tools, and data.",
    "Never trust model output blindly.",
    "Evaluate before and after important changes.",
    "Monitor quality, latency, errors, usage, and cost.",
    "Production LLM engineering combines software engineering with model-specific engineering."
  ]
};

export default lesson12;