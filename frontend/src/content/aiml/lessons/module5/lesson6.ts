const lesson6 = {
  title: "First End-to-End Machine Learning Project",

  content: `
# First End-to-End Machine Learning Project

## What You Will Learn

A machine-learning model is not built by simply calling an algorithm.

A practical ML workflow begins with a problem, continues through data preparation and model selection, and ends with evaluation and interpretation.

In this lesson, you will bring together the concepts learned throughout Module 05 and build a small machine-learning prediction system.

The workflow is:

Problem
   ↓
Data
   ↓
Features & Target
   ↓
Train / Test Split
   ↓
Baseline
   ↓
Model
   ↓
Training
   ↓
Prediction
   ↓
Evaluation
   ↓
Error Analysis
   ↓
Conclusion

The goal is to understand why each stage exists, not simply to produce a high accuracy score.

---

# 1. Start With the Problem

Every machine-learning project should begin with a clearly defined question.

Consider this problem:

Can we predict whether a student will pass based on the number of hours they study and the number of practice tests they complete?

We could represent the data as:

Study Hours    Practice Tests    Result
     2                1             Fail
     3                2             Fail
     5                4             Pass
     6                5             Pass
     8                7             Pass

The model receives:

Study Hours
Practice Tests

and attempts to predict:

Result

---

# 2. Features and Target

The input variables are called features.

Mathematically:

X =
[
  2  1
  3  2
  5  4
  6  5
  8  7
]

The target is:

y = [0, 0, 1, 1, 1]

where:

0 = Fail

1 = Pass

The basic ML relationship is:

X → Model → y_hat

where:

X = input features
y = actual target
y_hat = model prediction

---

# 3. Load the Dataset

For a real project, data may come from a CSV file, database, API, or other source.

For this small experiment, we can create the dataset directly.

\`\`\`python
import pandas as pd

data = {
    "study_hours": [2, 3, 5, 6, 8, 9, 1, 4, 7, 10],
    "practice_tests": [1, 2, 4, 5, 7, 8, 0, 3, 6, 9],
    "result": [0, 0, 1, 1, 1, 1, 0, 0, 1, 1]
}

df = pd.DataFrame(data)

print(df)
\`\`\`

The dataset contains:

- two features
- one target
- ten observations

---

# 4. Inspect the Data

Before training a model, inspect the dataset.

\`\`\`python
print(df.head())
print(df.shape)
print(df.info())
print(df.describe())
\`\`\`

This helps answer questions such as:

- How many observations are available?
- What are the feature names?
- What are the data types?
- Are there missing values?
- What are the numerical ranges?

A model should not be trained blindly.

---

# 5. Separate Features and Target

We separate the inputs from the output.

\`\`\`python
X = df[["study_hours", "practice_tests"]]
y = df["result"]
\`\`\`

Now:

X → features

y → target

This separation is fundamental to supervised learning.

---

# 6. Split the Data

We should not train and evaluate a model using exactly the same examples.

Use a training set and a test set.

\`\`\`python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.3,
    random_state=42,
    stratify=y
)
\`\`\`

The training set is used to learn the model.

The test set is held back for evaluating how the trained model performs on unseen examples.

---

# 7. Why We Need a Baseline

Before using a machine-learning model, establish a simple reference.

For a binary classification problem, a basic baseline could always predict the most common class.

For example:

\`\`\`python
baseline_prediction = y_train.mode()[0]

print(
    "Baseline prediction:",
    baseline_prediction
)
\`\`\`

The baseline gives us a question:

Does our machine-learning model actually provide useful improvement over a simple strategy?

A complex model is not automatically valuable if it cannot beat a reasonable baseline.

---

# 8. Choose a Model

For this small classification problem, we can use logistic regression.

\`\`\`python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
\`\`\`

The model is appropriate because the target represents two classes:

0 = Fail

1 = Pass

---

# 9. Train the Model

Training means allowing the algorithm to learn model parameters from the training data.

\`\`\`python
model.fit(
    X_train,
    y_train
)
\`\`\`

Conceptually:

X_train, y_train
      ↓
Learning Algorithm
      ↓
Model Parameters

The parameters are learned from the training examples.

---

# 10. Generate Predictions

After training, we can give the model unseen examples.

\`\`\`python
predictions = model.predict(
    X_test
)

print(predictions)
\`\`\`

The model produces predicted classes.

We can also obtain probabilities:

\`\`\`python
probabilities = model.predict_proba(
    X_test
)

print(probabilities)
\`\`\`

For a binary classifier, the output represents estimated probabilities for the classes.

---

# 11. Evaluate the Model

For classification, accuracy is one possible metric.

\`\`\`python
from sklearn.metrics import accuracy_score

accuracy = accuracy_score(
    y_test,
    predictions
)

print(
    "Accuracy:",
    accuracy
)
\`\`\`

Accuracy is:

Accuracy =
Correct Predictions
/
Total Predictions

However, accuracy is not always sufficient.

For example, if 95% of examples belong to one class, a model that always predicts that class can achieve 95% accuracy while being useless for the minority class.

Therefore, model evaluation should consider the problem and appropriate metrics.

---

# 12. Confusion Matrix

A confusion matrix gives more detailed information about classification results.

\`\`\`python
from sklearn.metrics import confusion_matrix

cm = confusion_matrix(
    y_test,
    predictions
)

print(cm)
\`\`\`

It separates predictions into categories such as:

- true positives
- true negatives
- false positives
- false negatives

This helps us understand what kinds of mistakes the model is making.

---

# 13. Classification Report

We can generate several common classification metrics.

\`\`\`python
from sklearn.metrics import classification_report

print(
    classification_report(
        y_test,
        predictions
    )
)
\`\`\`

The report commonly includes:

- precision
- recall
- F1-score
- support

---

# 14. Error Analysis

Evaluation tells us how much the model got right or wrong.

Error analysis asks:

Which examples did the model get wrong, and why?

We can inspect the predictions:

\`\`\`python
results = X_test.copy()

results["actual"] = y_test
results["predicted"] = predictions

print(results)
\`\`\`

For example:

Actual     Predicted
   1           1
   0           0
   1           0

The third observation is an incorrect prediction.

Instead of simply reporting the accuracy, investigate the example.

Possible reasons include:

- insufficient training data
- overlapping classes
- noisy observations
- weak features
- inappropriate model assumptions

---

# 15. Compare With a Second Model

A useful ML experiment should not automatically assume that the first model is the best.

For example, try a decision tree.

\`\`\`python
from sklearn.tree import DecisionTreeClassifier

tree = DecisionTreeClassifier(
    max_depth=3,
    random_state=42
)

tree.fit(
    X_train,
    y_train
)

tree_predictions = tree.predict(
    X_test
)

tree_accuracy = accuracy_score(
    y_test,
    tree_predictions
)

print(
    "Decision Tree Accuracy:",
    tree_accuracy
)
\`\`\`

Now we have two candidate models.

The important question is not:

Which model is more complicated?

Instead:

Which model is more appropriate for the problem and performs reliably on unseen data?

---

# 16. Visualize the Data

Because the dataset has two features, we can visualize it.

\`\`\`python
import matplotlib.pyplot as plt

plt.scatter(
    df["study_hours"],
    df["practice_tests"],
    c=df["result"]
)

plt.xlabel(
    "Study Hours"
)

plt.ylabel(
    "Practice Tests"
)

plt.title(
    "Student Performance Data"
)

plt.show()
\`\`\`

Visualization can help us understand whether the classes appear separable.

---

# 17. The Complete Workflow

The complete project can now be represented as:

Problem Definition
        ↓
Dataset
        ↓
Feature / Target Separation
        ↓
Data Inspection
        ↓
Train / Test Split
        ↓
Baseline
        ↓
Model Selection
        ↓
Training
        ↓
Prediction
        ↓
Evaluation
        ↓
Error Analysis
        ↓
Model Comparison
        ↓
Conclusion

This workflow is much more important than memorizing one particular algorithm.

---

# 18. A Complete Compact Implementation

\`\`\`python
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, classification_report

data = {
    "study_hours": [2, 3, 5, 6, 8, 9, 1, 4, 7, 10],
    "practice_tests": [1, 2, 4, 5, 7, 8, 0, 3, 6, 9],
    "result": [0, 0, 1, 1, 1, 1, 0, 0, 1, 1]
}

df = pd.DataFrame(data)

X = df[
    [
        "study_hours",
        "practice_tests"
    ]
]

y = df["result"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.3,
    random_state=42,
    stratify=y
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
    "Logistic Regression Accuracy:",
    accuracy
)

print(
    "\\nClassification Report:"
)

print(
    classification_report(
        y_test,
        predictions
    )
)

tree = DecisionTreeClassifier(
    max_depth=3,
    random_state=42
)

tree.fit(
    X_train,
    y_train
)

tree_predictions = tree.predict(
    X_test
)

tree_accuracy = accuracy_score(
    y_test,
    tree_predictions
)

print(
    "Decision Tree Accuracy:",
    tree_accuracy
)
\`\`\`

---

# 19. What This Project Demonstrates

This small experiment connects the concepts learned in Module 05:

Features
   ↓
Target
   ↓
Training Data
   ↓
Test Data
   ↓
Baseline
   ↓
Model
   ↓
Training
   ↓
Prediction
   ↓
Evaluation
   ↓
Error Analysis

This is the foundation for much larger machine-learning projects.

---

# Practice

## Practice 1

Create your own binary classification dataset with at least 20 observations.

## Practice 2

Separate the features and target.

## Practice 3

Split the dataset into training and testing portions.

## Practice 4

Create a baseline prediction.

## Practice 5

Train a Logistic Regression model.

## Practice 6

Train a Decision Tree model.

## Practice 7

Compare their results.

## Practice 8

Inspect incorrect predictions and explain possible reasons for the errors.

---

# Challenge

Build a Student Performance Prediction System.

The system should:

- Load a dataset.
- Inspect the dataset.
- Identify features and target.
- Split the data.
- Create a baseline.
- Train at least two models.
- Generate predictions.
- Calculate appropriate evaluation metrics.
- Display a confusion matrix.
- Perform error analysis.
- Compare the models.
- Select a final model.
- Explain why it was selected.
- Document at least one limitation.

---

# Common Mistakes

- Training and testing on the same data.
- Choosing a model before understanding the problem.
- Ignoring the baseline.
- Reporting only accuracy.
- Assuming a higher test score automatically means a better production model.
- Not inspecting incorrect predictions.
- Changing the test set repeatedly to improve the reported result.
- Ignoring data quality problems.

---

# Quick Check

Why should an ML project begin with problem definition?

What are features?

What is the target?

Why do we split data into training and testing sets?

What is a baseline?

What happens during model training?

What is inference?

Why do we evaluate on unseen data?

What is accuracy?

Why is error analysis important?

Why compare multiple candidate models?

Why is a high score alone not enough to select a model?

---

# Key Takeaways

A machine-learning project is a complete workflow, not just a model-training command.

The problem must be defined before selecting an algorithm.

Features represent the information given to the model.

The target represents what the model needs to predict.

Training data is used to learn model parameters.

Test data evaluates performance on unseen examples.

A baseline provides a useful reference point.

Evaluation should use metrics appropriate to the problem.

Error analysis helps explain model failures.

A good ML engineer compares models and explains why the final approach was selected.
`,
};

export default lesson6;