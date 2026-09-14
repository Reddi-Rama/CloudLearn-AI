const project = {
  id: "project",

  title: "Module Project — First ML Prediction System",

  content: `
Module Project

First ML Prediction System


Build a complete beginner-level machine learning prediction system using the concepts from Module 01.


Project Objective

The objective is to create a working prediction system that demonstrates the complete machine learning workflow:

Problem Definition
↓
Dataset
↓
Feature Selection
↓
Target Definition
↓
Data Preparation
↓
Training
↓
Prediction
↓
Evaluation
↓
Result


Project Theme

Student Performance Prediction System


Problem Statement

Develop a machine learning system that predicts a student's final performance using information such as:

Study Hours

Attendance

Previous Score

Assignment Completion

The target should represent the student's final performance.


Project Requirements

The project must contain:

A dataset

At least three useful features

One target

Training data

Test data

A machine learning model

Predictions

An evaluation result


Step 1 — Define the Problem

Write a clear statement describing:

What needs to be predicted?

Who will use the prediction?

When will the prediction be made?

What information is available before the prediction?


Step 2 — Create or Collect Data

Create a small educational dataset.

Example structure:

| Study Hours | Attendance | Previous Score | Final Score |
|-------------|------------|----------------|-------------|
| 2 | 75 | 55 | 61 |
| 3 | 82 | 62 | 68 |
| 4 | 88 | 72 | 79 |
| 5 | 91 | 81 | 87 |
| 6 | 94 | 86 | 92 |

Add additional examples so that the model has enough data for experimentation.


Step 3 — Identify Features and Target

Features:

Study Hours

Attendance

Previous Score

Target:

Final Score


Step 4 — Prepare the Data

Separate:

X → Features

y → Target

Then divide the dataset into training and test sets.


Step 5 — Select a Model

Choose a suitable supervised learning algorithm.

For example:

Linear Regression

The chosen algorithm should match the prediction problem.


Step 6 — Train the Model

Use the training data.

Python

model.fit(X_train, y_train)


Step 7 — Generate Predictions

Use the test data.

Python

predictions = model.predict(X_test)


Step 8 — Evaluate the Model

Choose an appropriate regression metric.

Record the result.

Explain what the metric means.


Step 9 — Test New Data

Create a new student's feature values.

Example:

Study Hours = 6

Attendance = 92

Previous Score = 84

Pass those values to the trained model.

Display the predicted final score.


Step 10 — Build the Complete Program

Python

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

data = {
    "StudyHours": [2, 3, 4, 5, 6, 7, 8, 9],
    "Attendance": [70, 75, 80, 84, 88, 90, 93, 96],
    "PreviousScore": [50, 56, 63, 70, 76, 82, 87, 91],
    "FinalScore": [55, 61, 68, 74, 81, 86, 91, 95]
}

df = pd.DataFrame(data)

X = df[
    ["StudyHours", "Attendance", "PreviousScore"]
]

y = df["FinalScore"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)

model = LinearRegression()

model.fit(X_train, y_train)

predictions = model.predict(X_test)

error = mean_absolute_error(
    y_test,
    predictions
)

print("Predictions:", predictions)
print("Actual:", list(y_test))
print("Mean Absolute Error:", error)


Output

Predictions:

The predicted final scores for the test students.

Actual:

The actual final scores from the test set.

Mean Absolute Error:

The average absolute difference between predictions and actual values.


Step 11 — New Student Prediction

Python

new_student = [[6, 92, 84]]

prediction = model.predict(new_student)

print("Predicted Final Score:", prediction[0])


Step 12 — Visualization

Create a visualization showing the relationship between at least two features.

Example:

Study Hours vs Final Score


Python

import matplotlib.pyplot as plt

plt.scatter(
    df["StudyHours"],
    df["FinalScore"]
)

plt.xlabel("Study Hours")
plt.ylabel("Final Score")
plt.title("Study Hours vs Final Score")

plt.show()


Step 13 — Project Analysis

Explain:

Which features were selected?

Why were they selected?

What is the target?

How was the data divided?

Which model was selected?

How was the model evaluated?

What does the prediction mean?

What limitations does the system have?


Step 14 — Project Limitations

Discuss possible limitations.

The dataset may be small.

The examples may not represent every student.

Other important factors may be missing.

Predictions may contain errors.

The model should not be treated as a guaranteed result.


Step 15 — Project Deliverables

Submit:

Python source code

Dataset

Data exploration output

Model training code

Evaluation result

Prediction example

Visualization

Short project report


Suggested Project Structure

student-performance-ml
│
├── data
│   └── students.csv
│
├── notebooks
│   └── student_prediction.ipynb
│
├── src
│   └── train_model.py
│
├── results
│   └── evaluation.txt
│
└── README.md


Project Evaluation

Problem Definition

20%

Data Preparation

20%

Model Development

20%

Evaluation

20%

Prediction and Interpretation

10%

Code Quality

10%


Final Challenge

Extend the project by allowing a user to enter:

Study Hours

Attendance

Previous Score

The system should then:

Read the input

Run the trained model

Generate a prediction

Display the predicted final score


Project Reflection

Answer the following questions:

What makes this a machine learning problem?

Why was the data split?

Why should the test set remain separate?

What happens when the dataset becomes larger?

What additional features could improve the prediction?

How could the model be improved in a later module?

`
};

export default project;