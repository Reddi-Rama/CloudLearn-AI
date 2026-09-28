const lesson11 = {
  id: "lesson11",
  moduleId: "module9",
  lessonNumber: 11,
  title: "Multi-Model Routing, Fallbacks & Reliability",
  subtitle: "Designing resilient LLM systems that can survive model, provider and infrastructure failures",
  duration: "70 min",
  difficulty: "Advanced",

  overview: `
Production LLM applications should not assume that one model or one provider
will always be available, affordable or suitable for every request.

Models can experience:

- Rate limits
- Timeouts
- Service outages
- Capacity limitations
- Quality degradation
- Unexpected cost
- Context limitations

A reliable application therefore needs routing and fallback strategies.

Multi-model routing allows an application to select a model according to the
requirements of a request.

Fallback systems allow the application to continue operating when the preferred
model or provider fails.

This lesson covers model routing, provider abstraction, health checks, retry
strategies, exponential backoff, timeouts, circuit breakers, graceful
degradation, failover, reliability metrics, idempotency and production
resilience.
`,

  objectives: [
    "Understand why production applications may require multiple models",
    "Design a model-routing layer",
    "Understand provider abstraction",
    "Implement fallback strategies",
    "Understand retries and exponential backoff",
    "Understand timeouts and circuit breakers",
    "Design graceful degradation",
    "Understand health checks and provider monitoring",
    "Measure reliability and availability",
    "Design resilient multi-model architectures"
  ],

  sections: [
    {
      title: "1. Why Multi-Model Systems?",
      content: `
Different models can have different strengths.

One model may provide:

- Strong reasoning
- Higher cost
- Higher latency

Another may provide:

- Lower cost
- Faster responses
- Sufficient quality for simple tasks

A production application can therefore route requests according to their
requirements.

Request
 |
 v
Router
 |
 +---- Simple ----> Fast Model
 |
 +---- Complex ---> Advanced Model
 |
 +---- Specialized -> Specialized Model
      `
    },

    {
      title: "2. Provider Abstraction",
      content: `
Application code should ideally not depend directly on one provider.

Instead:

Application
     |
     v
Model Gateway
     |
 +---+---+---+
 |   |   |   |
 v   v   v   v
P1  P2  P3  Local

The gateway provides a common interface.

This makes provider replacement and fallback easier.
      `
    },

    {
      title: "3. Model Routing",
      content: `
Routing can use signals such as:

- Task type
- Complexity
- User tier
- Latency requirement
- Cost budget
- Context length
- Required capabilities
- Current provider health

Example:

if task === "classification":
    use fast model

if task === "complex reasoning":
    use advanced model

if preferred provider unavailable:
    use fallback
      `
    },

    {
      title: "4. Rule-Based Routing",
      content: `
The simplest routing system uses deterministic rules.

Example:

const route = {
  classification: "fast-model",
  summarization: "balanced-model",
  reasoning: "advanced-model"
};

Advantages:

- Easy to understand
- Easy to test
- Predictable

Disadvantages:

- Less adaptive
- Requires manual maintenance
      `
    },

    {
      title: "5. Capability-Based Routing",
      content: `
Instead of routing by model name, applications can route by capability.

Example:

Requirements:

vision = true
tools = true
context >= 100000
structuredOutput = true

The router chooses a compatible model.

This reduces coupling between business logic and specific model names.
      `
    },

    {
      title: "6. Health Checks",
      content: `
A provider should be monitored.

Possible signals:

- Availability
- Error rate
- Latency
- Rate-limit responses
- Timeout rate
- Quality score

Example:

Provider A
Error rate = 2%

Provider B
Error rate = 25%

The router can temporarily reduce traffic sent to Provider B.
      `
    },

    {
      title: "7. Fallbacks",
      content: `
A fallback is an alternative execution path when the preferred path fails.

Example:

Primary Model
     |
     X failure
     |
     v
Fallback Model
     |
     v
Response

Fallbacks may be:

- Another model
- Another provider
- Cached response
- Deterministic workflow
- Human escalation

The fallback should preserve as much functionality as practical.
      `
    },

    {
      title: "8. Retry Strategy",
      content: `
Temporary failures may succeed if retried.

However, retries should not be unlimited.

A common strategy is exponential backoff.

Example:

Attempt 1 -> wait 100 ms
Attempt 2 -> wait 200 ms
Attempt 3 -> wait 400 ms
Attempt 4 -> wait 800 ms

Jitter can be added to reduce synchronized retry spikes.
      `
    },

    {
      title: "9. Exponential Backoff Formula",
      content: `
A simplified backoff formula is:

delay_n = base × 2^n

For example:

base = 100 ms

n = 0:
100 ms

n = 1:
200 ms

n = 2:
400 ms

n = 3:
800 ms

Production systems normally also apply a maximum delay.
      `
    },

    {
      title: "10. Timeouts",
      content: `
Every external operation should have a timeout.

Without timeouts:

Request
 |
 v
External Service
 |
 |---- hangs
 |
 v
Application waits indefinitely

With timeout:

Request
 |
 v
External Service
 |
 +---- success
 |
 +---- timeout ---> fallback
      `
    },

    {
      title: "11. Circuit Breakers",
      content: `
A circuit breaker prevents an unhealthy service from receiving continuous
traffic.

States:

CLOSED
 |
 | repeated failures
 v
OPEN
 |
 | wait
 v
HALF-OPEN
 |
 +---- success ---> CLOSED
 |
 +---- failure ---> OPEN

This protects the application from repeatedly calling a failing dependency.
      `
    },

    {
      title: "12. Graceful Degradation",
      content: `
A system does not always need to fail completely.

Example:

Full AI feature unavailable.

Instead of:

ERROR

the application may provide:

- Cached information
- Reduced model capability
- Search-only mode
- Basic deterministic response
- Human escalation

This is graceful degradation.
      `
    },

    {
      title: "13. Idempotency",
      content: `
Retries can be dangerous for actions with side effects.

Example:

sendPayment()

If the request times out after the payment succeeds, blindly retrying may
create a duplicate operation.

Idempotency keys help prevent duplicate effects.

Example:

requestId = "payment-123"

The server can recognize repeated attempts belonging to the same operation.
      `
    },

    {
      title: "14. Reliability Metrics",
      content: `
Useful metrics include:

Availability
Error rate
Timeout rate
Fallback rate
Retry rate
P95 latency
Provider failure rate
Successful completion rate

A high fallback rate can indicate that the primary provider is unhealthy or
the routing strategy needs improvement.
      `
    },

    {
      title: "15. Multi-Provider Architecture",
      content: `
A production system may look like:

                    Application
                         |
                         v
                    Model Gateway
                         |
              +----------+----------+
              |          |          |
              v          v          v
          Provider A  Provider B  Local
              |          |          |
              +----------+----------+
                         |
                         v
                     Fallback
                         |
                         v
                     Response
      `
    },

    {
      title: "16. Reliability Engineering Process",
      content: `
Reliability should be designed before failure occurs.

Process:

Identify Dependencies
       |
       v
Define Failure Modes
       |
       v
Add Timeouts
       |
       v
Add Retry Rules
       |
       v
Add Fallbacks
       |
       v
Add Monitoring
       |
       v
Test Failure Scenarios
       |
       v
Improve
      `
    }
  ],

  architecture: {
    title: "Multi-Model Resilient Architecture",
    diagram: `
                         User Request
                              |
                              v
                         API Gateway
                              |
                              v
                        Model Router
                              |
             +----------------+----------------+
             |                |                |
             v                v                v
          Model A          Model B          Model C
             |                |                |
             +----------------+----------------+
                              |
                         Health Check
                              |
                              v
                         Retry Policy
                              |
                              v
                       Circuit Breaker
                              |
                    +---------+---------+
                    |                   |
                 Healthy              Failed
                    |                   |
                    v                   v
                Response             Fallback
                                        |
                                        v
                                  Graceful Degrade
    `
  },

  codeExample: {
    title: "Simple Retry with Exponential Backoff",
    language: "typescript",
    code: `
async function withRetry<T>(
  operation: () => Promise<T>,
  maxAttempts = 3,
  baseDelay = 100
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (attempt === maxAttempts - 1) {
        break;
      }

      const delay =
        baseDelay * Math.pow(2, attempt);

      await new Promise(resolve =>
        setTimeout(resolve, delay)
      );
    }
  }

  throw lastError;
}
`
  },

  formulas: [
    {
      name: "Exponential Backoff",
      formula: "delay_n = min(base × 2^n, maxDelay)",
      explanation: "Retry delays increase exponentially until a maximum delay is reached."
    },
    {
      name: "Availability",
      formula: "Availability = SuccessfulRequests / TotalRequests",
      explanation: "Measures the fraction of requests completed successfully."
    },
    {
      name: "Fallback Rate",
      formula: "FallbackRate = FallbackRequests / TotalRequests",
      explanation: "Measures how often the system relies on a fallback path."
    },
    {
      name: "Error Rate",
      formula: "ErrorRate = FailedRequests / TotalRequests",
      explanation: "Measures failed operations relative to total operations."
    },
    {
      name: "Expected Request Cost",
      formula: "E[C] = Σ P(model_i) × C(model_i)",
      explanation: "Routing changes the expected cost according to model selection probabilities."
    }
  ],

  comparisons: [
    {
      topic: "Retry vs Fallback",
      retry: "Repeats the same operation after a temporary failure",
      fallback: "Uses an alternative execution path"
    },
    {
      topic: "Timeout vs Circuit Breaker",
      timeout: "Stops one operation after a time limit",
      circuitBreaker: "Temporarily prevents calls to an unhealthy dependency"
    },
    {
      topic: "Single Provider vs Multi Provider",
      single: "Simpler but creates stronger dependency on one service",
      multi: "More resilient but increases operational complexity"
    },
    {
      topic: "Rule-Based Routing vs Dynamic Routing",
      ruleBased: "Predictable deterministic routing",
      dynamic: "Can adapt to request characteristics and system state"
    }
  ],

  exercises: [
    "Design routing rules for three different task types.",
    "Calculate exponential backoff delays.",
    "Design a fallback strategy for provider failure.",
    "Explain the circuit-breaker state machine.",
    "Design graceful degradation for an AI assistant.",
    "Identify operations where idempotency is required."
  ],

  codingTasks: [
    "Implement exponential backoff.",
    "Implement a timeout wrapper.",
    "Create a basic model router.",
    "Implement fallback execution.",
    "Implement a simple circuit-breaker state machine."
  ],

  architectureTasks: [
    "Design a multi-provider LLM gateway.",
    "Design a highly available AI assistant.",
    "Design a model router that considers cost and latency.",
    "Design a failure-resilient RAG application."
  ],

  interviewQuestions: [
    "Why use multiple LLM providers?",
    "What is model routing?",
    "What is provider abstraction?",
    "What is exponential backoff?",
    "Why should retries have limits?",
    "What is a circuit breaker?",
    "What is graceful degradation?",
    "What is idempotency?",
    "How can fallback rate indicate system health?"
  ],

  commonMistakes: [
    "Retrying indefinitely",
    "Retrying non-idempotent operations blindly",
    "Having no timeout",
    "Using one provider without a recovery plan",
    "Ignoring provider health",
    "Creating overly complex routing logic",
    "Failing to monitor fallback frequency",
    "Using fallbacks that violate application requirements"
  ],

  summary: [
    "Multi-model systems can improve resilience and cost efficiency.",
    "A model gateway reduces provider coupling.",
    "Routing can consider task complexity, capability, cost and latency.",
    "Retries should use controlled backoff.",
    "Timeouts prevent indefinite waiting.",
    "Circuit breakers protect applications from unhealthy dependencies.",
    "Graceful degradation keeps partial functionality available.",
    "Reliability requires measurement and failure testing."
  ],

  keyTakeaways: [
    "Do not design production systems around the assumption that every dependency is always available.",
    "Use routing to match workloads with appropriate models.",
    "Use retries only for suitable temporary failures.",
    "Use timeouts everywhere external calls can hang.",
    "Use circuit breakers for unhealthy dependencies.",
    "Protect side-effecting operations with idempotency.",
    "Design explicit fallback and degradation paths."
  ]
};

export default lesson11;