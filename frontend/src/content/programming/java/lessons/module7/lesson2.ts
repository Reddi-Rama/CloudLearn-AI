const lesson2 = {

  id: "lesson2",

  title: "Types of Exceptions in Java",

  content: `

# Types of Exceptions in Java


## Introduction


In Java, exceptions are classified into different categories based on how and when they occur.



Understanding exception types helps developers:


- Identify problems correctly.
- Handle errors properly.
- Write reliable applications.



Java mainly divides problems into:


1. Checked Exceptions


2. Unchecked Exceptions


3. Errors



# Exception Categories in Java


The Java exception hierarchy is based on the Throwable class.



Structure:



Throwable

|

|---- Error

|

|---- Exception

          |

          |---- RuntimeException



From this hierarchy:


- Errors represent serious system problems.
- Exceptions represent problems that applications can handle.



# 1. Checked Exceptions


## Definition


Checked exceptions are exceptions that are checked by the compiler during compilation.



The compiler forces the programmer to handle these exceptions.



If they are not handled, the program will not compile.



# Examples of Checked Exceptions


Common checked exceptions:



## IOException


Occurs during input and output operations.



Example:


Reading a file that does not exist.



## SQLException


Occurs while working with databases.



Example:


Database connection failure.



## FileNotFoundException


Occurs when a requested file cannot be found.



## ClassNotFoundException


Occurs when a required class cannot be loaded.



# Checked Exception Example


import java.io.FileReader;

import java.io.IOException;



class Main

{

    public static void main(String[] args)

    {

        try

        {

            FileReader file = new FileReader("data.txt");

        }


        catch(IOException e)

        {

            System.out.println("File error occurred");

        }

    }

}



Output:


File error occurred



Explanation:


The compiler forces handling of IOException.



# Why Are Checked Exceptions Needed?


Checked exceptions help prevent predictable problems.



Example:


Opening a file:



Possible problems:


- File missing.
- Permission denied.
- File corrupted.



The programmer must prepare for these situations.



# 2. Unchecked Exceptions


## Definition


Unchecked exceptions are exceptions that occur during runtime.



The compiler does not force the programmer to handle them.



They are subclasses of:


RuntimeException



# Examples of Unchecked Exceptions



## ArithmeticException


Occurs during invalid arithmetic operations.



Example:


int result = 10 / 0;



Output:


ArithmeticException



# NullPointerException


Occurs when accessing a null object.



Example:


String name = null;


System.out.println(name.length());



Output:


NullPointerException



# ArrayIndexOutOfBoundsException


Occurs when accessing an invalid array index.



Example:


int numbers[] = {1,2,3};


System.out.println(numbers[5]);



Output:


ArrayIndexOutOfBoundsException



# NumberFormatException


Occurs when converting invalid strings into numbers.



Example:


int value = Integer.parseInt("abc");



Output:


NumberFormatException



# ClassCastException


Occurs when an object is incorrectly cast.



Example:


Animal animal = new Animal();


Dog dog = (Dog) animal;



Output:


ClassCastException



# Unchecked Exception Example


class Main

{

    public static void main(String[] args)

    {

        int number = 10;


        int result = number / 0;


        System.out.println(result);

    }

}



Output:


ArithmeticException



Explanation:


The error occurs during runtime.



# Why Are Unchecked Exceptions Not Checked?


Unchecked exceptions usually represent programming mistakes.



Examples:


- Wrong logic.
- Invalid assumptions.
- Incorrect object handling.



The programmer should fix the code instead of forcing handling.



# 3. Errors in Java


## Definition


Errors are serious problems that occur in the JVM or system environment.



Applications usually cannot recover from errors.



Errors are subclasses of:


java.lang.Error



# Examples of Errors



## OutOfMemoryError


Occurs when JVM runs out of memory.



Example:


Creating extremely large objects.



## StackOverflowError


Occurs when the stack memory is exhausted.



Example:


Infinite recursion.



## VirtualMachineError


Occurs due to JVM problems.



# Error Example


class Main

{

    static void method()

    {

        method();

    }


    public static void main(String[] args)

    {

        method();

    }

}



Output:


StackOverflowError



Explanation:


The method calls itself continuously.



# Difference Between Checked Exceptions, Unchecked Exceptions, and Errors



## Checked Exceptions


Checked by:


Compiler



Occurs:


Compile time handling required.



Example:


IOException



Handling:


Mandatory.



## Unchecked Exceptions


Checked by:


JVM during runtime.



Occurs:


Runtime.



Example:


ArithmeticException



Handling:


Optional.



## Errors


Checked by:


JVM.



Occurs:


System-level failure.



Example:


OutOfMemoryError



Handling:


Usually not possible.



# Exception Types in Real Applications



# Banking Application


## Checked Exception


Database connection failure:


SQLException



## Unchecked Exception


Invalid withdrawal calculation:


ArithmeticException



## Error


Server memory failure:


OutOfMemoryError



# E-Commerce Application


## Checked Exception


Payment gateway communication:


IOException



## Unchecked Exception


Invalid product ID:


NullPointerException



## Error


Server crash:


StackOverflowError



# Student Management System


## Checked Exception


Reading student file:


FileNotFoundException



## Unchecked Exception


Invalid marks calculation:


ArithmeticException



## Error


Memory shortage:


OutOfMemoryError



# Custom Exception Category


Developers can also create their own exceptions.



Example:


class InvalidAgeException extends Exception

{

}



Custom exceptions can be:


Checked exceptions:


extends Exception



Unchecked exceptions:


extends RuntimeException



# When To Use Each Exception Type?



## Use Checked Exceptions When:


The problem can be expected and recovered.



Examples:


- File handling.
- Database operations.
- Network operations.



## Use Unchecked Exceptions When:


The problem indicates programming mistakes.



Examples:


- Invalid input.
- Null references.
- Logic errors.



## Errors


Should usually not be handled.



They indicate serious JVM problems.



# Advantages of Understanding Exception Types



## Better Error Handling


Developers choose the correct handling strategy.



## Cleaner Code


Different problems are handled differently.



## Easier Debugging


The cause of problems becomes clear.



## Reliable Applications


Applications respond properly to failures.



# Common Mistakes



## Handling Every Problem with Exception


Not every problem should be caught.



## Ignoring Checked Exceptions


Can create compilation errors.



## Catching Errors


Errors usually should not be handled.



## Using RuntimeException Everywhere


Reduces code clarity.



# Best Practices


Follow these practices:


- Handle checked exceptions properly.
- Fix causes of unchecked exceptions.
- Do not catch serious errors unnecessarily.
- Use meaningful exception messages.
- Create custom exceptions for business rules.



# Interview Questions



## What are checked exceptions?


Exceptions checked by compiler.



## What are unchecked exceptions?


Exceptions that occur during runtime.



## Difference between Error and Exception?


Exceptions can usually be handled; Errors are serious system failures.



## Parent class of all exceptions?


Throwable.



# Key Points


Remember:


- Exceptions are problems that applications can handle.
- Checked exceptions are compiler checked.
- Unchecked exceptions occur during runtime.
- Errors are serious JVM problems.
- RuntimeException represents unchecked exceptions.
- Throwable is the root class.



# Summary


Java provides different exception categories to handle different types of problems.


Checked exceptions help handle predictable external problems, unchecked exceptions represent programming mistakes, and errors represent serious system failures.



Understanding these categories helps developers create stable and professional Java applications.

`

};


export default lesson2;