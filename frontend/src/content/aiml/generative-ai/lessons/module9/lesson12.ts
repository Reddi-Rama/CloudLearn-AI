const lesson12 = {
  id: "lesson12",
  moduleId: "module9",
  lessonNumber: 12,
  title: "Data, Feedback & Continuous Improvement",
  subtitle: "Turning application data and user feedback into systematic LLM improvement",
  duration: "70 min",
  difficulty: "Advanced",

  overview: `
An LLM application should not remain static after deployment.

Real users generate new questions, failure cases, edge cases and feedback.
These signals can be converted into evaluation datasets and engineering
improvements.

A mature LLM application therefore creates a continuous improvement loop:

Production Usage
      |
      v
Observability
      |
      v
Feedback
      |
      v
Data Curation
      |
      v
Evaluation
      |
      v
Improvement
      |
      v
Deployment
      |
      +------> Production

This lesson explains how to collect useful feedback, construct datasets,
identify failure patterns, curate evaluation examples, protect user privacy,
measure improvements and safely introduce changes.

The focus is not simply collecting more data.

The goal is collecting useful, representative and properly governed data.
`,

  objectives: [
    "Understand continuous improvement for LLM applications",
    "Identify useful sources of production feedback",
    "Collect explicit and implicit feedback",
    "Convert production failures into evaluation cases",
    "Design high-quality datasets",
    "Understand data curation and labeling",
    "Protect privacy during feedback collection",
    "Use feedback for prompt and system improvement",
    "Measure whether changes actually improve quality",
    "Design a continuous improvement lifecycle"
  ],

  sections: [
    {
      title: "1. Why Continuous Improvement Matters",
      content: `
A deployed LLM application operates in situations that developers cannot
predict completely.

New users produce:

- New questions
- New terminology
- New edge cases
- New failure modes
- New workflows

Therefore:

Initial Evaluation
       |
       v
Production
       |
       v
New Evidence
       |
       v
Improvement
       |
       v
New Evaluation

Production becomes a source of learning for the engineering process.
      `
    },

    {
      title: "2. Sources of Feedback",
      content: `
Feedback can come from:

Explicit feedback
- Thumbs up
- Thumbs down
- Rating
- Report issue
- Written comment

Implicit feedback
- User retry
- User correction
- Human escalation
- Abandoned interaction
- Repeated question

Operational feedback
- Tool failure
- Retrieval failure
- Schema failure
- Timeout
- Safety event

Each source reveals different information.
      `
    },

    {
      title: "3. Explicit Feedback",
      content: `
A simple interface may provide:

Was this answer useful?

Yes
No

The event could contain:

{
  "requestId": "req-123",
  "rating": "negative",
  "timestamp": "...",
  "category": "incorrect"
}

The application should avoid collecting unnecessary personal information.
      `
    },

    {
      title: "4. Implicit Feedback",
      content: `
Users do not always provide explicit ratings.

Their behavior can still provide signals.

Example:

User asks:
"What is a database?"

Assistant answers.

User immediately asks:
"Explain that more simply."

This may indicate that the first answer did not match the user's needs.

Implicit feedback should be treated as evidence, not automatic proof of failure.
      `
    },

    {
      title: "5. Feedback Taxonomy",
      content: `
Raw feedback becomes more useful when categorized.

Possible categories:

Incorrect
Incomplete
Irrelevant
Too complex
Too simple
Unsafe
Ungrounded
Formatting problem
Tool failure
Retrieval failure
Latency problem

A taxonomy makes patterns easier to analyze.
      `
    },

    {
      title: "6. Failure Analysis",
      content: `
Suppose 1,000 requests are reviewed.

Failures:

200 retrieval failures
120 formatting failures
80 hallucination-related failures
50 tool failures

The engineering team can prioritize investigation based on evidence.

A failure should be classified before deciding what change to make.
      `
    },

    {
      title: "7. From Production Failure to Test Case",
      content: `
A valuable production failure can become a regression test.

Production failure
       |
       v
Remove unnecessary sensitive data
       |
       v
Generalize the scenario
       |
       v
Create test case
       |
       v
Add to evaluation dataset
       |
       v
Prevent regression

This is one of the most useful feedback loops in LLM engineering.
      `
    },

    {
      title: "8. Dataset Curation",
      content: `
A production dataset should not simply contain every conversation.

Curation may include:

- Removing duplicates
- Removing irrelevant cases
- Removing sensitive information
- Correcting labels
- Balancing categories
- Adding difficult cases
- Verifying reference answers

Dataset quality directly influences evaluation quality.
      `
    },

    {
      title: "9. Data Labeling",
      content: `
Labels may describe:

Intent
Topic
Correctness
Safety
Relevance
Groundedness
Priority
Expected behavior

For example:

{
  "question": "...",
  "expectedCategory": "networking",
  "quality": "correct",
  "difficulty": "medium"
}

Labels should have clear definitions so different evaluators interpret them
consistently.
      `
    },

    {
      title: "10. Privacy and Data Governance",
      content: `
Production feedback may contain sensitive information.

Before storing data:

1. Determine whether it is necessary.
2. Remove unnecessary identifiers.
3. Apply access controls.
4. Define retention policies.
5. Restrict dataset access.
6. Track dataset versions.

A useful principle is:

Collect only what is required for the engineering objective.
      `
    },

    {
      title: "11. Dataset Splitting",
      content: `
Datasets may be divided into:

Development
Evaluation
Regression
Adversarial
Production Monitoring

For example:

Development Set
     |
     v
Used while improving prompts

Evaluation Set
     |
     v
Used to compare versions

Regression Set
     |
     v
Used to protect known-good behavior

Keeping evaluation data controlled reduces the risk of optimizing directly
against the same examples repeatedly.
      `
    },

    {
      title: "12. Avoiding Evaluation Leakage",
      content: `
If engineers repeatedly optimize against the exact same evaluation examples,
the system may appear to improve without becoming more generally useful.

Therefore evaluation datasets should be managed carefully.

Useful approaches include:

- Hidden test cases
- Periodically refreshed datasets
- Separate development and evaluation data
- New production-derived examples
      `
    },

    {
      title: "13. Improvement Strategies",
      content: `
A failure can have many possible causes.

Possible improvements:

Prompt change
Context change
Retrieval change
Tool change
Model change
Validation change
UI change
Workflow change

Do not automatically assume the model must be changed.

Often a deterministic application improvement can solve the problem more
reliably.
      `
    },

    {
      title: "14. Measuring Improvement",
      content: `
Suppose:

Version A accuracy = 0.84
Version B accuracy = 0.89

Absolute improvement:

0.89 - 0.84 = 0.05

or:

5 percentage points

Relative improvement:

(0.89 - 0.84) / 0.84 ≈ 5.95%

Both measurements describe improvement differently.
      `
    },

    {
      title: "15. Controlled Experiments",
      content: `
When changing an LLM application, isolate variables where possible.

Example:

Version A:
Prompt v3 + Model A + Retriever v2

Version B:
Prompt v4 + Model A + Retriever v2

This makes it easier to attribute the change to the prompt.

If multiple components change simultaneously, diagnosis becomes harder.
      `
    },

    {
      title: "16. A/B Testing",
      content: `
An application may compare two versions.

Users
 |
 +----> Version A
 |
 +----> Version B
 |
 v
Measure
 |
 v
Compare

Metrics may include:

- Quality
- User satisfaction
- Completion rate
- Latency
- Cost
- Error rate

Experiments should use appropriate sampling and controls.
      `
    },

    {
      title: "17. Feedback Prioritization",
      content: `
Not every issue has the same importance.

A useful prioritization model considers:

Frequency
Impact
Severity
Confidence
Cost to fix

For example:

A rare issue causing serious harm may require more attention than a common
minor formatting problem.
      `
    },

    {
      title: "18. Continuous Improvement Loop",
      content: `
The complete lifecycle is:

Production
   |
   v
Observe
   |
   v
Collect Feedback
   |
   v
Classify Failures
   |
   v
Curate Data
   |
   v
Create Evaluation Cases
   |
   v
Change System
   |
   v
Evaluate
   |
   +---- Regression ----> Investigate
   |
   +---- Improvement ---> Deploy
   |
   v
Monitor Again
      `
    }
  ],

  architecture: {
    title: "Continuous LLM Improvement Architecture",
    diagram: `
                     Production Users
                           |
                           v
                    LLM Application
                           |
             +-------------+-------------+
             |             |             |
             v             v             v
          Logs          Feedback      Errors
             |             |             |
             +-------------+-------------+
                           |
                           v
                     Data Curation
                           |
                           v
                  Evaluation Dataset
                           |
                           v
                    Experimentation
                           |
                +----------+----------+
                |                     |
             Regression            Improvement
                |                     |
                +----------+----------+
                           |
                           v
                       Deployment
                           |
                           v
                       Production
                           |
                           +------------>
    `
  },

  codeExample: {
    title: "Recording Structured Feedback",
    language: "typescript",
    code: `
type Feedback = {
  requestId: string;
  rating: "positive" | "negative";
  category?: 
    | "incorrect"
    | "incomplete"
    | "irrelevant"
    | "formatting"
    | "other";
  comment?: string;
  timestamp: string;
};

function createFeedback(
  requestId: string,
  rating: Feedback["rating"],
  category?: Feedback["category"],
  comment?: string
): Feedback {
  return {
    requestId,
    rating,
    category,
    comment,
    timestamp: new Date().toISOString()
  };
}

const feedback = createFeedback(
  "req-123",
  "negative",
  "incomplete",
  "The answer missed an important step."
);

console.log(feedback);
`
  },

  formulas: [
    {
      name: "Pass Rate",
      formula: "PassRate = PassedCases / TotalCases",
      explanation: "Measures the percentage of evaluation cases that meet the required criteria."
    },
    {
      name: "Absolute Improvement",
      formula: "Δ = NewScore - OldScore",
      explanation: "Measures improvement in raw score units."
    },
    {
      name: "Relative Improvement",
      formula: "RelativeImprovement = (NewScore - OldScore) / OldScore",
      explanation: "Measures improvement relative to the original score."
    },
    {
      name: "Feedback Rate",
      formula: "FeedbackRate = FeedbackEvents / EligibleInteractions",
      explanation: "Measures how frequently users provide feedback."
    },
    {
      name: "Failure Rate",
      formula: "FailureRate = FailureCases / TotalCases",
      explanation: "Measures the proportion of interactions classified as failures."
    }
  ],

  comparisons: [
    {
      topic: "Explicit vs Implicit Feedback",
      explicit: "Direct user rating or report",
      implicit: "Behavioral signal inferred from interaction patterns"
    },
    {
      topic: "Development vs Evaluation Dataset",
      development: "Used during system improvement",
      evaluation: "Used to measure performance independently"
    },
    {
      topic: "Prompt Improvement vs Model Improvement",
      prompt: "Changes instructions or context construction",
      model: "Changes the underlying model capability"
    },
    {
      topic: "Offline Evaluation vs A/B Testing",
      offline: "Controlled comparison before broad deployment",
      ab: "Comparison using real application traffic"
    }
  ],

  exercises: [
    "Design a feedback taxonomy for an AI learning assistant.",
    "Convert five hypothetical production failures into regression tests.",
    "Design a privacy-aware feedback dataset.",
    "Calculate absolute and relative quality improvement.",
    "Design an A/B experiment for two prompt versions.",
    "Create a continuous improvement lifecycle."
  ],

  codingTasks: [
    "Implement a feedback event model.",
    "Create a feedback aggregation function.",
    "Calculate feedback and failure rates.",
    "Implement a regression dataset format.",
    "Create a simple version-comparison utility."
  ],

  architectureTasks: [
    "Design a production feedback pipeline.",
    "Design a privacy-aware evaluation-data pipeline.",
    "Design continuous improvement for a RAG application.",
    "Design a feedback loop for a customer-support AI."
  ],

  interviewQuestions: [
    "Why is continuous improvement important for LLM applications?",
    "What is explicit feedback?",
    "What is implicit feedback?",
    "How can production failures become regression tests?",
    "Why is dataset curation important?",
    "What is evaluation leakage?",
    "What is the difference between absolute and relative improvement?",
    "When should A/B testing be used?",
    "Why should privacy be considered during dataset creation?"
  ],

  commonMistakes: [
    "Collecting data without a clear purpose",
    "Storing unnecessary personal information",
    "Treating every user behavior as a definite failure",
    "Changing multiple components without controlled evaluation",
    "Using the evaluation dataset repeatedly for optimization",
    "Ignoring negative feedback",
    "Keeping poorly labeled datasets",
    "Deploying improvements without regression testing"
  ],

  summary: [
    "Production usage creates valuable evidence for improvement.",
    "Explicit and implicit feedback provide different signals.",
    "Production failures can become regression tests.",
    "Dataset curation is essential for trustworthy evaluation.",
    "Privacy and governance must be considered when collecting data.",
    "Changes should be measured using controlled evaluation.",
    "Continuous improvement connects production feedback with engineering."
  ],

  keyTakeaways: [
    "Treat production feedback as engineering evidence.",
    "Convert important failures into permanent test cases.",
    "Curate datasets instead of collecting data indiscriminately.",
    "Protect privacy throughout the feedback lifecycle.",
    "Separate development and evaluation data.",
    "Measure changes rather than assuming improvement.",
    "Build a continuous observe-evaluate-improve cycle."
  ]
};

export default lesson12;