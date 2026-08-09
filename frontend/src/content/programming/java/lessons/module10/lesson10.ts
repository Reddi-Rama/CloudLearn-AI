const lesson10 = {

  id: "lesson10",

  title: "Comparable",

  content: `

# Comparable

## Introduction

Comparable is an interface used to define the natural ordering of objects.

It belongs to:

java.lang

Unlike many interfaces, it does not need to be imported.

The interface provides:

compareTo()

This method is used when one object needs to be compared with another object of the same general type.



# Why Do We Need Comparable?

Suppose you create a custom class:

class Product {

    int price;

}

Java does not automatically know how two Product objects should be ordered.

Should they be sorted by:

- Price.
- Name.
- ID.
- Rating.

Comparable lets the class define its natural ordering.



# Comparable Syntax

A class can implement Comparable<T>:

class Product
        implements Comparable<Product> {

}

Then implement:

public int compareTo(
        Product other) {

}



# The compareTo() Method

The method returns an integer.

The result has three important meanings.



Negative

↓

Current object comes before other



Zero

↓

Both are considered equal in ordering



Positive

↓

Current object comes after other



Conceptually:

this < other

↓

negative



this == other

↓

zero



this > other

↓

positive



# Simple Comparable Example

class Product
        implements Comparable<Product> {

    int price;

    Product(int price) {

        this.price = price;

    }

    @Override
    public int compareTo(
            Product other) {

        return Integer.compare(
                this.price,
                other.price);

    }

}

Here, the natural ordering of Product objects is based on price.



# Using Comparable

Create objects:

Product first =
        new Product(1500);

Product second =
        new Product(2500);



Compare them:

int result =
        first.compareTo(second);



Since:

1500 < 2500

the result is negative.



# Understanding the Result

Suppose:

Product first =
        new Product(1500);

Product second =
        new Product(2500);

Then:

first.compareTo(second)

returns a negative value.

This means:

first

↓

comes before

↓

second



If:

Product first =
        new Product(2500);

Product second =
        new Product(1500);

then:

first.compareTo(second)

returns a positive value.



If both prices are the same:

Product first =
        new Product(1500);

Product second =
        new Product(1500);

then:

first.compareTo(second)

returns zero.



# Why Use Integer.compare()?

You might see:

return this.price - other.price;

But this approach can cause integer overflow for extreme values.

Prefer:

return Integer.compare(
        this.price,
        other.price);

This clearly expresses the comparison and avoids the subtraction problem.



# Complete Comparable Example

class Product
        implements Comparable<Product> {

    int price;

    Product(int price) {

        this.price = price;

    }

    @Override
    public int compareTo(
            Product other) {

        return Integer.compare(
                this.price,
                other.price);

    }

    @Override
    public String toString() {

        return "Price: "
                + price;

    }

}



# Sorting Objects with Comparable

Java provides:

Arrays.sort()

for arrays.

Example:

Product[] products = {

    new Product(3000),
    new Product(1000),
    new Product(2000)

};



Sort:

Arrays.sort(products);



The objects are sorted according to compareTo().



# Complete Array Sorting Example

import java.util.Arrays;

class Product
        implements Comparable<Product> {

    int price;

    Product(int price) {

        this.price = price;

    }

    @Override
    public int compareTo(
            Product other) {

        return Integer.compare(
                this.price,
                other.price);

    }

    @Override
    public String toString() {

        return "Price: "
                + price;

    }

}

public class ComparableExample {

    public static void main(
            String[] args) {

        Product[] products = {

            new Product(3000),
            new Product(1000),
            new Product(2000)

        };

        Arrays.sort(products);

        System.out.println(
                Arrays.toString(products));

    }

}



Output:

[Price: 1000, Price: 2000, Price: 3000]



# How Arrays.sort() Uses Comparable

When:

Arrays.sort(products);

is executed, Java needs to know how Product objects should be compared.

Product implements:

Comparable<Product>

Therefore Java calls:

compareTo()

to determine the ordering.



Flow:

Product Array

↓

Arrays.sort()

↓

compareTo()

↓

Compare Objects

↓

Arrange Objects

↓

Sorted Array



# Comparable with Collections

Comparable can also be used with Lists.

Java provides:

Collections.sort()

Example:

List<Product> products =
        new ArrayList<>();

products.add(
        new Product(3000));

products.add(
        new Product(1000));

products.add(
        new Product(2000));



Sort:

Collections.sort(products);



The List is sorted according to compareTo().



# Complete List Example

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Product
        implements Comparable<Product> {

    int price;

    Product(int price) {

        this.price = price;

    }

    @Override
    public int compareTo(
            Product other) {

        return Integer.compare(
                this.price,
                other.price);

    }

    @Override
    public String toString() {

        return "Price: "
                + price;

    }

}

public class ComparableListExample {

    public static void main(
            String[] args) {

        List<Product> products =
                new ArrayList<>();

        products.add(
                new Product(3000));

        products.add(
                new Product(1000));

        products.add(
                new Product(2000));

        Collections.sort(products);

        System.out.println(products);

    }

}



Output:

[Price: 1000, Price: 2000, Price: 3000]



# Natural Ordering

The ordering defined by compareTo() is called:

Natural Ordering

For Product:

return Integer.compare(
        this.price,
        other.price);

means:

Lower price

↓

comes first.



Therefore:

1000

↓

2000

↓

3000



# Descending Natural Ordering

You can define the natural ordering in descending form.

Example:

@Override
public int compareTo(
        Product other) {

    return Integer.compare(
            other.price,
            this.price);

}



Now:

3000

↓

2000

↓

1000

would be the natural order.

However, natural ordering should generally represent the most meaningful default ordering for the class.



# Comparable with Strings

String already implements:

Comparable<String>

Example:

String first = "Apple";

String second = "Banana";

int result =
        first.compareTo(second);



Since Apple comes before Banana alphabetically, the result is negative.



# Comparable with Numbers

Wrapper classes such as:

- Integer.
- Double.
- Float.
- Long.

implement Comparable.

Example:

Integer first = 10;

Integer second = 20;

System.out.println(
        first.compareTo(second));



The result is negative because:

10 < 20



# Comparable with TreeSet

Comparable is useful with sorted collections such as TreeSet.

Example:

TreeSet<Product> products =
        new TreeSet<>();



TreeSet can use the natural ordering defined by compareTo().

The Product objects will be arranged according to their natural ordering.



# Comparable with TreeMap

Comparable can also be used with TreeMap when keys have a natural ordering.

Example:

TreeMap<Integer, String> products =
        new TreeMap<>();



Integer already implements Comparable.

Therefore TreeMap can naturally order Integer keys.



# Comparison Contract

The compareTo() method should follow a consistent ordering.

If:

a < b

then:

a.compareTo(b)

should produce a negative result.



If:

a == b

then:

a.compareTo(b)

should produce zero.



If:

a > b

then:

a.compareTo(b)

should produce a positive result.



The exact integer value is not important.

Only its sign matters.



# Important Point

Do not write code that depends on:

compareTo() == -1

because compareTo() may return any negative integer.

Similarly, do not assume that a positive result must be exactly:

1

Only the sign matters.



# Example of Correct Checking

Instead of:

if (a.compareTo(b) == -1) {

}

prefer:

if (a.compareTo(b) < 0) {

}



Instead of:

if (a.compareTo(b) == 1) {

}

prefer:

if (a.compareTo(b) > 0) {

}



# When Should You Use Comparable?

Use Comparable when:

- A class has one clear natural ordering.
- That ordering makes sense as the default.
- The ordering belongs naturally to the class.

Example:

Product

↓

Natural ordering by price



# When Should You Not Use Comparable?

If a class needs many unrelated sorting strategies, Comparable may not be the best choice.

For example:

Product

↓

Sort by name

↓

Sort by price

↓

Sort by rating

↓

Sort by ID



In this situation, Comparator is more appropriate.

Comparator will be covered in the next lesson.



# Comparable and Object Sorting

Consider:

Product[] products = {

    new Product(5000),
    new Product(1500),
    new Product(3000)

};



Before sorting:

5000

1500

3000



After:

Arrays.sort(products);



Natural ordering:

1500

↓

3000

↓

5000



# Practical Example

Consider an application that stores product prices.

Each Product object contains:

- Product name.
- Product price.

If price is the natural ordering, Comparable can define it.

Example:

class Product
        implements Comparable<Product> {

    String name;
    int price;

    Product(
            String name,
            int price) {

        this.name = name;
        this.price = price;

    }

    @Override
    public int compareTo(
            Product other) {

        return Integer.compare(
                this.price,
                other.price);

    }

}



Now Java knows how Product objects should be naturally ordered.



# Natural Ordering Flow

Product Object

↓

implements Comparable<Product>

↓

compareTo()

↓

Define Natural Ordering

↓

Arrays.sort()

or

↓

Collections.sort()

↓

Sorted Objects



# Comparable and equals()

Comparable and equals() are related concepts but they have different purposes.

equals()

↓

Checks logical equality.



compareTo()

↓

Determines ordering.



A well-designed class should consider consistency between these operations when appropriate.



# Common Mistakes

## 1. Forgetting implements Comparable

Incorrect:

class Product {

}

if you want the class itself to define natural ordering.

Correct:

class Product
        implements Comparable<Product> {

}



# Common Mistake 2: Incorrect Return Values

Remember:

negative

↓

before



zero

↓

equal ordering



positive

↓

after



# Common Mistake 3: Using Subtraction

Avoid:

return this.price - other.price;

for comparisons involving potentially extreme integer values.

Prefer:

return Integer.compare(
        this.price,
        other.price);



# Common Mistake 4: Depending on Exact Return Values

Do not assume:

compareTo() returns exactly:

-1
or
0
or
1

The contract only requires:

negative
zero
positive



# Common Mistake 5: Defining Many Unrelated Natural Orders

A class should generally have one meaningful natural ordering.

If you need:

sort by name

sort by price

sort by rating

sort by ID

use separate Comparator objects.



# Best Practices

- Use Comparable when a class has a clear natural ordering.
- Implement Comparable<T> with the appropriate type.
- Use Integer.compare() and similar comparison methods.
- Ensure compareTo() is consistent and transitive.
- Avoid depending on the exact numeric return value.
- Use Comparator when multiple sorting strategies are needed.
- Consider consistency between compareTo() and equals().
- Keep the natural ordering meaningful for the class.
- Use Collections.sort() or Arrays.sort() when appropriate.
- Avoid unnecessary comparison logic.



# Interview Questions

## Q1. What is Comparable?

Comparable is an interface used to define the natural ordering of objects.



## Q2. Which method does Comparable provide?

compareTo()



## Q3. What does a negative result mean?

The current object comes before the other object.



## Q4. What does zero mean?

The two objects are equal according to the comparison ordering.



## Q5. What does a positive result mean?

The current object comes after the other object.



## Q6. Where is Comparable located?

java.lang.



## Q7. Does Comparable require an import?

No.



## Q8. How do you implement Comparable?

Use:

class Product
        implements Comparable<Product>

and override:

public int compareTo(
        Product other)



## Q9. What is natural ordering?

The default ordering defined by a class using Comparable.



## Q10. Can Comparable be used with TreeSet?

Yes.



## Q11. Can Comparable be used with TreeMap?

Yes, especially for naturally ordered keys.



## Q12. What is the difference between Comparable and Comparator?

Comparable defines natural ordering inside the class, while Comparator provides external or custom ordering.



## Q13. Which method does Comparable use?

compareTo()



## Q14. Which method does Comparator use?

compare()



## Q15. Why should Integer.compare() be preferred over subtraction?

Because subtraction can cause integer overflow for extreme integer values.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain Comparable.
- Implement Comparable<T>.
- Override compareTo().
- Understand natural ordering.
- Interpret comparison results.
- Understand negative, zero, and positive results.
- Sort objects using Arrays.sort().
- Sort objects using Collections.sort().
- Understand Comparable with collections.
- Use Comparable with TreeSet.
- Use Comparable with TreeMap.
- Understand the comparison contract.
- Avoid common comparison mistakes.
- Understand why Integer.compare() is preferred.
- Understand the relationship between compareTo() and equals().
- Understand when Comparator is more appropriate.



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

→ Lesson 11 — Comparator

Lesson 12 — Sorting Objects

Lesson 13 — Immutable Collections

Lesson 14 — Maps & Generics in Practice

Lesson 15 — Inventory Management System



# Next Lesson

## Lesson 11 — Comparator

You will learn:

- What Comparator is.
- Why Comparator is needed.
- compare() method.
- Custom sorting.
- Sorting by multiple fields.
- Lambda expressions with Comparator.
- Comparator.comparing().
- thenComparing().
- Reverse ordering.
- Comparable vs Comparator.
- Practical object-sorting examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson10;