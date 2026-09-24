const lesson15 = {
  id: "lesson15",
  title: "Designing Convolutional Network Architectures",
  moduleId: "module3",
  duration: "110 min",
  level: "Advanced",
  description:
    "Learn how modern CNN architectures can be designed systematically using stems, stages, blocks, depth, width, groups, bottlenecks, AnyNet design spaces, and RegNet principles.",

  content: [
    {
      type: "heading",
      level: 2,
      text: "1. Why Study CNN Architecture Design?"
    },
    {
      type: "paragraph",
      text:
        "Modern CNN development is not only about implementing a known architecture. A practical deep learning engineer must understand how architectural choices affect accuracy, computation, memory, latency, and scalability."
    },

    {
      type: "paragraph",
      text:
        "Earlier architectures such as VGG, NiN, GoogLeNet, ResNet, and DenseNet introduced different design principles. This lesson brings those ideas together and studies how CNN architectures can be described as structured design spaces."
    },

    {
      type: "heading",
      level: 2,
      text: "2. From Manual Architecture Design to Design Spaces"
    },
    {
      type: "paragraph",
      text:
        "Historically, many CNN architectures were designed by researchers choosing layer widths, depths, kernel sizes, and connection patterns manually. As the number of possible architectures increases, systematic exploration becomes increasingly valuable."
    },

    {
      type: "heading",
      level: 2,
      text: "3. The Stem, Body, and Head"
    },
    {
      type: "paragraph",
      text:
        "A common abstraction is to divide a CNN into three major parts: the stem, the body, and the head."
    },

    {
      type: "table",
      headers: ["Component", "Main Responsibility"],
      rows: [
        ["Stem", "Initial processing of the raw image"],
        ["Body", "Main feature extraction through stages and blocks"],
        ["Head", "Converts learned representation into task output"]
      ]
    },

    {
      type: "process",
      title: "Generic CNN",
      steps: [
        "Input image",
        "Stem",
        "Stage 1",
        "Stage 2",
        "Stage 3",
        "Stage 4",
        "Global representation",
        "Head / classifier"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "4. What Is a Stage?"
    },
    {
      type: "paragraph",
      text:
        "A stage contains one or more blocks operating at a particular spatial resolution and channel width. Moving to a later stage commonly reduces spatial resolution while increasing channel capacity."
    },

    {
      type: "formula",
      text: "Later stages → lower resolution + richer channel representation"
    },

    {
      type: "heading",
      level: 2,
      text: "5. What Is a Block?"
    },
    {
      type: "paragraph",
      text:
        "A block is a reusable architectural unit. Depending on the network, a block may be a VGG block, Inception block, residual block, grouped residual block, or dense block."
    },

    {
      type: "heading",
      level: 2,
      text: "6. Architectural Parameters"
    },
    {
      type: "paragraph",
      text:
        "A CNN design space can be described using several parameters. Important examples include stage depth, channel width, group count, and bottleneck ratio."
    },

    {
      type: "table",
      headers: ["Parameter", "Meaning"],
      rows: [
        ["Depth", "Number of blocks or transformations"],
        ["Width", "Number of output channels"],
        ["Groups", "Number of groups in grouped convolution"],
        ["Bottleneck ratio", "Controls intermediate channel width"],
        ["Resolution", "Spatial dimensions of feature maps"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "7. Depth"
    },
    {
      type: "paragraph",
      text:
        "Depth describes how many transformations are stacked. Increasing depth can increase representational capacity, but it also affects computation, memory, optimization difficulty, and latency."
    },

    {
      type: "heading",
      level: 2,
      text: "8. Width"
    },
    {
      type: "paragraph",
      text:
        "Width generally refers to the number of channels in a stage. Increasing width gives each spatial location a richer feature vector but increases computation and parameter count."
    },

    {
      type: "formula",
      text: "More channels → more representation capacity + higher computation"
    },

    {
      type: "heading",
      level: 2,
      text: "9. Groups"
    },
    {
      type: "paragraph",
      text:
        "Grouped convolutions divide channel processing into separate groups. This can provide structured computation and reduce the cost associated with dense channel-to-channel connectivity."
    },

    {
      type: "code",
      language: "python",
      title: "Grouped Convolution Example",
      code: `import torch
from torch import nn

layer = nn.Conv2d(
    in_channels=64,
    out_channels=128,
    kernel_size=3,
    padding=1,
    groups=4
)

x = torch.randn(
    2,
    64,
    32,
    32
)

y = layer(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "heading",
      level: 2,
      text: "10. Bottleneck Ratio"
    },
    {
      type: "paragraph",
      text:
        "A bottleneck architecture temporarily reduces the channel dimension inside a block before expanding it again. This can reduce the computational cost of expensive transformations."
    },

    {
      type: "formula",
      text: "Bottleneck width ≈ output width × bottleneck ratio"
    },

    {
      type: "heading",
      level: 2,
      text: "11. AnyNet Design Space"
    },
    {
      type: "paragraph",
      text:
        "The AnyNet framework provides a structured family of CNN architectures. Instead of considering every possible neural network independently, the architecture is described through stages and parameter choices."
    },

    {
      type: "process",
      title: "AnyNet Structure",
      steps: [
        "Stem",
        "Body",
        "Stage 1",
        "Stage 2",
        "Stage 3",
        "Stage 4",
        "Head"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "12. Stage-Level Design Choices"
    },
    {
      type: "paragraph",
      text:
        "For each stage, the architecture can be described by the number of blocks, channel width, number of groups, and bottleneck ratio."
    },

    {
      type: "formula",
      text: "Stage i ≈ (depth di, channels ci, groups gi, bottleneck ki)"
    },

    {
      type: "heading",
      level: 2,
      text: "13. Why Share Design Parameters?"
    },
    {
      type: "paragraph",
      text:
        "Allowing every stage to use completely independent parameters creates an enormous search space. Restricting some parameters to be shared makes the design space easier to explore while retaining useful architectural flexibility."
    },

    {
      type: "heading",
      level: 2,
      text: "14. Increasing Width Across Stages"
    },
    {
      type: "paragraph",
      text:
        "A common design principle is to increase channel width as the network progresses to deeper stages."
    },

    {
      type: "formula",
      text: "c1 ≤ c2 ≤ c3 ≤ c4"
    },

    {
      type: "paragraph",
      text:
        "At the same time, spatial resolution generally decreases."
    },

    {
      type: "formula",
      text: "r1 ≥ r2 ≥ r3 ≥ r4"
    },

    {
      type: "heading",
      level: 2,
      text: "15. Increasing Depth Across Stages"
    },
    {
      type: "paragraph",
      text:
        "The source discusses design spaces where the number of blocks can increase or remain non-decreasing across stages."
    },

    {
      type: "formula",
      text: "d1 ≤ d2 ≤ d3 ≤ d4"
    },

    {
      type: "heading",
      level: 2,
      text: "16. RegNet"
    },
    {
      type: "paragraph",
      text:
        "RegNet is a family of convolutional networks designed from structured network design principles. The design focuses on producing interpretable and effective families of networks rather than searching for a single isolated architecture."
    },

    {
      type: "heading",
      level: 2,
      text: "17. RegNet Width Progression"
    },
    {
      type: "paragraph",
      text:
        "The source describes an approximately linear relationship between block index and network width, implemented as a piecewise constant width across stages."
    },

    {
      type: "formula",
      text: "cj ≈ c0 + ca × j"
    },

    {
      type: "paragraph",
      text:
        "Here c0 represents a starting width and ca represents the rate at which width increases with block index."
    },

    {
      type: "heading",
      level: 2,
      text: "18. RegNetX Example"
    },
    {
      type: "paragraph",
      text:
        "The source presents a 32-layer RegNetX example using a group width of 16, no bottleneck reduction, and stage widths of 32 and 80 channels in the simplified two-stage example."
    },

    {
      type: "table",
      headers: ["Parameter", "Example Value"],
      rows: [
        ["Bottleneck ratio", "1"],
        ["Group width", "16"],
        ["Stage 1 channels", "32"],
        ["Stage 2 channels", "80"],
        ["Stage 1 depth", "4"],
        ["Stage 2 depth", "6"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "19. RegNet-Style Implementation"
    },
    {
      type: "code",
      language: "python",
      title: "Simplified RegNet-Style Block",
      code: `import torch
from torch import nn


class RegBlock(nn.Module):
    def __init__(
        self,
        in_channels,
        out_channels,
        groups=1,
        stride=1
    ):
        super().__init__()

        self.conv1 = nn.Conv2d(
            in_channels,
            out_channels,
            kernel_size=3,
            stride=stride,
            padding=1,
            groups=groups,
            bias=False
        )

        self.bn1 = nn.BatchNorm2d(
            out_channels
        )

        self.relu = nn.ReLU()

        self.conv2 = nn.Conv2d(
            out_channels,
            out_channels,
            kernel_size=3,
            padding=1,
            groups=groups,
            bias=False
        )

        self.bn2 = nn.BatchNorm2d(
            out_channels
        )

        if (
            stride != 1
            or in_channels != out_channels
        ):
            self.shortcut = nn.Sequential(
                nn.Conv2d(
                    in_channels,
                    out_channels,
                    kernel_size=1,
                    stride=stride,
                    bias=False
                ),
                nn.BatchNorm2d(
                    out_channels
                )
            )
        else:
            self.shortcut = nn.Identity()

    def forward(self, x):
        identity = self.shortcut(x)

        y = self.conv1(x)
        y = self.bn1(y)
        y = self.relu(y)

        y = self.conv2(y)
        y = self.bn2(y)

        y = y + identity

        return self.relu(y)


x = torch.randn(
    2,
    32,
    24,
    24
)

block = RegBlock(
    32,
    80,
    groups=4,
    stride=2
)

y = block(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([2, 32, 24, 24])
Output: torch.Size([2, 80, 12, 12])`
    },

    {
      type: "heading",
      level: 2,
      text: "20. Architecture Scaling"
    },
    {
      type: "paragraph",
      text:
        "A useful architecture should not only work at one computational budget. Design families make it possible to construct smaller and larger networks while retaining common structural principles."
    },

    {
      type: "heading",
      level: 2,
      text: "21. Accuracy vs Computation"
    },
    {
      type: "paragraph",
      text:
        "CNN design is an engineering trade-off. Increasing depth or width can improve representational capacity, but it can also increase training cost, inference latency, and memory requirements."
    },

    {
      type: "table",
      headers: ["Change", "Potential Benefit", "Potential Cost"],
      rows: [
        ["Increase depth", "More transformations", "More computation"],
        ["Increase width", "Richer features", "More parameters"],
        ["Increase groups", "Structured computation", "Different connectivity"],
        ["Higher input resolution", "More spatial detail", "Much higher computation"],
        ["More stages", "Hierarchical features", "Greater complexity"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "22. CNN Design Workflow"
    },
    {
      type: "process",
      title: "Architecture Engineering Workflow",
      steps: [
        "Define the task",
        "Choose input resolution",
        "Select a stem",
        "Define stages",
        "Choose block type",
        "Choose stage depths",
        "Choose channel widths",
        "Choose grouping and bottleneck settings",
        "Choose classification head",
        "Measure computation and memory",
        "Train and evaluate",
        "Iterate"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "23. Parameter Count"
    },
    {
      type: "paragraph",
      text:
        "Parameter count is one useful measure of model size. It is not the only measure that matters because runtime also depends on tensor dimensions, hardware, memory access, and implementation."
    },

    {
      type: "formula",
      text: "Conv parameters = KernelHeight × KernelWidth × Cin × Cout + Cout"
    },

    {
      type: "heading",
      level: 2,
      text: "24. FLOPs and Runtime"
    },
    {
      type: "paragraph",
      text:
        "Floating-point operations provide an approximation of computational work. However, two models with similar operation counts can have different real-world runtimes because hardware utilization, memory movement, parallelism, and implementation efficiency also matter."
    },

    {
      type: "heading",
      level: 2,
      text: "25. Memory Is Also Important"
    },
    {
      type: "paragraph",
      text:
        "Training requires memory for parameters, gradients, optimizer states, and intermediate activations. A model with moderate parameter count can still require substantial memory if it keeps large feature maps."
    },

    {
      type: "heading",
      level: 2,
      text: "26. Designing for Hardware"
    },
    {
      type: "paragraph",
      text:
        "Architecture design should consider the target hardware. GPU-friendly operations, channel dimensions, batch sizes, memory bandwidth, and parallelism can all influence actual performance."
    },

    {
      type: "heading",
      level: 2,
      text: "27. Manual Design vs Automated Search"
    },
    {
      type: "paragraph",
      text:
        "Neural architecture search can explore architecture spaces automatically, but large searches can be computationally expensive. Structured design spaces attempt to obtain useful architectural insights without evaluating every possible network."
    },

    {
      type: "heading",
      level: 2,
      text: "28. CNN Architecture Evolution"
    },
    {
      type: "process",
      title: "Major Design Ideas",
      steps: [
        "LeNet → convolution and pooling",
        "AlexNet → deeper large-scale CNNs",
        "VGG → repeated small-convolution blocks",
        "NiN → 1×1 transformations and global pooling",
        "GoogLeNet → multi-branch Inception blocks",
        "ResNet → residual connections",
        "ResNeXt → grouped residual transformations",
        "DenseNet → dense feature reuse",
        "RegNet → structured architecture design spaces"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "29. Building Your Own Architecture"
    },
    {
      type: "code",
      language: "python",
      title: "Small Configurable CNN",
      code: `import torch
from torch import nn


class ConfigurableCNN(nn.Module):
    def __init__(
        self,
        channels,
        num_classes=10
    ):
        super().__init__()

        layers = []

        in_channels = 3

        for out_channels in channels:
            layers.extend([
                nn.Conv2d(
                    in_channels,
                    out_channels,
                    kernel_size=3,
                    padding=1
                ),
                nn.BatchNorm2d(
                    out_channels
                ),
                nn.ReLU(),
                nn.MaxPool2d(2)
            ])

            in_channels = out_channels

        self.features = nn.Sequential(
            *layers
        )

        self.head = nn.Sequential(
            nn.AdaptiveAvgPool2d((1, 1)),
            nn.Flatten(),
            nn.Linear(
                in_channels,
                num_classes
            )
        )

    def forward(self, x):
        x = self.features(x)
        return self.head(x)


model = ConfigurableCNN(
    channels=(32, 64, 128)
)

x = torch.randn(
    4,
    3,
    64,
    64
)

y = model(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "heading",
      level: 2,
      text: "30. Architecture Experiment"
    },
    {
      type: "paragraph",
      text:
        "The configurable model allows you to experiment with channel widths without rewriting the architecture. This is a small example of how a design space can be represented programmatically."
    },

    {
      type: "heading",
      level: 2,
      text: "31. Common Design Mistakes"
    },
    {
      type: "list",
      items: [
        "Increasing depth without considering optimization.",
        "Increasing channels without considering memory.",
        "Ignoring input resolution when estimating computation.",
        "Using incompatible group counts.",
        "Forgetting shortcut projection when shapes change.",
        "Hard-coding classifier dimensions unnecessarily.",
        "Optimizing parameter count while ignoring runtime.",
        "Comparing models using different training conditions."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "32. Interview Questions"
    },
    {
      type: "question",
      question: "What are stem, body, and head?",
      answer:
        "The stem performs initial image processing, the body performs the main feature extraction, and the head converts the learned representation into the task output."
    },

    {
      type: "question",
      question: "What parameters describe an AnyNet-style stage?",
      answer:
        "Important parameters include stage depth, channel width, group count, and bottleneck ratio."
    },

    {
      type: "question",
      question: "Why should channel width usually increase across stages?",
      answer:
        "As spatial resolution decreases, increasing channels provides richer feature representations while controlling the total spatial computation."
    },

    {
      type: "question",
      question: "Why are architecture design spaces useful?",
      answer:
        "They allow systematic exploration of families of networks instead of treating every architecture as an unrelated design."
    },

    {
      type: "heading",
      level: 2,
      text: "33. Coding Exercises"
    },
    {
      type: "list",
      items: [
        "Build a configurable CNN.",
        "Create three different channel configurations.",
        "Add grouped convolution.",
        "Add residual blocks.",
        "Measure parameter counts.",
        "Measure inference time.",
        "Compare memory usage.",
        "Create a small architecture search experiment."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "34. Final Module 3 Challenge"
    },
    {
      type: "paragraph",
      text:
        "Design three CNN architectures using different principles studied in this module: a VGG-style network, a residual network, and a grouped or multi-branch network. Keep the dataset and training procedure consistent. Compare parameter count, model size, training time, inference time, and validation performance."
    },

    {
      type: "heading",
      level: 2,
      text: "35. Lesson Summary"
    },
    {
      type: "list",
      items: [
        "Modern CNNs can be described using stems, bodies, stages, blocks, and heads.",
        "Depth controls the number of transformations.",
        "Width controls channel capacity.",
        "Groups control channel connectivity.",
        "Bottleneck ratios control intermediate representation width.",
        "AnyNet provides a structured architecture design space.",
        "RegNet uses systematic principles for constructing CNN families.",
        "Architecture design must consider accuracy, computation, memory, and hardware."
      ]
    },

    {
      type: "keyTakeaway",
      text:
        "Modern CNN engineering is not simply about making networks deeper or wider. Good architecture design treats depth, width, groups, resolution, connectivity, computation, and hardware efficiency as interacting design variables."
    }
  ]
};

export default lesson15;