const lesson9 = {
  id: "lesson9",
  title: "VGG: Networks Using Blocks",
  moduleId: "module3",
  duration: "100 min",
  level: "Intermediate",
  description:
    "Understand how VGG introduced a systematic block-based CNN design using repeated 3×3 convolutions, nonlinearities, pooling, and progressively increasing channel capacity.",

  content: [
    {
      type: "heading",
      level: 2,
      text: "1. Why VGG Matters"
    },
    {
      type: "paragraph",
      text:
        "Earlier CNN architectures such as LeNet and AlexNet demonstrated that convolutional networks can learn useful visual representations. VGG takes the next step by organizing convolutional layers into reusable blocks. Instead of designing every layer independently, VGG repeatedly applies a simple pattern: several small convolutions followed by downsampling."
    },

    {
      type: "heading",
      level: 2,
      text: "2. The Main Idea"
    },
    {
      type: "paragraph",
      text:
        "The central idea behind VGG is that a deep network can be constructed from repeated blocks containing small 3×3 convolutions. Each convolution is followed by a nonlinear activation, while pooling is used between blocks to reduce spatial resolution."
    },

    {
      type: "process",
      title: "VGG Design Pattern",
      steps: [
        "Input image",
        "3×3 convolution",
        "ReLU activation",
        "Another 3×3 convolution when required",
        "ReLU activation",
        "2×2 max pooling",
        "Increase channel capacity",
        "Repeat the block"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "3. Why Small Convolution Kernels?"
    },
    {
      type: "paragraph",
      text:
        "A 3×3 kernel looks at a small local neighborhood. Stacking multiple 3×3 convolutions allows the network to build a larger effective receptive field while inserting nonlinear transformations between the operations."
    },

    {
      type: "formula",
      text: "3 × 3 convolution parameters = 9 × Cin × Cout + Cout"
    },

    {
      type: "paragraph",
      text:
        "Using small kernels also gives the architecture a regular structure. Rather than using many different kernel sizes throughout the network, VGG relies heavily on 3×3 convolutions."
    },

    {
      type: "heading",
      level: 2,
      text: "4. Effective Receptive Field"
    },
    {
      type: "paragraph",
      text:
        "Two consecutive 3×3 convolutions can cover a spatial region comparable to a larger kernel while providing an additional nonlinear transformation. This allows the network to construct increasingly complex features from simpler operations."
    },

    {
      type: "formula",
      text: "Effective receptive field after two 3×3 layers ≈ 5 × 5"
    },

    {
      type: "heading",
      level: 2,
      text: "5. VGG Blocks"
    },
    {
      type: "paragraph",
      text:
        "A VGG block contains a sequence of convolutional layers with 3×3 kernels and padding of 1, followed by a 2×2 max-pooling layer with stride 2. Padding preserves height and width during convolution, while pooling halves the spatial resolution."
    },

    {
      type: "code",
      language: "python",
      title: "Reusable VGG Block",
      code: `import torch
from torch import nn

def vgg_block(num_convs, out_channels):
    layers = []

    for _ in range(num_convs):
        layers.append(
            nn.LazyConv2d(
                out_channels=out_channels,
                kernel_size=3,
                padding=1
            )
        )
        layers.append(nn.ReLU())

    layers.append(
        nn.MaxPool2d(
            kernel_size=2,
            stride=2
        )
    )

    return nn.Sequential(*layers)`
    },

    {
      type: "paragraph",
      text:
        "The function makes VGG easier to construct because the same block definition can be reused with different numbers of convolutional layers and output channels."
    },

    {
      type: "heading",
      level: 2,
      text: "6. Why Padding = 1?"
    },
    {
      type: "paragraph",
      text:
        "For a 3×3 kernel, padding of one pixel on every side allows the convolution to preserve the height and width of the feature map when the stride is one."
    },

    {
      type: "formula",
      text: "Output size = floor((n + 2p - k) / s) + 1"
    },

    {
      type: "paragraph",
      text:
        "For n = 32, p = 1, k = 3, and s = 1, the output remains 32."
    },

    {
      type: "heading",
      level: 2,
      text: "7. Why Pooling Is Used Between Blocks"
    },
    {
      type: "paragraph",
      text:
        "Pooling reduces spatial resolution. This decreases the computational cost of later layers while allowing the network to gradually move from detailed local information toward higher-level representations."
    },

    {
      type: "process",
      title: "Spatial Transformation",
      steps: [
        "224 × 224 input",
        "First block → 112 × 112",
        "Second block → 56 × 56",
        "Third block → 28 × 28",
        "Fourth block → 14 × 14",
        "Fifth block → 7 × 7"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "8. Increasing Channels"
    },
    {
      type: "paragraph",
      text:
        "As spatial resolution decreases, VGG generally increases the number of channels. This creates a useful trade-off: fewer spatial positions are processed, while each position carries a richer feature representation."
    },

    {
      type: "formula",
      text: "Spatial resolution ↓ while feature channels ↑"
    },

    {
      type: "heading",
      level: 2,
      text: "9. Building a VGG Network"
    },
    {
      type: "code",
      language: "python",
      title: "VGG Network",
      code: `import torch
from torch import nn

def vgg_block(num_convs, out_channels):
    layers = []

    for _ in range(num_convs):
        layers.append(
            nn.LazyConv2d(
                out_channels,
                kernel_size=3,
                padding=1
            )
        )
        layers.append(nn.ReLU())

    layers.append(nn.MaxPool2d(2, 2))
    return nn.Sequential(*layers)


class VGG(nn.Module):
    def __init__(self, architecture, num_classes=10):
        super().__init__()

        blocks = []

        for num_convs, channels in architecture:
            blocks.append(
                vgg_block(num_convs, channels)
            )

        self.features = nn.Sequential(*blocks)

        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.LazyLinear(4096),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.LazyLinear(4096),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.LazyLinear(num_classes)
        )

        self.network = nn.Sequential(
            self.features,
            self.classifier
        )

    def forward(self, x):
        return self.network(x)


architecture = (
    (1, 64),
    (1, 128),
    (2, 256),
    (2, 512),
    (2, 512)
)

model = VGG(architecture)

x = torch.randn(1, 3, 224, 224)
y = model(x)

print("Input shape:", x.shape)
print("Output shape:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input shape: torch.Size([1, 3, 224, 224])
Output shape: torch.Size([1, 10])`
    },

    {
      type: "heading",
      level: 2,
      text: "10. Understanding the Architecture"
    },
    {
      type: "paragraph",
      text:
        "The convolutional portion extracts increasingly abstract features. The classifier converts the final spatial representation into class scores. In a typical VGG-style design, five convolutional blocks progressively reduce spatial dimensions."
    },

    {
      type: "table",
      headers: ["Stage", "Convolutions", "Channels", "Spatial Resolution"],
      rows: [
        ["Block 1", "1", "64", "112 × 112"],
        ["Block 2", "1", "128", "56 × 56"],
        ["Block 3", "2", "256", "28 × 28"],
        ["Block 4", "2", "512", "14 × 14"],
        ["Block 5", "2", "512", "7 × 7"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "11. VGG-11"
    },
    {
      type: "paragraph",
      text:
        "The original VGG family contains several variants. VGG-11 is commonly used as an introductory architecture because it has eight convolutional layers and three fully connected layers."
    },

    {
      type: "paragraph",
      text:
        "The important lesson is not memorizing the name VGG-11. The important lesson is understanding how a family of networks can be generated by changing the number of convolutional layers in each block."
    },

    {
      type: "heading",
      level: 2,
      text: "12. VGG Family"
    },
    {
      type: "paragraph",
      text:
        "VGG architectures can be scaled by changing the depth of the convolutional blocks. This produces variants such as VGG-11, VGG-13, VGG-16, and VGG-19."
    },

    {
      type: "keyTakeaway",
      text:
        "VGG turns CNN architecture design into a repeatable block-based pattern: small 3×3 convolutions, nonlinearities, pooling, and increasing channel capacity."
    },

    {
      type: "heading",
      level: 2,
      text: "13. VGG and Parameter Cost"
    },
    {
      type: "paragraph",
      text:
        "The fully connected layers can contain a very large number of parameters because the spatial feature map must first be flattened. This was one of the important limitations of classical VGG-style architectures."
    },

    {
      type: "formula",
      text: "Fully connected parameters = input_features × output_features + output_features"
    },

    {
      type: "paragraph",
      text:
        "This observation motivates later architectures such as Network in Network, which replaces the large classification head with a more spatially efficient design."
    },

    {
      type: "heading",
      level: 2,
      text: "14. VGG Compared with AlexNet"
    },
    {
      type: "table",
      headers: ["Aspect", "AlexNet", "VGG"],
      rows: [
        ["Architecture", "Individual layers", "Reusable blocks"],
        ["Common convolution", "Larger kernels early", "Mostly 3×3 kernels"],
        ["Design style", "Less uniform", "Highly systematic"],
        ["Depth", "Deep for its time", "Deeper"],
        ["Main idea", "Large-scale CNN", "Deep narrow blocks"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "15. Feature Hierarchy"
    },
    {
      type: "process",
      title: "What VGG Can Learn",
      steps: [
        "Early layers → edges and simple textures",
        "Middle layers → patterns and shapes",
        "Deeper layers → object parts",
        "Final layers → class-specific representations"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "16. Training VGG"
    },
    {
      type: "code",
      language: "python",
      title: "Basic PyTorch Training Setup",
      code: `import torch
from torch import nn

model = VGG(
    architecture=(
        (1, 32),
        (1, 64),
        (2, 128),
        (2, 256),
        (2, 256)
    ),
    num_classes=10
)

device = torch.device(
    "cuda" if torch.cuda.is_available() else "cpu"
)

model = model.to(device)

criterion = nn.CrossEntropyLoss()

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01,
    momentum=0.9
)

print("Device:", device)
print("Model ready for training")`
    },

    {
      type: "heading",
      level: 2,
      text: "17. Why Smaller VGG Variants Are Useful"
    },
    {
      type: "paragraph",
      text:
        "The original VGG architecture can be computationally expensive. For learning and experimentation, reducing the number of channels provides a smaller model while preserving the architectural idea."
    },

    {
      type: "heading",
      level: 2,
      text: "18. Debugging VGG Shape Problems"
    },
    {
      type: "paragraph",
      text:
        "A common implementation error occurs when the classifier assumes a fixed flattened size that does not match the actual convolutional output. LazyLinear or AdaptiveAvgPool2d can reduce this type of hard-coded shape dependency."
    },

    {
      type: "code",
      language: "python",
      title: "Safer Classifier Using Adaptive Pooling",
      code: `self.classifier = nn.Sequential(
    nn.AdaptiveAvgPool2d((7, 7)),
    nn.Flatten(),
    nn.LazyLinear(512),
    nn.ReLU(),
    nn.Dropout(0.5),
    nn.LazyLinear(num_classes)
)`
    },

    {
      type: "heading",
      level: 2,
      text: "19. Common VGG Mistakes"
    },
    {
      type: "list",
      items: [
        "Forgetting padding in 3×3 convolutions.",
        "Pooling after every individual convolution when a block design is intended.",
        "Hard-coding an incorrect flattened feature size.",
        "Using an input resolution inconsistent with the architecture.",
        "Creating an unnecessarily large classifier for a small dataset.",
        "Forgetting to move both model and tensors to the same device."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "20. Interview Questions"
    },
    {
      type: "question",
      question: "Why does VGG use many 3×3 convolutions?",
      answer:
        "Small kernels provide a regular architecture and allow multiple nonlinear transformations to be stacked while gradually increasing the effective receptive field."
    },

    {
      type: "question",
      question: "Why does VGG increase channels while reducing spatial dimensions?",
      answer:
        "Reducing spatial dimensions controls computation while increasing channels allows the representation to encode richer feature information."
    },

    {
      type: "question",
      question: "What is the major computational weakness of classical VGG?",
      answer:
        "Its large fully connected classification layers can contain a very large number of parameters."
    },

    {
      type: "heading",
      level: 2,
      text: "21. Coding Exercise"
    },
    {
      type: "list",
      items: [
        "Implement a two-block VGG network.",
        "Change the number of convolutional layers in each block.",
        "Print the tensor shape after every block.",
        "Compare parameter counts for two architectures.",
        "Replace the fully connected head with global average pooling."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "22. Practical Challenge"
    },
    {
      type: "paragraph",
      text:
        "Build two VGG-style classifiers for the same image dataset. Keep the first model shallow and the second model deeper. Compare training time, parameter count, validation accuracy, and memory usage. The goal is to understand the engineering trade-off rather than simply maximizing depth."
    },

    {
      type: "heading",
      level: 2,
      text: "23. Lesson Summary"
    },
    {
      type: "list",
      items: [
        "VGG organizes CNNs into reusable blocks.",
        "3×3 convolutions are the core spatial operation.",
        "Padding preserves spatial resolution within a block.",
        "Pooling reduces spatial resolution between blocks.",
        "Channel count generally increases as spatial size decreases.",
        "VGG demonstrates the value of deep and systematic architectures.",
        "Large fully connected layers remain an important limitation."
      ]
    },

    {
      type: "keyTakeaway",
      text:
        "The key lesson of VGG is architectural discipline: instead of inventing every layer separately, construct deep CNNs from repeated, understandable blocks."
    }
  ]
};

export default lesson9;