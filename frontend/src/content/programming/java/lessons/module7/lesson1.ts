const lesson1 = {

  id: "lesson1",

  title: "Introduction to Exceptions in Java",

  content: `

# Introduction to Exceptions in Java


## Introduction


While developing software applications, programs may face unexpected situations during execution.



Examples:


- Dividing a number by zero.
- Accessing an invalid array position.
- Opening a file that does not exist.
- Entering invalid user input.
- Losing database connectivity.



These situations can interrupt the normal flow of a program.



Java provides a mechanism called:


Exception Handling



to handle these unexpected situations and maintain normal program execution.



# What is an Exception?


An exception is an unwanted or unexpected event that occurs during program execution and disrupts the normal flow of instructions.



In simple words:



An exception is a problem that occurs while the program is running.



Example:


int result = 10 / 0;



The program cannot complete this operation because division by zero is not possible.



Java creates an exception object to represent this problem.



# Exception in Real Life


Consider an online banking application.



Normal flow:


User Login

↓

Select Transfer

↓

Enter Amount

↓

Transfer Money

↓

Success



Unexpected situation:


Database Connection Failed



Without exception handling:


Application crashes.



With exception handling:


Database Error

↓

Catch Problem

↓

Show Message

↓

Continue Safely



# Why Do We Need Exception Handling?


Exception handling is required because real-world applications must handle failures properly.



It provides:


- Program stability.
- Error recovery.
- Better user experience.
- Easier debugging.
- Reliable applications.



# Problems Without Exception Handling


Consider this program:


class Main

{

    public static void main(String[] args)

    {

        int a = 10;

        int b = 0;


        int result = a / b;


        System.out.println(result);

    }

}



Output:


Exception in thread "main" java.lang.ArithmeticException



The program terminates suddenly.



The remaining statements are not executed.



# Normal Flow vs Exception Flow


## Normal Execution Flow


Statement 1

↓

Statement 2

↓

Statement 3

↓

Program Ends



## Exception Execution Flow


Statement 1

↓

Statement 2

↓

Exception Occurs

↓

JVM Creates Exception Object

↓

Searches Handler

↓

Handles Exception

↓

Program Continues



# How Java Handles Exceptions?


Java follows a special mechanism:



1. Detect the problem.


2. Create an exception object.


3. Throw the exception object.


4. Search for matching handler.


5. Execute handling code.



# Exception Object


When an exception occurs, JVM creates an object.



Example:


ArithmeticException object



This object contains:


- Exception type.
- Error message.
- Information about where the problem occurred.



# Throwing an Exception


When JVM creates an exception object, it is called:


Throwing an exception.



Example:


int result = 10 / 0;



JVM internally does:


throw new ArithmeticException();



# Catching an Exception


Handling the exception is called:


Catching an exception.



Example:


try

{

    int result = 10 / 0;

}

catch(ArithmeticException e)

{

    System.out.println("Cannot divide by zero");

}



Output:


Cannot divide by zero



# Exception Handling Keywords


Java provides five important keywords:



## try


Contains risky code that may generate an exception.



Example:


try

{

    // risky code

}



## catch


Handles the exception.



Example:


catch(Exception e)

{

}



## finally


Contains code that always executes.



Example:


finally

{

}



## throw


Used to manually create an exception.



Example:


throw new Exception();



## throws


Declares exceptions that a method may produce.



Example:


void readFile() throws IOException



# Exception vs Error


Java separates problems into two major categories:



## Exception


Problems that applications can handle.



Examples:


- IOException.
- SQLException.
- ArithmeticException.



## Error


Serious problems usually not handled by applications.



Examples:


- OutOfMemoryError.
- StackOverflowError.



# Checked and Unchecked Problems


Java exceptions are mainly divided into:



## Checked Exceptions


Checked during compilation.



Example:


IOException



The programmer must handle them.



## Unchecked Exceptions


Occur during runtime.



Example:


ArithmeticException



Compiler does not force handling.



# Exception Hierarchy Introduction


All exceptions come from a common class:



Throwable



Hierarchy:


Throwable


|

|---- Error


|

|---- Exception



Exception further contains:


RuntimeException



# Common Java Exceptions


## ArithmeticException


Occurs during invalid arithmetic operations.



Example:


10 / 0



## NullPointerException


Occurs when accessing methods or variables of null objects.



Example:


String name = null;


name.length();



## ArrayIndexOutOfBoundsException


Occurs when accessing invalid array indexes.



Example:


int arr[] = new int[5];


arr[10];



## NumberFormatException


Occurs when converting invalid strings to numbers.



Example:


Integer.parseInt("abc");



## IOException


Occurs during input/output operations.



# Exception Handling Example


class Main

{

    public static void main(String[] args)

    {

        try

        {

            int number = 10 / 0;

            System.out.println(number);

        }


        catch(ArithmeticException e)

        {

            System.out.println("Arithmetic Error Occurred");

        }


        System.out.println("Program Completed");

    }

}



Output:


Arithmetic Error Occurred

Program Completed



Explanation:


The exception is handled, so the program continues.



# Exception Handling in Real Applications



## Banking Application


Transaction Processing

↓

Database Failure

↓

SQLException

↓

Handle Error

↓

Notify User



## E-Commerce Application


Payment Processing

↓

Payment Failure

↓

Exception Handling

↓

Retry Payment



## Student Management System


Student Data

↓

Invalid Input

↓

Validation Exception

↓

Display Message



# Advantages of Exception Handling



## Prevents Program Termination


Applications do not crash unexpectedly.



## Improves Reliability


Programs handle failures safely.



## Separates Error Handling


Normal logic and error logic remain separate.



## Easier Debugging


Errors become easier to identify.



## Better User Experience


Users receive meaningful messages.



# Common Mistakes



## Ignoring Exceptions


Ignoring errors can create unstable applications.



## Using Empty Catch Blocks


Example:


catch(Exception e)

{

}



This hides problems.



## Catching Too General Exceptions


Using Exception everywhere reduces clarity.



# Best Practices


Follow these practices:


- Handle exceptions properly.
- Use meaningful error messages.
- Catch specific exceptions.
- Do not ignore exceptions.
- Use finally for cleanup operations.
- Log important exceptions.



# Interview Points


Important questions:



## What is an exception?


An unexpected event that interrupts normal program execution.



## Why is exception handling needed?


To handle runtime problems safely.



## Which class is the root of exception hierarchy?


Throwable.



## Difference between Exception and Error?


Exceptions can usually be handled; Errors are serious system problems.



# Key Points


Remember:


- Exceptions occur during runtime.
- JVM creates exception objects.
- Exception handling prevents program crashes.
- try contains risky code.
- catch handles exceptions.
- finally performs cleanup.
- throw creates exceptions manually.
- throws declares exceptions.



# Summary


Exception Handling is a powerful Java feature that allows programs to handle unexpected situations gracefully.


Instead of stopping execution when a problem occurs, Java provides mechanisms to detect, handle, and recover from exceptions.



Understanding exceptions is essential for building reliable professional Java applications.

`

};


export default lesson1;