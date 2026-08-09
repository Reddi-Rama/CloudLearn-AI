const lesson10 = {

  id: "lesson10",

  title: "Packages in Java",

  content: `

# Packages in Java


## Introduction


As Java applications become larger, managing hundreds or thousands of classes becomes difficult.


To solve this problem, Java provides a feature called:


Packages



Packages help organize related classes and interfaces into groups.



Examples:


- Banking application package.
- Payment package.
- Student management package.
- Utility package.



Packages improve:


- Code organization.
- Reusability.
- Security.
- Maintainability.



# What is a Package?


A package is a collection of related classes, interfaces, and sub-packages.



A package acts like a folder that stores related Java files.



Example:


com.company.project



contains classes related to a project.



# Why Do We Need Packages?


Packages are used to:



## 1. Organize Code


Large applications contain many classes.


Packages divide them into meaningful groups.



Example:


bank.accounts


bank.transactions



## 2. Avoid Naming Conflicts


Two classes can have the same name if they belong to different packages.



Example:


com.shop.Product


com.store.Product



Both classes have the same name but different packages.



## 3. Provide Access Control


Packages work with access modifiers to control visibility.



## 4. Improve Reusability


Classes inside packages can be reused in different programs.



# Types of Packages in Java


Java packages are mainly two types:



## 1. Built-in Packages


Packages provided by Java.



Examples:


java.lang


java.util


java.io


java.net



## 2. User-defined Packages


Packages created by programmers.



Example:


mypackage



# Built-in Packages


Java provides many ready-made packages.



# java.lang Package


Contains fundamental Java classes.



Examples:


String


Math


System


Object



This package is automatically imported.



Example:


class Example

{

    public static void main(String[] args)

    {

        System.out.println(Math.sqrt(25));

    }

}



# java.util Package


Contains utility classes.



Examples:


Scanner


Arrays


Date



Example:


import java.util.Scanner;


class Example

{

    public static void main(String[] args)

    {

        Scanner input = new Scanner(System.in);

    }

}



# java.io Package


Used for input and output operations.



Examples:


File


InputStream


OutputStream



# Creating User-defined Packages


A programmer can create custom packages.



Syntax:


package packageName;



Example:


package student;



# Creating a Class Inside Package


File:


Student.java



Code:


package student;


public class Student

{

    public void display()

    {

        System.out.println("Student Class");

    }

}



Here:


student is the package name.



# Compiling Package Classes


Command:


javac -d . Student.java



The compiler creates the required package folder structure.



# Importing Packages


To use classes from another package, we use import.



Syntax:


import packageName.ClassName;



Example:


import student.Student;



# Using Imported Class


Example:


import student.Student;


class Main

{

    public static void main(String[] args)

    {

        Student student = new Student();


        student.display();

    }

}



Output:


Student Class



# Importing All Classes


Syntax:


import packageName.*;



Example:


import java.util.*;



This imports all classes from the package.



# Package Example: Banking System


Package:


banking



Classes:


Account


Customer


Transaction



Structure:


banking


|

|-- Account.java


|-- Customer.java


|-- Transaction.java



# Package Example: E-Commerce System


Package:


shopping



Classes:


Product


Cart


Order



Structure:


shopping


|

|-- Product.java


|-- Cart.java


|-- Order.java



# Package Example: Student Management System


Package:


education



Classes:


Student


Course


Result



Structure:


education


|

|-- Student.java


|-- Course.java


|-- Result.java



# Accessing Package Members


Package access depends on access modifiers.



## Public Members


Accessible everywhere.



## Default Members


Accessible only inside the same package.



## Protected Members


Accessible through inheritance and same package.



## Private Members


Accessible only inside the class.



# Sub-packages


A package can contain another package.



Example:


com.company.project



Sub-packages:


com.company.project.student


com.company.project.admin



# Advantages of Packages



## Better Organization


Classes are grouped logically.



## Code Reuse


Packages can be reused across applications.



## Security


Packages control access.



## Easy Maintenance


Large projects become easier to manage.



# Common Mistakes



## Incorrect Package Name


Package name should match folder structure.



## Forgetting Import Statement


Classes from other packages require import.



## Accessing Private Members


Private members cannot be accessed outside the class.



# Best Practices


Follow these practices:


- Use meaningful package names.
- Keep related classes together.
- Use lowercase package names.
- Avoid very large packages.
- Organize projects logically.



# Naming Convention for Packages


Java follows reverse domain naming.



Example:


com.company.application



For educational projects:


college.studentmanagement



# Package Example Program


Package file:


package college;


public class Student

{

    String name;


    public void display()

    {

        System.out.println("Student Details");

    }

}



Main file:


import college.Student;


class Main

{

    public static void main(String[] args)

    {

        Student s = new Student();


        s.display();

    }

}



Output:


Student Details



# Real-World Applications



## Banking Applications


Packages:


bank.account


bank.payment


bank.loan



## E-Commerce Applications


Packages:


product


cart


payment



## Student Applications


Packages:


student


course


result



# Key Points


Remember:


- Packages organize Java classes.
- Java has built-in and user-defined packages.
- The package keyword creates packages.
- The import keyword uses external classes.
- Packages prevent naming conflicts.
- Packages improve project structure.



# Summary


Packages are essential for building large Java applications.


They help developers organize classes, improve security, avoid naming conflicts, and create maintainable software systems.

`

};


export default lesson10;