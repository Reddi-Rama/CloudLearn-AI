const lesson10 = {
  title: "Data Inspection & Manipulation with Pandas",

  content: `
# Data Inspection & Manipulation with Pandas

## What You Will Learn

Creating a DataFrame is only the beginning of a real AI data workflow.

Real datasets may contain:

- Missing values
- Incorrect values
- Duplicate records
- Unnecessary columns
- Inconsistent formats
- Extreme values
- Categorical information

Before a model can learn from data, we must understand and prepare it.

In this lesson, you will learn how to inspect, clean, filter, transform, and prepare structured data using Pandas.

---

# 1. The AI Data Preparation Problem

Consider:

Name   Age   StudyHours   Score

Anu    20    3            75
Kiran  21    NaN          82
Meena  19    4            68
Ravi   150   5            90

Immediately, we can identify possible problems.

StudyHours contains a missing value.

Age = 150 is suspicious.

We also need to understand the overall structure of the dataset.

This is why:

Data Inspection

must happen before:

Model Training.

The general workflow is:

Raw Data
   ↓
Inspect
   ↓
Validate
   ↓
Clean
   ↓
Transform
   ↓
Analyze
   ↓
Select Features
   ↓
Machine Learning

---

# 2. Creating the Dataset

Example:

import pandas as pd

df = pd.DataFrame({
    "Name": [
        "Anu",
        "Kiran",
        "Meena",
        "Ravi"
    ],
    "Age": [
        20,
        21,
        19,
        150
    ],
    "StudyHours": [
        3,
        None,
        4,
        5
    ],
    "Score": [
        75,
        82,
        68,
        90
    ]
})

print(df)

Output:

    Name  Age  StudyHours  Score
0    Anu   20         3.0     75
1  Kiran   21         NaN     82
2  Meena   19         4.0     68
3   Ravi  150         5.0     90

The DataFrame now represents a small but imperfect AI dataset.

---

# 3. Inspecting the Dataset

The first step is to understand what we have.

Use:

print(df.head())

This displays the first rows.

Use:

print(df.shape)

Suppose:

(4, 4)

This means:

4 rows

and:

4 columns

Use:

print(df.columns)

This shows the column names.

Use:

print(df.dtypes)

This shows the data type of each column.

Example:

Name           object
Age             int64
StudyHours    float64
Score           int64

dtype: object

Inspection gives us an initial description of the dataset before any cleaning decisions are made.

---

# 4. Understanding Data Types

Common Pandas data types include:

int64

for integer values.

float64

for decimal values.

object

commonly used for text.

bool

for True and False values.

Example:

print(df["Age"].dtype)

print(df["Name"].dtype)

Output:

int64

object

Data types matter because numerical and non-numerical information often require different processing strategies.

---

# 5. Why Data Types Matter in AI

Suppose:

Age = 20

This is numerical information.

Suppose:

Name = "Anu"

This is textual information.

A mathematical model generally cannot directly interpret the string:

"Anu"

as a numerical feature.

Therefore, before machine learning:

Numerical Data

and:

Categorical / Text Data

may require different preprocessing.

Understanding the data type is therefore part of preparing a reliable training dataset.

---

# 6. Detecting Missing Values

Pandas provides:

df.isnull()

Example:

print(df.isnull())

This produces True or False for every cell.

To count missing values:

print(df.isnull().sum())

Output:

Name          0
Age           0
StudyHours    1
Score         0
dtype: int64

This tells us:

StudyHours

contains:

1

missing value.

Missing-value detection is one of the first checks performed during data preparation.

---

# 7. Mathematical Intuition — Missing Data

Suppose the study-hour values are:

3, ?, 4, 5

We cannot calculate the ordinary mean using all four observations because one value is unknown.

Known values are:

3 + 4 + 5

= 12

There are:

3

known observations.

Therefore the mean of the known values is:

12 / 3

= 4

One possible strategy is:

replace the missing value with 4.

This is called:

Mean Imputation.

---

# 8. Filling Missing Values

Pandas provides:

fillna()

Example:

df["StudyHours"] = df[
    "StudyHours"
].fillna(
    df["StudyHours"].mean()
)

print(df)

The missing value becomes:

4.0

The resulting values are:

3.0
4.0
4.0
5.0

The important point is that imputation is a decision.

We should not automatically replace every missing value without considering why it is missing.

---

# 9. When Mean Imputation Can Be Problematic

Mean imputation is simple.

However, it can be inappropriate when:

- Missingness is systematic.
- The feature is strongly skewed.
- The mean is strongly influenced by extreme values.
- The missing value contains meaningful information.
- The dataset is small.
- The data-generating process requires another strategy.

Therefore:

Missing Value

does not automatically mean:

Fill With Mean.

Data cleaning requires reasoning.

---

# 10. Removing Missing Records

Another strategy is:

dropna()

Example:

cleaned = df.dropna()

print(cleaned)

Rows containing missing values are removed.

This can be reasonable when:

- Only a small number of records are missing.
- Removing those records does not introduce bias.
- Enough useful data remains.

For small datasets, removing rows can discard too much information.

Therefore, compare the trade-off before deciding.

---

# 11. Filtering Data

Suppose we want students with scores above:

80

Use:

high_scores = df[
    df["Score"] > 80
]

print(high_scores)

The expression:

df["Score"] > 80

produces a Boolean value for every row.

Conceptually:

condition(x) =

True   if Score > 80

False  otherwise

Pandas then uses the Boolean result to select rows.

---

# 12. Mathematical Interpretation of Filtering

Suppose:

C(x) = Score > 80

For each observation xi:

C(xi)

is either:

True

or:

False

The filtered dataset contains only observations satisfying:

C(xi) = True

This is a Boolean selection function.

The same mathematical idea appears in NumPy Boolean masking.

---

# 13. Multiple Conditions

Suppose we want:

Score > 70

and:

StudyHours >= 4

Use:

result = df[
    (df["Score"] > 70)
    &
    (df["StudyHours"] >= 4)
]

print(result)

The:

&

operator represents element-wise AND for Pandas conditions.

For OR:

result = df[
    (df["Score"] > 80)
    |
    (df["StudyHours"] >= 5)
]

Always place each comparison inside parentheses.

---

# 14. Filtering as Feature Selection

Suppose our dataset contains:

Age
StudyHours
Attendance
Score

We can select observations satisfying:

Attendance >= 80

and:

Score >= 70

The filter can therefore be viewed as:

Dataset
   ↓
Condition
   ↓
Boolean Mask
   ↓
Relevant Records

This becomes important when performing exploratory data analysis.

---

# 15. Sorting Data

Pandas can sort records using:

sort_values()

Example:

sorted_df = df.sort_values(
    "Score"
)

print(sorted_df)

This sorts the dataset in ascending order.

For descending order:

sorted_df = df.sort_values(
    "Score",
    ascending=False
)

print(sorted_df)

Sorting is useful when:

- Ranking observations
- Finding high performers
- Finding low values
- Inspecting extreme observations
- Comparing records

---

# 16. Mathematical Meaning of Ranking

Suppose the scores are:

65
80
72
90

Sorting produces:

65
72
80
90

The values are ordered according to:

x1 <= x2 <= ... <= xn

This allows us to examine the relative ordering of observations.

---

# 17. Detecting Suspicious Values

Remember:

Age = 150

A suspicious value does not automatically mean an incorrect value.

We can inspect:

print(df["Age"].describe())

Then filter:

suspicious = df[
    df["Age"] > 100
]

print(suspicious)

Output:

   Name  Age  StudyHours  Score
3  Ravi  150         5.0     90

The correct interpretation is:

This value deserves investigation.

Not:

This value is definitely wrong.

---

# 18. Why Automatic Removal Is Dangerous

Suppose an AI dataset contains:

Age = 150

There are several possibilities.

It could be:

- A data-entry mistake.
- A measurement error.
- A special population.
- A different definition of the field.
- A valid value under a different context.

Therefore:

Detection

and:

Decision

are different steps.

A responsible AI workflow identifies unusual values first and investigates them before modifying the data.

---

# 19. Duplicate Records

Datasets can contain duplicate rows.

Example:

df = df.drop_duplicates()

print(df)

Duplicate records can distort:

- Counts
- Means
- Frequencies
- Group statistics
- Machine-learning training

Imagine the same observation appears:

10

times.

A model may incorrectly treat it as ten independent observations.

Therefore duplicate detection can be important during data preparation.

---

# 20. Checking Dataset Size

Before cleaning:

print(len(df))

After cleaning:

df = df.drop_duplicates()

print(len(df))

Compare the row counts.

If the number changes unexpectedly, investigate why.

This provides a simple audit trail for data cleaning.

---

# 21. Renaming Columns

Suppose:

StudyHours

is the original column name.

We can rename it:

df = df.rename(
    columns={
        "StudyHours": "study_hours"
    }
)

print(df.columns)

Clear and consistent column names make analysis code easier to understand.

For example:

df["study_hours"]

is often easier to use consistently than an ambiguous column name.

---

# 22. Why Naming Matters

Consider:

df["StudyHours"]

and:

df["study_hours"]

Both can work.

The important principle is consistency.

A large AI project may contain:

hundreds

of columns.

Clear naming makes:

- Feature engineering
- Debugging
- Analysis
- Collaboration
- Model preparation

easier.

---

# 23. Applying Calculations to Columns

Suppose:

Score

is already out of:

100

Then:

df["Percentage"] = df["Score"]

For scores out of:

50

use:

df["Percentage"] = (
    df["Score"] / 50
) * 100

Mathematically:

Percentage =
Score / MaximumScore × 100

For example:

Score = 40

MaximumScore = 50

Percentage:

40 / 50 × 100

= 80

Pandas performs the calculation across the entire column.

---

# 24. Derived Features

A derived feature is calculated from existing information.

Example:

df["StudyMinutes"] = (
    df["StudyHours"] * 60
)

Mathematically:

StudyMinutes = 60 × StudyHours

If:

StudyHours = 5

then:

StudyMinutes = 5 × 60

= 300

Feature engineering often begins with simple transformations like this.

---

# 25. Creating Boolean Features

Suppose:

Score >= 40

means:

Passed

Then:

df["Passed"] = (
    df["Score"] >= 40
)

The new column contains:

True

or:

False

This Boolean feature can later be useful for:

- Analysis
- Filtering
- Classification
- Summary statistics

---

# 26. Grouping Data

Pandas can summarize groups.

Example:

df = pd.DataFrame({
    "Department": [
        "IT",
        "IT",
        "CSE",
        "CSE",
        "ECE"
    ],
    "Score": [
        80,
        90,
        70,
        85,
        75
    ]
})

Calculate average score by department:

result = df.groupby(
    "Department"
)["Score"].mean()

print(result)

Output:

Department
CSE    77.5
ECE    75.0
IT     85.0
Name: Score, dtype: float64

Grouping allows us to ask questions such as:

Which department has the highest average score?

---

# 27. Mathematical Interpretation of Grouping

Suppose the IT scores are:

80

and:

90

The IT mean is:

(80 + 90) / 2

= 85

CSE:

(70 + 85) / 2

= 77.5

ECE:

75 / 1

= 75

The groupby operation calculates statistics separately for each category.

---

# 28. Why Grouping Matters in AI

Group-level analysis can reveal patterns that are hidden when the dataset is viewed only as a whole.

Examples:

- Average score by department
- Average sales by region
- Average income by category
- Error rate by class
- Model performance by demographic group

Such analysis can also help detect uneven model behavior across groups.

---

# 29. Selecting Features and Target

Suppose:

df = pd.DataFrame({
    "Age": [
        20,
        21,
        19,
        22
    ],
    "StudyHours": [
        3,
        5,
        2,
        6
    ],
    "Score": [
        70,
        85,
        65,
        92
    ]
})

Suppose our goal is:

Predict Score.

Then:

X = df[
    [
        "Age",
        "StudyHours"
    ]
]

y = df["Score"]

Now:

X → input features

y → target

This is a fundamental machine-learning representation.

---

# 30. Mathematical Representation

The features are:

X =
[
  20  3
  21  5
  19  2
  22  6
]

The target is:

y =
[
  70
  85
  65
  92
]

Each row of X corresponds to one target value.

Therefore:

(x1, y1)

(x2, y2)

(x3, y3)

(x4, y4)

form training examples.

The purpose of machine learning will eventually be to learn a relationship:

f(X) ≈ y

---

# 31. Converting DataFrame to NumPy

Some numerical operations are naturally performed using NumPy arrays.

Example:

X_array = X.to_numpy()

print(X_array)

Output:

[[20  3]
 [21  5]
 [19  2]
 [22  6]]

The transformation is:

Pandas DataFrame
       ↓
Feature Selection
       ↓
NumPy Array
       ↓
Numerical Computation
       ↓
Machine Learning

Pandas provides structure.

NumPy provides numerical computation.

---

# 32. Complete Data Inspection Workflow

Example:

import pandas as pd

df = pd.DataFrame({
    "Age": [
        20,
        21,
        19,
        22
    ],
    "StudyHours": [
        3,
        None,
        4,
        6
    ],
    "Score": [
        70,
        85,
        65,
        92
    ]
})

print("Shape:")
print(df.shape)

print("\\nData types:")
print(df.dtypes)

print("\\nMissing values:")
print(df.isnull().sum())

print("\\nStatistics:")
print(df.describe())

df["StudyHours"] = (
    df["StudyHours"].fillna(
        df["StudyHours"].mean()
    )
)

print("\\nCleaned data:")
print(df)

X = df[
    [
        "Age",
        "StudyHours"
    ]
]

y = df["Score"]

print("\\nFeatures:")
print(X)

print("\\nTarget:")
print(y)

This is a miniature version of a real AI data-preparation workflow.

---

# 33. Practical AI Example — Preparing Training Data

Imagine we are building a model to predict student performance.

Raw data contains:

Age

StudyHours

Attendance

PreviousScore

FinalScore

A sensible workflow is:

Raw Dataset
     ↓
Inspect Structure
     ↓
Check Missing Values
     ↓
Check Data Types
     ↓
Investigate Suspicious Values
     ↓
Clean Data
     ↓
Select Features
     ↓
Select Target
     ↓
Convert to Numerical Representation
     ↓
Machine-Learning Workflow

Notice that model training happens only after the data has been understood and prepared.

---

# 34. Cleaning Is Not Guessing

A common beginner mistake is automatically modifying every unusual value.

Suppose:

Age = 150

Do not immediately replace or delete it.

Ask:

Is this actually an error?

Was the value entered incorrectly?

Does the dataset use another definition for this field?

Should the record be removed?

Can the value be corrected from a reliable source?

The data-cleaning decision should be justified.

AI systems are only as reliable as the data and decisions used to construct them.

---

# 35. Data Leakage Awareness

Data preparation must also be performed carefully when building machine-learning systems.

Suppose we calculate a transformation using information from the entire dataset before splitting training and test data.

Information from the test set can accidentally influence the training process.

This can produce overly optimistic evaluation results.

Therefore, later machine-learning workflows will need careful separation between:

Training Data

and:

Test Data

The exact techniques for preventing leakage will be covered with model training.

---

# 36. Practical Dataset Audit

Create a function that reports:

- Number of rows
- Number of columns
- Column names
- Data types
- Missing-value counts
- Duplicate count
- Minimum values
- Maximum values

Conceptually:

Dataset
   ↓
Audit
   ↓
Problems
   ↓
Cleaning Decisions

This is a useful pattern for real-world AI data pipelines.

---

# 37. Practical Experiment

Create:

df = pd.DataFrame({
    "Age": [20, 21, 19, 22, 21],
    "StudyHours": [3, None, 4, 6, 5],
    "Attendance": [85, 90, 78, 95, 88],
    "Score": [72, 84, 65, 92, 86]
})

Perform:

1. Display head.
2. Display shape.
3. Display dtypes.
4. Count missing values.
5. Calculate descriptive statistics.
6. Fill the missing study hours.
7. Filter score > 80.
8. Filter attendance >= 85.
9. Sort by score.
10. Create StudyMinutes.
11. Select X and y.
12. Convert X to NumPy.

---

# 38. Practice 1 — Inspect a Dataset

Create a DataFrame with at least:

10 records.

Use:

head()

tail()

shape

columns

dtypes

describe()

to inspect the data.

Write down what each operation tells you.

---

# 39. Practice 2 — Missing Values

Create a dataset containing several missing values.

Use:

isnull()

isnull().sum()

fillna()

dropna()

Compare the resulting datasets.

Explain which records were changed or removed.

---

# 40. Practice 3 — Filtering

Find:

records with:

Score > 80

records with:

StudyHours > 4

records satisfying both conditions

Then create an OR condition.

---

# 41. Practice 4 — Sorting

Sort the dataset:

by score ascending

by score descending

by study hours descending

Compare the first and last records after each sort.

---

# 42. Practice 5 — Feature Selection

Create:

X

and:

y

where X contains at least:

two input features

and y contains:

one target.

Then convert:

X

to a NumPy array.

Print:

X.shape

---

# 43. Challenge — Mini Data Cleaning Pipeline

Create a dataset containing:

- Numerical columns
- A text column
- Missing values
- At least one duplicate
- At least one suspicious value

Build a Pandas pipeline that:

1. Inspects the dataset.
2. Detects missing values.
3. Detects duplicates.
4. Investigates suspicious values.
5. Cleans appropriate problems.
6. Selects features.
7. Selects the target.
8. Converts the feature data to a NumPy array.

The final pipeline should resemble:

Raw Data
    ↓
Inspection
    ↓
Validation
    ↓
Cleaning
    ↓
Feature Selection
    ↓
NumPy
    ↓
Machine Learning

---

# 44. Quick Check

## 1. Why is data inspection necessary before machine learning?

Because we need to understand the dataset's structure, quality, types, and potential problems before training a model.

## 2. How do you detect missing values?

Use:

df.isnull()

and:

df.isnull().sum()

## 3. What does fillna() do?

It replaces missing values according to the specified strategy.

## 4. What does dropna() do?

It removes rows or columns containing missing values according to the selected configuration.

## 5. How do you filter rows?

Use a Boolean condition:

df[df["Score"] > 80]

## 6. What is sort_values() used for?

Sorting records according to one or more columns.

## 7. Why are duplicate records potentially problematic?

They can distort statistics and give repeated observations excessive influence.

## 8. What is groupby() used for?

Grouping records by a category and calculating group-level summaries.

## 9. What are X and y?

X represents input features.

y represents the target.

## 10. Why might a DataFrame be converted to a NumPy array?

To obtain a numerical array representation suitable for numerical computation and later algorithmic processing.

## 11. Should every unusual value automatically be removed?

No.

It should first be investigated and understood.

## 12. Why is data cleaning partly a reasoning problem?

Because deciding whether a value is incorrect, missing, unusual, or meaningful requires understanding the data and its context.

---

# Key Takeaways

- Real AI datasets require inspection and preparation.
- Pandas provides powerful tools for exploring structured data.
- Missing values must be detected and handled deliberately.
- Filtering allows relevant records to be selected.
- Sorting helps with ranking and analysis.
- Derived columns provide simple feature-engineering operations.
- Grouping allows category-level analysis.
- Duplicate records should be investigated.
- Suspicious values should be investigated rather than automatically deleted.
- Features and targets must be separated before many machine-learning workflows.
- Pandas and NumPy form an important bridge between structured data and numerical computation.
- Good AI systems depend on thoughtful data preparation, not just sophisticated models.

The central workflow is:

Raw Dataset
      ↓
Inspect
      ↓
Validate
      ↓
Clean
      ↓
Transform
      ↓
Analyze
      ↓
Select X and y
      ↓
NumPy Representation
      ↓
Machine Learning
`,
};

export default lesson10;
