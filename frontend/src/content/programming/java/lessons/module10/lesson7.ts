const lesson7 = {

  id: "lesson7",

  title: "Generic Methods",

  content: `

# Generic Methods

## Introduction

A generic method is a method that can work with different data types while maintaining type safety.

Unlike a generic class, a generic method can be declared inside:

- A normal class.
- A generic class.
- A static method.
- An instance method.

The method defines its own type parameter.

Generic Method

↓

Type Parameter

↓

Reusable Method

↓

Type Safety

---

# What Is a Generic Method?

A generic method uses a type parameter before its return type.

Basic syntax:

\`\`\`java
public <T> T methodName(T value) {

    // method body

}
\`\`\`

Here:

\`\`\`text
<T>
\`\`\`

is the method's type parameter.

---

# Simple Generic Method

Example:

\`\`\`java
public static <T> void display(T value) {

    System.out.println(value);

}
\`\`\`

The method can work with different types.

\`\`\`java
display("Java");

display(100);

display(25.5);
\`\`\`

The compiler determines the appropriate type.

---

# Understanding the Syntax

Consider:

\`\`\`java
public static <T> void display(T value)
\`\`\`

Each part has a purpose:

public

↓

Access modifier


static

↓

Method belongs to the class


<T>

↓

Generic type parameter


void

↓

Return type


display

↓

Method name


T value

↓

Parameter using the generic type

The important part is:

\`\`\`text
<T>
\`\`\`

It tells Java that this method introduces a type parameter named T.

---

# Generic Method with Return Value

A generic method can also return a value.

Example:

\`\`\`java
public static <T> T getValue(T value) {

    return value;

}
\`\`\`

Use it:

\`\`\`java
String text =
        getValue("Java");

Integer number =
        getValue(100);
\`\`\`

The method adapts to the type of the argument.

---

# Complete Example

\`\`\`java
public class GenericMethodExample {

    public static <T> T getValue(T value) {

        return value;

    }

    public static void main(String[] args) {

        String text =
                getValue("Java");

        Integer number =
                getValue(100);

        Double decimal =
                getValue(25.5);

        System.out.println(text);
        System.out.println(number);
        System.out.println(decimal);

    }

}
\`\`\`

Output:

\`\`\`text
Java
100
25.5
\`\`\`

---

# Generic Method Without a Generic Class

A class does not need to be generic for a method to be generic.

Example:

\`\`\`java
class Utility {

    public static <T> void display(T value) {

        System.out.println(value);

    }

}
\`\`\`

Use:

\`\`\`java
Utility.display("Java");

Utility.display(100);
\`\`\`

The class itself is not generic.

Only the method is generic.

---

# Generic Method in a Generic Class

A generic class can also contain generic methods.

Example:

\`\`\`java
class Box<T> {

    private T value;

    void set(T value) {

        this.value = value;

    }

    T get() {

        return value;

    }

    public <U> void display(U item) {

        System.out.println(item);

    }

}
\`\`\`

Here:

T

belongs to the class.

U

belongs to the method.

These are separate type parameters.

---

# Class Type Parameter vs Method Type Parameter

Consider:

\`\`\`java
class Box<T> {

    public <U> void display(U value) {

        System.out.println(value);

    }

}
\`\`\`

Here:

T

↓

Class type parameter


U

↓

Method type parameter

The method can introduce its own type independently.

---

# Type Inference

Java can often determine the type automatically.

Consider:

\`\`\`java
public static <T> void display(T value) {

    System.out.println(value);

}
\`\`\`

When you write:

\`\`\`java
display("Java");
\`\`\`

Java infers:

T = String

When you write:

\`\`\`java
display(100);
\`\`\`

Java infers:

T = Integer

---

# Explicit Type Argument

You can also explicitly provide a type argument in some contexts.

Example:

\`\`\`java
Utility.<String>display(
        "Java");
\`\`\`

Here you explicitly specify:

T = String

Usually, type inference makes explicit specification unnecessary.

---

# Generic Method with Two Parameters

A generic method can have multiple parameters.

Example:

\`\`\`java
public static <T> void displayPair(
        T first,
        T second) {

    System.out.println(first);

    System.out.println(second);

}
\`\`\`

Use:

\`\`\`java
displayPair(
        "Java",
        "Python");
\`\`\`

Both parameters use the same type parameter T.

---

# Multiple Type Parameters

A method can use multiple type parameters.

Example:

\`\`\`java
public static <K, V> void displayPair(
        K key,
        V value) {

    System.out.println(
            "Key: " + key);

    System.out.println(
            "Value: " + value);

}
\`\`\`

Use:

\`\`\`java
displayPair(
        101,
        "Java");
\`\`\`

Here:

K = Integer

V = String

---

# Complete Multiple-Type Example

\`\`\`java
public class PairUtility {

    public static <K, V> void displayPair(
            K key,
            V value) {

        System.out.println(
                "Key: " + key);

        System.out.println(
                "Value: " + value);

    }

    public static void main(String[] args) {

        displayPair(
                101,
                "Java");

        displayPair(
                "Course",
                "Python");

    }

}
\`\`\`

Output:

\`\`\`text
Key: 101
Value: Java

Key: Course
Value: Python
\`\`\`

---

# Generic Method with Arrays

Generic methods are useful when processing arrays.

Example:

\`\`\`java
public static <T> void displayArray(
        T[] array) {

    for (T value : array) {

        System.out.println(value);

    }

}
\`\`\`

Use:

\`\`\`java
String[] languages = {
        "Java",
        "Python",
        "C++"
};

displayArray(languages);
\`\`\`

You can also use:

\`\`\`java
Integer[] numbers = {
        10,
        20,
        30
};

displayArray(numbers);
\`\`\`

The same method works for both arrays.

---

# Generic Method to Find an Element

Example:

\`\`\`java
public static <T> boolean contains(
        T[] array,
        T target) {

    for (T value : array) {

        if (value.equals(target)) {

            return true;

        }

    }

    return false;

}
\`\`\`

Use:

\`\`\`java
String[] languages = {
        "Java",
        "Python",
        "C++"
};

boolean result =
        contains(
                languages,
                "Python");
\`\`\`

The method can work with other reference types as well.

---

# Generic Method with Lists

Generics are heavily used with collections.

Example:

\`\`\`java
public static <T> void printList(
        List<T> list) {

    for (T value : list) {

        System.out.println(value);

    }

}
\`\`\`

Use:

\`\`\`java
List<String> languages =
        new ArrayList<>();

languages.add("Java");
languages.add("Python");

printList(languages);
\`\`\`

---

# Generic Method to Get the First Element

Example:

\`\`\`java
public static <T> T first(
        List<T> list) {

    return list.get(0);

}
\`\`\`

Use:

\`\`\`java
String language =
        first(languages);
\`\`\`

The return type is inferred as String.

---

# Generic Method to Swap Elements

A generic method can work with any type.

Example:

\`\`\`java
public static <T> void swap(
        T[] array,
        int first,
        int second) {

    T temp =
            array[first];

    array[first] =
            array[second];

    array[second] =
            temp;

}
\`\`\`

Use:

\`\`\`java
String[] languages = {
        "Java",
        "Python",
        "C++"
};

swap(
        languages,
        0,
        2);
\`\`\`

The same method can work with other reference-type arrays.

---

# Generic Static Methods

A static method can be generic.

Example:

\`\`\`java
public static <T> void display(
        T value) {

    System.out.println(value);

}
\`\`\`

Use:

\`\`\`java
display("Java");

display(100);

display(25.5);
\`\`\`

The method does not require an object of the class.

---

# Generic Instance Methods

Generic methods can also be instance methods.

Example:

\`\`\`java
class Utility {

    public <T> void display(
            T value) {

        System.out.println(value);

    }

}
\`\`\`

Use:

\`\`\`java
Utility utility =
        new Utility();

utility.display("Java");

utility.display(100);
\`\`\`

---

# Generic Class vs Generic Method

## Generic Class

The type parameter belongs to the class.

Example:

\`\`\`java
class Box<T> {

    T value;

}
\`\`\`

T is associated with the object.

---

## Generic Method

The type parameter belongs to the method.

Example:

\`\`\`java
class Utility {

    public <T> void display(
            T value) {

        System.out.println(value);

    }

}
\`\`\`

T belongs to the method.

---

# Important Difference

Generic Class:

Object creation determines the type.

Example:

\`\`\`java
Box<String> box =
        new Box<>();
\`\`\`

Here:

T = String

Generic Method:

Method invocation can determine the type.

Example:

\`\`\`java
display("Java");
\`\`\`

Here:

T = String

---

# Generic Methods and Type Safety

Consider:

\`\`\`java
public static <T> T getValue(
        T value) {

    return value;

}
\`\`\`

The compiler maintains the relationship between:

Input type

↓

T

↓

Return type

This avoids unnecessary casting.

---

# Generic Method with Collections

Example:

\`\`\`java
public static <T> T first(
        List<T> list) {

    return list.get(0);

}
\`\`\`

Suppose:

\`\`\`java
List<String> languages =
        new ArrayList<>();
\`\`\`

Then:

\`\`\`java
String language =
        first(languages);
\`\`\`

The compiler infers:

T = String

---

# Generic Method with Different Collections

The same method can work with:

List<String>

List<Integer>

List<Double>

as long as the required generic structure matches.

Example:

\`\`\`java
List<Integer> numbers =
        new ArrayList<>();

Integer number =
        first(numbers);
\`\`\`

---

# Generic Utility Methods

Generic methods are especially useful for utility operations.

Examples:

- Displaying values.
- Searching arrays.
- Swapping elements.
- Finding elements.
- Retrieving values.
- Processing collections.
- Converting reusable data.

One method can work with multiple reference types.

---

# Generic Methods and Reusability

Without generic methods, you might write:

\`\`\`text
displayString()
displayInteger()
displayDouble()
displayObject()
\`\`\`

With Generics:

\`\`\`text
display(T)
\`\`\`

One method can handle different types.

---

# Generic Methods and Bounds

A generic method can sometimes require a specific capability.

For example, if a method needs to compare objects using compareTo(), Java must know that T supports that operation.

A normal:

\`\`\`java
<T>
\`\`\`

does not automatically guarantee that T has compareTo().

This is where bounded generics become important.

You will study this in the next lesson.

---

# Common Mistakes

## 1. Confusing Class Type Parameters with Method Type Parameters

Consider:

\`\`\`java
class Box<T> {

    public <U> void display(
            U value) {

        System.out.println(value);

    }

}
\`\`\`

T belongs to the class.

U belongs to the method.

---

## 2. Thinking a Generic Method Requires a Generic Class

This is not required.

A normal class can contain a generic method.

Example:

\`\`\`java
class Utility {

    public static <T> void display(
            T value) {

        System.out.println(value);

    }

}
\`\`\`

---

## 3. Assuming Every Type Has compareTo()

This is not automatically true.

If a generic method needs compareTo(), an appropriate bound is required.

---

## 4. Using Raw Types

Avoid:

\`\`\`java
List list;
\`\`\`

Prefer:

\`\`\`java
List<String> list;
\`\`\`

Generic methods work best when the types are clearly defined.

---

# Best Practices

- Use generic methods when the same operation should work with multiple types.
- Let Java infer types when the result is clear.
- Use meaningful type parameter names when needed.
- Add bounds when a method requires specific capabilities.
- Avoid unnecessary type casting.
- Keep generic methods focused on reusable behavior.
- Use collections and arrays with appropriate generic types.

---

# Interview Questions

## Q1. What is a generic method?

A method that declares one or more type parameters and can operate on different types safely.

---

## Q2. Where is the type parameter declared?

Before the method's return type.

Example:

\`\`\`java
<T> T getValue(T value)
\`\`\`

---

## Q3. Can a non-generic class contain a generic method?

Yes.

---

## Q4. Can a static method be generic?

Yes.

---

## Q5. Can a generic method have multiple type parameters?

Yes.

Example:

\`\`\`java
<K, V>
\`\`\`

---

## Q6. What is type inference?

The compiler determines the generic type from the method arguments and context.

---

## Q7. Why are generic methods useful?

They reduce duplicate code while maintaining compile-time type safety.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Define generic methods.
- Declare type parameters.
- Create generic methods with return values.
- Create generic methods with multiple parameters.
- Use multiple type parameters.
- Work with generic arrays.
- Work with generic collections.
- Understand type inference.
- Use generic static and instance methods.
- Understand the difference between generic classes and generic methods.
- Create reusable type-safe utility methods.
- Understand why bounds may be required.

---

# Module Progress

✓ Lesson 1 — Introduction to Maps

✓ Lesson 2 — HashMap

✓ Lesson 3 — LinkedHashMap

✓ Lesson 4 — TreeMap

✓ Lesson 5 — Hashtable

✓ Lesson 6 — Generic Classes

✓ Lesson 7 — Generic Methods

→ Lesson 8 — Bounded Generics

Lesson 9 — Wildcards

Lesson 10 — Comparable

Lesson 11 — Comparator

Lesson 12 — Sorting Objects

Lesson 13 — Immutable Collections

Lesson 14 — Maps & Generics in Practice

Lesson 15 — Inventory Management System

---

# Next Lesson

## Lesson 8 — Bounded Generics

You will learn:

- Why bounds are needed.
- Upper bounds.
- extends.
- Bounded type parameters.
- Generic classes with bounds.
- Generic methods with bounds.
- Multiple bounds.
- T extends Number.
- Numeric generic programming.
- Practical examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson7;