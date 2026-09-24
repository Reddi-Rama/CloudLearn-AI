export default {
  id: "lesson4",
  moduleId: "module3",
  lessonNumber: 4,
  title: "Multiple Channels",
  duration: "100 min",

  sections: [
    {
      type: "heading",
      title: "1. Introduction"
    },
    {
      type: "paragraph",
      text: "Real images usually contain more than one channel. A grayscale image can be represented using a single channel, while a color image commonly contains three channels corresponding to red, green, and blue. Convolutional neural networks must therefore be able to process multiple input channels and produce multiple output channels."
    },
    {
      type: "paragraph",
      text: "The key idea is that a convolution kernel operating on a multi-channel input is itself multi-channel. Instead of applying one two-dimensional kernel independently to each input channel, a complete kernel contains one spatial kernel for every input channel. The resulting values are combined to produce one output feature map."
    },
    {
      type: "keyTakeaway",
      title: "Core idea",
      text: "A multi-channel convolution combines spatial information from all input channels to create learned feature maps."
    },

    {
      type: "heading",
      title: "2. Why Do We Need Multiple Channels?"
    },
    {
      type: "paragraph",
      text: "A grayscale image can be represented as a matrix of intensity values. A color image requires additional information because the same spatial location can have different red, green, and blue intensities."
    },
    {
      type: "formula",
      text: "Grayscale image shape = H × W"
    },
    {
      type: "formula",
      text: "RGB image shape = 3 × H × W"
    },
    {
      type: "paragraph",
      text: "The channel dimension allows a neural network to distinguish different types of information occupying the same spatial coordinates."
    },

    {
      type: "heading",
      title: "3. The NCHW Convention"
    },
    {
      type: "paragraph",
      text: "PyTorch convolutional layers normally use the NCHW convention: batch size, channels, height, and width."
    },
    {
      type: "formula",
      text: "Input shape = N × C × H × W"
    },
    {
      type: "paragraph",
      text: "Here N represents the number of examples in the batch, C represents the number of channels, H represents image height, and W represents image width."
    },
    {
      type: "code",
      language: "python",
      title: "Creating a batch of RGB images",
      code: `import torch

X = torch.randn(16, 3, 64, 64)

print(X.shape)

# Output:
# torch.Size([16, 3, 64, 64])`
    },

    {
      type: "heading",
      title: "4. From One Input Channel to Multiple Input Channels"
    },
    {
      type: "paragraph",
      text: "For a single-channel input, a kernel has two spatial dimensions. With multiple input channels, the kernel gains a channel dimension."
    },
    {
      type: "formula",
      text: "Single-channel kernel = Kh × Kw"
    },
    {
      type: "formula",
      text: "Multi-channel kernel = Ci × Kh × Kw"
    },
    {
      type: "paragraph",
      text: "Ci is the number of input channels. Every input channel has a corresponding spatial kernel, and the results are combined."
    },

    {
      type: "heading",
      title: "5. Mathematical View of Multi-Input Convolution"
    },
    {
      type: "paragraph",
      text: "Suppose X contains Ci input channels and K contains Ci corresponding kernels. For every spatial position, the convolution computes the spatial correlation independently on every input channel and then sums the results."
    },
    {
      type: "formula",
      text: "Y = Σ(c=1 to Ci) Xc ★ Kc"
    },
    {
      type: "paragraph",
      text: "The symbol ★ represents the spatial cross-correlation operation. The summation combines the contributions of all input channels into one output feature map."
    },

    {
      type: "heading",
      title: "6. Implementing Multiple Input Channels"
    },
    {
      type: "code",
      language: "python",
      title: "Multi-input cross-correlation",
      code: `import torch

def corr2d_multi_in(X, K):
    return sum(
        corr2d(x, k)
        for x, k in zip(X, K)
    )`
    },
    {
      type: "paragraph",
      text: "The function conceptually pairs each input channel with its corresponding kernel channel, performs two-dimensional cross-correlation, and adds the resulting feature maps."
    },

    {
      type: "heading",
      title: "7. Example with Three Input Channels"
    },
    {
      type: "paragraph",
      text: "Consider an RGB image. It has three input channels. A kernel for this image therefore also has three channels."
    },
    {
      type: "formula",
      text: "Input = 3 × H × W"
    },
    {
      type: "formula",
      text: "Kernel = 3 × Kh × Kw"
    },
    {
      type: "paragraph",
      text: "The three spatial correlation results are added together to form one output channel."
    },

    {
      type: "heading",
      title: "8. Multiple Input Channels, One Output Channel"
    },
    {
      type: "process",
      title: "Computation",
      steps: [
        "Take one kernel slice for every input channel.",
        "Perform two-dimensional cross-correlation on each channel.",
        "Add all resulting feature maps element by element.",
        "Produce one output feature map."
      ]
    },

    {
      type: "heading",
      title: "9. Multiple Input Channels and Multiple Output Channels"
    },
    {
      type: "paragraph",
      text: "A practical CNN normally needs many output channels because each output channel can learn a different feature detector."
    },
    {
      type: "paragraph",
      text: "If there are Ci input channels and Co output channels, the convolution layer learns Co complete multi-channel kernels."
    },
    {
      type: "formula",
      text: "Kernel shape = Co × Ci × Kh × Kw"
    },
    {
      type: "formula",
      text: "Output shape = Co × Hout × Wout"
    },

    {
      type: "heading",
      title: "10. Computing Multiple Output Channels"
    },
    {
      type: "code",
      language: "python",
      title: "Multiple input and output channels",
      code: `def corr2d_multi_in_out(X, K):
    return torch.stack([
        corr2d_multi_in(X, k)
        for k in K
    ])`
    },
    {
      type: "paragraph",
      text: "Each output channel receives its own complete kernel. The kernels share the same input tensor but have different learned parameters."
    },

    {
      type: "heading",
      title: "11. Parameter Count"
    },
    {
      type: "formula",
      text: "Parameters = Co × Ci × Kh × Kw + Co"
    },
    {
      type: "paragraph",
      text: "The final Co term represents one bias parameter for every output channel."
    },
    {
      type: "formula",
      text: "Example: Co=16, Ci=3, Kh=3, Kw=3"
    },
    {
      type: "formula",
      text: "Parameters = 16 × 3 × 3 × 3 + 16 = 448"
    },

    {
      type: "heading",
      title: "12. PyTorch Conv2d"
    },
    {
      type: "code",
      language: "python",
      title: "Multi-channel convolution in PyTorch",
      code: `import torch
from torch import nn

conv = nn.Conv2d(
    in_channels=3,
    out_channels=16,
    kernel_size=3,
    padding=1
)

X = torch.randn(8, 3, 64, 64)

Y = conv(X)

print(Y.shape)

# torch.Size([8, 16, 64, 64])`
    },

    {
      type: "heading",
      title: "13. Understanding the Weight Tensor"
    },
    {
      type: "paragraph",
      text: "For the layer above, the weight tensor has shape 16 × 3 × 3 × 3. There are 16 output channels, each containing three 3×3 kernels."
    },
    {
      type: "formula",
      text: "Weight shape = 16 × 3 × 3 × 3"
    },

    {
      type: "heading",
      title: "14. Why Output Channels Matter"
    },
    {
      type: "paragraph",
      text: "Different output channels can specialize in different visual patterns. One channel might respond strongly to horizontal structures, another to vertical structures, another to color combinations, and later layers can learn increasingly complex patterns."
    },

    {
      type: "heading",
      title: "15. RGB Processing"
    },
    {
      type: "paragraph",
      text: "For an RGB image, the network does not usually process red, green, and blue independently all the way through the network. The first convolution can learn combinations of the three channels."
    },
    {
      type: "process",
      title: "RGB feature extraction",
      steps: [
        "Receive red, green, and blue channels.",
        "Apply a learned kernel to each channel.",
        "Combine the three responses.",
        "Produce an output feature map.",
        "Repeat with many output kernels."
      ]
    },

    {
      type: "heading",
      title: "16. 1×1 Convolution"
    },
    {
      type: "paragraph",
      text: "A 1×1 convolution has a spatial kernel of size one by one. Therefore it does not combine neighboring spatial positions. Instead, it performs a learned transformation across the channel dimension at every spatial location."
    },
    {
      type: "formula",
      text: "1×1 convolution: each pixel position → channel transformation"
    },
    {
      type: "paragraph",
      text: "For Ci input channels and Co output channels, a 1×1 convolution contains Co × Ci weights plus Co biases."
    },
    {
      type: "formula",
      text: "Parameters = Co × Ci + Co"
    },

    {
      type: "heading",
      title: "17. 1×1 Convolution as a Per-Pixel Fully Connected Layer"
    },
    {
      type: "paragraph",
      text: "At each spatial position, the Ci channel values form a vector. A 1×1 convolution applies the same learned linear transformation to that vector at every location."
    },
    {
      type: "formula",
      text: "y(i,j) = W x(i,j) + b"
    },
    {
      type: "paragraph",
      text: "The weights are shared across all spatial locations."
    },

    {
      type: "code",
      language: "python",
      title: "1×1 convolution",
      code: `conv1x1 = nn.Conv2d(
    in_channels=32,
    out_channels=64,
    kernel_size=1
)

X = torch.randn(4, 32, 28, 28)

Y = conv1x1(X)

print(Y.shape)

# torch.Size([4, 64, 28, 28])`
    },

    {
      type: "heading",
      title: "18. Why 1×1 Convolutions Are Useful"
    },
    {
      type: "list",
      items: [
        "Change the number of channels.",
        "Reduce computational cost before an expensive convolution.",
        "Increase the number of channels when required.",
        "Apply channel-wise feature transformations.",
        "Build more complex CNN architectures."
      ]
    },

    {
      type: "heading",
      title: "19. Spatial Information vs Channel Information"
    },
    {
      type: "table",
      headers: ["Operation", "Main role"],
      rows: [
        ["3×3 convolution", "Combines nearby spatial and channel information"],
        ["5×5 convolution", "Uses a larger spatial neighborhood"],
        ["1×1 convolution", "Transforms channel information at each location"],
        ["Pooling", "Aggregates nearby spatial information"]
      ]
    },

    {
      type: "heading",
      title: "20. Complete Example"
    },
    {
      type: "code",
      language: "python",
      title: "CNN with multiple channels",
      code: `import torch
from torch import nn

model = nn.Sequential(
    nn.Conv2d(3, 32, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.Conv2d(32, 64, kernel_size=3, padding=1),
    nn.ReLU(),
    nn.Conv2d(64, 128, kernel_size=1),
    nn.ReLU()
)

X = torch.randn(8, 3, 64, 64)

Y = model(X)

print(Y.shape)

# torch.Size([8, 128, 64, 64])`
    },

    {
      type: "heading",
      title: "21. Common Shape Mistakes"
    },
    {
      type: "list",
      items: [
        "Using HWC instead of NCHW with PyTorch.",
        "Confusing input channels with output channels.",
        "Forgetting that the kernel also contains an input-channel dimension.",
        "Assuming a 1×1 convolution combines neighboring pixels.",
        "Calculating parameters without accounting for all input channels."
      ]
    },

    {
      type: "heading",
      title: "22. Debugging Example"
    },
    {
      type: "code",
      language: "python",
      title: "Fixing channel ordering",
      code: `# Suppose data is HWC
X = torch.randn(64, 64, 3)

# Convert to CHW
X = X.permute(2, 0, 1)

# Add batch dimension
X = X.unsqueeze(0)

print(X.shape)

# torch.Size([1, 3, 64, 64])`
    },

    {
      type: "heading",
      title: "23. Practical Exercise"
    },
    {
      type: "list",
      items: [
        "Create an RGB tensor with shape 8×3×32×32.",
        "Create a convolution with 3 input channels and 16 output channels.",
        "Calculate its number of parameters manually.",
        "Verify the parameter count using PyTorch.",
        "Change the output channels to 32 and observe the difference."
      ]
    },

    {
      type: "heading",
      title: "24. Interview Questions"
    },
    {
      type: "question",
      question: "Why does a multi-channel kernel have multiple channel slices?",
      answer: "Because every input channel contributes to the output feature map."
    },
    {
      type: "question",
      question: "What does a 1×1 convolution actually learn?",
      answer: "A learned transformation across channels at each spatial position."
    },
    {
      type: "question",
      question: "Does a 1×1 convolution reduce height and width?",
      answer: "Not when stride is 1 and appropriate padding is used; its main purpose is channel transformation."
    },
    {
      type: "question",
      question: "What is the weight shape of Conv2d(3, 16, 3)?",
      answer: "16 × 3 × 3 × 3."
    },

    {
      type: "heading",
      title: "25. Coding Challenge"
    },
    {
      type: "paragraph",
      text: "Build a small CNN that accepts RGB images and produces 10 output feature channels. Print every intermediate tensor shape and calculate the number of trainable parameters in every convolutional layer."
    },

    {
      type: "heading",
      title: "26. Summary"
    },
    {
      type: "list",
      items: [
        "Images can contain multiple channels.",
        "A multi-channel convolution has one spatial kernel for every input channel.",
        "The channel-wise responses are summed to produce each output channel.",
        "Multiple output channels allow the network to learn multiple feature detectors.",
        "The weight tensor has shape Co×Ci×Kh×Kw.",
        "A 1×1 convolution transforms channels without combining neighboring spatial locations.",
        "PyTorch Conv2d uses NCHW tensors."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text: "Multiple channels allow CNNs to transform rich visual information. The convolution operation mixes spatial patterns and channel information, while 1×1 convolutions provide an efficient way to transform channel representations."
    }
  ]
};