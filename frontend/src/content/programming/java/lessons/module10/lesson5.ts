const lesson5 = {

  id: "lesson5",

  title: "Hashtable",

  content: `

# Hashtable

## Introduction

Hashtable is a class in Java that stores data as key-value pairs.

It is one of the older Map implementations in Java and is considered a legacy collection.

Map

↓

Hashtable

It provides synchronized access to its operations and has some important differences from HashMap.

---

# What Is Hashtable?

Hashtable belongs to:

java.util

Import it using:

\`\`\`java
import java.util.Hashtable;
\`\`\`

Example:

\`\`\`java
Hashtable<Integer, String> courses =
        new Hashtable<>();
\`\`\`

You can also declare it using the Map interface:

\`\`\`java
Map<Integer, String> courses =
        new Hashtable<>();
\`\`\`

---

# Basic Structure

A Hashtable stores:

Key → Value

For example:

101 → Java

102 → Python

103 → C++

Keys must be unique.

Values can be duplicated.

---

# Main Characteristics

A Hashtable:

- Stores key-value pairs.
- Does not allow duplicate keys.
- Allows duplicate values.
- Does not guarantee insertion order.
- Does not allow null keys.
- Does not allow null values.
- Provides synchronized methods.
- Is a legacy class.
- Is generally slower than non-synchronized alternatives for many modern use cases.

---

# Creating a Hashtable

Example:

\`\`\`java
import java.util.Hashtable;

public class HashtableExample {

    public static void main(String[] args) {

        Hashtable<Integer, String> courses =
                new Hashtable<>();

        courses.put(101, "Java");
        courses.put(102, "Python");
        courses.put(103, "C++");

        System.out.println(courses);

    }

}
\`\`\`

The output order should not be relied upon.

---

# Adding Data

Use put():

\`\`\`java
courses.put(
        101,
        "Java");

courses.put(
        102,
        "Python");

courses.put(
        103,
        "C++");
\`\`\`

The structure is conceptually:

101 → Java

102 → Python

103 → C++

---

# Duplicate Keys

Like other Maps, Hashtable does not allow duplicate keys.

Example:

\`\`\`java
courses.put(
        101,
        "Java");

courses.put(
        101,
        "Python");
\`\`\`

The second mapping replaces the first:

101 → Python

---

# Duplicate Values

Duplicate values are allowed.

Example:

\`\`\`java
courses.put(
        101,
        "Java");

courses.put(
        102,
        "Java");
\`\`\`

This is valid:

101 → Java

102 → Java

---

# Retrieving Values

Use:

\`\`\`java
String course =
        courses.get(101);
\`\`\`

Example:

\`\`\`java
System.out.println(
        courses.get(101));
\`\`\`

Output:

\`\`\`text
Java
\`\`\`

---

# Checking a Key

Use:

\`\`\`java
courses.containsKey(101);
\`\`\`

Example:

\`\`\`java
if (courses.containsKey(101)) {

    System.out.println(
            "Key exists.");

}
\`\`\`

---

# Checking a Value

Use:

\`\`\`java
courses.containsValue(
        "Java");
\`\`\`

Example:

\`\`\`java
if (courses.containsValue(
        "Java")) {

    System.out.println(
            "Value exists.");

}
\`\`\`

---

# Removing an Entry

Use:

\`\`\`java
courses.remove(101);
\`\`\`

This removes the mapping associated with key 101.

---

# Checking Size

Use:

\`\`\`java
courses.size();
\`\`\`

Example:

\`\`\`java
System.out.println(
        "Size: "
        + courses.size());
\`\`\`

---

# Checking Whether It Is Empty

Use:

\`\`\`java
courses.isEmpty();
\`\`\`

This checks whether the Hashtable contains no mappings.

---

# Clearing the Hashtable

Use:

\`\`\`java
courses.clear();
\`\`\`

This removes all mappings.

---

# Iterating Through Hashtable

You can use entrySet():

\`\`\`java
for (Map.Entry<Integer, String> entry :
        courses.entrySet()) {

    System.out.println(
            entry.getKey()
            + " → "
            + entry.getValue());

}
\`\`\`

You can also use keySet():

\`\`\`java
for (Integer key :
        courses.keySet()) {

    System.out.println(
            key
            + " → "
            + courses.get(key));

}
\`\`\`

---

# Using forEach()

Modern Java also supports:

\`\`\`java
courses.forEach(
        (key, value) ->
                System.out.println(
                        key
                        + " → "
                        + value));
\`\`\`

This provides a concise way to process entries.

---

# Hashtable Does Not Allow Null

This is one of the most important differences between Hashtable and HashMap.

The following is invalid:

\`\`\`java
Hashtable<Integer, String> map =
        new Hashtable<>();

map.put(
        null,
        "Java");
\`\`\`

A NullPointerException can occur.

Similarly:

\`\`\`java
map.put(
        101,
        null);
\`\`\`

is not allowed.

---

# Hashtable vs HashMap

This is an important comparison.

HashMap:

↓

Allows null key

Allows null values

Not synchronized by default


Hashtable:

↓

Does not allow null key

Does not allow null values

Synchronized

---

# Synchronization

Hashtable provides synchronized methods.

Conceptually:

Thread 1

↓

Hashtable

↑

Thread 2

Its operations provide built-in synchronization.

However, synchronization does not automatically make every sequence of multiple operations atomic.

For example, performing several operations together may still require additional synchronization or appropriate design.

---

# Why Was Hashtable Created?

Hashtable comes from Java's earlier collection APIs.

It existed before the modern Collections Framework was introduced.

Later, Java introduced interfaces and implementations such as:

Map

HashMap

LinkedHashMap

TreeMap

As a result, HashMap became the more common general-purpose choice when built-in synchronization was not required.

---

# Hashtable Is a Legacy Collection

When you see Hashtable in an older Java project, you should understand what it does.

However, for new code, you should normally evaluate modern alternatives instead of automatically choosing Hashtable.

Possible choices include:

HashMap

ConcurrentHashMap

depending on the application's requirements.

---

# Hashtable vs ConcurrentHashMap

For modern concurrent applications, ConcurrentHashMap is often considered instead of Hashtable.

Conceptually:

Hashtable

↓

Legacy synchronized Map


ConcurrentHashMap

↓

Modern concurrent Map

The correct choice depends on the application's concurrency requirements.

---

# Performance

Because Hashtable provides synchronization, there can be synchronization overhead.

For ordinary single-threaded use:

HashMap

is generally preferred.

For concurrent applications:

ConcurrentHashMap

may be more appropriate.

---

# Hashtable and Ordering

Hashtable does not guarantee insertion order.

For example, if you insert:

101 → Java

102 → Python

103 → C++

you should not depend on the iteration order being:

101

102

103

If insertion order matters, consider:

LinkedHashMap

---

# Hashtable and Duplicate Keys

Like other Map implementations:

Duplicate keys are not allowed.

Example:

\`\`\`java
Hashtable<Integer, String> courses =
        new Hashtable<>();

courses.put(
        101,
        "Java");

courses.put(
        101,
        "Python");
\`\`\`

Final mapping:

101 → Python

---

# Hashtable and Duplicate Values

Duplicate values are allowed.

Example:

\`\`\`java
courses.put(
        101,
        "Java");

courses.put(
        102,
        "Java");
\`\`\`

Both mappings can exist.

---

# Practical Example

\`\`\`java
import java.util.Hashtable;
import java.util.Map;

public class CourseHashtable {

    public static void main(String[] args) {

        Hashtable<Integer, String> courses =
                new Hashtable<>();

        courses.put(
                101,
                "Java");

        courses.put(
                102,
                "Python");

        courses.put(
                103,
                "C++");

        System.out.println(
                "Course 101: "
                + courses.get(101));

        System.out.println(
                "Contains 102: "
                + courses.containsKey(102));

        System.out.println(
                "\\nCourses:");

        for (Map.Entry<Integer, String> entry :
                courses.entrySet()) {

            System.out.println(
                    entry.getKey()
                    + " → "
                    + entry.getValue());

        }

    }

}
\`\`\`

Possible output:

\`\`\`text
Course 101: Java
Contains 102: true

Courses:
101 → Java
102 → Python
103 → C++
\`\`\`

The exact iteration order should not be relied upon.

---

# Practical Example: Configuration Data

A Hashtable can represent key-value configuration data in an older application.

Example:

\`\`\`java
Hashtable<String, String> config =
        new Hashtable<>();

config.put(
        "host",
        "localhost");

config.put(
        "port",
        "8080");

config.put(
        "mode",
        "production");
\`\`\`

The configuration data can then be retrieved using its keys.

---

# Practical Example: Synchronized Access

Consider a situation where multiple threads access shared key-value data.

Hashtable provides synchronization for its individual methods.

Conceptually:

Multiple Threads

↓

Hashtable

↓

Synchronized Operations

However, modern applications should evaluate whether a concurrent collection such as ConcurrentHashMap better matches the application's requirements.

---

# Common Mistakes

## 1. Trying to Store Null

This is not allowed:

\`\`\`java
map.put(
        null,
        "Java");
\`\`\`

or:

\`\`\`java
map.put(
        101,
        null);
\`\`\`

Hashtable does not allow null keys or null values.

---

## 2. Assuming Hashtable Maintains Insertion Order

It does not guarantee insertion order.

If insertion order matters, consider:

LinkedHashMap

---

## 3. Using Hashtable Automatically for Every Multithreaded Program

Hashtable is synchronized, but modern concurrent applications may require more suitable concurrency utilities such as:

ConcurrentHashMap

---

## 4. Confusing Hashtable with HashMap

Remember:

HashMap

→ null allowed


Hashtable

→ null not allowed

---

# Best Practices

- Understand Hashtable because it appears in legacy Java code.
- Do not choose it automatically for new applications.
- Use HashMap when built-in synchronization is unnecessary.
- Consider ConcurrentHashMap for modern concurrent Map requirements.
- Remember that Hashtable does not guarantee ordering.
- Never use null keys or values with Hashtable.
- Use generics for type safety.
- Choose the Map implementation based on the application's requirements.

---

# Interview Questions

## Q1. What is Hashtable?

Hashtable is a legacy synchronized Map implementation that stores key-value pairs.

---

## Q2. Does Hashtable allow duplicate keys?

No.

---

## Q3. Does Hashtable allow duplicate values?

Yes.

---

## Q4. Does Hashtable allow null keys?

No.

---

## Q5. Does Hashtable allow null values?

No.

---

## Q6. Is Hashtable synchronized?

Its methods provide built-in synchronization.

---

## Q7. What is the main difference between HashMap and Hashtable?

HashMap allows null keys and values and is not synchronized by default, while Hashtable does not allow null keys or values and provides synchronization.

---

## Q8. Is Hashtable recommended for most new Java applications?

Generally, no.

Modern alternatives are usually more appropriate depending on the requirements.

---

## Q9. What can be used for modern concurrent Map operations?

ConcurrentHashMap is a commonly used modern option.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain Hashtable.
- Create a Hashtable.
- Add key-value pairs.
- Retrieve values.
- Update mappings.
- Remove entries.
- Iterate through entries.
- Understand synchronization.
- Understand the null restrictions.
- Compare Hashtable and HashMap.
- Understand why Hashtable is considered a legacy collection.
- Recognize modern alternatives.

---

# Map Implementations Covered So Far

HashMap

↓

General-purpose key-value storage


LinkedHashMap

↓

Insertion-order iteration


TreeMap

↓

Sorted keys


Hashtable

↓

Legacy synchronized Map

---

# Choosing the Right Map

Need general-purpose key-value storage?

↓

HashMap


Need insertion order?

↓

LinkedHashMap


Need sorted keys?

↓

TreeMap


Working with legacy synchronized code?

↓

Hashtable

---

# Module Progress

✓ Lesson 1 — Introduction to Maps

✓ Lesson 2 — HashMap

✓ Lesson 3 — LinkedHashMap

✓ Lesson 4 — TreeMap

✓ Lesson 5 — Hashtable

→ Lesson 6 — Generic Classes

Lesson 7 — Generic Methods

Lesson 8 — Bounded Generics

Lesson 9 — Wildcards

Lesson 10 — Comparable

Lesson 11 — Comparator

Lesson 12 — Sorting Objects

Lesson 13 — Immutable Collections

Lesson 14 — Maps & Generics in Practice

Lesson 15 — Inventory Management System

---

# Next Lesson

## Lesson 6 — Generic Classes

You will learn:

- What Generics are.
- Why Generics are needed.
- Generic classes.
- Type parameters.
- Type safety.
- Generic fields.
- Generic constructors.
- Generic methods inside generic classes.
- Multiple type parameters.
- Practical examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson5;