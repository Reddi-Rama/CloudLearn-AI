const lesson = {
  lesson: "14",
  title: "AI Project Experimentation & Iteration",

  description: `
# Lesson 14 — AI Project Experimentation & Iteration

## What You Will Learn

In this lesson, you will learn:

- Why AI development requires experimentation.
- What an AI experiment is.
- How to create a controlled experiment.
- How to compare models and configurations.
- Why reproducibility matters.
- How to record experimental results.
- How experimentation leads to model improvement.

The central idea is:

Experiment
   ↓
Evaluate
   ↓
Analyze
   ↓
Modify
   ↓
Experiment Again

This process is called:

Iteration

AI development is therefore not simply:

Build Once → Deploy

It is:

Build
→
Measure
→
Learn
→
Improve
→
Measure Again

---

# 1. AI Development Is Experimental

There is rarely a single guaranteed path from data to a successful AI model.

An AI engineer may need to test:

- Different features
- Different preprocessing methods
- Different models
- Different hyperparameters
- Different evaluation metrics

The process may look like:

Experiment
   ↓
Evaluate
   ↓
Analyze
   ↓
Modify
   ↓
Experiment Again

This is called:

Iteration

The important idea is that every experiment should teach us something useful about the AI system.

---

# 2. What Is an AI Experiment?

An AI experiment is a controlled test in which we change one or more aspects of an AI workflow and observe the effect.

For example:

Experiment 1

Model:

Logistic Regression

Experiment 2

Model:

Decision Tree

Experiment 3

Model:

Random Forest

We can then compare their results.

The experiment is useful because the models are being tested under a defined evaluation setup.

---

# 3. Why Controlled Experiments Matter

Suppose we change all of the following at once:

- Model
- Dataset
- Features
- Train/test split
- Evaluation metric

Then performance changes.

But we cannot easily determine:

Which change caused the difference?

A better approach is to change one major factor at a time whenever practical.

For example:

Same Dataset
Same Split
Same Features
       ↓
   Model A
       ↓
 Evaluation

Then:

Same Dataset
Same Split
Same Features
       ↓
   Model B
       ↓
 Evaluation

Now the comparison is more meaningful.

---

# 4. Mathematical Intuition of a Controlled Experiment

Suppose a model's performance can be represented as:

P =
f(
Data,
Features,
Preprocessing,
Model,
Hyperparameters,
Evaluation
)

If we change several variables simultaneously:

Data,
Features,
Model,
Hyperparameters

then the resulting change in:

P

cannot easily be attributed to one factor.

If we keep everything fixed except:

Model

then:

P_A

and:

P_B

provide a cleaner comparison of the model choice.

Therefore:

Controlled Experiment

means:

Hold major factors constant

and:

Change the factor being investigated.

---

# 5. Establish a Baseline

Before experimenting with complex models, establish a baseline.

Suppose:

Baseline Accuracy = 75%

Then we test:

Model A = 82%

Model B = 87%

Model C = 85%

Now we have a reference.

The baseline answers:

"How much value does the candidate model add compared with a simple approach?"

Without a baseline, the model results have less context.

---

# 6. Mathematical View of Improvement

Let:

B = baseline performance

M = model performance

For a metric where higher is better:

Improvement = M - B

Example:

M = 0.87

B = 0.75

Then:

Improvement = 0.87 - 0.75

= 0.12

or:

12 percentage points.

For a lower-is-better metric such as MAE:

Improvement = B - M

Example:

B = 10

M = 7

Improvement = 10 - 7

= 3

The metric direction must always be considered.

---

# 7. Experiment With Features

Suppose Model A uses:

Quiz Score

Attendance

and produces:

Accuracy = 82%

We add:

Practice Score

and obtain:

Accuracy = 87%

This suggests that the additional feature may provide useful information.

However, one experiment does not automatically prove that the feature will always help.

The improvement should be tested using an appropriate validation setup.

The process is:

Feature Set A
   ↓
Evaluate

Feature Set B
   ↓
Evaluate

Compare Results

---

# 8. Mathematical Intuition for Feature Experiments

Suppose:

X_A

contains:

2 features.

and:

X_B

contains:

3 features.

We are effectively comparing:

f_theta(X_A)

with:

f_phi(X_B)

under a comparable evaluation procedure.

If:

Performance(X_B)
>
Performance(X_A)

then the additional feature may provide useful predictive information.

But the feature should also be considered in terms of:

- Data availability
- Cost
- Reliability
- Leakage risk
- Maintenance

---

# 9. Experiment With Hyperparameters

Many models have settings called:

Hyperparameters

These are configuration choices that control aspects of the model before training.

For example:

A decision tree can have:

max_depth

Python:

~~~python
from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier(
    max_depth=3,
    random_state=42
)
~~~

We could compare:

max_depth = 2

max_depth = 3

max_depth = 5

max_depth = 10

and evaluate the resulting models.

---

# 10. Hyperparameter Experiment

Suppose the results are:

max_depth = 2

Accuracy = 80%

max_depth = 3

Accuracy = 85%

max_depth = 5

Accuracy = 87%

max_depth = 10

Accuracy = 82%

The result suggests that:

max_depth = 5

performed best under this particular experiment.

The conclusion should be:

"Depth 5 performed best in this experiment."

Not:

"Depth 5 is always the best."

Experimental conclusions are specific to the evaluation setup.

---

# 11. Training Parameters vs Hyperparameters

It is useful to distinguish:

Parameters

and:

Hyperparameters

Parameters are learned from data.

For example, model weights:

theta

are learned during training.

Hyperparameters are configuration choices supplied to the learning algorithm.

Example:

max_depth = 5

A simplified view is:

Hyperparameters
      ↓
Training Algorithm
      ↓
Learned Parameters
      ↓
Model

---

# 12. Experiment Tracking

AI projects may contain many experiments.

Record them systematically.

Example:

~~~text
Experiment | Model               | Features | Accuracy
-------------------------------------------------------
1          | Logistic Regression | 3        | 82%
2          | Logistic Regression | 4        | 86%
3          | Decision Tree       | 4        | 88%
~~~

Experiment tracking prevents us from forgetting:

- What was tested
- What changed
- What result occurred

A real project can contain:

Dozens

or:

Hundreds

of experiments.

---

# 13. Experiment Records

A useful experiment record can contain:

Experiment ID

Model

Features

Preprocessing

Hyperparameters

Data Split

Random Seed

Evaluation Metric

Result

Observation

Decision

This makes experimentation easier to understand later.

---

# 14. Why Experiment Tracking Matters

Imagine:

Experiment 1:

Accuracy = 84%

Experiment 2:

Accuracy = 88%

Experiment 3:

Accuracy = 86%

Without recording what changed, the numbers are difficult to interpret.

With tracking, we can know:

Experiment 2

added a useful feature.

Therefore the experiment record becomes part of the project's knowledge.

---

# 15. Reproducibility

Experiments should ideally be reproducible.

Important values can be centralized:

~~~python
RANDOM_STATE = 42

TEST_SIZE = 0.2
~~~

Then:

~~~python
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=TEST_SIZE,
    random_state=RANDOM_STATE
)
~~~

If we use the same:

- Data
- Code
- Environment
- Configuration

then the experiment can be repeated under comparable conditions.

---

# 16. Why Randomness Matters

Some AI workflows involve randomness.

For example:

A train/test split may randomly assign observations.

Different splits can produce different:

Training Data

and:

Test Data

Therefore the resulting evaluation may change.

Using:

random_state = 42

helps make that split repeatable.

---

# 17. Example Experiment

Suppose we compare:

Logistic Regression

and:

Decision Tree.

Python:

~~~python
from sklearn.linear_model import LogisticRegression

from sklearn.tree import DecisionTreeClassifier

from sklearn.metrics import accuracy_score

logistic = LogisticRegression(
    random_state=42
)

tree = DecisionTreeClassifier(
    max_depth=3,
    random_state=42
)

logistic.fit(
    X_train,
    y_train
)

tree.fit(
    X_train,
    y_train
)

logistic_predictions = logistic.predict(
    X_test
)

tree_predictions = tree.predict(
    X_test
)

logistic_accuracy = accuracy_score(
    y_test,
    logistic_predictions
)

tree_accuracy = accuracy_score(
    y_test,
    tree_predictions
)

print(
    "Logistic Regression:",
    logistic_accuracy
)

print(
    "Decision Tree:",
    tree_accuracy
)
~~~

This is a simple controlled comparison.

---

# 18. What Makes This Experiment Controlled?

Both models use:

The same:

- Training data
- Test data
- Features
- Evaluation metric

Only the model changes.

Therefore:

Observed Performance Difference

is more reasonably associated with:

Model Choice

than if every project component had changed simultaneously.

---

# 19. Experimentation Is Not Just About Accuracy

Suppose:

Model A → 90% accuracy

Model B → 91% accuracy

At first:

Model B

appears better.

But suppose:

Model A → 1 MB

Model B → 500 MB

and:

Model B

requires substantially more computation.

The small accuracy improvement may not justify the additional complexity.

Therefore experiments can consider:

- Performance
- Latency
- Memory
- Model Size
- Interpretability
- Cost
- Reliability

The best choice depends on the project requirements.

---

# 20. Multi-Objective Thinking

An AI system may need to satisfy several requirements.

Conceptually:

Utility =
Performance
-
Cost
-
Latency
-
Complexity

This is not a universal mathematical formula for every project.

It is a way of thinking about engineering trade-offs.

A model with slightly lower accuracy may be preferable if it is:

- Faster
- Smaller
- Easier to maintain
- More interpretable

---

# 21. Example Trade-Off

Suppose:

Model A:

Accuracy = 90%

Latency = 30 ms

Model B:

Accuracy = 91%

Latency = 800 ms

If the application requires:

Latency < 100 ms

then Model B may not satisfy the system requirement.

This demonstrates:

Model Performance

must be considered together with:

System Constraints.

---

# 22. Iterative Improvement

Suppose the initial model performs poorly.

Do not randomly change everything.

Instead:

Poor Performance
       ↓
Analyze Errors
       ↓
Identify Cause
       ↓
Choose Experiment
       ↓
Run Experiment
       ↓
Evaluate
       ↓
Keep or Reject Change

This is disciplined AI development.

---

# 23. Why Error Analysis Comes Before Modification

Suppose accuracy is:

70%

We could immediately try:

Random Forest

But perhaps the real problem is:

Missing Data

or:

Incorrect Labels

or:

Poor Features

Changing the model may not fix the actual cause.

Therefore:

Evaluation

should guide:

Experiment Design.

---

# 24. Keep or Reject an Experiment

After an experiment:

Compare the result against the previous version.

If performance improves and the change satisfies the project's constraints:

Keep the change.

If the result is worse:

Reject or modify the change.

Conceptually:

Experiment
    ↓
Evaluation
    ↓
Better?
 ↙      ↘
Yes      No
 ↓        ↓
Keep    Reject
       / Modify

---

# 25. Experimental Evidence

Suppose:

Version 1:

Accuracy = 82%

Version 2:

Accuracy = 87%

Then Version 2 is better under that metric and evaluation setup.

But also ask:

Was the difference caused by:

- Feature change?
- Model change?
- Random split?
- Data change?

This is why controlled experimentation matters.

---

# 26. Statistical and Practical Thinking

A numerical difference is not automatically meaningful.

Suppose:

Model A = 90.0%

Model B = 90.1%

The difference is:

0.1 percentage point.

That may or may not matter.

Consider:

- Evaluation sample size
- Variability
- Application requirements
- Cost
- Reliability

Therefore:

Observed Difference

should be interpreted rather than blindly celebrated.

---

# 27. Practical Experiment Table

A useful experiment log could be:

~~~text
ID | Change                  | Metric   | Result | Observation
----------------------------------------------------------------
1  | Baseline                | Accuracy | 75%    | Reference
2  | Logistic Regression     | Accuracy | 82%    | Improved
3  | Add Practice Score      | Accuracy | 86%    | Improved
4  | Decision Tree           | Accuracy | 88%    | Best so far
5  | Tree depth = 10         | Accuracy | 84%    | Worse
~~~

This provides a history of project decisions.

---

# 28. Practice Task

Run at least three experiments on a dataset.

Change one major factor in each experiment.

Possible changes:

- Model
- Features
- Preprocessing
- Hyperparameters

Record:

Experiment

Change

Metric

Result

Observation

---

# 29. Challenge

Take the Student Support Prediction System.

Perform three experiments.

## Experiment 1

Baseline model.

## Experiment 2

Add another useful feature.

## Experiment 3

Try a different model.

Record the results.

Then explain:

- Which experiment performed best?
- Why might it have performed better?
- Is the improvement significant enough to justify the change?
- What would you test next?

---

# 30. Practical Python Experiment

A simple experiment loop can be structured as:

~~~python
experiments = []

experiments.append({
    "name": "Logistic Regression",
    "features": 3,
    "accuracy": logistic_accuracy
})

experiments.append({
    "name": "Decision Tree",
    "features": 3,
    "accuracy": tree_accuracy
})

for experiment in experiments:

    print(
        experiment
    )
~~~

A more sophisticated project can save these records to:

- CSV
- JSON
- Database
- Experiment-tracking platform

The important principle is:

Record what happened.

---

# 31. Mathematical Thinking About Iteration

Let:

M_t

represent the model at iteration:

t

Its evaluation score is:

S_t

After an experiment:

M_(t+1)

is created.

We compare:

S_(t+1)

with:

S_t

If:

S_(t+1)

is better under the selected objective and constraints, the new version may be retained.

Therefore:

M_t
→
Experiment
→
M_(t+1)
→
Evaluate
→
Decision

This gives a mathematical representation of iterative model development.

---

# 32. Experimentation as Knowledge Building

Each experiment should reduce uncertainty about the system.

For example:

Experiment:

Add Practice Score.

Observation:

Accuracy increased.

Knowledge gained:

Practice Score may contain useful predictive information.

Another experiment:

Increase tree depth.

Observation:

Training performance improved but test performance decreased.

Knowledge gained:

The larger tree may be overfitting.

Therefore experiments generate:

Evidence

and:

Knowledge

not merely scores.

---

# 33. Common Mistakes

## Changing Everything at Once

You cannot easily identify which change caused the result.

## Not Recording Experiments

You may repeat unsuccessful experiments.

## Ignoring the Baseline

Without a baseline, improvements are difficult to interpret.

## Choosing Only by Accuracy

System constraints matter.

## Ignoring Reproducibility

Changing random splits can change results.

## Making Changes Without Error Analysis

The modification may not address the real problem.

## Treating One Result as Universal

An observed improvement is specific to its experiment and evaluation setup.

---

# Quick Check

1. What is an AI experiment?
2. Why should experiments be controlled?
3. What is a baseline?
4. What are hyperparameters?
5. Why is experiment tracking important?
6. What does reproducibility mean?
7. Why isn't accuracy the only factor in model selection?
8. How does error analysis guide experimentation?
9. What is iteration?
10. Why should AI development be evidence-driven?

---

# Key Takeaways

AI development is an iterative process of:

Testing

Measuring

Learning

Improving

The fundamental loop is:

Experiment
→
Evaluate
→
Analyze
→
Improve
→
Experiment Again

Controlled experiments make comparisons more meaningful.

Baselines provide reference points.

Experiment tracking preserves project knowledge.

Random seeds and consistent configurations support reproducibility.

Model selection should consider:

- Performance
- Latency
- Memory
- Model size
- Interpretability
- Cost
- Reliability
- Project constraints

The deeper lesson is:

Good AI engineering replaces random trial-and-error with structured experimentation and evidence-based decisions.
`
};

export default lesson;