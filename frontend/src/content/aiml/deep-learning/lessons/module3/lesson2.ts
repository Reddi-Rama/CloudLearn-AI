export default {
  title: "Convolutions for Images",
  duration: "100 min",
  level: "Intermediate",

  sections: [
    {
      type: "heading",
      title: "1. Introduction"
    },

    {
      type: "paragraph",
      text:
        "A convolutional layer takes an image-like tensor and applies a small learnable filter across its spatial dimensions. The operation creates a new spatial representation called a feature map."
    },

    {
      type: "paragraph",
      text:
        "To understand CNNs deeply, you should be able to perform this operation manually, calculate the output dimensions, implement it from scratch, understand what the kernel represents, and then connect the mathematics to PyTorch."
    },

    {
      type: "heading",
      title: "2. Convolution and Cross-Correlation"
    },

    {
      type: "paragraph",
      text:
        "The operation commonly implemented in deep-learning convolutional layers is technically cross-correlation. Mathematical convolution reverses the kernel before applying it, while the standard neural-network operation does not perform that reversal."
    },

    {
      type: "paragraph",
      text:
        "Deep-learning literature commonly uses the word convolution for this operation, so the practical term convolutional layer remains standard."
    },

    {
      type: "heading",
      title: "3. A Two-Dimensional Input"
    },

    {
      type: "paragraph",
      text:
        "Ignore channels initially and consider a two-dimensional input tensor."
    },

    {
      type: "code",
      language: "python",
      code: `import torch

X = torch.tensor([
    [0., 1., 2.],
    [3., 4., 5.],
    [6., 7., 8.]
])`
    },

    {
      type: "paragraph",
      text:
        "Now consider a 2 × 2 kernel."
    },

    {
      type: "code",
      language: "python",
      code: `K = torch.tensor([
    [0., 1.],
    [2., 3.]
])`
    },

    {
      type: "heading",
      title: "4. The Convolution Window"
    },

    {
      type: "paragraph",
      text:
        "The kernel defines a small window that moves across the input. At each valid position, the values inside the window are multiplied element by element with the kernel values and then summed."
    },

    {
      type: "process",
      steps: [
        "Place the kernel at the upper-left corner.",
        "Extract the input region covered by the kernel.",
        "Multiply corresponding elements.",
        "Sum the products.",
        "Store the scalar result.",
        "Move the kernel horizontally.",
        "Continue until the row is complete.",
        "Move downward and repeat."
      ]
    },

    {
      type: "heading",
      title: "5. First Output Element"
    },

    {
      type: "paragraph",
      text:
        "The first 2 × 2 region is:"
    },

    {
      type: "code",
      language: "text",
      code: `0 1
3 4`
    },

    {
      type: "paragraph",
      text:
        "The corresponding kernel is:"
    },

    {
      type: "code",
      language: "text",
      code: `0 1
2 3`
    },

    {
      type: "formula",
      expression:
        "0×0 + 1×1 + 3×2 + 4×3 = 19"
    },

    {
      type: "paragraph",
      text:
        "Therefore, the first output element is 19."
    },

    {
      type: "heading",
      title: "6. Second Output Element"
    },

    {
      type: "paragraph",
      text:
        "Move the window one position to the right."
    },

    {
      type: "code",
      language: "text",
      code: `1 2
4 5`
    },

    {
      type: "formula",
      expression:
        "1×0 + 2×1 + 4×2 + 5×3 = 25"
    },

    {
      type: "heading",
      title: "7. Complete Output"
    },

    {
      type: "code",
      language: "text",
      code: `19 25
37 43`
    },

    {
      type: "paragraph",
      text:
        "The 3 × 3 input therefore produces a 2 × 2 output when a 2 × 2 kernel is applied with no padding and stride one."
    },

    {
      type: "heading",
      title: "8. Output Dimension"
    },

    {
      type: "formula",
      expression:
        "Output height = input height − kernel height + 1"
    },

    {
      type: "formula",
      expression:
        "Output width = input width − kernel width + 1"
    },

    {
      type: "formula",
      expression:
        "Output = (nh − kh + 1) × (nw − kw + 1)"
    },

    {
      type: "heading",
      title: "9. Why the Output Shrinks"
    },

    {
      type: "paragraph",
      text:
        "Without padding, the kernel is allowed to operate only where it completely fits inside the input. Locations near the boundary are excluded because the kernel would otherwise extend beyond the input."
    },

    {
      type: "heading",
      title: "10. Implementing Cross-Correlation"
    },

    {
      type: "code",
      language: "python",
      code: `def corr2d(X, K):
    kh, kw = K.shape

    output_height = X.shape[0] - kh + 1
    output_width = X.shape[1] - kw + 1

    Y = torch.zeros(
        output_height,
        output_width
    )

    for i in range(output_height):
        for j in range(output_width):

            region = X[
                i:i + kh,
                j:j + kw
            ]

            Y[i, j] = (
                region * K
            ).sum()

    return Y`
    },

    {
      type: "heading",
      title: "11. Testing the Function"
    },

    {
      type: "code",
      language: "python",
      code: `X = torch.tensor([
    [0., 1., 2.],
    [3., 4., 5.],
    [6., 7., 8.]
])

K = torch.tensor([
    [0., 1.],
    [2., 3.]
])

Y = corr2d(X, K)

print(Y)`
    },

    {
      type: "output",
      title: "Output",
      content: `tensor([
    [19., 25.],
    [37., 43.]
])`
    },

    {
      type: "heading",
      title: "12. What Does the Kernel Represent?"
    },

    {
      type: "paragraph",
      text:
        "The kernel contains the weights of the local transformation. During training, these weights are adjusted so that the resulting feature map becomes useful for minimizing the model's objective."
    },

    {
      type: "heading",
      title: "13. Convolutional Layer With Bias"
    },

    {
      type: "formula",
      expression:
        "Y = cross_correlation(X, K) + b"
    },

    {
      type: "paragraph",
      text:
        "The bias shifts the output values after the weighted local computation. In a simple single-channel, single-output-channel case, there is one kernel and one scalar bias."
    },

    {
      type: "heading",
      title: "14. Edge Detection"
    },

    {
      type: "paragraph",
      text:
        "Convolution becomes easier to understand when we consider image edges. An edge corresponds to a local change in intensity. A kernel can be constructed that responds strongly to particular intensity transitions."
    },

    {
      type: "code",
      language: "python",
      code: `vertical_change = torch.tensor([
    [-1., 1.]
])`
    },

    {
      type: "paragraph",
      text:
        "When this type of filter encounters a strong intensity change in the appropriate direction, the resulting response can become large."
    },

    {
      type: "heading",
      title: "15. Hand-Crafted Filters vs Learned Filters"
    },

    {
      type: "paragraph",
      text:
        "Traditional image processing often uses manually designed filters. A CNN instead learns its filters from data. The optimization process determines which local patterns are useful for the task."
    },

    {
      type: "process",
      steps: [
        "Initialize kernel parameters.",
        "Run the convolution.",
        "Generate predictions.",
        "Calculate the loss.",
        "Compute gradients.",
        "Update kernel parameters.",
        "Repeat."
      ]
    },

    {
      type: "heading",
      title: "16. Learning a Kernel"
    },

    {
      type: "paragraph",
      text:
        "Suppose a convolutional layer produces a feature map that should match a desired target. We can define a loss between the predicted feature map and the target. Gradient descent can then modify the kernel."
    },

    {
      type: "code",
      language: "python",
      code: `loss = loss_fn(prediction, target)

optimizer.zero_grad()
loss.backward()
optimizer.step()`
    },

    {
      type: "paragraph",
      text:
        "The important idea is that the kernel is part of the computational graph. Its parameters receive gradients through backpropagation."
    },

    {
      type: "heading",
      title: "17. Feature Maps"
    },

    {
      type: "paragraph",
      text:
        "The output produced by a convolutional filter is called a feature map. It retains spatial information because every output value corresponds to a particular spatial region of the input."
    },

    {
      type: "paragraph",
      text:
        "A feature map can therefore be interpreted as a spatial record of where a learned feature is strongly or weakly present."
    },

    {
      type: "heading",
      title: "18. Receptive Field of a Single Convolution"
    },

    {
      type: "paragraph",
      text:
        "For a 2 × 2 kernel, one output element depends directly on four input elements. Those four input elements form the direct receptive field for that output."
    },

    {
      type: "heading",
      title: "19. Receptive Fields in Deeper Networks"
    },

    {
      type: "paragraph",
      text:
        "Suppose a second 2 × 2 convolution is applied to the first feature map. A single element in the second feature map depends on four elements of the first feature map. Each of those first-layer elements depends on four regions of the original input. Consequently, the effective receptive field on the original image becomes larger."
    },

    {
      type: "formula",
      expression:
        "Stacked local operations → expanding effective receptive field"
    },

    {
      type: "heading",
      title: "20. Why Receptive Fields Matter"
    },

    {
      type: "paragraph",
      text:
        "An edge is local, but an object is not. Deep CNNs solve this progressively. Early layers operate on small regions while deeper layers combine those representations so that their decisions can depend on broader image context."
    },

    {
      type: "heading",
      title: "21. PyTorch Conv2d"
    },

    {
      type: "code",
      language: "python",
      code: `import torch
from torch import nn

conv = nn.Conv2d(
    in_channels=1,
    out_channels=8,
    kernel_size=3
)

print(conv)`
    },

    {
      type: "paragraph",
      text:
        "Here the layer accepts one input channel and produces eight output channels. Each output channel corresponds to a learned filter."
    },

    {
      type: "heading",
      title: "22. Tensor Shape"
    },

    {
      type: "code",
      language: "python",
      code: `X = torch.randn(
    16,
    1,
    28,
    28
)

Y = conv(X)

print("Input :", X.shape)
print("Output:", Y.shape)`
    },

    {
      type: "output",
      title: "Output",
      content: `Input : torch.Size([16, 1, 28, 28])
Output: torch.Size([16, 8, 26, 26])`
    },

    {
      type: "paragraph",
      text:
        "The batch remains 16. The input channel count is one and the output channel count is eight. Since a 3 × 3 kernel is used with no padding and stride one, the spatial dimensions decrease from 28 × 28 to 26 × 26."
    },

    {
      type: "heading",
      title: "23. Number of Parameters"
    },

    {
      type: "paragraph",
      text:
        "For one input channel, eight output channels, and a 3 × 3 kernel, there are eight kernels, each containing nine weights. If each output channel also has a bias, there are eight additional bias values."
    },

    {
      type: "formula",
      expression:
        "Weights = 8 × 1 × 3 × 3 = 72"
    },

    {
      type: "formula",
      expression:
        "Biases = 8"
    },

    {
      type: "formula",
      expression:
        "Total parameters = 72 + 8 = 80"
    },

    {
      type: "heading",
      title: "24. Convolution as Sliding Dot Product"
    },

    {
      type: "paragraph",
      text:
        "Another useful mental model is to think of the convolution window as a small vector after flattening. The kernel and local region form a dot product, producing one scalar."
    },

    {
      type: "formula",
      expression:
        "Output value = dot(local input region, kernel) + bias"
    },

    {
      type: "heading",
      title: "25. Spatial Meaning of the Output"
    },

    {
      type: "paragraph",
      text:
        "The output is not just a collection of numbers. Each location corresponds to a specific region of the original image. This is why convolutional representations retain spatial information."
    },

    {
      type: "heading",
      title: "26. Important Distinction: Kernel, Feature Map, Layer"
    },

    {
      type: "table",
      headers: [
        "Term",
        "Meaning"
      ],
      rows: [
        [
          "Kernel",
          "Learnable filter weights"
        ],
        [
          "Feature map",
          "Spatial output produced by a filter"
        ],
        [
          "Convolutional layer",
          "Trainable operation containing filters and usually biases"
        ],
        [
          "Receptive field",
          "Input region that can influence an output feature"
        ]
      ]
    },

    {
      type: "heading",
      title: "27. What Happens During Training?"
    },

    {
      type: "process",
      steps: [
        "Input image enters convolutional layer.",
        "Kernels produce feature maps.",
        "Later layers process the feature maps.",
        "The network produces predictions.",
        "Loss measures prediction error.",
        "Backpropagation computes gradients.",
        "Kernel parameters are updated.",
        "Repeated training improves useful feature extraction."
      ]
    },

    {
      type: "heading",
      title: "28. Common Implementation Errors"
    },

    {
      type: "list",
      items: [
        "Using the wrong tensor layout.",
        "Forgetting the batch dimension.",
        "Confusing input channels and output channels.",
        "Incorrectly calculating spatial output dimensions.",
        "Using a kernel larger than the input when padding is absent.",
        "Assuming every output channel uses the same learned kernel.",
        "Forgetting that biases are normally associated with output channels."
      ]
    },

    {
      type: "heading",
      title: "29. Exercises"
    },

    {
      type: "list",
      items: [
        "Manually calculate every element of the 2 × 2 output for a 3 × 3 input and 2 × 2 kernel.",
        "Implement corr2d from scratch.",
        "Change the kernel values and observe how the output changes.",
        "Create a Conv2d layer with one input channel and four output channels.",
        "Print the shape of its weight tensor.",
        "Calculate the total number of parameters manually.",
        "Explain why the output is called a feature map.",
        "Explain the receptive field of one output element.",
        "Stack two convolutional layers and reason about the receptive field."
      ]
    },

    {
      type: "heading",
      title: "30. Coding Project"
    },

    {
      type: "paragraph",
      text:
        "Build a tiny convolution demonstration. Generate a synthetic image containing simple intensity transitions, apply a manually selected edge-sensitive kernel, and visualize or print the resulting feature map. Then replace the manually selected kernel with nn.Conv2d and explain the difference between fixed and learned filters."
    },

    {
      type: "heading",
      title: "31. Interview Questions"
    },

    {
      type: "question",
      question: "What is cross-correlation?",
      answer:
        "It is a sliding-window operation in which corresponding values from an input region and kernel are multiplied and summed."
    },

    {
      type: "question",
      question: "Why is the output smaller when padding is zero?",
      answer:
        "Only positions where the complete kernel fits inside the input are evaluated."
    },

    {
      type: "question",
      question: "What is a feature map?",
      answer:
        "A spatial representation generated by applying a learned filter across the input."
    },

    {
      type: "question",
      question: "What is a receptive field?",
      answer:
        "The set of previous-layer elements that can affect a particular feature."
    },

    {
      type: "question",
      question: "Are CNN kernels manually programmed?",
      answer:
        "In a trainable CNN, the kernel parameters are learned from data through optimization."
    },

    {
      type: "heading",
      title: "32. Summary"
    },

    {
      type: "list",
      items: [
        "A convolutional layer performs a sliding local operation.",
        "The standard deep-learning implementation is technically cross-correlation.",
        "The kernel interacts with local image regions.",
        "Each local interaction produces one output value.",
        "The output forms a feature map.",
        "Convolutional kernels are trainable parameters.",
        "Feature maps preserve spatial information.",
        "Receptive fields explain how local operations influence deeper representations.",
        "PyTorch provides Conv2d for practical convolutional networks."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "A convolution is best understood as a learned sliding local computation. Once you understand the window, elementwise multiplication, summation, output shape, learnable kernel, feature map, and receptive field, the basic mechanics of CNNs become much easier to reason about."
    }
  ]
};