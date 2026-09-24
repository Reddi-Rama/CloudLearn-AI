const lesson13 = {
  id: "lesson13",
  title: "Residual Networks (ResNet) and ResNeXt",
  moduleId: "module3",
  duration: "110 min",
  level: "Advanced",
  description:
    "Understand residual learning, skip connections, residual blocks, ResNet architectures, ResNet-18, and the grouped-convolution idea behind ResNeXt.",

  content: [
    {
      type: "heading",
      level: 2,
      text: "1. Why Very Deep Networks Become Difficult"
    },
    {
      type: "paragraph",
      text:
        "Increasing the depth of a neural network gives the model more opportunities to learn hierarchical representations. However, simply stacking more layers does not guarantee better optimization. Very deep networks can become increasingly difficult to train, even when they have enough capacity to represent useful functions."
    },

    {
      type: "paragraph",
      text:
        "Residual Networks address this problem by changing what each group of layers is asked to learn. Instead of requiring a block to learn a complete transformation directly, the block learns a residual transformation that is added to the original input."
    },

    {
      type: "heading",
      level: 2,
      text: "2. The Residual Learning Idea"
    },
    {
      type: "paragraph",
      text:
        "Suppose a desired transformation is H(x). A conventional block attempts to learn H(x) directly. A residual block instead learns F(x) and constructs the output as H(x) = F(x) + x when the input and output shapes match."
    },

    {
      type: "formula",
      text: "H(x) = F(x) + x"
    },

    {
      type: "paragraph",
      text:
        "The original input is called the shortcut or skip connection. The learned transformation F(x) is called the residual function."
    },

    {
      type: "process",
      title: "Residual Block",
      steps: [
        "Input x enters the block",
        "The main path computes F(x)",
        "The shortcut carries x forward",
        "F(x) and x are added",
        "Activation is applied",
        "The resulting representation is passed to the next block"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "3. Why Learn a Residual?"
    },
    {
      type: "paragraph",
      text:
        "If the desired transformation is already close to the identity mapping, learning the residual can be easier than learning the complete transformation. In that situation, the residual function can approach zero while the shortcut preserves the original information."
    },

    {
      type: "formula",
      text: "If F(x) ≈ 0, then H(x) ≈ x"
    },

    {
      type: "heading",
      level: 2,
      text: "4. Identity Mapping"
    },
    {
      type: "paragraph",
      text:
        "The shortcut connection creates a direct path through the network. This identity path is especially important when constructing very deep networks because information does not have to pass exclusively through every transformation in the main branch."
    },

    {
      type: "heading",
      level: 2,
      text: "5. Basic Residual Block"
    },
    {
      type: "code",
      language: "python",
      title: "Basic Residual Block",
      code: `import torch
from torch import nn


class ResidualBlock(nn.Module):
    def __init__(
        self,
        channels,
        stride=1
    ):
        super().__init__()

        self.conv1 = nn.Conv2d(
            channels,
            channels,
            kernel_size=3,
            stride=stride,
            padding=1
        )

        self.bn1 = nn.BatchNorm2d(channels)

        self.conv2 = nn.Conv2d(
            channels,
            channels,
            kernel_size=3,
            padding=1
        )

        self.bn2 = nn.BatchNorm2d(channels)

        self.relu = nn.ReLU()

    def forward(self, x):
        shortcut = x

        y = self.conv1(x)
        y = self.bn1(y)
        y = self.relu(y)

        y = self.conv2(y)
        y = self.bn2(y)

        y = y + shortcut
        y = self.relu(y)

        return y


block = ResidualBlock(64)

x = torch.randn(4, 64, 32, 32)

y = block(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([4, 64, 32, 32])
Output: torch.Size([4, 64, 32, 32])`
    },

    {
      type: "heading",
      level: 2,
      text: "6. Shape Matching Is Essential"
    },
    {
      type: "paragraph",
      text:
        "Element-wise addition requires the tensors to have compatible shapes. Therefore, a simple identity shortcut works only when the input and residual output have matching dimensions."
    },

    {
      type: "heading",
      level: 2,
      text: "7. What If Channels or Resolution Change?"
    },
    {
      type: "paragraph",
      text:
        "When a residual block changes the number of channels or reduces spatial resolution, the shortcut must also be transformed. A 1×1 convolution can perform this projection."
    },

    {
      type: "formula",
      text: "Shortcut(x) = Conv1×1(x)"
    },

    {
      type: "code",
      language: "python",
      title: "Residual Block with Projection",
      code: `import torch
from torch import nn


class ResidualBlock(nn.Module):
    def __init__(
        self,
        in_channels,
        out_channels,
        stride=1
    ):
        super().__init__()

        self.conv1 = nn.Conv2d(
            in_channels,
            out_channels,
            kernel_size=3,
            stride=stride,
            padding=1
        )

        self.bn1 = nn.BatchNorm2d(
            out_channels
        )

        self.conv2 = nn.Conv2d(
            out_channels,
            out_channels,
            kernel_size=3,
            padding=1
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
                    stride=stride
                ),
                nn.BatchNorm2d(
                    out_channels
                )
            )
        else:
            self.shortcut = nn.Identity()

        self.relu = nn.ReLU()

    def forward(self, x):
        shortcut = self.shortcut(x)

        y = self.conv1(x)
        y = self.bn1(y)
        y = self.relu(y)

        y = self.conv2(y)
        y = self.bn2(y)

        y = y + shortcut

        return self.relu(y)


block = ResidualBlock(
    64,
    128,
    stride=2
)

x = torch.randn(
    4,
    64,
    32,
    32
)

y = block(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([4, 64, 32, 32])
Output: torch.Size([4, 128, 16, 16])`
    },

    {
      type: "heading",
      level: 2,
      text: "8. Understanding the 1×1 Projection"
    },
    {
      type: "paragraph",
      text:
        "The 1×1 convolution can simultaneously change the channel count and perform spatial downsampling when its stride is greater than one. This makes it suitable for aligning the shortcut with the residual branch."
    },

    {
      type: "heading",
      level: 2,
      text: "9. ResNet Stage Design"
    },
    {
      type: "paragraph",
      text:
        "A ResNet is commonly organized into stages. Within a stage, residual blocks operate at the same spatial resolution. At the beginning of a later stage, the resolution is reduced and the number of channels is increased."
    },

    {
      type: "process",
      title: "Typical ResNet Progression",
      steps: [
        "Initial convolution",
        "Stage 1: moderate channels, high resolution",
        "Stage 2: more channels, lower resolution",
        "Stage 3: more channels, lower resolution",
        "Stage 4: more channels, lower resolution",
        "Global average pooling",
        "Final classifier"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "10. ResNet-18"
    },
    {
      type: "paragraph",
      text:
        "ResNet-18 is constructed using four residual stages. The architecture uses two residual blocks in each stage, with channel counts increasing across stages."
    },

    {
      type: "table",
      headers: ["Stage", "Residual Blocks", "Channels", "Spatial Trend"],
      rows: [
        ["Stage 1", "2", "64", "High resolution"],
        ["Stage 2", "2", "128", "Reduced"],
        ["Stage 3", "2", "256", "Reduced"],
        ["Stage 4", "2", "512", "Reduced"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "11. ResNet-18 Implementation"
    },
    {
      type: "code",
      language: "python",
      title: "ResNet-18 Style Network",
      code: `import torch
from torch import nn


class ResidualBlock(nn.Module):
    def __init__(
        self,
        in_channels,
        out_channels,
        stride=1
    ):
        super().__init__()

        self.conv1 = nn.Conv2d(
            in_channels,
            out_channels,
            3,
            stride=stride,
            padding=1,
            bias=False
        )

        self.bn1 = nn.BatchNorm2d(
            out_channels
        )

        self.conv2 = nn.Conv2d(
            out_channels,
            out_channels,
            3,
            padding=1,
            bias=False
        )

        self.bn2 = nn.BatchNorm2d(
            out_channels
        )

        if stride != 1 or in_channels != out_channels:
            self.shortcut = nn.Sequential(
                nn.Conv2d(
                    in_channels,
                    out_channels,
                    1,
                    stride=stride,
                    bias=False
                ),
                nn.BatchNorm2d(
                    out_channels
                )
            )
        else:
            self.shortcut = nn.Identity()

        self.relu = nn.ReLU()

    def forward(self, x):
        identity = self.shortcut(x)

        y = self.conv1(x)
        y = self.bn1(y)
        y = self.relu(y)

        y = self.conv2(y)
        y = self.bn2(y)

        y = y + identity

        return self.relu(y)


def make_stage(
    in_channels,
    out_channels,
    blocks,
    first_stride
):
    layers = [
        ResidualBlock(
            in_channels,
            out_channels,
            first_stride
        )
    ]

    for _ in range(blocks - 1):
        layers.append(
            ResidualBlock(
                out_channels,
                out_channels
            )
        )

    return nn.Sequential(*layers)


class ResNet18(nn.Module):
    def __init__(
        self,
        num_classes=10
    ):
        super().__init__()

        self.stem = nn.Sequential(
            nn.Conv2d(
                3,
                64,
                kernel_size=7,
                stride=2,
                padding=3,
                bias=False
            ),
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.MaxPool2d(
                3,
                stride=2,
                padding=1
            )
        )

        self.stage1 = make_stage(
            64,
            64,
            2,
            1
        )

        self.stage2 = make_stage(
            64,
            128,
            2,
            2
        )

        self.stage3 = make_stage(
            128,
            256,
            2,
            2
        )

        self.stage4 = make_stage(
            256,
            512,
            2,
            2
        )

        self.pool = nn.AdaptiveAvgPool2d(
            (1, 1)
        )

        self.classifier = nn.Linear(
            512,
            num_classes
        )

    def forward(self, x):
        x = self.stem(x)

        x = self.stage1(x)
        x = self.stage2(x)
        x = self.stage3(x)
        x = self.stage4(x)

        x = self.pool(x)
        x = torch.flatten(x, 1)

        return self.classifier(x)


model = ResNet18()

x = torch.randn(
    2,
    3,
    224,
    224
)

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
      text: "12. Global Average Pooling"
    },
    {
      type: "paragraph",
      text:
        "After the final residual stage, global average pooling converts each feature channel into a single value. This produces a compact representation before classification."
    },

    {
      type: "heading",
      level: 2,
      text: "13. Why ResNet Can Become Very Deep"
    },
    {
      type: "paragraph",
      text:
        "Residual connections provide a direct path through many blocks. This changes the optimization problem because each block can focus on learning a residual modification instead of reconstructing the entire representation."
    },

    {
      type: "heading",
      level: 2,
      text: "14. ResNet and Gradient Flow"
    },
    {
      type: "paragraph",
      text:
        "During backpropagation, the addition operation provides a direct route through the shortcut. This helps explain why residual architectures can successfully optimize much deeper networks than straightforward stacks of transformations."
    },

    {
      type: "formula",
      text: "H(x) = F(x) + x"
    },

    {
      type: "paragraph",
      text:
        "The derivative of the addition includes a direct contribution from the identity path, allowing gradient information to propagate through the shortcut."
    },

    {
      type: "heading",
      level: 2,
      text: "15. ResNet Compared with VGG"
    },
    {
      type: "table",
      headers: ["Aspect", "VGG", "ResNet"],
      rows: [
        ["Main structure", "Sequential blocks", "Residual blocks"],
        ["Shortcut", "No", "Yes"],
        ["Core operation", "Stacked convolutions", "Residual transformation + shortcut"],
        ["Very deep training", "More difficult", "Designed for deep networks"],
        ["Resolution changes", "Pooling", "Stride in residual stages"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "16. ResNeXt"
    },
    {
      type: "paragraph",
      text:
        "ResNeXt combines the residual-learning idea with grouped transformations. Instead of processing all channels through one large convolution, grouped convolutions divide computation into separate groups."
    },

    {
      type: "formula",
      text: "ResNeXt = Residual learning + grouped transformations"
    },

    {
      type: "heading",
      level: 2,
      text: "17. Grouped Convolution"
    },
    {
      type: "paragraph",
      text:
        "Grouped convolution divides input and output channels into groups. Each group performs its own convolutional transformation, and the results are combined."
    },

    {
      type: "code",
      language: "python",
      title: "Grouped Convolution",
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
      text: "18. Cardinality"
    },
    {
      type: "paragraph",
      text:
        "The number of independent groups in a grouped transformation is often described as cardinality. Increasing cardinality provides another way of increasing the representational structure of a block without simply making one convolution wider."
    },

    {
      type: "heading",
      level: 2,
      text: "19. ResNeXt and Inception"
    },
    {
      type: "paragraph",
      text:
        "Both Inception and ResNeXt use multiple computational paths. Their implementation philosophies differ, but both demonstrate that computation can be divided into structured groups rather than relying only on one large transformation."
    },

    {
      type: "heading",
      level: 2,
      text: "20. Training a ResNet"
    },
    {
      type: "code",
      language: "python",
      title: "Basic Training Step",
      code: `import torch
from torch import nn

model = ResNet18(num_classes=10)

device = torch.device(
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)

model = model.to(device)

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01,
    momentum=0.9
)

loss_fn = nn.CrossEntropyLoss()

x = torch.randn(
    16,
    3,
    224,
    224,
    device=device
)

target = torch.randint(
    0,
    10,
    (16,),
    device=device
)

model.train()

optimizer.zero_grad()

prediction = model(x)

loss = loss_fn(
    prediction,
    target
)

loss.backward()

optimizer.step()

print("Training step completed")
print("Loss:", loss.item())`
    },

    {
      type: "heading",
      level: 2,
      text: "21. Common ResNet Errors"
    },
    {
      type: "list",
      items: [
        "Adding tensors whose shapes do not match.",
        "Forgetting the projection shortcut when channels change.",
        "Using the wrong stride in a downsampling block.",
        "Forgetting BatchNorm dimensions.",
        "Flattening before global average pooling.",
        "Using the wrong input size for a hard-coded classifier."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "22. Debugging Residual Shapes"
    },
    {
      type: "code",
      language: "python",
      title: "Shape Debugging",
      code: `x = torch.randn(2, 64, 32, 32)

block = ResidualBlock(
    64,
    128,
    stride=2
)

y = block(x)

print("Shortcut-adjusted output:")
print(y.shape)`
    },

    {
      type: "heading",
      level: 2,
      text: "23. Interview Questions"
    },
    {
      type: "question",
      question: "What is residual learning?",
      answer:
        "Instead of learning H(x) directly, a residual block learns F(x) and combines it with the input using H(x) = F(x) + x."
    },

    {
      type: "question",
      question: "Why is a 1×1 convolution used in the shortcut?",
      answer:
        "It aligns the channel count and, when needed, spatial resolution so that the residual and shortcut tensors can be added."
    },

    {
      type: "question",
      question: "What is the main idea behind ResNeXt?",
      answer:
        "It combines residual learning with grouped transformations, providing multiple structured paths inside a residual block."
    },

    {
      type: "heading",
      level: 2,
      text: "24. Coding Exercises"
    },
    {
      type: "list",
      items: [
        "Implement a residual block.",
        "Add a 1×1 projection shortcut.",
        "Build a four-stage ResNet.",
        "Create a ResNet-18 style classifier.",
        "Experiment with grouped convolution.",
        "Compare standard and grouped convolution parameter counts."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "25. Practical Challenge"
    },
    {
      type: "paragraph",
      text:
        "Build a small CNN without residual connections and another CNN with residual blocks. Keep the parameter budget reasonably similar and compare optimization behavior, training loss, validation loss, and inference time."
    },

    {
      type: "heading",
      level: 2,
      text: "26. Lesson Summary"
    },
    {
      type: "list",
      items: [
        "ResNet uses shortcut connections.",
        "Residual blocks learn F(x) instead of the complete H(x).",
        "The output is formed as F(x) + x when shapes match.",
        "1×1 convolutions can align shortcut dimensions.",
        "ResNet uses stages with increasing channels and decreasing resolution.",
        "ResNet-18 contains four residual stages.",
        "ResNeXt adds grouped transformations to residual architectures."
      ]
    },

    {
      type: "keyTakeaway",
      text:
        "ResNet changed deep CNN design by making identity shortcuts a fundamental architectural component. ResNeXt extends the idea using grouped transformations to improve the computation–representation trade-off."
    }
  ]
};

export default lesson13;