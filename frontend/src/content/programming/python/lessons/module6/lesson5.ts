const lesson5 = {
  id: "lesson5",

  title: "Dictionaries",

  previousLesson: "/lesson/python-development/module6/lesson4",

  nextLesson: "/lesson/python-development/module6/lesson6",

  content: `
# Dictionaries

In the previous lesson, you learned how sets store unique values without duplicates. While lists, tuples, and sets store data as collections of values, there are many situations where each value needs a meaningful label.

For example, consider storing information about an employee.

Instead of remembering that the employee's name is stored at index 1 or 2, it is much easier to access it using the label **"name"**.

Python provides **Dictionaries** to solve this problem.

A dictionary stores data as **key-value pairs**, making information easier to organize and retrieve.

Dictionaries are one of the most widely used data structures in Python and are commonly used in web development, APIs, databases, cloud computing, machine learning, and data analysis.

## Why Do We Need Dictionaries?

Suppose you need to store information about an employee.

Using a list:

employee = [1045, "Alex", "Cybersecurity"]

Although this stores the data, it is difficult to remember which index represents the employee ID, name, or department.

Using a dictionary:

employee = {
    "id": 1045,
    "name": "Alex",
    "department": "Cybersecurity"
}

Now each value has a meaningful name, making the code much easier to understand.

IMPORTANT: Dictionaries allow data to be accessed using meaningful keys instead of numeric indexes.

## What is a Dictionary?

A **Dictionary** is a collection of data stored as **key-value pairs**.

Each key is unique and is associated with a specific value.

Syntax:

variable_name = {
    key1: value1,
    key2: value2
}

Example:

server = {
    "name": "Auth-Service",
    "status": "Running",
    "cpu_usage": 72
}

print(server)

Output:

{'name': 'Auth-Service', 'status': 'Running', 'cpu_usage': 72}

## Characteristics of Dictionaries

Dictionaries have several important characteristics:

- Data is stored as key-value pairs.
- Keys must be unique.
- Values can be of any data type.
- Dictionaries are mutable.
- Values are accessed using keys instead of indexes.

These features make dictionaries extremely useful for organizing structured information.

## Accessing Dictionary Values

Values are accessed using their keys.

Example:

employee = {
    "id": 1045,
    "name": "Alex",
    "department": "Cybersecurity"
}

print(employee["name"])

Output:

Alex

Python retrieves the value associated with the specified key.

IMPORTANT: Always use the correct key name while accessing dictionary values.

## Adding New Values

New key-value pairs can be added easily.

Example:

employee = {
    "name": "Alex"
}

employee["role"] = "Security Analyst"

print(employee)

Output:

{'name': 'Alex', 'role': 'Security Analyst'}

Dictionaries can grow dynamically during program execution.

## Updating Values

Existing values can also be modified.

Example:

server = {
    "status": "Offline"
}

server["status"] = "Running"

print(server)

Output:

{'status': 'Running'}

The old value is replaced with the new value.

## Removing Values

The **del** keyword removes a key-value pair.

Example:

server = {
    "name": "Auth-Service",
    "status": "Running"
}

del server["status"]

print(server)

Output:

{'name': 'Auth-Service'}

The specified key and its value are removed from the dictionary.

## Real-World Applications

Dictionaries are widely used in:

- REST APIs.
- JSON data.
- Database records.
- Configuration files.
- Web applications.
- Cloud monitoring systems.
- Machine Learning projects.
- Banking applications.

For example, a cloud monitoring system may store server details such as name, IP address, CPU usage, memory usage, and status inside a dictionary.

## Advantages of Dictionaries

Using dictionaries provides several benefits:

- Data is easy to understand.
- Keys make programs more readable.
- Fast access to values.
- Easy to update and modify.
- Ideal for storing structured information.

## Common Beginner Mistakes

Some common mistakes include:

- Trying to access a key that does not exist.
- Using duplicate keys.
- Confusing keys with values.
- Forgetting quotation marks around string keys.

IMPORTANT: Every key inside a dictionary should be unique.

## Best Practices

Follow these guidelines while working with dictionaries:

- Use meaningful key names.
- Keep key names consistent.
- Store related information together.
- Update values carefully.
- Use dictionaries whenever data has labels or attributes.

## Key Points

- Dictionaries store data as key-value pairs.
- Keys are used instead of indexes.
- Dictionaries are mutable.
- Keys should be unique.
- Dictionaries are ideal for structured information.

IMPORTANT: Dictionaries are one of the most important Python data structures because they are heavily used in APIs, databases, JSON files, configuration management, and modern software development.
`,

  examples: [
    {
      title: "Example 1: Creating a Dictionary",

      code: `server = {
    "name": "Auth-Service",
    "status": "Running",
    "cpu_usage": 72
}

print(server)`,

      output: `{'name': 'Auth-Service', 'status': 'Running', 'cpu_usage': 72}`,
    },

    {
      title: "Example 2: Accessing Dictionary Values",

      code: `employee = {
    "id": 1045,
    "name": "Alex",
    "department": "Cybersecurity"
}

print(employee["name"])`,

      output: `Alex`,
    },

    {
      title: "Example 3: Adding and Updating Values",

      code: `employee = {
    "name": "Alex"
}

employee["role"] = "Security Analyst"
employee["role"] = "Senior Security Analyst"

print(employee)`,

      output: `{'name': 'Alex', 'role': 'Senior Security Analyst'}`,
    },

    {
      title: "Example 4: Removing a Value",

      code: `server = {
    "name": "Auth-Service",
    "status": "Running"
}

del server["status"]

print(server)`,

      output: `{'name': 'Auth-Service'}`,
    },
  ],
};

export default lesson5;