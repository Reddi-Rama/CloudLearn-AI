const lesson5 = {
  id: "lesson5",
  moduleId: "module1",
  lessonNumber: 5,

  title: "Calculus for Deep Learning",

  subtitle:
    "Understanding derivatives, gradients, and the chain rule",

  description:
    "Learn how calculus provides the mathematical foundation for computing gradients and improving the parameters of deep learning models.",

  estimatedTime: "4–5 hours",

  difficulty: "Intermediate",

  learningObjectives: [
    "Understand the purpose of calculus in deep learning.",
    "Understand derivatives.",
    "Understand the difference quotient.",
    "Understand derivative intuition geometrically.",
    "Understand partial derivatives.",
    "Understand gradients.",
    "Understand vector-valued functions.",
    "Understand how gradients indicate directions of change.",
    "Understand the chain rule.",
    "Understand nested functions.",
    "Understand computational dependency graphs.",
    "Understand why gradients are central to optimization.",
    "Connect calculus with neural network training."
  ],

  sections: [
    {
      id: "why-calculus",
      title: "1. Why Calculus Matters in Deep Learning",

      content: `
Deep learning models contain parameters.

During training, these parameters are adjusted so that the model produces better predictions.

To decide how a parameter should change, we need to understand how the loss changes when the parameter changes.

This is the central role of calculus.

The basic idea is:

Parameter
↓
Model Output
↓
Loss
↓
Measure how Loss changes
↓
Adjust Parameter

The derivative provides a mathematical description of this change.
`
    },

    {
      id: "function",
      title: "2. Functions and Change",

      content: `
A function maps an input to an output.

For example:

y = f(x)

Suppose:

f(x) = x²

If x changes, y also changes.

Calculus asks:

How rapidly does y change when x changes?

This question leads to the derivative.
`
    },

    {
      id: "difference",
      title: "3. Difference Quotient",

      content: `
A simple way to estimate how a function changes is to compare two nearby points.

For a small change h:

[f(x + h) − f(x)] / h

This is called a difference quotient.

It measures the average rate of change between two nearby points.

As h becomes smaller, the estimate approaches the instantaneous rate of change.
`
    },

    {
      id: "derivative",
      title: "4. Derivative",

      content: `
The derivative measures the instantaneous rate of change of a function.

It is commonly written as:

dy/dx

or:

f'(x)

The derivative can be defined using a limit:

f'(x) = lim(h→0) [f(x+h) − f(x)] / h

The derivative therefore describes how sensitive the output is to a small change in the input.
`
    },

    {
      id: "example",
      title: "5. Simple Derivative Example",

      content: `
Consider:

f(x) = x²

Its derivative is:

f'(x) = 2x

At:

x = 3

the derivative is:

f'(3) = 6

This means that near x = 3, a small increase in x produces an approximately six-times-as-large increase in f(x), for sufficiently small changes.

The derivative is therefore a local measure of sensitivity.
`
    },

    {
      id: "slope",
      title: "6. Derivative as Slope",

      content: `
Geometrically, the derivative represents the slope of the tangent line to a curve at a point.

If the derivative is positive:

the function is locally increasing.

If the derivative is negative:

the function is locally decreasing.

If the derivative is close to zero:

the function is locally flat.

This interpretation becomes extremely important in optimization.
`
    },

    {
      id: "optimization",
      title: "7. Derivatives and Optimization",

      content: `
Suppose a model has a loss function:

L(w)

where w is a parameter.

We want to find parameter values that reduce the loss.

The derivative:

dL/dw

tells us how the loss changes when w changes.

If:

dL/dw > 0

increasing w locally increases the loss.

If:

dL/dw < 0

increasing w locally decreases the loss.

Therefore, derivative information can guide parameter updates.
`
    },

    {
      id: "gradient-descent-intuition",
      title: "8. Gradient Descent Intuition",

      content: `
Suppose we want to minimize a function.

A basic idea is to move in the direction that decreases the function.

For a single parameter:

w_new = w_old − η dL/dw

where:

η

is the learning rate.

The derivative determines the local direction.

The learning rate controls the size of the step.

This simple idea forms the foundation of many optimization algorithms used in deep learning.
`
    },

    {
      id: "partial",
      title: "9. Partial Derivatives",

      content: `
Real deep learning models have many parameters.

Suppose:

L = L(w₁, w₂, w₃)

We can ask how L changes with respect to one parameter while treating the others as fixed.

These are partial derivatives:

∂L/∂w₁

∂L/∂w₂

∂L/∂w₃

Each partial derivative measures the local sensitivity of the loss to one variable.
`
    },

    {
      id: "gradient",
      title: "10. Gradient",

      content: `
The gradient collects the partial derivatives into a vector.

For:

L(w₁, w₂, ..., wₙ)

the gradient is:

∇L = [
∂L/∂w₁,
∂L/∂w₂,
...,
∂L/∂wₙ
]

The gradient therefore summarizes how the function changes with respect to all parameters.

In deep learning, gradients are used to update model parameters.
`
    },

    {
      id: "gradient-direction",
      title: "11. Direction of the Gradient",

      content: `
The gradient points in the direction of greatest local increase of a scalar function.

Therefore:

−∇L

points in the direction of greatest local decrease.

This explains the basic gradient descent update:

w ← w − η∇L

The model moves in the negative-gradient direction to reduce the loss.
`
    },

    {
      id: "multiple-functions",
      title: "12. Functions of Multiple Variables",

      content: `
A model can depend on many variables.

For example:

f(x,y) = x² + y²

Its partial derivatives are:

∂f/∂x = 2x

∂f/∂y = 2y

Therefore:

∇f = [2x, 2y]

The gradient combines the effects of both variables.
`
    },

    {
      id: "vector-function",
      title: "13. Vector-Valued Functions",

      content: `
Some functions produce vectors rather than scalars.

For example:

u = g(x)

where x and u are vectors.

When differentiating such functions, derivatives can be organized into matrices.

These matrices describe how changes in one set of variables influence another set.

This connects calculus directly to linear algebra.
`
    },

    {
      id: "chain",
      title: "14. Chain Rule",

      content: `
Deep learning models are compositions of many functions.

For example:

x
↓
g
↓
u
↓
f
↓
y

where:

u = g(x)

and:

y = f(u)

The chain rule tells us how to compute the derivative of the final output with respect to the original input.

For scalar functions:

dy/dx = dy/du × du/dx
`
    },

    {
      id: "chain-example",
      title: "15. Chain Rule Example",

      content: `
Consider:

u = x²

and:

y = 3u

Then:

du/dx = 2x

and:

dy/du = 3

Therefore:

dy/dx = dy/du × du/dx

= 3 × 2x

= 6x

The chain rule allows us to break a complicated derivative into simpler derivatives.
`
    },

    {
      id: "deep-composition",
      title: "16. Chain Rule in Deep Networks",

      content: `
A neural network may contain many nested operations.

For example:

x
↓
Layer 1
↓
Activation
↓
Layer 2
↓
Activation
↓
Layer 3
↓
Loss

The loss depends indirectly on the input and every parameter.

The chain rule allows the derivative to be propagated through these successive operations.

This is the mathematical foundation of backpropagation.
`
    },

    {
      id: "dependency",
      title: "17. Computational Dependency Graph",

      content: `
A computational graph represents dependencies between variables.

For example:

x → u → v → y

means:

u depends on x.

v depends on u.

y depends on v.

During ordinary computation, values move forward through the graph.

During gradient computation, derivative information can be propagated backward.

This forward/backward relationship is central to modern neural network training.
`
    },

    {
      id: "matrix-gradient",
      title: "18. Chain Rule with Multiple Variables",

      content: `
For multivariate functions, the chain rule involves sums of contributions from intermediate variables.

Conceptually:

Input variables
↓
Intermediate variables
↓
Output
↓
Gradient

The derivative of the output with respect to one input can depend on multiple paths through the computational graph.

Linear algebra provides the matrix operations needed to combine these derivative relationships.
`
    },

    {
      id: "visualization",
      title: "19. Visualizing Functions",

      content: `
Visualization can make derivatives easier to understand.

For a one-dimensional function, plotting the function allows us to see:

• increasing regions
• decreasing regions
• flat regions
• local maxima
• local minima

The derivative describes the slope at each point.

Visualization is therefore useful for building intuition before working with high-dimensional models.
`
    },

    {
      id: "critical-points",
      title: "20. Critical Points",

      content: `
A point where the derivative is zero is often called a critical point.

For:

f'(x) = 0

the function may have:

• a local minimum
• a local maximum
• a flat inflection-like region

A zero derivative alone does not guarantee a minimum.

The surrounding behavior must also be considered.
`
    },

    {
      id: "deep-learning-link",
      title: "21. Calculus and Model Training",

      content: `
The connection can now be summarized:

Model Parameters
↓
Forward Computation
↓
Prediction
↓
Loss
↓
Derivative / Gradient
↓
Parameter Update
↓
New Model Parameters

Calculus tells us how the loss changes.

Optimization uses that information to improve parameters.
`
    },

    {
      id: "why-chain",
      title: "22. Why the Chain Rule Is Essential",

      content: `
Deep networks contain many layers.

Computing every derivative directly would be inefficient and difficult.

The chain rule allows the computation to be decomposed into local derivative operations.

Automatic differentiation systems exploit this structure.

The practical result is that programmers can define forward computations while the framework constructs the required derivative computation.
`
    },

    {
      id: "summary-concept",
      title: "23. Core Calculus Picture",

      content: `
The essential ideas are:

Derivative
→ local rate of change

Partial derivative
→ rate of change with respect to one variable

Gradient
→ collection of partial derivatives

Chain rule
→ derivative of composed functions

Gradient descent
→ use the negative gradient to reduce a function

Backpropagation
→ efficient application of the chain rule through a computational graph
`
    }
  ],

  codeExamples: [
    {
      title: "Numerical Difference Quotient",
      language: "python",

      code: `def f(x):
    return x ** 2

x = 3.0
h = 0.0001

approximation = (
    f(x + h) - f(x)
) / h

print(approximation)`,

      explanation:
        "Approximates the derivative using a small finite difference."
    },

    {
      title: "Plot a Function",
      language: "python",

      code: `import torch
import matplotlib.pyplot as plt

x = torch.linspace(-5, 5, 200)
y = x ** 2

plt.plot(x.numpy(), y.numpy())
plt.xlabel("x")
plt.ylabel("f(x)")
plt.title("f(x) = x²")
plt.show()`,

      explanation:
        "Visualizes a simple function so that its slope and shape can be studied."
    },

    {
      title: "Calculate a Gradient with PyTorch",
      language: "python",

      code: `import torch

x = torch.tensor(
    3.0,
    requires_grad=True
)

y = x ** 2

y.backward()

print(x.grad)`,

      output: `tensor(6.)`,

      explanation:
        "PyTorch computes the derivative of x² at x = 3."
    },

    {
      title: "Multiple Variables",
      language: "python",

      code: `import torch

x = torch.tensor(
    2.0,
    requires_grad=True
)

y = torch.tensor(
    3.0,
    requires_grad=True
)

z = x ** 2 + y ** 2

z.backward()

print(x.grad)
print(y.grad)`,

      output: `tensor(4.)
tensor(6.)`,

      explanation:
        "Computes partial derivatives with respect to two independent variables."
    },

    {
      title: "Gradient Descent Demonstration",
      language: "python",

      code: `x = 5.0
learning_rate = 0.1

for step in range(10):
    gradient = 2 * x
    x = x - learning_rate * gradient
    print(step, x)`,

      explanation:
        "Demonstrates the basic idea of moving in the negative-gradient direction."
    }
  ],

  mathematicalIntuition: [
    {
      title: "Derivative",
      formula: "f'(x) = lim(h→0) [f(x+h) − f(x)] / h",
      explanation:
        "Measures the instantaneous rate of change."
    },

    {
      title: "Partial Derivative",
      formula: "∂f/∂x",
      explanation:
        "Measures change with respect to one variable while holding the others fixed."
    },

    {
      title: "Gradient",
      formula: "∇f = [∂f/∂x₁, ..., ∂f/∂xₙ]",
      explanation:
        "Collects all partial derivatives into one vector."
    },

    {
      title: "Gradient Descent",
      formula: "w ← w − η∇L",
      explanation:
        "Updates parameters in the direction that locally decreases the loss."
    },

    {
      title: "Chain Rule",
      formula: "dy/dx = (dy/du)(du/dx)",
      explanation:
        "Connects derivatives through nested functions."
    }
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "What does a derivative measure?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "Find the derivative of f(x) = x²."
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "Explain the difference between a derivative and a partial derivative."
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "What information does a gradient contain?"
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "Explain why gradient descent uses the negative gradient."
    },

    {
      id: "ex6",
      difficulty: "Hard",
      question:
        "Apply the chain rule to y = (x² + 1)³."
    },

    {
      id: "ex7",
      difficulty: "Hard",
      question:
        "Explain how the chain rule is connected to backpropagation."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Derivative Approximation",
      task:
        "Implement a numerical derivative using a finite difference."
    },

    {
      id: "code2",
      title: "Gradient Calculator",
      task:
        "Use PyTorch autograd to calculate the gradient of a function with two variables."
    },

    {
      id: "code3",
      title: "Gradient Descent",
      task:
        "Implement gradient descent for f(x) = x²."
    },

    {
      id: "code4",
      title: "Two-Variable Optimization",
      task:
        "Use gradient descent to minimize f(x,y) = x² + y²."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "A derivative is always reported as zero.",
      task:
        "Check whether the function or evaluation point actually produces a zero derivative."
    },

    {
      id: "debug2",
      problem:
        "Gradient descent moves away from the minimum.",
      task:
        "Check the sign of the gradient update."
    },

    {
      id: "debug3",
      problem:
        "A gradient has unexpected dimensions.",
      task:
        "Inspect the shape of the parameter tensor and understand that the gradient normally matches it."
    }
  ],

  practicalTask: {
    title: "Build a Gradient Descent Visualizer",

    objective:
      "Create a Python program that demonstrates how gradients guide optimization.",

    requirements: [
      "Define a differentiable function.",
      "Calculate its derivative.",
      "Choose an initial parameter.",
      "Perform gradient descent.",
      "Print the parameter after each iteration.",
      "Print the function value.",
      "Plot the optimization trajectory if possible."
    ]
  },

  summary: [
    "Derivatives measure local rates of change.",
    "The difference quotient provides an approximation to the derivative.",
    "Partial derivatives describe change with respect to individual variables.",
    "The gradient collects partial derivatives.",
    "The negative gradient points toward local decrease.",
    "Gradient descent uses the gradient to update parameters.",
    "The chain rule handles derivatives of composed functions.",
    "Deep networks are compositions of many functions.",
    "Computational graphs represent dependencies between computations.",
    "Backpropagation is based on applying the chain rule efficiently."
  ],

  keyTakeaways: [
    "Calculus explains how model outputs and losses change.",
    "Gradients provide the information needed for parameter updates.",
    "The chain rule is essential for deep neural networks.",
    "Linear algebra and calculus work together in gradient computation.",
    "Automatic differentiation later automates much of this derivative calculation."
  ],

  nextLesson: "Lesson 6 — Automatic Differentiation"
};

export default lesson5;