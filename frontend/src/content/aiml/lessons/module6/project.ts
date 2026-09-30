const project = {
  id: "module06-project",
  title: "AI Project Lifecycle — End-to-End AI Solution",

  content: `
# Module 06 Project — AI Project Lifecycle

## Project Objective

Build and document a complete AI solution by applying the AI project lifecycle from problem definition through experimentation, evaluation, deployment planning, and monitoring.

## Project Requirements

Your project must contain the following stages.

## 1. Problem Definition

Clearly describe:

- The real-world problem.
- Target users.
- Business or practical value.
- Why the problem requires an intelligent solution.

## 2. AI Problem Formulation

Convert the real-world problem into an AI problem.

Specify:

- Inputs.
- Outputs.
- Target variable.
- AI task.
- Constraints.
- Success criteria.

## 3. Dataset Design

Document:

- Data sources.
- Features.
- Labels.
- Data format.
- Approximate dataset size.
- Data quality requirements.

## 4. Data Preparation

Implement or describe:

- Data cleaning.
- Missing-value handling.
- Feature preparation.
- Encoding.
- Scaling where appropriate.
- Train/test splitting.

## 5. Baseline Model

Create a simple baseline.

Document:

- Algorithm.
- Input features.
- Target.
- Training method.
- Evaluation metric.

The baseline provides a reference point for later experiments.

## 6. Candidate Model

Select a more suitable model.

Explain:

- Why it was selected.
- What assumptions it makes.
- How it differs from the baseline.
- Expected advantages.

## 7. Evaluation

Evaluate the model using appropriate metrics.

Document:

- Metric definitions.
- Evaluation results.
- Training performance.
- Test performance.
- Important errors.

## 8. Error Analysis

Investigate model failures.

Questions to answer:

- Which examples were incorrectly predicted?
- Are errors concentrated in particular groups?
- Are there data-quality problems?
- Are important features missing?
- Is the model underfitting?
- Is the model overfitting?

## 9. Experimentation

Perform controlled experiments.

Example:

\`\`\`text
Experiment 1
Baseline model

Experiment 2
Additional feature

Experiment 3
Different preprocessing

Experiment 4
Different model
\`\`\`

For every experiment record:

- Hypothesis.
- Configuration.
- Metric.
- Result.
- Interpretation.

## 10. Deployment Design

Design a simple deployment architecture.

Example:

\`\`\`text
User
 ↓
Frontend
 ↓
Backend API
 ↓
Validation
 ↓
AI Model
 ↓
Prediction
 ↓
Response
\`\`\`

Describe the responsibility of each component.

## 11. Monitoring

Define what should be monitored after deployment.

Consider:

- API availability.
- Response time.
- Prediction errors.
- Input distribution.
- Model drift.
- Data drift.
- Resource consumption.

## 12. Documentation

Your final project documentation should contain:

1. Problem statement.
2. AI formulation.
3. Dataset description.
4. Data preparation.
5. Model selection.
6. Training process.
7. Evaluation.
8. Error analysis.
9. Experiments.
10. Deployment design.
11. Monitoring strategy.
12. Future improvements.

## Final Deliverable

The final project should demonstrate the complete transformation:

\`\`\`text
Real-world Problem
        ↓
AI Formulation
        ↓
Data
        ↓
Preparation
        ↓
Baseline
        ↓
Model
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
Continuous Improvement
\`\`\`

## Project Success Criteria

A successful project should demonstrate:

- Clear problem formulation.
- Appropriate data.
- Logical preprocessing.
- Reasonable model selection.
- Meaningful evaluation.
- Evidence-based error analysis.
- Controlled experimentation.
- Practical deployment planning.
- Monitoring strategy.
- Clear technical documentation.

## Final Reflection

Answer these questions:

1. What problem did you solve?
2. Why was AI appropriate?
3. What data was required?
4. What model did you select?
5. How did you evaluate it?
6. What were the major errors?
7. What experiments improved the system?
8. How would you deploy it?
9. How would you monitor it?
10. What would you improve in the next version?
`,
};

export default project;