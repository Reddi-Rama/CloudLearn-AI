export default {
  id: "lesson7",
  moduleId: "module3",
  lessonNumber: 7,
  title: "Deep CNN Design",
  duration: "120 min",

  sections: [
    {
      type: "heading",
      title: "1. Introduction"
    },
    {
      type: "paragraph",
      text: "Designing a convolutional neural network is not simply a matter of stacking as many convolutional layers as possible. A useful CNN must transform an image gradually from low-level visual information into increasingly meaningful representations while controlling computation, memory, and overfitting."
    },
    {
      type: "paragraph",
      text: "This lesson develops the major principles used when moving from a small CNN such as LeNet toward deeper architectures such as AlexNet, VGG, NiN, and GoogLeNet."
    },

    {
      type: "heading",
      title: "2. What Does CNN Design Mean?"
    },
    {
      type: "paragraph",
      text: "CNN design means deciding how convolutional layers, nonlinearities, pooling operations, normalization, channel widths, downsampling operations, and classification layers should be arranged."
    },
    {
      type: "list",
      items: [
        "How many convolutional layers should the network contain?",
        "How many channels should each layer produce?",
        "What kernel sizes should be used?",
        "Where should spatial downsampling occur?",
        "Where should nonlinear activation functions be placed?",
        "How should the final representation be converted into predictions?",
        "How should computation and memory be controlled?"
      ]
    },

    {
      type: "heading",
      title: "3. The Basic CNN Pipeline"
    },
    {
      type: "process",
      title: "Typical CNN transformation",
      steps: [
        "Input image",
        "Initial convolutional feature extraction",
        "Nonlinear activation",
        "Repeated feature extraction",
        "Spatial downsampling",
        "Increase feature channels",
        "Deep semantic representation",
        "Classification head",
        "Output predictions"
      ]
    },

    {
      type: "heading",
      title: "4. From Pixels to Features"
    },
    {
      type: "paragraph",
      text: "A raw image contains pixel values. The first layers have access only to local neighborhoods. Deeper layers combine earlier features and therefore gain access to increasingly larger regions of the original image."
    },
    {
      type: "process",
      title: "Hierarchical representation",
      steps: [
        "Pixels",
        "Edges",
        "Corners and textures",
        "Simple shapes",
        "Object parts",
        "Higher-level structures",
        "Object-level representation"
      ]
    },

    {
      type: "heading",
      title: "5. Why Depth Matters"
    },
    {
      type: "paragraph",
      text: "A sequence of nonlinear transformations can represent more complex functions than a single transformation. Increasing depth allows the network to construct features progressively instead of attempting to learn the final representation in one step."
    },
    {
      type: "formula",
      text: "h1 = f1(x)"
    },
    {
      type: "formula",
      text: "h2 = f2(h1)"
    },
    {
      type: "formula",
      text: "h3 = f3(h2)"
    },
    {
      type: "paragraph",
      text: "The final representation is therefore a composition of multiple learned transformations."
    },

    {
      type: "heading",
      title: "6. Why Not Make Every Layer Huge?"
    },
    {
      type: "paragraph",
      text: "Increasing the width of every layer increases the number of parameters and operations. A network that is unnecessarily wide can become expensive to train and may overfit when the available dataset is limited."
    },
    {
      type: "table",
      headers: ["Design choice", "Potential benefit", "Potential cost"],
      rows: [
        ["More depth", "More hierarchical transformations", "Harder optimization"],
        ["More channels", "Richer feature representation", "More computation"],
        ["Larger kernels", "Larger local receptive field", "More parameters"],
        ["More pooling", "Lower computation", "Loss of spatial detail"],
        ["Larger dense layers", "High classifier capacity", "Large parameter count"]
      ]
    },

    {
      type: "heading",
      title: "7. Convolution Parameter Count"
    },
    {
      type: "paragraph",
      text: "For a standard 2D convolution, the number of weight parameters depends on the input channels, output channels, and kernel dimensions."
    },
    {
      type: "formula",
      text: "Parameters = Cout × Cin × Kh × Kw"
    },
    {
      type: "paragraph",
      text: "If a bias is used, one additional bias value is learned for every output channel."
    },
    {
      type: "formula",
      text: "Parameters with bias = Cout × Cin × Kh × Kw + Cout"
    },

    {
      type: "heading",
      title: "8. Example Parameter Calculation"
    },
    {
      type: "paragraph",
      text: "Consider a convolution with 64 input channels, 128 output channels, and a 3×3 kernel."
    },
    {
      type: "formula",
      text: "128 × 64 × 3 × 3 = 73,728 weights"
    },
    {
      type: "formula",
      text: "73,728 + 128 = 73,856 parameters with bias"
    },

    {
      type: "heading",
      title: "9. Why Small Kernels Are Attractive"
    },
    {
      type: "paragraph",
      text: "Small kernels such as 3×3 are computationally convenient. Several layers of small convolutions can build a large effective receptive field while inserting nonlinear transformations between them."
    },
    {
      type: "formula",
      text: "3×3 + 3×3 → approximately 5×5 receptive field"
    },
    {
      type: "formula",
      text: "3×3 + 3×3 + 3×3 → approximately 7×7 receptive field"
    },

    {
      type: "heading",
      title: "10. Receptive Field"
    },
    {
      type: "paragraph",
      text: "The receptive field of a unit describes the region of the original input that can influence that unit. As layers are stacked, the effective receptive field can grow."
    },
    {
      type: "paragraph",
      text: "This allows deeper units to combine local features into larger structures."
    },

    {
      type: "heading",
      title: "11. Spatial Downsampling"
    },
    {
      type: "paragraph",
      text: "CNNs commonly reduce height and width as depth increases. Pooling or convolution with stride greater than one can perform this downsampling."
    },
    {
      type: "formula",
      text: "Resolution ↓ while semantic representation ↑"
    },

    {
      type: "heading",
      title: "12. Why Increase Channels?"
    },
    {
      type: "paragraph",
      text: "As spatial resolution decreases, the network can allocate more channels to represent different types of features. A common design pattern is to decrease spatial resolution while increasing channel width."
    },
    {
      type: "formula",
      text: "H × W ↓ and C ↑"
    },

    {
      type: "heading",
      title: "13. Stage-Based CNN Design"
    },
    {
      type: "paragraph",
      text: "Instead of viewing a network as a long list of individual layers, it is often easier to organize it into stages. Each stage operates at a particular spatial resolution and contains several feature-extraction layers."
    },
    {
      type: "table",
      headers: ["Stage", "Resolution", "Channels", "Role"],
      rows: [
        ["Early", "High", "Low", "Basic visual features"],
        ["Middle", "Medium", "Medium", "Textures and patterns"],
        ["Late", "Low", "High", "Semantic features"]
      ]
    },

    {
      type: "heading",
      title: "14. The Stem, Body, and Head"
    },
    {
      type: "paragraph",
      text: "A useful abstraction for modern CNNs is to divide the architecture into a stem, body, and head. The stem performs initial processing, the body contains the main feature-extraction stages, and the head converts the learned representation into predictions."
    },
    {
      type: "process",
      title: "High-level architecture",
      steps: [
        "Stem → initial image processing",
        "Body → deep feature extraction",
        "Stages → repeated transformations at different resolutions",
        "Head → prediction"
      ]
    },

    {
      type: "heading",
      title: "15. A Simple Deep CNN"
    },
    {
      type: "code",
      language: "python",
      title: "Basic deep CNN",
      code: `import torch
from torch import nn

class DeepCNN(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()

        self.features = nn.Sequential(
            nn.Conv2d(3, 32, 3, padding=1),
            nn.ReLU(),

            nn.Conv2d(32, 32, 3, padding=1),
            nn.ReLU(),

            nn.MaxPool2d(2),

            nn.Conv2d(32, 64, 3, padding=1),
            nn.ReLU(),

            nn.Conv2d(64, 64, 3, padding=1),
            nn.ReLU(),

            nn.MaxPool2d(2)
        )

        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d((1, 1)),
            nn.Flatten(),
            nn.Linear(64, num_classes)
        )

    def forward(self, x):
        x = self.features(x)
        return self.classifier(x)

model = DeepCNN()

x = torch.randn(8, 3, 64, 64)
y = model(x)

print(y.shape)`
    },

    {
      type: "heading",
      title: "16. Why Adaptive Average Pooling Helps"
    },
    {
      type: "paragraph",
      text: "Adaptive average pooling can convert a feature map of variable spatial dimensions into a fixed spatial size. This is particularly useful when we do not want to manually calculate a huge flattened dimension."
    },
    {
      type: "formula",
      text: "C × H × W → C × 1 × 1"
    },

    {
      type: "heading",
      title: "17. Sequential vs Custom Architecture"
    },
    {
      type: "paragraph",
      text: "Simple sequential networks can be constructed with nn.Sequential. More complicated architectures require custom nn.Module classes because they may contain branches, skip connections, multiple outputs, or conditional operations."
    },

    {
      type: "heading",
      title: "18. Shape Tracking Is Essential"
    },
    {
      type: "paragraph",
      text: "Many CNN implementation errors are shape errors. Every convolution and pooling operation changes or preserves spatial dimensions according to its parameters."
    },
    {
      type: "code",
      language: "python",
      title: "Inspecting intermediate shapes",
      code: `import torch
from torch import nn

model = nn.Sequential(
    nn.Conv2d(3, 32, 3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(2),
    nn.Conv2d(32, 64, 3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(2)
)

x = torch.randn(4, 3, 64, 64)

for layer in model:
    x = layer(x)
    print(type(layer).__name__, x.shape)`
    },

    {
      type: "heading",
      title: "19. Computational Cost"
    },
    {
      type: "paragraph",
      text: "A convolution performs many multiply-and-accumulate operations. Increasing spatial resolution, channel count, kernel size, or number of layers increases the computational cost."
    },
    {
      type: "formula",
      text: "Approximate convolution work ∝ H × W × Cin × Cout × Kh × Kw"
    },

    {
      type: "heading",
      title: "20. Memory Usage"
    },
    {
      type: "paragraph",
      text: "Training requires more memory than inference because intermediate activations are generally retained so that gradients can be computed during backpropagation."
    },
    {
      type: "list",
      items: [
        "Model parameters",
        "Parameter gradients",
        "Optimizer state",
        "Intermediate activations",
        "Input batches",
        "Temporary computation buffers"
      ]
    },

    {
      type: "heading",
      title: "21. Accuracy vs Efficiency"
    },
    {
      type: "paragraph",
      text: "CNN architecture design is a trade-off. A larger network can provide more capacity, but the extra capacity comes with computation and memory costs. A practical model must balance accuracy, latency, memory, and training cost."
    },

    {
      type: "heading",
      title: "22. Common Design Mistakes"
    },
    {
      type: "list",
      items: [
        "Making the network unnecessarily large.",
        "Using very large kernels everywhere.",
        "Downsampling too aggressively.",
        "Keeping huge fully connected layers.",
        "Ignoring the number of parameters.",
        "Ignoring GPU memory requirements.",
        "Changing the input resolution without checking tensor shapes."
      ]
    },

    {
      type: "heading",
      title: "23. Debugging a CNN"
    },
    {
      type: "process",
      title: "Reliable debugging workflow",
      steps: [
        "Create a small random input.",
        "Run one forward pass.",
        "Print every important tensor shape.",
        "Check the classifier input.",
        "Count parameters.",
        "Run one training batch.",
        "Check whether loss becomes finite.",
        "Only then start long training."
      ]
    },

    {
      type: "heading",
      title: "24. Parameter Counting in PyTorch"
    },
    {
      type: "code",
      language: "python",
      title: "Count trainable parameters",
      code: `total = sum(
    p.numel()
    for p in model.parameters()
    if p.requires_grad
)

print("Trainable parameters:", total)`
    },

    {
      type: "heading",
      title: "25. Design Exercise"
    },
    {
      type: "paragraph",
      text: "Design a CNN for 64×64 RGB images. Start with 32 channels, double the channel count after each downsampling stage, and finish with global average pooling. Write down the tensor shape after every stage."
    },

    {
      type: "heading",
      title: "26. Interview Questions"
    },
    {
      type: "question",
      question: "Why do CNNs usually reduce spatial resolution as depth increases?",
      answer: "Downsampling reduces computational cost while allowing deeper layers to operate on increasingly abstract representations."
    },
    {
      type: "question",
      question: "Why are channel counts often increased after downsampling?",
      answer: "Lower spatial resolution reduces the cost of maintaining more feature channels, allowing the network to represent more feature types."
    },
    {
      type: "question",
      question: "What is a receptive field?",
      answer: "It is the region of the original input that can influence a particular feature or activation."
    },

    {
      type: "heading",
      title: "27. Mini Project"
    },
    {
      type: "paragraph",
      text: "Build three CNNs with approximately small, medium, and large capacity. Compare parameter count, training time, validation performance, and memory consumption. Use the experiment to understand why architecture size matters."
    },

    {
      type: "heading",
      title: "28. Summary"
    },
    {
      type: "list",
      items: [
        "CNN design is a balance between representation power and computational cost.",
        "Depth enables hierarchical feature construction.",
        "Small kernels can be stacked to create larger effective receptive fields.",
        "Spatial resolution generally decreases through the network.",
        "Channel count often increases as spatial resolution decreases.",
        "Stage-based design makes deep networks easier to reason about.",
        "Stem, body, and head provide a useful architectural abstraction.",
        "Shape tracking is essential for correct CNN implementation."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text: "A good CNN is not simply a deep CNN. Effective architecture design carefully balances depth, channel width, receptive field, spatial resolution, parameter count, computation, and memory."
    }
  ]
};