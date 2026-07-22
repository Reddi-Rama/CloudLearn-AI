const lesson1 = {
  id: "lesson1",

  title: "Introduction to Python",

  previousLesson:
    "/lesson/python-development/module1/about",

  nextLesson:
    "/lesson/python-development/module1/lesson2",

  content: `

Python is one of the most popular and versatile programming languages in the world.

It was created by Guido van Rossum and officially released in 1991.

Python was designed with a strong focus on readability, simplicity, and developer productivity.

Today, Python is used by beginners learning programming as well as experienced developers building professional software applications.


# What is Python?

Python is a high-level, interpreted, general-purpose programming language that allows developers to create applications quickly using clean and readable code.

Unlike many programming languages that require complex syntax, Python allows programmers to express ideas using fewer lines of code.

Python focuses on simplicity, making programming easier to understand and maintain.


# Why Python is Popular

Python has become one of the most widely used programming languages because of its simplicity and powerful features.

Major reasons include:

- Easy to learn
- Simple syntax
- Cross-platform support
- Large standard library
- Huge developer community
- Open-source
- Thousands of third-party libraries
- Excellent documentation

These features make Python suitable for beginners as well as professionals.


# Features of Python

## Simple Syntax

Python uses an easy-to-read syntax that is close to the English language.

This allows developers to focus more on solving problems rather than remembering complicated syntax rules.


## Interpreted Language

Python programs are executed line by line by the Python interpreter.

This makes testing and debugging easier during development.


## Cross Platform

Python applications can run on different operating systems including Windows, Linux, and macOS.

The same Python code can usually work on multiple platforms with little modification.


## Object-Oriented Programming Support

Python supports object-oriented programming concepts such as classes and objects.

It also supports procedural and functional programming styles.


## Large Standard Library

Python provides many built-in modules that help developers perform common tasks without writing everything from scratch.


## Open Source

Python is freely available and can be downloaded, modified, and distributed by anyone.


# Where Python is Used

Python is used in many industries and technologies.

Examples include:

- Artificial Intelligence
- Machine Learning
- Data Science
- Web Development
- Automation
- Cloud Computing
- Cybersecurity
- Game Development
- Desktop Applications
- Internet of Things


# Companies Using Python

Many leading companies use Python for building powerful applications.

Examples include:

- Google
- Netflix
- Instagram
- Spotify
- Amazon
- Microsoft
- Dropbox
- NASA


# Advantages of Python

Python provides many benefits for developers.

- Beginner friendly
- Faster development process
- Large ecosystem
- Highly readable code
- Strong community support
- Supports multiple programming paradigms
- Easy integration with other technologies


# Limitations of Python

Although Python is powerful, it also has some limitations.

- Slower execution compared to compiled languages like C++
- Higher memory usage
- Less commonly used for mobile application development
- Global Interpreter Lock affects some multithreading operations

Despite these limitations, Python remains one of the best programming languages for modern software development.


# Real World Example

Imagine building an online shopping application.

Python can be used to:

- Manage customer accounts
- Process payments
- Generate invoices
- Send email notifications
- Analyze customer behaviour
- Recommend products using artificial intelligence

A complete application can combine multiple Python technologies together.


# Common Beginner Mistakes

Beginners often make these mistakes while learning Python.

- Thinking Python is only for beginners
- Ignoring indentation rules
- Memorizing syntax without understanding concepts
- Avoiding practical coding
- Learning only theory without building projects


# Best Practices

Good Python developers follow these practices:

- Write clean and readable code.
- Practice every concept immediately.
- Understand error messages.
- Use meaningful variable names.
- Build small projects while learning.


# Summary

• Python is a high-level interpreted programming language.

• Python has simple and readable syntax.

• Python supports multiple programming styles.

• Python is used in AI, Data Science, Web Development, Automation, and Cloud Computing.

• Learning Python creates many career opportunities.


# Remember

Python is not only a beginner language.

It is a powerful programming language used by developers and organizations worldwide for building modern software solutions.
`,

  examples: [
    {
      title: "Example 1: Your First Python Program",

      code: `print("Hello, World!")`,

      output: `Hello, World!`,
    },

    {
      title: "Example 2: Printing Multiple Messages",

      code: `print("Welcome to Python")
print("Learning is fun!")`,

      output: `Welcome to Python
Learning is fun!`,
    },

    {
      title: "Example 3: Simple Calculation",

      code: `print(10 + 20)`,

      output: `30`,
    },

    {
      title: "Example 4: Displaying Information",

      code: `print("Course: Python Development")
print("Level: Beginner")
print("Status: Learning")`,

      output: `Course: Python Development
Level: Beginner
Status: Learning`,
    },
  ],
};

export default lesson1;