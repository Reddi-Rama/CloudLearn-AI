const lesson13 = {
  id: "lesson13",
  number: 13,
  title: "Layers and Modules",
  module: "Neural Networks and Learning",
  description:
    "Understand how modern deep-learning frameworks organize neural networks using layers, modules, sequential blocks, parameters, and forward propagation.",

  content: [
    {
      type: "heading",
      level: 1,
      text: "Layers and Modules",
    },

    {
      type: "paragraph",
      text:
        "As neural networks become larger, writing every mathematical operation manually becomes difficult to maintain. Deep-learning frameworks solve this problem by organizing computation into reusable components called layers and modules.",
    },

    {
      type: "paragraph",
      text:
        "A layer receives input, performs a transformation, produces output, and may contain trainable parameters. A module can represent a layer, a group of layers, or an entire model.",
    },

    {
      type: "keyTakeaway",
      title: "Core Idea",
      text:
        "Layers and modules provide reusable building blocks for constructing neural networks. They allow complex architectures to be composed from smaller, testable components.",
    },

    {
      type: "heading",
      level: 2,
      text: "1. What Is a Layer?",
    },

    {
      type: "paragraph",
      text:
        "A layer is a computation that transforms one representation into another.",
    },

    {
      type: "formula",
      label: "Generic Layer",
      formula: "Y = f(X; θ)",
    },

    {
      type: "paragraph",
      text:
        "Here X is the input, Y is the output, f is the transformation, and θ represents any trainable parameters owned by the layer.",
    },

    {
      type: "heading",
      level: 2,
      text: "2. Fully Connected Layer",
    },

    {
      type: "formula",
      label: "Linear Layer",
      formula: "Y = XW + b",
    },

    {
      type: "paragraph",
      text:
        "A fully connected layer contains a weight matrix and usually a bias vector. During training these parameters receive gradients and are updated by the optimizer.",
    },

    {
      type: "code",
      language: "python",
      title: "Creating a Linear Layer",
      code: `from torch import nn

layer = nn.Linear(
    in_features=128,
    out_features=64
)

print(layer.weight.shape)
print(layer.bias.shape)`,
    },

    {
      type: "heading",
      level: 2,
      text: "3. Layer as a Reusable Component",
    },

    {
      type: "paragraph",
      text:
        "Instead of repeatedly writing matrix multiplication and bias addition, we can instantiate a layer and call it with input data.",
    },

    {
      type: "code",
      language: "python",
      title: "Using a Layer",
      code: `import torch

layer = nn.Linear(4, 3)

X = torch.randn(5, 4)

Y = layer(X)

print(Y.shape)`,
    },

    {
      type: "heading",
      level: 2,
      text: "4. What Is a Module?",
    },

    {
      type: "paragraph",
      text:
        "In PyTorch, nn.Module is the fundamental abstraction used to represent neural-network components. Layers are modules, but modules can also contain multiple layers.",
    },

    {
      type: "paragraph",
      text:
        "This creates a hierarchy. A model can contain modules, modules can contain layers, and layers can contain parameters.",
    },

    {
      type: "process",
      title: "Neural Network Hierarchy",
      steps: [
        "Model",
        "Module or block",
        "Layer",
        "Parameter",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "5. Building a Sequential Network",
    },

    {
      type: "code",
      language: "python",
      title: "Sequential Model",
      code: `model = nn.Sequential(
    nn.Linear(784, 256),
    nn.ReLU(),
    nn.Linear(256, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)`,
    },

    {
      type: "paragraph",
      text:
        "Sequential composition is useful when data simply flows through one layer after another.",
    },

    {
      type: "formula",
      label: "Sequential Computation",
      formula: "X → Layer₁ → Activation → Layer₂ → Activation → Output",
    },

    {
      type: "heading",
      level: 2,
      text: "6. Why Modules Matter for Large Networks",
    },

    {
      type: "paragraph",
      text:
        "Large architectures often contain repeated patterns. Instead of defining hundreds of individual layers manually, developers can define a reusable block and instantiate it multiple times.",
    },

    {
      type: "paragraph",
      text:
        "This becomes especially useful in convolutional architectures, residual networks, transformers, and other architectures composed from repeated computational structures.",
    },

    {
      type: "heading",
      level: 2,
      text: "7. Creating a Custom Module",
    },

    {
      type: "code",
      language: "python",
      title: "Simple Custom Module",
      code: `import torch
from torch import nn

class MyBlock(nn.Module):
    def __init__(self):
        super().__init__()

        self.layer = nn.Linear(
            128,
            64
        )

        self.activation = nn.ReLU()

    def forward(self, X):
        X = self.layer(X)
        X = self.activation(X)
        return X`,
    },

    {
      type: "paragraph",
      text:
        "The __init__ method defines the components. The forward method describes how data flows through those components.",
    },

    {
      type: "heading",
      level: 2,
      text: "8. The Forward Method",
    },

    {
      type: "paragraph",
      text:
        "The forward method describes the computation performed when the module receives input.",
    },

    {
      type: "formula",
      label: "Forward Computation",
      formula: "output = forward(input)",
    },

    {
      type: "code",
      language: "python",
      title: "Calling a Custom Module",
      code: `block = MyBlock()

X = torch.randn(16, 128)

Y = block(X)

print(Y.shape)`,
    },

    {
      type: "heading",
      level: 2,
      text: "9. Modules Automatically Track Parameters",
    },

    {
      type: "paragraph",
      text:
        "When trainable layers are assigned as attributes of an nn.Module, PyTorch can discover their parameters automatically.",
    },

    {
      type: "code",
      language: "python",
      title: "Inspecting Module Parameters",
      code: `for name, parameter in block.named_parameters():
    print(name, parameter.shape)`,
    },

    {
      type: "paragraph",
      text:
        "This automatic parameter registration is one of the major reasons module-based model construction is useful.",
    },

    {
      type: "heading",
      level: 2,
      text: "10. Nested Modules",
    },

    {
      type: "code",
      language: "python",
      title: "Nested Network",
      code: `class Network(nn.Module):
    def __init__(self):
        super().__init__()

        self.block1 = MyBlock()
        self.block2 = MyBlock()

        self.output = nn.Linear(
            64,
            10
        )

    def forward(self, X):
        X = self.block1(X)
        X = self.block2(X)
        return self.output(X)

model = Network()`,
    },

    {
      type: "paragraph",
      text:
        "Here Network contains two MyBlock objects and a final linear layer. Each block contains its own parameters.",
    },

    {
      type: "heading",
      level: 2,
      text: "11. Sequential Inside a Custom Module",
    },

    {
      type: "code",
      language: "python",
      title: "Using Sequential Internally",
      code: `class MLP(nn.Module):
    def __init__(self):
        super().__init__()

        self.net = nn.Sequential(
            nn.Linear(784, 256),
            nn.ReLU(),
            nn.Linear(256, 10)
        )

    def forward(self, X):
        return self.net(X)`,
    },

    {
      type: "heading",
      level: 2,
      text: "12. Modules With Control Flow",
    },

    {
      type: "paragraph",
      text:
        "Custom modules become particularly useful when the computation is not simply a fixed sequential chain. Python control flow can be used inside forward to implement dynamic computation.",
    },

    {
      type: "code",
      language: "python",
      title: "Conditional Computation",
      code: `class ConditionalBlock(nn.Module):
    def __init__(self):
        super().__init__()

        self.layer = nn.Linear(
            128,
            128
        )

    def forward(self, X):
        Y = self.layer(X)

        if Y.mean() > 0:
            return torch.relu(Y)

        return -torch.relu(-Y)`,
    },

    {
      type: "paragraph",
      text:
        "This illustrates why custom modules are more expressive than a purely sequential representation.",
    },

    {
      type: "heading",
      level: 2,
      text: "13. Modules and Parameter Sharing",
    },

    {
      type: "paragraph",
      text:
        "The same module object can be used multiple times. When the same module is reused, its parameters are shared rather than duplicated.",
    },

    {
      type: "code",
      language: "python",
      title: "Shared Module",
      code: `shared = nn.Linear(128, 128)

class SharedNetwork(nn.Module):
    def __init__(self):
        super().__init__()

        self.shared = shared
        self.output = nn.Linear(128, 10)

    def forward(self, X):
        X = self.shared(X)
        X = torch.relu(X)

        X = self.shared(X)
        X = torch.relu(X)

        return self.output(X)`,
    },

    {
      type: "paragraph",
      text:
        "Both uses of self.shared refer to the same parameter tensors. This is different from creating two separate Linear objects.",
    },

    {
      type: "heading",
      level: 2,
      text: "14. Why Parameter Sharing Matters",
    },

    {
      type: "paragraph",
      text:
        "Parameter sharing can reduce the number of trainable parameters and can encode useful structural assumptions. It is important in several architectures, particularly when the same computation should be applied repeatedly.",
    },

    {
      type: "heading",
      level: 2,
      text: "15. Module Inspection",
    },

    {
      type: "code",
      language: "python",
      title: "Inspect Model Structure",
      code: `print(model)

print("\\nNamed modules:")

for name, module in model.named_modules():
    print(name, "->", type(module).__name__)`,
    },

    {
      type: "heading",
      level: 2,
      text: "16. Module Parameters and Optimizers",
    },

    {
      type: "paragraph",
      text:
        "The optimizer receives the model parameters and updates them after backpropagation.",
    },

    {
      type: "code",
      language: "python",
      title: "Optimizer With Module Parameters",
      code: `optimizer = torch.optim.Adam(
    model.parameters(),
    lr=1e-3
)`,
    },

    {
      type: "heading",
      level: 2,
      text: "17. Model State",
    },

    {
      type: "paragraph",
      text:
        "A module contains more than just trainable parameters. Some modules also maintain buffers or state that should be saved and restored with the model.",
    },

    {
      type: "paragraph",
      text:
        "This module-based state management becomes important when saving models, moving models between devices, or switching between training and evaluation modes.",
    },

    {
      type: "heading",
      level: 2,
      text: "18. Training and Evaluation Modes",
    },

    {
      type: "code",
      language: "python",
      title: "Changing Module Mode",
      code: `model.train()

# Training code
# ...

model.eval()

with torch.no_grad():
    predictions = model(X)`,
    },

    {
      type: "paragraph",
      text:
        "Some modules behave differently during training and evaluation. Dropout is one example. Batch normalization is another.",
    },

    {
      type: "heading",
      level: 2,
      text: "19. Building Reusable Blocks",
    },

    {
      type: "paragraph",
      text:
        "A good software design principle is to isolate repeated architectural patterns into modules. A reusable block can then be tested independently and composed into larger models.",
    },

    {
      type: "process",
      title: "Reusable Module Design",
      steps: [
        "Identify a repeated computation.",
        "Create an nn.Module subclass.",
        "Define trainable components in __init__.",
        "Implement data flow in forward.",
        "Test the module with sample tensors.",
        "Inspect shapes and parameters.",
        "Compose the module into a larger network.",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "20. Complete Example",
    },

    {
      type: "code",
      language: "python",
      title: "Reusable MLP Block",
      code: `import torch
from torch import nn

class MLPBlock(nn.Module):
    def __init__(
        self,
        in_features,
        hidden_features,
        out_features
    ):
        super().__init__()

        self.net = nn.Sequential(
            nn.Linear(
                in_features,
                hidden_features
            ),
            nn.ReLU(),
            nn.Linear(
                hidden_features,
                out_features
            )
        )

    def forward(self, X):
        return self.net(X)


class Classifier(nn.Module):
    def __init__(self):
        super().__init__()

        self.block = MLPBlock(
            784,
            256,
            128
        )

        self.classifier = nn.Linear(
            128,
            10
        )

    def forward(self, X):
        X = self.block(X)
        return self.classifier(X)


model = Classifier()

X = torch.randn(32, 784)

output = model(X)

print(output.shape)`,
    },

    {
      type: "heading",
      level: 2,
      text: "21. Common Mistakes",
    },

    {
      type: "bullets",
      items: [
        "Forgetting to call super().__init__() in a custom module.",
        "Creating trainable layers without registering them as module attributes.",
        "Using two separate modules when parameter sharing was intended.",
        "Returning tensors with unexpected shapes from forward.",
        "Forgetting model.eval() during evaluation.",
        "Writing enormous models as one giant forward method instead of reusable blocks.",
      ],
    },

    {
      type: "question",
      question: "What is an nn.Module?",
      answer:
        "It is PyTorch's fundamental abstraction for building neural-network components. It can contain layers, parameters, buffers, and other modules.",
    },

    {
      type: "question",
      question: "What does forward() define?",
      answer:
        "It defines how input data is transformed into output by the module.",
    },

    {
      type: "question",
      question: "Why are modules useful?",
      answer:
        "They allow complex networks to be organized into reusable, composable, and independently testable components.",
    },

    {
      type: "question",
      question: "What is parameter sharing?",
      answer:
        "It occurs when the same parameterized module is reused in multiple parts of a computation.",
    },

    {
      type: "codingTask",
      title: "Build Your Own Block",
      task:
        "Create a custom module containing two Linear layers and a ReLU activation. Test its input and output shapes and inspect its registered parameters.",
    },

    {
      type: "codingTask",
      title: "Build a Reusable Classifier",
      task:
        "Create an MLPBlock class and reuse it twice inside a larger classifier. Print the complete module hierarchy.",
    },

    {
      type: "debuggingTask",
      title: "Missing Parameters",
      task:
        "Create a custom network and inspect model.parameters(). If some expected parameters are missing, investigate how the layers were stored inside the module.",
    },

    {
      type: "summary",
      title: "Lesson Summary",
      points: [
        "Layers transform inputs into outputs and may contain trainable parameters.",
        "nn.Module is the fundamental building block for PyTorch neural networks.",
        "Sequential models are useful for straightforward layer-by-layer computation.",
        "Custom modules allow developers to implement reusable architecture blocks.",
        "The forward method defines the computation performed by a module.",
        "Modules can contain other modules.",
        "The same module can be reused to share parameters.",
        "Module-based design makes large neural networks easier to construct and maintain.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Professional deep-learning systems are built from reusable components rather than one giant mathematical expression. Understanding layers and modules is essential for implementing architectures beyond simple sequential networks.",
    },
  ],
};

export default lesson13;