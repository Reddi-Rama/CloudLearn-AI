const lesson3 = {
  id: "lesson3",

  title: "Tuples",

  previousLesson: "/lesson/python-development/module6/lesson2",

  nextLesson: "/lesson/python-development/module6/lesson4",

  content: `
# Tuples

In the previous lesson, you learned how lists store collections of data that can be modified whenever required. However, some information should remain constant throughout the execution of a program. In such situations, Python provides **Tuples**.

A tuple is an ordered collection of values that cannot be modified after it is created. This property makes tuples reliable for storing fixed information.

Tuples are commonly used in configuration files, APIs, databases, cloud applications, and many professional software systems.

## Why Do We Need Tuples?

Consider storing the location of a server.

Server Location:

- City: Mumbai
- Country: India

These values usually remain constant.

If this information is stored in a list, it can be modified accidentally. Using a tuple prevents unwanted changes and helps maintain data integrity.

IMPORTANT: Tuples should be used whenever data must remain unchanged.

## What is a Tuple?

A **Tuple** is an ordered collection of values stored inside parentheses **()**.

Syntax:

variable_name = (item1, item2, item3)

Example:

server_location = ("Mumbai", "India")

print(server_location)

Output:

('Mumbai', 'India')

Like lists, tuples maintain the order of elements.

## Characteristics of Tuples

Tuples have several important characteristics:

- Tuples maintain the order of elements.
- Tuples are immutable.
- Tuples allow duplicate values.
- Tuples can store different data types.
- Tuples support indexing.

Example:

server_info = ("Server-01", 72.5, True)

print(server_info)

Output:

('Server-01', 72.5, True)

The tuple stores different types of values together.

## Accessing Tuple Elements

Tuple elements are accessed using indexes.

Python starts indexing from **0**.

Example:

coordinates = (19.0760, 72.8777)

print(coordinates[0])
print(coordinates[1])

Output:

19.076
72.8777

IMPORTANT: Tuples support indexing just like lists.

## Attempting to Modify a Tuple

Since tuples are immutable, their values cannot be changed.

Example:

coordinates = (19.0760, 72.8777)

coordinates[0] = 20.0000

Output:

TypeError: 'tuple' object does not support item assignment

Python prevents accidental modification of tuple values.

## Tuple Packing and Unpacking

Python allows multiple values to be grouped into a tuple automatically. This is called **Tuple Packing**.

Example:

server = ("Auth-Service", "Running")

The values can also be assigned to separate variables using **Tuple Unpacking**.

Example:

server = ("Auth-Service", "Running")

name, status = server

print(name)
print(status)

Output:

Auth-Service
Running

Tuple unpacking makes code cleaner and easier to read.

## Real-World Applications

Tuples are widely used in:

- Database records.
- Geographic coordinates.
- Configuration settings.
- API responses.
- Version information.
- Cloud server locations.
- Scientific computing.
- Financial applications.

For example, GPS coordinates are stored as tuples because they should not change during program execution.

## Advantages of Tuples

Using tuples provides several benefits:

- Protects data from accidental modification.
- Uses less memory than lists.
- Improves program reliability.
- Stores fixed information efficiently.
- Supports tuple unpacking.

## Common Beginner Mistakes

Some common mistakes include:

- Trying to modify tuple elements.
- Confusing tuples with lists.
- Forgetting to use parentheses.
- Using tuples for frequently changing data.

IMPORTANT: If your data needs to change frequently, use a list instead of a tuple.

## Best Practices

Follow these guidelines while working with tuples:

- Use tuples for fixed information.
- Use tuple unpacking to improve readability.
- Choose tuples when data integrity is important.
- Store related values together.
- Use meaningful variable names.

## Key Points

- Tuples are ordered collections of data.
- Tuples are created using parentheses ().
- Tuples are immutable.
- Tuples support indexing.
- Tuples allow duplicate values.
- Tuple unpacking improves code readability.

IMPORTANT: Tuples are widely used in professional software because they safely store data that should remain constant throughout a program's execution.
`,

  examples: [
    {
      title: "Example 1: Creating a Tuple",

      code: `server_location = ("Mumbai", "India")

print(server_location)`,

      output: `('Mumbai', 'India')`,
    },

    {
      title: "Example 2: Accessing Tuple Elements",

      code: `coordinates = (19.0760, 72.8777)

print(coordinates[0])
print(coordinates[1])`,

      output: `19.076
72.8777`,
    },

    {
      title: "Example 3: Tuple Unpacking",

      code: `server = ("Auth-Service", "Running")

name, status = server

print(name)
print(status)`,

      output: `Auth-Service
Running`,
    },

    {
      title: "Example 4: Storing Fixed Information",

      code: `database_config = ("localhost", 3306, "Production")

print(database_config)`,

      output: `('localhost', 3306, 'Production')`,
    },
  ],
};

export default lesson3;