export default {
  id: "module3",
  number: 3,
  title: "Convolutional Neural Networks",
  description:
    "Learn how convolutional neural networks exploit the spatial structure of images through locality, translation invariance, shared parameters, convolution, channels, padding, and stride. Build CNN components from first principles and understand how these ideas lead to practical computer vision architectures.",

  objectives: [
    "Understand why fully connected networks are inefficient for high-dimensional images.",
    "Understand locality and translation invariance.",
    "Understand how convolution reduces the number of learnable parameters.",
    "Distinguish convolution from cross-correlation.",
    "Implement two-dimensional cross-correlation from scratch.",
    "Understand convolutional kernels and biases.",
    "Understand feature maps and receptive fields.",
    "Understand padding and stride.",
    "Understand multiple input and output channels.",
    "Understand how CNNs preserve and transform spatial information.",
    "Understand pooling and its role in CNN architectures.",
    "Build the conceptual foundation required for LeNet and modern CNNs."
  ],

  lessons: [
    {
      id: "lesson1",
      number: 1,
      title: "Convolutional Principles",
      href: "/lesson/aiml/deep-learning/module3/lesson1"
    },
    {
      id: "lesson2",
      number: 2,
      title: "Convolutions for Images",
      href: "/lesson/aiml/deep-learning/module3/lesson2"
    },
    {
      id: "lesson3",
      number: 3,
      title: "Padding and Stride",
      href: "/lesson/aiml/deep-learning/module3/lesson3"
    },
    {
      id: "lesson4",
      number: 4,
      title: "Multiple Channels",
      href: "/lesson/aiml/deep-learning/module3/lesson4"
    },
    {
      id: "lesson5",
      number: 5,
      title: "Pooling",
      href: "/lesson/aiml/deep-learning/module3/lesson5"
    },
    {
      id: "lesson6",
      number: 6,
      title: "LeNet",
      href: "/lesson/aiml/deep-learning/module3/lesson6"
    },
    {
      id: "lesson7",
      number: 7,
      title: "Deep CNN Design",
      href: "/lesson/aiml/deep-learning/module3/lesson7"
    },
    {
      id: "lesson8",
      number: 8,
      title: "AlexNet",
      href: "/lesson/aiml/deep-learning/module3/lesson8"
    },
    {
      id: "lesson9",
      number: 9,
      title: "VGG",
      href: "/lesson/aiml/deep-learning/module3/lesson9"
    },
    {
      id: "lesson10",
      number: 10,
      title: "Network Design Patterns",
      href: "/lesson/aiml/deep-learning/module3/lesson10"
    },
    {
      id: "lesson11",
      number: 11,
      title: "GoogLeNet",
      href: "/lesson/aiml/deep-learning/module3/lesson11"
    },
    {
      id: "lesson12",
      number: 12,
      title: "Batch Normalization",
      href: "/lesson/aiml/deep-learning/module3/lesson12"
    },
    {
      id: "lesson13",
      number: 13,
      title: "ResNet",
      href: "/lesson/aiml/deep-learning/module3/lesson13"
    },
    {
      id: "lesson14",
      number: 14,
      title: "DenseNet",
      href: "/lesson/aiml/deep-learning/module3/lesson14"
    },
    {
      id: "lesson15",
      number: 15,
      title: "Modern CNN Practices",
      href: "/lesson/aiml/deep-learning/module3/lesson15"
    }
  ],

  skills: [
    "CNN architecture",
    "2D convolution",
    "Cross-correlation",
    "Kernels and filters",
    "Feature maps",
    "Receptive fields",
    "Padding",
    "Stride",
    "Channels",
    "Pooling",
    "PyTorch Conv2d",
    "CNN tensor shapes",
    "Computer vision model design"
  ],

  prerequisites: [
    "Python fundamentals",
    "PyTorch tensors",
    "Linear algebra basics",
    "Neural networks and MLPs",
    "Backpropagation",
    "Parameter initialization",
    "Basic understanding of image tensors"
  ],

  outcome:
    "After completing this module, you should be able to explain why CNNs are appropriate for image data, calculate convolution output dimensions, implement basic convolution operations, reason about channels and receptive fields, configure convolutional layers, and understand the architectural ideas behind major CNN families."
};