const lesson = {
  lesson: "07",
  title: "Preparing Data for Machine Learning",

  content: `
# Lesson 07 — Preparing Data for Machine Learning

## What You Will Learn

In this lesson, you will learn:

- Why data preparation is necessary.
- How to inspect a dataset.
- How to identify missing values.
- How to handle numerical data.
- How categorical data can be represented.
- Why feature scaling can matter.
- How preprocessing affects model performance.
- How to build a basic preprocessing workflow.

## 1. Why Data Preparation Matters

Machine-learning models learn from data.

Raw data is rarely ready to be given directly to a model.

A dataset may contain:

- Missing values.
- Incorrect values.
- Different numerical scales.
- Categorical values.
- Duplicate records.
- Irrelevant columns.
- Inconsistent formats.

Therefore, preprocessing is an important stage of the AI workflow.

## 2. Basic Workflow

A simplified process is:

\`\`\`text
Raw Data
   ↓
Inspect
   ↓
Clean
   ↓
Transform
   ↓
Select Features
   ↓
Prepare Target
   ↓
Split Data
   ↓
Train Model
\`\`\`

## 3. Inspecting Data with Pandas

\`\`\`python
import pandas as pd

df = pd.read_csv("students.csv")

print(df.head())
print(df.shape)
print(df.info())
print(df.describe())
\`\`\`

These operations help us understand the dataset before modeling.

## 4. Missing Values

Missing values are common in real datasets.

We can inspect them using:

\`\`\`python
print(df.isnull().sum())
\`\`\`

One possible approach is removing rows:

\`\`\`python
df = df.dropna()
\`\`\`

Another approach is filling missing values:

\`\`\`python
df["age"] = df["age"].fillna(
    df["age"].mean()
)
\`\`\`

The correct strategy depends on the problem and the meaning of the data.

## 5. Categorical Data

Machine-learning models generally require numerical representations.

Suppose we have:

\`\`\`text
City
-----
Hyderabad
Chennai
Mumbai
\`\`\`

One-hot encoding can represent these categories numerically.

For example:

\`\`\`text
Hyderabad → [1,0,0]
Chennai   → [0,1,0]
Mumbai    → [0,0,1]
\`\`\`

## 6. Feature Scaling

Suppose one feature ranges from:

\`\`\`text
0 to 1
\`\`\`

while another ranges from:

\`\`\`text
0 to 100000
\`\`\`

Some algorithms may be affected by these different scales.

Standardization is commonly represented as:

\`\`\`text
z = (x - mean) / standard deviation
\`\`\`

## 7. Train-Test Split

The dataset should normally be separated into training and testing data.

\`\`\`python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)
\`\`\`

The training data is used to learn.

The test data is used to evaluate generalization.

## 8. Avoiding Data Leakage

Data leakage occurs when information that should not be available during training enters the training process.

For example, calculating preprocessing statistics using the complete dataset before splitting can leak information from the test set.

A safer workflow is:

\`\`\`text
Split data
   ↓
Fit preprocessing on training data
   ↓
Transform training data
   ↓
Transform test data
   ↓
Train model
\`\`\`

## 9. Basic Preprocessing Example

\`\`\`python
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

df = pd.DataFrame({
    "age": [20, 21, 25, 30, 35],
    "income": [25000, 30000, 45000, 60000, 75000],
    "score": [60, 65, 75, 85, 90]
})

X = df[["age", "income"]]
y = df["score"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print(X_train_scaled)
\`\`\`

Notice that the scaler is fitted using the training data and then applied to the test data.

## 10. Data Preparation Checklist

Before training a model, ask:

- Are the values valid?
- Are there missing values?
- Are duplicate records present?
- Are categorical features encoded?
- Are numerical features appropriately represented?
- Are irrelevant columns removed?
- Is the target correctly identified?
- Was the data split correctly?
- Is there possible data leakage?

## Mini Practice

Take a small dataset and:

1. Load it with Pandas.
2. Inspect its structure.
3. Check missing values.
4. Separate features and target.
5. Split training and testing data.
6. Apply suitable preprocessing.

## Key Takeaways

Data preparation converts raw information into a form that machine-learning models can use.

Good preprocessing improves reliability, reduces errors, and helps models learn meaningful patterns without accidentally using information from the evaluation data.
`,
};

export default lesson;