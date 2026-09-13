const lesson3 = {
  title: "Train, Validation & Test Data",

  content: `
# Train, Validation & Test Data

## What You Will Learn

A machine-learning model must not be evaluated only on the examples it has already seen during training.

The central question is:

Can the model perform well on new, unseen data?

This is the idea of:

Generalization

In this lesson, you will learn:

- Why datasets are split
- Training data
- Validation data
- Test data
- Generalization
- Train-test split
- Train-validation-test workflow
- Mathematical intuition
- Random splitting
- Stratified splitting
- Time-based splitting
- Data leakage
- Distribution shift
- Overfitting intuition
- Underfitting intuition
- Python implementation
- NumPy implementation
- scikit-learn implementation
- Model selection
- Hyperparameter selection
- Final evaluation
- Practical experiments
- Common mistakes
- Practice
- Challenge

The central idea is:

Full Dataset
      ↓
Training Data
      ↓
Learn Parameters

Validation Data
      ↓
Choose / Adjust Model

Test Data
      ↓
Final Evaluation

---

# 1. Why Do We Split Data?

Suppose we have:

10,000 observations.

We want to build a model.

If we use all 10,000 observations for training and then evaluate the model using those same observations, we are asking:

"How well does the model perform on data it has already seen?"

That is not the same as asking:

"How well will the model perform on new data?"

The second question is much more important.

---

# 2. Generalization

Generalization is the ability of a trained model to perform well on unseen data drawn from the relevant deployment distribution.

Conceptually:

Training Examples
       ↓
Learn Pattern
       ↓
New Examples
       ↓
Use Learned Pattern

A useful machine-learning model should learn patterns that generalize beyond the exact training examples.

---

# 3. Mathematical Intuition

Suppose the true relationship is:

y = f(x)

We do not know:

f

Instead, we learn an approximation:

f_hat

from training data.

The goal is not simply:

Fit training observations.

The goal is:

Learn a function that performs well on new observations.

Therefore:

Training Performance
is not enough.

We also care about:

Generalization Performance.

---

# 4. Training Data

Training data is used to learn model parameters.

Suppose a model is:

y_hat = wx + b

The parameters are:

w

and:

b

Training uses:

(X_train, y_train)

to estimate:

w

and:

b

Conceptually:

X_train
    ↓
Learning Algorithm
    ↓
Learned Parameters
    ↓
Model

---

# 5. Validation Data

Validation data is used during model development.

It can help answer:

Which model should we choose?

Which hyperparameter values work better?

Should we change the preprocessing approach?

Should we compare candidate models?

The validation set therefore supports development decisions.

---

# 6. Test Data

The test set is held back for final evaluation.

It should represent unseen data as fairly as practical.

Once the model and development decisions are finalized, the test set is used to estimate final performance.

The principle is:

Training:

Learn.

Validation:

Choose.

Test:

Evaluate.

---

# 7. Three-Way Split

A common conceptual structure is:

Full Dataset
       ↓
Training Set
       +
Validation Set
       +
Test Set

For example:

70% training

15% validation

15% test

This is only an example.

The correct proportions depend on:

- Dataset size
- Problem type
- Model
- Evaluation strategy

---

# 8. Why the Exact Percentage Is Not Sacred

There is no universal rule saying:

Training must always be 70%.

A very small dataset may require:

Cross-validation

A very large dataset may use a smaller percentage for validation and test data.

The important principle is:

Enough training data to learn.

Enough validation data to make reliable development decisions.

Enough test data to obtain a useful final evaluation.

---

# 9. Random Train-Test Split

For many datasets where observations are reasonably exchangeable, a random split can be useful.

Suppose:

100 observations

We may randomly allocate:

80

to training

and:

20

to testing.

Python:

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

Now:

X_train

contains training features.

X_test

contains test features.

y_train

contains training targets.

y_test

contains test targets.

---

# 10. Why random_state Is Used

Random splitting involves randomness.

Without control, a repeated run may produce different splits.

Using:

random_state=42

makes the split reproducible.

The number:

42

is not mathematically special.

Any fixed integer can be used as a seed.

The important property is reproducibility.

---

# 11. Checking Shapes

After splitting:

print(
    X_train.shape
)

print(
    X_test.shape
)

print(
    y_train.shape
)

print(
    y_test.shape
)

For example, if:

X.shape = (100, 4)

and:

test_size = 0.2

we may get approximately:

X_train.shape = (80, 4)

X_test.shape = (20, 4)

The exact number depends on the splitting behavior and dataset size.

---

# 12. Mathematical View of the Split

Suppose:

X ∈ R^(n × d)

and:

y ∈ R^n

After splitting:

X_train ∈ R^(n_train × d)

X_test ∈ R^(n_test × d)

where:

n_train + n_test = n

The number of features:

d

remains the same.

Only the observations are divided.

---

# 13. Train and Test Feature Dimensions

Suppose:

X:

1000 observations

20 features

Then:

X.shape = (1000, 20)

After:

80 / 20 split:

X_train:

(800, 20)

X_test:

(200, 20)

Notice:

The number of columns remains:

20

because the same feature representation is used.

---

# 14. Training a Model

Example:

from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(
    X_train,
    y_train
)

The model learns parameters only from:

X_train

and:

y_train

---

# 15. Testing the Model

Then:

predictions = model.predict(
    X_test
)

The predictions are compared with:

y_test

The model did not use:

y_test

during fitting.

This separation is crucial for meaningful evaluation.

---

# 16. Regression Evaluation

Example:

from sklearn.metrics import mean_absolute_error

mae = mean_absolute_error(
    y_test,
    predictions
)

print(
    "Test MAE:",
    mae
)

The test metric estimates performance on held-out observations.

---

# 17. Why Not Evaluate on Training Data?

Suppose:

Training MAE = 1.2

Test MAE = 8.7

The difference suggests the model performs much better on training data than on unseen test data.

This can be a sign of:

Overfitting

The exact diagnosis requires more analysis.

---

# 18. Overfitting Intuition

Overfitting occurs when a model learns patterns that are too specific to the training data and therefore performs poorly on new data.

Conceptually:

Training Data
    ↓
Model Learns
    ↓
Specific Details
    ↓
Excellent Training Performance
    ↓
Poor New-Data Performance

The goal is not:

Maximum training performance at any cost.

The goal is:

Useful generalization.

---

# 19. Underfitting Intuition

Underfitting occurs when a model is too limited to capture important structure in the data.

Conceptually:

Training Data
    ↓
Model Too Simple
    ↓
Important Pattern Missed
    ↓
Poor Training Performance
    ↓
Poor New-Data Performance

Underfitting and overfitting are opposite failure patterns.

---

# 20. Training vs Validation

Suppose we have three candidate models:

Model A

Model B

Model C

We can train all three on:

Training Data

Then compare:

Validation Performance

We choose the model based on development evidence.

Only afterward do we perform final evaluation on:

Test Data

---

# 21. Why the Test Set Should Be Protected

Suppose we repeatedly inspect test performance.

Iteration 1:

Test score = 80%

We change the model.

Iteration 2:

Test score = 84%

We change preprocessing.

Iteration 3:

Test score = 87%

We choose the model because of what we observed on the test set.

Now the test set has influenced development.

It is no longer functioning like an untouched final evaluation.

Therefore:

Protect the test set.

---

# 22. Validation as a Development Tool

The validation set can be used repeatedly during development.

For example:

Model A → validation score

Model B → validation score

Model C → validation score

Then choose the best candidate.

After the final decision:

Evaluate once on the test set.

This creates a cleaner separation between:

Development

and:

Final Evaluation.

---

# 23. A Complete Development Workflow

The process can be:

Full Dataset
      ↓
Train / Validation / Test
      ↓
Train Candidate Models
      ↓
Evaluate On Validation
      ↓
Select Model
      ↓
Finalize Development Choices
      ↓
Evaluate On Test
      ↓
Report Final Result

This is the central idea of the lesson.

---

# 24. Feature Preprocessing and Splits

Preprocessing can itself cause leakage.

Suppose:

You calculate the mean of a feature using the entire dataset.

Then you use that mean to transform:

Training

and:

Test

This lets information from the test set influence the training process.

Instead:

Learn preprocessing parameters from training data.

Then apply them to validation and test data.

Conceptually:

Training Data
    ↓
Fit Preprocessing
    ↓
Learn Transformation Parameters
    ↓
Apply To Validation / Test

---

# 25. Example of Scaling Leakage

Suppose:

Age values in the full dataset

are used to calculate:

mean_age

Then the mean includes test observations.

A cleaner approach is:

mean_age_train

calculated only from training data.

Then use:

mean_age_train

to transform training, validation, and test observations.

This principle becomes especially important in real machine-learning pipelines.

---

# 26. Pipeline Intuition

scikit-learn provides pipelines that help keep preprocessing and modeling together.

Example:

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

pipeline.fit(
    X_train,
    y_train
)

predictions = pipeline.predict(
    X_test
)

The pipeline fits the scaler as part of the training process.

This helps reduce accidental preprocessing leakage.

---

# 27. Classification Splits

For classification, random splitting may accidentally create different class proportions between train and test.

Suppose:

Dataset:

90% class 0

10% class 1

A random split should ideally preserve a useful representation of both classes.

scikit-learn can use:

stratify

Example:

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

This aims to preserve class proportions across the split.

---

# 28. Why Stratification Matters

Suppose a dataset contains:

950 negative examples

50 positive examples

If a very small test set is created without care, it may contain very few positive cases or, in extreme cases, none.

That can make evaluation unreliable.

Stratification helps maintain representation of classes.

---

# 29. Time-Based Data

Random splitting is not always appropriate.

Consider:

Sales forecasting

Stock-related prediction

Sensor monitoring

Website traffic forecasting

Customer churn over time

In these cases, the order of observations matters.

A future observation should not become training information for predicting the past.

---

# 30. Temporal Split

Suppose the data is:

January

February

March

April

May

June

July

August

A temporal split might be:

Training:

January → June

Validation:

July

Test:

August

The direction is:

Past
   ↓
Training
   ↓
Validation
   ↓
Future
   ↓
Test

This better reflects deployment when the task is inherently temporal.

---

# 31. Why Random Time Splits Can Mislead

Suppose:

Training receives observations from:

January

March

July

August

and:

Test receives:

February

April

June

This means training may contain information from after some test observations.

For forecasting problems, that can create an unrealistic evaluation.

The evaluation should resemble how the system will actually be used.

---

# 32. Chronological Generalization

For time-dependent tasks:

The model should learn from the past.

Then be evaluated on the future.

Conceptually:

Past Data
   ↓
Learn
   ↓
Future Data
   ↓
Evaluate

This tests a more realistic form of temporal generalization.

---

# 33. Distribution Assumption

Traditional random train-test evaluation generally assumes that the training and test observations are representative enough of the same underlying target distribution for the intended use.

But real deployment can differ.

For example:

Training:

Older customer behavior

Production:

New customer behavior

The distributions may change.

This is related to:

Distribution shift

---

# 34. Distribution Shift

Distribution shift occurs when the data encountered after deployment differs from the data used during development.

Examples:

- User behavior changes
- Economic conditions change
- Product catalog changes
- Sensor characteristics change
- Fraud patterns change
- Language changes

A model may therefore perform well during evaluation but degrade after deployment.

This is one reason monitoring matters in production AI systems.

---

# 35. Dataset Size and Splitting

Suppose:

n = 100

A three-way split may leave very few examples for validation and test.

Suppose:

n = 10,000,000

Then even a small percentage may provide thousands of held-out observations.

Therefore split strategy should consider:

Dataset size

and:

Evaluation requirements.

---

# 36. Cross-Validation Intuition

When data is limited, cross-validation can provide a more efficient estimate during model development.

For example:

5-fold cross-validation

divides the training data into five parts.

Then the model is trained and validated across different folds.

Conceptually:

Fold 1 → Validate

Fold 2 → Validate

Fold 3 → Validate

Fold 4 → Validate

Fold 5 → Validate

The results can then be aggregated.

Detailed cross-validation techniques will be covered later.

---

# 37. Important Rule About Test Data

Cross-validation should usually operate on the development/training portion.

The final test set should remain held out until final evaluation.

Conceptually:

Full Dataset
      ↓
Development Data + Test Data
      ↓
Development Data
      ↓
Cross-Validation
      ↓
Model Selection
      ↓
Final Model
      ↓
Test Evaluation

This keeps the test evaluation separate.

---

# 38. Mathematical Error View

Suppose the true target is:

y

and model prediction is:

y_hat

A loss function is:

L(y, y_hat)

Training attempts to minimize the loss over training observations.

For example:

Training objective:

minimize

(1/n_train)
Σ L(
y_i,
y_hat_i
)

But the real goal is strong performance on unseen observations.

Therefore we also care about:

Expected loss on new data.

This is the mathematical intuition behind generalization.

---

# 39. Training Objective vs Generalization Objective

The training process directly observes:

Training Loss

The desired behavior is:

Low expected loss on new observations.

These are related but not identical.

A model may minimize training loss aggressively while becoming worse at generalization.

This is why held-out evaluation is essential.

---

# 40. Complete Python Example

Example:

import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LinearRegression

from sklearn.metrics import mean_absolute_error

df = pd.DataFrame({
    "StudyHours": [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 10
    ],
    "Attendance": [
        60, 65, 70, 72, 75,
        80, 83, 88, 92, 95
    ],
    "Score": [
        45, 50, 58, 63, 68,
        73, 78, 84, 91, 96
    ]
})

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

train_predictions = model.predict(
    X_train
)

test_predictions = model.predict(
    X_test
)

train_mae = mean_absolute_error(
    y_train,
    train_predictions
)

test_mae = mean_absolute_error(
    y_test,
    test_predictions
)

print(
    "Training MAE:",
    train_mae
)

print(
    "Test MAE:",
    test_mae
)

This experiment demonstrates the difference between:

Training performance

and:

Held-out test performance.

---

# 41. Checking the Split Manually

Example:

print(
    "Training observations:",
    len(X_train)
)

print(
    "Test observations:",
    len(X_test)
)

print(
    "Total observations:",
    len(X)
)

Verify:

len(X_train)
+
len(X_test)

matches:

len(X)

---

# 42. Classification Example

Example:

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

The:

stratify=y

argument helps maintain class proportions.

---

# 43. A Better Three-Way Split

Conceptually:

X
 ↓
Train + Temporary
       ↓
   Validation + Test

In Python:

X_train, X_temp, y_train, y_temp = train_test_split(
    X,
    y,
    test_size=0.3,
    random_state=42
)

Then:

X_val, X_test, y_val, y_test = train_test_split(
    X_temp,
    y_temp,
    test_size=0.5,
    random_state=42
)

This produces approximately:

70% training

15% validation

15% test

for sufficiently large datasets.

---

# 44. Why Split Twice?

The first split separates:

Training

from:

Development/Test remainder

The second split divides the remainder into:

Validation

and:

Test

This creates three distinct datasets.

---

# 45. Model Selection Example

Suppose:

Model A validation MAE = 5.2

Model B validation MAE = 4.1

Model C validation MAE = 4.8

Under this MAE objective:

Model B

is the best candidate on validation data.

Then:

Finalize Model B

and evaluate it on:

Test Data

The test result should not be repeatedly used to select models.

---

# 46. Practical Machine-Learning Workflow

The complete workflow is:

Problem Definition
        ↓
Data Preparation
        ↓
Feature / Target Definition
        ↓
Train / Validation / Test Split
        ↓
Baseline
        ↓
Train Candidate Models
        ↓
Validation Evaluation
        ↓
Model Selection
        ↓
Final Test Evaluation
        ↓
Error Analysis

This matches the machine-learning workflow introduced in the module source. :contentReference[oaicite:1]{index=1}

---

# 47. Practical Experiment — Regression

Create a dataset with:

20 observations

Features:

StudyHours

Attendance

Target:

Score

Perform:

1. Train-test split.
2. Print all shapes.
3. Train linear regression.
4. Calculate training MAE.
5. Calculate test MAE.
6. Compare them.
7. Explain whether there is evidence of a gap.
8. Identify limitations of the small dataset.

Then create a three-way split.

Use:

Training

Validation

Test

Compare two candidate models using validation data.

Finally evaluate the selected model on the test set.

---

# 48. Practical Experiment — Classification

Create a binary classification dataset.

Example target:

0 = Not Churned

1 = Churned

Perform:

1. Train-test split.
2. Use stratification.
3. Inspect class proportions.
4. Train a simple classifier.
5. Evaluate on test data.
6. Explain why maintaining class representation can matter.

---

# 49. Practical Experiment — Time Series

Create a dataset with:

Month

Sales

Use:

January → June

as training

July

as validation

August

as test

Explain why:

January → August

should remain chronological.

Then explain why random shuffling could produce unrealistic evaluation for a forecasting-style problem.

---

# Practice

## Practice 1

Why should we separate training and testing data?

## Practice 2

What is the purpose of a validation set?

## Practice 3

What is the purpose of the test set?

## Practice 4

Suppose:

X.shape = (1000, 5)

With:

test_size = 0.2

approximately how many observations belong to training and testing?

## Practice 5

Why is the test set protected from repeated model selection?

## Practice 6

When is stratification useful?

## Practice 7

Why can random splitting be misleading for time-series prediction?

## Practice 8

Explain:

Training

Validation

Test

using your own example.

---

# Challenge — Complete Data Split Experiment

Build a machine-learning experiment that compares two splitting strategies.

## Part A — Random Dataset

Create:

1000 observations

with:

5 features.

Perform:

80 / 20

train-test splitting.

Train a model.

Evaluate:

Training performance

Test performance

## Part B — Three-Way Split

Create:

70% Training

15% Validation

15% Test

Train two candidate models.

Select the best using validation performance.

Evaluate the final chosen model once on the test set.

## Part C — Time-Based Dataset

Create a chronological dataset.

Split it:

Past → Training

Later → Validation

Latest → Test

Compare this with random splitting.

Explain why chronological evaluation is more realistic for time-dependent prediction.

---

# Common Mistakes

## Mistake 1 — Training and Testing on the Same Data

This does not properly measure generalization.

## Mistake 2 — Using the Test Set to Choose the Model

Repeated test-based decisions can contaminate the final evaluation.

## Mistake 3 — Fitting Preprocessing on the Entire Dataset

Preprocessing parameters should be learned from training data.

## Mistake 4 — Randomly Shuffling Time-Series Data Without Thinking

Future observations can leak information into past predictions.

## Mistake 5 — Assuming 70/15/15 Is Always Correct

Split proportions depend on dataset size and problem requirements.

## Mistake 6 — Ignoring Class Imbalance

A random split may produce unstable class representation, especially in small datasets.

## Mistake 7 — Looking Only at Training Performance

Training performance can hide poor generalization.

---

# Quick Check

1. What is training data?

Data used to fit model parameters.

2. What is validation data?

Data used during model development and selection.

3. What is test data?

Held-out data used for final evaluation.

4. What is generalization?

The ability of a model to perform well on unseen data from the relevant target distribution.

5. Why split data?

To separate learning from evaluation.

6. Why protect the test set?

To preserve a cleaner final evaluation estimate.

7. What is overfitting?

Learning training-specific patterns that do not generalize well.

8. What is underfitting?

Failing to capture important patterns in the data.

9. Why use random_state?

To make random splitting reproducible.

10. What does stratify=y do?

It aims to preserve class proportions when splitting a classification dataset.

11. Why are time-based splits different?

Temporal prediction should usually respect chronological order.

12. What is preprocessing leakage?

When information from validation or test data improperly influences learned preprocessing parameters.

13. What is the main purpose of validation data?

To support development decisions without repeatedly using the final test set.

14. What is the basic three-way workflow?

Train → Validate → Final Test.

---

# Key Takeaways

A machine-learning model should not be evaluated only on data it has already seen.

The most important concept is:

Generalization

The standard conceptual roles are:

Training
→ Learn parameters

Validation
→ Make development decisions

Test
→ Final evaluation

A simple split can use:

Train / Test

A more complete workflow can use:

Train / Validation / Test

The exact percentages are problem-dependent.

Random splitting is often useful when observations can reasonably be treated as exchangeable.

Stratification can help preserve class representation for classification.

Time-dependent problems often require chronological splitting.

Preprocessing should be learned using training data rather than the full dataset.

The test set should be protected from repeated development decisions.

Mathematically:

Training minimizes a loss on observed training data.

But the ultimate goal is good performance on unseen data.

The central machine-learning progression is:

Dataset
    ↓
Split
    ↓
Training
    ↓
Validation
    ↓
Model Selection
    ↓
Final Test
    ↓
Generalization Estimate

And the complete workflow is:

Problem
    ↓
Data
    ↓
Features
    ↓
Target
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
`,
};

export default lesson3;