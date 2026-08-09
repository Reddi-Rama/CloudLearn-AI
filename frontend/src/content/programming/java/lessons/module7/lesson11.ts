const lesson11 = {

  id: "lesson11",

  title: "Checked vs Unchecked Exceptions in Java",

  content: `

# Checked vs Unchecked Exceptions in Java


## Introduction


Java exceptions are mainly divided into two categories:



1. Checked Exceptions


2. Unchecked Exceptions



The main difference between them is:



Checked Exceptions:


Checked by the compiler.



Unchecked Exceptions:


Checked during runtime by the JVM.



Understanding this difference is important for writing reliable Java applications.



# Exception Classification


Java exception hierarchy:



Throwable

|

|----------------|

|                |

Error          Exception

                 |

                 |

          RuntimeException



From Exception:


- Checked Exceptions.
- Unchecked Exceptions.



# Checked Exceptions


## Definition


Checked exceptions are exceptions checked by the Java compiler during compilation.



The programmer must handle them using:


- try-catch


or


- throws



If not handled, the program will not compile.



# Examples of Checked Exceptions



## IOException


Occurs during input and output operations.



Examples:


- Reading files.
- Writing files.



## SQLException


Occurs during database operations.



Examples:


- Database connection failure.
- SQL query failure.



## FileNotFoundException


Occurs when a file cannot be found.



## ClassNotFoundException


Occurs when a required class is unavailable.



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

            System.out.println("File error");

        }

    }

}



Output:


File error



Explanation:


The compiler requires IOException handling.



# Why Are Checked Exceptions Required?


Checked exceptions represent problems that can happen due to external conditions.



Examples:


File missing.



Database unavailable.



Network disconnected.



The programmer can take recovery actions.



# Handling Checked Exceptions


Two ways:



## 1. Using try-catch



Example:


try

{

    readFile();

}


catch(IOException e)

{

}



## 2. Using throws



Example:


void readFile() throws IOException

{

}



# Unchecked Exceptions


## Definition


Unchecked exceptions are exceptions that occur during program execution.



The compiler does not force handling them.



They are subclasses of:


RuntimeException



# Examples of Unchecked Exceptions



## ArithmeticException


Occurs during invalid arithmetic operations.



Example:


int result = 10 / 0;



## NullPointerException


Occurs when accessing a null reference.



Example:


String name = null;


name.length();



## ArrayIndexOutOfBoundsException


Occurs when accessing invalid array positions.



Example:


int arr[] = new int[5];


arr[10];



## NumberFormatException


Occurs during invalid number conversion.



Example:


Integer.parseInt("abc");



# Unchecked Exception Example


class Main

{

    public static void main(String[] args)

    {

        int result = 10 / 0;


        System.out.println(result);

    }

}



Output:


ArithmeticException



Explanation:


The exception occurs at runtime.



# Why Are Unchecked Exceptions Not Required to Handle?


Unchecked exceptions usually indicate programming mistakes.



Examples:


- Incorrect logic.
- Invalid object usage.
- Wrong indexing.



The developer should fix the code instead of forcing exception handling.



# Difference Between Checked and Unchecked Exceptions



## Checked Exceptions



Checked by:


Compiler



Occurs:


Compile time requirement.



Handling:


Mandatory.



Parent:


Exception



Examples:


IOException


SQLException



Purpose:


Handle external problems.



---



## Unchecked Exceptions



Checked by:


JVM at runtime.



Occurs:


During execution.



Handling:


Optional.



Parent:


RuntimeException



Examples:


ArithmeticException


NullPointerException



Purpose:


Indicate programming mistakes.



# Checked vs Unchecked Example


## File Handling


Problem:


File does not exist.



Type:


Checked Exception



Reason:


External condition.



---



## Division by Zero


Problem:


Invalid calculation.



Type:


Unchecked Exception



Reason:


Programming mistake.



# Real-World Example: Banking System


## Checked Exception


Database connection failure:



SQLException



Handling:


Retry connection.



## Unchecked Exception


Invalid withdrawal calculation:



ArithmeticException



Handling:


Fix program logic.



# Real-World Example: E-Commerce System


## Checked Exception


Payment gateway connection failure:



IOException



## Unchecked Exception


Invalid product reference:



NullPointerException



# Real-World Example: Student Management System


## Checked Exception


Student data file missing:



FileNotFoundException



## Unchecked Exception


Invalid marks calculation:



ArithmeticException



# Custom Checked Exception


Created by extending:


Exception



Example:


class InvalidMarksException extends Exception

{

}



Usage:


throw new InvalidMarksException();



# Custom Unchecked Exception


Created by extending:


RuntimeException



Example:


class InvalidInputException extends RuntimeException

{

}



# When Should We Use Checked Exceptions?


Use checked exceptions when:



- The caller can recover.
- External resources are involved.
- Failure is expected.



Examples:


- File operations.
- Database operations.
- Network communication.



# When Should We Use Unchecked Exceptions?


Use unchecked exceptions when:



- The problem is a programming mistake.
- Recovery is not meaningful.



Examples:


- Invalid arguments.
- Null values.
- Logic errors.



# Advantages of Checked Exceptions



## Better Error Awareness


Developers know possible failures.



## Safer Applications


External problems are handled.



## Improved Reliability


Unexpected situations are managed.



# Advantages of Unchecked Exceptions



## Cleaner Code


Less mandatory exception handling.



## Better for Programming Errors


Mistakes are identified during execution.



## Flexible Development


Developers decide handling strategy.



# Common Mistakes



## Using Checked Exceptions Everywhere


Creates unnecessary code.



## Ignoring Unchecked Exceptions


Can cause application crashes.



## Catching RuntimeException Generally


Hides real programming problems.



# Best Practices


Follow these practices:


- Use checked exceptions for recoverable problems.
- Use unchecked exceptions for programming errors.
- Do not catch exceptions unnecessarily.
- Create meaningful custom exceptions.
- Document possible exceptions.



# Interview Questions



## What is a checked exception?


An exception checked by compiler.



## What is an unchecked exception?


An exception that occurs during runtime.



## Parent class of unchecked exceptions?


RuntimeException.



## Can unchecked exceptions be handled?


Yes, but not mandatory.



## Which exceptions require throws?


Checked exceptions.



# Key Points


Remember:


- Checked exceptions are compiler checked.
- Unchecked exceptions occur at runtime.
- Checked exceptions extend Exception.
- Unchecked exceptions extend RuntimeException.
- External failures are usually checked exceptions.
- Programming mistakes are usually unchecked exceptions.



# Summary


Checked and unchecked exceptions represent two different approaches to error handling in Java.


Checked exceptions help manage predictable external problems, while unchecked exceptions identify programming errors that should usually be corrected in the code.


Understanding the difference helps developers design cleaner and more reliable applications.

`

};


export default lesson11;