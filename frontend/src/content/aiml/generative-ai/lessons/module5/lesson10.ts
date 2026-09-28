const lesson = {
  id: "lesson10",
  moduleId: "module5",
  lessonNumber: 10,

  title: "Vector Search Performance Optimization & Scaling",

  subtitle:
    "Learn how to optimize vector retrieval for latency, throughput, memory, cost, and recall as AI applications grow.",

  description: `
A vector search prototype may work perfectly with a few thousand vectors.

Production systems may eventually contain:

    millions
    tens of millions
    hundreds of millions
    or more vectors.

At that scale, performance becomes an architectural concern.

The optimization problem is:

        QUALITY
          ↕
       LATENCY
          ↕
       THROUGHPUT
          ↕
        MEMORY
          ↕
         COST

A good vector retrieval system balances all of these dimensions.
`,

  estimatedTime: "90–120 minutes",
  difficulty: "Advanced",

  learningObjectives: [
    "Understand vector search latency.",
    "Understand throughput.",
    "Understand memory consumption.",
    "Understand batching.",
    "Understand caching.",
    "Understand index tuning.",
    "Understand dimensionality trade-offs.",
    "Understand quantization.",
    "Understand sharding and replication.",
    "Understand horizontal scaling.",
    "Understand retrieval performance benchmarking."
  ],

  sections: [
    {
      heading: "1. What Does Performance Mean?",

      content: `
Vector search performance is multidimensional.

Important metrics include:

Latency:
    How long does one query take?

Throughput:
    How many queries can the system process?

Recall:
    How many relevant neighbors are retrieved?

Memory:
    How much infrastructure is required?

Cost:
    How expensive is the system to operate?

A system with extremely low latency but poor recall may not be useful.
`
    },

    {
      heading: "2. Latency Components",

      content: `
End-to-end retrieval latency may contain:

request processing
      +
query embedding
      +
network
      +
metadata filtering
      +
vector search
      +
reranking
      +
response formatting

Therefore optimizing only vector index latency may not optimize the
actual application.
`,

      formulas: [
        "Total latency ≈ embedding + network + filtering + search + reranking + application overhead"
      ]
    },

    {
      heading: "3. P50, P95 and P99",

      content: `
Average latency does not tell the complete story.

Suppose:

Most requests:
    40 ms

Some requests:
    500 ms

The average may hide the slow requests.

Percentiles provide a better picture.

P50:
    median latency

P95:
    95% of requests are at or below this latency

P99:
    99% of requests are at or below this latency

Interactive AI systems often care strongly about tail latency.
`
    },

    {
      heading: "4. Throughput",

      content: `
Throughput measures how much work the system can process.

For example:

    500 queries/second

A system can have:

low latency at low traffic

but:

high latency under heavy concurrent traffic.

Therefore benchmarking must include realistic concurrency.
`
    },

    {
      heading: "5. Vector Dimensionality",

      content: `
Higher-dimensional vectors require more storage and more computation.

Approximate raw storage:

    vectors × dimensions × bytes_per_value

For example:

1,000,000 vectors
× 768 dimensions
× 4 bytes

≈ 3.072 GB

This excludes index overhead and metadata.

Reducing dimensionality can therefore have substantial infrastructure
effects.
`
    },

    {
      heading: "6. Batch Querying",

      content: `
If many queries arrive together, batching may reduce repeated overhead.

Instead of:

query 1 → search
query 2 → search
query 3 → search

the system may support:

batch
  ↓
multiple searches
  ↓
results

Whether batching improves latency depends on the implementation and
workload.
`
    },

    {
      heading: "7. Caching",

      content: `
Some queries repeat.

For example:

"What is the refund policy?"

If the exact query appears frequently, caching can avoid repeated
embedding and retrieval work.

Possible cache layers:

Query embedding cache
        ↓
Retrieval result cache
        ↓
Generated response cache
`
    },

    {
      heading: "8. Cache Hit Rate",

      formulas: [
        "Cache hit rate = cache hits / total cache requests"
      ],

      content: `
If:

hits = 800
requests = 1000

then:

hit rate = 800 / 1000
         = 0.80
         = 80%

Higher hit rates can reduce repeated computation.

However, cached information must respect:

• permissions
• freshness
• tenant
• document version
`
    },

    {
      heading: "9. ANN Index Tuning",

      content: `
ANN indexes expose parameters controlling search effort.

Increasing search effort can often improve recall.

But:

higher search effort
        ↓
more computation
        ↓
higher latency

Therefore index parameters should be tuned using representative queries.
`
    },

    {
      heading: "10. Quantization",

      content: `
Quantization compresses vector representations.

For example:

float32
    ↓
lower precision representation

Potential benefits:

• lower memory
• better cache efficiency
• potentially faster computation

Potential cost:

• approximation error
• possible recall degradation

Quantization should therefore be evaluated rather than assumed to be
harmless.
`
    },

    {
      heading: "11. Candidate Reduction",

      content: `
Retrieval pipelines often improve performance by reducing the number
of expensive operations.

Instead of reranking:

1,000,000 vectors

the system might:

ANN search
    ↓
top 100 candidates
    ↓
reranker
    ↓
top 10

This is a common two-stage strategy.
`
    },

    {
      heading: "12. Reranking Cost",

      content: `
Rerankers can provide stronger relevance judgments but may be more
expensive than simple vector similarity.

Therefore:

large candidate set
       ↓
expensive reranking

can create latency.

A common architecture is:

cheap retrieval
       ↓
small candidate set
       ↓
expensive reranking
`
    },

    {
      heading: "13. Sharding",

      content: `
Sharding divides data across multiple machines or partitions.

Example:

                    VECTOR COLLECTION
                           │
            ┌──────────────┼──────────────┐
            ↓              ↓              ↓
         Shard A        Shard B        Shard C
            │              │              │
         vectors        vectors        vectors

A query may be sent to multiple shards.

Results are then merged and ranked.
`
    },

    {
      heading: "14. Replication",

      content: `
Replication creates multiple copies of data.

Benefits include:

• availability
• read scaling
• fault tolerance

A replicated vector service can route requests across multiple
instances.

Replication and sharding solve different problems.

Sharding:
    divides data

Replication:
    duplicates data
`
    },

    {
      heading: "15. Horizontal vs Vertical Scaling",

      comparisonTables: [
        {
          title: "Scaling Strategies",
          columns: ["Strategy", "Meaning", "Example"],
          rows: [
            ["Vertical scaling", "Use a larger machine", "More RAM / CPU"],
            ["Horizontal scaling", "Add more machines", "More vector nodes"],
            ["Sharding", "Divide data", "Different vectors on different nodes"],
            ["Replication", "Duplicate data", "Multiple read copies"]
          ]
        }
      ]
    },

    {
      heading: "16. Performance Benchmarking",

      content: `
A meaningful benchmark should include:

• representative queries
• realistic vector counts
• realistic dimensions
• realistic metadata filters
• realistic concurrency
• cold-cache tests
• warm-cache tests
• latency percentiles
• recall
• memory
• CPU
• cost

Benchmarking only 100 toy vectors does not predict production behavior.
`
    },

    {
      heading: "17. Optimization Workflow",

      process: [
        "Define quality and latency requirements.",
        "Create a representative benchmark dataset.",
        "Measure baseline performance.",
        "Identify the dominant bottleneck.",
        "Tune the vector index.",
        "Optimize filtering.",
        "Optimize candidate count.",
        "Evaluate caching.",
        "Evaluate quantization.",
        "Scale infrastructure if necessary.",
        "Measure recall again.",
        "Measure P50/P95/P99 latency.",
        "Compare cost.",
        "Deploy the configuration that satisfies requirements."
      ]
    },

    {
      heading: "18. End-to-End Optimization",

      content: `
The most important principle is:

Do not optimize one component blindly.

Suppose vector search takes:

    10 ms

but query embedding takes:

    80 ms

Reducing vector search from 10 ms to 5 ms only saves 5 ms.

If generation takes:

    800 ms

then retrieval optimization may have limited impact on total latency.

Optimization should therefore target the actual bottleneck.
`
    }
  ],

  codeExamples: [
    {
      title: "Latency Measurement",
      language: "python",
      code: `import time

def measure(operation):
    start = time.perf_counter()

    result = operation()

    elapsed = time.perf_counter() - start

    return result, elapsed


def search():
    values = [0.2, 0.9, 0.5, 0.7]
    return sorted(values, reverse=True)


result, latency = measure(search)

print("Result:", result)
print("Latency:", latency)`,
      explanation:
        "Performance optimization begins with measurement."
    },

    {
      title: "Simple Cache",
      language: "python",
      code: `cache = {}

def retrieve(query):
    if query in cache:
        return cache[query], True

    result = [
        "document-1",
        "document-2"
    ]

    cache[query] = result

    return result, False


result, hit = retrieve("database setup")

print("Cache hit:", hit)

result, hit = retrieve("database setup")

print("Cache hit:", hit)`,
      explanation:
        "Repeated queries can reuse previously computed retrieval results."
    },

    {
      title: "Cache Hit Rate",
      language: "python",
      code: `hits = 820
requests = 1000

hit_rate = hits / requests

print("Cache hit rate:", hit_rate)`,
      explanation:
        "The cache hit rate measures how often requests are served from cache."
    }
  ],

  mathIntuition: [
    {
      concept: "Latency",
      intuition:
        "Latency measures the time required to complete an operation."
    },
    {
      concept: "Throughput",
      intuition:
        "Throughput measures how much work the system can complete during a period."
    },
    {
      concept: "Tail latency",
      intuition:
        "P95 and P99 reveal slow requests that averages can hide."
    },
    {
      concept: "Memory",
      intuition:
        "Vector storage grows approximately with the number of vectors multiplied by dimensions and bytes per value."
    }
  ],

  formulas: [
    "Raw vector memory ≈ N × D × bytes_per_value",
    "Cache hit rate = hits / total requests",
    "Total latency ≈ embedding + network + filtering + search + reranking + overhead",
    "Throughput = completed operations / unit time"
  ],

  exercises: [
    "Why is average latency insufficient for production monitoring?",
    "What are P50, P95, and P99?",
    "Explain throughput.",
    "How does embedding dimensionality affect memory?",
    "Why can caching improve vector search performance?",
    "What is cache hit rate?",
    "Explain quantization and its trade-off.",
    "Why should reranking operate on a smaller candidate set?",
    "Compare sharding and replication.",
    "Design a benchmark for one million vectors."
  ],

  codingExercises: [
    {
      title: "Latency Benchmark",
      task: "Benchmark brute-force vector search across several dataset sizes."
    },
    {
      title: "Cache Layer",
      task: "Implement a retrieval cache with hit/miss statistics."
    },
    {
      title: "Percentile Calculator",
      task: "Write a Python function that calculates P50, P95, and P99 latency from recorded measurements."
    },
    {
      title: "Memory Estimator",
      task: "Create a calculator that estimates raw vector memory from vector count, dimension, and numeric precision."
    }
  ],

  architectureExercises: [
    "Design a vector search service for one million vectors.",
    "Design a vector search service for one hundred million vectors.",
    "Design a sharded vector architecture.",
    "Design a replicated retrieval service.",
    "Design a low-latency RAG retrieval pipeline."
  ],

  commonMistakes: [
    "Optimizing before measuring.",
    "Looking only at average latency.",
    "Ignoring recall while reducing search effort.",
    "Caching without considering permissions.",
    "Ignoring stale cached results.",
    "Reranking too many candidates.",
    "Scaling infrastructure before identifying the bottleneck.",
    "Benchmarking with unrealistic toy data."
  ],

  interviewQuestions: [
    {
      question: "What is P95 latency?",
      answer:
        "The latency value below which approximately 95% of measured requests complete."
    },
    {
      question: "What is the difference between sharding and replication?",
      answer:
        "Sharding divides data across nodes, while replication creates multiple copies of data."
    },
    {
      question: "Why is caching useful in vector search?",
      answer:
        "Repeated queries or embeddings can be reused, reducing repeated computation and latency."
    },
    {
      question: "Why should optimization be driven by measurement?",
      answer:
        "Because the actual bottleneck may be embedding, networking, filtering, vector search, reranking, or another component."
    }
  ],

  summary: [
    "Vector search performance includes latency, throughput, recall, memory, and cost.",
    "P95 and P99 reveal tail latency.",
    "Dimensionality directly affects raw vector memory.",
    "Caching can reduce repeated retrieval work.",
    "Quantization trades representation precision for efficiency.",
    "Sharding divides data while replication duplicates data.",
    "Optimization should begin with measurement and target the actual bottleneck."
  ],

  keyTakeaways: [
    "Performance optimization is an end-to-end problem.",
    "Recall must be considered alongside latency.",
    "Caching must respect freshness and authorization.",
    "Scaling strategies should match the workload.",
    "A production benchmark must resemble real traffic and real data."
  ],

  visualReferences: [
    {
      title: "Vector Search Performance Stack",
      type: "architecture",
      description: "Embedding → network → filtering → ANN → reranking → generation."
    },
    {
      title: "Sharding vs Replication",
      type: "comparison",
      description: "Data partitioning versus data duplication."
    },
    {
      title: "Vector Optimization Workflow",
      type: "flowchart",
      description: "Measure → diagnose → optimize → evaluate → deploy."
    },
    {
      title: "Latency Breakdown",
      type: "diagram",
      description: "End-to-end request latency divided across retrieval pipeline stages."
    }
  ]
};

export default lesson;