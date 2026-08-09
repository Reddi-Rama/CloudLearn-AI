const lesson9 = {

  id: "lesson9",

  title: "Wildcards",

  content: `

# Wildcards

## Introduction

Wildcards are used with Generics when you want to represent an unknown type.

The wildcard symbol is:

\`\`\`text
?
\`\`\`

For example:

\`\`\`java
List<?>
\`\`\`

means:

A List of some unknown type.

Wildcards are especially useful when writing methods that should work with different generic types.

---

# Why Do We Need Wildcards?

Suppose we have:

\`\`\`java
List<Integer> numbers =
        new ArrayList<>();
\`\`\`

and a method:

\`\`\`java
void display(List<Object> list)
\`\`\`

You might expect List<Integer> to be accepted because Integer is an Object.

But this is not valid.

\`\`\`text
List<Integer>
      ≠
List<Object>
\`\`\`

Generic types are not automatically covariant.

Wildcards solve this problem.

---

# Basic Wildcard

The simplest wildcard is:

\`\`\`text
?
\`\`\`

Example:

\`\`\`java
List<?> list;
\`\`\`

This means:

List of an unknown type.

It could represent:

\`\`\`java
List<String>
\`\`\`

\`\`\`java
List<Integer>
\`\`\`

\`\`\`java
List<Double>
\`\`\`

\`\`\`java
List<Boolean>
\`\`\`

and many other List types.

---

# Unbounded Wildcard

An unbounded wildcard has no restriction.

Syntax:

\`\`\`java
List<?>
\`\`\`

Example:

\`\`\`java
public static void display(
        List<?> list) {

    for (Object value : list) {

        System.out.println(value);

    }

}
\`\`\`

This method can accept Lists of different types.

---

# Example

\`\`\`java
List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");

List<Integer> numbers =
        new ArrayList<>();

numbers.add(10);
numbers.add(20);

display(languages);

display(numbers);
\`\`\`

The same method works with both lists.

---

# What Can You Read from List<?>

You can safely read values as Object.

Example:

\`\`\`java
List<?> list =
        new ArrayList<String>();

Object value =
        list.get(0);
\`\`\`

The exact type is unknown, so Java treats retrieved values as Object.

---

# What Can You Add to List<?>

You generally cannot add an arbitrary value to a List<?>.

For example:

\`\`\`java
List<?> list =
        new ArrayList<String>();
\`\`\`

This is not allowed:

\`\`\`java
list.add("Java");
\`\`\`

Why?

Because Java does not know what the actual type is.

It might be:

\`\`\`java
List<String>
\`\`\`

or:

\`\`\`java
List<Integer>
\`\`\`

or another type.

---

# Upper-Bounded Wildcards

An upper-bounded wildcard uses:

\`\`\`text
? extends Type
\`\`\`

Example:

\`\`\`java
List<? extends Number>
\`\`\`

This means:

A List of some unknown type that is Number or a subtype of Number.

It can represent:

\`\`\`java
List<Integer>
\`\`\`

\`\`\`java
List<Double>
\`\`\`

\`\`\`java
List<Float>
\`\`\`

\`\`\`java
List<Long>
\`\`\`

---

# Example with Number

\`\`\`java
public static double sum(
        List<? extends Number> numbers) {

    double total = 0;

    for (Number number : numbers) {

        total +=
                number.doubleValue();

    }

    return total;

}
\`\`\`

This method can accept:

\`\`\`java
List<Integer>
\`\`\`

or:

\`\`\`java
List<Double>
\`\`\`

---

# Complete Example

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class UpperBoundExample {

    public static double sum(
            List<? extends Number> numbers) {

        double total = 0;

        for (Number number : numbers) {

            total +=
                    number.doubleValue();

        }

        return total;

    }

    public static void main(String[] args) {

        List<Integer> numbers =
                new ArrayList<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        System.out.println(
                sum(numbers));

    }

}
\`\`\`

Output:

\`\`\`text
60.0
\`\`\`

---

# Reading from ? extends

With:

\`\`\`java
List<? extends Number>
\`\`\`

you can safely read values as:

Number

because every possible type represented by the wildcard is a subtype of Number.

---

# Adding to ? extends

You generally cannot add a specific Number value.

For example:

\`\`\`java
List<? extends Number> numbers;
\`\`\`

This is not allowed:

\`\`\`java
numbers.add(10);
\`\`\`

because the actual list might be:

\`\`\`java
List<Double>
\`\`\`

Adding an Integer would then be unsafe.

---

# Lower-Bounded Wildcards

A lower-bounded wildcard uses:

\`\`\`text
? super Type
\`\`\`

Example:

\`\`\`java
List<? super Integer>
\`\`\`

This means:

A List of some unknown type that is Integer or a superclass of Integer.

Possible types include:

\`\`\`java
List<Integer>
\`\`\`

\`\`\`java
List<Number>
\`\`\`

\`\`\`java
List<Object>
\`\`\`

---

# Example with ? super Integer

\`\`\`java
public static void addNumbers(
        List<? super Integer> list) {

    list.add(10);

    list.add(20);

    list.add(30);

}
\`\`\`

This is safe because every valid list type can accept an Integer.

---

# Complete Lower-Bound Example

\`\`\`java
import java.util.ArrayList;
import java.util.List;

public class LowerBoundExample {

    public static void addNumbers(
            List<? super Integer> list) {

        list.add(10);
        list.add(20);
        list.add(30);

    }

    public static void main(String[] args) {

        List<Integer> numbers =
                new ArrayList<>();

        addNumbers(numbers);

        System.out.println(numbers);

    }

}
\`\`\`

Output:

\`\`\`text
[10, 20, 30]
\`\`\`

---

# Reading from ? super

With:

\`\`\`java
List<? super Integer>
\`\`\`

you cannot assume that the retrieved value is Integer.

For example:

\`\`\`java
Object value =
        list.get(0);
\`\`\`

is safe.

But:

\`\`\`java
Integer value =
        list.get(0);
\`\`\`

cannot be assumed to be safe.

Why?

Because the actual list could be:

\`\`\`java
List<Object>
\`\`\`

---

# PECS Principle

A very important rule for wildcards is:

Producer Extends

Consumer Super

This is called:

PECS

---

# Producer Extends

If a collection produces values for you to read, use:

\`\`\`java
? extends T
\`\`\`

Example:

\`\`\`java
List<? extends Number>
\`\`\`

You read Numbers from the collection.

Producer

↓

extends

---

# Consumer Super

If a collection consumes values that you want to add, use:

\`\`\`java
? super T
\`\`\`

Example:

\`\`\`java
List<? super Integer>
\`\`\`

You can safely add Integer values.

Consumer

↓

super

---

# PECS Example

Suppose:

\`\`\`java
public static double sum(
        List<? extends Number> numbers)
\`\`\`

The list produces Number values.

Therefore:

extends

---

Now:

\`\`\`java
public static void addNumbers(
        List<? super Integer> numbers)
\`\`\`

The list consumes Integer values.

Therefore:

super

---

# Wildcards with Inheritance

Suppose:

\`\`\`java
class Animal {

    void sound() {

        System.out.println(
                "Animal sound");

    }

}
\`\`\`

and:

\`\`\`java
class Dog extends Animal {

    void sound() {

        System.out.println(
                "Dog sound");

    }

}
\`\`\`

We may have:

\`\`\`java
List<Dog> dogs =
        new ArrayList<>();
\`\`\`

A method using:

\`\`\`java
List<? extends Animal>
\`\`\`

can accept the List<Dog>.

---

# Example

\`\`\`java
public static void displayAnimals(
        List<? extends Animal> animals) {

    for (Animal animal :
            animals) {

        animal.sound();

    }

}
\`\`\`

Now a List<Dog> can be passed to the method.

---

# Wildcard Capture

When Java encounters:

\`\`\`java
List<?>
\`\`\`

the wildcard represents an unknown specific type.

Java internally treats that unknown type consistently within the appropriate context.

This concept is known as wildcard capture.

You usually do not need to manipulate wildcard capture directly, but understanding the concept helps explain why some operations are restricted.

---

# Wildcard vs Type Parameter

Compare:

\`\`\`java
List<?> list
\`\`\`

with:

\`\`\`java
<T> void process(List<T> list)
\`\`\`

A wildcard represents an unknown type.

A type parameter gives that type a name that can be reused.

For example:

\`\`\`text
<T>
\`\`\`

allows you to refer to the same type as T.

---

# Example

With:

\`\`\`java
public static void display(
        List<?> list)
\`\`\`

you do not name the element type.

With:

\`\`\`java
public static <T> void display(
        List<T> list)
\`\`\`

you explicitly name the type as T.

Both are useful depending on the operation.

---

# Wildcards with Collections

Wildcards are especially useful when designing methods that work with multiple collection types.

For example:

\`\`\`java
public static void print(
        List<?> list) {

    for (Object value :
            list) {

        System.out.println(value);

    }

}
\`\`\`

This method can accept:

List<String>

List<Integer>

List<Double>

and other List types.

---

# Common Mistakes

## 1. Thinking List<Integer> Is a List<Object>

It is not.

Generic types are invariant.

---

## 2. Adding to ? extends

Avoid:

\`\`\`java
List<? extends Number> list;

list.add(10);
\`\`\`

The actual list type is unknown.

---

## 3. Reading a Specific Type from ? super

With:

\`\`\`java
List<? super Integer>
\`\`\`

you cannot assume:

\`\`\`java
Integer value =
        list.get(0);
\`\`\`

The safe type is:

\`\`\`java
Object value =
        list.get(0);
\`\`\`

---

## 4. Forgetting PECS

Remember:

Producer → extends

Consumer → super

---

# Best Practices

- Use <?> when the exact generic type does not matter.
- Use ? extends T when a collection produces values.
- Use ? super T when a collection consumes values.
- Apply the PECS principle.
- Do not add arbitrary values to an upper-bounded wildcard collection.
- Do not assume a specific type when reading from a lower-bounded wildcard collection.
- Prefer clear generic APIs over unnecessary casting.

---

# Interview Questions

## Q1. What is a wildcard?

A wildcard ? represents an unknown generic type.

---

## Q2. What is an unbounded wildcard?

\`\`\`text
?
\`\`\`

It represents an unknown type without a bound.

---

## Q3. What is an upper-bounded wildcard?

\`\`\`java
? extends T
\`\`\`

It represents an unknown type that is T or a subtype of T.

---

## Q4. What is a lower-bounded wildcard?

\`\`\`java
? super T
\`\`\`

It represents an unknown type that is T or a supertype of T.

---

## Q5. What does PECS mean?

Producer Extends

Consumer Super

---

## Q6. Can you add an Integer to List<? extends Number>?

No, because the actual list type is unknown.

---

## Q7. Can you add an Integer to List<? super Integer>?

Yes.

---

## Q8. What can you safely read from List<? super Integer>?

Values can safely be treated as Object.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain wildcards.
- Use unbounded wildcards.
- Use upper-bounded wildcards.
- Use lower-bounded wildcards.
- Understand ?.
- Understand ? extends.
- Understand ? super.
- Apply the PECS principle.
- Work with wildcard collections.
- Understand wildcards with inheritance.
- Distinguish wildcards from type parameters.

---

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

→ Lesson 10 — Comparable

Lesson 11 — Comparator

Lesson 12 — Sorting Objects

Lesson 13 — Immutable Collections

Lesson 14 — Maps & Generics in Practice

Lesson 15 — Inventory Management System

---

# Next Lesson

## Lesson 10 — Comparable

You will learn:

- What Comparable is.
- Natural ordering.
- compareTo().
- Implementing Comparable.
- Sorting custom objects.
- Comparable with Strings and numbers.
- Practical examples.
- Common mistakes.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson9;