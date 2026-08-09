const lesson8 = {

  id: "lesson8",

  title: "Bounded Generics",

  content: `

# Bounded Generics

## Introduction

Normal Generics allow a type parameter to represent many different types.

For example:

\`\`\`java
class Box<T> {

}
\`\`\`

Here, T can represent many different reference types.

But sometimes a generic class or method needs to work only with types that satisfy a particular requirement.

This is where bounded generics are useful.

Generic Type

↓

Apply a restriction

↓

Bounded Generic

---

# Why Do We Need Bounds?

Consider this generic method:

\`\`\`java
public static <T> T maximum(
        T first,
        T second) {

    // How should the values be compared?

}
\`\`\`

The problem is that Java does not know whether T supports comparison.

For example:

String

Integer

Double

can have meaningful ordering, but a completely arbitrary type may not.

We can solve this by adding a bound.

---

# Upper-Bounded Type Parameter

The syntax is:

\`\`\`java
<T extends SomeType>
\`\`\`

Example:

\`\`\`java
<T extends Number>
\`\`\`

This means:

T must be Number

or

T must be a subclass of Number

---

# Example with Number

\`\`\`java
class NumberBox<T extends Number> {

    private T value;

    NumberBox(T value) {

        this.value = value;

    }

    T getValue() {

        return value;

    }

}
\`\`\`

Now you can create:

\`\`\`java
NumberBox<Integer> integerBox =
        new NumberBox<>(100);
\`\`\`

and:

\`\`\`java
NumberBox<Double> doubleBox =
        new NumberBox<>(25.5);
\`\`\`

Both work because Integer and Double extend Number.

---

# Invalid Type

This would not be valid:

\`\`\`java
NumberBox<String> box =
        new NumberBox<>("Java");
\`\`\`

because:

String

↓

does not extend Number

The compiler detects the problem.

---

# Understanding extends

In bounded generics, extends does not mean only class inheritance.

It can also mean that a type implements an interface.

For example:

\`\`\`java
<T extends Comparable<T>>
\`\`\`

means T must implement Comparable<T>.

So:

extends

↓

class bound

or

interface bound

---

# Bounded Generic Method

A method can also have a bound.

Example:

\`\`\`java
public static <T extends Number>
double doubleValue(T value) {

    return value.doubleValue();

}
\`\`\`

Because T is bounded by Number, Java knows that:

\`\`\`java
value.doubleValue();
\`\`\`

is available.

---

# Complete Example

\`\`\`java
public class NumberUtility {

    public static <T extends Number>
    double doubleValue(T value) {

        return value.doubleValue();

    }

    public static void main(String[] args) {

        System.out.println(
                doubleValue(100));

        System.out.println(
                doubleValue(25.5));

    }

}
\`\`\`

Output:

\`\`\`text
100.0
25.5
\`\`\`

---

# Why Does This Work?

Because Number provides:

\`\`\`java
doubleValue()
\`\`\`

When Java sees:

\`\`\`java
<T extends Number>
\`\`\`

it knows that T has access to members provided by Number.

Without the bound:

\`\`\`java
<T>
\`\`\`

Java cannot assume that every possible T has:

\`\`\`java
doubleValue()
\`\`\`

---

# Generic Class with Interface Bound

Bounds can also be based on interfaces.

Example:

\`\`\`java
class TaskRunner<T extends Runnable> {

    private T task;

    TaskRunner(T task) {

        this.task = task;

    }

    void runTask() {

        task.run();

    }

}
\`\`\`

Now T must implement Runnable.

---

# Example

Create a class that implements Runnable:

\`\`\`java
class MyTask implements Runnable {

    public void run() {

        System.out.println(
                "Task running");

    }

}
\`\`\`

Use:

\`\`\`java
TaskRunner<MyTask> runner =
        new TaskRunner<>(
                new MyTask());

runner.runTask();
\`\`\`

Output:

\`\`\`text
Task running
\`\`\`

---

# Bounded Generic Methods with Interfaces

A method can also use an interface bound.

Example:

\`\`\`java
public static <T extends Runnable>
void execute(T task) {

    task.run();

}
\`\`\`

Use:

\`\`\`java
execute(
        new MyTask());
\`\`\`

Because MyTask implements Runnable, it satisfies the bound.

---

# Multiple Bounds

Java allows a type parameter to have multiple bounds.

Example:

\`\`\`java
<T extends Number & Comparable<T>>
\`\`\`

This means:

T must extend Number

and

T must implement Comparable<T>

---

# Important Rule for Multiple Bounds

When multiple bounds are used:

The class bound must come first.

Correct:

\`\`\`java
<T extends Number & Comparable<T>>
\`\`\`

Incorrect:

\`\`\`java
<T extends Comparable<T> & Number>
\`\`\`

The class must appear before interface bounds.

---

# Example with Multiple Bounds

\`\`\`java
public static <T extends Number & Comparable<T>>
T maximum(
        T first,
        T second) {

    if (first.compareTo(second) > 0) {

        return first;

    }

    return second;

}
\`\`\`

Here Java knows that T:

- Is a Number.
- Supports comparison.

---

# Using the Maximum Method

\`\`\`java
System.out.println(
        maximum(10, 20));

System.out.println(
        maximum(25.5, 10.5));
\`\`\`

Output:

\`\`\`text
20
25.5
\`\`\`

---

# Numeric Generic Programming

Bounds are useful when creating utilities that operate on numeric types.

Example:

\`\`\`java
public static <T extends Number>
double convertToDouble(T value) {

    return value.doubleValue();

}
\`\`\`

This method can work with:

Integer

Double

Float

Long

Short

Byte

because they extend Number.

---

# Practical Example: Numeric Calculator

\`\`\`java
public class NumericUtility {

    public static <T extends Number>
    double square(T value) {

        double number =
                value.doubleValue();

        return number * number;

    }

    public static void main(String[] args) {

        System.out.println(
                square(5));

        System.out.println(
                square(2.5));

    }

}
\`\`\`

Output:

\`\`\`text
25.0
6.25
\`\`\`

---

# Bounds Provide Compile-Time Safety

Consider:

\`\`\`java
public static <T extends Number>
double convert(T value) {

    return value.doubleValue();

}
\`\`\`

This is valid:

\`\`\`java
convert(100);
\`\`\`

This is also valid:

\`\`\`java
convert(25.5);
\`\`\`

But:

\`\`\`java
convert("Java");
\`\`\`

is rejected by the compiler.

The compiler knows that String does not satisfy:

\`\`\`text
T extends Number
\`\`\`

---

# Bounds vs Wildcards

These concepts are related but different.

Bounded type parameter:

\`\`\`java
<T extends Number>
\`\`\`

This declares a named type parameter.

Wildcard:

\`\`\`java
<? extends Number>
\`\`\`

represents an unknown type within a bound.

Wildcards will be covered in the next lesson.

---

# T extends Number vs ? extends Number

Compare:

\`\`\`java
<T extends Number>
\`\`\`

and:

\`\`\`java
<? extends Number>
\`\`\`

The first introduces a type parameter:

T

The second represents an unknown type:

?

Example:

\`\`\`java
public static <T extends Number>
void process(T value) {

}
\`\`\`

versus:

\`\`\`java
List<? extends Number> numbers;
\`\`\`

The distinction becomes important when designing generic APIs.

---

# Common Mistakes

## 1. Forgetting the Bound

If a method needs:

\`\`\`java
doubleValue()
\`\`\`

this is insufficient:

\`\`\`java
<T>
\`\`\`

Use:

\`\`\`java
<T extends Number>
\`\`\`

---

## 2. Putting the Class Bound After an Interface

Incorrect:

\`\`\`java
<T extends Comparable<T> & Number>
\`\`\`

Correct:

\`\`\`java
<T extends Number & Comparable<T>>
\`\`\`

---

## 3. Assuming extends Means Only Classes

In Generics:

\`\`\`java
<T extends SomeInterface>
\`\`\`

is also valid.

It means the type must implement the interface.

---

## 4. Using Too Many Restrictions

Do not add bounds that the method does not need.

Keep generic constraints as simple as possible.

---

# Best Practices

- Use bounds when a generic operation requires specific capabilities.
- Use extends for upper bounds.
- Use meaningful bounds that communicate the method's requirements.
- Prefer compile-time constraints over unnecessary casting.
- Keep bounds as simple as possible.
- Remember that multiple bounds require the class bound first.
- Understand the difference between bounded type parameters and wildcards.

---

# Interview Questions

## Q1. What are bounded generics?

Bounded generics restrict the types that can be used as generic type arguments.

---

## Q2. What is an upper bound?

A restriction written using:

\`\`\`java
<T extends Type>
\`\`\`

which allows T to be the specified type or an appropriate subtype.

---

## Q3. What does <T extends Number> mean?

It means T must be Number or a subclass of Number.

---

## Q4. Can extends be used with interfaces?

Yes.

Example:

\`\`\`java
<T extends Comparable<T>>
\`\`\`

requires T to implement Comparable<T>.

---

## Q5. Can Java have multiple bounds?

Yes.

Example:

\`\`\`java
<T extends Number & Comparable<T>>
\`\`\`

---

## Q6. Which bound comes first?

The class bound must come before interface bounds.

---

## Q7. Why use bounded generics instead of casting?

Bounds provide compile-time type safety and allow the compiler to know which operations are available.

---

## Q8. What is the difference between T extends Number and ? extends Number?

T extends Number declares a named type parameter, while ? extends Number represents an unknown type with an upper bound.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain bounded generics.
- Understand upper bounds.
- Use extends with generic types.
- Create bounded generic classes.
- Create bounded generic methods.
- Use T extends Number.
- Use interface bounds.
- Use multiple bounds.
- Understand Comparable bounds.
- Build numeric generic utilities.
- Understand why bounds improve type safety.
- Distinguish bounded type parameters from wildcards.

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

→ Lesson 9 — Wildcards

Lesson 10 — Comparable

Lesson 11 — Comparator

Lesson 12 — Sorting Objects

Lesson 13 — Immutable Collections

Lesson 14 — Maps & Generics in Practice

Lesson 15 — Inventory Management System

---

# Next Lesson

## Lesson 9 — Wildcards

You will learn:

- What wildcards are.
- Unbounded wildcard <?>.
- Upper-bounded wildcard <? extends T>.
- Lower-bounded wildcard <? super T>.
- Reading and writing generic collections.
- The PECS principle.
- Practical examples.
- Common mistakes.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson8;