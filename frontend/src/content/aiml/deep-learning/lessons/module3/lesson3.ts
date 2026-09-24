export default {
  title: "Padding and Stride",
  duration: "90 min",
  level: "Intermediate",

  sections: [
    {
      type: "heading",
      title: "1. Introduction"
    },

    {
      type: "paragraph",
      text:
        "Every convolutional layer changes the spatial dimensions of its input unless its configuration is deliberately chosen to preserve them. Two of the most important hyperparameters controlling this behavior are padding and stride."
    },

    {
      type: "paragraph",
      text:
        "Padding determines how much additional space is placed around the input. Stride determines how far the convolution window moves between successive calculations."
    },

    {
      type: "heading",
      title: "2. Why Spatial Dimensions Matter"
    },

    {
      type: "paragraph",
      text:
        "CNNs often contain many convolutional layers. If every layer reduced the image dimensions, the representation could become very small after only a few layers."
    },

    {
      type: "paragraph",
      text:
        "Architects therefore need explicit control over when to preserve resolution and when to reduce it."
    },

    {
      type: "heading",
      title: "3. Convolution Without Padding"
    },

    {
      type: "paragraph",
      text:
        "Consider a 5 × 5 input and a 3 × 3 kernel with stride one and no padding."
    },

    {
      type: "formula",
      expression:
        "Output height = 5 − 3 + 1 = 3"
    },

    {
      type: "formula",
      expression:
        "Output width = 5 − 3 + 1 = 3"
    },

    {
      type: "paragraph",
      text:
        "Therefore, a 5 × 5 input becomes a 3 × 3 output."
    },

    {
      type: "heading",
      title: "4. Boundary Problem"
    },

    {
      type: "paragraph",
      text:
        "Pixels near the image boundary participate in fewer valid convolution windows than pixels near the center when no padding is used. This means boundary information is treated differently from interior information."
    },

    {
      type: "paragraph",
      text:
        "Padding provides a way to give the kernel additional space around the boundary."
    },

    {
      type: "heading",
      title: "5. What Is Padding?"
    },

    {
      type: "paragraph",
      text:
        "Padding means adding additional values around the input before applying the convolution. Zero padding is the most common introductory example."
    },

    {
      type: "code",
      language: "text",
      code: `Input:

1 2 3
4 5 6
7 8 9

After one-pixel zero padding:

0 0 0 0 0
0 1 2 3 0
0 4 5 6 0
0 7 8 9 0
0 0 0 0 0`
    },

    {
      type: "heading",
      title: "6. Why Zero Padding?"
    },

    {
      type: "paragraph",
      text:
        "Zero is convenient because it adds a known neutral boundary value and does not introduce additional learnable parameters."
    },

    {
      type: "heading",
      title: "7. Padding and Output Size"
    },

    {
      type: "paragraph",
      text:
        "For a two-dimensional convolution, let the input height and width be nh and nw. Let the kernel dimensions be kh and kw. If ph rows of padding are applied to each vertical side and pw columns to each horizontal side, then the padded input has dimensions nh + 2ph and nw + 2pw."
    },

    {
      type: "formula",
      expression:
        "Padded height = nh + 2ph"
    },

    {
      type: "formula",
      expression:
        "Padded width = nw + 2pw"
    },

    {
      type: "heading",
      title: "8. Output Formula With Stride One"
    },

    {
      type: "formula",
      expression:
        "Output height = nh + 2ph − kh + 1"
    },

    {
      type: "formula",
      expression:
        "Output width = nw + 2pw − kw + 1"
    },

    {
      type: "heading",
      title: "9. Preserving Spatial Dimensions"
    },

    {
      type: "paragraph",
      text:
        "For an odd-sized kernel such as 3 × 3, padding one on every side with stride one preserves the input height and width."
    },

    {
      type: "formula",
      expression:
        "28 + 2(1) − 3 + 1 = 28"
    },

    {
      type: "paragraph",
      text:
        "Therefore, a 3 × 3 convolution with padding one and stride one can transform the number of channels while preserving the spatial dimensions."
    },

    {
      type: "heading",
      title: "10. PyTorch Example"
    },

    {
      type: "code",
      language: "python",
      code: `import torch
from torch import nn

X = torch.randn(
    4, 3, 28, 28
)

conv = nn.Conv2d(
    in_channels=3,
    out_channels=16,
    kernel_size=3,
    padding=1,
    stride=1
)

Y = conv(X)

print("Input :", X.shape)
print("Output:", Y.shape)`
    },

    {
      type: "output",
      title: "Output",
      content: `Input : torch.Size([4, 3, 28, 28])
Output: torch.Size([4, 16, 28, 28])`
    },

    {
      type: "heading",
      title: "11. What Changed?"
    },

    {
      type: "list",
      items: [
        "Batch size remained 4.",
        "Input channels changed from 3 to 16 output channels.",
        "Height remained 28.",
        "Width remained 28."
      ]
    },

    {
      type: "heading",
      title: "12. What Is Stride?"
    },

    {
      type: "paragraph",
      text:
        "Stride determines how many rows or columns the convolution window moves after producing an output value."
    },

    {
      type: "paragraph",
      text:
        "Stride one means the window moves one position at a time. Stride two moves two positions at a time. Larger strides skip intermediate positions."
    },

    {
      type: "code",
      language: "text",
      code: `Stride 1:

[window] → [window] → [window]

Stride 2:

[window] → skip → [window] → skip → [window]`
    },

    {
      type: "heading",
      title: "13. Why Use Stride Greater Than One?"
    },

    {
      type: "paragraph",
      text:
        "A larger stride reduces the number of spatial locations at which the kernel is evaluated. This reduces spatial resolution and can reduce computational cost."
    },

    {
      type: "heading",
      title: "14. Stride as Downsampling"
    },

    {
      type: "paragraph",
      text:
        "When stride is greater than one, the convolution can perform spatial downsampling. Instead of generating a feature for every possible neighboring location, the network samples locations farther apart."
    },

    {
      type: "process",
      steps: [
        "High-resolution feature map",
        "Convolution with stride greater than one",
        "Fewer spatial positions",
        "Smaller feature map",
        "Reduced spatial computation"
      ]
    },

    {
      type: "heading",
      title: "15. Example With Stride Two"
    },

    {
      type: "code",
      language: "python",
      code: `conv = nn.Conv2d(
    3,
    16,
    kernel_size=3,
    stride=2
)

X = torch.randn(
    4, 3, 28, 28
)

Y = conv(X)

print(Y.shape)`
    },

    {
      type: "output",
      title: "Output",
      content: `torch.Size([4, 16, 13, 13])`
    },

    {
      type: "formula",
      expression:
        "floor((28 − 3) / 2) + 1 = 13"
    },

    {
      type: "heading",
      title: "16. General Output Formula"
    },

    {
      type: "paragraph",
      text:
        "When stride is included, the output dimension must account for the number of complete kernel positions available after padding."
    },

    {
      type: "formula",
      expression:
        "Output height = floor((nh + 2ph − kh) / sh) + 1"
    },

    {
      type: "formula",
      expression:
        "Output width = floor((nw + 2pw − kw) / sw) + 1"
    },

    {
      type: "paragraph",
      text:
        "Here sh is the vertical stride and sw is the horizontal stride."
    },

    {
      type: "heading",
      title: "17. Different Height and Width Strides"
    },

    {
      type: "paragraph",
      text:
        "The vertical and horizontal strides do not have to be equal."
    },

    {
      type: "code",
      language: "python",
      code: `conv = nn.Conv2d(
    3,
    16,
    kernel_size=3,
    stride=(2, 1)
)`
    },

    {
      type: "paragraph",
      text:
        "This configuration moves two rows vertically but only one column horizontally."
    },

    {
      type: "heading",
      title: "18. Different Padding in Each Direction"
    },

    {
      type: "code",
      language: "python",
      code: `conv = nn.Conv2d(
    3,
    16,
    kernel_size=(3, 5),
    padding=(1, 2),
    stride=(2, 1)
)`
    },

    {
      type: "paragraph",
      text:
        "This allows the network designer to control the vertical and horizontal dimensions independently."
    },

    {
      type: "heading",
      title: "19. Combining Padding and Stride"
    },

    {
      type: "paragraph",
      text:
        "Padding and stride solve different problems. Padding determines how much boundary space exists. Stride determines how densely the kernel scans the input."
    },

    {
      type: "table",
      headers: [
        "Hyperparameter",
        "Main role"
      ],
      rows: [
        [
          "Kernel size",
          "Determines local region examined"
        ],
        [
          "Padding",
          "Controls boundary treatment and spatial size"
        ],
        [
          "Stride",
          "Controls movement and spatial downsampling"
        ]
      ]
    },

    {
      type: "heading",
      title: "20. Example: Preserve Resolution"
    },

    {
      type: "code",
      language: "python",
      code: `conv = nn.Conv2d(
    3,
    32,
    kernel_size=3,
    padding=1,
    stride=1
)

X = torch.randn(
    8, 3, 64, 64
)

Y = conv(X)

print(Y.shape)`
    },

    {
      type: "output",
      title: "Output",
      content: `torch.Size([8, 32, 64, 64])`
    },

    {
      type: "heading",
      title: "21. Example: Downsample"
    },

    {
      type: "code",
      language: "python",
      code: `conv = nn.Conv2d(
    3,
    32,
    kernel_size=3,
    padding=1,
    stride=2
)

X = torch.randn(
    8, 3, 64, 64
)

Y = conv(X)

print(Y.shape)`
    },

    {
      type: "output",
      title: "Output",
      content: `torch.Size([8, 32, 32, 32])`
    },

    {
      type: "paragraph",
      text:
        "The padding preserves the behavior around the boundary while stride two reduces the spatial resolution."
    },

    {
      type: "heading",
      title: "22. Why Padding Is Important at the Boundary"
    },

    {
      type: "paragraph",
      text:
        "Without padding, a pixel near the boundary can participate in fewer convolution windows than an interior pixel. Padding gives the kernel additional positions around the edge and can make spatial treatment more uniform."
    },

    {
      type: "heading",
      title: "23. Symmetric Padding"
    },

    {
      type: "paragraph",
      text:
        "A common design uses equal padding on opposite sides of each spatial dimension. For example, padding one on all sides of a two-dimensional input is symmetric padding."
    },

    {
      type: "heading",
      title: "24. Padding Does Not Mean Learnable Parameters"
    },

    {
      type: "paragraph",
      text:
        "Standard zero padding introduces fixed values. It does not create another trainable matrix of parameters."
    },

    {
      type: "heading",
      title: "25. Stride and Computational Cost"
    },

    {
      type: "paragraph",
      text:
        "A larger stride produces fewer output positions. Since each output position requires local computation, fewer positions generally mean fewer convolution operations."
    },

    {
      type: "heading",
      title: "26. Stride and Information"
    },

    {
      type: "paragraph",
      text:
        "Downsampling is useful, but it also removes some spatial resolution. The architecture therefore needs to balance computational efficiency with the need to preserve fine spatial information."
    },

    {
      type: "heading",
      title: "27. Padding and Feature Preservation"
    },

    {
      type: "paragraph",
      text:
        "Padding does not magically preserve all information. It changes the boundary conditions under which the convolution is calculated. Its main architectural benefit is controlling spatial size and ensuring that boundary locations are handled more consistently."
    },

    {
      type: "heading",
      title: "28. Shape Calculation Example 1"
    },

    {
      type: "paragraph",
      text:
        "Input: 32 × 32. Kernel: 5 × 5. Padding: 0. Stride: 1."
    },

    {
      type: "formula",
      expression:
        "floor((32 + 0 − 5) / 1) + 1 = 28"
    },

    {
      type: "heading",
      title: "29. Shape Calculation Example 2"
    },

    {
      type: "paragraph",
      text:
        "Input: 32 × 32. Kernel: 5 × 5. Padding: 2. Stride: 1."
    },

    {
      type: "formula",
      expression:
        "floor((32 + 4 − 5) / 1) + 1 = 32"
    },

    {
      type: "heading",
      title: "30. Shape Calculation Example 3"
    },

    {
      type: "paragraph",
      text:
        "Input: 32 × 32. Kernel: 3 × 3. Padding: 1. Stride: 2."
    },

    {
      type: "formula",
      expression:
        "floor((32 + 2 − 3) / 2) + 1 = 16"
    },

    {
      type: "heading",
      title: "31. Shape Calculation Example 4"
    },

    {
      type: "paragraph",
      text:
        "Input: 64 × 64. Kernel: 3 × 5. Padding: 1 × 2. Stride: 2 × 4."
    },

    {
      type: "formula",
      expression:
        "Height = floor((64 + 2 − 3) / 2) + 1 = 32"
    },

    {
      type: "formula",
      expression:
        "Width = floor((64 + 4 − 5) / 4) + 1 = 16"
    },

    {
      type: "heading",
      title: "32. Output Tensor Reasoning"
    },

    {
      type: "paragraph",
      text:
        "Remember that convolution changes three important aspects independently: the batch dimension normally remains unchanged, the number of channels is controlled by the number of output filters, and the height and width are controlled by kernel size, padding, and stride."
    },

    {
      type: "formula",
      expression:
        "Input = N × Cin × H × W"
    },

    {
      type: "formula",
      expression:
        "Output = N × Cout × Hout × Wout"
    },

    {
      type: "heading",
      title: "33. Common Mistakes"
    },

    {
      type: "list",
      items: [
        "Forgetting the padding term in the output formula.",
        "Using kernel size instead of stride when calculating movement.",
        "Forgetting that height and width can have different padding and stride values.",
        "Assuming stride two always exactly halves the output.",
        "Forgetting the floor operation.",
        "Assuming padding changes the number of kernel weights.",
        "Ignoring the effect of stride on computational cost.",
        "Confusing channel reduction with spatial downsampling."
      ]
    },

    {
      type: "heading",
      title: "34. Debugging Example"
    },

    {
      type: "code",
      language: "python",
      code: `X = torch.randn(
    16, 3, 32, 32
)

conv = nn.Conv2d(
    3,
    64,
    kernel_size=5,
    stride=2,
    padding=2
)

Y = conv(X)

print(Y.shape)`
    },

    {
      type: "question",
      question: "What should the output shape be?",
      answer:
        "The batch remains 16, output channels become 64, and the spatial dimensions become 16 × 16."
    },

    {
      type: "heading",
      title: "35. Practical CNN Design Pattern"
    },

    {
      type: "process",
      steps: [
        "Use stride one when detailed spatial resolution should be preserved.",
        "Use padding when maintaining spatial dimensions is desirable.",
        "Use larger stride when downsampling is appropriate.",
        "Track tensor shapes after every major layer.",
        "Do not reduce spatial resolution too aggressively.",
        "Choose channel counts independently from spatial dimensions."
      ]
    },

    {
      type: "heading",
      title: "36. Exercises"
    },

    {
      type: "list",
      items: [
        "Calculate the output size for a 28 × 28 input with a 3 × 3 kernel, padding 0, stride 1.",
        "Repeat with padding 1.",
        "Repeat with stride 2.",
        "Calculate the output for a 64 × 64 input with a 5 × 5 kernel, padding 2, stride 1.",
        "Calculate the output for a 64 × 64 input with kernel 3 × 3, padding 1, stride 2.",
        "Explain why padding can make boundary treatment more uniform.",
        "Explain why stride can reduce computational cost.",
        "Create a Conv2d layer whose output has half the spatial resolution of its input.",
        "Create a Conv2d layer that preserves height and width.",
        "Write a Python function that computes convolution output dimensions."
      ]
    },

    {
      type: "heading",
      title: "37. Coding Task"
    },

    {
      type: "code",
      language: "python",
      code: `def conv_output_size(
    input_size,
    kernel_size,
    padding,
    stride
):
    return (
        (input_size + 2 * padding - kernel_size)
        // stride
    ) + 1

print(
    conv_output_size(
        64,
        3,
        1,
        2
    )
)`
    },

    {
      type: "output",
      title: "Expected Output",
      content: `32`
    },

    {
      type: "heading",
      title: "38. Mini Project"
    },

    {
      type: "paragraph",
      text:
        "Design a three-layer CNN for 64 × 64 RGB images. The first layer should preserve spatial resolution, the second should reduce the resolution by approximately half, and the third should reduce it again. Print every intermediate tensor shape and explain why each shape changes."
    },

    {
      type: "heading",
      title: "39. Interview Questions"
    },

    {
      type: "question",
      question: "What is padding?",
      answer:
        "Padding adds extra values around the boundary of an input before convolution."
    },

    {
      type: "question",
      question: "What is stride?",
      answer:
        "Stride specifies how many spatial positions the convolution window moves between output calculations."
    },

    {
      type: "question",
      question: "How can a 3 × 3 convolution preserve spatial dimensions?",
      answer:
        "With stride one and padding one on each side, the height and width remain unchanged."
    },

    {
      type: "question",
      question: "How does stride perform downsampling?",
      answer:
        "A stride greater than one skips intermediate spatial positions, producing fewer output locations."
    },

    {
      type: "question",
      question: "Does padding increase the number of trainable kernel parameters?",
      answer:
        "Standard fixed padding such as zero padding does not add trainable kernel parameters."
    },

    {
      type: "heading",
      title: "40. Final Shape Challenge"
    },

    {
      type: "paragraph",
      text:
        "Suppose the input is N × 3 × 128 × 128. Apply the following layers: Conv2d(3, 32, kernel_size=3, padding=1, stride=1), followed by Conv2d(32, 64, kernel_size=3, padding=1, stride=2), followed by Conv2d(64, 128, kernel_size=3, padding=1, stride=2)."
    },

    {
      type: "formula",
      expression:
        "Layer 1 → N × 32 × 128 × 128"
    },

    {
      type: "formula",
      expression:
        "Layer 2 → N × 64 × 64 × 64"
    },

    {
      type: "formula",
      expression:
        "Layer 3 → N × 128 × 32 × 32"
    },

    {
      type: "heading",
      title: "41. Summary"
    },

    {
      type: "list",
      items: [
        "Padding adds values around an input.",
        "Padding controls boundary treatment and output dimensions.",
        "Stride controls the movement of the convolution window.",
        "Stride greater than one can downsample spatial representations.",
        "Kernel size, padding, and stride jointly determine spatial output size.",
        "Height and width can have different padding and stride values.",
        "Padding normally does not add trainable parameters.",
        "Shape tracking is essential for building CNNs."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Padding and stride are not minor Conv2d options. They are fundamental architectural controls. Padding determines how the network handles boundaries and controls spatial size, while stride determines how densely the input is sampled and when spatial resolution is reduced."
    }
  ]
};