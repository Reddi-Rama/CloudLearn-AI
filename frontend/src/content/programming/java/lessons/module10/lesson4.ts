const lesson4 = {

  id: "lesson4",

  title: "TreeMap",

  content: `

# TreeMap

## Introduction

TreeMap is an implementation of the Map interface that stores key-value pairs while maintaining its keys in sorted order.

It is useful when you need:

- Key-value storage
- Unique keys
- Sorted keys
- Navigation through nearby keys
- First and last keys
- Range-based operations

Map

↓

TreeMap

---

# What Is TreeMap?

TreeMap belongs to:

java.util

Import:

\`\`\`java
import java.util.TreeMap;
\`\`\`

Create one:

\`\`\`java
TreeMap<Integer, String> courses =
        new TreeMap<>();
\`\`\`

Or use the Map interface:

\`\`\`java
Map<Integer, String> courses =
        new TreeMap<>();
\`\`\`

---

# Main Characteristics

A TreeMap:

- Stores key-value pairs.
- Does not allow duplicate keys.
- Maintains keys in sorted order.
- Supports natural ordering.
- Supports custom ordering using a Comparator.
- Provides navigation methods.
- Does not provide index-based access.
- Typically provides O(log n) basic operations.
- Does not permit a null key when natural ordering is used.

---

# Creating a TreeMap

Example:

\`\`\`java
import java.util.Map;
import java.util.TreeMap;

public class TreeMapExample {

    public static void main(String[] args) {

        Map<Integer, String> courses =
                new TreeMap<>();

        courses.put(103, "C++");
        courses.put(101, "Java");
        courses.put(102, "Python");

        System.out.println(courses);

    }

}
\`\`\`

Output:

\`\`\`text
{101=Java, 102=Python, 103=C++}
\`\`\`

Although the entries were inserted in this order:

103

101

102

the keys are displayed in sorted order:

101

102

103

---

# Natural Ordering

By default, TreeMap uses the natural ordering of its keys.

For integers:

10 < 20 < 30

For strings, their natural ordering rules are used.

Example:

\`\`\`java
TreeMap<Integer, String> map =
        new TreeMap<>();

map.put(30, "C++");
map.put(10, "Java");
map.put(20, "Python");

System.out.println(map);
\`\`\`

Output:

\`\`\`text
{10=Java, 20=Python, 30=C++}
\`\`\`

---

# Adding Elements

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

The keys are automatically maintained in sorted order.

---

# Duplicate Keys

TreeMap does not allow duplicate keys.

Example:

\`\`\`java
courses.put(
        101,
        "Java");

courses.put(
        101,
        "Advanced Java");
\`\`\`

The result is:

101 → Advanced Java

The existing value is replaced.

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

This is valid because the keys are different.

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

# Removing a Mapping

Use:

\`\`\`java
courses.remove(101);
\`\`\`

This removes the mapping associated with key 101.

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

# firstKey()

firstKey() returns the smallest key in the TreeMap.

Example:

\`\`\`java
TreeMap<Integer, String> courses =
        new TreeMap<>();

courses.put(103, "C++");
courses.put(101, "Java");
courses.put(102, "Python");

System.out.println(
        courses.firstKey());
\`\`\`

Output:

\`\`\`text
101
\`\`\`

---

# lastKey()

lastKey() returns the largest key.

Example:

\`\`\`java
System.out.println(
        courses.lastKey());
\`\`\`

Output:

\`\`\`text
103
\`\`\`

---

# higherKey()

higherKey() returns the smallest key that is strictly greater than the specified key.

Suppose:

10

20

30

Then:

\`\`\`java
courses.higherKey(20);
\`\`\`

returns:

30

---

# lowerKey()

lowerKey() returns the largest key that is strictly less than the specified key.

For:

10

20

30

this:

\`\`\`java
courses.lowerKey(20);
\`\`\`

returns:

10

---

# ceilingKey()

ceilingKey() returns the smallest key greater than or equal to the specified key.

Suppose the keys are:

10

20

30

Then:

\`\`\`java
courses.ceilingKey(20);
\`\`\`

returns:

20

And:

\`\`\`java
courses.ceilingKey(25);
\`\`\`

returns:

30

---

# floorKey()

floorKey() returns the largest key less than or equal to the specified key.

For:

10

20

30

this:

\`\`\`java
courses.floorKey(20);
\`\`\`

returns:

20

And:

\`\`\`java
courses.floorKey(25);
\`\`\`

returns:

20

---

# Navigation Example

Suppose:

\`\`\`java
TreeMap<Integer, String> map =
        new TreeMap<>();

map.put(10, "A");
map.put(20, "B");
map.put(30, "C");
map.put(40, "D");
\`\`\`

Then:

\`\`\`java
map.firstKey();
\`\`\`

returns:

10

\`\`\`java
map.lastKey();
\`\`\`

returns:

40

\`\`\`java
map.higherKey(20);
\`\`\`

returns:

30

\`\`\`java
map.lowerKey(20);
\`\`\`

returns:

10

\`\`\`java
map.ceilingKey(25);
\`\`\`

returns:

30

\`\`\`java
map.floorKey(25);
\`\`\`

returns:

20

---

# firstEntry()

firstEntry() returns the first key-value entry.

Example:

\`\`\`java
Map.Entry<Integer, String> entry =
        courses.firstEntry();

System.out.println(
        entry.getKey()
        + " → "
        + entry.getValue());
\`\`\`

If the first key is 101:

\`\`\`text
101 → Java
\`\`\`

---

# lastEntry()

lastEntry() returns the last key-value entry.

Example:

\`\`\`java
Map.Entry<Integer, String> entry =
        courses.lastEntry();

System.out.println(
        entry.getKey()
        + " → "
        + entry.getValue());
\`\`\`

---

# Iterating Through TreeMap

Using entrySet():

\`\`\`java
for (Map.Entry<Integer, String> entry :
        courses.entrySet()) {

    System.out.println(
            entry.getKey()
            + " → "
            + entry.getValue());

}
\`\`\`

The entries are visited according to sorted key order.

---

# Iterating with keySet()

\`\`\`java
for (Integer key :
        courses.keySet()) {

    System.out.println(key);

}
\`\`\`

The keys appear in sorted order.

---

# Iterating with values()

\`\`\`java
for (String course :
        courses.values()) {

    System.out.println(course);

}
\`\`\`

The values are visited according to the ordering of their associated keys.

---

# forEach()

Modern Java allows:

\`\`\`java
courses.forEach(
        (key, value) ->
                System.out.println(
                        key
                        + " → "
                        + value));
\`\`\`

---

# Descending Order

TreeMap provides a descending view using:

\`\`\`java
descendingMap();
\`\`\`

Example:

\`\`\`java
TreeMap<Integer, String> courses =
        new TreeMap<>();

courses.put(10, "Java");
courses.put(20, "Python");
courses.put(30, "C++");

System.out.println(
        courses.descendingMap());
\`\`\`

Output:

\`\`\`text
{30=C++, 20=Python, 10=Java}
\`\`\`

---

# Descending Key Set

You can also obtain keys in descending order.

Use:

\`\`\`java
courses.descendingKeySet();
\`\`\`

Example:

\`\`\`java
for (Integer key :
        courses.descendingKeySet()) {

    System.out.println(key);

}
\`\`\`

Output:

\`\`\`text
30
20
10
\`\`\`

---

# Custom Ordering with Comparator

TreeMap can use a Comparator when custom ordering is required.

Example:

\`\`\`java
TreeMap<Integer, String> courses =
        new TreeMap<>(
                Comparator.reverseOrder());
\`\`\`

Now the keys are maintained in descending order.

Example:

\`\`\`java
courses.put(10, "Java");
courses.put(20, "Python");
courses.put(30, "C++");

System.out.println(courses);
\`\`\`

Output:

\`\`\`text
{30=C++, 20=Python, 10=Java}
\`\`\`

---

# TreeMap with String Keys

TreeMap also works with String keys.

Example:

\`\`\`java
TreeMap<String, Integer> scores =
        new TreeMap<>();

scores.put("Java", 90);
scores.put("C++", 85);
scores.put("Python", 95);

System.out.println(scores);
\`\`\`

The keys are maintained according to their natural ordering.

---

# TreeMap with Custom Objects

When custom objects are used as keys, TreeMap needs a valid ordering.

This can be provided using:

- Comparable
- Comparator

Without a valid ordering, TreeMap cannot determine how the keys should be arranged.

---

# TreeMap and Null

A TreeMap using natural ordering does not permit a null key.

Example:

\`\`\`java
TreeMap<Integer, String> map =
        new TreeMap<>();

map.put(
        null,
        "Java");
\`\`\`

This is not allowed under natural ordering.

Null values are different from null keys and may be used depending on the operation and map contents.

---

# TreeMap Sorts Keys, Not Values

This is very important.

Suppose:

101 → 90

102 → 70

103 → 85

TreeMap orders according to:

101

102

103

It does not automatically sort values:

70

85

90

TreeMap sorts keys, not values.

---

# TreeMap Performance

Typical complexity:

put() → O(log n)

get() → O(log n)

remove() → O(log n)

containsKey() → O(log n)

The logarithmic behavior comes from the tree-based structure used to maintain sorted keys.

---

# HashMap vs TreeMap

HashMap:

- Hash-based.
- No guaranteed key ordering.
- Typical average-case basic operations are O(1).
- Allows null key.

TreeMap:

- Maintains sorted keys.
- Provides navigation operations.
- Typical basic operations are O(log n).
- Does not allow a null key under natural ordering.

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

# Practical Example: Sorted Course IDs

\`\`\`java
import java.util.Map;
import java.util.TreeMap;

public class SortedCourses {

    public static void main(String[] args) {

        Map<Integer, String> courses =
                new TreeMap<>();

        courses.put(
                103,
                "C++");

        courses.put(
                101,
                "Java");

        courses.put(
                102,
                "Python");

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

Output:

\`\`\`text
101 → Java
102 → Python
103 → C++
\`\`\`

---

# Practical Example: Finding Nearby Keys

Suppose an application stores available product IDs:

\`\`\`java
TreeMap<Integer, String> products =
        new TreeMap<>();

products.put(100, "Product A");
products.put(200, "Product B");
products.put(300, "Product C");
products.put(400, "Product D");
\`\`\`

For a requested ID of 250:

\`\`\`java
products.floorKey(250);
\`\`\`

returns:

200

And:

\`\`\`java
products.ceilingKey(250);
\`\`\`

returns:

300

This is useful when navigating sorted key ranges.

---

# Common Mistakes

## 1. Expecting Insertion Order

TreeMap does not preserve insertion order.

It maintains sorted key order.

---

## 2. Using Index-Based Access

This:

\`\`\`java
map.get(0);
\`\`\`

means retrieve the value associated with key 0.

It does not mean retrieve the first entry.

---

## 3. Using Custom Keys Without Ordering

If the key is a custom object, TreeMap needs a valid ordering through:

- Comparable
- Comparator

---

## 4. Assuming Values Are Sorted

TreeMap sorts keys, not values.

For example:

101 → 90

102 → 70

103 → 85

The ordering is based on:

101

102

103

not:

70

85

90

---

# Best Practices

- Use TreeMap when sorted keys are required.
- Use HashMap when sorted order is unnecessary.
- Use LinkedHashMap when insertion order is required.
- Use Comparator for custom key ordering.
- Use navigation methods when working with nearby keys.
- Remember that TreeMap sorts keys, not values.
- Avoid null keys when using natural ordering.
- Use generics for type safety.

---

# Interview Questions

## Q1. What is TreeMap?

TreeMap is a Map implementation that maintains its keys in sorted order.

---

## Q2. Does TreeMap allow duplicate keys?

No.

---

## Q3. Does TreeMap sort values?

No.

It sorts keys.

---

## Q4. What is the difference between HashMap and TreeMap?

HashMap is hash-based and does not guarantee key ordering, while TreeMap maintains sorted keys.

---

## Q5. What does firstKey() return?

It returns the smallest key.

---

## Q6. What does lastKey() return?

It returns the largest key.

---

## Q7. What does higherKey() return?

It returns the smallest key strictly greater than the specified key.

---

## Q8. What does lowerKey() return?

It returns the largest key strictly less than the specified key.

---

## Q9. What does ceilingKey() return?

It returns the smallest key greater than or equal to the specified key.

---

## Q10. What does floorKey() return?

It returns the largest key less than or equal to the specified key.

---

## Q11. Can TreeMap use a custom ordering?

Yes.

A Comparator can be supplied.

---

## Q12. What is the typical complexity of get() in TreeMap?

Typically O(log n).

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain TreeMap.
- Create a TreeMap.
- Store key-value pairs.
- Maintain sorted keys.
- Use natural ordering.
- Use custom comparators.
- Retrieve values.
- Update mappings.
- Remove mappings.
- Find the first and last keys.
- Use higherKey().
- Use lowerKey().
- Use ceilingKey().
- Use floorKey().
- Use firstEntry() and lastEntry().
- Create descending views.
- Work with custom key objects.
- Compare TreeMap, HashMap, and LinkedHashMap.
- Understand typical TreeMap performance.

---

# Module Progress

✓ Lesson 1 — Introduction to Maps

✓ Lesson 2 — HashMap

✓ Lesson 3 — LinkedHashMap

✓ Lesson 4 — TreeMap

→ Lesson 5 — Hashtable

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

## Lesson 5 — Hashtable

You will learn:

- What Hashtable is.
- Its historical role.
- Key-value storage.
- Synchronization.
- Hashtable vs HashMap.
- Null restrictions.
- Basic operations.
- Iteration.
- Legacy collection considerations.
- Modern alternatives.
- Practical examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson4;