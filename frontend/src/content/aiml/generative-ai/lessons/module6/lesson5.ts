const lesson5 = {
  id: "lesson5",
  moduleId: "module6",

  title: "Streaming, Async LLM Calls & Real-Time Applications",

  subtitle:
    "Understand streaming generation, asynchronous API calls, concurrency, cancellation, latency, and the architecture of responsive LLM applications.",

  description:
    "Interactive LLM applications often need to display generated content while it is being produced. This lesson explains streaming, asynchronous execution, event-driven response handling, concurrency, cancellation, buffering, latency measurement, and real-time application architecture.",

  difficulty: "Intermediate → Advanced",

  estimatedTime: "3–4 hours",

  learningObjectives: [
    "Understand synchronous versus asynchronous inference.",
    "Understand streaming generation.",
    "Understand time-to-first-token.",
    "Understand total generation latency.",
    "Understand async programming concepts.",
    "Understand concurrent LLM requests.",
    "Understand cancellation.",
    "Understand buffering and partial output.",
    "Design real-time LLM interfaces.",
    "Handle streaming failures safely."
  ],

  sections: [
    {
      id: "01",
      title: "Why Streaming Matters",
      content: `
Without streaming:

USER
 ↓
REQUEST
 ↓
WAIT
 ↓
FULL RESPONSE
 ↓
DISPLAY

With streaming:

USER
 ↓
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
FINAL RESPONSE

Streaming reduces perceived waiting time.
`
    },

    {
      id: "02",
      title: "Synchronous vs Asynchronous",

      comparison: [
        {
          aspect: "Synchronous",
          description: "The caller waits for completion."
        },
        {
          aspect: "Asynchronous",
          description: "The application can continue other work while waiting."
        }
      ]
    },

    {
      id: "03",
      title: "Time to First Token",

      formula: `
TTFT =
request start → first generated token
`,

      content: `
Time-to-first-token measures how quickly generation begins.

For interactive applications:

Lower TTFT generally improves perceived responsiveness.

However, TTFT is different from total completion time.
`
    },

    {
      id: "04",
      title: "Total Generation Latency",

      formula: `
Total latency =
TTFT + generation duration
`,

      content: `
An application can have:

Fast first token
+
slow generation

or:

Slow first token
+
fast generation

Therefore both metrics can matter.
`
    },

    {
      id: "05",
      title: "Streaming Architecture",

      content: `
A simplified streaming architecture is:

BROWSER
   ↓
BACKEND
   ↓
LLM API
   ↓
TOKEN 1 ─────→ BROWSER
TOKEN 2 ─────→ BROWSER
TOKEN 3 ─────→ BROWSER
TOKEN 4 ─────→ BROWSER
END    ───────→ BROWSER

The browser updates the interface as chunks arrive.
`
    },

    {
      id: "06",
      title: "Async Programming",

      content: `
Asynchronous programming allows applications to perform other work
while waiting for I/O operations.

LLM API calls are commonly I/O-bound.

Conceptually:

start request A
      ↓
waiting
      ↓
do other work
      ↓
request A completes

This can improve server utilization.
`
    },

    {
      id: "07",
      title: "Concurrent Requests",

      content: `
Suppose three independent requests are required:

Request A
Request B
Request C

Sequential:

A → B → C

Concurrent:

A
B } → execute during overlapping waiting periods
C

Concurrency can reduce overall wall-clock time when operations are
independent and provider limits permit it.
`
    },

    {
      id: "08",
      title: "When Not to Parallelize",

      content: `
Not every operation is independent.

Example:

Request A
   ↓
result A
   ↓
Request B using result A

This is sequential dependency.

Therefore:

A → B

Parallelizing B before A finishes would be incorrect.
`
    },

    {
      id: "09",
      title: "Cancellation",

      content: `
Users may stop generation.

Example:

USER
 ↓
GENERATE
 ↓
TOKEN
 ↓
TOKEN
 ↓
CANCEL
 ↓
STOP

Cancellation can save:

• computation
• latency
• token usage
• user waiting time

The backend and provider must support appropriate cancellation behavior.
`
    },

    {
      id: "10",
      title: "Partial Output",

      content: `
Streaming means intermediate output is incomplete.

Therefore the UI should distinguish:

generating
from
completed

Example:

Generating...

"The vector database stores..."

The sentence is not final until the stream ends.
`
    },

    {
      id: "11",
      title: "Streaming Errors",

      content: `
Errors can occur after partial output has already been displayed.

Example:

TOKEN 1
TOKEN 2
TOKEN 3
ERROR

The UI should not silently treat the partial response as a complete
successful response.

Possible state model:

idle
→ connecting
→ streaming
→ completed

or:

streaming
→ failed
`
    },

    {
      id: "12",
      title: "Backpressure",

      content: `
If data is produced faster than the client can process it, buffering
may become necessary.

Conceptually:

PRODUCER
   ↓
BUFFER
   ↓
CONSUMER

A robust streaming system should account for:

• chunk size
• network speed
• client rendering
• memory usage
`
    },

    {
      id: "13",
      title: "Real-Time Chat Architecture",

      content: `
USER
 ↓
CHAT UI
 ↓
APPLICATION API
 ↓
ASYNC LLM SERVICE
 ↓
STREAM
 ↓
CHAT UI

Additional components:

authentication
rate limiting
conversation state
logging
cancellation
error handling
`
    },

    {
      id: "14",
      title: "Latency Optimization",

      content: `
Latency can be reduced by examining:

• network delay
• prompt size
• model selection
• output length
• unnecessary sequential operations
• retrieval latency
• application processing

Optimization should be measurement-driven.
`
    },

    {
      id: "15",
      title: "Streaming and Cost",

      content: `
Streaming does not automatically reduce the amount of generated text.

It mainly changes how the response is delivered.

Therefore:

Streaming ≠ automatically lower token usage.

Its major benefit is improved responsiveness and user experience.
`
    },

    {
      id: "16",
      title: "Production Streaming State Machine",

      content: `
IDLE
 │
 ▼
REQUESTING
 │
 ▼
STREAMING
 │
 ├──────────────→ CANCELLED
 │
 ├──────────────→ FAILED
 │
 ▼
COMPLETED

This explicit state model helps the frontend display correct status.
`
    }
  ],

  codeExamples: [
    {
      title: "Async Python Concept",
      language: "python",
      code: `
import asyncio


async def call_model(client, prompt):
    response = await client.generate(
        prompt
    )

    return response


async def main(client):
    result = await call_model(
        client,
        "Explain embeddings."
    )

    print(result)
`
    },
    {
      title: "Concurrent Requests",
      language: "python",
      code: `
import asyncio


async def run_all(client, prompts):
    tasks = [
        client.generate(prompt)
        for prompt in prompts
    ]

    return await asyncio.gather(
        *tasks
    )
`
    },
    {
      title: "Streaming Consumer Concept",
      language: "python",
      code: `
async def consume_stream(stream):
    output = []

    async for chunk in stream:
        output.append(chunk)
        print(chunk, end="", flush=True)

    return "".join(output)
`
    }
  ],

  exercises: [
    {
      type: "conceptual",
      question:
        "What is the difference between streaming and asynchronous execution?"
    },
    {
      type: "calculation",
      question:
        "If TTFT is 800 ms and generation takes 4.2 seconds, what is total generation latency?"
    },
    {
      type: "architecture",
      question:
        "Design a streaming chat architecture for a web application."
    },
    {
      type: "design",
      question:
        "How should the UI behave if a stream fails after several tokens?"
    }
  ],

  codingExercises: [
    "Create an asynchronous LLM service.",
    "Run independent LLM requests concurrently.",
    "Implement a streaming consumer.",
    "Track TTFT.",
    "Track total generation latency.",
    "Implement cancellation state.",
    "Implement streaming error handling."
  ],

  interviewQuestions: [
    "What is streaming in an LLM application?",
    "What is TTFT?",
    "What is the difference between latency and TTFT?",
    "Why use asynchronous programming for LLM APIs?",
    "When can requests be executed concurrently?",
    "What is cancellation?",
    "What happens if a stream fails after partial output?",
    "Does streaming automatically reduce token costs?"
  ],

  commonMistakes: [
    "Treating a partial stream as a completed response.",
    "Ignoring cancellation.",
    "Parallelizing dependent operations.",
    "Ignoring provider rate limits.",
    "Measuring only total latency.",
    "Failing to handle stream termination.",
    "Assuming streaming automatically reduces cost."
  ],

  summary: [
    "Streaming progressively delivers generated output.",
    "Async execution improves handling of I/O-bound model calls.",
    "TTFT measures time until generation begins.",
    "Total latency includes the complete generation period.",
    "Independent requests can sometimes run concurrently.",
    "Dependent requests must preserve ordering.",
    "Cancellation can prevent unnecessary generation.",
    "Streaming systems need explicit success and failure states."
  ],

  keyTakeaways: [
    "Streaming improves perceived responsiveness.",
    "Async design is important for scalable LLM applications.",
    "Measure TTFT and total latency separately.",
    "Handle partial output explicitly.",
    "Design cancellation and failure states from the beginning."
  ]
};

export default lesson5;