const lesson6 = {
  id: "lesson6",
  moduleId: "module1",
  lessonNumber: 6,

  title: "Automatic Differentiation",

  subtitle:
    "Letting deep learning frameworks compute gradients automatically",

  description:
    "Understand computational graphs, autograd, backward propagation, gradient accumulation, non-scalar outputs, detaching computation, and control flow.",

  estimatedTime: "4–5 hours",

  difficulty: "Intermediate",

  learningObjectives: [
    "Understand why manual differentiation becomes difficult.",
    "Understand automatic differentiation.",
    "Understand computational graphs.",
    "Understand forward computation.",
    "Understand backward computation.",
    "Use requires_grad.",
    "Use backward().",
    "Read gradients using .grad.",
    "Understand gradient accumulation.",
    "Clear gradients correctly.",
    "Understand backward for non-scalar outputs.",
    "Understand detaching computation.",
    "Understand gradients through Python control flow.",
    "Connect autograd to backpropagation."
  ],

  sections: [
    {
      id: "motivation",
      title: "1. Why Automatic Differentiation Is Needed",

      content: `
Calculating derivatives manually is possible for small mathematical functions.

However, modern neural networks can contain:

• thousands of operations
• millions or billions of parameters
• nested functions
• matrix operations
• activation functions
• branching logic

Manually deriving every gradient would be tedious and error-prone.

Deep learning frameworks therefore provide automatic differentiation.
`
    },

    {
      id: "definition",
      title: "2. What Is Automatic Differentiation?",

      content: `
Automatic differentiation, often called autograd, is a mechanism that calculates derivatives automatically.

The framework tracks mathematical operations performed on tensors.

It records how one value depends on another.

This creates a computational graph.

When the gradient is requested, the framework traverses the graph backward and applies the chain rule.
`
    },

    {
      id: "computational-graph",
      title: "3. Computational Graph",

      content: `
Suppose:

u = f(x)

and:

y = g(u)

The dependency graph is:

x
↓
u
↓
y

The forward computation evaluates:

x → u → y

The backward computation evaluates derivative information in the opposite direction:

y → u → x

This is the basic structure behind backpropagation.
`
    },

    {
      id: "requires-grad",
      title: "4. Tracking Gradients",

      content: `
A tensor must be configured so that its gradient can be tracked.

In PyTorch this can be done with:

requires_grad=True

For example:

x = torch.tensor(
    2.0,
    requires_grad=True
)

Now operations involving x can be recorded for gradient computation.
`
    },

    {
      id: "simple-function",
      title: "5. A Simple Function",

      content: `
Consider:

y = x²

If:

x = 3

then:

y = 9

The derivative is:

dy/dx = 2x

Therefore:

dy/dx = 6

Autograd can calculate this automatically.
`
    },

    {
      id: "backward",
      title: "6. Calling backward()",

      content: `
For a scalar output, PyTorch can compute gradients using:

y.backward()

After this operation, the gradient of y with respect to a tracked tensor can be accessed through:

x.grad

The framework has automatically applied the chain rule through the operations that produced y.
`
    },

    {
      id: "gradient-buffer",
      title: "7. Gradient Storage",

      content: `
Gradients are stored in the tensor's gradient attribute.

For example:

x.grad

contains the gradient accumulated for x.

An important behavior is that gradients can accumulate across backward calls.

Therefore, training code normally clears or resets gradients before calculating the next update.
`
    },

    {
      id: "accumulation",
      title: "8. Gradient Accumulation",

      content: `
Suppose the same tensor participates in multiple backward computations.

The new gradient can be added to the existing gradient.

This behavior can be useful when several objectives contribute to one parameter.

However, during ordinary training, gradients usually need to be reset between optimization steps.

Otherwise old gradients can incorrectly influence later updates.
`
    },

    {
      id: "zero-grad",
      title: "9. Clearing Gradients",

      content: `
Before computing a new gradient, training code commonly clears the previous gradient.

A common pattern is:

optimizer.zero_grad()

followed by:

loss.backward()

and then:

optimizer.step()

This creates the basic training cycle:

Clear Gradients
↓
Forward Pass
↓
Calculate Loss
↓
Backward Pass
↓
Update Parameters
`
    },

    {
      id: "non-scalar",
      title: "10. Backward for Non-Scalar Outputs",

      content: `
The simplest backward call is used when the output is scalar.

But neural networks frequently produce vectors or matrices.

A vector-valued output does not have one single ordinary derivative with respect to another vector.

Instead, a suitable gradient argument can be supplied to backward.

Conceptually, this computes a weighted combination of the derivatives of the output components.
`
    },

    {
      id: "jacobian-intuition",
      title: "11. Jacobian Intuition",

      content: `
For a vector-valued function:

y = f(x)

the derivative can be represented by a matrix called the Jacobian.

Each entry describes how one output component changes with respect to one input component.

Deep learning frameworks often avoid explicitly constructing the full Jacobian when it is unnecessary.

Instead, they efficiently compute vector-Jacobian products or related quantities.
`
    },

    {
      id: "detach",
      title: "12. Detaching Computation",

      content: `
Sometimes we want a tensor to be treated as a constant for a later computation.

PyTorch provides:

detach()

The detached tensor shares the underlying data but is no longer connected to the previous computation graph for gradient propagation.

This can be useful when we want to stop gradients from flowing through part of a computation.
`
    },

    {
      id: "detach-example",
      title: "13. Why Detaching Can Be Useful",

      content: `
Suppose:

x
↓
Network A
↓
h
↓
Network B
↓
loss

Normally, gradients can flow from the loss through Network B and then Network A.

If h is detached before entering Network B:

x
↓
Network A
↓
h
× gradient connection
↓
Network B
↓
loss

gradients from the loss will not propagate backward through h into Network A.
`
    },

    {
      id: "control-flow",
      title: "14. Automatic Differentiation and Python Control Flow",

      content: `
A useful property of dynamic automatic differentiation systems is that the computational graph can reflect the operations actually executed.

Python control flow can therefore influence which operations are recorded.

For example:

if x > 0:
    y = x²
else:
    y = -x

The executed branch contributes to the current computation graph.

The resulting graph can therefore depend on the runtime values.
`
    },

    {
      id: "dynamic-graphs",
      title: "15. Dynamic Computational Graphs",

      content: `
A dynamic computational graph is constructed as operations execute.

This is convenient because ordinary Python programming structures can be used to define computations.

The graph does not have to be completely specified in advance.

This allows models to contain:

• loops
• conditions
• variable computation paths
• custom operations
`
    },

    {
      id: "forward",
      title: "16. Forward Computation",

      content: `
During forward computation, values are calculated from inputs toward outputs.

For a neural network:

Input
↓
Layer
↓
Activation
↓
Layer
↓
Prediction
↓
Loss

Intermediate values may be retained because they are needed when gradients are computed later.
`
    },

    {
      id: "backward",
      title: "17. Backward Computation",

      content: `
Backward computation proceeds from the output toward earlier variables.

For example:

Loss
↓
Prediction
↓
Hidden Layer
↓
Input

At each step, the chain rule combines local derivative information with the gradient arriving from later operations.
`
    },

    {
      id: "backpropagation",
      title: "18. Automatic Differentiation and Backpropagation",

      content: `
Backpropagation is a procedure for efficiently applying the chain rule through a computational graph.

Automatic differentiation provides the machinery that constructs and traverses these derivative relationships.

Therefore:

Calculus
+
Chain Rule
+
Computational Graph
+
Automatic Differentiation

form the practical foundation for gradient computation in neural networks.
`
    },

    {
      id: "memory",
      title: "19. Why Training Requires Extra Memory",

      content: `
During training, the framework may need to retain intermediate values from the forward computation.

Those values can be required for the backward computation.

Therefore, training generally requires more memory than simply performing prediction.

Deeper networks and larger batches can increase the amount of intermediate information that must be retained.
`
    },

    {
      id: "autograd-workflow",
      title: "20. Complete Autograd Workflow",

      content: `
The basic workflow is:

Create Tensor
↓
Enable Gradient Tracking
↓
Perform Operations
↓
Build Computational Graph
↓
Calculate Scalar Loss
↓
Call backward()
↓
Read Gradients
↓
Update Parameters
↓
Clear Gradients
↓
Repeat
`
    }
  ],

  codeExamples: [
    {
      title: "Basic Autograd",
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
        "PyTorch automatically calculates the derivative of x² at x = 3."
    },

    {
      title: "Vector Gradient",
      language: "python",

      code: `import torch

x = torch.arange(
    4.0,
    requires_grad=True
)

y = 2 * torch.dot(x, x)

y.backward()

print(x)
print(x.grad)`,

      output: `tensor([0., 1., 2., 3.], requires_grad=True)
tensor([ 0.,  4.,  8., 12.])`,

      explanation:
        "Calculates the gradient of a scalar function with respect to a vector."
    },

    {
      title: "Gradient Accumulation",
      language: "python",

      code: `import torch

x = torch.tensor(
    2.0,
    requires_grad=True
)

y = x ** 2
y.backward()

print(x.grad)

z = 3 * x
z.backward()

print(x.grad)`,

      explanation:
        "Demonstrates that gradients can accumulate across backward calls."
    },

    {
      title: "Clearing Gradients",
      language: "python",

      code: `import torch

x = torch.tensor(
    2.0,
    requires_grad=True
)

y = x ** 2
y.backward()

print(x.grad)

x.grad.zero_()

print(x.grad)`,

      explanation:
        "Shows how a stored gradient can be cleared."
    },

    {
      title: "Detach a Tensor",
      language: "python",

      code: `import torch

x = torch.tensor(
    2.0,
    requires_grad=True
)

y = x ** 2
z = y.detach()

print(y.requires_grad)
print(z.requires_grad)`,

      output: `True
False`,

      explanation:
        "The detached tensor is no longer connected to the previous gradient computation."
    },

    {
      title: "Gradient Through Control Flow",
      language: "python",

      code: `import torch

x = torch.tensor(
    2.0,
    requires_grad=True
)

if x > 0:
    y = x ** 2
else:
    y = -x

y.backward()

print(x.grad)`,

      output: `tensor(4.)`,

      explanation:
        "The executed Python branch participates in the dynamic computation."
    },

    {
      title: "Simple Training Pattern",
      language: "python",

      code: `import torch

w = torch.tensor(
    1.0,
    requires_grad=True
)

for step in range(5):

    loss = (w - 5) ** 2

    loss.backward()

    with torch.no_grad():
        w -= 0.1 * w.grad

    w.grad.zero_()

    print(
        step,
        w.item(),
        loss.item()
    )`,

      explanation:
        "Demonstrates the basic relationship between forward computation, backward computation, gradient update, and gradient clearing."
    }
  ],

  practicalWorkflow: [
    "Create trainable parameters.",
    "Perform forward computations.",
    "Calculate a loss.",
    "Call backward().",
    "Inspect gradients.",
    "Update parameters.",
    "Clear gradients.",
    "Repeat."
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "What problem does automatic differentiation solve?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "What does requires_grad=True mean?"
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "What happens when backward() is called on a scalar output?"
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "Why do gradients need to be cleared during normal training?"
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "What does detach() do?"
    },

    {
      id: "ex6",
      difficulty: "Hard",
      question:
        "Explain how automatic differentiation uses a computational graph."
    },

    {
      id: "ex7",
      difficulty: "Hard",
      question:
        "Explain the relationship between the chain rule, autograd, and backpropagation."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Autograd Calculator",
      task:
        "Create a program that calculates the gradient of several scalar functions."
    },

    {
      id: "code2",
      title: "Vector Gradient",
      task:
        "Calculate the gradient of a scalar function with respect to a vector."
    },

    {
      id: "code3",
      title: "Gradient Accumulation Experiment",
      task:
        "Run multiple backward operations and observe gradient accumulation."
    },

    {
      id: "code4",
      title: "Detach Experiment",
      task:
        "Create a computation graph and compare gradients before and after detach()."
    },

    {
      id: "code5",
      title: "Mini Gradient Trainer",
      task:
        "Implement a small parameter-learning loop using autograd."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "x.grad is None after a computation.",
      task:
        "Check whether x was configured to track gradients."
    },

    {
      id: "debug2",
      problem:
        "The gradient becomes larger after every iteration.",
      task:
        "Check whether the old gradient is being cleared."
    },

    {
      id: "debug3",
      problem:
        "Calling backward() fails for a vector output.",
      task:
        "Explain why a non-scalar output requires additional gradient information."
    },

    {
      id: "debug4",
      problem:
        "A model component stops receiving gradients unexpectedly.",
      task:
        "Check whether a tensor was detached."
    }
  ],

  practicalTask: {
    title: "Build a Mini Autograd Experiment",

    objective:
      "Use PyTorch autograd to study how gradients change for different mathematical functions.",

    requirements: [
      "Create at least three differentiable functions.",
      "Use requires_grad.",
      "Call backward().",
      "Display gradients.",
      "Experiment with multiple variables.",
      "Experiment with gradient accumulation.",
      "Clear gradients.",
      "Experiment with detach().",
      "Use at least one Python conditional."
    ]
  },

  summary: [
    "Automatic differentiation calculates derivatives automatically.",
    "Deep learning frameworks construct computational graphs from operations.",
    "Forward computation evaluates values from inputs to outputs.",
    "Backward computation propagates derivative information toward inputs.",
    "backward() triggers gradient computation for suitable outputs.",
    "Gradients are stored in .grad.",
    "Gradients can accumulate.",
    "Training code normally clears gradients before the next update.",
    "detach() stops gradient propagation through a tensor.",
    "Dynamic control flow can participate in automatic differentiation.",
    "Autograd provides the practical machinery behind gradient-based training."
  ],

  keyTakeaways: [
    "Autograd removes much of the burden of manual differentiation.",
    "Computational graphs capture dependencies between operations.",
    "The chain rule is applied backward through the graph.",
    "Gradient accumulation must be managed carefully.",
    "Detaching is useful when gradient propagation should stop.",
    "Understanding autograd is essential before implementing neural network training."
  ],

  nextLesson: "Lesson 7 — Probability and Statistics"
};

export default lesson6;