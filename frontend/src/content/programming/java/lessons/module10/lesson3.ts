const lesson3 = {

  id: "lesson3",

  title: "LinkedHashMap",

  content: `

# LinkedHashMap

## Introduction

LinkedHashMap is an implementation of the Map interface that stores key-value pairs while maintaining a predictable iteration order.

By default, that order is:

Insertion Order

Map

↓

LinkedHashMap

It combines the general-purpose behavior of HashMap with linked ordering information.

---

# What Is LinkedHashMap?

LinkedHashMap belongs to:

java.util

Import:

\`\`\`java
import java.util.LinkedHashMap;
\`\`\`

Create one:

\`\`\`java
LinkedHashMap<Integer, String> courses =
        new LinkedHashMap<>();
\`\`\`

Or use the interface:

\`\`\`java
Map<Integer, String> courses =
        new LinkedHashMap<>();
\`\`\`

---

# Main Characteristics

A LinkedHashMap:

- Stores key-value pairs.
- Does not allow duplicate keys.
- Allows duplicate values.
- Maintains insertion order by default.
- Allows one null key.
- Allows multiple null values.
- Provides efficient average-case basic Map operations.
- Does not provide index-based access.

---

# HashMap vs LinkedHashMap

The most important difference is:

Ordering

HashMap

↓

No guaranteed iteration order

LinkedHashMap

↓

Insertion order maintained

Suppose you insert:

101 → Java

102 → Python

103 → C++

A LinkedHashMap iterates through the entries in that insertion order.

---

# Creating a LinkedHashMap

\`\`\`java
import java.util.LinkedHashMap;
import java.util.Map;

public class LinkedHashMapExample {

    public static void main(String[] args) {

        Map<Integer, String> courses =
                new LinkedHashMap<>();

        courses.put(
                101,
                "Java");

        courses.put(
                102,
                "Python");

        courses.put(
                103,
                "C++");

        System.out.println(courses);

    }

}
\`\`\`

Output:

\`\`\`text
{101=Java, 102=Python, 103=C++}
\`\`\`

The insertion order is preserved.

---

# Adding Elements

Use:

\`\`\`java
courses.put(
        101,
        "Java");

courses.put(
        102,
        "Python");
\`\`\`

The Map becomes:

101 → Java

102 → Python

---

# Duplicate Keys

A LinkedHashMap does not allow duplicate keys.

Example:

\`\`\`java
courses.put(
        101,
        "Java");

courses.put(
        101,
        "Python");
\`\`\`

The result is:

101 → Python

The value is updated.

---

# Updating an Existing Key

Suppose:

\`\`\`java
courses.put(
        101,
        "Java");
\`\`\`

Then:

\`\`\`java
courses.put(
        101,
        "Advanced Java");
\`\`\`

The Map becomes:

101 → Advanced Java

The key remains in its existing insertion position.

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

because the keys are different.

---

# Retrieving Values

Use get():

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

# Checking Keys

Use:

\`\`\`java
courses.containsKey(101);
\`\`\`

Example:

\`\`\`java
if (courses.containsKey(101)) {

    System.out.println(
            "Course exists.");

}
\`\`\`

---

# Checking Values

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

You can also specify both:

\`\`\`java
courses.remove(
        101,
        "Java");
\`\`\`

The mapping is removed only if key 101 is associated with "Java".

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

to check whether the Map contains no mappings.

---

# clear()

Use:

\`\`\`java
courses.clear();
\`\`\`

to remove all mappings.

---

# getOrDefault()

LinkedHashMap supports the standard Map operations such as getOrDefault().

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

Example:

\`\`\`java
courses.putIfAbsent(
        101,
        "Python");
\`\`\`

If key 101 already exists, the existing value remains unchanged.

---

# replace()

Example:

\`\`\`java
courses.replace(
        101,
        "Advanced Java");
\`\`\`

This changes the value associated with an existing key.

---

# Iterating with keySet()

Use:

\`\`\`java
for (Integer key :
        courses.keySet()) {

    System.out.println(key);

}
\`\`\`

This gives access to the keys.

The keys are visited according to the LinkedHashMap's iteration order.

---

# Iterating with values()

Use:

\`\`\`java
for (String course :
        courses.values()) {

    System.out.println(course);

}
\`\`\`

This gives access to the values.

---

# Iterating with entrySet()

When both key and value are required:

\`\`\`java
for (Map.Entry<Integer, String> entry :
        courses.entrySet()) {

    System.out.println(
            entry.getKey()
            + " → "
            + entry.getValue());

}
\`\`\`

---

# Iterating with forEach()

Modern Java allows:

\`\`\`java
courses.forEach(
        (key, value) ->
                System.out.println(
                        key
                        + " → "
                        + value));
\`\`\`

This is useful for simple processing.

---

# Insertion Order

Suppose:

\`\`\`java
Map<Integer, String> courses =
        new LinkedHashMap<>();

courses.put(
        103,
        "C++");

courses.put(
        101,
        "Java");

courses.put(
        102,
        "Python");
\`\`\`

Iteration follows:

103 → C++

101 → Java

102 → Python

The entries are not automatically sorted.

They follow insertion order.

---

# Insertion Order Is Not Sorted Order

This is very important.

Suppose you insert:

30

10

20

A LinkedHashMap maintains:

30

10

20

It does not automatically produce:

10

20

30

If sorted keys are required, use TreeMap.

---

# Updating an Existing Key

Consider:

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

courses.put(
        102,
        "Advanced Python");
\`\`\`

The resulting order remains based on the original insertion:

101

102

103

Updating key 102 does not normally move it to the end.

---

# Access-Order Mode

LinkedHashMap can also be configured to use:

Access Order

instead of normal insertion order.

The constructor is:

\`\`\`java
LinkedHashMap<K, V>(
        initialCapacity,
        loadFactor,
        true);
\`\`\`

The third argument:

true

enables access-order mode.

---

# Access-Order Example

\`\`\`java
import java.util.LinkedHashMap;
import java.util.Map;

public class AccessOrderExample {

    public static void main(String[] args) {

        Map<Integer, String> courses =
                new LinkedHashMap<>(
                        16,
                        0.75f,
                        true);

        courses.put(
                101,
                "Java");

        courses.put(
                102,
                "Python");

        courses.put(
                103,
                "C++");

        courses.get(101);

        courses.forEach(
                (key, value) ->
                        System.out.println(
                                key
                                + " → "
                                + value));

    }

}
\`\`\`

In access-order mode, accessing an existing entry can affect its iteration position.

This is different from normal insertion-order mode.

---

# Why Is Access Order Useful?

Access-order mode can be useful when designing cache-like structures.

Conceptually:

Frequently accessed

↓

Keep track of recent access

↓

Least recently used

↓

Potentially remove old entries

LinkedHashMap can therefore serve as a building block for an:

LRU-style cache

---

# LinkedHashMap and Null

LinkedHashMap permits:

- One null key.
- Multiple null values.

Example:

\`\`\`java
Map<Integer, String> courses =
        new LinkedHashMap<>();

courses.put(
        null,
        "Java");

courses.put(
        101,
        null);

courses.put(
        102,
        null);
\`\`\`

These mappings are permitted.

---

# No Index-Based Access

LinkedHashMap is a Map.

It does not provide index-based access.

This:

\`\`\`java
map.get(0);
\`\`\`

means:

Retrieve the value associated with key 0.

It does not mean:

Retrieve the first entry.

---

# Performance Characteristics

LinkedHashMap provides typical average-case performance similar to HashMap for basic Map operations.

Typical:

put() → O(1)

get() → O(1)

remove() → O(1)

containsKey() → O(1)

The linked ordering information adds some memory overhead compared with HashMap.

---

# LinkedHashMap vs HashMap

## HashMap

- Key-value pairs.
- Unique keys.
- Duplicate values allowed.
- No guaranteed iteration order.
- Hash-based.
- Good when ordering is unnecessary.

## LinkedHashMap

- Key-value pairs.
- Unique keys.
- Duplicate values allowed.
- Insertion order maintained by default.
- Hash-based with linked ordering information.
- Good when predictable iteration order is required.

---

# LinkedHashMap vs TreeMap

LinkedHashMap:

↓

Insertion order

TreeMap:

↓

Sorted key order

Suppose you insert:

30

10

20

LinkedHashMap:

30

10

20

TreeMap:

10

20

30

---

# Practical Example: Browser History

Suppose an application wants to maintain pages in the order they were added.

\`\`\`java
Map<Integer, String> history =
        new LinkedHashMap<>();

history.put(
        1,
        "Home");

history.put(
        2,
        "Courses");

history.put(
        3,
        "Profile");

history.forEach(
        (key, value) ->
                System.out.println(
                        key
                        + " → "
                        + value));
\`\`\`

Output:

\`\`\`text
1 → Home
2 → Courses
3 → Profile
\`\`\`

The insertion order is preserved.

---

# Practical Example: Transaction History

A banking application may need to display transactions in the order they were recorded.

\`\`\`java
Map<Integer, String> transactions =
        new LinkedHashMap<>();

transactions.put(
        1001,
        "Deposit");

transactions.put(
        1002,
        "Transfer");

transactions.put(
        1003,
        "Withdrawal");
\`\`\`

Iteration follows:

1001 → Deposit

1002 → Transfer

1003 → Withdrawal

---

# Practical Example: Configuration Order

Suppose configuration entries need predictable iteration order.

\`\`\`java
Map<String, String> config =
        new LinkedHashMap<>();

config.put(
        "host",
        "localhost");

config.put(
        "port",
        "8080");

config.put(
        "mode",
        "development");
\`\`\`

The configuration entries can be processed in the same order in which they were inserted.

---

# Common Mistakes

## 1. Confusing Insertion Order with Sorting

LinkedHashMap maintains insertion order.

It does not automatically sort keys.

---

## 2. Assuming Updating a Key Moves It to the End

In normal insertion-order mode:

\`\`\`java
map.put(
        existingKey,
        newValue);
\`\`\`

updates the existing mapping without treating it as a fresh insertion.

---

## 3. Using get() as Index Access

This:

\`\`\`java
map.get(0);
\`\`\`

means:

Retrieve the value associated with key 0.

It does not mean:

Retrieve the first entry.

---

## 4. Using LinkedHashMap When Sorted Keys Are Required

If you need:

10

20

30

regardless of insertion order, consider TreeMap.

---

# Best Practices

- Use LinkedHashMap when predictable iteration order matters.
- Use HashMap when ordering is unnecessary.
- Use TreeMap when sorted keys are required.
- Use entrySet() when processing both keys and values.
- Use generics for type safety.
- Understand the difference between insertion order and access order.
- Consider LinkedHashMap for simple LRU-style cache designs.
- Do not confuse insertion order with sorted order.

---

# Interview Questions

## Q1. What is LinkedHashMap?

LinkedHashMap is a Map implementation that maintains predictable iteration order, normally insertion order.

---

## Q2. Does LinkedHashMap allow duplicate keys?

No.

---

## Q3. Does LinkedHashMap allow duplicate values?

Yes.

---

## Q4. Does LinkedHashMap allow null?

Yes.

It permits a null key and multiple null values.

---

## Q5. What is the difference between HashMap and LinkedHashMap?

HashMap does not guarantee iteration order, while LinkedHashMap maintains insertion order by default.

---

## Q6. Does updating an existing key move it to the end?

Not in normal insertion-order mode.

---

## Q7. What is access-order mode?

It is a LinkedHashMap mode where accesses can affect iteration order, moving recently accessed entries toward the end.

---

## Q8. Can LinkedHashMap be used for an LRU cache?

Yes.

Its access-order mode can be used as a building block for an LRU-style cache.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain LinkedHashMap.
- Create a LinkedHashMap.
- Add and update mappings.
- Retrieve and remove entries.
- Iterate in insertion order.
- Understand duplicate-key behavior.
- Work with null.
- Use entrySet(), keySet(), and values().
- Understand access-order mode.
- Compare LinkedHashMap with HashMap.
- Compare LinkedHashMap with TreeMap.
- Understand its typical performance.
- Recognize situations where LinkedHashMap is useful.

---

# Module Progress

✓ Lesson 1 — Introduction to Maps

✓ Lesson 2 — HashMap

✓ Lesson 3 — LinkedHashMap

→ Lesson 4 — TreeMap

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

## Lesson 4 — TreeMap

You will learn:

- What is TreeMap?
- Sorted key-value pairs.
- Natural ordering.
- Custom ordering with Comparator.
- firstKey().
- lastKey().
- higherKey().
- lowerKey().
- ceilingKey().
- floorKey().
- firstEntry().
- lastEntry().
- Descending maps.
- TreeMap vs HashMap.
- TreeMap vs LinkedHashMap.
- Practical examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson3;