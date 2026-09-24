const lesson10 = {
  id: "lesson10",
  title: "Network in Network (NiN)",
  moduleId: "module3",
  duration: "95 min",
  level: "Intermediate",
  description:
    "Understand how Network in Network uses 1×1 convolutions and global average pooling to increase nonlinear representation power while reducing dependence on large fully connected layers.",

  content: [
    {
      type: "heading",
      level: 2,
      text: "1. Why Network in Network?"
    },
    {
      type: "paragraph",
      text:
        "LeNet, AlexNet, and VGG use convolutional layers to extract spatial features and then rely heavily on fully connected layers for classification. As CNNs became deeper and wider, the fully connected portion could become extremely large."
    },

    {
      type: "paragraph",
      text:
        "Network in Network, commonly abbreviated as NiN, proposes a different way to process convolutional feature maps. Instead of depending entirely on large fully connected layers, NiN applies small neural transformations at spatial locations and eventually aggregates the spatial information using global average pooling."
    },

    {
      type: "heading",
      level: 2,
      text: "2. The Two Core Ideas"
    },
    {
      type: "process",
      title: "NiN Strategy",
      steps: [
        "Extract spatial features using convolution",
        "Apply 1×1 convolution",
        "Introduce nonlinear transformations",
        "Repeat NiN blocks",
        "Reduce spatial dimensions",
        "Use global average pooling",
        "Produce class scores"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "3. What Does a 1×1 Convolution Do?"
    },
    {
      type: "paragraph",
      text:
        "A 1×1 convolution does not combine neighboring spatial positions. Instead, it combines information across the channel dimension at each individual pixel location."
    },

    {
      type: "formula",
      text: "1×1 convolution: output(h,w) = activation(W · input(h,w) + b)"
    },

    {
      type: "paragraph",
      text:
        "This makes a 1×1 convolution similar to applying a small fully connected transformation independently at every spatial position."
    },

    {
      type: "heading",
      level: 2,
      text: "4. Why Add Nonlinearity?"
    },
    {
      type: "paragraph",
      text:
        "A sequence of purely linear transformations can be mathematically collapsed into a single linear transformation. Nonlinear activation functions prevent this collapse and allow the network to learn richer mappings."
    },

    {
      type: "code",
      language: "python",
      title: "Basic 1×1 Convolution",
      code: `import torch
from torch import nn

layer = nn.Conv2d(
    in_channels=32,
    out_channels=64,
    kernel_size=1
)

x = torch.randn(4, 32, 28, 28)

y = layer(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([4, 32, 28, 28])
Output: torch.Size([4, 64, 28, 28])`
    },

    {
      type: "heading",
      level: 2,
      text: "5. Important Shape Property"
    },
    {
      type: "paragraph",
      text:
        "When stride is one and padding is zero, a 1×1 convolution preserves height and width. Only the number of channels changes."
    },

    {
      type: "formula",
      text: "Hout = Hin, Wout = Win for a 1×1 convolution with stride 1"
    },

    {
      type: "heading",
      level: 2,
      text: "6. NiN Block"
    },
    {
      type: "paragraph",
      text:
        "A practical NiN block can be built from a normal convolution followed by two 1×1 convolutions. ReLU activations are inserted between them."
    },

    {
      type: "code",
      language: "python",
      title: "NiN Block",
      code: `import torch
from torch import nn

class NiNBlock(nn.Module):
    def __init__(
        self,
        in_channels,
        out_channels,
        kernel_size,
        stride,
        padding
    ):
        super().__init__()

        self.block = nn.Sequential(
            nn.Conv2d(
                in_channels,
                out_channels,
                kernel_size,
                stride=stride,
                padding=padding
            ),
            nn.ReLU(),

            nn.Conv2d(
                out_channels,
                out_channels,
                kernel_size=1
            ),
            nn.ReLU(),

            nn.Conv2d(
                out_channels,
                out_channels,
                kernel_size=1
            ),
            nn.ReLU()
        )

    def forward(self, x):
        return self.block(x)


x = torch.randn(2, 3, 32, 32)

block = NiNBlock(
    in_channels=3,
    out_channels=64,
    kernel_size=5,
    stride=1,
    padding=2
)

y = block(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "heading",
      level: 2,
      text: "7. Global Average Pooling"
    },
    {
      type: "paragraph",
      text:
        "Global average pooling computes the average value over every spatial position of each channel. If the final representation has one channel per class, the resulting values can be directly interpreted as class-specific scores."
    },

    {
      type: "formula",
      text: "GAP(c) = (1 / H×W) × Σh Σw X(c,h,w)"
    },

    {
      type: "code",
      language: "python",
      title: "Global Average Pooling",
      code: `import torch
from torch import nn

x = torch.randn(4, 10, 8, 8)

pool = nn.AdaptiveAvgPool2d((1, 1))

y = pool(x)

print("Input:", x.shape)
print("Output:", y.shape)

y = torch.flatten(y, 1)

print("Flattened:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([4, 10, 8, 8])
Output: torch.Size([4, 10, 1, 1])
Flattened: torch.Size([4, 10])`
    },

    {
      type: "heading",
      level: 2,
      text: "8. Why Global Average Pooling Helps"
    },
    {
      type: "paragraph",
      text:
        "A large fully connected layer depends strongly on the exact flattened spatial dimensions. Global average pooling compresses every channel to one value, making the classification head much smaller."
    },

    {
      type: "heading",
      level: 2,
      text: "9. Building a Complete NiN Model"
    },
    {
      type: "code",
      language: "python",
      title: "Complete NiN Classifier",
      code: `import torch
from torch import nn

class NiNBlock(nn.Module):
    def __init__(
        self,
        in_channels,
        out_channels,
        kernel_size,
        stride,
        padding
    ):
        super().__init__()

        self.block = nn.Sequential(
            nn.Conv2d(
                in_channels,
                out_channels,
                kernel_size,
                stride=stride,
                padding=padding
            ),
            nn.ReLU(),

            nn.Conv2d(
                out_channels,
                out_channels,
                kernel_size=1
            ),
            nn.ReLU(),

            nn.Conv2d(
                out_channels,
                out_channels,
                kernel_size=1
            ),
            nn.ReLU()
        )

    def forward(self, x):
        return self.block(x)


class NiN(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()

        self.features = nn.Sequential(
            NiNBlock(3, 96, 11, 4, 0),
            nn.MaxPool2d(3, stride=2),

            NiNBlock(96, 256, 5, 1, 2),
            nn.MaxPool2d(3, stride=2),

            NiNBlock(256, 384, 3, 1, 1),
            nn.MaxPool2d(3, stride=2),

            nn.Dropout(0.5),

            NiNBlock(384, num_classes, 3, 1, 1),

            nn.AdaptiveAvgPool2d((1, 1))
        )

    def forward(self, x):
        x = self.features(x)
        return torch.flatten(x, 1)


model = NiN(num_classes=10)

x = torch.randn(2, 3, 224, 224)

y = model(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([2, 3, 224, 224])
Output: torch.Size([2, 10])`
    },

    {
      type: "heading",
      level: 2,
      text: "10. NiN Versus VGG"
    },
    {
      type: "table",
      headers: ["Feature", "VGG", "NiN"],
      rows: [
        ["Main design", "Repeated convolution blocks", "Convolution + 1×1 transformations"],
        ["1×1 convolution", "Not central", "Core component"],
        ["Classification head", "Large fully connected layers", "Global average pooling"],
        ["Spatial dependence", "High in classifier", "Reduced"],
        ["Parameter efficiency", "Can be expensive", "More compact head"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "11. Parameter Efficiency"
    },
    {
      type: "paragraph",
      text:
        "The major advantage of replacing a huge fully connected classifier is reducing the number of parameters associated with the final representation. This can reduce memory requirements and decrease the number of parameters that need to be learned."
    },

    {
      type: "heading",
      level: 2,
      text: "12. NiN as a Local MLP"
    },
    {
      type: "paragraph",
      text:
        "The 1×1 convolution sequence can be understood as a tiny multilayer perceptron applied independently at each spatial position. The spatial dimensions are preserved while the channel representation is transformed."
    },

    {
      type: "process",
      title: "Local Transformation",
      steps: [
        "Take channel vector at one pixel",
        "Apply learned linear transformation",
        "Apply ReLU",
        "Apply another channel transformation",
        "Apply ReLU",
        "Produce richer local representation"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "13. Spatial Information"
    },
    {
      type: "paragraph",
      text:
        "A 1×1 convolution itself does not mix neighboring pixels. Spatial information is therefore still extracted by the surrounding larger convolutional layers. The 1×1 layers mainly transform the channel representation."
    },

    {
      type: "heading",
      level: 2,
      text: "14. Why NiN Was Important"
    },
    {
      type: "paragraph",
      text:
        "NiN helped demonstrate that CNN classifiers did not necessarily need enormous fully connected layers. The idea of using global pooling later became common in many convolutional architectures."
    },

    {
      type: "heading",
      level: 2,
      text: "15. Debugging NiN"
    },
    {
      type: "list",
      items: [
        "Check that the input channel count matches the first convolution.",
        "Remember that 1×1 convolutions change channels, not spatial size.",
        "Use AdaptiveAvgPool2d when the exact spatial size may vary.",
        "Flatten only after global pooling.",
        "Ensure the final channel count matches the number of classes."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "16. Coding Exercise"
    },
    {
      type: "list",
      items: [
        "Implement a 1×1 convolution from PyTorch.",
        "Create a NiN block.",
        "Compare parameter counts with a fully connected layer.",
        "Implement global average pooling.",
        "Build a complete classifier."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "17. Interview Questions"
    },
    {
      type: "question",
      question: "What is the purpose of a 1×1 convolution?",
      answer:
        "It performs a learned transformation across channels at each spatial location and can introduce additional nonlinearities."
    },

    {
      type: "question",
      question: "Does a 1×1 convolution combine neighboring pixels?",
      answer:
        "No. It operates independently at each spatial location while mixing channel information."
    },

    {
      type: "question",
      question: "Why use global average pooling?",
      answer:
        "It aggregates spatial information while avoiding a large fully connected classification layer."
    },

    {
      type: "heading",
      level: 2,
      text: "18. Practical Challenge"
    },
    {
      type: "paragraph",
      text:
        "Build two image classifiers: one with a flattened fully connected head and another with global average pooling. Compare their parameter counts and observe how the classification head changes."
    },

    {
      type: "heading",
      level: 2,
      text: "19. Lesson Summary"
    },
    {
      type: "list",
      items: [
        "NiN uses 1×1 convolutions to create local nonlinear transformations.",
        "1×1 convolutions mix channel information without mixing neighboring spatial locations.",
        "Global average pooling reduces spatial dimensions to one value per channel.",
        "NiN reduces dependence on large fully connected layers.",
        "The design connects CNN feature extraction with local MLP-style transformations."
      ]
    },

    {
      type: "keyTakeaway",
      text:
        "Network in Network shows that convolutional feature maps can be transformed using small neural networks at each spatial location and classified efficiently using global average pooling."
    }
  ]
};

export default lesson10;