const lesson2 = {
  id: "lesson2",

  title: "Lists",

  previousLesson: "/lesson/python-development/module6/lesson1",

  nextLesson: "/lesson/python-development/module6/lesson3",

  content: `
# Lists

In the previous lesson, you learned that data structures help organize and manage collections of data efficiently. Among all Python data structures, **Lists** are the most commonly used because they are flexible, easy to create, and easy to modify.

A list can store multiple values inside a single variable, making programs simpler and more organized.

Lists are widely used in web development, machine learning, automation, data analysis, cloud computing, and many other real-world applications.

## Why Do We Need Lists?

Suppose you are building an online learning platform and need to store available courses.

Without lists:

course1 = "Python"
course2 = "Machine Learning"
course3 = "Cybersecurity"

As the number of courses increases, managing separate variables becomes difficult.

Using a list:

courses = ["Python", "Machine Learning", "Cybersecurity"]

Now all related values are stored together, making the program easier to read and maintain.

IMPORTANT: Lists allow multiple related values to be stored in a single variable.

## What is a List?

A **List** is an ordered collection of items stored inside square brackets **[]**.

Syntax:

variable_name = [item1, item2, item3]

Example:

courses = ["Python", "Machine Learning", "Cybersecurity"]

print(courses)

Output:

['Python', 'Machine Learning', 'Cybersecurity']

Lists can contain any type of data.

## Characteristics of Lists

Lists have several important characteristics:

- Lists maintain the order of elements.
- Lists allow duplicate values.
- Lists are mutable, meaning they can be modified.
- Lists can store different types of data.
- Lists can grow or shrink during program execution.

Example:

server_info = ["Server-01", 72.5, True]

print(server_info)

Output:

['Server-01', 72.5, True]

The list contains a string, a floating-point number, and a Boolean value.

## Accessing List Elements

Each item in a list has an index.

Python starts indexing from **0**.

Example:

services = ["Authentication", "Payments", "Analytics"]

print(services[0])
print(services[2])

Output:

Authentication
Analytics

IMPORTANT: The first element always has an index of 0.

## Modifying List Elements

Since lists are mutable, their values can be changed.

Example:

regions = ["Asia", "Europe", "America"]

regions[1] = "Africa"

print(regions)

Output:

['Asia', 'Africa', 'America']

Only the specified element is updated while the remaining elements stay unchanged.

## Adding Elements

The **append()** method adds a new item to the end of the list.

Example:

languages = ["Python", "Java"]

languages.append("Go")

print(languages)

Output:

['Python', 'Java', 'Go']

This is one of the most frequently used list methods.

## Removing Elements

The **remove()** method removes a specific value from the list.

Example:

languages = ["Python", "Java", "Go"]

languages.remove("Java")

print(languages)

Output:

['Python', 'Go']

Python removes the first matching value from the list.

## Real-World Applications

Lists are widely used in professional software development.

Examples include:

- Storing products in an e-commerce website.
- Managing student records.
- Maintaining active users in a web application.
- Processing datasets in machine learning.
- Managing cloud servers.
- Creating playlists in music applications.
- Handling API responses.
- Automating repetitive tasks.

For example, an online shopping application stores available products inside a list so that new products can easily be added or removed.

## Advantages of Lists

Using lists provides several benefits:

- Easy to create and use.
- Can store multiple values together.
- Supports modification after creation.
- Allows duplicate values.
- Supports different data types.
- Provides many built-in methods.

## Common Beginner Mistakes

Some common mistakes include:

- Forgetting that indexing starts from 0.
- Accessing an index that does not exist.
- Confusing append() with insert().
- Assuming lists cannot be modified.
- Mixing unrelated values unnecessarily.

IMPORTANT: Always verify that the index exists before accessing a list element.

## Best Practices

Follow these guidelines while working with lists:

- Use meaningful variable names.
- Store related data together.
- Keep list contents consistent whenever possible.
- Use built-in list methods instead of writing unnecessary code.
- Choose lists when data changes frequently.

## Key Points

- Lists are ordered collections of data.
- Lists are created using square brackets [].
- Lists allow duplicate values.
- Lists are mutable.
- Lists support indexing.
- append() adds new elements.
- remove() removes existing elements.

IMPORTANT: Lists are one of the most powerful and frequently used data structures in Python. Mastering lists makes it much easier to work with data in real-world software applications.
`,

  examples: [
    {
      title: "Example 1: Creating a List",

      code: `courses = ["Python", "Machine Learning", "Cybersecurity"]

print(courses)`,

      output: `['Python', 'Machine Learning', 'Cybersecurity']`,
    },

    {
      title: "Example 2: Accessing List Elements",

      code: `services = ["Authentication", "Payments", "Analytics"]

print(services[0])
print(services[2])`,

      output: `Authentication
Analytics`,
    },

    {
      title: "Example 3: Adding an Element",

      code: `languages = ["Python", "Java"]

languages.append("Go")

print(languages)`,

      output: `['Python', 'Java', 'Go']`,
    },

    {
      title: "Example 4: Modifying and Removing Elements",

      code: `regions = ["Asia", "Europe", "America"]

regions[1] = "Africa"

regions.remove("America")

print(regions)`,

      output: `['Asia', 'Africa']`,
    },
  ],
};

export default lesson2;