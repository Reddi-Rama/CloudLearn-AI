export const practice = {
  title: "Module 04 Practice — Mathematical Foundations for AI",

  description:
    "Practice activities that combine the mathematical concepts learned throughout the module.",

  objectives: [
    "Work with vectors and matrices using NumPy.",
    "Perform mathematical calculations used in AI.",
    "Analyze data using basic statistics.",
    "Calculate distance and similarity.",
    "Understand prediction error and loss.",
    "Visualize mathematical relationships.",
    "Connect mathematical concepts into an AI-style workflow."
  ],

  activities: [
    {
      title: "Vector Operations",
      task: String.raw`
Create two vectors using NumPy.

Calculate:

- Addition
- Subtraction
- Scalar multiplication
- Dot product
- Magnitude

Explain what each operation means mathematically.
`
    },

    {
      title: "Matrix Operations",
      task: String.raw`
Create two compatible matrices.

Perform:

- Matrix addition
- Matrix multiplication
- Transpose

Use NumPy and verify the dimensions of the resulting matrices.
`
    },

    {
      title: "Statistics Practice",
      task: String.raw`
Create a numerical dataset containing at least ten values.

Calculate:

- Mean
- Variance
- Standard deviation
- Minimum
- Maximum

Use NumPy and explain what the results tell you about the dataset.
`
    },

    {
      title: "Distance Calculation",
      task: String.raw`
Create several two-dimensional points.

Choose one point as a reference and calculate the Euclidean distance from the reference to every other point.

Identify the closest point.
`
    },

    {
      title: "Prediction and Loss",
      task: String.raw`
Create a simple linear prediction model:

ŷ = wx + b

Choose values for:

- x
- y
- w
- b

Calculate:

1. Prediction
2. Error
3. Squared loss

Then change w and observe how the loss changes.
`
    },

    {
      title: "Loss Visualization",
      task: String.raw`
Use NumPy and Matplotlib to plot:

L(w) = (w - 3)²

Identify the approximate minimum point from the graph.
`
    },

    {
      title: "Complete Mathematical Workflow",
      task: String.raw`
Create a small dataset with numerical features.

Perform the following:

Data
→ Numerical representation
→ Prediction
→ Error
→ Loss
→ Average loss
→ Visualization

Write a short explanation of what happens at every stage.
`
    }
  ],

  codingChallenge: String.raw`
Build a Python program called:

AI_Mathematical_Analyzer

The program should:

1. Store a small dataset using NumPy.
2. Calculate basic statistics.
3. Represent each example as a vector.
4. Calculate distances between examples.
5. Create predictions using a simple mathematical model.
6. Calculate prediction errors.
7. Calculate mean squared loss.
8. Display at least one visualization.
9. Print a short interpretation of the results.

Use:

- Python
- NumPy
- Matplotlib
`,

  quickCheck: [
    "What is the difference between a vector and a scalar?",
    "What does a dot product represent?",
    "Why are matrices useful for representing datasets?",
    "What does standard deviation tell us?",
    "How can distance be used to measure similarity?",
    "What is prediction error?",
    "Why do machine-learning systems use loss functions?",
    "What does optimization attempt to minimize?"
  ],

  completionCriteria: [
    "All numerical calculations are correct.",
    "NumPy is used for numerical operations.",
    "Matplotlib is used for visualization.",
    "The learner explains the mathematical meaning of the calculations.",
    "The final workflow connects multiple concepts from the module."
  ]
};
