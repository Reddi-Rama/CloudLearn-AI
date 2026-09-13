const lesson2 = {
  title: "Features and Labels",

  content: `
# Features and Labels

## What You Will Learn

A machine-learning model needs two fundamental things:

- Information it can use
- An outcome it should learn to predict

The information provided to the model is represented using:

Features

The outcome the model is expected to predict is represented using:

Label / Target

In this lesson, you will learn:

- What features are
- What labels are
- What targets are
- Feature vectors
- Feature matrices
- Numerical features
- Categorical features
- Binary features
- Ordinal features
- Temporal features
- Text features
- Image features
- Input representation
- Target representation
- Regression targets
- Classification targets
- Prediction-time information
- Data leakage intuition
- Mathematical notation
- Python representation
- NumPy representation
- Pandas representation
- scikit-learn workflow
- Practical feature engineering intuition
- Common mistakes
- Practice
- Challenge

The central idea is:

Real-World Problem
        ↓
Available Information
        ↓
Features
        ↓
Machine-Learning Model
        ↓
Prediction
        ↓
Target

---

# 1. What Is a Feature?

A feature is an input variable used by a machine-learning model to make a prediction.

Suppose we want to predict a student's final score.

We may have:

Study Hours

Attendance

Previous Score

Assignment Completion

These can be features.

For one student:

Study Hours = 5

Attendance = 90

Previous Score = 78

Assignment Completion = 0.85

The model receives these values as inputs.

---

# 2. Mathematical Representation of Features

Suppose we have three features:

x1 = Study Hours

x2 = Attendance

x3 = Previous Score

We can represent one student as a feature vector:

x =
[
x1
x2
x3
]

For example:

x =
[
5
90
78
]

This is a vector.

Therefore the concept learned earlier:

Vector

is now used directly in machine learning.

A machine-learning model does not see:

"student studies a lot"

as a mathematical object.

It receives numerical representations such as:

5

90

78

---

# 3. Feature Vector

A feature vector is the numerical representation of one observation.

Suppose:

Student A:

[5, 90, 78]

Student B:

[3, 75, 62]

Student C:

[7, 95, 84]

Each row can be viewed as one feature vector.

Mathematically:

x1 =
[
5
90
78
]

x2 =
[
3
75
62
]

x3 =
[
7
95
84
]

The individual observations become points or vectors in feature space.

---

# 4. Feature Matrix

When we have many observations, their feature vectors can be arranged into a matrix.

X =
[
  5  90  78
  3  75  62
  7  95  84
  4  80  70
]

Here:

Rows

represent observations.

Columns

represent features.

Therefore:

X has shape:

4 × 3

This means:

4 observations

3 features

---

# 5. Mathematical Notation

A common notation is:

X ∈ R^(n × d)

where:

n = number of observations

d = number of features

For:

X ∈ R^(100 × 5)

we have:

100 observations

5 features

This notation becomes extremely useful when understanding machine-learning algorithms mathematically.

---

# 6. What Is a Label?

A label is the known outcome associated with an observation.

The term:

target

is also commonly used.

Suppose:

Features:

Study Hours

Attendance

Previous Score

Target:

Final Score

Then:

X = features

y = target

The learning problem becomes:

X
 ↓
Model
 ↓
y_hat

where:

y_hat

is the predicted target.

---

# 7. Feature-Target Relationship

Suppose our dataset contains:

Study Hours | Attendance | Previous Score | Final Score

The first three columns can be inputs:

X

The final column is the target:

y

Therefore:

X → y

The machine-learning model attempts to learn a useful relationship between:

X

and:

y

Conceptually:

y ≈ f(X)

The model tries to approximate the unknown relationship.

---

# 8. Regression Target

A regression target is numerical.

Examples:

- House price
- Temperature
- Student score
- Delivery time
- Electricity consumption

For example:

y = 87.5

is a numerical target.

The model may predict:

y_hat = 85.9

The difference can then be measured using regression error metrics.

---

# 9. Classification Target

A classification target represents a class or category.

Examples:

Spam / Not Spam

Fraud / Not Fraud

Cat / Dog

Approved / Rejected

The target may be represented as:

0

or:

1

for binary classification.

For example:

0 = Not Spam

1 = Spam

Then:

y = 1

means the observation belongs to the positive class under this encoding.

---

# 10. Binary Classification

Suppose:

y ∈ {0,1}

Then the possible target values are:

0

and:

1

Example:

0 = Not Churned

1 = Churned

A model may predict a probability:

P(y = 1 | X)

For example:

0.82

A decision rule may convert that probability into a class.

For example, using a threshold of 0.5:

0.82 > 0.5

→ predict class 1.

The threshold is a modeling decision and can be changed depending on the problem.

---

# 11. Multiclass Classification

Some classification problems contain more than two classes.

Example:

0 = Cat

1 = Dog

2 = Rabbit

Then:

y ∈ {0,1,2}

The model may produce class probabilities:

Cat = 0.10

Dog = 0.75

Rabbit = 0.15

The predicted class is:

Dog

because it has the highest predicted probability.

---

# 12. Numerical Features

A numerical feature contains numerical quantities.

Examples:

Age

Salary

Temperature

Distance

Study Hours

Numerical features can be:

Continuous

or:

Discrete

Continuous values can take many values within a range.

Example:

Temperature = 27.38

Discrete values often represent counts.

Example:

Number of purchases = 5

The distinction can influence preprocessing choices.

---

# 13. Categorical Features

A categorical feature represents groups or categories.

Examples:

City

Department

Payment Method

Browser

Device Type

For example:

Department:

IT

CSE

ECE

Mechanical

These values are categories rather than numerical quantities.

---

# 14. Why Categories Need Representation

A model cannot automatically treat:

IT

CSE

ECE

as numerical quantities in the same way it treats:

10

20

30

A categorical representation must therefore be chosen.

Common approaches include:

One-hot encoding

Ordinal encoding

Other task-specific representations

The encoding should preserve the intended meaning.

---

# 15. One-Hot Encoding Intuition

Suppose:

Color

has three categories:

Red

Blue

Green

A one-hot representation can be:

Red   → [1, 0, 0]

Blue  → [0, 1, 0]

Green → [0, 0, 1]

The values indicate category membership.

No numerical ordering is implied.

This is important because:

Red = 1

Blue = 2

Green = 3

would incorrectly suggest an ordered numerical relationship.

---

# 16. Ordinal Features

Some categories have a meaningful order.

Example:

Education Level:

School

Bachelor

Master

PhD

Or:

Customer Satisfaction:

Low

Medium

High

In such situations, an ordinal representation may be appropriate.

The important distinction is:

Categorical

does not necessarily mean:

ordered.

---

# 17. Binary Features

A binary feature has two possible states.

Examples:

IsMember

Yes / No

HasLoan

True / False

EmailVerified

0 / 1

A binary feature can often be represented as:

0

and:

1

The meaning of each value should be clearly defined.

---

# 18. Temporal Features

Temporal information describes time.

Examples:

Date

Time

Month

Day of Week

Year

Hour

Transaction Timestamp

Time information may contain useful patterns.

For example:

sales may vary by:

weekday

month

season

hour

A timestamp can therefore sometimes be transformed into useful features.

---

# 19. Temporal Feature Transformation

Suppose:

timestamp = 2026-09-13 15:30

It may be transformed into:

Year = 2026

Month = 9

Day = 13

Hour = 15

DayOfWeek = Sunday

The correct representation depends on the problem.

Time-related features must also respect the prediction-time boundary.

---

# 20. Text Features

Text is another feature type.

Examples:

Customer Review

Email Message

Product Description

News Article

The model generally cannot directly use raw language as ordinary numerical input.

The text must be represented numerically.

Possible representations include:

- Word counts
- TF-IDF
- Embeddings
- Learned neural representations

The representation selected depends on the task.

---

# 21. Image Features

Images contain visual information.

A computer-vision system can represent an image numerically using:

Pixel values

or:

Learned image features

For example, a grayscale image can be represented as:

[
  0   50  100
  120 180 255
]

A color image may contain multiple channels.

Therefore:

Raw Image
   ↓
Numerical Representation
   ↓
Feature Representation
   ↓
Model

---

# 22. Mixed Feature Dataset

A real dataset can contain multiple feature types.

Example:

Age → Numerical

Department → Categorical

Account Type → Categorical

Registration Date → Temporal

Review → Text

Image → Image

A machine-learning pipeline may therefore contain different preprocessing steps for different columns.

---

# 23. Feature Space

Suppose we have two features:

Study Hours

Attendance

A student can be represented as:

x = [5, 90]

Another:

x = [2, 70]

Each observation is a point in a two-dimensional feature space.

With three features:

x = [5, 90, 78]

we have a three-dimensional feature space.

With many features:

x ∈ R^d

The model operates mathematically in this feature space.

---

# 24. Features and Geometry

Suppose:

A = [5, 90]

B = [6, 92]

C = [10, 40]

A and B may be relatively close under an appropriate distance measure.

A and C may be farther apart.

This connects machine-learning features to the:

Distance & Similarity

concept studied earlier.

The meaning of distance still depends on feature scale and representation.

---

# 25. Feature Scaling

Suppose:

Age ranges from:

18 to 60

but:

Annual Income ranges from:

20,000 to 2,000,000

A numerical distance calculation may be dominated by Income.

This demonstrates why feature scaling can matter.

Common approaches include:

Standardization

Min-max scaling

Other problem-specific transformations

Not every algorithm requires the same treatment.

---

# 26. Target Leakage Intuition

Suppose the goal is:

Predict whether a customer will cancel next month.

Available today:

Age

Usage

Plan Type

Support Calls

Suppose the dataset also contains:

Cancellation Date

Using the cancellation date to predict cancellation would reveal information from the future.

This is a form of:

Target leakage

or:

Data leakage

The key question is:

Would this information truly be available when the prediction is made?

---

# 27. Prediction-Time Information

A machine-learning feature should be evaluated using:

"When would this value be known?"

Suppose:

Goal:

Predict tomorrow's sales at 6 PM today.

Features available today:

Today's sales

Current inventory

Historical sales

Current promotions

Information that becomes known tomorrow should not be used.

This gives a critical principle:

Features must respect the prediction-time boundary.

---

# 28. Mathematical View of Prediction

Let:

X

be the available feature matrix.

Let:

y

be the target.

A model is represented as:

f_theta(X)

where:

theta

represents model parameters.

The prediction is:

y_hat = f_theta(X)

Training attempts to learn:

theta

such that:

y_hat

is useful for predicting:

y

---

# 29. Feature Matrix and Target Vector in NumPy

Example:

import numpy as np

X = np.array([
    [5, 90, 78],
    [3, 75, 62],
    [7, 95, 84],
    [4, 80, 70]
])

y = np.array([
    88,
    65,
    94,
    76
])

print("X:")
print(X)

print("y:")
print(y)

print("X shape:", X.shape)

print("y shape:", y.shape)

Output:

X:
[
 [5 90 78]
 [3 75 62]
 [7 95 84]
 [4 80 70]
]

y:
[88 65 94 76]

X shape:

(4, 3)

y shape:

(4,)

This tells us:

4 observations

3 input features

4 target values

---

# 30. Separating Features and Target With Pandas

Example:

import pandas as pd

df = pd.DataFrame({
    "StudyHours": [5, 3, 7, 4],
    "Attendance": [90, 75, 95, 80],
    "PreviousScore": [78, 62, 84, 70],
    "FinalScore": [88, 65, 94, 76]
})

X = df[
    [
        "StudyHours",
        "Attendance",
        "PreviousScore"
    ]
]

y = df[
    "FinalScore"
]

print(X)

print(y)

The model receives:

X

while the learning target is:

y

---

# 31. A First Machine-Learning Model

We can train a simple regression model.

Example:

from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(
    X,
    y
)

predictions = model.predict(
    X
)

print(
    predictions
)

This demonstrates the basic flow:

Features
    ↓
Model
    ↓
Predictions

In a proper evaluation workflow, we should not train and evaluate on the same data.

That issue will be handled in Lesson 3.

---

# 32. Feature Names Matter

Good feature names communicate meaning.

Prefer:

StudyHours

AttendancePercentage

PreviousScore

Instead of unclear names such as:

x1

x2

x3

during practical development.

Mathematical notation can use:

x1, x2, x3

while code can use meaningful variable names.

Both representations can coexist.

---

# 33. Target Definition Changes the Problem

Consider:

"Predict customer value."

This is incomplete.

What exactly is customer value?

Possibilities:

Purchase amount next month

Revenue over 90 days

Lifetime value

Number of future orders

Different target definitions create different machine-learning problems.

Therefore target design is a modeling decision.

---

# 34. Prediction Horizon

A target can also depend on time.

For example:

Predict whether a customer will churn:

within 7 days

within 30 days

within 90 days

These are different targets.

The prediction horizon must be defined clearly.

---

# 35. Features Available at Prediction Time

Suppose:

Prediction Time = January 1

A feature is:

Total Purchases During January

This feature is not available on January 1.

Using it would violate the prediction-time boundary.

Instead, the model may use:

Total Purchases Before January 1

This creates a valid temporal feature.

---

# 36. Feature Selection Intuition

Not every available column should automatically become a feature.

Ask:

Does it contain useful information?

Is it available at prediction time?

Is it valid for the intended deployment environment?

Could it introduce leakage?

Does it duplicate another feature?

Is its representation appropriate?

Feature selection therefore involves reasoning, not just deleting columns.

---

# 37. A Feature Engineering Example

Suppose raw data contains:

DateOfBirth

We may create:

Age

This is an example of transforming information into a more useful representation.

Suppose raw data contains:

TransactionTimestamp

We may derive:

Hour

DayOfWeek

Month

Again:

Raw Information
    ↓
Transformation
    ↓
Useful Feature

Feature engineering becomes more important in later modules.

---

# 38. Feature and Label Workflow

A practical supervised-learning dataset can be represented as:

Raw Dataset
      ↓
Define Prediction Problem
      ↓
Identify Features
      ↓
Define Target
      ↓
Check Prediction-Time Availability
      ↓
Prepare Representations
      ↓
X and y
      ↓
Machine-Learning Model

---

# 39. Example — Spam Detection

Problem:

Predict whether an email is spam.

Possible features:

Message length

Number of links

Text representation

Sender-related information available at classification time

Target:

Spam

The target can be:

0 = Not Spam

1 = Spam

Therefore:

X = email features

y = spam label

---

# 40. Example — House Price Prediction

Problem:

Predict house price.

Possible features:

Area

Number of bedrooms

Location representation

Age of building

Target:

Price

Mathematically:

X =
[Area, Bedrooms, Location, Age]

y =
Price

The model learns:

y_hat = f(X)

---

# 41. Example — Customer Churn

Problem:

Predict whether a customer will leave.

Features:

Usage

Subscription duration

Support interactions

Plan information

Target:

Churn

Possible encoding:

0 = Stay

1 = Churn

The critical question remains:

Are all these values available when the prediction is generated?

---

# 42. Practical Experiment

Create a dataset with:

10 observations

and:

4 features.

Use:

Age

StudyHours

Attendance

PreviousScore

Target:

FinalScore

Perform:

1. Create the DataFrame.
2. Separate X and y.
3. Print X.
4. Print y.
5. Print shapes.
6. Identify numerical features.
7. Explain what the target represents.
8. Train a simple model.
9. Generate predictions.
10. Explain why evaluating on the same data is not sufficient.

---

# Practice

## Practice 1

Identify features and target:

A dataset contains:

HoursStudied

Attendance

AssignmentScore

FinalExamScore

Which are features?

Which is the target?

## Practice 2

Determine whether each is numerical, categorical, binary, temporal, text, or image data.

- Age
- Department
- IsPaidMember
- RegistrationDate
- ReviewText
- ProfileImage

## Practice 3

Create a feature vector containing:

Age

Attendance

Study Hours

## Practice 4

Create a feature matrix containing:

5 observations

and:

3 features

## Practice 5

Create a binary classification target using:

0

and:

1

## Practice 6

Explain why:

CancellationDate

may be an invalid feature when predicting cancellation before the customer cancels.

---

# Challenge — Feature and Target Design

Choose one real-world AI problem.

Examples:

- Student performance prediction
- Spam detection
- Customer churn
- House price prediction
- Loan approval

Write:

1. Problem statement.
2. Prediction target.
3. Prediction horizon.
4. At least five possible features.
5. Type of every feature.
6. Which features are available at prediction time.
7. Which features could cause leakage.
8. Numerical representation of the data.
9. Shape of X.
10. Shape of y.

Then implement the dataset structure in Python.

---

# Common Mistakes

## Mistake 1 — Calling Everything a Feature

The target is not an input feature for the supervised-learning task being defined.

## Mistake 2 — Poor Target Definition

"Predict customer behavior" is too vague.

Define exactly what should be predicted.

## Mistake 3 — Using Future Information

Only information available at prediction time should be considered.

## Mistake 4 — Treating Categories as Arbitrary Numbers

Encoding:

Red = 1

Blue = 2

Green = 3

may incorrectly imply numerical ordering.

## Mistake 5 — Ignoring Feature Scale

Different numerical ranges can affect some models and distance calculations.

## Mistake 6 — Training and Evaluating on the Same Data

This can give an overly optimistic view of performance.

The correct evaluation approach will be covered in Lesson 3.

---

# Quick Check

1. What is a feature?

An input variable used by a model.

2. What is a label?

The known outcome associated with an observation.

3. What is a target?

The outcome the model is expected to predict.

4. What is X?

A common representation of the feature matrix.

5. What is y?

A common representation of the target.

6. What is a feature vector?

The feature values describing one observation.

7. What is a feature matrix?

A collection of feature vectors organized as rows and columns.

8. What is a regression target?

A numerical outcome.

9. What is a classification target?

A categorical outcome or class.

10. What is prediction-time information?

Information that would genuinely be available when the prediction is made.

11. Why is prediction time important?

It prevents using future or unavailable information.

12. What is target leakage?

When information related to the target, especially information unavailable at prediction time, improperly enters the model inputs.

13. Why are features represented numerically?

Machine-learning algorithms operate on mathematical representations of data.

---

# Key Takeaways

A machine-learning problem needs:

Features

and:

Target

Features represent inputs.

The target represents the desired outcome.

One observation can be represented as a feature vector.

Multiple observations form a feature matrix.

Mathematically:

X ∈ R^(n × d)

represents:

n observations

and:

d features.

A supervised learning problem can be represented as:

X → Model → y_hat

Different problems can have:

Numerical targets

Categorical targets

Binary targets

Multiclass targets

Features can be:

Numerical

Categorical

Binary

Ordinal

Temporal

Text

Image

Feature representation must preserve useful meaning.

Most importantly:

A feature must be valid at prediction time.

The central progression is:

Real-World Problem
      ↓
Prediction Target
      ↓
Available Information
      ↓
Features
      ↓
Numerical Representation
      ↓
X
      ↓
Machine-Learning Model
      ↓
y_hat
`
};

export default lesson2;