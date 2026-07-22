const lesson1 = {
  id: "lesson1",

  title: "Introduction to Data Structures",

  previousLesson: "/lesson/python-development/module6/about",

  nextLesson: "/lesson/python-development/module6/lesson2",

  content: `
# Introduction to Data Structures

In the previous module, you learned how to write reusable programs using functions. However, real-world applications rarely work with a single piece of information. They often need to manage collections of related data.

For example:

- An online learning platform stores thousands of courses.
- An e-commerce website manages millions of products.
- A social media application stores user profiles.
- A cloud platform monitors hundreds of virtual servers.

Creating separate variables for every value quickly becomes difficult and inefficient.

Python solves this problem using **Data Structures**, which allow multiple values to be stored, organized, and processed efficiently.

## Why Do We Need Data Structures?

Suppose you are building an online learning platform and need to store the names of enrolled courses.

Without data structures:

course1 = "Python"
course2 = "Machine Learning"
course3 = "Cybersecurity"
course4 = "Cloud Computing"

Although this works for a small number of values, it becomes difficult to manage as the amount of data grows.

Imagine storing 10,000 course names using separate variables. It would make the program difficult to read, maintain, and update.

Data structures allow all related values to be stored together, making programs cleaner and easier to manage.

IMPORTANT: Data structures help organize large amounts of information efficiently.

## What is a Data Structure?

A **Data Structure** is a way of organizing and storing data so that it can be accessed, modified, and processed efficiently.

Different data structures are designed for different purposes. Some are optimized for storing ordered data, while others are designed for fast searching or preventing duplicate values.

Choosing the correct data structure is an important programming skill because it directly affects the performance and scalability of an application.

## Python Built-in Data Structures

Python provides four major built-in data structures.

### Lists

Lists store ordered collections of items.

Example:

courses = ["Python", "AI", "Cybersecurity"]

Lists are useful when the collection changes frequently.

### Tuples

Tuples store ordered collections of values that should not change.

Example:

server_location = ("Mumbai", "India")

Tuples are ideal for fixed information.

### Sets

Sets store unique values without duplicates.

Example:

supported_languages = {"Python", "Java", "C++"}

Sets automatically remove duplicate values.

### Dictionaries

Dictionaries store data as key-value pairs.

Example:

employee = {
    "name": "Alex",
    "department": "Security"
}

Dictionaries make it easy to access information using meaningful keys instead of indexes.

## Choosing the Right Data Structure

Each data structure has its own strengths.

Use:

- Lists when order matters and data changes frequently.
- Tuples when data should remain constant.
- Sets when duplicate values are not allowed.
- Dictionaries when information has labels or keys.

IMPORTANT: There is no single best data structure. The correct choice depends on the problem you are solving.

## Real-World Applications

Data structures are used in almost every software application.

Examples include:

- E-commerce platforms storing products.
- Banking systems managing customer accounts.
- Cloud platforms tracking virtual machines.
- Machine Learning applications processing datasets.
- Social media applications storing user information.
- Cybersecurity tools maintaining threat databases.
- Inventory management systems.
- Online learning platforms.

For example, a cloud monitoring system may use:

- A List to store active servers.
- A Tuple to store server coordinates.
- A Set to store unique error codes.
- A Dictionary to store server details.

Each data structure is selected based on the type of data being managed.

## Advantages of Data Structures

Using data structures provides several benefits:

- Organizes related information efficiently.
- Simplifies data management.
- Improves program performance.
- Makes code easier to read.
- Supports scalable application development.
- Reduces code duplication.

## Common Beginner Mistakes

Some common mistakes include:

- Using separate variables instead of collections.
- Choosing the wrong data structure.
- Ignoring the strengths of different data structures.
- Storing unrelated information together.

IMPORTANT: Always choose the simplest data structure that satisfies the requirements of your program.

## Best Practices

Follow these guidelines while working with data structures:

- Understand the purpose of each data structure.
- Use meaningful variable names.
- Select data structures based on how data will be accessed.
- Keep related information together.
- Write clean and readable code.

## Key Points

- A data structure organizes and stores multiple values.
- Python provides Lists, Tuples, Sets, and Dictionaries.
- Each data structure has different advantages.
- Choosing the correct data structure improves performance and readability.
- Data structures are fundamental to modern software development.

IMPORTANT: Mastering data structures is essential because they are the foundation of algorithms, databases, machine learning, artificial intelligence, web development, and system design.
`,

  examples: [
    {
      title: "Example 1: Storing Data Without Data Structures",

      code: `course1 = "Python"
course2 = "Machine Learning"
course3 = "Cybersecurity"
course4 = "Cloud Computing"

print(course1)
print(course2)`,

      output: `Python
Machine Learning`,
    },

    {
      title: "Example 2: Using a List",

      code: `courses = ["Python", "AI", "Cybersecurity"]

print(courses)`,

      output: `['Python', 'AI', 'Cybersecurity']`,
    },

    {
      title: "Example 3: Using Different Data Structures",

      code: `server_location = ("Mumbai", "India")

supported_languages = {"Python", "Java", "C++"}

employee = {
    "name": "Alex",
    "department": "Security"
}

print(server_location)
print(supported_languages)
print(employee)`,

      output: `('Mumbai', 'India')
{'Python', 'Java', 'C++'}
{'name': 'Alex', 'department': 'Security'}`,
    },

    {
      title: "Example 4: Cloud Monitoring System",

      code: `active_servers = ["Auth-Service", "Payment-Service"]

server_location = ("Mumbai", "India")

error_codes = {404, 500, 403}

server_details = {
    "name": "Auth-Service",
    "status": "Running"
}

print(active_servers)
print(server_location)
print(error_codes)
print(server_details)`,

      output: `['Auth-Service', 'Payment-Service']
('Mumbai', 'India')
{403, 404, 500}
{'name': 'Auth-Service', 'status': 'Running'}`,
    },
  ],
};

export default lesson1;