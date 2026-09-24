export default {
  id: "lesson5",
  moduleId: "module3",
  lessonNumber: 5,
  title: "Pooling",
  duration: "90 min",

  sections: [
    {
      type: "heading",
      title: "1. Introduction"
    },
    {
      type: "paragraph",
      text: "Convolutional layers extract local features, but CNNs also need mechanisms for gradually reducing spatial resolution. Pooling layers provide a simple way to aggregate information over local neighborhoods while reducing the height and width of feature maps."
    },
    {
      type: "paragraph",
      text: "Pooling is different from convolution because the pooling operation normally has no learned parameters. Instead, it applies a fixed aggregation rule such as maximum or average."
    },

    {
      type: "heading",
      title: "2. Why Reduce Spatial Resolution?"
    },
    {
      type: "list",
      items: [
        "Reduce computational cost.",
        "Reduce the number of spatial positions.",
        "Increase the effective receptive field of later layers.",
        "Create a degree of tolerance to small spatial changes.",
        "Build hierarchical representations efficiently."
      ]
    },

    {
      type: "heading",
      title: "3. Local Aggregation"
    },
    {
      type: "paragraph",
      text: "A pooling window examines a small region of the feature map and replaces that region with a summary value."
    },
    {
      type: "formula",
      text: "Output(i,j) = aggregation(input local region)"
    },

    {
      type: "heading",
      title: "4. Maximum Pooling"
    },
    {
      type: "paragraph",
      text: "Maximum pooling selects the largest value inside the pooling window. It therefore preserves the strongest activation within each local region."
    },
    {
      type: "formula",
      text: "Y(i,j) = max X(local neighborhood)"
    },

    {
      type: "code",
      language: "python",
      title: "Max pooling in PyTorch",
      code: `import torch
from torch import nn

pool = nn.MaxPool2d(
    kernel_size=2,
    stride=2
)

X = torch.tensor([
    [[
        1., 3., 2., 4.],
        [5., 6., 7., 8.],
        [9., 2., 1., 3.],
        [4., 5., 6., 7.]
    ]]
)

Y = pool(X)

print(Y)`
    },

    {
      type: "heading",
      title: "5. Average Pooling"
    },
    {
      type: "paragraph",
      text: "Average pooling replaces each local region with its arithmetic mean."
    },
    {
      type: "formula",
      text: "Y(i,j) = average X(local neighborhood)"
    },

    {
      type: "code",
      language: "python",
      title: "Average pooling",
      code: `pool = nn.AvgPool2d(
    kernel_size=2,
    stride=2
)`
    },

    {
      type: "heading",
      title: "6. Max Pooling vs Average Pooling"
    },
    {
      type: "table",
      headers: ["Property", "Max Pooling", "Average Pooling"],
      rows: [
        ["Aggregation", "Maximum", "Mean"],
        ["Strong activation preservation", "High", "Lower"],
        ["Learnable parameters", "None", "None"],
        ["Typical use", "Feature presence", "Smooth aggregation"]
      ]
    },

    {
      type: "heading",
      title: "7. Pooling Does Not Normally Mix Channels"
    },
    {
      type: "paragraph",
      text: "For standard two-dimensional pooling in CNNs, the spatial pooling operation is applied independently to each channel. Therefore the number of channels normally remains unchanged."
    },
    {
      type: "formula",
      text: "N × C × H × W → N × C × Hout × Wout"
    },

    {
      type: "heading",
      title: "8. Example of 2×2 Pooling"
    },
    {
      type: "paragraph",
      text: "Suppose a feature map has shape 28×28. A 2×2 pooling window with stride 2 reduces each spatial dimension approximately by half."
    },
    {
      type: "formula",
      text: "28 × 28 → 14 × 14"
    },

    {
      type: "heading",
      title: "9. Pooling and Stride"
    },
    {
      type: "paragraph",
      text: "The stride determines how far the pooling window moves after each operation. A stride of 2 is commonly used to downsample the spatial dimensions."
    },

    {
      type: "heading",
      title: "10. Pooling Output Size"
    },
    {
      type: "formula",
      text: "Hout = floor((H + 2P − K) / S) + 1"
    },
    {
      type: "formula",
      text: "Wout = floor((W + 2P − K) / S) + 1"
    },

    {
      type: "heading",
      title: "11. Why Pooling Provides Some Translation Tolerance"
    },
    {
      type: "paragraph",
      text: "Suppose a strong feature moves slightly inside a pooling window. The maximum operation can still select that strong activation. Consequently, the exact spatial location of a feature inside a small region may matter less after pooling."
    },
    {
      type: "paragraph",
      text: "This should be understood as limited tolerance, not complete translation invariance."
    },

    {
      type: "heading",
      title: "12. Pooling and Receptive Fields"
    },
    {
      type: "paragraph",
      text: "Downsampling means that a later unit can correspond to a larger region of the original image. This helps deeper layers combine information from increasingly large spatial contexts."
    },

    {
      type: "heading",
      title: "13. Pooling vs Strided Convolution"
    },
    {
      type: "table",
      headers: ["Feature", "Pooling", "Strided Convolution"],
      rows: [
        ["Learned parameters", "No", "Yes"],
        ["Downsampling", "Yes", "Yes"],
        ["Feature transformation", "Fixed aggregation", "Learned"],
        ["Channel change", "Usually no", "Yes"]
      ]
    },

    {
      type: "heading",
      title: "14. Pooling in a CNN"
    },
    {
      type: "process",
      title: "Typical flow",
      steps: [
        "Input image enters a convolutional layer.",
        "Convolution extracts local features.",
        "Activation introduces nonlinearity.",
        "Pooling reduces spatial resolution.",
        "Later convolutions operate on the compact representation."
      ]
    },

    {
      type: "heading",
      title: "15. Complete Example"
    },
    {
      type: "code",
      language: "python",
      title: "Convolution followed by pooling",
      code: `import torch
from torch import nn

model = nn.Sequential(
    nn.Conv2d(3, 32, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(kernel_size=2, stride=2),

    nn.Conv2d(32, 64, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(kernel_size=2, stride=2)
)

X = torch.randn(8, 3, 64, 64)

Y = model(X)

print(Y.shape)

# torch.Size([8, 64, 16, 16])`
    },

    {
      type: "heading",
      title: "16. Global Average Pooling"
    },
    {
      type: "paragraph",
      text: "Global average pooling averages each complete spatial feature map into a single value. If a feature map has height H and width W, all H×W values are averaged."
    },
    {
      type: "formula",
      text: "H × W → 1 × 1"
    },
    {
      type: "paragraph",
      text: "This can be useful near the end of CNN architectures because it can replace large fully connected layers and produce a compact representation."
    },

    {
      type: "code",
      language: "python",
      title: "Adaptive global average pooling",
      code: `pool = nn.AdaptiveAvgPool2d((1, 1))

X = torch.randn(8, 128, 7, 7)

Y = pool(X)

print(Y.shape)

# torch.Size([8, 128, 1, 1])`
    },

    {
      type: "heading",
      title: "17. Pooling and Information Loss"
    },
    {
      type: "paragraph",
      text: "Pooling is not free. Reducing spatial resolution discards some precise location information. CNN architectures therefore have to balance spatial detail against computational efficiency."
    },

    {
      type: "heading",
      title: "18. Common Pooling Mistakes"
    },
    {
      type: "list",
      items: [
        "Assuming pooling learns convolution-like weights.",
        "Forgetting that stride changes output size.",
        "Assuming pooling normally changes the channel count.",
        "Using excessive pooling and destroying useful spatial detail.",
        "Confusing max pooling with global average pooling."
      ]
    },

    {
      type: "heading",
      title: "19. Practical Experiment"
    },
    {
      type: "paragraph",
      text: "Create a simple feature map containing one very large value surrounded by smaller values. Apply max pooling and average pooling and compare the outputs. Observe how the two operations preserve different information."
    },

    {
      type: "heading",
      title: "20. Interview Questions"
    },
    {
      type: "question",
      question: "Does max pooling have trainable parameters?",
      answer: "No. The maximum-selection operation itself has no learned weights."
    },
    {
      type: "question",
      question: "Why does pooling reduce computation?",
      answer: "It reduces the number of spatial positions processed by subsequent layers."
    },
    {
      type: "question",
      question: "Does standard MaxPool2d change the number of channels?",
      answer: "Normally no; it operates independently on each channel."
    },
    {
      type: "question",
      question: "What is global average pooling?",
      answer: "It averages every spatial position within each channel, reducing H×W to 1×1."
    },

    {
      type: "heading",
      title: "21. Coding Challenge"
    },
    {
      type: "paragraph",
      text: "Build a CNN that starts with a 128×128 RGB image and reduces the spatial resolution to 32×32 using pooling. Print every intermediate shape and explain where information is discarded."
    },

    {
      type: "heading",
      title: "22. Summary"
    },
    {
      type: "list",
      items: [
        "Pooling performs fixed local aggregation.",
        "Max pooling selects the strongest activation.",
        "Average pooling computes a local mean.",
        "Pooling reduces spatial dimensions.",
        "Standard pooling normally preserves the number of channels.",
        "Pooling can provide limited tolerance to small spatial changes.",
        "Global average pooling reduces every feature map to one value."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text: "Pooling provides controlled spatial downsampling. It helps CNNs reduce computation and build representations with larger effective receptive fields, while introducing a trade-off because precise spatial information is lost."
    }
  ]
};