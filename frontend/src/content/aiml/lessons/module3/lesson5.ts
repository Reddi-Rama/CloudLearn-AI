const lesson5 = {
  title: "File Handling & Structured Data",

  content: `
# File Handling & Structured Data

## What You Will Learn

In real AI projects, data normally exists outside the Python program.

You will learn:

- Reading text files
- Writing files
- CSV files
- JSON files
- Converting file data into Python data structures
- Data validation
- Missing values
- Preparing external data for AI computation

The key transition in this lesson is:

External Data
    ↓
Python
    ↓
Validation
    ↓
Numerical Representation
    ↓
Analysis

---

# 1. Why AI Programs Need Files

Suppose an AI project has:

500,000 observations.

We cannot reasonably write:

data = [...]

inside the program.

Instead:

Dataset
   ↓
CSV / JSON / Database
   ↓
Python
   ↓
Processing
   ↓
AI System

Files provide persistent storage for data.

This separates:

Data

from:

Program logic

That separation is fundamental to real AI applications.

---

# 2. Reading a Text File

Suppose temperatures.txt contains:

28
31
35
30
29

Python:

with open("temperatures.txt", "r") as file:
    content = file.read()

print(content)

The "r" means:

read

The with statement ensures that the file is managed safely and closed after the operation.

---

# 3. Reading Numerical Lines

Values read from a text file initially arrive as strings.

We can convert them.

Example:

with open("temperatures.txt", "r") as file:

    temperatures = [
        float(line.strip())
        for line in file
    ]

print(temperatures)

Output:

[28.0, 31.0, 35.0, 30.0, 29.0]

Now calculate:

x_bar = (28 + 31 + 35 + 30 + 29) / 5

x_bar = 153 / 5

x_bar = 30.6

Python:

average = sum(temperatures) / len(temperatures)

print("Average:", average)

Output:

Average: 30.6

The transformation is:

File Text
    ↓
String
    ↓
float
    ↓
Numerical Dataset

---

# 4. Writing Results

Suppose:

average = 30.6

We can save the result:

with open("results.txt", "w") as file:
    file.write(
        f"Average temperature: {average}\\n"
    )

The "w" means:

write

Now the result is stored externally.

This is useful for saving:

- experiment results
- predictions
- logs
- analysis reports

---

# 5. CSV

CSV stands for:

Comma-Separated Values

CSV is one of the most common formats for tabular datasets.

Example:

age,study_hours,attendance,score
20,5,92,81
21,7,88,90
19,3,95,72
22,4,80,68

The structure can be understood as:

Rows = observations

Columns = features or target

Mathematically:

X =
[
  20  5  92  81
  21  7  88  90
  19  3  95  72
  22  4  80  68
]

CSV is especially useful when data is naturally tabular.

---

# 6. Reading CSV

Python provides the csv module.

Example:

import csv

with open("students.csv", "r") as file:

    reader = csv.DictReader(file)

    for row in reader:
        print(row)

A row is represented approximately as:

{
    "age": "20",
    "study_hours": "5",
    "attendance": "92",
    "score": "81"
}

Notice that the values are strings.

The file contains text, even when the values look numeric.

---

# 7. Converting CSV Values

We need numerical types for numerical computation.

Example:

import csv

students = []

with open("students.csv", "r") as file:

    reader = csv.DictReader(file)

    for row in reader:

        student = {
            "age": int(row["age"]),
            "study_hours": float(row["study_hours"]),
            "attendance": float(row["attendance"]),
            "score": float(row["score"])
        }

        students.append(student)

Now the values are numerical.

For example:

students[0]["score"]

is:

81.0

rather than:

"81"

This conversion step is critical before mathematical processing.

---

# 8. Why Conversion Matters

Consider:

a = "10"
b = "20"

If we write:

print(a + b)

the result is:

1020

because strings are concatenated.

But:

a = int("10")
b = int("20")

print(a + b)

produces:

30

because:

10 + 20 = 30

AI computations require correct numerical types.

A model cannot perform meaningful numerical calculations if numerical values remain strings.

---

# 9. Calculating From CSV Data

After loading:

scores = []

for student in students:
    scores.append(student["score"])

average = sum(scores) / len(scores)

print("Average:", average)

The program has transformed:

CSV
  ↓
Python Records
  ↓
Numerical Feature
  ↓
Mathematical Calculation

This is already the beginning of an AI data pipeline.

---

# 10. JSON

JSON stands for:

JavaScript Object Notation.

It is another important structured-data format.

Example:

{
    "temperature": 32.5,
    "humidity": 68,
    "pressure": 1012
}

Python can read it:

import json

with open("sensor.json", "r") as file:
    sensor = json.load(file)

print(sensor)

The JSON object becomes a Python dictionary.

---

# 11. Using JSON Data

Example:

temperature = sensor["temperature"]
humidity = sensor["humidity"]

print("Temperature:", temperature)
print("Humidity:", humidity)

Then use a rule:

if temperature > 30 and humidity > 60:
    print("High heat and humidity")

The program performs:

(temperature > 30) AND (humidity > 60)

If:

32.5 > 30

and:

68 > 60

both conditions are true.

Therefore:

High heat and humidity

is produced.

This is an example of converting external structured data into AI-oriented decision logic.

---

# 12. JSON With Multiple Records

JSON can contain multiple observations.

Example:

[
    {
        "temperature": 30,
        "humidity": 60
    },
    {
        "temperature": 34,
        "humidity": 75
    },
    {
        "temperature": 28,
        "humidity": 55
    }
]

Python:

import json

with open("weather.json", "r") as file:
    data = json.load(file)

for record in data:
    print(record["temperature"])

Output:

30
34
28

The JSON array becomes a Python list.

Each object becomes a Python dictionary.

This is another example of structured data mapping into Python structures.

---

# 13. Structured Data

Structured data follows an organized format.

Consider:

age | hours | score
-------------------
20  | 5     | 81
21  | 7     | 90
19  | 3     | 72

Each row is an observation.

Each column is a feature or target.

Mathematically:

X belongs to R^(n × d)

For:

n = 3

observations and:

d = 2

features, we have:

X belongs to R^(3 × 2)

Understanding this structure is essential before applying numerical libraries.

---

# 14. Missing Data

Real datasets can contain missing information.

Example:

age,study_hours,score
20,5,81
21,,90
19,3,72

The second observation has no study-hours value.

We should detect this before conversion.

Example:

value = row["study_hours"]

if value == "":
    print("Missing study hours")
else:
    hours = float(value)

This is the beginning of data cleaning.

Trying:

float("")

would fail.

Therefore:

Detect missing data

before:

Convert data.

---

# 15. Data Validation

Suppose:

0 <= attendance <= 100

We can check:

attendance = float(row["attendance"])

if 0 <= attendance <= 100:
    print("Valid")
else:
    print("Invalid")

Similarly:

0 < age < 120

Python:

age = int(row["age"])

if 0 < age < 120:
    print("Valid age")
else:
    print("Invalid age")

AI systems depend heavily on input quality.

Incorrect inputs can lead to:

Incorrect statistics

Incorrect models

Incorrect predictions

---

# 16. Complete CSV Workflow

Example:

import csv

students = []

with open("students.csv", "r") as file:

    reader = csv.DictReader(file)

    for row in reader:

        if row["study_hours"] == "":
            continue

        age = int(row["age"])

        hours = float(row["study_hours"])

        attendance = float(row["attendance"])

        score = float(row["score"])

        if not (0 < age < 120):
            continue

        if not (0 <= attendance <= 100):
            continue

        students.append({
            "age": age,
            "study_hours": hours,
            "attendance": attendance,
            "score": score
        })

print("Valid records:", len(students))

The workflow is:

CSV
 ↓
Read
 ↓
Check Missing Values
 ↓
Convert Types
 ↓
Validate
 ↓
Store Valid Records

This is a basic data-cleaning pipeline.

---

# 17. Why Pandas Comes Next

The previous code is useful for understanding what happens internally.

But for a large tabular dataset, manually writing all this code becomes cumbersome.

Pandas allows:

import pandas as pd

data = pd.read_csv("students.csv")

print(data.head())

Now the dataset is represented as a DataFrame.

Pandas will provide operations for:

- filtering
- missing values
- statistics
- sorting
- grouping
- transformation
- data cleaning

This is why the course first teaches basic Python file handling and then moves toward Pandas.

The conceptual progression is:

Python File Handling
       ↓
Understand the data
       ↓
Validate the data
       ↓
Pandas
       ↓
Efficient Dataset Processing

---

# 18. Practical Experiment

Create students.csv:

age,study_hours,attendance,score
20,5,92,81
21,7,88,90
19,3,95,72
22,4,80,68
20,6,91,85

Then run:

import csv

students = []

with open("students.csv", "r") as file:

    reader = csv.DictReader(file)

    for row in reader:

        students.append({
            "age": int(row["age"]),
            "study_hours": float(row["study_hours"]),
            "attendance": float(row["attendance"]),
            "score": float(row["score"])
        })

scores = [
    student["score"]
    for student in students
]

average = sum(scores) / len(scores)

print("Records:", len(students))
print("Average score:", average)
print("Highest score:", max(scores))
print("Lowest score:", min(scores))

The average is:

(81 + 90 + 72 + 68 + 85) / 5

= 396 / 5

= 79.2

So the program should produce:

Records: 5
Average score: 79.2
Highest score: 90.0
Lowest score: 68.0

---

# 19. Practice Tasks

## Task 1

Create a text file with 10 numerical observations and calculate the mean.

## Task 2

Create a CSV containing:

- temperature
- humidity
- pressure

for at least 10 observations.

Load and analyze it.

## Task 3

Create a JSON sensor record and write Python code to detect a high-temperature condition.

## Task 4

Create a CSV containing missing and invalid values.

Write code to identify them.

## Task 5

Load a CSV and convert its numerical columns into Python numerical structures.

---

# Challenge

Create a dataset with at least 20 observations containing:

age

study_hours

attendance

score

Your program must:

1. Load the CSV.
2. Detect missing values.
3. Convert numerical values.
4. Validate ranges.
5. Calculate average score.
6. Find minimum and maximum scores.
7. Find observations above average.
8. Extract the numerical features.
9. Store the features in a nested Python list.
10. Print the resulting AI-ready data.

The final pipeline should be:

External Dataset
       ↓
File
       ↓
Python
       ↓
Validation
       ↓
Cleaning
       ↓
Numerical Representation
       ↓
Analysis
       ↓
AI-Ready Data

---

# Quick Check

## 1. Why do AI systems use external files?

To store and access datasets independently of program code.

## 2. Why must CSV values be converted?

They are generally read as strings and must become numerical types for mathematical computation.

## 3. What is CSV mainly used for?

Structured tabular data.

## 4. What is JSON useful for?

Representing structured data and exchanging information between applications.

## 5. Why is data validation important?

Invalid or missing data can produce incorrect computations and unreliable AI systems.

## 6. What does X belong to R^(n × d) mean?

A dataset containing n observations and d numerical features.

---

# Key Takeaway

Lesson 5 establishes the next important AI pipeline:

External Data
       ↓
Python
       ↓
Validation
       ↓
Numerical Representation
       ↓
Analysis

Now that the learner understands where AI data comes from and how Python represents it, the next lessons can move naturally into NumPy arrays, dimensions, indexing, slicing, and vectorized computation.
`,
};

export default lesson5;
