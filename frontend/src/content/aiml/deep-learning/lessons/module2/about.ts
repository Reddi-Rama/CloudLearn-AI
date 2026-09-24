const module2About = {
  id: "module2",

  title: "Neural Networks and Learning",

  shortTitle: "Neural Networks",

  description:
    "Build the foundations of neural network learning by studying linear models, regression, classification, softmax, loss functions, model design, generalization, multilayer perceptrons, and the core mechanics of training neural networks.",

  overview: `
Module 2 moves from the mathematical and computational foundations of Module 1 into actual machine learning models.

The module begins with linear regression because it provides a simple setting in which the complete learning process can be understood:

data
→ model
→ prediction
→ loss
→ gradients
→ parameter updates
→ training

From there, the same ideas are extended to classification using softmax regression and cross-entropy loss.

The module then introduces multilayer perceptrons, activation functions, backpropagation, numerical stability, generalization, dropout, parameter initialization, layers, modules, model storage, and accelerated computation.

The goal is not simply to learn individual algorithms.

The goal is to understand how neural networks are constructed, trained, evaluated, and implemented using a deep learning framework.
`,

  sourceCoverage: [
    "Linear regression",
    "Vectorization and efficient computation",
    "Linear regression as a neural network",
    "Object-oriented model design",
    "Synthetic regression data",
    "Classification",
    "Softmax regression",
    "Cross-entropy loss",
    "Image classification",
    "Multilayer perceptrons",
    "Activation functions",
    "Backpropagation",
    "Numerical stability",
    "Generalization",
    "Dropout",
    "Parameter initialization",
    "Layers and modules",
    "Custom layers",
    "Model file input/output",
    "GPU acceleration"
  ],

  learningGoals: [
    "Understand the complete training workflow of a neural network.",
    "Understand linear regression mathematically and computationally.",
    "Understand how vectorization improves implementation efficiency.",
    "Understand the relationship between linear regression and neural networks.",
    "Understand classification as a supervised learning problem.",
    "Understand softmax probabilities and cross-entropy loss.",
    "Understand how image classification data can be represented for neural networks.",
    "Understand multilayer perceptrons and hidden layers.",
    "Understand why activation functions introduce nonlinear modeling capacity.",
    "Understand backpropagation and gradient-based learning.",
    "Recognize numerical stability problems in neural network computations.",
    "Understand training error, generalization, underfitting, and overfitting.",
    "Understand dropout and parameter initialization.",
    "Understand modular neural-network implementation.",
    "Understand how models can be saved and restored.",
    "Understand the role of GPUs in accelerating deep learning."
  ],

  prerequisites: [
    "Module 1: Deep Learning Foundations",
    "Python programming fundamentals",
    "Basic NumPy or tensor operations",
    "Basic linear algebra",
    "Basic calculus",
    "Automatic differentiation",
    "Basic probability and statistics"
  ],

  lessonCount: 16,

  lessons: [
    {
      number: 1,
      id: "lesson1",
      title: "Linear Regression",
      description:
        "Understand regression, features, labels, linear models, loss functions, and the basic learning process."
    },
    {
      number: 2,
      id: "lesson2",
      title: "Vectorization and Efficient Computation",
      description:
        "Learn how vectorized tensor operations make machine learning implementations faster and cleaner."
    },
    {
      number: 3,
      id: "lesson3",
      title: "Linear Regression as a Neural Network",
      description:
        "Connect the mathematical linear regression model to the structure of a neural network."
    },
    {
      number: 4,
      id: "lesson4",
      title: "Object-Oriented Model Design",
      description:
        "Learn how data, models, training logic, and utilities can be organized into reusable components."
    },
    {
      number: 5,
      id: "lesson5",
      title: "Softmax Regression",
      description:
        "Move from numerical prediction to multiclass classification using softmax."
    },
    {
      number: 6,
      id: "lesson6",
      title: "Image Classification Basics",
      description:
        "Understand image classification datasets and the structure of classification tasks."
    },
    {
      number: 7,
      id: "lesson7",
      title: "Multilayer Perceptrons",
      description:
        "Understand hidden layers, nonlinear transformations, and multilayer neural networks."
    },
    {
      number: 8,
      id: "lesson8",
      title: "Backpropagation",
      description:
        "Understand how gradients propagate backward through neural networks."
    },
    {
      number: 9,
      id: "lesson9",
      title: "Numerical Stability",
      description:
        "Understand numerical problems that can occur during neural-network computation."
    },
    {
      number: 10,
      id: "lesson10",
      title: "Generalization",
      description:
        "Study training performance, unseen data, underfitting, overfitting, and model selection."
    },
    {
      number: 11,
      id: "lesson11",
      title: "Dropout",
      description:
        "Understand dropout as a technique for improving neural-network generalization."
    },
    {
      number: 12,
      id: "lesson12",
      title: "Parameter Initialization",
      description:
        "Understand why neural-network parameters require appropriate initialization."
    },
    {
      number: 13,
      id: "lesson13",
      title: "Layers and Modules",
      description:
        "Learn how deep learning frameworks organize neural networks into reusable modules."
    },
    {
      number: 14,
      id: "lesson14",
      title: "Custom Layers",
      description:
        "Learn how to create custom neural-network components."
    },
    {
      number: 15,
      id: "lesson15",
      title: "File I/O for Models",
      description:
        "Learn how trained model parameters can be saved and loaded."
    },
    {
      number: 16,
      id: "lesson16",
      title: "GPUs and Accelerated Training",
      description:
        "Understand GPU computation and why hardware acceleration is important for deep learning."
    }
  ],

  skillsDeveloped: [
    "Regression modeling",
    "Classification modeling",
    "Tensor vectorization",
    "Loss-function design",
    "Gradient-based training",
    "Softmax classification",
    "Neural-network architecture",
    "Backpropagation",
    "Generalization analysis",
    "Regularization",
    "Parameter initialization",
    "Modular model design",
    "Model persistence",
    "GPU computation"
  ],

  completionOutcome: `
After completing Module 2, you should be able to explain how a neural network learns from data and implement the fundamental components of neural-network training.

You should understand the progression:

Linear Regression
→ Classification
→ Softmax Regression
→ Multilayer Perceptron
→ Backpropagation
→ Regularization
→ Modular Neural Networks
→ Accelerated Training

These concepts form the foundation for the convolutional neural networks studied in Module 3.
`,

  nextModule: {
    id: "module3",
    title: "Convolutional Neural Networks"
  }
};

export default module2About;