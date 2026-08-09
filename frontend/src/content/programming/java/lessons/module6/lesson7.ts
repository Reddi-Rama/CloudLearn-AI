const lesson7 = {

  id: "lesson7",

  title: "Upcasting and Downcasting in Java",

  content: `

# Upcasting and Downcasting in Java


## Introduction


In Java inheritance, objects can be referred to using parent class and child class references.



This concept is closely related to polymorphism.



Java allows converting object references between:


- Parent type.
- Child type.



These conversions are called:


1. Upcasting


2. Downcasting



Understanding casting is important for working with inheritance and runtime polymorphism.



# What is Type Casting?


Type casting is the process of converting one data type into another.



In Java, objects can also be cast from one class type to another when inheritance exists.



Example:


Dog object can be treated as an Animal object.



# Upcasting in Java


## Definition


Upcasting is converting a child class reference into a parent class reference.



In simple words:


Child object → Parent reference



Upcasting is automatic in Java.



# Syntax of Upcasting


ParentClass reference = new ChildClass();



Example:


Animal animal = new Dog();



Here:


Animal:


Parent class reference.



Dog:


Child class object.



# Upcasting Example


class Animal

{

    void sound()

    {

        System.out.println("Animal Sound");

    }

}



class Dog extends Animal

{

    void bark()

    {

        System.out.println("Dog Bark");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Animal animal = new Dog();


        animal.sound();

    }

}



Output:


Animal Sound



Explanation:


The Dog object is stored using an Animal reference.



# Why Use Upcasting?


Upcasting is mainly used for:


- Runtime polymorphism.
- Writing flexible code.
- Using common parent references.



Example:


Animal animal;



animal can store:


Dog object


Cat object


Bird object



# Upcasting and Method Access


When upcasting is performed:


Only parent class members are accessible.



Example:


Animal animal = new Dog();



Allowed:


animal.sound();



Not allowed:


animal.bark();



Reason:


The reference type is Animal.



# Upcasting Example: Banking System


Parent:


Account



Children:


SavingsAccount


CurrentAccount



Example:


Account account = new SavingsAccount();



The same reference can store different account types.



# Upcasting Example: E-Commerce System


Parent:


Product



Children:


Laptop


Mobile



Example:


Product product = new Laptop();



Product reference can store Laptop object.



# Upcasting Example: Student System


Parent:


Person



Child:


Student



Example:


Person person = new Student();



Student object is treated as Person.



# What is Downcasting?


## Definition


Downcasting is converting a parent class reference into a child class reference.



In simple words:


Parent reference → Child reference



Unlike upcasting, downcasting must be done manually.



# Syntax of Downcasting


ChildClass object = (ChildClass) parentReference;



Example:


Dog dog = (Dog) animal;



# Downcasting Example


class Animal

{

    void sound()

    {

        System.out.println("Animal Sound");

    }

}



class Dog extends Animal

{

    void bark()

    {

        System.out.println("Dog Bark");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Animal animal = new Dog();


        Dog dog = (Dog) animal;


        dog.bark();

    }

}



Output:


Dog Bark



Explanation:


The Animal reference is converted back to Dog.



# Why Do We Need Downcasting?


Downcasting allows access to child-specific methods.



Example:


Animal animal = new Dog();



animal cannot access:


bark()



After downcasting:


Dog dog = (Dog) animal;



Now:


dog.bark();



works.



# Unsafe Downcasting


Incorrect downcasting can cause errors.



Example:


Animal animal = new Animal();


Dog dog = (Dog) animal;



Output:


ClassCastException



Reason:


The object is not actually a Dog.



# Using instanceof Before Downcasting


Java provides instanceof operator to check object type before casting.



Example:


if(animal instanceof Dog)

{

    Dog dog = (Dog) animal;

    dog.bark();

}



This prevents runtime errors.



# Upcasting vs Downcasting



## Upcasting


Conversion:


Child → Parent



Automatic:


Yes



Safety:


Always safe



Purpose:


Runtime polymorphism



Example:


Animal a = new Dog();



## Downcasting


Conversion:


Parent → Child



Automatic:


No



Safety:


Requires checking



Purpose:


Access child-specific features



Example:


Dog d = (Dog)a;



# Runtime Polymorphism with Upcasting


Example:


class Animal

{

    void sound()

    {

        System.out.println("Animal");

    }

}



class Cat extends Animal

{

    void sound()

    {

        System.out.println("Cat");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Animal a = new Cat();


        a.sound();

    }

}



Output:


Cat



The parent reference calls child implementation.



# Upcasting and Downcasting in Banking System


Example:



Account account = new SavingsAccount();



Upcasting:


SavingsAccount → Account



To access savings-specific features:



SavingsAccount savings = (SavingsAccount) account;



Downcasting:


Account → SavingsAccount



# Upcasting and Downcasting in E-Commerce System


Example:


Product product = new Laptop();



Upcasting:


Laptop → Product



Downcasting:


Laptop laptop = (Laptop) product;



# Upcasting and Downcasting in Student System


Example:


Person person = new Student();



Upcasting:


Student → Person



Downcasting:


Student student = (Student) person;



# Advantages of Upcasting



## Supports Polymorphism


Allows one reference to represent many objects.



## Flexible Design


Methods can work with parent types.



## Code Reusability


Common behavior can be shared.



# Advantages of Downcasting



## Access Child Features


Allows use of child-specific methods.



## More Control


Provides specific object operations.



# Common Mistakes



## Wrong Downcasting


Casting unrelated objects causes errors.



## Ignoring instanceof


Can create ClassCastException.



## Confusing Reference and Object


Reference type and object type are different.



# Best Practices


Follow these practices:


- Prefer upcasting for polymorphism.
- Use downcasting only when required.
- Always check using instanceof.
- Keep inheritance hierarchy meaningful.
- Avoid unnecessary casting.



# Real-World Applications



## Banking Applications


Account reference can hold:


SavingsAccount


CurrentAccount



## E-Commerce Applications


Product reference can hold:


Laptop


Mobile


Tablet



## Education Applications


Person reference can hold:


Student


Teacher



# Key Points


Remember:


- Upcasting converts child to parent.
- Upcasting is automatic.
- Downcasting converts parent to child.
- Downcasting requires explicit casting.
- instanceof helps prevent casting errors.
- Upcasting is commonly used in polymorphism.



# Summary


Upcasting and downcasting allow Java programs to work with objects through different class references.


Upcasting provides flexibility and polymorphism, while downcasting provides access to specialized child features when needed.

`

};


export default lesson7;