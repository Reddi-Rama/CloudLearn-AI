const lesson9 = {
  title: "Model Evaluation & Error Analysis",

  content: `
# Model Evaluation & Error Analysis

## What You Will Learn

Training a machine-learning model is only one part of the ML workflow.

After training, we need to answer:

How well does the model actually perform?

Model evaluation provides quantitative evidence about model performance.

Error analysis then goes one step further by asking:

Where does the model fail, and why?

Together, evaluation and error analysis help us decide whether a model is useful.

---

# 1. Why Evaluation Matters

Suppose two models make predictions:

Model A → 92% correct

Model B → 96% correct

At first glance, Model B appears better.

But imagine the problem is medical screening.

If Model B misses many important positive cases, its 96% accuracy may not be enough.

Therefore:

The best evaluation metric depends on the problem.

Different ML tasks require different evaluation methods.

---

# 2. Prediction and Error

For each observation:

yi = actual value

and:

y_hat_i = predicted value

The prediction error can be written as:

ei = yi - y_hat_i

For example:

Actual = 100

Predicted = 90

Error = 100 - 90

= 10

A model's performance can be summarized by combining errors across many observations.

---

# 3. Regression Evaluation

Regression predicts continuous values.

Examples include:

- House prices
- Temperature
- Sales
- Demand
- Delivery time

Important metrics include:

Mean Absolute Error

MAE =
(1/n)
Σ |yi - y_hat_i|

MAE represents the average absolute prediction error.

For example:

Actual:     100  200  300

Predicted:   90  210  280

Errors:

10

10

20

Therefore:

MAE =
(10 + 10 + 20) / 3

MAE = 13.33

The model is off by approximately 13.33 units on average.

---

# 4. Mean Squared Error

Mean Squared Error is:

MSE =
(1/n)
Σ(
yi - y_hat_i
)²

Because errors are squared, larger errors receive greater importance.

Python:

\`\`\`python
from sklearn.metrics import mean_absolute_error
from sklearn.metrics import mean_squared_error

actual = [
    100,
    200,
    300
]

predicted = [
    90,
    210,
    280
]

mae = mean_absolute_error(
    actual,
    predicted
)

mse = mean_squared_error(
    actual,
    predicted
)

print(
    "MAE:",
    mae
)

print(
    "MSE:",
    mse
)
\`\`\`

---

# 5. Root Mean Squared Error

RMSE is:

RMSE = sqrt(MSE)

It brings the error back to the original unit of the target.

Python:

\`\`\`python
import numpy as np

rmse = np.sqrt(
    mse
)

print(
    "RMSE:",
    rmse
)
\`\`\`

For regression:

MAE
→ average absolute error

MSE
→ emphasizes larger errors

RMSE
→ error in original target units

---

# 6. Classification Evaluation

Classification predicts categories.

Examples:

- Spam / Not Spam
- Pass / Fail
- Fraud / Not Fraud
- Disease / No Disease

A classification model produces predicted classes.

For example:

Actual:     1  0  1  1  0

Predicted:  1  0  0  1  1

Some predictions are correct and some are incorrect.

---

# 7. Confusion Matrix

A confusion matrix organizes classification results.

For binary classification:

                 Predicted
              Positive  Negative

Actual
Positive          TP        FN

Negative          FP        TN

Where:

TP = True Positive

TN = True Negative

FP = False Positive

FN = False Negative

These four quantities form the foundation of many classification metrics.

---

# 8. Accuracy

Accuracy measures the proportion of correct predictions.

Accuracy =
(TP + TN)
/
(TP + TN + FP + FN)

Example:

\`\`\`python
from sklearn.metrics import accuracy_score

actual = [
    1,
    0,
    1,
    1,
    0
]

predicted = [
    1,
    0,
    0,
    1,
    1
]

accuracy = accuracy_score(
    actual,
    predicted
)

print(
    "Accuracy:",
    accuracy
)
\`\`\`

Accuracy is useful when the classes are reasonably balanced and the costs of errors are similar.

---

# 9. Precision

Precision answers:

When the model predicts positive, how often is it correct?

Formula:

Precision =
TP
/
(TP + FP)

High precision means relatively few false-positive predictions.

This can be important when false alarms are costly.

---

# 10. Recall

Recall answers:

Of all the actual positive cases, how many did the model identify?

Formula:

Recall =
TP
/
(TP + FN)

High recall means the model misses fewer actual positive cases.

For some applications, missing a positive case is much more serious than producing a false alarm.

---

# 11. F1-Score

F1 combines precision and recall.

Formula:

F1 =
2 × Precision × Recall
/
(Precision + Recall)

It is useful when we want a balance between precision and recall.

Using scikit-learn:

\`\`\`python
from sklearn.metrics import classification_report

print(
    classification_report(
        actual,
        predicted
    )
)
\`\`\`

---

# 12. Why Accuracy Can Be Misleading

Suppose a dataset contains:

950 normal transactions

50 fraudulent transactions

A model predicts:

Every transaction → Normal

It achieves:

Accuracy =
950 / 1000

= 95%

That sounds impressive.

But:

Fraud detection:

0 successful fraud detections

The model is practically useless for identifying fraud.

This is why model evaluation must consider the actual objective.

---

# 13. Error Analysis

Metrics tell us how much the model fails.

Error analysis helps us understand why.

Suppose a model incorrectly predicts:

Actual → Fraud

Predicted → Normal

We should investigate the corresponding example.

Possible reasons include:

- insufficient training examples
- noisy data
- incorrect labels
- weak features
- unusual cases
- distribution differences
- model limitations

---

# 14. Inspecting Errors With Python

Suppose we have:

\`\`\`python
import pandas as pd

results = pd.DataFrame({
    "actual": actual,
    "predicted": predicted
})

results["correct"] = (
    results["actual"]
    ==
    results["predicted"]
)

print(
    results
)
\`\`\`

We can isolate incorrect predictions:

\`\`\`python
errors = results[
    results["correct"] == False
]

print(
    errors
)
\`\`\`

This is a simple but powerful technique.

Instead of only looking at:

Accuracy = 80%

we can inspect the actual failures.

---

# 15. Comparing Models

Suppose we have two models:

Model A

Accuracy = 90%

Model B

Accuracy = 91%

We should not immediately select Model B.

We should consider:

- appropriate evaluation metric
- generalization
- error types
- training cost
- prediction speed
- interpretability
- data requirements
- deployment constraints

Machine learning is not simply a competition to maximize one number.

---

# 16. Visualizing Predictions

For regression, we can compare actual and predicted values.

\`\`\`python
import matplotlib.pyplot as plt

plt.scatter(
    actual,
    predicted
)

plt.xlabel(
    "Actual Values"
)

plt.ylabel(
    "Predicted Values"
)

plt.title(
    "Actual vs Predicted"
)

plt.show()
\`\`\`

A model whose predictions closely follow the ideal relationship:

y_hat = y

is generally performing better.

---

# 17. Evaluation Workflow

A practical evaluation workflow is:

Trained Model
      ↓
Generate Predictions
      ↓
Choose Appropriate Metrics
      ↓
Calculate Metrics
      ↓
Inspect Errors
      ↓
Identify Failure Patterns
      ↓
Compare Models
      ↓
Improve Model
      ↓
Re-evaluate

This creates an iterative machine-learning process.

---

# 18. Real-World Example

Consider an email spam classifier.

The model predicts:

Email → Spam

Suppose it incorrectly marks an important college email as spam.

That is:

False Positive

Now imagine the opposite:

Spam email → Not Spam

That is:

False Negative

Which error is more important depends on the application.

This demonstrates why evaluation metrics must be connected to real-world consequences.

---

# Practice

## Practice 1

Create actual and predicted values for a regression problem.

Calculate:

MAE

MSE

RMSE

---

## Practice 2

Create actual and predicted classes for a binary classification problem.

Calculate:

Accuracy

Precision

Recall

F1-score

---

## Practice 3

Generate a confusion matrix.

---

## Practice 4

Extract the incorrect predictions.

---

## Practice 5

Inspect the errors and write possible reasons for the failures.

---

# Challenge

Build a small Model Evaluation Report.

Your program should:

- Load a dataset.
- Train a model.
- Generate predictions.
- Calculate appropriate metrics.
- Display a confusion matrix for classification.
- Identify incorrect predictions.
- Analyze at least three errors.
- Compare two models.
- Select the better model.
- Explain the reason for your choice.

---

# Common Mistakes

- Using accuracy for every classification problem.
- Evaluating only on training data.
- Ignoring false positives and false negatives.
- Looking only at one metric.
- Changing the evaluation dataset to obtain a better score.
- Ignoring incorrect predictions.
- Selecting a model purely because it has the highest numerical score.
- Forgetting the real-world cost of different errors.

---

# Quick Check

What is model evaluation?

What is prediction error?

What is MAE?

What is MSE?

What is RMSE?

What is a confusion matrix?

What is accuracy?

What does precision measure?

What does recall measure?

What is F1-score?

Why can accuracy be misleading?

What is error analysis?

Why should incorrect predictions be inspected?

Why should model selection consider more than one metric?

---

# Lesson Summary

Model evaluation determines how well a machine-learning system performs, while error analysis helps us understand its failures.

For regression:

MAE, MSE, RMSE

are common evaluation measures.

For classification:

Accuracy, Precision, Recall, F1

are commonly used.

The most important principle is:

Measure performance
→ Understand errors
→ Improve
→ Re-evaluate

This turns machine learning from simply training a model into a disciplined engineering process.
`,
};

export default lesson9;