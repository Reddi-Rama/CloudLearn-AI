const lesson13 = {
  id: "lesson13",

  title: "NumPy, Pandas and Matplotlib for ML",

  content: `
Lesson 13

NumPy, Pandas and Matplotlib for ML


Machine learning depends heavily on data.

Before a model can learn from data, the data must be loaded, represented, inspected, transformed, and often visualized.

Three important Python libraries for these tasks are:

NumPy

Pandas

Matplotlib


1. NumPy

NumPy is a fundamental library for numerical computing in Python.

Its central data structure is the multidimensional array.

In machine learning, NumPy arrays are important because many scientific and machine learning libraries work naturally with numerical arrays.

The source describes NumPy as one of the fundamental scientific computing packages and identifies ndarray as its core multidimensional array structure. :contentReference[oaicite:7]{index=7}


2. Creating a NumPy Array

Python

import numpy as np

x = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print(x)

Output

[[1 2 3]
 [4 5 6]]


3. Understanding the Array

The example contains:

2 rows

3 columns

Therefore its shape is:

2 × 3

Python

print(x.shape)

Output

(2, 3)


4. Indexing a NumPy Array

Python

print(x[0])
print(x[1])

Output

[1 2 3]
[4 5 6]

Each row represents one data sample in this simple example.


5. Selecting a Column

Python

print(x[:, 0])

Output

[1 4]

The expression selects the first column.


6. Why NumPy Is Important for ML

Machine learning data is often represented as a numerical matrix.

A common representation is:

Samples × Features

For example:

150 samples × 4 features

The corresponding NumPy array therefore has shape:

150 × 4


7. NumPy Arrays and Machine Learning

The feature matrix can be represented as:

Python

X = np.array([
    [5.1, 3.5, 1.4, 0.2],
    [4.9, 3.0, 1.4, 0.2],
    [6.4, 3.2, 4.5, 1.5]
])

print(X.shape)

Output

(3, 4)

There are three samples and four features.


8. Pandas

Pandas is designed for data wrangling and analysis.

Its central data structure is the DataFrame.

A DataFrame is a table that can contain columns with different data types.

It is useful for:

Loading CSV files

Inspecting datasets

Filtering rows

Selecting columns

Handling missing values

Combining tables

Preparing data for machine learning

The source describes the DataFrame as a table-like structure similar to a spreadsheet and emphasizes its data-analysis and file-loading capabilities. :contentReference[oaicite:8]{index=8}


9. Creating a DataFrame

Python

import pandas as pd

data = {
    "Name": ["Alex", "Maya", "Daniel", "Sara"],
    "Location": ["Delhi", "Paris", "Berlin", "London"],
    "Age": [24, 19, 31, 28]
}

df = pd.DataFrame(data)

print(df)

Output

The result is a table with:

Name

Location

Age


10. Inspecting a DataFrame

Python

print(df.head())

The head() method displays the first rows.

Another useful operation is:

Python

print(df.info())

This provides information about:

Columns

Data types

Number of non-null values


11. Selecting a Column

Python

print(df["Age"])

Output

The selected column contains the age value of each sample.


12. Filtering Rows

Pandas allows rows to be selected using conditions.

Python

print(df[df["Age"] > 25])

Output

Only rows with Age greater than 25 are returned.

This type of filtering is useful when exploring real datasets.


13. Loading a CSV Dataset

Machine learning datasets are often stored as CSV files.

Python

import pandas as pd

df = pd.read_csv("students.csv")

print(df.head())

The dataset is loaded into a DataFrame.


14. Understanding the Relationship Between Pandas and NumPy

Pandas is convenient for working with labelled tabular data.

NumPy is convenient for numerical array operations.

A common workflow is:

CSV File
↓
Pandas DataFrame
↓
Data Cleaning and Exploration
↓
NumPy Array
↓
Machine Learning Model


15. Matplotlib

Matplotlib is the primary scientific plotting library introduced in the source.

It can be used to create:

Line plots

Scatter plots

Histograms

Other scientific visualizations

Visualization helps us understand data before and after model development. :contentReference[oaicite:9]{index=9}


16. Creating a Simple Plot

Python

import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-10, 10, 100)
y = np.sin(x)

plt.plot(x, y)

plt.xlabel("x")
plt.ylabel("sin(x)")
plt.title("Sine Function")

plt.show()


17. Understanding the Plot

The x values form a sequence from negative to positive values.

The y values are calculated using the sine function.

The plotting function places the two arrays on a graph.

The graph allows us to visually inspect the relationship.


18. Scatter Plots

Scatter plots are particularly useful in machine learning because each point can represent one sample.

Python

import matplotlib.pyplot as plt

study_hours = [1, 2, 3, 4, 5]
scores = [48, 55, 65, 74, 82]

plt.scatter(study_hours, scores)

plt.xlabel("Study Hours")
plt.ylabel("Score")
plt.title("Study Hours and Score")

plt.show()

Each point represents one sample.


19. Histograms

A histogram shows the distribution of a numerical feature.

Python

import matplotlib.pyplot as plt

scores = [45, 52, 55, 61, 64, 68, 72, 74, 79, 85, 88, 91]

plt.hist(scores, bins=5)

plt.xlabel("Score")
plt.ylabel("Number of Students")
plt.title("Score Distribution")

plt.show()


20. Combining Pandas and Matplotlib

Python

import pandas as pd
import matplotlib.pyplot as plt

data = {
    "StudyHours": [1, 2, 3, 4, 5],
    "Score": [48, 55, 65, 74, 82]
}

df = pd.DataFrame(data)

plt.scatter(df["StudyHours"], df["Score"])

plt.xlabel("Study Hours")
plt.ylabel("Score")

plt.show()

Pandas manages the table.

Matplotlib visualizes the selected columns.


21. Inspecting Machine Learning Data

Before building a model, it is useful to inspect the dataset.

Useful questions include:

How many samples are present?

How many features are present?

What are the data types?

Are values missing?

Are there unexpected values?

Are the classes separated?

Do the feature distributions make sense?


22. Why Visualization Matters

A dataset may contain patterns that are difficult to notice by looking at raw numbers.

A scatter plot can reveal:

Clusters

Trends

Possible outliers

Relationships between variables

A histogram can show:

Spread

Concentration

Skew

Unusual values


23. The Source's Iris Exploration

The source demonstrates inspecting the Iris data using visualization.

The features are examined through pairwise plots, allowing relationships between feature pairs to be visualized.

The plots help reveal that the flower classes are relatively well separated in parts of the feature space. :contentReference[oaicite:10]{index=10}


24. A Small Dataset Exploration

Python

import pandas as pd
import matplotlib.pyplot as plt

data = {
    "Hours": [1, 2, 3, 4, 5, 6],
    "Attendance": [65, 70, 78, 84, 90, 94],
    "Score": [45, 52, 61, 69, 78, 86]
}

df = pd.DataFrame(data)

print(df.head())

plt.scatter(df["Hours"], df["Score"])

plt.xlabel("Study Hours")
plt.ylabel("Score")

plt.show()


25. Basic Data Exploration Workflow

Load Data
↓
Create DataFrame
↓
Inspect Rows
↓
Inspect Columns
↓
Check Data Types
↓
Visualize Features
↓
Identify Patterns
↓
Prepare Data for ML


26. NumPy, Pandas and Matplotlib Together

The three libraries have complementary roles.

NumPy:

Numerical arrays and mathematical operations

Pandas:

Tables and data analysis

Matplotlib:

Visualization

Together they provide a useful foundation for machine learning data work.


27. Practical Experiment

Create a DataFrame containing:

Study Hours

Attendance

Previous Score

Final Score

Perform the following:

Display the first rows.

Display the shape.

Select the Score column.

Filter students with Score greater than 70.

Create a scatter plot of Study Hours against Score.


Common Mistakes

Treating a DataFrame and NumPy array as exactly the same structure

Forgetting that NumPy arrays are primarily numerical arrays

Loading data without inspecting it

Using a visualization without understanding what the axes represent

Assuming a visible correlation automatically proves causation

Ignoring missing or inconsistent values


Practice

Create a CSV file containing at least ten student records.

Load it using Pandas.

Display the first five rows.

Calculate the average score.

Create a scatter plot of study hours and final score.


Quick Check

Question

What is the main role of NumPy, Pandas and Matplotlib?

Answer

NumPy supports numerical arrays and computation, Pandas supports tabular data analysis and manipulation, and Matplotlib supports visualization.


Summary

NumPy provides multidimensional numerical arrays.

Pandas provides DataFrames and data-analysis functionality.

Matplotlib provides scientific visualization.

These tools are commonly used before, during, and after machine learning model development.

Data exploration helps identify patterns, inconsistencies, and useful relationships before training a model.


Extended Study

A machine learning workflow commonly moves through several representations.

For example:

CSV File
↓
Pandas DataFrame
↓
Cleaned Data
↓
NumPy Feature Matrix
↓
Machine Learning Model

Visualization can be inserted at multiple points.

Before training, visualization helps understand the data.

After training, visualization can help understand predictions and errors.

The ability to move comfortably between tabular data, numerical arrays, and visual representations is an important practical skill for machine learning.

Reflection

Consider a dataset containing thousands of student records.

Would it be easier to understand the data by reading every row individually?

How could a DataFrame help?

How could a scatter plot reveal a relationship?

How could a histogram help identify an unusual distribution?
`
};

export default lesson13;