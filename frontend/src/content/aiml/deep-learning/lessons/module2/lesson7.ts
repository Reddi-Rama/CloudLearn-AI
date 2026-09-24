const lesson = {
  id: "lesson7",
  title: "Multilayer Perceptrons",
  module: "Neural Networks and Learning",
  course: "Deep Learning & Computer Vision",

  sections: [
    {
      type: "heading",
      title: "1. Introduction to Multilayer Perceptrons",
    },

    {
      type: "paragraph",
      text:
        "A multilayer perceptron, commonly called an MLP, is a neural network built by combining linear transformations with nonlinear activation functions. An MLP normally contains an input representation, one or more hidden layers, and an output layer.",
    },

    {
      type: "paragraph",
      text:
        "MLPs are one of the most important conceptual foundations of deep learning. Many more advanced architectures can be understood by recognizing the same basic pattern: transform a representation, apply nonlinear processing, and repeat the process.",
    },

    {
      type: "keyTakeaway",
      title: "Core Idea",
      text:
        "An MLP learns increasingly useful representations by stacking parameterized transformations and nonlinear activation functions.",
    },

    {
      type: "heading",
      title: "2. From Linear Regression to Neural Networks",
    },

    {
      type: "paragraph",
      text:
        "A linear model can be written as a matrix transformation followed by a bias:",
    },

    {
      type: "formula",
      formula: "O = XW + b",
    },

    {
      type: "paragraph",
      text:
        "This transformation can learn useful relationships, but it is still linear or affine in the input.",
    },

    {
      type: "heading",
      title: "3. Why Multiple Linear Layers Are Not Enough",
    },

    {
      type: "paragraph",
      text:
        "It may seem that adding many linear layers would automatically create a deep nonlinear model. However, stacking linear transformations without nonlinearities does not fundamentally increase the class of functions the network can represent.",
    },

    {
      type: "formula",
      formula: "O = (XW₁ + b₁)W₂ + b₂",
    },

    {
      type: "paragraph",
      text:
        "The expression can be rearranged into another affine transformation of X. Therefore, multiple linear layers without nonlinear activation can effectively collapse into one linear transformation.",
    },

    {
      type: "formula",
      formula: "O = X(W₁W₂) + (b₁W₂ + b₂)",
    },

    {
      type: "keyTakeaway",
      title: "Critical Insight",
      text:
        "Depth alone does not make a network nonlinear. Nonlinear activation functions are the essential ingredient that gives MLPs additional expressive power.",
    },

    {
      type: "heading",
      title: "4. Hidden Layers",
    },

    {
      type: "paragraph",
      text:
        "A hidden layer is an internal layer whose activations are not directly specified as target labels in the training dataset. It transforms the representation produced by the previous layer.",
    },

    {
      type: "formula",
      formula: "H = σ(XW₁ + b₁)",
    },

    {
      type: "paragraph",
      text:
        "The hidden representation H becomes the input to the next layer.",
    },

    {
      type: "heading",
      title: "5. What Does a Hidden Layer Learn?",
    },

    {
      type: "paragraph",
      text:
        "A hidden layer learns a representation that helps the final task. The network does not normally receive explicit instructions saying what each hidden neuron should represent. Instead, parameter optimization determines useful internal representations from the training objective.",
    },

    {
      type: "paragraph",
      text:
        "For image data, an MLP might learn combinations of pixel values. In deeper architectures, different layers can progressively transform simple patterns into more complex representations.",
    },

    {
      type: "heading",
      title: "6. Neurons and Parameters",
    },

    {
      type: "paragraph",
      text:
        "A neuron receives several input values, multiplies them by learned weights, adds a bias, and applies an activation function.",
    },

    {
      type: "formula",
      formula: "z = x₁w₁ + x₂w₂ + ... + xₙwₙ + b",
    },

    {
      type: "formula",
      formula: "h = σ(z)",
    },

    {
      type: "paragraph",
      text:
        "The weights determine how strongly different inputs contribute to the neuron, while the bias shifts the activation before the nonlinear function is applied.",
    },

    {
      type: "heading",
      title: "7. Matrix Form of a Hidden Layer",
    },

    {
      type: "paragraph",
      text:
        "For a minibatch, it is much more efficient to calculate all neurons using matrix operations.",
    },

    {
      type: "formula",
      formula: "H = σ(XW + b)",
    },

    {
      type: "paragraph",
      text:
        "Matrix operations allow modern hardware such as GPUs to process many examples and neurons simultaneously.",
    },

    {
      type: "heading",
      title: "8. Activation Functions",
    },

    {
      type: "paragraph",
      text:
        "An activation function transforms the output of a linear operation. Its most important role in an MLP is to introduce nonlinearity.",
    },

    {
      type: "paragraph",
      text:
        "Without activation functions, a deep stack of linear transformations can be collapsed into a single linear transformation.",
    },

    {
      type: "heading",
      title: "9. ReLU",
    },

    {
      type: "paragraph",
      text:
        "The Rectified Linear Unit, or ReLU, is one of the most widely used activation functions in neural networks.",
    },

    {
      type: "formula",
      formula: "ReLU(x) = max(x, 0)",
    },

    {
      type: "paragraph",
      text:
        "Positive values pass through unchanged, while negative values become zero.",
    },

    {
      type: "code",
      language: "python",
      title: "ReLU Example",
      code: `import torch

x = torch.tensor([
    -3.0,
    -1.0,
    0.0,
    2.0,
    5.0
])

y = torch.relu(x)

print(y)`,
    },

    {
      type: "output",
      title: "Expected Output",
      code: `tensor([0., 0., 0., 2., 5.])`,
    },

    {
      type: "heading",
      title: "10. ReLU Derivative",
    },

    {
      type: "paragraph",
      text:
        "Away from the point x = 0, the derivative of ReLU is 0 for negative inputs and 1 for positive inputs.",
    },

    {
      type: "formula",
      formula: "ReLU'(x) = 0 if x < 0, and 1 if x > 0",
    },

    {
      type: "paragraph",
      text:
        "This simple derivative contributes to ReLU's usefulness in optimization. However, neurons that remain in the negative region can receive zero gradient through the ReLU operation.",
    },

    {
      type: "heading",
      title: "11. Sigmoid",
    },

    {
      type: "paragraph",
      text:
        "The sigmoid function maps real-valued inputs into the interval from 0 to 1.",
    },

    {
      type: "formula",
      formula: "σ(x) = 1 / (1 + exp(-x))",
    },

    {
      type: "paragraph",
      text:
        "The sigmoid function is useful when an output needs to be interpreted as a value between zero and one, including binary probability-style outputs.",
    },

    {
      type: "paragraph",
      text:
        "However, its derivative becomes very small when the input has a large positive or negative magnitude. This can contribute to vanishing gradients in deep networks.",
    },

    {
      type: "heading",
      title: "12. Tanh",
    },

    {
      type: "paragraph",
      text:
        "The hyperbolic tangent function maps real-valued inputs approximately into the interval from -1 to 1.",
    },

    {
      type: "formula",
      formula: "tanh(x) = (exp(x) - exp(-x)) / (exp(x) + exp(-x))",
    },

    {
      type: "paragraph",
      text:
        "Like sigmoid, tanh can suffer from small derivatives when its input moves far from zero.",
    },

    {
      type: "heading",
      title: "13. Comparing Common Activations",
    },

    {
      type: "table",
      headers: ["Activation", "Output Range", "Typical Property"],
      rows: [
        ["ReLU", "0 to positive infinity", "Simple and widely used in hidden layers"],
        ["Sigmoid", "0 to 1", "Useful for probability-style binary outputs"],
        ["Tanh", "-1 to 1", "Zero-centered nonlinear activation"],
      ],
    },

    {
      type: "heading",
      title: "14. One-Hidden-Layer MLP",
    },

    {
      type: "paragraph",
      text:
        "A simple MLP can contain an input, a hidden layer, an activation function, and an output layer.",
    },

    {
      type: "formula",
      formula: "H = ReLU(XW₁ + b₁)",
    },

    {
      type: "formula",
      formula: "O = HW₂ + b₂",
    },

    {
      type: "paragraph",
      text:
        "The first layer learns a transformation of the input. ReLU introduces nonlinearity. The second layer maps the hidden representation to the required output space.",
    },

    {
      type: "heading",
      title: "15. Multiple Hidden Layers",
    },

    {
      type: "paragraph",
      text:
        "More hidden layers can be stacked to create deeper networks.",
    },

    {
      type: "formula",
      formula: "H₁ = σ₁(XW₁ + b₁)",
    },

    {
      type: "formula",
      formula: "H₂ = σ₂(H₁W₂ + b₂)",
    },

    {
      type: "formula",
      formula: "O = H₂W₃ + b₃",
    },

    {
      type: "paragraph",
      text:
        "Each layer receives the representation produced by the preceding layer.",
    },

    {
      type: "heading",
      title: "16. Representation Hierarchy",
    },

    {
      type: "paragraph",
      text:
        "One useful way to understand deep networks is as a sequence of representation transformations. Earlier layers transform raw input into intermediate features, while later layers combine those features into representations useful for the final prediction.",
    },

    {
      type: "formula",
      formula: "Raw Data → Representation 1 → Representation 2 → Prediction",
    },

    {
      type: "heading",
      title: "17. Parameter Counting",
    },

    {
      type: "paragraph",
      text:
        "Suppose a linear layer has d input features and h output units. The weight matrix contains d × h values. The bias contains h values.",
    },

    {
      type: "formula",
      formula: "Number of Parameters = d × h + h",
    },

    {
      type: "paragraph",
      text:
        "For example, a layer with 784 inputs and 128 outputs contains 784 × 128 weights and 128 biases.",
    },

    {
      type: "formula",
      formula: "784 × 128 + 128 = 100480",
    },

    {
      type: "heading",
      title: "18. Tensor Shapes Through an MLP",
    },

    {
      type: "paragraph",
      text:
        "Suppose a batch contains 32 flattened images, each with 784 features. The input tensor has shape 32 × 784. If the hidden layer contains 128 units, the hidden representation has shape 32 × 128.",
    },

    {
      type: "formula",
      formula: "32 × 784 → 32 × 128 → 32 × 10",
    },

    {
      type: "paragraph",
      text:
        "The final dimension becomes ten when the task contains ten output classes.",
    },

    {
      type: "heading",
      title: "19. Building an MLP in PyTorch",
    },

    {
      type: "code",
      language: "python",
      title: "Basic MLP",
      code: `import torch
from torch import nn

model = nn.Sequential(
    nn.Flatten(),
    nn.Linear(784, 256),
    nn.ReLU(),
    nn.Linear(256, 10)
)

X = torch.randn(32, 1, 28, 28)

output = model(X)

print(output.shape)`,
    },

    {
      type: "output",
      title: "Expected Output",
      code: `torch.Size([32, 10])`,
    },

    {
      type: "paragraph",
      text:
        "The Flatten layer converts each 1 × 28 × 28 image into 784 features. The first linear layer maps those features to 256 hidden units. ReLU introduces nonlinearity. The final linear layer produces ten class scores.",
    },

    {
      type: "heading",
      title: "20. Understanding nn.Sequential",
    },

    {
      type: "paragraph",
      text:
        "The Sequential container allows layers to be arranged as a pipeline. The output of one layer automatically becomes the input to the next layer.",
    },

    {
      type: "formula",
      formula: "Layer 1 → Layer 2 → Layer 3 → Layer 4",
    },

    {
      type: "paragraph",
      text:
        "This makes simple feedforward architectures concise and easier to modify.",
    },

    {
      type: "heading",
      title: "21. Inspecting Parameters",
    },

    {
      type: "code",
      language: "python",
      title: "Inspecting Trainable Parameters",
      code: `for name, parameter in model.named_parameters():
    print(name, parameter.shape)`,
    },

    {
      type: "paragraph",
      text:
        "Parameter inspection is an important debugging skill. If the expected layer does not appear or has an unexpected shape, the architecture may not match the intended design.",
    },

    {
      type: "heading",
      title: "22. Training an MLP",
    },

    {
      type: "paragraph",
      text:
        "Training an MLP follows the same basic machine learning cycle used by the models studied earlier.",
    },

    {
      type: "process",
      title: "MLP Training Process",
      steps: [
        "Load a minibatch",
        "Run the input through the network",
        "Calculate the loss",
        "Calculate gradients",
        "Update model parameters",
        "Repeat for all minibatches",
        "Repeat for multiple epochs",
        "Evaluate the model",
      ],
    },

    {
      type: "code",
      language: "python",
      title: "Simple MLP Training Step",
      code: `import torch
from torch import nn

model = nn.Sequential(
    nn.Flatten(),
    nn.Linear(784, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)

loss_fn = nn.CrossEntropyLoss()

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.1
)

X = torch.randn(32, 1, 28, 28)
y = torch.randint(0, 10, (32,))

optimizer.zero_grad()

predictions = model(X)

loss = loss_fn(predictions, y)

loss.backward()

optimizer.step()

print("Loss:", loss.item())`,
    },

    {
      type: "heading",
      title: "23. Why the Output Layer Has No ReLU Here",
    },

    {
      type: "paragraph",
      text:
        "For a standard multiclass classifier using CrossEntropyLoss, the final layer normally produces raw class scores. Applying ReLU to those scores would unnecessarily restrict the output representation.",
    },

    {
      type: "paragraph",
      text:
        "The loss function handles the appropriate transformation internally. This is why the model commonly ends with a linear layer while CrossEntropyLoss receives the logits.",
    },

    {
      type: "heading",
      title: "24. Universal Approximation Intuition",
    },

    {
      type: "paragraph",
      text:
        "Theoretical results show that sufficiently expressive neural networks can approximate broad classes of functions. However, the existence of such an approximation does not mean that finding the correct parameters is easy.",
    },

    {
      type: "paragraph",
      text:
        "The practical challenge is learning useful parameters efficiently from finite data using optimization.",
    },

    {
      type: "heading",
      title: "25. Depth Versus Width",
    },

    {
      type: "paragraph",
      text:
        "A network can become more expressive by increasing the number of units in a layer, increasing the number of layers, or changing the architecture. Deeper networks can often represent certain structured functions more efficiently than extremely wide shallow networks.",
    },

    {
      type: "heading",
      title: "26. MLPs for Image Classification",
    },

    {
      type: "paragraph",
      text:
        "An MLP can classify images by flattening the pixels and treating them as features. This is useful for learning neural network fundamentals.",
    },

    {
      type: "paragraph",
      text:
        "However, flattening destroys the explicit two-dimensional spatial structure of the image. A pixel's relationship to neighboring pixels is not represented directly by the architecture.",
    },

    {
      type: "heading",
      title: "27. Why CNNs Are Needed",
    },

    {
      type: "paragraph",
      text:
        "Images contain local spatial patterns. Edges, textures, corners, and shapes can appear in different positions. Convolutional neural networks are designed to exploit these spatial relationships more naturally than a basic fully connected MLP.",
    },

    {
      type: "formula",
      formula: "MLP → General feature transformation",
    },

    {
      type: "formula",
      formula: "CNN → Feature transformation + spatial structure",
    },

    {
      type: "heading",
      title: "28. Common MLP Mistakes",
    },

    {
      type: "bullets",
      items: [
        "Forgetting the activation function.",
        "Using only linear layers and expecting deep nonlinear behavior.",
        "Giving the first Linear layer the wrong input dimension.",
        "Using the wrong number of output classes.",
        "Applying softmax unnecessarily before CrossEntropyLoss.",
        "Using an incorrect tensor shape.",
        "Forgetting to flatten image data when using a fully connected network.",
        "Forgetting to clear gradients.",
        "Using an inappropriate learning rate.",
      ],
    },

    {
      type: "heading",
      title: "29. Debugging Tensor Shapes",
    },

    {
      type: "code",
      language: "python",
      title: "Inspecting Shapes",
      code: `X = torch.randn(16, 1, 28, 28)

print("Input:", X.shape)

flatten = nn.Flatten()

X_flat = flatten(X)

print("Flattened:", X_flat.shape)`,
    },

    {
      type: "output",
      title: "Expected Output",
      code: `Input: torch.Size([16, 1, 28, 28])
Flattened: torch.Size([16, 784])`,
    },

    {
      type: "heading",
      title: "30. MLP Mental Model",
    },

    {
      type: "paragraph",
      text:
        "Think of an MLP as a sequence of representation transformations. A layer receives a representation, applies learned weights and biases, passes the result through a nonlinear function, and sends the new representation to the next layer.",
    },

    {
      type: "formula",
      formula: "Representation → Transformation → Nonlinearity → New Representation",
    },

    {
      type: "heading",
      title: "31. Connection to Backpropagation",
    },

    {
      type: "paragraph",
      text:
        "An MLP is only useful when its parameters can be learned. During training, the model performs forward propagation to produce a loss and then uses backpropagation to determine how the parameters contributed to that loss.",
    },

    {
      type: "keyTakeaway",
      title: "Next Concept",
      text:
        "The next lesson explains exactly how forward propagation, computational graphs, the chain rule, and backpropagation work inside an MLP.",
    },

    {
      type: "summary",
      title: "Lesson Summary",
      items: [
        "An MLP contains one or more hidden layers.",
        "Hidden layers transform learned representations.",
        "Multiple linear layers alone do not create nonlinear expressive power.",
        "Activation functions introduce nonlinearity.",
        "ReLU is widely used in hidden layers.",
        "Sigmoid and tanh are important activation functions with different properties.",
        "MLPs can contain many stacked hidden layers.",
        "Parameter count depends on input and output dimensions.",
        "PyTorch provides Linear, ReLU, Flatten, and Sequential modules.",
        "MLPs can perform image classification.",
        "MLPs do not naturally exploit spatial relationships in images.",
        "Backpropagation is used to learn the parameters.",
      ],
    },

    {
      type: "exercises",
      title: "Conceptual Exercises",
      items: [
        "Why can't several linear layers replace nonlinear activation functions?",
        "What is a hidden layer?",
        "Why are activation functions needed?",
        "Write the mathematical definition of ReLU.",
        "What is the main difference between ReLU and sigmoid?",
        "Why can sigmoid cause gradient-related optimization problems?",
        "What does nn.Sequential do?",
        "How many parameters does a layer with 100 inputs and 50 outputs contain?",
        "Why is an MLP not naturally aware of image spatial structure?",
        "Why are CNNs introduced for image data?",
      ],
    },

    {
      type: "codingTask",
      title: "Coding Task 1 — Build an MLP",
      task:
        "Build an MLP with 784 inputs, two hidden layers containing 256 and 128 units, ReLU after each hidden layer, and ten output units.",
    },

    {
      type: "codingTask",
      title: "Coding Task 2 — Parameter Counting",
      task:
        "Calculate the number of trainable parameters in your MLP manually and verify the result using PyTorch.",
    },

    {
      type: "codingTask",
      title: "Coding Task 3 — Activation Experiment",
      task:
        "Train the same small classifier using ReLU, sigmoid, and tanh. Compare the training behavior and observe how the activation function affects optimization.",
    },

    {
      type: "debuggingTask",
      title: "Debugging Task",
      task:
        "Create an MLP that intentionally receives a tensor with the wrong feature dimension. Read the resulting error carefully, identify which dimensions do not match, and correct the architecture.",
    },

    {
      type: "keyTakeaway",
      title: "Final Takeaway",
      text:
        "An MLP is the fundamental bridge from linear models to deep neural networks. Its essential ingredients are learnable parameters, hidden representations, nonlinear activation functions, and gradient-based training.",
    },
  ],
};

export default lesson;