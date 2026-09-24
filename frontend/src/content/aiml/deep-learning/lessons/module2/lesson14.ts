const lesson14 = {
  id: "lesson14",
  number: 14,
  title: "Custom Layers",
  module: "Neural Networks and Learning",
  description:
    "Learn how to design custom neural-network layers, create layers without parameters, define trainable parameters, integrate custom layers into models, and verify their behavior.",

  content: [
    {
      type: "heading",
      level: 1,
      text: "Custom Layers",
    },

    {
      type: "paragraph",
      text:
        "Deep-learning frameworks provide many standard layers, but real projects sometimes require operations that are not available as a ready-made component. Custom layers allow developers to extend the framework and implement new computational ideas.",
    },

    {
      type: "paragraph",
      text:
        "A custom layer can be as simple as a mathematical transformation with no trainable parameters or as complex as a parameterized operation that becomes part of a trainable neural network.",
    },

    {
      type: "keyTakeaway",
      title: "Core Idea",
      text:
        "A custom layer is a reusable module that implements a specific transformation. It can contain no parameters, fixed parameters, or trainable parameters.",
    },

    {
      type: "heading",
      level: 2,
      text: "1. Why Create Custom Layers?",
    },

    {
      type: "paragraph",
      text:
        "Custom layers become useful when an architecture requires a transformation that is not directly provided by the framework.",
    },

    {
      type: "bullets",
      items: [
        "Researching a new architecture.",
        "Implementing a mathematical operation.",
        "Creating reusable domain-specific transformations.",
        "Combining existing operations into a reusable block.",
        "Experimenting with new parameterizations.",
        "Implementing specialized preprocessing inside a model.",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "2. Basic Structure of a Custom Layer",
    },

    {
      type: "code",
      language: "python",
      title: "Minimal Custom Layer",
      code: `import torch
from torch import nn

class MyLayer(nn.Module):
    def __init__(self):
        super().__init__()

    def forward(self, X):
        return X`,
    },

    {
      type: "paragraph",
      text:
        "The constructor initializes the module. The forward method defines the transformation.",
    },

    {
      type: "heading",
      level: 2,
      text: "3. Custom Layer Without Parameters",
    },

    {
      type: "paragraph",
      text:
        "A layer does not need trainable parameters. It can simply transform its input using a fixed mathematical operation.",
    },

    {
      type: "heading",
      level: 3,
      text: "Centered Layer",
    },

    {
      type: "paragraph",
      text:
        "Consider a layer that subtracts the mean of its input from every element.",
    },

    {
      type: "formula",
      label: "Centering Operation",
      formula: "Y = X - mean(X)",
    },

    {
      type: "code",
      language: "python",
      title: "CenteredLayer",
      code: `class CenteredLayer(nn.Module):
    def __init__(self):
        super().__init__()

    def forward(self, X):
        return X - X.mean()`,
    },

    {
      type: "heading",
      level: 2,
      text: "4. Testing a Parameter-Free Layer",
    },

    {
      type: "code",
      language: "python",
      title: "Test CenteredLayer",
      code: `layer = CenteredLayer()

X = torch.tensor([
    1.0,
    2.0,
    3.0,
    4.0,
    5.0
])

Y = layer(X)

print("Input:", X)
print("Output:", Y)
print("Mean:", Y.mean())`,
    },

    {
      type: "paragraph",
      text:
        "The output should have a mean close to zero. Small floating-point differences may appear depending on the data and numerical representation.",
    },

    {
      type: "heading",
      level: 2,
      text: "5. Combining a Custom Layer With Other Layers",
    },

    {
      type: "code",
      language: "python",
      title: "Custom Layer Inside Sequential",
      code: `net = nn.Sequential(
    nn.LazyLinear(128),
    CenteredLayer()
)

X = torch.rand(4, 8)

Y = net(X)

print(Y.shape)
print(Y.mean())`,
    },

    {
      type: "paragraph",
      text:
        "Once a custom layer follows the module interface, it can be composed with standard layers just like any other component.",
    },

    {
      type: "heading",
      level: 2,
      text: "6. Custom Layers With Parameters",
    },

    {
      type: "paragraph",
      text:
        "A more advanced custom layer contains parameters that should be learned during training.",
    },

    {
      type: "paragraph",
      text:
        "PyTorch uses nn.Parameter to indicate that a tensor is a trainable parameter belonging to a module.",
    },

    {
      type: "heading",
      level: 2,
      text: "7. Custom Linear Layer",
    },

    {
      type: "paragraph",
      text:
        "A fully connected layer can be implemented manually using a weight matrix and bias vector.",
    },

    {
      type: "formula",
      label: "Custom Linear Transformation",
      formula: "Y = XW + b",
    },

    {
      type: "code",
      language: "python",
      title: "Custom Linear Layer",
      code: `import torch
from torch import nn

class MyLinear(nn.Module):
    def __init__(
        self,
        in_units,
        out_units
    ):
        super().__init__()

        self.weight = nn.Parameter(
            torch.randn(
                in_units,
                out_units
            )
        )

        self.bias = nn.Parameter(
            torch.randn(out_units)
        )

    def forward(self, X):
        return torch.matmul(
            X,
            self.weight
        ) + self.bias`,
    },

    {
      type: "heading",
      level: 2,
      text: "8. Using the Custom Linear Layer",
    },

    {
      type: "code",
      language: "python",
      title: "Instantiate Custom Linear",
      code: `linear = MyLinear(
    in_units=5,
    out_units=3
)

X = torch.rand(2, 5)

Y = linear(X)

print(Y.shape)`,
    },

    {
      type: "paragraph",
      text:
        "The input has five features and the layer produces three output features. Therefore the output shape is two by three for a batch containing two examples.",
    },

    {
      type: "heading",
      level: 2,
      text: "9. Inspecting Custom Parameters",
    },

    {
      type: "code",
      language: "python",
      title: "Inspect Parameters",
      code: `print(linear.weight)
print(linear.bias)

for name, parameter in linear.named_parameters():
    print(name, parameter.shape)`,
    },

    {
      type: "paragraph",
      text:
        "Because weight and bias are nn.Parameter objects assigned to the module, PyTorch registers them as trainable parameters.",
    },

    {
      type: "heading",
      level: 2,
      text: "10. Why nn.Parameter Matters",
    },

    {
      type: "paragraph",
      text:
        "A normal tensor assigned to a module is not automatically treated in the same way as a registered trainable parameter. nn.Parameter communicates that the tensor belongs to the learnable parameter set.",
    },

    {
      type: "code",
      language: "python",
      title: "Parameter Registration",
      code: `parameter = nn.Parameter(
    torch.randn(10, 5)
)

print(parameter.requires_grad)`,
    },

    {
      type: "heading",
      level: 2,
      text: "11. Custom Layer With Activation",
    },

    {
      type: "paragraph",
      text:
        "A custom layer can also combine a parameterized transformation with an activation function.",
    },

    {
      type: "code",
      language: "python",
      title: "Custom Linear + ReLU",
      code: `import torch.nn.functional as F

class MyLinearReLU(nn.Module):
    def __init__(
        self,
        in_units,
        out_units
    ):
        super().__init__()

        self.weight = nn.Parameter(
            torch.randn(
                in_units,
                out_units
            )
        )

        self.bias = nn.Parameter(
            torch.zeros(out_units)
        )

    def forward(self, X):
        Y = torch.matmul(
            X,
            self.weight
        ) + self.bias

        return F.relu(Y)`,
    },

    {
      type: "heading",
      level: 2,
      text: "12. Building a Network From Custom Layers",
    },

    {
      type: "code",
      language: "python",
      title: "Custom Network",
      code: `net = nn.Sequential(
    MyLinearReLU(64, 32),
    MyLinearReLU(32, 16),
    nn.Linear(16, 10)
)

X = torch.randn(8, 64)

output = net(X)

print(output.shape)`,
    },

    {
      type: "paragraph",
      text:
        "The custom layers can be used alongside built-in layers. This is one of the major advantages of following the framework's module interface.",
    },

    {
      type: "heading",
      level: 2,
      text: "13. Custom Layer Initialization",
    },

    {
      type: "paragraph",
      text:
        "Custom layers should also initialize their parameters carefully. Randomly initializing weights with an uncontrolled scale can create numerical problems.",
    },

    {
      type: "code",
      language: "python",
      title: "Improved Custom Initialization",
      code: `class BetterLinear(nn.Module):
    def __init__(
        self,
        in_units,
        out_units
    ):
        super().__init__()

        self.weight = nn.Parameter(
            torch.empty(
                in_units,
                out_units
            )
        )

        self.bias = nn.Parameter(
            torch.zeros(out_units)
        )

        nn.init.xavier_uniform_(
            self.weight
        )

    def forward(self, X):
        return torch.matmul(
            X,
            self.weight
        ) + self.bias`,
    },

    {
      type: "heading",
      level: 2,
      text: "14. Custom Layers and Autograd",
    },

    {
      type: "paragraph",
      text:
        "Custom layers normally work automatically with PyTorch autograd as long as their forward computation uses differentiable tensor operations.",
    },

    {
      type: "code",
      language: "python",
      title: "Gradient Through Custom Layer",
      code: `layer = BetterLinear(4, 2)

X = torch.randn(
    3,
    4,
    requires_grad=True
)

Y = layer(X)

loss = Y.square().mean()

loss.backward()

print(layer.weight.grad)
print(layer.bias.grad)`,
    },

    {
      type: "paragraph",
      text:
        "Autograd tracks the tensor operations used in forward propagation and calculates gradients for trainable parameters during backward propagation.",
    },

    {
      type: "heading",
      level: 2,
      text: "15. Shape Validation",
    },

    {
      type: "paragraph",
      text:
        "Custom layers should be designed with input and output shapes in mind. Shape errors are among the most common problems when implementing custom neural-network components.",
    },

    {
      type: "code",
      language: "python",
      title: "Explicit Shape Check",
      code: `class CheckedLinear(nn.Module):
    def __init__(
        self,
        in_units,
        out_units
    ):
        super().__init__()

        self.in_units = in_units

        self.weight = nn.Parameter(
            torch.randn(
                in_units,
                out_units
            )
        )

        self.bias = nn.Parameter(
            torch.zeros(out_units)
        )

    def forward(self, X):
        if X.shape[-1] != self.in_units:
            raise ValueError(
                f"Expected {self.in_units} "
                f"features, got {X.shape[-1]}"
            )

        return X @ self.weight + self.bias`,
    },

    {
      type: "heading",
      level: 2,
      text: "16. Custom Layers Without Trainable Parameters",
    },

    {
      type: "paragraph",
      text:
        "Not every layer needs learnable weights. Some useful layers perform deterministic transformations.",
    },

    {
      type: "code",
      language: "python",
      title: "Scaling Layer",
      code: `class ScalingLayer(nn.Module):
    def __init__(self, scale):
        super().__init__()

        self.scale = scale

    def forward(self, X):
        return X * self.scale`,
    },

    {
      type: "heading",
      level: 2,
      text: "17. Custom Normalization-Like Layer",
    },

    {
      type: "code",
      language: "python",
      title: "Simple Standardization Layer",
      code: `class StandardizeLayer(nn.Module):
    def __init__(self, eps=1e-5):
        super().__init__()

        self.eps = eps

    def forward(self, X):
        mean = X.mean(dim=-1, keepdim=True)
        std = X.std(
            dim=-1,
            keepdim=True
        )

        return (X - mean) / (
            std + self.eps
        )`,
    },

    {
      type: "paragraph",
      text:
        "This is an educational example of a custom transformation. Production normalization layers often have more sophisticated behavior and state management.",
    },

    {
      type: "heading",
      level: 2,
      text: "18. Custom Layers and Model Design",
    },

    {
      type: "paragraph",
      text:
        "A custom layer should have a clear responsibility. Instead of placing an entire model inside one custom layer, isolate a meaningful computational unit that can be tested and reused.",
    },

    {
      type: "process",
      title: "Designing a Custom Layer",
      steps: [
        "Define exactly what transformation the layer performs.",
        "Determine whether it needs trainable parameters.",
        "Define the expected input shape.",
        "Define the expected output shape.",
        "Implement __init__.",
        "Implement forward.",
        "Initialize parameters carefully.",
        "Test forward propagation.",
        "Test backward propagation.",
        "Integrate into a larger model.",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "19. Testing a Custom Layer",
    },

    {
      type: "code",
      language: "python",
      title: "Basic Layer Test",
      code: `layer = MyLinear(5, 3)

X = torch.randn(4, 5)

Y = layer(X)

assert Y.shape == (4, 3)

loss = Y.mean()

loss.backward()

assert layer.weight.grad is not None
assert layer.bias.grad is not None

print("Layer test passed")`,
    },

    {
      type: "heading",
      level: 2,
      text: "20. Complete Custom Network",
    },

    {
      type: "code",
      language: "python",
      title: "Complete Example",
      code: `import torch
from torch import nn
import torch.nn.functional as F


class CustomDense(nn.Module):
    def __init__(
        self,
        in_features,
        out_features
    ):
        super().__init__()

        self.weight = nn.Parameter(
            torch.empty(
                in_features,
                out_features
            )
        )

        self.bias = nn.Parameter(
            torch.zeros(out_features)
        )

        nn.init.xavier_uniform_(
            self.weight
        )

    def forward(self, X):
        return X @ self.weight + self.bias


class CustomMLP(nn.Module):
    def __init__(self):
        super().__init__()

        self.layer1 = CustomDense(
            784,
            256
        )

        self.layer2 = CustomDense(
            256,
            128
        )

        self.output = CustomDense(
            128,
            10
        )

    def forward(self, X):
        X = F.relu(
            self.layer1(X)
        )

        X = F.relu(
            self.layer2(X)
        )

        return self.output(X)


model = CustomMLP()

X = torch.randn(
    32,
    784
)

output = model(X)

print(output.shape)

loss = output.mean()

loss.backward()

for name, parameter in model.named_parameters():
    print(
        name,
        parameter.shape,
        parameter.grad is not None
    )`,
    },

    {
      type: "heading",
      level: 2,
      text: "21. Custom Layer Debugging",
    },

    {
      type: "table",
      headers: ["Problem", "Likely Cause"],
      rows: [
        [
          "Parameter missing",
          "Tensor was not registered as nn.Parameter",
        ],
        [
          "Shape mismatch",
          "Input/output dimensions are inconsistent",
        ],
        [
          "No gradient",
          "Computation may not be connected to the loss",
        ],
        [
          "Unstable training",
          "Poor parameter initialization or numerical scale",
        ],
        [
          "Wrong output",
          "Forward computation is incorrect",
        ],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "22. Common Mistakes",
    },

    {
      type: "bullets",
      items: [
        "Forgetting super().__init__().",
        "Using ordinary tensors instead of nn.Parameter for trainable parameters.",
        "Incorrect matrix dimensions.",
        "Performing operations that accidentally detach tensors from autograd.",
        "Failing to test gradients.",
        "Using poor initialization.",
        "Creating overly complicated custom layers instead of reusable small components.",
      ],
    },

    {
      type: "question",
      question: "What is a custom layer?",
      answer:
        "It is a user-defined module that performs a specific transformation and can optionally contain trainable parameters.",
    },

    {
      type: "question",
      question: "Can a custom layer have no parameters?",
      answer:
        "Yes. A layer can perform a deterministic transformation without containing trainable parameters.",
    },

    {
      type: "question",
      question: "What is nn.Parameter?",
      answer:
        "It is a tensor type used to register a trainable parameter inside an nn.Module.",
    },

    {
      type: "question",
      question: "Will autograd work with custom layers?",
      answer:
        "Yes, provided the forward computation uses differentiable tensor operations and the trainable parameters are correctly registered.",
    },

    {
      type: "codingTask",
      title: "Create a Centered Layer",
      task:
        "Implement a custom layer that subtracts the mean of its input. Verify that the output mean is approximately zero.",
    },

    {
      type: "codingTask",
      title: "Build CustomLinear",
      task:
        "Implement a trainable fully connected layer using nn.Parameter for the weight and bias. Test forward propagation and gradients.",
    },

    {
      type: "codingTask",
      title: "Build a Custom MLP",
      task:
        "Create an MLP using only your custom trainable layers and ReLU operations. Compare its parameter count with an equivalent nn.Linear implementation.",
    },

    {
      type: "debuggingTask",
      title: "Missing Gradient Debugging",
      task:
        "Create a custom layer whose weight is accidentally stored as a normal tensor. Inspect model.named_parameters() and determine why the optimizer cannot update that weight.",
    },

    {
      type: "heading",
      level: 2,
      text: "23. Mini Project",
    },

    {
      type: "paragraph",
      text:
        "Build a small neural network using at least two custom layers. One layer should have trainable parameters and another should perform a deterministic transformation. Train the model on a simple classification dataset.",
    },

    {
      type: "process",
      title: "Mini Project Steps",
      steps: [
        "Define a custom parameter-free layer.",
        "Define a custom parameterized layer.",
        "Test each layer independently.",
        "Compose the layers into a model.",
        "Inspect registered parameters.",
        "Run a forward pass.",
        "Run backpropagation.",
        "Train the model.",
        "Evaluate the final model.",
      ],
    },

    {
      type: "summary",
      title: "Lesson Summary",
      points: [
        "Custom layers allow developers to implement operations not provided directly by the framework.",
        "A custom layer can have no parameters or trainable parameters.",
        "Custom layers inherit from nn.Module.",
        "The forward method defines the computation.",
        "Trainable tensors should be registered using nn.Parameter.",
        "Custom layers normally work with automatic differentiation.",
        "Initialization remains important for custom trainable layers.",
        "Shape and gradient testing should be part of custom-layer development.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Once you understand custom layers, you move from simply using a deep-learning framework to extending it. This is an essential skill for implementing research architectures, specialized operations, and production-specific model components.",
    },
  ],
};

export default lesson14;