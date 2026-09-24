export default {
  id: "lesson6",
  moduleId: "module3",
  lessonNumber: 6,
  title: "LeNet",
  duration: "110 min",

  sections: [
    {
      type: "heading",
      title: "1. Introduction"
    },
    {
      type: "paragraph",
      text: "LeNet is an important early convolutional neural network architecture. It demonstrates the basic pattern that later became central to CNN design: convolutional feature extraction followed by spatial reduction and classification layers."
    },
    {
      type: "paragraph",
      text: "Studying LeNet is useful because it provides a compact architecture through which the complete CNN pipeline can be understood."
    },

    {
      type: "heading",
      title: "2. Historical Context"
    },
    {
      type: "paragraph",
      text: "LeNet was developed for visual recognition tasks involving handwritten characters. Its architecture demonstrated that convolution and subsampling could be combined into a trainable recognition system."
    },

    {
      type: "heading",
      title: "3. Main Architectural Idea"
    },
    {
      type: "process",
      title: "LeNet-style pipeline",
      steps: [
        "Input image",
        "Convolution",
        "Activation",
        "Pooling",
        "Convolution",
        "Activation",
        "Pooling",
        "Flattening",
        "Fully connected layers",
        "Classification output"
      ]
    },

    {
      type: "heading",
      title: "4. Why Convolution Before Fully Connected Layers?"
    },
    {
      type: "paragraph",
      text: "An image contains strong spatial structure. Convolutional layers exploit local relationships and reuse parameters across positions. Instead of learning an independent parameter for every input-output connection, they learn a relatively small collection of reusable filters."
    },

    {
      type: "heading",
      title: "5. LeNet's Feature Extraction Stages"
    },
    {
      type: "paragraph",
      text: "The early convolutional layers detect relatively simple visual structures. Pooling reduces the spatial dimensions. Later convolutional layers operate on increasingly abstract feature maps."
    },

    {
      type: "heading",
      title: "6. A Simplified LeNet Structure"
    },
    {
      type: "table",
      headers: ["Stage", "Operation", "Purpose"],
      rows: [
        ["Input", "Image", "Receive visual data"],
        ["C1", "Convolution", "Extract local features"],
        ["S2", "Pooling", "Reduce spatial resolution"],
        ["C3", "Convolution", "Build higher-level features"],
        ["S4", "Pooling", "Further spatial reduction"],
        ["Flatten", "Reshape", "Convert feature maps to vectors"],
        ["Dense", "Fully connected", "Combine learned features"],
        ["Output", "Classifier", "Predict class"]
      ]
    },

    {
      type: "heading",
      title: "7. Building LeNet in PyTorch"
    },
    {
      type: "code",
      language: "python",
      title: "LeNet-style model",
      code: `import torch
from torch import nn

class LeNet(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()

        self.features = nn.Sequential(
            nn.Conv2d(1, 6, kernel_size=5),
            nn.Sigmoid(),
            nn.AvgPool2d(kernel_size=2, stride=2),

            nn.Conv2d(6, 16, kernel_size=5),
            nn.Sigmoid(),
            nn.AvgPool2d(kernel_size=2, stride=2)
        )

        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(16 * 4 * 4, 120),
            nn.Sigmoid(),
            nn.Linear(120, 84),
            nn.Sigmoid(),
            nn.Linear(84, num_classes)
        )

    def forward(self, X):
        X = self.features(X)
        return self.classifier(X)`
    },

    {
      type: "heading",
      title: "8. Understanding the Shape Changes"
    },
    {
      type: "paragraph",
      text: "For a 28×28 input, the first 5×5 convolution without padding produces 24×24 spatial dimensions. A 2×2 pooling operation with stride 2 then reduces this to 12×12."
    },
    {
      type: "formula",
      text: "28×28 → 24×24 → 12×12"
    },
    {
      type: "paragraph",
      text: "The second 5×5 convolution reduces the spatial dimensions again."
    },
    {
      type: "formula",
      text: "12×12 → 8×8 → 4×4"
    },

    {
      type: "heading",
      title: "9. Complete Shape Flow"
    },
    {
      type: "table",
      headers: ["Stage", "Shape"],
      rows: [
        ["Input", "1×28×28"],
        ["Conv1", "6×24×24"],
        ["Pool1", "6×12×12"],
        ["Conv2", "16×8×8"],
        ["Pool2", "16×4×4"],
        ["Flatten", "256"],
        ["Dense", "120"],
        ["Dense", "84"],
        ["Output", "10"]
      ]
    },

    {
      type: "heading",
      title: "10. Why Flattening Is Required"
    },
    {
      type: "paragraph",
      text: "The convolutional portion produces a three-dimensional feature representation for every example: channels, height, and width. A standard fully connected layer expects the features for each example as a vector, so the tensor must be flattened."
    },
    {
      type: "formula",
      text: "16 × 4 × 4 = 256 features"
    },

    {
      type: "heading",
      title: "11. Feature Hierarchy"
    },
    {
      type: "paragraph",
      text: "A useful conceptual interpretation is that early layers detect simple local patterns while later layers combine them into more meaningful structures. The exact features learned depend on the training data and optimization process."
    },

    {
      type: "heading",
      title: "12. Why Pooling Is Included"
    },
    {
      type: "paragraph",
      text: "Pooling reduces spatial resolution after feature extraction. This makes later computations less expensive and allows later units to summarize information from larger regions of the original image."
    },

    {
      type: "heading",
      title: "13. LeNet and Modern CNNs"
    },
    {
      type: "paragraph",
      text: "Many modern CNNs use substantially different components and are much deeper, but the general pattern of spatial feature extraction, resolution reduction, and final prediction remains recognizable."
    },

    {
      type: "heading",
      title: "14. Activation Functions"
    },
    {
      type: "paragraph",
      text: "The original LeNet design used sigmoid-like nonlinearities. Modern CNNs commonly use ReLU-family activations because they provide practical optimization advantages in deeper networks."
    },

    {
      type: "heading",
      title: "15. Training LeNet"
    },
    {
      type: "code",
      language: "python",
      title: "Basic training structure",
      code: `model = LeNet(num_classes=10)

loss_fn = nn.CrossEntropyLoss()

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.1
)

for X, y in train_loader:
    optimizer.zero_grad()

    logits = model(X)
    loss = loss_fn(logits, y)

    loss.backward()
    optimizer.step()`
    },

    {
      type: "heading",
      title: "16. Why Cross-Entropy?"
    },
    {
      type: "paragraph",
      text: "For multiclass classification, the model produces one score for every class. Cross-entropy loss compares those predictions with the target class and provides gradients that can be used to update the model parameters."
    },

    {
      type: "heading",
      title: "17. Model Evaluation"
    },
    {
      type: "code",
      language: "python",
      title: "Simple accuracy calculation",
      code: `correct = 0
total = 0

with torch.no_grad():
    for X, y in test_loader:
        logits = model(X)
        predictions = logits.argmax(dim=1)

        correct += (predictions == y).sum().item()
        total += y.numel()

accuracy = correct / total

print("Accuracy:", accuracy)`
    },

    {
      type: "heading",
      title: "18. Parameter Sharing"
    },
    {
      type: "paragraph",
      text: "A convolutional filter is reused at different spatial positions. This parameter sharing is one of the main reasons CNNs can process high-dimensional images without requiring a separate set of weights for every location."
    },

    {
      type: "heading",
      title: "19. LeNet as a Complete CNN Pipeline"
    },
    {
      type: "process",
      title: "End-to-end reasoning",
      steps: [
        "Image enters the network.",
        "Convolution extracts local patterns.",
        "Nonlinearity transforms the responses.",
        "Pooling reduces resolution.",
        "Additional convolution builds richer representations.",
        "Additional pooling compresses spatial information.",
        "Flatten converts the feature maps to a vector.",
        "Dense layers combine features.",
        "Output layer produces class scores."
      ]
    },

    {
      type: "heading",
      title: "20. Common Mistakes"
    },
    {
      type: "list",
      items: [
        "Using the wrong flattened dimension.",
        "Forgetting the batch dimension.",
        "Incorrectly calculating convolution output sizes.",
        "Changing the input image size without updating the classifier.",
        "Confusing logits with probabilities.",
        "Applying softmax before CrossEntropyLoss unnecessarily."
      ]
    },

    {
      type: "heading",
      title: "21. Debugging Shape Errors"
    },
    {
      type: "code",
      language: "python",
      title: "Inspect every stage",
      code: `X = torch.randn(8, 1, 28, 28)

for layer in model.features:
    X = layer(X)
    print(type(layer).__name__, X.shape)`
    },

    {
      type: "heading",
      title: "22. LeNet and Dataset Size"
    },
    {
      type: "paragraph",
      text: "LeNet is small enough to train on relatively modest image datasets and hardware compared with much larger modern CNNs. Its compact structure makes it useful for understanding the mechanics of convolutional architectures."
    },

    {
      type: "heading",
      title: "23. Practical Exercise"
    },
    {
      type: "list",
      items: [
        "Implement LeNet from scratch using PyTorch.",
        "Print every intermediate tensor shape.",
        "Train it on a small handwritten-digit dataset.",
        "Record training and validation loss.",
        "Record classification accuracy.",
        "Change the activation function and compare the training behavior."
      ]
    },

    {
      type: "heading",
      title: "24. Architecture Modification Challenge"
    },
    {
      type: "paragraph",
      text: "Modify the LeNet-style network by replacing average pooling with max pooling. Then compare the resulting model behavior. Keep the experiment controlled by using the same training and evaluation procedure."
    },

    {
      type: "heading",
      title: "25. Interview Questions"
    },
    {
      type: "question",
      question: "Why is LeNet historically important?",
      answer: "It demonstrated a practical convolution-based architecture combining learned spatial features, subsampling, and classification."
    },
    {
      type: "question",
      question: "Why are convolutional layers placed before dense layers?",
      answer: "They exploit spatial structure and create compact learned representations before classification."
    },
    {
      type: "question",
      question: "Why do we flatten before Linear?",
      answer: "A standard Linear layer expects the features of each example as a vector."
    },
    {
      type: "question",
      question: "What does parameter sharing mean in CNNs?",
      answer: "The same learned convolution kernel is applied at multiple spatial positions."
    },

    {
      type: "heading",
      title: "26. Mini Project"
    },
    {
      type: "paragraph",
      text: "Build a LeNet-style image classifier. Your project should include dataset loading, preprocessing, model definition, training, validation, accuracy measurement, model saving, and a small inference script that accepts one image and predicts its class."
    },

    {
      type: "heading",
      title: "27. Summary"
    },
    {
      type: "list",
      items: [
        "LeNet is a foundational CNN architecture.",
        "It combines convolution, nonlinear activation, pooling, and dense classification.",
        "Convolution extracts local spatial features.",
        "Pooling reduces spatial resolution.",
        "Flattening converts feature maps into vectors.",
        "Dense layers perform final feature combination and classification.",
        "LeNet provides the conceptual foundation for understanding deeper CNN architectures."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text: "LeNet demonstrates the fundamental CNN design pattern: learn spatial features with convolution, reduce spatial resolution through pooling, and use the resulting representation for classification."
    }
  ]
};