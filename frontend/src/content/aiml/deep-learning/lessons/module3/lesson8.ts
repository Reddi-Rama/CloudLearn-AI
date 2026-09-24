export default {
  id: "lesson8",
  moduleId: "module3",
  lessonNumber: 8,
  title: "AlexNet",
  duration: "135 min",

  sections: [
    {
      type: "heading",
      title: "1. Introduction"
    },
    {
      type: "paragraph",
      text: "AlexNet was a major milestone in deep convolutional neural networks. It demonstrated the effectiveness of training a much larger CNN on a large image dataset using GPU acceleration. Its success helped establish deep learning as a dominant approach for large-scale visual recognition."
    },
    {
      type: "paragraph",
      text: "The important lesson is not merely the exact AlexNet architecture. Its significance comes from the combination of learned representations, depth, width, ReLU activation, pooling, dropout, data augmentation, and GPU computation."
    },

    {
      type: "heading",
      title: "2. AlexNet and the Evolution of CNNs"
    },
    {
      type: "table",
      headers: ["Property", "Earlier CNNs", "AlexNet"],
      rows: [
        ["Network scale", "Small", "Much larger"],
        ["Dataset", "Small datasets", "Large-scale image dataset"],
        ["Activation", "Sigmoid/tanh style", "ReLU"],
        ["Regularization", "Limited", "Dropout + augmentation"],
        ["Hardware", "CPU-oriented historically", "GPU acceleration"],
        ["Feature learning", "Learned", "Large-scale learned hierarchy"]
      ]
    },

    {
      type: "heading",
      title: "3. Representation Learning"
    },
    {
      type: "paragraph",
      text: "AlexNet emphasized learning useful visual representations directly from data. Rather than manually specifying every useful visual feature, the network learns filters through optimization."
    },
    {
      type: "process",
      title: "Learned visual hierarchy",
      steps: [
        "Pixels",
        "Edges and color patterns",
        "Textures",
        "Shapes",
        "Object parts",
        "High-level visual representation",
        "Class prediction"
      ]
    },

    {
      type: "heading",
      title: "4. AlexNet Architecture"
    },
    {
      type: "paragraph",
      text: "The classic AlexNet design contains five convolutional layers followed by three fully connected layers."
    },
    {
      type: "formula",
      text: "5 convolutional layers + 3 fully connected layers"
    },

    {
      type: "heading",
      title: "5. First Convolution"
    },
    {
      type: "paragraph",
      text: "AlexNet used a relatively large first convolution compared with the 3×3 pattern that later became common. The larger first window was appropriate for the relatively high-resolution input images used by the architecture."
    },
    {
      type: "formula",
      text: "First kernel = 11 × 11"
    },

    {
      type: "heading",
      title: "6. Later Convolutions"
    },
    {
      type: "paragraph",
      text: "Later layers use smaller convolution windows such as 5×5 and 3×3. As the network becomes deeper, features become increasingly abstract."
    },
    {
      type: "formula",
      text: "11×11 → 5×5 → 3×3"
    },

    {
      type: "heading",
      title: "7. ReLU Activation"
    },
    {
      type: "paragraph",
      text: "AlexNet used ReLU as its main activation function."
    },
    {
      type: "formula",
      text: "ReLU(x) = max(0, x)"
    },
    {
      type: "paragraph",
      text: "The activation is zero for negative values and linear for positive values. It is simple to compute and avoids the positive-side saturation characteristic of sigmoid."
    },

    {
      type: "code",
      language: "python",
      title: "ReLU example",
      code: `import torch

x = torch.tensor([
    -2.0,
    -1.0,
    0.0,
    1.0,
    2.0
])

y = torch.relu(x)

print(y)`
    },

    {
      type: "heading",
      title: "8. Pooling"
    },
    {
      type: "paragraph",
      text: "AlexNet uses max pooling to reduce spatial resolution. This lowers computation in later layers while retaining strong local responses."
    },
    {
      type: "code",
      language: "python",
      title: "Max pooling",
      code: `import torch
from torch import nn

pool = nn.MaxPool2d(
    kernel_size=3,
    stride=2
)

x = torch.randn(
    4, 64, 56, 56
)

y = pool(x)

print(y.shape)`
    },

    {
      type: "heading",
      title: "9. Dropout"
    },
    {
      type: "paragraph",
      text: "The large fully connected layers contain many parameters and therefore have substantial capacity. Dropout is used as a regularization technique during training."
    },
    {
      type: "code",
      language: "python",
      title: "Dropout",
      code: `import torch
from torch import nn

dropout = nn.Dropout(p=0.5)

x = torch.randn(8, 100)

dropout.train()
y = dropout(x)

print(y.shape)`
    },

    {
      type: "heading",
      title: "10. Data Augmentation"
    },
    {
      type: "paragraph",
      text: "Data augmentation generates training variations from existing images. Appropriate transformations can expose the network to changes such as spatial position or orientation while preserving the class."
    },
    {
      type: "code",
      language: "python",
      title: "Example augmentation pipeline",
      code: `from torchvision import transforms

train_transform = transforms.Compose([
    transforms.RandomResizedCrop(224),
    transforms.RandomHorizontalFlip(),
    transforms.ToTensor()
])`
    },

    {
      type: "heading",
      title: "11. AlexNet-Style Network"
    },
    {
      type: "code",
      language: "python",
      title: "Correct PyTorch implementation",
      code: `import torch
from torch import nn

class AlexNet(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()

        self.features = nn.Sequential(
            nn.Conv2d(
                3, 96,
                kernel_size=11,
                stride=4
            ),
            nn.ReLU(),
            nn.MaxPool2d(
                kernel_size=3,
                stride=2
            ),

            nn.Conv2d(
                96, 256,
                kernel_size=5,
                padding=2
            ),
            nn.ReLU(),
            nn.MaxPool2d(
                kernel_size=3,
                stride=2
            ),

            nn.Conv2d(
                256, 384,
                kernel_size=3,
                padding=1
            ),
            nn.ReLU(),

            nn.Conv2d(
                384, 384,
                kernel_size=3,
                padding=1
            ),
            nn.ReLU(),

            nn.Conv2d(
                384, 256,
                kernel_size=3,
                padding=1
            ),
            nn.ReLU(),
            nn.MaxPool2d(
                kernel_size=3,
                stride=2
            )
        )

        self.classifier = nn.Sequential(
            nn.Flatten(),

            nn.Linear(
                256 * 5 * 5,
                4096
            ),
            nn.ReLU(),
            nn.Dropout(0.5),

            nn.Linear(
                4096,
                4096
            ),
            nn.ReLU(),
            nn.Dropout(0.5),

            nn.Linear(
                4096,
                num_classes
            )
        )

    def forward(self, x):
        x = self.features(x)
        x = self.classifier(x)
        return x

model = AlexNet(num_classes=10)

x = torch.randn(
    4, 3, 224, 224
)

y = model(x)

print(y.shape)`
    },

    {
      type: "heading",
      title: "12. Understanding the 256 × 5 × 5"
    },
    {
      type: "paragraph",
      text: "The classifier expects the convolutional part to produce 256 channels with spatial dimensions 5×5 for a 224×224 input under this configuration."
    },
    {
      type: "formula",
      text: "256 × 5 × 5 = 6,400 input features"
    },

    {
      type: "heading",
      title: "13. Why Shape Calculation Matters"
    },
    {
      type: "paragraph",
      text: "If the input resolution or convolution parameters are changed, the final spatial dimensions may change. The hard-coded 256×5×5 classifier input would then become incorrect."
    },

    {
      type: "heading",
      title: "14. A Safer Classifier"
    },
    {
      type: "paragraph",
      text: "Adaptive pooling can make the classifier independent of the exact final spatial dimensions."
    },
    {
      type: "code",
      language: "python",
      title: "Safer architecture pattern",
      code: `import torch
from torch import nn

classifier = nn.Sequential(
    nn.AdaptiveAvgPool2d((1, 1)),
    nn.Flatten(),
    nn.Linear(256, 10)
)

x = torch.randn(
    4, 256, 7, 7
)

y = classifier(x)

print(y.shape)`
    },

    {
      type: "heading",
      title: "15. AlexNet Parameter Calculation"
    },
    {
      type: "paragraph",
      text: "For a convolutional layer, the weight count is determined by input channels, output channels, and kernel size."
    },
    {
      type: "formula",
      text: "Parameters = Cout × Cin × K × K + Cout"
    },

    {
      type: "heading",
      title: "16. Example"
    },
    {
      type: "paragraph",
      text: "For a convolution with 96 output channels, 3 input channels, and an 11×11 kernel:"
    },
    {
      type: "formula",
      text: "96 × 3 × 11 × 11 + 96 = 34,944"
    },

    {
      type: "heading",
      title: "17. Why Fully Connected Layers Are Expensive"
    },
    {
      type: "paragraph",
      text: "Suppose a feature tensor contains 6,400 values and the next dense layer has 4,096 neurons."
    },
    {
      type: "formula",
      text: "6,400 × 4,096 = 26,214,400 weights"
    },
    {
      type: "paragraph",
      text: "This illustrates why the fully connected portion can contain a very large number of parameters."
    },

    {
      type: "heading",
      title: "18. Training on GPU"
    },
    {
      type: "code",
      language: "python",
      title: "Device selection",
      code: `import torch

device = torch.device(
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)

print("Using:", device)`
    },

    {
      type: "heading",
      title: "19. Moving Model and Data"
    },
    {
      type: "code",
      language: "python",
      title: "GPU training preparation",
      code: `model = model.to(device)

for images, labels in train_loader:
    images = images.to(device)
    labels = labels.to(device)

    outputs = model(images)

    print(outputs.shape)

    break`
    },

    {
      type: "heading",
      title: "20. Basic Training Loop"
    },
    {
      type: "code",
      language: "python",
      title: "Training AlexNet",
      code: `import torch
from torch import nn

criterion = nn.CrossEntropyLoss()

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01,
    weight_decay=0.0005
)

model.train()

for images, labels in train_loader:
    images = images.to(device)
    labels = labels.to(device)

    optimizer.zero_grad()

    outputs = model(images)

    loss = criterion(
        outputs,
        labels
    )

    loss.backward()

    optimizer.step()`
    },

    {
      type: "heading",
      title: "21. Why Cross Entropy?"
    },
    {
      type: "paragraph",
      text: "For multiclass classification, CrossEntropyLoss combines the softmax-related normalization and negative log-likelihood calculation in a numerically stable implementation."
    },

    {
      type: "heading",
      title: "22. Training vs Evaluation Mode"
    },
    {
      type: "code",
      language: "python",
      title: "Correct mode switching",
      code: `model.train()

# training code here

model.eval()

with torch.no_grad():
    predictions = model(images)`
    },

    {
      type: "paragraph",
      text: "Calling train() and eval() is important because layers such as dropout behave differently during training and evaluation."
    },

    {
      type: "heading",
      title: "23. Why AlexNet Can Overfit"
    },
    {
      type: "paragraph",
      text: "A large network can memorize training examples when the dataset is insufficient relative to the model capacity. AlexNet therefore combines high capacity with regularization strategies."
    },

    {
      type: "list",
      items: [
        "Dropout",
        "Data augmentation",
        "Large training datasets",
        "Weight regularization",
        "Validation monitoring"
      ]
    },

    {
      type: "heading",
      title: "24. AlexNet Design Lessons"
    },
    {
      type: "list",
      items: [
        "Deep networks can learn hierarchical visual representations.",
        "ReLU is practical for deep CNN optimization.",
        "GPU acceleration makes large-scale training practical.",
        "Regularization becomes increasingly important as capacity grows.",
        "Large dense layers can dominate parameter counts.",
        "Architecture should match dataset size and image resolution."
      ]
    },

    {
      type: "heading",
      title: "25. AlexNet vs LeNet"
    },
    {
      type: "table",
      headers: ["Aspect", "LeNet", "AlexNet"],
      rows: [
        ["Typical input scale", "Small", "Large"],
        ["Network size", "Small", "Large"],
        ["Activation", "Sigmoid-style", "ReLU"],
        ["Regularization", "Limited", "Dropout + augmentation"],
        ["Hardware emphasis", "Earlier computing", "GPU"],
        ["Feature hierarchy", "Moderate", "Much deeper"]
      ]
    },

    {
      type: "heading",
      title: "26. Debugging Exercise"
    },
    {
      type: "code",
      language: "python",
      title: "Find the feature shape before Linear",
      code: `import torch

x = torch.randn(
    1, 3, 224, 224
)

features = model.features(x)

print("Feature shape:", features.shape)

flat = torch.flatten(
    features,
    start_dim=1
)

print("Flattened:", flat.shape)`
    },

    {
      type: "heading",
      title: "27. Common Errors"
    },
    {
      type: "list",
      items: [
        "Using the wrong classifier input size.",
        "Passing NHWC tensors instead of NCHW.",
        "Forgetting to move labels to the same device as the model.",
        "Calling eval() during training.",
        "Forgetting model.train() before training.",
        "Using an unnecessarily large input resolution.",
        "Running a large model without checking GPU memory."
      ]
    },

    {
      type: "heading",
      title: "28. Interview Questions"
    },
    {
      type: "question",
      question: "Why is AlexNet historically important?",
      answer: "It demonstrated the effectiveness of large-scale deep CNN training using GPU computation and learned visual representations."
    },
    {
      type: "question",
      question: "What activation did AlexNet popularize?",
      answer: "ReLU."
    },
    {
      type: "question",
      question: "Why was dropout used?",
      answer: "To reduce overfitting in a high-capacity network."
    },
    {
      type: "question",
      question: "Why is GPU acceleration useful?",
      answer: "CNN training contains large amounts of parallel tensor computation that GPUs can execute efficiently."
    },

    {
      type: "heading",
      title: "29. Practical Project"
    },
    {
      type: "paragraph",
      text: "Implement an AlexNet-style classifier for a 10-class image dataset. Train two versions: one with dropout and one without dropout. Compare training accuracy, validation accuracy, training loss, validation loss, and training time."
    },

    {
      type: "heading",
      title: "30. Advanced Challenge"
    },
    {
      type: "paragraph",
      text: "Modify the network so that it can accept 64×64 images without resizing them to 224×224. Recalculate the convolutional output shapes and replace the classifier with adaptive pooling if necessary."
    },

    {
      type: "heading",
      title: "31. Summary"
    },
    {
      type: "list",
      items: [
        "AlexNet scaled CNNs to large image recognition problems.",
        "It used five convolutional layers and three fully connected layers.",
        "ReLU became a major practical activation choice.",
        "Pooling reduced spatial resolution.",
        "Dropout helped regularize large dense layers.",
        "Data augmentation increased training variation.",
        "GPU computation enabled practical large-scale training.",
        "AlexNet demonstrated the strength of learned hierarchical representations."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text: "AlexNet was important not because of one isolated layer, but because it combined deep convolutional representation learning, ReLU, pooling, dropout, data augmentation, large datasets, and GPU acceleration into a practical large-scale system."
    }
  ]
};