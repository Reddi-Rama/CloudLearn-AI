export type ExamOption = {
  id: string;
  text: string;
};

export type ExamQuestion = {
  id: number;
  question: string;
  code?: string;
  options: ExamOption[];
  correctAnswer: string;
};

export const pythonExam = {
  courseId: "python-development",
  title: "Python Development Course Completion Assessment",
  description:
    "Test your understanding of the concepts covered throughout the Python Development course.",

  totalQuestions: 25,
  passingPercentage: 70,

  questions: [
    {
      id: 1,
      question: "What is the output?",
      code: `x = [1, 2, 3]
y = x
z = x.copy()

y.append(4)
z.append(5)

print(x)
print(y)
print(z)`,
      options: [
        {
          id: "A",
          text: "[1, 2, 3] / [1, 2, 3, 4] / [1, 2, 3, 5]",
        },
        {
          id: "B",
          text: "[1, 2, 3, 4] / [1, 2, 3, 4] / [1, 2, 3, 5]",
        },
        {
          id: "C",
          text: "[1, 2, 3, 4, 5] / [1, 2, 3, 4] / [1, 2, 3, 5]",
        },
        {
          id: "D",
          text: "Error",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 2,
      question:
        "Which keyword is used to create an anonymous function in Python?",
      options: [
        {
          id: "A",
          text: "func",
        },
        {
          id: "B",
          text: "lambda",
        },
        {
          id: "C",
          text: "anonymous",
        },
        {
          id: "D",
          text: "def",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 3,
      question: "What is the output?",
      code: `def outer(x):
    def inner(y):
        return x + y
    return inner

f = outer(10)

print(f(5))
print(f(20))`,
      options: [
        {
          id: "A",
          text: "5 and 20",
        },
        {
          id: "B",
          text: "10 and 10",
        },
        {
          id: "C",
          text: "15 and 30",
        },
        {
          id: "D",
          text: "Error",
        },
      ],
      correctAnswer: "C",
    },

    {
      id: 4,
      question: "Which of the following is immutable?",
      options: [
        {
          id: "A",
          text: "List",
        },
        {
          id: "B",
          text: "Dictionary",
        },
        {
          id: "C",
          text: "Set",
        },
        {
          id: "D",
          text: "Tuple",
        },
      ],
      correctAnswer: "D",
    },

    {
      id: 5,
      question: "What is the output?",
      code: `numbers = [1, 2, 3, 4]

result = list(
    map(
        lambda x: x ** 2,
        filter(lambda x: x % 2 == 0, numbers)
    )
)

print(result)`,
      options: [
        {
          id: "A",
          text: "[1, 4, 9, 16]",
        },
        {
          id: "B",
          text: "[2, 4]",
        },
        {
          id: "C",
          text: "[4, 16]",
        },
        {
          id: "D",
          text: "[1, 9]",
        },
      ],
      correctAnswer: "C",
    },

    {
      id: 6,
      question: "Which statement is used to handle exceptions in Python?",
      options: [
        {
          id: "A",
          text: "try-except",
        },
        {
          id: "B",
          text: "check-catch",
        },
        {
          id: "C",
          text: "error-handle",
        },
        {
          id: "D",
          text: "exception-handle",
        },
      ],
      correctAnswer: "A",
    },

    {
      id: 7,
      question: "What is the output?",
      code: `def func(value, result=[]):
    result.append(value)
    return result

print(func(1))
print(func(2))
print(func(3))`,
      options: [
        {
          id: "A",
          text: "[1]    [2]    [3]",
        },
        {
          id: "B",
          text: "[1]    [1, 2]    [1, 2, 3]",
        },
        {
          id: "C",
          text: "[1, 2, 3]    [1, 2, 3]    [1, 2, 3]",
        },
        {
          id: "D",
          text: "Error",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 8,
      question: "What does len() return when applied to a dictionary?",
      options: [
        {
          id: "A",
          text: "Sum of its values",
        },
        {
          id: "B",
          text: "Number of key-value pairs",
        },
        {
          id: "C",
          text: "Number of characters in its values",
        },
        {
          id: "D",
          text: "Memory occupied by the dictionary",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 9,
      question: "What is the output?",
      code: `x = [1, 2, 3, 4, 5]

print(x[1:-1:2])`,
      options: [
        {
          id: "A",
          text: "[1, 3, 5]",
        },
        {
          id: "B",
          text: "[2, 4]",
        },
        {
          id: "C",
          text: "[2, 3, 4]",
        },
        {
          id: "D",
          text: "[1, 3]",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 10,
      question: "What is the output?",
      code: `def mystery(n):
    if n <= 1:
        return n

    return mystery(n - 1) + mystery(n - 2)

print(mystery(6))`,
      options: [
        {
          id: "A",
          text: "5",
        },
        {
          id: "B",
          text: "8",
        },
        {
          id: "C",
          text: "13",
        },
        {
          id: "D",
          text: "21",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 11,
      question: "A Python variable:",
      options: [
        {
          id: "A",
          text: "Must be declared with its data type before use",
        },
        {
          id: "B",
          text: "Can refer to objects of different types during execution",
        },
        {
          id: "C",
          text: "Permanently belongs to one data type",
        },
        {
          id: "D",
          text: "Can store only primitive values",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 12,
      question: "What is the output?",
      code: `data = {
    "a": 1,
    "b": 2,
    "c": 3
}

result = {
    k: v * 2
    for k, v in data.items()
    if v % 2 != 0
}

print(result)`,
      options: [
        {
          id: "A",
          text: "{'a': 2, 'b': 4, 'c': 6}",
        },
        {
          id: "B",
          text: "{'a': 2, 'c': 6}",
        },
        {
          id: "C",
          text: "{'b': 4}",
        },
        {
          id: "D",
          text: "{'a': 1, 'c': 3}",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 13,
      question: "What is the output?",
      code: `def func():
    for i in range(3):
        yield i

g = func()

print(next(g))
print(next(g))

for x in g:
    print(x)`,
      options: [
        {
          id: "A",
          text: "0 / 1 / 2",
        },
        {
          id: "B",
          text: "0 / 1 / 0 / 1 / 2",
        },
        {
          id: "C",
          text: "1 / 2",
        },
        {
          id: "D",
          text: "Error",
        },
      ],
      correctAnswer: "A",
    },

    {
      id: 14,
      question: "What is the output?",
      code: `x = 10

def change():
    global x
    x += 5

change()

print(x)`,
      options: [
        {
          id: "A",
          text: "10",
        },
        {
          id: "B",
          text: "5",
        },
        {
          id: "C",
          text: "15",
        },
        {
          id: "D",
          text: "Error",
        },
      ],
      correctAnswer: "C",
    },

    {
      id: 15,
      question: "What is the output?",
      code: `values = [1, 2, 3, 4]

result = [
    a + b
    for a in values
    for b in values
    if a < b
]

print(result)`,
      options: [
        {
          id: "A",
          text: "[3, 4, 5, 5, 6, 7]",
        },
        {
          id: "B",
          text: "[3, 4, 5, 5, 6, 7, 7]",
        },
        {
          id: "C",
          text: "[2, 3, 4, 5, 6, 7]",
        },
        {
          id: "D",
          text: "[3, 5, 7]",
        },
      ],
      correctAnswer: "A",
    },

    {
      id: 16,
      question:
        "Which approach is generally more memory-efficient when processing a very large sequence one item at a time?",
      options: [
        {
          id: "A",
          text: "List comprehension",
        },
        {
          id: "B",
          text: "Tuple conversion",
        },
        {
          id: "C",
          text: "Generator expression",
        },
        {
          id: "D",
          text: "Dictionary comprehension",
        },
      ],
      correctAnswer: "C",
    },

    {
      id: 17,
      question: "What is the output?",
      code: `def outer():
    x = 10

    def inner():
        nonlocal x
        x += 5

    inner()
    return x

print(outer())`,
      options: [
        {
          id: "A",
          text: "10",
        },
        {
          id: "B",
          text: "15",
        },
        {
          id: "C",
          text: "5",
        },
        {
          id: "D",
          text: "Error",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 18,
      question: "What is the output?",
      code: `a = [1, 2, [3, 4]]

b = a.copy()

b[2].append(5)

print(a)
print(b)`,
      options: [
        {
          id: "A",
          text: "[1, 2, [3, 4]] / [1, 2, [3, 4, 5]]",
        },
        {
          id: "B",
          text: "[1, 2, [3, 4, 5]] / [1, 2, [3, 4, 5]]",
        },
        {
          id: "C",
          text: "[1, 2, 5] / [1, 2, 5]",
        },
        {
          id: "D",
          text: "Error",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 19,
      question: "What is the output?",
      code: `x = [1, 2, 3]

result = [
    x[i] * x[i + 1]
    for i in range(len(x) - 1)
]

print(result)`,
      options: [
        {
          id: "A",
          text: "[1, 4, 9]",
        },
        {
          id: "B",
          text: "[2, 6]",
        },
        {
          id: "C",
          text: "[1, 2, 3]",
        },
        {
          id: "D",
          text: "[2, 3]",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 20,
      question: "What is the output?",
      code: `def f(x):
    try:
        return 10 // x
    except ZeroDivisionError:
        return -1
    finally:
        print("Finished")

print(f(2))`,
      options: [
        {
          id: "A",
          text: "5 / Finished",
        },
        {
          id: "B",
          text: "Finished / 5",
        },
        {
          id: "C",
          text: "5",
        },
        {
          id: "D",
          text: "Error",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 21,
      question: "What is the output?",
      code: `x = [1, 2, 3]

result = (
    lambda a: [
        i * 2
        for i in a
        if i % 2
    ]
)(x)

print(result)`,
      options: [
        {
          id: "A",
          text: "[2, 4, 6]",
        },
        {
          id: "B",
          text: "[1, 3]",
        },
        {
          id: "C",
          text: "[2, 6]",
        },
        {
          id: "D",
          text: "[1, 2, 3]",
        },
      ],
      correctAnswer: "C",
    },

    {
      id: 22,
      question: "What is the output?",
      code: `x = [1, 2, 3]

for i in x:
    x.append(i + 3)
    if len(x) > 6:
        break

print(x)`,
      options: [
        {
          id: "A",
          text: "[1, 2, 3, 4, 5, 6]",
        },
        {
          id: "B",
          text: "[1, 2, 3, 4]",
        },
        {
          id: "C",
          text: "[1, 2, 3, 4, 5, 6, 7]",
        },
        {
          id: "D",
          text: "Infinite loop",
        },
      ],
      correctAnswer: "C",
    },

    {
      id: 23,
      question: "What is the output?",
      code: `def create_functions():
    functions = []

    for i in range(5):
        functions.append(lambda: i)

    return functions

functions = create_functions()

print([f() for f in functions])`,
      options: [
        {
          id: "A",
          text: "[0, 1, 2, 3, 4]",
        },
        {
          id: "B",
          text: "[4, 4, 4, 4, 4]",
        },
        {
          id: "C",
          text: "[0, 0, 0, 0, 0]",
        },
        {
          id: "D",
          text: "Error",
        },
      ],
      correctAnswer: "B",
    },

    {
      id: 24,
      question: "What is the output?",
      code: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a & b)`,
      options: [
        {
          id: "A",
          text: "{1, 2, 5, 6}",
        },
        {
          id: "B",
          text: "{1, 2, 3, 4, 5, 6}",
        },
        {
          id: "C",
          text: "{3, 4}",
        },
        {
          id: "D",
          text: "{}",
        },
      ],
      correctAnswer: "C",
    },

    {
      id: 25,
      question: "What is the output?",
      code: `def calculate(x, y=[]):
    y.append(x)
    return sum(y)

a = calculate(10)
b = calculate(20)
c = calculate(30)

print(a, b, c)`,
      options: [
        {
          id: "A",
          text: "10 20 30",
        },
        {
          id: "B",
          text: "10 30 60",
        },
        {
          id: "C",
          text: "10 30 50",
        },
        {
          id: "D",
          text: "60 60 60",
        },
      ],
      correctAnswer: "B",
    },
  ],
} as const;