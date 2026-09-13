export const project = {
  title: "AI Mathematics Visualizer",

  type: "Module Project",

  description: String.raw`
Build an interactive Python-based mathematical visualization project that demonstrates the core mathematical ideas used in AI.

The project should not simply display formulas. It should allow mathematical concepts to be calculated, visualized, and interpreted through practical experiments.
`,

  problemStatement: String.raw`
Students often learn mathematical formulas independently without understanding how they connect to AI systems.

The goal of this project is to create a small mathematical laboratory where users can experiment with vectors, matrices, statistics, distance, prediction, error, loss, and optimization.
`,

  learningGoals: [
    "Apply mathematical concepts programmatically.",
    "Use NumPy for numerical computation.",
    "Use Matplotlib for mathematical visualization.",
    "Understand how mathematical representations support AI.",
    "Connect prediction, error, loss, and optimization.",
    "Interpret mathematical results."
  ],

  technologies: [
    "Python",
    "NumPy",
    "Matplotlib"
  ],

  coreFeatures: [
    {
      name: "Vector Operations",
      description:
        "Allow users to enter vectors and calculate basic vector operations, dot products, and magnitudes."
    },

    {
      name: "Matrix Operations",
      description:
        "Demonstrate matrix addition, multiplication, and transpose operations."
    },

    {
      name: "Statistics Analyzer",
      description:
        "Accept a numerical dataset and calculate mean, variance, standard deviation, minimum, and maximum."
    },

    {
      name: "Distance Calculator",
      description:
        "Calculate Euclidean distance between points or feature vectors and identify the closest point."
    },

    {
      name: "Prediction Calculator",
      description:
        "Use a simple linear model to calculate predictions from feature values and model parameters."
    },

    {
      name: "Loss Calculator",
      description:
        "Calculate prediction error and squared loss for individual examples and datasets."
    },

    {
      name: "Loss Visualization",
      description:
        "Plot a loss function and visually identify the region where the loss is minimized."
    },

    {
      name: "Mathematical AI Workflow",
      description:
        "Combine numerical representation, prediction, error, loss, and visualization into one workflow."
    }
  ],

  suggestedStructure: String.raw`
\`\`\`
ai-mathematics-visualizer/
│
├── main.py
├── vector_operations.py
├── matrix_operations.py
├── statistics_analyzer.py
├── distance_calculator.py
├── prediction_model.py
├── loss_functions.py
├── visualizations.py
└── README.md
\`\`\`
`,

  implementationGuidance: String.raw`
### Step 1 — Prepare the Environment

Install the required libraries:

\`\`\`bash
pip install numpy matplotlib
\`\`\`

### Step 2 — Implement Vector Operations

Use NumPy arrays to perform:

\`\`\`
Addition
Subtraction
Dot Product
Magnitude
\`\`\`

### Step 3 — Implement Matrix Operations

Create matrices and demonstrate:

\`\`\`
Addition
Multiplication
Transpose
\`\`\`

### Step 4 — Build the Statistics Analyzer

Given a dataset, calculate:

\`\`\`
Mean
Variance
Standard Deviation
Minimum
Maximum
\`\`\`

### Step 5 — Build the Distance Calculator

Implement Euclidean distance:

\`\`\`
d(A,B) = √Σ(Aᵢ-Bᵢ)²
\`\`\`

### Step 6 — Build the Prediction Model

Implement:

\`\`\`
ŷ = wᵀx + b
\`\`\`

### Step 7 — Add Loss Calculation

Implement squared error:

\`\`\`
L = (y - ŷ)²
\`\`\`

For multiple examples, calculate mean squared error:

\`\`\`
MSE = 1/n Σ(yᵢ - ŷᵢ)²
\`\`\`

### Step 8 — Visualize the Mathematics

Use Matplotlib to display:

- Data distributions
- Two-dimensional points
- Distance relationships
- Loss functions
- Parameter versus loss relationships

### Step 9 — Build the Complete Workflow

Connect the components:

\`\`\`
Input Data
   ↓
Feature Representation
   ↓
Mathematical Computation
   ↓
Prediction
   ↓
Error
   ↓
Loss
   ↓
Visualization
   ↓
Interpretation
\`\`\`
`,

  sampleCoreCode: String.raw`
\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# Example feature vector
x = np.array([2, 80, 70])

# Model parameters
w = np.array([5, 0.1, 0.5])
b = 10

# Target
y = 70

# Prediction
prediction = np.dot(w, x) + b

# Error and loss
error = y - prediction
loss = error ** 2

print("Prediction:", prediction)
print("Error:", error)
print("Loss:", loss)

# Loss visualization
weights = np.linspace(-2, 10, 200)
loss_values = (weights - 4) ** 2

plt.plot(weights, loss_values)
plt.xlabel("Parameter")
plt.ylabel("Loss")
plt.title("Loss Function Visualization")
plt.show()
\`\`\`
`,

  expectedOutcome: String.raw`
The completed project should allow a learner to see how mathematical concepts are connected rather than treating them as isolated formulas.

The learner should be able to demonstrate:

\`\`\`
Data
→ Vectors / Matrices
→ Mathematical Operations
→ Prediction
→ Error
→ Loss
→ Visualization
→ Interpretation
\`\`\`

The final project should provide both numerical results and visual explanations.
`,

  evaluationCriteria: [
    "Correct implementation of mathematical operations.",
    "Correct use of NumPy arrays and numerical functions.",
    "Correct statistical calculations.",
    "Correct distance calculations.",
    "Correct prediction and loss calculations.",
    "Meaningful Matplotlib visualizations.",
    "Clear interpretation of mathematical results.",
    "Clean and modular Python implementation.",
    "Ability to explain how each mathematical component relates to AI."
  ],

  extensionChallenges: [
    "Add cosine similarity between vectors.",
    "Add a correlation analysis between two variables.",
    "Allow users to compare multiple loss functions.",
    "Visualize several parameter values on the same experiment.",
    "Add a simple parameter-search experiment to find the parameter producing the smallest loss.",
    "Create a small interactive interface for selecting different mathematical experiments."
  ],

  finalDeliverables: [
    "Complete Python project",
    "Source code files",
    "Mathematical visualizations",
    "README.md",
    "Short explanation of the mathematical concepts used",
    "Example outputs"
  ]
};