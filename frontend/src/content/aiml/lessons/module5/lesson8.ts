const lesson8 = {
  title: "Overfitting, Underfitting & Generalization",

  content: `
# Overfitting, Underfitting & Generalization

## What You Will Learn

In the previous lessons, we trained machine-learning models and evaluated their predictions.

But there is an important question:

How do we know whether a model has actually learned a useful pattern?

A model can perform extremely well on its training data and still perform poorly on new data.

This leads to three important ideas:

- Underfitting
- Good generalization
- Overfitting

Understanding these concepts is essential for building reliable machine-learning systems.

---

# 1. What Is Generalization?

A machine-learning model is useful when it can perform well not only on examples it has already seen, but also on new, unseen examples.

This ability is called:

Generalization

Consider a student learning mathematics.

If the student memorizes the answers to ten questions, they may perform perfectly when those exact questions appear again.

But if a new question is given and the student cannot solve it, memorization has not produced real understanding.

Machine learning faces a similar problem.

Training Examples
       ↓
     Learning
       ↓
      Model
       ↓
New Unseen Examples
       ↓
    Prediction

A good model learns useful patterns rather than simply memorizing training examples.

---

# 2. Underfitting

Underfitting occurs when a model is too simple to capture the important patterns in the data.

For example, suppose the true relationship between two variables is nonlinear:

y = x²

but we use a very simple linear model:

y = mx + c

The model may fail to represent the underlying relationship.

The result can be:

Training Performance → Poor

Testing Performance → Poor

This indicates that the model has not learned enough from the data.

---

# 3. Overfitting

Overfitting occurs when a model learns the training data too closely, including noise or accidental patterns that do not generalize.

A simplified picture is:

Training Data
     ↓
Model learns
     ↓
Useful patterns + Noise
     ↓
Excellent training performance
     ↓
Poor performance on new data

Typical pattern:

Training Performance → Very High

Testing Performance → Much Lower

The model has effectively become too specialized to the training examples.

---

# 4. Mathematical Intuition

Suppose a model produces predictions:

y_hat = f(x)

We want the prediction to be close to the true value:

y_hat ≈ y

The model's error can be represented using a loss function.

For example, mean squared error:

MSE =
(1/n)
Σ(
yi - y_hat_i
)²

A model with very low training error may look excellent.

But what really matters is whether the error remains low on unseen data.

Therefore:

Good ML Model ≈ Low Error on Unseen Data

not simply:

Low Training Error

---

# 5. Model Complexity

Model complexity describes how flexible a model is in representing patterns.

A very simple model may not capture enough information.

A very complex model may capture too much, including noise.

Conceptually:

Too Simple
    ↓
Underfitting
    ↓
Appropriate Complexity
    ↓
Good Generalization
    ↓
Too Complex
    ↓
Overfitting

The goal is not to make a model as complicated as possible.

The goal is to find a model that captures useful structure while remaining capable of generalizing.

---

# 6. A Simple Experiment

We can demonstrate this using polynomial regression.

\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

np.random.seed(42)

x = np.linspace(-3, 3, 30)

y = x**2 + np.random.normal(
    0,
    2,
    30
)

plt.scatter(
    x,
    y
)

plt.xlabel("x")
plt.ylabel("y")

plt.title(
    "Training Data"
)

plt.show()
\`\`\`

The data approximately follows:

y = x²

but contains noise.

---

# 7. Different Model Complexities

We can fit polynomial models with different degrees.

\`\`\`python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline

degrees = [1, 2, 15]

for degree in degrees:

    model = make_pipeline(
        PolynomialFeatures(degree),
        LinearRegression()
    )

    model.fit(
        x.reshape(-1, 1),
        y
    )

    predictions = model.predict(
        x.reshape(-1, 1)
    )

    plt.scatter(
        x,
        y
    )

    plt.plot(
        x,
        predictions
    )

    plt.title(
        f"Polynomial Degree: {degree}"
    )

    plt.xlabel("x")
    plt.ylabel("y")

    plt.show()
\`\`\`

The three models illustrate the idea:

## Degree 1

Very simple.

It may fail to capture the curved relationship.

→ Underfitting

## Degree 2

Captures the main relationship.

→ Good fit

## Degree 15

Very flexible.

It may start following individual noisy observations.

→ Potential overfitting

---

# 8. Training Error vs Test Error

A useful way to understand model complexity is to compare training and test error.

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

X = x.reshape(-1, 1)

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.3,
    random_state=42
)
\`\`\`

For each model:

\`\`\`python
model.fit(
    X_train,
    y_train
)

train_prediction = model.predict(
    X_train
)

test_prediction = model.predict(
    X_test
)

train_error = mean_squared_error(
    y_train,
    train_prediction
)

test_error = mean_squared_error(
    y_test,
    test_prediction
)

print(
    "Training Error:",
    train_error
)

print(
    "Testing Error:",
    test_error
)
\`\`\`

The difference between training and testing performance is an important signal.

---

# 9. Bias and Variance Intuition

Two useful ideas are:

Bias

and:

Variance

## High Bias

The model is too simple.

It makes systematic errors because it cannot represent the underlying pattern.

This is associated with:

Underfitting

## High Variance

The model is highly sensitive to the particular training data.

Small changes in the training dataset can produce substantially different models.

This is associated with:

Overfitting

Conceptually:

High Bias
    ↓
Too Simple
    ↓
Underfitting

Balanced
    ↓
Good Generalization

High Variance
    ↓
Too Complex
    ↓
Overfitting

The goal is to find a useful balance.

---

# 10. How Can We Reduce Overfitting?

Several strategies can help.

## Use More Data

More representative training examples can help a model learn patterns rather than noise.

## Reduce Model Complexity

A simpler model may generalize better.

## Regularization

Regularization discourages unnecessarily complex models by adding a penalty to the optimization objective.

A simplified form is:

Loss_total =
Loss_data
+
lambda × Complexity

where:

lambda

controls the strength of the penalty.

Regularization will be studied more deeply in later machine-learning and deep-learning modules.

## Cross-Validation

Instead of relying on one particular split, cross-validation evaluates a model across multiple training/validation splits.

This provides a more reliable estimate of model performance.

---

# 11. Real-World Example

Suppose an online store wants to predict whether a customer will purchase a product.

A model might memorize:

Customer 1 → Purchased

Customer 2 → Did not purchase

Customer 3 → Purchased

But the actual goal is not to memorize previous customers.

The goal is:

New Customer
     ↓
Features
     ↓
Model
     ↓
Purchase Prediction

If the model performs well on new customers, it has learned useful patterns.

---

# Practice

Create a dataset with a nonlinear relationship.

Train a linear model.

Train a polynomial model.

Compare training and testing errors.

Increase the polynomial degree.

Observe when the model begins fitting noise.

Explain which model generalizes best.

---

# Quick Check

What is generalization?

What is underfitting?

What is overfitting?

Why can low training error be misleading?

What is model complexity?

What is high bias?

What is high variance?

How can more data reduce overfitting?

What is regularization?

Why should we care about performance on unseen data?

---

# Lesson Summary

A machine-learning model should learn useful patterns rather than memorize its training examples.

Underfitting means the model is too simple.

Overfitting means the model is too specialized to the training data.

Generalization is the ability to perform well on unseen data.

Training performance alone is not enough.

Model complexity must be controlled.

Regularization, more data, and validation techniques can help improve generalization.

The central principle is:

Learn patterns, not noise.
`,
};

export default lesson8;