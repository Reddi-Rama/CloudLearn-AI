export const module4Project = {
  id: "module-04-project",
  title: "AI Mathematics Visualizer",

  description:
    "Build an interactive mathematical AI laboratory that demonstrates how mathematical concepts are used to represent data, make predictions, measure error, and compare data points.",

  objective: String.raw`
# AI Mathematics Visualizer

Build a practical Python-based mathematical AI laboratory.

The application should demonstrate how mathematics becomes computation inside an AI workflow.

The project should not be a collection of unrelated formulas. Every component should connect a mathematical concept to an AI-oriented task.
`,

  problemStatement: String.raw`
AI systems depend heavily on mathematical representations.

Data must be represented numerically, model calculations must be performed, predictions must be generated, errors must be measured, and relationships between data points must be analyzed.

Build a small application that makes these mathematical operations visible and understandable through numerical experiments and visualizations.
`,

  requirements: String.raw`
## 1. Function Visualizer

Allow the application to visualize mathematical functions such as:

\[
y=2x+5
\]

and:

\[
y=x^2
\]

The user should be able to observe how changing the function changes its graph.

---

## 2. Vector Laboratory

Implement:

- vector addition
- vector subtraction
- scalar multiplication
- magnitude
- dot product

Display the numerical results.

Where appropriate, visualize two-dimensional vectors.

---

## 3. Matrix Laboratory

Create a small feature matrix.

Demonstrate:

- matrix shape
- transpose
- matrix addition
- matrix-vector multiplication

Show how:

\[
Xw
\]

can produce predictions for multiple observations.

---

## 4. Probability Laboratory

Create a simulation such as:

- coin flips
- dice rolls

Display:

- theoretical probability
- experimental probability

Visualize the observed distribution.

---

## 5. Statistics Laboratory

For a numerical dataset, calculate:

- mean
- median
- variance
- standard deviation
- minimum
- maximum
- percentiles

Display the distribution using Matplotlib.

---

## 6. Loss Laboratory

Implement a simple prediction model:

\[
\hat{y}=Xw+b
\]

Calculate:

\[
MSE=
\frac1n
\sum_{i=1}^{n}
(y_i-\hat y_i)^2
\]

Allow the user to experiment with different parameter values.

Visualize the loss function.

---

## 7. Distance & Similarity Laboratory

Create multiple vectors and calculate:

- Euclidean distance
- Manhattan distance
- cosine similarity

Allow the user to select a reference vector.

Identify the closest or most similar vector.

Visualize two-dimensional vectors where possible.

---

## 8. AI Interpretation

For every experiment, display a short explanation answering:

**What happened mathematically?**

**What does the result mean?**

**Where could this concept appear in an AI system?**
`,

  suggestedStructure: String.raw`
## Suggested Project Structure

\`\`\`
ai-mathematics-visualizer/
│
├── data/
│   └── sample_data.csv
│
├── notebooks/
│   └── experiments.ipynb
│
├── src/
│   ├── functions.py
│   ├── vectors.py
│   ├── matrices.py
│   ├── probability.py
│   ├── statistics.py
│   ├── loss.py
│   ├── similarity.py
│   └── main.py
│
├── visualizations/
│
├── README.md
└── requirements.txt
\`\`\`
`,

  libraries: [
    "Python",
    "NumPy",
    "Pandas",
    "Matplotlib"
  ],

  workflow: String.raw`
## Project Workflow

Data / Mathematical Input
        ↓
Numerical Representation
        ↓
Vector / Matrix Operations
        ↓
Probability & Statistics
        ↓
Prediction
        ↓
Loss / Error
        ↓
Distance & Similarity
        ↓
Visualization
        ↓
AI Interpretation
`,

  deliverables: [
    "Working Python application",
    "Mathematical calculations implemented with NumPy",
    "Visualizations using Matplotlib",
    "Small dataset or generated numerical data",
    "README explaining the mathematical concepts",
    "Results and observations",
    "Limitations and possible improvements"
  ],

  evaluationCriteria: [
    "Correct mathematical implementation",
    "Correct use of Python and NumPy",
    "Meaningful Matplotlib visualizations",
    "Clear connection between mathematics and AI",
    "Readable and organized code",
    "Correct interpretation of results",
    "Ability to explain mathematical decisions"
  ],

  finalGoal:
    "Demonstrate that mathematical concepts are not isolated formulas but practical tools used to represent data, calculate predictions, measure error, compare representations, and support intelligent systems."
};