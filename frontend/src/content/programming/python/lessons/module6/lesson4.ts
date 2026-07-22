const lesson4 = {
  id: "lesson4",

  title: "Sets",

  previousLesson: "/lesson/python-development/module6/lesson3",

  nextLesson: "/lesson/python-development/module6/lesson5",

  content: `
# Sets

In the previous lesson, you learned how tuples store fixed collections of data that cannot be modified. However, there are situations where we need to store data without allowing duplicate values. Python provides **Sets** for this purpose.

A set is an unordered collection of unique values. If duplicate values are added, Python automatically removes them.

Sets are widely used in data analysis, cybersecurity, machine learning, recommendation systems, and cloud applications where uniqueness and fast searching are important.

## Why Do We Need Sets?

Consider an online learning platform that stores programming languages offered in different courses.

Without a set:

languages = ["Python", "Java", "Python", "C++", "Java"]

The same language appears multiple times.

Using a set:

languages = {"Python", "Java", "Python", "C++", "Java"}

Python automatically removes duplicate values.

Output:

{'Python', 'Java', 'C++'}

IMPORTANT: Sets automatically eliminate duplicate values, making them ideal for storing unique data.

## What is a Set?

A **Set** is an unordered collection of unique values stored inside curly braces **{}**.

Syntax:

variable_name = {item1, item2, item3}

Example:

error_codes = {404, 500, 403, 404, 500}

print(error_codes)

Output:

{403, 404, 500}

Even though duplicate values were provided, Python stored only unique values.

## Characteristics of Sets

Sets have several important characteristics:

- Sets do not allow duplicate values.
- Sets do not maintain insertion order.
- Sets are mutable.
- Sets support fast searching.
- Sets can grow and shrink during program execution.

Because sets are unordered, the output order may differ each time the program runs.

## Adding Elements

The **add()** method inserts a new element into a set.

Example:

technologies = {"Python", "Docker"}

technologies.add("Kubernetes")

print(technologies)

Output:

{'Python', 'Docker', 'Kubernetes'}

If the element already exists, Python ignores it.

## Removing Elements

The **remove()** method removes a specified element from the set.

Example:

technologies = {"Python", "Docker", "Kubernetes"}

technologies.remove("Docker")

print(technologies)

Output:

{'Python', 'Kubernetes'}

Python removes the specified element from the set.

## Membership Testing

One of the biggest advantages of sets is their extremely fast membership checking.

Example:

allowed_ips = {
    "192.168.1.10",
    "192.168.1.20",
    "192.168.1.30"
}

print("192.168.1.20" in allowed_ips)

Output:

True

Membership testing is much faster in sets compared to many other data structures.

IMPORTANT: Sets are highly optimized for checking whether an item exists.

## Real-World Applications

Sets are widely used in:

- Cybersecurity applications.
- Authentication systems.
- Recommendation engines.
- Machine Learning.
- Data analysis.
- Cloud monitoring.
- Student enrollment systems.
- Duplicate record removal.

For example, a cybersecurity application may store blocked IP addresses in a set because duplicate entries are unnecessary and searching must be fast.

## Advantages of Sets

Using sets provides several benefits:

- Automatically removes duplicate values.
- Performs fast membership testing.
- Easy to add and remove elements.
- Improves application performance.
- Stores only unique information.

## Common Beginner Mistakes

Some common mistakes include:

- Expecting sets to maintain order.
- Trying to access elements using indexes.
- Confusing sets with dictionaries.
- Forgetting that duplicate values are automatically removed.

IMPORTANT: Sets do not support indexing because they are unordered.

## Best Practices

Follow these guidelines while working with sets:

- Use sets whenever duplicate values are not allowed.
- Use meaningful variable names.
- Avoid relying on the order of elements.
- Use sets for fast membership testing.
- Choose sets for filtering unique values from large datasets.

## Key Points

- Sets store unique values.
- Sets are created using curly braces {}.
- Duplicate values are automatically removed.
- Sets are unordered.
- Sets are mutable.
- Sets provide very fast membership testing.

IMPORTANT: Sets are one of the most efficient data structures for handling unique values and are widely used in modern software development.
`,

  examples: [
    {
      title: "Example 1: Creating a Set",

      code: `error_codes = {404, 500, 403, 404, 500}

print(error_codes)`,

      output: `{403, 404, 500}`,
    },

    {
      title: "Example 2: Adding an Element",

      code: `technologies = {"Python", "Docker"}

technologies.add("Kubernetes")

print(technologies)`,

      output: `{'Python', 'Docker', 'Kubernetes'}`,
    },

    {
      title: "Example 3: Removing an Element",

      code: `technologies = {"Python", "Docker", "Kubernetes"}

technologies.remove("Docker")

print(technologies)`,

      output: `{'Python', 'Kubernetes'}`,
    },

    {
      title: "Example 4: Membership Testing",

      code: `allowed_ips = {
    "192.168.1.10",
    "192.168.1.20",
    "192.168.1.30"
}

print("192.168.1.20" in allowed_ips)
print("192.168.1.50" in allowed_ips)`,

      output: `True
False`,
    },
  ],
};

export default lesson4;