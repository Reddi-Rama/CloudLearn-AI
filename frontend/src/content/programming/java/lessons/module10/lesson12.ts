const lesson12 = {

  id: "lesson12",

  title: "Sorting Objects",

  content: `

# Sorting Objects

## Introduction

Sorting objects means arranging objects according to one or more properties.

For example, suppose you have Product objects with:

- name
- price
- rating



You may want to sort them by:

- Price.
- Name.
- Rating.



Java provides several tools for sorting:

Arrays.sort()

Collections.sort()

List.sort()

Comparable

Comparator



# Why Sort Objects?

Sorting makes data easier to:

- Display.
- Search.
- Compare.
- Analyze.
- Organize.
- Process.



For example:

Products

↓

Sort by price

↓

Lowest price → Highest price



# Sorting Primitive Values

Before sorting objects, consider an integer array.

int[] numbers = {

    40,
    10,
    30,
    20

};



Use:

Arrays.sort(numbers);



Result:

10

20

30

40



# Sorting Objects

Suppose:

class Product {

    String name;
    int price;

}



Java does not automatically know how to order custom Product objects.

You need to provide an ordering using:

Comparable

or:

Comparator



# Sorting with Comparable

If Product implements:

Comparable<Product>



it can define a natural ordering.

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



The natural ordering is now based on price.



# Sorting an Object Array

Create:

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

Arrays.sort(products);



The compareTo() method determines the order.



# Complete Example

import java.util.Arrays;

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

    @Override
    public String toString() {

        return name
                + " - "
                + price;

    }

}

public class ObjectSortingExample {

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

        Arrays.sort(products);

        System.out.println(
                Arrays.toString(products));

    }

}



Output:

[Mouse - 800, Keyboard - 1500, Laptop - 55000]



# Sorting Objects with Comparator

Instead of using Comparable, you can provide a Comparator.

Example:

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



Sort by price:

Arrays.sort(
        products,
        Comparator.comparingInt(
                Product::getPrice));



This allows sorting without changing the Product class.



# Sorting Lists

Lists can also be sorted.

Example:

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



Java provides:

Collections.sort()



Example:

Collections.sort(products);



This uses the natural ordering when Product implements Comparable.



# Collections.sort() with Comparator

You can also provide a Comparator.

Example:

Collections.sort(
        products,
        Comparator.comparingInt(
                Product::getPrice));



The List is sorted according to price.



# List.sort()

Modern Java also provides:

list.sort()



Example:

products.sort(
        Comparator.comparingInt(
                Product::getPrice));



This sorts the List using the supplied Comparator.



# Arrays.sort() vs Collections.sort() vs List.sort()

Arrays.sort()

↓

Used for arrays.



Collections.sort()

↓

Used for Lists.



List.sort()

↓

Used directly on a List.



All can use:

Comparable

or:

Comparator



depending on the sorting requirement.



# Sorting by Name

Suppose Product has:

public String getName() {

    return name;

}



Sort by name:

products.sort(
        Comparator.comparing(
                Product::getName));



The products are arranged alphabetically.



# Sorting by Price

Use:

products.sort(
        Comparator.comparingInt(
                Product::getPrice));



Result:

Lowest price

↓

Highest price



# Sorting in Descending Order

Use:

reversed()



Example:

products.sort(
        Comparator
            .comparingInt(
                Product::getPrice)
            .reversed());



Result:

Highest price

↓

Lowest price



# Sorting by Multiple Fields

Sometimes sorting by one property is not enough.

Suppose Products have:

name

price



You can sort by:

Price first

↓

Name second



Example:

products.sort(
        Comparator
            .comparingInt(
                Product::getPrice)
            .thenComparing(
                Product::getName));



The primary field is price.

If two products have the same price, their names are compared.



# Multiple Sorting Example

Suppose:

Laptop - 50000

Tablet - 30000

Mouse - 1000

Keyboard - 1000



Sort by price and then name.

Result:

Keyboard - 1000

Mouse - 1000

Tablet - 30000

Laptop - 50000



The two products with price 1000 are ordered using name.



# Sorting by Multiple Fields with Different Directions

You can reverse only part of a comparison chain.

Example:

products.sort(
        Comparator
            .comparingInt(
                Product::getPrice)
            .reversed()
            .thenComparing(
                Product::getName));



This produces:

Price descending

↓

Name ascending



The order of comparator operations matters.



# Sorting Strings

Strings already implement Comparable.

Example:

String[] languages = {

    "Python",
    "Java",
    "C++"

};



Sort:

Arrays.sort(languages);



Result:

C++

Java

Python



The natural ordering of String is used.



# Sorting Integer Values

Integer implements Comparable.

Example:

Integer[] numbers = {

    40,
    10,
    30,
    20

};



Arrays.sort(numbers);



Result:

10

20

30

40



# Sorting with Lambda Expressions

You can write sorting logic directly.

Example:

products.sort(
        (first, second) ->
                Integer.compare(
                        first.getPrice(),
                        second.getPrice()));



This is useful for short custom sorting logic.



# Sorting by Name with Lambda

products.sort(
        (first, second) ->
                first.getName()
                    .compareTo(
                        second.getName()));



Now the products are sorted alphabetically.



# Sorting by Double Values

Suppose Product has:

double rating;



You can use:

Comparator.comparingDouble()



Example:

products.sort(
        Comparator.comparingDouble(
                Product::getRating));



This sorts according to rating.



# Sorting in Descending Rating

products.sort(
        Comparator
            .comparingDouble(
                Product::getRating)
            .reversed());



Highest rating comes first.



# Handling Null Values

Sorting can become complicated when some objects contain null values.

For example:

Product A

name = "Laptop"



Product B

name = null



Calling:

Product::getName



may cause problems when comparing null values.

Java provides:

Comparator.nullsFirst()

and:

Comparator.nullsLast()



# nullsFirst()

Example:

products.sort(
        Comparator.nullsFirst(
            Comparator.comparing(
                Product::getName)));



Null values are placed before non-null values.



# nullsLast()

Example:

products.sort(
        Comparator.nullsLast(
            Comparator.comparing(
                Product::getName)));



Null values are placed after non-null values.



# Sorting Stable Data

A stable sort preserves the relative order of elements that compare as equal.

For example:

Product A - price 1000

Product B - price 1000

If the comparison considers both prices equal, a stable sorting operation preserves their previous relative order.



Stable sorting can be useful when sorting data in multiple stages or when preserving existing order matters.



# Practical Sorting Example

Consider:

class Product {

    private String name;
    private double price;
    private double rating;

}



You may need:

Sort by name

Sort by price

Sort by rating

Sort by price descending

Sort by price and name

Comparator makes these different sorting strategies possible.



# Complete Practical Example

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

class Product {

    private String name;
    private double price;
    private double rating;

    Product(
            String name,
            double price,
            double rating) {

        this.name = name;
        this.price = price;
        this.rating = rating;

    }

    public String getName() {

        return name;

    }

    public double getPrice() {

        return price;

    }

    public double getRating() {

        return rating;

    }

    @Override
    public String toString() {

        return name
                + " - "
                + price
                + " - "
                + rating;

    }

}

public class SortingObjectsExample {

    public static void main(
            String[] args) {

        List<Product> products =
                new ArrayList<>();

        products.add(
                new Product(
                        "Laptop",
                        55000,
                        4.5));

        products.add(
                new Product(
                        "Mouse",
                        800,
                        4.1));

        products.add(
                new Product(
                        "Keyboard",
                        1500,
                        4.3));



        System.out.println(
                "Original:");

        System.out.println(products);



        products.sort(
                Comparator.comparingDouble(
                        Product::getPrice));

        System.out.println(
                "By Price:");

        System.out.println(products);



        products.sort(
                Comparator
                    .comparingDouble(
                        Product::getRating)
                    .reversed());

        System.out.println(
                "By Rating Descending:");

        System.out.println(products);



        products.sort(
                Comparator
                    .comparing(
                        Product::getName));

        System.out.println(
                "By Name:");

        System.out.println(products);

    }

}



The same collection can be sorted according to different requirements.



# Sorting Workflow

Objects

↓

Choose Property

↓

Choose Ordering Strategy

↓

Comparable

or

Comparator

↓

Choose Sorting API

↓

Arrays.sort()

or

Collections.sort()

or

List.sort()

↓

Sorted Objects



# Choosing Comparable or Comparator

Use Comparable when:

- There is one clear natural ordering.
- The ordering belongs naturally to the class.
- The class should provide its default ordering.



Use Comparator when:

- Multiple sorting strategies are required.
- Sorting logic should remain outside the class.
- Different parts of the application need different orderings.
- You need custom sorting without modifying the class.



# Common Mistakes

## 1. Sorting Custom Objects Without an Ordering

Java cannot automatically determine how arbitrary custom objects should be ordered.

You need:

Comparable

or:

Comparator



# Common Mistake 2: Using Subtraction

Avoid:

return first.price - second.price;



Prefer:

return Integer.compare(
        first.price,
        second.price);



For double values, use:

Double.compare()



Example:

return Double.compare(
        first.rating,
        second.rating);



# Common Mistake 3: Forgetting Descending Order

For descending order use:

.reversed()



Example:

products.sort(
        Comparator
            .comparingInt(
                Product::getPrice)
            .reversed());



# Common Mistake 4: Ignoring Null Values

If fields can contain null, comparison logic should handle them deliberately.

Use:

Comparator.nullsFirst()

or:

Comparator.nullsLast()



# Common Mistake 5: Incorrect Multiple Sorting

If two objects can have the same primary value, use:

thenComparing()



Example:

products.sort(
        Comparator
            .comparingInt(
                Product::getPrice)
            .thenComparing(
                Product::getName));



# Best Practices

- Choose a clear sorting strategy.
- Use Comparable for natural ordering.
- Use Comparator for custom ordering.
- Prefer Comparator.comparing() for readable code.
- Use primitive-specific methods such as comparingInt() when appropriate.
- Use thenComparing() for multiple sorting criteria.
- Use reversed() for descending order.
- Handle nullable fields deliberately.
- Keep comparison logic consistent.
- Avoid arithmetic subtraction for integer comparisons.
- Use Double.compare() for double comparisons.
- Choose the sorting API appropriate for the data structure.



# Interview Questions

## Q1. How can custom objects be sorted in Java?

Using Comparable or Comparator.



## Q2. What does Arrays.sort() do?

It sorts arrays according to their natural ordering or a supplied Comparator.



## Q3. What does Collections.sort() do?

It sorts a List according to natural ordering or a supplied Comparator.



## Q4. What is List.sort()?

A List method that sorts the list using a supplied Comparator or natural ordering when applicable.



## Q5. How do you sort objects by multiple fields?

Use:

.thenComparing(...)



## Q6. How do you sort in descending order?

Use:

.reversed()



or:

Collections.reverseOrder()



depending on the situation.



## Q7. What is stable sorting?

A stable sort preserves the relative order of elements that compare as equal.



## Q8. When should you use Comparator instead of Comparable?

When you need multiple sorting strategies or want the sorting logic outside the class.



## Q9. How can you sort an object array using a Comparator?

Use:

Arrays.sort(
        array,
        comparator);



## Q10. How can you sort a List using a Comparator?

Use:

list.sort(comparator);



or:

Collections.sort(
        list,
        comparator);



# Key Takeaways

After completing this lesson, you should be able to:

- Sort primitive arrays.
- Sort arrays of objects.
- Sort Lists.
- Use Comparable for natural ordering.
- Use Comparator for custom ordering.
- Use Arrays.sort().
- Use Collections.sort().
- Use List.sort().
- Sort by names.
- Sort by numbers.
- Sort in ascending and descending order.
- Sort by multiple fields.
- Use thenComparing().
- Use Comparator.comparing().
- Use comparingInt().
- Use comparingDouble().
- Handle null values during sorting.
- Understand stable sorting.
- Choose the appropriate sorting strategy.



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

→ Lesson 13 — Immutable Collections

Lesson 14 — Maps & Generics in Practice

Lesson 15 — Inventory Management System



# Next Lesson

## Lesson 13 — Immutable Collections

You will learn:

- What immutable collections are.
- Mutable vs immutable collections.
- Unmodifiable collections.
- List.of().
- Set.of().
- Map.of().
- copyOf().
- Immutable collection behavior.
- Why immutability is useful.
- Common mistakes.
- Best Practices.
- Practical examples.
- Interview Questions.
- Key Takeaways.

`

};

export default lesson12;