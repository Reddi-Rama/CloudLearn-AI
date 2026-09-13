const lesson5 = {
  title: "Baseline Models",

  content: `
# Baseline Models

## What You Will Learn

A baseline is a simple reference system used to determine whether a machine-learning model is actually providing useful improvement.

In this lesson, you will learn:

- What a baseline is
- Why baselines matter
- Baseline mathematical intuition
- Constant predictors
- Mean baseline for regression
- Median baseline
- Majority-class baseline
- Random baseline intuition
- Simple heuristic baselines
- Linear-model baselines
- Baseline metrics
- Comparing models against baselines
- Baseline performance
- Validation-based comparison
- Python implementation
- NumPy implementation
- Pandas implementation
- scikit-learn implementation
- Error analysis with baselines
- Practical experiments
- Common mistakes
- Practice
- Challenge

The central idea is:

Problem
    ↓
Simple Baseline
    ↓
Candidate Model
    ↓
Compare
    ↓
Measure Improvement
    ↓
Decide Whether Complexity Is Justified

---

# 1. What Is a Baseline?

A baseline is a simple reference system against which a more sophisticated model can be compared.

The baseline provides a starting point.

Without a baseline:

Model Score = 82%

may not mean much.

With a baseline:

Baseline = 70%

Model = 82%

we can say:

The model improves on the baseline by:

12 percentage points

under that metric.

---

# 2. Why Baselines Matter

A complicated model should provide meaningful value.

Suppose:

Baseline accuracy = 91%

Advanced model accuracy = 92%

The improvement is small.

Now suppose:

Baseline accuracy = 60%

Advanced model accuracy = 92%

The improvement is much more substantial.

The baseline helps answer:

Did the machine-learning model actually add value?

---

# 3. Mathematical Intuition

Let:

B

represent baseline performance.

Let:

M

represent model performance.

Then improvement depends on the metric.

For a metric where:

higher is better:

Improvement = M - B

For example:

M = 0.85

B = 0.70

Improvement:

0.85 - 0.70

= 0.15

or:

15 percentage points.

For a metric where:

lower is better:

Improvement = B - M

For example:

Baseline MAE = 10

Model MAE = 7

Improvement:

10 - 7

= 3

The direction depends on the metric.

---

# 4. Regression Baseline

Suppose:

y = target values

A simple baseline can always predict the mean of the training targets.

Mathematically:

y_hat_baseline = mean(y_train)

For every future observation, the baseline predicts the same value.

This is called a:

Constant Predictor.

---

# 5. Example — Mean Baseline

Suppose training targets are:

60

70

80

90

100

Mean:

(60 + 70 + 80 + 90 + 100) / 5

= 400 / 5

= 80

The baseline predicts:

80

for every observation.

Therefore:

Actual:

60

Prediction:

80

Actual:

70

Prediction:

80

and so on.

---

# 6. Mean Baseline With NumPy

Example:

import numpy as np

y_train = np.array([
    60,
    70,
    80,
    90,
    100
])

baseline_value = np.mean(
    y_train
)

baseline_predictions = np.full(
    len(y_train),
    baseline_value
)

print(
    "Baseline value:",
    baseline_value
)

print(
    "Baseline predictions:",
    baseline_predictions
)

Output:

Baseline value:

80.0

Baseline predictions:

[80. 80. 80. 80. 80.]

---

# 7. Why Use Training Data for the Baseline?

Suppose we are evaluating on test data.

The baseline value should be learned from:

Training Data

not:

Test Data

For example:

mean_train

should be used to create predictions on:

test data.

This preserves the train-test separation.

---

# 8. Regression Baseline on Test Data

Example:

import numpy as np

y_train = np.array([
    60,
    70,
    80,
    90,
    100
])

y_test = np.array([
    55,
    75,
    85
])

baseline_value = np.mean(
    y_train
)

baseline_predictions = np.full(
    len(y_test),
    baseline_value
)

print(
    baseline_predictions
)

Output:

[80. 80. 80.]

Notice:

The test values were not used to calculate the baseline mean.

---

# 9. Baseline MAE

Suppose:

y_test = [55, 75, 85]

baseline predictions:

[80, 80, 80]

Absolute errors:

25

5

5

MAE:

(25 + 5 + 5) / 3

= 35 / 3

≈ 11.67

Python:

from sklearn.metrics import mean_absolute_error

mae = mean_absolute_error(
    y_test,
    baseline_predictions
)

print(
    mae
)

---

# 10. Baseline MSE

The same predictions can be evaluated using:

MSE

Squared errors:

625

25

25

MSE:

(625 + 25 + 25) / 3

= 675 / 3

= 225

Python:

from sklearn.metrics import mean_squared_error

mse = mean_squared_error(
    y_test,
    baseline_predictions
)

print(
    mse
)

---

# 11. Median Baseline

The mean is not always the best simple reference.

Another constant baseline is:

Median(y_train)

Suppose:

y_train = [
10,
20,
30,
40,
1000
]

Mean:

220

Median:

30

Because the extreme value strongly affects the mean, a median baseline may sometimes be a useful additional reference.

The appropriate baseline depends on the problem and metric.

---

# 12. Median Baseline With NumPy

Example:

import numpy as np

y_train = np.array([
    10,
    20,
    30,
    40,
    1000
])

baseline_value = np.median(
    y_train
)

print(
    baseline_value
)

Output:

30.0

The baseline then predicts:

30

for every observation.

---

# 13. Classification Baseline

For classification, a simple baseline is often:

Majority Class.

Suppose training labels are:

0

0

0

0

1

0

1

The majority class is:

0

A majority-class baseline predicts:

0

for every example.

---

# 14. Majority-Class Intuition

Suppose:

Class 0 = 90%

Class 1 = 10%

A classifier that always predicts:

Class 0

achieves:

90%

accuracy.

This is why:

90% accuracy

does not automatically mean a model is useful.

It depends on the baseline.

---

# 15. Majority-Class Baseline With NumPy

Example:

import numpy as np

y_train = np.array([
    0,
    0,
    0,
    0,
    1,
    0,
    1
])

values, counts = np.unique(
    y_train,
    return_counts=True
)

majority_class = values[
    np.argmax(counts)
]

print(
    "Majority class:",
    majority_class
)

Output:

Majority class:

0

---

# 16. Creating Majority Predictions

Suppose:

y_test

contains:

5 observations.

We can create:

baseline_predictions = np.full(
    len(y_test),
    majority_class
)

Example:

y_test = np.array([
    0,
    1,
    1,
    0,
    0
])

baseline_predictions = np.full(
    len(y_test),
    majority_class
)

print(
    baseline_predictions
)

Output:

[0 0 0 0 0]

---

# 17. Baseline Accuracy

Compare:

Actual:

[0, 1, 1, 0, 0]

Prediction:

[0, 0, 0, 0, 0]

Correct predictions:

3

Total:

5

Accuracy:

3 / 5

= 0.60

But the baseline's actual expected accuracy depends on the class distribution of the evaluation set.

When calculating a formal baseline, define the evaluation metric and data split carefully.

---

# 18. Baseline Precision and Recall Intuition

A majority-class baseline may produce high accuracy while failing to identify the minority class.

Suppose:

Class 1 = Fraud

and fraud is rare.

Predicting:

Not Fraud

for everyone may achieve high accuracy.

But:

Recall for Fraud

may be:

0

Therefore baseline evaluation should use metrics appropriate to the business problem.

---

# 19. Why Accuracy Can Be Misleading

Suppose:

1000 transactions

990 are legitimate.

10 are fraud.

A model predicts:

legitimate

for every transaction.

Accuracy:

990 / 1000

= 99%

That sounds excellent.

But the model catches:

0

fraud cases.

This demonstrates why the metric must match the problem.

---

# 20. Baseline Metrics for Different Problems

Regression may use:

- MAE
- MSE
- RMSE
- R²

Classification may use:

- Accuracy
- Precision
- Recall
- F1-score
- ROC-AUC

The baseline should be evaluated with the same relevant metric used for candidate models.

---

# 21. Simple Heuristic Baseline

Not every baseline must be a constant.

A domain-specific heuristic can also serve as a baseline.

Example:

Predict high demand if:

last week's sales > threshold

This is a:

Heuristic Baseline.

The purpose is still the same:

Provide a reference point.

---

# 22. Why Heuristic Baselines Matter

Suppose an AI model predicts:

Whether inventory will be insufficient.

A simple rule might be:

if recent sales > 100:

predict shortage.

If the complex model barely improves on this rule, the extra complexity may not be justified.

This is especially important in engineering.

---

# 23. Simple Linear Baseline

A simple linear model can also serve as a baseline.

Suppose the problem is:

Predict house price.

A simple model:

Linear Regression

may provide a reference.

Then we compare:

Linear Regression

against:

Random Forest

or:

Neural Network

The baseline does not have to be trivial.

It should be:

Simple enough to establish a meaningful reference.

---

# 24. Baseline vs Candidate Model

Suppose:

Baseline MAE:

12

Model A MAE:

10

Model B MAE:

7

Under MAE:

Lower is better.

Therefore:

Model B

provides the strongest improvement.

However, we should also consider:

- Complexity
- Runtime
- Interpretability
- Cost
- Reliability
- Stability

Model selection is not always based on one metric alone.

---

# 25. Relative Improvement

Suppose:

Baseline MAE = 10

Model MAE = 7

Absolute improvement:

10 - 7

= 3

Relative improvement:

(10 - 7) / 10

= 0.30

= 30%

Relative improvement can be useful.

However, absolute metrics should also be reported because percentages can sometimes be misleading without context.

---

# 26. Baseline as a Sanity Check

A baseline can detect problems.

Suppose:

Baseline accuracy = 85%

Your model accuracy = 50%

Something may be wrong.

Possible issues include:

- Poor features
- Data preparation problems
- Wrong labels
- Incorrect model
- Evaluation issues

The baseline therefore acts as a sanity check.

---

# 27. Baselines and Data Leakage

Baseline construction must also respect the same data boundaries.

For example:

Do not calculate:

mean(y)

using training + test data

and then use it as the baseline.

Instead:

Calculate baseline parameters from training data.

Then apply the baseline to validation or test data.

This is consistent with the principle:

Learn from training data.

Evaluate on held-out data.

---

# 28. Baseline With scikit-learn

scikit-learn includes:

DummyRegressor

and:

DummyClassifier

These are useful for simple baseline models.

Regression example:

from sklearn.dummy import DummyRegressor

baseline = DummyRegressor(
    strategy="mean"
)

baseline.fit(
    X_train,
    y_train
)

predictions = baseline.predict(
    X_test
)

The baseline predicts the training-set mean.

---

# 29. DummyClassifier

For classification:

from sklearn.dummy import DummyClassifier

baseline = DummyClassifier(
    strategy="most_frequent"
)

baseline.fit(
    X_train,
    y_train
)

predictions = baseline.predict(
    X_test
)

This predicts the most frequent class observed during training.

---

# 30. Why Dummy Models Are Useful

Dummy models make the baseline procedure explicit.

Instead of manually writing:

predict the mean

or:

predict the majority class

we can use standard scikit-learn tools.

This is helpful when constructing reproducible machine-learning pipelines.

---

# 31. Complete Regression Comparison

Example:

import numpy as np

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LinearRegression

from sklearn.dummy import DummyRegressor

from sklearn.metrics import mean_absolute_error

X = np.array([
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10]
])

y = np.array([
    45,
    50,
    60,
    63,
    70,
    75,
    82,
    85,
    91,
    96
])

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

baseline = DummyRegressor(
    strategy="mean"
)

baseline.fit(
    X_train,
    y_train
)

baseline_predictions = baseline.predict(
    X_test
)

model = LinearRegression()

model.fit(
    X_train,
    y_train
)

model_predictions = model.predict(
    X_test
)

baseline_mae = mean_absolute_error(
    y_test,
    baseline_predictions
)

model_mae = mean_absolute_error(
    y_test,
    model_predictions
)

print(
    "Baseline MAE:",
    baseline_mae
)

print(
    "Model MAE:",
    model_mae
)

This directly answers:

Does the trained linear model improve over the simple reference?

---

# 32. Complete Classification Comparison

Example:

import numpy as np

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LogisticRegression

from sklearn.dummy import DummyClassifier

from sklearn.metrics import accuracy_score

X = np.array([
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10]
])

y = np.array([
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1
])

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

baseline = DummyClassifier(
    strategy="most_frequent"
)

baseline.fit(
    X_train,
    y_train
)

baseline_predictions = baseline.predict(
    X_test
)

model = LogisticRegression()

model.fit(
    X_train,
    y_train
)

model_predictions = model.predict(
    X_test
)

baseline_accuracy = accuracy_score(
    y_test,
    baseline_predictions
)

model_accuracy = accuracy_score(
    y_test,
    model_predictions
)

print(
    "Baseline accuracy:",
    baseline_accuracy
)

print(
    "Model accuracy:",
    model_accuracy
)

This provides a direct comparison between:

Simple Reference

and:

Candidate Classifier

---

# 33. Baseline and Validation

During model development, the baseline should also be evaluated on validation data.

For example:

Baseline:

MAE = 12

Model A:

MAE = 9

Model B:

MAE = 8

Then:

Model B

is better under the validation metric.

After selecting the model, the final test evaluation should be performed on held-out test data.

---

# 34. Baseline and Model Selection

Suppose:

Baseline = 70%

Model A = 72%

Model B = 90%

Model C = 91%

Model C is technically highest.

But suppose:

Model B is much simpler.

Then engineering decisions may compare:

Performance

vs:

Complexity

For example:

Model B may be preferred if its small performance difference is not worth Model C's additional complexity.

The baseline helps establish whether any additional complexity is valuable at all.

---

# 35. Baseline and Error Analysis

Suppose:

Baseline fails on:

rare observations

Candidate model handles them better.

This is useful information.

A model may have similar overall performance but better performance on important segments.

Therefore:

Baseline
    ↓
Compare Errors
    ↓
Find Added Value

---

# 36. Segment-Based Comparison

Suppose:

Baseline MAE = 10

Model MAE = 8

Overall improvement:

2

Now divide the test data into:

New Customers

Existing Customers

Suppose:

New Customers:

Baseline MAE = 15

Model MAE = 9

Existing Customers:

Baseline MAE = 8

Model MAE = 7

The model's improvement is particularly strong for:

New Customers

Segment-based analysis can reveal useful model behavior.

---

# 37. Baseline and Reproducibility

A good experiment should record:

- Baseline definition
- Baseline metric
- Model definition
- Model metric
- Data split
- Random seed
- Features
- Target
- Evaluation procedure

This makes the comparison reproducible.

---

# 38. Baseline Should Be Fair

The baseline should use information that would genuinely be available at prediction time.

Suppose:

Predict next month's sales.

A valid baseline:

Predict using recent historical sales.

An invalid baseline:

Use next month's actual sales.

The second approach contains future information.

Baselines must obey the same prediction-time constraints as the model.

---

# 39. Practical Experiment — Regression

Create:

50 observations.

Features:

Study Hours

Attendance

Target:

Final Score

Perform:

1. Split into training and test data.
2. Create a mean baseline.
3. Train Linear Regression.
4. Calculate baseline MAE.
5. Calculate model MAE.
6. Calculate baseline MSE.
7. Calculate model MSE.
8. Compare the results.
9. Calculate absolute improvement.
10. Calculate relative improvement.

---

# 40. Practical Experiment — Classification

Create a binary classification dataset.

Target:

0 = Not Churned

1 = Churned

Perform:

1. Check class balance.
2. Create a majority-class baseline.
3. Train a classifier.
4. Compare accuracy.
5. Compare precision.
6. Compare recall.
7. Compare F1-score.
8. Determine whether accuracy alone is sufficient.

---

# 41. Practical Experiment — Heuristic Baseline

Define a rule such as:

If:

StudyHours >= 5

predict:

HighPerformance

otherwise:

LowPerformance

Then compare the heuristic with a machine-learning classifier.

This shows that baseline models can be:

Rules

rather than only statistical constants.

---

# Practice

## Practice 1

Create a mean regression baseline.

## Practice 2

Create a median regression baseline.

## Practice 3

Create a majority-class classification baseline.

## Practice 4

Use:

DummyRegressor

with:

strategy="mean"

## Practice 5

Use:

DummyClassifier

with:

strategy="most_frequent"

## Practice 6

Compare a baseline and a candidate model using MAE.

## Practice 7

Compare a baseline and classifier using F1-score.

---

# Challenge — Baseline Study

Build a complete baseline study.

Choose one real-world problem.

For example:

- Student score prediction
- Customer churn
- Spam detection
- House price prediction

Create:

1. Problem statement.
2. Feature definition.
3. Target definition.
4. Prediction-time boundary.
5. Baseline.
6. Candidate model.
7. Appropriate evaluation metric.
8. Baseline result.
9. Candidate model result.
10. Absolute improvement.
11. Relative improvement.
12. Error analysis.
13. Model-selection decision.
14. Limitations.
15. Next improvement.

Your final conclusion must answer:

Did the model provide enough improvement over the baseline to justify using it?

---

# Common Mistakes

## Mistake 1 — Skipping the Baseline

A model score without a reference point is difficult to interpret.

## Mistake 2 — Using Test Information to Build the Baseline

Baseline parameters should be learned from training data.

## Mistake 3 — Using Only Accuracy

Especially with imbalanced classification, accuracy can hide poor minority-class performance.

## Mistake 4 — Comparing Different Metrics

Compare baseline and candidate using the same evaluation metric and evaluation data.

## Mistake 5 — Assuming a More Complex Model Must Be Better

Complexity does not automatically create useful improvement.

## Mistake 6 — Ignoring Prediction-Time Constraints

A baseline must use information available at the same prediction time as the candidate model.

## Mistake 7 — Reporting Only the Final Score

Report the baseline, model, improvement, and reasoning.

---

# Quick Check

1. What is a baseline model?

A simple reference system used to establish expected performance.

2. Why are baselines important?

They show whether a candidate model actually adds value.

3. What is a constant regression baseline?

A model that predicts one constant value, often the training-set mean.

4. What is a majority-class baseline?

A classifier that always predicts the most frequent training class.

5. Why should a regression baseline often use the training mean?

It provides a simple reference computed without using held-out evaluation targets.

6. Why can accuracy be misleading?

A model can achieve high accuracy while ignoring a minority class.

7. What is a heuristic baseline?

A rule-based reference system based on simple domain logic.

8. What is a DummyRegressor?

A scikit-learn estimator used for simple regression baselines.

9. What is a DummyClassifier?

A scikit-learn estimator used for simple classification baselines.

10. How do you compare a baseline and a candidate model?

Evaluate both on the same appropriate held-out data using the same metric.

11. What is absolute improvement?

The difference in performance between the baseline and candidate, taking the metric direction into account.

12. Why should baseline parameters be learned only from training data?

To preserve a fair separation between learning and held-out evaluation.

13. Does a higher-complexity model automatically justify itself?

No. Its added performance should be meaningful relative to its complexity and constraints.

---

# Key Takeaways

A baseline is a reference point.

A model should be judged not only by:

"How good is it?"

but also by:

"How much better is it than a simple alternative?"

For regression:

A common baseline is:

y_hat = mean(y_train)

For classification:

A common baseline is:

Predict the majority class.

Other baselines include:

- Median predictors
- Simple heuristics
- Linear models
- Domain-specific rules

The correct baseline depends on the problem.

Baseline and candidate model must be evaluated fairly.

The baseline should:

- Use only information available at prediction time.
- Learn required values from training data.
- Use the same evaluation setup.
- Be compared using appropriate metrics.

The mathematical comparison is:

Baseline
    ↓
Reference Performance
    ↓
Candidate Model
    ↓
Candidate Performance
    ↓
Improvement
    ↓
Engineering Decision

The deeper lesson is:

Complexity is valuable only when it produces meaningful improvement.

A strong machine-learning engineer therefore does not ask only:

"Can I train a model?"

They also ask:

"Does the model beat a simple, reproducible baseline, and is the improvement worth the additional complexity?"

This idea will be essential in the final end-to-end machine-learning project.
`,
};

export default lesson5;