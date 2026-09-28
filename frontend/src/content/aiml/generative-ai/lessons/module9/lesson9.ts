const lesson9 = {
  id: "lesson9",
  moduleId: "module9",
  lessonNumber: 9,
  title: "Observability, Tracing & LLMOps",
  subtitle: "Understanding, monitoring and operating LLM applications in production",
  duration: "65 min",
  difficulty: "Advanced",

  overview: `
A production LLM application cannot be operated reliably if the engineering
team cannot understand what happened during a request.

Traditional application monitoring usually focuses on metrics such as CPU,
memory, latency, errors and throughput.

LLM applications require additional signals:

- Model calls
- Prompt versions
- Token usage
- Retrieved documents
- Tool calls
- Model responses
- Evaluation scores
- Cost
- Safety events
- User feedback

Observability provides visibility into these behaviors.

LLMOps extends this idea into the operational lifecycle of LLM applications,
covering experimentation, evaluation, deployment, monitoring, model and prompt
versioning, feedback and continuous improvement.
`,

  objectives: [
    "Understand observability for LLM applications",
    "Distinguish logs, metrics and traces",
    "Trace multi-step LLM workflows",
    "Track token usage and cost",
    "Monitor latency and errors",
    "Observe retrieval and tool calls",
    "Understand prompt and model versioning",
    "Build LLM quality dashboards",
    "Understand LLMOps lifecycle",
    "Design production monitoring and alerting"
  ],

  sections: [
    {
      title: "1. What Is Observability?",
      content: `
Observability is the ability to understand the internal behavior of a system
from the information it produces.

Three major signals are:

Logs
Metrics
Traces

For an LLM application, all three are important.

Logs answer:
"What happened?"

Metrics answer:
"How often or how much?"

Traces answer:
"How did this request move through the system?"
      `
    },

    {
      title: "2. Logs",
      content: `
Logs record individual events.

Example:

{
  "requestId": "req-123",
  "event": "model_call",
  "model": "model-x",
  "latencyMs": 820,
  "inputTokens": 1200,
  "outputTokens": 350
}

Useful events include:

- Request received
- Prompt generated
- Model call started
- Model call completed
- Retrieval completed
- Tool called
- Validation failed
- Response returned

Sensitive data should not be logged unnecessarily.
      `
    },

    {
      title: "3. Metrics",
      content: `
Metrics aggregate system behavior.

Examples:

Requests per minute
Average latency
P95 latency
Error rate
Token usage
Cost
Tool failure rate
Retrieval latency
Evaluation score

Metrics make trends visible.

For example:

Error Rate
 |
 |        *
 |     *  *
 |  *  *
 |_*____________
       Time
      `
    },

    {
      title: "4. Traces",
      content: `
A trace follows one request across multiple components.

Example:

Request
 |
 +--> Authentication
 |
 +--> Prompt Builder
 |
 +--> Retrieval
 |
 +--> Model Call
 |
 +--> Tool Call
 |
 +--> Final Model Call
 |
 +--> Validation
 |
 +--> Response

Each operation can become a span.

This makes multi-step AI workflows easier to debug.
      `
    },

    {
      title: "5. Trace and Span Model",
      content: `
A trace represents the complete request.

A span represents one operation.

Example:

Trace: request-123

Span 1: API request
Span 2: retrieval
Span 3: model call
Span 4: tool call
Span 5: final model call

Each span can contain:

- Start time
- End time
- Duration
- Status
- Component
- Metadata
      `
    },

    {
      title: "6. LLM-Specific Observability",
      content: `
LLM systems need additional metadata.

Model:
Which model was used?

Prompt:
Which prompt version?

Tokens:
How many input and output tokens?

Context:
What retrieval context was supplied?

Tools:
Which tools were called?

Quality:
What evaluation result was produced?

Cost:
What did the request approximately cost?
      `
    },

    {
      title: "7. Token Monitoring",
      content: `
Token usage directly affects cost and sometimes latency.

Track:

Input tokens
Output tokens
Total tokens

Example:

TotalTokens = InputTokens + OutputTokens

Applications can aggregate token usage by:

- User
- Organization
- Model
- Endpoint
- Feature
- Day
- Month
      `
    },

    {
      title: "8. Cost Monitoring",
      content: `
LLM applications should estimate cost per request.

Conceptually:

Cost =
InputTokens × InputPrice
+
OutputTokens × OutputPrice

Cost can then be aggregated:

Request
 |
 v
User
 |
 v
Organization
 |
 v
Application
 |
 v
Monthly Cost

Budget alerts can detect unexpected increases.
      `
    },

    {
      title: "9. Latency Monitoring",
      content: `
Latency should be measured across the complete request path.

Example:

API = 40 ms
Retrieval = 80 ms
Model = 900 ms
Tool = 200 ms
Validation = 20 ms

Total ≈ 1240 ms

Useful metrics include:

Average
Median
P90
P95
P99

Tail latency is especially important for user experience.
      `
    },

    {
      title: "10. Error Monitoring",
      content: `
Errors can occur at many levels.

Application errors:
- Invalid request
- Authentication failure
- Database failure

Model errors:
- Timeout
- Rate limit
- Provider failure

Pipeline errors:
- Retrieval failure
- Tool failure
- Schema validation failure

Each error should be classified rather than recorded simply as "failed."
      `
    },

    {
      title: "11. Prompt and Model Versioning",
      content: `
A production trace should ideally identify:

Model version
Prompt version
Application version
Tool version
Retrieval configuration

This allows engineers to investigate changes.

Example:

Application v4
Prompt v7
Model v3
Retriever v2

If quality suddenly decreases, these identifiers help identify what changed.
      `
    },

    {
      title: "12. LLM Quality Monitoring",
      content: `
Operational monitoring alone is not enough.

A system can be:

Fast
Cheap
Available

and still produce poor answers.

Therefore quality signals should also be monitored.

Examples:

- Groundedness
- Relevance
- User satisfaction
- Tool success rate
- Schema compliance
- Evaluation scores
- Escalation rate
      `
    },

    {
      title: "13. User Feedback",
      content: `
User feedback provides valuable production evidence.

Examples:

👍 Useful
👎 Not useful
Report incorrect answer
Report unsafe answer
Escalate to human

Feedback can be converted into evaluation data.

Production
 |
 v
User Feedback
 |
 v
Curated Dataset
 |
 v
Evaluation
 |
 v
Improvement
      `
    },

    {
      title: "14. Alerting",
      content: `
Monitoring becomes operationally useful when thresholds trigger alerts.

Examples:

Error rate > threshold
Latency P95 > threshold
Cost > budget
Tool failures > threshold
Quality score < threshold

Example:

Metric
 |
 v
Threshold
 |
 +---- Normal
 |
 +---- Warning
 |
 +---- Critical ---> Alert
      `
    },

    {
      title: "15. LLMOps Lifecycle",
      content: `
A simplified LLMOps lifecycle is:

Experiment
   |
   v
Evaluate
   |
   v
Version
   |
   v
Deploy
   |
   v
Monitor
   |
   v
Collect Feedback
   |
   v
Improve
   |
   +------> Evaluate Again

This creates a continuous engineering loop.
      `
    },

    {
      title: "16. Production Dashboard",
      content: `
A useful LLM dashboard may show:

Traffic
Latency
Error Rate
Token Usage
Estimated Cost
Model Distribution
Prompt Version
Tool Success Rate
Retrieval Quality
User Feedback
Evaluation Scores

The dashboard should help answer:

Is the system working?
Is it becoming expensive?
Is quality changing?
Where are failures occurring?
      `
    }
  ],

  architecture: {
    title: "Production LLM Observability Architecture",
    diagram: `
                        LLM Application
                              |
              +---------------+---------------+
              |               |               |
              v               v               v
            Logs           Metrics          Traces
              |               |               |
              +---------------+---------------+
                              |
                              v
                    Observability Platform
                              |
          +-------------------+-------------------+
          |                   |                   |
          v                   v                   v
      Dashboards           Alerts            Analysis
          |                   |                   |
          +-------------------+-------------------+
                              |
                              v
                       Engineering Team
                              |
                              v
                         Improvements
    `
  },

  codeExample: {
    title: "Simple LLM Trace Context",
    language: "typescript",
    code: `
type TraceContext = {
  traceId: string;
  requestId: string;
  startTime: number;
};

function startTrace(
  requestId: string
): TraceContext {
  return {
    traceId: crypto.randomUUID(),
    requestId,
    startTime: Date.now()
  };
}

function finishTrace(
  trace: TraceContext
) {
  const durationMs =
    Date.now() - trace.startTime;

  return {
    traceId: trace.traceId,
    requestId: trace.requestId,
    durationMs
  };
}

const trace = startTrace("req-123");

// Model call, retrieval and tools would
// create child spans in a real system.

const result = finishTrace(trace);

console.log(result);
`
  },

  formulas: [
    {
      name: "Total Tokens",
      formula: "T_total = T_input + T_output",
      explanation: "Total token usage combines prompt and generated tokens."
    },
    {
      name: "Estimated Cost",
      formula: "C = T_input × P_input + T_output × P_output",
      explanation: "Estimated model cost depends on token volume and provider pricing."
    },
    {
      name: "Error Rate",
      formula: "ErrorRate = FailedRequests / TotalRequests",
      explanation: "Measures the fraction of requests that fail."
    },
    {
      name: "Availability",
      formula: "Availability = SuccessfulRequests / TotalRequests",
      explanation: "Provides a simple application-level availability measurement."
    },
    {
      name: "Cache Hit Rate",
      formula: "HitRate = CacheHits / TotalCacheRequests",
      explanation: "Measures how often cached results satisfy requests."
    }
  ],

  comparisons: [
    {
      topic: "Logs vs Metrics vs Traces",
      logs: "Individual events",
      metrics: "Aggregated measurements",
      traces: "End-to-end request paths"
    },
    {
      topic: "Monitoring vs Evaluation",
      monitoring: "Tracks operational behavior",
      evaluation: "Measures application quality"
    },
    {
      topic: "Offline vs Production Observability",
      offline: "Controlled test environment",
      production: "Real application behavior"
    },
    {
      topic: "Average vs P95 Latency",
      average: "Typical aggregate latency",
      p95: "Latency experienced by the slowest 5% of requests"
    }
  ],

  exercises: [
    "Design logs for a production LLM request.",
    "Define ten metrics for an AI application.",
    "Design a trace for a RAG request with one tool call.",
    "Calculate token cost for sample requests.",
    "Design quality and operational dashboards.",
    "Define alert thresholds for latency and errors."
  ],

  codingTasks: [
    "Implement a basic trace context.",
    "Create a structured logging utility.",
    "Calculate token usage metrics.",
    "Implement cost estimation.",
    "Create an error classification system."
  ],

  architectureTasks: [
    "Design an observability architecture for a RAG application.",
    "Design monitoring for a multi-agent system.",
    "Design an LLMOps pipeline from experimentation to production.",
    "Design a quality dashboard for an AI learning assistant."
  ],

  interviewQuestions: [
    "What is observability?",
    "What is the difference between logs, metrics and traces?",
    "What is a trace?",
    "What is a span?",
    "Why should token usage be monitored?",
    "Why is P95 latency useful?",
    "What is LLMOps?",
    "Why should prompt and model versions be recorded?",
    "How can user feedback become evaluation data?"
  ],

  commonMistakes: [
    "Logging only application errors",
    "Ignoring token usage",
    "Not tracking prompt versions",
    "Not tracing multi-step workflows",
    "Monitoring latency without measuring quality",
    "Logging sensitive data",
    "Creating dashboards without actionable metrics",
    "Deploying changes without comparing versions",
    "Ignoring user feedback"
  ],

  summary: [
    "Observability makes LLM application behavior understandable.",
    "Logs capture events, metrics capture measurements and traces capture request paths.",
    "LLM applications require model-specific metadata.",
    "Token usage and cost should be monitored.",
    "Quality metrics should complement operational metrics.",
    "Version information is essential for debugging changes.",
    "LLMOps creates a continuous experiment-evaluate-deploy-monitor-improve cycle."
  ],

  keyTakeaways: [
    "Every production LLM request should be traceable.",
    "Track logs, metrics and traces together.",
    "Monitor tokens, cost, latency and errors.",
    "Record model and prompt versions.",
    "Monitor quality as well as infrastructure.",
    "Use feedback as an improvement signal.",
    "Treat LLMOps as a continuous engineering lifecycle."
  ]
};

export default lesson9;