const practice = {
  id: "practice",

  title: "Module Practice",

  content: `
Module 01

Machine Learning Foundations

Module Practice


This practice section reviews the major concepts introduced throughout the module.


Part 1 — Concept Check

1. What is machine learning?

2. Why can machine learning be useful when manually written rules become difficult?

3. What is the difference between supervised and unsupervised learning?

4. What is classification?

5. What is regression?

6. What is a sample?

7. What is a feature?

8. What is a target?

9. Why is training data different from test data?

10. What does generalization mean?

11. What is overfitting?

12. What is underfitting?

13. Why does dataset variety matter?

14. Why is Python commonly used for machine learning?

15. What is the role of scikit-learn?


Part 2 — Identify the Problem Type

Classify each problem as classification, regression, or unsupervised learning.

1. Predict whether an email is spam.

2. Predict the price of a house.

3. Group customers according to purchasing behaviour.

4. Predict annual income.

5. Identify the species of an Iris flower.

6. Discover common topics in a collection of documents.

7. Predict whether a transaction is fraudulent.

8. Predict next month's sales.


Part 3 — Identify the Data

Consider:

| Study Hours | Attendance | Previous Score | Final Score |
|-------------|------------|----------------|-------------|
| 2 | 75 | 55 | 61 |
| 3 | 82 | 62 | 68 |
| 4 | 88 | 72 | 79 |
| 5 | 91 | 81 | 87 |

Answer:

1. How many samples are present?

2. Which columns are features?

3. Which column is the target?

4. Is this a classification or regression problem?

5. What would X contain?

6. What would y contain?


Part 4 — Training and Testing

Suppose a dataset contains 1,000 samples.

Answer:

1. Why should the entire dataset not normally be used for both training and evaluation?

2. What is the purpose of training data?

3. What is the purpose of test data?

4. What is the purpose of validation data?

5. Why can shuffling be useful?


Part 5 — Generalization

A model produces:

Training Accuracy = 99%

Test Accuracy = 71%

Answer:

1. What does this difference suggest?

2. Could the model be overfitting?

3. Why is test performance important?


Part 6 — Model Complexity

Consider three models:

Model A

Very simple

Model B

Moderately complex

Model C

Highly flexible

Answer:

1. Which model is most likely to underfit?

2. Which model is most likely to overfit?

3. Which model might provide the best generalization?

4. Why does dataset size influence the useful level of complexity?


Part 7 — Python Practice

Write a program that:

1. Imports NumPy.

2. Creates a small feature matrix.

3. Creates a target array.

4. Prints their shapes.

Expected structure:

Python

import numpy as np

X = np.array([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
])

y = np.array([0, 0, 1, 1])

print("X shape:", X.shape)
print("y shape:", y.shape)


Part 8 — Pandas Practice

Create a DataFrame containing:

Name

Study Hours

Score

Then:

Display the first rows.

Select the Score column.

Filter students with scores greater than 70.


Part 9 — Visualization Practice

Create a scatter plot showing:

Study Hours

Score

Then describe whether the points show an obvious relationship.


Part 10 — scikit-learn Practice

Use the Iris dataset.

Complete the following workflow:

Load Dataset
↓
Split Dataset
↓
Create kNN Model
↓
Train
↓
Predict
↓
Evaluate


Part 11 — Multiple Choice

Question 1

Which component represents one individual data point?

A. Feature

B. Sample

C. Algorithm

D. Parameter

Answer:

B. Sample


Question 2

Which task predicts a numerical value?

A. Classification

B. Regression

C. Clustering

D. Topic discovery

Answer:

B. Regression


Question 3

Which data is used to learn model parameters?

A. Test data

B. Training data

C. Output data

D. Visualization data

Answer:

B. Training data


Question 4

Which problem occurs when a model fits training data too closely?

A. Underfitting

B. Overfitting

C. Scaling

D. Encoding

Answer:

B. Overfitting


Question 5

Which library provides many machine learning algorithms in Python?

A. Matplotlib

B. Pandas

C. scikit-learn

D. NumPy

Answer:

C. scikit-learn


Part 12 — Final Practice Challenge

Build a small Student Performance Prediction System.

Requirements:

Create a dataset.

Identify the features.

Identify the target.

Split the data.

Train a model.

Generate predictions.

Evaluate the model.

Explain whether the model appears to generalize well.


Practice Summary

After completing this practice, you should be able to:

Explain basic machine learning concepts.

Identify machine learning problem types.

Recognize samples, features, and targets.

Separate training and test data.

Explain generalization.

Recognize overfitting and underfitting.

Use NumPy, Pandas, and Matplotlib.

Use the basic scikit-learn workflow.

Train and evaluate a simple model.
`
};

export default practice;