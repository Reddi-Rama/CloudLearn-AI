const lesson4 = {
  id: "lesson4",
  moduleId: "module2",
  lessonNumber: 4,

  title: "Object-Oriented Model Design",

  subtitle:
    "Organizing models, data, training, and utilities into reusable components",

  description:
    "Learn how object-oriented design helps organize deep learning systems into reusable components for models, data, training, and supporting utilities.",

  estimatedTime: "3–4 hours",

  difficulty: "Intermediate",

  learningObjectives: [
    "Understand why deep learning code benefits from modular design.",
    "Understand the role of model classes.",
    "Understand the role of data components.",
    "Understand training components.",
    "Understand reusable utilities.",
    "Understand separation of responsibilities.",
    "Understand inheritance and reusable interfaces.",
    "Understand how modular design makes experiments easier.",
    "Build a simple object-oriented training structure."
  ],

  sections: [
    {
      id: "motivation",
      title: "1. Why Object-Oriented Design?",

      content: `
A complete deep learning program contains many responsibilities.

It must:

• load data
• preprocess data
• define a model
• calculate predictions
• calculate loss
• calculate gradients
• update parameters
• evaluate performance
• save results

Putting everything into one large function quickly becomes difficult to maintain.

Object-oriented design helps separate these responsibilities.
`
    },

    {
      id: "components",
      title: "2. Main Components",

      content: `
A structured deep learning project can separate:

Data
→ responsible for obtaining and preparing examples

Model
→ responsible for producing predictions

Loss
→ measures prediction quality

Optimizer
→ updates parameters

Trainer
→ coordinates the training process

Utilities
→ provide reusable supporting functionality
`
    },

    {
      id: "model",
      title: "3. Model Class",

      content: `
A model class represents the architecture used to transform input into output.

For example:

class MyModel(nn.Module):
    ...

The model can contain:

• layers
• parameters
• forward computation
• configuration

This separates model architecture from the training procedure.
`
    },

    {
      id: "forward",
      title: "4. Forward Computation",

      content: `
The forward pass describes how input data moves through the model.

Conceptually:

X
↓
Layer 1
↓
Layer 2
↓
Prediction

In PyTorch, this behavior is commonly represented through the model's forward computation.
`
    },

    {
      id: "data",
      title: "5. Data Components",

      content: `
Data handling can also be separated from model logic.

A data component may manage:

• datasets
• training examples
• validation examples
• test examples
• batch size
• data loaders
• preprocessing

The model should not need to know where the data came from.
`
    },

    {
      id: "training",
      title: "6. Training Component",

      content: `
A trainer coordinates the training process.

A conceptual training loop is:

Prepare data
↓
Prepare model
↓
Choose optimizer
↓
For each epoch
    process batches
    calculate predictions
    calculate loss
    calculate gradients
    update parameters
↓
Evaluate

This allows the same training mechanism to be reused with different models.
`
    },

    {
      id: "separation",
      title: "7. Separation of Responsibilities",

      content: `
Good modular design gives each component a clear responsibility.

For example:

Data class
→ manages data

Model class
→ defines computation

Trainer
→ manages training

Optimizer
→ updates parameters

This prevents unrelated concerns from becoming tightly coupled.
`
    },

    {
      id: "reuse",
      title: "8. Reusability",

      content: `
Suppose you have a training system that works for linear regression.

A well-designed system should allow you to replace the model without rewriting the entire training process.

For example:

Linear model
↓
same training infrastructure

MLP
↓
same training infrastructure

CNN
↓
same training infrastructure

Transformer
↓
same training infrastructure

This is one of the major benefits of modular design.
`
    },

    {
      id: "inheritance",
      title: "9. Inheritance",

      content: `
Object-oriented frameworks often provide base classes.

A specialized class can inherit common behavior from a base class.

For example:

BaseModel
↓
LinearModel

or:

BaseModel
↓
MLP
↓
CNN

The exact hierarchy depends on the framework and project.
`
    },

    {
      id: "nn-module",
      title: "10. PyTorch nn.Module",

      content: `
PyTorch uses nn.Module as a fundamental abstraction for neural-network components.

A model can inherit from nn.Module.

This gives the model access to framework functionality for:

• parameter management
• composing layers
• moving models between devices
• saving state
• training and evaluation modes
`
    },

    {
      id: "parameters",
      title: "11. Parameter Management",

      content: `
A major benefit of using framework modules is automatic parameter tracking.

When trainable layers are included inside an nn.Module, PyTorch can discover their parameters.

This allows code such as:

model.parameters()

to provide the parameters needed by an optimizer.
`
    },

    {
      id: "data-module",
      title: "12. Data Abstraction",

      content: `
A structured data component can provide methods for:

• downloading or preparing data
• creating training loaders
• creating validation loaders
• creating test loaders

The exact implementation depends on the framework and application.

The important design principle is that data management remains separate from model architecture.
`
    },

    {
      id: "trainer",
      title: "13. Trainer Abstraction",

      content: `
A trainer can coordinate repetitive training logic.

Instead of rewriting:

forward
loss
backward
update

for every model, a trainer can provide a common procedure.

Then only model-specific components need to change.
`
    },

    {
      id: "hyperparameters",
      title: "14. Hyperparameters",

      content: `
Not every value in a training program is learned.

Examples include:

• learning rate
• batch size
• number of epochs
• hidden-layer size
• number of layers

These are hyperparameters.

A good object-oriented design makes important hyperparameters easy to configure.
`
    },

    {
      id: "modularity",
      title: "15. Why Modularity Matters",

      content: `
Imagine changing only the optimizer.

In a modular design:

Model
→ unchanged

Data
→ unchanged

Training infrastructure
→ mostly unchanged

Optimizer
→ replaced

This allows experiments to be performed without rewriting unrelated parts of the program.
`
    },

    {
      id: "debugging",
      title: "16. Debugging Modular Systems",

      content: `
Modularity also helps debugging.

If predictions are wrong:

check the model.

If batches contain incorrect values:

check the data component.

If parameters are not changing:

check training and optimizer logic.

If evaluation is incorrect:

check the evaluation component.

Separating responsibilities makes errors easier to locate.
`
    }
  ],

  codeExamples: [
    {
      title: "Simple Model Class",
      language: "python",

      code: `import torch
from torch import nn

class LinearModel(nn.Module):
    def __init__(self, input_size):
        super().__init__()

        self.layer = nn.Linear(
            input_size,
            1
        )

    def forward(self, X):
        return self.layer(X)

model = LinearModel(3)

print(model)`,

      explanation:
        "Defines a simple reusable model class using nn.Module."
    },

    {
      title: "Model Parameters",
      language: "python",

      code: `import torch
from torch import nn

class LinearModel(nn.Module):
    def __init__(self):
        super().__init__()

        self.layer = nn.Linear(3, 1)

    def forward(self, X):
        return self.layer(X)

model = LinearModel()

for name, parameter in model.named_parameters():
    print(name)
    print(parameter.shape)`,

      explanation:
        "Shows how PyTorch tracks parameters inside a model."
    },

    {
      title: "Simple Trainer Function",
      language: "python",

      code: `import torch

def train(model, X, y, epochs=100):
    loss_fn = torch.nn.MSELoss()

    optimizer = torch.optim.SGD(
        model.parameters(),
        lr=0.01
    )

    for epoch in range(epochs):
        prediction = model(X)

        loss = loss_fn(
            prediction,
            y
        )

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    return model`,

      explanation:
        "Separates training logic from model definition."
    },

    {
      title: "Reusable Training Structure",
      language: "python",

      code: `import torch
from torch import nn

class LinearModel(nn.Module):
    def __init__(self):
        super().__init__()

        self.layer = nn.Linear(2, 1)

    def forward(self, X):
        return self.layer(X)


def train(model, X, y):
    loss_fn = nn.MSELoss()

    optimizer = torch.optim.SGD(
        model.parameters(),
        lr=0.01
    )

    for epoch in range(100):
        prediction = model(X)

        loss = loss_fn(
            prediction,
            y
        )

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()


X = torch.randn(100, 2)
y = torch.randn(100, 1)

model = LinearModel()

train(model, X, y)`,

      explanation:
        "Demonstrates the separation between model definition and training logic."
    }
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "Why is separating model code from data code useful?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "What is the purpose of nn.Module?"
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "What responsibilities could be placed inside a trainer?"
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "Why does modularity make experiments easier?"
    },

    {
      id: "ex5",
      difficulty: "Hard",
      question:
        "Design a software structure that allows the same training process to work with a linear model and an MLP."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Create a Custom Model",
      task:
        "Create a class derived from nn.Module containing a linear layer."
    },

    {
      id: "code2",
      title: "Separate Training",
      task:
        "Write a separate train() function that accepts any compatible model."
    },

    {
      id: "code3",
      title: "Model Inspection",
      task:
        "Print all trainable parameters using named_parameters()."
    },

    {
      id: "code4",
      title: "Reusable Training",
      task:
        "Train two different model classes using the same training function."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "An optimizer receives no model parameters.",
      task:
        "Check whether the model inherits from nn.Module and whether trainable layers are registered."
    },

    {
      id: "debug2",
      problem:
        "A custom model does not produce predictions.",
      task:
        "Check whether the model defines the forward computation correctly."
    },

    {
      id: "debug3",
      problem:
        "Changing the model requires rewriting the entire training loop.",
      task:
        "Identify the missing abstraction and redesign the training code."
    }
  ],

  practicalTask: {
    title: "Build a Modular Training Framework",

    objective:
      "Create a small reusable structure that separates model, data, and training responsibilities.",

    requirements: [
      "Create at least one custom nn.Module.",
      "Create a separate training function.",
      "Keep dataset creation separate from the model.",
      "Use an optimizer outside the model definition.",
      "Train the model.",
      "Inspect the model parameters.",
      "Replace the model with another compatible model without rewriting the entire training process."
    ]
  },

  summary: [
    "Deep learning applications contain multiple responsibilities.",
    "Object-oriented design helps organize these responsibilities.",
    "Models define transformations from input to output.",
    "Data components manage datasets and batches.",
    "Training components coordinate optimization.",
    "nn.Module provides a fundamental abstraction for PyTorch models.",
    "Modular design improves reuse, experimentation, and debugging.",
    "Hyperparameters should be separated from learned parameters."
  ],

  keyTakeaways: [
    "Do not place the entire deep learning application into one giant function.",
    "Separate data, models, training, and utilities.",
    "Use nn.Module for reusable PyTorch model components.",
    "Good abstractions allow the same training infrastructure to work with different models.",
    "Modularity becomes increasingly important as neural networks become more complex."
  ],

  nextLesson: "Softmax Regression"
};

export default lesson4;