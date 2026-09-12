const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const questions = [
  {
    id: 1,
    question: "What is the output of the following code?\n\nconst a = [1, 2, 3]\nconst b = a\nb.append(4)\nprint(a)\nprint(b)",
    options: [
      "[1, 2, 3] / [1, 2, 3, 4]",
      "[1, 2, 3, 4] / [1, 2, 3, 4]",
      "[1, 2, 3] / [1, 2, 3]",
      "TypeError"
    ],
    answer: 1,
    explanation: "Both variables reference the same list object, so appending through b also changes a."
  },
  {
    id: 2,
    question: "What is the main problem with using a mutable list as a default argument in a Python function?",
    options: [
      "Python does not allow lists as arguments",
      "The same list can be reused across multiple function calls",
      "The function cannot return the list",
      "Lists automatically become tuples"
    ],
    answer: 1,
    explanation: "Default arguments are evaluated once when the function is defined, so a mutable default can retain changes between calls."
  },
  {
    id: 3,
    question: "What is printed by this code?\n\nx = 10\n\ndef show():\n    x = 30\n    print(x)\n\nshow()",
    options: [
      "10",
      "20",
      "30",
      "NameError"
    ],
    answer: 2,
    explanation: "Python resolves the variable through the enclosing scope, where x has the value 30."
  },
  {
    id: 4,
    question: "Which statement about Python dictionaries is correct?",
    options: [
      "Dictionary keys must always be strings",
      "Dictionary values must be immutable",
      "Dictionary keys must be hashable",
      "Dictionaries cannot contain nested dictionaries"
    ],
    answer: 2,
    explanation: "Dictionary keys must be hashable, which generally means they must have a stable hash value."
  },
  {
    id: 5,
    question: "What does list comprehension [x * x for x in range(5) if x % 2 == 0] produce?",
    options: [
      "[0, 1, 4, 9, 16]",
      "[1, 9]",
      "[0, 4, 16]",
      "[2, 4]"
    ],
    answer: 2,
    explanation: "Only even values 0, 2, and 4 are selected, producing their squares: 0, 4, and 16."
  },
  {
    id: 6,
    question: "What is the output?\n\nx = 10\n\ndef test():\n    x = 20\n    print(x)\n\ntest()\nprint(x)",
    options: [
      "20",
      "10",
      "30",
      "0"
    ],
    answer: 0,
    explanation: "The local assignment creates a local variable inside the function, so the global value remains unchanged."
  },
  {
    id: 7,
    question: "Which statement best describes a closure in Python?",
    options: [
      "A class that automatically closes a file",
      "A function that remembers variables from its enclosing scope",
      "A method that prevents inheritance",
      "A function that can only accept one argument"
    ],
    answer: 1,
    explanation: "A closure retains access to variables from the enclosing lexical scope even after that scope has finished executing."
  },
  {
    id: 8,
    question: "What happens when an exception is raised inside a try block and no matching except clause handles it?",
    options: [
      "Python silently ignores it",
      "The program automatically retries the block",
      "The exception propagates to an outer handler or terminates the program",
      "The exception becomes None"
    ],
    answer: 1,
    explanation: "An unhandled exception propagates upward through the call stack and may terminate the program."
  },
  {
    id: 9,
    question: "What is the primary difference between == and is in Python?",
    options: [
      "Both always compare object identity",
      "== compares values while is compares object identity",
      "is compares values while == compares memory addresses",
      "There is no difference"
    ],
    answer: 1,
    explanation: "== checks equality of values, while is checks whether two references point to the same object."
  },
  {
    id: 10,
    question: "What does the finally block in exception handling guarantee?",
    options: [
      "It executes only when an exception occurs",
      "It executes only when no exception occurs",
      "It normally executes whether an exception occurs or not",
      "It prevents all exceptions"
    ],
    answer: 1,
    explanation: "The finally block is intended for cleanup code and normally executes regardless of whether an exception occurred."
  },
  {
    id: 11,
    question: "Which method is automatically called when a new instance of a normal Python class is initialized?",
    options: [
      "__start__()",
      "__create__()",
      "__init__()",
      "__newobject__()"
    ],
    answer: 2,
    explanation: "__init__() initializes an already-created instance. __new__() is responsible for creating the instance."
  },
  {
    id: 12,
    question: "What is the purpose of super() in Python classes?",
    options: [
      "It creates a completely unrelated object",
      "It provides access to methods and attributes of a parent class",
      "It prevents method overriding",
      "It converts a class into an abstract class"
    ],
    answer: 1,
    explanation: "super() provides a convenient way to access functionality from a superclass, especially in inheritance hierarchies."
  },
  {
    id: 13,
    question: "Which statement about generators is correct?",
    options: [
      "They produce values lazily using yield",
      "They always store all generated values in memory",
      "They can only generate integers",
      "They cannot be iterated"
    ],
    answer: 0,
    explanation: "Generators use yield to produce values lazily, allowing iteration without storing the entire sequence in memory."
  },
  {
    id: 14,
    question: "What does the *args parameter allow a Python function to receive?",
    options: [
      "Only keyword arguments",
      "Only one positional argument",
      "A variable number of positional arguments",
      "A variable number of modules"
    ],
    answer: 2,
    explanation: "*args collects a variable number of positional arguments into a tuple."
  },
  {
    id: 15,
    question: "What does **kwargs collect when used in a function definition?",
    options: [
      "A list of positional arguments",
      "A tuple of positional arguments",
      "A dictionary of keyword arguments",
      "A set of imported modules"
    ],
    answer: 0,
    explanation: "**kwargs collects a variable number of keyword arguments into a dictionary."
  },
  {
    id: 16,
    question: "What is the output of this expression: sorted({3, 1, 2})?",
    options: [
      "{1, 2, 3}",
      "(1, 2, 3)",
      "[1, 2, 3]",
      "None"
    ],
    answer: 2,
    explanation: "sorted() returns a new list containing the sorted elements of the iterable."
  },
  {
    id: 17,
    question: "Which statement about Python decorators is correct?",
    options: [
      "They can modify or extend the behavior of a function without changing its core code",
      "They can only be applied to classes",
      "They permanently convert functions into variables",
      "They disable function calls"
    ],
    answer: 0,
    explanation: "A decorator wraps a function or class to extend or modify its behavior."
  },
  {
    id: 18,
    question: "What is the main advantage of using a set instead of a list for membership testing?",
    options: [
      "Sets preserve duplicate values",
      "Sets generally provide faster average-time membership testing",
      "Sets support indexing more efficiently",
      "Sets always maintain insertion order for sorting"
    ],
    answer: 1,
    explanation: "Hash-based sets generally provide average O(1) membership testing, while list membership is O(n)."
  },
  {
    id: 19,
    question: "What is the time complexity of dictionary lookup by key on average?",
    options: [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    answer: 2,
    explanation: "Python dictionaries are hash tables, giving average O(1) lookup by key."
  },
  {
    id: 20,
    question: "What happens when a generator function containing yield is called?",
    options: [
      "Its entire body executes immediately",
      "It immediately returns a list",
      "It returns a generator object without executing the whole function body",
      "It always raises StopIteration"
    ],
    answer: 1,
    explanation: "Calling a generator function returns a generator object. Execution proceeds when values are requested."
  },
  {
    id: 21,
    question: "Consider: a = [[1, 2], [3, 4]]; b = a.copy(); b[0].append(99). What happens?",
    options: [
      "Only b changes",
      "Both a and b show [1, 2, 99] in their first nested list",
      "A TypeError occurs",
      "The nested list is automatically deep-copied"
    ],
    answer: 1,
    explanation: "copy() creates a shallow copy. The nested lists remain shared between a and b."
  },
  {
    id: 22,
    question: "Which approach creates an independent deep copy of a nested Python object?",
    options: [
      "object.copy()",
      "list(object)",
      "copy.deepcopy(object)",
      "object[:] "
    ],
    answer: 2,
    explanation: "copy.deepcopy() recursively copies nested objects, creating an independent structure."
  },
  {
    id: 23,
    question: "What is the purpose of the __name__ == '__main__' pattern?",
    options: [
      "It forces a module to be imported",
      "It runs a block when the file is executed directly rather than imported",
      "It prevents all functions from executing",
      "It converts the file into a package"
    ],
    answer: 1,
    explanation: "When a Python file is executed directly, __name__ is '__main__'. When imported, it usually contains the module name."
  },
  {
    id: 24,
    question: "What is the output of this code?\n\nx = [1, 2, 3]\ny = (n for n in x)\nx.append(4)\nprint(list(y))",
    options: [
      "[1, 2, 3]",
      "[4]",
      "[1, 2, 3, 4]",
      "TypeError"
    ],
    answer: 2,
    explanation: "The generator reads from the list lazily. The appended value exists in the list when the generator is consumed."
  },
  {
    id: 25,
    question: "What is the output?\n\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n        return x\n    inner()\n    return x\n\nprint(outer())",
    options: [
      "10",
      "15",
      "5",
      "UnboundLocalError"
    ],
    answer: 1,
    explanation: "nonlocal allows inner() to modify x from the enclosing outer() scope, changing it from 10 to 15."
  }
];

async function main() {
  const course = await prisma.course.findUnique({
    where: {
      slug: "python-development"
    }
  });

  if (!course) {
    throw new Error(
      'Course "python-development" was not found in the database.'
    );
  }

  const exam = await prisma.exam.upsert({
    where: {
      courseId: course.id
    },
    update: {
      title: "Python Development Final Assessment",
      passingPercentage: 70,
      isPublished: true
    },
    create: {
      title: "Python Development Final Assessment",
      passingPercentage: 70,
      isPublished: true,
      courseId: course.id
    }
  });

  await prisma.examQuestion.deleteMany({
    where: {
      examId: exam.id
    }
  });

  await prisma.examQuestion.createMany({
    data: questions.map((item, index) => ({
      question: item.question,
      options: item.options,
      correctAnswer: item.answer,
      explanation: item.explanation,
      position: index + 1,
      examId: exam.id
    }))
  });

  console.log("Python final exam seeded successfully.");
  console.log(`Exam ID: ${exam.id}`);
  console.log(`Questions inserted: ${questions.length}`);
  console.log(`Passing percentage: ${exam.passingPercentage}%`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
