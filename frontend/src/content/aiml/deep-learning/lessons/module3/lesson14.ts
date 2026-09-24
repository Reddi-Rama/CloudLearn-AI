const lesson14 = {
  id: "lesson14",
  title: "Densely Connected Networks (DenseNet)",
  moduleId: "module3",
  duration: "105 min",
  level: "Advanced",
  description:
    "Understand DenseNet's dense connectivity, feature reuse, growth rate, dense blocks, transition layers, and complete DenseNet architecture.",

  content: [
    {
      type: "heading",
      level: 2,
      text: "1. Why DenseNet?"
    },
    {
      type: "paragraph",
      text:
        "Residual networks connect a block's input to its output using addition. DenseNet takes a different approach: each layer receives the feature maps produced by all preceding layers in the same dense block."
    },

    {
      type: "formula",
      text: "xℓ = Hℓ([x0, x1, ..., xℓ−1])"
    },

    {
      type: "paragraph",
      text:
        "The square brackets represent concatenation along the channel dimension."
    },

    {
      type: "heading",
      level: 2,
      text: "2. Dense Connectivity"
    },
    {
      type: "paragraph",
      text:
        "In a dense block, the output of one layer is not simply passed to the next layer and discarded from the previous representation. Instead, the new feature maps are concatenated with the existing feature maps and the combined representation becomes the input to the next layer."
    },

    {
      type: "process",
      title: "Dense Connectivity",
      steps: [
        "Start with input features",
        "First convolution produces new features",
        "Concatenate old and new features",
        "Next convolution sees all accumulated features",
        "Concatenate again",
        "Continue through the dense block"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "3. Addition vs Concatenation"
    },
    {
      type: "table",
      headers: ["Architecture", "Connection Operation", "Information Handling"],
      rows: [
        ["ResNet", "Addition", "Combines representations element-wise"],
        ["DenseNet", "Concatenation", "Preserves previous feature maps explicitly"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "4. Why Concatenation?"
    },
    {
      type: "paragraph",
      text:
        "Concatenation allows later layers to directly access earlier representations. This encourages feature reuse and provides a rich collection of features to every subsequent transformation within the dense block."
    },

    {
      type: "heading",
      level: 2,
      text: "5. Dense Layer Block"
    },
    {
      type: "code",
      language: "python",
      title: "Basic Dense Convolution Block",
      code: `import torch
from torch import nn


class DenseConvBlock(nn.Module):
    def __init__(
        self,
        in_channels,
        growth_rate
    ):
        super().__init__()

        self.block = nn.Sequential(
            nn.BatchNorm2d(in_channels),
            nn.ReLU(),
            nn.Conv2d(
                in_channels,
                growth_rate,
                kernel_size=3,
                padding=1
            )
        )

    def forward(self, x):
        return self.block(x)


block = DenseConvBlock(
    in_channels=32,
    growth_rate=16
)

x = torch.randn(
    4,
    32,
    28,
    28
)

new_features = block(x)

print("Input:", x.shape)
print("New features:", new_features.shape)`
    },

    {
      type: "heading",
      level: 2,
      text: "6. Growth Rate"
    },
    {
      type: "paragraph",
      text:
        "The number of new channels produced by each convolutional layer in a dense block is called the growth rate. If each layer adds k new channels, the total channel count grows by k after every layer."
    },

    {
      type: "formula",
      text: "Output channels = Input channels + L × k"
    },

    {
      type: "paragraph",
      text:
        "Here L is the number of layers and k is the growth rate."
    },

    {
      type: "heading",
      level: 2,
      text: "7. Example of Channel Growth"
    },
    {
      type: "paragraph",
      text:
        "Suppose a dense block begins with three channels and contains two layers, each producing ten new channels. After the first layer there are 13 channels. After the second layer there are 23 channels."
    },

    {
      type: "formula",
      text: "3 + 10 + 10 = 23 channels"
    },

    {
      type: "heading",
      level: 2,
      text: "8. Implementing a Dense Block"
    },
    {
      type: "code",
      language: "python",
      title: "Dense Block",
      code: `import torch
from torch import nn


class DenseBlock(nn.Module):
    def __init__(
        self,
        num_layers,
        in_channels,
        growth_rate
    ):
        super().__init__()

        self.layers = nn.ModuleList()

        channels = in_channels

        for _ in range(num_layers):
            self.layers.append(
                nn.Sequential(
                    nn.BatchNorm2d(channels),
                    nn.ReLU(),
                    nn.Conv2d(
                        channels,
                        growth_rate,
                        kernel_size=3,
                        padding=1
                    )
                )
            )

            channels += growth_rate

    def forward(self, x):
        features = [x]

        for layer in self.layers:
            current = torch.cat(
                features,
                dim=1
            )

            new_features = layer(
                current
            )

            features.append(
                new_features
            )

        return torch.cat(
            features,
            dim=1
        )


block = DenseBlock(
    num_layers=2,
    in_channels=3,
    growth_rate=10
)

x = torch.randn(
    4,
    3,
    8,
    8
)

y = block(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([4, 3, 8, 8])
Output: torch.Size([4, 23, 8, 8])`
    },

    {
      type: "heading",
      level: 2,
      text: "9. Why Dense Blocks Need Transition Layers"
    },
    {
      type: "paragraph",
      text:
        "Because every layer adds new channels, the representation can grow rapidly. DenseNet therefore uses transition layers between dense blocks to control model complexity."
    },

    {
      type: "heading",
      level: 2,
      text: "10. Transition Layer"
    },
    {
      type: "paragraph",
      text:
        "A transition layer uses a 1×1 convolution to reduce the number of channels and average pooling to reduce spatial resolution."
    },

    {
      type: "process",
      title: "Transition Layer",
      steps: [
        "Batch normalization",
        "ReLU",
        "1×1 convolution",
        "2×2 average pooling",
        "Reduced channel and spatial dimensions"
      ]
    },

    {
      type: "code",
      language: "python",
      title: "Transition Layer",
      code: `import torch
from torch import nn


class TransitionBlock(nn.Module):
    def __init__(
        self,
        in_channels,
        out_channels
    ):
        super().__init__()

        self.block = nn.Sequential(
            nn.BatchNorm2d(in_channels),
            nn.ReLU(),

            nn.Conv2d(
                in_channels,
                out_channels,
                kernel_size=1
            ),

            nn.AvgPool2d(
                kernel_size=2,
                stride=2
            )
        )

    def forward(self, x):
        return self.block(x)


transition = TransitionBlock(
    23,
    10
)

x = torch.randn(
    4,
    23,
    8,
    8
)

y = transition(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([4, 23, 8, 8])
Output: torch.Size([4, 10, 4, 4])`
    },

    {
      type: "heading",
      level: 2,
      text: "11. DenseNet Architecture"
    },
    {
      type: "paragraph",
      text:
        "A complete DenseNet begins with a convolutional stem, followed by several dense blocks separated by transition layers. A final normalization and classification stage produces the output."
    },

    {
      type: "process",
      title: "DenseNet Structure",
      steps: [
        "Convolutional stem",
        "Dense block",
        "Transition layer",
        "Dense block",
        "Transition layer",
        "Dense block",
        "Transition layer",
        "Final dense block",
        "Global average pooling",
        "Classifier"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "12. Building a DenseNet-Style Model"
    },
    {
      type: "code",
      language: "python",
      title: "Complete DenseNet-Style Network",
      code: `import torch
from torch import nn


class DenseBlock(nn.Module):
    def __init__(
        self,
        num_layers,
        in_channels,
        growth_rate
    ):
        super().__init__()

        self.layers = nn.ModuleList()

        channels = in_channels

        for _ in range(num_layers):
            self.layers.append(
                nn.Sequential(
                    nn.BatchNorm2d(channels),
                    nn.ReLU(),
                    nn.Conv2d(
                        channels,
                        growth_rate,
                        3,
                        padding=1
                    )
                )
            )

            channels += growth_rate

        self.out_channels = channels

    def forward(self, x):
        features = [x]

        for layer in self.layers:
            current = torch.cat(
                features,
                dim=1
            )

            new_features = layer(
                current
            )

            features.append(
                new_features
            )

        return torch.cat(
            features,
            dim=1
        )


class TransitionBlock(nn.Module):
    def __init__(
        self,
        in_channels,
        out_channels
    ):
        super().__init__()

        self.block = nn.Sequential(
            nn.BatchNorm2d(in_channels),
            nn.ReLU(),
            nn.Conv2d(
                in_channels,
                out_channels,
                1
            ),
            nn.AvgPool2d(
                2,
                stride=2
            )
        )

    def forward(self, x):
        return self.block(x)


class DenseNetStyle(nn.Module):
    def __init__(
        self,
        num_classes=10,
        growth_rate=16
    ):
        super().__init__()

        self.stem = nn.Sequential(
            nn.Conv2d(
                3,
                64,
                kernel_size=7,
                stride=2,
                padding=3
            ),
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.MaxPool2d(
                3,
                stride=2,
                padding=1
            )
        )

        self.block1 = DenseBlock(
            4,
            64,
            growth_rate
        )

        channels1 = (
            64 + 4 * growth_rate
        )

        self.trans1 = TransitionBlock(
            channels1,
            channels1 // 2
        )

        channels2_in = channels1 // 2

        self.block2 = DenseBlock(
            4,
            channels2_in,
            growth_rate
        )

        channels2 = (
            channels2_in + 4 * growth_rate
        )

        self.trans2 = TransitionBlock(
            channels2,
            channels2 // 2
        )

        channels3_in = channels2 // 2

        self.block3 = DenseBlock(
            4,
            channels3_in,
            growth_rate
        )

        channels3 = (
            channels3_in + 4 * growth_rate
        )

        self.pool = nn.Sequential(
            nn.BatchNorm2d(channels3),
            nn.ReLU(),
            nn.AdaptiveAvgPool2d((1, 1))
        )

        self.classifier = nn.Linear(
            channels3,
            num_classes
        )

    def forward(self, x):
        x = self.stem(x)

        x = self.block1(x)
        x = self.trans1(x)

        x = self.block2(x)
        x = self.trans2(x)

        x = self.block3(x)

        x = self.pool(x)
        x = torch.flatten(x, 1)

        return self.classifier(x)


model = DenseNetStyle()

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
      text: "13. DenseNet vs ResNet"
    },
    {
      type: "table",
      headers: ["Feature", "ResNet", "DenseNet"],
      rows: [
        ["Connection", "Addition", "Concatenation"],
        ["Main idea", "Residual function", "Feature reuse"],
        ["Previous features", "Combined into current representation", "Explicitly preserved"],
        ["Channel growth", "Controlled by stages", "Grows inside dense blocks"],
        ["Complexity control", "Residual design", "Transition layers"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "14. Feature Reuse"
    },
    {
      type: "paragraph",
      text:
        "Dense connectivity encourages later layers to reuse features learned earlier in the block. A feature detecting a simple pattern does not necessarily need to be reconstructed by every later layer."
    },

    {
      type: "heading",
      level: 2,
      text: "15. Gradient Flow"
    },
    {
      type: "paragraph",
      text:
        "Dense connectivity provides many direct paths between early and later layers. This can make gradient information available across the network through multiple routes."
    },

    {
      type: "heading",
      level: 2,
      text: "16. Growth Rate Trade-Off"
    },
    {
      type: "paragraph",
      text:
        "A larger growth rate means every layer produces more new feature channels. This increases representational capacity but also increases memory and computation. A smaller growth rate creates a more compact network."
    },

    {
      type: "formula",
      text: "Channels after L layers = C0 + Lk"
    },

    {
      type: "heading",
      level: 2,
      text: "17. Transition Compression"
    },
    {
      type: "paragraph",
      text:
        "Transition layers can reduce the number of channels between dense blocks. This prevents the representation from growing without control."
    },

    {
      type: "heading",
      level: 2,
      text: "18. DenseNet Memory Considerations"
    },
    {
      type: "paragraph",
      text:
        "Dense connectivity means many intermediate feature maps must remain available for later concatenation. This can increase memory requirements even when the number of parameters is relatively controlled."
    },

    {
      type: "heading",
      level: 2,
      text: "19. Debugging DenseNet"
    },
    {
      type: "list",
      items: [
        "Track channel counts after every dense layer.",
        "Remember that dense layers concatenate rather than add.",
        "Make sure the next layer expects the accumulated channel count.",
        "Use transition layers to control channel growth.",
        "Verify that spatial dimensions match before concatenation.",
        "Check the classifier input after global average pooling."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "20. Channel Counting Exercise"
    },
    {
      type: "paragraph",
      text:
        "Suppose a dense block starts with 32 channels, contains five layers, and each layer has a growth rate of 12."
    },

    {
      type: "formula",
      text: "Final channels = 32 + (5 × 12) = 92"
    },

    {
      type: "heading",
      level: 2,
      text: "21. Training a DenseNet"
    },
    {
      type: "code",
      language: "python",
      title: "DenseNet Training Step",
      code: `import torch
from torch import nn

model = DenseNetStyle(
    num_classes=10,
    growth_rate=16
)

device = torch.device(
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)

model = model.to(device)

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

loss_fn = nn.CrossEntropyLoss()

x = torch.randn(
    8,
    3,
    224,
    224,
    device=device
)

target = torch.randint(
    0,
    10,
    (8,),
    device=device
)

model.train()

optimizer.zero_grad()

output = model(x)

loss = loss_fn(
    output,
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
      text: "22. DenseNet and Global Average Pooling"
    },
    {
      type: "paragraph",
      text:
        "As with several modern CNN architectures, global average pooling provides a compact representation before the final classifier."
    },

    {
      type: "heading",
      level: 2,
      text: "23. Interview Questions"
    },
    {
      type: "question",
      question: "What is the main idea of DenseNet?",
      answer:
        "Each layer in a dense block receives the concatenated feature maps produced by all preceding layers in that block."
    },

    {
      type: "question",
      question: "What is the growth rate?",
      answer:
        "The growth rate is the number of new feature channels added by each layer in a dense block."
    },

    {
      type: "question",
      question: "Why are transition layers needed?",
      answer:
        "Dense blocks continuously increase channel count, so transition layers reduce channels and spatial resolution to control model complexity."
    },

    {
      type: "question",
      question: "How is DenseNet different from ResNet?",
      answer:
        "ResNet combines representations through addition, while DenseNet explicitly concatenates earlier feature maps with newly generated features."
    },

    {
      type: "heading",
      level: 2,
      text: "24. Coding Exercises"
    },
    {
      type: "list",
      items: [
        "Implement a dense block.",
        "Calculate channel growth manually.",
        "Implement a transition layer.",
        "Build a complete DenseNet-style classifier.",
        "Compare growth rates of 8, 16, and 32.",
        "Compare DenseNet and ResNet parameter counts."
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
        "Create three DenseNet variants using different growth rates. Keep the number of dense layers fixed. Measure parameter count, training memory, training time, and validation performance."
    },

    {
      type: "heading",
      level: 2,
      text: "26. Lesson Summary"
    },
    {
      type: "list",
      items: [
        "DenseNet uses dense connectivity.",
        "Features are concatenated rather than added.",
        "Every layer can directly access earlier features.",
        "Growth rate controls how many new channels each layer contributes.",
        "Dense blocks increase channel count.",
        "Transition layers reduce channels and spatial resolution.",
        "DenseNet emphasizes feature reuse."
      ]
    },

    {
      type: "keyTakeaway",
      text:
        "DenseNet builds a feature-rich network by preserving and concatenating earlier representations. Its central ideas are dense connectivity, feature reuse, growth rate, and transition layers."
    }
  ]
};

export default lesson14;