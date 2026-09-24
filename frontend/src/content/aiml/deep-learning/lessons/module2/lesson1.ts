const lesson1 = {
  id: "lesson1",
  moduleId: "module2",
  lessonNumber: 1,

  title: "Linear Regression",

  subtitle:
    "Understanding the simplest complete machine learning model",

  description:
    "Learn how linear regression turns input features into numerical predictions and how model parameters are learned by minimizing a loss function.",

  estimatedTime: "3–4 hours",

  difficulty: "Beginner–Intermediate",

  learningObjectives: [
    "Understand what regression means in machine learning.",
    "Distinguish features, labels, examples, and datasets.",
    "Understand the linear regression model.",
    "Understand model parameters.",
    "Understand prediction and loss.",
    "Understand squared-error loss.",
    "Understand why training is an optimization problem.",
    "Understand the role of gradients in learning.",
    "Implement a simple linear regression model with PyTorch."
  ],

  sections: [
    {
      id: "introduction",
      title: "1. What Is Regression?",

      content: `
Regression is a supervised learning problem in which the goal is to predict a numerical value.

Examples include:

• predicting house prices
• predicting sales
• predicting demand
• predicting temperature
• predicting travel time
• predicting a patient's length of stay

The output is generally a numerical quantity rather than a category.

For example:

Input:
House area = 1500 square feet
House age = 8 years

Output:
Predicted price = numerical value
`
    },

    {
      id: "dataset",
      title: "2. Understanding a Dataset",

      content: `
A machine learning dataset contains examples.

Each example contains information used to make a prediction.

For a house-price problem, one example could contain:

Area
Age
Number of rooms
Location-related features

and the corresponding target could be:

Price

The dataset is commonly divided into:

• training data
• validation data
• test data

The training data is used to learn model parameters.
`
    },

    {
      id: "terminology",
      title: "3. Features, Labels, and Examples",

      content: `
Several terms are important.

Feature:
An input variable used to make a prediction.

Label:
The target value that the model is trying to predict.

Example:
One individual observation in the dataset.

Training set:
The collection of examples used to learn model parameters.

For example:

Feature vector:
x = [area, age]

Label:
y = house price
`
    },

    {
      id: "linear-model",
      title: "4. The Linear Regression Model",

      content: `
Linear regression assumes that the target can be approximated by a weighted combination of the input features.

For a single feature:

ŷ = wx + b

where:

w = weight
b = bias
x = input feature
ŷ = predicted value

For multiple features:

ŷ = w₁x₁ + w₂x₂ + ... + wₙxₙ + b

The parameters w and b are learned from data.
`
    },

    {
      id: "matrix-form",
      title: "5. Matrix Form",

      content: `
For many examples and multiple features, linear regression is naturally expressed using matrices.

Let:

X = feature matrix

w = parameter vector

b = bias

Then the predictions can be represented as:

ŷ = Xw + b

The matrix representation is important because modern deep learning frameworks perform these operations efficiently using tensor libraries.
`
    },

    {
      id: "parameters",
      title: "6. Model Parameters",

      content: `
Parameters are values learned during training.

For linear regression, the main parameters are:

• weights
• bias

The model starts with initial parameter values.

Training repeatedly modifies these parameters so that the predictions become better according to the selected loss function.
`
    },

    {
      id: "loss",
      title: "7. Loss Function",

      content: `
A model needs a way to measure how incorrect its predictions are.

This is the purpose of a loss function.

For a prediction ŷ and target y, a common regression loss is squared error:

L = 1/2 (ŷ - y)²

The exact scaling convention can vary.

The important idea is:

larger prediction error
→ larger loss

smaller prediction error
→ smaller loss
`
    },

    {
      id: "squared-loss",
      title: "8. Squared Loss",

      content: `
Squared loss penalizes the difference between the prediction and target.

If:

y = 10
ŷ = 8

then the prediction error is:

8 - 10 = -2

After squaring:

(-2)² = 4

The sign disappears and larger errors receive increasingly larger penalties.

Squared loss is particularly convenient because it is differentiable and easy to optimize.
`
    },

    {
      id: "optimization",
      title: "9. Learning as Optimization",

      content: `
Training a model means finding parameter values that produce low loss.

Conceptually:

Choose initial parameters
↓
Generate predictions
↓
Calculate loss
↓
Calculate gradients
↓
Update parameters
↓
Repeat

This turns model training into an optimization problem.
`
    },

    {
      id: "gradient",
      title: "10. Gradient-Based Learning",

      content: `
The gradient tells us how the loss changes with respect to model parameters.

If:

L = loss(w, b)

then we can calculate:

∂L/∂w

and:

∂L/∂b

These derivatives indicate how the loss changes when the parameters change.

Gradient descent then updates the parameters in a direction intended to reduce the loss.
`
    },

    {
      id: "gradient-descent",
      title: "11. Gradient Descent",

      content: `
A basic gradient-descent update has the form:

parameter = parameter - learning_rate × gradient

For a weight:

w ← w - η ∂L/∂w

where:

η = learning rate

The learning rate controls the size of each update.
`
    },

    {
      id: "learning-rate",
      title: "12. Learning Rate",

      content: `
The learning rate determines how aggressively the parameters are updated.

If the learning rate is too large:

• training can become unstable
• the loss can oscillate
• the optimization may overshoot useful parameter values

If it is too small:

• training can become very slow
• many iterations may be required

Choosing a suitable learning rate is therefore an important part of training.
`
    },

    {
      id: "noise",
      title: "13. Data and Observation Noise",

      content: `
Real-world relationships are rarely perfectly deterministic.

Even if two examples have similar feature values, their target values may differ.

This can happen because of:

• measurement errors
• missing information
• natural variation
• factors not represented by the features

Therefore, a useful model should generally capture the underlying relationship rather than memorize every observed value.
`
    },

    {
      id: "neural-network-connection",
      title: "14. Why Linear Regression Matters for Deep Learning",

      content: `
Linear regression may appear simple, but it introduces almost the entire basic learning pipeline:

Data
↓
Model
↓
Prediction
↓
Loss
↓
Gradient
↓
Parameter update
↓
Training

The same structure appears in much larger neural networks.

The difference is that later models contain many more parameters and nonlinear transformations.
`
    },

    {
      id: "example",
      title: "15. Worked Example",

      content: `
Suppose a model predicts house price using area.

Model:

ŷ = wx + b

Assume:

w = 2
b = 5
x = 10

Then:

ŷ = 2(10) + 5
ŷ = 25

If the actual target is:

y = 30

then the prediction error is:

25 - 30 = -5

The squared error is:

25

The training process will use the gradient of the loss to adjust w and b.
`
    },

    {
      id: "pytorch",
      title: "16. Linear Regression with PyTorch",

      content: `
PyTorch provides high-level components for implementing trainable models.

A simple linear model can be represented with:

nn.Linear

This layer performs an affine transformation:

y = XW + b

The parameters can then be optimized using a gradient-based optimizer.
`
    }
  ],

  codeExamples: [
    {
      title: "Simple Linear Prediction",
      language: "python",

      code: `import torch

x = torch.tensor([10.0])

w = torch.tensor([2.0])
b = torch.tensor([5.0])

y_hat = x * w + b

print(y_hat)`,

      explanation:
        "Computes a simple linear prediction using a weight and bias."
    },

    {
      title: "Calculate Squared Error",
      language: "python",

      code: `import torch

y = torch.tensor([30.0])
y_hat = torch.tensor([25.0])

loss = (y_hat - y) ** 2

print(loss)`,

      explanation:
        "Computes squared prediction error."
    },

    {
      title: "Linear Model with PyTorch",
      language: "python",

      code: `import torch
from torch import nn

model = nn.Linear(2, 1)

X = torch.tensor([
    [100.0, 5.0],
    [150.0, 8.0],
    [200.0, 10.0]
])

predictions = model(X)

print(predictions)`,

      explanation:
        "Creates a linear model that maps two input features to one numerical prediction."
    },

    {
      title: "Training a Linear Model",
      language: "python",

      code: `import torch
from torch import nn

X = torch.tensor([
    [1.0],
    [2.0],
    [3.0],
    [4.0]
])

y = torch.tensor([
    [3.0],
    [5.0],
    [7.0],
    [9.0]
])

model = nn.Linear(1, 1)

loss_fn = nn.MSELoss()

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01
)

for epoch in range(1000):
    prediction = model(X)

    loss = loss_fn(
        prediction,
        y
    )

    optimizer.zero_grad()

    loss.backward()

    optimizer.step()

print(model.weight)
print(model.bias)`,

      explanation:
        "Trains a simple linear model to learn an approximately y = 2x + 1 relationship."
    }
  ],

  formulas: [
    {
      name: "Linear model",
      formula: "ŷ = Xw + b",
      meaning:
        "Computes predictions from input features and learned parameters."
    },

    {
      name: "Squared loss",
      formula: "L = 1/2(ŷ - y)²",
      meaning:
        "Measures the squared difference between prediction and target."
    },

    {
      name: "Gradient descent",
      formula: "θ ← θ - η∇θL",
      meaning:
        "Updates parameters in the direction that reduces the loss."
    }
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "What is the difference between a feature and a label?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "What is the purpose of a loss function?"
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "For y = 4x + 2, calculate the prediction when x = 5."
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "Why is squared error useful for regression?"
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "Explain the role of the learning rate."
    },

    {
      id: "ex6",
      difficulty: "Hard",
      question:
        "Explain the complete process by which a linear regression model learns from training data."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Manual Linear Regression",
      task:
        "Implement y = wx + b using PyTorch tensors."
    },

    {
      id: "code2",
      title: "Prediction Error",
      task:
        "Create predictions and calculate squared error for at least five examples."
    },

    {
      id: "code3",
      title: "Train a Linear Model",
      task:
        "Use nn.Linear, MSELoss, and SGD to train a model on synthetic data."
    },

    {
      id: "code4",
      title: "Experiment with Learning Rate",
      task:
        "Train the same model with several learning rates and observe how training behavior changes."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "The model's loss does not decrease during training.",
      task:
        "Check the learning rate, gradients, optimizer, and target values."
    },

    {
      id: "debug2",
      problem:
        "The model produces predictions with an unexpected shape.",
      task:
        "Inspect the input tensor shape and nn.Linear input/output dimensions."
    },

    {
      id: "debug3",
      problem:
        "The model parameters never change.",
      task:
        "Check whether gradients are calculated and whether optimizer.step() is being called."
    }
  ],

  practicalTask: {
    title: "Build a House Price Regression Model",

    objective:
      "Build a small regression model that predicts a numerical target from multiple input features.",

    requirements: [
      "Create a small synthetic dataset.",
      "Use at least two input features.",
      "Create a linear model.",
      "Use a regression loss function.",
      "Train the model using gradient descent.",
      "Print the training loss.",
      "Make predictions for new inputs.",
      "Compare predictions with expected values."
    ]
  },

  summary: [
    "Regression predicts numerical values.",
    "Features provide the input information.",
    "Labels provide the target values.",
    "Linear regression represents predictions as a weighted combination of features plus a bias.",
    "The model parameters are learned from training data.",
    "A loss function measures prediction error.",
    "Squared loss is a common regression objective.",
    "Gradient descent updates parameters to reduce the loss.",
    "The complete training pipeline introduced here becomes the foundation for more complex neural networks."
  ],

  keyTakeaways: [
    "Linear regression is one of the simplest trainable machine learning models.",
    "The model learns weights and a bias from data.",
    "Training means minimizing a loss function.",
    "Gradients tell us how the loss changes with respect to parameters.",
    "Gradient descent uses those gradients to update parameters.",
    "The same training principles will be reused throughout deep learning."
  ],

  nextLesson: "Vectorization and Efficient Computation"
};

export default lesson1;