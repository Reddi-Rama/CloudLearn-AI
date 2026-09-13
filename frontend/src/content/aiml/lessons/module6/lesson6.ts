const lesson = {
  lesson: "06",
  title: "Data Preparation for AI",

  description: `
# Lesson 06 — Data Preparation for AI

## What You Will Learn

In this lesson, you will learn:

- Why raw data cannot always be directly used by AI models.
- The major stages of data preparation.
- Handling missing values.
- Removing duplicates.
- Correcting data types and inconsistent values.
- Encoding categorical data.
- Feature scaling.
- Separating features and targets.
- Using Pandas and scikit-learn for preprocessing.

---

## 1. What Is Data Preparation?

Data preparation is the process of transforming raw data into a form that can be effectively used for analysis and machine learning.

The general process is:

\`\`\`
Raw Data → Clean Data → Prepared Data → Model
\`\`\`

Raw data may contain:

- Missing values
- Duplicates
- Wrong data types
- Inconsistent values
- Categorical values
- Different numerical scales

Data preparation addresses these issues.

---

## 2. Missing Values

Consider:

\`\`\`
Age
20
21
NaN
23
24
\`\`\`

NaN represents a missing value.

We can inspect missing values using Pandas:

\`\`\`python
import pandas as pd

data = pd.read_csv("students.csv")

print(data.isnull().sum())
\`\`\`

Depending on the problem, missing values may be:

- Removed
- Replaced with a suitable statistic
- Handled using a dedicated strategy

The correct approach depends on the meaning and importance of the missing information.

---

## 3. Removing Duplicates

Suppose the same student record appears twice.

\`\`\`python
data = data.drop_duplicates()
\`\`\`

Duplicates can distort analysis and may give certain examples unintended importance.

Always inspect duplicates before automatically removing them, because repeated records can sometimes be legitimate.

---

## 4. Correct Data Types

A dataset might contain:

\`\`\`
Age
"20"
"21"
"22"
\`\`\`

These values may be stored as strings instead of numbers.

We can convert them:

\`\`\`python
data["Age"] = pd.to_numeric(
    data["Age"],
    errors="coerce"
)
\`\`\`

Incorrect values become missing values and can then be handled appropriately.

---

## 5. Categorical Data

Machine-learning algorithms generally require numerical representations.

Suppose:

\`\`\`
City
Mumbai
Delhi
Hyderabad
Mumbai
\`\`\`

These are categorical values.

One common technique is one-hot encoding.

Conceptually:

\`\`\`
Mumbai      → [1,0,0]
Delhi       → [0,1,0]
Hyderabad   → [0,0,1]
\`\`\`

scikit-learn can perform this transformation.

\`\`\`python
from sklearn.preprocessing import OneHotEncoder

encoder = OneHotEncoder(
    sparse_output=False
)

encoded = encoder.fit_transform(
    data[["City"]]
)

print(encoded)
\`\`\`

The exact preprocessing method depends on the model and the meaning of the category.

---

## 6. Feature Scaling

Suppose we have:

\`\`\`
Age       → 18 to 60
Income    → 20,000 to 500,000
\`\`\`

The scales are very different.

Some algorithms are sensitive to feature magnitude.

A common technique is standardization:

\`\`\`
z = (x - μ) / σ
\`\`\`

where:

- x = original value
- μ = mean
- σ = standard deviation

Using scikit-learn:

\`\`\`python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

scaled_data = scaler.fit_transform(
    data[["Age", "Income"]]
)
\`\`\`

---

## 7. Separating Features and Target

Suppose our dataset contains:

\`\`\`
quiz_score
practice_score
attendance
needs_support
\`\`\`

The first three are features.

The final column is the target.

We can separate them:

\`\`\`python
X = data[
    ["quiz_score", "practice_score", "attendance"]
]

y = data["needs_support"]
\`\`\`

Therefore:

\`\`\`
X = Features
y = Target
\`\`\`

---

## 8. Why Preparation Must Be Careful

Data preparation itself can accidentally introduce problems.

For example, suppose we calculate the mean using the entire dataset before splitting it into training and testing data.

Information from the test set may influence the transformation.

This can contribute to data leakage.

A safer workflow is to learn preprocessing parameters from training data and apply the learned transformation to validation/test data.

This becomes especially important in complete machine-learning pipelines.

---

## 9. Using a Pipeline

scikit-learn provides pipelines for connecting preprocessing and modeling steps.

A simplified example:

\`\`\`python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipeline = Pipeline([
    ("scaler", StandardScaler()),
    ("model", LogisticRegression())
])
\`\`\`

The pipeline helps organize preprocessing and model training as a single workflow.

---

## 10. Complete Preparation Example

\`\`\`python
import pandas as pd

data = pd.DataFrame({
    "age": [20, 21, None, 23, 24],
    "score": [80, 75, 90, None, 85],
    "needs_support": [0, 0, 0, 1, 0]
})

print("Missing values:")
print(data.isnull().sum())

data["age"] = data["age"].fillna(
    data["age"].mean()
)

data["score"] = data["score"].fillna(
    data["score"].mean()
)

X = data[["age", "score"]]
y = data["needs_support"]

print("\\nPrepared Features:")
print(X)

print("\\nTarget:")
print(y)
\`\`\`

This demonstrates:

\`\`\`
Inspect
   ↓
Handle Missing Values
   ↓
Separate Features
   ↓
Separate Target
\`\`\`

---

## Practice Task

Take a small dataset and perform:

1. Missing-value inspection.
2. Duplicate inspection.
3. Data-type inspection.
4. Missing-value handling.
5. Categorical encoding.
6. Feature/target separation.
7. Feature scaling where appropriate.

Explain why each preprocessing step is necessary.

---

## Challenge

Create a preprocessing workflow for a dataset containing:

- Age
- City
- Study Hours
- Attendance
- Previous Score
- Needs Support

Your workflow should:

- Handle missing values.
- Encode City.
- Scale appropriate numerical features.
- Separate X and y.
- Prepare the data for a classification model.

---

## Quick Check

1. What is data preparation?
2. Why must missing values be handled?
3. Why can duplicates be problematic?
4. Why are categorical values often encoded?
5. What is feature scaling?
6. What does standardization do?
7. What are X and y?
8. What is data leakage?
9. Why can preprocessing cause leakage?
10. Why are pipelines useful?

---

## Key Takeaways

Data preparation transforms raw information into a form suitable for AI.

The general process is:

\`\`\`
Raw Data
→ Inspection
→ Cleaning
→ Transformation
→ Feature/Target Separation
→ Model Ready Data
\`\`\`

Good preprocessing improves the reliability of the machine-learning workflow, but every transformation should be chosen based on the dataset and the problem.
`
};

export default lesson;