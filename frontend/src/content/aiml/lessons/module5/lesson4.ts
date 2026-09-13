const lesson4 = {
  title: "Supervised vs Unsupervised Learning",

  content: `
# Supervised vs Unsupervised Learning

## What You Will Learn

Machine learning problems can be divided into different learning settings depending on whether the desired target is known during training.

In this lesson, you will learn:

- What supervised learning is
- What unsupervised learning is
- Features and targets
- Training examples
- Mathematical intuition
- Regression
- Classification
- Binary classification
- Multiclass classification
- Clustering
- Dimensionality reduction
- Learning from labeled data
- Learning from unlabeled data
- How to identify the learning type
- Python examples
- NumPy examples
- scikit-learn examples
- Practical AI applications
- Common mistakes
- Practice
- Challenge

The central idea is:

Data
    ↓
Is a Target Available?
    ↓
Yes                         No
↓                           ↓
Supervised Learning         Unsupervised Learning
↓                           ↓
Prediction                  Structure Discovery
↓                           ↓
Regression / Classification Clustering / Dimensionality Reduction

---

# 1. What Is Machine Learning?

Machine learning is a set of methods that allow systems to learn useful patterns from data.

Instead of manually writing every rule, we provide examples and allow an algorithm to estimate a useful relationship or structure.

A simplified view is:

Data
    ↓
Learning Algorithm
    ↓
Model
    ↓
Prediction or Structure

The exact learning process depends on the problem.

---

# 2. The Most Important Question

Before choosing an algorithm, ask:

Do we have a known target for the training examples?

If the answer is:

Yes

the problem may be supervised learning.

If the answer is:

No

the problem may be unsupervised learning.

This is one of the most important first decisions in machine-learning problem definition.

---

# 3. Supervised Learning

Supervised learning uses examples where the desired outcome is known.

Suppose we have:

Study Hours
Attendance
Previous Score
Final Score

The first three can be features.

Final Score can be the target.

The learning problem is:

X → y

where:

X = input features

y = known target

The model attempts to learn:

y_hat = f(X)

where:

y_hat

is the prediction.

---

# 4. Mathematical Intuition of Supervised Learning

Suppose we have training observations:

(X1, y1)

(X2, y2)

...

(Xn, yn)

The learning algorithm tries to find a model:

f_theta

with parameters:

theta

such that:

f_theta(Xi)

is close to:

yi

according to a chosen objective.

A general training objective can be written as:

minimize:

(1/n) Σ L(
yi,
f_theta(Xi)
)

where:

L

is the loss function.

Therefore supervised learning has:

Inputs

and:

Known Outcomes

---

# 5. Example of a Regression Problem

Suppose:

X = Study Hours

y = Final Score

Training data:

1 → 45

2 → 55

3 → 65

4 → 75

5 → 85

We may fit a model such as:

y_hat = wx + b

The model learns:

w

and:

b

from the examples.

For a new input:

x = 6

the model may predict:

y_hat = 95

The target is numerical.

This is:

Regression.

---

# 6. What Is Regression?

Regression predicts a numerical quantity.

Examples:

- House price
- Temperature
- Student score
- Delivery time
- Electricity demand
- Sales revenue

Mathematically:

y ∈ R

The target belongs to a numerical space.

A model produces:

y_hat ∈ R

---

# 7. Simple Linear Regression

A simple model is:

y_hat = wx + b

where:

w = weight

b = bias

Suppose:

w = 10

b = 35

Then:

y_hat = 10x + 35

For:

x = 4

prediction:

y_hat = 10(4) + 35

= 75

Python:

def predict_score(
    study_hours
):
    return (
        10 * study_hours
        + 35
    )

print(
    predict_score(4)
)

Output:

75

---

# 8. Multiple Regression Features

Real problems often have several input features.

Suppose:

x1 = Study Hours

x2 = Attendance

x3 = Previous Score

A simple model can be:

y_hat =
w1x1
+
w2x2
+
w3x3
+
b

In vector form:

y_hat = w · x + b

This connects directly to the vector and dot-product mathematics learned earlier.

---

# 9. Regression With NumPy

Example:

import numpy as np

X = np.array([
    [2, 80],
    [4, 85],
    [6, 90],
    [8, 95]
])

w = np.array([
    5,
    0.5
])

b = 10

predictions = (
    X @ w
    + b
)

print(
    predictions
)

Here:

X

contains multiple observations.

w

contains model weights.

b

is the bias.

The matrix multiplication produces one prediction per observation.

---

# 10. Classification

Classification predicts a category or class.

Examples:

- Spam / Not Spam
- Fraud / Not Fraud
- Cat / Dog
- Approved / Rejected
- Churn / Stay

The target is categorical.

Instead of:

y = 72.4

we might have:

y = Spam

or:

y = 1

depending on the representation.

---

# 11. Binary Classification

Binary classification has two classes.

For example:

0 = Not Spam

1 = Spam

Then:

y ∈ {0, 1}

A model may estimate:

P(y = 1 | X)

For example:

0.82

A decision rule might be:

if probability >= 0.5:

predict 1

otherwise:

predict 0

The threshold is a modeling choice and can be changed according to the application.

---

# 12. Classification Mathematical Intuition

A classification model often produces a score or probability rather than directly reasoning in words.

Conceptually:

X
 ↓
Model
 ↓
Score / Probability
 ↓
Decision Rule
 ↓
Class

For example:

X
 ↓
P(Spam | X)
 ↓
0.92
 ↓
Threshold
 ↓
Spam

---

# 13. Multiclass Classification

Multiclass classification contains more than two classes.

Example:

0 = Cat

1 = Dog

2 = Rabbit

The model may output:

Cat = 0.20

Dog = 0.65

Rabbit = 0.15

The predicted class is:

Dog

because Dog has the largest predicted probability.

---

# 14. Classification Example With scikit-learn

Example:

from sklearn.linear_model import LogisticRegression

model = LogisticRegression()

model.fit(
    X_train,
    y_train
)

predictions = model.predict(
    X_test
)

The model learns from:

X_train

and:

y_train

Then predicts classes for:

X_test

The important concept is not merely the library call.

The important concept is:

Features
    ↓
Known Classes
    ↓
Learning
    ↓
Classifier
    ↓
New Predictions

---

# 15. Supervised Learning Structure

A supervised-learning dataset can be written:

D =
{
(X1, y1),
(X2, y2),
...,
(Xn, yn)
}

The algorithm observes both:

Xi

and:

yi

during training.

The goal is to learn:

f_theta

that maps:

X → y_hat

---

# 16. What Is Unsupervised Learning?

Unsupervised learning works with data where the desired target is not provided.

Instead of:

X → known y

we have:

X

and the algorithm searches for structure.

Possible goals include:

- Finding groups
- Discovering patterns
- Compressing representations
- Exploring relationships
- Detecting unusual structure

The simplified workflow is:

Data
    ↓
Algorithm
    ↓
Pattern Discovery
    ↓
Structure

---

# 17. Clustering

Clustering groups observations according to a chosen notion of similarity or distance.

Suppose we have:

A = [2, 3]

B = [2, 4]

C = [8, 9]

D = [9, 8]

A clustering algorithm may identify:

Cluster 1:

A, B

Cluster 2:

C, D

The algorithm does not receive the correct cluster label for each observation beforehand.

It discovers a grouping based on the chosen method.

---

# 18. Mathematical Intuition of Clustering

Suppose we want to divide observations into:

k

groups.

A clustering algorithm attempts to organize observations so that points assigned to the same cluster are similar according to the algorithm's objective.

For k-means, a common objective is to minimize:

Σ ||xi - μc(i)||²

where:

xi = observation

μc(i) = centroid of the cluster assigned to xi

The exact clustering objective depends on the algorithm.

---

# 19. K-Means Example

Example:

from sklearn.cluster import KMeans

model = KMeans(
    n_clusters=2,
    random_state=42
)

model.fit(
    X
)

labels = model.labels_

print(
    labels
)

The labels are assigned by the algorithm.

They are not known target labels supplied as ground truth.

---

# 20. Important Difference

In supervised classification:

The class labels are known during training.

Example:

Cat

Dog

Cat

Dog

In unsupervised clustering:

The algorithm attempts to discover groups.

Example:

Unknown
Unknown
Unknown
Unknown

and the algorithm finds:

Group 0

Group 1

This distinction is fundamental.

---

# 21. Classification vs Clustering

Classification:

Known categories

Goal:

Predict category for new observations.

Clustering:

Unknown groups

Goal:

Discover groups in the data.

Therefore:

Classification = prediction

Clustering = structure discovery

---

# 22. Example — Customer Data

Suppose we have:

Age

Annual Spending

Purchase Frequency

but no predefined customer segment.

An unsupervised clustering algorithm might discover groups such as:

High spending customers

Occasional customers

Frequent low-spending customers

The exact groups depend on the data and algorithm.

---

# 23. Dimensionality Reduction

Another unsupervised learning task is dimensionality reduction.

Suppose:

X

contains:

100 features.

We may want to represent the data using:

2 features

for visualization or compression.

The goal is to preserve useful structure while reducing dimensionality.

Conceptually:

High-Dimensional Data
        ↓
Transformation
        ↓
Lower-Dimensional Representation

---

# 24. Why Dimensionality Reduction Helps

High-dimensional datasets can be difficult to:

- Visualize
- Store
- Analyze
- Process

A lower-dimensional representation may make important structure easier to inspect.

Examples of dimensionality-reduction methods include:

- PCA
- Truncated SVD
- Other learned representations

The method should be chosen according to the problem.

---

# 25. Principal Component Analysis Intuition

Principal Component Analysis, or PCA, finds directions in feature space that capture important variation under its mathematical objective.

Conceptually:

Original Features
        ↓
Find Important Directions
        ↓
Project Data
        ↓
Lower-Dimensional Representation

If a dataset has:

50 features

PCA may create:

2 principal components

for visualization.

---

# 26. PCA With scikit-learn

Example:

from sklearn.decomposition import PCA

pca = PCA(
    n_components=2
)

X_reduced = pca.fit_transform(
    X
)

print(
    X_reduced.shape
)

If:

X.shape = (100, 10)

then:

X_reduced.shape

will be:

(100, 2)

The number of observations remains:

100

while the representation changes from:

10 dimensions

to:

2 dimensions.

---

# 27. Supervised vs Unsupervised Mathematical View

Supervised:

Input:

(X, y)

Learn:

f_theta(X)

Predict:

y_hat

Unsupervised:

Input:

X

Learn:

Structure g(X)

The second formulation is intentionally general because different unsupervised methods solve different objectives.

---

# 28. How Do We Identify the Learning Type?

Ask:

Is there a meaningful target?

If yes:

Supervised learning may be appropriate.

Ask:

Are we trying to predict a numerical target?

Then:

Regression.

Are we trying to predict a class?

Then:

Classification.

If no target:

Unsupervised learning may be appropriate.

Are we trying to discover groups?

Then:

Clustering.

Are we trying to reduce dimensions?

Then:

Dimensionality reduction.

---

# 29. Real-World Example — Email

Suppose we have:

Message text

and:

Spam label

The target is known.

Therefore:

Supervised learning.

If the labels are:

Spam

Not Spam

the task is:

Classification.

---

# 30. Real-World Example — Customer Segmentation

Suppose we have:

Age

Spending

Purchase Frequency

but no segment labels.

We want to discover natural groups.

Therefore:

Unsupervised learning.

A possible method is:

Clustering.

---

# 31. Real-World Example — House Price

Suppose:

Area

Bedrooms

Location

Age

Price

The target:

Price

is numerical.

Therefore:

Supervised learning.

Task:

Regression.

---

# 32. Real-World Example — Image Grouping

Suppose we have thousands of image feature vectors without labels.

We want to identify groups of visually similar images.

A clustering approach may be appropriate.

This is:

Unsupervised structure discovery.

---

# 33. Real-World Example — Feature Compression

Suppose:

X.shape = (10,000, 100)

We want to visualize the dataset in two dimensions.

A dimensionality-reduction technique can produce:

X_reduced.shape = (10,000, 2)

This can help visualize broad structure.

---

# 34. Supervised Learning Requires Target Design

Having a column in a dataset does not automatically make it a useful target.

A target should correspond to:

What we actually want to predict.

For example:

"Customer behavior"

is vague.

A better target is:

"Whether the customer cancels within 30 days."

Target definition therefore matters.

---

# 35. Unsupervised Learning Still Requires a Goal

Unsupervised does not mean:

"No objective."

There is still an objective.

For clustering:

Find useful groups according to a clustering criterion.

For dimensionality reduction:

Create a lower-dimensional representation according to the method's objective.

Therefore both supervised and unsupervised learning require a defined purpose.

---

# 36. Mathematical Connection to Earlier Lessons

This lesson connects directly with earlier concepts.

Features:

X

Target:

y

Model:

f_theta

Prediction:

y_hat

Error:

y - y_hat

Loss:

L(y, y_hat)

Optimization:

Minimize the selected objective.

This gives:

Mathematics
    ↓
Features
    ↓
Model
    ↓
Prediction
    ↓
Loss
    ↓
Optimization

---

# 37. Practical Experiment — Regression

Create:

X = Study Hours

y = Score

Train:

LinearRegression

Then:

1. Split data.
2. Train the model.
3. Predict on held-out data.
4. Calculate MAE.
5. Compare with a simple baseline.

The baseline comparison will be studied in Lesson 5.

---

# 38. Practical Experiment — Classification

Create a binary target:

0 = Not Churned

1 = Churned

Use features such as:

Usage

SupportCalls

SubscriptionLength

Then:

1. Split the data.
2. Train a classifier.
3. Predict.
4. Evaluate.
5. Compare with a majority-class baseline.

---

# 39. Practical Experiment — Clustering

Create two-dimensional points.

Use:

KMeans

with:

n_clusters=2

Then:

1. Fit the model.
2. Get cluster labels.
3. Compare the groups.
4. Visualize the data.
5. Explain that cluster numbers do not have inherent semantic meaning.

For example:

Cluster 0

is not automatically:

"Premium"

unless we interpret its feature characteristics.

---

# 40. Practical Experiment — PCA

Create:

100 observations

with:

5 numerical features.

Apply:

PCA(n_components=2)

Then:

1. Check original shape.
2. Check reduced shape.
3. Display the transformed data.
4. Plot the two principal components.
5. Explain what dimensionality reduction changed.

---

# Practice

## Practice 1

Identify the learning type:

Predict house price.

## Practice 2

Identify the learning type:

Predict spam.

## Practice 3

Identify the learning type:

Group customers into behavioral segments without labels.

## Practice 4

Identify the learning type:

Reduce 100 features to 2 for visualization.

## Practice 5

Explain the difference between:

Classification

and:

Clustering

## Practice 6

Explain why:

Predict final score

is regression.

## Practice 7

Explain why:

Predict disease category

is classification.

---

# Challenge — Learning-Type Decision System

Create a Python decision helper.

Input:

problem description

The program should classify the problem into:

- Regression
- Classification
- Clustering
- Dimensionality Reduction

Your program should explain:

1. Whether a target is available.
2. Whether the target is numerical or categorical.
3. Whether the objective is prediction or structure discovery.
4. Which learning family is appropriate.
5. One suitable algorithm family.

This is a reasoning exercise rather than a production algorithm.

---

# Common Mistakes

## Mistake 1 — Confusing Classification and Clustering

Classification uses known labels.

Clustering discovers groups.

## Mistake 2 — Calling Every Numerical Problem Regression

The target must be a numerical quantity that is meaningful to predict.

## Mistake 3 — Assuming Unsupervised Learning Has No Objective

It still optimizes or follows a defined structure-discovery objective.

## Mistake 4 — Choosing an Algorithm Before Defining the Problem

Start with:

What are we trying to predict or discover?

## Mistake 5 — Confusing Cluster Labels With Real Categories

Cluster 0 and Cluster 1 are algorithm-generated identifiers.

They do not automatically have semantic meaning.

## Mistake 6 — Ignoring Target Availability

A model cannot be trained in supervised fashion using a target that does not exist or cannot be defined consistently.

---

# Quick Check

1. What is supervised learning?

Learning from examples with known targets.

2. What is unsupervised learning?

Learning useful structure from data without supplied target labels.

3. What is regression?

Predicting a numerical target.

4. What is classification?

Predicting a category or class.

5. What is binary classification?

Classification with two possible classes.

6. What is multiclass classification?

Classification with more than two possible classes.

7. What is clustering?

Grouping observations according to a chosen similarity or distance objective.

8. What is dimensionality reduction?

Transforming data into a lower-dimensional representation.

9. What is X?

The feature representation.

10. What is y?

The target in a supervised-learning problem.

11. What is y_hat?

The model prediction.

12. How do you decide between supervised and unsupervised learning?

Determine whether a meaningful target is available for training.

13. Why is target definition important?

Because the target determines what the model is actually being asked to learn.

---

# Key Takeaways

Supervised learning uses known target values.

Unsupervised learning searches for useful structure without supplied target labels.

Regression predicts numerical values.

Classification predicts categories.

Binary classification contains two classes.

Multiclass classification contains multiple classes.

Clustering discovers groups.

Dimensionality reduction creates lower-dimensional representations.

The mathematical supervised-learning structure is:

(X, y)
    ↓
Learning Algorithm
    ↓
Model
    ↓
y_hat

The unsupervised structure is:

X
    ↓
Learning Algorithm
    ↓
Discovered Structure

The first question should always be:

What problem are we trying to solve?

Then determine:

Target available?

Prediction or structure discovery?

Numerical or categorical target?

Only after that should the algorithm family be selected.
`,
};

export default lesson4;