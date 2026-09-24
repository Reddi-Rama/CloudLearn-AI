const practice = {
  id: "practice",
  title: "Module 3 Practice: Modern CNN Architecture",
  moduleId: "module3",
  duration: "120 min",
  level: "Advanced",
  description:
    "Practice convolutional neural network architecture concepts through theory questions, calculations, debugging tasks, coding exercises, architecture comparisons, and a final implementation challenge.",

  content: [
    {
      type: "heading",
      level: 2,
      text: "1. Practice Goals"
    },
    {
      type: "paragraph",
      text:
        "This practice session is designed to test whether you can reason about modern CNN architectures rather than simply memorize architecture names. You should be able to explain why architectural components exist, calculate tensor shapes, implement major building blocks, debug shape errors, and compare architecture design choices."
    },

    {
      type: "heading",
      level: 2,
      text: "2. Module 3 Architecture Map"
    },
    {
      type: "process",
      title: "CNN Architecture Evolution",
      steps: [
        "Convolutional principles",
        "Image convolutions",
        "Padding and stride",
        "Multiple channels",
        "Pooling",
        "LeNet",
        "Deep CNN design",
        "AlexNet",
        "VGG",
        "Network in Network",
        "GoogLeNet",
        "Batch Normalization",
        "ResNet and ResNeXt",
        "DenseNet",
        "Architecture design spaces"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "3. Quick Concept Check"
    },

    {
      type: "question",
      question: "What is the purpose of a convolutional layer?",
      answer:
        "It learns local spatial transformations that extract useful patterns from structured inputs such as images."
    },

    {
      type: "question",
      question: "What does padding control?",
      answer:
        "Padding controls how the spatial boundary is handled and can help preserve spatial dimensions."
    },

    {
      type: "question",
      question: "What does stride control?",
      answer:
        "Stride controls how far the convolution window moves between positions and therefore influences output resolution."
    },

    {
      type: "question",
      question: "Why are multiple channels necessary?",
      answer:
        "Different channels can represent different learned features or feature combinations."
    },

    {
      type: "question",
      question: "What does pooling do?",
      answer:
        "Pooling summarizes local spatial information and commonly reduces spatial resolution."
    },

    {
      type: "heading",
      level: 2,
      text: "4. VGG Practice"
    },

    {
      type: "question",
      question: "Why does VGG prefer small convolution kernels?",
      answer:
        "Stacking small kernels provides repeated nonlinear transformations and creates a regular deep architecture."
    },

    {
      type: "question",
      question: "What happens after a typical VGG block?",
      answer:
        "A pooling operation reduces spatial resolution."
    },

    {
      type: "heading",
      level: 2,
      text: "5. VGG Shape Exercise"
    },
    {
      type: "paragraph",
      text:
        "Suppose an image has spatial dimensions 224 × 224 and passes through five pooling operations, each halving height and width."
    },

    {
      type: "formula",
      text: "224 → 112 → 56 → 28 → 14 → 7"
    },

    {
      type: "paragraph",
      text:
        "Therefore, the final spatial resolution is 7 × 7."
    },

    {
      type: "heading",
      level: 2,
      text: "6. NiN Practice"
    },

    {
      type: "question",
      question: "What does a 1×1 convolution mix?",
      answer:
        "It mixes channel information independently at each spatial position."
    },

    {
      type: "question",
      question: "Why is global average pooling useful?",
      answer:
        "It converts each channel into a single spatially aggregated value and reduces dependence on large fully connected layers."
    },

    {
      type: "heading",
      level: 2,
      text: "7. NiN Calculation"
    },
    {
      type: "paragraph",
      text:
        "A feature map has shape 16 × 32 × 32. A 1×1 convolution changes the channel count from 16 to 64 while keeping stride 1."
    },

    {
      type: "formula",
      text: "Output shape = 64 × 32 × 32"
    },

    {
      type: "heading",
      level: 2,
      text: "8. GoogLeNet Practice"
    },

    {
      type: "question",
      question: "Why does an Inception block have multiple branches?",
      answer:
        "Different branches can process the same input using different transformations and receptive-field sizes."
    },

    {
      type: "question",
      question: "Why are 1×1 convolutions useful before larger kernels?",
      answer:
        "They can reduce channel count before the more expensive spatial convolution."
    },

    {
      type: "heading",
      level: 2,
      text: "9. Inception Channel Calculation"
    },
    {
      type: "paragraph",
      text:
        "Four branches produce 32, 64, 32, and 16 output channels."
    },

    {
      type: "formula",
      text: "Total output channels = 32 + 64 + 32 + 16 = 144"
    },

    {
      type: "heading",
      level: 2,
      text: "10. BatchNorm Practice"
    },

    {
      type: "question",
      question: "What statistics are used by BatchNorm during training?",
      answer:
        "Batch mean and batch variance are used to normalize the current mini-batch."
    },

    {
      type: "question",
      question: "What are γ and β?",
      answer:
        "They are learnable scale and shift parameters."
    },

    {
      type: "question",
      question: "What should happen before inference?",
      answer:
        "The model should be switched to evaluation mode using model.eval()."
    },

    {
      type: "heading",
      level: 2,
      text: "11. ResNet Practice"
    },

    {
      type: "question",
      question: "What does a residual block learn?",
      answer:
        "It learns a residual transformation F(x) that is combined with the shortcut representation."
    },

    {
      type: "formula",
      text: "Output = F(x) + x"
    },

    {
      type: "question",
      question: "When is a projection shortcut required?",
      answer:
        "When the residual branch changes the tensor shape, such as channel count or spatial resolution."
    },

    {
      type: "heading",
      level: 2,
      text: "12. ResNet Shape Exercise"
    },
    {
      type: "paragraph",
      text:
        "An input tensor has shape 64 × 32 × 32. A residual stage changes it to 128 channels and halves the spatial resolution."
    },

    {
      type: "formula",
      text: "Input = 64 × 32 × 32"
    },

    {
      type: "formula",
      text: "Output = 128 × 16 × 16"
    },

    {
      type: "paragraph",
      text:
        "The shortcut must therefore transform both channel count and spatial resolution."
    },

    {
      type: "heading",
      level: 2,
      text: "13. ResNeXt Practice"
    },

    {
      type: "question",
      question: "What is grouped convolution?",
      answer:
        "It divides the input and output channels into groups and performs separate convolutional transformations within those groups."
    },

    {
      type: "question",
      question: "What is cardinality?",
      answer:
        "It refers to the number of groups or independent transformation paths in the grouped design."
    },

    {
      type: "heading",
      level: 2,
      text: "14. DenseNet Practice"
    },

    {
      type: "question",
      question: "How does DenseNet connect layers?",
      answer:
        "Each layer receives the concatenated outputs of preceding layers within the dense block."
    },

    {
      type: "formula",
      text: "xℓ = Hℓ([x0, x1, ..., xℓ−1])"
    },

    {
      type: "question",
      question: "What is the growth rate?",
      answer:
        "The number of new channels produced by each layer in a dense block."
    },

    {
      type: "heading",
      level: 2,
      text: "15. DenseNet Channel Calculation"
    },
    {
      type: "paragraph",
      text:
        "A dense block starts with 24 channels, contains 6 layers, and has growth rate 12."
    },

    {
      type: "formula",
      text: "Final channels = 24 + (6 × 12) = 96"
    },

    {
      type: "heading",
      level: 2,
      text: "16. Transition Layer Practice"
    },

    {
      type: "question",
      question: "Why does DenseNet use transition layers?",
      answer:
        "Dense blocks continuously increase channel count, so transition layers control complexity by reducing channels and spatial resolution."
    },

    {
      type: "heading",
      level: 2,
      text: "17. Architecture Design Practice"
    },

    {
      type: "question",
      question: "What are the stem, body, and head?",
      answer:
        "The stem performs initial processing, the body performs feature extraction, and the head converts the learned representation into the final task output."
    },

    {
      type: "question",
      question: "What are common stage-level design variables?",
      answer:
        "Depth, channel width, group count, and bottleneck ratio."
    },

    {
      type: "heading",
      level: 2,
      text: "18. Architecture Trade-Off Exercise"
    },

    {
      type: "table",
      headers: ["Modification", "Expected Effect"],
      rows: [
        ["More depth", "More transformations and computation"],
        ["More channels", "Higher feature capacity and memory use"],
        ["More groups", "More structured channel processing"],
        ["Higher resolution", "More spatial detail and computation"],
        ["Larger batch", "More samples per optimization step and potentially different normalization behavior"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "19. Coding Practice — Residual Block"
    },
    {
      type: "code",
      language: "python",
      title: "Task",
      code: `# Implement a residual block that:
#
# 1. Uses two 3x3 convolutions
# 2. Uses BatchNorm
# 3. Uses ReLU
# 4. Adds the shortcut
# 5. Supports channel changes
# 6. Supports spatial downsampling`
    },

    {
      type: "heading",
      level: 2,
      text: "20. Coding Practice — Dense Block"
    },
    {
      type: "code",
      language: "python",
      title: "Task",
      code: `# Implement a dense block that:
#
# 1. Accepts an input tensor
# 2. Creates several convolution blocks
# 3. Concatenates previous features
# 4. Adds growth_rate channels per layer
# 5. Returns the concatenated representation`
    },

    {
      type: "heading",
      level: 2,
      text: "21. Coding Practice — Architecture Builder"
    },
    {
      type: "code",
      language: "python",
      title: "Configurable CNN Task",
      code: `# Build a configurable CNN where the user can specify:
#
# channels = (32, 64, 128)
#
# The model should:
# - create convolution blocks automatically
# - reduce resolution between stages
# - increase channels across stages
# - use global average pooling
# - produce num_classes outputs`
    },

    {
      type: "heading",
      level: 2,
      text: "22. Debugging Challenge 1"
    },
    {
      type: "paragraph",
      text:
        "A residual block tries to execute y + x, but y has shape [8, 128, 16, 16] and x has shape [8, 64, 32, 32]."
    },

    {
      type: "question",
      question: "What is wrong?",
      answer:
        "The tensors have different channel counts and spatial dimensions, so they cannot be added directly."
    },

    {
      type: "question",
      question: "How can it be fixed?",
      answer:
        "Use a projection shortcut, such as a 1×1 convolution with the required output channels and stride."
    },

    {
      type: "heading",
      level: 2,
      text: "23. Debugging Challenge 2"
    },
    {
      type: "paragraph",
      text:
        "A DenseNet block begins with 32 channels and contains four layers with growth rate 16. The next layer is incorrectly configured to expect only 48 channels."
    },

    {
      type: "question",
      question: "What should the final channel count be?",
      answer:
        "32 + (4 × 16) = 96 channels."
    },

    {
      type: "heading",
      level: 2,
      text: "24. Debugging Challenge 3"
    },
    {
      type: "paragraph",
      text:
        "An Inception block has branch outputs with spatial sizes 28×28, 28×28, 14×14, and 28×28."
    },

    {
      type: "question",
      question: "Can they be concatenated directly?",
      answer:
        "No. The spatial dimensions must match before concatenation along the channel dimension."
    },

    {
      type: "heading",
      level: 2,
      text: "25. Debugging Challenge 4"
    },
    {
      type: "paragraph",
      text:
        "A CNN uses BatchNorm2d(64) immediately after a convolution producing 32 channels."
    },

    {
      type: "question",
      question: "What is the problem?",
      answer:
        "The BatchNorm feature count does not match the convolution output channels. BatchNorm2d should be configured with 32 features."
    },

    {
      type: "heading",
      level: 2,
      text: "26. Architecture Comparison"
    },

    {
      type: "table",
      headers: ["Architecture", "Central Idea"],
      rows: [
        ["VGG", "Repeated small convolution blocks"],
        ["NiN", "1×1 transformations and global average pooling"],
        ["GoogLeNet", "Parallel Inception branches"],
        ["BatchNorm CNN", "Activation normalization"],
        ["ResNet", "Residual shortcut connections"],
        ["ResNeXt", "Grouped residual transformations"],
        ["DenseNet", "Dense feature concatenation"],
        ["RegNet", "Structured CNN design space"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "27. Parameter Calculation"
    },
    {
      type: "paragraph",
      text:
        "Calculate the parameter count of a convolution with 64 input channels, 128 output channels, a 3×3 kernel, and a bias for every output channel."
    },

    {
      type: "formula",
      text: "Parameters = 3 × 3 × 64 × 128 + 128"
    },

    {
      type: "formula",
      text: "Parameters = 73,856"
    },

    {
      type: "heading",
      level: 2,
      text: "28. Architecture Reasoning"
    },
    {
      type: "paragraph",
      text:
        "A model has excellent validation accuracy but extremely high inference latency. Which architectural properties should you investigate?"
    },

    {
      type: "list",
      items: [
        "Input resolution",
        "Number of channels",
        "Number of layers",
        "Large fully connected layers",
        "Convolution kernel sizes",
        "Grouped versus dense convolutions",
        "Feature-map resolution",
        "Hardware utilization"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "29. Mini Project"
    },
    {
      type: "paragraph",
      text:
        "Build a CNN architecture laboratory. The application should allow you to select an architecture type, modify channel widths, choose the number of blocks, select a growth rate or group count, create the model, print tensor shapes, calculate parameter count, and run a sample forward pass."
    },

    {
      type: "heading",
      level: 2,
      text: "30. Mini Project Requirements"
    },
    {
      type: "list",
      items: [
        "VGG-style architecture option",
        "Residual architecture option",
        "Dense architecture option",
        "Configurable channel widths",
        "Configurable number of blocks",
        "Tensor shape reporting",
        "Parameter-count reporting",
        "Sample inference",
        "CPU/GPU detection",
        "Clear error messages for invalid configurations"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "31. Final Coding Challenge"
    },
    {
      type: "paragraph",
      text:
        "Create a configurable ResNet-style classifier. The user should be able to specify the number of classes, stage channel sizes, number of residual blocks per stage, and input image size. The implementation must automatically construct projection shortcuts whenever the tensor dimensions change."
    },

    {
      type: "heading",
      level: 2,
      text: "32. Final Debugging Challenge"
    },
    {
      type: "paragraph",
      text:
        "Your model produces a tensor of shape [32, 256, 7, 7] before classification. The classifier expects 512 input features."
    },

    {
      type: "question",
      question: "What is the likely problem?",
      answer:
        "The classifier input dimension does not match the feature representation. Either the classifier is expecting the wrong number of channels or the architecture before it is different from what the classifier assumes."
    },

    {
      type: "heading",
      level: 2,
      text: "33. Oral / Viva Questions"
    },

    {
      type: "list",
      items: [
        "Why are CNNs effective for images?",
        "What is a receptive field?",
        "What is the purpose of padding?",
        "What is stride?",
        "Why do CNNs use multiple channels?",
        "What is the purpose of pooling?",
        "Why did VGG use small kernels?",
        "What does a 1×1 convolution do?",
        "What is an Inception block?",
        "Why does BatchNorm have train and evaluation modes?",
        "What is residual learning?",
        "When is a projection shortcut required?",
        "What is grouped convolution?",
        "What is DenseNet's main connectivity pattern?",
        "What is growth rate?",
        "Why does DenseNet need transition layers?",
        "What are stem, body, and head?",
        "What are depth and width?",
        "What is an architecture design space?",
        "What is the basic idea behind RegNet?"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "34. Final Assessment — Architecture Design"
    },
    {
      type: "paragraph",
      text:
        "Design a complete image-classification CNN for a ten-class dataset. You must document the architecture before implementing it. Explain the stem, each stage, block type, channel progression, resolution changes, normalization strategy, pooling strategy, and classification head."
    },

    {
      type: "heading",
      level: 2,
      text: "35. Required Measurements"
    },
    {
      type: "list",
      items: [
        "Total parameter count",
        "Input tensor shape",
        "Output tensor shape",
        "Feature-map shape after each stage",
        "Training loss",
        "Validation loss",
        "Training accuracy",
        "Validation accuracy",
        "Inference time",
        "CPU/GPU used"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "36. Reflection Questions"
    },
    {
      type: "question",
      question: "Why might a smaller model be preferable to a larger model?",
      answer:
        "A smaller model may require less memory and computation and may have lower inference latency. The appropriate architecture depends on the task and deployment requirements."
    },

    {
      type: "question",
      question: "Why should parameter count not be the only metric?",
      answer:
        "Runtime also depends on feature-map sizes, operations, memory movement, hardware utilization, and implementation."
    },

    {
      type: "question",
      question: "What did modern CNN architecture design teach us?",
      answer:
        "Different structural ideas—small convolution blocks, 1×1 transformations, multi-branch computation, normalization, residual connections, dense connectivity, and structured design spaces—provide different ways to balance representation quality and computational cost."
    },

    {
      type: "heading",
      level: 2,
      text: "37. Module 3 Final Checklist"
    },
    {
      type: "list",
      items: [
        "I understand convolution and cross-correlation.",
        "I can calculate convolution output dimensions.",
        "I understand padding and stride.",
        "I understand multiple input and output channels.",
        "I understand pooling.",
        "I can implement a basic CNN.",
        "I understand LeNet.",
        "I understand AlexNet.",
        "I understand VGG blocks.",
        "I understand 1×1 convolution.",
        "I understand Network in Network.",
        "I understand Inception blocks.",
        "I understand BatchNorm.",
        "I can implement a residual block.",
        "I understand ResNet.",
        "I understand grouped convolution and ResNeXt.",
        "I understand DenseNet connectivity.",
        "I can calculate DenseNet channel growth.",
        "I understand transition layers.",
        "I understand CNN architecture design spaces.",
        "I understand stem, body, stages, blocks, and head.",
        "I can reason about depth, width, groups, and bottlenecks."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "38. Final Takeaway"
    },
    {
      type: "paragraph",
      text:
        "The most important skill from this module is not memorizing the names of CNN architectures. It is learning to look at an architecture and understand why each operation exists, how information and tensor shapes move through the network, what computational cost it introduces, and what problem the architectural idea is trying to solve."
    },

    {
      type: "keyTakeaway",
      text:
        "A strong computer-vision engineer should be able to move from convolution fundamentals to architecture design, implementation, debugging, measurement, and informed experimentation."
    }
  ]
};

export default practice;