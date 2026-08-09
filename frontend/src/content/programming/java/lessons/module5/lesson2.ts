const lesson2 = {

  id: "lesson2",

  title: "Classes and Objects in Java",

  content: `

# Classes and Objects in Java


## Introduction


Object-Oriented Programming is based on two fundamental concepts:


- Classes.
- Objects.



A class defines the structure and behavior of an object.


An object is a real-world instance created from a class.



In Java:


Class = Blueprint


Object = Actual Entity



Example:


A class called Car defines:


- Color.
- Model.
- Speed.
- Start method.



Objects represent actual cars created from that blueprint.



# What is a Class?


A class is a blueprint or template used to create objects.



A class defines:


- Variables (Data).
- Methods (Behavior).



Syntax:


class ClassName

{

    variables;


    methods;

}



Example:


class Student

{

    String name;

    int marks;


    void display()

    {

        System.out.println(name);

        System.out.println(marks);

    }

}



Here:


Student is a class.


name and marks are variables.


display() is a method.



# Components of a Class



A class mainly contains:



## 1. Fields / Variables


Fields store the data of an object.



Example:


String name;


int marks;



## 2. Methods


Methods define the behavior of an object.



Example:


void display()

{

}



## 3. Constructors


Constructors initialize objects.



Example:


Student()

{

}



# What is an Object?


An object is an instance of a class.



An object represents an actual entity that has:


- State.
- Behavior.



State:


Data stored inside the object.



Behavior:


Actions performed by the object.



Example:


Object:


Student1



State:


name = "Alex"


marks = 90



Behavior:


displayResult()



# Creating Objects in Java


Objects are created using the new keyword.



Syntax:


ClassName objectName = new ClassName();



Example:


Student student1 = new Student();



Explanation:


Student:


Class name.



student1:


Object reference.



new Student():


Creates a new object.



# Simple Class and Object Example


class Student

{

    String name;

    int marks;


    void display()

    {

        System.out.println(name);

        System.out.println(marks);

    }


    public static void main(String[] args)

    {

        Student student1 = new Student();


        student1.name = "Alex";

        student1.marks = 85;


        student1.display();

    }

}



Output:


Alex

85



Explanation:


A Student class is created.


student1 object is created.


Values are assigned to the object.



# Multiple Objects


A single class can create multiple objects.



Example:


class Student

{

    String name;


    void display()

    {

        System.out.println(name);

    }


    public static void main(String[] args)

    {

        Student student1 = new Student();

        Student student2 = new Student();


        student1.name = "Alex";

        student2.name = "John";


        student1.display();

        student2.display();

    }

}



Output:


Alex

John



Explanation:


Both objects belong to the same class but store different data.



# Class and Object Relationship


Example:


Class:


Car



Objects:


Car1


Car2


Car3



Each object has its own:


- Color.
- Model.
- Speed.



But all objects follow the same class structure.



# Object State and Behavior


Every object has:



## State


Represents object data.



Example:


Bank Account:


balance = 5000



## Behavior


Represents object actions.



Example:


deposit()


withdraw()



# Real-World Example: Banking System


Class:


BankAccount



Data:


- Account number.
- Holder name.
- Balance.



Methods:


- deposit()
- withdraw()
- checkBalance()



Objects:


account1


account2



Each account object stores different customer information.



# Real-World Example: E-Commerce System


Class:


Product



Data:


- Product name.
- Price.
- Category.



Methods:


- displayProduct()
- calculateDiscount()



Objects:


product1


product2



# Real-World Example: Student Management System


Class:


Student



Data:


- Name.
- Roll number.
- Marks.



Methods:


- calculateGrade()
- displayResult()



Objects:


student1


student2



# Object Memory Allocation


When an object is created using new:


Java allocates memory in the heap area.



Example:


Student student1 = new Student();



Memory:


Heap:


Student Object



Stack:


student1 reference



# Object Reference


The variable that stores the address of an object is called an object reference.



Example:


Student student1;



student1 stores the reference of the Student object.



# Accessing Object Members


Object members are accessed using the dot operator.



Syntax:


objectName.memberName



Example:


student1.name;


student1.display();



# Objects Without Reference


Java also allows creating objects without storing references.



Example:


new Student();



Such objects cannot be reused because there is no reference.



# Difference Between Class and Object



Class:


- Blueprint.
- Logical entity.
- Does not occupy memory for objects.
- Defines properties and behaviors.



Object:


- Instance of a class.
- Physical entity.
- Occupies memory.
- Contains actual values.



# Advantages of Classes and Objects



## Code Organization


Classes organize related data and methods.



## Reusability


Objects can be created multiple times.



## Real-World Modeling


Real entities can be represented easily.



## Maintainability


Large programs become easier to manage.



# Common Mistakes



## Confusing Class and Object


Class is a design.


Object is the created entity.



## Accessing Object Without Creating It


An object must be created before use.



## Creating Too Many Responsibilities


A class should represent one clear concept.



# Best Practices


Follow these practices:


- Use meaningful class names.
- Create objects only when required.
- Keep related data and methods together.
- Design classes based on real-world entities.
- Avoid unnecessary objects.



# Applications of Classes and Objects



## Banking Applications


Classes:


Account


Customer


Transaction



Objects:


Individual accounts and customers.



## E-Commerce Applications


Classes:


Product


Order


Customer



Objects:


Individual products and orders.



## Education Applications


Classes:


Student


Course


Exam



Objects:


Individual students and courses.



# Key Points


Remember:


- A class is a blueprint for objects.
- An object is an instance of a class.
- Classes contain fields and methods.
- Objects store actual data.
- Objects are created using the new keyword.
- Multiple objects can be created from one class.
- Objects communicate with each other through methods.



# Summary


Classes and objects are the foundation of Java OOP.


Classes define structure and behavior, while objects represent real-world entities created from those definitions.


Understanding classes and objects is the first major step toward building professional object-oriented Java applications.

`

};


export default lesson2;