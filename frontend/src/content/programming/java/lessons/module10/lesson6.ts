const lesson6 = {

  id: "lesson6",

  title: "Generic Classes",

  content: `

# Generic Classes

## Introduction

Java Generics allow you to write classes, interfaces, and methods that work with different data types while maintaining type safety.

Without Generics, a class may need to work with the general Object type.

With Generics, you can specify the type that the class should work with.

Without Generics

↓

Object

↓

Type casting required


With Generics

↓

Specific type

↓

Type safety

---

# What Are Generics?

Generics allow a type to be supplied as a parameter.

For example:

\`\`\`java
List<String>
\`\`\`

Here:

List

↓

Generic type

↓

String

Similarly:

\`\`\`java
List<Integer>
\`\`\`

means the List works with Integer values.

---

# Why Do We Need Generics?

Consider a class without Generics:

\`\`\`java
class Box {

    Object value;

    void set(Object value) {

        this.value = value;

    }

    Object get() {

        return value;

    }

}
\`\`\`

You can store different types:

\`\`\`java
Box box =
        new Box();

box.set("Java");
\`\`\`

Retrieve it:

\`\`\`java
String value =
        (String) box.get();
\`\`\`

Notice the explicit cast:

\`\`\`text
(String)
\`\`\`

This can become inconvenient and can lead to runtime type errors.

---

# Generic Class

A generic class uses a type parameter.

Example:

\`\`\`java
class Box<T> {

    T value;

    void set(T value) {

        this.value = value;

    }

    T get() {

        return value;

    }

}
\`\`\`

Here:

T

is a type parameter.

---

# Understanding T

T is commonly used to mean:

Type

It is only a naming convention.

You could technically use another identifier, but common conventions make code easier to understand.

Common type parameter names include:

T → Type

E → Element

K → Key

V → Value

N → Number

---

# Creating an Object of a Generic Class

Suppose:

\`\`\`java
class Box<T> {

    T value;

    void set(T value) {

        this.value = value;

    }

    T get() {

        return value;

    }

}
\`\`\`

Create a String Box:

\`\`\`java
Box<String> box =
        new Box<>();
\`\`\`

Now the compiler knows:

T = String

So:

\`\`\`java
box.set("Java");
\`\`\`

is valid.

---

# Retrieving the Value

\`\`\`java
String value =
        box.get();
\`\`\`

No explicit type casting is required.

---

# Integer Generic Object

You can create:

\`\`\`java
Box<Integer> box =
        new Box<>();
\`\`\`

Now:

\`\`\`java
box.set(100);
\`\`\`

and:

\`\`\`java
Integer value =
        box.get();
\`\`\`

The same class works with another type.

---

# Complete Generic Box Example

\`\`\`java
class Box<T> {

    private T value;

    void set(T value) {

        this.value = value;

    }

    T get() {

        return value;

    }

}

public class GenericClassExample {

    public static void main(String[] args) {

        Box<String> textBox =
                new Box<>();

        textBox.set("Java");

        System.out.println(
                textBox.get());

        Box<Integer> numberBox =
                new Box<>();

        numberBox.set(100);

        System.out.println(
                numberBox.get());

    }

}
\`\`\`

Output:

\`\`\`text
Java
100
\`\`\`

---

# Type Safety

Generics provide compile-time type checking.

Consider:

\`\`\`java
Box<String> box =
        new Box<>();
\`\`\`

This is valid:

\`\`\`java
box.set("Java");
\`\`\`

But this is invalid:

\`\`\`java
box.set(100);
\`\`\`

because the Box expects:

String

The compiler detects the problem.

---

# Generic Class with Constructor

A generic class can have a constructor.

Example:

\`\`\`java
class Box<T> {

    private T value;

    Box(T value) {

        this.value = value;

    }

    T get() {

        return value;

    }

}
\`\`\`

Create:

\`\`\`java
Box<String> box =
        new Box<>("Java");
\`\`\`

Or:

\`\`\`java
Box<Integer> box =
        new Box<>(100);
\`\`\`

---

# Multiple Type Parameters

A generic class can have more than one type parameter.

Example:

\`\`\`java
class Pair<K, V> {

    K key;

    V value;

    Pair(K key, V value) {

        this.key = key;
        this.value = value;

    }

}
\`\`\`

Here:

K → Key type

V → Value type

---

# Creating a Pair

\`\`\`java
Pair<Integer, String> pair =
        new Pair<>(
                101,
                "Java");
\`\`\`

Now:

K = Integer

V = String

---

# Complete Pair Example

\`\`\`java
class Pair<K, V> {

    private K key;

    private V value;

    Pair(K key, V value) {

        this.key = key;
        this.value = value;

    }

    K getKey() {

        return key;

    }

    V getValue() {

        return value;

    }

}

public class PairExample {

    public static void main(String[] args) {

        Pair<Integer, String> pair =
                new Pair<>(
                        101,
                        "Java");

        System.out.println(
                "Key: "
                + pair.getKey());

        System.out.println(
                "Value: "
                + pair.getValue());

    }

}
\`\`\`

Output:

\`\`\`text
Key: 101
Value: Java
\`\`\`

---

# Generic Fields

A generic class can use its type parameter in fields.

Example:

\`\`\`java
class Container<T> {

    private T item;

}
\`\`\`

If:

\`\`\`java
Container<String>
\`\`\`

then:

T = String

If:

\`\`\`java
Container<Integer>
\`\`\`

then:

T = Integer

---

# Generic Methods Inside Generic Classes

A generic class can contain normal methods that use the class's type parameter.

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

}
\`\`\`

Here both the field and methods use T.

---

# Generic Collections Inside Generic Classes

Generic classes can also use generic collections.

Example:

\`\`\`java
import java.util.ArrayList;
import java.util.List;

class Storage<T> {

    private List<T> items =
            new ArrayList<>();

    void add(T item) {

        items.add(item);

    }

    T get(int index) {

        return items.get(index);

    }

    int size() {

        return items.size();

    }

}
\`\`\`

Use it:

\`\`\`java
Storage<String> languages =
        new Storage<>();

languages.add("Java");
languages.add("Python");

System.out.println(
        languages.get(0));
\`\`\`

Output:

\`\`\`text
Java
\`\`\`

---

# Generic Class and Reusability

Without Generics:

You may need:

BoxString

BoxInteger

BoxDouble

BoxCharacter

With Generics:

Box<T>

One class can support different reference types.

---

# Generics and Wrapper Classes

Generics work with reference types.

They cannot directly use primitive types.

This is invalid:

\`\`\`java
Box<int>
\`\`\`

Instead use:

\`\`\`java
Box<Integer>
\`\`\`

Other examples:

int → Integer

double → Double

float → Float

boolean → Boolean

char → Character

long → Long

short → Short

byte → Byte

---

# Diamond Operator

Java provides the diamond operator:

\`\`\`java
<>
\`\`\`

It allows the compiler to infer the generic type arguments in many situations.

Instead of:

\`\`\`java
Box<String> box =
        new Box<String>();
\`\`\`

you can write:

\`\`\`java
Box<String> box =
        new Box<>();
\`\`\`

The compiler understands that T is String.

---

# Raw Types

A raw type is a generic type used without specifying its type parameter.

Example:

\`\`\`java
Box box =
        new Box();
\`\`\`

This removes much of the type-safety benefit of Generics.

Prefer:

\`\`\`java
Box<String> box =
        new Box<>();
\`\`\`

---

# Generic Class with Different Types

The same generic class can be used multiple times with different types.

Example:

\`\`\`java
Box<String> textBox =
        new Box<>();

Box<Integer> numberBox =
        new Box<>();

Box<Double> decimalBox =
        new Box<>();
\`\`\`

Each object has its own type.

---

# Practical Example: Generic Storage

\`\`\`java
import java.util.ArrayList;
import java.util.List;

class Storage<T> {

    private List<T> items =
            new ArrayList<>();

    void add(T item) {

        items.add(item);

    }

    T get(int index) {

        return items.get(index);

    }

    int size() {

        return items.size();

    }

}

public class StorageExample {

    public static void main(String[] args) {

        Storage<String> languages =
                new Storage<>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        System.out.println(
                "First: "
                + languages.get(0));

        System.out.println(
                "Size: "
                + languages.size());

    }

}
\`\`\`

Output:

\`\`\`text
First: Java
Size: 3
\`\`\`

---

# Common Mistakes

## 1. Using Primitive Types

Incorrect:

\`\`\`java
Box<int>
\`\`\`

Correct:

\`\`\`java
Box<Integer>
\`\`\`

---

## 2. Using Raw Types

Avoid:

\`\`\`java
Box box =
        new Box();
\`\`\`

Prefer:

\`\`\`java
Box<String> box =
        new Box<>();
\`\`\`

---

## 3. Assuming T Is a Specific Type

Inside:

\`\`\`java
class Box<T>
\`\`\`

T is a type parameter.

It does not automatically mean String, Integer, or another specific type.

The actual type is supplied when the class is used.

---

## 4. Trying to Store Different Types

If:

\`\`\`java
Box<String> box =
        new Box<>();
\`\`\`

you should not try:

\`\`\`java
box.set(100);
\`\`\`

because the Box was defined for String.

---

# Best Practices

- Use Generics to improve type safety.
- Prefer specific type parameters instead of raw types.
- Use meaningful type parameter names when they improve readability.
- Use the diamond operator where appropriate.
- Use wrapper classes when working with primitive-like values in Generics.
- Design generic classes around reusable behavior.
- Avoid unnecessary casting.

---

# Interview Questions

## Q1. What are Generics?

Generics allow classes and methods to work with parameterized types while providing compile-time type safety.

---

## Q2. What is a generic class?

A class that accepts one or more type parameters.

Example:

\`\`\`java
class Box<T>
\`\`\`

---

## Q3. What does T mean?

It is commonly used as a type parameter representing a type.

---

## Q4. Can Generics use primitive types?

No.

Generics require reference types, so wrapper classes such as Integer are used.

---

## Q5. What is the advantage of Generics?

They provide type safety, reduce casting, and allow reusable code.

---

## Q6. What is a raw type?

A generic type used without specifying its type parameter.

---

## Q7. What is the diamond operator?

\`\`\`text
<>
\`\`\`

allows the compiler to infer generic type arguments in many situations.

---

## Q8. Can a generic class have multiple type parameters?

Yes.

Example:

\`\`\`java
class Pair<K, V>
\`\`\`

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain Generics.
- Create generic classes.
- Use type parameters.
- Create objects of generic classes.
- Create classes with multiple type parameters.
- Use generic fields and constructors.
- Work with generic collections.
- Understand type safety.
- Understand wrapper types in Generics.
- Use the diamond operator.
- Recognize raw types.
- Build reusable generic classes.

---

# Module Progress

✓ Lesson 1 — Introduction to Maps

✓ Lesson 2 — HashMap

✓ Lesson 3 — LinkedHashMap

✓ Lesson 4 — TreeMap

✓ Lesson 5 — Hashtable

✓ Lesson 6 — Generic Classes

→ Lesson 7 — Generic Methods

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

## Lesson 7 — Generic Methods

You will learn:

- How to create methods that work with different types.
- Type parameters in methods.
- Type inference.
- Multiple type parameters.
- Generic methods with return values.
- Generic methods with arrays.
- Generic methods with collections.
- Generic static methods.
- Generic instance methods.
- Difference between generic classes and generic methods.
- Practical examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson6;