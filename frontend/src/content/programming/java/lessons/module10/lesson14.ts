const lesson14 = {

  id: "lesson14",

  title: "Maps & Generics in Practice",

  content: `

# Maps & Generics in Practice

## Introduction

Maps and Generics become much more powerful when used together.

In real Java applications, you will often work with structures such as:

Map<Integer, Product>

or:

Map<String, List<Product>>

Generics provide type safety, while Maps provide efficient key-value storage.



Generics

↓

Type Safety

↓

Maps

↓

Structured Data

↓

Real Applications



# Generic Map

A Map can use generic types for both its key and value.

Basic syntax:

Map<K, V>



where:

K → Key type

V → Value type



Example:

Map<Integer, String> courses =
        new HashMap<>();



Here:

K = Integer

V = String



# Map with Custom Objects

Suppose:

class Product {

    private int id;
    private String name;
    private double price;

}



We can store Products using their IDs:

Map<Integer, Product> products =
        new HashMap<>();



Conceptually:

101 → Product

102 → Product

103 → Product



# Complete Product Class

class Product {

    private int id;
    private String name;
    private double price;

    Product(
            int id,
            String name,
            double price) {

        this.id = id;
        this.name = name;
        this.price = price;

    }

    public int getId() {

        return id;

    }

    public String getName() {

        return name;

    }

    public double getPrice() {

        return price;

    }

    @Override
    public String toString() {

        return id
                + " - "
                + name
                + " - "
                + price;

    }

}



# Storing Objects in a Map

Map<Integer, Product> products =
        new HashMap<>();

products.put(
        101,
        new Product(
                101,
                "Laptop",
                55000));

products.put(
        102,
        new Product(
                102,
                "Mouse",
                800));



# Retrieving an Object

Product product =
        products.get(101);



Because the Map is declared as:

Map<Integer, Product>



the compiler knows that get() returns:

Product

No casting is required.



# Checking Whether a Product Exists

if (products.containsKey(101)) {

    System.out.println(
            "Product exists.");

}



# Updating a Product

You can replace the value associated with a key:

products.put(
        101,
        new Product(
                101,
                "Laptop Pro",
                65000));



The existing mapping for key 101 is replaced.



# Removing a Product

Use:

products.remove(101);



This removes the mapping associated with ID 101.



# Iterating Through a Generic Map

Use:

for (Map.Entry<Integer, Product> entry :
        products.entrySet()) {

    System.out.println(
            entry.getKey()
            + " → "
            + entry.getValue());

}



This is type-safe because:

Key   → Integer

Value → Product



# Generic Map with forEach()

You can also write:

products.forEach(
        (id, product) ->
                System.out.println(
                        id
                        + " → "
                        + product));



# Map of Lists

A Map can contain a collection as its value.

Example:

Map<String, List<String>> courses =
        new HashMap<>();



Conceptually:

Java

↓

[Topic 1, Topic 2, Topic 3]



Python

↓

[Topic 1, Topic 2]



# Creating Map of Lists

Map<String, List<String>> courses =
        new HashMap<>();

courses.put(
        "Java",
        new ArrayList<>());

courses.get("Java")
        .add("Collections");

courses.get("Java")
        .add("Generics");



# Using computeIfAbsent()

A cleaner approach is:

courses.computeIfAbsent(
        "Java",
        key -> new ArrayList<>())
        .add("Collections");



This means:

Does Java exist?

↓

No → Create List

↓

Add value



# Complete Map of Lists Example

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MapOfListsExample {

    public static void main(
            String[] args) {

        Map<String, List<String>> courses =
                new HashMap<>();

        courses.computeIfAbsent(
                "Java",
                key -> new ArrayList<>())
                .add("Collections");

        courses.computeIfAbsent(
                "Java",
                key -> new ArrayList<>())
                .add("Generics");

        courses.computeIfAbsent(
                "Python",
                key -> new ArrayList<>())
                .add("Functions");

        System.out.println(courses);

    }

}



# Map of Sets

You can also store Sets as values:

Map<String, Set<String>> categories =
        new HashMap<>();



This is useful when duplicate values should not be stored.



# Nested Generics

Generics can be nested.

Example:

Map<Integer, List<String>>



Here:

Map

↓

Integer key

↓

List<String> value



Another example:

Map<String, Map<Integer, String>>



This is a Map whose values are themselves Maps.



# Generic Pair with Map

Suppose:

class Pair<K, V> {

    private K key;
    private V value;

    Pair(K key, V value) {

        this.key = key;
        this.value = value;

    }

    public K getKey() {

        return key;

    }

    public V getValue() {

        return value;

    }

}



You can use:

List<Pair<Integer, String>> data =
        new ArrayList<>();



This combines:

Generics

+

Collections



# Generic Utility Method for Maps

You can create a generic method:

public static <K, V>
void displayMap(
        Map<K, V> map) {

    for (Map.Entry<K, V> entry :
            map.entrySet()) {

        System.out.println(
                entry.getKey()
                + " → "
                + entry.getValue());

    }

}



This method works with many Map types.



# Using the Generic Map Method

Map<Integer, String> languages =
        new HashMap<>();

languages.put(
        1,
        "Java");

languages.put(
        2,
        "Python");

displayMap(languages);



You could also use:

Map<String, Double> prices =
        new HashMap<>();

prices.put(
        "Laptop",
        55000.0);

displayMap(prices);



The same method works because it is generic.



# Generic Method with Wildcard

Another approach is:

public static void displayMap(
        Map<?, ?> map) {

    for (Map.Entry<?, ?> entry :
            map.entrySet()) {

        System.out.println(
                entry.getKey()
                + " → "
                + entry.getValue());

    }

}



This is useful when the exact key and value types do not matter.



# Generic Method vs Wildcard Method

Compare:

<K, V> void displayMap(
        Map<K, V> map)



with:

void displayMap(
        Map<?, ?> map)



Use a type parameter when you need to refer to the types elsewhere in the method.

Use wildcards when the exact types do not need to be named.



# Generic Repository Pattern

A simple generic repository can store objects by ID.

class Repository<K, V> {

    private Map<K, V> data =
            new HashMap<>();

    void save(
            K key,
            V value) {

        data.put(
                key,
                value);

    }

    V find(K key) {

        return data.get(key);

    }

    void delete(K key) {

        data.remove(key);

    }

}



# Using the Repository

For Products:

Repository<Integer, Product>
        productRepository =
        new Repository<>();



Store:

productRepository.save(
        101,
        new Product(
                101,
                "Laptop",
                55000));



Retrieve:

Product product =
        productRepository.find(101);



# Why Generic Repositories Are Useful

The same repository class can store different types.

For example:

Repository<Integer, Product>

Repository<Integer, Employee>

Repository<String, Course>



No duplicate repository implementation is required.



# Generic Map with Bounded Types

You can combine Maps with bounded Generics.

Example:

class NumberRepository<
        K,
        V extends Number> {

    private Map<K, V> data =
            new HashMap<>();

    void save(
            K key,
            V value) {

        data.put(
                key,
                value);

    }

}



Now V must be a numeric type.



# Example

Valid:

NumberRepository<
        String,
        Integer>



Also valid:

NumberRepository<
        String,
        Double>



But:

NumberRepository<
        String,
        String>



is invalid because String does not extend Number.



# Immutable Generic Maps

Generics work with immutable collections too.

Example:

Map<Integer, String> courses =
        Map.of(
                101, "Java",
                102, "Python");



The key and value types are known at compile time.



# Generic Maps with getOrDefault()

Suppose:

Map<String, Integer> scores =
        new HashMap<>();



You can use:

int score =
        scores.getOrDefault(
                "Java",
                0);



If the key does not exist, 0 is returned.



# Generic Maps with putIfAbsent()

scores.putIfAbsent(
        "Java",
        90);



This adds the mapping only if the key does not already exist.



# Generic Maps with replace()

scores.replace(
        "Java",
        95);



This replaces the existing value if the key exists.



# Generic Maps with merge()

Suppose:

Map<String, Integer> counts =
        new HashMap<>();



You can update a count:

counts.merge(
        "Java",
        1,
        Integer::sum);



If "Java" does not exist:

Java → 1



If it already contains 1:

Java → 2



# Practical Example: Product Inventory

A simple inventory can use:

Map<Integer, Product> inventory =
        new HashMap<>();



Add:

inventory.put(
        101,
        new Product(
                101,
                "Laptop",
                55000));



Retrieve:

Product product =
        inventory.get(101);



This is the foundation for the Inventory Management System in the next lesson.



# Practical Example: Generic Inventory Repository

class Inventory<K, V> {

    private Map<K, V> items =
            new HashMap<>();

    void add(
            K key,
            V value) {

        items.put(
                key,
                value);

    }

    V get(K key) {

        return items.get(key);

    }

    boolean contains(K key) {

        return items.containsKey(key);

    }

    void remove(K key) {

        items.remove(key);

    }

}



Use:

Inventory<Integer, Product>
        inventory =
        new Inventory<>();



# Complete Practical Example

import java.util.HashMap;
import java.util.Map;

class Product {

    private int id;
    private String name;
    private double price;

    Product(
            int id,
            String name,
            double price) {

        this.id = id;
        this.name = name;
        this.price = price;

    }

    public String getName() {

        return name;

    }

    public double getPrice() {

        return price;

    }

    @Override
    public String toString() {

        return id
                + " - "
                + name
                + " - "
                + price;

    }

}



class Inventory<K, V> {

    private Map<K, V> items =
            new HashMap<>();

    void add(
            K key,
            V value) {

        items.put(
                key,
                value);

    }

    V get(K key) {

        return items.get(key);

    }

    void remove(K key) {

        items.remove(key);

    }

    void display() {

        items.forEach(
                (key, value) ->
                        System.out.println(
                                key
                                + " → "
                                + value));

    }

}



public class GenericInventoryExample {

    public static void main(
            String[] args) {

        Inventory<Integer, Product>
                inventory =
                new Inventory<>();

        inventory.add(
                101,
                new Product(
                        101,
                        "Laptop",
                        55000));

        inventory.add(
                102,
                new Product(
                        102,
                        "Mouse",
                        800));

        inventory.display();

    }

}



# Combining Concepts from Module 10

This lesson combines several concepts you have already learned:

Maps

+

Generics

+

Generic Classes

+

Generic Methods

+

Bounded Generics

+

Wildcards

+

Collections



These concepts frequently appear together in real Java applications.



# Choosing the Right Structure

When designing a collection-based application:

Need key-value storage?

↓

Map



Need reusable type-safe code?

↓

Generics



Need multiple sorting strategies?

↓

Comparator



Need natural ordering?

↓

Comparable



Need fixed data?

↓

Immutable Collections



# Common Mistakes

## 1. Using Raw Maps

Avoid:

Map map =
        new HashMap();



Prefer:

Map<Integer, Product> map =
        new HashMap<>();



## 2. Using Incorrect Generic Types

If:

Map<Integer, Product>



then:

map.put(
        101,
        product);



is valid.

But inserting an unrelated value type is not.



## 3. Overcomplicating Generic Types

A structure such as:

Map<String,
    Map<Integer,
        List<Product>>>



may be valid, but if it becomes difficult to understand, consider creating a dedicated class.



## 4. Ignoring Null Handling

Be careful with:

map.get(key)



because a missing key can produce null.

Use:

getOrDefault()



when an appropriate default exists.



# Best Practices

- Always parameterize Maps and Collections.
- Use meaningful key and value types.
- Use generic classes when a data structure should work with many types.
- Use generic methods for reusable operations.
- Use bounded Generics when an operation requires a specific capability.
- Use wildcards when the exact type does not need to be named.
- Use immutable collections for fixed data.
- Keep deeply nested generic structures readable.
- Prefer domain-specific classes when generic structures become too complex.



# Interview Questions

## Q1. How do Generics improve Maps?

They provide compile-time type safety for keys and values.



## Q2. What does Map<K, V> mean?

K represents the key type and V represents the value type.



## Q3. Can a Map store custom objects?

Yes.

Example:

Map<Integer, Product>



## Q4. Can a Map contain a List as its value?

Yes.

Example:

Map<String, List<String>>



## Q5. What is a generic repository?

A reusable class that can store and retrieve different types using generic parameters.



## Q6. What does computeIfAbsent() do?

It computes and inserts a value when the specified key is not already associated with a value.



## Q7. What does getOrDefault() do?

It returns the value for a key, or a specified default when the key is absent.



## Q8. Can Generics and bounded types be combined?

Yes.

Example:

class Repository<T extends Number>



## Q9. Can Generics be used with immutable Maps?

Yes.

Example:

Map<Integer, String> map =
        Map.of(
                1, "Java",
                2, "Python");



# Key Takeaways

After completing this lesson, you should be able to:

- Combine Maps and Generics.
- Store custom objects in Maps.
- Create generic repositories.
- Use nested generic collections.
- Create Maps containing Lists or Sets.
- Write generic Map utility methods.
- Use bounded Generics with Maps.
- Use immutable Maps with Generics.
- Use computeIfAbsent().
- Use getOrDefault().
- Use putIfAbsent().
- Use replace().
- Use merge().
- Design reusable type-safe collection-based components.



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

✓ Lesson 14 — Maps & Generics in Practice

→ Lesson 15 — Inventory Management System



# Next Lesson

## Lesson 15 — Inventory Management System

You will combine the major concepts from Module 10 to build an Inventory Management System using:

- Generics.
- Maps.
- Custom objects.
- Collections.
- Searching.
- Updating.
- Removing.
- Sorting.
- Comparators.
- Immutable data where appropriate.
- Menu-driven operations.
- Complete project implementation.

`

};

export default lesson14;