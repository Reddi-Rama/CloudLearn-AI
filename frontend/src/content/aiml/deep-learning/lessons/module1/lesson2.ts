const lesson2 = {
  id: "lesson2",
  moduleId: "module1",
  lessonNumber: 2,

  title: "Data Manipulation with Tensors",

  subtitle:
    "Understanding tensors, shapes, indexing, slicing, operations, broadcasting, and numerical data manipulation",

  description:
    "Learn how PyTorch tensors represent numerical data and how they are manipulated throughout deep learning systems.",

  estimatedTime: "3–4 hours",

  difficulty: "Beginner",

  learningObjectives: [
    "Understand tensors.",
    "Understand scalars, vectors, matrices, and higher-dimensional tensors.",
    "Create tensors using PyTorch.",
    "Understand tensor shape.",
    "Count tensor elements.",
    "Understand tensor data types.",
    "Reshape tensors.",
    "Use indexing.",
    "Use slicing.",
    "Modify tensor values.",
    "Perform elementwise operations.",
    "Perform reductions.",
    "Understand broadcasting.",
    "Understand memory considerations.",
    "Convert tensors to Python objects.",
    "Convert tensors between PyTorch and NumPy."
  ],

  sections: [
    {
      id: "why-tensors",
      title: "1. Why Do We Need Tensors?",

      content: `
Deep learning systems perform a very large number of numerical operations.

Images contain numerical pixel values.

Audio can be represented by numerical samples.

Model parameters are numerical values.

Predictions are numerical values.

Gradients are numerical values.

Therefore, deep learning frameworks require efficient structures for storing and manipulating numerical data.

The tensor is the fundamental numerical structure used by modern deep learning frameworks.

A tensor can be understood as a multidimensional array of numerical values.
`
    },

    {
      id: "pytorch",
      title: "2. PyTorch Tensors",

      content: `
PyTorch provides the Tensor data structure for numerical computation.

The library can be imported using:

import torch

PyTorch tensors are similar to NumPy arrays, but they provide functionality particularly useful for deep learning.

Important capabilities include:

• numerical operations
• automatic differentiation
• hardware acceleration
• neural network integration

These capabilities make tensors central to PyTorch-based deep learning.
`
    },

    {
      id: "scalar",
      title: "3. Scalars",

      content: `
A scalar contains a single numerical value.

Examples include:

5

3.14

-2

A scalar can be represented in PyTorch as a zero-dimensional tensor.

A scalar can represent:

• a loss value
• a learning rate
• a threshold
• a single parameter
• a probability
`
    },

    {
      id: "vector",
      title: "4. Vectors",

      content: `
A vector contains values along one axis.

Example:

[2, 4, 6, 8]

A vector is a one-dimensional tensor.

Its shape is:

(4)

Vectors are commonly used for:

• feature vectors
• parameter vectors
• embeddings
• predictions
`
    },

    {
      id: "matrix",
      title: "5. Matrices",

      content: `
A matrix has two dimensions.

For example:

[1 2 3]
[4 5 6]

This matrix contains:

2 rows

and:

3 columns

Its shape is:

(2, 3)

Matrices are fundamental to neural network computation because many transformations can be expressed through matrix operations.
`
    },

    {
      id: "higher-dimensional",
      title: "6. Higher-Dimensional Tensors",

      content: `
Tensors can contain three or more dimensions.

For example:

(2, 3, 4)

contains:

2 × 3 × 4 = 24 elements.

Higher-dimensional tensors are common in deep learning.

A batch of RGB images may use:

(batch, channels, height, width)

For example:

(32, 3, 224, 224)

can represent:

32 images
3 channels
224 height
224 width

The meaning of each dimension depends on the application.
`
    },

    {
      id: "creation",
      title: "7. Creating Tensors",

      content: `
PyTorch provides several tensor creation operations.

A tensor can be created from explicit values.

A sequence of values can be created using arange.

Tensors filled with zeros can be created using zeros.

Tensors filled with ones can be created using ones.

Random tensors can be created using randn.

The choice depends on what the tensor represents and how it will be used.
`
    },

    {
      id: "shape",
      title: "8. Shape",

      content: `
The shape describes the size of every tensor dimension.

For example:

(3, 4)

means:

3 elements along one axis

and:

4 elements along another axis.

The total number of elements is:

3 × 4 = 12

Understanding tensor shapes is one of the most important practical skills in deep learning programming.
`
    },

    {
      id: "numel",
      title: "9. Number of Elements",

      content: `
The number of elements tells us how many individual values are stored in a tensor.

For a tensor with shape:

(3, 4)

the number of elements is:

12

For:

(2, 3, 4)

the number is:

24

PyTorch provides numel() for obtaining this value.

This becomes particularly important when reshaping tensors.
`
    },

    {
      id: "reshape",
      title: "10. Reshaping",

      content: `
Reshaping changes the organization of elements without changing the total number of elements.

Suppose a tensor contains 12 values.

It can be reshaped into:

(3, 4)

because:

3 × 4 = 12

It can also be reshaped into:

(2, 6)

because:

2 × 6 = 12

But it cannot be reshaped into:

(5, 3)

because:

5 × 3 = 15

The number of elements must remain unchanged.
`
    },

    {
      id: "inference",
      title: "11. Inferring a Dimension",

      content: `
A dimension can be inferred automatically by using -1 during reshape.

If a tensor contains 12 elements:

reshape(-1, 4)

allows PyTorch to calculate the missing dimension.

Since:

12 ÷ 4 = 3

the resulting shape is:

(3, 4)

Similarly:

reshape(3, -1)

also produces:

(3, 4)

Only one dimension should normally be inferred.
`
    },

    {
      id: "indexing",
      title: "12. Indexing",

      content: `
Indexing allows individual elements or substructures to be selected.

Consider a matrix:

[10 20 30]
[40 50 60]

The first row is selected using index 0.

The second row is selected using index 1.

A specific element can be selected using both its row and column index.

PyTorch uses zero-based indexing, following Python conventions.
`
    },

    {
      id: "slicing",
      title: "13. Slicing",

      content: `
Slicing selects a range of elements.

For a one-dimensional tensor, a slice specifies a starting index and an ending boundary.

For a matrix, slicing can be performed across multiple dimensions.

For example, a slice can select:

• particular rows
• particular columns
• a rectangular region
• a portion of a sequence

Slicing is extremely useful when working with batches, images, features, and sequences.
`
    },

    {
      id: "assignment",
      title: "14. Updating Values",

      content: `
Tensor values can be modified through indexing.

For example, an individual element can be replaced.

A range of elements can also be assigned a new value.

However, in-place modification requires care when automatic differentiation is involved.

Later lessons will explain why changing values that participate in gradient computation can sometimes cause problems.
`
    },

    {
      id: "elementwise",
      title: "15. Elementwise Operations",

      content: `
Elementwise operations apply independently to corresponding elements.

Suppose:

x = [1, 2, 3]

and:

y = [4, 5, 6]

Then:

x + y

produces:

[5, 7, 9]

Elementwise multiplication produces:

[4, 10, 18]

These operations are different from matrix multiplication.

Understanding this distinction is essential when working with neural network calculations.
`
    },

    {
      id: "unary",
      title: "16. Unary Operations",

      content: `
Unary operations act on one tensor.

Examples include:

• absolute value
• square root
• exponential
• logarithm
• trigonometric functions

These operations are basic building blocks for more complicated numerical computations.
`
    },

    {
      id: "concatenation",
      title: "17. Concatenation",

      content: `
Tensors can be joined together along a specified dimension.

For example, two matrices with compatible shapes can be concatenated along the row dimension or column dimension.

Concatenation is useful when combining:

• batches
• feature groups
• channels
• intermediate representations

The dimensions that are not being concatenated must be compatible.
`
    },

    {
      id: "comparison",
      title: "18. Comparison Operations",

      content: `
Tensor values can be compared element by element.

Common comparisons include:

greater than
less than
equal to
greater than or equal to
less than or equal to
not equal to

These comparisons produce Boolean-style results.

They are useful for:

• filtering
• masks
• conditional processing
• data inspection
• debugging
`
    },

    {
      id: "reduction",
      title: "19. Reduction Operations",

      content: `
A reduction combines multiple values into fewer values.

Common reductions include:

sum
mean
minimum
maximum

For example, the sum of:

[1, 2, 3, 4]

is:

10

The mean is:

2.5

Reduction operations are frequently used when calculating statistics and loss values.
`
    },

    {
      id: "dimension-reduction",
      title: "20. Reduction Along Dimensions",

      content: `
For multidimensional tensors, reductions can be performed along particular dimensions.

Consider a matrix with rows and columns.

Reducing along one dimension can produce a summary for each remaining dimension.

This concept is important because neural networks frequently process tensors with several axes.

When using reductions, always understand which dimension is being removed or summarized.
`
    },

    {
      id: "broadcasting",
      title: "21. Broadcasting",

      content: `
Broadcasting allows compatible tensors with different shapes to participate in elementwise operations.

Suppose a matrix has shape:

(3, 4)

and another tensor has shape:

(4)

The smaller tensor can be applied across the rows.

For example:

Matrix:

1  2  3  4
5  6  7  8
9 10 11 12

Vector:

10 20 30 40

Result:

11 22 33 44
15 26 37 48
19 30 41 52

Broadcasting avoids explicitly copying the vector into every row.
`
    },

    {
      id: "broadcasting-rules",
      title: "22. Broadcasting Compatibility",

      content: `
Broadcasting depends on compatible dimensions.

A practical way to reason about broadcasting is to compare dimensions from the rightmost side.

Dimensions are compatible when they are equal or when one of them is 1, with missing dimensions handled according to broadcasting rules.

For example:

(3, 4)

and:

(4)

are compatible.

But:

(3, 4)

and:

(5)

are not compatible.

When a broadcasting error occurs, inspect the tensor shapes first.
`
    },

    {
      id: "memory",
      title: "23. Saving Memory",

      content: `
Tensor operations can create additional tensors and therefore use additional memory.

In some situations, in-place operations can reduce unnecessary memory allocations.

However, in-place operations must be used carefully.

Automatic differentiation may need values from previous operations.

Changing those values unexpectedly can interfere with gradient computation.

Therefore, memory optimization should be applied with an understanding of the computation rather than blindly.
`
    },

    {
      id: "python-conversion",
      title: "24. Converting to Python Objects",

      content: `
PyTorch tensors sometimes need to interact with ordinary Python code.

A single-element tensor can be converted into a Python scalar.

A tensor can also be converted into a Python list.

These conversions are useful for:

• displaying results
• serialization
• debugging
• integration with Python code

For large tensors, converting everything into Python objects can be inefficient.
`
    },

    {
      id: "numpy",
      title: "25. PyTorch and NumPy",

      content: `
PyTorch tensors and NumPy arrays can interact with each other.

A PyTorch tensor can be converted into a NumPy array.

A NumPy array can be converted into a PyTorch tensor.

This interoperability is important because many scientific Python libraries operate on NumPy arrays while deep learning systems commonly use PyTorch tensors.

For CPU data, some conversions can share underlying memory.

Therefore, developers should understand whether a conversion creates a copy or shares storage.
`
    },

    {
      id: "dimensions",
      title: "26. Understanding Dimensions in Deep Learning",

      content: `
Tensor dimensions usually have semantic meaning.

For images, a common organization is:

(batch, channels, height, width)

For example:

(32, 3, 224, 224)

can represent 32 RGB images.

For sequence data, a common organization is:

(batch, sequence_length, features)

For example:

(64, 100, 512)

can represent 64 sequences, each containing 100 positions with 512 features per position.

Learning to read tensor shapes is one of the most important practical skills in deep learning.
`
    },

    {
      id: "workflow",
      title: "27. Tensor Workflow",

      content: `
Tensors appear throughout a deep learning pipeline.

A simplified workflow is:

Raw Data
↓
Preprocessing
↓
Tensor Conversion
↓
Batch
↓
Model
↓
Prediction
↓
Loss
↓
Gradient
↓
Parameter Update

The tensor is therefore not just a data structure used at the beginning.

Tensors represent many of the numerical objects used throughout training.
`
    },

    {
      id: "complete",
      title: "28. Complete Tensor Example",

      content: `
The following example combines the major concepts from this lesson.

The program creates a tensor, checks its shape, reshapes it, indexes it, calculates reductions, and demonstrates broadcasting.

The individual Python implementation is provided in the Code Examples section below.
`
    },

    {
      id: "debugging",
      title: "29. Tensor Debugging",

      content: `
Tensor errors are frequently caused by incorrect assumptions about shapes.

A reliable debugging process is:

1. Print the tensor.

2. Print its shape.

3. Print its data type.

4. Inspect the operation.

5. Check dimension compatibility.

6. Inspect intermediate results.

7. Read the error message.

8. Consult the PyTorch documentation when necessary.

A useful debugging habit is to print the shapes immediately before a problematic operation.

Shape awareness becomes essential when working with neural networks.
`
    },

    {
      id: "importance",
      title: "30. Why Tensors Matter",

      content: `
Tensors form the numerical foundation of deep learning.

A training system may contain tensors representing:

Input Data
↓
Model Parameters
↓
Intermediate Activations
↓
Predictions
↓
Loss
↓
Gradients

Computer vision systems use tensors for images.

Language models use tensors for token representations.

Neural networks use tensors for parameters and intermediate computations.

Understanding tensors therefore prepares you for every later model architecture.
`
    }
  ],

  codeExamples: [
    {
      title: "Create a Tensor",
      language: "python",

      code: `import torch

x = torch.arange(12)

print(x)
print(x.shape)
print(x.numel())`,

      output: `tensor([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
torch.Size([12])
12`,

      explanation:
        "Creates a one-dimensional tensor containing twelve values and displays its shape and number of elements."
    },

    {
      title: "Reshape a Tensor",
      language: "python",

      code: `import torch

x = torch.arange(12)

X = x.reshape(3, 4)

print(X)`,

      output: `tensor([
    [ 0,  1,  2,  3],
    [ 4,  5,  6,  7],
    [ 8,  9, 10, 11]
])`,

      explanation:
        "Reshapes twelve values into a three-by-four matrix."
    },

    {
      title: "Indexing and Slicing",
      language: "python",

      code: `import torch

X = torch.arange(12).reshape(3, 4)

print(X[0])
print(X[:, 1])
print(X[0:2, 1:3])`,

      output: `tensor([0, 1, 2, 3])
tensor([1, 5, 9])
tensor([
    [1, 2],
    [5, 6]
])`,

      explanation:
        "Demonstrates row selection, column selection, and rectangular slicing."
    },

    {
      title: "Elementwise Operations",
      language: "python",

      code: `import torch

x = torch.tensor([1.0, 2.0, 3.0])
y = torch.tensor([4.0, 5.0, 6.0])

print(x + y)
print(x - y)
print(x * y)
print(x / y)`,

      explanation:
        "Performs arithmetic independently on corresponding tensor elements."
    },

    {
      title: "Reduction Operations",
      language: "python",

      code: `import torch

x = torch.tensor([
    1.0,
    2.0,
    3.0,
    4.0
])

print(x.sum())
print(x.mean())
print(x.min())
print(x.max())`,

      output: `tensor(10.)
tensor(2.5000)
tensor(1.)
tensor(4.)`,

      explanation:
        "Demonstrates common reduction operations."
    },

    {
      title: "Broadcasting",
      language: "python",

      code: `import torch

X = torch.arange(12).reshape(3, 4)

bias = torch.tensor([
    10,
    20,
    30,
    40
])

result = X + bias

print(result)`,

      explanation:
        "The vector is broadcast across each row of the matrix."
    },

    {
      title: "NumPy Conversion",
      language: "python",

      code: `import torch
import numpy as np

x = torch.tensor([1, 2, 3])

array = x.numpy()

print(array)

new_array = np.array([4, 5, 6])

new_tensor = torch.from_numpy(new_array)

print(new_tensor)`,

      explanation:
        "Demonstrates conversion between PyTorch tensors and NumPy arrays."
    }
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "Create a tensor containing the values from 0 through 9."
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "Create a tensor containing 24 elements and reshape it into a 4 × 6 tensor."
    },

    {
      id: "ex3",
      difficulty: "Easy",
      question:
        "Extract the first row and last column of a 4 × 5 tensor."
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "Perform elementwise addition and multiplication on two vectors."
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "Demonstrate broadcasting using a matrix and a vector."
    },

    {
      id: "ex6",
      difficulty: "Medium",
      question:
        "Calculate the sum and mean of a tensor."
    },

    {
      id: "ex7",
      difficulty: "Hard",
      question:
        "Explain why a tensor containing 24 elements cannot be reshaped into a 5 × 5 tensor."
    },

    {
      id: "ex8",
      difficulty: "Hard",
      question:
        "Create a reusable function that displays a tensor's shape, dtype, number of elements, minimum, maximum, and mean."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Tensor Creator",
      task:
        "Create tensors using torch.tensor, torch.arange, torch.zeros, torch.ones, and torch.randn."
    },

    {
      id: "code2",
      title: "Tensor Inspector",
      task:
        "Create a function that prints the shape, dtype, number of elements, and values of a tensor."
    },

    {
      id: "code3",
      title: "Tensor Slicing Tool",
      task:
        "Create a matrix and display selected rows, columns, and rectangular regions."
    },

    {
      id: "code4",
      title: "Broadcasting Experiment",
      task:
        "Create compatible tensors and demonstrate broadcasting."
    },

    {
      id: "code5",
      title: "Tensor Statistics",
      task:
        "Calculate sum, mean, minimum, maximum, and standard deviation."
    },

    {
      id: "code6",
      title: "NumPy-PyTorch Converter",
      task:
        "Create a program that converts arrays between NumPy and PyTorch."
    },

    {
      id: "code7",
      title: "Tensor Laboratory",
      task:
        "Build an interactive tensor laboratory that combines creation, reshaping, indexing, slicing, operations, reductions, and broadcasting."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "A tensor containing 12 elements is reshaped into a 2 × 5 tensor.",
      task:
        "Explain why the operation fails and give valid alternatives."
    },

    {
      id: "debug2",
      problem:
        "A tensor with shape (3,4) is added to a tensor with shape (5,).",
      task:
        "Explain why broadcasting fails."
    },

    {
      id: "debug3",
      problem:
        "A programmer accesses index 3 from a dimension whose size is 3.",
      task:
        "Explain the indexing error."
    },

    {
      id: "debug4",
      problem:
        "A developer expects mean() to return an integer.",
      task:
        "Explain the result."
    },

    {
      id: "debug5",
      problem:
        "A NumPy array appears to change after modifying a tensor created from it.",
      task:
        "Investigate whether the tensor and NumPy array share memory."
    }
  ],

  practicalTask: {
    title: "Build a Tensor Explorer",

    difficulty: "Intermediate",

    objective:
      "Create a reusable Python program for inspecting and experimenting with PyTorch tensors.",

    requirements: [
      "Create tensors.",
      "Display tensor values.",
      "Display shape.",
      "Display dtype.",
      "Display number of elements.",
      "Display minimum.",
      "Display maximum.",
      "Display mean.",
      "Display sum.",
      "Support reshaping.",
      "Support indexing.",
      "Support slicing.",
      "Demonstrate elementwise operations.",
      "Demonstrate broadcasting.",
      "Convert tensors to NumPy."
    ]
  },

  summary: [
    "Tensors are multidimensional numerical arrays.",
    "Scalars, vectors, and matrices are special cases of tensors.",
    "Shape describes the size of each tensor dimension.",
    "numel() reports the total number of elements.",
    "reshape() changes organization without changing the number of elements.",
    "Indexing and slicing select tensor values.",
    "Elementwise operations operate on corresponding elements.",
    "Reduction operations summarize tensor values.",
    "Broadcasting allows compatible tensors with different shapes to interact.",
    "Tensor shape awareness is essential for deep learning programming.",
    "PyTorch tensors can interoperate with NumPy.",
    "Tensors are used throughout the complete deep learning workflow."
  ],

  keyTakeaways: [
    "Understand what tensors are.",
    "Understand tensor dimensions.",
    "Always inspect tensor shapes when debugging.",
    "Understand reshaping.",
    "Understand indexing and slicing.",
    "Understand elementwise operations.",
    "Understand reduction operations.",
    "Understand broadcasting.",
    "Understand PyTorch and NumPy interoperability.",
    "Tensors form the numerical foundation of deep learning."
  ],

  nextLesson: "Lesson 3 — Data Preprocessing"
};

export default lesson2;