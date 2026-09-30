const lesson = {
  lesson: "09",
  title: "Pandas Series & DataFrames",

  content: `
# Lesson 09 — Pandas Series & DataFrames

## What You Will Learn

In this lesson, you will learn:

- What Pandas is.
- Why Pandas is important for AI and machine learning.
- Series.
- DataFrames.
- Creating DataFrames.
- Selecting columns and rows.
- Inspecting datasets.
- Basic filtering.
- Missing values.
- Simple dataset analysis.

## 1. What Is Pandas?

Pandas is a Python library designed for data manipulation and analysis.

AI projects commonly require operations such as:

- Loading datasets.
- Inspecting columns.
- Filtering rows.
- Handling missing values.
- Calculating statistics.
- Transforming features.
- Preparing data for machine learning.

Pandas provides convenient structures for these tasks.

## 2. Importing Pandas

\`\`\`python
import pandas as pd
\`\`\`

The standard alias is \`pd\`.

## 3. Pandas Series

A Series is a one-dimensional labeled data structure.

\`\`\`python
import pandas as pd

scores = pd.Series([75, 82, 91, 68])

print(scores)
\`\`\`

A Series contains values together with an index.

## 4. Creating a Series with Labels

\`\`\`python
import pandas as pd

scores = pd.Series(
    [75, 82, 91],
    index=["Alice", "Bob", "Charlie"]
)

print(scores)
\`\`\`

Labels make individual values easier to identify.

## 5. DataFrames

A DataFrame is a two-dimensional table containing rows and columns.

\`\`\`python
import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Age": [20, 21, 19],
    "Score": [85, 91, 78]
}

df = pd.DataFrame(data)

print(df)
\`\`\`

A DataFrame is one of the most important structures used in practical data analysis.

## 6. Inspecting a Dataset

Useful methods include:

\`\`\`python
print(df.head())
print(df.tail())
print(df.shape)
print(df.columns)
print(df.info())
print(df.describe())
\`\`\`

### head()

Displays the first rows.

### tail()

Displays the last rows.

### shape

Returns the number of rows and columns.

### columns

Returns column names.

### info()

Provides structural information.

### describe()

Provides statistical summaries for numerical columns.

## 7. Selecting Columns

A single column can be selected using:

\`\`\`python
scores = df["Score"]

print(scores)
\`\`\`

Multiple columns can be selected using:

\`\`\`python
result = df[["Name", "Score"]]

print(result)
\`\`\`

## 8. Selecting Rows

Pandas provides \`loc\` and \`iloc\`.

\`\`\`python
print(df.iloc[0])
\`\`\`

The first row is returned.

We can also select multiple rows:

\`\`\`python
print(df.iloc[0:2])
\`\`\`

## 9. Filtering Data

Suppose we want students with scores greater than 80.

\`\`\`python
high_scores = df[df["Score"] > 80]

print(high_scores)
\`\`\`

Filtering is extremely useful during data exploration.

## 10. Adding a Column

We can create a new feature:

\`\`\`python
df["Passed"] = df["Score"] >= 40

print(df)
\`\`\`

This creates a Boolean column.

## 11. Missing Values

Real datasets often contain missing values.

\`\`\`python
print(df.isnull())
print(df.isnull().sum())
\`\`\`

Missing values can be handled using methods such as:

\`\`\`python
df.dropna()
\`\`\`

or:

\`\`\`python
df.fillna(0)
\`\`\`

The appropriate method depends on the dataset and problem.

## 12. Sorting Data

\`\`\`python
sorted_df = df.sort_values("Score")

print(sorted_df)
\`\`\`

Descending order:

\`\`\`python
sorted_df = df.sort_values(
    "Score",
    ascending=False
)
\`\`\`

## 13. AI Dataset Example

Consider a dataset containing:

\`\`\`text
age
income
experience
purchased
\`\`\`

The first three columns may be features.

The final column may be the target.

Pandas helps us inspect and prepare this dataset before passing it to a machine-learning model.

## 14. Simple Data Workflow

A typical workflow is:

\`\`\`text
Load data
   ↓
Inspect data
   ↓
Understand columns
   ↓
Check missing values
   ↓
Filter or transform
   ↓
Prepare features
   ↓
Train machine-learning model
\`\`\`

## Mini Practice

Create a DataFrame containing:

- Name
- Age
- Study Hours
- Score

Then:

1. Display the first rows.
2. Display the shape.
3. Select the Score column.
4. Find students with scores above 80.
5. Sort students by score.

## Key Takeaways

- Series represents one-dimensional labeled data.
- DataFrame represents tabular data.
- Pandas simplifies data inspection and manipulation.
- Pandas is heavily used during machine-learning preprocessing.
- Understanding DataFrames is essential for practical AI development.
`,
};

export default lesson;