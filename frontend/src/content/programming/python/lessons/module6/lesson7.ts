const lesson7 = {
  id: "lesson7",

  title: "Nested Data Structures",

  previousLesson: "/lesson/python-development/module6/lesson6",

  nextLesson: "/lesson/python-development/module6/lesson8",

  content: `
# Nested Data Structures

In the previous lesson, you learned how list comprehensions provide a clean and efficient way to create and transform lists. However, real-world applications often need to store complex information that cannot be represented using a single list or dictionary.

For example, an online learning platform stores information about students, courses, instructors, and grades. Similarly, a cloud platform manages servers, users, services, and configurations. These applications require one data structure to contain another.

Python provides **Nested Data Structures** to represent such complex relationships.

A nested data structure is simply a data structure that contains another data structure inside it.

## Why Do We Need Nested Data Structures?

Suppose you need to store information about multiple employees.

Using separate variables:

employee1_name = "Alice"
employee1_department = "AI"

employee2_name = "Bob"
employee2_department = "Cybersecurity"

As the number of employees grows, this approach becomes difficult to manage.

Using nested data structures, all related information can be organized together in a clean and structured manner.

IMPORTANT: Nested data structures help represent complex real-world information efficiently.

## What are Nested Data Structures?

A **Nested Data Structure** is a data structure that contains one or more other data structures inside it.

Examples include:

- A list containing dictionaries.
- A dictionary containing lists.
- A list containing lists.
- A dictionary containing dictionaries.

These combinations make it possible to represent hierarchical and structured information.

## List of Dictionaries

One of the most common nested structures is a list of dictionaries.

Example:

employees = [
    {
        "name": "Alice",
        "department": "AI"
    },
    {
        "name": "Bob",
        "department": "Cybersecurity"
    }
]

print(employees)

Output:

[
{'name': 'Alice', 'department': 'AI'},
{'name': 'Bob', 'department': 'Cybersecurity'}
]

Each employee is represented as a dictionary, and all employees are stored inside a list.

## Accessing Nested Data

Nested data is accessed one level at a time.

Example:

employees = [
    {
        "name": "Alice",
        "department": "AI"
    },
    {
        "name": "Bob",
        "department": "Cybersecurity"
    }
]

print(employees[1]["department"])

Output:

Cybersecurity

Python first selects the second dictionary from the list and then retrieves the value associated with the key "department".

## Dictionary Containing Another Dictionary

A dictionary can also contain another dictionary.

Example:

response = {
    "server": {
        "name": "Auth-Service",
        "status": "Running"
    }
}

print(response["server"]["status"])

Output:

Running

This type of structure is commonly returned by APIs and cloud services.

IMPORTANT: Access nested data one level at a time using indexes for lists and keys for dictionaries.

## Real-World Applications

Nested data structures are widely used in:

- REST APIs.
- JSON documents.
- Database records.
- Cloud computing platforms.
- Machine Learning datasets.
- Banking applications.
- E-commerce systems.
- Social media platforms.

For example, an online shopping website stores customer information, orders, and products using nested dictionaries and lists.

## Advantages of Nested Data Structures

Using nested data structures provides several benefits:

- Organizes complex information efficiently.
- Represents real-world relationships accurately.
- Makes large datasets easier to manage.
- Supports scalable application development.
- Simplifies structured data storage.

## Common Beginner Mistakes

Some common mistakes include:

- Confusing list indexes with dictionary keys.
- Forgetting the nesting order.
- Accessing keys that do not exist.
- Using incorrect indexes.

IMPORTANT: Always understand the structure of the data before accessing nested values.

## Best Practices

Follow these guidelines while working with nested data structures:

- Keep nesting simple whenever possible.
- Use meaningful key names.
- Organize related information together.
- Avoid unnecessary levels of nesting.
- Format nested structures neatly for better readability.

## Key Points

- Nested data structures contain other data structures.
- Lists can contain dictionaries.
- Dictionaries can contain lists or other dictionaries.
- Nested structures represent complex real-world information.
- They are widely used in APIs, JSON files, databases, and cloud applications.

IMPORTANT: Nested data structures are one of the most important concepts in modern Python programming because most real-world applications exchange and store data in nested formats.
`,

  examples: [
    {
      title: "Example 1: List of Dictionaries",

      code: `employees = [
    {
        "name": "Alice",
        "department": "AI"
    },
    {
        "name": "Bob",
        "department": "Cybersecurity"
    }
]

print(employees)`,

      output: `[{'name': 'Alice', 'department': 'AI'}, {'name': 'Bob', 'department': 'Cybersecurity'}]`,
    },

    {
      title: "Example 2: Accessing Nested Data",

      code: `employees = [
    {
        "name": "Alice",
        "department": "AI"
    },
    {
        "name": "Bob",
        "department": "Cybersecurity"
    }
]

print(employees[1]["department"])`,

      output: `Cybersecurity`,
    },

    {
      title: "Example 3: Dictionary Inside a Dictionary",

      code: `response = {
    "server": {
        "name": "Auth-Service",
        "status": "Running"
    }
}

print(response["server"]["status"])`,

      output: `Running`,
    },

    {
      title: "Example 4: Dictionary Containing a List",

      code: `student = {
    "name": "Sophia",
    "courses": ["Python", "AI", "Cybersecurity"]
}

print(student["courses"][1])`,

      output: `AI`,
    },
  ],
};

export default lesson7;