const lesson13 = {

  id: "lesson13",

  title: "Immutable Collections",

  content: `

# Immutable Collections

## Introduction

An immutable collection is a collection whose contents cannot be changed after the collection has been created.

For example:

List<String> languages =
        List.of(
                "Java",
                "Python",
                "C++");

After creation, you cannot add, remove, or replace elements.

Immutable Collection

↓

Created

↓

Cannot be modified

Immutability is useful when data should remain unchanged throughout the lifetime of an object or operation.



# Mutable vs Immutable Collections

A mutable collection can be changed.

Example:

List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");

You can later modify it:

languages.add("C++");

An immutable collection does not allow such modifications.

List<String> languages =
        List.of(
                "Java",
                "Python");

This is not allowed:

languages.add("C++");

An UnsupportedOperationException is thrown.



# Why Use Immutable Collections?

Immutable collections can provide:

- Protection against accidental modification.
- Safer sharing of data.
- Easier reasoning about program state.
- Better support for immutable objects.
- Cleaner API design.
- Reduced need for defensive copying in some situations.



# Creating an Immutable List

Java provides:

List.of()



Example:

List<String> languages =
        List.of(
                "Java",
                "Python",
                "C++");

The list cannot be structurally modified.



# Creating an Immutable Set

Use:

Set.of()



Example:

Set<String> languages =
        Set.of(
                "Java",
                "Python",
                "C++");

The Set cannot be modified after creation.



# Creating an Immutable Map

Use:

Map.of()



Example:

Map<Integer, String> courses =
        Map.of(
                101, "Java",
                102, "Python",
                103, "C++");

The mappings cannot be added, removed, or replaced.



# List.of()

List.of() can create lists containing a fixed set of elements.

Example:

List<Integer> numbers =
        List.of(
                10,
                20,
                30,
                40);



# Set.of()

Example:

Set<String> skills =
        Set.of(
                "Java",
                "Python",
                "SQL");

A Set does not allow duplicate elements.



# Map.of()

Example:

Map<String, Integer> scores =
        Map.of(
                "Java", 90,
                "Python", 85,
                "SQL", 88);



# Null Values

The collection factory methods such as:

List.of()

Set.of()

Map.of()

do not allow null elements or keys/values where applicable.

For example:

List<String> list =
        List.of(
                "Java",
                null);

This results in:

NullPointerException



# Attempting to Modify an Immutable List

Example:

List<String> languages =
        List.of(
                "Java",
                "Python");

languages.add("C++");

This causes:

UnsupportedOperationException

The same principle applies to operations such as:

languages.remove("Java");

and:

languages.set(
        0,
        "C++");



# List.copyOf()

Java also provides:

List.copyOf()

It creates an unmodifiable copy of an existing collection.

Example:

List<String> original =
        new ArrayList<>();

original.add("Java");
original.add("Python");

List<String> copy =
        List.copyOf(original);

Now copy cannot be structurally modified.



# Example of List.copyOf()

List<String> original =
        new ArrayList<>();

original.add("Java");
original.add("Python");

List<String> immutable =
        List.copyOf(original);

System.out.println(
        immutable);



Output:

[Java, Python]



# Original Collection vs Copy

Consider:

List<String> original =
        new ArrayList<>();

original.add("Java");

List<String> immutable =
        List.copyOf(original);

The resulting immutable collection is separate from the original collection's structure.

You can still modify:

original.add("Python");

without modifying the immutable list itself.



# Set.copyOf()

You can create an unmodifiable Set from another collection.

Set<String> immutable =
        Set.copyOf(original);



Example:

Set<String> skills =
        new HashSet<>();

skills.add("Java");
skills.add("Python");

Set<String> fixedSkills =
        Set.copyOf(skills);



# Map.copyOf()

Similarly:

Map<String, Integer> immutable =
        Map.copyOf(originalMap);



Example:

Map<String, Integer> scores =
        new HashMap<>();

scores.put("Java", 90);
scores.put("Python", 85);

Map<String, Integer> fixedScores =
        Map.copyOf(scores);



# Map.ofEntries()

For larger maps, Java also provides:

Map.ofEntries()



Example:

Map<Integer, String> courses =
        Map.ofEntries(
                Map.entry(
                        101,
                        "Java"),

                Map.entry(
                        102,
                        "Python"),

                Map.entry(
                        103,
                        "C++"));

The resulting Map is unmodifiable.



# Immutable vs Unmodifiable

These terms are related but important to distinguish.

An unmodifiable view prevents modification through that particular reference, but the underlying collection may still change.

An immutable collection has its own fixed contents after creation.

For example:

List<String> original =
        new ArrayList<>();

List<String> view =
        Collections.unmodifiableList(
                original);

The view cannot be modified directly.

But:

original.add("Java");

can change what you see through view.



# Collections.unmodifiableList()

Java provides:

Collections.unmodifiableList()



Example:

List<String> original =
        new ArrayList<>();

original.add("Java");
original.add("Python");

List<String> view =
        Collections.unmodifiableList(
                original);

Trying:

view.add("C++");

throws:

UnsupportedOperationException

But the original list can still change:

original.add("C++");



# Unmodifiable View Example

List<String> original =
        new ArrayList<>();

original.add("Java");

List<String> view =
        Collections.unmodifiableList(
                original);

System.out.println(view);

original.add("Python");

System.out.println(view);



The second output reflects the change made to original.

This is why an unmodifiable view is different from an immutable collection.



# Immutable Collection with List.of()

Compare:

List<String> list =
        List.of(
                "Java",
                "Python");

The collection itself is fixed.

There is no separate mutable backing list that you can modify through another reference.



# Immutable Collection with Objects

Immutability of a collection does not automatically make the objects inside it immutable.

Example:

List<Product> products =
        List.of(
                product);

You cannot add or remove Products from the list.

But if Product itself is mutable, its fields may still be changed.

Conceptually:

Immutable List

↓

Product object

↓

May still be mutable

This is an important distinction.



# Shallow Immutability

Consider:

List<Product> products =
        List.of(product);

The collection structure is immutable.

But the object referenced by product may still change.

Therefore, this is sometimes described as:

Shallow Immutability



# Immutable Collection as a Method Result

Immutable collections are useful when returning fixed data from methods.

Example:

public static List<String>
getLanguages() {

    return List.of(
            "Java",
            "Python",
            "C++");

}

The caller cannot modify the returned collection.



# Example

List<String> languages =
        getLanguages();

System.out.println(
        languages);

Trying:

languages.add("SQL");

will fail.



# Immutable Collections in Constants

Immutable collections are useful for fixed configuration data.

Example:

private static final
List<String> SUPPORTED_LANGUAGES =
        List.of(
                "Java",
                "Python",
                "C++");

The reference and collection structure are protected from reassignment/modification in the usual ways.



# Immutable Maps for Configuration

private static final
Map<String, String> CONFIG =
        Map.of(
                "mode", "production",
                "language", "English");

This is useful when configuration should not be changed during execution.



# Important Properties

Factory-created immutable collections generally:

- Cannot be structurally modified.
- Do not allow null.
- Can be safely shared when their contained objects are themselves appropriately immutable.
- Are concise to create.
- Are useful for fixed data.



# Immutable List Example

import java.util.List;

public class ImmutableListExample {

    public static void main(
            String[] args) {

        List<String> languages =
                List.of(
                        "Java",
                        "Python",
                        "C++");

        System.out.println(
                languages);

    }

}



# Immutable Set Example

import java.util.Set;

public class ImmutableSetExample {

    public static void main(
            String[] args) {

        Set<String> skills =
                Set.of(
                        "Java",
                        "SQL",
                        "Python");

        System.out.println(
                skills);

    }

}



# Immutable Map Example

import java.util.Map;

public class ImmutableMapExample {

    public static void main(
            String[] args) {

        Map<Integer, String> courses =
                Map.of(
                        101, "Java",
                        102, "Python",
                        103, "C++");

        System.out.println(
                courses);

    }

}



# Common Mistakes

## 1. Trying to Modify List.of()

Incorrect:

list.add("Java");

An immutable list cannot be structurally modified.



## 2. Storing Null

Factory-created immutable collections do not allow null.

Avoid:

List.of(
        "Java",
        null);



## 3. Confusing an Unmodifiable View with an Immutable Collection

Collections.unmodifiableList(
        original)

creates an unmodifiable view.

The underlying collection can still change.



## 4. Assuming Contained Objects Are Immutable

An immutable collection does not automatically make its elements immutable.



# Best Practices

- Use List.of(), Set.of(), and Map.of() for fixed data.
- Use copyOf() when you need an unmodifiable copy.
- Use unmodifiable views when you intentionally want changes in the original collection to be visible.
- Do not use immutable collections when frequent modification is required.
- Remember that collection immutability does not automatically make contained objects immutable.
- Prefer immutable data for fixed configuration and constant collections.



# Interview Questions

## Q1. What is an immutable collection?

A collection whose structure cannot be modified after creation.



## Q2. How do you create an immutable List?

List.of(...)



## Q3. How do you create an immutable Set?

Set.of(...)



## Q4. How do you create an immutable Map?

Map.of(...)



## Q5. What does copyOf() do?

It creates an unmodifiable copy of an existing collection.



## Q6. Does List.of() allow null?

No.



## Q7. What happens when you call add() on a List created with List.of()?

An UnsupportedOperationException is thrown.



## Q8. Is an unmodifiable view the same as an immutable collection?

Not necessarily.

The underlying collection of an unmodifiable view can still change.



## Q9. Does an immutable collection make its elements immutable?

No.

The elements themselves may still be mutable.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain immutable collections.
- Distinguish mutable and immutable collections.
- Use List.of().
- Use Set.of().
- Use Map.of().
- Use Map.ofEntries().
- Use List.copyOf().
- Use Set.copyOf().
- Use Map.copyOf().
- Understand unmodifiable views.
- Understand shallow immutability.
- Handle immutable collections correctly.



# Module Progress

✓ Lesson 1 — Introduction to Maps

✓ Lesson 2 — HashMap

✓ Lesson 3 — LinkedHashMap

✓ Lesson 4 — TreeMap

✓ Lesson 5 — Hashtable

✓ Lesson 6 — Generic Classes

✓ Lesson 7 — Generic Methods

✓ Lesson 8 — Bounded Generics

✓ Lesson 9 — Wildcards

✓ Lesson 10 — Comparable

✓ Lesson 11 — Comparator

✓ Lesson 12 — Sorting Objects

✓ Lesson 13 — Immutable Collections

→ Lesson 14 — Maps & Generics in Practice

Lesson 15 — Inventory Management System



# Next Lesson

## Lesson 14 — Maps & Generics in Practice

You will learn:

- Combining Maps and Generics.
- Maps with custom objects.
- Map<Integer, Product>.
- Map of Lists.
- Nested Generics.
- Generic utility methods.
- Generic repositories.
- Bounded Generics with Maps.
- Immutable Maps with Generics.
- computeIfAbsent().
- getOrDefault().
- putIfAbsent().
- replace().
- merge().
- Practical inventory examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson13;