const lesson2 = {
  id: "lesson2",
  number: 2,
  title: "Convexity",

  description:
    "Understand convex sets, convex functions, Jensen's inequality, convex optimization geometry, Hessians, constraints, and why convexity provides useful theoretical foundations for optimization algorithms.",

  duration: "100–120 min",
  difficulty: "Advanced",

  prerequisites: [
    "Basic calculus",
    "Vectors",
    "Matrices",
    "Gradient concepts",
    "Optimization basics"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Study Convexity?",
      content: `
Deep-learning optimization problems are generally nonconvex.

So why spend time studying convex optimization?

Because convex problems provide a mathematical environment where optimization algorithms are easier to analyze.

Convexity helps us understand:

• Geometry of optimization
• Global versus local minima
• Gradient-based optimization
• Convergence
• Constraints
• Hessian-based conditions
• Why certain algorithms work
      `
    },

    {
      type: "concept",
      title: "1. Convex Sets",
      content: `
A set is convex if every line segment connecting two points inside the set remains entirely inside the set.

Let X be a set.

For any:

a ∈ X

and:

b ∈ X

the set is convex if:

λa + (1-λ)b ∈ X

for every:

λ ∈ [0,1]
      `
    },

    {
      type: "concept",
      title: "2. Geometric Intuition",
      content: `
Imagine selecting any two points inside a shape.

Draw a straight line between them.

If the entire line remains inside the shape, the shape satisfies the convex-set property.

If the line leaves the shape, the set is nonconvex.
      `
    },

    {
      type: "concept",
      title: "3. Examples of Convex Sets",
      content: `
Examples include:

• A line segment
• A rectangle
• A filled circle
• A half-space
• A convex polytope
• A linear subspace

Nonconvex examples can include:

• Shapes with holes
• Disconnected unions
• Crescent-shaped regions
• Many irregular regions
      `
    },

    {
      type: "concept",
      title: "4. Intersection of Convex Sets",
      content: `
If X and Y are convex sets, then:

X ∩ Y

is also convex.

The reason is that a line segment connecting two points belonging to both sets must remain inside both sets.

Therefore it also remains inside their intersection.
      `
    },

    {
      type: "concept",
      title: "5. Union Is Not Generally Convex",
      content: `
The union:

X ∪ Y

does not necessarily preserve convexity.

Two individually convex sets can form a nonconvex union if the connecting line between points from different components leaves the combined region.
      `
    },

    {
      type: "concept",
      title: "6. Convex Functions",
      content: `
A function f is convex if its graph lies below the straight line connecting any two points on the graph.

Mathematically:

f(λx + (1-λ)y)
≤
λf(x) + (1-λ)f(y)

for:

λ ∈ [0,1]
      `
    },

    {
      type: "concept",
      title: "7. Visual Intuition for a Convex Function",
      content: `
For a convex function, imagine drawing a chord between two points on its graph.

The function stays at or below that chord.

This gives convex functions their characteristic bowl-like geometry in simple cases.
      `
    },

    {
      type: "formula",
      title: "8. Convexity Definition",
      content: `
f(λx + (1-λ)y)
≤
λf(x) + (1-λ)f(y)

This inequality is the fundamental definition of convexity for a function.
      `
    },

    {
      type: "concept",
      title: "9. Strict Convexity",
      content: `
A strictly convex function satisfies:

f(λx + (1-λ)y)
<
λf(x) + (1-λ)f(y)

for distinct x and y and:

0 < λ < 1.

Strict convexity gives stronger geometric guarantees about minimizers.
      `
    },

    {
      type: "concept",
      title: "10. Local and Global Minima in Convex Functions",
      content: `
One of the most useful properties of convex functions is:

Every local minimum is also a global minimum.

Therefore convex optimization avoids one major difficulty of general nonconvex optimization.

A point that looks locally optimal cannot be a misleading local minimum separated from a better region elsewhere.
      `
    },

    {
      type: "concept",
      title: "11. First-Order Characterization",
      content: `
For a differentiable convex function:

f(y)
≥
f(x) + ∇f(x)ᵀ(y-x)

The tangent plane provides a global lower bound for the function.

This property is extremely useful for understanding gradient-based optimization.
      `
    },

    {
      type: "concept",
      title: "12. Gradient at an Interior Minimum",
      content: `
For a differentiable unconstrained convex function, if x* is a minimum, then:

∇f(x*) = 0

The gradient vanishes at the optimum.

Conversely, for a differentiable convex function, a point with zero gradient is a global minimum.
      `
    },

    {
      type: "concept",
      title: "13. Twice-Differentiable Convex Functions",
      content: `
For a twice-differentiable function, convexity can be characterized using the Hessian.

The Hessian contains second-order partial derivatives.

If the Hessian is positive semidefinite throughout the domain, the function is convex.
      `
    },

    {
      type: "formula",
      title: "14. Hessian Condition",
      content: `
For a twice-differentiable function:

f is convex

if:

∇²f(x) ⪰ 0

for all x in the domain.

Here:

∇²f(x)

is the Hessian matrix.

The notation:

A ⪰ 0

means A is positive semidefinite.
      `
    },

    {
      type: "concept",
      title: "15. Positive Semidefinite Matrix",
      content: `
A symmetric matrix H is positive semidefinite if:

vᵀHv ≥ 0

for every vector v.

This means the quadratic form generated by H never becomes negative.
      `
    },

    {
      type: "concept",
      title: "16. Example: Quadratic Function",
      content: `
Consider:

f(x) = x²

Its first derivative is:

f'(x) = 2x

Its second derivative is:

f''(x) = 2

Since:

2 > 0

the function is convex.
      `
    },

    {
      type: "concept",
      title: "17. Multivariate Quadratic",
      content: `
Consider:

f(x) = 1/2 xᵀAx

where A is symmetric.

If:

A ⪰ 0

then the quadratic function is convex.

Quadratic objectives are useful examples because their geometry can be analyzed precisely.
      `
    },

    {
      type: "concept",
      title: "18. Jensen's Inequality",
      content: `
For a convex function f:

f(E[X])
≤
E[f(X)]

This relationship is known as Jensen's inequality.

It connects convexity with expectations and appears throughout statistics, machine learning, and optimization.
      `
    },

    {
      type: "concept",
      title: "19. Why Jensen's Inequality Matters",
      content: `
Machine learning frequently deals with averages and expectations.

Convexity tells us how applying a convex function before or after averaging changes the result.

This becomes important in:

• Statistical estimation
• Risk analysis
• Loss functions
• Probabilistic modeling
• Optimization theory
      `
    },

    {
      type: "concept",
      title: "20. Convex Constraints",
      content: `
Optimization problems can contain constraints.

Example:

minimize f(x)

subject to:

x ∈ X

If X is convex and f is convex, the resulting optimization problem has useful structure.
      `
    },

    {
      type: "concept",
      title: "21. Linear Constraints",
      content: `
A set defined by linear equations can be convex.

For example:

X = {x | Wx = b}

is a convex set.

The line segment between any two solutions remains a solution.
      `
    },

    {
      type: "concept",
      title: "22. Inequality Constraints",
      content: `
Convex constraints can also be represented through convex functions.

For example:

g(x) ≤ 0

defines a convex feasible region when g is convex.

This provides a framework for constrained optimization.
      `
    },

    {
      type: "concept",
      title: "23. Lagrangian Intuition",
      content: `
Constraints can be incorporated into optimization through a Lagrangian formulation.

Conceptually:

Original objective
+
constraint-related terms

The associated multiplier controls the influence of the constraint.
      `
    },

    {
      type: "concept",
      title: "24. Penalty Methods",
      content: `
Another practical approach is to add a penalty for violating a constraint.

Conceptually:

new objective
=
original loss
+
λ × penalty

Increasing λ can make constraint violations more expensive.
      `
    },

    {
      type: "concept",
      title: "25. Projection",
      content: `
A projection maps a point to a feasible point in a constraint set.

Intuitively:

Current point
↓
Outside feasible region
↓
Projection
↓
Closest feasible point

Projection methods are useful in constrained optimization.
      `
    },

    {
      type: "concept",
      title: "26. Convexity and Gradient Descent",
      content: `
Gradient descent is particularly easy to analyze for convex objectives.

If the function is convex and the learning rate is appropriately chosen, gradient-based optimization can converge toward a global optimum under suitable assumptions.
      `
    },

    {
      type: "concept",
      title: "27. Convexity vs Deep Learning",
      content: `
Deep neural networks generally produce nonconvex objectives.

Therefore:

Convex theory:
provides strong guarantees.

Deep learning:
requires practical numerical optimization in nonconvex landscapes.

Convex analysis is still valuable because it provides intuition for optimization algorithms and their behavior.
      `
    },

    {
      type: "concept",
      title: "28. Why Nonconvex Optimization Is Harder",
      content: `
A nonconvex objective may contain:

• Multiple local minima
• Saddle points
• Flat regions
• Sharp regions
• Complex valleys

Therefore finding a globally optimal solution may be computationally difficult.
      `
    },

    {
      type: "code",
      language: "python",
      title: "Checking a Simple Convex Function",
      content: `
import torch

x = torch.linspace(
    -5,
    5,
    100
)

y = x ** 2

print("Minimum value:", y.min().item())
`
    },

    {
      type: "exercise",
      title: "Exercise — Convex Set",
      content: `
Consider:

X = {(x, y) | x >= 0, y >= 0}

Take two arbitrary points in X.

Show that:

λa + (1-λ)b

also satisfies the constraints for:

0 <= λ <= 1.

Explain why this demonstrates convexity.
      `
    },

    {
      type: "exercise",
      title: "Exercise — Convex Function",
      content: `
Consider:

f(x) = x²

Verify:

f(λx + (1-λ)y)
≤
λf(x) + (1-λ)f(y)

for selected numerical values.

Then explain the geometric interpretation.
      `
    },

    {
      type: "exercise",
      title: "Exercise — Hessian",
      content: `
For:

f(x,y)
=
x² + 2y²

calculate:

1. Gradient
2. Hessian
3. Eigenvalues of the Hessian

Use the Hessian to determine whether the function is convex.
      `
    },

    {
      type: "qa",
      question: "What is a convex set?",
      answer:
        "A set is convex if every line segment connecting any two points in the set remains inside the set."
    },

    {
      type: "qa",
      question: "What is a convex function?",
      answer:
        "A function is convex when its value at a weighted average of two points is no greater than the corresponding weighted average of the function values."
    },

    {
      type: "qa",
      question: "Why are convex optimization problems easier to analyze?",
      answer:
        "Their structure provides strong mathematical guarantees, including the property that every local minimum of a convex function is global."
    },

    {
      type: "qa",
      question: "What does a positive semidefinite Hessian indicate?",
      answer:
        "For a twice-differentiable function, a positive semidefinite Hessian throughout the domain is a characterization of convexity."
    },

    {
      type: "qa",
      question: "What is Jensen's inequality?",
      answer:
        "For a convex function, the function evaluated at an expectation is no greater than the expectation of the function."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Convexity provides a mathematical foundation for understanding optimization.

You studied:

• Convex sets
• Convex functions
• Strict convexity
• Local and global minima
• First-order convexity
• Hessian conditions
• Positive semidefinite matrices
• Jensen's inequality
• Convex constraints
• Lagrangian intuition
• Projection
• Convex versus nonconvex optimization

Although deep-learning objectives are generally nonconvex, convex optimization remains an important theoretical tool for understanding gradient-based algorithms.
      `
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Convexity gives optimization a favorable mathematical structure: for convex objectives, local minima are global minima, and gradient-based algorithms can be analyzed with strong theoretical guarantees."
    }
  ]
};

export default lesson2;