const lesson7 = {
  id: "lesson7",

  title: "Data, Samples, Features and Targets",

  content: `
Lesson 07

Data, Samples, Features and Targets


Machine learning depends on how information is represented.

A useful representation makes it possible for an algorithm to process the data and learn useful patterns.

A common representation is a table.

Rows represent samples.

Columns represent features.

In supervised learning, the desired output is represented by a target.


1. Understanding a Dataset

Consider this student dataset.

| Study Hours | Attendance | Previous Score | Final Score |
|-------------|------------|----------------|-------------|
| 2 | 75 | 55 | 61 |
| 3 | 82 | 62 | 68 |
| 4 | 88 | 72 | 79 |
| 5 | 91 | 81 | 87 |

This table contains several concepts.

Each row is a sample.

Study Hours, Attendance, and Previous Score are features.

Final Score is the target.


2. Samples

A sample is one individual data point.

For example:

| Study Hours | Attendance | Previous Score | Final Score |
|-------------|------------|----------------|-------------|
| 4 | 88 | 72 | 79 |

This row represents one sample.

A dataset is made up of many samples.


3. Features

Features describe properties of the samples.

In the student dataset, the features are:

Study Hours

Attendance

Previous Score

Each feature provides information that may help the model learn the relationship with the target.


4. Targets

In supervised learning, the target represents the desired output.

For the student dataset:

Features:

Study Hours

Attendance

Previous Score

Target:

Final Score

The target is what the model attempts to predict.


5. Input and Output Representation

A common mathematical representation is:

X = Input Features

y = Target

The model learns a relationship between X and y.

For prediction:

New X → Model → Predicted y


6. Multiple Features

A single sample can contain several features.

For example:

Student A

Study Hours = 4

Attendance = 88

Previous Score = 72

The input can be represented as:

x = [4, 88, 72]

A dataset containing multiple samples can therefore be represented as a matrix.


7. Feature Matrix

For the student data:

X =

[2, 75, 55]
[3, 82, 62]
[4, 88, 72]
[5, 91, 81]

There are four samples.

There are three features.

Therefore:

Number of Samples = 4

Number of Features = 3


8. Shape of the Data

Machine learning libraries commonly represent the feature matrix with the shape:

Number of Samples × Number of Features

For example:

4 × 3

means:

4 samples

3 features


The Iris dataset in the source contains 150 samples and 4 numerical features, giving a data shape of 150 × 4. :contentReference[oaicite:6]{index=6}


9. Target Representation

The target often contains one value for each sample.

For example:

y =

[61, 68, 79, 87]

There are four target values because there are four samples.

The relationship is:

Number of Samples in X = Number of Samples in y


10. Classification Targets

For classification, the target represents a category.

Example:

| Study Hours | Previous Score | Result |
|-------------|----------------|--------|
| 2 | 55 | Needs Support |
| 3 | 62 | Needs Support |
| 4 | 72 | Ready |
| 5 | 81 | Ready |

The target is:

Result

The possible classes are:

Needs Support

Ready


11. Numerical Encoding of Classes

Machine learning libraries may represent classes numerically.

For example:

Needs Support = 0

Ready = 1

The numbers are labels.

They represent categories rather than continuous numerical measurements.


12. Regression Targets

For regression, the target is numerical.

Example:

| Area | Bedrooms | Price |
|------|----------|-------|
| 900 | 2 | 4200000 |
| 1200 | 3 | 5600000 |
| 1500 | 3 | 7100000 |

Features:

Area

Bedrooms

Target:

Price

The model predicts a numerical value.


13. Feature Names

Feature names describe what each column represents.

In the Iris dataset, the source uses four measurements:

Sepal length

Sepal width

Petal length

Petal width

These measurements form the feature columns of the dataset. :contentReference[oaicite:7]{index=7}


14. Samples and Features in the Iris Dataset

The Iris dataset contains:

150 samples

4 features

3 target classes

The four features describe measurements of the flowers.

The target identifies the species.

This makes the dataset suitable for a supervised classification problem. :contentReference[oaicite:8]{index=8} :contentReference[oaicite:9]{index=9}


15. Python Example With NumPy

Python

import numpy as np

X = np.array([
    [2, 75, 55],
    [3, 82, 62],
    [4, 88, 72],
    [5, 91, 81]
])

y = np.array([61, 68, 79, 87])

print("Feature shape:", X.shape)
print("Target shape:", y.shape)


Output

Feature shape: (4, 3)

Target shape: (4,)


The feature matrix contains four samples and three features.

The target contains one value for each sample.


16. Looking at Individual Samples

Python

print("First sample:", X[0])
print("Second sample:", X[1])


Output

First sample: [ 2 75 55 ]

Second sample: [ 3 82 62 ]


Each row represents one sample.


17. Looking at Individual Features

A column represents a feature.

Python

study_hours = X[:, 0]
attendance = X[:, 1]
previous_score = X[:, 2]

print("Study hours:", study_hours)
print("Attendance:", attendance)
print("Previous scores:", previous_score)


Output

The output contains one value for each sample for the selected feature.


18. Data Representation in scikit-learn

A common scikit-learn convention is:

Capital X → Feature matrix

Lowercase y → Target vector

This convention reflects the mathematical idea that X contains the input data and y contains the desired output.


19. Good Features Matter

The model can only learn from the information contained in the features.

Suppose a system predicts customer spending.

Useful features could include:

Previous purchases

Average order value

Purchase frequency

Website activity

If the dataset contains only an internal customer ID, the representation provides very little useful information for predicting spending.

Feature representation is therefore a central part of machine learning.


20. Data Tables and Machine Learning

A useful conceptual mapping is:

Row → Sample

Column → Feature

Target Column → Desired Output

Feature Matrix → X

Target Vector → y


21. Practical Example

Consider an online store.

| Visits | Products Viewed | Previous Purchases | Purchase |
|--------|------------------|--------------------|----------|
| 2 | 3 | 0 | No |
| 5 | 8 | 2 | Yes |
| 7 | 10 | 4 | Yes |
| 3 | 4 | 1 | No |

Samples:

4

Features:

Visits

Products Viewed

Previous Purchases

Target:

Purchase


22. Experiment

Create a dataset containing at least five samples.

Include:

At least three features

One target

Then identify:

The number of samples

The number of features

The target values

The shape of X

The shape of y


Common Mistakes

Treating rows as features

Treating columns as samples

Using the target as an input feature

Using irrelevant features

Having a different number of target values and samples

Confusing numerical class labels with continuous targets

Ignoring the meaning of each feature


Practice

Create a student dataset with:

Study Hours

Attendance

Assignment Completion

Previous Score

Final Result

Identify the samples, features, and target.

Then represent the feature data using a NumPy array.


Quick Check

Question

What is a sample and what is a feature?

Answer

A sample is one individual data point, while a feature is a property or measurement that describes the samples.


Summary

Machine learning data is commonly organized in a structured representation.

Rows represent samples.

Columns represent features.

Supervised datasets also contain a target representing the desired output.

The feature matrix is commonly called X.

The target is commonly represented as y.

The number of samples in the feature matrix must correspond to the number of target values.


Extended Study

A dataset can be represented mathematically as:

X ∈ Rⁿˣᵖ

where:

n = number of samples

p = number of features

For example:

n = 150

p = 4

gives:

X ∈ R¹⁵⁰ˣ⁴

The target vector can be represented as:

y = [y₁, y₂, ..., yₙ]

There is one target value for each sample in a supervised-learning problem.

This representation is used throughout scikit-learn and is fundamental to understanding how machine learning algorithms receive data.


Reflection

Take a dataset from an application you understand.

Identify one row and explain what the sample represents.

Then identify each feature column and explain what information it provides.

Finally identify the target and explain what the model would be expected to predict.
`
};

export default lesson7;