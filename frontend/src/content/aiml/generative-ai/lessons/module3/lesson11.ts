const lesson = {
  id: "lesson11",
  moduleId: "module3",
  lessonNumber: 11,

  title: "Prompt Evaluation, Observability & AI Quality Engineering",

  description:
    "Learn how to systematically evaluate prompts, build test datasets, measure quality, detect regressions, monitor production behavior, and establish reliable AI quality engineering practices.",

  learningObjectives: [
    "Understand why prompt evaluation is necessary.",
    "Design prompt evaluation datasets.",
    "Create representative test cases.",
    "Understand correctness, relevance, groundedness, and format metrics.",
    "Understand model-based evaluation.",
    "Understand human evaluation.",
    "Design regression testing for prompts.",
    "Measure prompt changes objectively.",
    "Understand production observability.",
    "Track latency, token usage, failures, and quality.",
    "Detect prompt and model regressions.",
    "Design evaluation gates.",
    "Build a complete prompt quality workflow."
  ],

  sections: [

    {
      title: "1. Why Prompt Evaluation Matters",
      content: `
A prompt may look excellent to a human and still perform poorly across many inputs.

Example:

Prompt A:
"Explain the topic clearly."

It may work for simple questions.

But what happens with:

- Ambiguous questions?
- Long context?
- Missing information?
- Adversarial input?
- Different user levels?
- Structured output requirements?

Prompt evaluation answers:

"How does this prompt behave across a defined set of situations?"
`
    },

    {
      title: "2. Prompt Quality Is Multi-Dimensional",
      content: `
There is no single universal quality metric.

Possible dimensions include:

Correctness
Relevance
Groundedness
Completeness
Clarity
Format compliance
Safety
Consistency
Latency
Cost

A prompt can improve one dimension while becoming worse in another.

Therefore evaluation should measure the dimensions that matter to the application.
`
    },

    {
      title: "3. Evaluation Dataset",
      content: `
An evaluation dataset contains representative inputs and expected behavior.

Example:

[
  {
    "input": "What is a primary key?",
    "expected": "Definition..."
  },
  {
    "input": "Explain normalization.",
    "expected": "..."
  }
]

A good dataset should include:

Normal cases
Edge cases
Ambiguous cases
Failure cases
Security cases
Format cases
`
    },

    {
      title: "4. Golden Dataset",
      content: `
A curated evaluation dataset is often called a golden dataset.

It contains carefully reviewed examples.

Example categories:

Easy
Medium
Hard
Boundary
Adversarial
Missing-context
Out-of-domain

The dataset should evolve as new production failure modes are discovered.
`
    },

    {
      title: "5. Test Case Design",
      content: `
Each test case can contain:

Input
Expected behavior
Evaluation criteria
Category
Difficulty
Reference answer
Metadata

Example:

{
  "id": "qa-001",
  "category": "normal",
  "input": "What is an array?",
  "expected_behavior": "Give a correct concise definition."
}

This structure makes automated evaluation easier.
`
    },

    {
      title: "6. Correctness",
      content: `
Correctness asks:

"Is the answer factually and logically correct?"

For deterministic tasks, correctness may be straightforward.

Example:

2 + 2

Expected:
4

For open-ended tasks, evaluation can be more complex.

A reference answer may define essential facts rather than requiring exact wording.
`
    },

    {
      title: "7. Relevance",
      content: `
A response can be correct but irrelevant.

Question:
"What is Python?"

Response:
A long discussion about the history of computing.

It may contain correct facts but fail the user's actual need.

Relevance evaluates whether the answer addresses the requested task.
`
    },

    {
      title: "8. Groundedness",
      content: `
Groundedness asks whether claims are supported by supplied evidence.

This is especially important for RAG systems.

Context:
"Library closes at 8 PM."

Answer:
"The library closes at 8 PM."

Grounded.

Answer:
"The library closes at 10 PM."

Not grounded.
`
    },

    {
      title: "9. Completeness",
      content: `
Completeness asks whether the response covers required information.

Suppose a task requires:

1. Definition
2. Example
3. Complexity
4. Edge cases

If the response only gives the definition, it may be correct but incomplete.

Evaluation should therefore compare output against requirements.
`
    },

    {
      title: "10. Format Compliance",
      content: `
Applications often require specific output formats.

Example:

Required:

{
  "category": "...",
  "reason": "..."
}

If the model returns prose instead, the output may be unusable.

Format compliance can therefore be measured separately from semantic quality.
`
    },

    {
      title: "11. Human Evaluation",
      content: `
Human evaluators can judge dimensions that are difficult to automate.

For example:

- Helpfulness
- Clarity
- Tone
- Reasoning quality
- User satisfaction

A rubric should define criteria clearly.

Example:

1 = poor
2 = weak
3 = acceptable
4 = good
5 = excellent

Different evaluators should receive the same rubric and examples when possible.
`
    },

    {
      title: "12. Inter-Rater Agreement",
      content: `
When multiple humans evaluate outputs, their judgments may differ.

Agreement can be studied using statistical measures.

High agreement suggests that the rubric is relatively clear.

Low agreement may indicate:

- Ambiguous criteria
- Poor evaluator instructions
- Subjective task
- Inconsistent examples

Evaluation design therefore matters as much as the score itself.
`
    },

    {
      title: "13. Model-Based Evaluation",
      content: `
A language model can also evaluate another model's output.

Conceptually:

Input
 ↓
Generator Model
 ↓
Output
 ↓
Evaluator Model
 ↓
Score / Feedback

The evaluator can check:

- Relevance
- Correctness
- Style
- Groundedness
- Format

However, model-based evaluation can itself make mistakes and should be validated.
`
    },

    {
      title: "14. Reference-Based Evaluation",
      content: `
Some tasks have known reference answers.

Example:

Expected:
"The capital of France is Paris."

Generated:
"Paris is the capital of France."

A semantic comparison may identify these as equivalent even though the wording differs.

Reference-based evaluation is useful when expected behavior is well-defined.
`
    },

    {
      title: "15. Pairwise Evaluation",
      content: `
Instead of assigning an absolute score, compare two outputs.

Prompt A → Output A

Prompt B → Output B

Evaluator:

Which response better satisfies the requirements?

Pairwise comparison can be useful when absolute scoring is difficult.

However, comparison criteria still need to be clearly defined.
`
    },

    {
      title: "16. Regression Testing",
      content: `
Suppose prompt v2 improves one task.

But it accidentally breaks another.

Regression testing catches this.

Workflow:

Prompt v2
 ↓
Run Existing Dataset
 ↓
Compare with Baseline
 ↓
Detect Regressions
 ↓
Approve or Reject
`
    },

    {
      title: "17. Prompt Regression Example",
      content: `
Version 1:

Accuracy = 92%

Version 2:

Accuracy = 95%

Looks better.

But:

Safety tests:
v1 = 99%
v2 = 93%

Overall behavior may have regressed.

This demonstrates why multiple metrics are necessary.
`
    },

    {
      title: "18. Evaluation Matrix",
      content: `
A useful evaluation matrix can contain:

             v1    v2    v3
Correctness  92    95    94
Relevance    94    96    96
Format       99    97    100
Safety       99    93    99
Latency      1.2   1.5   1.3

The goal is not to blindly maximize one number.

The system should satisfy the requirements of the application.
`
    },

    {
      title: "19. Baselines",
      content: `
A baseline is the version against which a new system is compared.

Example:

Baseline:
Prompt v3

Candidate:
Prompt v4

Run the same dataset.

Then compare:

v4 − v3

This makes evaluation more meaningful than evaluating a new prompt without historical context.
`
    },

    {
      title: "20. Statistical Thinking",
      content: `
Evaluation results are estimates based on samples.

Suppose:

90 / 100 test cases pass.

Observed accuracy:

90%

A different dataset may produce a different result.

Therefore evaluation should consider:

- Dataset size
- Dataset representativeness
- Variance
- Confidence intervals when appropriate
- Repeated experiments
`
    },

    {
      title: "21. Latency Evaluation",
      content: `
Quality is not the only production concern.

Users also experience latency.

Useful measurements:

Average latency
Median latency
P95 latency
P99 latency

For example:

P95 = 2.8 seconds

means approximately 95% of measured requests completed at or below that latency in the evaluated sample.
`
    },

    {
      title: "22. Token and Cost Evaluation",
      content: `
Prompt changes can affect token usage.

Longer prompts may:

- Increase cost
- Increase latency
- Reduce available context
- Increase processing requirements

Useful measurements:

Input tokens
Output tokens
Total tokens
Cost per request
Cost per successful task
`
    },

    {
      title: "23. Production Observability",
      content: `
Production AI systems should collect appropriate operational signals.

Example:

Request
 ↓
Prompt Version
 ↓
Model Version
 ↓
Latency
 ↓
Token Usage
 ↓
Tool Calls
 ↓
Validation
 ↓
Outcome

This enables investigation when quality changes.
`
    },

    {
      title: "24. Traceability",
      content: `
When a production response is wrong, engineers should be able to identify:

- Which prompt version?
- Which model?
- Which retrieved documents?
- Which tools?
- Which configuration?
- Which validation result?

Without traceability, debugging becomes difficult.
`
    },

    {
      title: "25. Failure Taxonomy",
      content: `
AI failures should be categorized.

Possible categories:

Prompt failure
Retrieval failure
Model failure
Tool failure
Validation failure
Data failure
Integration failure
User-input failure

Classification helps teams identify recurring problems.
`
    },

    {
      title: "26. Error Budgets",
      content: `
Production systems may define acceptable failure levels.

Example:

Format failure < 1%
Critical safety failure = 0
Task failure < 5%

These are application-specific requirements.

The important concept is that quality requirements should be explicit.
`
    },

    {
      title: "27. Evaluation Pipeline",
      content: `
A complete evaluation pipeline can be:

Prompt
 ↓
Dataset
 ↓
Model
 ↓
Generated Outputs
 ↓
Automated Metrics
 ↓
Human / Model Evaluation
 ↓
Regression Comparison
 ↓
Release Decision
`
    },

    {
      title: "28. Continuous Evaluation",
      content: `
Evaluation should not happen only once.

A mature system continuously evaluates:

New prompts
New models
New datasets
New tools
New retrieval strategies

This creates:

Change
 ↓
Evaluation
 ↓
Observation
 ↓
Learning
 ↓
Improvement
`
    },

    {
      title: "29. Production Monitoring vs Offline Evaluation",
      content: `
Offline evaluation:

Controlled
Repeatable
Known dataset

Production monitoring:

Real users
Real traffic
Unexpected cases
Changing distributions

Both are necessary.

Offline tests provide controlled measurement.

Production monitoring reveals real-world behavior.
`
    },

    {
      title: "30. Quality Engineering Mindset",
      content: `
AI quality engineering treats AI behavior like a software quality problem.

Instead of:

"The prompt seems good."

Use:

"Here is the dataset.
Here are the metrics.
Here is the baseline.
Here are the regressions.
Here is the release threshold."

This makes AI development more measurable.
`
    },

    {
      title: "31. Practical Exercise — Build an Evaluation Dataset",
      content: `
Create 30 test cases.

Include:

10 normal
5 edge
5 ambiguous
5 adversarial
5 formatting

Define expected behavior for each case.
`
    },

    {
      title: "32. Practical Exercise — Compare Prompts",
      content: `
Create:

Prompt A
Prompt B

Run both against the same 30 cases.

Measure:

Correctness
Relevance
Format compliance
Latency

Create an evaluation table.
`
    },

    {
      title: "33. Practical Exercise — Regression Testing",
      content: `
Take an existing prompt version.

Create a new version.

Run both against the same dataset.

Identify:

Improvements
Regressions
Unchanged cases

Then decide whether the new version satisfies your predefined release requirements.
`
    },

    {
      title: "34. Final Quality Workflow",
      content: `
The complete process is:

DESIGN
 ↓
DATASET
 ↓
BASELINE
 ↓
EXPERIMENT
 ↓
EVALUATE
 ↓
REGRESSION TEST
 ↓
STAGE
 ↓
RELEASE
 ↓
MONITOR
 ↓
FEEDBACK
 ↓
IMPROVE

Prompt engineering becomes a measurable engineering process rather than trial-and-error wording.
`
    }
  ],

  codeExamples: [

    {
      title: "Example 1 — Evaluation Dataset",
      language: "json",
      code: `[
  {
    "id": "case-001",
    "category": "normal",
    "input": "What is an array?",
    "expected_behavior": "Provide a correct definition."
  },
  {
    "id": "case-002",
    "category": "edge",
    "input": "",
    "expected_behavior": "Handle missing input."
  }
]`
    },

    {
      title: "Example 2 — Simple Evaluation",
      language: "python",
      code: `test_cases = [
    {
        "expected": "Paris",
        "actual": "Paris"
    },
    {
        "expected": "London",
        "actual": "Paris"
    }
]

correct = 0

for case in test_cases:
    if case["expected"] == case["actual"]:
        correct += 1

accuracy = correct / len(test_cases)

print("Accuracy:", accuracy)`
    },

    {
      title: "Example 3 — Regression Comparison",
      language: "python",
      code: `baseline = {
    "correctness": 0.92,
    "format": 0.99,
    "safety": 0.99
}

candidate = {
    "correctness": 0.95,
    "format": 0.98,
    "safety": 0.99
}

for metric in baseline:
    change = candidate[metric] - baseline[metric]

    print(
        metric,
        change
    )`
    },

    {
      title: "Example 4 — Evaluation Record",
      language: "json",
      code: `{
  "prompt_version": "support-v4",
  "model": "production-model",
  "dataset": "support-eval-v7",
  "metrics": {
    "correctness": 0.94,
    "format": 0.99,
    "safety": 1.0
  },
  "status": "passed"
}`
    }
  ],

  mathIntuition: [
    {
      title: "Accuracy",
      formula: "Accuracy = Correct Predictions / Total Predictions",
      explanation:
        "Useful when each evaluation case has a clearly defined correct result."
    },
    {
      title: "Precision",
      formula: "Precision = TP / (TP + FP)",
      explanation:
        "Useful when evaluating classification or retrieval-like tasks where false positives matter."
    },
    {
      title: "Recall",
      formula: "Recall = TP / (TP + FN)",
      explanation:
        "Useful when missing relevant cases is particularly important."
    },
    {
      title: "F1 Score",
      formula: "F1 = 2 × Precision × Recall / (Precision + Recall)",
      explanation:
        "Provides a combined measure of precision and recall."
    },
    {
      title: "Pass Rate",
      formula: "Pass Rate = Passing Test Cases / Total Test Cases",
      explanation:
        "A simple measure for prompt evaluation suites."
    }
  ],

  comparisonTables: [
    {
      title: "Offline vs Production Evaluation",
      headers: [
        "Offline",
        "Production"
      ],
      rows: [
        [
          "Controlled dataset",
          "Real user traffic"
        ],
        [
          "Repeatable",
          "Dynamic"
        ],
        [
          "Known cases",
          "Unexpected cases"
        ],
        [
          "Good for regression",
          "Good for real-world monitoring"
        ],
        [
          "Before deployment",
          "After deployment"
        ]
      ]
    },
    {
      title: "Evaluation Dimension",
      headers: [
        "Metric",
        "Question"
      ],
      rows: [
        [
          "Correctness",
          "Is the answer correct?"
        ],
        [
          "Relevance",
          "Does it address the task?"
        ],
        [
          "Groundedness",
          "Is it supported by evidence?"
        ],
        [
          "Completeness",
          "Are required elements present?"
        ],
        [
          "Format",
          "Does it match the required structure?"
        ],
        [
          "Latency",
          "How quickly does it respond?"
        ],
        [
          "Cost",
          "How expensive is the request?"
        ]
      ]
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Build a Golden Dataset",
      instructions: [
        "Create at least 30 cases.",
        "Categorize the cases.",
        "Define expected behavior.",
        "Include edge and adversarial cases.",
        "Review the dataset manually."
      ]
    },
    {
      title: "Exercise 2 — Prompt Benchmark",
      instructions: [
        "Choose two prompt versions.",
        "Run both against the same dataset.",
        "Calculate quality metrics.",
        "Measure latency.",
        "Compare regressions."
      ]
    },
    {
      title: "Exercise 3 — Production Dashboard Design",
      instructions: [
        "Define five quality metrics.",
        "Define three operational metrics.",
        "Define failure categories.",
        "Design a dashboard showing prompt and model versions."
      ]
    }
  ],

  interviewQuestions: [
    {
      question: "Why should prompts be evaluated?",
      answer:
        "Because prompt behavior can vary significantly across inputs, and a prompt that works on a few examples may fail on edge cases or production traffic."
    },
    {
      question: "What is a golden dataset?",
      answer:
        "A curated set of evaluation examples used as a stable reference for measuring AI behavior."
    },
    {
      question: "What is regression testing?",
      answer:
        "Testing a new version against existing cases to identify behavior that has unintentionally become worse."
    },
    {
      question: "What is groundedness?",
      answer:
        "The degree to which generated claims are supported by the supplied evidence."
    },
    {
      question: "Why measure latency?",
      answer:
        "Because response speed affects user experience and operational performance."
    },
    {
      question: "Why measure token usage?",
      answer:
        "Token usage affects cost, latency, and context utilization."
    },
    {
      question: "What is production observability?",
      answer:
        "The ability to monitor and trace AI-system behavior using operational and quality signals."
    }
  ],

  keyTakeaways: [
    "Prompt quality should be measured rather than assumed.",
    "Evaluation datasets should contain normal, edge, ambiguous, and failure cases.",
    "Correctness, relevance, groundedness, completeness, and format are different dimensions.",
    "Human evaluation remains useful for subjective qualities.",
    "Model-based evaluation can help but should itself be validated.",
    "Regression testing protects previously working behavior.",
    "Baselines make prompt comparisons meaningful.",
    "Latency and token usage are important production metrics.",
    "Production monitoring complements offline evaluation.",
    "Traceability should connect outputs to prompt and model versions.",
    "Failure taxonomies help teams identify recurring problems.",
    "Continuous evaluation turns prompt engineering into quality engineering."
  ]
};

export default lesson;