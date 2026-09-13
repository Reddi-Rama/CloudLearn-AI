export const module4Practice = {
  id: "module-04-practice",
  title: "Module 04 Practice — Mathematical Foundations for AI",

  description:
    "Apply the mathematical concepts from the module to practical AI-oriented numerical problems using Python, NumPy, and Matplotlib.",

  instructions: String.raw`
# Module Practice — Mathematical Foundations for AI

This practice brings together the mathematical ideas learned throughout the module.

The objective is not simply to calculate answers. You should understand what each mathematical operation represents and why it is useful in an AI system.

---

## Part 1 — Functions

Create a Python program for:

\[
y=2x+5
\]

Your program should:

1. Generate values of \(x\).
2. Calculate \(y\).
3. Display the results.
4. Visualize the function using Matplotlib.

---

## Part 2 — Vectors

Create two vectors:

\[
A=[2,4,6]
\]

\[
B=[1,3,5]
\]

Calculate:

- \(A+B\)
- \(A-B\)
- \(2A\)
- \(||A||\)
- \(A\cdot B\)

Verify your calculations using NumPy.

---

## Part 3 — Matrices

Create a feature matrix containing at least five observations and three numerical features.

For example:

\[
X\in\mathbb{R}^{5\times3}
\]

Perform:

- shape inspection
- row selection
- column selection
- transpose
- matrix addition
- scalar multiplication

Explain what the rows and columns represent.

---

## Part 4 — Matrix Multiplication

Create a feature matrix:

\[
X
\]

and a weight vector:

\[
w
\]

Calculate:

\[
\hat{y}=Xw+b
\]

Use at least five observations.

Explain how matrix multiplication produces multiple predictions at once.

---

## Part 5 — Probability

Simulate 10,000 dice rolls.

Calculate the experimental probability of:

- rolling 1
- rolling an even number
- rolling a number greater than 4

Compare the experimental results with theoretical probability.

---

## Part 6 — Conditional Probability

Create a small dataset containing:

- Practice
- Pass

Calculate:

\[
P(\text{Pass}|\text{Practice})
\]

Explain what the result means.

---

## Part 7 — Statistics

Create a numerical dataset containing at least 20 values.

Calculate:

- mean
- median
- minimum
- maximum
- range
- variance
- standard deviation
- 25th percentile
- 50th percentile
- 75th percentile

Visualize the distribution using a histogram.

---

## Part 8 — Loss

Create:

\[
y=[10,20,30,40]
\]

and:

\[
\hat{y}=[12,18,33,37]
\]

Calculate:

- error
- absolute error
- squared error
- MSE

Then create a simple loss function and visualize how loss changes as a model parameter changes.

---

## Part 9 — Distance

Create at least five vectors.

Choose one vector as the reference.

Calculate:

- Euclidean distance
- Manhattan distance
- cosine similarity

between the reference vector and every other vector.

Identify:

- closest vector by Euclidean distance
- closest vector by Manhattan distance
- most similar vector by cosine similarity

---

## Part 10 — Mathematical AI Experiment

Create a small numerical AI experiment that combines at least four concepts from this module.

For example:

\[
\text{Features}
\rightarrow
\text{Vectors}
\rightarrow
\text{Matrix Multiplication}
\rightarrow
\text{Prediction}
\rightarrow
\text{Loss}
\rightarrow
\text{Distance/Similarity}
\]

Your submission should include:

1. Problem statement
2. Mathematical formulation
3. Python implementation
4. NumPy operations
5. Matplotlib visualization
6. Results
7. Interpretation
8. Limitations

---

## Final Practice Requirement

For every major mathematical operation, write:

**What does it calculate?**

**Why is it useful?**

**Where could an AI system use it?**

The goal is to connect mathematics with actual AI computation rather than treating formulas as isolated mathematics.
`,

  tasks: [
    "Implement and visualize a mathematical function.",
    "Perform vector operations and dot products.",
    "Represent an AI dataset using matrices.",
    "Perform matrix-vector multiplication.",
    "Simulate probability experiments.",
    "Calculate conditional probability.",
    "Analyze a dataset statistically.",
    "Calculate and visualize loss.",
    "Compare vectors using distance and similarity.",
    "Build an integrated mathematical AI experiment."
  ],

  expectedOutcome:
    "The learner should be able to connect mathematical representations, numerical computation, probability, statistics, loss, distance, and similarity to practical AI problems."
};