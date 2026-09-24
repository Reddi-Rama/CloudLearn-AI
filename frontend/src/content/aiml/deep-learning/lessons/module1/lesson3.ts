const lesson3 = {
  id: "lesson3",
  moduleId: "module1",
  lessonNumber: 3,

  title: "Data Preprocessing",

  subtitle:
    "Preparing real-world data for deep learning models",

  description:
    "Learn how raw datasets are read, inspected, cleaned, transformed, encoded, and converted into tensors suitable for deep learning.",

  estimatedTime: "3–4 hours",

  difficulty: "Beginner",

  learningObjectives: [
    "Understand why raw data must be prepared before model training.",
    "Understand dataset structure.",
    "Read tabular data using Python.",
    "Inspect rows and columns.",
    "Identify numerical and categorical data.",
    "Understand missing values.",
    "Handle missing numerical values.",
    "Handle categorical values.",
    "Use indicator variables.",
    "Understand data preparation as a pipeline.",
    "Convert prepared data into tensors.",
    "Understand the difference between features and targets.",
    "Validate preprocessing results.",
    "Understand common preprocessing mistakes."
  ],

  sections: [
    {
      id: "why-preprocessing",
      title: "1. Why Data Preprocessing Is Necessary",

      content: `
Real-world data rarely arrives in a form that can immediately be given to a neural network.

A dataset may contain:

• numerical values
• categorical values
• missing values
• text
• dates
• inconsistent formats
• incorrect measurements
• irrelevant columns
• duplicate records

Deep learning models ultimately perform numerical computations.

Therefore, raw information must be transformed into a suitable numerical representation.

A simplified preprocessing pipeline is:

Raw Dataset
↓
Read Data
↓
Inspect Data
↓
Clean Data
↓
Transform Data
↓
Encode Categorical Information
↓
Handle Missing Values
↓
Convert to Tensor
↓
Model

Data preprocessing is therefore part of the machine learning workflow rather than a separate activity unrelated to modeling.
`
    },

    {
      id: "dataset",
      title: "2. Understanding a Dataset",

      content: `
A dataset can be viewed as a collection of examples.

For tabular data, rows commonly represent examples and columns represent attributes.

For example:

Age | Income | City | Purchased

Each row describes one observation.

A dataset might contain:

Age
Income
City
Education
Purchase Amount
Target Label

Some columns may be used as input features.

Another column may represent the target that the model is expected to predict.

Before training a model, we need to understand what every column means.
`
    },

    {
      id: "reading",
      title: "3. Reading a Dataset",

      content: `
Python provides libraries that make it possible to load structured data.

A common choice for tabular data is pandas.

A CSV file can be loaded into a DataFrame.

The DataFrame provides a convenient representation for inspecting rows, columns, data types, and missing values.

A typical workflow is:

File
↓
DataFrame
↓
Inspection
↓
Cleaning
↓
Transformation
`
    },

    {
      id: "inspection",
      title: "4. Inspecting the Dataset",

      content: `
After loading a dataset, do not immediately train a model.

First inspect the data.

Useful questions include:

• How many rows are present?
• How many columns are present?
• What are the column names?
• Which columns are numerical?
• Which columns are categorical?
• Are values missing?
• Are values stored using the expected data types?
• Are there suspicious values?

A developer should understand the dataset before choosing preprocessing operations.

Inspection prevents many downstream errors.
`
    },

    {
      id: "head-tail",
      title: "5. Inspecting Rows",

      content: `
A DataFrame can be inspected by viewing its first few rows.

This helps answer questions such as:

• Are the columns present?
• Are values in the expected format?
• Are categorical values represented consistently?
• Are there missing values?
• Are numerical columns actually numerical?

The first few rows are not sufficient to understand an entire dataset, but they provide an immediate first inspection.
`
    },

    {
      id: "types",
      title: "6. Understanding Data Types",

      content: `
Each column has a data type.

Common numerical types include:

• integers
• floating-point numbers

Categorical information may be stored as:

• strings
• category values
• codes

A model cannot directly perform ordinary numerical operations on arbitrary text values.

For example:

City = "Hyderabad"

cannot simply be multiplied by a numerical weight.

Categorical information therefore needs an appropriate numerical representation.
`
    },

    {
      id: "missing",
      title: "7. Missing Values",

      content: `
Real-world datasets frequently contain missing values.

For example:

Age | Income | City

21 | 45000 | Hyderabad

24 | missing | Chennai

missing | 52000 | Bengaluru

A missing value means that information was not available or was not recorded.

A model generally cannot simply treat an arbitrary missing marker as an ordinary numerical value.

Therefore, missing values need to be handled deliberately.
`
    },

    {
      id: "numerical-missing",
      title: "8. Handling Missing Numerical Values",

      content: `
One common approach for numerical missing values is to replace them with a summary statistic.

A frequently used choice is the mean.

Suppose the observed values are:

20
22
24
26

The mean is:

(20 + 22 + 24 + 26) / 4

= 23

A missing numerical value could then be replaced with 23.

Other approaches may use:

• median
• a domain-specific value
• model-based imputation
• removal of the corresponding example

The correct choice depends on the dataset and application.
`
    },

    {
      id: "categorical",
      title: "9. Categorical Data",

      content: `
Categorical data represents membership in categories.

Examples include:

City:
Hyderabad
Chennai
Bengaluru

Education:
School
Bachelor
Master

Payment:
Cash
Card
Online

These values cannot be directly treated as ordinary continuous numerical quantities.

For example, assigning:

Hyderabad = 1
Chennai = 2
Bengaluru = 3

may accidentally imply an ordering that does not exist.

Therefore, categorical variables often require an encoding strategy.
`
    },

    {
      id: "indicator",
      title: "10. Indicator Variables",

      content: `
One common approach to representing categorical variables is to create indicator variables.

Suppose the category is:

City

with values:

Hyderabad
Chennai
Bengaluru

We can create separate binary columns:

City_Hyderabad
City_Chennai
City_Bengaluru

For an example belonging to Hyderabad:

City_Hyderabad = 1
City_Chennai = 0
City_Bengaluru = 0

For Chennai:

City_Hyderabad = 0
City_Chennai = 1
City_Bengaluru = 0

This representation allows categorical membership to be expressed numerically without assuming that the categories have an ordinary numerical ordering.
`
    },

    {
      id: "one-hot",
      title: "11. One-Hot Encoding",

      content: `
Indicator-variable representation is commonly called one-hot encoding.

For a category with k possible values, one-hot encoding represents membership using binary indicators.

For example:

Color = Red

can become:

Red = 1
Green = 0
Blue = 0

A different example:

Color = Blue

becomes:

Red = 0
Green = 0
Blue = 1

One-hot encoding is particularly useful for categorical features whose values do not naturally have numerical order.
`
    },

    {
      id: "features-target",
      title: "12. Features and Targets",

      content: `
A supervised learning dataset commonly contains:

Features
+
Target

Features are the input information supplied to the model.

The target is the desired output.

For example:

Age
Income
Education
Location

may be features.

Loan Approval

may be the target.

The preprocessing pipeline must preserve the distinction between inputs and targets.

The model receives features.

During supervised training, the target provides the reference against which predictions can be evaluated.
`
    },

    {
      id: "preparation",
      title: "13. Data Preparation Pipeline",

      content: `
A practical tabular preprocessing pipeline can be organized as:

Step 1
Read the dataset.

Step 2
Inspect the structure.

Step 3
Identify numerical columns.

Step 4
Identify categorical columns.

Step 5
Detect missing values.

Step 6
Handle numerical missing values.

Step 7
Encode categorical values.

Step 8
Separate features and target.

Step 9
Convert numerical data into an appropriate tensor representation.

Step 10
Validate the result.

The exact pipeline depends on the dataset.
`
    },

    {
      id: "example-dataset",
      title: "14. Example Dataset",

      content: `
Consider a small dataset:

Age | Income | City | Purchased

21 | 45000 | Hyderabad | Yes

25 | 52000 | Chennai | No

missing | 48000 | Hyderabad | Yes

30 | missing | Bengaluru | No

There are several preprocessing problems.

Age contains a missing value.

Income contains a missing value.

City is categorical.

Purchased is a categorical target.

The dataset therefore cannot simply be converted directly into a numerical tensor without preparation.
`
    },

    {
      id: "numerical-processing",
      title: "15. Processing Numerical Columns",

      content: `
Numerical columns can often be converted directly into numerical tensors after missing values and invalid values have been handled.

For example:

Age
Income

can become numerical feature columns.

However, it is important to inspect:

• ranges
• units
• missing values
• unusual values
• data types

A value such as:

Income = -500000

might be syntactically numerical but semantically suspicious depending on the application.

Numerical preprocessing therefore requires both technical and domain awareness.
`
    },

    {
      id: "categorical-processing",
      title: "16. Processing Categorical Columns",

      content: `
Categorical columns need to be transformed into numerical representations before they can be supplied to ordinary tensor-based numerical operations.

For example:

City

can be transformed into indicator variables.

The resulting representation may become:

City_Hyderabad
City_Chennai
City_Bengaluru

The preprocessing pipeline should apply the same representation consistently to future data.

A model trained with one feature structure expects compatible input structure during evaluation and deployment.
`
    },

    {
      id: "tensor-conversion",
      title: "17. Conversion to Tensor Format",

      content: `
After preprocessing, the prepared features can be converted into tensors.

For example, suppose the processed feature matrix contains:

[21, 45000, 1, 0, 0]

[25, 52000, 0, 1, 0]

[23, 48000, 1, 0, 0]

These numerical values can be represented using a PyTorch tensor.

The tensor can then be supplied to later stages of the deep learning pipeline.

The important sequence is:

Raw Data
↓
Prepared Numerical Data
↓
Tensor
↓
Model
`
    },

    {
      id: "dtype",
      title: "18. Choosing an Appropriate Tensor Data Type",

      content: `
When converting numerical data into tensors, the data type matters.

Deep learning models commonly operate using floating-point values.

For example:

float32

is widely used because it provides a useful balance between numerical precision and memory usage.

Integer tensors are appropriate for some tasks, such as class indices.

The appropriate dtype depends on how the tensor will be used.
`
    },

    {
      id: "validation",
      title: "19. Validating the Prepared Dataset",

      content: `
After preprocessing, validate the result.

Check:

• number of rows
• number of features
• missing values
• data types
• tensor shape
• tensor dtype
• target representation
• unexpected values

For example:

If the original dataset contained 100 examples, the prepared feature tensor should normally contain the expected number of examples.

If the model expects 8 features, the feature tensor should contain 8 feature columns.

Validation catches errors before model training.
`
    },

    {
      id: "consistency",
      title: "20. Consistency Between Training and Future Data",

      content: `
Preprocessing must be consistent.

Suppose training data uses three city indicators:

City_Hyderabad
City_Chennai
City_Bengaluru

Future data must be represented using the same feature structure.

A new category can create a mismatch if preprocessing is not designed carefully.

The general principle is:

Training Representation
=
Future Representation

A model expects its inputs to have the structure for which it was trained.
`
    },

    {
      id: "data-leakage",
      title: "21. Avoiding Data Leakage",

      content: `
Data leakage occurs when information that should not be available during training influences the training process.

A simple example is using information from the test set to determine preprocessing statistics that should have been learned only from training data.

A safer conceptual workflow is:

Training Data
↓
Learn preprocessing parameters
↓
Transform Training Data

Then:

Validation/Test Data
↓
Use the same learned preprocessing parameters
↓
Transform Validation/Test Data

The key principle is that evaluation data should not improperly influence the training process.
`
    },

    {
      id: "real-world",
      title: "22. Real-World Data Is Messy",

      content: `
Real datasets can span multiple files and may contain different types of information.

They may include:

• text
• images
• audio
• point clouds
• numerical measurements

They may also contain:

• outliers
• faulty measurements
• recording errors
• missing information
• inconsistent formatting

Therefore, preprocessing is not simply a mechanical conversion step.

It is part of understanding the data and making it suitable for the learning objective.
`
    },

    {
      id: "visualization",
      title: "23. Why Inspection and Visualization Matter",

      content: `
Numerical summaries are useful, but visualization can reveal patterns that are difficult to see from raw tables.

Visualization can help identify:

• unusual values
• distributions
• clusters
• relationships
• missing patterns
• possible outliers

For example, a scatter plot may reveal that two numerical variables have a strong relationship.

A histogram may reveal that a variable is highly skewed.

Data visualization therefore supports better preprocessing decisions.
`
    },

    {
      id: "complete-workflow",
      title: "24. Complete Preprocessing Workflow",

      content: `
The complete conceptual workflow is:

1. Acquire data.

2. Read the dataset.

3. Understand the columns.

4. Inspect examples.

5. Determine data types.

6. Identify missing values.

7. Handle missing numerical values.

8. Encode categorical values.

9. Separate features and targets.

10. Convert numerical values into tensors.

11. Validate shapes and types.

12. Prepare batches for model training.

The exact implementation depends on the dataset, but the reasoning process is broadly reusable.
`
    }
  ],

  codeExamples: [
    {
      title: "Create a Small Dataset",
      language: "python",

      code: `import pandas as pd

data = {
    "Age": [21, 25, 28, 30],
    "Income": [45000, 52000, 48000, 61000],
    "City": [
        "Hyderabad",
        "Chennai",
        "Hyderabad",
        "Bengaluru"
    ]
}

df = pd.DataFrame(data)

print(df)`,

      explanation:
        "Creates a small tabular dataset using pandas."
    },

    {
      title: "Inspect a Dataset",
      language: "python",

      code: `print(df.head())
print(df.shape)
print(df.dtypes)
print(df.isna().sum())`,

      explanation:
        "Inspects rows, dimensions, data types, and missing values."
    },

    {
      title: "Handle a Missing Numerical Value",
      language: "python",

      code: `import pandas as pd

df = pd.DataFrame({
    "Age": [21, 25, None, 30],
    "Income": [45000, 52000, 48000, 61000]
})

df["Age"] = df["Age"].fillna(
    df["Age"].mean()
)

print(df)`,

      explanation:
        "Replaces a missing numerical value with the mean of the available values."
    },

    {
      title: "One-Hot Encode a Category",
      language: "python",

      code: `import pandas as pd

df = pd.DataFrame({
    "City": [
        "Hyderabad",
        "Chennai",
        "Bengaluru",
        "Hyderabad"
    ]
})

encoded = pd.get_dummies(
    df,
    columns=["City"]
)

print(encoded)`,

      explanation:
        "Converts a categorical column into indicator columns."
    },

    {
      title: "Convert Prepared Data to a Tensor",
      language: "python",

      code: `import torch

features = [
    [21.0, 45000.0, 1.0],
    [25.0, 52000.0, 0.0],
    [28.0, 48000.0, 1.0]
]

X = torch.tensor(
    features,
    dtype=torch.float32
)

print(X)
print(X.shape)
print(X.dtype)`,

      explanation:
        "Converts already prepared numerical features into a PyTorch tensor."
    }
  ],

  practicalExample: {
    title: "Customer Dataset Preprocessing",

    objective:
      "Prepare a small customer dataset containing numerical, categorical, and missing values.",

    workflow: [
      "Create or load the dataset.",
      "Inspect rows and columns.",
      "Identify missing values.",
      "Fill missing numerical values.",
      "Encode categorical columns.",
      "Separate features and target.",
      "Convert features to a PyTorch tensor.",
      "Inspect the resulting tensor."
    ]
  },

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "Why does raw real-world data usually require preprocessing before deep learning?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "What is the difference between a feature and a target?"
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "Why should categorical values generally not be treated as ordinary continuous numbers?"
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "Explain one-hot encoding using three categories."
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "Explain one method for handling missing numerical values."
    },

    {
      id: "ex6",
      difficulty: "Hard",
      question:
        "Explain why preprocessing must be consistent between training and future data."
    },

    {
      id: "ex7",
      difficulty: "Hard",
      question:
        "Explain the basic idea of data leakage."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Dataset Inspector",
      task:
        "Create a pandas program that displays the first rows, shape, data types, and missing-value counts of a dataset."
    },

    {
      id: "code2",
      title: "Missing Value Handler",
      task:
        "Create a program that detects missing numerical values and replaces them with the column mean."
    },

    {
      id: "code3",
      title: "Categorical Encoder",
      task:
        "Create a program that converts categorical columns into indicator variables."
    },

    {
      id: "code4",
      title: "Tensor Converter",
      task:
        "Convert a prepared numerical DataFrame into a PyTorch tensor."
    },

    {
      id: "code5",
      title: "Complete Preprocessing Pipeline",
      task:
        "Build a complete pipeline from DataFrame creation through cleaning, encoding, feature-target separation, and tensor conversion."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "A tensor conversion fails because a feature column still contains strings.",
      task:
        "Identify the preprocessing step that was missed."
    },

    {
      id: "debug2",
      problem:
        "A numerical column contains missing values and tensor conversion fails.",
      task:
        "Explain what should happen before tensor conversion."
    },

    {
      id: "debug3",
      problem:
        "Training data has three encoded city columns while test data has four.",
      task:
        "Explain why this creates a feature mismatch."
    }
  ],

  summary: [
    "Real-world datasets usually require preprocessing.",
    "A dataset should be inspected before model training.",
    "Numerical and categorical data require different treatment.",
    "Missing numerical values need an explicit strategy.",
    "Categorical variables can be represented using indicator or one-hot variables.",
    "Features are inputs to a supervised model.",
    "Targets represent desired outputs.",
    "Prepared numerical data can be converted into tensors.",
    "Preprocessing must remain consistent across training and future data.",
    "Data leakage must be avoided.",
    "Validation is necessary after preprocessing."
  ],

  keyTakeaways: [
    "Understand the structure of the dataset before modeling.",
    "Handle missing values explicitly.",
    "Encode categorical information appropriately.",
    "Separate features from targets.",
    "Convert prepared numerical data into tensors.",
    "Check shape and dtype after conversion.",
    "Use the same preprocessing logic consistently.",
    "Good preprocessing is essential for reliable deep learning."
  ],

  nextLesson: "Lesson 4 — Linear Algebra for Deep Learning"
};

export default lesson3;