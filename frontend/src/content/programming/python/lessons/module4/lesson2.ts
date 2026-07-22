const lesson2 = {
  id: "lesson2",

  title: "String Indexing",

  previousLesson: "/lesson/python-development/module4/lesson1",

  nextLesson: "/lesson/python-development/module4/lesson3",

  content: `# String Indexing

String indexing is the process of accessing individual characters from a string. Every character stored in a string has a unique position called an index.

Python uses indexing to allow programmers to retrieve specific characters from a string without processing the entire text.

Unlike many beginners expect, Python starts indexing from **0**, not **1**.

String indexing is widely used in text processing, data validation, file handling, web development, and many other real-world applications.

## Understanding String Indexes

Consider the following string:

application_name = "Python"

The characters are stored as:

P  y  t  h  o  n
0  1  2  3  4  5

Each character has its own position.

For example:

- Index 0 contains P
- Index 1 contains y
- Index 2 contains t
- Index 3 contains h
- Index 4 contains o
- Index 5 contains n

IMPORTANT: Python always starts indexing from 0. The first character of every string has an index of 0.

## Accessing Characters Using Indexes

The syntax for accessing a character is:

string_name[index]

Python returns the character stored at the specified index.

Example:

language = "Python"

print(language[0])
print(language[3])

Output:

P
h

This technique allows you to retrieve any character directly from a string.

## Negative Indexing

Python also supports negative indexing.

Negative indexes start counting from the end of the string.

For the string "Python":

P  y  t  h  o  n
-6 -5 -4 -3 -2 -1

Here:

- -1 refers to the last character.
- -2 refers to the second-last character.
- -3 refers to the third-last character.

Negative indexing is extremely useful when working with characters near the end of a string.

Example:

environment = "Production"

print(environment[-1])
print(environment[-2])

Output:

n
o

IMPORTANT: Negative indexing begins from -1 because the last character of the string has an index of -1.

## Real-World Applications

String indexing is commonly used in:

- File extension detection.
- Password validation.
- Product code processing.
- Parsing log files.
- Reading configuration values.
- Data extraction.
- Web applications.
- Cloud monitoring systems.

For example, software can identify the last character of a filename or extract specific symbols from a product code using indexing.

## Advantages of String Indexing

Using indexing provides several benefits:

- Quickly access individual characters.
- Simplifies text processing.
- Improves program efficiency.
- Supports both forward and backward access.
- Useful in validation and parsing operations.

## Common Beginner Mistakes

Some common mistakes include:

- Assuming indexing starts from 1.
- Accessing indexes that do not exist.
- Confusing positive and negative indexes.
- Forgetting that spaces are also counted as characters.

IMPORTANT: Accessing an index outside the string length results in an IndexError.

## Best Practices

- Remember that indexing starts from 0.
- Use negative indexing when accessing characters near the end.
- Verify that an index exists before accessing it.
- Use meaningful variable names while processing strings.
- Combine indexing with other string operations when required.

## Key Points

- String indexing accesses individual characters.
- Every character has a unique index.
- Positive indexes start from 0.
- Negative indexes start from -1.
- Indexing is widely used in text processing and validation.

IMPORTANT: Mastering string indexing is the first step toward advanced string manipulation techniques such as slicing, searching, and formatting.`,

  examples: [
    {
      title: "Example 1: Accessing Characters Using Positive Indexes",

      code: `language = "Python"

print(language[0])
print(language[3])`,

      output: `P
h`,
    },

    {
      title: "Example 2: Using Negative Indexing",

      code: `environment = "Production"

print(environment[-1])
print(environment[-2])`,

      output: `n
o`,
    },

    {
      title: "Example 3: Extracting File Extension Characters",

      code: `filename = "report.pdf"

print(filename[-3])
print(filename[-2])
print(filename[-1])`,

      output: `p
d
f`,
    },

    {
      title: "Example 4: Accessing Characters in a Product Code",

      code: `product_code = "RTX5090"

print(product_code[0])
print(product_code[3])
print(product_code[-1])`,

      output: `R
5
0`,
    },
  ],
};

export default lesson2;