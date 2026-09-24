const lesson11 = {
  id: "lesson11",
  title: "GoogLeNet and Inception Blocks",
  moduleId: "module3",
  duration: "105 min",
  level: "Intermediate",
  description:
    "Learn how GoogLeNet combines multiple convolution branches with different receptive-field sizes and channel-reduction operations to build computationally efficient CNNs.",

  content: [
    {
      type: "heading",
      level: 2,
      text: "1. Why GoogLeNet?"
    },
    {
      type: "paragraph",
      text:
        "CNN architecture design involves competing goals. A network should learn rich features, but increasing the number of layers, channels, and kernel sizes can dramatically increase computation."
    },

    {
      type: "paragraph",
      text:
        "GoogLeNet introduces a multi-branch design in which different operations are applied in parallel and their outputs are combined. This structure became known through the Inception architecture."
    },

    {
      type: "heading",
      level: 2,
      text: "2. The Inception Idea"
    },
    {
      type: "paragraph",
      text:
        "Instead of choosing a single convolution size for every location, an Inception block allows several transformations to process the same input. Their outputs are concatenated along the channel dimension."
    },

    {
      type: "process",
      title: "Inception Block",
      steps: [
        "Receive input feature map",
        "Branch 1: 1×1 convolution",
        "Branch 2: 1×1 convolution followed by 3×3 convolution",
        "Branch 3: 1×1 convolution followed by 5×5 convolution",
        "Branch 4: pooling followed by 1×1 convolution",
        "Concatenate branch outputs"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "3. Why Multiple Branches?"
    },
    {
      type: "paragraph",
      text:
        "Different kernel sizes observe different spatial neighborhoods. Smaller kernels focus on local details, while larger kernels capture broader spatial patterns. Pooling provides another form of feature transformation."
    },

    {
      type: "table",
      headers: ["Branch", "Operation", "Purpose"],
      rows: [
        ["1", "1×1 convolution", "Channel transformation"],
        ["2", "1×1 → 3×3", "Medium local context"],
        ["3", "1×1 → 5×5", "Larger local context"],
        ["4", "Pooling → 1×1", "Pooling-based representation"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "4. Why Use 1×1 Convolutions Before Larger Kernels?"
    },
    {
      type: "paragraph",
      text:
        "Large convolution kernels can be expensive when the input has many channels. A 1×1 convolution can first reduce the number of channels before the larger convolution is applied."
    },

    {
      type: "formula",
      text: "1×1 reduction → fewer channels → cheaper spatial convolution"
    },

    {
      type: "heading",
      level: 2,
      text: "5. A Simple Inception Block"
    },
    {
      type: "code",
      language: "python",
      title: "Inception Block",
      code: `import torch
from torch import nn

class InceptionBlock(nn.Module):
    def __init__(
        self,
        in_channels,
        c1,
        c2_reduce,
        c2,
        c3_reduce,
        c3,
        c4
    ):
        super().__init__()

        self.branch1 = nn.Sequential(
            nn.Conv2d(
                in_channels,
                c1,
                kernel_size=1
            ),
            nn.ReLU()
        )

        self.branch2 = nn.Sequential(
            nn.Conv2d(
                in_channels,
                c2_reduce,
                kernel_size=1
            ),
            nn.ReLU(),

            nn.Conv2d(
                c2_reduce,
                c2,
                kernel_size=3,
                padding=1
            ),
            nn.ReLU()
        )

        self.branch3 = nn.Sequential(
            nn.Conv2d(
                in_channels,
                c3_reduce,
                kernel_size=1
            ),
            nn.ReLU(),

            nn.Conv2d(
                c3_reduce,
                c3,
                kernel_size=5,
                padding=2
            ),
            nn.ReLU()
        )

        self.branch4 = nn.Sequential(
            nn.MaxPool2d(
                kernel_size=3,
                stride=1,
                padding=1
            ),
            nn.Conv2d(
                in_channels,
                c4,
                kernel_size=1
            ),
            nn.ReLU()
        )

    def forward(self, x):
        b1 = self.branch1(x)
        b2 = self.branch2(x)
        b3 = self.branch3(x)
        b4 = self.branch4(x)

        return torch.cat(
            [b1, b2, b3, b4],
            dim=1
        )`
    },

    {
      type: "heading",
      level: 2,
      text: "6. Understanding Concatenation"
    },
    {
      type: "paragraph",
      text:
        "The branches must produce the same height and width so they can be concatenated along the channel dimension."
    },

    {
      type: "formula",
      text: "Output channels = C1 + C2 + C3 + C4"
    },

    {
      type: "code",
      language: "python",
      title: "Testing the Inception Block",
      code: `import torch

block = InceptionBlock(
    in_channels=64,
    c1=32,
    c2_reduce=32,
    c2=64,
    c3_reduce=16,
    c3=32,
    c4=32
)

x = torch.randn(2, 64, 28, 28)

y = block(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([2, 64, 28, 28])
Output: torch.Size([2, 160, 28, 28])`
    },

    {
      type: "heading",
      level: 2,
      text: "7. Why Spatial Dimensions Match"
    },
    {
      type: "paragraph",
      text:
        "The 3×3 branch uses padding 1 and stride 1. The 5×5 branch uses padding 2 and stride 1. The pooling branch also preserves resolution through padding and stride choices."
    },

    {
      type: "heading",
      level: 2,
      text: "8. Building a GoogLeNet-Style Network"
    },
    {
      type: "code",
      language: "python",
      title: "Compact GoogLeNet-Style Model",
      code: `import torch
from torch import nn

class GoogLeNetStyle(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()

        self.stem = nn.Sequential(
            nn.Conv2d(3, 64, kernel_size=7, stride=2, padding=3),
            nn.ReLU(),
            nn.MaxPool2d(3, stride=2, padding=1),

            nn.Conv2d(64, 64, kernel_size=1),
            nn.ReLU(),

            nn.Conv2d(64, 192, kernel_size=3, padding=1),
            nn.ReLU(),

            nn.MaxPool2d(3, stride=2, padding=1)
        )

        self.inception1 = InceptionBlock(
            192,
            64,
            96,
            128,
            16,
            32,
            32
        )

        self.pool = nn.MaxPool2d(
            3,
            stride=2,
            padding=1
        )

        self.inception2 = InceptionBlock(
            256,
            128,
            128,
            192,
            32,
            96,
            64
        )

        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d((1, 1)),
            nn.Flatten(),
            nn.Linear(480, num_classes)
        )

    def forward(self, x):
        x = self.stem(x)
        x = self.inception1(x)
        x = self.pool(x)
        x = self.inception2(x)
        x = self.classifier(x)
        return x


model = GoogLeNetStyle()

x = torch.randn(2, 3, 96, 96)

y = model(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([2, 3, 96, 96])
Output: torch.Size([2, 10])`
    },

    {
      type: "heading",
      level: 2,
      text: "9. Multi-Scale Feature Extraction"
    },
    {
      type: "paragraph",
      text:
        "The major conceptual advantage of Inception is that feature extraction happens at multiple spatial scales inside the same block. The network does not need to commit to a single receptive-field size."
    },

    {
      type: "heading",
      level: 2,
      text: "10. Computational Efficiency"
    },
    {
      type: "paragraph",
      text:
        "The architecture uses 1×1 convolutions to control channel counts before more expensive spatial convolutions. This makes the multi-branch design substantially more practical than simply applying large convolutions to every channel."
    },

    {
      type: "heading",
      level: 2,
      text: "11. Global Average Pooling"
    },
    {
      type: "paragraph",
      text:
        "GoogLeNet-style architectures can use global average pooling before classification. This reduces dependence on a very large fully connected classifier and keeps the final representation compact."
    },

    {
      type: "heading",
      level: 2,
      text: "12. Why Branches Are Concatenated"
    },
    {
      type: "paragraph",
      text:
        "Each branch learns a different type of transformation. Concatenation preserves the information produced by all branches so later layers can learn how to combine them."
    },

    {
      type: "formula",
      text: "Combined representation = [Branch1 || Branch2 || Branch3 || Branch4]"
    },

    {
      type: "heading",
      level: 2,
      text: "13. GoogLeNet Architecture Thinking"
    },
    {
      type: "process",
      title: "Architecture Reasoning",
      steps: [
        "Start with broad feature extraction",
        "Reduce spatial resolution",
        "Use multi-branch processing",
        "Control channels with 1×1 convolutions",
        "Repeat feature extraction",
        "Aggregate information",
        "Use compact classification"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "14. Training Considerations"
    },
    {
      type: "paragraph",
      text:
        "The original source demonstrates training GoogLeNet-style models on resized Fashion-MNIST data. The important engineering idea is that large image dimensions increase computation rapidly, so reducing the input resolution can make experimentation practical."
    },

    {
      type: "code",
      language: "python",
      title: "Basic Training Configuration",
      code: `import torch
from torch import nn

model = GoogLeNetStyle(num_classes=10)

device = torch.device(
    "cuda" if torch.cuda.is_available() else "cpu"
)

model = model.to(device)

loss_fn = nn.CrossEntropyLoss()

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

print("Device:", device)
print("Optimizer:", optimizer.__class__.__name__)`
    },

    {
      type: "heading",
      level: 2,
      text: "15. GoogLeNet vs VGG"
    },
    {
      type: "table",
      headers: ["Aspect", "VGG", "GoogLeNet"],
      rows: [
        ["Core design", "Sequential blocks", "Parallel branches"],
        ["Kernel strategy", "Mostly 3×3", "Multiple scales"],
        ["1×1 convolution", "Supporting role", "Important channel reduction"],
        ["Computation", "Can become expensive", "Designed for efficiency"],
        ["Architecture style", "Uniform", "Multi-branch"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "16. Common Implementation Error: Wrong Channel Count"
    },
    {
      type: "paragraph",
      text:
        "A common mistake is forgetting that concatenation changes the channel count. If the four branches output 32, 64, 32, and 32 channels, the next layer must receive 160 channels."
    },

    {
      type: "formula",
      text: "32 + 64 + 32 + 32 = 160 channels"
    },

    {
      type: "heading",
      level: 2,
      text: "17. Common Implementation Error: Shape Mismatch"
    },
    {
      type: "paragraph",
      text:
        "All branches must have matching height and width before concatenation. Check kernel size, stride, and padding whenever a concatenation error occurs."
    },

    {
      type: "heading",
      level: 2,
      text: "18. Common Implementation Error: Incorrect Linear Layer"
    },
    {
      type: "paragraph",
      text:
        "If global average pooling produces C channels, flattening produces exactly C features per example. The final linear layer should therefore expect C input features."
    },

    {
      type: "heading",
      level: 2,
      text: "19. Interview Questions"
    },
    {
      type: "question",
      question: "What is the main idea of an Inception block?",
      answer:
        "It processes the same feature map through multiple branches using different transformations and concatenates the resulting representations."
    },

    {
      type: "question",
      question: "Why are 1×1 convolutions useful in Inception?",
      answer:
        "They can reduce or transform the channel dimension before more expensive spatial convolutions."
    },

    {
      type: "question",
      question: "Why must Inception branches have matching spatial dimensions?",
      answer:
        "Because their outputs are concatenated along the channel dimension."
    },

    {
      type: "heading",
      level: 2,
      text: "20. Coding Exercises"
    },
    {
      type: "list",
      items: [
        "Implement a four-branch Inception block.",
        "Change the number of channels in each branch.",
        "Print every branch shape before concatenation.",
        "Build two consecutive Inception blocks.",
        "Replace the final classifier with global average pooling."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "21. Practical Challenge"
    },
    {
      type: "paragraph",
      text:
        "Implement two classifiers using the same input dataset. One should use a VGG-style sequential design and the other should use an Inception-style multi-branch design. Compare parameter count, computational cost, and validation performance."
    },

    {
      type: "heading",
      level: 2,
      text: "22. Lesson Summary"
    },
    {
      type: "list",
      items: [
        "GoogLeNet uses multi-branch Inception blocks.",
        "Different branches capture different spatial patterns.",
        "1×1 convolutions help control channel dimensions.",
        "Branch outputs are concatenated along the channel axis.",
        "Global average pooling can provide a compact classification head.",
        "The architecture focuses strongly on computation-aware design."
      ]
    },

    {
      type: "keyTakeaway",
      text:
        "GoogLeNet demonstrates that CNNs do not have to process every feature map through the same operation. Parallel branches allow the network to combine multiple receptive-field scales while controlling computation."
    }
  ]
};

export default lesson11;