const lesson5 = {
  id: "lesson5",
  moduleId: "module2",
  lessonNumber: 5,

  title: "Softmax Regression",

  subtitle:
    "Moving from numerical prediction to multiclass classification",

  description:
    "Understand classification, logits, softmax probabilities, cross-entropy loss, and how a linear model can be used for multiclass prediction.",

  estimatedTime: "4 hours",

  difficulty: "Intermediate",

  learningObjectives: [
    "Understand the difference between regression and classification.",
    "Understand multiclass classification.",
    "Understand class scores and logits.",
    "Understand the softmax function.",
    "Understand predicted class probabilities.",
    "Understand cross-entropy loss.",
    "Understand why probabilities should sum to one.",
    "Implement softmax regression with PyTorch.",
    "Understand the training workflow for classification."
  ],

  sections: [
    {
      id: "classification",
      title: "1. What Is Classification?",

      content: `
Regression asks:

"How much?"

Classification asks:

"Which category?"

Examples include:

• spam or not spam
• cat, dog, or bird
• one product category among many
• handwritten digit classification

The output represents one or more categories rather than a continuous numerical value.
`
    },

    {
      id: "classes",
      title: "2. Classes",

      content: `
A classification problem contains a set of possible classes.

For example, an image dataset might contain:

class 0 → cat
class 1 → dog
class 2 → bird

A model receives an input and produces information about how strongly each class is supported.
`
    },

    {
      id: "hard-soft",
      title: "3. Hard and Soft Predictions",

      content: `
A hard prediction chooses one class.

Example:

dog

A soft prediction provides a probability-like score for every class.

Example:

cat   → 0.10
dog   → 0.75
bird  → 0.15

The class with the largest probability becomes the predicted class in ordinary single-label classification.
`
    },

    {
      id: "linear-scores",
      title: "4. Linear Class Scores",

      content: `
A simple classification model can first calculate a score for every class.

For input X:

O = XW + b

Instead of producing one numerical output, the model produces multiple outputs.

If there are three classes:

O = [o₁, o₂, o₃]

These values are called scores or logits.

They are not probabilities yet.
`
    },

    {
      id: "logits",
      title: "5. Logits",

      content: `
Logits are the raw outputs of the classification model before conversion into probabilities.

For example:

[-1.2, 2.5, 0.7]

The largest score corresponds to the class that the model currently favors.

However, logits can be:

• negative
• positive
• larger than 1
• smaller than 0

Therefore, they cannot directly be interpreted as probabilities.
`
    },

    {
      id: "softmax",
      title: "6. The Softmax Function",

      content: `
Softmax transforms a vector of logits into values that can be interpreted as class probabilities.

For logits z₁, z₂, ..., zₖ:

softmax(zᵢ) = exp(zᵢ) / Σⱼ exp(zⱼ)

The resulting values are:

• non-negative
• normalized
• sum to 1

This makes them suitable for representing a probability distribution over classes.
`
    },

    {
      id: "intuition",
      title: "7. Softmax Intuition",

      content: `
Suppose the model produces:

[1.0, 3.0, 0.5]

Softmax converts these scores into normalized values.

The class with the largest logit receives the largest probability.

Increasing the difference between two logits increases the relative preference for the larger one.

Therefore, softmax preserves the ordering of scores while converting them into normalized probabilities.
`
    },

    {
      id: "cross-entropy",
      title: "8. Cross-Entropy Loss",

      content: `
The model needs a loss function suitable for classification.

Cross-entropy measures the discrepancy between the predicted probability distribution and the target class.

For a single example whose correct class is y:

L = -log(pᵧ)

where:

pᵧ = probability assigned to the correct class.
`
    },

    {
      id: "loss-intuition",
      title: "9. Cross-Entropy Intuition",

      content: `
If the model assigns high probability to the correct class:

pᵧ → 1

then:

-log(pᵧ) → 0

The loss is small.

If the model assigns very low probability to the correct class:

pᵧ → 0

then:

-log(pᵧ)

becomes large.

Therefore, cross-entropy strongly penalizes confident incorrect predictions.
`
    },

    {
      id: "one-hot",
      title: "10. Class Labels",

      content: `
A classification target can identify the correct class using an integer label.

For example:

0 → cat
1 → dog
2 → bird

For one example:

y = 1

means the correct class is dog.

Internally, probability-based interpretations can also be expressed using one-hot representations, where the correct class receives the target value.
`
    },

    {
      id: "prediction",
      title: "11. Making a Prediction",

      content: `
The classification process is:

Input image
↓
Linear transformation
↓
Logits
↓
Softmax
↓
Class probabilities
↓
Largest probability
↓
Predicted class

The training process additionally uses the true label to calculate the loss.
`
    },

    {
      id: "training",
      title: "12. Training Softmax Regression",

      content: `
The training pipeline becomes:

Input batch
↓
Linear model
↓
Logits
↓
Classification loss
↓
Gradients
↓
Parameter update
↓
Repeat

The overall training structure is therefore similar to linear regression.

The main changes are:

• output structure
• interpretation of outputs
• loss function
`
    },

    {
      id: "image",
      title: "13. Image Classification",

      content: `
For image classification, an image can be converted into a numerical representation.

For example, a grayscale image can be represented as pixel values.

A simple linear classifier can flatten the image into a vector.

For a 28 × 28 image:

28 × 28 = 784

pixel values can be represented as 784 input features.

A linear classifier can then map these features to class scores.
`
    },

    {
      id: "limitation",
      title: "14. Limitation of Softmax Regression",

      content: `
Softmax regression is still a linear model.

It can learn linear decision boundaries.

However, many real-world datasets contain complex patterns that cannot be separated effectively using only linear transformations.

This motivates multilayer neural networks.

The next major step is therefore:

Linear model
→
Hidden layers
→
Nonlinear activation
→
More expressive model
`
    },

    {
      id: "pytorch",
      title: "15. Softmax Classification in PyTorch",

      content: `
PyTorch provides high-level loss functions for classification.

For many classification models, CrossEntropyLoss is used.

It is important to understand that this loss is designed to work with raw class scores from the model.

In practice, you generally should not manually apply softmax before passing logits to nn.CrossEntropyLoss.
`
    },

    {
      id: "workflow",
      title: "16. Complete Softmax Regression Workflow",

      content: `
The complete conceptual workflow is:

Prepare dataset
↓
Create class labels
↓
Create model
↓
Generate logits
↓
Calculate classification loss
↓
Calculate gradients
↓
Update parameters
↓
Evaluate predictions
↓
Repeat

This workflow becomes the foundation for more sophisticated classification networks.
`
    }
  ],

  codeExamples: [
    {
      title: "Calculate Softmax",
      language: "python",

      code: `import torch

logits = torch.tensor([
    [1.0, 3.0, 0.5]
])

probabilities = torch.softmax(
    logits,
    dim=1
)

print(probabilities)
print(probabilities.sum())`,

      explanation:
        "Converts class logits into normalized probabilities."
    },

    {
      title: "Find Predicted Class",
      language: "python",

      code: `import torch

logits = torch.tensor([
    [1.0, 3.0, 0.5]
])

prediction = logits.argmax(
    dim=1
)

print(prediction)`,

      explanation:
        "Selects the class with the largest logit."
    },

    {
      title: "Cross-Entropy Loss",
      language: "python",

      code: `import torch
from torch import nn

logits = torch.tensor([
    [1.0, 3.0, 0.5],
    [2.0, 0.5, 4.0]
])

labels = torch.tensor([
    1,
    2
])

loss_fn = nn.CrossEntropyLoss()

loss = loss_fn(
    logits,
    labels
)

print(loss)`,

      explanation:
        "Calculates classification loss from raw logits and integer class labels."
    },

    {
      title: "Softmax Regression Model",
      language: "python",

      code: `import torch
from torch import nn

model = nn.Linear(
    784,
    10
)

X = torch.randn(
    32,
    784
)

logits = model(X)

print(logits.shape)`,

      explanation:
        "Creates a linear classifier for 28×28 images flattened into 784 features and produces scores for ten classes."
    },

    {
      title: "Train a Classifier",
      language: "python",

      code: `import torch
from torch import nn

X = torch.randn(
    100,
    4
)

y = torch.randint(
    0,
    3,
    (100,)
)

model = nn.Linear(
    4,
    3
)

loss_fn = nn.CrossEntropyLoss()

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.1
)

for epoch in range(100):
    logits = model(X)

    loss = loss_fn(
        logits,
        y
    )

    optimizer.zero_grad()

    loss.backward()

    optimizer.step()

predictions = logits.argmax(
    dim=1
)

print(predictions[:10])`,

      explanation:
        "Demonstrates the basic training loop for a multiclass linear classifier."
    }
  ],

  formulas: [
    {
      name: "Linear class scores",
      formula: "O = XW + b",
      meaning:
        "Produces a score for every class."
    },

    {
      name: "Softmax",
      formula: "pᵢ = exp(zᵢ) / Σⱼ exp(zⱼ)",
      meaning:
        "Converts logits into normalized class probabilities."
    },

    {
      name: "Cross-entropy",
      formula: "L = -log(pᵧ)",
      meaning:
        "Penalizes low probability assigned to the correct class."
    }
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "What is the difference between regression and classification?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "What are logits?"
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "Why are logits not directly probabilities?"
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "What properties do softmax outputs have?"
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "Why does cross-entropy produce a small loss when the correct class receives high probability?"
    },

    {
      id: "ex6",
      difficulty: "Hard",
      question:
        "Explain the complete process of training a softmax regression classifier."
    },

    {
      id: "ex7",
      difficulty: "Hard",
      question:
        "Why is softmax regression still limited compared with a multilayer neural network?"
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Softmax Experiment",
      task:
        "Create several sets of logits and observe how the softmax probabilities change."
    },

    {
      id: "code2",
      title: "Class Prediction",
      task:
        "Create a matrix of logits for multiple examples and determine the predicted class for each example."
    },

    {
      id: "code3",
      title: "Cross-Entropy Experiment",
      task:
        "Change the probability assigned to the correct class and observe how the cross-entropy loss changes."
    },

    {
      id: "code4",
      title: "Build a Classifier",
      task:
        "Create and train a linear classifier for a synthetic three-class dataset."
    },

    {
      id: "code5",
      title: "Image Classification Shape",
      task:
        "Create tensors representing batches of 28×28 grayscale images and prepare them for a linear classifier."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "CrossEntropyLoss receives one-hot vectors instead of integer class labels.",
      task:
        "Identify the expected target representation and correct the implementation."
    },

    {
      id: "debug2",
      problem:
        "The classifier produces ten outputs for every example, but the dataset contains five classes.",
      task:
        "Check the output dimension of the model."
    },

    {
      id: "debug3",
      problem:
        "Softmax probabilities do not sum to one across the intended class dimension.",
      task:
        "Inspect the dim argument used in torch.softmax."
    }
  ],

  practicalTask: {
    title: "Build a Three-Class Softmax Classifier",

    objective:
      "Create a complete multiclass classification model using a linear layer and cross-entropy loss.",

    requirements: [
      "Create a synthetic dataset.",
      "Use three classes.",
      "Create a linear classifier.",
      "Generate class logits.",
      "Train using CrossEntropyLoss.",
      "Use an optimizer.",
      "Calculate predicted classes.",
      "Calculate classification accuracy.",
      "Test the model on unseen examples."
    ]
  },

  summary: [
    "Classification predicts categories rather than continuous numerical values.",
    "A linear classifier produces a score for every class.",
    "These raw scores are called logits.",
    "Softmax converts logits into normalized class probabilities.",
    "Cross-entropy is a common loss for multiclass classification.",
    "The largest class score corresponds to the predicted class.",
    "Softmax regression is still a linear model.",
    "Its limitations motivate multilayer neural networks."
  ],

  keyTakeaways: [
    "Regression asks how much; classification asks which category.",
    "Logits are raw class scores.",
    "Softmax converts logits into normalized probabilities.",
    "Cross-entropy measures how well the predicted distribution matches the target.",
    "PyTorch's CrossEntropyLoss works directly with raw logits.",
    "Softmax regression provides the bridge from linear models to neural networks.",
    "The next step is to introduce hidden layers and nonlinear activation functions."
  ],

  nextLesson: "Image Classification Basics"
};

export default lesson5;