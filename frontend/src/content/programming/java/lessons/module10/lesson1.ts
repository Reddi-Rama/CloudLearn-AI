const lesson1 = {

  id: "lesson1",

  title: "Introduction to Maps",

  content: `

# Introduction to Maps

## Introduction

In the previous module, you learned how to store and manage collections of individual elements using:

- List.
- Set.
- Queue.
- Deque.



But many real-world applications need to store data in another form:



Key → Value



For example:



101 → Java

102 → Python

103 → C++



Here:

- 101 is the key.
- Java is the value.
- 102 is the key.
- Python is the value.
- 103 is the key.
- C++ is the value.



Java provides a collection interface called:

Map



A Map is used when you want to associate a value with a specific key.



# What Is a Map?

Map is an interface in:

java.util



Import:

\`\`\`java
import java.util.Map;
\`\`\`



Unlike List and Set, Map stores data as key-value pairs.



The basic idea is:



Key

↓

Value



For example:



101 → Java

102 → Python

103 → C++



You can use the key to retrieve its associated value.



Example:

\`\`\`java
map.get(101);
\`\`\`



Result:

\`\`\`text
Java
\`\`\`



# Map Hierarchy

The major Map implementations covered in this module are:



\`\`\`text
Map
 |
 |---- HashMap
 |
 |---- LinkedHashMap
 |
 |---- TreeMap
 |
 |---- Hashtable
\`\`\`



Each implementation provides different behavior.



HashMap

↓

General-purpose key-value storage



LinkedHashMap

↓

Key-value storage with insertion order



TreeMap

↓

Key-value storage with sorted keys



Hashtable

↓

Legacy synchronized Map implementation



These differences will be studied in detail in the upcoming lessons.



# Key-Value Pair

A Map stores information in the form:



Key → Value



Example:

\`\`\`text
101 → "Java"
102 → "Python"
103 → "C++"
\`\`\`



The key identifies the value.



For example:

\`\`\`java
map.get(101);
\`\`\`



returns the value associated with key 101.



Result:

\`\`\`text
Java
\`\`\`



# Keys Must Be Unique

A Map cannot contain duplicate keys.



Consider:

\`\`\`text
101 → Java
102 → Python
101 → C++
\`\`\`



The key 101 already exists.



When another value is associated with the same key, the existing value is replaced.



The result becomes conceptually:



\`\`\`text
101 → C++
102 → Python
\`\`\`



The key is not duplicated.



This is one of the most important characteristics of a Map.



# Values Can Be Duplicated

Unlike keys, values do not have to be unique.



Example:

\`\`\`text
101 → Java
102 → Python
103 → Java
\`\`\`



This is valid.



Why?



Because the keys are different:



101 ≠ 103



Even though both values are:

Java



Therefore:



Keys

↓

Must be unique



Values

↓

Can be duplicated



# Creating a Map

Because Map is an interface, you normally create an object using one of its implementations.



Example:

\`\`\`java
Map<Integer, String> languages =
        new HashMap<>();
\`\`\`



Here:

Integer

↓

Key type



String

↓

Value type



The structure is:



\`\`\`text
Map<Integer, String>

Integer → Key

String  → Value
\`\`\`



This is also an example of Generics, which will be studied in detail later in this module.



# Basic Map Example

\`\`\`java
import java.util.HashMap;
import java.util.Map;

public class MapExample {

    public static void main(String[] args) {

        Map<Integer, String> languages =
                new HashMap<>();

        languages.put(
                101,
                "Java");

        languages.put(
                102,
                "Python");

        languages.put(
                103,
                "C++");

        System.out.println(
                languages);

    }

}
\`\`\`



The Map now contains three key-value pairs.



The exact display order depends on the Map implementation.



For HashMap, you should not rely on the iteration order.



# Adding Data with put()

The put() method is used to add a key-value pair.



Example:

\`\`\`java
map.put(
        101,
        "Java");
\`\`\`



Another example:

\`\`\`java
map.put(
        102,
        "Python");
\`\`\`



The Map now conceptually contains:



\`\`\`text
101 → Java
102 → Python
\`\`\`



# Updating a Value

If the specified key already exists, put() updates its associated value.



Suppose:

\`\`\`java
map.put(
        101,
        "Java");
\`\`\`



Then:

\`\`\`java
map.put(
        101,
        "Advanced Java");
\`\`\`



The result becomes:



\`\`\`text
101 → Advanced Java
\`\`\`



The key is not duplicated.



The old value is replaced.



# Retrieving Data with get()

The get() method retrieves the value associated with a key.



Example:

\`\`\`java
String language =
        languages.get(101);

System.out.println(
        language);
\`\`\`



Output:

\`\`\`text
Java
\`\`\`



The key is used to locate the corresponding value.



# What Happens If the Key Does Not Exist?

Suppose the Map contains:



\`\`\`text
101 → Java
102 → Python
\`\`\`



Now:

\`\`\`java
languages.get(999);
\`\`\`



There is no key 999.



The result is:

\`\`\`text
null
\`\`\`



Therefore, you should handle missing keys appropriately.



# Checking a Key with containsKey()

The containsKey() method checks whether a key exists.



Example:

\`\`\`java
if (languages.containsKey(101)) {

    System.out.println(
            "Key exists.");

}
\`\`\`



Output:

\`\`\`text
Key exists.
\`\`\`



If the key does not exist, the condition becomes false.



# Checking a Value with containsValue()

You can also check whether a particular value exists.



Example:

\`\`\`java
if (languages.containsValue(
        "Java")) {

    System.out.println(
            "Java exists.");

}
\`\`\`



This searches for the specified value.



# Removing Data

Use remove() to remove a key-value pair.



Example:

\`\`\`java
languages.remove(101);
\`\`\`



The key 101 and its associated value are removed.



Before:



\`\`\`text
101 → Java
102 → Python
103 → C++
\`\`\`



After:

\`\`\`text
102 → Python
103 → C++
\`\`\`



# size()

The size() method returns the number of key-value pairs.



Example:

\`\`\`java
int count =
        languages.size();

System.out.println(count);
\`\`\`



If the Map contains three entries:



Output:

\`\`\`text
3
\`\`\`



# isEmpty()

The isEmpty() method checks whether the Map contains no entries.



Example:

\`\`\`java
if (languages.isEmpty()) {

    System.out.println(
            "Map is empty.");

}
\`\`\`



If the Map contains data, the condition is false.



# clear()

The clear() method removes all entries from the Map.



Example:

\`\`\`java
languages.clear();
\`\`\`



Before:

\`\`\`text
101 → Java
102 → Python
103 → C++
\`\`\`



After:

\`\`\`text
Empty Map
\`\`\`



# keySet()

The keySet() method returns a Set containing all keys.



Example:

\`\`\`java
Map<Integer, String> languages =
        new HashMap<>();

languages.put(
        101,
        "Java");

languages.put(
        102,
        "Python");

languages.put(
        103,
        "C++");

System.out.println(
        languages.keySet());
\`\`\`



The result contains the keys:



\`\`\`text
101
102
103
\`\`\`



The exact order is not guaranteed for HashMap.



# values()

The values() method returns a collection containing all values.



Example:

\`\`\`java
System.out.println(
        languages.values());
\`\`\`



The result contains values such as:



\`\`\`text
Java
Python
C++
\`\`\`



Duplicate values can appear.



# entrySet()

The entrySet() method returns the key-value pairs as Map.Entry objects.



Example:

\`\`\`java
for (Map.Entry<Integer, String> entry :
        languages.entrySet()) {

    System.out.println(
            entry.getKey()
            + " → "
            + entry.getValue());

}
\`\`\`



Possible output:

\`\`\`text
101 → Java
102 → Python
103 → C++
\`\`\`



Again, the order depends on the Map implementation.



# Iterating Through a Map

A common way to process all key-value pairs is:



\`\`\`java
for (Map.Entry<Integer, String> entry :
        languages.entrySet()) {

    System.out.println(
            "Key: "
            + entry.getKey());

    System.out.println(
            "Value: "
            + entry.getValue());

}
\`\`\`



Here:



getKey()

↓

Returns the key



getValue()

↓

Returns the value



# Complete Map Example

\`\`\`java
import java.util.HashMap;
import java.util.Map;

public class MapExample {

    public static void main(String[] args) {

        Map<Integer, String> languages =
                new HashMap<>();

        languages.put(
                101,
                "Java");

        languages.put(
                102,
                "Python");

        languages.put(
                103,
                "C++");

        System.out.println(
                "Languages:");

        for (Map.Entry<Integer, String> entry :
                languages.entrySet()) {

            System.out.println(
                    entry.getKey()
                    + " → "
                    + entry.getValue());

        }

        System.out.println(
                "Language for 101: "
                + languages.get(101));

        System.out.println(
                "Contains key 102: "
                + languages.containsKey(102));

        System.out.println(
                "Total entries: "
                + languages.size());

    }

}
\`\`\`



# Practical Example: Student Records

Suppose an application needs to associate IDs with names.



\`\`\`java
Map<Integer, String> students =
        new HashMap<>();

students.put(
        101,
        "Alex");

students.put(
        102,
        "Jordan");

students.put(
        103,
        "Taylor");
\`\`\`



Now:



101 → Alex

102 → Jordan

103 → Taylor



You can search by ID:



\`\`\`java
System.out.println(
        students.get(102));
\`\`\`



Output:

\`\`\`text
Jordan
\`\`\`



This is much more direct than searching through every element of a List.



# Practical Example: Product Prices

A Map can associate a product ID with its price.



\`\`\`java
Map<Integer, Double> prices =
        new HashMap<>();

prices.put(
        501,
        1200.0);

prices.put(
        502,
        750.0);

prices.put(
        503,
        2500.0);
\`\`\`



Now:



501 → 1200.0

502 → 750.0

503 → 2500.0



To retrieve a price:



\`\`\`java
System.out.println(
        prices.get(502));
\`\`\`



Output:

\`\`\`text
750.0
\`\`\`



# Practical Example: Course Information

A Map can associate course IDs with course names.



\`\`\`java
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

courses.put(
        104,
        "SQL");
\`\`\`



The application can retrieve a course using its ID.



# Map vs List

A List stores individual elements in an ordered sequence.



Example:



\`\`\`text
Java
Python
C++
\`\`\`



A Map stores relationships:



\`\`\`text
101 → Java
102 → Python
103 → C++
\`\`\`



Use a List when:

- You need a sequence of elements.
- Index-based access is useful.
- Duplicate elements may be allowed.



Use a Map when:

- Data has a key-value relationship.
- You need key-based lookup.
- Keys identify values.



# Map vs Set

A Set stores unique elements.



Example:



\`\`\`text
Java
Python
C++
\`\`\`



A Map stores key-value relationships:



\`\`\`text
101 → Java
102 → Python
103 → C++
\`\`\`



Use a Set when uniqueness is the main requirement.



Use a Map when each value needs to be associated with a key.



# Important Map Characteristics

Remember these points:



## Keys Are Unique

A Map cannot contain duplicate keys.



## Values Can Repeat

Different keys can have the same value.



## Map Is an Interface

You normally use an implementation such as:

- HashMap.
- LinkedHashMap.
- TreeMap.
- Hashtable.



## Map Uses Generics

Example:



\`\`\`java
Map<Integer, String>
\`\`\`



Integer

↓

Key



String

↓

Value



# Common Map Methods

Important methods include:



put()

↓

Adds or updates a key-value pair.



get()

↓

Retrieves a value.



remove()

↓

Removes a key-value pair.



containsKey()

↓

Checks whether a key exists.



containsValue()

↓

Checks whether a value exists.



size()

↓

Returns the number of entries.



isEmpty()

↓

Checks whether the Map is empty.



clear()

↓

Removes all entries.



keySet()

↓

Returns the keys.



values()

↓

Returns the values.



entrySet()

↓

Returns key-value entries.



# Common Mistakes

## 1. Assuming Keys Can Be Duplicated

This is incorrect:



\`\`\`text
101 → Java
101 → Python
\`\`\`



The second value replaces the first value for key 101.



---

## 2. Assuming HashMap Has a Fixed Iteration Order

Do not rely on the order in which HashMap entries are returned.



If insertion order is required, another Map implementation such as LinkedHashMap should be considered.



If sorted keys are required, TreeMap should be considered.



---

## 3. Forgetting That get() Can Return null

If a key does not exist:



\`\`\`java
map.get(key);
\`\`\`



may return null.



Handle missing keys appropriately.



---

## 4. Using Raw Maps

Avoid:



\`\`\`java
Map map =
        new HashMap();
\`\`\`



Prefer:



\`\`\`java
Map<Integer, String> map =
        new HashMap<>();
\`\`\`



Generics provide compile-time type safety.



---

# Best Practices

Follow these practices:



- Use meaningful key and value types.
- Parameterize Maps with Generics.
- Do not rely on HashMap iteration order.
- Use containsKey() when key existence must be checked.
- Handle missing keys safely.
- Use entrySet() when processing both keys and values.
- Choose the Map implementation according to the required behavior.
- Avoid raw Map types.
- Keep key and value types clear.
- Use Map when data naturally represents a key-value relationship.



# Interview Questions

## Q1. What is a Map?

A Map is a Java interface used to store data as key-value pairs.



## Q2. Can a Map contain duplicate keys?

No.

Keys must be unique.



## Q3. Can a Map contain duplicate values?

Yes.

Different keys can map to the same value.



## Q4. What package contains Map?

\`\`\`java
java.util
\`\`\`



## Q5. What are common Map implementations?

- HashMap.
- LinkedHashMap.
- TreeMap.
- Hashtable.



## Q6. What does put() do?

It adds a new key-value pair or updates the value associated with an existing key.



## Q7. What does get() do?

It retrieves the value associated with a specified key.



## Q8. What does containsKey() do?

It checks whether a specified key exists.



## Q9. What does entrySet() return?

It returns a Set containing the key-value entries of the Map.



## Q10. What is the difference between Map and List?

List stores individual elements in sequence, while Map stores key-value relationships.



# Key Takeaways

After completing this lesson, you should be able to:



- Explain what a Map is.
- Understand key-value storage.
- Explain the Map interface.
- Understand unique keys.
- Understand duplicate values.
- Create a Map.
- Use Generics with Maps.
- Add data using put().
- Retrieve data using get().
- Update values.
- Remove entries.
- Check keys.
- Check values.
- Find Map size.
- Check whether a Map is empty.
- Clear a Map.
- Retrieve keys using keySet().
- Retrieve values using values().
- Retrieve entries using entrySet().
- Iterate through a Map.
- Choose Map when key-value storage is required.



# Module Progress

✓ Lesson 1 — Introduction to Maps

→ Lesson 2 — HashMap

Lesson 3 — LinkedHashMap

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



# Next Lesson

## Lesson 2 — HashMap

You will learn:

- What is HashMap?
- Creating HashMap.
- Adding key-value pairs.
- Retrieving values.
- Updating values.
- Removing entries.
- Checking keys and values.
- Iterating through HashMap.
- HashMap characteristics.
- HashMap and null values.
- Practical examples.
- Common mistakes.
- Best practices.
- Interview questions.

`

};

export default lesson1;