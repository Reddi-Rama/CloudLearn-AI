export default {
  title: "Convolutional Principles",
  duration: "90 min",
  level: "Intermediate",

  sections: [
    {
      type: "heading",
      title: "1. Introduction to Convolutional Neural Networks"
    },

    {
      type: "paragraph",
      text:
        "Convolutional Neural Networks, commonly called CNNs or ConvNets, are neural networks designed to exploit the spatial or local structure present in data. They are particularly important for computer vision because images are not simply arbitrary collections of numbers. Pixels have spatial relationships, nearby pixels often interact strongly, and visual patterns can appear at different positions within an image."
    },

    {
      type: "paragraph",
      text:
        "The central idea of a CNN is to replace a completely connected transformation with a structured operation that examines local regions, reuses the same parameters across positions, and preserves spatial organization."
    },

    {
      type: "paragraph",
      text:
        "Before learning the PyTorch Conv2d API, we need to understand why convolutional layers were introduced and what assumptions they encode."
    },

    {
      type: "heading",
      title: "2. Why Image Data Requires Special Treatment"
    },

    {
      type: "paragraph",
      text:
        "An image can be represented as a two-dimensional grid. A grayscale image assigns one numerical value to each pixel, while a color image commonly assigns multiple values to each pixel through channels such as red, green, and blue."
    },

    {
      type: "paragraph",
      text:
        "The spatial arrangement is meaningful. If two neighboring pixels belong to the same edge, texture, or object boundary, their relationship contains useful information. A neural network that ignores this structure throws away a useful prior about the data."
    },

    {
      type: "heading",
      title: "3. Images as Tensors"
    },

    {
      type: "paragraph",
      text:
        "In deep learning, an image is normally represented using tensors. A single grayscale image can be represented by height and width. A color image normally has an additional channel dimension."
    },

    {
      type: "formula",
      expression: "Grayscale image = H × W"
    },

    {
      type: "formula",
      expression: "Color image = C × H × W"
    },

    {
      type: "paragraph",
      text:
        "When multiple images are processed together, a batch dimension is added."
    },

    {
      type: "formula",
      expression: "Image batch = N × C × H × W"
    },

    {
      type: "paragraph",
      text:
        "For example, a batch of 32 RGB images with resolution 128 × 128 can be represented as a tensor with shape (32, 3, 128, 128)."
    },

    {
      type: "code",
      language: "python",
      code: `import torch

images = torch.randn(
    32, 3, 128, 128
)

print(images.shape)`
    },

    {
      type: "output",
      title: "Output",
      content: `torch.Size([32, 3, 128, 128])`
    },

    {
      type: "heading",
      title: "4. The Fully Connected Approach"
    },

    {
      type: "paragraph",
      text:
        "One possible approach to image classification is to flatten the image into a vector and feed it into a multilayer perceptron. This approach works conceptually, but it can become extremely expensive for high-resolution images."
    },

    {
      type: "paragraph",
      text:
        "Suppose an image contains one million pixels. If the first hidden layer contains one thousand neurons, a fully connected layer would require one million times one thousand weights."
    },

    {
      type: "formula",
      expression: "Weights = input features × hidden units"
    },

    {
      type: "formula",
      expression: "Weights = 1,000,000 × 1,000 = 1,000,000,000"
    },

    {
      type: "paragraph",
      text:
        "This is one billion weights in only the first connection layer. Such a model requires substantial memory, computation, and training data."
    },

    {
      type: "heading",
      title: "5. The Problem of Ignoring Spatial Structure"
    },

    {
      type: "paragraph",
      text:
        "Flattening also removes the explicit two-dimensional arrangement of the image. Once the pixels are treated as a vector, the model is not naturally informed that two neighboring positions in the original image are related."
    },

    {
      type: "paragraph",
      text:
        "A convolutional architecture instead keeps the spatial dimensions and processes local neighborhoods."
    },

    {
      type: "heading",
      title: "6. First Principle: Locality"
    },

    {
      type: "paragraph",
      text:
        "Locality is the idea that the representation at one image location should primarily depend on nearby pixels. A small visual feature such as an edge, corner, or texture usually does not require the entire image to be examined."
    },

    {
      type: "paragraph",
      text:
        "If the output at location (i, j) depends only on a neighborhood around (i, j), then the number of parameters can be drastically reduced compared with a fully connected transformation."
    },

    {
      type: "formula",
      expression:
        "Local representation = function of a neighborhood around the current position"
    },

    {
      type: "process",
      steps: [
        "Select a small region of the image.",
        "Apply a learned transformation to that region.",
        "Produce a feature value.",
        "Move the region to another location.",
        "Repeat the same transformation."
      ]
    },

    {
      type: "heading",
      title: "7. Why Locality Makes Sense"
    },

    {
      type: "paragraph",
      text:
        "Consider detecting a vertical edge. A small neighborhood can often provide enough information to determine whether pixel intensity changes strongly from one side to another. Examining every pixel in the image for every output location would be unnecessary."
    },

    {
      type: "paragraph",
      text:
        "This assumption is particularly useful in natural images because visual patterns are often spatially local."
    },

    {
      type: "heading",
      title: "8. Second Principle: Translation Invariance"
    },

    {
      type: "paragraph",
      text:
        "A useful visual pattern should generally remain recognizable when its position changes. A particular edge or texture should not require an entirely new detector merely because it moved from the left side of the image to the right side."
    },

    {
      type: "paragraph",
      text:
        "CNNs address this by reusing the same parameters at different spatial locations."
    },

    {
      type: "heading",
      title: "9. Parameter Sharing"
    },

    {
      type: "paragraph",
      text:
        "Parameter sharing means that a single learned kernel is applied repeatedly throughout the spatial dimensions of the input."
    },

    {
      type: "formula",
      expression:
        "Same kernel + different locations = shared spatial parameters"
    },

    {
      type: "paragraph",
      text:
        "This dramatically reduces the number of parameters compared with learning an independent filter for every location."
    },

    {
      type: "heading",
      title: "10. From a Fully Connected Layer to a Local Layer"
    },

    {
      type: "paragraph",
      text:
        "Imagine that every output location is initially connected to every input location. We can impose two useful restrictions. First, remove connections to distant pixels and retain only local connections. Second, require the same weights to be used at every spatial position."
    },

    {
      type: "process",
      steps: [
        "Fully connected image transformation",
        "Restrict connections to local neighborhoods",
        "Reuse the same parameters across locations",
        "Obtain a convolutional transformation"
      ]
    },

    {
      type: "paragraph",
      text:
        "These restrictions dramatically reduce the parameter count while encoding assumptions that are useful for images."
    },

    {
      type: "heading",
      title: "11. Parameter Reduction"
    },

    {
      type: "paragraph",
      text:
        "Suppose a local kernel has a small spatial size. Instead of learning a separate set of weights for every output location, the same small collection of weights is reused."
    },

    {
      type: "paragraph",
      text:
        "The source develops this idea by showing that imposing locality can reduce a previously enormous parameter count by several orders of magnitude. This is one of the key reasons convolutional networks are computationally practical for images."
    },

    {
      type: "heading",
      title: "12. The Convolution Kernel"
    },

    {
      type: "paragraph",
      text:
        "The small learnable tensor used by a convolutional layer is commonly called a kernel or filter. During a forward pass, the kernel interacts with local input regions and produces feature responses."
    },

    {
      type: "paragraph",
      text:
        "The values in the kernel are learned from data. They are not normally fixed manually."
    },

    {
      type: "heading",
      title: "13. A Simple Kernel"
    },

    {
      type: "code",
      language: "python",
      code: `import torch

kernel = torch.tensor([
    [1.0, 0.0],
    [0.0, -1.0]
])

print(kernel)`
    },

    {
      type: "paragraph",
      text:
        "This is only an illustrative kernel. In a trainable CNN, the model starts with initialized parameters and learns useful values through gradient-based optimization."
    },

    {
      type: "heading",
      title: "14. Local Features"
    },

    {
      type: "paragraph",
      text:
        "A convolutional kernel can learn to respond to local structures. Depending on the data and training objective, different kernels can become sensitive to edges, orientations, textures, color transitions, or other patterns."
    },

    {
      type: "heading",
      title: "15. Hierarchical Representation Learning"
    },

    {
      type: "paragraph",
      text:
        "One convolutional layer does not need to understand the entire object. It can produce useful low-level representations. Deeper layers can then combine those representations into increasingly complex structures."
    },

    {
      type: "process",
      steps: [
        "Raw pixels",
        "Local intensity patterns",
        "Edges and simple shapes",
        "Textures and combinations of edges",
        "Object parts",
        "Higher-level object representation"
      ]
    },

    {
      type: "paragraph",
      text:
        "This hierarchical representation is one of the most important ideas in deep computer vision."
    },

    {
      type: "heading",
      title: "16. Receptive Fields"
    },

    {
      type: "paragraph",
      text:
        "The receptive field of a feature is the collection of earlier-layer elements that can influence its value."
    },

    {
      type: "paragraph",
      text:
        "For a single convolution using a 2 × 2 kernel, each output element depends on a 2 × 2 region. When another 2 × 2 convolutional layer is stacked on top, a deeper output can depend on a larger region of the original image."
    },

    {
      type: "formula",
      expression:
        "Stacking local layers → larger effective receptive fields"
    },

    {
      type: "heading",
      title: "17. Why Depth Matters"
    },

    {
      type: "paragraph",
      text:
        "A shallow convolution can detect local patterns. A deeper network can combine those local patterns into larger structures. This allows the network to move from simple visual primitives toward more meaningful representations."
    },

    {
      type: "heading",
      title: "18. The Role of Channels"
    },

    {
      type: "paragraph",
      text:
        "A color image contains multiple input channels. More importantly, hidden convolutional layers can create many output channels. Each output channel can represent a different learned feature map."
    },

    {
      type: "paragraph",
      text:
        "Thus, channels provide a way for the network to maintain multiple types of learned visual information at each spatial location."
    },

    {
      type: "heading",
      title: "19. RGB Is Not the Limit"
    },

    {
      type: "paragraph",
      text:
        "Although RGB images commonly contain three channels, convolutional networks are not restricted to three-channel inputs. Scientific and satellite imaging can contain many spectral channels."
    },

    {
      type: "heading",
      title: "20. The Cost of Translation Invariance"
    },

    {
      type: "paragraph",
      text:
        "Architectural assumptions are useful only when they approximately match the structure of the problem. Parameter sharing assumes that a useful local pattern can be recognized similarly at different locations."
    },

    {
      type: "paragraph",
      text:
        "This is a useful inductive bias for many visual tasks, but it is still an assumption. If location itself is essential to the task, the architecture may need additional mechanisms to represent positional information."
    },

    {
      type: "heading",
      title: "21. Convolutional Networks as Inductive Bias"
    },

    {
      type: "paragraph",
      text:
        "A CNN is not merely a different implementation of an MLP. It encodes assumptions about the problem: local relationships matter, spatial patterns can recur, and the same detector can often be reused at different positions."
    },

    {
      type: "heading",
      title: "22. Why This Improves Sample Efficiency"
    },

    {
      type: "paragraph",
      text:
        "Because the network shares parameters across locations, the model does not need to separately learn the same visual pattern for every possible position. Information learned from one position can contribute to recognizing that pattern elsewhere."
    },

    {
      type: "heading",
      title: "23. CNN Computation at a High Level"
    },

    {
      type: "process",
      steps: [
        "Input image enters the network.",
        "A local kernel examines a small region.",
        "The kernel produces a response.",
        "The kernel moves across the image.",
        "A feature map is produced.",
        "Multiple kernels create multiple feature maps.",
        "Nonlinearities transform the representation.",
        "Deeper layers combine lower-level features."
      ]
    },

    {
      type: "heading",
      title: "24. CNN vs MLP"
    },

    {
      type: "table",
      headers: [
        "Property",
        "MLP",
        "CNN"
      ],
      rows: [
        [
          "Typical image input",
          "Flattened",
          "Spatial tensor"
        ],
        [
          "Connectivity",
          "Global",
          "Local"
        ],
        [
          "Spatial parameter sharing",
          "No",
          "Yes"
        ],
        [
          "Preserves spatial arrangement",
          "Not naturally",
          "Yes"
        ],
        [
          "Parameter efficiency for images",
          "Often poor",
          "Usually much better"
        ],
        [
          "Local pattern detection",
          "Indirect",
          "Natural architectural operation"
        ]
      ]
    },

    {
      type: "heading",
      title: "25. CNNs and Other Structured Data"
    },

    {
      type: "paragraph",
      text:
        "The principles behind CNNs are not restricted to images. One-dimensional convolutions can be useful for sequences such as audio or time series, and adaptations have been applied to other structured domains."
    },

    {
      type: "heading",
      title: "26. Important Mathematical View"
    },

    {
      type: "paragraph",
      text:
        "A convolutional layer can be viewed as a local linear transformation whose parameters are shared over spatial positions, followed in a practical network by a nonlinear activation or another transformation."
    },

    {
      type: "formula",
      expression:
        "Feature = local weighted sum + bias"
    },

    {
      type: "heading",
      title: "27. What CNNs Actually Learn"
    },

    {
      type: "paragraph",
      text:
        "It is tempting to say that the first layer learns edges, the next learns shapes, and the final layer learns objects. This is a useful intuition, but real learned representations can be more complicated. The important principle is that layers progressively transform representations into features useful for the task."
    },

    {
      type: "heading",
      title: "28. Common Mistakes"
    },

    {
      type: "list",
      items: [
        "Thinking convolution means every pixel interacts with every other pixel.",
        "Assuming convolution kernels are manually designed.",
        "Confusing a kernel with the complete convolutional layer.",
        "Forgetting the channel dimension.",
        "Thinking translation invariance means the entire network ignores position.",
        "Assuming every CNN layer detects complete objects.",
        "Forgetting that parameter sharing is an inductive bias."
      ]
    },

    {
      type: "heading",
      title: "29. Practical Questions"
    },

    {
      type: "question",
      question: "Why are CNNs efficient for images?",
      answer:
        "They exploit local connectivity and shared parameters, substantially reducing the number of independent weights compared with a fully connected transformation."
    },

    {
      type: "question",
      question: "What does locality mean?",
      answer:
        "The computation at a spatial location primarily depends on a nearby region of the input."
    },

    {
      type: "question",
      question: "What does parameter sharing mean?",
      answer:
        "The same learned kernel parameters are reused at different spatial positions."
    },

    {
      type: "question",
      question: "Why can deeper CNNs represent larger structures?",
      answer:
        "Each layer combines information from local regions of the previous layer, so repeated layers allow deeper features to depend on progressively larger regions of the original input."
    },

    {
      type: "heading",
      title: "30. Exercises"
    },

    {
      type: "list",
      items: [
        "Explain why flattening a high-resolution image can result in an extremely large fully connected layer.",
        "Explain locality using an edge-detection example.",
        "Explain parameter sharing using a visual pattern that occurs in two different image locations.",
        "Calculate the number of weights in a 3 × 3 kernel for a single input and output channel.",
        "Explain why a CNN can reuse information learned at one image position at another position.",
        "Explain the relationship between receptive field and network depth.",
        "Why can hidden convolutional layers have many more channels than an RGB input?",
        "Give an example where location could matter and explain why pure translation invariance might be insufficient."
      ]
    },

    {
      type: "heading",
      title: "31. Coding Tasks"
    },

    {
      type: "paragraph",
      text:
        "Create a random RGB image tensor and inspect its shape. Then create a Conv2d layer and determine how its number of output channels changes the representation."
    },

    {
      type: "code",
      language: "python",
      code: `import torch
from torch import nn

X = torch.randn(4, 3, 64, 64)

conv = nn.Conv2d(
    in_channels=3,
    out_channels=16,
    kernel_size=3
)

Y = conv(X)

print("Input:", X.shape)
print("Output:", Y.shape)`
    },

    {
      type: "heading",
      title: "32. Debugging Challenge"
    },

    {
      type: "code",
      language: "python",
      code: `X = torch.randn(8, 64, 64, 3)

conv = nn.Conv2d(
    3,
    16,
    kernel_size=3
)

Y = conv(X)`
    },

    {
      type: "question",
      question: "What is wrong with this input shape?",
      answer:
        "PyTorch Conv2d normally expects channels before height and width: N × C × H × W. The example uses N × H × W × C."
    },

    {
      type: "code",
      language: "python",
      code: `X = X.permute(0, 3, 1, 2)

Y = conv(X)

print(Y.shape)`
    },

    {
      type: "heading",
      title: "33. Interview Questions"
    },

    {
      type: "question",
      question: "Why does a CNN use local connectivity?",
      answer:
        "Because many useful visual patterns are local, so restricting each output to a neighborhood reduces parameters while preserving useful image structure."
    },

    {
      type: "question",
      question: "Why does a CNN share weights?",
      answer:
        "To allow the same feature detector to recognize similar patterns at different spatial locations."
    },

    {
      type: "question",
      question: "What is an inductive bias?",
      answer:
        "It is a structural assumption built into a learning method that influences what kinds of patterns the model can learn efficiently."
    },

    {
      type: "question",
      question: "What is a receptive field?",
      answer:
        "The set of earlier-layer elements that can influence a particular feature."
    },

    {
      type: "question",
      question: "Why does stacking convolutional layers help?",
      answer:
        "It allows local features to be progressively combined into representations covering larger spatial regions."
    },

    {
      type: "heading",
      title: "34. Summary"
    },

    {
      type: "list",
      items: [
        "Images contain strong spatial structure.",
        "Flattening an image can create extremely large fully connected layers.",
        "CNNs exploit locality.",
        "CNNs exploit translation-related structure through parameter sharing.",
        "A kernel is a small learnable tensor.",
        "The same kernel is reused at multiple positions.",
        "Convolutional layers produce spatial feature maps.",
        "Channels allow multiple feature representations to coexist.",
        "Stacking layers increases effective receptive fields.",
        "CNNs encode useful inductive biases for visual data."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "CNNs become powerful for image data because they deliberately preserve and exploit spatial structure. Local connectivity, shared parameters, multiple channels, and hierarchical feature extraction transform an otherwise enormous image-learning problem into a structured and computationally manageable one."
    }
  ]
};