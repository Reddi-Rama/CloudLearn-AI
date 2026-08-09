const lesson2 = {

  id: "lesson2",

  title: "HashMap",

  content: `

# HashMap

## Introduction

HashMap is one of the most commonly used implementations of the Map interface.

It stores data in the form:

Key → Value

and uses hashing internally to provide efficient average-case operations for adding, retrieving, and removing mappings.

Map

↓

HashMap

---

# What Is HashMap?

HashMap is a class from:

java.util

Import:

\`\`\`java
import java.util.HashMap;
\`\`\`

Example:

\`\`\`java
HashMap<Integer, String> courses =
        new HashMap<>();
\`\`\`

A common interface-based declaration is:

\`\`\`java
Map<Integer, String> courses =
        new HashMap<>();
\`\`\`

---

# Main Characteristics

A HashMap:

- Stores key-value pairs.
- Does not allow duplicate keys.
- Allows duplicate values.
- Does not guarantee iteration order.
- Allows one null key.
- Allows multiple null values.
- Uses hashing internally.
- Provides efficient average-case basic operations.

---

# Creating a HashMap

Example:

\`\`\`java
import java.util.HashMap;
import java.util.Map;

public class HashMapExample {

    public static void main(String[] args) {

        Map<Integer, String> courses =
                new HashMap<>();

        courses.put(101, "Java");
        courses.put(102, "Python");
        courses.put(103, "C++");

        System.out.println(courses);

    }

}
\`\`\`

The exact order displayed by a HashMap should not be relied upon.

---

# Adding Elements with put()

Use:

\`\`\`java
courses.put(
        101,
        "Java");
\`\`\`

Another mapping:

\`\`\`java
courses.put(
        102,
        "Python");
\`\`\`

The Map becomes conceptually:

101 → Java

102 → Python

---

# Updating a Value

Suppose:

\`\`\`java
courses.put(
        101,
        "Java");
\`\`\`

Now:

\`\`\`java
courses.put(
        101,
        "Advanced Java");
\`\`\`

The value is updated:

101 → Advanced Java

There is still only one key 101.

---

# Duplicate Keys

Consider:

\`\`\`java
Map<Integer, String> courses =
        new HashMap<>();

courses.put(
        101,
        "Java");

courses.put(
        101,
        "Python");
\`\`\`

The final mapping is:

101 → Python

The second put() replaces the previous value.

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

Result:

101 → Java

102 → Java

The keys are different, so both mappings are valid.

---

# Retrieving Values with get()

Use:

\`\`\`java
courses.get(101);
\`\`\`

Example:

\`\`\`java
String course =
        courses.get(101);

System.out.println(course);
\`\`\`

Output:

\`\`\`text
Java
\`\`\`

---

# Missing Keys

If a key is not present:

\`\`\`java
courses.get(999);
\`\`\`

The result is normally:

\`\`\`text
null
\`\`\`

Example:

\`\`\`java
System.out.println(
        courses.get(999));
\`\`\`

Output:

\`\`\`text
null
\`\`\`

---

# containsKey()

Use containsKey() to check whether a key exists.

Example:

\`\`\`java
if (courses.containsKey(101)) {

    System.out.println(
            "Course exists.");

}
\`\`\`

---

# containsValue()

You can also search for a value.

Example:

\`\`\`java
if (courses.containsValue(
        "Java")) {

    System.out.println(
            "Java exists.");

}
\`\`\`

---

# Removing a Mapping

Use:

\`\`\`java
courses.remove(101);
\`\`\`

This removes the mapping associated with key 101.

---

# Removing with Key and Value

You can also specify both the key and value:

\`\`\`java
courses.remove(
        101,
        "Java");
\`\`\`

The mapping is removed only if key 101 is currently associated with "Java".

---

# size()

Use:

\`\`\`java
courses.size();
\`\`\`

to determine the number of mappings.

---

# isEmpty()

Use:

\`\`\`java
courses.isEmpty();
\`\`\`

to determine whether the Map contains no mappings.

---

# clear()

Use:

\`\`\`java
courses.clear();
\`\`\`

to remove all mappings.

---

# getOrDefault()

getOrDefault() returns the mapped value if the key exists.

Otherwise, it returns the specified default value.

Example:

\`\`\`java
String course =
        courses.getOrDefault(
                999,
                "Not Found");

System.out.println(course);
\`\`\`

Output:

\`\`\`text
Not Found
\`\`\`

---

# putIfAbsent()

putIfAbsent() adds a mapping only if the key does not already have a mapping.

Example:

\`\`\`java
courses.put(
        101,
        "Java");

courses.putIfAbsent(
        101,
        "Python");
\`\`\`

The result remains:

101 → Java

because key 101 already exists.

---

# putIfAbsent() with a New Key

Example:

\`\`\`java
courses.putIfAbsent(
        104,
        "SQL");
\`\`\`

Since 104 does not exist, the new mapping is added:

104 → SQL

---

# replace()

replace() changes the value associated with an existing key.

Example:

\`\`\`java
courses.replace(
        101,
        "Advanced Java");
\`\`\`

Now:

101 → Advanced Java

---

# Conditional replace()

You can provide the old and new values.

Example:

\`\`\`java
courses.replace(
        101,
        "Java",
        "Advanced Java");
\`\`\`

The replacement occurs only if the current value is "Java".

---

# replaceAll()

replaceAll() applies a function to all mappings.

Example:

\`\`\`java
courses.replaceAll(
        (key, value) ->
                value.toUpperCase());
\`\`\`

If the Map contains:

101 → Java

102 → Python

it becomes:

101 → JAVA

102 → PYTHON

---

# Iterating with keySet()

If you only need keys:

\`\`\`java
for (Integer key :
        courses.keySet()) {

    System.out.println(key);

}
\`\`\`

This gives access to the keys.

---

# Iterating with values()

If you only need values:

\`\`\`java
for (String course :
        courses.values()) {

    System.out.println(course);

}
\`\`\`

This gives access to the values.

---

# Iterating with entrySet()

When you need both keys and values:

\`\`\`java
for (Map.Entry<Integer, String> entry :
        courses.entrySet()) {

    System.out.println(
            entry.getKey()
            + " → "
            + entry.getValue());

}
\`\`\`

This is a common and clear way to iterate through a Map.

---

# Iterating with forEach()

Modern Java also allows:

\`\`\`java
courses.forEach(
        (key, value) ->
                System.out.println(
                        key
                        + " → "
                        + value));
\`\`\`

This is concise and useful for simple processing.

---

# Hashing

HashMap uses hashing to organize keys.

Conceptually:

Key

↓

hashCode()

↓

Hash value

↓

Bucket

↓

Associated mapping

The hash helps the Map locate a suitable location for the key.

---

# hashCode()

Objects in Java inherit hashCode() from Object, although many classes override it.

Example:

\`\`\`java
String key = "Java";

System.out.println(
        key.hashCode());
\`\`\`

The resulting integer is used as part of hash-based collection processing.

---

# Hash Collisions

Different keys can sometimes produce the same hash value.

This is called a:

Hash Collision

Conceptually:

Key A

↓

Hash 25


Key B

↓

Hash 25

A collision does not mean that the keys are equal.

The Map uses additional equality checking to distinguish keys.

---

# equals() and hashCode()

For hash-based collections:

- Equal keys must have equal hash codes.
- Equal hash codes do not necessarily mean the keys are equal.

This relationship is important when using custom objects as HashMap keys.

---

# HashMap with Custom Keys

Suppose:

\`\`\`java
class Student {

    int id;

    Student(int id) {
        this.id = id;
    }

}
\`\`\`

If Student objects are used as keys, equals() and hashCode() should be implemented consistently when logical equality is required.

---

# Null Key

HashMap permits one null key.

Example:

\`\`\`java
Map<Integer, String> courses =
        new HashMap<>();

courses.put(
        null,
        "Java");
\`\`\`

A second null key does not create another mapping.

It updates the value associated with the null key.

---

# Multiple Null Values

HashMap can contain multiple null values as long as their keys are different.

Example:

\`\`\`java
courses.put(
        101,
        null);

courses.put(
        102,
        null);
\`\`\`

Both mappings are valid.

---

# HashMap Performance

Typical average-case complexity:

put() → O(1)

get() → O(1)

remove() → O(1)

containsKey() → O(1)

These are average-case characteristics.

Actual behavior depends on factors such as hashing, collisions, and implementation details.

---

# HashMap vs LinkedHashMap

HashMap:

↓

No guaranteed iteration order


LinkedHashMap:

↓

Insertion order maintained

Use HashMap when ordering is not required.

Use LinkedHashMap when predictable insertion order is required.

---

# HashMap vs TreeMap

HashMap:

- No guaranteed sorted order.
- Hash-based.
- Typical average-case basic operations are O(1).

TreeMap:

- Keys are sorted.
- Supports navigation operations.
- Typical basic operations are O(log n).

---

# HashMap vs Hashtable

HashMap:

- Allows null key.
- Allows null values.
- Not synchronized by default.

Hashtable:

- Does not allow null keys or values.
- Provides built-in synchronization.
- Is considered a legacy collection.

---

# Practical Example: Course Lookup

\`\`\`java
import java.util.HashMap;
import java.util.Map;

public class CourseLookup {

    public static void main(String[] args) {

        Map<Integer, String> courses =
                new HashMap<>();

        courses.put(
                101,
                "Java");

        courses.put(
                102,
                "Python");

        courses.put(
                103,
                "C++");

        int id = 102;

        String course =
                courses.get(id);

        System.out.println(
                "Course: " + course);

    }

}
\`\`\`

Output:

\`\`\`text
Course: Python
\`\`\`

---

# Practical Example: Frequency Counting

HashMap can be used to count occurrences.

Example:

\`\`\`java
import java.util.HashMap;
import java.util.Map;

public class FrequencyExample {

    public static void main(String[] args) {

        String[] languages = {
                "Java",
                "Python",
                "Java",
                "C++",
                "Python",
                "Java"
        };

        Map<String, Integer> count =
                new HashMap<>();

        for (String language :
                languages) {

            count.put(
                    language,
                    count.getOrDefault(
                            language,
                            0) + 1);
        }

        System.out.println(count);

    }

}
\`\`\`

The Map stores the frequency of each language.

---

# Practical Example: Using merge()

The same frequency pattern can also use merge():

\`\`\`java
Map<String, Integer> count =
        new HashMap<>();

for (String language :
        languages) {

    count.merge(
            language,
            1,
            Integer::sum);

}
\`\`\`

If the key does not exist:

Java → 1

If Java already has count 1:

Java → 2

---

# Common Mistakes

## 1. Expecting HashMap to Maintain Order

Do not depend on HashMap iteration order.

---

## 2. Assuming Duplicate Keys Are Stored

They are not.

The latest value replaces the previous value.

---

## 3. Confusing HashMap with a List

This:

\`\`\`java
map.get(0);
\`\`\`

means retrieve the value associated with key 0.

It does not mean retrieve the first entry.

---

## 4. Ignoring equals() and hashCode()

Custom key classes need consistent implementations when logical equality is required.

---

## 5. Forgetting Null Handling

get() can return null because:

- The key does not exist.
- The key exists and its value is null.

Use containsKey() when this distinction matters.

---

# Best Practices

- Use HashMap for general-purpose key-value storage when ordering is not required.
- Use meaningful key types.
- Use immutable or stable keys when appropriate.
- Make sure custom key classes implement equals() and hashCode() consistently.
- Use entrySet() when both keys and values are required.
- Use getOrDefault() for convenient frequency-counting patterns.
- Use LinkedHashMap when insertion order matters.
- Use TreeMap when sorted keys are required.
- Do not depend on HashMap iteration order.

---

# Interview Questions

## Q1. What is HashMap?

HashMap is a hash-based implementation of the Map interface that stores key-value pairs.

---

## Q2. Does HashMap allow duplicate keys?

No.

A new value replaces the previous value for an existing key.

---

## Q3. Can HashMap contain duplicate values?

Yes.

---

## Q4. Does HashMap maintain insertion order?

No.

It does not guarantee insertion order.

---

## Q5. Can HashMap contain null?

Yes.

It permits one null key and multiple null values.

---

## Q6. What is the average complexity of get()?

Typically O(1) average-case.

---

## Q7. What is a hash collision?

A hash collision occurs when different keys produce the same hash value.

---

## Q8. Why are equals() and hashCode() important?

They help hash-based collections correctly identify logically equal keys.

---

## Q9. What is getOrDefault()?

It returns the value for a key if present; otherwise, it returns a specified default value.

---

## Q10. How is HashMap different from TreeMap?

HashMap does not guarantee sorted keys, while TreeMap maintains keys in sorted order.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain HashMap.
- Create a HashMap.
- Add key-value mappings.
- Update existing values.
- Retrieve values.
- Remove mappings.
- Search by key or value.
- Iterate through entries.
- Use getOrDefault().
- Use putIfAbsent().
- Use replace().
- Understand hashing.
- Understand hash collisions.
- Understand equals() and hashCode().
- Understand null handling.
- Compare HashMap, LinkedHashMap, TreeMap, and Hashtable.
- Understand typical HashMap performance.

---

# Module Progress

✓ Lesson 1 — Introduction to Maps

✓ Lesson 2 — HashMap

→ Lesson 3 — LinkedHashMap

Lesson 4 — TreeMap

Lesson 5 — Hashtable

Lesson 6 — Generic Classes

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

## Lesson 3 — LinkedHashMap

You will learn:

- What is LinkedHashMap?
- How insertion order is maintained.
- Creating LinkedHashMap.
- Adding and updating mappings.
- Retrieving values.
- Removing entries.
- Iterating through entries.
- HashMap vs LinkedHashMap.
- Access-order mode.
- LRU-style cache concept.
- Practical examples.
- Best practices.
- Interview questions.

`

};

export default lesson2;