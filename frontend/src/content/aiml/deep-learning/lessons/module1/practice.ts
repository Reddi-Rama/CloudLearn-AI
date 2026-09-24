const practice = {
  moduleId: "module1",
  title: "Module 1 Practice — Deep Learning Foundations",

  description:
    "A complete practice environment covering the mathematical, computational, and conceptual foundations required for deep learning.",

  learningGoal:
    "By completing this practice module, learners should be able to manipulate tensors, preprocess data, apply linear algebra and calculus, compute gradients with automatic differentiation, reason about probability and statistics, and independently explore deep learning APIs.",

  instructions: [
    "Complete the revision section before attempting the exercises.",
    "For mathematical problems, show your calculations.",
    "For coding problems, write and execute the code instead of only reading it.",
    "For debugging problems, identify the cause before applying the fix.",
    "For output-prediction problems, predict the result before executing the code.",
    "Use PyTorch for tensor and automatic differentiation exercises.",
    "Use NumPy or PyTorch when a numerical experiment requires it.",
    "Keep your code organized and add comments where appropriate.",
    "Complete the lesson challenge after finishing the lesson exercises.",
    "Complete the final module challenge only after completing all eight lessons."
  ],

  lessons: [

    // ============================================================
    // LESSON 1
    // ============================================================

    {
      id: "lesson1",
      lessonNumber: 1,
      title: "Introduction to Deep Learning",

      overview:
        "Practice the fundamental ideas of machine learning, representation learning, deep learning, training, generalization, data, computation, and end-to-end learning.",

      revision: [
        "Machine learning enables systems to improve performance using experience or data.",
        "Representation learning focuses on automatically learning useful representations from data.",
        "Deep learning uses multiple layers of transformations to learn hierarchical representations.",
        "A learning system normally involves data, a model, an objective or loss, optimization, and computation.",
        "Training performance alone is not sufficient; the model should also generalize to unseen data.",
        "Deep learning success is strongly connected to large datasets, computational resources, and efficient software frameworks.",
        "Supervised learning uses labeled examples.",
        "Unsupervised learning works with data where explicit target labels are not provided.",
        "Reinforcement learning learns through interaction and feedback.",
        "End-to-end learning attempts to learn a mapping from input to desired output with fewer manually designed intermediate stages."
      ],

      keyTerms: [
        "Machine Learning",
        "Deep Learning",
        "Representation Learning",
        "Feature Engineering",
        "Training",
        "Generalization",
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "End-to-End Learning",
        "Model",
        "Loss",
        "Optimization"
      ],

      conceptual: [
        {
          id: "l1-c1",
          difficulty: "Easy",
          question:
            "What is machine learning?",
          answer:
            "Machine learning is a field in which computational systems use data or experience to improve their performance on a task."
        },

        {
          id: "l1-c2",
          difficulty: "Easy",
          question:
            "What is deep learning?",
          answer:
            "Deep learning is a form of machine learning based on models that learn representations through multiple layers of transformations."
        },

        {
          id: "l1-c3",
          difficulty: "Easy",
          question:
            "What is representation learning?",
          answer:
            "Representation learning allows a system to learn useful representations of data rather than requiring every useful feature to be manually designed."
        },

        {
          id: "l1-c4",
          difficulty: "Medium",
          question:
            "How is deep learning different from traditional machine learning pipelines?",
          answer:
            "Traditional pipelines often depend heavily on manually engineered features, whereas deep learning can learn multiple levels of representation directly from data."
        },

        {
          id: "l1-c5",
          difficulty: "Medium",
          question:
            "Why are multiple layers useful?",
          answer:
            "Different layers can transform information progressively, allowing later layers to construct increasingly useful representations from earlier ones."
        },

        {
          id: "l1-c6",
          difficulty: "Medium",
          question:
            "Why is training accuracy not enough to judge a model?",
          answer:
            "A model can fit training examples very well while failing on unseen examples. Generalization to new data is therefore important."
        },

        {
          id: "l1-c7",
          difficulty: "Medium",
          question:
            "Explain the relationship between data and computation in deep learning.",
          answer:
            "Large or complex datasets and models require significant computation. Available hardware and computational resources influence which models can practically be trained."
        },

        {
          id: "l1-c8",
          difficulty: "Hard",
          question:
            "Explain the idea of end-to-end learning.",
          answer:
            "End-to-end learning attempts to learn the transformation from raw or relatively unprocessed input directly to the desired output rather than relying on many manually engineered intermediate stages."
        },

        {
          id: "l1-c9",
          difficulty: "Hard",
          question:
            "Why can deep learning reduce the need for manual feature engineering?",
          answer:
            "The network can learn representations through its layers, allowing useful features to emerge as part of training."
        },

        {
          id: "l1-c10",
          difficulty: "Hard",
          question:
            "Explain why deep learning is interdisciplinary.",
          answer:
            "Deep learning combines ideas from mathematics, statistics, optimization, computer science, and other fields."
        }
      ],

      scenarios: [
        {
          id: "l1-s1",
          difficulty: "Easy",
          scenario:
            "A company wants to classify images of cats and dogs.",
          task:
            "Identify the input, output, learning setting, and type of data.",
          expected:
            "Images are the inputs, class labels are the outputs, and this is a supervised learning problem."
        },

        {
          id: "l1-s2",
          difficulty: "Medium",
          scenario:
            "A model achieves 99% accuracy on its training dataset but only 70% on unseen examples.",
          task:
            "Explain what this situation suggests.",
          expected:
            "The model may have learned the training data too specifically and may not generalize well."
        },

        {
          id: "l1-s3",
          difficulty: "Medium",
          scenario:
            "You have thousands of images but very limited computational resources.",
          task:
            "Explain why computational resources matter when choosing a deep learning approach."
        },

        {
          id: "l1-s4",
          difficulty: "Hard",
          scenario:
            "A system receives raw images and directly predicts whether a road is safe to drive on.",
          task:
            "Explain why this can be considered an end-to-end learning setup."
        }
      ],

      reasoning: [
        {
          id: "l1-r1",
          question:
            "Suppose a dataset contains only ten examples. What problems might occur when training a complex model?",
          expected:
            "Limited data may make it difficult for the model to learn reliable patterns and may increase the risk of poor generalization."
        },

        {
          id: "l1-r2",
          question:
            "Why does increasing model complexity not automatically guarantee better performance on unseen data?",
          expected:
            "Greater complexity can allow a model to fit training data very closely without necessarily learning patterns that generalize."
        },

        {
          id: "l1-r3",
          question:
            "Why are algorithms, data, and computation often discussed together?",
          expected:
            "A useful learning system depends on the interaction between the available data, the algorithm/model, and the computation required to train it."
        }
      ],

      coding: [
        {
          id: "l1-code1",
          title: "Simple Learning Pipeline",
          difficulty: "Easy",
          task:
            "Write a Python program that prints the five major stages of a generic deep learning pipeline: data, preprocessing, model, training, and evaluation."
        },

        {
          id: "l1-code2",
          title: "Learning Problem Classifier",
          difficulty: "Medium",
          task:
            "Create a Python program that stores five example problems and labels each one as supervised, unsupervised, or reinforcement learning."
        },

        {
          id: "l1-code3",
          title: "Mini Dataset Analysis",
          difficulty: "Medium",
          task:
            "Create a small dataset containing input examples and labels. Print the number of examples and number of classes."
        },

        {
          id: "l1-code4",
          title: "Deep Learning Pipeline Design",
          difficulty: "Hard",
          task:
            "Create a notebook describing a complete image-classification pipeline from raw images through preprocessing, model training, validation, and testing."
        }
      ],

      outputPrediction: [
        {
          id: "l1-o1",
          code: `
layers = 4
features_per_layer = 32

print(layers)
print(features_per_layer)
          `,
          question: "What will be printed?",
          answer: "4 followed by 32."
        }
      ],

      miniTasks: [
        "Explain deep learning to a beginner in five sentences.",
        "Draw a simple representation-learning pipeline.",
        "Give three real-world applications of deep learning.",
        "Give one example where supervised learning is appropriate.",
        "Give one example where unsupervised learning is appropriate.",
        "Explain why data quality matters.",
        "Explain why computation matters.",
        "Describe the difference between training and generalization."
      ],

      challenge: {
        title: "Design Your First Deep Learning System",
        difficulty: "Hard",
        task:
          "Choose one real-world problem and design a complete conceptual deep learning system for it.",
        requirements: [
          "Define the problem.",
          "Identify the input data.",
          "Identify the expected output.",
          "Choose the learning setting.",
          "Describe the representations that may need to be learned.",
          "Describe the model at a high level.",
          "Explain how training would work.",
          "Explain how generalization would be evaluated.",
          "Identify the computational resources that may be required."
        ]
      },

      checklist: [
        "I can explain machine learning.",
        "I can explain deep learning.",
        "I understand representation learning.",
        "I understand supervised learning.",
        "I understand unsupervised learning.",
        "I understand reinforcement learning.",
        "I understand training and generalization.",
        "I understand end-to-end learning.",
        "I understand why data and computation matter."
      ]
    },

    // ============================================================
    // LESSON 2
    // ============================================================

    {
      id: "lesson2",
      lessonNumber: 2,
      title: "Data Manipulation with Tensors",

      overview:
        "Practice creating, indexing, slicing, reshaping, operating on, reducing, broadcasting, and converting tensors.",

      revision: [
        "A tensor is a multidimensional numerical array.",
        "A scalar has zero dimensions.",
        "A vector has one dimension.",
        "A matrix has two dimensions.",
        "Higher-dimensional tensors are commonly used for images, batches, sequences, and other data.",
        "The shape describes the size of every dimension.",
        "The number of elements is the product of all dimensions.",
        "Tensor operations can be elementwise or structural.",
        "Broadcasting allows compatible tensors with different shapes to participate in operations.",
        "Reduction operations reduce one or more dimensions to produce summaries."
      ],

      keyTerms: [
        "Tensor",
        "Scalar",
        "Vector",
        "Matrix",
        "Shape",
        "Dimension",
        "Indexing",
        "Slicing",
        "Reshaping",
        "Broadcasting",
        "Reduction",
        "Elementwise Operation",
        "dtype"
      ],

      conceptual: [
        {
          id: "l2-c1",
          difficulty: "Easy",
          question: "What is a tensor?"
        },

        {
          id: "l2-c2",
          difficulty: "Easy",
          question: "What does tensor.shape represent?"
        },

        {
          id: "l2-c3",
          difficulty: "Easy",
          question:
            "How many elements are contained in a tensor with shape (2, 3, 4)?",
          answer: "24."
        },

        {
          id: "l2-c4",
          difficulty: "Medium",
          question:
            "What is the difference between reshaping a tensor and changing its values?"
        },

        {
          id: "l2-c5",
          difficulty: "Medium",
          question:
            "What is broadcasting?"
        },

        {
          id: "l2-c6",
          difficulty: "Medium",
          question:
            "Why must compatible dimensions exist for broadcasting?"
        },

        {
          id: "l2-c7",
          difficulty: "Hard",
          question:
            "Explain why tensors are fundamental to deep learning."
        }
      ],

      mathematical: [
        {
          id: "l2-m1",
          question:
            "How many elements are in a tensor with shape (5, 4)?",
          answer: "20."
        },

        {
          id: "l2-m2",
          question:
            "How many elements are in a tensor with shape (2, 3, 5)?",
          answer: "30."
        },

        {
          id: "l2-m3",
          question:
            "A tensor contains 24 elements. Give three different valid shapes for it.",
          answer:
            "Examples include (4,6), (2,3,4), and (1,24)."
        },

        {
          id: "l2-m4",
          question:
            "Can a tensor with 15 elements be reshaped to (3,5)?",
          answer: "Yes."
        },

        {
          id: "l2-m5",
          question:
            "Can a tensor with 15 elements be reshaped to (4,4)?",
          answer: "No."
        }
      ],

      coding: [
        {
          id: "l2-code1",
          title: "Tensor Creation",
          difficulty: "Easy",
          task:
            "Create tensors using torch.tensor, torch.arange, torch.zeros, torch.ones, and torch.randn."
        },

        {
          id: "l2-code2",
          title: "Tensor Shape Explorer",
          difficulty: "Easy",
          task:
            "Create tensors with zero, one, two, and three dimensions and print their shapes and number of elements."
        },

        {
          id: "l2-code3",
          title: "Indexing Laboratory",
          difficulty: "Medium",
          task:
            "Create a 4 × 5 tensor and extract individual elements, rows, columns, and rectangular slices."
        },

        {
          id: "l2-code4",
          title: "Tensor Arithmetic",
          difficulty: "Medium",
          task:
            "Perform addition, subtraction, multiplication, division, powers, and comparisons on tensors."
        },

        {
          id: "l2-code5",
          title: "Broadcasting Laboratory",
          difficulty: "Hard",
          task:
            "Create tensors with compatible shapes and demonstrate at least three broadcasting examples."
        },

        {
          id: "l2-code6",
          title: "Tensor Statistics",
          difficulty: "Hard",
          task:
            "Calculate sum, mean, maximum, minimum, standard deviation, and norms for a tensor."
        },

        {
          id: "l2-code7",
          title: "Tensor Conversion",
          difficulty: "Hard",
          task:
            "Convert between Python lists, NumPy arrays, and PyTorch tensors."
        }
      ],

      debugging: [
        {
          id: "l2-d1",
          problem:
            "A tensor containing 12 elements is reshaped into (2, 5).",
          task:
            "Explain why the operation fails and provide valid shapes."
        },

        {
          id: "l2-d2",
          problem:
            "Two tensors with incompatible shapes are added.",
          task:
            "Inspect their shapes and explain whether broadcasting can solve the problem."
        },

        {
          id: "l2-d3",
          problem:
            "A programmer expects a tensor slice to contain a column but receives a row.",
          task:
            "Check the indexing dimensions and correct the slice."
        }
      ],

      challenge: {
        title: "Tensor Analysis Laboratory",
        difficulty: "Hard",
        task:
          "Build a program that accepts a tensor and produces a complete numerical report.",
        requirements: [
          "Display the tensor.",
          "Display shape.",
          "Display number of elements.",
          "Display dtype.",
          "Display minimum.",
          "Display maximum.",
          "Display mean.",
          "Display sum.",
          "Display row or dimension reductions.",
          "Perform at least one broadcasted operation."
        ]
      },

      checklist: [
        "I can create tensors.",
        "I understand tensor dimensions.",
        "I can inspect shape.",
        "I can index tensors.",
        "I can slice tensors.",
        "I can reshape tensors.",
        "I can perform elementwise operations.",
        "I understand broadcasting.",
        "I can perform reductions.",
        "I can convert between common numerical formats."
      ]
    },

    // ============================================================
    // LESSON 3
    // ============================================================

    {
      id: "lesson3",
      lessonNumber: 3,
      title: "Data Preprocessing",

      overview:
        "Practice inspecting raw data, handling missing values, processing categorical information, and converting cleaned data into tensor form.",

      revision: [
        "Real-world data is often incomplete or inconsistent.",
        "Data preprocessing converts raw information into a representation suitable for computation.",
        "Numerical and categorical features may require different preprocessing strategies.",
        "Missing values must be identified before choosing how to handle them.",
        "Categorical variables must generally be represented numerically before entering numerical models.",
        "After preprocessing, data can be converted into tensor format.",
        "Preprocessing decisions should be based on the characteristics of the data."
      ],

      conceptual: [
        {
          id: "l3-c1",
          question:
            "Why is preprocessing necessary?",
          answer:
            "Raw datasets often contain missing values, categorical values, inconsistent formats, and other issues that need to be handled before numerical computation."
        },

        {
          id: "l3-c2",
          question:
            "What is a missing value?"
        },

        {
          id: "l3-c3",
          question:
            "Why should categorical data be encoded?"
        },

        {
          id: "l3-c4",
          question:
            "Why should preprocessing decisions depend on the dataset?"
        },

        {
          id: "l3-c5",
          difficulty: "Hard",
          question:
            "Why can blindly deleting every row containing a missing value be problematic?"
        }
      ],

      coding: [
        {
          id: "l3-code1",
          title: "Create a Raw Dataset",
          task:
            "Create a small dataset containing numerical values, categorical values, and missing values."
        },

        {
          id: "l3-code2",
          title: "Missing Value Detection",
          task:
            "Write code that detects missing values and reports the number of missing entries in each feature."
        },

        {
          id: "l3-code3",
          title: "Missing Value Handling",
          task:
            "Implement at least two different strategies for handling missing numerical values and compare their effects."
        },

        {
          id: "l3-code4",
          title: "Categorical Encoding",
          task:
            "Convert categorical values into numerical representations."
        },

        {
          id: "l3-code5",
          title: "Tensor Conversion",
          task:
            "Convert the processed dataset into a PyTorch tensor and print its shape and dtype."
        },

        {
          id: "l3-code6",
          title: "Complete Preprocessing Pipeline",
          difficulty: "Hard",
          task:
            "Build a complete pipeline from raw dataset to final tensor."
        }
      ],

      scenarios: [
        {
          id: "l3-s1",
          scenario:
            "A student dataset contains age, department, attendance, study hours, and final score.",
          task:
            "Identify which features are numerical and which are categorical."
        },

        {
          id: "l3-s2",
          scenario:
            "A medical dataset contains a missing value in an age column.",
          task:
            "List possible ways of handling the missing value and explain the trade-off."
        },

        {
          id: "l3-s3",
          scenario:
            "An image dataset contains corrupted image files.",
          task:
            "Explain why preprocessing must include quality checks rather than only numerical conversion."
        }
      ],

      challenge: {
        title: "Dataset Preparation Pipeline",
        difficulty: "Hard",
        task:
          "Create a complete preprocessing notebook for a small real-world-style dataset.",
        requirements: [
          "Load data.",
          "Inspect columns.",
          "Identify data types.",
          "Find missing values.",
          "Handle missing values.",
          "Encode categorical information.",
          "Perform numerical conversion.",
          "Convert the result into tensors.",
          "Verify tensor shape.",
          "Explain every preprocessing decision."
        ]
      },

      checklist: [
        "I can inspect raw data.",
        "I can detect missing values.",
        "I can distinguish numerical and categorical data.",
        "I can handle missing values.",
        "I can encode categorical information.",
        "I can convert cleaned data into tensors.",
        "I can explain preprocessing decisions."
      ]
    },

    // ============================================================
    // LESSON 4
    // ============================================================

    {
      id: "lesson4",
      lessonNumber: 4,
      title: "Linear Algebra for Deep Learning",

      overview:
        "Practice scalars, vectors, matrices, tensors, dot products, matrix multiplication, reductions, and norms.",

      revision: [
        "Scalars contain a single numerical value.",
        "Vectors contain ordered numerical values.",
        "Matrices contain rows and columns.",
        "Tensors generalize these structures to multiple dimensions.",
        "Dot products combine corresponding vector components.",
        "Matrix-vector multiplication combines rows of a matrix with a vector.",
        "Matrix multiplication requires compatible dimensions.",
        "Norms measure the magnitude of vectors or matrices."
      ],

      conceptual: [
        {
          id: "l4-c1",
          question: "What is a scalar?"
        },

        {
          id: "l4-c2",
          question: "What is a vector?"
        },

        {
          id: "l4-c3",
          question: "What is a matrix?"
        },

        {
          id: "l4-c4",
          question:
            "What is the difference between a vector and a matrix?"
        },

        {
          id: "l4-c5",
          question:
            "What is a dot product?"
        },

        {
          id: "l4-c6",
          question:
            "What condition must hold for two matrices to be multiplied?"
        },

        {
          id: "l4-c7",
          difficulty: "Hard",
          question:
            "Why is linear algebra important in neural networks?"
        }
      ],

      mathematics: [
        {
          id: "l4-m1",
          question:
            "Calculate the dot product of [1, 2, 3] and [4, 5, 6].",
          answer: "32."
        },

        {
          id: "l4-m2",
          question:
            "Calculate the L1 norm of [3, -4, 2].",
          answer: "9."
        },

        {
          id: "l4-m3",
          question:
            "Calculate the L2 norm of [3, 4].",
          answer: "5."
        },

        {
          id: "l4-m4",
          question:
            "What is the shape of the result of multiplying a 3 × 4 matrix by a 4 × 2 matrix?",
          answer: "3 × 2."
        },

        {
          id: "l4-m5",
          question:
            "Can a 2 × 3 matrix be multiplied by a 2 × 4 matrix?",
          answer: "No."
        },

        {
          id: "l4-m6",
          question:
            "Calculate the matrix product of [[1,2],[3,4]] and [[5,6],[7,8]].",
          answer:
            "[[19,22],[43,50]]."
        }
      ],

      coding: [
        {
          id: "l4-code1",
          title: "Vector Operations",
          task:
            "Create two vectors and calculate their sum, difference, elementwise product, and dot product."
        },

        {
          id: "l4-code2",
          title: "Matrix Operations",
          task:
            "Create two matrices and calculate addition, subtraction, transpose, and matrix multiplication."
        },

        {
          id: "l4-code3",
          title: "Norm Laboratory",
          task:
            "Calculate L1, L2, and Frobenius norms using PyTorch."
        },

        {
          id: "l4-code4",
          title: "Matrix-Vector Laboratory",
          task:
            "Create a matrix and vector and calculate their matrix-vector product."
        },

        {
          id: "l4-code5",
          title: "Linear Algebra Analyzer",
          difficulty: "Hard",
          task:
            "Create a reusable program that analyzes vectors and matrices and reports their shapes, norms, reductions, and products."
        }
      ],

      challenge: {
        title: "Linear Algebra Laboratory",
        difficulty: "Hard",
        task:
          "Build a notebook demonstrating the main linear algebra operations used in deep learning.",
        requirements: [
          "Scalars.",
          "Vectors.",
          "Matrices.",
          "Tensors.",
          "Dot products.",
          "Matrix-vector products.",
          "Matrix-matrix multiplication.",
          "Transpose.",
          "L1 norm.",
          "L2 norm.",
          "Frobenius norm."
        ]
      },

      checklist: [
        "I understand scalars.",
        "I understand vectors.",
        "I understand matrices.",
        "I understand tensors.",
        "I can calculate dot products.",
        "I can perform matrix multiplication.",
        "I understand dimension compatibility.",
        "I can calculate norms."
      ]
    },

    // ============================================================
    // LESSON 5
    // ============================================================

    {
      id: "lesson5",
      lessonNumber: 5,
      title: "Calculus for Deep Learning",

      overview:
        "Practice derivatives, partial derivatives, gradients, visualization, and the chain rule.",

      revision: [
        "A derivative measures the local rate of change of a function.",
        "Partial derivatives measure change with respect to one variable while treating other variables as fixed.",
        "A gradient collects partial derivatives into a vector.",
        "The chain rule allows derivatives of composed functions to be calculated.",
        "Gradients are central to optimization in deep learning."
      ],

      mathematics: [
        {
          id: "l5-m1",
          question:
            "Differentiate f(x) = x².",
          answer: "2x."
        },

        {
          id: "l5-m2",
          question:
            "Differentiate f(x) = 3x² + 2x + 1.",
          answer: "6x + 2."
        },

        {
          id: "l5-m3",
          question:
            "Differentiate f(x) = x³.",
          answer: "3x²."
        },

        {
          id: "l5-m4",
          question:
            "Find ∂f/∂x and ∂f/∂y for f(x,y) = x² + y².",
          answer:
            "∂f/∂x = 2x and ∂f/∂y = 2y."
        },

        {
          id: "l5-m5",
          question:
            "Find the gradient of f(x,y) = 3x² + 4y².",
          answer:
            "∇f = [6x, 8y]."
        },

        {
          id: "l5-m6",
          question:
            "Differentiate y = (2x + 1)² using the chain rule.",
          answer:
            "dy/dx = 4(2x + 1)."
        },

        {
          id: "l5-m7",
          question:
            "Differentiate y = (3x + 2)³.",
          answer:
            "dy/dx = 9(3x + 2)²."
        }
      ],

      conceptual: [
        {
          id: "l5-c1",
          question:
            "What does a derivative tell us?"
        },

        {
          id: "l5-c2",
          question:
            "What is a partial derivative?"
        },

        {
          id: "l5-c3",
          question:
            "What is a gradient?"
        },

        {
          id: "l5-c4",
          question:
            "Why are gradients useful in optimization?"
        },

        {
          id: "l5-c5",
          difficulty: "Hard",
          question:
            "Explain the chain rule using a computational graph."
        }
      ],

      coding: [
        {
          id: "l5-code1",
          title: "Derivative Verification",
          task:
            "Use PyTorch autograd to verify the derivative of x²."
        },

        {
          id: "l5-code2",
          title: "Polynomial Gradient",
          task:
            "Use PyTorch to calculate the derivative of 3x² + 2x + 1."
        },

        {
          id: "l5-code3",
          title: "Partial Derivatives",
          task:
            "Create a function involving x and y and calculate partial derivatives using autograd."
        },

        {
          id: "l5-code4",
          title: "Chain Rule Experiment",
          task:
            "Construct a nested function and use automatic differentiation to verify the chain rule."
        }
      ],

      outputPrediction: [
        {
          id: "l5-o1",
          code: `
x = 3
y = x ** 2

print(y)
          `,
          answer: "9."
        }
      ],

      challenge: {
        title: "Calculus Verification Laboratory",
        difficulty: "Hard",
        task:
          "Choose five mathematical functions and compare manually calculated derivatives with PyTorch autograd results.",
        requirements: [
          "At least two single-variable functions.",
          "At least two multivariable functions.",
          "At least one nested function.",
          "Show analytical derivatives.",
          "Show autograd results.",
          "Explain whether the results agree."
        ]
      },

      checklist: [
        "I understand derivatives.",
        "I can differentiate basic functions.",
        "I understand partial derivatives.",
        "I understand gradients.",
        "I understand the chain rule.",
        "I can verify derivatives using PyTorch."
      ]
    },

    // ============================================================
    // LESSON 6
    // ============================================================

    {
      id: "lesson6",
      lessonNumber: 6,
      title: "Automatic Differentiation",

      overview:
        "Practice computational graphs, gradient tracking, backward computation, gradient accumulation, detaching, and Python control flow.",

      revision: [
        "Automatic differentiation computes derivatives by tracking mathematical operations.",
        "PyTorch builds computational graphs for operations involving tensors that track gradients.",
        "backward() initiates reverse-mode gradient computation for appropriate scalar outputs.",
        "Gradients can accumulate and therefore may need to be cleared.",
        "Detaching a tensor removes its connection to the current computation graph.",
        "Automatic differentiation makes gradient-based model training practical."
      ],

      conceptual: [
        {
          id: "l6-c1",
          question:
            "What is automatic differentiation?"
        },

        {
          id: "l6-c2",
          question:
            "What is a computational graph?"
        },

        {
          id: "l6-c3",
          question:
            "What does requires_grad=True mean?"
        },

        {
          id: "l6-c4",
          question:
            "What does backward() do?"
        },

        {
          id: "l6-c5",
          question:
            "Why can gradients accumulate?"
        },

        {
          id: "l6-c6",
          question:
            "What does detach() do?"
        },

        {
          id: "l6-c7",
          difficulty: "Hard",
          question:
            "Why is automatic differentiation more practical than manually differentiating a large neural network?"
        }
      ],

      coding: [
        {
          id: "l6-code1",
          title: "Basic Autograd",
          task:
            "Create x with gradient tracking enabled and calculate the derivative of x²."
        },

        {
          id: "l6-code2",
          title: "Polynomial Autograd",
          task:
            "Calculate gradients for 3x² + 4x + 2."
        },

        {
          id: "l6-code3",
          title: "Multiple Variables",
          task:
            "Create x and y and calculate gradients for x² + 3xy + y²."
        },

        {
          id: "l6-code4",
          title: "Gradient Accumulation",
          task:
            "Demonstrate what happens when backward() is called repeatedly without clearing gradients."
        },

        {
          id: "l6-code5",
          title: "Detach Experiment",
          task:
            "Create a tensor, perform operations, detach an intermediate tensor, and observe the gradient behavior."
        },

        {
          id: "l6-code6",
          title: "Conditional Computation",
          difficulty: "Hard",
          task:
            "Create a function containing a Python conditional and investigate how autograd handles the executed computational path."
        }
      ],

      debugging: [
        {
          id: "l6-d1",
          problem:
            "A tensor's .grad value is None.",
          task:
            "List the possible reasons."
        },

        {
          id: "l6-d2",
          problem:
            "The gradient is twice the expected value.",
          task:
            "Investigate whether backward() has been called multiple times without clearing gradients."
        },

        {
          id: "l6-d3",
          problem:
            "A detached tensor does not propagate gradients.",
          task:
            "Explain why."
        }
      ],

      challenge: {
        title: "Automatic Differentiation Laboratory",
        difficulty: "Hard",
        task:
          "Build a notebook that demonstrates automatic differentiation from a simple function through a multivariable computation graph.",
        requirements: [
          "Use requires_grad.",
          "Create intermediate variables.",
          "Call backward().",
          "Inspect gradients.",
          "Demonstrate gradient accumulation.",
          "Clear gradients.",
          "Demonstrate detach().",
          "Compare autograd with manually calculated derivatives."
        ]
      },

      checklist: [
        "I understand computational graphs.",
        "I understand gradient tracking.",
        "I can use requires_grad.",
        "I can use backward().",
        "I understand gradient accumulation.",
        "I understand detach().",
        "I can debug common autograd problems."
      ]
    },

    // ============================================================
    // LESSON 7
    // ============================================================

    {
      id: "lesson7",
      lessonNumber: 7,
      title: "Probability and Statistics",

      overview:
        "Practice probability, random variables, multiple random variables, expectation, descriptive statistics, and simulation.",

      revision: [
        "Probability represents uncertainty.",
        "A random variable assigns numerical values to outcomes of a random process.",
        "Random variables may be discrete or continuous.",
        "Multiple random variables can describe relationships between uncertain quantities.",
        "Expectation represents a probability-weighted average.",
        "Statistics provides tools for describing and analyzing data.",
        "Probability and statistics are important for understanding uncertainty and data."
      ],

      conceptual: [
        {
          id: "l7-c1",
          question:
            "What is probability?"
        },

        {
          id: "l7-c2",
          question:
            "What is a random variable?"
        },

        {
          id: "l7-c3",
          question:
            "What is the difference between discrete and continuous random variables?"
        },

        {
          id: "l7-c4",
          question:
            "What is expectation?"
        },

        {
          id: "l7-c5",
          question:
            "Why is probability useful in machine learning?"
        },

        {
          id: "l7-c6",
          difficulty: "Hard",
          question:
            "Why can experimental probability differ slightly from theoretical probability?"
        }
      ],

      mathematics: [
        {
          id: "l7-m1",
          question:
            "What is the probability of obtaining heads when tossing a fair coin?",
          answer: "1/2."
        },

        {
          id: "l7-m2",
          question:
            "What is the probability of rolling an even number on a fair six-sided die?",
          answer: "1/2."
        },

        {
          id: "l7-m3",
          question:
            "What is the probability of rolling a number greater than 4?",
          answer: "1/3."
        },

        {
          id: "l7-m4",
          question:
            "Calculate the mean of [2, 4, 6, 8].",
          answer: "5."
        },

        {
          id: "l7-m5",
          question:
            "Calculate the population variance of [2, 4, 6, 8].",
          answer: "5."
        },

        {
          id: "l7-m6",
          question:
            "What is the probability of getting two heads when tossing a fair coin twice?",
          answer: "1/4."
        }
      ],

      coding: [
        {
          id: "l7-code1",
          title: "Coin Toss Simulation",
          task:
            "Simulate 1,000 fair coin tosses and estimate the probability of heads."
        },

        {
          id: "l7-code2",
          title: "Dice Simulation",
          task:
            "Simulate 10,000 dice rolls and calculate the frequency of each outcome."
        },

        {
          id: "l7-code3",
          title: "Two-Dice Experiment",
          task:
            "Simulate two dice and estimate the probability of obtaining a sum of 7."
        },

        {
          id: "l7-code4",
          title: "Statistical Summary",
          task:
            "Generate random data and calculate mean, variance, standard deviation, minimum, and maximum."
        },

        {
          id: "l7-code5",
          title: "Probability Visualization",
          difficulty: "Hard",
          task:
            "Simulate a random experiment repeatedly and plot how the estimated probability changes as the number of trials increases."
        }
      ],

      scenarios: [
        {
          id: "l7-s1",
          scenario:
            "A classifier predicts that an image belongs to class A with probability 0.8.",
          task:
            "Explain what the probability communicates and what it does not guarantee."
        },

        {
          id: "l7-s2",
          scenario:
            "A dataset has a very large mean caused by a few unusually large values.",
          task:
            "Explain why statistics should be interpreted carefully."
        }
      ],

      challenge: {
        title: "Probability and Statistics Laboratory",
        difficulty: "Hard",
        task:
          "Build a simulation notebook that investigates theoretical versus experimental probability.",
        requirements: [
          "Run a coin experiment.",
          "Run a dice experiment.",
          "Calculate empirical probabilities.",
          "Calculate theoretical probabilities.",
          "Compare them.",
          "Calculate mean and variance.",
          "Visualize convergence as the number of trials increases."
        ]
      },

      checklist: [
        "I understand probability.",
        "I understand random variables.",
        "I understand discrete and continuous variables.",
        "I understand expectation.",
        "I can calculate basic statistics.",
        "I can simulate random experiments.",
        "I can compare theoretical and empirical results."
      ]
    },

    // ============================================================
    // LESSON 8
    // ============================================================

    {
      id: "lesson8",
      lessonNumber: 8,
      title: "Working with Documentation and APIs",

      overview:
        "Practice discovering functions and classes, reading documentation, inspecting APIs, understanding parameters, and dealing with library changes.",

      revision: [
        "Deep learning frameworks contain far more functions than can be memorized.",
        "Official documentation is therefore an essential development tool.",
        "dir() can be used to inspect names available in a Python module or object.",
        "help() provides documentation about functions, classes, and modules.",
        "Documentation should be checked against the installed framework version.",
        "Examples and tutorials can help explain practical usage.",
        "API documentation should be treated as a primary reference when behavior is unclear."
      ],

      conceptual: [
        {
          id: "l8-c1",
          question:
            "Why should a deep learning developer learn to read documentation instead of memorizing every API?"
        },

        {
          id: "l8-c2",
          question:
            "What does dir() help you discover?"
        },

        {
          id: "l8-c3",
          question:
            "What does help() provide?"
        },

        {
          id: "l8-c4",
          question:
            "Why can an old tutorial behave differently from a current library?"
        },

        {
          id: "l8-c5",
          difficulty: "Hard",
          question:
            "Describe a systematic process for investigating an unfamiliar PyTorch function."
        }
      ],

      coding: [
        {
          id: "l8-code1",
          title: "Explore torch",
          task:
            "Use dir(torch) and identify useful tensor-creation functions."
        },

        {
          id: "l8-code2",
          title: "Inspect a Function",
          task:
            "Use help() to investigate a PyTorch function."
        },

        {
          id: "l8-code3",
          title: "Documentation Notebook",
          task:
            "Choose five PyTorch operations and record their purpose, important parameters, return values, and examples."
        },

        {
          id: "l8-code4",
          title: "API Investigation",
          difficulty: "Hard",
          task:
            "Choose one unfamiliar PyTorch class and investigate it using documentation, dir(), help(), and runnable examples."
        }
      ],

      researchTasks: [
        {
          id: "l8-r1",
          task:
            "Investigate torch.tensor and document its most important parameters."
        },

        {
          id: "l8-r2",
          task:
            "Investigate torch.arange and create three different examples."
        },

        {
          id: "l8-r3",
          task:
            "Investigate torch.reshape and identify the requirement imposed by the number of elements."
        },

        {
          id: "l8-r4",
          task:
            "Investigate torch.sum and determine how dimensions affect its result."
        },

        {
          id: "l8-r5",
          task:
            "Investigate torch.matmul and compare it with elementwise multiplication."
        }
      ],

      debugging: [
        {
          id: "l8-d1",
          problem:
            "A tutorial contains a function that cannot be found.",
          task:
            "Check the installed framework version and search the current documentation."
        },

        {
          id: "l8-d2",
          problem:
            "A function runs but produces an unexpected shape.",
          task:
            "Inspect the function's documentation and verify its dimension behavior."
        },

        {
          id: "l8-d3",
          problem:
            "A parameter is rejected by a function.",
          task:
            "Use documentation to verify whether the parameter exists and whether its name or type is correct."
        }
      ],

      challenge: {
        title: "Build an API Explorer",
        difficulty: "Hard",
        task:
          "Create a Python notebook that acts as a small PyTorch API exploration guide.",
        requirements: [
          "Inspect at least five functions.",
          "Use dir().",
          "Use help().",
          "Record parameters.",
          "Record return behavior.",
          "Execute examples.",
          "Record observations.",
          "Explain one common mistake for each function."
        ]
      },

      checklist: [
        "I understand why documentation matters.",
        "I can use dir().",
        "I can use help().",
        "I can investigate unfamiliar APIs.",
        "I understand the importance of framework versions.",
        "I can use documentation to debug code."
      ]
    }
  ],

  // ============================================================
  // MIXED REVIEW
  // ============================================================

  mixedReview: {
    title: "Module 1 Integrated Review",

    questions: [
      {
        id: "mr1",
        difficulty: "Medium",
        question:
          "Explain how tensors and linear algebra work together in deep learning."
      },

      {
        id: "mr2",
        difficulty: "Medium",
        question:
          "Explain why data preprocessing should happen before tensor conversion."
      },

      {
        id: "mr3",
        difficulty: "Hard",
        question:
          "Explain how calculus leads to gradients and how automatic differentiation computes them."
      },

      {
        id: "mr4",
        difficulty: "Hard",
        question:
          "Explain how probability and statistics help us understand data."
      },

      {
        id: "mr5",
        difficulty: "Hard",
        question:
          "You receive a dataset with missing values and categorical columns. Describe the complete path from raw data to a tensor ready for a learning algorithm."
      },

      {
        id: "mr6",
        difficulty: "Hard",
        question:
          "A matrix multiplication operation fails. Describe a systematic debugging process using tensor shapes and documentation."
      },

      {
        id: "mr7",
        difficulty: "Hard",
        question:
          "Explain why a deep learning developer needs mathematics, programming, and documentation skills together."
      }
    ]
  },

  // ============================================================
  // COMPLETE CODING LAB
  // ============================================================

  codingLab: {
    title: "Module 1 Complete Coding Laboratory",

    objective:
      "Combine all Module 1 concepts into practical Python and PyTorch programs.",

    tasks: [
      {
        id: "lab1",
        title: "Tensor Explorer",
        task:
          "Create a reusable tensor inspection function."
      },

      {
        id: "lab2",
        title: "Dataset Cleaner",
        task:
          "Create a preprocessing pipeline for a small tabular dataset."
      },

      {
        id: "lab3",
        title: "Linear Algebra Toolkit",
        task:
          "Implement common vector and matrix operations."
      },

      {
        id: "lab4",
        title: "Derivative Calculator",
        task:
          "Compare analytical derivatives with autograd."
      },

      {
        id: "lab5",
        title: "Probability Simulator",
        task:
          "Run repeated random experiments and compare theoretical and empirical probabilities."
      },

      {
        id: "lab6",
        title: "PyTorch API Explorer",
        task:
          "Investigate unfamiliar PyTorch functions using introspection and documentation."
      },

      {
        id: "lab7",
        title: "Foundations Notebook",
        difficulty: "Advanced",
        task:
          "Create one notebook containing the major experiments from the entire module."
      }
    ]
  },

  // ============================================================
  // DEBUGGING LAB
  // ============================================================

  debuggingLab: {
    title: "Module 1 Debugging Laboratory",

    tasks: [
      {
        id: "debug1",
        title: "Invalid Reshape",
        task:
          "Find and fix a reshape operation where the requested dimensions contain a different number of elements."
      },

      {
        id: "debug2",
        title: "Broadcasting Failure",
        task:
          "Fix an operation involving incompatible tensor shapes."
      },

      {
        id: "debug3",
        title: "Matrix Multiplication Failure",
        task:
          "Identify incompatible matrix dimensions and correct them."
      },

      {
        id: "debug4",
        title: "Missing Gradient",
        task:
          "Find why a tensor's gradient is None."
      },

      {
        id: "debug5",
        title: "Accumulated Gradient",
        task:
          "Identify why a gradient is larger than expected after multiple backward calls."
      },

      {
        id: "debug6",
        title: "Bad Preprocessing",
        task:
          "Find a missing-value or categorical-data problem before tensor conversion."
      },

      {
        id: "debug7",
        title: "Documentation Mismatch",
        task:
          "Investigate why code from an older tutorial does not work with the installed framework."
      }
    ]
  },

  // ============================================================
  // MATHEMATICAL REVIEW
  // ============================================================

  mathematics: {
    title: "Module 1 Mathematical Practice",

    sections: [

      {
        title: "Linear Algebra",
        problems: [
          "Calculate the dot product of [2,3,4] and [5,6,7].",
          "Calculate the L1 norm of [−2,4,−6].",
          "Calculate the L2 norm of [6,8].",
          "Determine whether a 2×3 matrix can multiply a 3×4 matrix.",
          "Determine the shape of the result of a 4×5 matrix multiplied by a 5×2 matrix.",
          "Calculate the product of two 2×2 matrices.",
          "Explain why matrix dimensions matter."
        ]
      },

      {
        title: "Calculus",
        problems: [
          "Differentiate x².",
          "Differentiate 5x³ + 2x² − 4x.",
          "Find the partial derivatives of x² + 2xy + y².",
          "Find the gradient of 3x² + 4y².",
          "Apply the chain rule to (2x+1)².",
          "Apply the chain rule to (3x−2)³.",
          "Explain the relationship between gradients and optimization."
        ]
      },

      {
        title: "Probability",
        problems: [
          "Calculate the probability of heads for a fair coin.",
          "Calculate the probability of an even result on a fair die.",
          "Calculate the probability of rolling greater than 4.",
          "Calculate the probability of two heads in two coin tosses.",
          "Calculate the probability of rolling the same number on two dice.",
          "Explain the difference between theoretical and empirical probability."
        ]
      },

      {
        title: "Statistics",
        problems: [
          "Calculate the mean of [1,3,5,7,9].",
          "Calculate the mean of [2,4,6,8].",
          "Calculate the population variance of [2,4,6,8].",
          "Explain why variance measures spread.",
          "Explain why standard deviation is useful."
        ]
      }
    ]
  },

  // ============================================================
  // MODULE FINAL PROJECT
  // ============================================================

  moduleChallenge: {
    title: "Deep Learning Foundations Analyzer",
    difficulty: "Advanced",

    description:
      "Build a complete Python and PyTorch laboratory that demonstrates the major concepts learned throughout Module 1.",

    problem:
      "Create a small data-analysis and mathematical experimentation system that starts with raw data and ends with tensor-based numerical analysis, calculus, automatic differentiation, probability experiments, and API exploration.",

    objectives: [
      "Apply the complete Module 1 workflow.",
      "Work with realistic data.",
      "Understand numerical representations.",
      "Apply tensor operations.",
      "Apply linear algebra.",
      "Apply calculus.",
      "Use automatic differentiation.",
      "Perform statistical analysis.",
      "Perform probability simulations.",
      "Use official documentation effectively."
    ],

    phases: [
      {
        phase: 1,
        title: "Dataset Acquisition",
        tasks: [
          "Create or obtain a small dataset.",
          "Describe the dataset.",
          "Identify its features.",
          "Identify the target if one exists."
        ]
      },

      {
        phase: 2,
        title: "Dataset Inspection",
        tasks: [
          "Inspect rows and columns.",
          "Identify data types.",
          "Count missing values.",
          "Inspect unusual values."
        ]
      },

      {
        phase: 3,
        title: "Data Preprocessing",
        tasks: [
          "Handle missing values.",
          "Encode categorical data.",
          "Convert numerical values appropriately.",
          "Explain every preprocessing decision."
        ]
      },

      {
        phase: 4,
        title: "Tensor Conversion",
        tasks: [
          "Convert processed data into tensors.",
          "Inspect tensor shape.",
          "Inspect dtype.",
          "Verify the resulting values."
        ]
      },

      {
        phase: 5,
        title: "Tensor Laboratory",
        tasks: [
          "Perform indexing.",
          "Perform slicing.",
          "Perform arithmetic.",
          "Perform reductions.",
          "Demonstrate broadcasting."
        ]
      },

      {
        phase: 6,
        title: "Linear Algebra Laboratory",
        tasks: [
          "Calculate dot products.",
          "Perform matrix multiplication.",
          "Calculate norms.",
          "Demonstrate matrix-vector multiplication."
        ]
      },

      {
        phase: 7,
        title: "Calculus Laboratory",
        tasks: [
          "Calculate analytical derivatives.",
          "Calculate partial derivatives.",
          "Demonstrate the chain rule.",
          "Explain gradients."
        ]
      },

      {
        phase: 8,
        title: "Automatic Differentiation",
        tasks: [
          "Use requires_grad.",
          "Build a computational graph.",
          "Call backward().",
          "Inspect gradients.",
          "Compare with analytical results."
        ]
      },

      {
        phase: 9,
        title: "Probability and Statistics",
        tasks: [
          "Calculate descriptive statistics.",
          "Run a random simulation.",
          "Calculate empirical probabilities.",
          "Compare empirical and theoretical results."
        ]
      },

      {
        phase: 10,
        title: "Documentation",
        tasks: [
          "Investigate at least five PyTorch APIs.",
          "Use dir().",
          "Use help().",
          "Record parameters and behavior.",
          "Include links or references to official documentation."
        ]
      }
    ],

    requiredDeliverables: [
      "Python source code or Jupyter notebook",
      "Dataset",
      "Processed dataset",
      "Tensor experiments",
      "Linear algebra experiments",
      "Calculus calculations",
      "Automatic differentiation experiments",
      "Probability experiment",
      "Statistics report",
      "Documentation investigation",
      "Final technical report"
    ],

    reportStructure: [
      "1. Introduction",
      "2. Problem Definition",
      "3. Dataset Description",
      "4. Data Inspection",
      "5. Data Preprocessing",
      "6. Tensor Representation",
      "7. Tensor Operations",
      "8. Linear Algebra",
      "9. Calculus",
      "10. Automatic Differentiation",
      "11. Probability and Statistics",
      "12. Documentation Investigation",
      "13. Results",
      "14. Problems Encountered",
      "15. Solutions",
      "16. Conclusion"
    ]
  },

  // ============================================================
  // ASSESSMENT
  // ============================================================

  assessment: {
    title: "Module 1 Final Practice Assessment",
    totalMarks: 100,

    sections: [
      {
        section: "Deep Learning Foundations",
        marks: 10,
        skills: [
          "Machine learning",
          "Deep learning",
          "Representation learning",
          "Generalization"
        ]
      },

      {
        section: "Tensor Manipulation",
        marks: 15,
        skills: [
          "Creation",
          "Shape",
          "Indexing",
          "Slicing",
          "Reshaping",
          "Broadcasting"
        ]
      },

      {
        section: "Data Preprocessing",
        marks: 10,
        skills: [
          "Missing values",
          "Categorical features",
          "Numerical conversion",
          "Tensor conversion"
        ]
      },

      {
        section: "Linear Algebra",
        marks: 15,
        skills: [
          "Vectors",
          "Matrices",
          "Dot products",
          "Matrix multiplication",
          "Norms"
        ]
      },

      {
        section: "Calculus",
        marks: 15,
        skills: [
          "Derivatives",
          "Partial derivatives",
          "Gradients",
          "Chain rule"
        ]
      },

      {
        section: "Automatic Differentiation",
        marks: 15,
        skills: [
          "Computational graphs",
          "requires_grad",
          "backward",
          "Gradient accumulation",
          "detach"
        ]
      },

      {
        section: "Probability and Statistics",
        marks: 10,
        skills: [
          "Probability",
          "Random variables",
          "Mean",
          "Variance",
          "Simulation"
        ]
      },

      {
        section: "Documentation and Debugging",
        marks: 10,
        skills: [
          "dir",
          "help",
          "API investigation",
          "Debugging"
        ]
      }
    ],

    gradingCriteria: [
      "Conceptual understanding",
      "Mathematical accuracy",
      "Programming correctness",
      "Ability to interpret outputs",
      "Debugging ability",
      "Use of PyTorch",
      "Use of documentation",
      "Quality of explanations",
      "Problem-solving ability"
    ]
  },

  // ============================================================
  // COMPLETION CHECKLIST
  // ============================================================

  completionChecklist: [
    "I understand what deep learning is.",
    "I understand representation learning.",
    "I understand training and generalization.",
    "I can identify different learning settings.",
    "I can create PyTorch tensors.",
    "I can inspect tensor shapes.",
    "I can index and slice tensors.",
    "I can reshape tensors.",
    "I understand broadcasting.",
    "I can perform tensor reductions.",
    "I understand data preprocessing.",
    "I can handle missing values.",
    "I can process categorical information.",
    "I can convert processed data to tensors.",
    "I understand scalars, vectors, matrices, and tensors.",
    "I can calculate dot products.",
    "I can perform matrix multiplication.",
    "I understand norms.",
    "I understand derivatives.",
    "I can calculate partial derivatives.",
    "I understand gradients.",
    "I can apply the chain rule.",
    "I understand automatic differentiation.",
    "I can use requires_grad.",
    "I can use backward().",
    "I understand gradient accumulation.",
    "I understand detach().",
    "I understand probability.",
    "I understand random variables.",
    "I can calculate basic statistics.",
    "I can perform probability simulations.",
    "I can use dir().",
    "I can use help().",
    "I can investigate an unfamiliar API.",
    "I can debug tensor problems.",
    "I can debug autograd problems.",
    "I can connect mathematics with PyTorch.",
    "I can complete the Module 1 project independently."
  ],

  completionMessage:
    "You have completed the Deep Learning Foundations practice module when you can solve the conceptual, mathematical, coding, debugging, and integrated project activities without depending on step-by-step instructions."
};

export default practice;