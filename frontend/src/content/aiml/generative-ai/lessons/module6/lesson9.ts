const lesson9 = {
  id: "lesson9",
  moduleId: "module6",

  title: "Testing, Evaluation & Observability for LLM Applications",

  subtitle:
    "Learn how to test probabilistic applications, measure quality, trace requests, diagnose failures, and continuously monitor LLM systems.",

  description:
    "Traditional unit tests alone are insufficient for many LLM applications because model outputs can vary. This lesson introduces layered testing, golden datasets, evaluation dimensions, regression testing, observability, tracing, latency monitoring, token accounting, failure analysis, and continuous evaluation.",

  difficulty: "Advanced",

  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Understand why LLM applications require specialized testing.",
    "Distinguish deterministic and probabilistic behavior.",
    "Build golden evaluation datasets.",
    "Define application-specific quality metrics.",
    "Test structured outputs.",
    "Test tool-calling behavior.",
    "Perform regression testing.",
    "Understand tracing and observability.",
    "Monitor latency, cost, and errors.",
    "Build a continuous evaluation workflow."
  ],

  sections: [
    {
      id: "01",
      title: "Why LLM Testing Is Different",
      content: `
Traditional software may have an expected exact output.

Example:

2 + 2 → 4

LLM applications may allow multiple acceptable responses.

Therefore testing often needs to evaluate properties such as:

• correctness
• relevance
• completeness
• groundedness
• format
• safety
• consistency
`
    },

    {
      id: "02",
      title: "Testing Layers",
      content: `
A production LLM application can use several testing layers:

UNIT TESTS
 ↓
COMPONENT TESTS
 ↓
PROMPT TESTS
 ↓
MODEL EVALUATION
 ↓
INTEGRATION TESTS
 ↓
END-TO-END TESTS
 ↓
PRODUCTION MONITORING

Different layers detect different classes of failure.
`
    },

    {
      id: "03",
      title: "Deterministic vs Probabilistic Tests",
      comparison: [
        {
          type: "Deterministic",
          examples: [
            "schema validation",
            "authorization",
            "token accounting",
            "API error handling"
          ]
        },
        {
          type: "Probabilistic",
          examples: [
            "answer quality",
            "relevance",
            "style",
            "reasoning quality"
          ]
        }
      ]
    },

    {
      id: "04",
      title: "Golden Evaluation Dataset",
      content: `
A golden dataset contains representative test cases.

Example:

[
  {
    "input": "What is cosine similarity?",
    "expected_properties": [
      "defines cosine similarity",
      "mentions vectors"
    ]
  }
]

A good dataset should include:

• common cases
• edge cases
• difficult cases
• failure cases
• security cases
`
    },

    {
      id: "05",
      title: "Evaluation Dimensions",
      content: `
Possible dimensions include:

CORRECTNESS
Is the answer factually correct?

RELEVANCE
Does it answer the requested task?

COMPLETENESS
Are important parts missing?

GROUNDEDNESS
Is the answer supported by supplied context?

FORMAT
Does it follow the required structure?

SAFETY
Does it satisfy application safety requirements?
`
    },

    {
      id: "06",
      title: "Reference-Based Evaluation",
      content: `
When a reference answer exists, the generated answer can be compared
against it.

Conceptually:

INPUT
 ↓
MODEL
 ↓
GENERATED ANSWER
 ↓
COMPARE WITH REFERENCE
 ↓
SCORE
`
    },

    {
      id: "07",
      title: "Reference-Free Evaluation",
      content: `
Some tasks do not have one correct reference answer.

Evaluation can instead inspect:

• relevance
• consistency
• groundedness
• completeness
• style
• factual support

This is useful when many valid answers are possible.
`
    },

    {
      id: "08",
      title: "LLM-as-Judge",
      content: `
Another model can evaluate a generated response.

Example:

Candidate answer
       ↓
Evaluator model
       ↓
criteria
       ↓
score + explanation

However, evaluator models can also make mistakes.

Therefore evaluator results should be validated and calibrated.
`
    },

    {
      id: "09",
      title: "Regression Testing",
      content: `
A prompt or model change can improve one case while breaking another.

Therefore maintain:

BASELINE
   ↓
NEW VERSION
   ↓
RUN SAME DATASET
   ↓
COMPARE RESULTS
   ↓
ACCEPT / REJECT
`
    },

    {
      id: "10",
      title: "Prompt Regression",

      content: `
Suppose prompt_v1 has:

Accuracy = 90%

After changing the prompt:

prompt_v2
Accuracy = 86%

Even if v2 looks better on a few examples, the evaluation dataset reveals
a regression.

Prompt changes should therefore be treated as software changes.
`
    },

    {
      id: "11",
      title: "Testing Structured Outputs",
      content: `
Structured outputs can be tested deterministically.

Pipeline:

MODEL
 ↓
PARSE
 ↓
SCHEMA VALIDATION
 ↓
BUSINESS RULE VALIDATION
 ↓
PASS / FAIL

Example:

age must be an integer
score must be between 0 and 1
status must be one of allowed values
`
    },

    {
      id: "12",
      title: "Testing Tool Calls",
      content: `
Tool-enabled applications should test:

• correct tool selection
• correct arguments
• invalid arguments
• unauthorized tools
• tool failures
• retries
• duplicate execution
• final response after tool execution
`
    },

    {
      id: "13",
      title: "Observability",
      content: `
Observability helps explain what happened during a request.

Useful signals include:

• logs
• metrics
• traces
• request IDs
• model
• prompt version
• token usage
• latency
• tool calls
• errors
`
    },

    {
      id: "14",
      title: "Tracing",

      content: `
A single request may contain:

REQUEST
 ↓
PROMPT BUILD
 ↓
RETRIEVAL
 ↓
LLM CALL
 ↓
TOOL CALL
 ↓
LLM CALL
 ↓
FINAL RESPONSE

Tracing connects these operations into one request lifecycle.
`
    },

    {
      id: "15",
      title: "Latency Monitoring",
      formula: `
P95 latency =
95th percentile of observed request latency
`,

      content: `
Monitoring only average latency can hide slow requests.

For example:

Average = 1.2 seconds
P95 = 4.8 seconds

A portion of users may therefore experience significantly slower
responses than the average suggests.
`
    },

    {
      id: "16",
      title: "Token and Cost Monitoring",

      formula: `
Request cost =
input usage cost
+
output usage cost
`,

      content: `
Monitor:

• input tokens
• output tokens
• total tokens
• cost per request
• cost per user
• cost per feature

This makes unexpected usage visible.
`
    },

    {
      id: "17",
      title: "Failure Taxonomy",
      content: `
Failures can be classified as:

INPUT FAILURE
→ invalid user input

PROMPT FAILURE
→ inadequate instructions

CONTEXT FAILURE
→ missing or irrelevant context

MODEL FAILURE
→ incorrect generation

TOOL FAILURE
→ external operation failed

APPLICATION FAILURE
→ software or infrastructure problem

This classification makes debugging more systematic.
`
    },

    {
      id: "18",
      title: "Continuous Evaluation",
      content: `
A mature workflow is:

CHANGE
 ↓
AUTOMATED TESTS
 ↓
GOLDEN DATASET
 ↓
QUALITY EVALUATION
 ↓
LATENCY/COST CHECK
 ↓
REVIEW
 ↓
DEPLOY
 ↓
PRODUCTION MONITORING
 ↓
NEW FAILURES
 ↓
DATASET UPDATE
`
    },

    {
      id: "19",
      title: "Production Evaluation Architecture",
      content: `
                  ┌──────────────────┐
                  │  Golden Dataset  │
                  └────────┬─────────┘
                           ↓
                    ┌─────────────┐
                    │ Test Runner │
                    └──────┬──────┘
                           ↓
                    ┌─────────────┐
                    │ LLM System  │
                    └──────┬──────┘
                           ↓
                 ┌───────────────────┐
                 │ Evaluation Layer  │
                 └───────┬───────────┘
                         ↓
              Quality + Cost + Latency
                         ↓
                   Evaluation Report
`
    },

    {
      id: "20",
      title: "Application Reliability Loop",
      content: `
OBSERVE
   ↓
IDENTIFY FAILURE
   ↓
CLASSIFY FAILURE
   ↓
CREATE TEST CASE
   ↓
FIX
   ↓
RE-EVALUATE
   ↓
DEPLOY
   ↓
OBSERVE AGAIN

This turns production failures into permanent improvements.
`
    }
  ],

  codeExamples: [
    {
      title: "Simple Deterministic Test",
      language: "python",
      code: `
def validate_response(response):
    assert isinstance(
        response["answer"],
        str
    )

    assert response["score"] >= 0
    assert response["score"] <= 1
`
    },

    {
      title: "Evaluation Dataset",
      language: "python",
      code: `
evaluation_cases = [
    {
        "input": "What is an embedding?",
        "expected_topic": "embeddings"
    },
    {
        "input": "What is cosine similarity?",
        "expected_topic": "similarity"
    }
]
`
    },

    {
      title: "Basic Latency Measurement",
      language: "python",
      code: `
import time


def evaluate_call(call):
    start = time.perf_counter()

    result = call()

    latency = (
        time.perf_counter() - start
    )

    return {
        "result": result,
        "latency": latency
    }
`
    },

    {
      title: "Failure Classification",
      language: "python",
      code: `
def classify_failure(error):
    if error == "invalid_input":
        return "INPUT_FAILURE"

    if error == "tool_error":
        return "TOOL_FAILURE"

    if error == "timeout":
        return "APPLICATION_FAILURE"

    return "MODEL_FAILURE"
`
    }
  ],

  exercises: [
    {
      type: "conceptual",
      question:
        "Why are traditional exact-output unit tests insufficient for many LLM tasks?"
    },
    {
      type: "design",
      question:
        "Design a golden dataset for an educational AI assistant."
    },
    {
      type: "architecture",
      question:
        "Design an observability pipeline for a tool-enabled LLM application."
    },
    {
      type: "analysis",
      question:
        "Why should production failures be converted into regression test cases?"
    }
  ],

  codingExercises: [
    "Create a golden evaluation dataset.",
    "Build a deterministic structured-output validator.",
    "Build a latency measurement utility.",
    "Create a token-cost tracking record.",
    "Implement failure classification.",
    "Create a simple regression test runner.",
    "Generate an evaluation report."
  ],

  architectureExercises: [
    "Design an LLM observability dashboard.",
    "Design an evaluation pipeline for a RAG application.",
    "Design tracing for a multi-tool agent.",
    "Design a production feedback-to-regression workflow."
  ],

  interviewQuestions: [
    "Why is testing LLM applications different from traditional software?",
    "What is a golden dataset?",
    "What is regression testing?",
    "What is LLM-as-a-judge evaluation?",
    "What is observability?",
    "Why are traces useful?",
    "What is P95 latency?",
    "Why monitor token usage?",
    "What is a failure taxonomy?",
    "How can production failures improve an evaluation dataset?"
  ],

  commonMistakes: [
    "Testing only one or two examples.",
    "Relying only on exact string matching.",
    "Changing prompts without regression tests.",
    "Ignoring latency and cost.",
    "Logging without request correlation.",
    "Using an evaluator model without calibration.",
    "Failing to classify production failures.",
    "Not adding newly discovered failures to evaluation datasets."
  ],

  summary: [
    "LLM applications require layered testing.",
    "Golden datasets provide repeatable evaluation.",
    "Quality can include correctness, relevance, completeness, groundedness, and format.",
    "Structured outputs can be tested deterministically.",
    "Tool calls require dedicated testing.",
    "Observability combines logs, metrics, and traces.",
    "Latency and token usage should be monitored.",
    "Failure classification makes debugging systematic.",
    "Continuous evaluation turns application changes into measurable engineering decisions."
  ],

  keyTakeaways: [
    "Treat prompts and model configurations like software versions.",
    "Build representative evaluation datasets.",
    "Use deterministic tests wherever possible.",
    "Use broader quality evaluation for probabilistic outputs.",
    "Trace complete request lifecycles.",
    "Turn production failures into regression tests.",
    "Monitor quality, latency, reliability, and cost together."
  ]
};

export default lesson9;