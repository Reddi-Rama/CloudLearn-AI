const lesson15 = {

  id: "lesson15",

  title: "Inventory Management System",

  content: `

# Inventory Management System

## Introduction

In this lesson, you will build a complete Inventory Management System using the concepts learned throughout Module 10.

The project brings together:

- Maps.
- Generics.
- Generic classes.
- Generic methods.
- Searching.
- Updating.
- Removing.
- Object-oriented programming.
- Comparators.
- Sorting.
- Immutable collections.
- Lambda expressions.
- Map utility methods.

The goal is to understand how these concepts work together in a practical Java application.



# Project Objective

The Inventory Management System will maintain products using a unique product ID.

Each product will contain:

Product

├── ID

├── Name

├── Price

└── Quantity



The system will support operations such as:

- Add Product.
- View Product.
- View All Products.
- Update Product.
- Remove Product.
- Search Product.
- Sort Products.
- Check Inventory.



# Project Structure

The project will contain:

Inventory Management System

        ↓

Product

        ↓

Inventory<K, V>

        ↓

Map<K, V>

        ↓

Product Records



# Step 1: Create the Product Class

Create a Product class.

class Product {

    private int id;
    private String name;
    private double price;
    private int quantity;

    Product(
            int id,
            String name,
            double price,
            int quantity) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;

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

    public int getQuantity() {

        return quantity;

    }

    public void setName(String name) {

        this.name = name;

    }

    public void setPrice(double price) {

        this.price = price;

    }

    public void setQuantity(int quantity) {

        this.quantity = quantity;

    }

    @Override
    public String toString() {

        return "ID: " + id
                + ", Name: " + name
                + ", Price: " + price
                + ", Quantity: " + quantity;

    }

}



# Understanding the Product Class

The class contains four fields:

id

name

price

quantity



The fields are private:

private int id;

private String name;

private double price;

private int quantity;



This provides encapsulation.



Getters allow controlled access:

getId()

getName()

getPrice()

getQuantity()



Setters allow controlled modification of mutable fields:

setName()

setPrice()

setQuantity()



# Step 2: Create a Generic Inventory Class

Now create a reusable generic Inventory class.

import java.util.HashMap;
import java.util.Map;

class Inventory<K, V> {

    private Map<K, V> items =
            new HashMap<>();

    public void add(
            K key,
            V value) {

        items.put(key, value);

    }

    public V get(K key) {

        return items.get(key);

    }

    public boolean contains(K key) {

        return items.containsKey(key);

    }

    public void remove(K key) {

        items.remove(key);

    }

    public int size() {

        return items.size();

    }

    public Map<K, V> getItems() {

        return items;

    }

}



# Understanding the Generic Inventory

The class:

Inventory<K, V>

contains two generic types.

K → Key

V → Value



For our project:

Inventory<Integer, Product>



means:

Integer

↓

Product ID



Product

↓

Product information



# Step 3: Create the Inventory Object

In the main class:

Inventory<Integer, Product>
        inventory =
        new Inventory<>();



Now the Inventory can store:

Integer → Product



For example:

101 → Laptop

102 → Mouse

103 → Keyboard



# Step 4: Add Products

Add products using:

inventory.add(
        101,
        new Product(
                101,
                "Laptop",
                55000,
                5));



Another product:

inventory.add(
        102,
        new Product(
                102,
                "Mouse",
                800,
                20));



Another:

inventory.add(
        103,
        new Product(
                103,
                "Keyboard",
                1500,
                10));



# Step 5: Retrieve a Product

Use:

Product product =
        inventory.get(101);



Then:

System.out.println(product);



Example output:

ID: 101, Name: Laptop, Price: 55000.0, Quantity: 5



# Step 6: Check Whether a Product Exists

Use:

if (inventory.contains(101)) {

    System.out.println(
            "Product exists.");

}



This uses:

Map.containsKey()

internally.



# Step 7: Remove a Product

Use:

inventory.remove(103);



This removes the product with ID 103.



# Step 8: Display All Products

We can add a method:

public void displayAll() {

    items.forEach(
            (key, value) ->
                    System.out.println(
                            value));

}



Now:

inventory.displayAll();

can display all products.



# Updated Inventory Class

import java.util.HashMap;
import java.util.Map;

class Inventory<K, V> {

    private Map<K, V> items =
            new HashMap<>();

    public void add(
            K key,
            V value) {

        items.put(key, value);

    }

    public V get(K key) {

        return items.get(key);

    }

    public boolean contains(K key) {

        return items.containsKey(key);

    }

    public void remove(K key) {

        items.remove(key);

    }

    public int size() {

        return items.size();

    }

    public void displayAll() {

        items.forEach(
                (key, value) ->
                        System.out.println(
                                value));

    }

    public Map<K, V> getItems() {

        return items;

    }

}



# Step 9: Update a Product

Retrieve the product:

Product product =
        inventory.get(101);



Then update it:

if (product != null) {

    product.setPrice(60000);

    product.setQuantity(8);

}



The product now contains the updated information.



# Step 10: Search Products by Name

We can create a method that searches all products.

public static void searchByName(
        Inventory<Integer, Product>
                inventory,
        String name) {

    for (Product product :
            inventory.getItems().values()) {

        if (product.getName()
                .equalsIgnoreCase(name)) {

            System.out.println(product);

        }

    }

}



# Understanding the Search

This part:

inventory.getItems().values()

returns all Product objects stored in the Map.



Then:

for (Product product : ...)

checks each Product.



Finally:

equalsIgnoreCase()

allows case-insensitive name comparison.



# Step 11: Sort Products by Price

Use a Comparator:

List<Product> products =
        new ArrayList<>(
                inventory.getItems().values());



Then:

products.sort(
        Comparator.comparingDouble(
                Product::getPrice));



Now products are sorted from:

Lowest Price

↓

Highest Price



# Step 12: Sort by Name

products.sort(
        Comparator.comparing(
                Product::getName));



This sorts products alphabetically by name.



# Step 13: Sort by Quantity

products.sort(
        Comparator.comparingInt(
                Product::getQuantity));



This sorts products from lowest quantity to highest quantity.



# Step 14: Descending Price

products.sort(
        Comparator
                .comparingDouble(
                        Product::getPrice)
                .reversed());



Now:

Highest Price

↓

Lowest Price



# Step 15: Multi-Level Sorting

Suppose two products have the same price.

We can sort first by price and then by name:

products.sort(
        Comparator
                .comparingDouble(
                        Product::getPrice)
                .thenComparing(
                        Product::getName));



This combines:

Primary sorting

↓

Price



Secondary sorting

↓

Name



# Step 16: Calculate Total Inventory Value

The total inventory value can be calculated using:

Price × Quantity



For example:

Laptop

55000 × 5

= 275000



Create a method:

public static double
calculateInventoryValue(
        Inventory<Integer, Product>
                inventory) {

    double total = 0;

    for (Product product :
            inventory.getItems().values()) {

        total +=
                product.getPrice()
                * product.getQuantity();

    }

    return total;

}



# Step 17: Check Low Stock

Suppose products with quantity below 5 are considered low stock.

public static void
displayLowStock(
        Inventory<Integer, Product>
                inventory) {

    for (Product product :
            inventory.getItems().values()) {

        if (product.getQuantity() < 5) {

            System.out.println(product);

        }

    }

}



# Step 18: Immutable Product View

Sometimes you may want to provide product information without allowing the caller to modify the collection structure.

You can create an unmodifiable view:

Map<Integer, Product> view =
        Collections.unmodifiableMap(
                inventory.getItems());



Now the caller cannot directly add or remove mappings through view.

However, remember:

Unmodifiable Map

↓

Product objects may still be mutable



So the collection structure and the objects inside it are separate concerns.



# Step 19: Complete Inventory System

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Product {

    private int id;
    private String name;
    private double price;
    private int quantity;

    Product(
            int id,
            String name,
            double price,
            int quantity) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;

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

    public int getQuantity() {

        return quantity;

    }

    public void setName(String name) {

        this.name = name;

    }

    public void setPrice(double price) {

        this.price = price;

    }

    public void setQuantity(int quantity) {

        this.quantity = quantity;

    }

    @Override
    public String toString() {

        return "ID: " + id
                + ", Name: " + name
                + ", Price: " + price
                + ", Quantity: " + quantity;

    }

}



class Inventory<K, V> {

    private Map<K, V> items =
            new HashMap<>();

    public void add(
            K key,
            V value) {

        items.put(key, value);

    }

    public V get(K key) {

        return items.get(key);

    }

    public boolean contains(K key) {

        return items.containsKey(key);

    }

    public void remove(K key) {

        items.remove(key);

    }

    public int size() {

        return items.size();

    }

    public Map<K, V> getItems() {

        return items;

    }

    public void displayAll() {

        items.forEach(
                (key, value) ->
                        System.out.println(
                                value));

    }

}



public class InventoryManagementSystem {

    public static void searchByName(
            Inventory<Integer, Product>
                    inventory,
            String name) {

        for (Product product :
                inventory
                        .getItems()
                        .values()) {

            if (product
                    .getName()
                    .equalsIgnoreCase(name)) {

                System.out.println(product);

            }

        }

    }



    public static double
    calculateInventoryValue(
            Inventory<Integer, Product>
                    inventory) {

        double total = 0;

        for (Product product :
                inventory
                        .getItems()
                        .values()) {

            total +=
                    product.getPrice()
                    * product.getQuantity();

        }

        return total;

    }



    public static void
    displayLowStock(
            Inventory<Integer, Product>
                    inventory) {

        for (Product product :
                inventory
                        .getItems()
                        .values()) {

            if (product.getQuantity() < 5) {

                System.out.println(product);

            }

        }

    }



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
                        55000,
                        5));



        inventory.add(
                102,
                new Product(
                        102,
                        "Mouse",
                        800,
                        20));



        inventory.add(
                103,
                new Product(
                        103,
                        "Keyboard",
                        1500,
                        3));



        System.out.println(
                "All Products:");

        inventory.displayAll();



        System.out.println(
                "\\nProduct with ID 101:");

        System.out.println(
                inventory.get(101));



        System.out.println(
                "\\nSearch Result:");

        searchByName(
                inventory,
                "Mouse");



        Product product =
                inventory.get(101);

        if (product != null) {

            product.setPrice(60000);

            product.setQuantity(8);

        }



        System.out.println(
                "\\nUpdated Product:");

        System.out.println(
                inventory.get(101));



        System.out.println(
                "\\nLow Stock Products:");

        displayLowStock(inventory);



        System.out.println(
                "\\nTotal Inventory Value: "
                + calculateInventoryValue(
                        inventory));



        List<Product> products =
                new ArrayList<>(
                        inventory
                                .getItems()
                                .values());



        products.sort(
                Comparator
                        .comparingDouble(
                                Product::getPrice)
                        .reversed());



        System.out.println(
                "\\nProducts by Price:");



        for (Product item :
                products) {

            System.out.println(item);

        }



        inventory.remove(103);



        System.out.println(
                "\\nAfter Removing Product 103:");

        inventory.displayAll();

    }

}



# Understanding the Complete Project

The project uses several concepts from Module 10.



## Map

Map<K, V>

stores:

Product ID → Product



## Generics

Inventory<Integer, Product>

provides type safety.



## Generic Class

class Inventory<K, V>

allows the Inventory class to work with different types.



## Generic Methods

Methods such as:

searchByName()

calculateInventoryValue()

work with the generic Inventory structure.



## Comparator

Products can be sorted using:

Comparator.comparingDouble()



## Collections

The project uses:

Map

List

ArrayList

together.



# Example Output

The exact order of products displayed directly from the HashMap should not be assumed.

A possible output could look like:

All Products:

ID: 101, Name: Laptop, Price: 55000.0, Quantity: 5

ID: 102, Name: Mouse, Price: 800.0, Quantity: 20

ID: 103, Name: Keyboard, Price: 1500.0, Quantity: 3



Product with ID 101:

ID: 101, Name: Laptop, Price: 55000.0, Quantity: 5



Search Result:

ID: 102, Name: Mouse, Price: 800.0, Quantity: 20



Updated Product:

ID: 101, Name: Laptop, Price: 60000.0, Quantity: 8



Low Stock Products:

ID: 103, Name: Keyboard, Price: 1500.0, Quantity: 3



Total Inventory Value:

...



The order of the HashMap entries is not guaranteed.



# Project Workflow

The complete workflow is:

Start

↓

Create Inventory

↓

Add Products

↓

View Products

↓

Search Products

↓

Update Products

↓

Check Stock

↓

Calculate Inventory Value

↓

Sort Products

↓

Remove Products

↓

End



# Concepts Practiced

This project combines the following Module 10 topics:

✓ HashMap

✓ Generic Classes

✓ Generic Methods

✓ Bounded Generics

✓ Wildcards

✓ Comparator

✓ Sorting

✓ Collections

✓ Lambda Expressions

✓ Immutable / Unmodifiable Collections



Not every concept needs to appear as a separate feature in the final application.

The important goal is understanding how these concepts can be combined appropriately.



# Possible Improvements

The basic project can be extended with:

- Category-based products.
- Stock-in and stock-out operations.
- Product search by price range.
- Multiple sorting options.
- Product categories.
- Low-stock notifications.
- Inventory reports.
- Product discount calculation.
- Immutable product snapshots.
- Menu-driven console interaction.



# Mini Challenge

Try extending the project with these operations.



## Challenge 1 — Search by Price

Create:

searchByPriceRange(
        inventory,
        minimum,
        maximum);



Display products whose price falls within the given range.



## Challenge 2 — Sort by Quantity

Sort products using:

Comparator.comparingInt(
        Product::getQuantity)



## Challenge 3 — Sort by Name

Use:

Comparator.comparing(
        Product::getName)



## Challenge 4 — Low Stock Count

Create a method that returns the number of products whose quantity is below a specified limit.



## Challenge 5 — Total Number of Items

Calculate the total quantity of all products.

For example:

Laptop → 5

Mouse → 20

Keyboard → 3



Total → 28



# Common Mistakes

## 1. Using Raw Collections

Avoid:

Map inventory =
        new HashMap();



Prefer:

Map<Integer, Product> inventory =
        new HashMap<>();



## 2. Forgetting Null Checks

This:

Product product =
        inventory.get(999);



may return null.

Always consider whether the requested key exists before accessing the returned object.



## 3. Assuming HashMap Order

Do not assume that HashMap maintains insertion order.

If a specific order is required, use an appropriate collection such as LinkedHashMap or TreeMap.



## 4. Modifying an Unmodifiable View

An unmodifiable Map does not allow direct structural modification.

For example:

view.put(
        104,
        product);



will throw:

UnsupportedOperationException



## 5. Confusing Collection Immutability with Object Immutability

An unmodifiable Map does not automatically make the Product objects immutable.



# Best Practices

- Use Generics instead of raw collections.
- Use meaningful key and value types.
- Check for null values when retrieving products.
- Use Comparator for flexible sorting.
- Keep inventory operations inside reusable classes.
- Use unmodifiable views when direct structural modification should be prevented.
- Do not assume HashMap ordering.
- Keep search and calculation operations separate.
- Use encapsulation for Product fields.
- Extend the system using reusable methods instead of duplicating logic.



# Interview Questions

## Q1. Why is Map<Integer, Product> useful?

It provides efficient key-value storage where the product ID is the key and the Product object is the value.



## Q2. Why is Inventory<K, V> generic?

It allows the Inventory class to work with different key and value types.



## Q3. How can products be sorted by price?

Using:

Comparator.comparingDouble(
        Product::getPrice)



## Q4. How can products be sorted in descending price order?

Using:

Comparator
        .comparingDouble(
                Product::getPrice)
        .reversed()



## Q5. How do you search for a product by name?

Iterate through the stored Product objects and compare their names using equalsIgnoreCase().



## Q6. How is total inventory value calculated?

Price × Quantity is calculated for every product and the results are added together.



## Q7. What happens when inventory.get() receives a missing key?

The Map may return null.



## Q8. Does HashMap guarantee order?

No.

The order of HashMap entries is not guaranteed.



## Q9. What is the purpose of Collections.unmodifiableMap()?

It creates an unmodifiable view that prevents structural modification through that reference.



## Q10. Does an unmodifiable Map make Product objects immutable?

No.

The Product objects may still be mutable.



# Key Takeaways

After completing this lesson, you should be able to:

- Build an Inventory Management System.
- Use HashMap to store products.
- Use generic classes.
- Store custom objects in generic Maps.
- Add and remove products.
- Retrieve products by ID.
- Search products by name.
- Update product information.
- Sort products using Comparator.
- Sort by price, name, and quantity.
- Perform multi-level sorting.
- Calculate inventory value.
- Detect low-stock products.
- Use unmodifiable Map views.
- Combine Maps, Generics, Collections, and OOP.
- Design reusable collection-based applications.



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

✓ Lesson 15 — Inventory Management System



# Module Completed

Congratulations!

You have completed Module 10:

Maps and Generics



You learned how to:

- Work with different Map implementations.
- Use Generic Classes.
- Use Generic Methods.
- Apply Bounded Generics.
- Work with Wildcards.
- Implement Comparable.
- Implement Comparator.
- Sort objects.
- Work with immutable collections.
- Combine Maps and Generics.
- Build a complete Inventory Management System.



# What's Next?

You are now ready to continue to the next Java module.

The next module will introduce new concepts and build upon the programming skills developed throughout this module.

`

};

export default lesson15;