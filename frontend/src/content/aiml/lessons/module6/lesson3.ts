const lesson3 = {
  title: "Data Collection for AI Projects",

  content: `
# Data Collection for AI Projects

## What You Will Learn

In this lesson, you will learn:

- Why data is required for AI systems.
- How problem definition determines required data.
- Different sources of AI data.
- Structured and unstructured data.
- Data quantity.
- Data quality.
- Data relevance.
- Data representativeness.
- Labels and supervised-learning data.
- Data collection and bias.
- Data privacy and responsible collection.
- How to inspect collected data using Python and Pandas.
- How data collection affects model performance.
- How to design a practical data-collection workflow.

The central idea is:

Problem
    ↓
Required Inputs
    ↓
Target
    ↓
Data Sources
    ↓
Collection
    ↓
Quality
    ↓
Relevance
    ↓
Representation
    ↓
Usable Dataset

---

# 1. Why Data Matters in AI

AI systems learn patterns from data.

Suppose we want to predict house prices.

We could provide examples such as:

Area    Bedrooms    Age    Price

1000       2         10     50

1200       3          8     60

1500       3          5     75

1800       4          3     90

The model can use these examples to learn relationships between:

Input Features

and:

Target

Conceptually:

Data
    ↓
Patterns
    ↓
Model
    ↓
Predictions

Without suitable data, a machine-learning model has little useful information from which to learn.

However:

More Data

does not automatically mean:

Better AI.

The data must also be:

- Relevant
- Representative
- Sufficiently reliable

---

# 2. Problem Definition Drives Data Collection

Data collection should begin with the problem definition.

Suppose the problem is:

Predict whether a student needs additional support.

The required information may include:

- Quiz Score
- Practice Score
- Attendance
- Topic Completion

The target may be:

Needs Support

Therefore:

Problem
    ↓
Required Inputs
    ↓
Target
    ↓
Required Dataset

Mathematically:

X = required inputs

y = target

The dataset must contain enough useful examples of:

(x_i, y_i)

to support the intended learning task.

---

# 3. What Data Do We Need?

The type of data depends on the AI problem.

## House-Price Prediction

Inputs:

- Area
- Bedrooms
- Location
- Age

Target:

Price

## Spam Detection

Input:

Email Content

Target:

Spam / Not Spam

## Image Classification

Input:

Image

Target:

Object Category

Therefore:

Problem
    ↓
Required Data

not:

Dataset
    ↓
Randomly Find a Problem

---

# 4. Data Sources

AI data can come from many sources.

## Existing Datasets

Public or internal datasets may provide ready-to-use examples.

They may contain:

- Images
- Text
- Numerical measurements
- Customer records
- Sensor data

## Databases

Organizations may store information in:

- Relational databases
- NoSQL databases

## APIs

An API can provide data from another software system.

Conceptually:

Application
    ↓
API Request
    ↓
External Service
    ↓
Data

## Sensors

IoT devices can continuously collect:

- Temperature
- Humidity
- Motion
- Pressure

## User Interactions

Applications may collect:

- Searches
- Ratings
- Clicks
- Purchases
- Usage patterns

## Files

Data may also be stored as:

- CSV
- JSON
- Excel
- Text
- Images
- Audio
- Video

---

# 5. Structured Data

Structured data follows a defined organization.

Example:

Name    Age    Score

A       20     85

B       21     90

C       19     72

This naturally fits into:

Rows

and:

Columns

Pandas is particularly useful for working with structured data.

Mathematically, a structured tabular dataset can often be represented as a matrix:

X ∈ R^(n × d)

where:

n = number of records

d = number of features

---

# 6. Unstructured Data

Unstructured data does not naturally fit into a simple table.

Examples:

- Images
- Audio
- Video
- Natural-language documents

For example:

An image-classification system may use image files as the raw input.

The image must then be transformed into a representation that the chosen model can process.

Conceptually:

Raw Image
    ↓
Numerical Representation
    ↓
Model Input

---

# 7. Semi-Structured Data

Some formats have organization but not a rigid table structure.

Examples include:

JSON

XML

A JSON record may contain:

name

age

features

nested objects

arrays

This can still be transformed into a structured representation for analysis.

The important idea is:

Raw Format

is not necessarily the same as:

Model Representation.

---

# 8. Data Quantity

A model needs enough examples to learn useful patterns.

Suppose we want to classify emails as:

Spam

or:

Legitimate

A dataset containing:

5 spam emails

5 legitimate emails

is probably too small to represent the diversity of real email.

A larger dataset may include many:

- Senders
- Writing styles
- Topics
- Message structures
- Spam patterns

The amount of data required depends on:

- Problem complexity
- Number of features
- Model complexity
- Variability in the real world
- Data quality

There is no universal number that works for every AI problem.

---

# 9. Mathematical Intuition About Sample Size

Suppose the true data-generating process is:

y = f(x) + epsilon

where:

epsilon

represents unexplained variation.

If we collect only a few observations, our estimate of:

f

may be unstable.

More representative observations can provide more evidence about the underlying pattern.

However:

n ↑

does not guarantee:

Model Quality ↑

if the additional data is:

irrelevant

biased

duplicated

or:

low quality.

Therefore:

Useful Data

is more important than:

Raw Record Count Alone.

---

# 10. Data Quality

Data quality is often more important than simply collecting more records.

Poor-quality data may contain:

- Missing values
- Incorrect values
- Duplicates
- Inconsistent formats
- Incorrect labels
- Outliers
- Irrelevant records

Example:

Age

21

22

unknown

24

-500

The value:

-500

is suspicious for a person's age.

Before training a model, such issues should be identified and handled appropriately.

---

# 11. Data Quality Dimensions

When collecting AI data, consider:

## Correctness

Are the values accurate?

## Completeness

Are important values missing?

## Consistency

Are values represented consistently?

## Timeliness

Is the data current enough for the use case?

## Relevance

Does the information help solve the intended problem?

## Representation

Does the data reflect the situations in which the system will be used?

These dimensions go beyond simply asking:

"Does the CSV open?"

---

# 12. Data Relevance

Data should be relevant to the problem.

Suppose we want to predict house prices.

Useful features might include:

Area

Bedrooms

Location

Age

But something unrelated, such as:

Seller's favorite color

may provide no meaningful information.

Including irrelevant information can:

- Increase complexity
- Create misleading relationships
- Add noise
- Make the model harder to understand

The correct question is:

Does this information have a justified connection to the prediction problem?

---

# 13. Data Representativeness

Collected data should reasonably represent the situations in which the AI system will eventually be used.

Suppose an image classifier is designed to recognize different vehicle types.

Training data contains only:

Daytime images

One camera angle

One location

The model may perform poorly on:

Nighttime images

Different angles

Different environments

Therefore:

Training Data
    ≈
Real-World Conditions

The closer the collected data reflects the intended environment, the more useful the resulting model can be.

---

# 14. Distribution Intuition

Suppose training data is drawn from distribution:

P_train(X, Y)

and deployment data follows:

P_real(X, Y)

A useful assumption for many machine-learning setups is that these distributions are similar enough for the intended task.

If:

P_train

and:

P_real

differ substantially,

performance may degrade.

This is one reason representative data matters.

---

# 15. Labels

Some AI problems require labeled data.

Suppose we want to classify messages:

Message:

"Win a free prize!"

Label:

Spam

Message:

"Meeting at 3 PM"

Label:

Not Spam

Message:

"Claim your reward"

Label:

Spam

The label provides the target the model should learn to predict.

This produces training examples:

D =
{
(x_i, y_i)
}

where:

x_i = input example

y_i = corresponding label

Accurate labels are therefore extremely important in supervised learning.

---

# 16. Label Quality

Suppose the actual class is:

Spam

but a human incorrectly labels it:

Not Spam

The model receives an incorrect training example.

If many labels are incorrect:

Training Signal
    ↓
Becomes Noisy
    ↓
Learning Becomes Harder

Therefore label collection should include:

- Clear labeling rules
- Consistent definitions
- Quality checks
- Appropriate review

---

# 17. Data Collection and Bias

Collected data can contain bias.

Suppose the dataset represents only a small subset of real-world situations.

The model may learn patterns that do not generalize well.

During data collection, ask:

Who or what does this dataset represent?

What situations are missing?

Are some categories overrepresented?

Are some categories underrepresented?

Does the dataset reflect the intended use case?

Data quality therefore includes:

Correctness

+

Coverage

+

Representation

---

# 18. Example of Sampling Bias

Suppose a student-support system is trained using only data from:

High-performing students.

Then the model may have insufficient information about:

Students who struggle.

The problem is not solved by simply adding more high-performing records.

We need:

Relevant and representative examples.

---

# 19. Collection Bias

Bias can enter during:

- Sampling
- Measurement
- Labeling
- Data filtering
- Data source selection
- Missing-data handling

Therefore data collection should be treated as an engineering decision, not merely as downloading files.

---

# 20. Privacy and Responsible Collection

AI projects should consider whether data can appropriately be collected and used.

Before collecting data, consider:

What information is being collected?

Why is it required?

Is it necessary for the AI task?

How will it be stored?

Who can access it?

Are there applicable privacy or legal requirements?

A good AI project does not collect information simply because it is technically possible to collect it.

---

# 21. Data Minimization Intuition

Suppose an AI system only requires:

Age

Attendance

Study Hours

There may be no reason to collect unrelated personal information.

A useful principle is:

Required Information
    ↓
Collect What Is Justified
    ↓
Avoid Unnecessary Data

This can simplify:

- Storage
- Security
- Governance
- Processing
- Privacy management

---

# 22. Loading Collected Data With Pandas

Suppose the dataset is stored as:

students.csv

Python:

~~~python
import pandas as pd

data = pd.read_csv(
    "students.csv"
)

print(
    data.head()
)

print(
    data.shape
)

print(
    data.columns
)
~~~

This gives an initial understanding of:

- First records
- Number of rows and columns
- Available fields

---

# 23. Basic Data Inspection

We can inspect the dataset further.

~~~python
print(
    data.info()
)

print(
    data.describe()
)

print(
    data.isnull().sum()
)
~~~

These operations help answer:

What data types exist?

How many records are present?

What are the numerical statistics?

Are values missing?

This is the beginning of the data-understanding stage.

---

# 24. Checking Duplicate Records

A dataset may contain duplicate observations.

Python:

~~~python
duplicate_count = data.duplicated().sum()

print(
    "Duplicate rows:",
    duplicate_count
)
~~~

Duplicates should not be deleted blindly.

A repeated record may be:

- A true duplicate
- A repeated valid event
- A legitimate repeated observation

The meaning of duplication depends on the data-generation process.

---

# 25. Inspecting Unique Values

For categorical information:

~~~python
print(
    data["Department"].unique()
)
~~~

We can also count occurrences:

~~~python
print(
    data["Department"].value_counts()
)
~~~

This can reveal:

- Unexpected categories
- Spelling inconsistencies
- Very rare categories
- Imbalanced representation

---

# 26. Data Collection Workflow

A practical data collection process is:

Define AI Problem
        ↓
Identify Required Inputs
        ↓
Identify Target
        ↓
Identify Data Sources
        ↓
Collect Data
        ↓
Check Quality
        ↓
Check Relevance
        ↓
Check Representation
        ↓
Store Data
        ↓
Prepare for Analysis

Notice:

Collection

is not simply:

"Download a dataset."

It is a structured engineering activity.

---

# 27. Practical Example — Student Performance

Suppose we want to predict whether a student needs additional support.

Required Inputs:

- Quiz Score
- Practice Score
- Attendance
- Topic Completion

Target:

Needs Support

A possible dataset:

quiz_score | practice_score | attendance | completion | needs_support

85 | 90 | 95 | 100 | 0

60 | 65 | 80 | 80 | 0

45 | 40 | 65 | 60 | 1

90 | 95 | 98 | 100 | 0

55 | 50 | 70 | 70 | 1

This dataset can later be used for model development.

---

# 28. Mathematical Dataset Representation

The student-support dataset can be represented as:

x_i =
[
quiz_i,
practice_i,
attendance_i,
completion_i
]

and:

y_i =
needs_support_i

Therefore:

D =
{
(x_i, y_i)
}

for:

i = 1, 2, ..., n

This directly connects data collection to the mathematical problem definition from Lesson 2.

---

# 29. Feature Matrix

For several students:

X =
[
85  90  95  100
60  65  80   80
45  40  65   60
90  95  98  100
55  50  70   70
]

If there are:

5 students

and:

4 features,

then:

X ∈ R^(5 × 4)

The target vector is:

y ∈ R^5

This is the structure that later machine-learning algorithms consume.

---

# 30. Data Collection for Different AI Tasks

## Regression

Need:

Inputs

and:

Numerical target.

Example:

House features

→

Price

## Classification

Need:

Inputs

and:

Class labels.

Example:

Email

→

Spam / Not Spam

## Clustering

Need:

Input observations.

No predefined target is required.

The required collection strategy depends on the task.

---

# 31. Collection Frequency

Some datasets are collected:

Once

Others:

Daily

Hourly

Continuously

For example:

A temperature-monitoring system may collect:

Temperature

every minute.

A house-price dataset may collect:

Sales

whenever transactions occur.

Collection frequency should match:

How quickly the underlying problem changes.

---

# 32. Data Freshness

Data can become outdated.

Suppose a fraud model was trained five years ago.

Fraud patterns may have changed.

Similarly:

- Customer behavior changes
- Products change
- Language changes
- Economic conditions change

Therefore collection plans should consider:

Freshness

as well as:

Historical coverage.

---

# 33. Data Provenance

Data provenance describes where data came from and how it was transformed.

For each dataset, useful information includes:

Source

Collection Date

Owner

Format

Transformations

Permissions

Quality Notes

This makes the dataset easier to understand and audit.

---

# 34. Why Provenance Matters

Suppose a model performs unexpectedly well.

We discover that:

The data came from a future period that should not have been available during training.

Without provenance, this may be difficult to discover.

Therefore:

Data Source
    ↓
Collection
    ↓
Transformation
    ↓
Dataset Version

should be traceable.

---

# 35. Data Collection and Model Performance

Conceptually:

Data Quality
      ↓
Training Signal
      ↓
Learned Model
      ↓
Predictions

Poor data can affect:

- Accuracy
- Generalization
- Fairness
- Reliability
- Error rates

Therefore model development does not start only at:

model.fit()

It starts earlier:

Data collection.

---

# 36. Practical Experiment

Choose an AI problem.

Identify:

1. Required inputs.
2. Target/output.
3. Possible data sources.
4. Data format.
5. Required number of examples.
6. Possible quality problems.
7. Possible missing situations.
8. Privacy considerations.
9. Representation risks.

Then explain why the collected data would be suitable.

---

# 37. Challenge

Design a data-collection plan for a:

Student Performance Prediction System.

Your plan should specify:

Problem
    ↓
Features
    ↓
Target
    ↓
Data Sources
    ↓
Collection Method
    ↓
Data Format
    ↓
Quality Checks
    ↓
Representation Checks
    ↓
Storage

Also identify:

Three possible ways

your dataset could become biased.

For each bias source, describe:

- What causes it?
- What evidence would reveal it?
- How could the collection process reduce the risk?

---

# Common Mistakes

## Collecting Data Before Defining the Problem

The required dataset depends on the AI objective.

## Assuming More Data Is Always Better

More irrelevant or biased records do not automatically improve a model.

## Ignoring Representation

A dataset may be large but still fail to represent deployment conditions.

## Ignoring Label Quality

Incorrect labels create incorrect training signals.

## Collecting Unnecessary Personal Information

Only collect information justified by the AI task.

## Ignoring Data Freshness

Historical data may not reflect current conditions.

## Treating Data Collection as Downloading a CSV

Collection includes:

Source

Method

Quality

Relevance

Representation

Storage

---

# Quick Check

1. Why is data important in AI?

2. How does problem definition influence data collection?

3. What is the difference between structured and unstructured data?

4. Why is data quantity important?

5. Why is data quality important?

6. What makes data relevant?

7. What does representative data mean?

8. What is a label?

9. Why can collecting more data fail to improve a model?

10. Why should privacy be considered during data collection?

11. What does data.isnull().sum() identify?

12. Why can data freshness matter?

13. What is data provenance?

14. How can data collection introduce bias?

---

# Key Takeaways

Data collection should be driven by the AI problem.

The fundamental process is:

Problem
→
Inputs
→
Target
→
Data Sources
→
Collection
→
Quality
→
Relevance
→
Representation

A successful AI project requires data that is:

- Relevant
- Sufficiently representative
- Appropriately collected
- Sufficiently reliable
- Suitable for the intended task

The mathematical view is:

D =
{
(x_i, y_i)
}

where:

x_i

represents the input example and:

y_i

represents the target when supervised labels are available.

The deeper lesson is:

Good models cannot compensate indefinitely for inappropriate data.

The quality of an AI system is influenced long before model training begins.
`,
};

export default lesson3;