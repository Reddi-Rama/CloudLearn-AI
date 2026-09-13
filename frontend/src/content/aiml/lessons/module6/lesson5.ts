const lesson = {
  lesson: "05",
  title: "Data Collection for AI Projects",

  description: `
# Lesson 05 — Data Collection for AI Projects

## What You Will Learn

In this lesson, you will learn:

- Why data is required for AI systems.
- Different sources of AI data.
- How to identify the data required for a problem.
- Structured and unstructured data.
- Data quantity, quality, and relevance.
- How data collection affects model performance.
- How to represent collected data using Python and Pandas.
- Common problems during data collection.

---

## 1. Why Data Matters in AI

AI systems learn patterns from data.

Suppose we want to predict house prices. We could provide examples such as:

\`\`\`
Area    Bedrooms    Age    Price
1000       2         10     50
1200       3          8     60
1500       3          5     75
1800       4          3     90
\`\`\`

The model can use these examples to learn relationships between the input features and the target.

Conceptually:

\`\`\`
Data → Patterns → Model → Predictions
\`\`\`

Without suitable data, a machine-learning model has little useful information from which to learn.

However, more data does not automatically mean better AI.

The data must also be relevant, representative, and sufficiently reliable.

---

## 2. What Data Do We Need?

The type of data depends on the AI problem.

### House-Price Prediction

Input Features:

- Area
- Bedrooms
- Location
- Age

Target:

- Price

### Spam Detection

Input:

- Email content

Target:

- Spam / Not Spam

### Image Classification

Input:

- Image

Target:

- Object category

Therefore, data collection should begin with the problem definition.

\`\`\`
Problem → Required Data
\`\`\`

---

## 3. Sources of AI Data

Data can come from many sources.

### Existing Datasets

Public datasets can provide ready-to-use examples.

Examples include:

- Images
- Text
- Numerical measurements
- Customer records
- Sensor data

### Databases

Organizations often store data in relational or NoSQL databases.

### APIs

An API can provide data from another software system.

\`\`\`
Application
    ↓
API Request
    ↓
External Service
    ↓
Data
\`\`\`

### Sensors

IoT devices can continuously collect information such as:

- Temperature
- Humidity
- Motion
- Pressure

### User Interactions

Applications can collect data generated through interactions such as:

- Searches
- Ratings
- Clicks
- Purchases
- Usage patterns

### Files

Data may be stored in:

- CSV
- JSON
- Excel
- Text files
- Images
- Audio
- Video

---

## 4. Structured and Unstructured Data

### Structured Data

Structured data follows a defined organization.

Example:

\`\`\`
Name    Age    Score
A       20     85
B       21     90
C       19     72
\`\`\`

This can easily be represented as rows and columns.

Pandas is particularly useful for structured datasets.

### Unstructured Data

Unstructured data does not naturally fit into a simple table.

Examples:

- Images
- Audio
- Video
- Natural-language documents

For example, an image-classification system may use image files directly as input.

---

## 5. Data Quantity

A model needs enough examples to learn useful patterns.

Suppose we want to classify emails as spam or legitimate.

A dataset containing:

- 5 spam emails
- 5 legitimate emails

is probably too small to represent the diversity of real emails.

A larger dataset can contain many different:

- Senders
- Writing styles
- Topics
- Message structures
- Spam patterns

The required amount of data depends on:

- Problem complexity
- Number of features
- Model complexity
- Variability in the real world
- Quality of the data

There is no universal number that works for every AI problem.

---

## 6. Data Quality

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

\`\`\`
Age
21
22
unknown
24
-500
\`\`\`

The value -500 is clearly suspicious for a person's age.

Before training a model, such problems should be identified and handled appropriately.

---

## 7. Data Relevance

Data should be relevant to the problem.

Suppose we want to predict house prices.

Useful features might include:

- Area
- Bedrooms
- Location
- Age

But something unrelated, such as:

\`\`\`
Seller's favorite color
\`\`\`

may provide no meaningful information.

Including irrelevant information can make the system unnecessarily complicated and may introduce misleading relationships.

---

## 8. Data Representativeness

Collected data should reasonably represent the situations in which the AI system will eventually be used.

Suppose an image classifier is designed to recognize different types of vehicles.

If the training dataset contains only images taken:

- During daytime
- From one camera angle
- In one location

the model may perform poorly when exposed to:

- Nighttime images
- Different angles
- Different environments

Therefore:

\`\`\`
Training Data ≈ Real-World Conditions
\`\`\`

The closer the data reflects the intended environment, the more useful the resulting model can be.

---

## 9. Labels and Data Collection

Some AI problems require labeled data.

Suppose we want to classify messages:

\`\`\`
Message                  Label
---------------------------------
Win a free prize!        Spam
Meeting at 3 PM         Not Spam
Claim your reward       Spam
\`\`\`

The label provides the target that the model should learn to predict.

Training examples can be represented as:

\`\`\`
D = {(xᵢ, yᵢ)}ᵢ₌₁ⁿ
\`\`\`

where:

- xᵢ = input example
- yᵢ = corresponding label

Collecting accurate labels is therefore an important part of supervised learning.

---

## 10. Data Collection and Bias

Collected data can contain biases.

For example, suppose a dataset represents only a small subset of the situations encountered in the real world.

The resulting model may learn patterns that do not generalize well.

During data collection, ask:

- Who or what does this dataset represent?
- What situations are missing?
- Are some categories overrepresented?
- Are some categories underrepresented?
- Does the dataset reflect the intended use case?

Data quality includes not only correctness, but also coverage and representation.

---

## 11. Data Privacy and Responsible Collection

AI projects should consider whether data can appropriately be collected and used.

Before collecting data, developers should consider:

- What information is being collected?
- Why is it required?
- Is it necessary for the AI task?
- How will it be stored?
- Who can access it?
- Are there applicable privacy or legal requirements?

A good AI project does not collect information simply because it is technically possible to collect it.

---

## 12. Loading Collected Data With Pandas

Suppose a dataset is stored as \`students.csv\`.

\`\`\`python
import pandas as pd

data = pd.read_csv("students.csv")

print(data.head())
print(data.shape)
print(data.columns)
\`\`\`

This provides an initial understanding of the collected dataset.

### head()

Shows the first few records.

### shape

Shows the number of rows and columns.

### columns

Shows the available features.

---

## 13. Basic Data Inspection

We can inspect the dataset further:

\`\`\`python
print(data.info())
print(data.describe())
print(data.isnull().sum())
\`\`\`

These operations help answer:

- What data types exist?
- How many records are present?
- What are the numerical statistics?
- Are values missing?

This is the beginning of the data understanding stage.

---

## 14. Data Collection Workflow

A practical data collection process is:

\`\`\`
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
\`\`\`

Collection is not simply "Download a dataset."

It is a structured engineering activity.

---

## Practical Example — Student Performance

Suppose we want to predict whether a student needs additional support.

Required Inputs:

- Quiz Score
- Practice Score
- Attendance
- Topic Completion

Target:

- Needs Support

Example dataset:

\`\`\`
quiz_score | practice_score | attendance | completion | needs_support
85         | 90              | 95         | 100        | 0
60         | 65              | 80         | 80         | 0
45         | 40              | 65         | 60         | 1
90         | 95              | 98         | 100        | 0
55         | 50              | 70         | 70         | 1
\`\`\`

This dataset can later be used for model development.

---

## Practice Task

Choose an AI problem and identify:

- Required inputs
- Target/output
- Possible data sources
- Data format
- Required number of examples
- Possible quality problems
- Possible missing situations
- Privacy considerations

Then explain why your chosen data would be suitable.

---

## Challenge

Design a data-collection plan for a student performance prediction system.

Your plan should specify:

\`\`\`
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
\`\`\`

Also identify three possible ways your dataset could become biased.

---

## Quick Check

1. Why is data important in AI?
2. What is the difference between structured and unstructured data?
3. Why is data quality important?
4. Why is relevant data necessary?
5. What does representative data mean?
6. What is a label?
7. Why can collecting more data fail to improve a model?
8. Why should privacy be considered during data collection?
9. What does \`data.isnull().sum()\` help identify?
10. How does problem definition influence data collection?

---

## Key Takeaways

Data collection should be driven by the AI problem.

The fundamental process is:

\`\`\`
Problem
→ Inputs
→ Target
→ Data Sources
→ Collection
→ Quality
→ Representation
\`\`\`

A successful AI project requires data that is relevant, sufficiently representative, appropriately collected, and suitable for the intended task.
`
};

export default lesson;