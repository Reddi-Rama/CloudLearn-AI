const lesson11 = {

  id: "lesson11",

  title: "Comparator",

  content: `

# Comparator

## Introduction

Comparator is an interface used to define custom ordering for objects.

It is especially useful when:

- A class needs multiple sorting strategies.
- You do not want to modify the original class.
- You want to sort objects by different fields.
- You want ascending and descending ordering.

Unlike Comparable, which defines the natural ordering inside a class, Comparator defines ordering separately.



# Comparable vs Comparator

Comparable

↓

Natural ordering

↓

Defined inside the class



Comparator

↓

Custom ordering

↓

Defined separately



# What Is Comparator?

Comparator belongs to:

java.util

Import:

import java.util.Comparator;



It provides the method:

int compare(T first, T second);



The result follows the same basic rule:

Negative

↓

first comes before second



Zero

↓

same ordering



Positive

↓

first comes after second



# Basic Comparator Syntax

class PriceComparator
        implements Comparator<Product> {

    @Override
    public int compare(
            Product first,
            Product second) {

        return Integer.compare(
                first.price,
                second.price);

    }

}



The comparator compares two Product objects.



# Example Class

class Product {

    String name;
    int price;

    Product(
            String name,
            int price) {

        this.name = name;
        this.price = price;

    }

}



Now we can create a Comparator based on price.



# Comparator Based on Price

class PriceComparator
        implements Comparator<Product> {

    @Override
    public int compare(
            Product first,
            Product second) {

        return Integer.compare(
                first.price,
                second.price);

    }

}



This defines ascending price order.



# Sorting with Comparator

Create products:

Product[] products = {

    new Product(
            "Laptop",
            55000),

    new Product(
            "Mouse",
            800),

    new Product(
            "Keyboard",
            1500)

};



Sort:

Arrays.sort(
        products,
        new PriceComparator());



The products are sorted according to price.



# Complete Example

import java.util.Arrays;
import java.util.Comparator;

class Product {

    String name;
    int price;

    Product(
            String name,
            int price) {

        this.name = name;
        this.price = price;

    }

    @Override
    public String toString() {

        return name
                + " - "
                + price;

    }

}

class PriceComparator
        implements Comparator<Product> {

    @Override
    public int compare(
            Product first,
            Product second) {

        return Integer.compare(
                first.price,
                second.price);

    }

}

public class ComparatorExample {

    public static void main(
            String[] args) {

        Product[] products = {

            new Product(
                    "Laptop",
                    55000),

            new Product(
                    "Mouse",
                    800),

            new Product(
                    "Keyboard",
                    1500)

        };

        Arrays.sort(
                products,
                new PriceComparator());

        System.out.println(
                Arrays.toString(products));

    }

}



Output:

[Mouse - 800, Keyboard - 1500, Laptop - 55000]



# Comparator Based on Name

We can create another Comparator without changing Product.

class NameComparator
        implements Comparator<Product> {

    @Override
    public int compare(
            Product first,
            Product second) {

        return first.name.compareTo(
                second.name);

    }

}



Now Product can be sorted by name.



# Multiple Sorting Strategies

One of the biggest advantages of Comparator is that the same class can have multiple sorting strategies.

For Product:

PriceComparator

↓

Sort by price



NameComparator

↓

Sort by name



RatingComparator

↓

Sort by rating



IdComparator

↓

Sort by ID



The Product class does not need to change.



# Sorting a List with Comparator

Comparator can also be used with Lists.

Example:

products.sort(
        new PriceComparator());



The List is sorted according to the provided Comparator.



# Lambda Expression with Comparator

Java allows a shorter way to create Comparators using lambda expressions.

Example:

products.sort(
        (first, second) ->
                Integer.compare(
                        first.price,
                        second.price));



This avoids creating a separate comparator class.



# Lambda Based Name Sorting

products.sort(
        (first, second) ->
                first.name.compareTo(
                        second.name));



Now the products are sorted by name.



# Comparator.comparing()

Java provides:

Comparator.comparing()



This makes comparison logic easier to read.

Example:

products.sort(
        Comparator.comparing(
                Product::getName));



The products are sorted by name.



# comparingInt()

For integer properties, Java provides:

Comparator.comparingInt()



Example:

products.sort(
        Comparator.comparingInt(
                Product::getPrice));



This sorts products by price.



# Getter Methods

Suppose Product has:

class Product {

    private String name;
    private int price;

    public String getName() {

        return name;

    }

    public int getPrice() {

        return price;

    }

}



Now:

Comparator.comparing(
        Product::getName)



can sort by name.

And:

Comparator.comparingInt(
        Product::getPrice)



can sort by price.



# thenComparing()

Sometimes two objects have the same value for the primary sorting field.

For example:

Two products may have the same price.

You can define a secondary sorting field using:

thenComparing()



Example:

products.sort(
        Comparator
            .comparingInt(
                Product::getPrice)
            .thenComparing(
                Product::getName));



This means:

First sort by price.

If prices are equal:

↓

Sort by name.



# Multiple Sorting Criteria

You can create a chain of comparisons.

Example:

products.sort(
        Comparator
            .comparingInt(
                Product::getPrice)
            .thenComparing(
                Product::getName));



Sorting order:

Price

↓

Name



This is useful when deterministic ordering is required.



# Reverse Ordering

Comparator provides:

reversed()



to reverse the ordering.

Example:

products.sort(
        Comparator
            .comparingInt(
                Product::getPrice)
            .reversed());



Now products are sorted:

Highest price

↓

Lowest price



# Reverse Name Ordering

products.sort(
        Comparator
            .comparing(
                Product::getName)
            .reversed());



This sorts names in reverse alphabetical order.



# Comparator with Arrays

You can pass a Comparator to Arrays.sort():

Arrays.sort(
        products,
        Comparator.comparingInt(
                Product::getPrice));



The array is sorted using the supplied ordering.



# Comparator with TreeSet

Comparator can also be supplied to TreeSet.

Example:

TreeSet<Product> products =
        new TreeSet<>(
                Comparator.comparingInt(
                        Product::getPrice));



The TreeSet now uses the Comparator to determine ordering.



# Comparator with TreeMap

Comparator can also be used with TreeMap.

Example:

TreeMap<Product, String> map =
        new TreeMap<>(
                Comparator.comparingInt(
                        Product::getPrice));



The TreeMap uses the supplied Comparator for key ordering.



# Comparable vs Comparator

This is one of the most important differences.



## Comparable

Comparable defines:

Natural ordering

The ordering is defined inside the class.

Example:

class Product
        implements Comparable<Product>



The class itself decides its default ordering.



## Comparator

Comparator defines:

Custom ordering

The ordering is defined outside the class.

Example:

Comparator<Product>



Different Comparators can provide different sorting strategies.



# Comparable Example

class Product
        implements Comparable<Product> {

    @Override
    public int compareTo(
            Product other) {

        return Integer.compare(
                this.price,
                other.price);

    }

}



Natural ordering:

Price



# Comparator Example

Comparator<Product> byName =
        Comparator.comparing(
                Product::getName);



Custom ordering:

Name



The same Product class can use another Comparator for price.



# When Should You Use Comparator?

Use Comparator when:

- You need multiple sorting strategies.
- You do not want to modify the original class.
- You need custom ordering.
- You want ascending and descending variations.
- Different parts of an application need different sorting rules.



# Practical Example

Suppose an application contains:

List<Product> products



You may need:

Sort by price:

products.sort(
        Comparator.comparingInt(
                Product::getPrice));



Sort by name:

products.sort(
        Comparator.comparing(
                Product::getName));



Sort by price descending:

products.sort(
        Comparator
            .comparingInt(
                Product::getPrice)
            .reversed());



The Product class remains unchanged.



# Complete Practical Example

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class Product {

    private String name;
    private int price;

    Product(
            String name,
            int price) {

        this.name = name;
        this.price = price;

    }

    public String getName() {

        return name;

    }

    public int getPrice() {

        return price;

    }

    @Override
    public String toString() {

        return name
                + " - "
                + price;

    }

}

public class ProductSorting {

    public static void main(
            String[] args) {

        List<Product> products =
                new ArrayList<>();

        products.add(
                new Product(
                        "Laptop",
                        55000));

        products.add(
                new Product(
                        "Mouse",
                        800));

        products.add(
                new Product(
                        "Keyboard",
                        1500));

        products.sort(
                Comparator.comparingInt(
                        Product::getPrice));

        System.out.println(
                "By Price:");

        System.out.println(products);

        products.sort(
                Comparator.comparing(
                        Product::getName));

        System.out.println(
                "By Name:");

        System.out.println(products);

    }

}



The same List can be sorted differently without changing the Product class.



# Common Mistakes

## 1. Confusing Comparator with Comparable

Remember:

Comparable → compareTo()

Comparator → compare()



## 2. Returning Boolean

A Comparator does not return:

true

or:

false



It returns an integer.



## 3. Using Subtraction for Comparisons

Avoid:

return first.price - second.price;



Prefer:

return Integer.compare(
        first.price,
        second.price);



## 4. Forgetting the Secondary Comparator

If multiple objects can have the same primary value, use:

.thenComparing(...)



when a deterministic secondary ordering is desired.



# Best Practices

- Use Comparator for custom sorting.
- Use Comparator.comparing() for readable comparison logic.
- Use comparingInt(), comparingLong(), and comparingDouble() when appropriate.
- Use thenComparing() for multi-level sorting.
- Use reversed() for descending order.
- Keep comparison logic consistent and predictable.
- Avoid arithmetic subtraction for comparisons.
- Use Comparable when a class has one clear natural ordering.



# Interview Questions

## Q1. What is Comparator?

Comparator is an interface used to define custom ordering between objects.



## Q2. Which method does Comparator provide?

compare()



## Q3. What is the difference between Comparable and Comparator?

Comparable defines natural ordering inside a class, while Comparator defines custom ordering separately.



## Q4. Can one class have multiple Comparators?

Yes.

For example:

NameComparator

PriceComparator

RatingComparator



## Q5. What is Comparator.comparing()?

It creates a Comparator based on a selected property or key.



## Q6. What is thenComparing()?

It adds a secondary comparison when the primary comparison considers two objects equal.



## Q7. How do you reverse a Comparator?

Use:

.reversed()



## Q8. Can Comparator be used with TreeSet?

Yes.



## Q9. Can Comparator be used with TreeMap?

Yes.



## Q10. What is PECS related to?

PECS is related to wildcards:

Producer Extends

Consumer Super

It is separate from Comparator, although both are part of Java's generic type system.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain Comparator.
- Implement custom comparison logic.
- Use compare().
- Sort arrays with Comparator.
- Sort Lists with Comparator.
- Use lambda expressions.
- Use Comparator.comparing().
- Use comparingInt().
- Use thenComparing().
- Reverse sorting with reversed().
- Handle multiple sorting criteria.
- Compare Comparable and Comparator.
- Use Comparator with TreeSet and TreeMap.



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

→ Lesson 12 — Sorting Objects

Lesson 13 — Immutable Collections

Lesson 14 — Maps & Generics in Practice

Lesson 15 — Inventory Management System



# Next Lesson

## Lesson 12 — Sorting Objects

You will learn:

- Sorting arrays of objects.
- Sorting Lists of objects.
- Natural ordering.
- Custom ordering.
- Sorting by multiple fields.
- Ascending and descending sorting.
- Comparable and Comparator together.
- Lambda-based sorting.
- Practical object-sorting examples.
- Best Practices.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson11;