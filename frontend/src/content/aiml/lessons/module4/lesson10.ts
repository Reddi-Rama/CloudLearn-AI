const lesson10 = {
  title: "Statistics for AI",

  content: `
# Statistics for AI

## What You Will Learn

Statistics provides methods for understanding, summarizing, and interpreting data.

In Artificial Intelligence, statistics helps us understand datasets before models are trained and helps us evaluate the behavior of data and predictions.

You will learn:

- What statistics means
- Population and sample
- Numerical data
- Mean
- Median
- Mode
- Range
- Variance
- Standard deviation
- Percentiles
- Quartiles
- Interquartile range
- Outlier intuition
- Distribution
- Frequency
- Probability and statistics
- Statistics with NumPy
- Statistics with Pandas
- Statistical interpretation in AI
- Practical AI data analysis

The central idea is:

Dataset
    ↓
Statistics
    ↓
Data Understanding
    ↓
Pattern Detection
    ↓
AI Analysis

---

# 1. Why Statistics Matters in AI

Suppose an AI system receives thousands of numerical observations.

Looking at every value individually is difficult.

Statistics allows us to summarize the information.

For example:

10, 20, 30, 40, 50

Instead of only looking at the five values, we can calculate:

Mean = 30

Minimum = 10

Maximum = 50

Range = 40

Statistics therefore converts many observations into useful summaries.

---

# 2. Population and Sample

A population is the complete set of observations we are interested in.

Example:

All students in a university.

A sample is a smaller subset selected from that population.

Example:

100 students selected from the university.

The distinction matters because statistical calculations can be based on:

Population

or:

Sample

Machine-learning datasets can also be viewed as samples from a larger population.

---

# 3. Descriptive Statistics

Descriptive statistics summarize the observed data.

Common measures include:

- Mean
- Median
- Mode
- Minimum
- Maximum
- Range
- Variance
- Standard deviation
- Quartiles
- Percentiles

These measures help us understand:

Center

Spread

Distribution

Position

---

# 4. Mean

The arithmetic mean is:

mu = (1 / n) sum(xi)

For:

10, 20, 30, 40, 50

we calculate:

mu =
(10 + 20 + 30 + 40 + 50) / 5

mu = 150 / 5

mu = 30

Python:

import numpy as np

data = np.array([
    10,
    20,
    30,
    40,
    50
])

print(
    np.mean(data)
)

Output:

30.0

---

# 5. Mean in AI

Suppose model errors are:

2, 4, 6, 8

The mean error is:

(2 + 4 + 6 + 8) / 4

= 20 / 4

= 5

Averages can be used to summarize:

- Prediction errors
- Model loss
- Feature values
- Sensor readings
- Customer behavior
- Training metrics

---

# 6. Median

The median is the middle value after sorting the observations.

Example:

10, 20, 30, 40, 50

Median:

30

Python:

data = np.array([
    10,
    20,
    30,
    40,
    50
])

print(
    np.median(data)
)

Output:

30.0

---

# 7. Median With an Even Number of Values

Suppose:

10, 20, 30, 40

There are two middle values:

20

and:

30

The median is:

(20 + 30) / 2

= 25

Python:

data = np.array([
    10,
    20,
    30,
    40
])

print(
    np.median(data)
)

Output:

25.0

---

# 8. Mean vs Median

Consider:

10, 20, 30, 40, 1000

Mean:

(10 + 20 + 30 + 40 + 1000) / 5

= 1100 / 5

= 220

Median:

30

The extreme value:

1000

strongly affects the mean.

The median is less affected in this example.

Therefore comparing mean and median can provide useful information about a dataset.

---

# 9. Mode

The mode is the most frequently occurring value.

Example:

2, 3, 3, 4, 5

Mode:

3

Python with Pandas:

import pandas as pd

data = pd.Series([
    2,
    3,
    3,
    4,
    5
])

print(
    data.mode()
)

Output:

0    3

Mode is especially useful when working with categorical or discrete data.

---

# 10. Minimum and Maximum

For:

10, 20, 30, 40, 50

minimum:

10

maximum:

50

NumPy:

print(
    np.min(data)
)

print(
    np.max(data)
)

Minimum and maximum define the boundaries of the observed values.

---

# 11. Range

Range is:

Range = Maximum - Minimum

Suppose:

minimum = 10

maximum = 50

Then:

Range = 50 - 10

= 40

Python:

numbers = np.array([
    10,
    20,
    30,
    40,
    50
])

range_value = (
    np.max(numbers)
    -
    np.min(numbers)
)

print(range_value)

Output:

40

---

# 12. Variance

Variance measures how far observations spread around their mean.

The population variance is:

sigma^2 =
(1 / n)
sum(
(xi - mu)^2
)

Suppose:

data = [10, 20, 30]

Mean:

20

Deviations:

10 - 20 = -10

20 - 20 = 0

30 - 20 = 10

Squared deviations:

100

0

100

Variance:

(100 + 0 + 100) / 3

= 66.6667

Python:

data = np.array([
    10,
    20,
    30
])

print(
    np.var(data)
)

Output:

66.66666666666667

---

# 13. Standard Deviation

Standard deviation is the square root of variance.

sigma = sqrt(variance)

For variance:

66.6667

standard deviation is approximately:

8.165

Python:

print(
    np.std(data)
)

Standard deviation is expressed in the same units as the original data.

---

# 14. Why Standard Deviation Matters

Consider:

Dataset A:

[49, 50, 51]

Dataset B:

[10, 50, 90]

Both have mean:

50

But Dataset B has much greater spread.

Therefore:

Mean tells us about center.

Standard deviation tells us about spread.

AI data analysis often needs both.

---

# 15. Percentiles

A percentile describes the position of an observation within a distribution.

For example:

50th percentile

is the median.

Using NumPy:

data = np.array([
    10,
    20,
    30,
    40,
    50
])

print(
    np.percentile(
        data,
        50
    )
)

Output:

30.0

---

# 16. Quartiles

Common quartiles are:

Q1 = 25th percentile

Q2 = 50th percentile

Q3 = 75th percentile

Python:

Q1 = np.percentile(
    data,
    25
)

Q2 = np.percentile(
    data,
    50
)

Q3 = np.percentile(
    data,
    75
)

print(Q1)
print(Q2)
print(Q3)

Quartiles divide ordered data into sections.

---

# 17. Interquartile Range

The interquartile range is:

IQR = Q3 - Q1

It describes the spread of the middle 50 percent of observations.

Python:

IQR = Q3 - Q1

print(
    "IQR:",
    IQR
)

IQR is useful when investigating potential outliers.

---

# 18. Outlier Detection Intuition

A common rule uses:

Lower Bound =
Q1 - 1.5 × IQR

Upper Bound =
Q3 + 1.5 × IQR

Values outside these bounds may be considered potential outliers.

Important:

Potential outlier

does not automatically mean:

Incorrect value.

The observation should be investigated.

---

# 19. Detecting Potential Outliers With NumPy

Example:

data = np.array([
    10,
    11,
    12,
    13,
    14,
    15,
    100
])

Q1 = np.percentile(
    data,
    25
)

Q3 = np.percentile(
    data,
    75
)

IQR = Q3 - Q1

lower = (
    Q1 - 1.5 * IQR
)

upper = (
    Q3 + 1.5 * IQR
)

outliers = data[
    (data < lower)
    |
    (data > upper)
]

print(
    "Potential outliers:",
    outliers
)

---

# 20. Distribution

A distribution describes how values are spread across possible ranges.

Suppose test scores are:

40, 45, 48, 50, 52, 55, 58, 60

The values are concentrated in a particular range.

Another dataset may have values spread across a much wider range.

Understanding distributions helps determine:

- Typical values
- Spread
- Skewness
- Concentration
- Unusual observations

---

# 21. Frequency

Frequency tells us how often a value or category occurs.

Example:

Department:

IT

IT

CSE

IT

ECE

CSE

Frequency:

IT = 3

CSE = 2

ECE = 1

Pandas can calculate this using:

value_counts()

---

# 22. Frequency With Pandas

Example:

import pandas as pd

departments = pd.Series([
    "IT",
    "IT",
    "CSE",
    "IT",
    "ECE",
    "CSE"
])

print(
    departments.value_counts()
)

Output:

IT     3

CSE    2

ECE    1

This is useful when analyzing categorical features.

---

# 23. Statistics With Pandas

Suppose:

import pandas as pd

df = pd.DataFrame({
    "StudyHours": [
        2,
        3,
        5,
        4,
        6
    ],
    "Score": [
        55,
        65,
        82,
        74,
        90
    ]
})

We can calculate:

print(
    df["Score"].mean()
)

print(
    df["Score"].median()
)

print(
    df["Score"].std()
)

print(
    df["Score"].min()
)

print(
    df["Score"].max()
)

---

# 24. Describe Method

Pandas provides:

df.describe()

Example:

print(
    df.describe()
)

This summarizes numerical columns using:

- Count
- Mean
- Standard deviation
- Minimum
- Quartiles
- Maximum

This is one of the fastest ways to obtain an initial statistical summary.

---

# 25. Comparing Multiple Features

Suppose:

Age

StudyHours

Attendance

Score

are numerical features.

We can inspect:

df.describe()

This helps compare:

- Central values
- Spread
- Minimum
- Maximum

However, different features may have different units.

For example:

Age

might range from:

18 to 25

while:

Attendance

might range from:

0 to 100

The scale of the variables should therefore be considered during analysis.

---

# 26. Statistics and Machine Learning

Statistics helps before model training.

For example:

Feature statistics
      ↓
Data understanding
      ↓
Cleaning decisions
      ↓
Feature preparation
      ↓
Model training

Statistics also helps after training:

Predictions
      ↓
Error measurements
      ↓
Statistical evaluation
      ↓
Model interpretation

---

# 27. Mean Prediction Error

Suppose:

actual = np.array([
    80,
    70,
    90
])

predicted = np.array([
    75,
    72,
    85
])

errors = (
    actual
    -
    predicted
)

print(errors)

Mean signed error:

print(
    np.mean(errors)
)

The result summarizes the average direction of prediction error.

However, positive and negative errors can cancel each other.

---

# 28. Mean Absolute Error

To avoid cancellation:

absolute_errors = np.abs(
    actual - predicted
)

mae = np.mean(
    absolute_errors
)

print(mae)

Mean Absolute Error is:

MAE =
(1/n)
sum(
|yi - yhat_i|
)

It measures the average magnitude of prediction error.

---

# 29. Mean Squared Error

Squared errors are:

squared_errors = (
    actual - predicted
) ** 2

Then:

mse = np.mean(
    squared_errors
)

print(mse)

Mean Squared Error is:

MSE =
(1/n)
sum(
(yi - yhat_i)^2
)

This idea connects statistics with the loss concepts studied later.

---

# 30. Correlation

Correlation describes the strength and direction of a linear relationship between variables.

A common measure is Pearson correlation.

Its value lies between:

-1

and:

1

Interpretation:

Near +1

→ strong positive linear association

Near -1

→ strong negative linear association

Near 0

→ weak linear association

Correlation does not prove causation.

---

# 31. Correlation With Pandas

Example:

import pandas as pd

df = pd.DataFrame({
    "StudyHours": [
        1,
        2,
        3,
        4,
        5
    ],
    "Score": [
        45,
        55,
        65,
        78,
        90
    ]
})

print(
    df.corr(
        numeric_only=True
    )
)

The resulting matrix contains correlations between numerical columns.

---

# 32. Interpreting Correlation Carefully

Suppose:

Correlation(StudyHours, Score)

is:

0.90

This indicates a strong positive linear association in the observed dataset.

It does not prove:

Study hours cause higher scores.

Other variables may contribute.

Statistical interpretation should therefore separate:

Association

from:

Causation

---

# 33. Expected Statistical Thinking in AI

When analyzing data, ask:

What is the center?

What is the spread?

Are there extreme values?

Are variables related?

Are categories balanced?

Are missing values present?

Are distributions unusual?

These questions form the foundation of exploratory statistical analysis.

---

# 34. Complete Statistical Experiment

import numpy as np
import pandas as pd

df = pd.DataFrame({
    "StudyHours": [
        1,
        2,
        3,
        4,
        5,
        6
    ],
    "Attendance": [
        70,
        75,
        80,
        85,
        90,
        95
    ],
    "Score": [
        45,
        55,
        65,
        73,
        84,
        92
    ]
})

print("Statistics:")
print(
    df.describe()
)

print("\\nMean Score:")
print(
    df["Score"].mean()
)

print("\\nMedian Score:")
print(
    df["Score"].median()
)

print("\\nScore Standard Deviation:")
print(
    df["Score"].std()
)

print("\\nCorrelation:")
print(
    df.corr(
        numeric_only=True
    )
)

This example combines:

Pandas

NumPy

Descriptive statistics

Correlation

AI-oriented data analysis

---

# Practical Experiment

Create a dataset containing at least:

20 observations

with:

- Age
- StudyHours
- Attendance
- Score

Calculate:

1. Mean of every numerical feature.
2. Median of every numerical feature.
3. Minimum.
4. Maximum.
5. Range.
6. Standard deviation.
7. Q1.
8. Q3.
9. IQR.
10. Potential outliers.
11. Correlation matrix.

Then write at least five observations.

---

# Practice

## Practice 1

Find the mean and median of:

10, 20, 20, 30, 40

## Practice 2

Find the range of:

5, 12, 18, 25, 30

## Practice 3

Calculate variance and standard deviation using NumPy.

## Practice 4

Create a categorical Series and calculate:

value_counts()

## Practice 5

Create a DataFrame and use:

describe()

## Practice 6

Calculate the correlation between two numerical features.

---

# Challenge

Build a statistical analysis program for an AI dataset.

The program should:

1. Load or create a dataset.
2. Display its dimensions.
3. Display numerical statistics.
4. Calculate mean and median.
5. Calculate standard deviation.
6. Calculate quartiles.
7. Calculate IQR.
8. Detect potential outliers.
9. Calculate correlations.
10. Calculate average prediction error for a simple prediction system.
11. Print at least five observations about the data.

Your observations must be based on numerical evidence.

---

# Common Mistakes

## Mistake 1 — Using Only the Mean

The mean does not fully describe a dataset.

Consider:

center

and:

spread

together.

## Mistake 2 — Confusing Mean and Median

The mean uses all values.

The median is based on the middle position after ordering.

## Mistake 3 — Treating an Outlier as Automatically Wrong

An unusual observation requires investigation.

## Mistake 4 — Assuming Correlation Means Causation

Correlation describes association.

It does not automatically establish cause and effect.

## Mistake 5 — Ignoring Scale

Different features can have very different numerical ranges.

---

# Quick Check

1. What is statistics?

A collection of methods used to summarize, analyze, and interpret data.

2. What is a population?

The complete set of observations of interest.

3. What is a sample?

A subset of a population.

4. What is the mean?

The arithmetic average.

5. What is the median?

The middle value after ordering the data.

6. What is the mode?

The most frequently occurring value.

7. What is variance?

A measure of the spread of values around the mean.

8. What is standard deviation?

The square root of variance.

9. What is range?

Maximum minus minimum.

10. What is IQR?

Q3 minus Q1.

11. What is correlation?

A measure of association between variables, commonly linear association for Pearson correlation.

12. Does correlation prove causation?

No.

13. Why is statistics important in AI?

It helps understand data, detect unusual observations, evaluate errors, and support data-driven decisions.

---

# Key Takeaways

Statistics provides tools for understanding AI data.

Mean measures central tendency.

Median identifies the middle position.

Mode identifies the most frequent value.

Range measures the overall observed span.

Variance measures spread around the mean.

Standard deviation provides spread in the original units.

Quartiles divide ordered data into sections.

IQR measures the spread of the middle portion of a dataset.

Outlier rules can identify observations that deserve investigation.

Correlation measures association between numerical variables.

Pandas and NumPy make statistical analysis practical.

Statistics is used both before and after model training.

The central progression is:

Dataset
    ↓
Statistical Summary
    ↓
Data Understanding
    ↓
Pattern Detection
    ↓
Feature Analysis
    ↓
AI Modeling
`,
};

export default lesson10;