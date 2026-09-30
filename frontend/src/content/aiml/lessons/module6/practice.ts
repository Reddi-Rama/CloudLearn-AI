const practice = {
  id: "module06-practice",
  title: "AI Project Lifecycle Practice",

  content: `
# Module 06 Practice — AI Project Lifecycle

## Practice Objective

Use the complete AI project lifecycle to analyze a realistic AI problem from initial definition through deployment and monitoring.

## Activity 1 — Define the Problem

Choose a real-world problem that could benefit from AI.

Write:

- Problem statement.
- Target users.
- Expected input.
- Expected output.
- Why AI is appropriate.
- Constraints.

## Activity 2 — Formulate the AI Task

Identify whether the problem is:

- Classification.
- Regression.
- Clustering.
- Recommendation.
- Forecasting.
- Computer vision.
- Natural language processing.

Explain why the selected formulation is appropriate.

## Activity 3 — Design the Dataset

Specify:

- Data sources.
- Required features.
- Target variable.
- Data format.
- Expected dataset size.
- Data quality requirements.

## Activity 4 — Data Preparation

Describe how you would:

- Remove invalid records.
- Handle missing values.
- Encode categorical features.
- Scale numerical features when appropriate.
- Detect outliers.
- Split training and evaluation data.

## Activity 5 — Baseline Model

Choose a simple baseline model.

Explain:

- Why it is suitable.
- What inputs it requires.
- What output it produces.
- Which metric you would use.

## Activity 6 — Evaluation

Design an evaluation strategy.

For classification consider:

- Accuracy.
- Precision.
- Recall.
- F1-score.

For regression consider:

- MAE.
- MSE.
- RMSE.
- R².

Explain why your selected metric matches the problem.

## Activity 7 — Error Analysis

Suppose your model produces incorrect predictions.

Investigate:

- Which examples fail?
- Are some classes harder?
- Is the dataset unbalanced?
- Are important features missing?
- Is there possible data leakage?
- Is the model too simple or too complex?

## Activity 8 — Experimentation

Design three controlled experiments.

For every experiment specify:

- Hypothesis.
- Variable being changed.
- Evaluation metric.
- Expected result.
- Actual result.
- Conclusion.

## Activity 9 — Deployment

Describe how your model could be deployed.

Consider:

- API.
- Application.
- Model storage.
- Input validation.
- Authentication.
- Logging.
- Error handling.

## Activity 10 — Monitoring

After deployment, decide what should be monitored.

Examples:

- Prediction quality.
- Latency.
- Error rate.
- Data distribution.
- Model drift.
- Resource usage.

## Final Practice Challenge

Design a complete AI workflow:

\`\`\`text
Problem
 ↓
Data
 ↓
Preparation
 ↓
Baseline
 ↓
Training
 ↓
Evaluation
 ↓
Error Analysis
 ↓
Experimentation
 ↓
Deployment
 ↓
Monitoring
 ↓
Improvement
\`\`\`

### Expected Outcome

The final solution should demonstrate that an AI project is a complete engineering lifecycle rather than only a model-training step.
`,
};

export default practice;