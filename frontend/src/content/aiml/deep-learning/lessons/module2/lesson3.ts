const lesson3 = {
  id: "lesson3",
  moduleId: "module2",
  lessonNumber: 3,

  title: "Linear Regression as a Neural Network",

  subtitle:
    "Connecting classical linear models to the structure of neural networks",

  description:
    "Understand how linear regression can be viewed as a neural network and learn the relationship between inputs, parameters, outputs, loss, and training.",

  estimatedTime: "3–4 hours",

  difficulty: "Intermediate",

  learningObjectives: [
    "Understand linear regression as a neural-network model.",
    "Understand inputs, weights, bias, and outputs.",
    "Understand the role of a linear layer.",
    "Understand why a linear model can be considered a neural network.",
    "Understand the relationship between linear regression and matrix operations.",
    "Understand how loss and optimization fit into the model.",
    "Implement linear regression using a neural-network API.",
    "Understand the transition from classical machine learning to deep learning."
  ],

  sections: [
    {
      id: "introduction",
      title: "1. From Linear Regression to Neural Networks",

      content: `
Linear regression is usually introduced as a statistical model.

However, it can also be viewed as a very simple neural network.

The basic idea is:

Input features
↓
Weighted combination
↓
Bias
↓
Prediction

There is no hidden layer and no nonlinear activation.

Even though this model is simple, it contains the fundamental ingredients used by larger neural networks.
`
    },

    {
      id: "neuron",
      title: "2. A Single Computational Unit",

      content: `
Consider the linear model:

ŷ = w₁x₁ + w₂x₂ + ... + wₙxₙ + b

This can be interpreted as a computational unit.

Each input xᵢ is multiplied by a corresponding weight wᵢ.

The weighted values are added together.

Finally, the bias b is added.

The result becomes the output.
`
    },

    {
      id: "weights",
      title: "3. Weights",

      content: `
Weights determine how strongly individual input features influence the output.

For example:

ŷ = w₁x₁ + w₂x₂

If |w₁| is larger than |w₂|, changes in x₁ have a stronger direct effect on the linear output.

During training, these weights are learned from data.
`
    },

    {
      id: "bias",
      title: "4. Bias",

      content: `
The bias is an additional trainable parameter.

The model is:

ŷ = Xw + b

Without the bias, the model would be restricted to transformations passing through the origin in the simplest one-dimensional interpretation.

The bias gives the model an additional degree of freedom.
`
    },

    {
      id: "linear-layer",
      title: "5. The Linear Layer",

      content: `
Deep learning frameworks provide a reusable abstraction for this operation.

In PyTorch:

nn.Linear

represents a linear transformation with trainable parameters.

Conceptually:

Input
→ Linear transformation
→ Output

The layer stores weights and biases as learnable parameters.
`
    },

    {
      id: "matrix-view",
      title: "6. Matrix Representation",

      content: `
Suppose a batch contains multiple examples.

The input can be represented as:

X

and the learned parameters as:

W

The linear layer computes:

Y = XW + b

This is the same mathematical structure introduced for vectorized linear regression.
`
    },

    {
      id: "batch",
      title: "7. Batch Processing",

      content: `
A neural network does not normally process one training example at a time.

Instead, examples are grouped into batches.

For example:

X.shape = (32, 10)

means:

32 examples
10 input features per example

A linear layer can process the entire batch in one operation.
`
    },

    {
      id: "loss",
      title: "8. The Model Is Not the Complete Learning System",

      content: `
The linear layer only defines how inputs are transformed into predictions.

Training additionally requires:

• target values
• loss function
• gradient computation
• optimizer
• parameter updates

Therefore:

Model
+
Loss
+
Optimization
=
Learning system
`
    },

    {
      id: "training",
      title: "9. Training the Linear Neural Network",

      content: `
The training process is:

Input batch
↓
Linear layer
↓
Prediction
↓
Loss
↓
Backpropagation
↓
Gradient
↓
Optimizer update
↓
Next batch

This same pipeline will later be used for multilayer networks.
`
    },

    {
      id: "no-hidden",
      title: "10. Why There Is No Hidden Layer",

      content: `
Linear regression contains only a direct transformation from input to output.

There is no hidden representation.

This means the model can only represent relationships described by a linear transformation.

The model is therefore useful as a foundation but has limited expressive power compared with deeper nonlinear networks.
`
    },

    {
      id: "deep-learning-connection",
      title: "11. Why This Is Important for Deep Learning",

      content: `
Understanding linear regression as a neural network makes the transition to deeper architectures much easier.

A deeper network repeatedly applies transformations:

Input
↓
Layer
↓
Layer
↓
Layer
↓
Output

The basic layer operation is still a transformation involving parameters.

The major difference is that deep networks introduce multiple layers and nonlinearities.
`
    },

    {
      id: "activation",
      title: "12. Why Nonlinearity Will Matter Later",

      content: `
Stacking purely linear transformations does not create unlimited expressive power.

For example:

Layer 1:
h = XW₁

Layer 2:
y = hW₂

can be combined into another linear transformation:

y = X(W₁W₂)

Therefore, nonlinear activation functions become essential when building expressive multilayer networks.

This will become important when we study multilayer perceptrons.
`
    },

    {
      id: "implementation",
      title: "13. PyTorch Implementation",

      content: `
A linear regression model can be implemented using:

nn.Linear

For example:

model = nn.Linear(3, 1)

This means:

3 input features
1 output

The model automatically manages the trainable weight and bias parameters.
`
    },

    {
      id: "inspection",
      title: "14. Inspecting Parameters",

      content: `
A useful part of learning deep learning frameworks is understanding what parameters a model contains.

For a linear layer, the important parameters are:

• weight
• bias

These parameters participate in gradient-based optimization.
`
    },

    {
      id: "conceptual-example",
      title: "15. Conceptual Example",

      content: `
Suppose we want to predict a student's performance using:

x₁ = study hours
x₂ = attendance
x₃ = previous score

The model could be:

ŷ = w₁x₁ + w₂x₂ + w₃x₃ + b

Training discovers suitable values for:

w₁
w₂
w₃
b

The model then uses these learned parameters to produce predictions for new examples.
`
    },

    {
      id: "comparison",
      title: "16. Classical Linear Regression vs Neural-Network View",

      content: `
Classical view:

Features
→
Linear regression
→
Numerical prediction

Neural-network view:

Input
→
Linear layer
→
Output

Mathematically, these describe the same basic transformation.

The neural-network perspective becomes valuable because the same abstraction can later be extended into deeper architectures.
`
    }
  ],

  codeExamples: [
    {
      title: "Create a Linear Layer",
      language: "python",

      code: `import torch
from torch import nn

model = nn.Linear(
    in_features=3,
    out_features=1
)

print(model)`,

      explanation:
        "Creates a trainable linear layer with three input features and one output."
    },

    {
      title: "Make Predictions",
      language: "python",

      code: `import torch
from torch import nn

model = nn.Linear(3, 1)

X = torch.tensor([
    [1.0, 2.0, 3.0],
    [2.0, 3.0, 4.0],
    [3.0, 4.0, 5.0]
])

y_hat = model(X)

print(y_hat)`,

      explanation:
        "Processes a batch of three examples through the linear layer."
    },

    {
      title: "Inspect Parameters",
      language: "python",

      code: `import torch
from torch import nn

model = nn.Linear(3, 1)

print("Weight:")
print(model.weight)

print("Bias:")
print(model.bias)`,

      explanation:
        "Shows the trainable parameters maintained by the linear layer."
    },

    {
      title: "Train a Linear Neural Network",
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

print("Weight:", model.weight)
print("Bias:", model.bias)`,

      explanation:
        "Demonstrates the complete training pipeline for a one-layer neural network."
    }
  ],

  formulas: [
    {
      name: "Linear transformation",
      formula: "Y = XW + b",
      meaning:
        "Transforms a batch of input features into output values."
    },

    {
      name: "Training objective",
      formula: "minimize L(Y, Ŷ)",
      meaning:
        "Training attempts to find parameters that minimize prediction loss."
    }
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "Why can linear regression be viewed as a neural network?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "What are the trainable parameters of a linear layer?"
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "What does nn.Linear(5, 2) represent?"
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "Why does stacking linear layers without nonlinear activation fail to create a genuinely nonlinear model?"
    },

    {
      id: "ex5",
      difficulty: "Hard",
      question:
        "Explain the complete relationship between a linear regression model and a one-layer neural network."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Create a Linear Layer",
      task:
        "Create an nn.Linear layer that accepts five features and produces two outputs."
    },

    {
      id: "code2",
      title: "Inspect Parameters",
      task:
        "Print the weight and bias of a linear layer."
    },

    {
      id: "code3",
      title: "Batch Prediction",
      task:
        "Create a batch of ten examples and pass them through a linear layer."
    },

    {
      id: "code4",
      title: "Train a Model",
      task:
        "Train a one-layer neural network on a synthetic regression dataset."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "A model created with nn.Linear(4, 1) receives an input tensor with shape (32, 3).",
      task:
        "Identify why the operation fails and determine the correct input shape."
    },

    {
      id: "debug2",
      problem:
        "The model's parameters do not change during training.",
      task:
        "Check gradient calculation and optimizer updates."
    }
  ],

  practicalTask: {
    title: "Convert Linear Regression into a Neural Network",

    objective:
      "Implement a regression problem using nn.Linear and train it using a standard PyTorch training loop.",

    requirements: [
      "Create a synthetic dataset.",
      "Create an nn.Linear model.",
      "Use a suitable regression loss.",
      "Use an optimizer.",
      "Train for multiple epochs.",
      "Display the loss.",
      "Inspect the learned parameters.",
      "Generate predictions for new examples."
    ]
  },

  summary: [
    "Linear regression can be represented as a one-layer neural network.",
    "A linear layer performs a weighted transformation followed by bias addition.",
    "Weights and biases are trainable parameters.",
    "Batches allow the model to process many examples simultaneously.",
    "The model alone does not define learning; loss and optimization are also required.",
    "Purely linear layers remain equivalent to a linear transformation when stacked.",
    "Nonlinear activation functions become important for deeper neural networks."
  ],

  keyTakeaways: [
    "Linear regression is the simplest useful neural-network model.",
    "nn.Linear provides a reusable implementation of the linear transformation.",
    "Weights and bias are learned through gradient-based optimization.",
    "The same model-training pipeline will be reused for more complex networks.",
    "The next major step is classification."
  ],

  nextLesson: "Object-Oriented Model Design"
};

export default lesson3;