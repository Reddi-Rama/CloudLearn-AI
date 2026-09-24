const lesson8 = {
  id: "lesson8",
  moduleId: "module1",
  lessonNumber: 8,

  title: "Working with Documentation",

  subtitle:
    "Learning how to explore Python and PyTorch APIs efficiently",

  description:
    "Learn how to discover available functions and classes, inspect APIs, read documentation, and use documentation effectively when building deep learning programs.",

  estimatedTime: "3–4 hours",

  difficulty: "Beginner–Intermediate",

  learningObjectives: [
    "Understand why documentation is essential in deep learning.",
    "Understand Python module documentation.",
    "Use dir() to inspect modules and objects.",
    "Use help() to inspect functions and classes.",
    "Understand the difference between discovering an API and learning how to use it.",
    "Identify useful functions from a large module.",
    "Inspect function signatures and documentation.",
    "Use documentation to solve programming problems.",
    "Understand how API documentation changes over time.",
    "Develop an efficient documentation-reading workflow."
  ],

  sections: [
    {
      id: "importance",
      title: "1. Why Documentation Matters",

      content: `
Deep learning libraries contain thousands of functions, classes, methods, and utilities.

It is impossible to memorize all of them.

A strong developer therefore needs another skill:

knowing how to find and understand the information that is needed.

Documentation provides this information.

Instead of memorizing every API, you should learn how to:

• discover available functionality
• identify the correct function
• understand its parameters
• understand its return value
• find examples
• verify expected input shapes
• understand restrictions and behavior
`
    },

    {
      id: "api",
      title: "2. What Is an API?",

      content: `
An API, or Application Programming Interface, is the set of functions, classes, methods, and conventions that a software library exposes for programmers.

For example, PyTorch provides APIs for:

• tensors
• neural networks
• optimization
• automatic differentiation
• datasets
• probability distributions
• GPU computation

When you use:

torch.tensor()

you are using part of the PyTorch API.
`
    },

    {
      id: "module",
      title: "3. Python Modules",

      content: `
A Python module is a file or package containing reusable code.

For example:

import torch

After importing torch, the module exposes many objects.

These objects can include:

• functions
• classes
• constants
• submodules
• attributes

Before using an unfamiliar module, you can inspect what it provides.
`
    },

    {
      id: "dir",
      title: "4. Using dir()",

      content: `
Python provides the built-in dir() function for inspecting the names available in an object or module.

For example:

import torch

print(dir(torch))

This produces a list of names available through the torch module.

This is useful when you know the general library you need but are unsure which function or class provides the required functionality.
`
    },

    {
      id: "dir-purpose",
      title: "5. What dir() Tells You",

      content: `
dir() is primarily a discovery tool.

It can help answer:

"What is available here?"

For example, after:

import torch

you might want to discover whether torch contains functionality related to:

• random numbers
• tensors
• mathematical operations
• neural network utilities
• distributions

dir() gives you the names that you can investigate further.
`
    },

    {
      id: "special-names",
      title: "6. Interpreting Names Returned by dir()",

      content: `
The output of dir() may contain names beginning with underscores.

Some names represent internal implementation details or special Python behavior.

When exploring a module, it is often useful to first focus on ordinary public-looking names.

For example:

tensor

is immediately interesting.

A name surrounded by double underscores is usually a special Python object or mechanism rather than the first thing a beginner needs to investigate.
`
    },

    {
      id: "help",
      title: "7. Using help()",

      content: `
After discovering a function or class, you need to learn how it works.

Python provides:

help()

For example:

help(torch.tensor)

This displays documentation describing the object.

help() therefore answers a different question from dir().

dir():

"What exists?"

help():

"How does this object work?"
`
    },

    {
      id: "dir-vs-help",
      title: "8. dir() vs help()",

      content: `
The two tools have different purposes.

dir()
→ Discover available names.

help()
→ Read detailed information about a particular object.

A practical workflow is:

Import module
↓
Use dir()
↓
Identify promising function/class
↓
Use help()
↓
Read parameters and behavior
↓
Write a small test
↓
Use the API in the project
`
    },

    {
      id: "function-documentation",
      title: "9. Understanding Function Documentation",

      content: `
When reading documentation for a function, look for:

1. Function name
2. Parameters
3. Parameter types
4. Default values
5. Return value
6. Expected input
7. Optional arguments
8. Important restrictions
9. Examples
10. Related functions

Do not immediately copy code.

First understand what the function expects and what it returns.
`
    },

    {
      id: "parameters",
      title: "10. Understanding Parameters",

      content: `
A parameter controls how a function behaves.

For example, a function may accept:

input

and optional arguments such as:

dimension
keep_dimension
device
dtype

When reading documentation, determine:

• which parameters are required
• which are optional
• what type each parameter expects
• what the default behavior is
`
    },

    {
      id: "return",
      title: "11. Understanding Return Values",

      content: `
A function may return:

• a number
• a tensor
• a string
• a list
• a dictionary
• an object
• multiple values

Understanding the return type is essential.

For example, if a function returns a tensor, you should know its:

• shape
• data type
• device
• semantic meaning
`
    },

    {
      id: "tensor-docs",
      title: "12. Documentation and Tensor Operations",

      content: `
Deep learning involves frequent tensor operations.

Before using an unfamiliar tensor operation, check:

• input requirements
• supported dimensions
• output shape
• data type behavior
• device behavior
• optional parameters

This prevents many shape and runtime errors.
`
    },

    {
      id: "example-discovery",
      title: "13. Example: Discovering a Function",

      content: `
Suppose you want to generate random values but do not remember the exact PyTorch function.

Start with the module:

import torch

Then inspect it:

dir(torch)

Search the names for functions related to random generation.

Once you identify a likely candidate, inspect it:

help(torch.rand)

Now you can understand how the function should be called.
`
    },

    {
      id: "documentation-workflow",
      title: "14. Documentation Workflow",

      content: `
A professional workflow looks like this:

Step 1
Identify the task.

Step 2
Identify the library or module.

Step 3
Search the module.

Step 4
Inspect candidate functions/classes.

Step 5
Read the API documentation.

Step 6
Check examples.

Step 7
Create a tiny experiment.

Step 8
Verify the output.

Step 9
Integrate it into the project.

Step 10
Document important assumptions.

This workflow is much more scalable than memorizing APIs.
`
    },

    {
      id: "official-docs",
      title: "15. Official Documentation",

      content: `
Libraries evolve.

Functions can gain new parameters.

Defaults can change.

Some APIs can become deprecated.

Therefore, documentation should be treated as a living source of information.

When working with a library, prefer the documentation corresponding to the version you are actually using.

This is especially important for rapidly evolving machine learning frameworks.
`
    },

    {
      id: "documentation-vs-search",
      title: "16. Documentation vs Searching for Code",

      content: `
Searching the internet can help find examples.

However, an example alone may not explain:

• why a parameter exists
• what its default is
• what shapes are accepted
• what version introduced the feature
• whether the behavior has changed

Documentation gives the authoritative API description.

Use examples to understand usage.

Use documentation to verify behavior.
`
    },

    {
      id: "small-experiments",
      title: "17. Verify With Small Experiments",

      content: `
Documentation should be combined with experimentation.

Suppose you are unsure about the output shape of an operation.

Do not guess.

Create a tiny test:

Create small input
↓
Call operation
↓
Print output
↓
Print shape
↓
Compare with documentation

Small experiments are one of the fastest ways to understand unfamiliar APIs.
`
    },

    {
      id: "shape-checking",
      title: "18. Documentation and Tensor Shapes",

      content: `
Tensor shape mistakes are common in deep learning.

For every important operation, ask:

What is the input shape?

What is the output shape?

Which dimension is being operated on?

Does the operation preserve dimensions?

Does it reduce dimensions?

Documentation often provides the information needed to answer these questions.
`
    },

    {
      id: "version-awareness",
      title: "19. Version Awareness",

      content: `
A program can fail even when an example appears correct if the example was written for a different library version.

Therefore, developers should know:

• library version
• Python version
• relevant package versions
• whether an API is deprecated
• whether behavior differs between versions

This is especially important when reproducing tutorials or older projects.
`
    },

    {
      id: "reading-efficiently",
      title: "20. How to Read Documentation Efficiently",

      content: `
You do not always need to read an entire documentation page.

Start with the information required for your current problem.

Look for:

• function signature
• parameters
• return value
• examples
• notes
• warnings

Then experiment.

If something remains unclear, investigate the relevant section more deeply.
`
    },

    {
      id: "documentation-skill",
      title: "21. Documentation as a Developer Skill",

      content: `
A strong developer does not necessarily remember every API.

Instead, they know how to find reliable information quickly.

This is an important distinction.

Weak approach:

"I don't remember this function, so I cannot continue."

Strong approach:

"I don't remember this function, so I will inspect the API and verify the behavior."

Documentation therefore becomes part of programming itself.
`
    },

    {
      id: "deep-learning",
      title: "22. Documentation in Deep Learning",

      content: `
As you progress through deep learning, you will encounter APIs for:

• tensor operations
• datasets
• data loaders
• neural network layers
• loss functions
• optimizers
• GPU operations
• image processing
• sequence models
• transformers
• computer vision

You cannot realistically memorize every API.

The ability to explore documentation becomes increasingly important as models become more complex.
`
    },

    {
      id: "module1-connection",
      title: "23. Connecting This Lesson to Module 1",

      content: `
Module 1 has introduced the mathematical and programming foundations needed for deep learning.

You have learned:

Data
↓
Tensors
↓
Preprocessing
↓
Linear Algebra
↓
Calculus
↓
Automatic Differentiation
↓
Probability and Statistics
↓
Documentation

Documentation connects all of these topics to practical software development.

You now have the foundation required to start implementing machine learning models.
`
    },

    {
      id: "professional-workflow",
      title: "24. Professional Problem-Solving Workflow",

      content: `
When you encounter an unfamiliar deep learning problem:

Understand the problem
↓
Identify the required operation
↓
Choose the appropriate library
↓
Inspect the API
↓
Read documentation
↓
Build a minimal experiment
↓
Check shapes and values
↓
Debug
↓
Integrate into the model
↓
Test
↓
Document the solution

This workflow will remain useful throughout your deep learning career.
`
    }
  ],

  codeExamples: [
    {
      title: "Inspect a Module",
      language: "python",

      code: `import torch

names = dir(torch)

print(names[:30])`,

      explanation:
        "Uses dir() to inspect the names exposed by the torch module."
    },

    {
      title: "Inspect a Specific Object",
      language: "python",

      code: `import torch

print(dir(torch.tensor))`,

      explanation:
        "Shows the attributes and methods associated with the tensor constructor/object."
    },

    {
      title: "Use help()",
      language: "python",

      code: `import torch

help(torch.tensor)`,

      explanation:
        "Displays the documentation available for torch.tensor."
    },

    {
      title: "Inspect a Tensor",
      language: "python",

      code: `import torch

x = torch.randn(3, 4)

print("Shape:", x.shape)
print("Dtype:", x.dtype)
print("Device:", x.device)`,

      explanation:
        "A small experiment can verify important properties of an object before using it in a larger model."
    },

    {
      title: "Documentation-Driven Experiment",
      language: "python",

      code: `import torch

x = torch.arange(
    12
).reshape(3, 4)

print("Input:")
print(x)

print("Shape:")
print(x.shape)

result = x.sum(
    dim=1
)

print("Result:")
print(result)

print("Result shape:")
print(result.shape)`,

      explanation:
        "Demonstrates the practice of checking both values and shapes when learning an unfamiliar operation."
    },

    {
      title: "Find Tensor Methods",
      language: "python",

      code: `import torch

x = torch.tensor([
    1.0,
    2.0,
    3.0
])

print(
    [
        name
        for name in dir(x)
        if not name.startswith("_")
    ]
)`,

      explanation:
        "Filters out many internal names so that public-looking tensor methods are easier to inspect."
    }
  ],

  practicalWorkflow: [
    "Identify the programming problem.",
    "Identify the library or module.",
    "Inspect available names with dir().",
    "Select a likely function or class.",
    "Inspect it using help().",
    "Read its parameters and return behavior.",
    "Create a small experiment.",
    "Inspect values and tensor shapes.",
    "Verify the result.",
    "Use the operation in the real project."
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "What is the purpose of documentation in a deep learning library?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "What does Python's dir() function do?"
    },

    {
      id: "ex3",
      difficulty: "Easy",
      question:
        "What does help() do?"
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "Explain the difference between dir() and help()."
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "Why should you check tensor shapes when using an unfamiliar operation?"
    },

    {
      id: "ex6",
      difficulty: "Medium",
      question:
        "Why is version awareness important when following machine learning tutorials?"
    },

    {
      id: "ex7",
      difficulty: "Hard",
      question:
        "Design a workflow for learning an unfamiliar PyTorch function without copying code blindly."
    },

    {
      id: "ex8",
      difficulty: "Hard",
      question:
        "Explain why documentation-reading is an important skill for deep learning developers."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Explore torch",
      task:
        "Use dir(torch) and identify at least ten useful public-looking functions or objects."
    },

    {
      id: "code2",
      title: "Explore Tensor APIs",
      task:
        "Create a tensor and use dir() to find methods related to mathematical operations."
    },

    {
      id: "code3",
      title: "Use help()",
      task:
        "Use help() to investigate torch.arange, torch.reshape, and torch.sum."
    },

    {
      id: "code4",
      title: "Shape Investigation",
      task:
        "Experiment with several tensor operations and record their input and output shapes."
    },

    {
      id: "code5",
      title: "Documentation Notebook",
      task:
        "Create a Python notebook containing five unfamiliar PyTorch operations. For each operation, record what it does, its important parameters, input shape, output shape, and a working example."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "A developer uses a function without checking its required parameters.",
      task:
        "Use help() to identify the expected arguments and correct the call."
    },

    {
      id: "debug2",
      problem:
        "A tensor operation returns an unexpected shape.",
      task:
        "Inspect the operation's documentation and compare the input and output dimensions."
    },

    {
      id: "debug3",
      problem:
        "A tutorial example does not work in the current environment.",
      task:
        "Check the installed library version and compare it with the version used by the tutorial."
    }
  ],

  practicalTask: {
    title: "Build a PyTorch API Explorer",

    objective:
      "Create a small Python utility that helps you inspect PyTorch APIs.",

    requirements: [
      "Import PyTorch.",
      "Allow a user to specify an object name.",
      "Display whether the requested object exists.",
      "Use dir() for module exploration.",
      "Use help() for selected objects.",
      "Filter internal names.",
      "Display useful public-looking names.",
      "Create at least three example explorations.",
      "Record what you learned from each API."
    ]
  },

  summary: [
    "Documentation is essential because deep learning libraries contain many APIs.",
    "An API exposes functions, classes, methods, and other reusable functionality.",
    "dir() helps discover names available in a module or object.",
    "help() provides detailed information about a specific function or class.",
    "Documentation should be combined with small experiments.",
    "Tensor shapes and parameter requirements should be checked carefully.",
    "Library versions can affect API behavior.",
    "Examples are useful, but documentation should be used to verify behavior.",
    "Documentation skills become increasingly important as deep learning systems become more complex."
  ],

  keyTakeaways: [
    "You do not need to memorize every PyTorch API.",
    "You need to know how to discover and understand APIs.",
    "Use dir() for exploration.",
    "Use help() for detailed information.",
    "Verify unfamiliar behavior with small experiments.",
    "Always pay attention to parameters, return values, shapes, and versions.",
    "Documentation is a core professional programming skill."
  ],

  moduleCompletion: {
    title: "Module 1 Complete",

    message:
      "You have completed the mathematical, computational, and practical foundations required to begin studying neural networks and deep learning models.",

    skillsCompleted: [
      "Deep learning fundamentals",
      "Tensor manipulation",
      "Data preprocessing",
      "Linear algebra",
      "Calculus",
      "Automatic differentiation",
      "Probability and statistics",
      "Technical documentation and API exploration"
    ]
  },

  nextLesson: "Module 2 — Neural Networks and Learning"
};

export default lesson8;