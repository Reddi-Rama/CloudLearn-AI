const lesson11 = {
  title: "Exploratory Data Analysis (EDA) with Python",

  content: `
# Exploratory Data Analysis (EDA) with Python

## What You Will Learn

In this lesson, you will learn how to investigate a dataset systematically before building an AI or machine-learning model.

You will learn:

- What Exploratory Data Analysis means
- Why EDA is important in AI
- Understanding dataset structure
- Numerical summaries
- Feature distributions
- Relationships between variables
- Correlation
- Group-level analysis
- Outlier investigation
- Missing-data investigation
- Feature comparison
- EDA with Pandas and NumPy
- Preparing questions before visualization
- Building a complete EDA workflow

EDA sits between:

Data Preparation

and:

Visualization / Machine Learning

The workflow is:

Raw Dataset
    ↓
Inspection
    ↓
Cleaning
    ↓
EDA
    ↓
Visualization
    ↓
Feature Preparation
    ↓
Machine Learning

---

# 1. What Is Exploratory Data Analysis?

Exploratory Data Analysis is the process of examining a dataset to understand:

- What information it contains
- How variables are distributed
- Whether relationships exist
- Whether unusual values exist
- Whether missing data exists
- Whether the dataset contains useful patterns

EDA is not the same as simply printing a DataFrame.

The goal is to ask meaningful questions about the data.

For example:

Does study time appear related to score?

Are some departments performing differently?

Are there extreme values?

Are some features strongly related?

These questions guide further AI development.

---

# 2. Why EDA Matters in AI

Suppose we immediately train a machine-learning model.

We may discover later that:

- A numerical column contains text.
- A feature contains many missing values.
- One value is extremely large.
- Duplicate records exist.
- One feature uses a completely different scale.
- The target contains unexpected categories.

EDA helps identify these issues before they affect the model.

Therefore:

Good AI Development

requires:

Good Data Understanding.

---

# 3. Start With the Dataset

Example:

import pandas as pd

df = pd.DataFrame({
    "Age": [20, 21, 19, 22, 20],
    "StudyHours": [3, 5, 2, 6, 4],
    "Attendance": [85, 90, 78, 95, 88],
    "Score": [72, 84, 65, 92, 80]
})

print(df)

The first question is:

What does each row represent?

Here:

One row = one student.

The next question is:

What does each column represent?

Age

StudyHours

Attendance

Score

These meanings define the structure of the dataset.

---

# 4. Dataset Dimensions

Use:

print(df.shape)

Output:

(5, 4)

This means:

5 observations

4 variables

The mathematical representation is:

X belongs to R^(5 × 4)

assuming all four columns are numerical.

Understanding dimensions is essential before choosing features for a machine-learning model.

---

# 5. Column Information

Use:

print(df.columns)

Output:

Index([
    'Age',
    'StudyHours',
    'Attendance',
    'Score'
], dtype='object')

Column names tell us what the variables mean.

Good naming makes exploratory analysis easier.

---

# 6. Data Types

Use:

print(df.dtypes)

Example:

Age             int64
StudyHours      int64
Attendance      int64
Score           int64

Knowing the data type helps determine what operations are appropriate.

For example:

Numerical columns

can be summarized using:

mean

median

standard deviation

Text columns

may require:

category analysis

encoding

or other preprocessing.

---

# 7. Basic Statistical Summary

Use:

print(df.describe())

This gives:

- Count
- Mean
- Standard deviation
- Minimum
- Quartiles
- Maximum

Suppose:

Score

has:

mean = 78.6

and:

maximum = 92

We immediately understand something about the center and range of the scores.

EDA begins by building this basic statistical picture.

---

# 8. Mean

The arithmetic mean is:

μ = (1/n) Σ xi

Suppose:

scores = [72, 84, 65, 92, 80]

Then:

μ = (72 + 84 + 65 + 92 + 80) / 5

μ = 393 / 5

μ = 78.6

Python:

average = df["Score"].mean()

print(average)

Output:

78.6

---

# 9. Median

The median is the middle value after sorting.

Scores:

65, 72, 80, 84, 92

Middle:

80

Therefore:

median = 80

Python:

print(df["Score"].median())

Output:

80.0

Comparing mean and median can provide clues about skewness.

---

# 10. Standard Deviation

Standard deviation describes how widely observations spread around the mean.

A larger standard deviation indicates greater variation.

Python:

print(df["Score"].std())

The exact value depends on Pandas' default sample-standard-deviation calculation.

The important idea is:

Mean

describes the center.

Standard deviation

describes spread.

---

# 11. Range

The range is:

Range = Maximum - Minimum

For scores:

Maximum = 92

Minimum = 65

Therefore:

Range = 92 - 65

= 27

Python:

score_range = (
    df["Score"].max()
    -
    df["Score"].min()
)

print(score_range)

Output:

27

Range provides a quick measure of overall spread.

---

# 12. Percentiles

Percentiles indicate the position of observations within a distribution.

For example:

50th percentile = median

Python:

print(df["Score"].quantile(0.5))

Output:

80.0

We can calculate:

25th percentile

75th percentile

using:

df["Score"].quantile(0.25)

df["Score"].quantile(0.75)

These values help understand the middle portion of the distribution.

---

# 13. Quartiles

The common quartiles are:

Q1 = 25th percentile

Q2 = 50th percentile

Q3 = 75th percentile

The interquartile range is:

IQR = Q3 - Q1

IQR is useful for identifying potential outliers.

---

# 14. Outlier Intuition

A common statistical rule is:

Lower Bound = Q1 - 1.5 × IQR

Upper Bound = Q3 + 1.5 × IQR

Values outside these bounds may be flagged as potential outliers.

Important:

An outlier is not automatically an error.

It is an observation that deserves investigation.

---

# 15. Detecting Potential Outliers

Example:

scores = df["Score"]

Q1 = scores.quantile(0.25)
Q3 = scores.quantile(0.75)

IQR = Q3 - Q1

lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR

outliers = df[
    (scores < lower)
    |
    (scores > upper)
]

print(outliers)

This provides a systematic way to identify unusual observations.

---

# 16. Missing Data During EDA

Use:

print(df.isnull().sum())

This tells us how many values are missing in each column.

For example:

StudyHours    2

means two values are missing.

EDA helps us understand:

Where

How often

and:

Potentially why

data is missing.

---

# 17. Missing-Value Percentage

We can calculate:

missing_percentage =
(
    df.isnull().sum()
    /
    len(df)
) * 100

print(missing_percentage)

This gives the percentage of missing observations for each column.

A column with:

40%

missing values

requires more attention than a column with:

1%

missing values.

---

# 18. Unique Values

For categorical columns, inspect:

df["Department"].unique()

and:

df["Department"].nunique()

Example:

Departments:

IT

CSE

ECE

EEE

Then:

nunique()

returns:

4

Unique-value analysis is useful for understanding categorical features.

---

# 19. Frequency Counts

Use:

df["Department"].value_counts()

Example output:

IT     20

CSE    18

ECE    12

This tells us how frequently each category occurs.

It helps identify:

- Dominant groups
- Rare groups
- Imbalanced categories

---

# 20. Target Distribution

Suppose:

Score

is the target.

We should understand its distribution before modeling.

Questions include:

What is the mean?

What is the median?

What is the range?

Are there extreme values?

Is the target strongly concentrated?

These questions help determine what kind of model and evaluation approach may later be appropriate.

---

# 21. Feature Distribution

Suppose:

StudyHours

is a feature.

Calculate:

df["StudyHours"].describe()

Then examine:

minimum

maximum

mean

median

standard deviation

A feature with almost no variation may provide limited predictive information.

For example:

[5, 5, 5, 5, 5]

contains no variation.

A feature:

[1, 3, 5, 7, 9]

contains substantially more variation.

---

# 22. Comparing Features

Suppose:

Age

ranges from:

18 to 25

while:

Income

ranges from:

20,000 to 500,000

The numerical scales are very different.

This becomes important when preparing data for:

- Distance calculations
- Optimization
- Machine learning

Feature scaling may later be needed.

---

# 23. Correlation

Correlation measures the strength and direction of a linear relationship between numerical variables.

One common measure is Pearson correlation.

For variables X and Y:

r =
cov(X,Y) /
(σX σY)

The value generally lies between:

-1

and:

1

Interpretation:

r close to 1

→ strong positive linear relationship

r close to -1

→ strong negative linear relationship

r close to 0

→ weak linear relationship

Correlation does not establish causation.

---

# 24. Calculating Correlation

Pandas:

print(df.corr(numeric_only=True))

This produces a correlation matrix.

Example structure:

             Age  StudyHours  Attendance  Score

Age          1.0       ...

StudyHours   ...       1.0

Attendance   ...        ...         1.0

Score        ...        ...          ...

The matrix lets us examine relationships between numerical variables.

---

# 25. Interpreting Correlation

Suppose:

corr(StudyHours, Score) = 0.82

This indicates a strong positive linear association in the observed data.

It does not mean:

StudyHours causes Score.

There may be other variables involved.

Therefore EDA identifies relationships that deserve further investigation.

---

# 26. Group-Level Analysis

Suppose we have:

Department

Score

We may want:

Average Score by Department

Use:

df.groupby(
    "Department"
)["Score"].mean()

This answers:

How does the average score differ across departments?

Group-level statistics can reveal patterns hidden by overall averages.

---

# 27. Comparing Group Statistics

Suppose:

IT = 85

CSE = 78

ECE = 75

These values show differences in average performance.

However, an average alone may hide:

- Different sample sizes
- Different variation
- Outliers

Therefore EDA should examine multiple statistics where appropriate.

---

# 28. Aggregating Multiple Statistics

Pandas allows:

result = df.groupby(
    "Department"
)["Score"].agg([
    "count",
    "mean",
    "min",
    "max"
])

print(result)

This gives a richer summary.

We can understand:

How many records?

What is the mean?

What is the minimum?

What is the maximum?

---

# 29. Feature Relationships

Suppose:

StudyHours

and:

Score

are both numerical.

We can examine them together.

Conceptually:

X = StudyHours

Y = Score

If points tend to rise as X increases:

positive association

If points tend to fall:

negative association

If there is no clear pattern:

weak association

Visualization will make these relationships much easier to see.

That is why EDA naturally leads into Matplotlib.

---

# 30. Questions Before Visualization

Before creating a plot, ask:

What am I trying to understand?

Examples:

How are scores distributed?

→ Histogram

Are study hours related to score?

→ Scatter plot

Which department has the highest average score?

→ Bar chart

How does a measurement change over time?

→ Line plot

Visualization should answer a question.

This principle connects EDA with the next lesson.

---

# 31. NumPy + Pandas in EDA

Pandas:

df["Score"].mean()

NumPy:

import numpy as np

np.mean(
    df["Score"]
)

Both can perform numerical analysis.

Pandas is particularly convenient when the data is structured into columns.

NumPy is especially useful for array-oriented numerical operations.

---

# 32. Complete EDA Example

Example:

import numpy as np
import pandas as pd

df = pd.DataFrame({
    "Age": [20, 21, 19, 22, 20, 23],
    "StudyHours": [3, 5, 2, 6, 4, 8],
    "Attendance": [85, 90, 78, 95, 88, 92],
    "Score": [72, 84, 65, 92, 80, 96]
})

print("Shape:")
print(df.shape)

print("\\nColumns:")
print(df.columns)

print("\\nData types:")
print(df.dtypes)

print("\\nMissing values:")
print(df.isnull().sum())

print("\\nStatistics:")
print(df.describe())

print("\\nCorrelation:")
print(
    df.corr(numeric_only=True)
)

print("\\nAverage score:")
print(
    df["Score"].mean()
)

print("\\nAverage score by study-hour group:")
print(
    df.groupby("StudyHours")["Score"].mean()
)

This is a compact EDA workflow.

---

# 33. EDA Workflow

A practical sequence is:

Step 1:

Understand the dataset.

Step 2:

Inspect dimensions and data types.

Step 3:

Check missing values.

Step 4:

Calculate descriptive statistics.

Step 5:

Investigate unusual values.

Step 6:

Study feature distributions.

Step 7:

Compare variables.

Step 8:

Investigate correlations.

Step 9:

Perform group-level analysis.

Step 10:

Choose visualizations to investigate important questions.

Step 11:

Record findings.

Step 12:

Prepare data for machine learning.

---

# 34. EDA Is Iterative

EDA does not always happen in one straight line.

You may discover:

an unusual value

during analysis.

That may lead you back to:

data cleaning.

You may discover:

a strong relationship

that leads to:

feature investigation.

You may discover:

a skewed distribution

that leads to:

data transformation.

Therefore:

EDA

and:

Data Preparation

often interact iteratively.

---

# 35. Responsible Interpretation

EDA should distinguish:

Observation

from:

Conclusion

Example:

Observation:

Higher study hours are associated with higher scores in this dataset.

Unsupported conclusion:

Studying more always causes higher scores.

A responsible analyst avoids claiming more than the data supports.

This principle is important in AI and data science.

---

# 36. Practical Experiment

Create a dataset containing:

Age

StudyHours

Attendance

Score

Department

with at least:

30 records.

Perform:

1. Shape analysis.
2. Type analysis.
3. Missing-value analysis.
4. Descriptive statistics.
5. Unique-category analysis.
6. Frequency counts.
7. Outlier investigation.
8. Correlation analysis.
9. Group statistics.
10. Feature comparison.

Write at least five observations.

For every observation, state what evidence supports it.

---

# 37. Practice

## Practice 1

Create a DataFrame with 20 observations.

Inspect:

shape

columns

dtypes

describe()

## Practice 2

Introduce missing values.

Measure:

missing count

missing percentage

## Practice 3

Add a categorical column.

Use:

unique()

nunique()

value_counts()

## Practice 4

Calculate correlations between numerical columns.

## Practice 5

Group the data by a categorical feature and calculate:

count

mean

minimum

maximum

---

# Challenge — AI Dataset Investigation

Choose a real or synthetic dataset.

Your program must produce an EDA report containing:

- Dataset dimensions
- Column names
- Data types
- Missing values
- Missing percentages
- Numerical statistics
- Categorical frequencies
- Potential outliers
- Correlation matrix
- Important group-level statistics
- At least five evidence-based observations

Then create a list of questions that should be investigated visually.

For example:

Question:

Are study hours related to score?

Visualization:

Scatter plot.

Question:

How are scores distributed?

Visualization:

Histogram.

Question:

Which group has the highest average score?

Visualization:

Bar chart.

This prepares you directly for the Matplotlib lesson.

---

# Quick Check

1. What is EDA?

The systematic exploration and understanding of a dataset before or during analytical and machine-learning work.

2. Why is EDA important?

It helps identify structure, distributions, relationships, missing values, unusual observations, and potential data-quality issues.

3. What does df.describe() provide?

Descriptive statistics for numerical columns.

4. What does df.isnull().sum() show?

The number of missing values in each column.

5. What does nunique() provide?

The number of unique values.

6. What does value_counts() provide?

The frequency of each value or category.

7. What is correlation?

A statistical measure describing the strength and direction of association between variables, often referring specifically to linear association in Pearson correlation.

8. Does correlation prove causation?

No.

9. Why investigate outliers?

They may reveal errors, unusual cases, or important properties of the dataset.

10. Why is groupby() useful?

It allows analysis of statistics separately for different groups.

11. Why should visualization follow analytical questions?

Because a visualization should be selected according to the specific pattern or relationship we want to investigate.

---

# Key Takeaways

- EDA is the process of understanding a dataset before relying on a model.
- Dataset structure should be inspected first.
- Descriptive statistics provide information about center and spread.
- Missing values must be investigated.
- Categorical variables should be explored using frequencies and unique values.
- Outliers should be investigated rather than automatically removed.
- Correlation can reveal linear associations.
- Group-level analysis can reveal patterns hidden in overall statistics.
- Pandas and NumPy provide the main computational tools for EDA.
- EDA is iterative and can lead back to data cleaning.
- Every analytical observation should be supported by evidence.
- Correlation does not prove causation.
- EDA naturally leads to visualization.
- The right visualization depends on the question being investigated.

The central workflow is:

Dataset
   ↓
Inspect
   ↓
Summarize
   ↓
Investigate
   ↓
Find Patterns
   ↓
Ask Questions
   ↓
Visualize
   ↓
Prepare for Machine Learning
`,
};

export default lesson11;
