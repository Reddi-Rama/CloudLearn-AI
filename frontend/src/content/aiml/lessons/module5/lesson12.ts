const lesson12 = {
  title: "From Data to a Complete Machine Learning Pipeline",

  content: `
# From Data to a Complete Machine Learning Pipeline

## What You Will Learn

Individual machine-learning concepts become much more useful when they are connected into a complete workflow.

A real ML system does not simply:

Load Data → Train Model

Instead, it usually involves several stages.

The complete pipeline is:

Problem Definition
       ↓
Data Collection
       ↓
Data Preparation
       ↓
Feature / Target Definition
       ↓
Train-Test Split
       ↓
Baseline
       ↓
Model Training
       ↓
Prediction
       ↓
Evaluation
       ↓
Error Analysis
       ↓
Improvement

This lesson brings together the major concepts from Module 05.

You will learn:

- What an ML pipeline is
- Problem definition
- Data collection
- Data preparation
- Features
- Target
- Train-test split
- Baseline
- Model training
- Prediction
- Evaluation
- Error analysis
- Improvement
- Iterative ML development
- Mathematical intuition
- Pandas implementation
- scikit-learn implementation
- Real-world pipeline thinking

---

# 1. What Is an ML Pipeline?

An ML pipeline is a sequence of connected stages that transforms a real-world problem into a trained and evaluated machine-learning system.

A simplified pipeline is:

Problem
    ↓
Data
    ↓
Features + Target
    ↓
Training
    ↓
Prediction
    ↓
Evaluation
    ↓
Improvement

The important point is:

Machine learning is a process.

It is not just a single algorithm.

---

# 2. Complete Pipeline Overview

A practical pipeline can be represented as:

Problem Definition
       ↓
Data Collection
       ↓
Data Validation
       ↓
Data Preparation
       ↓
Feature / Target Definition
       ↓
Train-Test Split
       ↓
Baseline
       ↓
Model Training
       ↓
Prediction
       ↓
Evaluation
       ↓
Error Analysis
       ↓
Improvement

Each stage answers a different question.

---

# 3. Step 1 — Define the Problem

Before selecting an algorithm, define what the system must predict.

Example:

Predict whether a student is likely to pass based on academic activity.

Now define:

Inputs:

- Study Hours
- Attendance
- Assignment Completion

Output:

Pass / Fail

This converts a real-world question into a machine-learning problem.

---

# 4. Why Problem Definition Comes First

Suppose someone says:

"Build an AI system for education."

That is not a sufficiently precise machine-learning problem.

We need to know:

What should be predicted?

What information is available?

When should the prediction be made?

How will success be measured?

A better problem statement is:

"Predict whether a student is likely to pass based on study hours, attendance, and assignment completion information available before the final examination."

This gives the model a clear objective.

---

# 5. Step 2 — Collect Data

Once the problem is defined, identify the data required.

Possible sources include:

- Databases
- CSV files
- APIs
- Application logs
- Sensors
- Transaction systems
- User interactions

For our example, suppose we have:

Study Hours

Attendance

Assignments

Passed

The goal is to use the first three columns to predict the last one.

---

# 6. Step 3 — Prepare the Data

Suppose we have:

Study Hours | Attendance | Assignments | Passed

5 | 90 | 8 | 1

2 | 65 | 4 | 0

7 | 95 | 10 | 1

3 | 70 | 5 | 0

The input variables are features.

The output variable is the target.

Before training, inspect:

- Missing values
- Invalid values
- Data types
- Duplicates
- Unexpected ranges
- Target consistency

---

# 7. Data Validation

Data validation asks:

Is the dataset suitable for the defined problem?

For example:

Attendance = 150

may be invalid if attendance is represented as a percentage.

Study Hours = -10

would also require investigation.

The model should not be expected to automatically correct every data problem.

Therefore:

Raw Data
    ↓
Validation
    ↓
Prepared Data
    ↓
Model

---

# 8. Step 4 — Separate Features and Target

Using Pandas:

Python:

import pandas as pd

data = pd.DataFrame({
    "study_hours": [
        5,
        2,
        7,
        3,
        6,
        1
    ],

    "attendance": [
        90,
        65,
        95,
        70,
        88,
        55
    ],

    "assignments": [
        8,
        4,
        10,
        5,
        9,
        2
    ],

    "passed": [
        1,
        0,
        1,
        0,
        1,
        0
    ]
})

X = data[
    [
        "study_hours",
        "attendance",
        "assignments"
    ]
]

y = data[
    "passed"
]

Here:

X = features

y = target

---

# 9. Mathematical Representation

For our classification problem:

X =
[
  study_hours,
  attendance,
  assignments
]

and:

y ∈ {0,1}

where:

0 = Not Passed

1 = Passed

The model attempts to learn:

y_hat = f_theta(X)

where:

theta

represents learned model parameters.

---

# 10. Step 5 — Split the Data

We should not evaluate a model only on examples it already used for learning.

Use:

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.3,
    random_state=42
)

The training set is used to learn.

The test set is held aside for evaluation.

---

# 11. Training and Test Data

The split can be represented as:

Complete Dataset
       ↓
   ┌───┴───┐
   ↓       ↓
Training   Test
Data       Data
   ↓       ↓
 Learn   Evaluate

The model should learn only from:

Training Data

The final performance estimate comes from:

Test Data

---

# 12. Why Do We Split Data?

Suppose the model sees:

X

and:

y

for every example.

Then we evaluate on the same examples.

The model may perform extremely well because the examples are familiar.

But our actual goal is:

Predict new observations.

Therefore:

Training Performance

is not enough.

We need:

Held-Out Performance

---

# 13. Step 6 — Establish a Baseline

A baseline is a simple reference solution.

For a binary classification problem, a simple baseline might always predict the majority class.

Why?

Because we need to know whether our machine-learning model actually provides useful improvement.

Baseline

↓

Simple Reference

ML Model

↓

More Sophisticated Prediction

Compare Results

A complex model is not automatically valuable if it cannot beat a reasonable baseline.

---

# 14. Majority-Class Baseline

Suppose:

Class 0 = 60%

Class 1 = 40%

A simple baseline can always predict:

Class 0

Then the baseline accuracy on similar class-distributed data may be around:

60%

This provides a reference.

The actual evaluation depends on the test-set distribution.

---

# 15. Implementing a Baseline

Python:

majority_class = y_train.mode()[0]

baseline_predictions = [
    majority_class
] * len(y_test)

print(
    "Baseline class:",
    majority_class
)

The baseline uses:

y_train

to identify the majority class.

It does not use:

y_test

to construct its prediction rule.

---

# 16. Step 7 — Train a Model

For a simple classification example:

Python:

from sklearn.linear_model import LogisticRegression

model = LogisticRegression()

model.fit(
    X_train,
    y_train
)

The model learns relationships between:

Features

and:

Target

The learned parameters define how the model transforms input features into predictions.

---

# 17. What Is Logistic Regression Doing?

For binary classification, Logistic Regression can transform a weighted input score into a probability-like output.

A simplified form is:

z = w^T x + b

Then:

P(y = 1 | x)

can be represented using a sigmoid function:

sigma(z)
=
1 /
(
1 + e^(-z)
)

Therefore:

Input Features
      ↓
Weighted Score
      ↓
Sigmoid
      ↓
Probability
      ↓
Class Decision

This gives mathematical intuition for the classifier.

---

# 18. The Sigmoid Function

The sigmoid function is:

sigma(z)
=
1 /
(
1 + e^(-z)
)

Important behavior:

If:

z

is very positive,

sigma(z)

approaches:

1

If:

z

is very negative,

sigma(z)

approaches:

0

If:

z = 0

then:

sigma(0) = 0.5

The function converts an unrestricted score into a value between:

0

and:

1

---

# 19. Step 8 — Generate Predictions

Use:

Python:

predictions = model.predict(
    X_test
)

print(
    predictions
)

The model now produces predictions for previously unseen test examples.

This corresponds to:

X_test

↓

Trained Model

↓

y_hat

---

# 20. Probability Predictions

For a classification model that supports probabilities:

probabilities = model.predict_proba(
    X_test
)

print(
    probabilities
)

Each row can represent estimated class probabilities.

For binary classification:

[Probability of Class 0,
 Probability of Class 1]

This provides more information than a class label alone.

---

# 21. Step 9 — Evaluate the Model

Use:

from sklearn.metrics import accuracy_score

accuracy = accuracy_score(
    y_test,
    predictions
)

print(
    "Accuracy:",
    accuracy
)

Accuracy is:

Correct Predictions
/
Total Predictions

However:

Accuracy is not always the correct metric.

Depending on the problem, we may use:

- Precision
- Recall
- F1-score
- MAE
- RMSE
- Other task-specific metrics

---

# 22. Why Metric Selection Matters

Suppose:

95% of transactions are normal.

5% are fraudulent.

A model predicts:

Normal

for every transaction.

Accuracy:

95%

But:

Fraud Recall:

0%

Therefore a high accuracy score can still represent a poor fraud detector.

The evaluation metric must reflect the real objective.

---

# 23. Step 10 — Analyze Errors

Create a results table:

Python:

results = X_test.copy()

results["actual"] = y_test

results["predicted"] = predictions

results["correct"] = (
    results["actual"]
    ==
    results["predicted"]
)

print(
    results
)

Now we can inspect incorrect predictions.

---

# 24. Extracting Errors

Python:

errors = results[
    results["correct"] == False
]

print(
    errors
)

This allows us to ask:

What types of examples does the model struggle with?

Possible reasons include:

- insufficient data
- noisy data
- incorrect labels
- weak features
- unusual cases
- distribution differences
- model limitations

---

# 25. Error Analysis Is More Than Counting Mistakes

Suppose the model has:

90% accuracy.

That tells us:

How often it is correct.

It does not tell us:

Why it fails.

Suppose all incorrect predictions occur for:

Students with very low attendance.

That could suggest the model needs more information about:

- Engagement
- Coursework
- Prior performance

Error analysis helps generate the next experiment.

---

# 26. Step 11 — Improve

Suppose the model performs poorly.

Possible actions include:

- Improving data quality
- Collecting more representative examples
- Improving feature definitions
- Changing the model
- Tuning parameters
- Addressing class imbalance
- Reducing leakage
- Changing the evaluation strategy

The process becomes:

Train
 ↓
Evaluate
 ↓
Analyze
 ↓
Improve
 ↓
Train Again

Machine learning is therefore an iterative process.

---

# 27. Mathematical Learning Loop

The overall learning process can be represented as:

X
 ↓
f_theta(X)
 ↓
y_hat
 ↓
Compare with y
 ↓
Loss / Metric
 ↓
Update or Select
 ↓
Improved Model

This connects:

Features

Targets

Predictions

Loss

Optimization

Evaluation

---

# 28. Complete Example

Python:

import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LogisticRegression

from sklearn.metrics import accuracy_score

data = pd.DataFrame({
    "study_hours": [
        5,
        2,
        7,
        3,
        6,
        1,
        8,
        4
    ],

    "attendance": [
        90,
        65,
        95,
        70,
        88,
        55,
        98,
        75
    ],

    "assignments": [
        8,
        4,
        10,
        5,
        9,
        2,
        10,
        6
    ],

    "passed": [
        1,
        0,
        1,
        0,
        1,
        0,
        1,
        0
    ]
})

X = data[
    [
        "study_hours",
        "attendance",
        "assignments"
    ]
]

y = data[
    "passed"
]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)

model = LogisticRegression()

model.fit(
    X_train,
    y_train
)

predictions = model.predict(
    X_test
)

accuracy = accuracy_score(
    y_test,
    predictions
)

print(
    "Predictions:",
    predictions
)

print(
    "Actual:",
    y_test.values
)

print(
    "Accuracy:",
    accuracy
)

This small program demonstrates the complete core cycle:

Data
→ Features
→ Split
→ Train
→ Predict
→ Evaluate

---

# 29. Adding Error Analysis

Extend the program:

Python:

results = X_test.copy()

results["actual"] = y_test.values

results["predicted"] = predictions

results["correct"] = (
    results["actual"]
    ==
    results["predicted"]
)

print(
    "\\nResults:"
)

print(
    results
)

errors = results[
    results["correct"] == False
]

print(
    "\\nErrors:"
)

print(
    errors
)

This provides a basic model evaluation report.

---

# 30. From Notebook to Real AI System

In professional environments, the pipeline eventually becomes more structured:

Data Source
    ↓
Data Validation
    ↓
Preprocessing
    ↓
Feature Preparation
    ↓
Training
    ↓
Evaluation
    ↓
Model Selection
    ↓
Deployment
    ↓
Monitoring

The early learning workflow therefore becomes the foundation for larger AI systems.

---

# 31. Why Deployment Changes the Problem

A model can perform well during development and still have problems after deployment.

Possible reasons:

- User behavior changes
- Data distribution changes
- Sensors change
- Business rules change
- New categories appear
- Data quality changes

Therefore a production ML system may require:

Monitoring

and:

Periodic reevaluation.

---

# 32. Real-World Example — Fraud Detection

Consider a bank fraud-detection system.

Transaction
    ↓
Features
    ↓
ML Model
    ↓
Fraud Probability
    ↓
Decision

But the system does not end at prediction.

The bank must also:

- Evaluate false positives
- Detect missed fraud
- Monitor changing transaction patterns
- Update the model when necessary
- Protect customer data
- Verify that the system behaves reliably

This is why machine learning is both:

A modeling problem

and:

An engineering workflow.

---

# 33. Mathematical Model of Prediction

For a classification problem:

z = w^T x + b

Then:

p = sigma(z)

where:

sigma(z)
=
1 / (
1 + e^(-z)
)

A decision rule can then use a threshold.

For example:

if:

p >= 0.5

predict:

Class 1

otherwise:

Class 0

The threshold is a modeling choice and can be changed depending on the problem.

---

# 34. Complete Conceptual Pipeline

A complete machine-learning pipeline can therefore be written as:

Problem
    ↓
Dataset
    ↓
Features + Target
    ↓
Train / Test
    ↓
Baseline
    ↓
Model
    ↓
Prediction
    ↓
Metric
    ↓
Error Analysis
    ↓
Improvement
    ↓
Re-evaluation

This pipeline should become a mental model for future machine-learning work.

---

# 35. Why Baselines Are Important in the Pipeline

Suppose:

Baseline Accuracy = 60%

Model Accuracy = 61%

The model improved only slightly.

Now suppose:

Baseline Accuracy = 60%

Model Accuracy = 90%

The improvement is much more substantial.

The baseline provides context for interpreting model performance.

---

# 36. Why the Test Set Should Be Protected

Suppose we repeatedly look at:

Test Accuracy

and adjust the model until the number improves.

The test set is now indirectly influencing model development.

A cleaner workflow is:

Training Data
     ↓
Validation / Development
     ↓
Model Selection
     ↓
Final Test Evaluation

This keeps the final test evaluation more independent.

---

# 37. Data Leakage in a Pipeline

Leakage can occur when information that should not be available to the model enters the training process.

Example:

Target:

Whether the customer will cancel.

Feature:

Cancellation Date

If cancellation date is only known after the cancellation occurs, using it as a feature would leak future information.

Therefore:

Prediction-Time Information

must always be considered.

---

# 38. Pipeline Thinking

Whenever building an ML project, ask:

1. What problem am I solving?
2. What data do I have?
3. What should be predicted?
4. Which features are valid?
5. When are those features available?
6. How will the data be split?
7. What baseline should I use?
8. Which models should I compare?
9. Which metrics matter?
10. Where does the model fail?
11. What should I improve?
12. How will I know the improvement worked?

These questions turn ML into a disciplined process.

---

# 39. Practice

Build your own small ML pipeline:

Choose a prediction problem.

Create or load a dataset.

Identify features.

Identify the target.

Split the data.

Create a baseline.

Train a model.

Generate predictions.

Evaluate the model.

Inspect incorrect predictions.

Identify possible improvements.

Retrain and compare.

Document the workflow.

---

# 40. Challenge — Mini ML Workflow

Create a complete Python program that:

1. Loads a dataset using Pandas.
2. Separates features and target.
3. Creates training and testing data.
4. Trains a scikit-learn model.
5. Generates predictions.
6. Calculates an appropriate metric.
7. Displays incorrect predictions.
8. Explains one possible model improvement.

Document the workflow as:

Problem
   ↓
Data
   ↓
Features + Target
   ↓
Training
   ↓
Prediction
   ↓
Evaluation
   ↓
Error Analysis
   ↓
Improvement

---

# 41. Practical Extension

After completing the basic workflow, improve it.

Possible improvements:

## Improvement 1 — Better Features

Add useful information.

## Improvement 2 — Better Data

Collect more representative observations.

## Improvement 3 — Better Model

Compare additional algorithms.

## Improvement 4 — Better Evaluation

Use more appropriate metrics.

## Improvement 5 — Better Error Analysis

Group errors by meaningful segments.

## Improvement 6 — Better Reproducibility

Record:

- Dataset
- Random seed
- Features
- Target
- Model
- Parameters
- Metrics

---

# 42. Example of Iterative Development

Version 1:

Baseline

↓

Version 2:

Logistic Regression

↓

Evaluate

↓

Find errors

↓

Improve features

↓

Version 3:

New model

↓

Evaluate again

This demonstrates:

Measure

→

Understand

→

Improve

→

Re-evaluate

---

# 43. Why Machine Learning Is Iterative

A first model may reveal that:

- Features are insufficient
- Data is noisy
- The target is poorly defined
- Classes are imbalanced
- The model is too simple
- The model is too complex

Therefore the first model is often not the final model.

A useful ML workflow learns from its own evaluation results.

---

# 44. Practical Report Structure

A final ML project report should include:

## Problem

What are we predicting?

## Data

What data is available?

## Features

What information is used?

## Target

What is predicted?

## Split

How was the data divided?

## Baseline

What simple reference was used?

## Model

What candidate model was trained?

## Evaluation

Which metric was used?

## Errors

Where did the model fail?

## Improvement

What was changed?

## Conclusion

What did the experiment demonstrate?

---

# 45. Real AI System Perspective

A complete machine-learning system can eventually become:

Data Source
    ↓
Validation
    ↓
Feature Pipeline
    ↓
Trained Model
    ↓
Prediction Service
    ↓
Evaluation
    ↓
Monitoring
    ↓
Retraining

The current module provides the mental model needed to understand these later systems.

---

# Quick Check

What is an ML pipeline?

Why should the problem be defined before choosing a model?

What are features?

What is the target?

Why do we split data?

What is a baseline?

What does:

.fit()

do?

What does:

.predict()

do?

Why is evaluation necessary?

What is error analysis?

Why is machine learning iterative?

Why is ML more than simply training a model?

What is data leakage?

Why must features respect prediction time?

---

# Lesson Summary

A machine-learning system is a complete workflow rather than a single algorithm.

The core process is:

Problem
→
Data
→
Features
→
Training
→
Prediction
→
Evaluation
→
Improvement

A good ML pipeline also includes:

- Problem definition
- Data validation
- Target definition
- Data splitting
- Baseline comparison
- Error analysis
- Model selection
- Reproducibility

The mathematical structure is:

y_hat = f_theta(X)

The learning process is:

Data
→
Prediction
→
Loss
→
Parameter Update
→
Improved Model

The practical engineering loop is:

Train
→
Evaluate
→
Analyze
→
Improve
→
Re-evaluate

The central principle is:

Machine learning is not simply:

Load Data → Train Model

It is:

Problem
→
Data
→
Features
→
Training
→
Prediction
→
Evaluation
→
Error Analysis
→
Improvement

This pipeline becomes the foundation for more advanced machine-learning algorithms and production AI systems.
`,
};

export default lesson12;