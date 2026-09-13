const lesson4 = {
  title: "Data Preparation for AI",

  content: `
# Data Preparation for AI

## What You Will Learn

In this lesson, you will learn:

- Why raw data cannot always be directly used by AI models.
- The major stages of data preparation.
- How to inspect missing values.
- How to handle missing values.
- How to identify duplicates.
- How to correct data types.
- How to handle inconsistent values.
- How to encode categorical data.
- How feature scaling works.
- How to separate features and targets.
- Why preprocessing can cause data leakage.
- How scikit-learn pipelines help organize preprocessing.
- How Pandas and scikit-learn can be used for practical data preparation.

The central transformation is:

Raw Data
    ↓
Inspection
    ↓
Cleaning
    ↓
Transformation
    ↓
Feature / Target Separation
    ↓
Model-Ready Data

---

# 1. What Is Data Preparation?

Data preparation is the process of transforming raw data into a form that can be effectively used for analysis and machine learning.

The general process is:

Raw Data
    ↓
Clean Data
    ↓
Prepared Data
    ↓
Model

Raw data may contain:

- Missing values
- Duplicates
- Wrong data types
- Inconsistent values
- Categorical values
- Different numerical scales

Data preparation addresses these issues.

---

# 2. Why Raw Data Is Not Automatically Model-Ready

Consider:

Age

20

21

NaN

23

24

The:

NaN

represents a missing value.

Now consider:

Age

"20"

"21"

"22"

These may actually be strings rather than numbers.

Or:

City

Mumbai

Delhi

Hyderabad

These are categories.

A machine-learning model therefore requires appropriate preparation before using the data.

---

# 3. Data Preparation Pipeline

A useful mental model is:

Raw Records
    ↓
Inspect
    ↓
Validate
    ↓
Clean
    ↓
Transform
    ↓
Represent
    ↓
Separate X and y
    ↓
Model

Every transformation should have a reason.

---

# 4. Missing Values

Missing values occur when information is unavailable.

Example:

Age

20

21

NaN

23

24

We can inspect missing values with Pandas.

~~~python
import pandas as pd

data = pd.read_csv(
    "students.csv"
)

print(
    data.isnull().sum()
)
~~~

The result tells us how many missing values exist in each column.

---

# 5. Why Missing Values Matter

Suppose a model expects:

Age

to be numerical.

But one record has:

NaN

Some algorithms cannot directly process that missing value.

Therefore the dataset needs a suitable strategy.

Possible approaches include:

- Remove selected records
- Replace missing values with a statistic
- Use a dedicated imputation method
- Add an indicator for missingness when appropriate

The correct choice depends on:

- Problem
- Feature
- Missingness pattern
- Model
- Domain meaning

---

# 6. Mean Imputation

Suppose:

Age values:

20

21

23

24

Mean:

(20 + 21 + 23 + 24) / 4

= 88 / 4

= 22

A missing age can be replaced with:

22

Python:

~~~python
data["Age"] = data["Age"].fillna(
    data["Age"].mean()
)
~~~

Mean imputation is simple, but it is not always appropriate.

---

# 7. Median Imputation

Suppose:

Income values are:

20

25

30

1000

The mean is heavily influenced by:

1000

The median may better represent a typical observation.

Therefore:

For skewed variables,

median imputation may sometimes be more appropriate than mean imputation.

The correct choice should be based on the data and task.

---

# 8. Missingness Can Contain Information

A missing value is not always random.

Suppose a field:

LoanApplicationReason

is missing only for customers who never started the application.

The fact that the value is missing may itself carry information.

Therefore:

Missingness

can sometimes be informative.

Do not automatically delete every missing record without considering the meaning.

---

# 9. Removing Duplicates

Suppose the same student record appears twice.

We can inspect duplicates:

~~~python
duplicate_rows = data[
    data.duplicated()
]

print(
    duplicate_rows
)
~~~

Then, when appropriate:

~~~python
data = data.drop_duplicates()
~~~

Duplicates can distort analysis and may give certain examples unintended importance.

However, repeated records may sometimes be legitimate observations.

Therefore inspect first.

---

# 10. Data Types

Suppose a dataset contains:

Age

"20"

"21"

"22"

The values may be stored as strings.

We can convert them:

~~~python
data["Age"] = pd.to_numeric(
    data["Age"],
    errors="coerce"
)
~~~

The argument:

errors="coerce"

turns invalid values into:

NaN

These values can then be handled appropriately.

---

# 11. Why Data Types Matter

Suppose:

"20" + "5"

produces:

"205"

because they are strings.

But:

20 + 5

produces:

25

because they are numerical values.

The data type therefore changes the meaning of the operation.

This is why data-type inspection is a necessary preparation stage.

---

# 12. Inconsistent Values

Suppose:

City

Mumbai

mumbai

MUMBAI

These may represent the same category but appear differently.

A preparation process may standardize them:

Mumbai

The exact normalization depends on the dataset.

The important principle is:

Equivalent concepts should have consistent representations where appropriate.

---

# 13. Categorical Data

Many datasets contain categories.

Example:

City

Mumbai

Delhi

Hyderabad

Mumbai

These are not ordinary numerical quantities.

A machine-learning model usually requires an appropriate numerical representation.

One common technique is:

One-Hot Encoding

---

# 14. One-Hot Encoding

Conceptually:

Mumbai

→

[1, 0, 0]

Delhi

→

[0, 1, 0]

Hyderabad

→

[0, 0, 1]

Each position represents category membership.

This avoids creating an artificial numerical order such as:

Mumbai = 1

Delhi = 2

Hyderabad = 3

which could incorrectly imply:

Hyderabad > Delhi > Mumbai

as a numerical relationship.

---

# 15. Why One-Hot Encoding Is Useful

Categorical variables do not automatically possess numerical ordering.

One-hot encoding allows the model to distinguish:

Category A

Category B

Category C

without introducing an artificial ranking.

It transforms:

Categorical Representation

into:

Numerical Representation

---

# 16. OneHotEncoder With scikit-learn

Python:

~~~python
from sklearn.preprocessing import OneHotEncoder

encoder = OneHotEncoder(
    sparse_output=False
)

encoded = encoder.fit_transform(
    data[
        ["City"]
    ]
)

print(
    encoded
)
~~~

The exact output column order is determined by the encoder.

The key idea is:

Category
    ↓
Numerical Vector

---

# 17. Feature Scaling

Suppose we have:

Age:

18 to 60

Income:

20,000 to 500,000

The scales are very different.

Some algorithms are sensitive to feature magnitude.

For example:

Distance-based methods

or:

gradient-based methods

can be influenced by large-scale variables.

---

# 18. Standardization

A common scaling technique is:

z =
(x - μ) / σ

where:

x

is the original value.

μ

is the mean.

σ

is the standard deviation.

The result is a standardized value.

---

# 19. Mathematical Intuition of Standardization

Suppose:

μ = 50

σ = 10

and:

x = 70

Then:

z =
(70 - 50) / 10

= 20 / 10

= 2

The value:

70

is therefore:

2 standard deviations

above the mean.

---

# 20. StandardScaler

Python:

~~~python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

scaled_data = scaler.fit_transform(
    data[
        ["Age", "Income"]
    ]
)

print(
    scaled_data
)
~~~

The scaler learns:

Mean

and:

Standard Deviation

from the data it is fitted on.

---

# 21. Why Scale Features?

Consider:

Feature 1:

Age = 20

Feature 2:

Income = 200000

Suppose a distance is calculated.

The income coordinate is numerically much larger.

Therefore it can dominate the calculation.

Scaling can transform the features into more comparable numerical ranges.

The purpose is not:

"Make every number equal."

The purpose is:

Reduce unintended dominance caused by feature scale when the algorithm is sensitive to scale.

---

# 22. Min-Max Scaling

Another common transformation is:

x' =
(x - xmin)
/
(xmax - xmin)

If:

xmin = 0

xmax = 100

and:

x = 50

then:

x' =
(50 - 0)
/
(100 - 0)

= 0.5

This maps a value into a normalized range under the usual min-max transformation.

The correct scaling method depends on the problem.

---

# 23. Separating Features and Target

Suppose the dataset contains:

quiz_score

practice_score

attendance

needs_support

The first three are features.

The final column is the target.

We can separate them:

~~~python
X = data[
    [
        "quiz_score",
        "practice_score",
        "attendance"
    ]
]

y = data[
    "needs_support"
]
~~~

Therefore:

X = Features

y = Target

This connects directly to Lesson 2.

---

# 24. Mathematical Representation

Suppose:

X ∈ R^(n × d)

and:

y ∈ R^n

Data preparation transforms raw values into a representation suitable for:

X

and:

y

The model then receives:

X

and learns a relationship with:

y

---

# 25. Why Preparation Must Be Careful

Data preparation itself can accidentally introduce problems.

Suppose we calculate:

Mean

using:

the entire dataset

before splitting into training and testing data.

The mean includes information from the test set.

Then the test information has influenced the transformation.

This can contribute to:

Data Leakage

---

# 26. Leakage Through Scaling

Suppose the full dataset has:

Training + Test

We calculate:

μ_all

using both parts.

Then:

z =
(x - μ_all) / σ_all

The test data influenced:

μ_all

and:

σ_all

This means information from the test set entered the preprocessing step.

A safer workflow is:

Training Data
    ↓
Fit Scaler
    ↓
Learn μ and σ
    ↓
Transform Training

Then:

Same Learned Transformation
    ↓
Validation / Test

This keeps evaluation data separated.

---

# 27. Correct Preprocessing Workflow

Correct:

Training Data
      ↓
Fit Transformation
      ↓
Learn Parameters
      ↓
Transform Training
      ↓
Transform Validation/Test

Incorrect:

Entire Dataset
      ↓
Fit Transformation
      ↓
Split

The second approach can allow evaluation information to influence preprocessing.

---

# 28. Pipeline

scikit-learn provides:

Pipeline

to connect preprocessing and modeling steps.

Example:

~~~python
from sklearn.pipeline import Pipeline

from sklearn.preprocessing import StandardScaler

from sklearn.linear_model import LogisticRegression

pipeline = Pipeline([
    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        LogisticRegression()
    )
])
~~~

The pipeline organizes:

Preprocessing

and:

Model Training

as one workflow.

---

# 29. Why Pipelines Help

Without a pipeline, it is easier to accidentally:

- Fit preprocessing on the wrong data
- Forget a transformation during prediction
- Apply transformations inconsistently
- Create leakage

A pipeline helps keep:

Training Transformation

and:

Prediction Transformation

consistent.

Conceptually:

Raw Input
    ↓
Preprocessing
    ↓
Model
    ↓
Prediction

The same sequence is applied whenever the model is used.

---

# 30. Complete Preparation Example

Consider:

~~~python
import pandas as pd

data = pd.DataFrame({
    "age": [
        20,
        21,
        None,
        23,
        24
    ],

    "score": [
        80,
        75,
        90,
        None,
        85
    ],

    "needs_support": [
        0,
        0,
        0,
        1,
        0
    ]
})

print(
    "Missing values:"
)

print(
    data.isnull().sum()
)

data["age"] = data[
    "age"
].fillna(
    data["age"].mean()
)

data["score"] = data[
    "score"
].fillna(
    data["score"].mean()
)

X = data[
    [
        "age",
        "score"
    ]
]

y = data[
    "needs_support"
]

print(
    "\\nPrepared Features:"
)

print(
    X
)

print(
    "\\nTarget:"
)

print(
    y
)
~~~

This demonstrates:

Inspect

↓

Handle Missing Values

↓

Separate Features

↓

Separate Target

---

# 31. Why the Example Is Simplified

The previous example fills missing values using the mean of the DataFrame.

In a real machine-learning project, if the data will later be split into:

Training

and:

Test

then the imputation statistic should be learned from:

Training Data

and then applied to:

Validation/Test Data

A pipeline can make this process safer.

---

# 32. Mathematical View of Imputation

Suppose:

x_j

is a numerical feature.

If a missing value is replaced by:

μ_train

where:

μ_train

is the training-set mean, then the transformation becomes:

x'_j =
x_j

for observed values

and:

x'_j =
μ_train

for missing values.

The important point is:

μ_train

must not be calculated using held-out evaluation data.

---

# 33. Preparation as Representation

Data preparation is not only about cleaning.

It also changes representation.

Examples:

Age:

"20"

→

20

City:

Mumbai

→

[1,0,0]

Income:

200000

→

Standardized Value

Therefore:

Raw Representation
    ↓
Prepared Representation
    ↓
Model Input

---

# 34. Feature / Target Separation Is Part of Preparation

Suppose:

data.columns

contains:

Age

City

StudyHours

Attendance

PreviousScore

NeedsSupport

We must determine:

Which columns are inputs?

Which column is the target?

The separation is:

X

=

Age

City

StudyHours

Attendance

PreviousScore

and:

y

=

NeedsSupport

This definition must be consistent with the problem.

---

# 35. Complete Preparation Workflow

A practical workflow is:

Raw Data
    ↓
Inspect Structure
    ↓
Check Missing Values
    ↓
Check Duplicates
    ↓
Check Data Types
    ↓
Correct Inconsistencies
    ↓
Encode Categorical Values
    ↓
Scale Where Appropriate
    ↓
Separate Features / Target
    ↓
Apply Training-Fitted Transformations
    ↓
Model-Ready Data

---

# 36. Preparation Does Not Mean "Delete Everything Strange"

Suppose an observation contains:

Age = 120

This is unusual.

It may be:

- Data-entry error
- A legitimate unusual case
- A unit mismatch
- A different variable than expected

Investigate before automatically deleting.

A good preparation rule should have a reason.

---

# 37. Data Validation Questions

Before preparing the model input, ask:

Are column names correct?

Are data types correct?

Are numerical ranges plausible?

Are categories consistent?

Are duplicate records legitimate?

Are missing values random or informative?

Are transformations appropriate?

Could the transformation leak evaluation information?

These questions turn data preparation into an engineering process.

---

# 38. Practical Experiment

Take a small dataset and perform:

1. Missing-value inspection.
2. Duplicate inspection.
3. Data-type inspection.
4. Missing-value handling.
5. Categorical encoding.
6. Feature/target separation.
7. Feature scaling where appropriate.

For every step, explain:

Why is this transformation necessary?

---

# 39. Challenge

Create a preprocessing workflow for a dataset containing:

Age

City

Study Hours

Attendance

Previous Score

Needs Support

Your workflow should:

1. Handle missing values.
2. Encode City.
3. Scale appropriate numerical features.
4. Separate X and y.
5. Prepare the data for a classification model.
6. Keep transformations inside a pipeline where appropriate.
7. Explain why fitting preprocessing on the training portion is important.

A conceptual workflow is:

Raw Dataset
    ↓
Train/Test Split
    ↓
Preprocessing
    ↓
Feature Matrix
    ↓
Classifier
    ↓
Evaluation

---

# 40. Common Mistakes

## Fitting Preprocessing on the Entire Dataset

This can allow test information to influence learned transformation parameters.

## Treating Strings as Numerical Data

"20" and 20 are not the same data type.

## Creating Arbitrary Numerical Meaning for Categories

Encoding:

Mumbai = 1

Delhi = 2

Hyderabad = 3

can introduce an artificial ordering.

## Scaling When It Is Unnecessary

Not every algorithm is equally sensitive to feature scale.

Use scaling when the model or workflow benefits from it.

## Removing Every Duplicate Automatically

Repeated records can sometimes be valid.

## Removing Every Outlier Automatically

An unusual observation is not automatically an error.

## Performing Preprocessing Before Defining the Train/Test Boundary

This can introduce leakage.

---

# Quick Check

1. What is data preparation?

2. Why can't raw data always be used directly?

3. Why do missing values need attention?

4. Why can duplicates be problematic?

5. Why are data types important?

6. What is categorical encoding?

7. What is one-hot encoding?

8. Why might feature scaling be useful?

9. What is standardization?

10. What is the standardization formula?

11. What are X and y?

12. How can preprocessing create leakage?

13. Why should preprocessing parameters generally be learned from training data?

14. Why are pipelines useful?

---

# Key Takeaways

Data preparation transforms raw information into a form suitable for AI.

The general process is:

Raw Data
→
Inspection
→
Cleaning
→
Transformation
→
Feature/Target Separation
→
Model-Ready Data

Important tasks include:

- Missing-value handling
- Duplicate inspection
- Data-type correction
- Categorical encoding
- Feature scaling
- Feature/target separation

Standardization is:

z =
(x - μ) / σ

One-hot encoding converts categories into numerical indicator vectors.

Most importantly:

Preprocessing should respect the train/validation/test boundary.

The safe principle is:

Training Data
    ↓
Fit Transformation
    ↓
Learn Parameters
    ↓
Apply Transformation
    ↓
Validation / Test

Pipelines help keep preprocessing and modeling consistent.

Good data preparation does not mean applying every available transformation.

Every transformation should have a clear reason connected to:

The data

The model

The problem

and:

The prediction environment.
`,
};

export default lesson4;