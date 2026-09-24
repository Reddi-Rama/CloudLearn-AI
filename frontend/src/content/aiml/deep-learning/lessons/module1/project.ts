const project = {
  id: "module1-project",
  title: "Deep Learning Foundations: Intelligent Dataset Analysis Lab",
  shortTitle: "Intelligent Dataset Analysis Lab",

  type: "Major Module Project",
  difficulty: "Beginner to Intermediate",
  estimatedTime: "10–14 hours",

  description:
    "Build a complete Python and PyTorch data-analysis pipeline that takes a real-world tabular dataset from raw form to a mathematically analyzed tensor representation. The project combines data manipulation, data preprocessing, tensor computation, linear algebra, calculus, automatic differentiation, probability, statistics, visualization, and technical documentation.",

  sourceAlignment:
    "This project is designed around the concepts introduced in Chapter 2, Preliminaries, of Dive into Deep Learning. It combines the chapter's data manipulation, data preprocessing, linear algebra, calculus, automatic differentiation, probability and statistics, and documentation concepts into one integrated practical workflow.",

  sourceTopicsCovered: [
    "Data manipulation",
    "Tensor creation and manipulation",
    "Indexing and slicing",
    "Tensor operations",
    "Broadcasting",
    "Memory-aware tensor operations",
    "Conversion between tensors and Python/NumPy objects",
    "Dataset loading",
    "Missing-value handling",
    "Categorical-data handling",
    "Numerical features",
    "Tensor conversion",
    "Scalars",
    "Vectors",
    "Matrices",
    "Higher-order tensors",
    "Tensor arithmetic",
    "Reduction",
    "Dot products",
    "Matrix-vector products",
    "Matrix-matrix multiplication",
    "L1 and L2 norms",
    "Derivatives",
    "Numerical differentiation",
    "Partial derivatives",
    "Gradients",
    "Chain rule",
    "Automatic differentiation",
    "Backward computation",
    "Non-scalar outputs",
    "Gradient accumulation",
    "Detaching computation",
    "Python control flow and gradients",
    "Probability",
    "Random variables",
    "Multiple random variables",
    "Expectation",
    "Variance",
    "Standard deviation",
    "Covariance",
    "PyTorch documentation exploration"
  ],

  overview: {
    problem:
      "Raw datasets are rarely ready to be used directly by a deep learning system. They may contain missing values, categorical information, inconsistent numerical ranges, and different data types. A developer must understand the data before converting it into tensors and performing mathematical computation.",

    challenge:
      "Create a reusable analysis pipeline that accepts a tabular dataset, investigates its structure, cleans and transforms it, converts it to PyTorch tensors, performs mathematical analysis, demonstrates automatic differentiation, calculates statistical properties, and produces a clear final report.",

    finalOutcome:
      "The final application should allow a user to provide a dataset and receive a structured analysis containing dataset information, preprocessing results, tensor information, linear algebra results, statistical summaries, gradient demonstrations, visualizations, and documentation notes."
  },

  objectives: [
    "Work with real-world tabular data.",
    "Inspect a dataset before processing it.",
    "Identify numerical and categorical features.",
    "Identify and handle missing values.",
    "Convert categorical information into numerical representations.",
    "Separate input features from target values.",
    "Convert processed data into PyTorch tensors.",
    "Understand and report tensor shapes and data types.",
    "Perform indexing, slicing, elementwise operations, reductions, and broadcasting.",
    "Perform vector and matrix operations.",
    "Calculate vector and matrix norms.",
    "Use derivatives to understand change.",
    "Calculate numerical derivatives.",
    "Use PyTorch automatic differentiation.",
    "Calculate and interpret gradients.",
    "Demonstrate the chain rule computationally.",
    "Calculate probability-related statistics.",
    "Calculate mean, variance, standard deviation, and covariance.",
    "Visualize important properties of the dataset.",
    "Use PyTorch and Python documentation to investigate APIs.",
    "Organize a Python project professionally."
  ],

  requirements: {
    dataset: {
      description:
        "Use a small-to-medium tabular dataset containing both numerical and categorical information whenever possible.",

      acceptableSources: [
        "A public educational dataset",
        "A UCI-style tabular dataset",
        "A Kaggle tabular dataset",
        "A self-created realistic dataset",
        "A college-provided dataset"
      ],

      recommendedCharacteristics: [
        "At least 100 observations",
        "At least 4 features",
        "At least 2 numerical features",
        "At least 1 categorical feature",
        "At least 1 target variable",
        "Preferably some missing values"
      ]
    },

    software: [
      "Python 3",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook or VS Code"
    ]
  },

  projectPhases: [

    {
      phase: 1,
      title: "Dataset Acquisition and Project Setup",

      objective:
        "Create a clean development environment and obtain a suitable dataset.",

      tasks: [
        "Create the project directory.",
        "Create a Python virtual environment if desired.",
        "Install required libraries.",
        "Place the dataset inside the data directory.",
        "Create the initial README.",
        "Record the dataset source.",
        "Record the dataset license if applicable."
      ],

      expectedFiles: [
        "requirements.txt",
        "README.md",
        "data/dataset.csv"
      ],

      completionCriteria: [
        "Project can be opened and executed.",
        "Dataset is accessible from Python.",
        "Required libraries import successfully."
      ]
    },

    {
      phase: 2,
      title: "Dataset Inspection",

      objective:
        "Understand the dataset before making any transformation.",

      tasks: [
        "Load the dataset with Pandas.",
        "Display the first records.",
        "Display the last records.",
        "Display the number of rows.",
        "Display the number of columns.",
        "Display column names.",
        "Display data types.",
        "Calculate descriptive statistics.",
        "Count missing values.",
        "Identify unique values in categorical columns.",
        "Identify numerical columns.",
        "Identify categorical columns."
      ],

      requiredOperations: [
        "head()",
        "tail()",
        "shape",
        "columns",
        "dtypes",
        "describe()",
        "isna()",
        "nunique()"
      ],

      expectedOutput: [
        "Dataset dimensions",
        "Column information",
        "Data-type report",
        "Missing-value report",
        "Basic statistical report"
      ]
    },

    {
      phase: 3,
      title: "Data Quality Analysis",

      objective:
        "Identify problems that could affect later mathematical processing.",

      tasks: [
        "Locate missing values.",
        "Identify duplicated records.",
        "Check for impossible or suspicious values.",
        "Inspect minimum and maximum values.",
        "Identify possible outliers.",
        "Inspect categorical distributions.",
        "Check whether numerical columns have significantly different scales."
      ],

      analysisQuestions: [
        "Which column has the most missing values?",
        "Which features have the largest numerical range?",
        "Are any values clearly invalid?",
        "Are categorical variables highly imbalanced?",
        "Are there duplicate records?",
        "Which variables appear to contain outliers?"
      ]
    },

    {
      phase: 4,
      title: "Data Preprocessing",

      objective:
        "Transform the raw dataset into a numerical representation suitable for tensor computation.",

      tasks: [
        "Remove or appropriately handle duplicate records.",
        "Handle missing numerical values.",
        "Handle missing categorical values.",
        "Encode categorical features.",
        "Separate features from targets.",
        "Apply appropriate numerical scaling if necessary.",
        "Verify that the resulting dataset contains numerical values."
      ],

      missingValueStrategies: [
        "Mean imputation for appropriate numerical features",
        "Median imputation when robust handling is preferable",
        "Mode or explicit category for suitable categorical variables",
        "Removal only when justified"
      ],

      categoricalStrategies: [
        "One-hot encoding",
        "Binary encoding for suitable binary categories",
        "Other appropriate numerical representation"
      ],

      importantRule:
        "The preprocessing strategy must be explained in the project report. Do not simply transform the data without explaining why."
    },

    {
      phase: 5,
      title: "Tensor Conversion",

      objective:
        "Convert the processed dataset into PyTorch tensors.",

      tasks: [
        "Convert the feature matrix to a PyTorch tensor.",
        "Convert the target values to a PyTorch tensor.",
        "Display tensor shapes.",
        "Display tensor data types.",
        "Display the number of elements.",
        "Inspect selected tensor values.",
        "Demonstrate indexing.",
        "Demonstrate slicing."
      ],

      requiredConcepts: [
        "torch.tensor",
        "shape",
        "numel",
        "indexing",
        "slicing",
        "dtype"
      ],

      expectedOutput: [
        "Feature tensor",
        "Target tensor",
        "Feature tensor shape",
        "Target tensor shape",
        "Feature tensor dtype",
        "Target tensor dtype"
      ]
    },

    {
      phase: 6,
      title: "Tensor Operations Laboratory",

      objective:
        "Demonstrate the tensor operations introduced in Module 1.",

      tasks: [
        "Perform tensor addition.",
        "Perform tensor subtraction.",
        "Perform elementwise multiplication.",
        "Perform elementwise division.",
        "Apply a unary operation.",
        "Concatenate tensors.",
        "Perform comparison operations.",
        "Calculate a reduction.",
        "Calculate sums along selected axes.",
        "Demonstrate broadcasting.",
        "Demonstrate an in-place operation carefully.",
        "Convert between tensors and NumPy arrays."
      ],

      requiredDemonstrations: [
        "Elementwise arithmetic",
        "Reduction",
        "Axis-based reduction",
        "Broadcasting",
        "Concatenation",
        "NumPy conversion"
      ]
    },

    {
      phase: 7,
      title: "Linear Algebra Laboratory",

      objective:
        "Use the dataset to demonstrate the mathematical operations required by deep learning.",

      tasks: [
        "Select a feature vector.",
        "Calculate its dot product with another vector.",
        "Create a small matrix from the feature data.",
        "Perform matrix-vector multiplication.",
        "Perform matrix-matrix multiplication.",
        "Calculate an L1 norm.",
        "Calculate an L2 norm.",
        "Calculate a Frobenius norm for a matrix.",
        "Explain what each operation means."
      ],

      mathematicalQuestions: [
        "What does the dot product measure in this context?",
        "What does matrix-vector multiplication produce?",
        "Why must matrix dimensions be compatible for matrix multiplication?",
        "What does the L1 norm measure?",
        "What does the L2 norm measure?",
        "How does a norm relate to distance or magnitude?"
      ]
    },

    {
      phase: 8,
      title: "Calculus Laboratory",

      objective:
        "Connect basic calculus to the numerical computations used in machine learning.",

      tasks: [
        "Define a simple scalar function.",
        "Calculate its analytical derivative.",
        "Calculate a numerical derivative using a small difference quotient.",
        "Compare the numerical derivative with the analytical derivative.",
        "Repeat the experiment for several values of x.",
        "Plot the function.",
        "Plot or visualize its derivative.",
        "Explain the relationship between the function slope and derivative."
      ],

      exampleFunction:
        "f(x) = 3x² - 4x",

      requiredConcepts: [
        "Derivative",
        "Difference quotient",
        "Slope",
        "Numerical approximation",
        "Partial derivative",
        "Gradient",
        "Chain rule"
      ]
    },

    {
      phase: 9,
      title: "Gradient Laboratory",

      objective:
        "Demonstrate how gradients describe sensitivity to multiple variables.",

      tasks: [
        "Define a multivariable function.",
        "Calculate its partial derivatives.",
        "Construct its gradient.",
        "Evaluate the gradient at selected points.",
        "Explain which direction produces the greatest local increase.",
        "Explain why the negative gradient is useful for minimization."
      ],

      exampleFunction:
        "f(x,y) = x² + 3xy + y²",

      requiredOutput: [
        "Partial derivative with respect to x",
        "Partial derivative with respect to y",
        "Gradient vector",
        "Numerical gradient at selected points"
      ]
    },

    {
      phase: 10,
      title: "Automatic Differentiation Laboratory",

      objective:
        "Use PyTorch autograd to calculate gradients automatically.",

      tasks: [
        "Create a tensor with requires_grad=True.",
        "Define a scalar function.",
        "Call backward().",
        "Inspect tensor.grad.",
        "Verify the gradient manually.",
        "Demonstrate gradient accumulation.",
        "Clear the gradient.",
        "Create a vector-valued computation.",
        "Reduce the vector to a scalar.",
        "Call backward again.",
        "Use detach().",
        "Demonstrate gradient behavior through simple Python control flow."
      ],

      minimumExample:
        "Use a function involving multiplication, powers, and at least two variables.",

      verificationRequirement:
        "At least one automatically calculated gradient must be verified against a manually derived result."
    },

    {
      phase: 11,
      title: "Probability and Statistics Laboratory",

      objective:
        "Analyze the statistical properties of the selected dataset.",

      tasks: [
        "Calculate the mean of numerical features.",
        "Calculate variance.",
        "Calculate standard deviation.",
        "Calculate minimum and maximum values.",
        "Calculate covariance between selected numerical variables.",
        "Interpret the covariance.",
        "Create a simple empirical probability distribution for a categorical variable.",
        "Calculate probabilities from observed frequencies.",
        "Calculate an expected value for a suitable discrete example."
      ],

      requiredStatistics: [
        "Mean",
        "Variance",
        "Standard deviation",
        "Covariance",
        "Probability",
        "Expectation"
      ]
    },

    {
      phase: 12,
      title: "Visualization",

      objective:
        "Create visual evidence for important characteristics of the dataset.",

      requiredPlots: [
        "Distribution of at least one numerical feature",
        "Distribution of the target",
        "Categorical feature frequency chart",
        "Feature relationship plot",
        "At least one visualization showing possible outliers"
      ],

      optionalPlots: [
        "Correlation matrix",
        "Box plots",
        "Scatter matrix",
        "Feature-scale comparison",
        "Gradient visualization"
      ],

      requirement:
        "Every visualization must have a title, axis labels, and an explanation in the report."
    },

    {
      phase: 13,
      title: "Documentation Exploration",

      objective:
        "Demonstrate that the student can independently investigate an unfamiliar PyTorch API.",

      tasks: [
        "Use dir(torch) to explore available functionality.",
        "Use dir() on another PyTorch module.",
        "Use help() on at least three functions.",
        "Investigate function arguments.",
        "Test at least one unfamiliar function.",
        "Record the function's purpose and important arguments."
      ],

      documentationReport: [
        "Function name",
        "Purpose",
        "Important parameters",
        "Input expectations",
        "Output",
        "Small working example"
      ]
    },

    {
      phase: 14,
      title: "Integration",

      objective:
        "Combine all previous phases into a single reproducible pipeline.",

      pipeline: [
        "Load dataset",
        "Inspect dataset",
        "Analyze data quality",
        "Preprocess dataset",
        "Convert data to tensors",
        "Perform tensor operations",
        "Perform linear algebra",
        "Perform statistical analysis",
        "Demonstrate calculus",
        "Demonstrate automatic differentiation",
        "Generate visualizations",
        "Generate final report"
      ]
    }
  ],

  applicationFeatures: [
    {
      name: "Dataset Loader",
      description:
        "Allows the user to select or provide a CSV dataset."
    },
    {
      name: "Dataset Inspector",
      description:
        "Displays rows, columns, data types, dimensions, and basic statistics."
    },
    {
      name: "Missing Value Analyzer",
      description:
        "Reports missing values by column and shows the chosen handling strategy."
    },
    {
      name: "Categorical Data Analyzer",
      description:
        "Identifies categorical columns and displays their unique values and frequencies."
    },
    {
      name: "Preprocessing Engine",
      description:
        "Transforms the raw dataset into a numerical representation."
    },
    {
      name: "Tensor Converter",
      description:
        "Converts processed data into PyTorch tensors and reports their properties."
    },
    {
      name: "Tensor Operations Lab",
      description:
        "Demonstrates arithmetic, slicing, reduction, broadcasting, and concatenation."
    },
    {
      name: "Linear Algebra Lab",
      description:
        "Performs vector and matrix operations and calculates norms."
    },
    {
      name: "Calculus Lab",
      description:
        "Demonstrates numerical derivatives, analytical derivatives, and gradients."
    },
    {
      name: "Autograd Lab",
      description:
        "Demonstrates PyTorch automatic differentiation and gradient verification."
    },
    {
      name: "Statistics Lab",
      description:
        "Calculates statistical properties and basic empirical probabilities."
    },
    {
      name: "Visualization Dashboard",
      description:
        "Displays plots describing the dataset."
    },
    {
      name: "Documentation Explorer",
      description:
        "Records the APIs investigated during the project."
    }
  ],

  suggestedUserFlow: [
    "Open the project.",
    "Select the dataset.",
    "Run dataset inspection.",
    "Review data quality.",
    "Choose preprocessing operations.",
    "Generate the processed dataset.",
    "Convert the data to tensors.",
    "Run tensor experiments.",
    "Run linear algebra experiments.",
    "Run calculus experiments.",
    "Run automatic differentiation experiments.",
    "Run statistical analysis.",
    "Review visualizations.",
    "Review API documentation notes.",
    "Export or save the final analysis."
  ],

  folderStructure: [
    "deep-learning-foundations-project/",
    "+-- data/",
    "¦   +-- raw/",
    "¦   ¦   +-- dataset.csv",
    "¦   +-- processed/",
    "¦       +-- processed_dataset.csv",
    "+-- notebooks/",
    "¦   +-- module1_analysis.ipynb",
    "+-- src/",
    "¦   +-- __init__.py",
    "¦   +-- data_loader.py",
    "¦   +-- inspection.py",
    "¦   +-- preprocessing.py",
    "¦   +-- tensors.py",
    "¦   +-- linear_algebra.py",
    "¦   +-- calculus.py",
    "¦   +-- autograd.py",
    "¦   +-- statistics.py",
    "¦   +-- visualization.py",
    "¦   +-- documentation.py",
    "+-- outputs/",
    "¦   +-- figures/",
    "¦   +-- reports/",
    "¦   +-- results/",
    "+-- tests/",
    "¦   +-- test_preprocessing.py",
    "¦   +-- test_tensors.py",
    "¦   +-- test_math.py",
    "+-- requirements.txt",
    "+-- README.md",
    "+-- main.py"
  ],

  implementationGuidance: {
    dataLoader: [
      "Use Pandas to load the dataset.",
      "Keep raw data separate from processed data.",
      "Do not overwrite the original dataset."
    ],

    preprocessing: [
      "Create reusable preprocessing functions.",
      "Document every transformation.",
      "Keep preprocessing deterministic where possible.",
      "Record the resulting feature names."
    ],

    tensors: [
      "Use PyTorch tensors for numerical computation.",
      "Check tensor shapes before mathematical operations.",
      "Use suitable numerical data types.",
      "Avoid unnecessary copies."
    ],

    mathematics: [
      "Show the mathematical equation alongside important calculations.",
      "Compare manual calculations with framework results where practical.",
      "Explain what the numerical result means."
    ],

    autograd: [
      "Use requires_grad when gradient tracking is needed.",
      "Call backward only on an appropriate scalar objective or supply the required gradient.",
      "Clear gradients when demonstrating repeated backward passes.",
      "Use detach when demonstrating separation from the computation graph."
    ],

    documentation: [
      "Use Python and PyTorch documentation rather than guessing API behavior.",
      "Record important arguments.",
      "Test unfamiliar APIs with small examples."
    ]
  },

  requiredCodeDemonstrations: [
    {
      topic: "Tensor creation",
      requirement: "Create tensors using multiple approaches."
    },
    {
      topic: "Indexing",
      requirement: "Demonstrate selecting individual elements, rows, and columns."
    },
    {
      topic: "Slicing",
      requirement: "Demonstrate tensor slices."
    },
    {
      topic: "Elementwise operations",
      requirement: "Demonstrate arithmetic between compatible tensors."
    },
    {
      topic: "Broadcasting",
      requirement: "Demonstrate at least one broadcasting example."
    },
    {
      topic: "Reduction",
      requirement: "Demonstrate sum and mean along selected dimensions."
    },
    {
      topic: "Dot product",
      requirement: "Calculate and interpret a dot product."
    },
    {
      topic: "Matrix multiplication",
      requirement: "Demonstrate matrix-vector and matrix-matrix multiplication."
    },
    {
      topic: "Norm",
      requirement: "Calculate at least L1 and L2 norms."
    },
    {
      topic: "Derivative",
      requirement: "Compare analytical and numerical differentiation."
    },
    {
      topic: "Gradient",
      requirement: "Calculate a multivariable gradient."
    },
    {
      topic: "Autograd",
      requirement: "Calculate a gradient using PyTorch."
    },
    {
      topic: "Detach",
      requirement: "Demonstrate detached computation."
    },
    {
      topic: "Statistics",
      requirement: "Calculate mean, variance, standard deviation, and covariance."
    },
    {
      topic: "Documentation",
      requirement: "Explore APIs with dir and help."
    }
  ],

  expectedFinalReport: {
    sections: [
      "1. Project Introduction",
      "2. Problem Statement",
      "3. Dataset Description",
      "4. Dataset Source",
      "5. Dataset Structure",
      "6. Data Quality Analysis",
      "7. Missing-Value Analysis",
      "8. Preprocessing Strategy",
      "9. Feature and Target Definition",
      "10. Tensor Representation",
      "11. Tensor Operations",
      "12. Linear Algebra Analysis",
      "13. Calculus Experiment",
      "14. Gradient Experiment",
      "15. Automatic Differentiation Experiment",
      "16. Probability Analysis",
      "17. Statistical Analysis",
      "18. Visualizations",
      "19. PyTorch Documentation Exploration",
      "20. Results",
      "21. Challenges Encountered",
      "22. Solutions",
      "23. Limitations",
      "24. Future Improvements",
      "25. Conclusion",
      "26. References"
    ],

    reportRequirements: [
      "Include screenshots or generated figures where useful.",
      "Include important equations.",
      "Include important code snippets.",
      "Explain important outputs.",
      "Do not paste large amounts of raw terminal output.",
      "Clearly distinguish raw data from processed data.",
      "Explain preprocessing decisions."
    ]
  },

  assessment: {
    totalMarks: 100,

    categories: [
      {
        category: "Dataset Understanding",
        marks: 10,
        criteria: [
          "Correct loading",
          "Correct inspection",
          "Correct identification of data types",
          "Correct identification of missing values"
        ]
      },
      {
        category: "Data Preprocessing",
        marks: 15,
        criteria: [
          "Missing-value handling",
          "Categorical encoding",
          "Feature-target separation",
          "Correct numerical representation"
        ]
      },
      {
        category: "Tensor Programming",
        marks: 15,
        criteria: [
          "Tensor creation",
          "Indexing",
          "Slicing",
          "Broadcasting",
          "Reduction",
          "Shape management"
        ]
      },
      {
        category: "Linear Algebra",
        marks: 15,
        criteria: [
          "Dot products",
          "Matrix-vector multiplication",
          "Matrix multiplication",
          "Norm calculations",
          "Interpretation"
        ]
      },
      {
        category: "Calculus and Gradients",
        marks: 10,
        criteria: [
          "Derivative calculation",
          "Numerical verification",
          "Partial derivatives",
          "Gradient interpretation"
        ]
      },
      {
        category: "Automatic Differentiation",
        marks: 15,
        criteria: [
          "Correct requires_grad usage",
          "Backward computation",
          "Gradient verification",
          "Gradient accumulation demonstration",
          "Detach demonstration"
        ]
      },
      {
        category: "Probability and Statistics",
        marks: 10,
        criteria: [
          "Mean",
          "Variance",
          "Standard deviation",
          "Covariance",
          "Probability or expectation"
        ]
      },
      {
        category: "Documentation and Code Quality",
        marks: 5,
        criteria: [
          "API exploration",
          "Code organization",
          "Readable implementation"
        ]
      },
      {
        category: "Final Report",
        marks: 5,
        criteria: [
          "Clear explanation",
          "Useful visualizations",
          "Correct interpretation",
          "Professional presentation"
        ]
      }
    ]
  },

  checkpoints: [
    {
      checkpoint: 1,
      title: "Dataset Ready",
      successCriteria: [
        "Dataset loads successfully",
        "Structure is understood",
        "Missing values are identified"
      ]
    },
    {
      checkpoint: 2,
      title: "Data Ready for Tensors",
      successCriteria: [
        "No unsupported data types remain",
        "Features and targets are separated",
        "Processed dataset is numerical"
      ]
    },
    {
      checkpoint: 3,
      title: "Tensor Pipeline Working",
      successCriteria: [
        "Features are tensors",
        "Shapes are correct",
        "Tensor operations execute successfully"
      ]
    },
    {
      checkpoint: 4,
      title: "Mathematics Verified",
      successCriteria: [
        "Linear algebra calculations work",
        "Numerical derivative agrees with analytical derivative",
        "Gradient calculations are understood"
      ]
    },
    {
      checkpoint: 5,
      title: "Autograd Verified",
      successCriteria: [
        "backward works",
        "gradient is inspected",
        "manual gradient verification succeeds"
      ]
    },
    {
      checkpoint: 6,
      title: "Final Analysis Complete",
      successCriteria: [
        "Statistics generated",
        "Visualizations generated",
        "Documentation investigation completed",
        "Final report prepared"
      ]
    }
  ],

  extensionChallenges: [
    {
      title: "Reusable Dataset Analyzer",
      description:
        "Convert the project into a reusable program that accepts different CSV files without changing the core analysis code."
    },
    {
      title: "Interactive Analysis",
      description:
        "Create a simple interface where a user can upload a dataset and select which analysis to perform."
    },
    {
      title: "Automatic Data Report",
      description:
        "Generate an HTML or PDF report containing dataset statistics, preprocessing information, tensor information, and plots."
    },
    {
      title: "Gradient Visualization",
      description:
        "Create a visualization showing how a simple function changes and how its gradient varies across the input domain."
    },
    {
      title: "CPU vs GPU Experiment",
      description:
        "If a CUDA-compatible GPU is available, compare a suitable tensor computation on CPU and GPU."
    },
    {
      title: "Unit Testing",
      description:
        "Write tests verifying preprocessing functions, tensor shapes, mathematical calculations, and gradient results."
    }
  ],

  finalDeliverables: [
    "Complete source code",
    "Raw dataset",
    "Processed dataset",
    "Jupyter notebook or equivalent experiment file",
    "Generated visualizations",
    "Statistical results",
    "Tensor analysis results",
    "Calculus experiment",
    "Automatic differentiation experiment",
    "Documentation exploration notes",
    "README.md",
    "Final project report"
  ],

  finalChecklist: [
    "Dataset loads successfully",
    "Dataset structure is documented",
    "Missing values are analyzed",
    "Categorical values are handled",
    "Features and targets are separated",
    "Processed data is converted to tensors",
    "Tensor shapes are verified",
    "Indexing and slicing are demonstrated",
    "Elementwise operations are demonstrated",
    "Broadcasting is demonstrated",
    "Reduction is demonstrated",
    "Dot product is demonstrated",
    "Matrix-vector multiplication is demonstrated",
    "Matrix multiplication is demonstrated",
    "L1 or L2 norm is demonstrated",
    "Numerical derivative is calculated",
    "Analytical derivative is calculated",
    "Partial derivatives are demonstrated",
    "Gradient is calculated",
    "Automatic differentiation is demonstrated",
    "Gradient accumulation is demonstrated",
    "detach is demonstrated",
    "Mean is calculated",
    "Variance is calculated",
    "Standard deviation is calculated",
    "Covariance is calculated",
    "Probability or expectation is calculated",
    "Visualizations are generated",
    "dir() is used",
    "help() is used",
    "Code is organized",
    "Final report is complete"
  ],

  conclusion:
    "This project turns the mathematical and programming foundations of Module 1 into one complete workflow. Instead of treating tensors, preprocessing, linear algebra, calculus, automatic differentiation, probability, statistics, and documentation as isolated topics, the learner uses them together in a realistic data-analysis pipeline. The project intentionally stops before building a full neural network so that the learner finishes the foundational mathematics and PyTorch skills required for the neural-network modules that follow."
};

export default project;
