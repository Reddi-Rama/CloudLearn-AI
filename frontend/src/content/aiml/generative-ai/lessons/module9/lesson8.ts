const lesson8 = {
  id: "lesson8",
  moduleId: "module9",
  lessonNumber: 8,
  title: "Testing, Evaluation & Quality Engineering",
  subtitle: "Measuring and improving the reliability of LLM applications",
  duration: "65 min",
  difficulty: "Advanced",

  overview: `
Traditional software testing assumes that the same input should normally
produce the same output.

LLM applications are different.

Outputs can vary while still being acceptable, and an output can be fluent,
well-written and completely wrong.

Quality engineering for LLM applications therefore requires multiple forms of
testing and evaluation.

This lesson covers deterministic tests, prompt tests, structured-output tests,
retrieval evaluation, model evaluation, human evaluation, automated evaluation,
regression testing, golden datasets, adversarial testing, hallucination
measurement, observability-based evaluation and continuous evaluation.

The objective is to turn LLM quality from a subjective judgment into a measurable
engineering process.
`,

  objectives: [
    "Understand why LLM testing differs from traditional software testing",
    "Design unit and integration tests for LLM applications",
    "Create golden datasets",
    "Evaluate prompts systematically",
    "Measure retrieval quality",
    "Evaluate groundedness and relevance",
    "Test structured outputs",
    "Perform regression testing",
    "Design adversarial test cases",
    "Build a continuous evaluation pipeline"
  ],

  sections: [
    {
      title: "1. Why LLM Testing Is Different",
      content: `
Traditional function:

f(x) = y

The expected output can often be exactly specified.

LLM applications may instead produce:

Input
 |
 v
LLM
 |
 +--> acceptable answer A
 +--> acceptable answer B
 +--> unacceptable answer C

The evaluation therefore needs to consider properties of the answer rather
than only exact string equality.
      `
    },

    {
      title: "2. Testing Layers",
      content: `
A production LLM application can be tested at multiple layers.

Layer 1: Unit tests
Layer 2: Prompt tests
Layer 3: Schema tests
Layer 4: Retrieval tests
Layer 5: Integration tests
Layer 6: End-to-end tests
Layer 7: Quality evaluation
Layer 8: Human evaluation
Layer 9: Production monitoring

No single testing layer is sufficient.
      `
    },

    {
      title: "3. Unit Testing",
      content: `
Traditional deterministic code should still use ordinary unit tests.

Examples:

- Prompt variable construction
- Input validation
- Token budgeting
- Permission checks
- Tool argument validation
- Response parsing
- Error handling

The model should not be used when a deterministic function can be tested
directly.
      `
    },

    {
      title: "4. Prompt Testing",
      content: `
Prompt tests verify that a prompt produces acceptable behavior.

A test case can contain:

{
  "input": "...",
  "expectedBehavior": "...",
  "constraints": [...]
}

The test runner sends the case through the application and evaluates the
result.

Prompt tests should cover normal and difficult cases.
      `
    },

    {
      title: "5. Golden Datasets",
      content: `
A golden dataset is a curated collection of representative test cases.

Example:

Dataset
 |
 +--> Easy cases
 +--> Normal cases
 +--> Edge cases
 +--> Adversarial cases
 +--> Safety cases
 +--> Regression cases

Each case can contain:

- Input
- Context
- Expected behavior
- Reference answer
- Evaluation criteria
      `
    },

    {
      title: "6. Evaluation Dimensions",
      content: `
Different applications require different quality dimensions.

Common dimensions include:

Accuracy
Relevance
Groundedness
Completeness
Coherence
Format compliance
Safety
Consistency
Latency
Cost

A customer-support application may prioritize accuracy and policy compliance.

A creative-writing application may emphasize coherence and style.
      `
    },

    {
      title: "7. LLM-as-a-Judge",
      content: `
A separate model can sometimes evaluate another model's response.

Conceptually:

Input
 |
 v
Application Model
 |
 v
Answer
 |
 v
Evaluator Model
 |
 v
Score + Explanation

This can scale evaluation, but evaluator models are not perfect.

They can have:

- Bias
- Inconsistent scoring
- Preference artifacts
- Difficulty detecting subtle factual errors

Therefore automated evaluation should be combined with other methods.
      `
    },

    {
      title: "8. Human Evaluation",
      content: `
Human evaluation is useful when quality depends on nuanced judgment.

Evaluators can assess:

- Correctness
- Helpfulness
- Clarity
- Safety
- Completeness

A good evaluation rubric should define each score clearly.

For example:

1 = unacceptable
2 = major problems
3 = acceptable
4 = strong
5 = excellent

The exact rubric should be adapted to the application.
      `
    },

    {
      title: "9. RAG Evaluation",
      content: `
RAG requires evaluating both retrieval and generation.

Retrieval:
Did the system retrieve the right information?

Generation:
Did the model correctly use the retrieved information?

Pipeline:

Query
 |
 v
Retriever
 |
 v
Retrieved Documents
 |
 v
Context
 |
 v
LLM
 |
 v
Answer

A strong final answer cannot compensate for consistently poor retrieval.
      `
    },

    {
      title: "10. Retrieval Metrics",
      content: `
Common information-retrieval concepts include:

Precision:
How much of the retrieved content is relevant?

Recall:
How much of the relevant content was retrieved?

Precision = Relevant Retrieved / Retrieved

Recall = Relevant Retrieved / Relevant Available

These concepts help identify whether a retrieval system is returning too much
irrelevant information or missing useful information.
      `
    },

    {
      title: "11. Regression Testing",
      content: `
A prompt or model update can improve one case and break another.

Therefore applications should maintain a regression dataset.

Before deployment:

Current Version
      |
      v
Evaluation Dataset
      |
      v
Compare With Previous Version
      |
      +---- Improved
      |
      +---- Unchanged
      |
      +---- Regressed

A deployment should not rely only on a small number of manual tests.
      `
    },

    {
      title: "12. Adversarial Testing",
      content: `
Adversarial tests intentionally attempt to break the system.

Examples:

- Prompt injection
- Very long input
- Empty input
- Malformed input
- Conflicting instructions
- Sensitive-data requests
- Tool misuse
- Repeated requests
- Ambiguous requests

The objective is to discover weaknesses before users discover them.
      `
    },

    {
      title: "13. Structured Output Testing",
      content: `
Structured output should be tested separately from semantic quality.

Check:

1. Valid JSON
2. Required fields
3. Correct data types
4. Allowed enum values
5. No unexpected fields when prohibited
6. Business-rule validity

Example:

LLM
 |
 v
Parser
 |
 v
Schema Validator
 |
 +---- Pass
 |
 +---- Fail --> Retry / Repair / Fallback
      `
    },

    {
      title: "14. Evaluation Thresholds",
      content: `
Production systems can define minimum quality thresholds.

Example:

Accuracy >= 0.90
Groundedness >= 0.92
Schema compliance >= 0.99

These values are examples only.

Thresholds should be established from application requirements and empirical
evaluation.

A model change can then be automatically checked against these requirements.
      `
    },

    {
      title: "15. Continuous Evaluation",
      content: `
Evaluation should continue after deployment.

New production examples
        |
        v
Evaluation Dataset
        |
        v
Periodic Evaluation
        |
        v
Quality Dashboard
        |
        v
Model / Prompt Improvement

This creates a feedback loop.
      `
    },

    {
      title: "16. Quality Engineering Mindset",
      content: `
Quality should be treated as an engineering system rather than a final manual
inspection.

A mature process includes:

Define
  |
Measure
  |
Test
  |
Compare
  |
Improve
  |
Monitor
  |
Repeat

The objective is controlled improvement rather than assuming that the newest
model is automatically better.
      `
    }
  ],

  architecture: {
    title: "LLM Evaluation Pipeline",
    diagram: `
                 Test Dataset
                     |
          +----------+----------+
          |          |          |
       Normal      Edge     Adversarial
          |          |          |
          +----------+----------+
                     |
                     v
                LLM Application
                     |
                     v
               Evaluation Layer
                     |
       +-------------+-------------+
       |             |             |
   Correctness   Grounding    Format/Safety
       |             |             |
       +-------------+-------------+
                     |
                     v
               Quality Report
                     |
                     v
              Regression Gate
                     |
              +------+------+
              |             |
            Pass          Fail
              |             |
           Deploy       Investigate
    `
  },

  codeExample: {
    title: "Simple Evaluation Runner",
    language: "typescript",
    code: `
type TestCase = {
  name: string;
  input: string;
  expectedKeywords: string[];
};

type EvaluationResult = {
  name: string;
  passed: boolean;
};

function evaluate(
  output: string,
  testCase: TestCase
): EvaluationResult {
  const normalized = output.toLowerCase();

  const passed = testCase.expectedKeywords.every(
    keyword => normalized.includes(keyword.toLowerCase())
  );

  return {
    name: testCase.name,
    passed
  };
}

const tests: TestCase[] = [
  {
    name: "basic networking question",
    input: "What is an IP address?",
    expectedKeywords: ["address"]
  },
  {
    name: "basic database question",
    input: "What is a database?",
    expectedKeywords: ["data"]
  }
];

function runEvaluation(
  outputs: Record<string, string>
): EvaluationResult[] {
  return tests.map(test =>
    evaluate(outputs[test.name] ?? "", test)
  );
}
`
  },

  formulas: [
    {
      name: "Precision",
      formula: "Precision = Relevant Retrieved / Retrieved",
      explanation: "Measures how much of the retrieved material is relevant."
    },
    {
      name: "Recall",
      formula: "Recall = Relevant Retrieved / Relevant Available",
      explanation: "Measures how much of the relevant material was retrieved."
    },
    {
      name: "F1 Score",
      formula: "F1 = 2 × Precision × Recall / (Precision + Recall)",
      explanation: "Balances precision and recall."
    },
    {
      name: "Pass Rate",
      formula: "PassRate = PassedTests / TotalTests",
      explanation: "Measures the proportion of test cases meeting the defined criteria."
    },
    {
      name: "Regression Rate",
      formula: "RegressionRate = RegressedCases / PreviouslyPassingCases",
      explanation: "Measures the proportion of previously successful cases that became failures."
    }
  ],

  comparisons: [
    {
      topic: "Unit Test vs Evaluation",
      unitTest: "Tests deterministic application logic",
      evaluation: "Measures model/application quality"
    },
    {
      topic: "Automated vs Human Evaluation",
      automated: "Scalable and repeatable",
      human: "Better for nuanced qualitative judgment"
    },
    {
      topic: "Precision vs Recall",
      precision: "Focuses on relevance of retrieved results",
      recall: "Focuses on finding relevant information"
    },
    {
      topic: "Offline vs Online Evaluation",
      offline: "Uses curated datasets before deployment",
      online: "Uses real application behavior after deployment"
    }
  ],

  exercises: [
    "Create a ten-case golden dataset for an AI tutor.",
    "Define evaluation criteria for answer quality.",
    "Calculate precision and recall for a retrieval example.",
    "Design regression tests for a changed prompt.",
    "Create five adversarial test cases.",
    "Design an evaluation dashboard."
  ],

  codingTasks: [
    "Implement a basic evaluation runner.",
    "Implement structured-output validation.",
    "Calculate precision, recall and F1.",
    "Create a regression comparison utility.",
    "Build a simple test-result report."
  ],

  architectureTasks: [
    "Design an offline evaluation pipeline.",
    "Design continuous evaluation for a production AI assistant.",
    "Design an evaluation system for a RAG application.",
    "Design a quality gate that blocks deployment after severe regression."
  ],

  interviewQuestions: [
    "Why is LLM testing different from traditional testing?",
    "What is a golden dataset?",
    "What is regression testing for prompts?",
    "What is precision?",
    "What is recall?",
    "What is LLM-as-a-judge?",
    "Why should human evaluation still be used?",
    "What is adversarial testing?",
    "How should structured outputs be tested?"
  ],

  commonMistakes: [
    "Testing only happy-path examples",
    "Using exact string equality for every LLM test",
    "Not maintaining regression datasets",
    "Ignoring retrieval quality",
    "Relying on one evaluation metric",
    "Assuming automated judges are always correct",
    "Ignoring adversarial inputs",
    "Deploying model changes without comparison"
  ],

  summary: [
    "LLM applications require multiple testing layers.",
    "Golden datasets provide repeatable evaluation.",
    "RAG requires separate retrieval and generation evaluation.",
    "Regression testing protects against quality degradation.",
    "Automated and human evaluation complement each other.",
    "Adversarial testing reveals weaknesses before deployment.",
    "Continuous evaluation creates an engineering feedback loop."
  ],

  keyTakeaways: [
    "Treat evaluation as an ongoing engineering process.",
    "Test deterministic code with traditional tests.",
    "Use representative datasets for model evaluation.",
    "Measure retrieval and generation separately.",
    "Maintain regression cases.",
    "Combine automated metrics with human judgment where appropriate.",
    "Never assume a new model or prompt is automatically better."
  ]
};

export default lesson8;