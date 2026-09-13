const lesson = {
  lesson: "07",
  title: "Model Selection & Baseline Models",

  description: `
# Lesson 07 — Model Selection & Baseline Models

## What You Will Learn

In this lesson, you will learn:

- What model selection means.
- Why there is no universally best AI model.
- How the problem type influences model choice.
- What a baseline model is.
- Why simple models should often be tested first.
- How to establish a baseline using scikit-learn.
- How to compare a model against a simple reference.

---

## 1. What Is Model Selection?

After defining the problem and preparing the data, we need to select a suitable model.

Model selection means choosing an algorithm or model family that is appropriate for:

- The problem
- The available data
- The target
- Computational requirements
- Evaluation requirements

The process can be represented as:

\`\`\`
Problem
→ Data
→ Candidate Models
→ Evaluation
→ Model Selection
\`\`\`

---

## 2. Problem Type Influences Model Choice

Different tasks require different approaches.

### Regression

Output is numerical.

Example:

\`\`\`
House Features → Price
\`\`\`

Possible models:

- Linear Regression
- Decision Tree Regression
- Random Forest Regression

### Classification

Output is categorical.

Example:

\`\`\`
Email → Spam / Not Spam
\`\`\`

Possible models:

- Logistic Regression
- Decision Tree
- Random Forest
- Support Vector Machine

### Clustering

There is no predefined target label.

Example:

\`\`\`
Customer Data → Customer Groups
\`\`\`

Possible approaches:

- K-Means
- Hierarchical clustering

The appropriate algorithm depends on the actual problem.

---

## 3. Why Not Always Use the Most Advanced Model?

A more complicated model is not automatically better.

Suppose a simple model gives:

\`\`\`
Accuracy = 91%
\`\`\`

while a complicated model gives:

\`\`\`
Accuracy = 91.2%
\`\`\`

The additional complexity may not justify the tiny improvement.

We should consider:

- Performance
- Training time
- Prediction time
- Interpretability
- Maintenance
- Data requirements
- Computational resources

Therefore:

\`\`\`
Best Model ≠ Most Complex Model
\`\`\`

---

## 4. What Is a Baseline?

A baseline is a simple reference solution against which more advanced approaches can be compared.

Suppose we want to classify whether students need support.

If 80% of students in the training data do not need support, a simple baseline could always predict:

\`\`\`
Does Not Need Support
\`\`\`

It might achieve approximately 80% accuracy.

A machine-learning model should demonstrate meaningful improvement over this reference.

---

## 5. Why Baselines Matter

Without a baseline, a model's score has little context.

Suppose someone says:

\`\`\`
Our model has 85% accuracy.
\`\`\`

Is that good?

We do not know.

If the baseline is 60%, then 85% may be a significant improvement.

If the baseline is 90%, then the model may actually be worse.

Therefore:

\`\`\`
Model Performance should be interpreted relative to a baseline
\`\`\`

---

## 6. A Simple Regression Baseline

Suppose we want to predict house prices.

A simple baseline can predict the mean training price for every test example.

Mathematically:

\`\`\`
ŷ = mean(y_train)
\`\`\`

For example, if the average training price is:

\`\`\`
75
\`\`\`

then the baseline predicts:

\`\`\`
75
75
75
75
...
\`\`\`

for every test example.

This is not intended to be a sophisticated model.

It establishes a reference point.

---

## 7. Using scikit-learn

For regression:

\`\`\`python
from sklearn.dummy import DummyRegressor

baseline = DummyRegressor(
    strategy="mean"
)

baseline.fit(X_train, y_train)

predictions = baseline.predict(X_test)

print(predictions)
\`\`\`

The baseline can then be evaluated using the same metric as the actual model.

---

## 8. Classification Baseline

For classification, a simple baseline can predict the most frequent class.

\`\`\`python
from sklearn.dummy import DummyClassifier

baseline = DummyClassifier(
    strategy="most_frequent"
)

baseline.fit(X_train, y_train)

predictions = baseline.predict(X_test)
\`\`\`

This provides a simple reference.

---

## 9. Comparing Baseline and Model

Suppose:

\`\`\`
Baseline Accuracy → 75%
Model Accuracy    → 89%
\`\`\`

The model has demonstrated a substantial improvement over the baseline on that evaluation.

However, we still need to examine:

- Other metrics
- Generalization
- Errors
- Computational cost
- Practical usefulness

One comparison does not automatically prove that the model is ideal.

---

## 10. Practical Example

Consider student support prediction.

Problem:

\`\`\`
Predict:
Needs Support
\`\`\`

Features:

- Quiz Score
- Practice Score
- Attendance

Baseline:

\`\`\`
Always predict the most frequent class.
\`\`\`

Candidate Model:

\`\`\`
Logistic Regression
\`\`\`

The workflow becomes:

\`\`\`
Student Data
     ↓
Train/Test Split
     ↓
Baseline
     ↓
Logistic Regression
     ↓
Predictions
     ↓
Evaluation
     ↓
Compare
\`\`\`

### Python Example

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.dummy import DummyClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import numpy as np

X = np.array([
    [85, 90, 95],
    [60, 65, 80],
    [45, 40, 65],
    [90, 95, 98],
    [55, 50, 70],
    [75, 80, 85],
    [40, 45, 60],
    [88, 92, 96]
])

y = np.array([
    0, 0, 1, 0,
    1, 0, 1, 0
])

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)

# Baseline
baseline = DummyClassifier(
    strategy="most_frequent"
)

baseline.fit(X_train, y_train)

baseline_predictions = baseline.predict(X_test)

baseline_accuracy = accuracy_score(
    y_test,
    baseline_predictions
)

# Actual model
model = LogisticRegression()

model.fit(X_train, y_train)

predictions = model.predict(X_test)

model_accuracy = accuracy_score(
    y_test,
    predictions
)

print("Baseline Accuracy:", baseline_accuracy)
print("Model Accuracy:", model_accuracy)
\`\`\`

This experiment demonstrates an important principle:

Always establish a simple reference before deciding that a model is useful.

---

## 11. Model Selection Is an Experiment

Model selection should not be treated as:

\`\`\`
Choose one algorithm and assume it is correct.
\`\`\`

Instead:

\`\`\`
Candidate Model A
       ↓
Evaluation

Candidate Model B
       ↓
Evaluation

Candidate Model C
       ↓
Evaluation

Compare Results
       ↓
Select Appropriate Model
\`\`\`

This makes model development evidence-based.

---

## Practice Task

For a chosen AI problem:

1. Identify the task type.
2. Choose one simple baseline.
3. Choose two candidate models.
4. Train them on the same training data.
5. Evaluate them using an appropriate metric.
6. Compare their results.
7. Explain which model you would choose and why.

---

## Challenge

Build a small experiment using a dataset of your choice.

Compare:

\`\`\`
Baseline
   vs
Simple Model
   vs
Second Model
\`\`\`

Record:

- Evaluation metric
- Training time
- Prediction behavior
- Advantages
- Limitations

Then write a short justification for your final choice.

---

## Quick Check

1. What is model selection?
2. Why isn't the most complex model always the best?
3. What is a baseline?
4. Why is a baseline useful?
5. What does DummyClassifier provide?
6. What does DummyRegressor provide?
7. Why should candidate models be evaluated under comparable conditions?
8. What factors besides accuracy can influence model selection?
9. Why should model selection be treated as an experiment?
10. What does it mean for a model to outperform a baseline?

---

## Key Takeaways

Model selection should be based on the problem and evidence rather than complexity.

The practical process is:

\`\`\`
Problem
→ Baseline
→ Candidate Models
→ Evaluation
→ Comparison
→ Selection
\`\`\`

A baseline gives us a meaningful reference, while candidate-model comparison helps us make a more informed engineering decision.
`
};

export default lesson;