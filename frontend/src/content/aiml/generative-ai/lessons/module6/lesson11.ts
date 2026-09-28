const lesson11 = {
  id: "lesson11",
  moduleId: "module6",

  title: "Deployment, Scaling & Production Reliability",

  subtitle:
    "Learn how to move an LLM application from development into a reliable production environment.",

  description:
    "A working prototype is not automatically a production system. This lesson covers deployment architecture, environment configuration, horizontal scaling, load balancing, queues, caching, health checks, retries, timeouts, circuit breakers, graceful degradation, capacity planning, and production reliability.",

  difficulty: "Advanced",

  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Understand development versus production environments.",
    "Understand deployment architecture.",
    "Understand horizontal scaling.",
    "Understand load balancing.",
    "Understand health checks.",
    "Design timeout and retry policies.",
    "Understand circuit breakers.",
    "Use queues for asynchronous workloads.",
    "Design graceful degradation.",
    "Understand production capacity planning."
  ],

  sections: [
    {
      id: "01",
      title: "Prototype vs Production",
      content: `
Prototype:

USER
 ↓
LOCAL SERVER
 ↓
LLM API

Production may require:

USER
 ↓
LOAD BALANCER
 ↓
API SERVERS
 ↓
CACHE / DATABASE
 ↓
LLM PROVIDER

plus:

monitoring
logging
security
rate limiting
backups
alerts
`
    },

    {
      id: "02",
      title: "Environment Separation",
      content: `
Typical environments:

DEVELOPMENT
STAGING
PRODUCTION

Development is optimized for iteration.

Staging is used to validate changes in a production-like environment.

Production serves real users and requires stronger reliability controls.
`
    },

    {
      id: "03",
      title: "Environment Configuration",
      content: `
Configuration can include:

MODEL
API ENDPOINT
TIMEOUT
MAX OUTPUT
DATABASE URL
CACHE URL
FEATURE FLAGS

Secrets should be stored through secure configuration mechanisms rather
than committed into source control.
`
    },

    {
      id: "04",
      title: "Containerized Deployment",
      content: `
A common deployment model is:

APPLICATION
 ↓
CONTAINER
 ↓
CONTAINER PLATFORM

Containers provide a consistent runtime environment.

A production system can run multiple application instances.
`
    },

    {
      id: "05",
      title: "Horizontal Scaling",
      content: `
Instead of making one server increasingly powerful:

          LOAD BALANCER
          /    |    \
         /     |     \
      SERVER SERVER SERVER

Requests can be distributed across multiple instances.

This is horizontal scaling.
`
    },

    {
      id: "06",
      title: "Load Balancing",
      content: `
A load balancer distributes incoming requests.

Possible strategies include:

• round robin
• least connections
• weighted routing

The exact strategy depends on the application architecture.
`
    },

    {
      id: "07",
      title: "Stateless Services",
      content: `
Horizontal scaling works best when application servers are stateless.

Instead of:

SERVER MEMORY
   ↓
conversation state

Use:

SERVER
   ↓
DATABASE / CACHE

Any server can then handle the next request.
`
    },

    {
      id: "08",
      title: "Timeouts",
      content: `
Every external dependency should have a timeout.

Example:

Application
    ↓
LLM request
    ↓
TIMEOUT
    ↓
fallback / error

Without timeouts, unavailable dependencies can consume resources
indefinitely.
`
    },

    {
      id: "09",
      title: "Retries",
      content: `
Some failures are temporary.

Example:

REQUEST
 ↓
TEMPORARY FAILURE
 ↓
WAIT
 ↓
RETRY

Retries should be limited.

Exponential backoff is commonly represented as:

delay = base × 2^attempt

A maximum delay is often applied.
`
    },

    {
      id: "10",
      title: "Circuit Breakers",
      content: `
A circuit breaker prevents repeated calls to a failing dependency.

CLOSED
 ↓
failures increase
 ↓
OPEN
 ↓
requests blocked
 ↓
WAIT
 ↓
HALF-OPEN
 ↓
test request
 ↓
CLOSED or OPEN

This can prevent cascading failures.
`
    },

    {
      id: "11",
      title: "Queues and Background Workers",
      content: `
Long-running tasks can move into asynchronous processing.

API
 ↓
QUEUE
 ↓
WORKER
 ↓
LLM / PROCESSING
 ↓
RESULT

Useful for:

• document processing
• large evaluations
• batch generation
• indexing
• analytics
`
    },

    {
      id: "12",
      title: "Caching",
      content: `
Caching can reduce repeated model calls.

REQUEST
 ↓
CACHE
 /   \
HIT  MISS
 ↓     ↓
RESULT MODEL
        ↓
      CACHE

Caching strategy must consider correctness and data freshness.
`
    },

    {
      id: "13",
      title: "Graceful Degradation",
      content: `
A production application should define what happens when a dependency
fails.

Example:

PRIMARY MODEL
     ↓
UNAVAILABLE
     ↓
FALLBACK MODEL
     ↓
or
     ↓
SAFE ERROR RESPONSE

The application should fail predictably rather than unexpectedly.
`
    },

    {
      id: "14",
      title: "Health Checks",
      content: `
Health checks can verify whether application instances are operational.

Examples:

/health
/readiness
/liveness

A readiness check can determine whether an instance should receive
traffic.
`
    },

    {
      id: "15",
      title: "Capacity Planning",
      formula: `
Approximate capacity =
available processing capacity
/
average request demand
`,

      content: `
Capacity planning should consider:

• requests per second
• average response time
• token usage
• concurrency
• provider limits
• memory
• CPU
• queue depth
`
    },

    {
      id: "16",
      title: "Reliability Metrics",
      content: `
Important production signals include:

ERROR RATE
LATENCY
THROUGHPUT
AVAILABILITY
TIMEOUT RATE
TOKEN USAGE
COST
QUEUE DEPTH
CACHE HIT RATE

Monitoring these signals helps identify degradation early.
`
    },

    {
      id: "17",
      title: "Deployment Pipeline",
      content: `
CODE
 ↓
TEST
 ↓
BUILD
 ↓
STAGING
 ↓
EVALUATION
 ↓
PRODUCTION
 ↓
MONITOR
 ↓
ROLLBACK IF REQUIRED
`
    },

    {
      id: "18",
      title: "Production Reliability Architecture",
      content: `
                   ┌─────────────┐
                   │    USERS    │
                   └──────┬──────┘
                          ↓
                   ┌─────────────┐
                   │LOAD BALANCER│
                   └──────┬──────┘
                          ↓
             ┌────────────┼────────────┐
             ↓            ↓            ↓
          API-1         API-2        API-3
             │            │            │
             └────────────┼────────────┘
                          ↓
                    SERVICE LAYER
                     /          \
                    ↓            ↓
                 CACHE        DATABASE
                    \
                     ↓
                  LLM API
`
    }
  ],

  codeExamples: [
    {
      title: "Exponential Backoff",
      language: "python",
      code: `
import time


def retry_delay(
    base,
    attempt,
    maximum
):
    delay = base * (2 ** attempt)

    return min(
        delay,
        maximum
    )


for attempt in range(3):
    try:
        result = call_model()
        break

    except TemporaryError:
        time.sleep(
            retry_delay(
                1,
                attempt,
                16
            )
        )
`
    },

    {
      title: "Health Check",
      language: "python",
      code: `
def health():
    return {
        "status": "ok"
    }
`
    },

    {
      title: "Simple Circuit State",
      language: "python",
      code: `
class CircuitBreaker:

    def __init__(self, threshold=3):
        self.failures = 0
        self.threshold = threshold
        self.open = False

    def record_failure(self):
        self.failures += 1

        if self.failures >= self.threshold:
            self.open = True
`
    }
  ],

  exercises: [
    {
      type: "architecture",
      question:
        "Design a production deployment for an LLM chat application."
    },
    {
      type: "conceptual",
      question:
        "Why are stateless application servers useful for horizontal scaling?"
    },
    {
      type: "design",
      question:
        "Design a retry policy for temporary LLM provider failures."
    },
    {
      type: "analysis",
      question:
        "How can a circuit breaker prevent cascading failures?"
    }
  ],

  codingExercises: [
    "Implement exponential backoff.",
    "Create health-check endpoints.",
    "Implement a simple circuit breaker.",
    "Build a request timeout wrapper.",
    "Create a retry policy.",
    "Implement a basic in-memory cache.",
    "Build a queue-based background worker."
  ],

  architectureExercises: [
    "Design a horizontally scalable LLM API.",
    "Design a production load-balancing architecture.",
    "Design an asynchronous document-processing system.",
    "Design a fallback architecture for model outages.",
    "Design a deployment pipeline with staging and production."
  ],

  interviewQuestions: [
    "What is horizontal scaling?",
    "Why are stateless services easier to scale?",
    "Why are timeouts necessary?",
    "What is exponential backoff?",
    "What is a circuit breaker?",
    "Why use queues?",
    "What is graceful degradation?",
    "What are health checks?",
    "What metrics should be monitored in production?",
    "How would you deploy an LLM application safely?"
  ],

  commonMistakes: [
    "Running production without timeouts.",
    "Retrying every error.",
    "Retrying without backoff.",
    "Keeping important state only in server memory.",
    "Ignoring provider rate limits.",
    "Having no fallback behavior.",
    "Deploying directly to production without staging.",
    "Monitoring only server uptime instead of application quality."
  ],

  summary: [
    "Production deployment requires more than a working API.",
    "Stateless services make horizontal scaling easier.",
    "Timeouts prevent requests from hanging indefinitely.",
    "Retries should be selective and use backoff.",
    "Circuit breakers protect systems from failing dependencies.",
    "Queues are useful for long-running asynchronous work.",
    "Health checks support reliable traffic management.",
    "Production monitoring must include technical and LLM-specific metrics."
  ],

  keyTakeaways: [
    "Design for failure, not only the happy path.",
    "Use timeouts and bounded retries.",
    "Scale stateless services horizontally.",
    "Use queues for long-running work.",
    "Monitor latency, errors, tokens, cost, and availability.",
    "Always have a controlled deployment and rollback strategy."
  ]
};

export default lesson11;