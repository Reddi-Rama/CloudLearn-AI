const lesson11 = {
  title: "Training a Model: Learning From Data",

  content: `
# Training a Model: Learning From Data

## What You Will Learn

A machine-learning model becomes useful when it can learn parameters from examples.

Instead of manually specifying every rule, we provide training data and allow an algorithm to discover relationships.

The fundamental idea is:

Training Data
     ↓
Learning Algorithm
     ↓
Model Parameters
     ↓
Trained Model

In this lesson, you will learn:

- What learning means
- Training data
- Model parameters
- Loss functions
- Parameter updates
- Learning rate
- Mathematical intuition
- fit()
- predict()
- Training vs prediction
- Visualization
- Data representation
- Simple linear models
- Practical experiments

---

# 1. What Does "Learning" Mean?

Suppose we have:

Hours Studied → Exam Score

1 → 45

2 → 50

3 → 58

4 → 65

5 → 72

We notice that exam scores tend to increase as study hours increase.

A simple model might represent this relationship as:

y_hat = wx + b

Initially, the values of:

w

and:

b

may not be correct.

Training attempts to find parameter values that produce useful predictions.

---

# 2. What Is Training?

Training is the process of using examples to estimate model parameters.

Suppose:

x

is an input.

y

is the known target.

A model produces:

y_hat

The learning algorithm compares:

y_hat

with:

y

and uses that information to improve its parameters.

The simplified idea is:

Examples
    ↓
Prediction
    ↓
Error
    ↓
Adjustment
    ↓
Improved Prediction

---

# 3. The Training Process

A simplified training process is:

Initialize Parameters
        ↓
Make Predictions
        ↓
Calculate Error
        ↓
Measure Loss
        ↓
Update Parameters
        ↓
Repeat
        ↓
Trained Model

This is one of the most important ideas in machine learning.

Training is therefore iterative in many learning algorithms.

---

# 4. Loss Function

A loss function measures how different the model's predictions are from the actual values.

For regression, one common loss is mean squared error:

L(w,b)
=
(1/n)
Σ(
yi - y_hat_i
)²

The learning algorithm attempts to find parameters that reduce the loss.

Conceptually:

High Loss
   ↓
Update Parameters
   ↓
Lower Loss
   ↓
Better Predictions

---

# 5. Mathematical Intuition

Suppose:

y_hat = wx

and we have one training example:

x = 2

y = 10

If:

w = 3

then:

y_hat = 3(2)

= 6

The error is:

10 - 6

= 4

The squared error is:

4²

= 16

The model should adjust:

w

so that the prediction becomes closer to:

10

---

# 6. Why the Parameter Matters

For:

y_hat = wx

with:

x = 2

consider:

w = 3

Prediction:

6

Now consider:

w = 5

Prediction:

10

The parameter changed from:

3

to:

5

and the prediction changed from:

6

to:

10

Therefore:

Parameter
    ↓
Prediction
    ↓
Loss

Changing parameters changes model performance.

---

# 7. Parameter Updates

A simplified optimization idea is:

w_new
=
w_old
-
eta
(
partial L / partial w
)

where:

w = model parameter

L = loss

eta = learning rate

partial L / partial w

= direction in which loss changes

The learning rate controls how large each update is.

The mathematical details of gradient-based optimization become more important in later machine-learning and deep-learning modules.

---

# 8. Learning Rate Intuition

Imagine walking down a mountain while trying to reach the lowest point.

If your steps are:

## Too Small

You move very slowly.

## Too Large

You may jump over the minimum.

## Appropriate

You gradually approach a low-loss region.

This provides intuition for the role of the learning rate.

Conceptually:

Current Parameter
      ↓
Gradient Information
      ↓
Step Size
      ↓
New Parameter
      ↓
New Loss

---

# 9. What Is the Learning Rate?

The learning rate is commonly represented as:

eta

It determines the size of parameter updates.

Small:

eta

→ smaller updates

Large:

eta

→ larger updates

A suitable learning rate depends on:

- Model
- Loss function
- Data
- Optimization algorithm

There is no universal value that is correct for every problem.

---

# 10. Training With scikit-learn

In practice, libraries hide much of the mathematical optimization.

Python:

import numpy as np

from sklearn.linear_model import LinearRegression

X = np.array([
    [1],
    [2],
    [3],
    [4],
    [5]
])

y = np.array([
    45,
    50,
    58,
    65,
    72
])

model = LinearRegression()

model.fit(
    X,
    y
)

print(
    "Weight:",
    model.coef_[0]
)

print(
    "Bias:",
    model.intercept_
)

The:

fit()

operation means:

Learn the model parameters from the training data.

---

# 11. What Does fit() Do?

When we write:

model.fit(X, y)

the library performs the algorithm-specific learning process.

The model receives:

X

and:

y

and estimates parameters that satisfy the training objective.

For Linear Regression, the learned parameters determine the fitted relationship between:

input

and:

target.

---

# 12. Making Predictions

After training:

prediction = model.predict(
    [[6]]
)

print(
    "Predicted Score:",
    prediction[0]
)

The model now uses the relationship learned from the training examples.

The workflow is:

Training Data
      ↓
fit()
      ↓
Learned Model
      ↓
predict()
      ↓
Prediction

---

# 13. Training vs Prediction

These are different operations.

## Training

model.fit(X, y)

The model learns from known examples.

## Prediction

model.predict(X_new)

The trained model generates outputs for new inputs.

Therefore:

Training:

Learning

Prediction:

Using what was learned

This distinction is fundamental.

---

# 14. Training Data

Training data contains examples used to learn the model.

Suppose:

X_train =
[
1
2
3
4
5
]

and:

y_train =
[
45
50
58
65
72
]

The model uses these examples to estimate its parameters.

---

# 15. Representative Training Data

A model can only learn from the information available in its training data.

If important cases are missing, the model may learn an incomplete relationship.

For example, if a fraud dataset contains almost no examples of a particular fraud pattern, the model may struggle to identify that pattern.

Therefore:

Better representative data

→

Better learning opportunity

This does not guarantee a better model, but it provides a stronger foundation.

---

# 16. Model Parameters

For:

y_hat = wx + b

the parameters are:

w

and:

b

Training attempts to find useful values.

Suppose:

w = 10

b = 5

Then:

y_hat = 10x + 5

For:

x = 2

we obtain:

y_hat = 25

If the learned values change, the prediction changes.

---

# 17. Loss and Training

Suppose:

Actual:

y = 30

Prediction:

y_hat = 25

Error:

30 - 25

= 5

Squared error:

25

If a different parameter produces:

Prediction:

29

then:

Error:

1

Squared error:

1

The second parameter choice gives a lower loss for this example.

Training attempts to find parameter values that produce lower overall loss across the training data.

---

# 18. Training Objective

For a regression model:

y_hat_i = f_theta(x_i)

where:

theta

represents the model parameters.

A general training objective can be written:

minimize:

L(theta)

For mean squared error:

L(theta)
=
(1/n)
Σ(
yi - f_theta(xi)
)²

The learning algorithm tries to find parameter values that minimize the objective.

---

# 19. One-Parameter Example

Suppose:

y_hat = wx

and:

Training example:

x = 2

y = 10

Try:

w = 1

Prediction:

2

Squared error:

64

Try:

w = 3

Prediction:

6

Squared error:

16

Try:

w = 5

Prediction:

10

Squared error:

0

In this simple example:

w = 5

perfectly fits the single training example.

This illustrates how parameter values affect loss.

A real model normally uses many examples, and a parameter choice that fits one example perfectly may not fit the entire dataset well.

---

# 20. Multiple Training Examples

Suppose:

X =
[
1
2
3
]

and:

y =
[
2
4
6
]

Consider:

y_hat = wx

If:

w = 2

then:

Predictions:

[2, 4, 6]

The model fits every example perfectly.

If:

w = 1

predictions are:

[1, 2, 3]

The errors are:

[1, 2, 3]

and the loss is larger.

The training objective therefore provides a mathematical way to compare parameter values.

---

# 21. Visualizing the Learned Model

Python:

import matplotlib.pyplot as plt

predictions = model.predict(
    X
)

plt.scatter(
    X,
    y
)

plt.plot(
    X,
    predictions
)

plt.xlabel(
    "Study Hours"
)

plt.ylabel(
    "Exam Score"
)

plt.title(
    "Learned Relationship"
)

plt.show()

The points represent training examples.

The line represents the relationship learned by the model.

---

# 22. Why Visualization Helps

A numerical metric tells us:

How much error exists.

A visualization can sometimes reveal:

- Trend
- Non-linearity
- Outliers
- Model mismatch
- Underfitting
- Approximate fit

Therefore:

Metrics

and:

Visualization

can complement each other.

---

# 23. Training Does Not Mean Memorization

A useful model should learn patterns that generalize.

Suppose:

Training:

Study Hours → Score

1 → 45

2 → 50

3 → 58

The model should not simply memorize:

1 → 45

2 → 50

3 → 58

Instead, it should learn a relationship useful for new values such as:

6 hours.

This connects training with:

Generalization

---

# 24. Training and Generalization

Training:

Learn from observed examples.

Generalization:

Perform well on unseen examples.

Therefore:

Training Data
      ↓
Learning
      ↓
Model
      ↓
Unseen Data
      ↓
Prediction

The performance on unseen data is important when deciding whether learning was useful.

---

# 25. Practical Example

Suppose a model is trained using:

Study Hours

and:

Exam Score

After training:

Study Hours = 6

The model predicts:

75

Later, the actual score becomes known:

78

Prediction error:

78 - 75

= 3

This information can be used during evaluation.

---

# 26. Why More Data Can Help

Suppose a model is trained using only:

5 examples.

There may be limited variation in the training data.

With:

5,000 representative examples,

the model has more information from which to estimate patterns.

However:

More data

does not automatically guarantee:

Better performance.

The quality and relevance of the data matter.

---

# 27. Data Quality and Learning

Training data should be:

- Relevant
- Representative
- Consistent
- Correct enough for the task

Poor training data can lead to poor models.

For example:

Incorrect labels

can teach the model incorrect relationships.

Missing important cases

can produce incomplete learning.

---

# 28. Practical Exercise

Build a small regression problem.

Create input data.

Create target values.

Train a model.

Print the learned parameters.

Generate predictions.

Calculate prediction errors.

Plot the learned relationship.

Use:

Study Hours

as input

and:

Exam Score

as target.

---

# 29. Challenge

Implement a simple linear model manually:

y_hat = wx + b

Then experiment with different values of:

w

and:

b

Calculate the MSE for each combination and determine which combination gives the lowest error.

For example:

w_values = [
    0,
    1,
    2,
    3,
    4,
    5
]

b_values = [
    0,
    1,
    2,
    3
]

For each combination:

1. Generate predictions.
2. Calculate errors.
3. Calculate squared errors.
4. Calculate MSE.
5. Store the result.
6. Find the parameter combination with minimum MSE.

---

# 30. Manual MSE Example

Python:

import numpy as np

X = np.array([
    1,
    2,
    3
])

y = np.array([
    2,
    4,
    6
])

w = 2
b = 0

predictions = (
    w * X + b
)

mse = np.mean(
    (
        y - predictions
    ) ** 2
)

print(
    "Predictions:",
    predictions
)

print(
    "MSE:",
    mse
)

Output:

Predictions:

[2 4 6]

MSE:

0.0

The model perfectly fits this simple dataset.

---

# 31. Manual Parameter Search

Python:

best_w = None

best_b = None

best_mse = float(
    "inf"
)

for w in np.arange(
    0,
    5.1,
    0.5
):

    for b in np.arange(
        -2,
        2.1,
        0.5
    ):

        predictions = (
            w * X + b
        )

        mse = np.mean(
            (
                y - predictions
            ) ** 2
        )

        if mse < best_mse:

            best_mse = mse

            best_w = w

            best_b = b

print(
    "Best weight:",
    best_w
)

print(
    "Best bias:",
    best_b
)

print(
    "Best MSE:",
    best_mse
)

This is a simple search-based illustration of parameter optimization.

---

# 32. Search vs Gradient-Based Learning

Manual parameter search tests many candidate values.

For a model with:

many parameters

this becomes computationally expensive.

Gradient-based optimization uses information about how the loss changes to update parameters more efficiently.

Therefore:

Simple Search
    ↓
Try Many Values

Gradient Methods
    ↓
Use Directional Information
    ↓
Update Parameters

The exact optimization method depends on the model.

---

# 33. What Learning Really Means

Learning does not mean the model understands the world like a human.

In machine learning, learning means:

Estimating parameters or representations from data according to a specified objective.

For example:

Data

→ estimate:

w, b

such that:

L(w,b)

is reduced.

This is a mathematical and computational definition of learning.

---

# 34. Complete Learning Pipeline

A simplified learning system is:

Training Data
      ↓
Model Initialization
      ↓
Prediction
      ↓
Loss
      ↓
Parameter Update
      ↓
Repeat
      ↓
Trained Model
      ↓
New Input
      ↓
Prediction

This is the foundation for understanding more advanced machine-learning algorithms.

---

# Quick Check

What does training mean in machine learning?

What does:

.fit()

do?

What is a loss function?

Why are parameters updated during training?

What is the learning rate?

What is the difference between training and prediction?

Why is representative training data important?

Why can a model have low training loss but still perform poorly on unseen data?

What is the purpose of parameter optimization?

---

# Lesson Summary

Machine learning is fundamentally a process of learning useful parameter values from data.

The simplified learning process is:

Data
→ Prediction
→ Loss
→ Parameter Update
→ Improved Model

The model starts with parameters.

It produces predictions.

The loss measures how well those predictions match the targets.

The learning algorithm updates parameters.

The process repeats.

Training:

model.fit(X, y)

uses known examples to learn.

Prediction:

model.predict(X_new)

uses the learned relationship to generate outputs.

The mathematical foundation is:

y_hat = f_theta(x)

and the training objective can be represented as:

minimize:

L(theta)

The most important idea is:

Data
    ↓
Prediction
    ↓
Loss
    ↓
Parameter Update
    ↓
Improved Model
`,
};

export default lesson11;