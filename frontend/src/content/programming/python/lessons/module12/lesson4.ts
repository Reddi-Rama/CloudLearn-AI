const lesson4 = {
  id: "lesson4",
  title: "Working with JSON Data",
  previousLesson: "/lesson/python-development/module12/lesson3",
  nextLesson: "/lesson/python-development/module12/lesson5",
  content: `
# Working with JSON Data

Most modern APIs exchange information using **JSON (JavaScript Object Notation)**. When an application sends a request to an API, the server usually responds with data formatted as JSON.

JSON is lightweight, human-readable, and easy for computers to process. It has become the standard format for communication between applications over the internet.

Understanding JSON is essential because almost every modern API uses it.

---

# What is JSON?

JSON stands for **JavaScript Object Notation**.

Despite its name, JSON is not limited to JavaScript. It is supported by almost every modern programming language, including Python.

JSON stores information as **key-value pairs**.

Example:

\`\`\`json
{
    "course": "Python Development",
    "duration": "12 Weeks",
    "students": 3500
}
\`\`\`

Each piece of information is associated with a unique key.

---

# Why Do APIs Use JSON?

JSON has become the preferred format because it is:

- Easy to read
- Easy to write
- Lightweight
- Language-independent
- Fast to process
- Easy to transfer over networks

These advantages make JSON ideal for exchanging data between applications.

---

# Converting JSON into Python Objects

The **requests** library provides a convenient method called **json()**.

Example:

\`\`\`python
import requests

response = requests.get(
    "https://api.example.com/course"
)

data = response.json()

print(data["course"])
\`\`\`

Output:

\`\`\`
Python Development
\`\`\`

The \`json()\` method converts JSON data into Python dictionaries and lists.

---

# JSON to Python Mapping

Python automatically converts JSON data into equivalent Python data types.

- JSON Object → Python Dictionary
- JSON Array → Python List
- JSON String → Python String
- JSON Number → int or float
- JSON Boolean → bool
- JSON Null → None

This automatic conversion makes working with API responses simple and efficient.

---

# Accessing JSON Data

Once converted into a Python dictionary, values can be accessed using their keys.

Example:

\`\`\`python
course = {
    "name": "Python",
    "duration": "12 Weeks"
}

print(course["name"])
print(course["duration"])
\`\`\`

Output:

\`\`\`
Python
12 Weeks
\`\`\`

Nested JSON objects can also be accessed using multiple keys.

---

# Real-World Example

Suppose a weather API returns the following JSON response:

\`\`\`json
{
    "city": "Mumbai",
    "temperature": 29,
    "condition": "Cloudy"
}
\`\`\`

A Python application can extract individual values and display them to users without processing the entire response manually.

This ability makes APIs highly flexible and efficient.

---

# IMPORTANT

Never assume that an API will always return the expected JSON structure.

Sometimes:

- Keys may be missing.
- Values may be empty.
- Data types may change.
- Error messages may replace expected responses.

Professional applications always validate JSON data before using it.

---

# Best Practices

Follow these best practices while working with JSON:

- Always validate API responses.
- Check whether required keys exist.
- Handle missing values gracefully.
- Avoid assuming fixed response structures.
- Read API documentation carefully.

These practices improve application reliability.

---

# Common Beginner Mistakes

Beginners often make mistakes such as:

- Assuming every response is valid JSON.
- Accessing keys without checking if they exist.
- Ignoring API error responses.
- Confusing dictionaries with lists.
- Forgetting to call the \`json()\` method.

Avoiding these mistakes makes your programs more robust.

---

# Key Points

- JSON stands for JavaScript Object Notation.
- JSON is the standard format used by modern APIs.
- The \`response.json()\` method converts JSON into Python objects.
- JSON objects become Python dictionaries.
- JSON arrays become Python lists.
- Always validate JSON data before processing it.
- Understanding JSON is essential for working with APIs.
`,
  examples: [
    {
      title: "Example 1: Creating a Python Dictionary",
      code: `course = {
    "name": "Python Development",
    "duration": "12 Weeks"
}

print(course)`,
      output: `{'name': 'Python Development', 'duration': '12 Weeks'}`,
    },
    {
      title: "Example 2: Accessing JSON Values",
      code: `course = {
    "name": "Python Development",
    "students": 3500
}

print(course["name"])
print(course["students"])`,
      output: `Python Development
3500`,
    },
    {
      title: "Example 3: Converting API Response to JSON",
      code: `import requests

response = requests.get("https://api.example.com/course")

data = response.json()

print(data)`,
      output: `{'course': 'Python Development', 'duration': '12 Weeks'}`,
    },
    {
      title: "Example 4: Reading Multiple JSON Fields",
      code: `weather = {
    "city": "Mumbai",
    "temperature": 29,
    "condition": "Cloudy"
}

print("City:", weather["city"])
print("Temperature:", weather["temperature"])
print("Condition:", weather["condition"])`,
      output: `City: Mumbai
Temperature: 29
Condition: Cloudy`,
    },
  ],
};

export default lesson4;