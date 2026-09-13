const lesson1 = {
  title: "Machine Learning Workflow",

  content: `
# Machine Learning Workflow

## What You Will Learn

In this lesson, you will learn how a practical machine-learning project moves from a problem statement to an evaluated model.

You will learn:

- What a machine-learning workflow is
- Problem definition
- Data preparation
- Features and targets
- Data splitting
- Baseline models
- Model training
- Model evaluation
- Error analysis
- Iteration
- Reproducibility
- Why workflow matters in AI
- A complete practical workflow

The core workflow is:

Problem Definition
        ↓
Data Preparation
        ↓
Features & Target
        ↓
Train / Validation / Test
        ↓
Baseline
        ↓
Model Training
        ↓
Evaluation
        ↓
Error Analysis
        ↓
Iteration

---

# 1. What Is a Machine-Learning Workflow?

A machine-learning workflow is the sequence of steps used to develop, evaluate, and improve a machine-learning solution.

A model should not be treated as:

Data → model.fit() → answer

A reliable workflow contains several stages.

A simplified workflow is:

Problem
    ↓
Data
    ↓
Preparation
    ↓
Model
    ↓
Evaluation
    ↓
Improvement

The purpose is to make the process understandable and reproducible.

---

# 2. Start With the Problem

Before selecting an algorithm, define the problem.

Ask:

What are we trying to solve?

What information is available?

What should the model produce?

How will success be measured?

For example:

Problem:

Predict whether a customer will cancel a service.

The system may use:

- Customer age
- Usage frequency
- Subscription duration
- Support interactions

The target may be:

Churn

The machine-learning problem is therefore:

Input Features
        ↓
Model
        ↓
Churn Prediction

---

# 3. Problem Definition

A good problem definition specifies:

Input

Target

Prediction time

Success criterion

Constraints

For example:

Input:

Customer information available at the prediction date.

Target:

Whether the customer cancels during the defined future period.

Success:

A suitable classification metric.

This is much more useful than simply saying:

"Build an AI model for customers."

---

# 4. Why Problem Definition Matters

A technically strong model can still solve the wrong problem.

Suppose an organization wants to:

Predict whether a customer will leave next month.

But the dataset contains:

Customer cancellation date.

Using the cancellation date directly would leak future information.

Therefore the first task is not choosing an algorithm.

The first task is defining:

What information would actually be available when the prediction is made?

---

# 5. Data Collection

Once the problem is defined, identify the available data.

Possible sources include:

- Databases
- CSV files
- APIs
- Application logs
- Sensors
- Transaction systems
- User interactions
- Images
- Text
- External datasets

The data should correspond to the prediction problem.

The process is:

Problem
    ↓
Required Information
    ↓
Available Data
    ↓
Dataset

---

# 6. Data Preparation

Raw data is rarely immediately ready for machine learning.

Preparation may include:

- Removing duplicates
- Handling missing values
- Correcting invalid values
- Converting data types
- Formatting columns
- Creating appropriate representations

The goal is to create reliable model inputs.

A useful principle is:

Clean the data according to the problem.

Do not modify values simply because they look unusual without understanding their meaning.

---

# 7. Features

Features are inputs used by a model.

Suppose we want to predict student performance.

Possible features:

Study Hours

Attendance

Previous Score

Assignment Completion

A single observation may therefore become:

[5, 90, 75, 0.8]

Each value represents one feature.

The feature representation connects directly to the vectors and matrices studied earlier.

---

# 8. Target

The target is the outcome the model is expected to predict.

For a student-performance problem:

Features:

Study Hours

Attendance

Previous Score

Target:

Final Score

The workflow is:

Features
    ↓
Model
    ↓
Predicted Target

---

# 9. Features and Target Together

Suppose:

X

represents the features.

y

represents the target.

Then a supervised-learning problem can be represented as:

X → Model → y_hat

where:

X = input features

y_hat = prediction

and:

y

is the actual target.

The model attempts to learn a useful relationship between:

X

and:

y

---

# 10. Prediction Time

One of the most important workflow questions is:

What information would be available at prediction time?

Suppose we want to predict tomorrow's sales.

We can use information known today.

We should not use:

Tomorrow's actual sales.

That information would not yet be available.

This distinction helps prevent data leakage.

---

# 11. Data Splitting

We should separate data used for training from data used for evaluation.

A common structure is:

Training Data
    ↓
Model Fitting

Validation Data
    ↓
Model Selection / Tuning

Test Data
    ↓
Final Generalization Estimate

Each dataset has a different purpose.

---

# 12. Training Data

Training data is used to fit model parameters.

Conceptually:

Training Features
        ↓
Learning Algorithm
        ↓
Learned Parameters

For example, in a simple linear model:

y_hat = wx + b

the model learns useful values of:

w

and:

b

from the training data.

---

# 13. Validation Data

Validation data helps make decisions such as:

Which model should we choose?

Which hyperparameters should we use?

Which approach performs better during development?

Validation data should remain separate from the final test set.

---

# 14. Test Data

The test set is held back for final evaluation.

Its purpose is to estimate how well the selected system is likely to generalize to unseen data.

The test data should not be repeatedly used to make development decisions.

Otherwise it can stop behaving like an unbiased final check.

---

# 15. Why Splitting Matters

Suppose we train and evaluate using the exact same examples.

The model may appear excellent.

But it may simply have learned patterns specific to those observations.

The real question is:

How well does the model work on new data?

This is the idea of:

Generalization

---

# 16. Baseline Models

Before training a complex model, create a simple reference.

This is called a:

Baseline.

A baseline tells us:

What result can we achieve with a simple approach?

For classification, a baseline might always predict the majority class.

For regression, a baseline might always predict a constant such as the training-set mean.

---

# 17. Why Baselines Matter

Suppose:

Baseline accuracy = 80%

Model accuracy = 81%

The model improved only slightly.

Now consider:

Baseline accuracy = 55%

Model accuracy = 81%

The improvement is much more meaningful.

Without a baseline, the score alone does not tell us how much value the model provides.

---

# 18. Constant Regression Baseline

Suppose the target values are:

60

70

80

90

The mean is:

75

A simple regression baseline predicts:

75

for every observation.

Python:

import numpy as np

y = np.array([
    60,
    70,
    80,
    90
])

baseline_prediction = np.mean(
    y
)

print(
    baseline_prediction
)

Output:

75.0

This simple model establishes a reference point.

---

# 19. Majority-Class Baseline

Suppose a binary dataset contains:

Positive = 70%

Negative = 30%

A simple baseline could always predict:

Positive

Its accuracy would be:

70%

A machine-learning model should be compared against this reference.

This does not mean accuracy is always the correct metric.

The metric should reflect the problem.

---

# 20. Model Training

After preparing data and establishing a baseline, we can train candidate models.

The workflow becomes:

Training Data
    ↓
Algorithm
    ↓
Parameter Learning
    ↓
Trained Model

Example using scikit-learn:

from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(
    X_train,
    y_train
)

The:

fit()

operation trains the model using the training data.

The exact implementation depends on the algorithm.

---

# 21. Model Prediction

After training:

predictions = model.predict(
    X_test
)

The workflow is:

Test Features
    ↓
Trained Model
    ↓
Predictions

The predictions can then be compared against:

y_test

---

# 22. Model Evaluation

Evaluation measures how well the model performs.

For regression, possible metrics include:

- MAE
- MSE
- RMSE
- R²

For classification, possible metrics include:

- Accuracy
- Precision
- Recall
- F1-score
- ROC-AUC

The correct metric depends on the problem.

Do not choose a metric only because it produces a large number.

Choose it because it measures something meaningful.

---

# 23. Example Regression Evaluation

Suppose:

actual = [
    50,
    60,
    70
]

predicted = [
    48,
    63,
    68
]

Python:

import numpy as np

actual = np.array([
    50,
    60,
    70
])

predicted = np.array([
    48,
    63,
    68
])

mae = np.mean(
    np.abs(
        actual - predicted
    )
)

mse = np.mean(
    (
        actual - predicted
    ) ** 2
)

rmse = np.sqrt(
    mse
)

print(
    "MAE:",
    mae
)

print(
    "MSE:",
    mse
)

print(
    "RMSE:",
    rmse
)

---

# 24. Error Analysis

A single evaluation score is not enough.

We also need to understand:

Where does the model fail?

For example:

Actual:
[50, 60, 70, 100]

Predicted:
[49, 61, 69, 75]

The last prediction has a large error.

Error analysis asks:

Why?

Possibilities include:

- Missing information
- Rare example
- Data quality issue
- Distribution shift
- Incorrect target definition
- Model limitation

---

# 25. Error Analysis Workflow

Model
    ↓
Predictions
    ↓
Compare With Actual Values
    ↓
Find Errors
    ↓
Group Error Patterns
    ↓
Investigate Causes
    ↓
Improve System

Error analysis turns a score into actionable information.

---

# 26. Iteration

Machine learning is usually iterative.

A first model is rarely the end.

The process can be:

Version 1
    ↓
Evaluate
    ↓
Analyze Errors
    ↓
Change Data / Features / Model
    ↓
Version 2
    ↓
Evaluate Again

The goal is systematic improvement.

---

# 27. What Can Be Changed During Iteration?

Possible changes include:

- Feature definitions
- Data cleaning
- Model choice
- Hyperparameters
- Preprocessing
- Sampling strategy
- Evaluation metric

Changes should be documented.

Otherwise it becomes difficult to know why one experiment performed differently from another.

---

# 28. Reproducibility

A good machine-learning experiment should be reproducible.

Record:

- Dataset version
- Features
- Target definition
- Split strategy
- Model
- Hyperparameters
- Metrics
- Results
- Limitations

If possible, use fixed random seeds for experiments involving randomness.

---

# 29. Complete Workflow

The complete basic workflow is:

Problem Definition
        ↓
Data Collection
        ↓
Data Preparation
        ↓
Feature / Target Definition
        ↓
Train / Validation / Test Split
        ↓
Baseline
        ↓
Candidate Model Training
        ↓
Evaluation
        ↓
Error Analysis
        ↓
Iteration
        ↓
Final Model Selection

This is the foundation of practical machine-learning development.

---

# 30. Example — Student Score Prediction

Problem:

Predict final student score.

Features:

Study Hours

Attendance

Previous Score

Target:

Final Score

Workflow:

Student Dataset
        ↓
Clean Data
        ↓
Define Features / Target
        ↓
Split Data
        ↓
Mean Baseline
        ↓
Train Candidate Models
        ↓
Evaluate
        ↓
Analyze Errors
        ↓
Select Model

The important point is that the model is only one stage of the complete system.

---

# 31. Example — Binary Classification

Problem:

Predict whether an email is spam.

Features may include:

- Message statistics
- Text-derived features
- Sender-related information
- Other information available at prediction time

Target:

Spam / Not Spam

Workflow:

Email Data
        ↓
Prepare Data
        ↓
Features + Label
        ↓
Train / Validation / Test
        ↓
Baseline
        ↓
Classifier
        ↓
Evaluation
        ↓
Error Analysis
        ↓
Iteration

---

# 32. Choosing the Right Learning Problem

Ask:

Do we have a known target?

If yes:

Supervised learning may be appropriate.

If no:

An unsupervised approach may be appropriate.

If the target is numerical:

Regression may be appropriate.

If the target is categorical:

Classification may be appropriate.

The correct choice depends on the problem definition and data.

---

# 33. Workflow Does Not Mean One Fixed Algorithm

The workflow remains broadly similar even when algorithms change.

For example:

Linear Regression

Decision Tree

Random Forest

Logistic Regression

Neural Network

may all require:

Problem Definition

Data Preparation

Evaluation

and:

Error Analysis

The algorithm changes.

The reasoning workflow remains.

---

# 34. Practical Python Workflow Example

A simplified structure is:

import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LinearRegression

from sklearn.metrics import mean_absolute_error

df = pd.read_csv(
    "student_scores.csv"
)

X = df[
    [
        "StudyHours",
        "Attendance"
    ]
]

y = df["Score"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

model = LinearRegression()

model.fit(
    X_train,
    y_train
)

predictions = model.predict(
    X_test
)

mae = mean_absolute_error(
    y_test,
    predictions
)

print(
    "MAE:",
    mae
)

This is a simplified workflow.

Real projects require much more careful data preparation and evaluation.

---

# 35. Why the Baseline Comes Before the Model

The baseline provides a reference.

Without it:

Model score

has little context.

With it:

Baseline
    ↓
Candidate Model
    ↓
Improvement

We can ask:

Did the model actually add value?

This is a key engineering question.

---

# 36. Why Evaluation Must Be Separate

Suppose we repeatedly modify the model after looking at test results.

The test set is gradually influencing development decisions.

It is no longer acting like an untouched final evaluation.

Therefore:

Training

and:

Development

should be separated from:

Final Evaluation

This is why the workflow distinguishes:

Training

Validation

Test

---

# 37. Why Error Analysis Matters

Suppose:

Model A:

Accuracy = 90%

Model B:

Accuracy = 89%

Model A appears better.

But suppose:

Model A

fails badly on an important minority group.

Model B

performs more consistently.

The single accuracy number does not capture the entire situation.

Error analysis helps uncover these details.

---

# 38. Practical Experiment

Build a small binary classification workflow.

Use a dataset with:

- Features
- Binary target

Perform:

1. Define the problem.
2. Inspect the dataset.
3. Prepare the data.
4. Split the data.
5. Create a baseline.
6. Train a simple model.
7. Generate predictions.
8. Calculate an appropriate metric.
9. Inspect errors.
10. Write what should be improved.

---

# Practice

## Practice 1

Define a machine-learning problem for:

Student performance prediction.

Identify:

- Features
- Target
- Prediction time
- Success metric

## Practice 2

Define a classification problem for:

Spam detection.

## Practice 3

Create a constant regression baseline.

## Practice 4

Create a majority-class classification baseline.

## Practice 5

Split a dataset into training and test sets.

Explain the purpose of each set.

## Practice 6

Train a simple model and calculate an evaluation metric.

## Practice 7

Inspect the largest prediction errors.

Explain possible reasons.

---

# Challenge — First ML Workflow

Build a small machine-learning project following this exact structure:

Problem
    ↓
Dataset
    ↓
Features
    ↓
Target
    ↓
Split
    ↓
Baseline
    ↓
Model
    ↓
Prediction
    ↓
Evaluation
    ↓
Error Analysis
    ↓
Conclusion

Your final report should include:

- Problem statement
- Dataset description
- Feature definitions
- Target definition
- Split strategy
- Baseline result
- Candidate model result
- Evaluation metric
- Error observations
- Model selection reasoning
- Limitations
- Next improvement

---

# Common Mistakes

## Mistake 1 — Choosing an Algorithm First

Define the problem first.

Then select an appropriate learning approach.

## Mistake 2 — Using Future Information

Only use information available at prediction time.

## Mistake 3 — Training and Testing on the Same Data

This can produce misleadingly strong evaluation results.

## Mistake 4 — Skipping the Baseline

Without a baseline, model improvement is difficult to interpret.

## Mistake 5 — Looking Only at One Score

A metric summarizes performance.

Error analysis provides deeper understanding.

## Mistake 6 — Repeatedly Using the Test Set

The final test set should be protected from repeated development decisions.

---

# Quick Check

1. What is a machine-learning workflow?

A structured sequence for defining, developing, evaluating, and improving a machine-learning solution.

2. What should happen before choosing a model?

Define the problem and understand the available data.

3. What are features?

Inputs used by the model.

4. What is a target?

The outcome the model is expected to predict.

5. Why split data?

To separate model fitting and evaluation and estimate generalization.

6. What is training data?

Data used to fit model parameters.

7. What is validation data?

Data used during development for model or configuration decisions.

8. What is test data?

Held-out data used for final evaluation.

9. What is a baseline?

A simple reference system used to establish expectations.

10. Why is a baseline important?

It shows whether a more complex model actually adds value.

11. What is evaluation?

Measuring model performance using appropriate metrics.

12. What is error analysis?

Investigating where and why the model makes mistakes.

13. What is iteration?

Repeatedly improving the system using evidence from evaluation and error analysis.

14. Why is reproducibility important?

It allows experiments and results to be understood and repeated.

---

# Key Takeaways

A machine-learning project begins with a problem, not an algorithm.

The workflow is:

Problem
    ↓
Data
    ↓
Features
    ↓
Target
    ↓
Split
    ↓
Baseline
    ↓
Training
    ↓
Evaluation
    ↓
Error Analysis
    ↓
Iteration

Features are model inputs.

The target is the expected output.

Training data is used to fit parameters.

Validation data supports development decisions.

Test data provides the final held-out evaluation.

Baselines provide a reference point.

Evaluation measures performance.

Error analysis explains failures.

Iteration uses evidence to improve the system.

A good machine-learning workflow is therefore not:

"Train a model and report the score."

It is:

"Define the problem, prepare reliable data, establish a baseline, train, evaluate, analyze errors, and make reasoned improvements."

This workflow forms the foundation for the supervised-learning and unsupervised-learning techniques that follow.
`,
};

export default lesson1;