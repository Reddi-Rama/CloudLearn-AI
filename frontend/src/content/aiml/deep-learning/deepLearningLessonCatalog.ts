// ============================================================
// CloudLearn AI
// Deep Learning & Computer Vision
// Generated lesson catalog
// Source of truth: src/content/aiml/deep-learning/lessons
// ============================================================

export type DeepLearningLessonCatalogItem = {
  id: string;
  number: number;
  title: string;
  href: string;
};

export type DeepLearningModuleCatalogItem = {
  id: string;
  number: number;
  title: string;
  lessons: DeepLearningLessonCatalogItem[];
};

export const deepLearningLessonCatalog: DeepLearningModuleCatalogItem[] = [
  {
    id: "module1",
    number: 1,
    title: "Deep Learning Foundations",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "Introduction to Deep Learning",
        href: "/lesson/aiml/deep-learning/module1/lesson1",
      },
      {
        id: "lesson2",
        number: 2,
        title: "Data Manipulation with Tensors",
        href: "/lesson/aiml/deep-learning/module1/lesson2",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Data Preprocessing",
        href: "/lesson/aiml/deep-learning/module1/lesson3",
      },
      {
        id: "lesson4",
        number: 4,
        title: "Linear Algebra for Deep Learning",
        href: "/lesson/aiml/deep-learning/module1/lesson4",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Calculus for Deep Learning",
        href: "/lesson/aiml/deep-learning/module1/lesson5",
      },
      {
        id: "lesson6",
        number: 6,
        title: "Automatic Differentiation",
        href: "/lesson/aiml/deep-learning/module1/lesson6",
      },
      {
        id: "lesson7",
        number: 7,
        title: "Probability and Statistics",
        href: "/lesson/aiml/deep-learning/module1/lesson7",
      },
      {
        id: "lesson8",
        number: 8,
        title: "Working with Documentation",
        href: "/lesson/aiml/deep-learning/module1/lesson8",
      },
    ],
  },
  {
    id: "module2",
    number: 2,
    title: "Neural Networks and Learning",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "Linear Regression",
        href: "/lesson/aiml/deep-learning/module2/lesson1",
      },
      {
        id: "lesson2",
        number: 2,
        title: "Vectorization and Efficient Computation",
        href: "/lesson/aiml/deep-learning/module2/lesson2",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Linear Regression as a Neural Network",
        href: "/lesson/aiml/deep-learning/module2/lesson3",
      },
      {
        id: "lesson4",
        number: 4,
        title: "Object-Oriented Model Design",
        href: "/lesson/aiml/deep-learning/module2/lesson4",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Softmax Regression",
        href: "/lesson/aiml/deep-learning/module2/lesson5",
      },
      {
        id: "lesson6",
        number: 6,
        title: "Image Classification Basics",
        href: "/lesson/aiml/deep-learning/module2/lesson6",
      },
      {
        id: "lesson7",
        number: 7,
        title: "Multilayer Perceptrons",
        href: "/lesson/aiml/deep-learning/module2/lesson7",
      },
      {
        id: "lesson8",
        number: 8,
        title: "Forward Propagation, Backpropagation, and Computational Graphs",
        href: "/lesson/aiml/deep-learning/module2/lesson8",
      },
      {
        id: "lesson9",
        number: 9,
        title: "Numerical Stability and Parameter Initialization",
        href: "/lesson/aiml/deep-learning/module2/lesson9",
      },
      {
        id: "lesson10",
        number: 10,
        title: "Generalization in Deep Learning",
        href: "/lesson/aiml/deep-learning/module2/lesson10",
      },
      {
        id: "lesson11",
        number: 11,
        title: "Dropout",
        href: "/lesson/aiml/deep-learning/module2/lesson11",
      },
      {
        id: "lesson12",
        number: 12,
        title: "Parameter Initialization",
        href: "/lesson/aiml/deep-learning/module2/lesson12",
      },
      {
        id: "lesson13",
        number: 13,
        title: "Layers and Modules",
        href: "/lesson/aiml/deep-learning/module2/lesson13",
      },
      {
        id: "lesson14",
        number: 14,
        title: "Custom Layers",
        href: "/lesson/aiml/deep-learning/module2/lesson14",
      },
      {
        id: "lesson15",
        number: 15,
        title: "File I/O for Models",
        href: "/lesson/aiml/deep-learning/module2/lesson15",
      },
      {
        id: "lesson16",
        number: 16,
        title: "GPUs and Accelerated Training",
        href: "/lesson/aiml/deep-learning/module2/lesson16",
      },
    ],
  },
  {
    id: "module3",
    number: 3,
    title: "Convolutional Neural Networks",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "Convolutional Principles",
        href: "/lesson/aiml/deep-learning/module3/lesson1",
      },
      {
        id: "lesson2",
        number: 2,
        title: "Convolutions for Images",
        href: "/lesson/aiml/deep-learning/module3/lesson2",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Padding and Stride",
        href: "/lesson/aiml/deep-learning/module3/lesson3",
      },
      {
        id: "lesson4",
        number: 4,
        title: "Multiple Channels",
        href: "/lesson/aiml/deep-learning/module3/lesson4",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Pooling",
        href: "/lesson/aiml/deep-learning/module3/lesson5",
      },
      {
        id: "lesson6",
        number: 6,
        title: "LeNet",
        href: "/lesson/aiml/deep-learning/module3/lesson6",
      },
      {
        id: "lesson7",
        number: 7,
        title: "Deep CNN Design",
        href: "/lesson/aiml/deep-learning/module3/lesson7",
      },
      {
        id: "lesson8",
        number: 8,
        title: "AlexNet",
        href: "/lesson/aiml/deep-learning/module3/lesson8",
      },
      {
        id: "lesson9",
        number: 9,
        title: "VGG: Networks Using Blocks",
        href: "/lesson/aiml/deep-learning/module3/lesson9",
      },
      {
        id: "lesson10",
        number: 10,
        title: "Network in Network (NiN)",
        href: "/lesson/aiml/deep-learning/module3/lesson10",
      },
      {
        id: "lesson11",
        number: 11,
        title: "GoogLeNet and Inception Blocks",
        href: "/lesson/aiml/deep-learning/module3/lesson11",
      },
      {
        id: "lesson12",
        number: 12,
        title: "Batch Normalization",
        href: "/lesson/aiml/deep-learning/module3/lesson12",
      },
      {
        id: "lesson13",
        number: 13,
        title: "Residual Networks (ResNet) and ResNeXt",
        href: "/lesson/aiml/deep-learning/module3/lesson13",
      },
      {
        id: "lesson14",
        number: 14,
        title: "Densely Connected Networks (DenseNet)",
        href: "/lesson/aiml/deep-learning/module3/lesson14",
      },
      {
        id: "lesson15",
        number: 15,
        title: "Designing Convolutional Network Architectures",
        href: "/lesson/aiml/deep-learning/module3/lesson15",
      },
    ],
  },
  {
    id: "module4",
    number: 4,
    title: "Sequence Models and Transformers",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "Sequence Data and Temporal Dependencies",
        href: "/lesson/aiml/deep-learning/module4/lesson1",
      },
      {
        id: "lesson2",
        number: 2,
        title: "Recurrent Neural Networks",
        href: "/lesson/aiml/deep-learning/module4/lesson2",
      },
      {
        id: "lesson3",
        number: 3,
        title: "RNNs from Scratch",
        href: "/lesson/aiml/deep-learning/module4/lesson3",
      },
      {
        id: "lesson4",
        number: 4,
        title: "RNN Language Models",
        href: "/lesson/aiml/deep-learning/module4/lesson4",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Training RNNs and Gradient Problems",
        href: "/lesson/aiml/deep-learning/module4/lesson5",
      },
      {
        id: "lesson6",
        number: 6,
        title: "Concise RNN Implementation",
        href: "/lesson/aiml/deep-learning/module4/lesson6",
      },
      {
        id: "lesson7",
        number: 7,
        title: "Gated Recurrent Units (GRU)",
        href: "/lesson/aiml/deep-learning/module4/lesson7",
      },
      {
        id: "lesson8",
        number: 8,
        title: "Long Short-Term Memory (LSTM)",
        href: "/lesson/aiml/deep-learning/module4/lesson8",
      },
      {
        id: "lesson9",
        number: 9,
        title: "Deep Recurrent Neural Networks",
        href: "/lesson/aiml/deep-learning/module4/lesson9",
      },
      {
        id: "lesson10",
        number: 10,
        title: "Bidirectional Recurrent Neural Networks",
        href: "/lesson/aiml/deep-learning/module4/lesson10",
      },
      {
        id: "lesson11",
        number: 11,
        title: "Machine Translation and Sequence Dataset Preparation",
        href: "/lesson/aiml/deep-learning/module4/lesson11",
      },
      {
        id: "lesson12",
        number: 12,
        title: "Machine Translation and the Dataset",
        href: "/lesson/aiml/deep-learning/module4/lesson12",
      },
      {
        id: "lesson13",
        number: 13,
        title: "The Encoder–Decoder Architecture",
        href: "/lesson/aiml/deep-learning/module4/lesson13",
      },
      {
        id: "lesson14",
        number: 14,
        title: "Sequence-to-Sequence Learning for Machine Translation",
        href: "/lesson/aiml/deep-learning/module4/lesson14",
      },
      {
        id: "lesson15",
        number: 15,
        title: "Beam Search",
        href: "/lesson/aiml/deep-learning/module4/lesson15",
      },
      {
        id: "lesson16",
        number: 16,
        title: "Attention Mechanisms",
        href: "/lesson/aiml/deep-learning/module4/lesson16",
      },
      {
        id: "lesson17",
        number: 17,
        title: "Multi-Head Attention",
        href: "/lesson/aiml/deep-learning/module4/lesson17",
      },
      {
        id: "lesson18",
        number: 18,
        title: "Self-Attention and Positional Encoding",
        href: "/lesson/aiml/deep-learning/module4/lesson18",
      },
      {
        id: "lesson19",
        number: 19,
        title: "The Transformer Architecture",
        href: "/lesson/aiml/deep-learning/module4/lesson19",
      },
      {
        id: "lesson20",
        number: 20,
        title: "The Transformer Architecture",
        href: "/lesson/aiml/deep-learning/module4/lesson20",
      },
      {
        id: "lesson21",
        number: 21,
        title: "Transformers for Vision",
        href: "/lesson/aiml/deep-learning/module4/lesson21",
      },
      {
        id: "lesson22",
        number: 22,
        title: "Large-Scale Pretraining with Transformers",
        href: "/lesson/aiml/deep-learning/module4/lesson22",
      },
    ],
  },
  {
    id: "module5",
    number: 5,
    title: "Advanced Deep Learning and Training",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "Optimization and Deep Learning",
        href: "/lesson/aiml/deep-learning/module5/lesson1",
      },
      {
        id: "lesson2",
        number: 2,
        title: "Convexity",
        href: "/lesson/aiml/deep-learning/module5/lesson2",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Gradient Descent",
        href: "/lesson/aiml/deep-learning/module5/lesson3",
      },
      {
        id: "lesson4",
        number: 4,
        title: "Stochastic Gradient Descent",
        href: "/lesson/aiml/deep-learning/module5/lesson4",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Minibatch Stochastic Gradient Descent",
        href: "/lesson/aiml/deep-learning/module5/lesson5",
      },
      {
        id: "lesson6",
        number: 6,
        title: "Momentum",
        href: "/lesson/aiml/deep-learning/module5/lesson6",
      },
      {
        id: "lesson7",
        number: 7,
        title: "AdaGrad",
        href: "/lesson/aiml/deep-learning/module5/lesson7",
      },
      {
        id: "lesson8",
        number: 8,
        title: "RMSProp",
        href: "/lesson/aiml/deep-learning/module5/lesson8",
      },
      {
        id: "lesson9",
        number: 9,
        title: "AdaDelta",
        href: "/lesson/aiml/deep-learning/module5/lesson9",
      },
      {
        id: "lesson10",
        number: 10,
        title: "Adam",
        href: "/lesson/aiml/deep-learning/module5/lesson10",
      },
      {
        id: "lesson11",
        number: 11,
        title: "Learning Rate Scheduling",
        href: "/lesson/aiml/deep-learning/module5/lesson11",
      },
      {
        id: "lesson12",
        number: 12,
        title: "Compilers and Interpreters",
        href: "/lesson/aiml/deep-learning/module5/lesson12",
      },
      {
        id: "lesson13",
        number: 13,
        title: "Asynchronous Computation",
        href: "/lesson/aiml/deep-learning/module5/lesson13",
      },
      {
        id: "lesson14",
        number: 14,
        title: "Automatic Parallelism",
        href: "/lesson/aiml/deep-learning/module5/lesson14",
      },
      {
        id: "lesson15",
        number: 15,
        title: "Deep Learning Hardware",
        href: "/lesson/aiml/deep-learning/module5/lesson15",
      },
      {
        id: "lesson16",
        number: 16,
        title: "GPU Computing",
        href: "/lesson/aiml/deep-learning/module5/lesson16",
      },
      {
        id: "lesson17",
        number: 17,
        title: "Multiple GPU Training",
        href: "/lesson/aiml/deep-learning/module5/lesson17",
      },
      {
        id: "lesson18",
        number: 18,
        title: "Data Parallelism",
        href: "/lesson/aiml/deep-learning/module5/lesson18",
      },
      {
        id: "lesson19",
        number: 19,
        title: "Parameter Servers",
        href: "/lesson/aiml/deep-learning/module5/lesson19",
      },
    ],
  },
  {
    id: "module6",
    number: 6,
    title: "Advanced Computer Vision",
    lessons: [
      {
        id: "lesson1",
        number: 1,
        title: "Image Augmentation",
        href: "/lesson/aiml/deep-learning/module6/lesson1",
      },
      {
        id: "lesson2",
        number: 2,
        title: "Fine-Tuning",
        href: "/lesson/aiml/deep-learning/module6/lesson2",
      },
      {
        id: "lesson3",
        number: 3,
        title: "Object Detection and Bounding Boxes",
        href: "/lesson/aiml/deep-learning/module6/lesson3",
      },
      {
        id: "lesson4",
        number: 4,
        title: "Anchor Boxes",
        href: "/lesson/aiml/deep-learning/module6/lesson4",
      },
      {
        id: "lesson5",
        number: 5,
        title: "Multiscale Object Detection",
        href: "/lesson/aiml/deep-learning/module6/lesson5",
      },
      {
        id: "lesson6",
        number: 6,
        title: "The Object Detection Dataset",
        href: "/lesson/aiml/deep-learning/module6/lesson6",
      },
      {
        id: "lesson7",
        number: 7,
        title: "Single Shot Multibox Detection",
        href: "/lesson/aiml/deep-learning/module6/lesson7",
      },
      {
        id: "lesson8",
        number: 8,
        title: "Region-Based CNNs",
        href: "/lesson/aiml/deep-learning/module6/lesson8",
      },
      {
        id: "lesson9",
        number: 9,
        title: "Semantic Segmentation and the Dataset",
        href: "/lesson/aiml/deep-learning/module6/lesson9",
      },
      {
        id: "lesson10",
        number: 10,
        title: "Transposed Convolution",
        href: "/lesson/aiml/deep-learning/module6/lesson10",
      },
      {
        id: "lesson11",
        number: 11,
        title: "Fully Convolutional Networks",
        href: "/lesson/aiml/deep-learning/module6/lesson11",
      },
      {
        id: "lesson12",
        number: 12,
        title: "Neural Style Transfer",
        href: "/lesson/aiml/deep-learning/module6/lesson12",
      },
      {
        id: "lesson13",
        number: 13,
        title: "Image Classification with CIFAR-10",
        href: "/lesson/aiml/deep-learning/module6/lesson13",
      },
      {
        id: "lesson14",
        number: 14,
        title: "Dog Breed Identification with Transfer Learning",
        href: "/lesson/aiml/deep-learning/module6/lesson14",
      },
      {
        id: "lesson15",
        number: 15,
        title: "Computer Vision Project Workflow",
        href: "/lesson/aiml/deep-learning/module6/lesson15",
      },
      {
        id: "lesson16",
        number: 16,
        title: "Advanced Object Detection Systems",
        href: "/lesson/aiml/deep-learning/module6/lesson16",
      },
      {
        id: "lesson17",
        number: 17,
        title: "Advanced Image Segmentation Systems",
        href: "/lesson/aiml/deep-learning/module6/lesson17",
      },
      {
        id: "lesson18",
        number: 18,
        title: "Neural Style Transfer",
        href: "/lesson/aiml/deep-learning/module6/lesson18",
      },
      {
        id: "lesson19",
        number: 19,
        title: "Computer Vision Model Optimization and Deployment",
        href: "/lesson/aiml/deep-learning/module6/lesson19",
      },
      {
        id: "lesson20",
        number: 20,
        title: "Computer Vision Capstone and End-to-End Project Workflow",
        href: "/lesson/aiml/deep-learning/module6/lesson20",
      },
    ],
  },
];

export default deepLearningLessonCatalog;
