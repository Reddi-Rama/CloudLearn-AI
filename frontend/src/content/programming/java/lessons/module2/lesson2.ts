const lesson2 = {

  id: "lesson2",

  title: "Non-Primitive Data Types in Java",

  content: `

# Non-Primitive Data Types in Java


## Introduction


In Java, data types are divided into two main categories:


- Primitive Data Types.
- Non-Primitive Data Types.


Primitive data types store simple values directly in memory, whereas non-primitive data types store references to objects.



## What are Non-Primitive Data Types?


Non-primitive data types are also called reference data types.


They store the address or reference of objects instead of storing actual values directly.


Non-primitive data types are created using classes and are used to represent complex real-world entities.



Examples of non-primitive data types:


- String.
- Arrays.
- Classes.
- Objects.
- Interfaces.



## Characteristics of Non-Primitive Data Types


Non-primitive data types:


- Can store multiple values.
- Store references to objects.
- Can contain methods.
- Are created by programmers.
- Have flexible memory size.
- Support object-oriented programming.



# String Data Type


## Introduction


String is one of the most commonly used non-primitive data types in Java.


A String represents a sequence of characters.



Example:


String name = "Java";



Here:


String is the data type.

name is the variable.

Java is the stored value.



## String Usage


Strings are used to store:


- Names.
- Messages.
- Addresses.
- Email IDs.
- Text information.



Example:


String email = "user@gmail.com";



## String Example Program


class StringExample

{

    public static void main(String[] args)

    {

        String language = "Java";


        System.out.println(language);

    }

}



Output:


Java



# Arrays


## Introduction


An array is a collection of elements of the same data type stored under a single name.


Arrays allow multiple values to be stored together.



Example:


int marks[] = {90,85,95};



Here:


marks is an array storing multiple integer values.



## Advantages of Arrays


Arrays provide:


- Easy data management.
- Faster access.
- Reduced number of variables.
- Better organization.



## Real-World Usage


Arrays are used for:


- Student marks.
- Product lists.
- Employee records.
- Data processing.



## Array Example Program


class ArrayExample

{

    public static void main(String[] args)

    {

        int numbers[] = {10,20,30};


        System.out.println(numbers[0]);

    }

}



Output:


10



# Classes


## Introduction


A class is a blueprint used to create objects.


It defines the properties and behaviors of an object.



A class contains:


- Variables.
- Methods.
- Constructors.



Example:


class Student

{

    String name;

    int age;

}



Here:


Student is a class.



## Real-World Example


A Student class can represent:


- Student name.
- Roll number.
- Marks.
- Attendance.



# Objects


## Introduction


An object is an instance of a class.


Objects represent real-world entities in a program.



Example:


Student student1 = new Student();



Here:


student1 is an object of Student class.



## Object Characteristics


Objects contain:


- State.
- Behavior.
- Identity.



Example:


A Bank Account object contains:


State:


- Account number.
- Balance.


Behavior:


- Deposit.
- Withdraw.



# Reference Variables


## Introduction


Non-primitive variables are reference variables.


They store the reference or address of objects.



Example:


String name = "Java";



The variable name stores the reference of a String object.



# Interfaces


## Introduction


An interface is a blueprint that contains method declarations.


Interfaces are used to achieve abstraction and support multiple inheritance.



Example:


interface Vehicle

{

}



## Usage of Interfaces


Interfaces are used for:


- Abstraction.
- Loose coupling.
- Flexible software design.



# Difference Between Primitive and Non-Primitive Data Types



## Primitive Data Types


Characteristics:


- Store actual values.
- Provided by Java.
- Fixed size.
- Faster execution.
- Cannot call methods.



Examples:


int

double

char

boolean



## Non-Primitive Data Types


Characteristics:


- Store references.
- Created using classes.
- Can call methods.
- Can store complex information.



Examples:


String

Array

Class

Object



# Example Program


class Student

{

    String name;


    void display()

    {

        System.out.println(name);

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        student.name = "Alex";


        student.display();

    }

}



Output:


Alex



# Memory Allocation


Primitive data types:


Store actual values directly in memory.



Example:


int number = 10;



Non-primitive data types:


Store references to objects.



Example:


Student s = new Student();



# Advantages of Non-Primitive Data Types


They provide:


- Better code organization.
- Object-oriented programming support.
- Code reusability.
- Representation of real-world entities.
- Flexible data handling.



# Real-World Applications



## Banking Applications


Objects represent:


- Customers.
- Accounts.
- Transactions.



## Hospital Management Systems


Objects represent:


- Patients.
- Doctors.
- Medical records.



## E-Commerce Applications


Objects represent:


- Products.
- Orders.
- Customers.



# Best Practices


Follow these practices:


- Use meaningful class names.
- Create objects only when required.
- Organize classes properly.
- Use interfaces for flexible designs.



# Common Mistakes


## Confusing Primitive and Reference Types


Primitive:


int age = 20;



Reference:


Student s = new Student();



## Creating Too Many Objects


Unnecessary objects increase memory usage.



# Key Points


Remember:


- Non-primitive data types store object references.
- String, arrays, classes, and objects are non-primitive types.
- They support object-oriented programming.
- Objects represent real-world entities.
- Reference variables store object addresses.


Non-primitive data types allow Java programs to handle complex information and build real-world applications efficiently.

`

};


export default lesson2;